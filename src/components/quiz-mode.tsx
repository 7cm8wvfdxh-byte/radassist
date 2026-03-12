"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { Pathology } from "@/types";
import { useLanguage } from "@/context/language-context";
import {
    Brain, CheckCircle, XCircle, RotateCw, Trophy, Target,
    ChevronRight, Zap, BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizModeProps {
    pathologies: Pathology[];
}

interface QuizQuestion {
    pathology: Pathology;
    type: "identify" | "mechanism" | "finding" | "ddx";
    question: string;
    options: string[];
    correctIndex: number;
}

interface QuizStats {
    correct: number;
    total: number;
    streak: number;
    bestStreak: number;
}

const STORAGE_KEY = "radassist-quiz-stats";

function loadStats(): QuizStats {
    if (typeof window === "undefined") return { correct: 0, total: 0, streak: 0, bestStreak: 0 };
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : { correct: 0, total: 0, streak: 0, bestStreak: 0 };
    } catch {
        return { correct: 0, total: 0, streak: 0, bestStreak: 0 };
    }
}

function generateQuestion(pathologies: Pathology[], lang: "tr" | "en"): QuizQuestion | null {
    if (pathologies.length < 4) return null;
    const isEn = lang === "en";

    // Pick random pathology
    const idx = Math.floor(Math.random() * pathologies.length);
    const target = pathologies[idx];
    const targetName = isEn ? (target.nameEn || target.name) : target.name;

    // Generate wrong options (3 random different pathologies)
    const wrongIndices = new Set<number>();
    while (wrongIndices.size < 3) {
        const ri = Math.floor(Math.random() * pathologies.length);
        if (ri !== idx) wrongIndices.add(ri);
    }
    const wrongNames = Array.from(wrongIndices).map(i => {
        const p = pathologies[i];
        return isEn ? (p.nameEn || p.name) : p.name;
    });

    // Choose question type randomly
    const types: QuizQuestion["type"][] = ["identify", "mechanism", "finding", "ddx"];
    const type = types[Math.floor(Math.random() * types.length)];

    let question = "";
    let options: string[] = [];
    let correctIndex = 0;

    const keyPoints = isEn ? (target.keyPointsEn || target.keyPoints) : target.keyPoints;
    const mechanism = isEn ? (target.mechanismEn || target.mechanism) : target.mechanism;
    const clinicalPearl = isEn ? (target.clinicalPearlEn || target.clinicalPearl) : target.clinicalPearl;

    switch (type) {
        case "identify":
            question = keyPoints.length > 0
                ? (isEn
                    ? `Which pathology matches this key finding?\n"${keyPoints[0]}"`
                    : `Şu anahtar bulguya uyan patoloji hangisidir?\n"${keyPoints[0]}"`)
                : (isEn ? `Which pathology is in the "${target.category}" category?` : `"${target.category}" kategorisindeki patoloji hangisidir?`);
            options = [targetName, ...wrongNames].sort(() => Math.random() - 0.5);
            correctIndex = options.indexOf(targetName);
            break;

        case "mechanism":
            if (!mechanism) return generateQuestion(pathologies, lang);
            question = isEn
                ? `Which pathology has this mechanism?\n"${mechanism.slice(0, 120)}..."`
                : `Şu mekanizmaya sahip patoloji hangisidir?\n"${mechanism.slice(0, 120)}..."`;
            options = [targetName, ...wrongNames].sort(() => Math.random() - 0.5);
            correctIndex = options.indexOf(targetName);
            break;

        case "finding":
            if (!target.findings) return generateQuestion(pathologies, lang);
            const modalities = Object.keys(target.findings);
            if (modalities.length === 0) return generateQuestion(pathologies, lang);
            const mod = modalities[0];
            const findingsObj = (target.findings as Record<string, Record<string, string>>)[mod];
            if (!findingsObj) return generateQuestion(pathologies, lang);
            const findingKeys = Object.keys(findingsObj);
            if (findingKeys.length === 0) return generateQuestion(pathologies, lang);
            const findingText = findingsObj[findingKeys[0]];
            question = isEn
                ? `Which pathology shows this ${mod.toUpperCase()} finding?\n"${(findingText || '').slice(0, 100)}..."`
                : `Şu ${mod.toUpperCase()} bulgusunu gösteren patoloji hangisidir?\n"${(findingText || '').slice(0, 100)}..."`;
            options = [targetName, ...wrongNames].sort(() => Math.random() - 0.5);
            correctIndex = options.indexOf(targetName);
            break;

        case "ddx":
            if (!clinicalPearl) return generateQuestion(pathologies, lang);
            question = isEn
                ? `Which pathology has this clinical pearl?\n"${clinicalPearl.slice(0, 120)}..."`
                : `Şu klinik ipucuna sahip patoloji hangisidir?\n"${clinicalPearl.slice(0, 120)}..."`;
            options = [targetName, ...wrongNames].sort(() => Math.random() - 0.5);
            correctIndex = options.indexOf(targetName);
            break;
    }

    return { pathology: target, type, question, options, correctIndex };
}

