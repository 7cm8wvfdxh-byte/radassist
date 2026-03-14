"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useForum, Post, Comment } from "@/context/forum-context";
import { useLanguage } from "@/context/language-context";
import { ArrowLeft, FileText, MessageSquare, Calendar, User } from "lucide-react";
import { PostCard } from "@/components/community/post-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type ProfileTab = "posts" | "comments";

interface UserProfile {
    id: string;
    name: string;
    specialty: string;
    created_at?: string;
}

export default function UserProfilePage() {
    const { id } = useParams();
    const { getUserPosts, getUserComments } = useForum();
    const { t, language } = useLanguage();

    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [userComments, setUserComments] = useState<Comment[]>([]);
    const [activeTab, setActiveTab] = useState<ProfileTab>("posts");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProfile() {
            if (!id) return;
            const userId = id as string;

            // Fetch profile
            const { data } = await supabase
                .from('profiles')
                .select('id, name, specialty, created_at')
                .eq('id', userId)
                .single();

            if (data) setProfile(data as UserProfile);

            // Fetch user's posts and comments
            const [posts, comments] = await Promise.all([
                getUserPosts(userId),
                getUserComments(userId),
            ]);
            setUserPosts(posts);
            setUserComments(comments);
            setIsLoading(false);
        }
        loadProfile();
    }, [id, getUserPosts, getUserComments]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black text-white p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse space-y-6">
                        <div className="h-32 bg-white/5 rounded-2xl" />
                        <div className="h-64 bg-white/5 rounded-2xl" />
                    </div>
                </div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="min-h-screen bg-black text-white p-8">
                <div className="max-w-4xl mx-auto text-center py-20">
                    <User className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">{language === "tr" ? "Kullanıcı bulunamadı" : "User not found"}</h2>
                    <Link href="/community" className="text-cyan-400 hover:text-cyan-300 text-sm">{t("forum.backToForum")}</Link>
                </div>
            </div>
        );
    }

    const tabs: { key: ProfileTab; label: string; icon: React.ReactNode; count: number }[] = [
        { key: "posts", label: t("forum.userPosts"), icon: <FileText className="w-4 h-4" />, count: userPosts.length },
        { key: "comments", label: t("forum.userComments"), icon: <MessageSquare className="w-4 h-4" />, count: userComments.length },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 lg:p-8">
            <div className="max-w-4xl mx-auto">

                {/* Back */}
                <Link href="/community" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    {t("forum.backToForum")}
                </Link>

                {/* Profile Header */}
                <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 lg:p-8 border border-white/10 relative overflow-hidden mb-8">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 blur-[60px]" />

                    <div className="flex items-center gap-5 relative z-10">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl">
                            <span className="text-2xl lg:text-3xl font-bold text-white">{profile.name.charAt(0)}</span>
                        </div>
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white">{profile.name}</h1>
                            <p className="text-zinc-400 text-sm mt-1">{profile.specialty}</p>
                            {profile.created_at && (
                                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-2">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {t("forum.memberSince")} {new Date(profile.created_at).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", { year: "numeric", month: "long" })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 mt-6 relative z-10">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{userPosts.length}</div>
                            <div className="text-xs text-zinc-400">{t("forum.userPosts")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{userComments.length}</div>
                            <div className="text-xs text-zinc-400">{t("forum.userComments")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{userPosts.reduce((s, p) => s + p.likes, 0)}</div>
                            <div className="text-xs text-zinc-400">{t("forum.likes")}</div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-xl border border-white/5 mb-6">
                    {tabs.map(tab => (
                        <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 justify-center",
                                activeTab === tab.key
                                    ? "bg-white/10 text-white shadow-sm"
                                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                            )}>
                            {tab.icon}
                            {tab.label}
                            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full">{tab.count}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="space-y-4">
                    {activeTab === "posts" && (
                        userPosts.length > 0 ? (
                            userPosts.map(post => <PostCard key={post.id} post={post} />)
                        ) : (
                            <div className="text-center py-16 text-zinc-600">
                                <FileText className="w-10 h-10 mx-auto mb-3 opacity-50" />
                                <p>{language === "tr" ? "Henüz gönderi yok" : "No posts yet"}</p>
                            </div>
                        )
                    )}

                    {activeTab === "comments" && (
                        userComments.length > 0 ? (
                            userComments.map(comment => (
                                <div key={comment.id} className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                                    <p className="text-zinc-300 leading-relaxed mb-2">{comment.content}</p>
                                    <div className="text-xs text-zinc-600 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(comment.created_at).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", { month: "short", day: "numeric", year: "numeric" })}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-16 text-zinc-600">
                                <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-50" />
                                <p>{language === "tr" ? "Henüz yorum yok" : "No comments yet"}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
