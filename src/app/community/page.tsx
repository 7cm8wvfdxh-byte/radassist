"use client";

import React, { useState } from "react";
import { useForum } from "@/context/forum-context";
import { useLanguage } from "@/context/language-context";
import { PostCard } from "@/components/community/post-card";
import { CreatePostModal } from "@/components/community/create-post-modal";
import { Search, Plus, TrendingUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AdminNotifications } from "@/components/admin-notifications";

export default function CommunityPage() {
    const { posts } = useForum();
    const { t } = useLanguage();
    const [filter, setFilter] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesFilter = filter === "all" || post.tags.includes(filter);
        return matchesSearch && matchesFilter;
    });

    const categories = ["All", "Brain", "Spine", "Liver", "Kidney", "Lung", "Breast", "Gastro", "Gynecology"];

    return (
        <div className="min-h-screen bg-black text-white p-4 lg:p-8">
            <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* Left Sidebar - Navigation & Filters */}
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

                    {/* Posts List */}
                    <div className="space-y-4">
                        {filteredPosts.length > 0 ? (
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
                            {["#Brain", "#MRI", "#CaseStudy", "#Help"].map(t => (
                                <span key={t} className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded-md text-xs text-zinc-400 cursor-pointer transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
