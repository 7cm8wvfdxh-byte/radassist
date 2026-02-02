"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { brainPathologies } from "@/data/brain-pathologies"; // Corrected path
import { CheckCircle2, XCircle, RefreshCcw, Trophy, Brain, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface QuizQuestion {
    pathology: Pathology;
    image: { url: string; caption: string; modality: string };
    options: Pathology[]; // 1 Correct + 3 Distractors
}

export function QuizMode() {
    const { t } = useLanguage();
    const [question, setQuestion] = useState<QuizQuestion | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Initial Question Generation
    useEffect(() => {
        generateQuestion();
    }, []);

    const generateQuestion = () => {
        // 1. Filter pathologies that have images
        const validPathologies = brainPathologies.filter(p => p.gallery && p.gallery.length > 0);

        if (validPathologies.length < 4) return; // Not enough data

        // 2. Pick Random Correct Pathology
        const correctPathology = validPathologies[Math.floor(Math.random() * validPathologies.length)];

        // 3. Pick Random Image from that Pathology
        const randomImageIndex = Math.floor(Math.random() * (correctPathology.gallery?.length || 0));
        const randomImage = correctPathology.gallery![randomImageIndex];

        // 4. Pick 3 Distractors (Try to match category if possible for difficulty, or just random)
        // Let's make it smarter later. For now, random but unique.
        const distractors: Pathology[] = [];
        while (distractors.length < 3) {
            const randomP = brainPathologies[Math.floor(Math.random() * brainPathologies.length)];
            if (randomP.id !== correctPathology.id && !distractors.find(d => d.id === randomP.id)) {
                distractors.push(randomP);
            }
        }

        // 5. Shuffle Options
        const options = [...distractors, correctPathology].sort(() => Math.random() - 0.5);

        setQuestion({
            pathology: correctPathology,
            image: randomImage,
            options
        });
        setSelectedAnswer(null);
        setShowResult(false);
    };

    const handleAnswer = (pathologyId: string) => {
        if (selectedAnswer || !question) return; // Prevent double click

        setSelectedAnswer(pathologyId);
        setShowResult(true);

        if (pathologyId === question.pathology.id) {
            // Correct
            setScore(s => s + 10);
            setStreak(s => s + 1);
            // Trigger confetti or sound here later
        } else {
            // Wrong
            setStreak(0);
        }
    };

    if (!question) return <div className="text-white">{t("quiz.loading")}</div>;

    const isCorrect = selectedAnswer === question.pathology.id;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center animate-in fade-in zoom-in duration-500">

            {/* Header / Scoreboard */}
            <div className="w-full flex justify-between items-center mb-6 px-4">
                <div className="flex items-center gap-2">
                    <div className="bg-indigo-500/20 p-2 rounded-lg border border-indigo-500/30">
                        <Trophy className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">{t("quiz.score")}</div>
                        <div className="text-2xl font-black text-white">{score}</div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="text-right">
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">{t("quiz.streak")}</div>
                        <div className="text-xl font-bold text-emerald-400">x{streak} 🔥</div>
                    </div>
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden w-full shadow-2xl relative">

                {/* Image Section */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black group overflow-hidden">
                    <Image
                        src={question.image.url}
                        alt="Quiz Image"
                        fill
                        className="object-contain transition-transform duration-700 hover:scale-110"
                    />

                    {/* Modality Hint Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
                        {question.image.modality}
                    </div>
                </div>

                {/* Content / Options Section */}
                <div className="p-6 md:p-8">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-8">
                        {t("quiz.question")}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {question.options.map((option) => {
                            const isSelected = selectedAnswer === option.id;
                            const isActualCorrect = option.id === question.pathology.id;

                            // Determine Button Style
                            let buttonStyle = "bg-slate-800/50 border-slate-700 hover:bg-slate-700 hover:border-slate-600"; // Default

                            if (showResult) {
                                if (isActualCorrect) {
                                    buttonStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-400 ring-2 ring-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)]";
                                } else if (isSelected && !isActualCorrect) {
                                    buttonStyle = "bg-red-500/20 border-red-500 text-red-400";
                                } else {
                                    buttonStyle = "opacity-50 grayscale"; // Dim others
                                }
                            }

                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleAnswer(option.id)}
                                    disabled={showResult}
                                    className={cn(
                                        "relative p-4 rounded-2xl border-2 text-left transition-all duration-300 flex items-center justify-between group",
                                        buttonStyle,
                                        !showResult && "hover:scale-[1.02] hover:shadow-lg"
                                    )}
                                >
                                    <span className={cn("font-semibold text-lg", showResult && isActualCorrect ? "text-emerald-300" : "text-slate-200")}>
                                        {option.name}
                                    </span>

                                    {showResult && isActualCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                                    {showResult && isSelected && !isActualCorrect && <XCircle className="w-6 h-6 text-red-400" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Result Feedback / Next Button */}
                    {showResult && (
                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className={cn(
                                "p-4 rounded-xl border mb-6 flex items-start gap-4",
                                isCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"
                            )}>
                                <div className="p-2 bg-white/10 rounded-full shrink-0">
                                    <Brain className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className={cn("font-bold mb-1", isCorrect ? "text-emerald-400" : "text-red-400")}>
                                        {isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
                                    </h3>
                                    <p className="text-slate-300 text-sm">
                                        <span className="font-semibold text-white">{question.pathology.name}:</span> {question.pathology.keyPoints[0]}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={generateQuestion}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>{t("quiz.next")}</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
