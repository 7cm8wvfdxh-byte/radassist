"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Search, Clock, X, Sparkles, ChevronRight, Trash2, ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    SearchSuggestion,
    getSearchSuggestions,
    getRecentSearches,
    addRecentSearch,
    clearRecentSearches,
} from "@/lib/search-utils";
import { Pathology } from "@/types";
import { useLanguage } from "@/context/language-context";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
    pathologies?: Pathology[];
    didYouMean?: string[];
    resultCount?: number;
}

export function SearchBar({
    value,
    onChange,
    className,
    placeholder,
    pathologies = [],
    didYouMean = [],
    resultCount,
}: SearchBarProps) {
    const { t } = useLanguage();
    const [isFocused, setIsFocused] = useState(false);
    const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Debounced suggestion update
    const updateSuggestions = useCallback(
        (query: string) => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
                const recentSearches = getRecentSearches();
                const newSuggestions = getSearchSuggestions(pathologies, query, recentSearches);
                setSuggestions(newSuggestions);
                setSelectedIndex(-1);
                setShowDropdown(newSuggestions.length > 0);
            }, 150);
        },
        [pathologies]
    );

    useEffect(() => {
        updateSuggestions(value);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [value, updateSuggestions]);

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(e.target as Node)
            ) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (text: string) => {
        onChange(text);
        addRecentSearch(text);
        setShowDropdown(false);
        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!showDropdown || suggestions.length === 0) {
            if (e.key === "Enter" && value.trim()) {
                addRecentSearch(value.trim());
            }
            return;
        }

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0));
                break;
            case "ArrowUp":
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1));
                break;
            case "Enter":
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
                    handleSelect(suggestions[selectedIndex].text);
                } else if (value.trim()) {
                    addRecentSearch(value.trim());
                    setShowDropdown(false);
                }
                break;
            case "Escape":
                setShowDropdown(false);
                break;
            case "Tab":
                if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
                    e.preventDefault();
                    handleSelect(suggestions[selectedIndex].text);
                }
                break;
        }
    };

    const handleClear = () => {
        onChange("");
        inputRef.current?.focus();
    };

    const handleClearRecent = (e: React.MouseEvent) => {
        e.stopPropagation();
        clearRecentSearches();
        updateSuggestions(value);
    };

    const hasRecentSuggestions = suggestions.some(s => s.type === "recent");
    const isDropdownVisible = showDropdown && isFocused && suggestions.length > 0;

    return (
        <div className={cn("relative w-full", className)}>
            {/* Input */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search
                        className={cn(
                            "h-5 w-5 transition-colors duration-200",
                            isFocused ? "text-indigo-400" : "text-slate-500"
                        )}
                    />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    className="block w-full pl-12 pr-12 py-4 bg-transparent text-lg text-white placeholder-slate-500 focus:outline-none focus:ring-0 font-medium"
                    placeholder={placeholder || t("search.placeholder") || "Patoloji, bulgu veya sekans ara..."}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => {
                        setIsFocused(true);
                        updateSuggestions(value);
                    }}
                    onBlur={() => {
                        // Delay to allow click on dropdown
                        setTimeout(() => setIsFocused(false), 200);
                    }}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    role="combobox"
                    aria-expanded={isDropdownVisible}
                    aria-haspopup="listbox"
                    aria-autocomplete="list"
                />

                {/* Clear button */}
                {value && (
                    <button
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
                        aria-label={t("search.clear") || "Temizle"}
                        type="button"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>

            {/* Result count badge */}
            {value.trim() && resultCount !== undefined && (
                <div className="px-4 pb-1">
                    <span className="text-xs text-slate-500">
                        {resultCount > 0
                            ? `${resultCount} ${t("search.resultsFound") || "sonuç bulundu"}`
                            : t("search.noResults") || "Sonuç bulunamadı"
                        }
                    </span>
                </div>
            )}

            {/* Did you mean? */}
            {value.trim() && didYouMean.length > 0 && resultCount === 0 && (
                <div className="px-4 pb-2">
                    <span className="text-xs text-slate-400">
                        {t("search.didYouMean") || "Bunu mu demek istediniz?"}{" "}
                    </span>
                    {didYouMean.map((suggestion, i) => (
                        <button
                            key={suggestion}
                            onClick={() => handleSelect(suggestion)}
                            className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-2 mx-1 transition-colors"
                            type="button"
                        >
                            {suggestion}
                            {i < didYouMean.length - 1 ? "," : ""}
                        </button>
                    ))}
                </div>
            )}

            {/* Autocomplete Dropdown */}
            {isDropdownVisible && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 right-0 z-50 mt-1 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                    role="listbox"
                >
                    {/* Recent header */}
                    {hasRecentSuggestions && !value.trim() && (
                        <div className="flex items-center justify-between px-4 pt-3 pb-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                {t("search.recentSearches") || "Son Aramalar"}
                            </span>
                            <button
                                onClick={handleClearRecent}
                                className="flex items-center gap-1 text-[10px] text-slate-600 hover:text-red-400 transition-colors"
                                type="button"
                            >
                                <Trash2 className="w-3 h-3" />
                                {t("search.clearAll") || "Temizle"}
                            </button>
                        </div>
                    )}

                    {/* Suggestions list */}
                    <div className="max-h-72 overflow-y-auto py-1">
                        {suggestions.map((suggestion, index) => (
                            <button
                                key={`${suggestion.type}-${suggestion.text}-${index}`}
                                onClick={() => handleSelect(suggestion.text)}
                                onMouseEnter={() => setSelectedIndex(index)}
                                className={cn(
                                    "flex items-center gap-3 w-full px-4 py-2.5 text-left transition-colors",
                                    selectedIndex === index
                                        ? "bg-indigo-500/15 text-white"
                                        : "text-slate-300 hover:bg-white/5"
                                )}
                                role="option"
                                aria-selected={selectedIndex === index}
                                type="button"
                            >
                                {/* Icon */}
                                <div className={cn(
                                    "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center",
                                    suggestion.type === "pathology"
                                        ? "bg-indigo-500/15 text-indigo-400"
                                        : suggestion.type === "term"
                                            ? "bg-cyan-500/15 text-cyan-400"
                                            : "bg-slate-500/15 text-slate-400"
                                )}>
                                    {suggestion.type === "recent" ? (
                                        <Clock className="w-3.5 h-3.5" />
                                    ) : suggestion.type === "pathology" ? (
                                        <Sparkles className="w-3.5 h-3.5" />
                                    ) : (
                                        <Search className="w-3.5 h-3.5" />
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium truncate">
                                        {highlightMatch(suggestion.text, value)}
                                    </div>
                                    {suggestion.type === "pathology" && (suggestion.category || suggestion.organ) && (
                                        <div className="text-[10px] text-slate-500 truncate mt-0.5">
                                            {[suggestion.organ, suggestion.category].filter(Boolean).join(" · ")}
                                        </div>
                                    )}
                                </div>

                                {/* Type badge */}
                                <div className="flex-shrink-0">
                                    {suggestion.type === "pathology" ? (
                                        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                                    ) : suggestion.type === "recent" ? (
                                        <ArrowUpLeft className="w-3.5 h-3.5 text-slate-600" />
                                    ) : null}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Footer hint */}
                    <div className="px-4 py-2 border-t border-white/5 flex items-center gap-4 text-[10px] text-slate-600">
                        <span><kbd className="px-1 py-0.5 bg-slate-800 rounded text-slate-500 font-mono">↑↓</kbd> {t("search.navigate") || "gezin"}</span>
                        <span><kbd className="px-1 py-0.5 bg-slate-800 rounded text-slate-500 font-mono">↵</kbd> {t("search.select") || "seç"}</span>
                        <span><kbd className="px-1 py-0.5 bg-slate-800 rounded text-slate-500 font-mono">esc</kbd> {t("search.close") || "kapat"}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

// Helper: Highlight matching portion
function highlightMatch(text: string, query: string): React.ReactNode {
    if (!query.trim()) return text;
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase().trim();
    const idx = lowerText.indexOf(lowerQuery);
    if (idx === -1) return text;

    return (
        <>
            {text.slice(0, idx)}
            <span className="text-indigo-400 font-semibold">{text.slice(idx, idx + lowerQuery.length)}</span>
            {text.slice(idx + lowerQuery.length)}
        </>
    );
}
