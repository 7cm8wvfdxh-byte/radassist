"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForum, Post } from "@/context/forum-context";
import { useAuth } from "@/context/auth-context";
import { useLanguage } from "@/context/language-context";
import { ArrowLeft, ThumbsUp, MessageSquare, Send, Clock, Share2, Trash2, ShieldCheck, Bookmark, Pin, Pencil, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { MarkdownRenderer } from "@/components/community/markdown-renderer";
import { EditPostModal } from "@/components/community/edit-post-modal";
import Link from "next/link";

export default function PostDetailPage() {
    const { id } = useParams();
    const { getPost, addComment, toggleLike, toggleCommentLike, toggleBookmark, togglePin, deletePost, deleteComment, bookmarkedIds } = useForum();
    const { user } = useAuth();
    const { t, language } = useLanguage();
    const router = useRouter();

    const [post, setPost] = useState<Post | undefined>(undefined);
    const [commentText, setCommentText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [showCopied, setShowCopied] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

    const isBookmarked = user && post ? bookmarkedIds.has(post.id) : false;
    const isOwner = user?.id === post?.author_id;

    useEffect(() => {
        async function loadPost() {
            if (id) {
                const foundPost = await getPost(id as string);
                if (foundPost) setPost(foundPost);
                setIsLoading(false);
            }
        }
        loadPost();
    }, [id, getPost]);

    if (isLoading) return <div className="min-h-screen bg-black text-white p-8">{t("general.loading")}</div>;
    if (!post) return <div className="min-h-screen bg-black text-white p-8">{t("forum.notFound")}</div>;

    const handleComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) { alert(t("post.loginToComment")); return; }
        if (commentText.trim() && post) {
            await addComment(post.id, commentText, user);
            setCommentText("");
            const updatedPost = await getPost(post.id);
            if (updatedPost) setPost(updatedPost);
        }
    };

    const handleLike = async () => {
        if (!user) { alert(t("forum.loginToLike")); return; }
        if (post) {
            await toggleLike(post.id, user.id);
            const updatedPost = await getPost(post.id);
            if (updatedPost) setPost(updatedPost);
        }
    };

    const handleCommentLike = async (commentId: string) => {
        if (!user) { alert(t("forum.loginToLike")); return; }
        await toggleCommentLike(commentId, user.id);
        setLikedComments(prev => {
            const next = new Set(prev);
            if (next.has(commentId)) next.delete(commentId); else next.add(commentId);
            return next;
        });
    };

    const handleDeletePost = async () => {
        if (!confirm(t("forum.deleteConfirm"))) return;
        const result = await deletePost(post.id);
        if (result.success) router.push("/community");
        else alert(result.error || t("forum.deleteFailed"));
    };

    const handleDeleteComment = async (commentId: string) => {
        if (!confirm(t("forum.deleteCommentConfirm"))) return;
        const result = await deleteComment(commentId);
        if (result.success) {
            const updatedPost = await getPost(post.id);
            if (updatedPost) setPost(updatedPost);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 lg:p-8">
            <div className="max-w-4xl mx-auto">

                {/* Navigation */}
                <Link href="/community" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>{t("forum.backToForum")}</span>
                </Link>

                {/* Pinned Badge */}
                {post.is_pinned && (
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 px-2">
                        <Pin className="w-3.5 h-3.5" />
                        {t("forum.pinned")}
                    </div>
                )}

                {/* Main Post Card */}
                <div className="bg-[#0B0C10] border border-white/10 rounded-2xl overflow-hidden mb-8">
                    <div className="p-6 lg:p-8 space-y-6">

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <Link href={`/community/profile/${post.author_id}`} className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg hover:ring-2 hover:ring-indigo-400/50 transition-all">
                                    <span className="text-sm font-bold text-white">{(post.author?.name || 'A').charAt(0)}</span>
                                </Link>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Link href={`/community/profile/${post.author_id}`} className="font-bold text-white hover:text-cyan-400 transition-colors">
                                            {post.author?.name || t("forum.anonymous")}
                                        </Link>
                                        {user?.is_admin && user.id === post.author_id && (
                                            <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[9px] font-bold">
                                                <ShieldCheck className="w-2.5 h-2.5" /> {t("forum.admin")}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-zinc-400">{post.author?.specialty || ''} &bull; {new Date(post.created_at).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Edit (owner only) */}
                                {isOwner && (
                                    <button onClick={() => setIsEditOpen(true)}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold transition-all">
                                        <Pencil className="w-3.5 h-3.5" /> {t("forum.editPost")}
                                    </button>
                                )}
                                {/* Pin (admin) */}
                                {user?.is_admin && (
                                    <button onClick={() => { togglePin(post.id); setPost(p => p ? { ...p, is_pinned: !p.is_pinned } : p); }}
                                        className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all",
                                            post.is_pinned ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-zinc-400 bg-white/5 border-white/10 hover:bg-white/10")}>
                                        <Pin className="w-3.5 h-3.5" /> {post.is_pinned ? t("forum.unpinPost") : t("forum.pinPost")}
                                    </button>
                                )}
                                {/* Delete (admin) */}
                                {user?.is_admin && (
                                    <button onClick={handleDeletePost}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-xs font-bold transition-all">
                                        <Trash2 className="w-3.5 h-3.5" /> {t("forum.deletePost")}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
                            <MarkdownRenderer content={post.content} className="text-zinc-300 text-base leading-relaxed" />
                        </div>

                        {/* Image */}
                        {post.image_url && (
                            <div className="rounded-xl overflow-hidden border border-white/10">
                                <img src={post.image_url} alt="" className="w-full max-h-96 object-contain bg-black" loading="lazy" />
                            </div>
                        )}

                        {/* Tags */}
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-cyan-400 border border-cyan-500/20">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="bg-zinc-900/50 p-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-4">
                            <button onClick={handleLike}
                                className={cn("flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                                    post.liked_by_user ? "text-cyan-400 bg-cyan-500/10" : "text-zinc-400 hover:bg-white/5 hover:text-cyan-400")}>
                                <ThumbsUp className={cn("w-5 h-5", post.liked_by_user && "fill-cyan-400")} />
                                <span className="font-bold">{post.likes} {t("forum.likes")}</span>
                            </button>
                            <div className="flex items-center gap-2 px-4 py-2 text-zinc-400">
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-bold">{post.comments?.length || 0} {t("forum.comments")}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Bookmark */}
                            {user && (
                                <button onClick={() => toggleBookmark(post.id, user.id)}
                                    className={cn("p-2 transition-colors rounded-lg", isBookmarked ? "text-amber-400" : "text-zinc-500 hover:text-amber-400")}
                                    aria-label={isBookmarked ? t("forum.bookmarked") : t("forum.bookmark")}>
                                    <Bookmark className={cn("w-5 h-5", isBookmarked && "fill-amber-400")} />
                                </button>
                            )}
                            {/* Share */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href).then(() => {
                                        setShowCopied(true);
                                        setTimeout(() => setShowCopied(false), 2000);
                                    });
                                }}
                                className="p-2 text-zinc-500 hover:text-white transition-colors relative"
                                aria-label={t("forum.sharePost")}>
                                <Share2 className="w-5 h-5" />
                                {showCopied && (
                                    <span className="absolute -top-8 right-0 px-2 py-1 bg-cyan-600 text-white text-xs font-medium rounded-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-1">
                                        {t("forum.linkCopied")}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white px-2">{t("forum.comments")}</h3>

                    {/* Comment Input */}
                    <form onSubmit={handleComment} className="flex gap-4 p-4 bg-zinc-900/30 rounded-2xl border border-white/5">
                        <div className="flex-1">
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder={t("post.writeComment")}
                                className="w-full bg-transparent text-white placeholder:text-zinc-600 focus:outline-none resize-none h-12 py-3"
                            />
                        </div>
                        <button type="submit" disabled={!user}
                            className="self-end p-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                            <Send className="w-5 h-5" />
                        </button>
                    </form>

                    {/* Comments List */}
                    <div className="space-y-4">
                        {(post.comments || []).map(comment => (
                            <div key={comment.id} className="p-6 bg-white/5 border border-white/5 rounded-2xl animate-in fade-in slide-in-from-bottom-2 group/comment">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <Link href={`/community/profile/${comment.author_id}`} className="font-bold text-sm text-zinc-300 hover:text-white transition-colors">
                                            {comment.author?.name || t("forum.anonymous")}
                                        </Link>
                                        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                                        <span className="text-xs text-zinc-500">{comment.author?.specialty || ''}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-zinc-600 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {new Date(comment.created_at).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                                        </span>
                                        {user?.is_admin && (
                                            <button onClick={() => handleDeleteComment(comment.id)}
                                                className="opacity-0 group-hover/comment:opacity-100 p-1 rounded text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all"
                                                title={t("forum.deleteComment")} aria-label={t("forum.deleteComment")}>
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-3">{comment.content}</p>

                                {/* Comment Like */}
                                <button
                                    onClick={() => handleCommentLike(comment.id)}
                                    className={cn("flex items-center gap-1 text-xs transition-colors",
                                        likedComments.has(comment.id) ? "text-rose-400" : "text-zinc-600 hover:text-rose-400"
                                    )}
                                    aria-label={t("forum.likeComment")}
                                >
                                    <Heart className={cn("w-3.5 h-3.5", likedComments.has(comment.id) && "fill-rose-400")} />
                                    <span>{(comment.likes || 0) + (likedComments.has(comment.id) ? 1 : 0)}</span>
                                </button>
                            </div>
                        ))}

                        {(!post.comments || post.comments.length === 0) && (
                            <div className="text-center py-10 text-zinc-600 italic">
                                {t("post.noComments")}
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Edit Modal */}
            {isEditOpen && post && (
                <EditPostModal
                    post={post}
                    isOpen={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    onSaved={(updated) => setPost(updated)}
                />
            )}
        </div>
    );
}
