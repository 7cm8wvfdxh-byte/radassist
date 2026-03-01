import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { LoginForm } from '../login-form';

// Mock useAuth
const mockLogin = vi.fn();
const mockRouter = { push: vi.fn(), replace: vi.fn(), back: vi.fn(), prefetch: vi.fn() };

vi.mock('@/context/auth-context', () => ({
    useAuth: () => ({
        login: mockLogin,
        user: null,
        isLoading: false,
        logout: vi.fn(),
        register: vi.fn(),
        session: null,
    }),
}));

vi.mock('@/context/language-context', () => ({
    useLanguage: () => ({
        language: 'tr',
        t: (key: string) => {
            const translations: Record<string, string> = {
                'auth.email': 'E-posta',
                'auth.password': 'Şifre',
                'auth.login': 'Giriş Yap',
                'auth.noAccount': 'Hesabınız yok mu?',
                'auth.register': 'Kayıt Ol',
                'auth.forgotPassword': 'Şifremi unuttum',
            };
            return translations[key] || key;
        },
        setLanguage: vi.fn(),
        toggleLanguage: vi.fn(),
    }),
}));

vi.mock('next/navigation', () => ({
    useRouter: () => mockRouter,
}));

describe('LoginForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('giriş formunu render etmeli', () => {
        render(<LoginForm />);

        expect(screen.getByPlaceholderText('E-posta')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Şifre')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /giriş yap/i })).toBeInTheDocument();
    });

    it('email ve şifre alanlarını doldurulabilmeli', async () => {
        const user = userEvent.setup();
        render(<LoginForm />);

        const emailInput = screen.getByPlaceholderText('E-posta');
        const passwordInput = screen.getByPlaceholderText('Şifre');

        await user.type(emailInput, 'test@test.com');
        await user.type(passwordInput, 'password123');

        expect(emailInput).toHaveValue('test@test.com');
        expect(passwordInput).toHaveValue('password123');
    });

    it('başarılı girişte anasayfaya yönlendirmeli', async () => {
        mockLogin.mockResolvedValue({ success: true });
        const user = userEvent.setup();
        render(<LoginForm />);

        await user.type(screen.getByPlaceholderText('E-posta'), 'test@test.com');
        await user.type(screen.getByPlaceholderText('Şifre'), 'password123');
        await user.click(screen.getByRole('button', { name: /giriş yap/i }));

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith('test@test.com', 'password123');
            expect(mockRouter.push).toHaveBeenCalledWith('/');
        });
    });

    it('başarısız girişte hata mesajı göstermeli', async () => {
        mockLogin.mockResolvedValue({ success: false, error: 'E-posta veya şifre hatalı.' });
        const user = userEvent.setup();
        render(<LoginForm />);

        await user.type(screen.getByPlaceholderText('E-posta'), 'test@test.com');
        await user.type(screen.getByPlaceholderText('Şifre'), 'wrong');
        await user.click(screen.getByRole('button', { name: /giriş yap/i }));

        await waitFor(() => {
            expect(screen.getByText('E-posta veya şifre hatalı.')).toBeInTheDocument();
        });
    });

    it('kayıt sayfası linkini içermeli', () => {
        render(<LoginForm />);
        const registerLink = screen.getByText('Kayıt Ol');
        expect(registerLink).toBeInTheDocument();
        expect(registerLink.closest('a')).toHaveAttribute('href', '/register');
    });

    it('şifremi unuttum butonunu içermeli', () => {
        render(<LoginForm />);
        expect(screen.getByText('Şifremi unuttum')).toBeInTheDocument();
    });
});
