"use client";

import React, { useState, useEffect } from "react";
import { Share, X, PlusSquare, Download } from "lucide-react";
import { useLanguage } from "@/context/language-context";

// Register Service Worker globally
function registerServiceWorker() {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // SW registration failed silently
        });
    });
}

// BeforeInstallPromptEvent type for Android
interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export function PwaInstallPrompt() {
    const { t, language } = useLanguage();
    const [showPrompt, setShowPrompt] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);

    useEffect(() => {
        // Register service worker
        registerServiceWorker();

        // SSR guard
        if (typeof window === 'undefined') return;

        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        const isAndroidDevice = /android/.test(userAgent);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsAndroid(isAndroidDevice);

        const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as Navigator & { standalone?: boolean }).standalone;

        if (isStandalone) return;

        // Handle Android install prompt
        const handleBeforeInstall = (e: Event) => {
            e.preventDefault();
            deferredPrompt = e as BeforeInstallPromptEvent;
            setTimeout(() => setShowPrompt(true), 3000);
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstall);

        // Handle iOS prompt
        if (isIosDevice) {
            const timer = setTimeout(() => setShowPrompt(true), 3000);
            return () => { clearTimeout(timer); window.removeEventListener('beforeinstallprompt', handleBeforeInstall); };
        }

        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    }, []);

    const handleAndroidInstall = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setShowPrompt(false);
        }
        deferredPrompt = null;
    };

    if (!showPrompt) return null;

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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                        <Download className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                        <h3 id="pwa-prompt-title" className="font-bold text-white text-sm">{t("pwa.install")}</h3>
                        <p className="text-zinc-400 text-xs">
                            {t("pwa.installText")}
                        </p>

                        {isAndroid ? (
                            <button
                                onClick={handleAndroidInstall}
                                className="mt-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                {language === 'tr' ? 'Uygulamayı Yükle' : 'Install App'}
                            </button>
                        ) : (
                            <div className="flex flex-col gap-2 pt-1 text-sm text-cyan-400 font-medium">
                                <div className="flex items-center gap-2">
                                    1. <Share className="w-4 h-4" /> {language === 'tr' ? 'butonuna tıklayın' : 'tap the button'}
                                </div>
                                <div className="flex items-center gap-2">
                                    2. <PlusSquare className="w-4 h-4" /> {language === 'tr' ? '"Ana Ekrana Ekle" seçin' : '"Add to Home Screen"'}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Triangle pointer */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900/90 rotate-45 border-r border-b border-white/10" />
            </div>
        </div>
    );
}
