import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'thnshn@icloud.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

interface EmailPayload {
    type: 'new_user' | 'new_post' | 'new_comment';
    title: string;
    message: string;
}

export async function POST(req: NextRequest) {
    // Sadece internal çağrılara izin ver (basit secret check)
    const internalSecret = req.headers.get('x-internal-secret');
    if (internalSecret !== process.env.INTERNAL_API_SECRET) {
        return NextResponse.json({ error: 'Yetkisiz.' }, { status: 403 });
    }

    if (!RESEND_API_KEY) {
        // Resend yapılandırılmamış, sessizce atla
        return NextResponse.json({ skipped: true, reason: 'RESEND_API_KEY tanımlı değil.' });
    }

    let body: EmailPayload;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: 'Geçersiz istek.' }, { status: 400 });
    }

    const { type, title, message } = body;
    if (!type || !title || !message) {
        return NextResponse.json({ error: 'type, title ve message gerekli.' }, { status: 400 });
    }

    const typeEmoji: Record<string, string> = {
        new_user: '👤',
        new_post: '📝',
        new_comment: '💬',
    };

    try {
        const { Resend } = await import('resend');
        const resend = new Resend(RESEND_API_KEY);

        await resend.emails.send({
            from: 'RadAsist <onboarding@resend.dev>',
            to: ADMIN_EMAIL,
            subject: `${typeEmoji[type] || '🔔'} RadAsist: ${title}`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #0f172a, #1e293b); border-radius: 16px; padding: 24px; color: white;">
                        <h2 style="margin: 0 0 8px; font-size: 18px; color: #22d3ee;">${typeEmoji[type] || '🔔'} ${title}</h2>
                        <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.6;">${message}</p>
                        <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 16px 0;" />
                        <p style="margin: 0; color: #64748b; font-size: 12px;">RadAsist Bildirim Sistemi</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email gönderim hatası:', error);
        return NextResponse.json({ error: 'Email gönderilemedi.' }, { status: 500 });
    }
}
