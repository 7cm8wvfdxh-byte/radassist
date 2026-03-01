"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "./auth-context";

export interface Comment {
    id: string;
    content: string;
    created_at: string;
    author_id: string;
    // Joins
    profiles?: {
        name: string;
        specialty: string;
    };
    // Fallback for UI
    author?: {
        name: string;
        specialty: string;
    };
}

export interface Post {
    id: string;
    title: string;
    content: string;
    tags: string[];
    likes: number;
    created_at: string;
    author_id: string;
    // Joins
    profiles?: {
        name: string;
        specialty: string;
    };
    // Fallback
    author?: {
        name: string;
        specialty: string;
    };
    comments?: Comment[];
    view_count: number;
    liked_by_user?: boolean;
}

// Profile type for Supabase joins
interface ProfileData {
    name: string;
    specialty: string;
}

// Raw post data from Supabase
interface RawPostData {
    id: string;
    title: string;
    content: string;
    tags: string[];
    likes: number;
    created_at: string;
    author_id: string;
    view_count: number;
    profiles?: ProfileData;
    comments?: Array<{
        id: string;
        content: string;
        created_at: string;
        author_id: string;
        profiles?: ProfileData;
    }>;
}

interface ForumContextType {
    posts: Post[];
    isLoading: boolean;
    error: string | null;
    addPost: (title: string, content: string, tags: string[], user: User) => Promise<{ success: boolean; error?: string }>;
    addComment: (postId: string, content: string, user: User) => Promise<{ success: boolean; error?: string }>;
    toggleLike: (postId: string, userId: string) => Promise<{ success: boolean; error?: string }>;
    deletePost: (postId: string) => Promise<{ success: boolean; error?: string }>;
    deleteComment: (commentId: string) => Promise<{ success: boolean; error?: string }>;
    getPost: (id: string) => Promise<Post | null>;
    refreshPosts: () => void;
    clearError: () => void;
}

const ForumContext = createContext<ForumContextType | undefined>(undefined);

