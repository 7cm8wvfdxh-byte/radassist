"use client";

import React, { useState, useEffect } from "react";
import { Share, X, PlusSquare } from "lucide-react";

export function PwaInstallPrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if running on iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);

        // Check if running in standalone mode (already installed)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

        if (isIosDevice && !isStandalone) {
            setIsIOS(true);
            // Delay prompt to not annoy user immediately
            const timer = setTimeout(() => setShowPrompt(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!showPrompt || !isIOS) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[100] animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl relative">
                <button
                    onClick={() => setShowPrompt(false)}
                    className="absolute top-2 right-2 text-zinc-400 hover:text-white p-1"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0" />
                    <div className="space-y-2">
                        <h3 className="font-bold text-white text-sm">RadAssist'i Uygulama Olarak Yükle</h3>
                        <p className="text-zinc-400 text-xs">
                            Daha hızlı erişim ve tam ekran deneyimi için ana ekrana ekleyin.
                        </p>
                        <div className="flex flex-col gap-2 pt-1 text-sm text-cyan-400 font-medium">
                            <div className="flex items-center gap-2">
                                1. <Share className="w-4 h-4" /> butonuna tıklayın
                            </div>
                            <div className="flex items-center gap-2">
                                2. <PlusSquare className="w-4 h-4" /> "Ana Ekrana Ekle" seçin
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
