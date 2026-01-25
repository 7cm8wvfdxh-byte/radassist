"use client";

import React from "react";
import { MessageSquare, ThumbsUp, Eye, Share2 } from "lucide-react";
import { Post, useForum } from "@/context/forum-context";
import { useAuth } from "@/context/auth-context";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PostCardProps {
    post: Post;
    compact?: boolean;
}

export function PostCard({ post, compact = false }: PostCardProps) {
    const { toggleLike } = useForum();
    const { user } = useAuth();
    const { t, language } = useLanguage();
    const date = new Date(post.created_at).toLocaleDateString(language === 'tr' ? "tr-TR" : "en-US", { month: 'short', day: 'numeric' });

    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.07] transition-all group">
            {/* Header: Author & Meta */}
            <div className="flex items-center justify-between mb-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">{(post.author?.name || 'A').charAt(0)}</span>
                    </div>
                    <span className="font-medium text-zinc-300">{post.author?.name || (language === 'tr' ? 'Anonim' : 'Anonymous')}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{post.author?.specialty || ''}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{date}</span>
                </div>
            </div>

            {/* Content */}
            <Link href={`/community/${post.id}`} className="block group-hover:scale-[1.005] transition-transform">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                    {post.title}
                </h3>
                <p className={cn("text-zinc-400 text-sm leading-relaxed", compact ? "line-clamp-2" : "")}>
                    {post.content}
                </p>
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-zinc-400 font-medium"> # {tag}
                    </span>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-4">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (!user) {
                                alert(language === 'tr' ? "Beğenmek için giriş yapmalısınız." : "You must be logged in to like.");
                                return;
                            }
                            toggleLike(post.id, user.id);
                        }}
                        className="flex items-center gap-1.5 text-zinc-500 hover:text-cyan-400 transition-colors text-xs font-medium group/like"
                        aria-label={`${language === 'tr' ? 'Beğen' : 'Like'} (${post.likes} ${t("forum.likes")})`}
                        type="button"
                    >
                        <ThumbsUp className="w-4 h-4 group-hover/like:scale-110 transition-transform" aria-hidden="true" />
                        <span>{post.likes}</span>
                    </button>

                    <Link href={`/community/${post.id}`} className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors text-xs font-medium">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments?.length || 0} {t("forum.comments")}</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-600">
                    <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{post.view_count}</span>
                    </div>
                    <button className="hover:text-white transition-colors">
                        <Share2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