export function ForumProvider({ children }: { children: React.ReactNode }) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const clearError = useCallback(() => setError(null), []);

    const fetchPosts = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const { data, error: fetchError } = await supabase
                .from('posts')
                .select(`
                *,
                profiles (name, specialty),
                comments (count)
            `)
                .order('created_at', { ascending: false });

            if (fetchError) {
                setError("Gönderiler yüklenirken bir hata oluştu. Lütfen tekrar deneyin.");
            } else if (data) {
                const formattedPosts: Post[] = data.map((p: RawPostData) => ({
                    ...p,
                    author: { name: p.profiles?.name || 'Anonim', specialty: p.profiles?.specialty || '' },
                    comments: [],
                }));
                setPosts(formattedPosts);
            }
        } catch {
            setError("Beklenmeyen bir hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();

        // Realtime Subscription
        const channel = supabase
            .channel('public:posts')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, () => {
                fetchPosts();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [fetchPosts]);

    const addPost = async (title: string, content: string, tags: string[], user: User): Promise<{ success: boolean; error?: string }> => {
        try {
            const { error: insertError } = await supabase
                .from('posts')
                .insert({
                    title,
                    content,
                    tags,
                    author_id: user.id
                })
                .select();

            if (insertError) {
                const errorMessage = `Gönderi oluşturulamadı: ${insertError.message}`;
                setError(errorMessage);
                return { success: false, error: errorMessage };
            }

            await fetchPosts();
            return { success: true };
        } catch {
            const errorMessage = "Beklenmeyen bir hata oluştu.";
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
    };

    const addComment = async (postId: string, content: string, user: User): Promise<{ success: boolean; error?: string }> => {
        try {
            const { error: insertError } = await supabase
                .from('comments')
                .insert({
                    post_id: postId,
                    content,
                    author_id: user.id
                });

            if (insertError) {
                const errorMessage = "Yorum eklenirken bir hata oluştu.";
                return { success: false, error: errorMessage };
            }

            return { success: true };
        } catch {
            return { success: false, error: "Beklenmeyen bir hata oluştu." };
        }
    };

    const toggleLike = async (postId: string, userId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            // Check if user already liked this post
            const { data: existingLike, error: checkError } = await supabase
                .from('post_likes')
                .select('id')
                .eq('post_id', postId)
                .eq('user_id', userId)
                .single();

            if (checkError && checkError.code !== 'PGRST116') {
                // PGRST116 = no rows found, which is expected if not liked
                // If likes table doesn't exist, fall back to simple increment
                if (checkError.code === '42P01') {
                    // Optimistic UI update
                    setPosts(prev => prev.map(p =>
                        p.id === postId ? { ...p, likes: p.likes + 1 } : p
                    ));

                    // Fetch fresh data to get actual count, then increment
                    const { data: freshPost } = await supabase
                        .from('posts')
                        .select('likes')
                        .eq('id', postId)
                        .single();

                    if (freshPost) {
                        const { error: updateError } = await supabase
                            .from('posts')
                            .update({ likes: freshPost.likes + 1 })
                            .eq('id', postId);

                        if (updateError) {
                            // Revert optimistic update
                            await fetchPosts();
                            return { success: false, error: "Beğeni eklenirken bir hata oluştu." };
                        }
                    }
                    return { success: true };
                }
                return { success: false, error: "Beğeni durumu kontrol edilirken hata oluştu." };
            }

            if (existingLike) {
                // Unlike: Remove like and decrement counter
                const { error: deleteError } = await supabase
                    .from('post_likes')
                    .delete()
                    .eq('id', existingLike.id);

                if (deleteError) {
                    return { success: false, error: "Beğeni kaldırılırken bir hata oluştu." };
                }

                // Fetch fresh count, then decrement
                const { data: freshPost } = await supabase
                    .from('posts')
                    .select('likes')
                    .eq('id', postId)
                    .single();

                if (freshPost) {
                    await supabase
                        .from('posts')
                        .update({ likes: Math.max(0, freshPost.likes - 1) })
                        .eq('id', postId);
                }

                setPosts(prev => prev.map(p =>
                    p.id === postId ? { ...p, likes: Math.max(0, p.likes - 1), liked_by_user: false } : p
                ));
            } else {
                // Like: Add like and increment counter
                const { error: insertError } = await supabase
                    .from('post_likes')
                    .insert({ post_id: postId, user_id: userId });

                if (insertError) {
                    return { success: false, error: "Beğeni eklenirken bir hata oluştu." };
                }

                // Fetch fresh count, then increment
                const { data: freshPost } = await supabase
                    .from('posts')
                    .select('likes')
                    .eq('id', postId)
                    .single();

                if (freshPost) {
                    await supabase
                        .from('posts')
                        .update({ likes: freshPost.likes + 1 })
                        .eq('id', postId);
                }

                setPosts(prev => prev.map(p =>
                    p.id === postId ? { ...p, likes: p.likes + 1, liked_by_user: true } : p
                ));
            }

            return { success: true };
        } catch {
            return { success: false, error: "Beklenmeyen bir hata oluştu." };
        }
    };

    const deletePost = async (postId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            // Delete comments first (FK constraint) - ignore errors if table doesn't exist or no rows
            const { error: commentsErr } = await supabase.from('comments').delete().eq('post_id', postId);
            if (commentsErr) console.warn('Comments delete (non-blocking):', commentsErr.message);

            // Delete likes - ignore errors if table doesn't exist or no rows
            const { error: likesErr } = await supabase.from('post_likes').delete().eq('post_id', postId);
            if (likesErr) console.warn('Likes delete (non-blocking):', likesErr.message);

            // Delete the post itself
            const { error: deleteError } = await supabase.from('posts').delete().eq('id', postId);
            if (deleteError) {
                console.error('Post delete error:', deleteError);
                return { success: false, error: "Gönderi silinemedi: " + deleteError.message };
            }

            // Update local state immediately
            setPosts(prev => prev.filter(p => p.id !== postId));
            return { success: true };
        } catch (err) {
            console.error('deletePost unexpected error:', err);
            return { success: false, error: "Beklenmeyen bir hata oluştu." };
        }
    };

    const deleteComment = async (commentId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const { error: deleteError } = await supabase.from('comments').delete().eq('id', commentId);
            if (deleteError) {
                console.error('Comment delete error:', deleteError);
                return { success: false, error: "Yorum silinemedi: " + deleteError.message };
            }
            return { success: true };
        } catch (err) {
            console.error('deleteComment unexpected error:', err);
            return { success: false, error: "Beklenmeyen bir hata oluştu." };
        }
    };

    const getPost = useCallback(async (id: string): Promise<Post | null> => {
        try {
            const { data, error: fetchError } = await supabase
                .from('posts')
                .select(`
                *,
                profiles (name, specialty),
                comments (
                    *,
                    profiles (name, specialty)
                )
            `)
                .eq('id', id)
                .single();

            if (fetchError || !data) return null;

            const rawData = data as RawPostData;
            return {
                ...rawData,
                author: { name: rawData.profiles?.name || 'Anonim', specialty: rawData.profiles?.specialty || '' },
                comments: (rawData.comments || []).map((c) => ({
                    ...c,
                    author: { name: c.profiles?.name || 'Anonim', specialty: c.profiles?.specialty || '' }
                }))
            };
        } catch {
            return null;
        }
    }, []);

    return (
        <ForumContext.Provider value={{
            posts,
            isLoading,
            error,
            addPost,
            addComment,
            toggleLike,
            deletePost,
            deleteComment,
            getPost,
            refreshPosts: fetchPosts,
            clearError
        }}>
            {children}
        </ForumContext.Provider>
    );
}

export function useForum() {
    const context = useContext(ForumContext);
    if (context === undefined) {
        throw new Error("useForum must be used within a ForumProvider");
    }
    return context;
}
