"use client";

import { useState, useMemo, useEffect } from "react";
import { SearchBar } from "@/components/search-bar";
import { PathologyCard } from "@/components/pathology-card";
import { brainPathologies } from "@/data/brain-pathologies";
import { Search, Brain, Sparkles } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem("radassist-favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  // Toggle favorite handler
  const toggleFavorite = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem("radassist-favorites", JSON.stringify(newFavorites));
  };

  const filteredPathologies = useMemo(() => {
    let result = brainPathologies;

    // Filter by Favorites if toggle is active
    if (showFavoritesOnly) {
      result = result.filter(p => favorites.includes(p.id));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.keyPoints.some(k => k.toLowerCase().includes(query))
      );
    }

    // Always Group by Category (Sort)
    return [...result].sort((a, b) => a.category.localeCompare(b.category));
  }, [searchQuery, favorites, showFavoritesOnly]);

  // Prevent hydration mismatch by processing only after load
  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#030712] relative aurora-bg selection:bg-indigo-500/30">

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-6 flex flex-col items-center justify-center text-center">

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="w-3 h-3" />
          <span>Yapay Zeka Destekli Radyoloji</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          RadAssist
        </h1>

        <div className="w-full max-w-2xl relative z-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="relative group mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl ring-1 ring-white/10 shadow-2xl">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${showFavoritesOnly
                ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                : "bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-600 hover:bg-slate-800"
                }`}
            >
              <Sparkles className={`w-4 h-4 ${showFavoritesOnly ? "fill-yellow-400" : ""}`} />
              {showFavoritesOnly ? "Favoriler Gösteriliyor" : "Sadece Favoriler"}
              {favorites.length > 0 && (
                <span className="ml-1 bg-white/10 px-1.5 py-0.5 rounded-full text-[10px]">
                  {favorites.length}
                </span>
              )}
            </button>

            <p className="text-slate-500 text-sm">
              Örn: <span className="text-slate-400 border-b border-indigo-500/30 mx-1">Glioblastom</span>, <span className="text-slate-400 border-b border-cyan-500/30 mx-1">İnme</span>
            </p>
          </div>
        </div>

      </div>

      {/* Grid Content */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24">
        {filteredPathologies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-slate-600 animate-in fade-in zoom-in duration-500">
            <Search className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">
              {showFavoritesOnly ? "Henüz favori eklenmemiş." : "Sonuç bulunamadı"}
            </p>
            {showFavoritesOnly && (
              <button
                onClick={() => setShowFavoritesOnly(false)}
                className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm underline underline-offset-4"
              >
                Tümünü Göster
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {filteredPathologies.map((pathology) => (
              <PathologyCard
                key={pathology.id}
                data={pathology}
                isFavorite={favorites.includes(pathology.id)}
                onToggleFavorite={() => toggleFavorite(pathology.id)}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
