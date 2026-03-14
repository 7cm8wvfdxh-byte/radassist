"use client";

import React, { useState } from "react";
import { X, Send, Tag, FileText, ImagePlus, Eye, Pencil, Loader2 } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useForum } from "@/context/forum-context";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";
import { MarkdownRenderer } from "./markdown-renderer";

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AVAILABLE_TAGS = ["Brain", "Spine", "Liver", "Kidney", "Lung", "Breast", "MSK", "Gastro", "Gynecology", "Diagnosis", "Technical", "Question"];

export function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
    const { user } = useAuth();
    const { addPost, uploadImage } = useForum();
    const { t } = useLanguage();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    if (!isOpen) return null;

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            setError("Max 5MB");
            return;
        }

        setIsUploading(true);
        const url = await uploadImage(file);
        setIsUploading(false);

        if (url) {
            setImageUrl(url);
            setContent(prev => prev + (prev ? "\n\n" : "") + `![${file.name}](${url})`);
        } else {
            setError(t("forum.imageUploadFailed"));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) { setError(t("post.loginRequired")); return; }
        if (!title || !content) { setError(t("post.fieldsRequired")); return; }

        setIsSubmitting(true);
        setError("");

        try {
            const result = await addPost(title, content, selectedTags, user, imageUrl || undefined);
            setIsSubmitting(false);

            if (result.success) {
                setTitle(""); setContent(""); setSelectedTags([]); setImageUrl(null); setShowPreview(false);
                onClose();
            } else {
                setError(result.error || t("forum.createError"));
            }
        } catch {
            setIsSubmitting(false);
            setError(t("forum.unexpectedError"));
        }
    };

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else if (selectedTags.length < 3) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-2xl bg-[#0B0C10] border border-white/10 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden max-h-[90vh] flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-zinc-900/50 shrink-0">
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
                <div className="p-6 space-y-5 overflow-y-auto flex-1">
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
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-zinc-400">{t("post.content")}</label>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-zinc-600">{t("forum.markdownSupported")}</span>
                                <div className="flex bg-white/5 rounded-lg p-0.5">
                                    <button
                                        type="button"
                                        onClick={() => setShowPreview(false)}
                                        className={cn("flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
                                            !showPreview ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                                        )}
                                    >
                                        <Pencil className="w-3 h-3" /> {t("forum.write")}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowPreview(true)}
                                        className={cn("flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
                                            showPreview ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                                        )}
                                    >
                                        <Eye className="w-3 h-3" /> {t("forum.preview")}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {showPreview ? (
                            <div className="w-full min-h-[8rem] bg-white/5 border border-white/10 rounded-xl p-4">
                                {content ? (
                                    <MarkdownRenderer content={content} />
                                ) : (
                                    <p className="text-zinc-600 text-sm italic">{t("post.contentPlaceholder")}</p>
                                )}
                            </div>
                        ) : (
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder={t("post.contentPlaceholder")}
                                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder:text-zinc-600 resize-none font-mono text-sm"
                            />
                        )}
                    </div>

                    {/* Image Upload */}
                    <div className="flex items-center gap-3">
                        <label className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border cursor-pointer transition-all",
                            isUploading ? "opacity-50 cursor-not-allowed" : "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
                        )}>
                            {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImagePlus className="w-4 h-4" />}
                            {isUploading ? t("forum.imageUploading") : t("forum.imageUpload")}
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={isUploading} />
                        </label>
                        {imageUrl && (
                            <span className="text-[10px] text-emerald-400 font-medium">1 image attached</span>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                            <Tag className="w-4 h-4" /> {t("post.tags")}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {AVAILABLE_TAGS.map(tag => (
                                <button
                                    key={tag}
                                    type="button"
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
                <div className="p-6 border-t border-white/5 bg-zinc-900/50 flex justify-end gap-3 shrink-0">
                    <button onClick={onClose} className="px-5 py-2.5 rounded-xl font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
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
