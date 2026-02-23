"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function LoginForm() {
    const { t } = useLanguage();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Success
            router.push("/");
            router.refresh(); // Refresh to update auth context
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Giriş yapılırken bir hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
                    </div>
                    <input
                        type="email"
                        placeholder={t("auth.email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                        required
                    />
                </div>

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
                    </div>
                    <input
                        type="password"
                        placeholder={t("auth.password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                        required
                    />
                </div>
            </div>

            <div className="flex items-center justify-end text-sm">
                <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">{t("auth.forgotPassword")}</Link>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all",
                    "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25",
                    isLoading && "opacity-80 cursor-not-allowed"
                )}
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <>
                        {t("auth.login")} <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>

            <p className="text-center text-zinc-500 text-sm">
                {t("auth.noAccount")}{' '}
                <Link href="/register" className="text-white hover:text-cyan-400 font-semibold transition-colors">
                    {t("auth.register")}
                </Link>
            </p>
        </form>
    );
}
