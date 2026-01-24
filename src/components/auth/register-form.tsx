"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Mail, Lock, User, Stethoscope, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [specialty, setSpecialty] = useState("Radyoloji Asistanı");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { register } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulate network delay
        setTimeout(() => {
            if (name && email && password) {
                register(email, name, specialty);
                router.push("/");
            } else {
                setError("Lütfen tüm alanları doldurunuz.");
                setIsLoading(false);
            }
        }, 1200);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}

            <div className="space-y-3">
                {/* Name Input */}
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Ad Soyad (Ör: Dr. Ali Veli)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                        required
                    />
                </div>

                {/* Specialty Select */}
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Stethoscope className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <select
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                        <option value="Radyoloji Asistanı" className="bg-zinc-900">Radyoloji Asistanı</option>
                        <option value="Radyoloji Uzmanı" className="bg-zinc-900">Radyoloji Uzmanı</option>
                        <option value="Tıp Öğrencisi" className="bg-zinc-900">Tıp Öğrencisi</option>
                        <option value="Diğer" className="bg-zinc-900">Diğer</option>
                    </select>
                    {/* Custom arrow could go here */}
                </div>

                {/* Email Input */}
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <input
                        type="email"
                        placeholder="E-posta adresi"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <input
                        type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all mt-6",
                    "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/25",
                    isLoading && "opacity-80 cursor-not-allowed"
                )}
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <>
                        Kayıt Ol ve Başla <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>

            <p className="text-center text-zinc-500 text-sm mt-4">
                Zaten hesabınız var mı?{' '}
                <Link href="/login" className="text-white hover:text-purple-400 font-semibold transition-colors">
                    Giriş Yap
                </Link>
            </p>
        </form>
    );
}
