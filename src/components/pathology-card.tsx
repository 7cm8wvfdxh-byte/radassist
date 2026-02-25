import { expandQueryTokens } from "@/lib/search-utils";
import React, { useState } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import {
    Check, X, Star, RotateCw,
    Sparkles, Brain, Lightbulb, Activity, Layers, Scan, Radiation, Zap, FileText,
    Flame, Target, Award, Stethoscope
} from 'lucide-react';

export interface MatchContext {
    fieldName: string;
    snippet: string;
    weight: number;
}

interface PathologyCardProps {
    data: Pathology;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
    highlightQuery?: string;
    matchContext?: MatchContext[];
    matchType?: "exact" | "synonym" | "fuzzy";
}

type TabType = "summary" | string;

const MODALITY_CONFIG: Record<string, { label: string, icon: React.ElementType, color: string, bg: string }> = {
    ultrasound: { label: "USG", icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
    usg: { label: "USG", icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
    ct: { label: "BT", icon: Layers, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
    mri: { label: "MR", icon: Brain, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
    mammography: { label: "MG", icon: Scan, color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
    xray: { label: "XR", icon: Radiation, color: "text-slate-400", bg: "bg-slate-500/10 border-slate-500/20" },
    pet: { label: "PET", icon: Zap, color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
    dsa: { label: "DSA", icon: Activity, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
};

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

// Format field name for display
function formatFieldLabel(fieldName: string, lang: string): string {
    const tr: Record<string, string> = {
        name: "İsim", nameEn: "İsim (EN)", category: "Kategori", categoryEn: "Kategori (EN)",
        organ: "Organ", clinicalPearl: "Klinik İpucu", goldStandard: "Altın Standart",
        etiology: "Etiyoloji", mechanism: "Mekanizma",
    };
    const en: Record<string, string> = {
        name: "Name", nameEn: "Name (EN)", category: "Category", categoryEn: "Category (EN)",
        organ: "Organ", clinicalPearl: "Clinical Pearl", goldStandard: "Gold Standard",
        etiology: "Etiology", mechanism: "Mechanism",
    };
    const labels = lang === "tr" ? tr : en;

    if (labels[fieldName]) return labels[fieldName];
    if (fieldName.startsWith("keyPoint")) return lang === "tr" ? "Anahtar Nokta" : "Key Point";
    if (fieldName.startsWith("ddx")) return lang === "tr" ? "Ayırıcı Tanı" : "DDx";
    if (fieldName.startsWith("ct.")) return `BT: ${fieldName.split(".")[1].replace(/_/g, " ")}`;
    if (fieldName.startsWith("mri.")) return `MR: ${fieldName.split(".")[1].replace(/_/g, " ")}`;
    if (fieldName.startsWith("usg.")) return `USG`;
    if (fieldName.startsWith("xray.")) return `X-Ray`;
    if (fieldName.startsWith("pet.")) return `PET`;
    if (fieldName.startsWith("mammography.")) return lang === "tr" ? "Mamografi" : "Mammography";
    return fieldName;
}

export function PathologyCard({ data, isFavorite = false, onToggleFavorite, highlightQuery, matchContext, matchType }: PathologyCardProps) {
    const { language, t } = useLanguage();
    const isEn = language === "en";
    const [isFlipped, setIsFlipped] = useState(false);

    // Select content based on language
    const displayName = isEn ? (data.nameEn || data.name) : data.name;
    const displayCategory = isEn ? (data.categoryEn || data.category) : data.category;
    const displayFindings = isEn ? (data.findingsEn || data.findings) : data.findings;
    const displayKeyPoints = isEn ? (data.keyPointsEn || data.keyPoints) : data.keyPoints;
    const displayMechanism = isEn ? (data.mechanismEn || data.mechanism) : data.mechanism;
    const displayEtiology = isEn ? (data.etiologyEn || data.etiology) : data.etiology;
    const displayDifferentialDiagnosis = isEn ? (data.differentialDiagnosisEn || data.differentialDiagnosis) : data.differentialDiagnosis;
    const displayGoldStandard = isEn ? (data.goldStandardEn || data.goldStandard) : data.goldStandard;
    const displayClinicalPearl = isEn ? (data.clinicalPearlEn || data.clinicalPearl) : data.clinicalPearl;

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
        <div className="relative w-full h-[550px] perspective-1000 group/card" style={{ touchAction: 'pan-y' }}>

            {/* CARD CONTAINER */}
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
                            <div className="flex items-center justify-center h-full text-zinc-600 bg-zinc-800">
                                <Activity className="w-10 h-10 opacity-20" />
                            </div>
                        )}

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                            <span className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase border backdrop-blur-sm", catStyle)}>
                                {displayCategory}
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
                    <div className="p-5 flex-1 flex flex-col min-h-0">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white leading-tight pr-4">{displayName}</h3>
                            <button onClick={handleFlip} className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 group/flip text-xs font-semibold uppercase tracking-wider shrink-0">
                                <RotateCw className="w-3 h-3 group-hover/flip:rotate-180 transition-transform duration-500" />
                                {t("detailed_view")}
                            </button>
                        </div>

                        {/* Search Match Context */}
                        {matchContext && matchContext.length > 0 && highlightQuery && (
                            <div className="mb-3 p-2.5 rounded-xl bg-indigo-500/5 border border-indigo-500/15 animate-in fade-in duration-300">
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <div className={cn(
                                        "w-1.5 h-1.5 rounded-full",
                                        matchType === "exact" ? "bg-green-400" : matchType === "synonym" ? "bg-blue-400" : "bg-amber-400"
                                    )} />
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                                        {matchType === "exact"
                                            ? (language === "tr" ? "Tam eşleşme" : "Exact match")
                                            : matchType === "synonym"
                                                ? (language === "tr" ? "Eş anlamlı" : "Synonym")
                                                : (language === "tr" ? "Yakın eşleşme" : "Fuzzy")}
                                    </span>
                                </div>
                                {matchContext.slice(0, 2).map((mc, i) => (
                                    <div key={i} className="flex items-start gap-1.5 text-[10px] leading-snug">
                                        <span className="text-indigo-400 font-bold shrink-0 mt-px">{formatFieldLabel(mc.fieldName, language)}:</span>
                                        <span className="text-slate-400 line-clamp-1">
                                            <HighlightedText text={mc.snippet.replace(/\.\.\./g, "…").slice(0, 80)} query={highlightQuery} />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 mb-4 border-b border-white/5 pb-2">
                            <button
                                onClick={(e) => { e.stopPropagation(); setActiveTab('summary'); }}
                                className={cn(
                                    "flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all",
                                    activeTab === 'summary'
                                        ? "bg-white/10 text-white border border-white/10"
                                        : "text-zinc-500 hover:text-zinc-300 bg-transparent border border-transparent"
                                )}
                            >
                                <FileText className="w-3.5 h-3.5" />
                                {t("quick_view")}
                            </button>

                            {Object.keys(displayFindings).map(modality => {
                                const config = MODALITY_CONFIG[modality] || { label: modality.toUpperCase(), icon: Activity, color: "text-zinc-400", bg: "bg-zinc-500/10 border-zinc-500/20" };
                                const Icon = config.icon;
                                const isActive = activeTab === modality;

                                return (
                                    <button
                                        key={modality}
                                        onClick={(e) => { e.stopPropagation(); setActiveTab(modality); }}
                                        className={cn(
                                            "flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all border",
                                            isActive
                                                ? `${config.bg} ${config.color} shadow-sm`
                                                : "border-transparent text-zinc-500 hover:text-zinc-300 bg-transparent"
                                        )}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                        {config.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-700 min-h-0 overscroll-contain">
                            {activeTab === 'summary' ? (
                                <ul className="space-y-2">
                                    {displayKeyPoints.slice(0, 4).map((kp, i) => ( // Show up to 4 key points
                                        <li key={i} className="flex gap-2 text-sm text-zinc-400">
                                            <span className="text-cyan-500 font-bold mt-1">•</span>
                                            <span className="leading-snug"><HighlightedText text={kp} query={highlightQuery} /></span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="space-y-3 text-sm text-zinc-400 animate-in fade-in duration-300">
                                    {/* Handle Object content (e.g. CT phases) or String content */}
                                    {(() => {
                                        const content = (displayFindings as Record<string, unknown>)[activeTab];
                                        if (typeof content === 'string') {
                                            return <p className="leading-relaxed"><HighlightedText text={content} query={highlightQuery} /></p>;
                                        }
                                        if (typeof content === 'object' && content !== null) {
                                            return Object.entries(content).map(([k, v]) => (
                                                <div key={k} className="border-l-2 border-zinc-700 pl-3">
                                                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest block mb-0.5">
                                                        {k.replace(/_/g, ' ')}
                                                    </span>
                                                    <span className="text-zinc-300 leading-relaxed block">
                                                        <HighlightedText text={v as string} query={highlightQuery} />
                                                    </span>
                                                </div>
                                            ));
                                        }
                                        return null;
                                    })()}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="p-3 bg-zinc-950/30 border-t border-white/5 text-[10px] text-center text-zinc-500">
                        {isEn ? "Flip card for detailed pathophysiology & mechanism ↻" : "Detaylı patofizyoloji ve mekanizma için kartı çevirin ↻"}
                    </div>
                </div>

                {/* --- BACK FACE (THE REVEAL) --- */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full bg-gradient-to-br from-zinc-900 to-black border border-cyan-500/30 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-cyan-900/10">
                    {/* Back Header */}
                    <div className="p-5 border-b border-white/10 flex justify-between items-center bg-cyan-950/10">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <Brain className="w-5 h-5" />
                            <span className="font-bold tracking-widest text-xs uppercase">{t("mechanism")}</span>
                        </div>
                        <button onClick={handleFlip} className="p-1.5 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Back Content */}
                    <div className="p-6 flex-1 overflow-y-auto space-y-5 overscroll-contain">

                        {/* WHY? Section */}
                        {displayMechanism && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                                <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                                    {isEn ? "Why?" : "Neden Böyle Görünüyor?"}
                                </h4>
                                <div className="p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/10 text-xs text-yellow-100/90 leading-relaxed font-serif italic">
                                    &ldquo;{displayMechanism}&rdquo;
                                </div>
                            </div>
                        )}

                        {/* Etiology Section */}
                        {displayEtiology && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                                <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                    <Flame className="w-4 h-4 text-orange-400" />
                                    {isEn ? "Etiology" : "Etiyoloji"}
                                </h4>
                                <p className="text-xs text-zinc-400 leading-relaxed p-3 rounded-xl bg-orange-500/5 border border-orange-500/10">
                                    {displayEtiology}
                                </p>
                            </div>
                        )}

                        {/* Differential Diagnosis Section */}
                        {displayDifferentialDiagnosis && displayDifferentialDiagnosis.length > 0 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                                <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-rose-400" />
                                    {isEn ? "Differential Diagnosis" : "Ayırıcı Tanı"}
                                </h4>
                                <ul className="space-y-1.5">
                                    {displayDifferentialDiagnosis.map((ddx, i) => (
                                        <li key={i} className="flex gap-2 text-xs text-zinc-400">
                                            <span className="text-rose-500 font-bold shrink-0">{i + 1}.</span>
                                            <span className="leading-snug">{ddx}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Gold Standard Section */}
                        {displayGoldStandard && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-250">
                                <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                    <Award className="w-4 h-4 text-amber-400" />
                                    {isEn ? "Gold Standard" : "Altın Standart"}
                                </h4>
                                <p className="text-xs text-zinc-400 leading-relaxed p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                                    {displayGoldStandard}
                                </p>
                            </div>
                        )}

                        {/* Clinical Pearl Section */}
                        {displayClinicalPearl && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                                <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                    <Stethoscope className="w-4 h-4 text-emerald-400" />
                                    {isEn ? "Clinical Pearl" : "Klinik İpucu"}
                                </h4>
                                <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-xs text-emerald-100/90 leading-relaxed font-medium">
                                    {displayClinicalPearl}
                                </div>
                            </div>
                        )}

                        {/* Key Points Section */}
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-350">
                            <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                {isEn ? "Key Points" : "Anahtar Noktalar"}
                            </h4>
                            <ul className="space-y-2">
                                {displayKeyPoints.map((kp, i) => (
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
                            {isEn ? "Back to Image" : "Görüntüye Dön"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
