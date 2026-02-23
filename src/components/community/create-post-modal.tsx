"use client";

import React, { useState } from "react";
import { X, Send, Tag, FileText } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useForum } from "@/context/forum-context";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AVAILABLE_TAGS = ["Brain", "Spine", "Liver", "Kidney", "Lung", "Breast", "MSK", "Gastro", "Gynecology", "Diagnosis", "Technical", "Question"];

export function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
    const { user } = useAuth();
    const { addPost } = useForum();
    const { t } = useLanguage();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("handleSubmit called, user:", user);

        if (!user) {
            setError(t("post.loginRequired"));
            return;
        }
        if (!title || !content) {
            setError(t("post.fieldsRequired"));
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            console.log("Calling addPost...");
            const result = await addPost(title, content, selectedTags, user);
            console.log("addPost result:", result);

            setIsSubmitting(false);

            if (result.success) {
                setTitle("");
                setContent("");
                setSelectedTags([]);
                onClose();
            } else {
                setError(result.error || "Gönderi oluşturulamadı. Lütfen tekrar deneyin.");
            }
        } catch (err) {
            console.error("Error in handleSubmit:", err);
            setIsSubmitting(false);
            setError("Beklenmeyen bir hata oluştu.");
        }
    };

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            if (selectedTags.length < 3) {
                setSelectedTags([...selectedTags, tag]);
            }
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-2xl bg-[#0B0C10] border border-white/10 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-zinc-900/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">{t("post.create")}</h2>
                            <p className="text-xs text-zinc-400">{t("post.createSubtitle")}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {error && <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">{error}</div>}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">{t("post.title")}</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={t("post.titlePlaceholder")}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder:text-zinc-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">{t("post.content")}</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder={t("post.contentPlaceholder")}
                            className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder:text-zinc-600 resize-none"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                            <Tag className="w-4 h-4" /> {t("post.tags")}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {AVAILABLE_TAGS.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                                        selectedTags.includes(tag)
                                            ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400"
                                            : "bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10"
                                    )}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5 bg-zinc-900/50 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        {t("post.cancel")}
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-6 py-2.5 rounded-xl font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-4 h-4" />
                        {isSubmitting ? t("post.submitting") : t("post.submit")}
                    </button>
                </div>
            </div>
        </div>
    );
}
