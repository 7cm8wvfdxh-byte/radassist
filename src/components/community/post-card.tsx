"use client";

import React from "react";
import { MessageSquare, ThumbsUp, Eye, Share2, Trash2, ShieldCheck } from "lucide-react";
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
    const { toggleLike, deletePost } = useForum();
    const { user } = useAuth();
    const { t, language } = useLanguage();
    const date = new Date(post.created_at).toLocaleDateString(language === 'tr' ? "tr-TR" : "en-US", { month: 'short', day: 'numeric' });

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!confirm(t("forum.deleteConfirm"))) return;
        await deletePost(post.id);
    };

    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.07] transition-all group">
            {/* Header: Author & Meta */}
            <div className="flex items-center justify-between mb-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">{(post.author?.name || 'A').charAt(0)}</span>
                    </div>
                    <span className="font-medium text-zinc-300">{post.author?.name || t("forum.anonymous")}</span>
                    {/* Admin badge — gönderi sahibi admin ise göster (author_id üzerinden) */}
                    {user?.is_admin && user.id === post.author_id && (
                        <span role="status" className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[9px] font-bold">
                            <ShieldCheck className="w-2.5 h-2.5" aria-hidden="true" />
                            {t("forum.admin")}
                        </span>
                    )}
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{post.author?.specialty || ''}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{date}</span>
                </div>

                {/* Admin delete button */}
                {user?.is_admin && (
                    <button
                        onClick={handleDelete}
                        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all"
                        title={t("forum.deletePostAdmin")}
                        aria-label={t("forum.deletePostAdmin")}
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                )}
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
                                alert(t("forum.loginToLike"));
                                return;
                            }
                            toggleLike(post.id, user.id);
                        }}
                        className="flex items-center gap-1.5 text-zinc-500 hover:text-cyan-400 transition-colors text-xs font-medium group/like"
                        aria-label={`${language === 'tr' ? 'Beğen' : 'Like'} (${post.likes} ${t("forum.likes")})`}
                        aria-pressed={!!post.liked_by_user}
                        type="button"
                    >
                        <ThumbsUp className="w-4 h-4 group-hover/like:scale-110 transition-transform" aria-hidden="true" />
                        <span>{post.likes}</span>
                    </button>

                    <Link href={`/community/${post.id}`} className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors text-xs font-medium">
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                        <span>{post.comments?.length || 0} {t("forum.comments")}</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-600">
                    <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{post.view_count}</span>
                    </div>
                    <button className="hover:text-white transition-colors">
                        <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    );
}
