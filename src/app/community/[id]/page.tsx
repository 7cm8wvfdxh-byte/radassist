"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForum, Post } from "@/context/forum-context";
import { useAuth } from "@/context/auth-context";
import { ArrowLeft, User, ThumbsUp, MessageSquare, Send, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PostDetailPage() {
    const { id } = useParams();
    const { getPost, addComment, toggleLike } = useForum();
    const { user } = useAuth();
    const router = useRouter();

    const [post, setPost] = useState<Post | undefined>(undefined);
    const [commentText, setCommentText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Fetch post logic - wrapped in useEffect to handle hydration/context availability
    useEffect(() => {
        if (id) {
            // Find post from context
            const foundPost = getPost(id as string);
            setPost(foundPost);
            setIsLoading(false);
        }
    }, [id, getPost, post?.comments.length, post?.likes]); // Re-run if comments/likes change (simplified reactivity)

    if (isLoading) return <div className="min-h-screen bg-black text-white p-8">Yükleniyor...</div>;
    if (!post) return <div className="min-h-screen bg-black text-white p-8">Gönderi bulunamadı.</div>;

    const handleComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            alert("Yorum yapmak için giriş yapmalısınız.");
            return;
        }
        if (commentText.trim()) {
            addComment(post.id, commentText, user);
            setCommentText("");
            // Force re-fetch (in a real app this would be automatic via SWR/Query)
            setPost(getPost(post.id));
        }
    };

    const handleLike = () => {
        toggleLike(post.id);
        setPost(getPost(post.id));
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 lg:p-8">
            <div className="max-w-4xl mx-auto">

                {/* Navigation */}
                <Link href="/community" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Foruma Dön</span>
                </Link>

                {/* Main Post Card */}
                <div className="bg-[#0B0C10] border border-white/10 rounded-2xl overflow-hidden mb-8">
                    <div className="p-6 lg:p-8 space-y-6">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                                    <span className="text-sm font-bold text-white">{post.author.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <div className="font-bold text-white">{post.author.name}</div>
                                    <div className="text-xs text-zinc-400">{post.author.specialty} • {new Date(post.createdAt).toLocaleDateString('tr-TR')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
                            <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap">{post.content}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2">
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
                                <span className="font-bold">{post.likes} Beğeni</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors cursor-default">
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-bold">{post.comments.length} Yorum</span>
                            </button>
                        </div>
                        <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white px-2">Yorumlar</h3>

                    {/* Comment Input */}
                    <form onSubmit={handleComment} className="flex gap-4 p-4 bg-zinc-900/30 rounded-2xl border border-white/5">
                        <div className="flex-1">
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Bu vaka hakkında ne düşünüyorsunuz?"
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
                        {post.comments.map(comment => (
                            <div key={comment.id} className="p-6 bg-white/5 border border-white/5 rounded-2xl animate-in fade-in slide-in-from-bottom-2">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm text-zinc-300">{comment.author.name}</span>
                                        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                                        <span className="text-xs text-zinc-500">{comment.author.specialty}</span>
                                    </div>
                                    <span className="text-xs text-zinc-600 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {new Date(comment.createdAt).toLocaleDateString('tr-TR')}
                                    </span>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">{comment.content}</p>
                            </div>
                        ))}

                        {post.comments.length === 0 && (
                            <div className="text-center py-10 text-zinc-600 italic">
                                Henüz yorum yok. İlk yorumu siz yapın!
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
