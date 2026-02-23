'use client';

import { useState, useEffect, useMemo } from 'react';
import { BarChart3, Trophy, Target, Flame, TrendingUp, Clock, Brain, Bone, Wind, Bean, Scan, Dumbbell, Utensils, Heart, Star, Zap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizResult {
    date: string;
    organ: string;
    correct: boolean;
    pathologyId: string;
}

interface LearningProgress {
    quizResults: QuizResult[];
    viewedPathologies: string[];
    favoritedPathologies: string[];
    totalQuizzes: number;
    streak: number;
    lastActiveDate: string;
    badges: string[];
}

const STORAGE_KEY = 'radassist-learning-stats';

const DEFAULT_STATS: LearningProgress = {
    quizResults: [],
    viewedPathologies: [],
    favoritedPathologies: [],
    totalQuizzes: 0,
    streak: 0,
    lastActiveDate: '',
    badges: [],
};

// Badge definitions
const BADGE_DEFINITIONS = [
    { id: 'first_quiz', label: 'İlk Adım', description: 'İlk quiz\'i tamamla', icon: <Star className="w-5 h-5" />, condition: (s: LearningProgress) => s.totalQuizzes >= 1 },
    { id: 'quiz_10', label: 'Çaylak', description: '10 quiz tamamla', icon: <Target className="w-5 h-5" />, condition: (s: LearningProgress) => s.totalQuizzes >= 10 },
    { id: 'quiz_50', label: 'Uzman Adayı', description: '50 quiz tamamla', icon: <Award className="w-5 h-5" />, condition: (s: LearningProgress) => s.totalQuizzes >= 50 },
    { id: 'quiz_100', label: 'Radyoloji Ustası', description: '100 quiz tamamla', icon: <Trophy className="w-5 h-5" />, condition: (s: LearningProgress) => s.totalQuizzes >= 100 },
    { id: 'streak_3', label: 'Tutarlı', description: '3 gün üst üste çalış', icon: <Flame className="w-5 h-5" />, condition: (s: LearningProgress) => s.streak >= 3 },
    { id: 'streak_7', label: 'Haftalık Maratoncı', description: '7 gün üst üste çalış', icon: <Zap className="w-5 h-5" />, condition: (s: LearningProgress) => s.streak >= 7 },
    { id: 'accuracy_80', label: 'Keskin Göz', description: '%80+ doğruluk oranı (min 10 quiz)', icon: <Target className="w-5 h-5" />, condition: (s: LearningProgress) => {
        if (s.totalQuizzes < 10) return false;
        const correct = s.quizResults.filter(r => r.correct).length;
        return (correct / s.quizResults.length) >= 0.8;
    }},
    { id: 'all_organs', label: 'Çok Yönlü', description: 'Her organdan en az 1 quiz çöz', icon: <TrendingUp className="w-5 h-5" />, condition: (s: LearningProgress) => {
        const organs = new Set(s.quizResults.map(r => r.organ));
        return organs.size >= 5;
    }},
];

const organIcons: Record<string, React.ReactNode> = {
    'brain': <Brain className="w-4 h-4" />,
    'spine': <Bone className="w-4 h-4" />,
    'liver': <Flame className="w-4 h-4" />,
    'kidney': <Bean className="w-4 h-4" />,
    'lung': <Wind className="w-4 h-4" />,
    'breast': <Scan className="w-4 h-4" />,
    'msk': <Dumbbell className="w-4 h-4" />,
    'gi': <Utensils className="w-4 h-4" />,
    'gyn': <Heart className="w-4 h-4" />,
};

const organLabels: Record<string, string> = {
    'brain': 'Beyin', 'spine': 'Omurga', 'liver': 'Karaciğer', 'kidney': 'Böbrek',
    'lung': 'Akciğer', 'breast': 'Meme', 'msk': 'MSK', 'gi': 'GIS', 'gyn': 'Jinekoloji',
};

export function LearningStats() {
    const [stats, setStats] = useState<LearningProgress>(DEFAULT_STATS);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setStats(JSON.parse(stored));
            }
        } catch { /* ignore */ }
    }, []);

    // Calculate derived stats
    const accuracy = useMemo(() => {
        if (stats.quizResults.length === 0) return 0;
        const correct = stats.quizResults.filter(r => r.correct).length;
        return Math.round((correct / stats.quizResults.length) * 100);
    }, [stats]);

    const organBreakdown = useMemo(() => {
        const breakdown: Record<string, { total: number; correct: number }> = {};
        stats.quizResults.forEach(r => {
            if (!breakdown[r.organ]) breakdown[r.organ] = { total: 0, correct: 0 };
            breakdown[r.organ].total++;
            if (r.correct) breakdown[r.organ].correct++;
        });
        return Object.entries(breakdown)
            .sort(([, a], [, b]) => b.total - a.total);
    }, [stats]);

    const weakestOrgan = useMemo(() => {
        if (organBreakdown.length === 0) return null;
        const withAccuracy = organBreakdown.map(([organ, data]) => ({
            organ,
            accuracy: data.total > 0 ? (data.correct / data.total) * 100 : 0,
            total: data.total,
        })).filter(o => o.total >= 3); // Minimum 3 quiz to be considered
        if (withAccuracy.length === 0) return null;
        return withAccuracy.sort((a, b) => a.accuracy - b.accuracy)[0];
    }, [organBreakdown]);

    const earnedBadges = useMemo(() => {
        return BADGE_DEFINITIONS.filter(b => b.condition(stats));
    }, [stats]);

    // Weekly activity (last 7 days)
    const weeklyActivity = useMemo(() => {
        const days: { date: string; count: number; label: string }[] = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
            days.push({
                date: dateStr,
                count: stats.quizResults.filter(r => r.date.startsWith(dateStr)).length,
                label: dayNames[d.getDay()],
            });
        }
        return days;
    }, [stats]);

    const maxWeekly = Math.max(...weeklyActivity.map(d => d.count), 1);

    // Helper to add demo data for testing
    const addDemoData = () => {
        const organs = ['brain', 'spine', 'liver', 'kidney', 'lung', 'breast', 'msk', 'gi', 'gyn'];
        const newResults: QuizResult[] = [];
        for (let i = 0; i < 30; i++) {
            const d = new Date();
            d.setDate(d.getDate() - Math.floor(Math.random() * 14));
            newResults.push({
                date: d.toISOString(),
                organ: organs[Math.floor(Math.random() * organs.length)],
                correct: Math.random() > 0.35,
                pathologyId: `demo_${i}`,
            });
        }
        const newStats: LearningProgress = {
            ...stats,
            quizResults: [...stats.quizResults, ...newResults],
            totalQuizzes: stats.totalQuizzes + 30,
            streak: 5,
            lastActiveDate: new Date().toISOString().split('T')[0],
        };
        setStats(newStats);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    };

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                        <BarChart3 className="w-7 h-7 text-violet-400" />
                        Kişisel İstatistikler
                    </h2>
                    <p className="text-sm text-zinc-400 mt-1">Öğrenme ilerlemenizi takip edin ve zayıf alanlarınızı keşfedin.</p>
                </div>
                {stats.totalQuizzes === 0 && (
                    <button
                        onClick={addDemoData}
                        className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs hover:bg-violet-500/20 transition-colors"
                    >
                        Demo Veri Yükle
                    </button>
                )}
            </div>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center">
                    <Trophy className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                    <p className="text-2xl font-black text-white">{stats.totalQuizzes}</p>
                    <p className="text-xs text-zinc-500">Toplam Quiz</p>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center">
                    <Target className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <p className="text-2xl font-black text-white">%{accuracy}</p>
                    <p className="text-xs text-zinc-500">Doğruluk Oranı</p>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center">
                    <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <p className="text-2xl font-black text-white">{stats.streak}</p>
                    <p className="text-xs text-zinc-500">Gün Serisi</p>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center">
                    <Award className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                    <p className="text-2xl font-black text-white">{earnedBadges.length}/{BADGE_DEFINITIONS.length}</p>
                    <p className="text-xs text-zinc-500">Rozetler</p>
                </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 mb-6">
                <h3 className="text-sm font-bold text-zinc-300 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-zinc-500" />
                    Haftalık Aktivite
                </h3>
                <div className="flex items-end gap-2 h-24">
                    {weeklyActivity.map(day => (
                        <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full relative" style={{ height: '80px' }}>
                                <div
                                    className={cn(
                                        "absolute bottom-0 w-full rounded-t-md transition-all",
                                        day.count > 0 ? "bg-gradient-to-t from-violet-600 to-violet-400" : "bg-zinc-800"
                                    )}
                                    style={{ height: `${Math.max((day.count / maxWeekly) * 100, 8)}%` }}
                                />
                            </div>
                            <span className="text-[10px] text-zinc-500">{day.label}</span>
                            {day.count > 0 && (
                                <span className="text-[10px] text-violet-400 font-bold">{day.count}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Organ Breakdown */}
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-zinc-300 mb-3">Organ Bazında Performans</h3>
                    {organBreakdown.length === 0 ? (
                        <p className="text-xs text-zinc-500 text-center py-8">Henüz quiz çözülmedi. Quiz modunu deneyin!</p>
                    ) : (
                        <div className="space-y-3">
                            {organBreakdown.map(([organ, data]) => {
                                const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                                return (
                                    <div key={organ} className="flex items-center gap-3">
                                        <span className="text-zinc-500">{organIcons[organ]}</span>
                                        <span className="text-xs text-zinc-300 w-20">{organLabels[organ] || organ}</span>
                                        <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                className={cn(
                                                    "h-full rounded-full transition-all",
                                                    acc >= 80 ? "bg-emerald-500" : acc >= 50 ? "bg-amber-500" : "bg-red-500"
                                                )}
                                                style={{ width: `${acc}%` }}
                                            />
                                        </div>
                                        <span className={cn(
                                            "text-xs font-bold w-12 text-right",
                                            acc >= 80 ? "text-emerald-400" : acc >= 50 ? "text-amber-400" : "text-red-400"
                                        )}>
                                            %{acc}
                                        </span>
                                        <span className="text-[10px] text-zinc-500">({data.total})</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Weakness Recommendation */}
                    {weakestOrgan && (
                        <div className="mt-4 p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                            <p className="text-xs text-amber-300 font-bold flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                Odaklanma Önerisi
                            </p>
                            <p className="text-xs text-zinc-400 mt-1">
                                <span className="text-amber-200 font-bold">{organLabels[weakestOrgan.organ]}</span> alanında
                                doğruluk oranınız %{Math.round(weakestOrgan.accuracy)}. Bu hafta bu alana odaklanmanızı öneriyoruz.
                            </p>
                        </div>
                    )}
                </div>

                {/* Badges */}
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-zinc-300 mb-3">Rozetler & Başarılar</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {BADGE_DEFINITIONS.map(badge => {
                            const earned = earnedBadges.some(b => b.id === badge.id);
                            return (
                                <div
                                    key={badge.id}
                                    className={cn(
                                        "p-3 rounded-lg border transition-all",
                                        earned
                                            ? "bg-violet-500/10 border-violet-500/30"
                                            : "bg-zinc-800/30 border-zinc-700/30 opacity-40"
                                    )}
                                >
                                    <div className={cn(
                                        "mb-1",
                                        earned ? "text-violet-400" : "text-zinc-600"
                                    )}>
                                        {badge.icon}
                                    </div>
                                    <p className={cn(
                                        "text-xs font-bold",
                                        earned ? "text-zinc-200" : "text-zinc-600"
                                    )}>
                                        {badge.label}
                                    </p>
                                    <p className="text-[10px] text-zinc-500">{badge.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export utility to record quiz results from QuizMode
export function recordQuizResult(organ: string, correct: boolean, pathologyId: string) {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        const stats: LearningProgress = stored ? JSON.parse(stored) : DEFAULT_STATS;

        const today = new Date().toISOString().split('T')[0];

        // Update streak
        if (stats.lastActiveDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];
            stats.streak = stats.lastActiveDate === yesterdayStr ? stats.streak + 1 : 1;
            stats.lastActiveDate = today;
        }

        stats.quizResults.push({
            date: new Date().toISOString(),
            organ,
            correct,
            pathologyId,
        });
        stats.totalQuizzes++;

        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch { /* ignore */ }
}
