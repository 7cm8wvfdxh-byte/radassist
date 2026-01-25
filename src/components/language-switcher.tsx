"use client";

import React from "react";
import { useLanguage, Language } from "@/context/language-context";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
    className?: string;
    variant?: "icon" | "full" | "minimal";
}

export function LanguageSwitcher({ className, variant = "full" }: LanguageSwitcherProps) {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "tr" ? "en" : "tr");
    };

    if (variant === "icon") {
        return (
            <button
                onClick={toggleLanguage}
                className={cn(
                    "p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors",
                    className
                )}
                aria-label={language === "tr" ? "Switch to English" : "Türkçe'ye geç"}
            >
                <Globe className="w-5 h-5" />
            </button>
        );
    }

    if (variant === "minimal") {
        return (
            <button
                onClick={toggleLanguage}
                className={cn(
                    "px-2 py-1 rounded text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-colors",
                    className
                )}
            >
                {language === "tr" ? "EN" : "TR"}
            </button>
        );
    }

    return (
        <div className={cn("flex items-center gap-1 bg-white/5 rounded-lg p-1", className)}>
            <button
                onClick={() => setLanguage("tr")}
                className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                    language === "tr"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "text-zinc-400 hover:text-white"
                )}
            >
                TR
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                    language === "en"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "text-zinc-400 hover:text-white"
                )}
            >
                EN
            </button>
        </div>
    );
}
