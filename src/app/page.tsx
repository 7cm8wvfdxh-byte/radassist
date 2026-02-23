"use client";

import { useState, useMemo, useEffect } from "react";
import { SearchBar } from "@/components/search-bar";
import { PathologyCard } from "@/components/pathology-card";
import { PathologyListItem } from "@/components/pathology-list-item";
import { QuizMode } from "@/components/quiz-mode";
import { CaseStudyMode } from "@/components/case-study-mode";
import { AIAssistant } from "@/components/ai-assistant";
import { SwipeMode } from "@/components/swipe-mode";
import { ToolboxMode } from "@/components/toolbox-mode";
import { brainPathologies } from "@/data/brain-pathologies";
import { spinePathologies } from "@/data/spine-pathologies";
import { liverPathologies } from "@/data/liver-pathologies";
import { kidneyPathologies } from "@/data/kidney-pathologies";
import { lungPathologies } from "@/data/lung-pathologies";

import { breastPathologies } from "@/data/breast-pathologies";
import { mskPathologies } from "@/data/msk-pathologies";
import { gastroPathologies } from "@/data/gastro-pathologies";
import { gynecologyPathologies } from "@/data/gynecology-pathologies";
import { Search, Brain, Sparkles, LayoutGrid, List, X, GraduationCap, Bone, Stethoscope, Wand2, Bot, Flame, Bean, Wind, Trophy, Library, Wrench, Scan, Dumbbell, Utensils, Heart } from "lucide-react";
import { DiagnosisWizard } from "@/components/diagnosis-wizard";
import { DailyCaseModal } from "@/components/daily-case-modal";
import { Pathology } from "@/types";
import { cn } from "@/lib/utils"; // Ensure cn is imported
import { performSmartSearch } from "@/lib/search-utils";
import { useAuth } from "@/context/auth-context";
import { useLanguage } from "@/context/language-context";
import Link from "next/link"; // Need Link for navigation
import { LogIn, LogOut, User, Bell, ShieldCheck } from "lucide-react"; // Icons
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Home() {
  const { user, logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem("radassist-favorites");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch { /* ignore */ }
    return [];
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list" | "quiz" | "case" | "wizard" | "ai" | "swipe" | "toolbox">(() => {
    if (typeof window === 'undefined') return "grid";
    try {
      const savedView = localStorage.getItem("radassist-view-mode");
      const validModes = ["grid", "list", "quiz", "case", "wizard", "ai", "swipe", "toolbox"];
      if (savedView && validModes.includes(savedView)) {
        return savedView as "grid" | "list" | "quiz" | "case" | "wizard" | "ai" | "swipe" | "toolbox";
      }
    } catch { /* ignore */ }
    return "grid";
  });
  const [activeModule, setActiveModule] = useState<"brain" | "spine" | "liver" | "kidney" | "lung" | "breast" | "msk" | "gi" | "gyn">(() => {
    if (typeof window === 'undefined') return "brain";
    try {
      const savedModule = localStorage.getItem("radassist-module");
      const validModules = ["brain", "spine", "liver", "kidney", "lung", "breast", "msk", "gi", "gyn"];
      if (savedModule && validModules.includes(savedModule)) {
        return savedModule as "brain" | "spine" | "liver" | "kidney" | "lung" | "breast" | "msk" | "gi" | "gyn";
      }
    } catch { /* ignore */ }
    return "brain";
  });
  const [selectedPathology, setSelectedPathology] = useState<Pathology | null>(null);
  const [showDailyModal, setShowDailyModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Mark as loaded after client hydration (intentional setState-in-effect for hydration detection)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const [searchGlobal, setSearchGlobal] = useState(false); // Global search toggle

  const filteredPathologies = useMemo(() => {
    let result: Pathology[] = [];

    if (searchGlobal) {
      // Combine ALL modules if global search is on
      result = [
        ...brainPathologies.map(p => ({ ...p, organ: 'Beyin' })),
        ...spinePathologies.map(p => ({ ...p, organ: 'Omurga' })),
        ...liverPathologies.map(p => ({ ...p, organ: 'Karaciğer' })),
        ...kidneyPathologies.map(p => ({ ...p, organ: 'Böbrek' })),
        ...lungPathologies.map(p => ({ ...p, organ: 'Akciğer' })),
        ...breastPathologies.map(p => ({ ...p, organ: 'Meme' })),
        ...mskPathologies.map(p => ({ ...p, organ: 'Kas-İskelet' })),
        ...gastroPathologies.map(p => ({ ...p, organ: 'Gastrointestinal' })),
        ...gynecologyPathologies.map(p => ({ ...p, organ: 'Jinekoloji' }))
      ];
    } else {
      // Select data source based on active module
      switch (activeModule) {
        case "brain": result = brainPathologies; break;
        case "spine": result = spinePathologies; break;
        case "liver": result = liverPathologies; break;
        case "kidney": result = kidneyPathologies; break;
        case "lung": result = lungPathologies; break;
        case "breast": result = breastPathologies; break;
        case "msk": result = mskPathologies; break;
        case "gi": result = gastroPathologies; break;
        case "gyn": result = gynecologyPathologies; break;
      }
    }

    // Filter by Favorites if toggle is active
    if (showFavoritesOnly) {
      result = result.filter(p => favorites.includes(p.id));
    }

    if (searchQuery.trim()) {
      // Use the new Smart Search utility
      result = performSmartSearch(result, searchQuery);
    }

    // Always Group by Category (Sort)
    return [...result].sort((a, b) => a.category.localeCompare(b.category));
  }, [searchQuery, favorites, showFavoritesOnly, activeModule, searchGlobal]);

  // Prevent hydration mismatch by processing only after load
  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#030712] relative aurora-bg selection:bg-indigo-500/30">

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-6 flex flex-col items-center justify-center text-center">

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="w-3 h-3" />
          <span>{t("hero.aiPowered")}</span>
        </div>


        <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          RadAsist
        </h1>

        {/* Hero Actions Container */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {/* Daily Challenge Button */}
          <button
            onClick={() => setShowDailyModal(true)}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 hover:border-amber-500/40 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-700 delay-150"
          >
            <div className="absolute inset-0 bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <Trophy className="w-5 h-5 text-amber-500 group-hover:animate-bounce" />
            <span className="text-sm font-bold text-amber-200 group-hover:text-amber-100">{t("hero.dailyCard")}</span>
            <span className="bg-amber-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded ml-1 animate-pulse">{t("general.new")}</span>
          </button>

          {/* Diagnosis Wizard Button */}
          <button
            onClick={() => {
              setViewMode("wizard");
              localStorage.setItem("radassist-view-mode", "wizard");
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-700 delay-200"
          >
            <div className="absolute inset-0 bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <Wand2 className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-bold text-purple-200 group-hover:text-purple-100">{t("mode.diagnosis")}</span>
          </button>

          {/* Swipe Mode Button (Mobile First) */}
          <button
            onClick={() => {
              setViewMode("swipe");
              localStorage.setItem("radassist-view-mode", "swipe");
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 hover:border-pink-500/40 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-700 delay-300"
          >
            <div className="absolute inset-0 bg-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <Library className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-pink-200 group-hover:text-pink-100">{t("hero.cardMode")}</span>
          </button>

          {/* Toolbox Mode Button */}
          <button
            onClick={() => {
              setViewMode("toolbox");
              localStorage.setItem("radassist-view-mode", "toolbox");
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 hover:border-teal-500/40 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-700 delay-300"
          >
            <div className="absolute inset-0 bg-teal-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <Wrench className="w-5 h-5 text-teal-400 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-bold text-teal-200 group-hover:text-teal-100">{t("mode.toolbox")}</span>
          </button>
        </div>

        {/* User Profile / Auth */}
        <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
          <LanguageSwitcher variant="full" />

          <Link href="/community" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group" aria-label={t("nav.community")}>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span className="sr-only md:not-sr-only md:block text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{t("nav.community")}</span>
          </Link>

          <Link href="/announcements" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative" aria-label={t("nav.announcements")}>
            <div className="relative">
              <Bell className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" aria-hidden="true" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-black" aria-hidden="true" />
            </div>
            <span className="sr-only md:not-sr-only md:block text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{t("nav.announcements")}</span>
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
          >
            <span className={`text-xs font-bold ${language === 'tr' ? 'text-white' : 'text-zinc-500'}`}>TR</span>
            <div className="w-8 h-4 bg-zinc-800 rounded-full relative mx-1 border border-white/10">
              <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-indigo-500 transition-all duration-300 ${language === 'en' ? 'left-[18px]' : 'left-0.5'}`} />
            </div>
            <span className={`text-xs font-bold ${language === 'en' ? 'text-white' : 'text-zinc-500'}`}>EN</span>
          </button>
          {user ? (
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full pl-4 pr-2 py-1.5 border border-white/10 shadow-lg">
              <div className="flex flex-col items-end mr-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white leading-none">{user.name}</span>
                  {user.is_admin && (
                    <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[9px] font-bold">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      YÖNETİCİ
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-cyan-400 leading-none mt-0.5">{user.specialty}</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <button
                onClick={logout}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 flex items-center justify-center transition-colors"
                aria-label={t("nav.logout")}
                type="button"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95">
              <LogIn className="w-4 h-4 text-cyan-400" />
              <span>{t("auth.login")}</span>
            </Link>
          )}
        </div>

        <div className="w-full max-w-3xl relative z-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">

          {/* Module Selector - 5 Organs */}
          {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && viewMode !== "toolbox" && (
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center gap-1 p-1 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl relative">
                <button
                  onClick={() => {
                    setActiveModule("brain");
                    localStorage.setItem("radassist-module", "brain");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "brain"
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Brain className="w-4 h-4" />
                  <span>{t("organ.brain")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("spine");
                    localStorage.setItem("radassist-module", "spine");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "spine"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Bone className="w-4 h-4" />
                  <span>{t("organ.spine")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("liver");
                    localStorage.setItem("radassist-module", "liver");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "liver"
                      ? "bg-rose-600 text-white shadow-lg shadow-rose-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Flame className="w-4 h-4" />
                  <span>{t("organ.liver")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("kidney");
                    localStorage.setItem("radassist-module", "kidney");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "kidney"
                      ? "bg-amber-600 text-white shadow-lg shadow-amber-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Bean className="w-4 h-4" />
                  <span>{t("organ.kidney")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("lung");
                    localStorage.setItem("radassist-module", "lung");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "lung"
                      ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Wind className="w-4 h-4" />
                  <span>{t("organ.lung")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("breast");
                    localStorage.setItem("radassist-module", "breast");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "breast"
                      ? "bg-pink-600 text-white shadow-lg shadow-pink-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Scan className="w-4 h-4" />
                  <span>{t("organ.breast")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("msk");
                    localStorage.setItem("radassist-module", "msk");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "msk"
                      ? "bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>{t("organ.msk")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("gi");
                    localStorage.setItem("radassist-module", "gi");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "gi"
                      ? "bg-amber-600 text-white shadow-lg shadow-amber-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Utensils className="w-4 h-4" />
                  <span>{t("organ.gastro")}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveModule("gyn");
                    localStorage.setItem("radassist-module", "gyn");
                    setShowFavoritesOnly(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative z-10",
                    activeModule === "gyn"
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Heart className="w-4 h-4" />
                  <span>{t("organ.gynecology")}</span>
                </button>
              </div>
            </div>
          )}

          {/* Hide Search Bar in Quiz Mode */}
          {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && viewMode !== "toolbox" && (
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl ring-1 ring-white/10 shadow-2xl flex flex-col">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder={
                    searchGlobal
                      ? t("search.allModules")
                      : `${t(`organ.${activeModule === 'gi' ? 'gastro' : activeModule === 'gyn' ? 'gynecology' : activeModule}`)} ${t("search.inModule")}`
                  }
                />

                {/* Global Search Toggle */}
                <div className="px-4 pb-3 flex items-center justify-end gap-2">
                  <label className="flex items-center gap-2 cursor-pointer group/toggle select-none">
                    <div className={`w-3 h-3 rounded-full border ${searchGlobal ? "bg-indigo-500 border-indigo-500" : "border-slate-500 group-hover/toggle:border-indigo-400"} transition-all`} />
                    <input type="checkbox" checked={searchGlobal} onChange={(e) => setSearchGlobal(e.target.checked)} className="hidden" />
                    <span className={`text-xs font-medium transition-colors ${searchGlobal ? "text-indigo-400" : "text-slate-500 group-hover/toggle:text-slate-300"}`}>
                      {t("search.searchAllModules")}
                    </span>
                  </label>
                </div>

                {/* Smart Filter Chips */}
                <div className="px-4 pb-4 flex gap-2 overflow-x-auto no-scrollbar mask-gradient-r">
                  {[
                    { label: "Acil", query: "acil" },
                    { label: "Kitle", query: "kitle" },
                    { label: "T2 Hiper", query: "t2 hiper" },
                    { label: "Kontrast+", query: "kontrast" },
                    { label: "Kalsifikasyon", query: "kalsifikasyon" },
                    { label: "Kist", query: "kist" },
                  ].map(chip => (
                    <button
                      key={chip.label}
                      onClick={() => {
                        // Toggle logic: If already in query, remove it. Else append.
                        if (searchQuery.toLowerCase().includes(chip.query)) {
                          setSearchQuery(prev => prev.replace(chip.query, "").trim());
                        } else {
                          setSearchQuery(prev => (prev + " " + chip.query).trim());
                        }
                      }}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border",
                        searchQuery.toLowerCase().includes(chip.query)
                          ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/50"
                          : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200"
                      )}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
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

              <button
                onClick={() => {
                  setViewMode("toolbox");
                  localStorage.setItem("radassist-view-mode", "toolbox");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "toolbox" ? "bg-teal-500 text-white shadow-lg ring-2 ring-teal-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Alet Çantası"
              >
                <Wrench className="w-4 h-4" />
              </button>
            </div>

            {/* Favorites Toggle (Hide in Quiz) */}
            {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && viewMode !== "toolbox" && (
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

          {viewMode !== "quiz" && viewMode !== "case" && viewMode !== "wizard" && viewMode !== "ai" && viewMode !== "toolbox" && (
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
        ) : viewMode === "swipe" ? (
          <SwipeMode
            pathologies={filteredPathologies}
            onToggleFavorite={toggleFavorite}
            onExit={() => setViewMode("grid")}
          />
        ) : viewMode === "toolbox" ? (
          <ToolboxMode />
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
                  highlightQuery={searchQuery} // Pass highlight query
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
              highlightQuery={searchQuery} // Pass highlight query
            />
          </div>
        </div>
      )}

      {/* Daily Case Modal */}
      <DailyCaseModal isOpen={showDailyModal} onClose={() => setShowDailyModal(false)} />
    </div>
  );
}
