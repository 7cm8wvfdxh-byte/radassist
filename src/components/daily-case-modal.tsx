"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { X, RefreshCw, ChevronRight, ChevronLeft, Trophy, Flag, Brain, Stethoscope, Microscope, Search, Lightbulb, ScanEye, ArrowRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { brainPathologies } from "@/data/brain-pathologies";
import { spinePathologies } from "@/data/spine-pathologies";
import { liverPathologies } from "@/data/liver-pathologies";
import { kidneyPathologies } from "@/data/kidney-pathologies";
import { lungPathologies } from "@/data/lung-pathologies";

interface DailyCaseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DailyCaseModal({ isOpen, onClose }: DailyCaseModalProps) {
    const [currentCase, setCurrentCase] = useState<Pathology | null>(null);
    const [step, setStep] = useState(0); // 0: Intro/Image, 1: Etiology, 2: DDx, 3: Findings, 4: Diagnosis
    const totalSteps = 5;

    // Combine all pathologies
    const allPathologies = [
        ...brainPathologies,
        ...spinePathologies,
        ...liverPathologies,
        ...kidneyPathologies,
        ...lungPathologies
    ];

    const pickRandomCase = () => {
        setStep(0);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * allPathologies.length);
            setCurrentCase(allPathologies[randomIndex]);
        }, 300);
    };

    useEffect(() => {
        if (isOpen && !currentCase) {
            pickRandomCase();
        }
    }, [isOpen]);

    const handleNext = () => {
        if (step < totalSteps - 1) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 0) setStep(step - 1);
    };

    if (!isOpen || !currentCase) return null;

    const hasImage = currentCase.gallery && currentCase.gallery.length > 0;
    const coverImage = hasImage ? currentCase.gallery![0].url : "/placeholder_source.png";
    const modality = hasImage ? currentCase.gallery![0].modality : "Bilinmiyor";

    // Card Content Renderer
    const renderCardContent = (cardIndex: number) => {
        switch (cardIndex) {
            case 0: // IMAGE / QUESTION
                return (
                    <div className="flex flex-col h-full relative">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={coverImage}
                                alt="Case"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                        </div>
                        <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                            <div className="mb-auto pt-4">
                                <span className="bg-indigo-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/10">
                                    Adım 1/5: Görüntü
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">Tanı Nedir?</h2>
                            <p className="text-slate-300 text-sm mb-4">
                                Görüntüyü inceleyin. {currentCase.category} kategorisinden bir vaka.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-slate-800 border border-slate-700 px-2 py-1 rounded text-slate-400">{modality}</span>
                            </div>
                        </div>
                    </div>
                );
            case 1: // ETIOLOGY
                return (
                    <div className="flex flex-col h-full p-8 bg-slate-900 border border-indigo-500/20 rounded-3xl relative overflow-hidden">
                        <div className="absolute right-[-20px] top-[-20px] opacity-5">
                            <Microscope className="w-48 h-48 text-indigo-500" />
                        </div>
                        <div className="mb-6">
                            <span className="text-indigo-400 text-xs font-bold tracking-wider uppercase mb-2 block">Adım 2/5</span>
                            <h3 className="text-2xl font-bold text-white">Etiyoloji</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-900">
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {currentCase.etiology || "Bu patolojinin etiyolojik kökeni hakkında spesifik veri veritabanında henüz güncellenmemiştir."}
                            </p>
                        </div>
                    </div>
                );
            case 2: // DDx
                return (
                    <div className="flex flex-col h-full p-8 bg-slate-900 border border-rose-500/20 rounded-3xl relative overflow-hidden">
                        <div className="absolute right-[-20px] top-[-20px] opacity-5">
                            <Search className="w-48 h-48 text-rose-500" />
                        </div>
                        <div className="mb-6">
                            <span className="text-rose-400 text-xs font-bold tracking-wider uppercase mb-2 block">Adım 3/5</span>
                            <h3 className="text-2xl font-bold text-white">Ayırıcı Tanı</h3>
                        </div>
                        <ul className="space-y-3">
                            {currentCase.differentialDiagnosis ? currentCase.differentialDiagnosis.map((dx, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <span className="bg-rose-500/20 text-rose-400 font-bold w-6 h-6 flex items-center justify-center rounded text-xs shrink-0">{i + 1}</span>
                                    <span className="text-slate-200">{dx}</span>
                                </li>
                            )) : <p className="text-slate-500">DDx listesi hazırlanıyor...</p>}
                        </ul>
                    </div>
                );
            case 3: // FINDINGS
                return (
                    <div className="flex flex-col h-full p-8 bg-slate-900 border border-emerald-500/20 rounded-3xl relative overflow-hidden">
                        <div className="mb-6">
                            <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase mb-2 block">Adım 4/5</span>
                            <h3 className="text-2xl font-bold text-white">Radyolojik Bulgular</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-emerald-900">
                            {currentCase.goldStandard && (
                                <div className="bg-emerald-900/20 p-3 rounded-xl border border-emerald-500/20">
                                    <span className="text-[10px] text-emerald-500 font-bold uppercase block mb-1">Altın Standart</span>
                                    <p className="text-sm text-emerald-100">{currentCase.goldStandard}</p>
                                </div>
                            )}
                            <div className="space-y-3">
                                {Object.entries(currentCase.findings.ct || {}).map(([key, val]) => val && (
                                    <div key={key} className="pl-3 border-l-2 border-slate-700">
                                        <span className="text-xs text-slate-500 uppercase font-bold block mb-1">BT {key}</span>
                                        <p className="text-sm text-slate-300">{val as string}</p>
                                    </div>
                                ))}
                                {Object.entries(currentCase.findings.mri || {}).slice(0, 3).map(([key, val]) => val && (
                                    <div key={key} className="pl-3 border-l-2 border-blue-900">
                                        <span className="text-xs text-slate-500 uppercase font-bold block mb-1">MRI {key}</span>
                                        <p className="text-sm text-slate-300">{val as string}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 4: // DIAGNOSIS
                return (
                    <div className="flex flex-col h-full p-8 bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500 rounded-3xl relative overflow-hidden text-center justify-center">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">
                            <Trophy className="w-20 h-20 text-yellow-400 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-bounce" />
                            <span className="text-indigo-300 text-sm font-bold tracking-[0.2em] uppercase mb-4">DOĞRU TANI</span>
                            <h2 className="text-4xl font-black text-white mb-6 leading-tight drop-shadow-xl">{currentCase.name}</h2>

                            <p className="text-slate-300 italic mb-8 max-w-xs mx-auto">
                                &ldquo;{currentCase.clinicalPearl || currentCase.keyPoints[0]}&rdquo;
                            </p>

                            <button
                                onClick={pickRandomCase}
                                className="group relative px-8 py-3 bg-white text-indigo-950 rounded-full font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                                    Yeni Vaka
                                </span>
                                <div className="absolute inset-0 bg-indigo-50 group-hover:bg-indigo-100 transition-colors" />
                            </button>
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">

            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50 hover:bg-white/10 rounded-full"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Main Content Area */}
            <div className="w-full max-w-sm relative aspect-[4/5]"> {/* aspect ratio vertical card */}

                {/* Cards Stack */}
                <div className="relative w-full h-full">
                    {/* Render current step card */}
                    <div className="absolute inset-0 z-20 transition-all duration-500 ease-out transform" key={step}>
                        <div className="w-full h-full bg-slate-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10">
                            {renderCardContent(step)}
                        </div>
                    </div>

                    {/* Hint of next card underneath */}
                    {step < totalSteps - 1 && (
                        <div className="absolute inset-0 z-10 scale-95 translate-y-3 opacity-50 blur-[1px]">
                            <div className="w-full h-full bg-slate-800 rounded-3xl border border-white/5" />
                        </div>
                    )}
                    {step < totalSteps - 2 && (
                        <div className="absolute inset-0 z-0 scale-90 translate-y-6 opacity-30 blur-[2px]">
                            <div className="w-full h-full bg-slate-800 rounded-3xl border border-white/5" />
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="absolute -top-8 left-0 right-0 flex justify-center gap-1">
                    {[...Array(totalSteps)].map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-1 rounded-full transition-all duration-300",
                                i === step ? "w-8 bg-indigo-500" : i < step ? "w-2 bg-indigo-900" : "w-2 bg-slate-800"
                            )}
                        />
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute -bottom-20 left-0 right-0 flex items-center justify-between px-4">
                    <button
                        onClick={handlePrev}
                        disabled={step === 0}
                        className="p-4 rounded-full bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors shadow-lg"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="text-xs font-mono text-slate-500">
                        {step + 1} / {totalSteps}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={step === totalSteps - 1} // Can't go past diagnosis unless reset
                        className={cn(
                            "p-4 rounded-full text-white shadow-lg transition-all hover:scale-110 active:scale-95",
                            step === totalSteps - 1 ? "bg-emerald-600 hover:bg-emerald-500 opacity-0 pointer-events-none" : "bg-indigo-600 hover:bg-indigo-500"
                        )}
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
