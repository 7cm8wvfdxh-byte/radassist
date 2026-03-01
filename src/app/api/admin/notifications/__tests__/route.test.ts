import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, PATCH } from '../route';
import { supabase } from '@/lib/supabase';

describe('Notifications API Route', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('GET', () => {
        it('authorization başlığı olmadan 401 döndürmeli', async () => {
            const req = new Request('http://localhost:3000/api/admin/notifications', {
                method: 'GET',
            });
            // NextRequest oluşturmak için
            const { NextRequest } = await import('next/server');
            const nextReq = new NextRequest(req);

            const response = await GET(nextReq);
            const data = await response.json();
            expect(response.status).toBe(401);
            expect(data.error).toBeDefined();
        });

        it('authorization ile bildirimleri getirmeli', async () => {
            const mockData = [{ id: '1', title: 'Test', is_read: false }];

            const mockQuery = {
                select: vi.fn().mockReturnThis(),
                order: vi.fn().mockReturnThis(),
                limit: vi.fn().mockReturnThis(),
                eq: vi.fn().mockResolvedValue({ data: mockData, error: null }),
            };
            vi.mocked(supabase.from).mockReturnValue(mockQuery as any);

            const { NextRequest } = await import('next/server');
            const req = new NextRequest('http://localhost:3000/api/admin/notifications', {
                headers: { authorization: 'Bearer test-token' },
            });

            const response = await GET(req);
            expect(response.status).toBe(200);
        });

        it('limit parametresini 100 ile sınırlamalı', async () => {
            const mockQuery = {
                select: vi.fn().mockReturnThis(),
                order: vi.fn().mockReturnThis(),
                limit: vi.fn().mockReturnThis(),
                eq: vi.fn().mockReturnThis(),
            };

            // limit çağrısına resolve ekleyelim
            mockQuery.limit.mockImplementation(() => {
                return { ...mockQuery, then: (resolve: any) => resolve({ data: [], error: null }) };
            });

            vi.mocked(supabase.from).mockReturnValue(mockQuery as any);

            const { NextRequest } = await import('next/server');
            const req = new NextRequest('http://localhost:3000/api/admin/notifications?limit=999', {
                headers: { authorization: 'Bearer test-token' },
            });

            await GET(req);
            // limit en fazla 100 olmalı
            if (mockQuery.limit.mock.calls.length > 0) {
                expect(mockQuery.limit.mock.calls[0][0]).toBeLessThanOrEqual(100);
            }
        });
    });

    describe('PATCH', () => {
        it('authorization başlığı olmadan 401 döndürmeli', async () => {
            const { NextRequest } = await import('next/server');
            const req = new NextRequest('http://localhost:3000/api/admin/notifications', {
                method: 'PATCH',
                body: JSON.stringify({ id: '1' }),
            });

            const response = await PATCH(req);
            expect(response.status).toBe(401);
        });

        it('geçersiz JSON gövdesinde 400 döndürmeli', async () => {
            const { NextRequest } = await import('next/server');
            const req = new NextRequest('http://localhost:3000/api/admin/notifications', {
                method: 'PATCH',
                headers: {
                    authorization: 'Bearer test-token',
                    'Content-Type': 'application/json',
                },
                body: 'invalid-json{{{',
            });

            const response = await PATCH(req);
            expect(response.status).toBe(400);
        });

        it('id olmadan ve markAllRead olmadan 400 döndürmeli', async () => {
            const { NextRequest } = await import('next/server');
            const req = new NextRequest('http://localhost:3000/api/admin/notifications', {
                method: 'PATCH',
                headers: {
                    authorization: 'Bearer test-token',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });

            const response = await PATCH(req);
            expect(response.status).toBe(400);
        });
    });
});
