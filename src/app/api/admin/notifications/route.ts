import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

// GET — Admin bildirimleri getir
export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
        return NextResponse.json({ error: 'Yetkilendirme gerekli.' }, { status: 401 });
    }

    // Limit parametresi
    const { searchParams } = new URL(req.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const unreadOnly = searchParams.get('unread') === 'true';

    let query = supabase
        .from('admin_notifications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

    if (unreadOnly) {
        query = query.eq('is_read', false);
    }

    const { data, error } = await query;

    if (error) {
        return NextResponse.json({ error: 'Bildirimler alınamadı.' }, { status: 500 });
    }

    return NextResponse.json({ notifications: data || [] });
}

// PATCH — Bildirimi okundu olarak işaretle
export async function PATCH(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
        return NextResponse.json({ error: 'Yetkilendirme gerekli.' }, { status: 401 });
    }

    let body: { id?: string; markAllRead?: boolean };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: 'Geçersiz istek.' }, { status: 400 });
    }

    if (body.markAllRead) {
        const { error } = await supabase
            .from('admin_notifications')
            .update({ is_read: true })
            .eq('is_read', false);

        if (error) {
            return NextResponse.json({ error: 'Bildirimler güncellenemedi.' }, { status: 500 });
        }
        return NextResponse.json({ success: true });
    }

    if (!body.id) {
        return NextResponse.json({ error: 'Bildirim ID gerekli.' }, { status: 400 });
    }

    const { error } = await supabase
        .from('admin_notifications')
        .update({ is_read: true })
        .eq('id', body.id);

    if (error) {
        return NextResponse.json({ error: 'Bildirim güncellenemedi.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
