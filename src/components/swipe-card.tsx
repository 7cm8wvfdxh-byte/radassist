import { motion, PanInfo, useMotionValue, useTransform, useAnimation } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { Pathology } from "@/types";
import { Brain, Info, RotateCw } from "lucide-react";
import { clsx } from "clsx";
import { useLanguage } from "@/context/language-context";

interface SwipeCardProps {
    data: Pathology;
    onSwipeRight: () => void;
    onSwipeLeft: () => void;
    isFront: boolean; // Is this the top card?
}

export const SwipeCard = React.memo(function SwipeCard({ data, onSwipeRight, onSwipeLeft, isFront }: SwipeCardProps) {
    const { language } = useLanguage();
    const isEn = language === "en";
    const [isFlipped, setIsFlipped] = useState(false);
    const controls = useAnimation();

    // Language-aware content
    const displayName = isEn ? (data.nameEn || data.name) : data.name;
    const displayCategory = isEn ? (data.categoryEn || data.category) : data.category;
    const displayKeyPoints = isEn ? (data.keyPointsEn || data.keyPoints) : data.keyPoints;
    const displayFindings = isEn ? (data.findingsEn || data.findings) : data.findings;

    // Motion Values for Dragging
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-25, 25]); // Rotate while dragging
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]); // Fade out on exit

    // Background Color Indicators
    const bgLike = useTransform(x, [0, 150], ["rgba(34, 197, 94, 0)", "rgba(34, 197, 94, 0.2)"]); // Green tint
    const bgNope = useTransform(x, [0, -150], ["rgba(239, 68, 68, 0)", "rgba(239, 68, 68, 0.2)"]); // Red tint

    const handleDragEnd = async (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset > 100 || velocity > 500) {
            await controls.start({ x: 500, opacity: 0 });
            onSwipeRight();
        } else if (offset < -100 || velocity < -500) {
            await controls.start({ x: -500, opacity: 0 });
            onSwipeLeft();
        } else {
            controls.start({ x: 0, opacity: 1 });
        }
    };

    // Determine cover image (Smart Cover Logic reused roughly or just take first)
    const coverImage = data.gallery && data.gallery.length > 0 ? data.gallery[0].url : null;

    return (
        <motion.div
            drag={isFront ? "x" : false} // Only top card is draggable
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x, rotate, opacity, zIndex: isFront ? 10 : 0 }}
            whileHover={{ scale: isFront ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(
                "absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing perspective-1000",
                !isFront && "pointer-events-none scale-95 opacity-50 translate-y-4" // Stack effect for back card
            )}
        >
            {/* Card Content Wrapper with Flip Logic */}
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-500 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900"
                style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 backface-hidden flex flex-col h-full bg-zinc-900">
                    {/* Image Section */}
                    <div className="relative flex-1 bg-black overflow-hidden">
                        {coverImage ? (
                            <Image
                                src={coverImage}
                                alt={displayName}
                                fill
                                className="object-cover pointer-events-none"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                                <Brain className="w-24 h-24 text-zinc-700 opacity-20" />
                            </div>
                        )}

                        {/* Overlay Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />

                        {/* Swipe Indicators (Overlay colors) */}
                        <motion.div style={{ backgroundColor: bgLike }} className="absolute inset-0 pointer-events-none" />
                        <motion.div style={{ backgroundColor: bgNope }} className="absolute inset-0 pointer-events-none" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-lg">
                                {displayCategory}
                            </span>
                        </div>
                    </div>

                    {/* Info Section (Bottom) */}
                    <div className="p-6 pb-24 relative z-10">
                        <div className="flex items-end justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-1 leading-tight drop-shadow-md">
                                    {displayName}
                                </h2>
                                <p className="text-zinc-400 text-sm font-medium flex items-center gap-1">
                                    <Info className="w-3 h-3" />
                                    {isEn ? "Tap for details" : "Detay için dokun"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div
                    className="absolute inset-0 backface-hidden bg-zinc-800 p-6 flex flex-col h-full overflow-y-auto"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                        <h3 className="text-xl font-bold text-indigo-400">{displayName}</h3>
                        <button
                            onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                            className="p-2 bg-white/5 rounded-full"
                            aria-label={isEn ? "Flip card" : "Kartı çevir"}
                            type="button"
                        >
                            <RotateCw className="w-4 h-4 text-zinc-400" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">
                                {isEn ? "Description" : "Tanım"}
                            </h4>
                            <p className="text-zinc-200 leading-relaxed font-medium">
                                {displayFindings?.ct?.non_contrast || displayFindings?.mri?.t2 || (isEn ? "No detailed description available." : "Detaylı açıklama bulunmuyor.")}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">
                                {isEn ? "Key Points" : "Anahtar Noktalar"}
                            </h4>
                            <ul className="space-y-2">
                                {displayKeyPoints.map((kp, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-zinc-300">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        {kp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 text-center text-xs text-zinc-500 font-mono">
                        {data.id}
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
});
