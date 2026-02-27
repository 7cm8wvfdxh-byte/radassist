"use client";

import { useState, useMemo, useEffect, useDeferredValue } from "react";
import { SearchBar } from "@/components/search-bar";
import { PathologyCard } from "@/components/pathology-card";
import { PathologyListItem } from "@/components/pathology-list-item";
import dynamic from "next/dynamic";

const AIAssistant = dynamic(() => import("@/components/ai-assistant").then(mod => ({ default: mod.AIAssistant })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>,
});
const ToolboxMode = dynamic(() => import("@/components/toolbox-mode").then(mod => ({ default: mod.ToolboxMode })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" /></div>,
});
const StructuredReporting = dynamic(() => import("@/components/structured-reporting").then(mod => ({ default: mod.StructuredReporting })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>,
});
const ComparisonMode = dynamic(() => import("@/components/comparison-mode").then(mod => ({ default: mod.ComparisonMode })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" /></div>,
});
const EmergencyPanel = dynamic(() => import("@/components/emergency-panel").then(mod => ({ default: mod.EmergencyPanel })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" /></div>,
});
const LearningStats = dynamic(() => import("@/components/learning-stats").then(mod => ({ default: mod.LearningStats })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" /></div>,
});
const AnatomyAtlas = dynamic(() => import("@/components/anatomy-atlas").then(mod => ({ default: mod.AnatomyAtlas })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>,
});
import { brainPathologies } from "@/data/brain-pathologies";
import { spinePathologies } from "@/data/spine-pathologies";
import { liverPathologies } from "@/data/liver-pathologies";
import { kidneyPathologies } from "@/data/kidney-pathologies";
import { lungPathologies } from "@/data/lung-pathologies";

import { breastPathologies } from "@/data/breast-pathologies";
import { mskPathologies } from "@/data/msk-pathologies";
import { gastroPathologies } from "@/data/gastro-pathologies";
import { gynecologyPathologies } from "@/data/gynecology-pathologies";
import { Search, Brain, Sparkles, LayoutGrid, List, X, Bone, Flame, Bean, Wind, Wrench, Scan, Dumbbell, Utensils, Heart, FileText, GitCompare, AlertTriangle, BarChart3, BookOpen } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { USG_FINDINGS, CT_FINDINGS, MRI_FINDINGS } from "@/data/lexicon";
import { announcements } from "@/data/announcements";
import { Pathology } from "@/types";
import { cn } from "@/lib/utils"; // Ensure cn is imported
import { performScoredSearch, getDidYouMeanSuggestions, addRecentSearch, SearchResult, getOrganFilters, OrganFilterResult } from "@/lib/search-utils";
import { useAuth } from "@/context/auth-context";
import { useLanguage } from "@/context/language-context";
import Link from "next/link"; // Need Link for navigation
import { LogIn, LogOut, User, Bell, ShieldCheck } from "lucide-react"; // Icons
import { LanguageSwitcher } from "@/components/language-switcher";
import { AdminNotifications } from "@/components/admin-notifications";

// Alan adı formatı - arama sonucu bağlam göstergesi
function formatFieldName(fieldName: string, lang: string): string {
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
  if (fieldName.startsWith("ct.")) return `BT (${fieldName.split(".")[1]})`;
  if (fieldName.startsWith("mri.")) return `MR (${fieldName.split(".")[1]})`;
  if (fieldName.startsWith("usg.")) return `USG`;
  if (fieldName.startsWith("xray.")) return `X-Ray`;
  if (fieldName.startsWith("pet.")) return `PET`;
  if (fieldName.startsWith("mammography.")) return lang === "tr" ? "Mamografi" : "Mammography";
  return fieldName;
}

