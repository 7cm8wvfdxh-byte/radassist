"use client";

import React, { useState, useMemo } from "react";
import { useForum } from "@/context/forum-context";
import { useLanguage } from "@/context/language-context";
import { PostCard } from "@/components/community/post-card";
import { CreatePostModal } from "@/components/community/create-post-modal";
import { Search, Plus, TrendingUp, MessageCircle, Clock, Flame, MessagesSquare, Users, FileText, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AdminNotifications } from "@/components/admin-notifications";

type SortMode = "newest" | "popular" | "discussed";

export default function CommunityPage() {
    const { posts, isLoading } = useForum();
    const { t } = useLanguage();
    const [filter, setFilter] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortMode, setSortMode] = useState<SortMode>("newest");

    // Dynamic trending tags from actual posts
    const trendingTags = useMemo(() => {
        const tagCount: Record<string, number> = {};
        posts.forEach(post => {
            post.tags.forEach(tag => {
                tagCount[tag] = (tagCount[tag] || 0) + 1;
            });
        });
        return Object.entries(tagCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([tag]) => tag);
    }, [posts]);

    // Community stats
    const stats = useMemo(() => {
        const uniqueAuthors = new Set(posts.map(p => p.author_id));
        const totalComments = posts.reduce((sum, p) => sum + (p.comments?.length || 0), 0);
        return {
            totalPosts: posts.length,
            totalMembers: uniqueAuthors.size,
            totalComments,
        };
    }, [posts]);

    // Filter and sort posts
    const filteredPosts = useMemo(() => {
        let result = posts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesFilter = filter === "all" || post.tags.includes(filter);
            return matchesSearch && matchesFilter;
        });

        switch (sortMode) {
            case "popular":
                result = [...result].sort((a, b) => b.likes - a.likes);
                break;
            case "discussed":
                result = [...result].sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
                break;
            case "newest":
            default:
                result = [...result].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                break;
        }

        return result;
    }, [posts, searchQuery, filter, sortMode]);

    const categories = ["All", "Brain", "Spine", "Liver", "Kidney", "Lung", "Breast", "Gastro", "Gynecology"];

    const sortTabs: { key: SortMode; label: string; icon: React.ReactNode }[] = [
        { key: "newest", label: t("forum.sortNewest"), icon: <Clock className="w-3.5 h-3.5" /> },
        { key: "popular", label: t("forum.sortPopular"), icon: <Flame className="w-3.5 h-3.5" /> },
        { key: "discussed", label: t("forum.sortDiscussed"), icon: <MessagesSquare className="w-3.5 h-3.5" /> },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 lg:p-8">
            <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* Left Sidebar - Navigation & Filters (Desktop) */}
                <div className="hidden lg:block w-64 space-y-8 sticky top-8 h-fit">

                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6">
                            {t("nav.backToHome")}
                        </Link>

                        <div className="bg-zinc-900/50 rounded-2xl p-4 border border-white/5">
                            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4 px-2">{t("forum.categories")}</h3>
                            <div className="space-y-1">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat === "All" ? "all" : cat)}
                                        className={cn(
                                            "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-between group",
                                            filter === (cat === "All" ? "all" : cat)
                                                ? "bg-cyan-500/10 text-cyan-400"
                                                : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {cat === "All" ? t("forum.allPosts") : cat}
                                        {filter === (cat === "All" ? "all" : cat) && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Community Stats */}
                        <div className="bg-zinc-900/50 rounded-2xl p-4 border border-white/5">
                            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4 px-2">{t("forum.communityStats")}</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 px-2">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                                        <FileText className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white">{stats.totalPosts}</div>
                                        <div className="text-xs text-zinc-500">{t("forum.totalPosts")}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-2">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                        <Users className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white">{stats.totalMembers}</div>
                                        <div className="text-xs text-zinc-500">{t("forum.totalMembers")}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-2">
                                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                        <Activity className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white">{stats.totalComments}</div>
                                        <div className="text-xs text-zinc-500">{t("forum.comments")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Feed */}
                <div className="flex-1 space-y-6">

                    {/* Header / Search */}
                    <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur-md sticky top-0 z-40 p-4 rounded-2xl border border-white/5 shadow-lg">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder={t("forum.search")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            />
                        </div>
                        <AdminNotifications />
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">{t("forum.newPost")}</span>
                        </button>
                    </div>

                    {/* Mobile Category Chips */}
                    <div className="lg:hidden overflow-x-auto no-scrollbar -mx-1">
                        <div className="flex gap-2 px-1 pb-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat === "All" ? "all" : cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border transition-all",
                                        filter === (cat === "All" ? "all" : cat)
                                            ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"
                                            : "bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"
                                    )}
                                >
                                    {cat === "All" ? t("forum.allPosts") : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sort Tabs */}
                    <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-xl border border-white/5">
                        {sortTabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setSortMode(tab.key)}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center",
                                    sortMode === tab.key
                                        ? "bg-white/10 text-white shadow-sm"
                                        : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                                )}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Posts List */}
                    <div className="space-y-4">
                        {isLoading ? (
                            // Loading Skeleton
                            Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 animate-pulse">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-6 h-6 rounded-full bg-white/10" />
                                        <div className="h-3 w-24 bg-white/10 rounded" />
                                        <div className="h-3 w-16 bg-white/5 rounded" />
                                    </div>
                                    <div className="h-5 w-3/4 bg-white/10 rounded mb-3" />
                                    <div className="h-3 w-full bg-white/5 rounded mb-2" />
                                    <div className="h-3 w-2/3 bg-white/5 rounded mb-4" />
                                    <div className="flex gap-2 mb-4">
                                        <div className="h-5 w-14 bg-white/5 rounded-md" />
                                        <div className="h-5 w-14 bg-white/5 rounded-md" />
                                    </div>
                                    <div className="border-t border-white/5 pt-3 flex justify-between">
                                        <div className="flex gap-4">
                                            <div className="h-4 w-12 bg-white/5 rounded" />
                                            <div className="h-4 w-16 bg-white/5 rounded" />
                                        </div>
                                        <div className="h-4 w-8 bg-white/5 rounded" />
                                    </div>
                                </div>
                            ))
                        ) : filteredPosts.length > 0 ? (
                            filteredPosts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 border-dashed">
                                <MessageCircle className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{t("forum.noContent")}</h3>
                                <p className="text-zinc-500">{t("forum.beFirst")}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar - Trending / Info */}
                <div className="hidden xl:block w-72 space-y-6 sticky top-8 h-fit">
                    <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px]" />
                        <h3 className="text-lg font-bold text-white mb-2 relative z-10">{t("forum.welcome")} 👋</h3>
                        <p className="text-sm text-zinc-400 relative z-10">
                            {t("forum.welcomeText")}
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 rounded-2xl p-5 border border-white/5">
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="w-4 h-4 text-cyan-400" />
                            <h3 className="font-bold text-white text-sm">{t("forum.trending")}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {trendingTags.length > 0 ? (
                                trendingTags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => {
                                            setFilter(tag);
                                            setSearchQuery("");
                                        }}
                                        className={cn(
                                            "px-2.5 py-1 rounded-md text-xs cursor-pointer transition-colors",
                                            filter === tag
                                                ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                                                : "bg-white/5 hover:bg-white/10 text-zinc-400"
                                        )}
                                    >
                                        #{tag}
                                    </button>
                                ))
                            ) : (
                                ["#Brain", "#MRI", "#CaseStudy", "#Help"].map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded-md text-xs text-zinc-400 cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
