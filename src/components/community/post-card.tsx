"use client";

import React from "react";
import { MessageSquare, ThumbsUp, Eye, Share2, Trash2, ShieldCheck, Bookmark, Pin, Pencil } from "lucide-react";
import { Post, useForum } from "@/context/forum-context";
import { useAuth } from "@/context/auth-context";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";
import { MarkdownRenderer } from "./markdown-renderer";
import Link from "next/link";

interface PostCardProps {
    post: Post;
    compact?: boolean;
}

export function PostCard({ post, compact = false }: PostCardProps) {
    const { toggleLike, toggleBookmark, togglePin, deletePost, bookmarkedIds } = useForum();
    const { user } = useAuth();
    const { t, language } = useLanguage();
    const [showCopied, setShowCopied] = React.useState(false);
    const isBookmarked = user ? bookmarkedIds.has(post.id) : false;
    const isOwner = user?.id === post.author_id;
    const date = new Date(post.created_at).toLocaleDateString(language === 'tr' ? "tr-TR" : "en-US", { month: 'short', day: 'numeric' });

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!confirm(t("forum.deleteConfirm"))) return;
        await deletePost(post.id);
    };

    return (
        <div className={cn(
            "w-full bg-white/5 border rounded-2xl p-5 hover:bg-white/[0.07] transition-all group",
            post.is_pinned ? "border-amber-500/30 bg-amber-500/[0.03]" : "border-white/10"
        )}>
            {/* Pinned Badge */}
            {post.is_pinned && (
                <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                    <Pin className="w-3 h-3" />
                    {t("forum.pinned")}
                </div>
            )}

            {/* Header: Author & Meta */}
            <div className="flex items-center justify-between mb-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                    <Link href={`/community/profile/${post.author_id}`} className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center hover:ring-2 hover:ring-indigo-400/50 transition-all">
                        <span className="text-[10px] font-bold text-white">{(post.author?.name || 'A').charAt(0)}</span>
                    </Link>
                    <Link href={`/community/profile/${post.author_id}`} className="font-medium text-zinc-300 hover:text-white transition-colors">
                        {post.author?.name || t("forum.anonymous")}
                    </Link>
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

                <div className="flex items-center gap-1">
                    {/* Pin button (admin) */}
                    {user?.is_admin && (
                        <button
                            onClick={(e) => { e.preventDefault(); togglePin(post.id); }}
                            className={cn("opacity-0 group-hover:opacity-100 p-1.5 rounded-lg transition-all",
                                post.is_pinned ? "text-amber-400 hover:bg-amber-500/10" : "text-zinc-600 hover:text-amber-400 hover:bg-amber-500/10"
                            )}
                            title={post.is_pinned ? t("forum.unpinPost") : t("forum.pinPost")}
                        >
                            <Pin className="w-3.5 h-3.5" />
                        </button>
                    )}
                    {/* Admin delete */}
                    {user?.is_admin && (
                        <button onClick={handleDelete}
                            className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all"
                            title={t("forum.deletePostAdmin")} aria-label={t("forum.deletePostAdmin")}>
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Content */}
            <Link href={`/community/${post.id}`} className="block group-hover:scale-[1.005] transition-transform">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                    {post.title}
                </h3>
                {compact ? (
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{post.content}</p>
                ) : (
                    <div className="line-clamp-3">
                        <MarkdownRenderer content={post.content} className="text-zinc-400 text-sm" />
                    </div>
                )}
            </Link>

            {/* Image preview */}
            {post.image_url && (
                <Link href={`/community/${post.id}`}>
                    <div className="mt-3 rounded-xl overflow-hidden border border-white/10 max-h-48">
                        <img src={post.image_url} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                </Link>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-zinc-400 font-medium">#{tag}</span>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-4">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (!user) { alert(t("forum.loginToLike")); return; }
                            toggleLike(post.id, user.id);
                        }}
                        className={cn("flex items-center gap-1.5 transition-colors text-xs font-medium group/like",
                            post.liked_by_user ? "text-cyan-400" : "text-zinc-500 hover:text-cyan-400"
                        )}
                        aria-label={`${language === 'tr' ? 'Beğen' : 'Like'} (${post.likes})`}
                        aria-pressed={!!post.liked_by_user}
                        type="button"
                    >
                        <ThumbsUp className={cn("w-4 h-4 group-hover/like:scale-110 transition-transform", post.liked_by_user && "fill-cyan-400")} aria-hidden="true" />
                        <span>{post.likes}</span>
                    </button>

                    <Link href={`/community/${post.id}`} className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors text-xs font-medium">
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                        <span>{post.comments?.length || 0} {t("forum.comments")}</span>
                    </Link>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-600">
                    <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{post.view_count}</span>
                    </div>

                    {/* Bookmark */}
                    {user && (
                        <button
                            onClick={(e) => { e.preventDefault(); toggleBookmark(post.id, user.id); }}
                            className={cn("hover:text-white transition-colors", isBookmarked ? "text-amber-400" : "")}
                            aria-label={isBookmarked ? t("forum.bookmarked") : t("forum.bookmark")}
                        >
                            <Bookmark className={cn("w-3.5 h-3.5", isBookmarked && "fill-amber-400")} />
                        </button>
                    )}

                    {/* Share */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            const url = `${window.location.origin}/community/${post.id}`;
                            navigator.clipboard.writeText(url).then(() => {
                                setShowCopied(true);
                                setTimeout(() => setShowCopied(false), 2000);
                            });
                        }}
                        className="hover:text-white transition-colors relative"
                        aria-label={t("forum.sharePost")}
                    >
                        <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                        {showCopied && (
                            <span className="absolute -top-8 right-0 px-2 py-1 bg-cyan-600 text-white text-[10px] font-medium rounded-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-1">
                                {t("forum.linkCopied")}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
