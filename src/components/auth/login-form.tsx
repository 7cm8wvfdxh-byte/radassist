"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulate network delay
        setTimeout(() => {
            if (email && password) {
                // Mock login
                login(email, "Dr. Kullanıcı", "Radyoloji Asistanı");
                router.push("/");
            } else {
                setError("Lütfen tüm alanları doldurunuz.");
                setIsLoading(false);
            }
        }, 1000);
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
                        placeholder="E-posta adresi"
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
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                        required
                    />
                </div>
            </div>

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-zinc-400 cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 text-cyan-500 focus:ring-cyan-500/30" />
                    Beni hatırla
                </label>
                <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Şifremi unuttum?</Link>
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
                        Giriş Yap <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>

            <p className="text-center text-zinc-500 text-sm">
                Hesabınız yok mu?{' '}
                <Link href="/register" className="text-white hover:text-cyan-400 font-semibold transition-colors">
                    Kayıt Ol
                </Link>
            </p>
        </form>
    );
}
