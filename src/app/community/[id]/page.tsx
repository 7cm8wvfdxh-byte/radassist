"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForum, Post } from "@/context/forum-context";
import { useAuth } from "@/context/auth-context";
import { useLanguage } from "@/context/language-context";
import { ArrowLeft, ThumbsUp, MessageSquare, Send, Clock, Share2, Trash2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PostDetailPage() {
    const { id } = useParams();
    const { getPost, addComment, toggleLike, deletePost, deleteComment } = useForum();
    const { user } = useAuth();
    const { t, language } = useLanguage();
    const router = useRouter();

    const [post, setPost] = useState<Post | undefined>(undefined);
    const [commentText, setCommentText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

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
    if (!post) return <div className="min-h-screen bg-black text-white p-8">{language === 'tr' ? 'Gönderi bulunamadı.' : 'Post not found.'}</div>;

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
        if (!user) { alert(language === 'tr' ? "Beğenmek için giriş yapmalısınız." : "You must be logged in to like."); return; }
        if (post) {
            await toggleLike(post.id, user.id);
            const updatedPost = await getPost(post.id);
            if (updatedPost) setPost(updatedPost);
        }
    };

    const handleDeletePost = async () => {
        if (!confirm(language === 'tr' ? "Bu gönderiyi silmek istediğinizden emin misiniz?" : "Are you sure you want to delete this post?")) return;
        const result = await deletePost(post.id);
        if (result.success) router.push("/community");
    };

    const handleDeleteComment = async (commentId: string) => {
        if (!confirm(language === 'tr' ? "Bu yorumu silmek istediğinizden emin misiniz?" : "Are you sure you want to delete this comment?")) return;
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
                    <span>{language === 'tr' ? 'Foruma Dön' : 'Back to Forum'}</span>
                </Link>

                {/* Main Post Card */}
                <div className="bg-[#0B0C10] border border-white/10 rounded-2xl overflow-hidden mb-8">
                    <div className="p-6 lg:p-8 space-y-6">

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                                    <span className="text-sm font-bold text-white">{(post.author?.name || 'A').charAt(0)}</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-white">{post.author?.name || (language === 'tr' ? 'Anonim' : 'Anonymous')}</span>
                                        {/* Admin badge — gönderi sahibi admin ise */}
                                        {user?.is_admin && user.id === post.author_id && (
                                            <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[9px] font-bold">
                                                <ShieldCheck className="w-2.5 h-2.5" />
                                                YÖNETİCİ
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-zinc-400">{post.author?.specialty || ''} • {new Date(post.created_at).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}</div>
                                </div>
                            </div>

                            {/* Admin: Delete Post */}
                            {user?.is_admin && (
                                <button
                                    onClick={handleDeletePost}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-xs font-bold transition-all"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    {language === 'tr' ? 'Gönderiyi Sil' : 'Delete Post'}
                                </button>
                            )}
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
                            <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap">{post.content}</p>
                        </div>

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
                            <button onClick={handleLike} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-cyan-400 transition-colors">
                                <ThumbsUp className="w-5 h-5" />
                                <span className="font-bold">{post.likes} {t("forum.likes")}</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors cursor-default">
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-bold">{post.comments?.length || 0} {t("forum.comments")}</span>
                            </button>
                        </div>
                        <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
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
                        <button
                            type="submit"
                            disabled={!user}
                            className="self-end p-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>

                    {/* Comments List */}
                    <div className="space-y-4">
                        {(post.comments || []).map(comment => (
                            <div key={comment.id} className="p-6 bg-white/5 border border-white/5 rounded-2xl animate-in fade-in slide-in-from-bottom-2 group/comment">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm text-zinc-300">{comment.author?.name || (language === 'tr' ? 'Anonim' : 'Anonymous')}</span>
                                        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                                        <span className="text-xs text-zinc-500">{comment.author?.specialty || ''}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-zinc-600 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {new Date(comment.created_at).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                                        </span>
                                        {/* Admin: Delete Comment */}
                                        {user?.is_admin && (
                                            <button
                                                onClick={() => handleDeleteComment(comment.id)}
                                                className="opacity-0 group-hover/comment:opacity-100 p-1 rounded text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all"
                                                title="Yorumu Sil (Admin)"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">{comment.content}</p>
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
        </div>
    );
}