export default function Home() {
  const { user, logout } = useAuth();
  const { language, t } = useLanguage();
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
  const [viewMode, setViewMode] = useState<"grid" | "list" | "ai" | "toolbox" | "report" | "compare" | "emergency" | "stats" | "anatomy">(() => {
    if (typeof window === 'undefined') return "grid";
    try {
      const savedView = localStorage.getItem("radassist-view-mode");
      const validModes = ["grid", "list", "ai", "toolbox", "report", "compare", "emergency", "stats", "anatomy"];
      if (savedView && validModes.includes(savedView)) {
        return savedView as "grid" | "list" | "ai" | "toolbox" | "report" | "compare" | "emergency" | "stats" | "anatomy";
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
  const [activeOrganFilter, setActiveOrganFilter] = useState<string | null>(null); // Organ filtre chip

  // Defer the search query to avoid blocking UI during heavy search computation
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Tüm patolojileri birleştir (öneri sistemi için)
  const allPathologies = useMemo(() => [
    ...brainPathologies.map(p => ({ ...p, organ: p.organ || 'Beyin' })),
    ...spinePathologies.map(p => ({ ...p, organ: p.organ || 'Omurga' })),
    ...liverPathologies.map(p => ({ ...p, organ: p.organ || 'Karaciğer' })),
    ...kidneyPathologies.map(p => ({ ...p, organ: p.organ || 'Böbrek' })),
    ...lungPathologies.map(p => ({ ...p, organ: p.organ || 'Akciğer' })),
    ...breastPathologies.map(p => ({ ...p, organ: p.organ || 'Meme' })),
    ...mskPathologies.map(p => ({ ...p, organ: p.organ || 'Kas-İskelet' })),
    ...gastroPathologies.map(p => ({ ...p, organ: p.organ || 'Gastrointestinal' })),
    ...gynecologyPathologies.map(p => ({ ...p, organ: p.organ || 'Jinekoloji' }))
  ], []);

  // Extra search sources (case studies, lexicon, announcements)
  const extraSearchSources = useMemo(() => ({
    caseStudies: caseStudies.map(cs => ({
      id: cs.id,
      title: cs.title,
      finalDiagnosis: cs.finalDiagnosis,
      patientHistory: cs.patientHistory,
      difficulty: cs.difficulty,
    })),
    lexiconTerms: [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS].map(f => ({
      id: f.id,
      label: f.label,
      category: f.category,
    })),
    announcements: announcements.map(a => ({
      id: a.id,
      title: a.title,
      type: a.type,
      content: a.content,
      url: a.url,
    })),
  }), []);

  const { filteredPathologies, searchResults, didYouMeanSuggestions, organFilters } = useMemo(() => {
    let pool: Pathology[] = [];

    // Arama aktifken her zaman tüm patolojilerde ara
    const hasActiveSearch = deferredSearchQuery.trim().length > 0;

    if (hasActiveSearch || searchGlobal) {
      pool = allPathologies;
    } else {
      switch (activeModule) {
        case "brain": pool = brainPathologies; break;
        case "spine": pool = spinePathologies; break;
        case "liver": pool = liverPathologies; break;
        case "kidney": pool = kidneyPathologies; break;
        case "lung": pool = lungPathologies; break;
        case "breast": pool = breastPathologies; break;
        case "msk": pool = mskPathologies; break;
        case "gi": pool = gastroPathologies; break;
        case "gyn": pool = gynecologyPathologies; break;
      }
    }

    // Favorites filter
    if (showFavoritesOnly) {
      pool = pool.filter(p => favorites.includes(p.id));
    }

    if (hasActiveSearch) {
      // Skorlu arama kullan (deferred to keep UI responsive)
      const scored = performScoredSearch(pool, deferredSearchQuery);

      // Sonuç az veya yoksa "bunu mu demek istediniz?" önerileri
      const dymSuggestions = getDidYouMeanSuggestions(pool, deferredSearchQuery, scored.length);

      // Organ bazlı filtre chip'leri
      const organFilters = scored.length > 0 ? getOrganFilters(scored) : [];

      return {
        filteredPathologies: scored.map(r => r.pathology),
        searchResults: scored,
        didYouMeanSuggestions: dymSuggestions,
        organFilters,
      };
    }

    // Arama yoksa kategori sıralaması uygula
    const getCategoryPriority = (cat: string) => {
      const lower = cat.toLowerCase();
      if (lower.includes('vasküler') || lower.includes('vascular')) return 1;
      if (lower.includes('neoplast') || lower.includes('mass') || lower.includes('tümör')) return 2;
      if (lower.includes('travma') || lower.includes('injury')) return 3;
      if (lower.includes('enfeksiyon') || lower.includes('infect') || lower.includes('inflam')) return 4;
      if (lower.includes('dejeneratif') || lower.includes('degener')) return 5;
      if (lower.includes('demiyelinizan') || lower.includes('demyel')) return 6;
      if (lower.includes('konjenital') || lower.includes('congeni')) return 7;
      return 50;
    };

    const sorted = [...pool].sort((a, b) => {
      const pA = getCategoryPriority(a.category);
      const pB = getCategoryPriority(b.category);
      if (pA !== pB) return pA - pB;
      return a.name.localeCompare(b.name, 'tr');
    });

    return {
      filteredPathologies: sorted,
      searchResults: [] as SearchResult[],
      didYouMeanSuggestions: [] as string[],
      organFilters: [] as OrganFilterResult[],
    };
  }, [deferredSearchQuery, favorites, showFavoritesOnly, activeModule, searchGlobal, allPathologies]);

  // Build lookup map from pathology ID → search result for context display
  const searchResultMap = useMemo(() => {
    const map = new Map<string, SearchResult>();
    for (const sr of searchResults) {
      map.set(sr.pathology.id, sr);
    }
    return map;
  }, [searchResults]);

  // Son aramayı kaydet (debounced)
  useEffect(() => {
    if (!searchQuery.trim()) return;
    const timer = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        addRecentSearch(searchQuery.trim());
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Prevent hydration mismatch by processing only after load
  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#030712] relative aurora-bg selection:bg-indigo-500/30">

      {/* Hero Section */}
      <div className="relative pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 flex flex-col items-center justify-center text-center">

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="w-3 h-3" />
          <span>{t("hero.aiPowered")}</span>
        </div>


        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          RadAsist
        </h1>

        {/* Hero Actions Container */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
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

          {/* Emergency Panel Button */}
          <button
            onClick={() => {
              setViewMode("emergency");
              localStorage.setItem("radassist-view-mode", "emergency");
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-700 delay-300"
          >
            <div className="absolute inset-0 bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <AlertTriangle className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-red-200 group-hover:text-red-100">{language === 'tr' ? 'Acil Radyoloji' : 'Emergency'}</span>
          </button>

          {/* Structured Reporting Button */}
          <button
            onClick={() => {
              setViewMode("report");
              localStorage.setItem("radassist-view-mode", "report");
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 hover:border-blue-500/40 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-700 delay-300"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <FileText className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-blue-200 group-hover:text-blue-100">{language === 'tr' ? 'Raporlama' : 'Reporting'}</span>
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

          <AdminNotifications />

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
          {viewMode !== "ai" && viewMode !== "toolbox" && viewMode !== "report" && viewMode !== "compare" && viewMode !== "emergency" && viewMode !== "stats" && viewMode !== "anatomy" && (
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center gap-1 p-1 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl relative max-w-full overflow-x-auto">
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

          {/* Search Bar */}
          {viewMode !== "ai" && viewMode !== "toolbox" && viewMode !== "report" && viewMode !== "compare" && viewMode !== "emergency" && viewMode !== "stats" && viewMode !== "anatomy" && (
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 group-focus-within:opacity-50 transition duration-1000 group-hover:duration-200 group-focus-within:duration-200"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl ring-1 ring-white/10 group-focus-within:ring-indigo-500/30 shadow-2xl group-focus-within:shadow-indigo-500/10 flex flex-col transition-all duration-300">
                <SearchBar
                  value={searchQuery}
                  onChange={(v) => { setSearchQuery(v); if (!v.trim()) setActiveOrganFilter(null); }}
                  placeholder={
                    searchGlobal
                      ? t("search.allModules")
                      : `${t(`organ.${activeModule === 'gi' ? 'gastro' : activeModule === 'gyn' ? 'gynecology' : activeModule}`)} ${t("search.inModule")}`
                  }
                  pathologies={allPathologies}
                  didYouMean={didYouMeanSuggestions}
                  isSearching={searchQuery !== deferredSearchQuery && searchQuery.trim().length > 0}
                  resultCount={searchQuery.trim() ? filteredPathologies.length : undefined}
                  extraSources={extraSearchSources}
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

                {/* Smart Filter Chips with mobile scroll indicator */}
                <div className="relative px-4 pb-4">
                  <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth" role="group" aria-label={t("search.chip.emergency")}>
                    {[
                      { labelKey: "search.chip.emergency", query: "acil" },
                      { labelKey: "search.chip.mass", query: "kitle" },
                      { labelKey: "search.chip.t2hyper", query: "t2 hiper" },
                      { labelKey: "search.chip.contrast", query: "kontrast" },
                      { labelKey: "search.chip.calcification", query: "kalsifikasyon" },
                      { labelKey: "search.chip.cyst", query: "kist" },
                    ].map(chip => (
                      <button
                        key={chip.labelKey}
                        onClick={() => {
                          if (searchQuery.toLowerCase().includes(chip.query)) {
                            setSearchQuery(prev => prev.replace(chip.query, "").trim());
                          } else {
                            setSearchQuery(prev => (prev + " " + chip.query).trim());
                          }
                        }}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border",
                          searchQuery.toLowerCase().includes(chip.query)
                            ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.15)]"
                            : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200"
                        )}
                      >
                        {t(chip.labelKey)}
                      </button>
                    ))}
                  </div>
                  {/* Mobile scroll fade indicator */}
                  <div className="absolute right-4 top-0 bottom-4 w-8 bg-gradient-to-l from-black/80 to-transparent pointer-events-none sm:hidden" />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {/* View Toggle */}
            <div className="bg-slate-800/50 p-1 rounded-full border border-slate-700 flex items-center flex-wrap justify-center">
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
                  setViewMode("ai");
                  localStorage.setItem("radassist-view-mode", "ai");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "ai" ? "bg-purple-500 text-white shadow-lg ring-2 ring-purple-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Patoloji Arama"
              >
                <Search className="w-4 h-4" />
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

              <div className="w-px h-4 bg-slate-700 mx-0.5" />

              <button
                onClick={() => {
                  setViewMode("emergency");
                  localStorage.setItem("radassist-view-mode", "emergency");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "emergency" ? "bg-red-500 text-white shadow-lg ring-2 ring-red-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Acil Radyoloji"
              >
                <AlertTriangle className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("report");
                  localStorage.setItem("radassist-view-mode", "report");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "report" ? "bg-blue-500 text-white shadow-lg ring-2 ring-blue-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Yapılandırılmış Raporlama"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("compare");
                  localStorage.setItem("radassist-view-mode", "compare");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "compare" ? "bg-violet-500 text-white shadow-lg ring-2 ring-violet-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Karşılaştırma Modu"
              >
                <GitCompare className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("stats");
                  localStorage.setItem("radassist-view-mode", "stats");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "stats" ? "bg-yellow-500 text-white shadow-lg ring-2 ring-yellow-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Öğrenme İstatistikleri"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setViewMode("anatomy");
                  localStorage.setItem("radassist-view-mode", "anatomy");
                }}
                className={`p-1.5 rounded-full transition-all ${viewMode === "anatomy" ? "bg-green-500 text-white shadow-lg ring-2 ring-green-500/50" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
                title="Anatomi Atlası"
              >
                <BookOpen className="w-4 h-4" />
              </button>
            </div>

            {/* Favorites Toggle */}
            {viewMode !== "ai" && viewMode !== "toolbox" && viewMode !== "report" && viewMode !== "compare" && viewMode !== "emergency" && viewMode !== "stats" && viewMode !== "anatomy" && (
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${showFavoritesOnly
                  ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                  : "bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-600 hover:bg-slate-800"
                  }`}
              >
                <Sparkles className={`w-4 h-4 ${showFavoritesOnly ? "fill-yellow-400" : ""}`} />
                {showFavoritesOnly ? t("home.favorites") : t("home.favorites")}
                {favorites.length > 0 && (
                  <span className="ml-1 bg-white/10 px-1.5 py-0.5 rounded-full text-[10px]">
                    {favorites.length}
                  </span>
                )}
              </button>
            )}
          </div>

          {viewMode !== "ai" && viewMode !== "toolbox" && viewMode !== "report" && viewMode !== "compare" && viewMode !== "emergency" && viewMode !== "stats" && viewMode !== "anatomy" && (
            <p className="mt-4 text-slate-500 text-xs flex items-center gap-1">
              <span className="hidden sm:inline text-slate-600">{t("search.shortcutHint")}</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500">
                {typeof navigator !== "undefined" && navigator.platform?.includes("Mac") ? "⌘" : "Ctrl+"}K
              </kbd>
              <span className="hidden sm:inline text-slate-600 mr-2">{t("search.shortcutKey")}</span>
              <span className="text-slate-700">|</span>
              {activeModule === 'brain' ? (
                <span className="ml-2">
                  {language === 'tr' ? 'Örn:' : 'e.g.'} <span className="text-slate-400 border-b border-indigo-500/30 mx-1">Glioblastom</span>, <span className="text-slate-400 border-b border-cyan-500/30 mx-1">{language === 'tr' ? 'İnme' : 'Stroke'}</span>
                </span>
              ) : (
                <span className="ml-2">
                  {language === 'tr' ? 'Örn:' : 'e.g.'} <span className="text-slate-400 border-b border-emerald-500/30 mx-1">{language === 'tr' ? 'Fıtık' : 'Hernia'}</span>, <span className="text-slate-400 border-b border-cyan-500/30 mx-1">{language === 'tr' ? 'Stenoz' : 'Stenosis'}</span>
                </span>
              )}
            </p>
          )}
        </div>

      </div>

      {/* Main Content Area */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 pb-24">

        {viewMode === "ai" ? (
          <AIAssistant />
        ) : viewMode === "toolbox" ? (
          <ToolboxMode />
        ) : viewMode === "report" ? (
          <StructuredReporting />
        ) : viewMode === "compare" ? (
          <ComparisonMode />
        ) : viewMode === "emergency" ? (
          <EmergencyPanel />
        ) : viewMode === "stats" ? (
          <LearningStats />
        ) : viewMode === "anatomy" ? (
          <AnatomyAtlas />
        ) : filteredPathologies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 sm:py-32 animate-in fade-in zoom-in duration-500">
            {/* Animated search illustration */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/5 flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-600" />
              </div>
              {/* Orbiting dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-indigo-500/30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-cyan-500/30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
            </div>

            {showFavoritesOnly ? (
              <>
                <p className="text-lg font-bold text-slate-400 mb-2">
                  {t("home.noFavorites")}
                </p>
                <p className="text-sm text-slate-600 mb-6 text-center max-w-sm">
                  {language === 'tr'
                    ? 'Patoloji kartlarındaki yıldız ikonuna tıklayarak favorilere ekleyebilirsiniz.'
                    : 'Click the star icon on pathology cards to add favorites.'}
                </p>
                <button
                  onClick={() => setShowFavoritesOnly(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/10 transition-all"
                >
                  {language === 'tr' ? 'Tümünü Göster' : 'Show All'}
                </button>
              </>
            ) : (
              <>
                <p className="text-xl font-bold text-slate-300 mb-2">
                  {searchQuery.trim() ? t("search.noResults") : t("search.emptyTitle")}
                </p>
                <p className="text-sm text-slate-500 mb-6 text-center max-w-md">
                  {searchQuery.trim()
                    ? t("search.noResultsHint")
                    : t("search.emptySubtitle")}
                </p>

                {/* Search tips */}
                {searchQuery.trim() ? (
                  <div className="flex flex-col items-center gap-3">
                    <button
                      onClick={() => setSearchGlobal(!searchGlobal)}
                      className="px-5 py-2.5 rounded-xl text-sm font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 transition-all"
                    >
                      {searchGlobal
                        ? (language === 'tr' ? 'Sadece bu modülde ara' : 'Search in current module only')
                        : t("search.tryGlobal")}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2.5 max-w-sm">
                    {[
                      { icon: "💡", text: t("search.emptyHint1") },
                      { icon: "🔬", text: t("search.emptyHint2") },
                      { icon: "🔗", text: t("search.emptyHint3") },
                      { icon: "🚫", text: t("search.advancedHint1") },
                      { icon: "🏷️", text: t("search.advancedHint2") },
                      { icon: "✏️", text: t("search.advancedHint3") },
                    ].map((hint, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-500 animate-in fade-in slide-in-from-bottom-2"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="text-base leading-none mt-0.5">{hint.icon}</span>
                        <span>{hint.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          viewMode === "grid" ? (
            <div className={searchQuery !== deferredSearchQuery ? "opacity-70 transition-opacity" : "transition-opacity"}>
            {/* Search context strip */}
            {searchQuery.trim() && searchResults.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4 px-1 animate-in fade-in duration-300">
                <span className="text-xs text-slate-500">
                  {language === 'tr' ? 'Eşleşme:' : 'Matched by:'}
                </span>
                {searchResults.some(r => r.matchType === "exact") && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/15 text-green-400 border border-green-500/20">
                    {language === 'tr' ? 'Tam eşleşme' : 'Exact match'}
                  </span>
                )}
                {searchResults.some(r => r.matchType === "synonym") && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/15 text-blue-400 border border-blue-500/20">
                    {language === 'tr' ? 'Eş anlamlı' : 'Synonym'}
                  </span>
                )}
                {searchResults.some(r => r.matchType === "fuzzy") && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/20">
                    {language === 'tr' ? 'Yakın eşleşme' : 'Fuzzy match'}
                  </span>
                )}
                {searchResults.length > 0 && searchResults[0].matchedFields.length > 0 && (
                  <span className="text-[10px] text-slate-600 ml-2">
                    {language === 'tr' ? 'En iyi eşleşme:' : 'Best match:'}{' '}
                    <span className="text-slate-400">
                      {formatFieldName(searchResults[0].matchedFields[0].fieldName, language)}
                    </span>
                  </span>
                )}
              </div>
            )}

            {/* Organ filtre chip'leri */}
            {searchQuery.trim() && organFilters.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 mb-4 px-1 animate-in fade-in duration-200">
                <span className="text-[10px] text-slate-600 font-medium uppercase tracking-wider">
                  {language === 'tr' ? 'Filtre:' : 'Filter:'}
                </span>
                <button
                  onClick={() => setActiveOrganFilter(null)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all",
                    !activeOrganFilter
                      ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                      : "bg-white/5 text-slate-500 border-white/10 hover:text-slate-300"
                  )}
                >
                  {language === 'tr' ? 'Tümü' : 'All'} ({filteredPathologies.length})
                </button>
                {organFilters.map(of => (
                  <button
                    key={of.organ}
                    onClick={() => setActiveOrganFilter(activeOrganFilter === of.organ ? null : of.organ)}
                    className={cn(
                      "px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all",
                      activeOrganFilter === of.organ
                        ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                        : "bg-white/5 text-slate-500 border-white/10 hover:text-slate-300"
                    )}
                  >
                    {of.organ} ({of.count})
                  </button>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              {(activeOrganFilter ? filteredPathologies.filter(p => (p.organ || 'Diğer') === activeOrganFilter) : filteredPathologies).map((pathology) => {
                const sr = searchResultMap.get(pathology.id);
                return (
                  <PathologyCard
                    key={pathology.id}
                    data={pathology}
                    isFavorite={favorites.includes(pathology.id)}
                    onToggleFavorite={() => toggleFavorite(pathology.id)}
                    highlightQuery={searchQuery}
                    matchContext={sr?.matchedFields}
                    matchType={sr?.matchType}
                  />
                );
              })}
            </div>
            </div>
          ) : (
            <div className={cn("max-w-4xl mx-auto flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300", searchQuery !== deferredSearchQuery && "opacity-70")}>
              {filteredPathologies.map((pathology) => {
                const sr = searchResultMap.get(pathology.id);
                return (
                  <PathologyListItem
                    key={pathology.id}
                    data={pathology}
                    isFavorite={favorites.includes(pathology.id)}
                    onToggleFavorite={() => toggleFavorite(pathology.id)}
                    onClick={() => setSelectedPathology(pathology)}
                    matchContext={sr?.matchedFields}
                    matchType={sr?.matchType}
                  />
                );
              })}
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
              highlightQuery={searchQuery}
              matchContext={searchResultMap.get(selectedPathology.id)?.matchedFields}
              matchType={searchResultMap.get(selectedPathology.id)?.matchType}
            />
          </div>
        </div>
      )}

    </div>
  );
}
