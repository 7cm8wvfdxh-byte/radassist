import { useState, useEffect } from "react";
import { Pathology } from "@/types";
import { SwipeCard } from "./swipe-card";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Trophy, Layers } from "lucide-react";

interface SwipeModeProps {
    pathologies: Pathology[];
    onToggleFavorite: (id: string) => void;
    onExit: () => void;
}

export function SwipeMode({ pathologies, onToggleFavorite, onExit }: SwipeModeProps) {
    // Local state to manage the "deck"
    // We shuffle initially, then pop from the array
    const [deck, setDeck] = useState<Pathology[]>([]);
    const [swipedCount, setSwipedCount] = useState(0);

    useEffect(() => {
        // Shuffle and set initial deck
        const shuffled = [...pathologies].sort(() => Math.random() - 0.5);
        setDeck(shuffled);
    }, [pathologies]);

    const handleSwipe = (direction: "left" | "right") => {
        if (deck.length === 0) return;

        const currentCard = deck[deck.length - 1];

        // If swiped right (Like/Know), toggle favorite
        if (direction === "right") {
            onToggleFavorite(currentCard.id);
        }

        // Remove card from deck (with a small delay to allow animation to start in child)
        setTimeout(() => {
            setDeck(prev => prev.slice(0, -1));
            setSwipedCount(c => c + 1);
        }, 200);
    };

    const restartDeck = () => {
        const shuffled = [...pathologies].sort(() => Math.random() - 0.5);
        setDeck(shuffled);
        setSwipedCount(0);
    };

    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)] w-full max-w-md mx-auto relative perspective-1000">

            {/* Progress Indicator */}
            <div className="absolute -top-10 left-0 right-0 flex justify-between items-center px-4 text-zinc-500 text-sm font-medium">
                <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    {deck.length} kart kaldı
                </span>
                <span>{Math.round((swipedCount / (swipedCount + deck.length || 1)) * 100)}% Tamamlandı</span>
            </div>

            <div className="relative w-full h-[65vh] md:h-[600px]">
                <AnimatePresence>
                    {deck.length > 0 ? (
                        deck.map((pathology, index) => {
                            // Only render the top 2 cards for performance
                            if (index < deck.length - 2) return null;

                            return (
                                <SwipeCard
                                    key={pathology.id}
                                    data={pathology}
                                    isFront={index === deck.length - 1}
                                    onSwipeLeft={() => handleSwipe("left")}
                                    onSwipeRight={() => handleSwipe("right")}
                                />
                            );
                        })
                    ) : (
                        // Empty State / Summary
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/50 rounded-3xl border border-dashed border-zinc-700 p-8 text-center"
                        >
                            <div className="bg-yellow-500/20 p-4 rounded-full mb-4">
                                <Trophy className="w-12 h-12 text-yellow-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Harika İş!</h3>
                            <p className="text-zinc-400 mb-8">
                                Tüm kartları tamamladın.
                                <br />Toplam {swipedCount} patoloji gözden geçirildi.
                            </p>

                            <div className="flex flex-col gap-3 w-full">
                                <button
                                    onClick={restartDeck}
                                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    Tekrar Oyna
                                </button>
                                <button
                                    onClick={onExit}
                                    className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-medium transition-all"
                                >
                                    Listeye Dön
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Controls (visible only if deck has cards) */}
            {deck.length > 0 && (
                <div className="absolute -bottom-20 flex gap-6 items-center">
                    <button
                        className="p-4 bg-zinc-800 rounded-full text-red-400 hover:bg-red-500/20 hover:scale-110 transition-all border border-zinc-700 shadow-xl"
                        onClick={() => handleSwipe("left")}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                    <button
                        className="p-4 bg-zinc-800 rounded-full text-green-400 hover:bg-green-500/20 hover:scale-110 transition-all border border-zinc-700 shadow-xl"
                        onClick={() => handleSwipe("right")}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </button>
                </div>
            )}
        </div>
    );
}
