"use client";

import React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    moduleName?: string;
    lang?: "tr" | "en";
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback;
            return (
                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-red-500/5 border border-red-500/20 text-center" role="alert">
                    <div className="text-red-400 text-lg font-semibold mb-2">
                        {this.props.moduleName
                            ? (this.props.lang === "en" ? `${this.props.moduleName} failed to load` : `${this.props.moduleName} yüklenemedi`)
                            : (this.props.lang === "en" ? "An error occurred" : "Bir hata oluştu")}
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">
                        {this.props.lang === "en" ? "This section is temporarily unavailable." : "Bu bölüm geçici olarak kullanılamıyor."}
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false, error: undefined })}
                        className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors border border-red-500/20"
                    >
                        {this.props.lang === "en" ? "Try Again" : "Tekrar Dene"}
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
