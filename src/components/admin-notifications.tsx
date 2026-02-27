'use client';

import { useState, useEffect, useCallback } from 'react';
import { Bell, X, Check, CheckCheck, Users, MessageSquare, FileText, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/context/language-context';

interface Notification {
    id: string;
    type: 'new_user' | 'new_post' | 'new_comment';
    title: string;
    message: string;
    metadata: Record<string, string>;
    is_read: boolean;
    created_at: string;
}

export function AdminNotifications() {
    const { user } = useAuth();
    const { language } = useLanguage();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchNotifications = useCallback(async () => {
        if (!user?.is_admin) return;

        setIsLoading(true);
        const { data, error } = await supabase
            .from('admin_notifications')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);

        if (!error && data) {
            setNotifications(data);
            setUnreadCount(data.filter((n: Notification) => !n.is_read).length);
        }
        setIsLoading(false);
    }, [user?.is_admin]);

    useEffect(() => {
        fetchNotifications();

        // Realtime subscription
        if (!user?.is_admin) return;

        const channel = supabase
            .channel('admin-notifications')
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'admin_notifications'
            }, (payload) => {
                const newNotif = payload.new as Notification;
                setNotifications(prev => [newNotif, ...prev]);
                setUnreadCount(prev => prev + 1);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [user?.is_admin, fetchNotifications]);

    const markAsRead = async (id: string) => {
        await supabase
            .from('admin_notifications')
            .update({ is_read: true })
            .eq('id', id);

        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, is_read: true } : n)
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
    };

    const markAllRead = async () => {
        await supabase
            .from('admin_notifications')
            .update({ is_read: true })
            .eq('is_read', false);

        setNotifications(prev => prev.map(n => ({ ...n, is_read: true })));
        setUnreadCount(0);
    };

    if (!user?.is_admin) return null;

    const typeIcon = (type: string) => {
        switch (type) {
            case 'new_user': return <Users className="w-4 h-4 text-green-400" />;
            case 'new_post': return <FileText className="w-4 h-4 text-blue-400" />;
            case 'new_comment': return <MessageSquare className="w-4 h-4 text-purple-400" />;
            default: return <Bell className="w-4 h-4 text-zinc-400" />;
        }
    };

    const typeBg = (type: string) => {
        switch (type) {
            case 'new_user': return 'bg-green-500/10 border-green-500/20';
            case 'new_post': return 'bg-blue-500/10 border-blue-500/20';
            case 'new_comment': return 'bg-purple-500/10 border-purple-500/20';
            default: return 'bg-white/5 border-white/10';
        }
    };

    const timeAgo = (date: string) => {
        const diff = Date.now() - new Date(date).getTime();
        const minutes = Math.floor(diff / 60000);
        if (minutes < 1) return language === 'tr' ? 'Az önce' : 'Just now';
        if (minutes < 60) return `${minutes}${language === 'tr' ? 'dk' : 'm'}`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}${language === 'tr' ? 'sa' : 'h'}`;
        const days = Math.floor(hours / 24);
        return `${days}${language === 'tr' ? 'g' : 'd'}`;
    };

    return (
        <>
            {/* Bell Button */}
            <button
                onClick={() => { setIsOpen(!isOpen); if (!isOpen) fetchNotifications(); }}
                className="relative p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                title={language === 'tr' ? 'Admin Bildirimleri' : 'Admin Notifications'}
                aria-expanded={isOpen}
            >
                <Bell className="w-4 h-4 text-amber-400" />
                {unreadCount > 0 && (
                    <span
                        className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center px-1 rounded-full bg-red-500 text-white text-[10px] font-bold border-2 border-black"
                        aria-label={`${unreadCount} ${language === 'tr' ? 'okunmamış bildirim' : 'unread notifications'}`}
                    >
                        {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                )}
            </button>

            {/* Panel */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />

                    {/* Notification Panel */}
                    <div className="fixed top-0 right-0 w-full max-w-md h-full bg-[#0a0b0f] border-l border-white/10 z-[70] flex flex-col shadow-2xl animate-in slide-in-from-right-5">

                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                                    <Bell className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">
                                        {language === 'tr' ? 'Bildirimler' : 'Notifications'}
                                    </h2>
                                    <p className="text-xs text-zinc-500">
                                        {unreadCount > 0
                                            ? `${unreadCount} ${language === 'tr' ? 'okunmamış' : 'unread'}`
                                            : language === 'tr' ? 'Tümü okundu' : 'All read'
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {unreadCount > 0 && (
                                    <button
                                        onClick={markAllRead}
                                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                                        title={language === 'tr' ? 'Tümünü okundu işaretle' : 'Mark all read'}
                                    >
                                        <CheckCheck className="w-3.5 h-3.5" />
                                        {language === 'tr' ? 'Tümü' : 'All'}
                                    </button>
                                )}
                                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Notification List */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-2" role="feed" aria-label="Notifications">
                            {isLoading && notifications.length === 0 && (
                                <div className="flex items-center justify-center py-12">
                                    <Loader2 className="w-6 h-6 text-zinc-500 animate-spin" />
                                </div>
                            )}

                            {!isLoading && notifications.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <Bell className="w-10 h-10 text-zinc-700 mb-3" />
                                    <p className="text-zinc-500 text-sm">
                                        {language === 'tr' ? 'Henüz bildirim yok.' : 'No notifications yet.'}
                                    </p>
                                </div>
                            )}

                            {notifications.map(notif => (
                                <div
                                    key={notif.id}
                                    role="article"
                                    className={`p-3 rounded-xl border transition-all cursor-pointer group ${
                                        notif.is_read
                                            ? 'bg-white/[0.02] border-white/5 opacity-60'
                                            : `${typeBg(notif.type)}`
                                    }`}
                                    onClick={() => !notif.is_read && markAsRead(notif.id)}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5">{typeIcon(notif.type)}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-sm font-semibold text-white truncate">{notif.title}</p>
                                                <span className="text-[10px] text-zinc-500 whitespace-nowrap">{timeAgo(notif.created_at)}</span>
                                            </div>
                                            <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">{notif.message}</p>
                                        </div>
                                        {!notif.is_read && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); markAsRead(notif.id); }}
                                                className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/10 text-zinc-500 hover:text-white transition-all"
                                                title={language === 'tr' ? 'Okundu' : 'Mark read'}
                                            >
                                                <Check className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
