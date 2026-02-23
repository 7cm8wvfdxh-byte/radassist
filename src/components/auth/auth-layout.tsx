import React from 'react';
import { Brain, ShieldCheck } from 'lucide-react';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    illustration?: React.ReactNode;
}

export function AuthLayout({ children, title, subtitle, illustration }: AuthLayoutProps) {
    return (
        <div className="min-h-screen w-full flex bg-black text-white selection:bg-cyan-500/30">

            {/* Left Side - Visual & Branding */}
            <div className="hidden lg:flex flex-col justify-between w-1/2 relative overflow-hidden bg-zinc-900 border-r border-white/5 p-12">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
                </div>

                {/* Logo Area */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                        RadAsist
                    </span>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 space-y-6 max-w-lg">
                    {illustration || (
                        <div className="relative h-64 w-full mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden group">
                            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]" />
                            <ShieldCheck className="w-24 h-24 text-cyan-400/50 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    )}
                    <h1 className="text-4xl font-bold leading-tight">
                        Radyolojik Tanıda <br />
                        <span className="text-cyan-400">Yapay Zeka</span> Gücü
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Binlerce patoloji, gelişmiş hesaplayıcılar ve akıllı asistan ile nöbetleriniz artık daha güvenli.
                    </p>
                </div>

                {/* Footer */}
                <div className="relative z-10 flex gap-6 text-sm text-zinc-500">
                    <span>© 2026 RadAsist AI</span>
                    <span className="w-px h-4 bg-zinc-800" />
                    <span>v2.0 Encyclopedia</span>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="w-full max-w-md space-y-8 relative z-10">
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                        <p className="text-zinc-400">{subtitle}</p>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}
