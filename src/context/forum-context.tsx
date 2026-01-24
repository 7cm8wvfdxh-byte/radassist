"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
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
}

interface ForumContextType {
    posts: Post[];
    isLoading: boolean;
    addPost: (title: string, content: string, tags: string[], user: User) => Promise<void>;
    addComment: (postId: string, content: string, user: User) => Promise<void>;
    toggleLike: (postId: string) => Promise<void>;
    getPost: (id: string) => Promise<Post | null>;
    refreshPosts: () => void;
}

const ForumContext = createContext<ForumContextType | undefined>(undefined);

export function ForumProvider({ children }: { children: React.ReactNode }) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('posts')
                .select(`
                *,
                profiles (name, specialty),
                comments (count)
            `)
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error fetching posts:", error);
            } else {
                // Map data to match simpler structure if needed, or use as is.
                // For now, let's adapt specific fields to match UI expectations
                const formattedPosts = data.map((p: any) => ({
                    ...p,
                    author: { name: p.profiles?.name || 'Unknown', specialty: p.profiles?.specialty || '' },
                    comments: [], // Comments are fetched in detail view usually
                    // Hack: 'comments' in select returns array of objects with count if we used count, 
                    // but standard join returns array. For list view we just need count.
                }));
                setPosts(formattedPosts);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();

        // Realtime Subscription
        const channel = supabase
            .channel('public:posts')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, (payload) => {
                fetchPosts(); // Reload on change
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const addPost = async (title: string, content: string, tags: string[], user: User) => {
        const { error } = await supabase
            .from('posts')
            .insert({
                title,
                content,
                tags,
                author_id: user.id
            });

        if (error) console.error("Error adding post:", error);
        else fetchPosts();
    };

    const addComment = async (postId: string, content: string, user: User) => {
        const { error } = await supabase
            .from('comments')
            .insert({
                post_id: postId,
                content,
                author_id: user.id
            });
        if (error) console.error(error);
    };

    const toggleLike = async (postId: string) => {
        // Implementing real likes requires a separate 'likes' table to store (user_id, post_id).
        // For simplicity in this v1 migration, we might just increment a counter, but that's insecure.
        // Let's assume we skip implementation for a moment or do a simple RPC.
        console.log("Like toggled for", postId);
    };

    const getPost = async (id: string): Promise<Post | null> => {
        const { data, error } = await supabase
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

        if (error) return null;

        return {
            ...data,
            author: { name: data.profiles?.name, specialty: data.profiles?.specialty },
            comments: data.comments.map((c: any) => ({
                ...c,
                author: { name: c.profiles?.name, specialty: c.profiles?.specialty }
            }))
        };
    }

    return (
        <ForumContext.Provider value={{ posts, isLoading, addPost, addComment, toggleLike, getPost, refreshPosts: fetchPosts }}>
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