export function QuizMode({ pathologies }: QuizModeProps) {
    const { language, t } = useLanguage();
    const isEn = language === "en";
    const [stats, setStats] = useState<QuizStats>(loadStats);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    const nextQuestion = useCallback(() => {
        setSelectedAnswer(null);
        setShowResult(false);
        setCurrentQuestion(generateQuestion(pathologies, language));
    }, [pathologies, language]);

    const startQuiz = useCallback(() => {
        setQuizStarted(true);
        setStats(loadStats());
        nextQuestion();
    }, [nextQuestion]);

    const handleAnswer = useCallback((index: number) => {
        if (showResult || selectedAnswer !== null) return;
        setSelectedAnswer(index);
        setShowResult(true);

        const isCorrect = index === currentQuestion?.correctIndex;
        setStats(prev => {
            const newStats: QuizStats = {
                correct: prev.correct + (isCorrect ? 1 : 0),
                total: prev.total + 1,
                streak: isCorrect ? prev.streak + 1 : 0,
                bestStreak: isCorrect ? Math.max(prev.bestStreak, prev.streak + 1) : prev.bestStreak,
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
            return newStats;
        });
    }, [showResult, selectedAnswer, currentQuestion]);

    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

    // Welcome screen
    if (!quizStarted) {
        return (
            <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 p-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                    <Brain className="w-12 h-12 text-amber-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {isEn ? "Quiz Mode" : "Sınav Modu"}
                    </h2>
                    <p className="text-zinc-400 max-w-md">
                        {isEn
                            ? "Test your radiology knowledge! Questions are generated from all pathology data across 9 organ systems."
                            : "Radyoloji bilginizi test edin! Sorular 9 organ sistemindeki tüm patoloji verisinden üretilir."}
                    </p>
                </div>

                {/* Stats */}
                {stats.total > 0 && (
                    <div className="flex gap-4 flex-wrap justify-center">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <BarChart3 className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-zinc-300">{stats.total} {isEn ? "answered" : "cevap"}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <Target className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-zinc-300">%{accuracy} {isEn ? "accuracy" : "doğruluk"}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <Zap className="w-4 h-4 text-amber-400" />
                            <span className="text-sm text-zinc-300">{stats.bestStreak} {isEn ? "best streak" : "en iyi seri"}</span>
                        </div>
                    </div>
                )}

                <button
                    onClick={startQuiz}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:from-amber-500 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                >
                    {stats.total > 0 ? (isEn ? "Continue Quiz" : "Sınava Devam Et") : (isEn ? "Start Quiz" : "Sınava Başla")}
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        );
    }

    if (!currentQuestion) {
        return (
            <div className="flex items-center justify-center h-64 text-zinc-400">
                {isEn ? "Not enough pathologies for quiz" : "Sınav için yeterli patoloji yok"}
            </div>
        );
    }

    const isCorrect = selectedAnswer === currentQuestion.correctIndex;

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-6">
            {/* Header Stats Bar */}
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 text-sm">
                    <span className="text-zinc-400">
                        #{stats.total + (showResult ? 0 : 1)}
                    </span>
                    <span className="text-green-400 font-semibold">{stats.correct} ✓</span>
                    <span className="text-red-400 font-semibold">{stats.total - stats.correct} ✗</span>
                </div>
                <div className="flex items-center gap-2">
                    {stats.streak > 0 && (
                        <span className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                            <Zap className="w-3.5 h-3.5" /> {stats.streak}
                        </span>
                    )}
                    <span className="text-zinc-500 text-sm">%{accuracy}</span>
                </div>
            </div>

            {/* Question */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-white/10 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                    <span className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                        currentQuestion.type === "identify" ? "bg-blue-500/15 text-blue-400" :
                        currentQuestion.type === "mechanism" ? "bg-purple-500/15 text-purple-400" :
                        currentQuestion.type === "finding" ? "bg-green-500/15 text-green-400" :
                        "bg-amber-500/15 text-amber-400"
                    )}>
                        {currentQuestion.type === "identify" ? (isEn ? "Identify" : "Tanı") :
                         currentQuestion.type === "mechanism" ? (isEn ? "Mechanism" : "Mekanizma") :
                         currentQuestion.type === "finding" ? (isEn ? "Finding" : "Bulgu") :
                         (isEn ? "Clinical" : "Klinik")}
                    </span>
                </div>
                <p className="text-white text-lg font-medium whitespace-pre-line leading-relaxed">
                    {currentQuestion.question}
                </p>
            </div>

            {/* Options */}
            <div className="space-y-3" role="radiogroup" aria-label={isEn ? "Answer options" : "Cevap seçenekleri"}>
                {currentQuestion.options.map((option, i) => {
                    const isSelected = selectedAnswer === i;
                    const isCorrectOption = i === currentQuestion.correctIndex;

                    let borderClass = "border-white/10 hover:border-white/20";
                    let bgClass = "bg-white/5 hover:bg-white/10";
                    if (showResult) {
                        if (isCorrectOption) {
                            borderClass = "border-green-500/50";
                            bgClass = "bg-green-500/10";
                        } else if (isSelected && !isCorrectOption) {
                            borderClass = "border-red-500/50";
                            bgClass = "bg-red-500/10";
                        } else {
                            borderClass = "border-white/5";
                            bgClass = "bg-white/[0.02]";
                        }
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => handleAnswer(i)}
                            disabled={showResult}
                            role="radio"
                            aria-checked={isSelected}
                            className={cn(
                                "w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center gap-3 min-h-[52px]",
                                bgClass, borderClass,
                                showResult && "cursor-default"
                            )}
                        >
                            <span className={cn(
                                "w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0",
                                showResult && isCorrectOption ? "border-green-500 text-green-400" :
                                showResult && isSelected ? "border-red-500 text-red-400" :
                                "border-zinc-600 text-zinc-500"
                            )}>
                                {showResult && isCorrectOption ? <CheckCircle className="w-4 h-4" /> :
                                 showResult && isSelected ? <XCircle className="w-4 h-4" /> :
                                 String.fromCharCode(65 + i)}
                            </span>
                            <span className={cn(
                                "text-sm font-medium",
                                showResult && isCorrectOption ? "text-green-300" :
                                showResult && isSelected ? "text-red-300" :
                                "text-zinc-200"
                            )}>
                                {option}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Result + Next */}
            {showResult && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className={cn(
                        "p-4 rounded-xl border flex items-start gap-3",
                        isCorrect ? "bg-green-500/5 border-green-500/20" : "bg-red-500/5 border-red-500/20"
                    )}>
                        {isCorrect ? (
                            <Trophy className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        ) : (
                            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        )}
                        <div>
                            <p className={cn("font-semibold text-sm", isCorrect ? "text-green-300" : "text-red-300")}>
                                {isCorrect ? (isEn ? "Correct!" : "Doğru!") : (isEn ? "Incorrect" : "Yanlış")}
                            </p>
                            {!isCorrect && (
                                <p className="text-zinc-400 text-xs mt-1">
                                    {isEn ? "Correct answer:" : "Doğru cevap:"}{" "}
                                    <span className="text-green-400 font-medium">{currentQuestion.options[currentQuestion.correctIndex]}</span>
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={nextQuestion}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:from-indigo-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
                    >
                        <RotateCw className="w-4 h-4" />
                        {isEn ? "Next Question" : "Sonraki Soru"}
                    </button>
                </div>
            )}
        </div>
    );
}
