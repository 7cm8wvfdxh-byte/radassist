"use client";

import { useState } from "react";
import Image from "next/image";

import { CheckCircle2, XCircle, ArrowRight, Activity, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

// Temporary mock import workaround if data file export name differs
import { caseStudies } from "@/data/case-studies";

export function CaseStudyMode() {
    const [activeCaseIndex] = useState(0);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isStepCompleted, setIsStepCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [showFinalSummary, setShowFinalSummary] = useState(false);

    const activeCase = caseStudies[activeCaseIndex];
    const currentStep = activeCase.steps[currentStepIndex];
    const totalSteps = activeCase.steps.length;

    const handleOptionSelect = (index: number) => {
        if (isStepCompleted) return;
        setSelectedOption(index);
        setIsStepCompleted(true);

        if (index === currentStep.correctOptionIndex) {
            setScore(s => s + 10);
        }
    };

    const nextStep = () => {
        if (currentStepIndex < totalSteps - 1) {
            setCurrentStepIndex(prev => prev + 1);
            setIsStepCompleted(false);
            setSelectedOption(null);
        } else {
            setShowFinalSummary(true);
        }
    };

    const restartCase = () => {
        setCurrentStepIndex(0);
        setSelectedOption(null);
        setIsStepCompleted(false);
        setScore(0);
        setShowFinalSummary(false);
    };

    if (!activeCase) return <div className="text-white text-center mt-20">Vaka bulunamadı.</div>;

    if (showFinalSummary) {
        return (
            <div className="w-full max-w-4xl mx-auto animate-in fade-in zoom-in duration-500">
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-emerald-500" />

                    <div className="mb-8">
                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <Activity className="w-10 h-10 text-emerald-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Vaka Tamamlandı!</h2>
                        <p className="text-slate-400">Harika bir klinik yaklaşım sergilediniz.</p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-emerald-400">Tanı: {activeCase.finalDiagnosis}</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-4">{activeCase.keyLearningPoint}</p>
                        <div className="flex gap-4 text-sm text-slate-500 font-mono">
                            <div>Toplam Puan: <span className="text-white font-bold">{score}/{totalSteps * 10}</span></div>
                            <div>Zorluk: <span className="text-white font-bold">{activeCase.difficulty}</span></div>
                        </div>
                    </div>

                    <button
                        onClick={restartCase}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2 mx-auto"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Vakayı Tekrarla
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Case Header / Patient History */}
            <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
                            {activeCase.difficulty} Vaka
                        </span>
                        <h2 className="text-xl font-bold text-white">{activeCase.title}</h2>
                    </div>
                    <p className="text-slate-400 text-sm max-w-2xl">
                        <span className="text-slate-300 font-semibold mr-2">Hasta Öyküsü:</span>
                        {activeCase.patientHistory}
                    </p>
                </div>

                {/* Progress Stepper */}
                <div className="flex items-center gap-1">
                    {activeCase.steps.map((s, idx) => (
                        <div key={s.id} className={cn(
                            "h-2 w-8 rounded-full transition-all",
                            idx < currentStepIndex ? "bg-emerald-500" :
                                idx === currentStepIndex ? "bg-white animate-pulse" : "bg-white/10"
                        )} />
                    ))}
                    <span className="ml-3 text-xs text-slate-500 font-mono">Adım {currentStepIndex + 1}/{totalSteps}</span>
                </div>
            </div>

            {/* Main Interactive Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[600px]">

                {/* Left: Image Viewer */}
                <div className="bg-black rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl group flex items-center justify-center bg-[url('/grid.svg')]">
                    <div className="relative w-full h-full min-h-[400px]">
                        <Image
                            src={currentStep.imageUrl}
                            alt={currentStep.imageCaption || "Medikal Görüntü"}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-lg border border-white/10">
                            {currentStep.imageCaption}
                        </div>
                    </div>
                </div>

                {/* Right: Clinical Question */}
                <div className="flex flex-col justify-center">
                    <div className="mb-6">
                        <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2 block">Soru {currentStep.order}</span>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                            {currentStep.question}
                        </h3>
                        <p className="text-slate-400 text-sm mb-6">{currentStep.description}</p>
                    </div>

                    <div className="space-y-3">
                        {currentStep.options.map((opt, idx) => {
                            const isSelected = selectedOption === idx;
                            const isCorrect = idx === currentStep.correctOptionIndex;

                            // Style Logic
                            let buttonClass = "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white";

                            if (isStepCompleted) {
                                if (isCorrect) {
                                    buttonClass = "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                                } else if (isSelected && !isCorrect) {
                                    buttonClass = "bg-red-500/20 border-red-500 text-red-400 opacity-50";
                                } else {
                                    buttonClass = "opacity-30 grayscale";
                                }
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(idx)}
                                    disabled={isStepCompleted}
                                    className={cn(
                                        "w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-200",
                                        buttonClass
                                    )}
                                >
                                    <span className="font-medium">{opt}</span>
                                    {isStepCompleted && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                                    {isStepCompleted && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Feedback / Next Step */}
                    {isStepCompleted && (
                        <div className="mt-6 animate-in slide-in-from-bottom-2 fade-in">
                            <div className="bg-indigo-900/40 border border-indigo-500/30 p-4 rounded-xl mb-4">
                                <span className="text-indigo-300 font-bold block mb-1 text-xs uppercase">Uzman Notu:</span>
                                <p className="text-slate-200 text-sm">{currentStep.explanation}</p>
                            </div>
                            <button
                                onClick={nextStep}
                                className="w-full py-3 bg-white text-black hover:bg-slate-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors relative overflow-hidden group"
                            >
                                {currentStepIndex < totalSteps - 1 ? "Sonraki Adım" : "Vakayı Tamamla"}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
