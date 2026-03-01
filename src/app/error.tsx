"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("RadAsist error:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="text-6xl">⚠️</div>
                <h2 className="text-xl font-bold text-white">
                    Bir şeyler ters gitti
                </h2>
                <p className="text-zinc-400 text-sm">
                    Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
                </p>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-colors"
                >
                    Tekrar Dene
                </button>
            </div>
        </div>
    );
}
