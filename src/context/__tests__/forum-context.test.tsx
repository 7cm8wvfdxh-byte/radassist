import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ForumProvider, useForum } from '../forum-context';
import { supabase } from '@/lib/supabase';

function TestConsumer() {
    const { posts, isLoading, error, clearError } = useForum();
    return (
        <div>
            <span data-testid="loading">{isLoading.toString()}</span>
            <span data-testid="posts-count">{posts.length}</span>
            <span data-testid="error">{error || ''}</span>
            <button data-testid="clear-error" onClick={clearError}>Clear</button>
        </div>
    );
}

describe('ForumContext', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('provider dışında kullanımda hata fırlatmalı', () => {
        const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { });
        expect(() => render(<TestConsumer />)).toThrow('useForum must be used within a ForumProvider');
        consoleError.mockRestore();
    });

    it('başlangıçta loading true, sonra false olmalı', async () => {
        const mockQuery = {
            select: vi.fn().mockReturnThis(),
            order: vi.fn().mockResolvedValue({ data: [], error: null }),
        };
        vi.mocked(supabase.from).mockReturnValue(mockQuery as any);

        render(
            <ForumProvider>
                <TestConsumer />
            </ForumProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('loading').textContent).toBe('false');
        });
    });

    it('gönderileri başarıyla yüklemeli', async () => {
        const mockPosts = [
            {
                id: '1',
                title: 'Test Post',
                content: 'İçerik',
                tags: ['radyoloji'],
                likes: 5,
                created_at: '2025-01-01',
                author_id: 'user-1',
                view_count: 10,
                profiles: { name: 'Dr. Test', specialty: 'Radyoloji' },
            },
        ];

        const mockQuery = {
            select: vi.fn().mockReturnThis(),
            order: vi.fn().mockResolvedValue({ data: mockPosts, error: null }),
        };
        vi.mocked(supabase.from).mockReturnValue(mockQuery as any);

        render(
            <ForumProvider>
                <TestConsumer />
            </ForumProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('posts-count').textContent).toBe('1');
        });
    });

    it('hata durumunu yönetmeli', async () => {
        const mockQuery = {
            select: vi.fn().mockReturnThis(),
            order: vi.fn().mockResolvedValue({ data: null, error: { message: 'DB error' } }),
        };
        vi.mocked(supabase.from).mockReturnValue(mockQuery as any);

        render(
            <ForumProvider>
                <TestConsumer />
            </ForumProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('error').textContent).toBeTruthy();
        });
    });

    it('clearError hata mesajını temizlemeli', async () => {
        const mockQuery = {
            select: vi.fn().mockReturnThis(),
            order: vi.fn().mockResolvedValue({ data: null, error: { message: 'DB error' } }),
        };
        vi.mocked(supabase.from).mockReturnValue(mockQuery as any);

        const user = (await import('@testing-library/user-event')).default.setup();

        render(
            <ForumProvider>
                <TestConsumer />
            </ForumProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('error').textContent).toBeTruthy();
        });

        await user.click(screen.getByTestId('clear-error'));

        await waitFor(() => {
            expect(screen.getByTestId('error').textContent).toBe('');
        });
    });
});
