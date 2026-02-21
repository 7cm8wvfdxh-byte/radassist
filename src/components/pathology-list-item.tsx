import { Pathology } from "@/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { Star, ChevronRight, Activity } from "lucide-react";

interface PathologyListItemProps {
    data: Pathology;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
    onClick?: () => void;
}

export function PathologyListItem({ data, isFavorite = false, onToggleFavorite, onClick }: PathologyListItemProps) {
    const { language } = useLanguage();
    const isEn = language === "en";

    const displayName = isEn ? (data.nameEn || data.name) : data.name;
    const displayCategory = isEn ? (data.categoryEn || data.category) : data.category;
    const displayKeyPoints = isEn ? (data.keyPointsEn || data.keyPoints) : data.keyPoints;

    // Category Color Mapping
    const getCategoryStyles = (cat: string) => {
        const lowerCat = cat.toLowerCase();
        if (lowerCat.includes("vasküler") || lowerCat.includes("vascular")) return "bg-rose-500 shadow-rose-500/50";
        if (lowerCat.includes("neoplastik") || lowerCat.includes("neoplastic")) return "bg-purple-500 shadow-purple-500/50";
        if (lowerCat.includes("travma") || lowerCat.includes("trauma")) return "bg-amber-500 shadow-amber-500/50";
        if (lowerCat.includes("demiyelinizan") || lowerCat.includes("demyelinating")) return "bg-emerald-500 shadow-emerald-500/50";
        if (lowerCat.includes("enfeksiyon") || lowerCat.includes("infection")) return "bg-lime-500 shadow-lime-500/50";
        if (lowerCat.includes("konjenital") || lowerCat.includes("congenital") || lowerCat.includes("fakomatoz") || lowerCat.includes("phakomatosis")) return "bg-pink-500 shadow-pink-500/50";
        if (lowerCat.includes("dejeneratif") || lowerCat.includes("degenerative")) return "bg-sky-500 shadow-sky-500/50";
        return "bg-cyan-500 shadow-cyan-500/50";
    };

    const indicatorColor = getCategoryStyles(data.category); // Keep using original category for consistent color mapping or update helper to handle EN

    return (
        <div
            onClick={onClick}
            className="group relative w-full bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/30 rounded-xl p-4 transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-2"
        >
            {/* Color Indicator Strip */}
            <div className={cn("absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300", indicatorColor, "group-hover:w-2")} />

            <div className="flex items-center gap-4 flex-1 ml-3">
                {/* Star Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite?.();
                    }}
                    className={cn(
                        "p-2 rounded-full transition-all duration-300 z-10",
                        isFavorite ? "text-yellow-400 bg-yellow-400/10" : "text-slate-600 hover:text-yellow-200 hover:bg-slate-700"
                    )}
                >
                    <Star className={cn("w-4 h-4", isFavorite ? "fill-yellow-400" : "")} />
                </button>

                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {displayName}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        <span>{displayCategory}</span>
                    </div>
                </div>
            </div>

            {/* Key Points Preview (Desktop Only) */}
            <div className="hidden md:flex flex-1 items-center gap-2 text-slate-400 text-sm border-l border-slate-800 pl-4 h-full">
                <Activity className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="line-clamp-1">{displayKeyPoints[0]}</span>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
        </div>
    );
}
