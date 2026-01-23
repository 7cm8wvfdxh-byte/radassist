"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { X, RefreshCw, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Trophy, Sparkles, Brain, Stethoscope, Microscope, Search, Lightbulb } from "lucide-react";
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

type CubeFace = "front" | "right" | "back" | "left" | "top" | "bottom";

export function DailyCaseModal({ isOpen, onClose }: DailyCaseModalProps) {
    const [currentCase, setCurrentCase] = useState<Pathology | null>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [currentFace, setCurrentFace] = useState<CubeFace>("front");

    // Combine all pathologies
    const allPathologies = [
        ...brainPathologies,
        ...spinePathologies,
        ...liverPathologies,
        ...kidneyPathologies,
        ...lungPathologies
    ];

    const pickRandomCase = () => {
        // Reset rotation first
        setRotation({ x: 0, y: 0 });
        setCurrentFace("front");

        // Pick new case after small delay
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

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "ArrowRight") rotate("right");
            if (e.key === "ArrowLeft") rotate("left");
            if (e.key === "ArrowUp") rotate("up");
            if (e.key === "ArrowDown") rotate("down");
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, rotation]);

    const rotate = (direction: "right" | "left" | "up" | "down") => {
        let newX = rotation.x;
        let newY = rotation.y;

        // Simple logic: we just accumulate rotation.
        // But tracking "currentFace" is tricky with free rotation.
        // Let's implement a strict state machine for faces if we want specific content mapping.
        // Actually, free rotation is more fun. Let's just rotate the cube.

        switch (direction) {
            case "right": newY -= 90; break;
            case "left": newY += 90; break;
            case "up": newX += 90; break;
            case "down": newX -= 90; break;
        }
        setRotation({ x: newX, y: newY });
    };

    if (!isOpen || !currentCase) return null;

    const hasImage = currentCase.gallery && currentCase.gallery.length > 0;
    const coverImage = hasImage ? currentCase.gallery![0].url : "/placeholder_source.png";
    const modality = hasImage ? currentCase.gallery![0].modality : "Bilinmiyor";

    // Style for the cube transform
    const cubeStyle = {
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    };

    // Helper to render missing data
    const MissingData = ({ label }: { label: string }) => (
        <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-60">
            <Microscope className="w-12 h-12 mb-2" />
            <p className="text-xs text-center">{label} verisi hazırlanıyor...</p>
        </div>
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">

            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50"
            >
                <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-[320px] aspect-square cube-scene">

                <div className="cube" style={cubeStyle}>

                    {/* 1. FRONT: Question / Visual */}
                    <div className="cube-face face-front bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <Image
                            src={coverImage}
                            alt="Case"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <div className="flex justify-between">
                                <span className="bg-indigo-500/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg border border-white/10">
                                    Soru
                                </span>
                                <span className="bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-300">
                                    {modality}
                                </span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Tanı Nedir?</h3>
                                <p className="text-xs text-slate-300 drop-shadow-md">
                                    Detaylar için küpü çevirin →
                                </p>
                            </div>
                            <div className="text-xs text-center text-white/40 font-mono">
                                {currentCase.category}
                            </div>
                        </div>
                    </div>

                    {/* 2. RIGHT: Etiology */}
                    <div className="cube-face face-right bg-slate-900 rounded-3xl overflow-hidden border border-indigo-500/20 p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-indigo-400">
                            <Microscope className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Etiyoloji & Fizyoloji</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto text-sm text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-indigo-900">
                            {currentCase.etiology || (
                                <div className="space-y-4">
                                    <p>Bu patolojinin etiyolojik kökeni veritabanında güncellenmektedir.</p>
                                    <p className="text-xs text-slate-500">Genel Bilgi: {currentCase.category} grubunda yer alır ve tipik olarak {currentCase.findings.ct && "BT"} {currentCase.findings.mri && "MRI"} bulguları ile karakterizedir.</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-slate-500 text-right">
                            Devam: Klinik & DDx →
                        </div>
                    </div>

                    {/* 3. BACK: DDx (Ayırıcı Tanı) */}
                    <div className="cube-face face-back bg-slate-900 rounded-3xl overflow-hidden border border-rose-500/20 p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-rose-400">
                            <Search className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Ayırıcı Tanı (DDx)</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2">
                            {currentCase.differentialDiagnosis ? (
                                <ul className="space-y-2">
                                    {currentCase.differentialDiagnosis.map((dx, i) => (
                                        <li key={i} className="bg-white/5 p-2 rounded border border-white/5 text-sm text-slate-300">
                                            {dx}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-slate-400 text-sm">
                                    <p className="mb-2">Benzer görünüme sahip patolojiler:</p>
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>Metastaz</li>
                                        <li>Apse</li>
                                        <li>Tümör (Benign/Malign)</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 4. LEFT: Gold Standard Imaging */}
                    <div className="cube-face face-left bg-slate-900 rounded-3xl overflow-hidden border border-emerald-500/20 p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-emerald-400">
                            <Stethoscope className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Görüntüleme</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto text-sm text-slate-300 leading-relaxed">
                            <p className="font-semibold text-white mb-2">Altın Standart:</p>
                            <p className="mb-4">{currentCase.goldStandard || "Kontrastlı MRI ve klinik korelasyon önerilir."}</p>

                            <div className="bg-emerald-900/10 p-3 rounded-xl border border-emerald-500/20">
                                <span className="text-xs font-bold text-emerald-500 block mb-1">İpucu</span>
                                <p className="text-xs text-emerald-200/70">{currentCase.keyPoints[0]}</p>
                            </div>
                        </div>
                    </div>

                    {/* 5. TOP: Clinical Pearl / Extra */}
                    <div className="cube-face face-top bg-slate-900 rounded-3xl overflow-hidden border border-amber-500/20 p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-amber-400">
                            <Lightbulb className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Klinik İpucu</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center text-center">
                            <p className="text-lg font-medium text-amber-100/90 leading-relaxed">
                                {currentCase.clinicalPearl || currentCase.keyPoints[1] || "Klinik öykü ve laboratuvar bulguları tanı için kritiktir."}
                            </p>
                        </div>
                    </div>

                    {/* 6. BOTTOM: DIAGNOSIS (ANSWER) */}
                    <div className="cube-face face-bottom bg-indigo-950 rounded-3xl overflow-hidden border border-indigo-500 p-6 flex flex-col relative justify-center items-center text-center">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <Trophy className="w-12 h-12 text-yellow-400 mb-4 animate-bounce" />
                        <span className="text-indigo-300 text-xs font-bold tracking-widest uppercase mb-2">DOĞRU TANI</span>
                        <h2 className="text-2xl font-black text-white mb-6 leading-tight">
                            {currentCase.name}
                        </h2>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                pickRandomCase();
                            }}
                            className="px-6 py-2 bg-white text-indigo-900 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Sıradaki Vaka
                        </button>
                    </div>

                </div>

                {/* Controls (Outside Cube) */}
                <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-4">
                    <button onClick={() => rotate("left")} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all active:scale-95">
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <div className="flex flex-col gap-2">
                        <button onClick={() => rotate("up")} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all active:scale-95">
                            <ChevronUp className="w-6 h-6 text-white" />
                        </button>
                        <button onClick={() => rotate("down")} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all active:scale-95">
                            <ChevronDown className="w-6 h-6 text-white" />
                        </button>
                    </div>
                    <button onClick={() => rotate("right")} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all active:scale-95">
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                <div className="absolute -top-16 left-0 right-0 text-center">
                    <span className="text-xs text-white/50 uppercase tracking-widest font-medium">3D Radyoloji Küpü</span>
                </div>

            </div>
        </div>
    );
}
