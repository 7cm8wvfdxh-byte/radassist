"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, ChevronDown, ChevronUp, Maximize2, X, Star } from 'lucide-react';

interface PathologyCardProps {
    data: Pathology;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
}

type TabType = "summary" | "ct" | "mri" | "usg";

export function PathologyCard({ data, isFavorite = false, onToggleFavorite }: PathologyCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>("summary");
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const hasCT = !!data.findings.ct;
    const hasMRI = !!data.findings.mri;
    const hasUSG = !!data.findings.ultrasound;

    // Category Color Mapping
    const getCategoryStyles = (cat: string) => {
        const lowerCat = cat.toLowerCase();
        if (lowerCat.includes("vasküler")) return {
            badge: "text-rose-400 bg-rose-400/10 border-rose-400/20",
            point: "bg-rose-500 shadow-rose-500/20"
        };
        if (lowerCat.includes("neoplastik")) return {
            badge: "text-purple-400 bg-purple-400/10 border-purple-400/20",
            point: "bg-purple-500 shadow-purple-500/20"
        };
        if (lowerCat.includes("travma")) return {
            badge: "text-amber-400 bg-amber-400/10 border-amber-400/20",
            point: "bg-amber-500 shadow-amber-500/20"
        };
        if (lowerCat.includes("demiyelinizan")) return {
            badge: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
            point: "bg-emerald-500 shadow-emerald-500/20"
        };
        if (lowerCat.includes("enfeksiyon")) return {
            badge: "text-lime-400 bg-lime-400/10 border-lime-400/20",
            point: "bg-lime-500 shadow-lime-500/20"
        };
        if (lowerCat.includes("konjenital") || lowerCat.includes("fakomatoz")) return {
            badge: "text-pink-400 bg-pink-400/10 border-pink-400/20",
            point: "bg-pink-500 shadow-pink-500/20"
        };
        if (lowerCat.includes("dejeneratif")) return {
            badge: "text-sky-400 bg-sky-400/10 border-sky-400/20",
            point: "bg-sky-500 shadow-sky-500/20"
        };
        // Default (Sellar, etc.)
        return {
            badge: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
            point: "bg-cyan-500 shadow-cyan-500/20"
        };
    };

    const styles = getCategoryStyles(data.category);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="relative flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-white/20 group z-0"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />

            {/* Content Container */}
            <div className="flex flex-col h-full relative z-10">
                {/* Header & Tabs */}
                {/* Added explicit z-index to header container to manage stacking context if needed, but DOM order should suffice now */}
                <div className="p-6 pb-0 flex-none relative">

                    <div className="flex items-start justify-between mb-4 pr-32">
                        <div className="flex-1 mr-4">
                            <div className="flex items-center gap-2">
                                <span className={cn("px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border backdrop-blur-sm shadow-sm transition-colors", styles.badge)}>
                                    {data.category}
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onToggleFavorite?.();
                                    }}
                                    className={cn(
                                        "p-1.5 rounded-full transition-all duration-300 hover:bg-white/10 active:scale-95 group/star",
                                        isFavorite ? "text-yellow-400 bg-yellow-400/10" : "text-slate-600 hover:text-yellow-200"
                                    )}
                                    title={isFavorite ? "Favorilerden Çıkar" : "Favorilere Ekle"}
                                >
                                    <Star className={cn("w-4 h-4", isFavorite ? "fill-yellow-400" : "group-hover/star:scale-110")} />
                                </button>
                            </div>
                            <h3 className="text-2xl font-bold text-white mt-3 leading-tight drop-shadow-md">
                                {data.name}
                            </h3>
                        </div>
                    </div>

                    <div className="flex space-x-1 p-1 bg-black/40 backdrop-blur-md rounded-xl w-full sm:w-auto self-start border border-white/10 shadow-lg relative z-10">
                        <button onClick={() => setActiveTab('summary')} className={cn("flex-1 sm:flex-none h-10 sm:h-auto px-4 py-2 rounded-lg text-sm sm:text-xs font-semibold transition-all mb-0 flex items-center justify-center", activeTab === 'summary' ? "bg-white text-black shadow-lg" : "text-slate-400 hover:text-white")}>
                            Özet
                        </button>
                        {hasCT && (
                            <button onClick={() => setActiveTab('ct')} className={cn("flex-1 sm:flex-none h-10 sm:h-auto px-4 py-2 rounded-lg text-sm sm:text-xs font-semibold transition-all mb-0 flex items-center justify-center", activeTab === 'ct' ? "bg-white text-black shadow-lg" : "text-slate-400 hover:text-white")}>
                                BT
                            </button>
                        )}
                        {hasMRI && (
                            <button onClick={() => setActiveTab('mri')} className={cn("flex-1 sm:flex-none h-10 sm:h-auto px-4 py-2 rounded-lg text-sm sm:text-xs font-semibold transition-all mb-0 flex items-center justify-center", activeTab === 'mri' ? "bg-white text-black shadow-lg" : "text-slate-400 hover:text-white")}>
                                MR
                            </button>
                        )}
                        {hasUSG && (
                            <button onClick={() => setActiveTab('usg')} className={cn("flex-1 sm:flex-none h-10 sm:h-auto px-4 py-2 rounded-lg text-sm sm:text-xs font-semibold transition-all mb-0 flex items-center justify-center", activeTab === 'usg' ? "bg-white text-black shadow-lg" : "text-slate-400 hover:text-white")}>
                                USG
                            </button>
                        )}
                    </div>

                    {/* Gallery Container (Top Right) - MOVED TO BOTTOM of this container to sit on TOP visually */}
                    {/* Gallery Container (Top Right) */}
                    {data.gallery && data.gallery.length > 0 && (
                        <div className="absolute top-3 right-3 flex -space-x-4 pointer-events-auto transition-all duration-300 isolate z-50">
                            {data.gallery.map((img, idx) => {
                                const isZoomed = activeImage === idx;

                                // Swipe Handlers
                                const handleTouchStart = (e: React.TouchEvent) => {
                                    if (!isZoomed) return;
                                    const touch = e.touches[0];
                                    // Store initial touch in a data attribute or temp variable via refs
                                    // Using simple direct logic for now or refs. 
                                    // Better to use refs if inside a mapped component, but here we can use a closure if carefully done.
                                    // Let's use a simple coordinate approach.
                                    (e.currentTarget as any)._touchStartX = touch.clientX;
                                };

                                const handleTouchEnd = (e: React.TouchEvent) => {
                                    if (!isZoomed) return;
                                    const touchEnd = e.changedTouches[0].clientX;
                                    const touchStart = (e.currentTarget as any)._touchStartX;

                                    if (!touchStart) return;

                                    const diff = touchStart - touchEnd;
                                    const SWIPE_THRESHOLD = 50;

                                    if (Math.abs(diff) > SWIPE_THRESHOLD) {
                                        if (diff > 0) {
                                            // Swipe Left -> Next Image
                                            if (activeImage !== null && activeImage < (data.gallery?.length || 0) - 1) {
                                                setActiveImage(activeImage + 1);
                                            }
                                        } else {
                                            // Swipe Right -> Prev Image
                                            if (activeImage !== null && activeImage > 0) {
                                                setActiveImage(activeImage - 1);
                                            }
                                        }
                                    }
                                };

                                return (
                                    <div
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card clicks
                                            setActiveImage(isZoomed ? null : idx);
                                        }}
                                        onTouchStart={handleTouchStart}
                                        onTouchEnd={handleTouchEnd}
                                        className={cn(
                                            "relative w-12 h-12 rounded-lg border border-slate-700 bg-black overflow-hidden transition-all duration-300 ease-out origin-top-right shadow-lg cursor-zoom-in brightness-75 hover:brightness-100",
                                            isZoomed
                                                ? "!scale-[6.5] !z-[100] border-blue-500 brightness-100 cursor-zoom-out shadow-2xl touch-none" // touch-none prevents scrolling while swiping
                                                : "hover:scale-[1.75] hover:z-50 hover:border-slate-500", // Hover Peek (1.75x)
                                            !isZoomed && activeImage !== null ? "opacity-30 blur-[1px]" : "opacity-100" // Dim others when one is zoomed
                                        )}
                                        style={{
                                            // Explicit z-index for stacking order when not zoomed
                                            zIndex: isZoomed ? 100 : 10 - idx
                                        }}
                                    >
                                        <Image
                                            src={img.url}
                                            alt={img.caption}
                                            fill
                                            className="object-cover"
                                            draggable={false} // Prevent image drag interfering with swipe
                                        />
                                        {/* Caption Overlay on Zoom */}
                                        <div className={cn(
                                            "absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-[1px] text-[2px] leading-tight text-white/90 text-center py-[1.5px] transition-opacity whitespace-nowrap px-0.5 font-medium",
                                            isZoomed ? "opacity-100" : "opacity-0"
                                        )}>
                                            {img.caption}
                                            {/* Swipe Hint (Mobile Only) */}
                                            <span className="hidden sm:hidden md:hidden lg:hidden active:inline-block ml-1 opacity-50">↔</span>
                                        </div>
                                        {/* Modality Tag */}
                                        <div className={cn(
                                            "absolute top-[1px] right-[1px] bg-blue-500 text-[1.5px] leading-none text-white px-1 py-[1px] rounded-bl-[2px] transition-opacity font-bold tracking-tighter shadow-sm",
                                            isZoomed ? "opacity-100" : "opacity-0"
                                        )}>
                                            {img.modality}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Content Body */}
                <div className="p-6 flex-grow relative z-0">
                    <div className="h-full min-h-[200px] text-sm text-slate-300 leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-3 duration-500">

                        {activeTab === 'summary' && (
                            <div className="space-y-4">
                                {data.keyPoints.map((kp, idx) => (
                                    <div key={idx} className="flex gap-3 text-slate-300 group/point">
                                        <span className={cn("mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-colors", styles.point.split(" ")[0])} />
                                        <p className="group-hover/point:text-white transition-colors">{kp}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab !== 'summary' && (
                            <div className="grid grid-cols-1 gap-3">
                                {Object.entries((data.findings as any)[activeTab === "mri" ? "mri" : activeTab === "ct" ? "ct" : "ultrasound"] || {}).map(([key, value]) => {
                                    if (!value) return null;
                                    const label = key.replace(/_/g, " ").toUpperCase();
                                    return (
                                        <div key={key} className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors">
                                            <span className="text-[10px] font-bold text-slate-500 block mb-1 uppercase tracking-wider">{label}</span>
                                            <span className="text-slate-200 font-medium block">{value as string}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
}
