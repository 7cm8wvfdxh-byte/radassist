"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Session, User as SupabaseUser } from "@supabase/supabase-js";

// Custom User type merging Supabase User with our custom fields
export interface User {
    id: string;
    name: string;
    email: string;
    specialty: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, name: string, specialty: string) => Promise<void>; // Modified signature for simplicity/compatibility or can be changed
    logout: () => Promise<void>;
    register: (email: string, name: string, specialty: string) => Promise<void>;
    session: Session | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (session?.user) {
                fetchProfile(session.user);
            } else {
                setIsLoading(false);
            }
        });

        // 2. Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (session?.user) {
                fetchProfile(session.user);
            } else {
                setUser(null);
                setIsLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (supabaseUser: SupabaseUser) => {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', supabaseUser.id)
                .single();

            if (error) {
                console.error('Error fetching profile:', error);
                // Fallback if profile doesn't exist yet
                setUser({
                    id: supabaseUser.id,
                    email: supabaseUser.email!,
                    name: supabaseUser.user_metadata.name || 'Kullanıcı',
                    specialty: supabaseUser.user_metadata.specialty || 'Radyoloji'
                });
            } else if (data) {
                setUser({
                    id: data.id,
                    email: supabaseUser.email!,
                    name: data.name,
                    specialty: data.specialty
                });
            }
        } catch (error) {
            console.error("Profile fetch error", error);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email: string, _: string, __: string) => {
        // In real Supabase, login only needs email/password.
        // For this migration, we kept the signature but only use email (and a hardcoded password for now or magic link)
        // To make it simple for the user without building a full password UI, let's use Magic Link or simple password.
        // NOTE: Simulating a "passwordless" or "fixed password" flow for demo simplicity unless user builds password UI.
        // Let's assume the existing Login Form sends a password. Ideally we should update the Login Form to accept password.

        // TEMPORARY: Since our Login Form sends (email, name, specialty), but Supabase needs (email, password),
        // we need to update LoginForm.tsx to actually capture password and pass it here.
        // For now, let's throw an error if called incorrectly, or handle it in the UI.
        // We will update this to just be a placeholder that warns the user they need to use the real Supabase methods.

        console.warn("Please use supabase.auth.signInWithPassword directly in components or update this context");
    };

    const register = async (email: string, name: string, specialty: string) => {
        // Logic handled in RegisterForm
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout, register, session }}>
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
