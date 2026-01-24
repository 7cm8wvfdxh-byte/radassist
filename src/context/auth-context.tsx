"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
    id: string;
    name: string;
    email: string;
    specialty: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, name: string, specialty: string) => void;
    logout: () => void;
    register: (email: string, name: string, specialty: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check local storage on mount
        const storedUser = localStorage.getItem("radassist-user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user from local storage", e);
                localStorage.removeItem("radassist-user");
            }
        }
        setIsLoading(false);
    }, []);

    const login = (email: string, name: string, specialty: string) => {
        // Simulate API call
        const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            specialty,
        };
        setUser(newUser);
        localStorage.setItem("radassist-user", JSON.stringify(newUser));
    };

    const register = (email: string, name: string, specialty: string) => {
        // For this demo, register acts same as login
        login(email, name, specialty);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("radassist-user");
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
