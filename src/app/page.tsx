"use client";

import { useState, useMemo, useEffect } from "react";
import { SearchBar } from "@/components/search-bar";
import { PathologyCard } from "@/components/pathology-card";
import { PathologyListItem } from "@/components/pathology-list-item";
import { QuizMode } from "@/components/quiz-mode";
import { CaseStudyMode } from "@/components/case-study-mode";
import { AIAssistant } from "@/components/ai-assistant";
import { brainPathologies } from "@/data/brain-pathologies";
import { spinePathologies } from "@/data/spine-pathologies";
import { Search, Brain, Sparkles, LayoutGrid, List, X, GraduationCap, Bone, Stethoscope, Wand2, Bot } from "lucide-react";
import { DiagnosisWizard } from "@/components/diagnosis-wizard";
import { Pathology } from "@/types";
import { cn } from "@/lib/utils"; // Ensure cn is imported

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list" | "quiz" | "case" | "wizard" | "ai">("grid");
  const [activeModule, setActiveModule] = useState<"brain" | "spine">("brain");
  const [selectedPathology, setSelectedPathology] = useState<Pathology | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem("radassist-favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
    const savedView = localStorage.getItem("radassist-view-mode");
    if (savedView) {
      setViewMode(savedView as "grid" | "list" | "quiz" | "case" | "wizard" | "ai");
    }
    const savedModule = localStorage.getItem("radassist-module");
    if (savedModule) {
      setActiveModule(savedModule as "brain" | "spine");
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
    // Select data source based on active module
    let result = activeModule === "brain" ? brainPathologies : spinePathologies;

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
  }, [searchQuery, favorites, showFavoritesOnly, activeModule]);

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

          {/* Module Selector (Brain / Spine) - NEW */}
          {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && (
            <div className="flex justify-center mb-8">
              <div className="flex p-1 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl relative">
                <button
                  onClick={() => {
                    setActiveModule("brain");
                    localStorage.setItem("radassist-module", "brain");
                    setShowFavoritesOnly(false); // Reset filter on switch
                  }}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative z-10",
                    activeModule === "brain"
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Brain className="w-4 h-4" />
                  <span>Beyin</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("spine");
                    localStorage.setItem("radassist-module", "spine");
                    setShowFavoritesOnly(false); // Reset filter on switch
                  }}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative z-10",
                    activeModule === "spine"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Bone className="w-4 h-4" />
                  <span>Omurga</span>
                </button>

                {/* Animated Glint or Border? Maybe simpler is better for now */}
              </div>
            </div>
          )}

          {/* Hide Search Bar in Quiz Mode */}
          {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && (
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl ring-1 ring-white/10 shadow-2xl">
                <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={`${activeModule === 'brain' ? "Beyin" : "Omurga"} patolojisi ara...`} />
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* View Toggle */}
            <div className="bg-slate-800/50 p-1 rounded-full border border-slate-700 flex items-center">
              <button
                onClick={() => {
                  setViewMode("grid");
                  localStorage.setItem("radassist-view-mode", "grid");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "grid" ? "bg-indigo-500 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Izgara Görünümü"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("list");
                  localStorage.setItem("radassist-view-mode", "list");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "list" ? "bg-indigo-500 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Liste Görünümü"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("quiz");
                  localStorage.setItem("radassist-view-mode", "quiz");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "quiz" ? "bg-indigo-500 text-white shadow-lg ring-2 ring-indigo-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Quiz Modu"
              >
                <GraduationCap className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("case");
                  localStorage.setItem("radassist-view-mode", "case");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "case" ? "bg-emerald-500 text-white shadow-lg ring-2 ring-emerald-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Vaka Modu (Grand Rounds)"
              >
                <Stethoscope className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("wizard");
                  localStorage.setItem("radassist-view-mode", "wizard");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "wizard" ? "bg-cyan-500 text-white shadow-lg ring-2 ring-cyan-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Tanı & Rapor Sihirbazı"
              >
                <Wand2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("ai");
                  localStorage.setItem("radassist-view-mode", "ai");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "ai" ? "bg-purple-500 text-white shadow-lg ring-2 ring-purple-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="AI Asistan"
              >
                <Bot className="w-4 h-4" />
              </button>
            </div>

            {/* Favorites Toggle (Hide in Quiz) */}
            {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && (
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${showFavoritesOnly
                  ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                  : "bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-600 hover:bg-slate-800"
                  }`}
              >
                <Sparkles className={`w-4 h-4 ${showFavoritesOnly ? "fill-yellow-400" : ""}`} />
                {showFavoritesOnly ? "Favoriler" : "Favorilerim"}
                {favorites.length > 0 && (
                  <span className="ml-1 bg-white/10 px-1.5 py-0.5 rounded-full text-[10px]">
                    {favorites.length}
                  </span>
                )}
              </button>
            )}
          </div>

          {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && (
            <p className="mt-4 text-slate-500 text-xs">
              {activeModule === 'brain' ? (
                <>Örn: <span className="text-slate-400 border-b border-indigo-500/30 mx-1">Glioblastom</span>, <span className="text-slate-400 border-b border-cyan-500/30 mx-1">İnme</span></>
              ) : (
                <>Örn: <span className="text-slate-400 border-b border-emerald-500/30 mx-1">Fıtık</span>, <span className="text-slate-400 border-b border-cyan-500/30 mx-1">Stenoz</span>, <span className="text-slate-400 border-b border-rose-500/30 mx-1">Kırık</span></>
              )}
            </p>
          )}
        </div>

      </div>

      {/* Main Content Area */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24">

        {viewMode === "quiz" ? (
          // Pass only active module pathologies to Quiz if needed, or keeping it global?
          // Let's modify QuizMode later to support modules. Ideally it uses the currently active store.
          // For now, QuizMode imports 'brainPathologies' directly. We might need to prop drill or update Context.
          // Updating QuizMode to accept data prop would be best. 
          // But for this step let's just show Brain Quiz for now or update it next step.
          <QuizMode />
        ) : viewMode === "case" ? (
          <CaseStudyMode />
        ) : viewMode === "wizard" ? (
          <DiagnosisWizard activeModule={activeModule} />
        ) : viewMode === "ai" ? (
          <AIAssistant />
        ) : filteredPathologies.length === 0 ? (
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
          viewMode === "grid" ? (
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
          ) : (
            <div className="max-w-4xl mx-auto flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              {filteredPathologies.map((pathology) => (
                <PathologyListItem
                  key={pathology.id}
                  data={pathology}
                  isFavorite={favorites.includes(pathology.id)}
                  onToggleFavorite={() => toggleFavorite(pathology.id)}
                  onClick={() => setSelectedPathology(pathology)}
                />
              ))}
            </div>
          )
        )}
      </div>

      {/* Modal Overlay for List View Selection */}
      {selectedPathology && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPathology(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl animate-in zoom-in-95 duration-300 no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPathology(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 backdrop-blur-md transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <PathologyCard
              data={selectedPathology}
              isFavorite={favorites.includes(selectedPathology.id)}
              onToggleFavorite={() => toggleFavorite(selectedPathology.id)}
            />
          </div>
        </div>
      )}

    </div>
  );
}
