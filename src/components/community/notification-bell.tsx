"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, Heart, MessageSquare, Pin, Check } from "lucide-react";
import { useForum } from "@/context/forum-context";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export function NotificationBell() {
    const { notifications, unreadCount, markNotificationsRead } = useForum();
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const iconMap = {
        like: <Heart className="w-3.5 h-3.5 text-rose-400" />,
        comment: <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />,
        pin: <Pin className="w-3.5 h-3.5 text-amber-400" />,
    };

    const labelMap = {
        like: t("forum.notifLiked"),
        comment: t("forum.notifCommented"),
        pin: t("forum.notifPinned"),
    };

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label={t("forum.notifications")}
            >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center min-w-[18px] min-h-[18px]">
                        {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-[#0B0C10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                        <h3 className="text-sm font-bold text-white">{t("forum.notifications")}</h3>
                        {unreadCount > 0 && (
                            <button
                                onClick={() => markNotificationsRead()}
                                className="flex items-center gap-1 text-[10px] text-cyan-400 hover:text-cyan-300 font-medium"
                            >
                                <Check className="w-3 h-3" /> {t("forum.markAllRead")}
                            </button>
                        )}
                    </div>

                    <div className="max-h-80 overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-6 text-center text-zinc-600 text-sm">
                                {t("forum.noNotifications")}
                            </div>
                        ) : (
                            notifications.map(n => (
                                <Link
                                    key={n.id}
                                    href={`/community/${n.post_id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-start gap-3 p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 ${!n.is_read ? "bg-cyan-500/5" : ""}`}
                                >
                                    <div className="mt-0.5 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        {iconMap[n.type]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-zinc-300">
                                            <span className="font-bold text-white">{n.actor_name}</span>{" "}
                                            {labelMap[n.type]}
                                        </p>
                                        <p className="text-[10px] text-zinc-500 truncate mt-0.5">{n.post_title}</p>
                                        <p className="text-[10px] text-zinc-600 mt-0.5">
                                            {new Date(n.created_at).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                                        </p>
                                    </div>
                                    {!n.is_read && <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-2" />}
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
