"use client";

import { useEffect, useState } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [lang, setLang] = useState<"tr" | "en">("tr");

    useEffect(() => {
        console.error("RadAsist error:", error);
        try {
            const stored = localStorage.getItem("radasist-language");
            if (stored === "en") setLang("en");
        } catch { /* ignore */ }
    }, [error]);

    const isEn = lang === "en";

    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="text-6xl" aria-hidden="true">&#9888;&#65039;</div>
                <h2 className="text-xl font-bold text-white">
                    {isEn ? "Something went wrong" : "Bir seyler ters gitti"}
                </h2>
                <p className="text-zinc-400 text-sm">
                    {isEn
                        ? "An error occurred while loading the page. Please try again."
                        : "Sayfa yuklenirken bir hata olustu. Lutfen tekrar deneyin."}
                </p>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-colors"
                >
                    {isEn ? "Try Again" : "Tekrar Dene"}
                </button>
            </div>
        </div>
    );
}
