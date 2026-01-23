"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { X, RefreshCw, AlertCircle, Eye, EyeOff, Trophy, Sparkles } from "lucide-react";
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
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCase, setCurrentCase] = useState<Pathology | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Combine all pathologies
    const allPathologies = [
        ...brainPathologies,
        ...spinePathologies,
        ...liverPathologies,
        ...kidneyPathologies,
        ...lungPathologies
    ];

    const pickRandomCase = () => {
        setIsFlipped(false);
        setIsAnimating(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * allPathologies.length);
            setCurrentCase(allPathologies[randomIndex]);
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        if (isOpen && !currentCase) {
            pickRandomCase();
        }
    }, [isOpen]);

    if (!isOpen || !currentCase) return null;

    const hasImage = currentCase.gallery && currentCase.gallery.length > 0;
    const coverImage = hasImage ? currentCase.gallery![0].url : "/placeholder_source.png";
    const modality = hasImage ? currentCase.gallery![0].modality : "Bilinmiyor";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">

            {/* Main Container */}
            <div className="relative w-full max-w-md aspect-[3/4] perspective-1000">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Flip Card Container */}
                <div
                    className={cn(
                        "w-full h-full relative transition-all duration-700 transform-style-3d cursor-pointer",
                        isFlipped ? "rotate-y-180" : ""
                    )}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* FRONT SIDE (Question) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                        {/* Image Layer */}
                        <div className="absolute inset-0">
                            <Image
                                src={coverImage}
                                alt="Unknown Case"
                                fill
                                className={cn(
                                    "object-cover transition-opacity duration-500",
                                    isAnimating ? "opacity-0" : "opacity-100"
                                )}
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                        </div>

                        {/* Content Layer */}
                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                                    Günün Vakası
                                </div>
                                <div className="bg-indigo-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg animate-pulse">
                                    ?
                                </div>
                            </div>

                            <div className="space-y-4 text-center">
                                <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur border border-white/10 rotate-y-0 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-10 h-10 text-yellow-400" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Tanı Nedir?</h3>
                                    <p className="text-slate-300 text-sm">
                                        Kartı çevirmek ve cevabı görmek için tıklayın.
                                    </p>
                                </div>

                                <div className="pt-4 flex justify-center gap-2">
                                    <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-400 border border-slate-700">
                                        {modality}
                                    </span>
                                    <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-400 border border-slate-700">
                                        {currentCase.category}
                                    </span>
                                </div>
                            </div>

                            <div className="text-center text-slate-500 text-xs font-medium tracking-widest uppercase">
                                RadAssist Challenge
                            </div>
                        </div>
                    </div>

                    {/* BACK SIDE (Answer) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden border border-indigo-500/30 shadow-2xl bg-[#0f172a]">
                        {/* Background Deco */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-black pointer-events-none" />

                        <div className="h-full flex flex-col p-8 relative z-10">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">DOĞRU CEVAP</span>
                                <Trophy className="w-5 h-5 text-yellow-500" />
                            </div>

                            {/* Diagnosis Title */}
                            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                                {currentCase.name}
                            </h2>

                            <div className="h-1 w-20 bg-indigo-500 rounded-full mb-6" />

                            {/* Key Points */}
                            <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-indigo-900 scrollbar-track-transparent">
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Kritik Bulgular
                                    </h4>
                                    <ul className="space-y-2">
                                        {currentCase.keyPoints.slice(0, 3).map((point, idx) => (
                                            <li key={idx} className="text-sm text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-6 pt-6 border-t border-white/10 flex gap-3">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        pickRandomCase();
                                    }}
                                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/25 active:scale-95"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Yeni Kart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Perspective Hint */}
                <div className="absolute -bottom-12 left-0 right-0 text-center text-white/40 text-xs animate-bounce">
                    Kartı çevirmek için tıklayın
                </div>

            </div>
        </div>
    );
}
