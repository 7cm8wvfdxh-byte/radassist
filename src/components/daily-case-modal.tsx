"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { X, RefreshCw, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Trophy, Sparkles, Brain, Stethoscope, Microscope, Search, Lightbulb, ScanEye, Hand } from "lucide-react";
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
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Combine all pathologies
    const allPathologies = [
        ...brainPathologies,
        ...spinePathologies,
        ...liverPathologies,
        ...kidneyPathologies,
        ...lungPathologies
    ];

    const pickRandomCase = () => {
        setRotation({ x: 0, y: 0 });
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

    // Drag Handlers
    const handleStart = (clientX: number, clientY: number) => {
        setIsDragging(true);
        lastMousePos.current = { x: clientX, y: clientY };
    };

    const handleMove = (clientX: number, clientY: number) => {
        if (!isDragging) return;
        const deltaX = clientX - lastMousePos.current.x;
        const deltaY = clientY - lastMousePos.current.y;

        setRotation(prev => ({
            x: prev.x - deltaY * 0.5, // Invert Y axis for natural feel
            y: prev.y + deltaX * 0.5
        }));

        lastMousePos.current = { x: clientX, y: clientY };
    };

    const handleEnd = () => setIsDragging(false);

    // Mouse Events
    const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX, e.clientY);
    const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e.clientY);
    const onMouseUp = () => handleEnd();
    const onMouseLeave = () => handleEnd();

    // Touch Events
    const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchEnd = () => handleEnd();


    if (!isOpen || !currentCase) return null;

    const hasImage = currentCase.gallery && currentCase.gallery.length > 0;
    const coverImage = hasImage ? currentCase.gallery![0].url : "/placeholder_source.png";
    const modality = hasImage ? currentCase.gallery![0].modality : "Bilinmiyor";

    // Style for the cube transform
    const cubeStyle = {
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">

            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50 pointer-events-auto cursor-pointer"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Interaction Hint */}
            <div className="absolute top-24 left-0 right-0 text-center pointer-events-none z-10 animate-pulse">
                <div className="inline-flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur">
                    <Hand className="w-4 h-4 text-white/70" />
                    <span className="text-xs text-white/70">Küpü çevirmek için sürükleyin</span>
                </div>
            </div>

            <div
                className="relative w-full max-w-[320px] aspect-square cube-scene cursor-grab active:cursor-grabbing"
                ref={containerRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >

                <div className="cube" style={cubeStyle}>

                    {/* 1. FRONT: Question / Visual */}
                    <div className="cube-face face-front bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-none select-none">
                        <Image
                            src={coverImage}
                            alt="Case"
                            fill
                            className="object-cover opacity-80 pointer-events-none"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-between select-none">
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
                                    Çevirin →
                                </p>
                            </div>
                            <div className="text-xs text-center text-white/40 font-mono">
                                {currentCase.category}
                            </div>
                        </div>
                    </div>

                    {/* 2. RIGHT: Etiology */}
                    <div className="cube-face face-right bg-slate-950 rounded-3xl overflow-hidden border border-indigo-500/20 p-6 flex flex-col pointer-events-none select-none">
                        <div className="flex items-center gap-2 mb-4 text-indigo-400 border-b border-indigo-500/10 pb-2">
                            <Microscope className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Etiyoloji</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto text-sm text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-indigo-900 pr-2">
                            {currentCase.etiology || (
                                <div className="space-y-4">
                                    <p className="text-xs text-slate-400">Genel Bilgi:</p>
                                    <p>{currentCase.category} kategorisinde değerlendirilir.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 3. BACK: DDx */}
                    <div className="cube-face face-back bg-slate-950 rounded-3xl overflow-hidden border border-rose-500/20 p-6 flex flex-col pointer-events-none select-none">
                        <div className="flex items-center gap-2 mb-4 text-rose-400 border-b border-rose-500/10 pb-2">
                            <Search className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Ayırıcı Tanı</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2">
                            {currentCase.differentialDiagnosis ? (
                                <ul className="space-y-2">
                                    {currentCase.differentialDiagnosis.map((dx, i) => (
                                        <li key={i} className="bg-white/5 p-2 rounded border border-white/5 text-xs text-slate-300">
                                            {dx}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-slate-500 text-xs text-center mt-10">
                                    DDx verisi hazırlanıyor...
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 4. LEFT: DETAILED IMAGING (ENHANCED) */}
                    <div className="cube-face face-left bg-slate-950 rounded-3xl overflow-hidden border border-emerald-500/20 p-5 flex flex-col pointer-events-none select-none">
                        <div className="flex items-center gap-2 mb-3 text-emerald-400 border-b border-emerald-500/10 pb-2">
                            <ScanEye className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Radyolojik Bulgular</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 text-xs text-slate-300 space-y-3 scrollbar-thin scrollbar-thumb-emerald-900">

                            {/* Gold Standard Badge */}
                            {currentCase.goldStandard && (
                                <div className="bg-emerald-900/20 p-2 rounded border border-emerald-500/20 mb-2">
                                    <span className="text-[10px] text-emerald-500 font-bold uppercase block mb-1">Altın Standart</span>
                                    <p className="leading-tight">{currentCase.goldStandard}</p>
                                </div>
                            )}

                            {/* Findings Details */}
                            {currentCase.findings.ct && (
                                <div className="space-y-1">
                                    <span className="text-emerald-300 font-bold flex items-center gap-1 text-[10px]">
                                        <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                        BT Bulguları
                                    </span>
                                    {Object.entries(currentCase.findings.ct).map(([key, val]) => (
                                        val && typeof val === 'string' && (
                                            <div key={key} className="pl-2 border-l border-emerald-500/20 ml-1">
                                                <span className="text-[10px] text-slate-500 uppercase block">{key.replace(/_/g, ' ')}</span>
                                                <p className="leading-tight text-white/80">{val.substring(0, 100)}{val.length > 100 && "..."}</p>
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}

                            {currentCase.findings.mri && (
                                <div className="space-y-1">
                                    <span className="text-blue-300 font-bold flex items-center gap-1 text-[10px]">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                        MRI Bulguları
                                    </span>
                                    {Object.entries(currentCase.findings.mri).slice(0, 3).map(([key, val]) => (
                                        val && typeof val === 'string' && (
                                            <div key={key} className="pl-2 border-l border-blue-500/20 ml-1">
                                                <span className="text-[10px] text-slate-500 uppercase block">{key.replace(/_/g, ' ')}</span>
                                                <p className="leading-tight text-white/80">{val.substring(0, 100)}{val.length > 100 && "..."}</p>
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 5. TOP: Clinical */}
                    <div className="cube-face face-top bg-slate-950 rounded-3xl overflow-hidden border border-amber-500/20 p-6 flex flex-col pointer-events-none select-none">
                        <div className="flex items-center gap-2 mb-4 text-amber-400 border-b border-amber-500/10 pb-2">
                            <Lightbulb className="w-5 h-5" />
                            <h3 className="font-bold text-sm tracking-wider uppercase">Klinik İpucu</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center text-center">
                            <p className="text-base font-medium text-amber-100/90 leading-relaxed italic">
                                &ldquo;{currentCase.clinicalPearl || currentCase.keyPoints[1] || "Klinik korelasyon önerilir."}&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* 6. BOTTOM: DIAGNOSIS */}
                    <div className="cube-face face-bottom bg-indigo-950 rounded-3xl overflow-hidden border border-indigo-500 p-6 flex flex-col relative justify-center items-center text-center">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                        <Trophy className="w-12 h-12 text-yellow-400 mb-4 animate-bounce" />
                        <span className="text-indigo-300 text-xs font-bold tracking-widest uppercase mb-2">DOĞRU TANI</span>
                        <h2 className="text-2xl font-black text-white mb-6 leading-tight select-none">
                            {currentCase.name}
                        </h2>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                pickRandomCase();
                            }}
                            className="px-6 py-2 bg-white text-indigo-900 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-xl cursor-pointer pointer-events-auto z-50 relative"
                        // Use pointer-events-auto to ensure click works even if container captures drag
                        >
                            <RefreshCw className="w-4 h-4" />
                            Sıradaki Vaka
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}
