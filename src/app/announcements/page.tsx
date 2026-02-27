"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ExternalLink, Megaphone, Bell, GraduationCap, FileText, Globe } from "lucide-react";
import { announcements } from "@/data/announcements";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export default function AnnouncementsPage() {
    const { t, language } = useLanguage();
    const [filter, setFilter] = useState<'all' | 'congress' | 'seminar' | 'news' | 'update'>('all');

    const filteredData = filter === 'all'
        ? announcements
        : announcements.filter(item => item.type === filter);

    const getIcon = (type: string) => {
        switch (type) {
            case 'congress': return <Globe className="w-5 h-5" />;
            case 'seminar': return <GraduationCap className="w-5 h-5" />;
            case 'news': return <FileText className="w-5 h-5" />;
            case 'update': return <Megaphone className="w-5 h-5" />;
            default: return <Bell className="w-5 h-5" />;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'congress': return "text-purple-400 bg-purple-500/10 border-purple-500/20";
            case 'seminar': return "text-blue-400 bg-blue-500/10 border-blue-500/20";
            case 'news': return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
            case 'update': return "text-orange-400 bg-orange-500/10 border-orange-500/20";
            default: return "text-zinc-400 bg-zinc-500/10 border-zinc-500/20";
        }
    };

    const getLabel = (type: string) => {
        switch (type) {
            case 'congress': return t("announcements.congress");
            case 'seminar': return t("announcements.seminar");
            case 'news': return t("announcements.news");
            case 'update': return t("announcements.update");
            default: return t("announcements.announcement");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 lg:p-8">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <div className="space-y-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>{t("nav.backToHome")}</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                            <Bell className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">{t("announcements.title")}</h1>
                            <p className="text-zinc-400">{t("announcements.subtitle")}</p>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5">
                    {['all', 'congress', 'seminar', 'news', 'update'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as 'all' | 'congress' | 'seminar' | 'news' | 'update')}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                filter === f
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {f === 'all' ? t("announcements.all") : getLabel(f)}
                        </button>
                    ))}
                </div>

                {/* Timeline / Grid */}
                <div className="grid gap-6">
                    {filteredData.map((item) => (
                        <div key={item.id} className="group relative bg-[#0B0C10] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row gap-6">
                            {/* Badge & Date (Left on Desktop) */}
                            <div className="md:w-48 flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-3">
                                <span className={cn("px-3 py-1 rounded-lg text-xs font-bold border flex items-center gap-2", getColor(item.type))}>
                                    {getIcon(item.type)}
                                    {getLabel(item.type)}
                                </span>
                                <span className="text-sm text-zinc-500 font-medium">
                                    {new Date(item.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {item.content}
                                </p>

                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                    {item.location && (
                                        <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                                            <MapPin className="w-4 h-4" />
                                            <span>{item.location}</span>
                                        </div>
                                    )}
                                    {item.url && (
                                        <a
                                            href={item.url}
                                            target="_blank" // For external links mostly, internal for updates
                                            className="flex items-center gap-1.5 text-sm font-bold text-cyan-500 hover:text-cyan-400 transition-colors ml-auto"
                                        >
                                            {t("announcements.viewDetails")} <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredData.length === 0 && (
                        <div className="text-center py-20 text-zinc-500">
                            {t("announcements.noAnnouncements")}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
