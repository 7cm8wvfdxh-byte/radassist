import { expandQueryTokens } from "@/lib/search-utils";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { cn } from "@/lib/utils";
import { Copy, Check, ChevronDown, ChevronUp, Maximize2, X, Star, RotateCw, Sparkles, Brain, Stethoscope, Lightbulb } from 'lucide-react';

interface PathologyCardProps {
    data: Pathology;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
    highlightQuery?: string;
}

type TabType = "summary" | "ct" | "mri" | "usg";

const HighlightedText = ({ text, query }: { text: string, query?: string }) => {
    if (!query || !query.trim()) return <>{text}</>;
    const tokens = expandQueryTokens(query);
    if (tokens.length === 0) return <>{text}</>;
    const uniqueTokens = Array.from(new Set(tokens)).sort((a, b) => b.length - a.length);
    const regex = new RegExp(`(${uniqueTokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, i) => regex.test(part) ? <mark key={i} className="bg-yellow-500/40 text-yellow-100 rounded-sm px-0.5 mx-0.5 font-semibold">{part}</mark> : part)}
        </>
    );
};

export function PathologyCard({ data, isFavorite = false, onToggleFavorite, highlightQuery }: PathologyCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>("summary");
    const [activeImage, setActiveImage] = useState<number | null>(null);

    // Initial Cover Image Logic
    React.useEffect(() => {
        if (!highlightQuery || !data.gallery) return;
        const query = highlightQuery.toLowerCase();
        const targetIndex = data.gallery.findIndex(img => query.includes(img.modality.toLowerCase()) || img.caption.toLowerCase().includes(query));
        if (targetIndex !== -1) setActiveImage(targetIndex);
    }, [highlightQuery, data.gallery]);

    // Category Color Mapping
    const getCategoryStyles = (cat: string) => {
        const lowerCat = cat.toLowerCase();
        if (lowerCat.includes("vasküler")) return "text-rose-400 border-rose-400/30 bg-rose-950/20";
        if (lowerCat.includes("neoplastik")) return "text-purple-400 border-purple-400/30 bg-purple-950/20";
        if (lowerCat.includes("travma")) return "text-amber-400 border-amber-400/30 bg-amber-950/20";
        if (lowerCat.includes("enfeksiyon")) return "text-lime-400 border-lime-400/30 bg-lime-950/20";
        if (lowerCat.includes("dejeneratif")) return "text-sky-400 border-sky-400/30 bg-sky-950/20";
        return "text-cyan-400 border-cyan-400/30 bg-cyan-950/20";
    };
    const catStyle = getCategoryStyles(data.category);

    // Toggle Flip
    const handleFlip = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative w-full h-[500px] perspective-1000 group/card">

            {/* CARD CONTAINER (Preserves space) */}
            <div
                className={cn(
                    "relative w-full h-full transition-all duration-700 transform-style-3d",
                    isFlipped ? "rotate-y-180" : ""
                )}
            >
                {/* --- FRONT FACE --- */}
                <div className="absolute inset-0 backface-hidden w-full h-full bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-xl">
                    {/* Header Image Area */}
                    <div className="relative h-48 w-full bg-black shrink-0">
                        {data.gallery && data.gallery.length > 0 ? (
                            <Image
                                src={data.gallery[activeImage ?? 0].url}
                                alt={data.name}
                                fill
                                className="object-cover opacity-80 group-hover/card:opacity-100 transition-opacity"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-zinc-600 bg-zinc-800">No Image</div>
                        )}

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                            <span className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase border backdrop-blur-sm", catStyle)}>
                                {data.category}
                            </span>
                            <button
                                onClick={(e) => { e.stopPropagation(); onToggleFavorite?.(); }}
                                className="p-2 rounded-full bg-black/40 backdrop-blur border border-white/10 hover:bg-yellow-500/20 text-yellow-500 transition-all"
                            >
                                <Star className={cn("w-4 h-4", isFavorite && "fill-yellow-500")} />
                            </button>
                        </div>

                        {/* Image Gallery Indicators */}
                        {data.gallery && data.gallery.length > 1 && (
                            <div className="absolute bottom-2 right-2 flex gap-1">
                                {data.gallery.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                                        className={cn(
                                            "w-1.5 h-1.5 rounded-full transition-all",
                                            (activeImage ?? 0) === i ? "bg-white w-3" : "bg-white/40 hover:bg-white/80"
                                        )}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Front Content */}
                    <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white leading-tight pr-4">{data.name}</h3>
                            <button onClick={handleFlip} className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 group/flip text-xs font-semibold uppercase tracking-wider">
                                <RotateCw className="w-3 h-3 group-hover/flip:rotate-180 transition-transform duration-500" />
                                Detay
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                            {(['summary', 'ct', 'mri'] as TabType[]).map(t => {
                                const hasData = t === 'summary' || (t === 'ct' && data.findings.ct) || (t === 'mri' && data.findings.mri);
                                if (!hasData) return null;
                                return (
                                    <button
                                        key={t}
                                        onClick={(e) => { e.stopPropagation(); setActiveTab(t); }}
                                        className={cn(
                                            "text-xs font-medium px-2 py-1 rounded transition-colors",
                                            activeTab === t ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                                        )}
                                    >
                                        {t.toUpperCase()}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                            {activeTab === 'summary' ? (
                                <ul className="space-y-2">
                                    {data.keyPoints.slice(0, 3).map((kp, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-zinc-400">
                                            <span className="text-cyan-500 font-bold mt-1">•</span>
                                            <span className="leading-snug"><HighlightedText text={kp} query={highlightQuery} /></span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="space-y-2 text-sm text-zinc-400">
                                    {Object.entries((data.findings as any)[activeTab] || {}).slice(0, 3).map(([k, v]) => (
                                        <div key={k} className="border-l-2 border-zinc-700 pl-2">
                                            <span className="text-[10px] text-zinc-500 uppercase block">{k}</span>
                                            <span className="text-zinc-300"><HighlightedText text={v as string} query={highlightQuery} /></span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="p-3 bg-zinc-950/30 border-t border-white/5 text-[10px] text-center text-zinc-500">
                        Detaylı patofizyoloji için kartı çevirin ↻
                    </div>
                </div>

                {/* --- BACK FACE (THE REVEAL) --- */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full bg-gradient-to-br from-zinc-900 to-black border border-cyan-500/30 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-cyan-900/10">
                    {/* Back Header */}
                    <div className="p-5 border-b border-white/10 flex justify-between items-center bg-cyan-950/10">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <Brain className="w-5 h-5" />
                            <span className="font-bold tracking-widest text-xs uppercase">Patofizyolojik Mekanizma</span>
                        </div>
                        <button onClick={handleFlip} className="p-1.5 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Back Content */}
                    <div className="p-6 flex-1 overflow-y-auto space-y-6">

                        {/* WHY? Section */}
                        {data.mechanism && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                                <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                                    Neden Böyle Görünüyor?
                                </h4>
                                <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 text-sm text-yellow-100/90 leading-relaxed font-serif italic">
                                    "{data.mechanism}"
                                </div>
                            </div>
                        )}

                        {/* Pearls Section */}
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                            <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                Kritik İpuçları (Pearls)
                            </h4>
                            <ul className="space-y-2">
                                {data.keyPoints.map((kp, i) => (
                                    <li key={i} className="flex gap-2 text-xs text-zinc-400 border-b border-white/5 pb-2 last:border-0">
                                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span><HighlightedText text={kp} query={highlightQuery} /></span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Back Footer */}
                    <div className="p-4 bg-zinc-950/50 border-t border-white/5 flex justify-center">
                        <button onClick={handleFlip} className="text-xs text-cyan-500 font-medium hover:text-cyan-400 transition-colors uppercase tracking-widest flex items-center gap-2">
                            <RotateCw className="w-3 h-3" />
                            Görüntüye Dön
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
