"use client";

import React, { useState, useEffect } from "react";
import { Share, X, PlusSquare } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function PwaInstallPrompt() {
    const { t, language } = useLanguage();
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // SSR guard - only access window on client
        if (typeof window === 'undefined') return;

        // Check if running on iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);

        // Check if running in standalone mode (already installed)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as Navigator & { standalone?: boolean }).standalone;

        let timer: ReturnType<typeof setTimeout> | null = null;

        if (isIosDevice && !isStandalone) {
            setIsIOS(true);
            // Delay prompt to not annoy user immediately
            timer = setTimeout(() => setShowPrompt(true), 3000);
        }

        // Cleanup function always runs on unmount
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, []);

    if (!showPrompt || !isIOS) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[100] animate-in slide-in-from-bottom-5 duration-500" role="dialog" aria-labelledby="pwa-prompt-title">
            <div className="bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl relative">
                <button
                    onClick={() => setShowPrompt(false)}
                    className="absolute top-2 right-2 text-zinc-400 hover:text-white p-1"
                    aria-label={t("general.close")}
                    type="button"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0" aria-hidden="true" />
                    <div className="space-y-2">
                        <h3 id="pwa-prompt-title" className="font-bold text-white text-sm">{t("pwa.install")}</h3>
                        <p className="text-zinc-400 text-xs">
                            {t("pwa.installText")}
                        </p>
                        <div className="flex flex-col gap-2 pt-1 text-sm text-cyan-400 font-medium">
                            <div className="flex items-center gap-2">
                                1. <Share className="w-4 h-4" /> {language === 'tr' ? 'butonuna tıklayın' : 'tap the button'}
                            </div>
                            <div className="flex items-center gap-2">
                                2. <PlusSquare className="w-4 h-4" /> {language === 'tr' ? '"Ana Ekrana Ekle" seçin' : '"Add to Home Screen"'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Triangle pointer for bottom bar (typical iOS Safari position) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900/90 rotate-45 border-r border-b border-white/10" />
            </div>
        </div>
    );
}
