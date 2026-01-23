"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
}

export function SearchBar({ value, onChange, className, placeholder }: SearchBarProps) {
    return (
        <div className={cn("relative w-full", className)}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-indigo-400" />
            </div>
            <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-transparent text-lg text-white placeholder-slate-500 focus:outline-none focus:ring-0 font-medium"
                placeholder={placeholder || "Patoloji, bulgu veya sekans ara..."}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
        </div>
    );
}
