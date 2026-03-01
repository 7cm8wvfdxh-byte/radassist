import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { AuthProvider, useAuth } from '../auth-context';
import { supabase } from '@/lib/supabase';

function TestConsumer() {
    const { user, isLoading, login, logout, register } = useAuth();
    return (
        <div>
            <span data-testid="loading">{isLoading.toString()}</span>
            <span data-testid="user">{user ? user.name : 'null'}</span>
            <span data-testid="email">{user ? user.email : ''}</span>
            <span data-testid="admin">{user ? user.is_admin.toString() : ''}</span>
            <button data-testid="login" onClick={() => login('test@test.com', 'password')}>Login</button>
            <button data-testid="logout" onClick={logout}>Logout</button>
            <button data-testid="register" onClick={() => register('test@test.com', 'password', 'Test', 'Radyoloji')}>Register</button>
        </div>
    );
}

describe('AuthContext', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // Default mock: oturum yok
        vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null } } as any);
        vi.mocked(supabase.auth.onAuthStateChange).mockReturnValue({
            data: { subscription: { unsubscribe: vi.fn() } },
        } as any);
    });

    it('başlangıçta kullanıcı null ve loading false olmalı', async () => {
        render(
            <AuthProvider>
                <TestConsumer />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('loading').textContent).toBe('false');
        });
        expect(screen.getByTestId('user').textContent).toBe('null');
    });

    it('provider dışında kullanımda hata fırlatmalı', () => {
        const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { });
        expect(() => render(<TestConsumer />)).toThrow('useAuth must be used within an AuthProvider');
        consoleError.mockRestore();
    });

    it('başarılı giriş sonrası kullanıcı bilgilerini ayarlamalı', async () => {
        const mockUser = {
            id: 'user-1',
            email: 'test@test.com',
            user_metadata: { name: 'Test User', specialty: 'Radyoloji' },
        };

        vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
            data: { user: mockUser, session: {} },
            error: null,
        } as any);

        // Profile query mock
        const mockFrom = vi.fn().mockReturnValue({
            select: vi.fn().mockReturnValue({
                eq: vi.fn().mockReturnValue({
                    maybeSingle: vi.fn().mockResolvedValue({
                        data: { name: 'Test User', specialty: 'Radyoloji', is_admin: false },
                        error: null,
                    }),
                }),
            }),
        });
        vi.mocked(supabase.from).mockImplementation(mockFrom);

        const user = userEvent.setup();
        render(
            <AuthProvider>
                <TestConsumer />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('loading').textContent).toBe('false');
        });

        await user.click(screen.getByTestId('login'));

        await waitFor(() => {
            expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
                email: 'test@test.com',
                password: 'password',
            });
        });
    });

    it('giriş hatası döndürmeli', async () => {
        vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
            data: { user: null, session: null },
            error: { message: 'Invalid login credentials', status: 400 },
        } as any);

        const user = userEvent.setup();
        render(
            <AuthProvider>
                <TestConsumer />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('loading').textContent).toBe('false');
        });

        await user.click(screen.getByTestId('login'));

        await waitFor(() => {
            expect(supabase.auth.signInWithPassword).toHaveBeenCalled();
        });
    });

    it('çıkış yapıldığında kullanıcı null olmalı', async () => {
        vi.mocked(supabase.auth.signOut).mockResolvedValue({ error: null } as any);

        const user = userEvent.setup();
        render(
            <AuthProvider>
                <TestConsumer />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('loading').textContent).toBe('false');
        });

        await user.click(screen.getByTestId('logout'));

        await waitFor(() => {
            expect(supabase.auth.signOut).toHaveBeenCalled();
            expect(screen.getByTestId('user').textContent).toBe('null');
        });
    });

    it('kayıt sırasında signUp çağrılmalı', async () => {
        vi.mocked(supabase.auth.signUp).mockResolvedValue({
            data: {
                user: {
                    id: 'new-user-1',
                    email: 'test@test.com',
                    user_metadata: { name: 'Test', specialty: 'Radyoloji' },
                },
                session: {},
            },
            error: null,
        } as any);

        const mockFrom = vi.fn().mockReturnValue({
            insert: vi.fn().mockReturnValue({
                data: null,
                error: null,
            }),
            select: vi.fn().mockReturnValue({
                eq: vi.fn().mockReturnValue({
                    maybeSingle: vi.fn().mockResolvedValue({
                        data: { name: 'Test', specialty: 'Radyoloji', is_admin: false },
                        error: null,
                    }),
                }),
            }),
        });
        vi.mocked(supabase.from).mockImplementation(mockFrom);

        const user = userEvent.setup();
        render(
            <AuthProvider>
                <TestConsumer />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('loading').textContent).toBe('false');
        });

        await user.click(screen.getByTestId('register'));

        await waitFor(() => {
            expect(supabase.auth.signUp).toHaveBeenCalledWith({
                email: 'test@test.com',
                password: 'password',
                options: {
                    data: { name: 'Test', specialty: 'Radyoloji' },
                },
            });
        });
    });
});
