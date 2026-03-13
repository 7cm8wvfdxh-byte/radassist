"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "./auth-context";
import { useLanguage } from "./language-context";

export interface Comment {
    id: string;
    content: string;
    created_at: string;
    author_id: string;
    likes?: number;
    liked_by_user?: boolean;
    profiles?: { name: string; specialty: string };
    author?: { name: string; specialty: string };
}

export interface Post {
    id: string;
    title: string;
    content: string;
    tags: string[];
    likes: number;
    created_at: string;
    author_id: string;
    view_count: number;
    image_url?: string;
    is_pinned?: boolean;
    profiles?: { name: string; specialty: string };
    author?: { name: string; specialty: string };
    comments?: Comment[];
    liked_by_user?: boolean;
    bookmarked_by_user?: boolean;
}

export interface Notification {
    id: string;
    type: "like" | "comment" | "pin";
    post_id: string;
    post_title: string;
    actor_name: string;
    created_at: string;
    is_read: boolean;
}

interface ProfileData { name: string; specialty: string }

interface RawPostData {
    id: string;
    title: string;
    content: string;
    tags: string[];
    likes: number;
    created_at: string;
    author_id: string;
    view_count: number;
    image_url?: string;
    is_pinned?: boolean;
    profiles?: ProfileData;
    comments?: Array<{
        id: string;
        content: string;
        created_at: string;
        author_id: string;
        likes?: number;
        profiles?: ProfileData;
    }>;
}

interface ForumContextType {
    posts: Post[];
    isLoading: boolean;
    error: string | null;
    hasMore: boolean;
    notifications: Notification[];
    unreadCount: number;
    bookmarkedIds: Set<string>;
    addPost: (title: string, content: string, tags: string[], user: User, imageUrl?: string) => Promise<{ success: boolean; error?: string }>;
    editPost: (postId: string, title: string, content: string, tags: string[], imageUrl?: string) => Promise<{ success: boolean; error?: string }>;
    addComment: (postId: string, content: string, user: User) => Promise<{ success: boolean; error?: string }>;
    toggleLike: (postId: string, userId: string) => Promise<{ success: boolean; error?: string }>;
    toggleCommentLike: (commentId: string, userId: string) => Promise<{ success: boolean; error?: string }>;
    toggleBookmark: (postId: string, userId: string) => Promise<{ success: boolean; error?: string }>;
    togglePin: (postId: string) => Promise<{ success: boolean; error?: string }>;
    deletePost: (postId: string) => Promise<{ success: boolean; error?: string }>;
    deleteComment: (commentId: string) => Promise<{ success: boolean; error?: string }>;
    getPost: (id: string) => Promise<Post | null>;
    getUserPosts: (userId: string) => Promise<Post[]>;
    getUserComments: (userId: string) => Promise<Comment[]>;
    loadMore: () => void;
    refreshPosts: () => void;
    clearError: () => void;
    markNotificationsRead: () => Promise<void>;
    uploadImage: (file: File) => Promise<string | null>;
}

const ForumContext = createContext<ForumContextType | undefined>(undefined);

const POSTS_PER_PAGE = 10;

const forumErrors = {
    tr: {
        fetchFailed: "Gönderiler yüklenirken bir hata oluştu. Lütfen tekrar deneyin.",
        unexpected: "Beklenmeyen bir hata oluştu.",
        createFailed: "Gönderi oluşturulamadı",
        commentFailed: "Yorum eklenirken bir hata oluştu.",
        likeFailed: "Beğeni eklenirken bir hata oluştu.",
        likeCheckFailed: "Beğeni durumu kontrol edilirken hata oluştu.",
        unlikeFailed: "Beğeni kaldırılırken bir hata oluştu.",
        deleteFailed: "Gönderi silinemedi",
        deleteCommentFailed: "Yorum silinemedi",
        editFailed: "Gönderi güncellenemedi",
        uploadFailed: "Görüntü yüklenemedi",
    },
    en: {
        fetchFailed: "Failed to load posts. Please try again.",
        unexpected: "An unexpected error occurred.",
        createFailed: "Failed to create post",
        commentFailed: "Failed to add comment.",
        likeFailed: "Failed to add like.",
        likeCheckFailed: "Failed to check like status.",
        unlikeFailed: "Failed to remove like.",
        deleteFailed: "Failed to delete post",
        deleteCommentFailed: "Failed to delete comment",
        editFailed: "Failed to update post",
        uploadFailed: "Failed to upload image",
    },
};

