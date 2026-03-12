"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type ThemeMode = "dark" | "light" | "system";

interface ThemeContextType {
    theme: ThemeMode;
    resolvedTheme: "dark" | "light";
    setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): "dark" | "light" {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<ThemeMode>(() => {
        if (typeof window === "undefined") return "dark";
        const saved = localStorage.getItem("radassist-theme") as ThemeMode;
        return saved === "dark" || saved === "light" || saved === "system" ? saved : "dark";
    });

    const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(() => {
        if (theme === "system") return getSystemTheme();
        return theme === "light" ? "light" : "dark";
    });

    const setTheme = useCallback((newTheme: ThemeMode) => {
        setThemeState(newTheme);
        if (typeof window !== "undefined") {
            localStorage.setItem("radassist-theme", newTheme);
        }
    }, []);

    // Listen for system theme changes
    useEffect(() => {
        const resolved = theme === "system" ? getSystemTheme() : theme === "light" ? "light" : "dark";
        setResolvedTheme(resolved);

        // Apply to document
        const root = document.documentElement;
        root.classList.toggle("dark", resolved === "dark");
        root.classList.toggle("light", resolved === "light");
        root.style.colorScheme = resolved;

        if (theme !== "system") return;

        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => {
            const sys = e.matches ? "dark" : "light";
            setResolvedTheme(sys);
            root.classList.toggle("dark", sys === "dark");
            root.classList.toggle("light", sys === "light");
            root.style.colorScheme = sys;
        };
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
