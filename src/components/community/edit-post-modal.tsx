"use client";

import React, { useState } from "react";
import { X, Save, Tag, Pencil, Eye, ImagePlus, Loader2 } from "lucide-react";
import { Post, useForum } from "@/context/forum-context";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";
import { MarkdownRenderer } from "./markdown-renderer";

interface EditPostModalProps {
    post: Post;
    isOpen: boolean;
    onClose: () => void;
    onSaved?: (updated: Post) => void;
}

const AVAILABLE_TAGS = ["Brain", "Spine", "Liver", "Kidney", "Lung", "Breast", "MSK", "Gastro", "Gynecology", "Diagnosis", "Technical", "Question"];

export function EditPostModal({ post, isOpen, onClose, onSaved }: EditPostModalProps) {
    const { editPost, uploadImage } = useForum();
    const { t } = useLanguage();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [selectedTags, setSelectedTags] = useState<string[]>(post.tags);
    const [imageUrl, setImageUrl] = useState<string | undefined>(post.image_url);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    if (!isOpen) return null;

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) { setError("Max 5MB"); return; }

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

    const handleSubmit = async () => {
        if (!title || !content) { setError(t("post.fieldsRequired")); return; }

        setIsSubmitting(true);
        setError("");

        const result = await editPost(post.id, title, content, selectedTags, imageUrl);
        setIsSubmitting(false);

        if (result.success) {
            onSaved?.({ ...post, title, content, tags: selectedTags, image_url: imageUrl });
            onClose();
        } else {
            setError(result.error || t("forum.editFailed"));
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

                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-zinc-900/50 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                            <Pencil className="w-5 h-5 text-amber-400" />
                        </div>
                        <h2 className="text-xl font-bold text-white">{t("forum.editPost")}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-5 overflow-y-auto flex-1">
                    {error && <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">{error}</div>}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">{t("post.title")}</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-zinc-600" />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-zinc-400">{t("post.content")}</label>
                            <div className="flex bg-white/5 rounded-lg p-0.5">
                                <button type="button" onClick={() => setShowPreview(false)}
                                    className={cn("flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
                                        !showPreview ? "bg-white/10 text-white" : "text-zinc-500")}>
                                    <Pencil className="w-3 h-3" /> {t("forum.write")}
                                </button>
                                <button type="button" onClick={() => setShowPreview(true)}
                                    className={cn("flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
                                        showPreview ? "bg-white/10 text-white" : "text-zinc-500")}>
                                    <Eye className="w-3 h-3" /> {t("forum.preview")}
                                </button>
                            </div>
                        </div>
                        {showPreview ? (
                            <div className="w-full min-h-[8rem] bg-white/5 border border-white/10 rounded-xl p-4">
                                <MarkdownRenderer content={content} />
                            </div>
                        ) : (
                            <textarea value={content} onChange={(e) => setContent(e.target.value)}
                                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-zinc-600 resize-none font-mono text-sm" />
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <label className={cn("flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border cursor-pointer transition-all",
                            isUploading ? "opacity-50" : "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10")}>
                            {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImagePlus className="w-4 h-4" />}
                            {isUploading ? t("forum.imageUploading") : t("forum.imageUpload")}
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={isUploading} />
                        </label>
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                            <Tag className="w-4 h-4" /> {t("post.tags")}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {AVAILABLE_TAGS.map(tag => (
                                <button key={tag} type="button" onClick={() => toggleTag(tag)}
                                    className={cn("px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                                        selectedTags.includes(tag)
                                            ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400"
                                            : "bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10")}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-white/5 bg-zinc-900/50 flex justify-end gap-3 shrink-0">
                    <button onClick={onClose} className="px-5 py-2.5 rounded-xl font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        {t("post.cancel")}
                    </button>
                    <button onClick={handleSubmit} disabled={isSubmitting}
                        className="px-6 py-2.5 rounded-xl font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-lg flex items-center gap-2 transition-all disabled:opacity-50">
                        <Save className="w-4 h-4" />
                        {isSubmitting ? t("post.submitting") : t("general.save")}
                    </button>
                </div>
            </div>
        </div>
    );
}
