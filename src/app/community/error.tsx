"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CommunityError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [lang, setLang] = useState<"tr" | "en">("tr");

    useEffect(() => {
        console.error("Community error:", error);
        try {
            const stored = localStorage.getItem("radasist-language");
            if (stored === "en") setLang("en");
        } catch { /* ignore */ }
    }, [error]);

    const isEn = lang === "en";

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="text-5xl" aria-hidden="true">&#128172;</div>
                <h2 className="text-xl font-bold">
                    {isEn ? "Forum could not be loaded" : "Forum yuklenemedi"}
                </h2>
                <p className="text-zinc-400 text-sm">
                    {isEn
                        ? "There was a problem loading the community page. Please try again."
                        : "Topluluk sayfası yuklenirken bir sorun olustu. Lutfen tekrar deneyin."}
                </p>
                <div className="flex gap-3 justify-center">
                    <button
                        onClick={reset}
                        className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-colors"
                    >
                        {isEn ? "Try Again" : "Tekrar Dene"}
                    </button>
                    <Link
                        href="/"
                        className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-colors"
                    >
                        {isEn ? "Home" : "Ana Sayfa"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