export function ForumProvider({ children }: { children: React.ReactNode }) {
    const { language } = useLanguage();
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
    const pageRef = useRef(0);
    const fe = forumErrors[language];

    const clearError = useCallback(() => setError(null), []);

    const unreadCount = notifications.filter(n => !n.is_read).length;

    const fetchPosts = useCallback(async (page = 0, append = false) => {
        if (!append) setIsLoading(true);
        setError(null);
        try {
            const from = page * POSTS_PER_PAGE;
            const to = from + POSTS_PER_PAGE - 1;

            const { data, error: fetchError } = await supabase
                .from('posts')
                .select(`*, profiles (name, specialty), comments (count)`)
                .order('is_pinned', { ascending: false, nullsFirst: false })
                .order('created_at', { ascending: false })
                .range(from, to);

            if (fetchError) {
                setError(fe.fetchFailed);
            } else if (data) {
                const formattedPosts: Post[] = data.map((p: RawPostData) => ({
                    ...p,
                    author: { name: p.profiles?.name || 'Anonim', specialty: p.profiles?.specialty || '' },
                    comments: [],
                }));

                if (append) {
                    setPosts(prev => [...prev, ...formattedPosts]);
                } else {
                    setPosts(formattedPosts);
                }
                setHasMore(data.length === POSTS_PER_PAGE);
                pageRef.current = page;
            }
        } catch {
            setError(fe.unexpected);
        } finally {
            setIsLoading(false);
        }
    }, [fe]);

    const loadMore = useCallback(() => {
        if (hasMore && !isLoading) {
            fetchPosts(pageRef.current + 1, true);
        }
    }, [hasMore, isLoading, fetchPosts]);

    // Fetch bookmarks for current user
    const fetchBookmarks = useCallback(async (userId: string) => {
        try {
            const { data } = await supabase
                .from('post_bookmarks')
                .select('post_id')
                .eq('user_id', userId);
            if (data) {
                setBookmarkedIds(new Set(data.map((b: { post_id: string }) => b.post_id)));
            }
        } catch {
            // Bookmarks table may not exist yet
        }
    }, []);

    // Fetch notifications
    const fetchNotifications = useCallback(async (userId: string) => {
        try {
            const { data } = await supabase
                .from('notifications')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false })
                .limit(20);
            if (data) {
                setNotifications(data as Notification[]);
            }
        } catch {
            // Notifications table may not exist yet
        }
    }, []);

    useEffect(() => {
        fetchPosts();

        const channel = supabase
            .channel('public:posts')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, () => {
                fetchPosts();
            })
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, [fetchPosts]);

    const addPost = async (title: string, content: string, tags: string[], user: User, imageUrl?: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const insertData: Record<string, unknown> = { title, content, tags, author_id: user.id };
            if (imageUrl) insertData.image_url = imageUrl;

            const { error: insertError } = await supabase
                .from('posts')
                .insert(insertData)
                .select();

            if (insertError) {
                const errorMessage = `${fe.createFailed}: ${insertError.message}`;
                setError(errorMessage);
                return { success: false, error: errorMessage };
            }

            await fetchPosts();
            return { success: true };
        } catch {
            setError(fe.unexpected);
            return { success: false, error: fe.unexpected };
        }
    };

    const editPost = async (postId: string, title: string, content: string, tags: string[], imageUrl?: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const updateData: Record<string, unknown> = { title, content, tags };
            if (imageUrl !== undefined) updateData.image_url = imageUrl;

            const { error: updateError } = await supabase
                .from('posts')
                .update(updateData)
                .eq('id', postId);

            if (updateError) {
                return { success: false, error: `${fe.editFailed}: ${updateError.message}` };
            }

            setPosts(prev => prev.map(p => p.id === postId ? { ...p, title, content, tags, ...(imageUrl !== undefined ? { image_url: imageUrl } : {}) } : p));
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const addComment = async (postId: string, content: string, user: User): Promise<{ success: boolean; error?: string }> => {
        try {
            const { error: insertError } = await supabase
                .from('comments')
                .insert({ post_id: postId, content, author_id: user.id });

            if (insertError) {
                return { success: false, error: fe.commentFailed };
            }
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const toggleLike = async (postId: string, userId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const { data: existingLike, error: checkError } = await supabase
                .from('post_likes')
                .select('id')
                .eq('post_id', postId)
                .eq('user_id', userId)
                .single();

            if (checkError && checkError.code !== 'PGRST116') {
                if (checkError.code === '42P01') {
                    setPosts(prev => prev.map(p =>
                        p.id === postId ? { ...p, likes: p.likes + 1 } : p
                    ));
                    const { data: freshPost } = await supabase
                        .from('posts').select('likes').eq('id', postId).single();
                    if (freshPost) {
                        await supabase.from('posts').update({ likes: freshPost.likes + 1 }).eq('id', postId);
                    }
                    return { success: true };
                }
                return { success: false, error: fe.likeCheckFailed };
            }

            if (existingLike) {
                await supabase.from('post_likes').delete().eq('id', existingLike.id);
                const { data: freshPost } = await supabase.from('posts').select('likes').eq('id', postId).single();
                if (freshPost) {
                    await supabase.from('posts').update({ likes: Math.max(0, freshPost.likes - 1) }).eq('id', postId);
                }
                setPosts(prev => prev.map(p =>
                    p.id === postId ? { ...p, likes: Math.max(0, p.likes - 1), liked_by_user: false } : p
                ));
            } else {
                await supabase.from('post_likes').insert({ post_id: postId, user_id: userId });
                const { data: freshPost } = await supabase.from('posts').select('likes').eq('id', postId).single();
                if (freshPost) {
                    await supabase.from('posts').update({ likes: freshPost.likes + 1 }).eq('id', postId);
                }
                setPosts(prev => prev.map(p =>
                    p.id === postId ? { ...p, likes: p.likes + 1, liked_by_user: true } : p
                ));
            }
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const toggleCommentLike = async (commentId: string, userId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const { data: existing, error: checkError } = await supabase
                .from('comment_likes')
                .select('id')
                .eq('comment_id', commentId)
                .eq('user_id', userId)
                .single();

            if (checkError && checkError.code !== 'PGRST116' && checkError.code !== '42P01') {
                return { success: false, error: fe.likeFailed };
            }

            if (existing) {
                await supabase.from('comment_likes').delete().eq('id', existing.id);
            } else {
                await supabase.from('comment_likes').insert({ comment_id: commentId, user_id: userId });
            }
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const toggleBookmark = async (postId: string, userId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const isBookmarked = bookmarkedIds.has(postId);

            if (isBookmarked) {
                await supabase.from('post_bookmarks').delete().eq('post_id', postId).eq('user_id', userId);
                setBookmarkedIds(prev => { const next = new Set(prev); next.delete(postId); return next; });
            } else {
                await supabase.from('post_bookmarks').insert({ post_id: postId, user_id: userId });
                setBookmarkedIds(prev => new Set(prev).add(postId));
            }
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const togglePin = async (postId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const post = posts.find(p => p.id === postId);
            const newPinned = !post?.is_pinned;

            const { error: updateError } = await supabase
                .from('posts')
                .update({ is_pinned: newPinned })
                .eq('id', postId);

            if (updateError) {
                return { success: false, error: updateError.message };
            }

            setPosts(prev => prev.map(p =>
                p.id === postId ? { ...p, is_pinned: newPinned } : p
            ));
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const deletePost = async (postId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            await supabase.from('comments').delete().eq('post_id', postId);
            await supabase.from('post_likes').delete().eq('post_id', postId);
            await supabase.from('post_bookmarks').delete().eq('post_id', postId);

            const { error: deleteError } = await supabase.from('posts').delete().eq('id', postId);
            if (deleteError) {
                return { success: false, error: `${fe.deleteFailed}: ${deleteError.message}` };
            }

            setPosts(prev => prev.filter(p => p.id !== postId));
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const deleteComment = async (commentId: string): Promise<{ success: boolean; error?: string }> => {
        try {
            await supabase.from('comment_likes').delete().eq('comment_id', commentId);
            const { error: deleteError } = await supabase.from('comments').delete().eq('id', commentId);
            if (deleteError) {
                return { success: false, error: `${fe.deleteCommentFailed}: ${deleteError.message}` };
            }
            return { success: true };
        } catch {
            return { success: false, error: fe.unexpected };
        }
    };

    const getPost = useCallback(async (id: string): Promise<Post | null> => {
        try {
            const { data, error: fetchError } = await supabase
                .from('posts')
                .select(`*, profiles (name, specialty), comments (*, profiles (name, specialty))`)
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

    const getUserPosts = useCallback(async (userId: string): Promise<Post[]> => {
        try {
            const { data } = await supabase
                .from('posts')
                .select(`*, profiles (name, specialty), comments (count)`)
                .eq('author_id', userId)
                .order('created_at', { ascending: false });

            if (!data) return [];
            return data.map((p: RawPostData) => ({
                ...p,
                author: { name: p.profiles?.name || 'Anonim', specialty: p.profiles?.specialty || '' },
                comments: [],
            }));
        } catch {
            return [];
        }
    }, []);

    const getUserComments = useCallback(async (userId: string): Promise<Comment[]> => {
        try {
            const { data } = await supabase
                .from('comments')
                .select(`*, profiles (name, specialty)`)
                .eq('author_id', userId)
                .order('created_at', { ascending: false })
                .limit(50);

            if (!data) return [];
            return data.map((c: Comment & { profiles?: ProfileData }) => ({
                ...c,
                author: { name: c.profiles?.name || 'Anonim', specialty: c.profiles?.specialty || '' }
            }));
        } catch {
            return [];
        }
    }, []);

    const markNotificationsRead = useCallback(async () => {
        try {
            const unreadIds = notifications.filter(n => !n.is_read).map(n => n.id);
            if (unreadIds.length === 0) return;

            await supabase.from('notifications').update({ is_read: true }).in('id', unreadIds);
            setNotifications(prev => prev.map(n => ({ ...n, is_read: true })));
        } catch {
            // silently fail
        }
    }, [notifications]);

    const uploadImage = useCallback(async (file: File): Promise<string | null> => {
        try {
            const ext = file.name.split('.').pop();
            const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
            const filePath = `forum/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('images')
                .upload(filePath, file, { cacheControl: '3600', upsert: false });

            if (uploadError) return null;

            const { data: urlData } = supabase.storage.from('images').getPublicUrl(filePath);
            return urlData?.publicUrl || null;
        } catch {
            return null;
        }
    }, []);

    return (
        <ForumContext.Provider value={{
            posts, isLoading, error, hasMore, notifications, unreadCount, bookmarkedIds,
            addPost, editPost, addComment, toggleLike, toggleCommentLike,
            toggleBookmark, togglePin, deletePost, deleteComment,
            getPost, getUserPosts, getUserComments,
            loadMore, refreshPosts: fetchPosts, clearError,
            markNotificationsRead, uploadImage
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
