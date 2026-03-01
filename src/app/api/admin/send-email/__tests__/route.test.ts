import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('Send Email API Route', () => {
    const originalEnv = { ...process.env };

    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
    });

    afterEach(() => {
        process.env = { ...originalEnv };
    });

    it('internal secret olmadan 403 döndürmeli', async () => {
        delete process.env.INTERNAL_API_SECRET;
        const { POST } = await import('../route');
        const { NextRequest } = await import('next/server');
        const req = new NextRequest(new Request('http://localhost:3000/api/admin/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'new_user', title: 'Test', message: 'Test message' }),
        }));

        const response = await POST(req);
        expect(response.status).toBe(403);
    });

    it('RESEND_API_KEY tanımlı değilse skip etmeli', async () => {
        process.env.INTERNAL_API_SECRET = 'test-secret';
        delete process.env.RESEND_API_KEY;

        const { POST } = await import('../route');
        const { NextRequest } = await import('next/server');

        const req = new NextRequest(new Request('http://localhost:3000/api/admin/send-email', {
            method: 'POST',
            headers: {
                'x-internal-secret': 'test-secret',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: 'new_user', title: 'Test', message: 'Test msg' }),
        }));

        const response = await POST(req);
        const data = await response.json();
        expect(data.skipped).toBe(true);
    });

    it('zorunlu alanlar eksik olduğunda 400 döndürmeli', async () => {
        process.env.INTERNAL_API_SECRET = 'test-secret';
        process.env.RESEND_API_KEY = 'fake-resend-key';

        const { POST } = await import('../route');
        const { NextRequest } = await import('next/server');

        const req = new NextRequest(new Request('http://localhost:3000/api/admin/send-email', {
            method: 'POST',
            headers: {
                'x-internal-secret': 'test-secret',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: 'new_user' }), // title ve message eksik
        }));

        const response = await POST(req);
        expect(response.status).toBe(400);
        const data = await response.json();
        expect(data.error).toContain('type, title ve message');
    });

    it('geçersiz JSON gövdesinde 400 döndürmeli', async () => {
        process.env.INTERNAL_API_SECRET = 'test-secret';
        process.env.RESEND_API_KEY = 'fake-resend-key';

        const { POST } = await import('../route');
        const { NextRequest } = await import('next/server');

        const req = new NextRequest(new Request('http://localhost:3000/api/admin/send-email', {
            method: 'POST',
            headers: {
                'x-internal-secret': 'test-secret',
                'Content-Type': 'application/json',
            },
            body: 'invalid-json{{{',
        }));

        const response = await POST(req);
        expect(response.status).toBe(400);
    });
});
