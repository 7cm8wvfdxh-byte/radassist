"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { Session, User as SupabaseUser } from "@supabase/supabase-js";

// Custom User type merging Supabase User with our custom fields
export interface User {
    id: string;
    name: string;
    email: string;
    specialty: string;
}

interface AuthResult {
    success: boolean;
    error?: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<AuthResult>;
    logout: () => Promise<void>;
    register: (email: string, password: string, name: string, specialty: string) => Promise<AuthResult>;
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

    const login = useCallback(async (email: string, password: string): Promise<AuthResult> => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                let errorMessage = "Giriş yapılırken bir hata oluştu.";
                if (error.message.includes("Invalid login credentials")) {
                    errorMessage = "E-posta veya şifre hatalı.";
                } else if (error.message.includes("Email not confirmed")) {
                    errorMessage = "E-posta adresinizi doğrulayın.";
                }
                return { success: false, error: errorMessage };
            }

            if (data.user) {
                await fetchProfile(data.user);
            }

            return { success: true };
        } catch (e) {
            return { success: false, error: "Beklenmeyen bir hata oluştu." };
        }
    }, []);

    const register = useCallback(async (email: string, password: string, name: string, specialty: string): Promise<AuthResult> => {
        try {
            // 1. Sign up user
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name,
                        specialty
                    }
                }
            });

            if (authError) {
                let errorMessage = "Kayıt olurken bir hata oluştu.";
                if (authError.message.includes("already registered")) {
                    errorMessage = "Bu e-posta adresi zaten kayıtlı.";
                } else if (authError.message.includes("password")) {
                    errorMessage = "Şifre en az 6 karakter olmalıdır.";
                }
                return { success: false, error: errorMessage };
            }

            if (authData.user) {
                // 2. Create profile in 'profiles' table
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert({
                        id: authData.user.id,
                        name,
                        specialty,
                        email
                    });

                if (profileError) {
                    console.error("Profile creation error:", profileError);
                    // Don't fail registration, profile will be created from user_metadata
                }

                await fetchProfile(authData.user);
            }

            return { success: true };
        } catch (e) {
            return { success: false, error: "Beklenmeyen bir hata oluştu." };
        }
    }, []);

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
