import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { RegisterForm } from '../register-form';

const mockRegister = vi.fn();
const mockRouter = { push: vi.fn(), replace: vi.fn(), back: vi.fn(), prefetch: vi.fn() };

vi.mock('@/context/auth-context', () => ({
    useAuth: () => ({
        register: mockRegister,
        user: null,
        isLoading: false,
        login: vi.fn(),
        logout: vi.fn(),
        session: null,
    }),
}));

vi.mock('@/context/language-context', () => ({
    useLanguage: () => ({
        language: 'tr',
        t: (key: string) => {
            const translations: Record<string, string> = {
                'auth.name': 'Ad Soyad',
                'auth.email': 'E-posta',
                'auth.password': 'Şifre',
                'auth.specialty': 'Uzmanlık Alanı',
                'auth.register': 'Kayıt Ol',
                'auth.login': 'Giriş Yap',
                'auth.hasAccount': 'Zaten hesabınız var mı?',
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

describe('RegisterForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('kayıt formunu render etmeli', () => {
        render(<RegisterForm />);

        expect(screen.getByPlaceholderText('Ad Soyad')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('E-posta')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Şifre')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /kayıt ol/i })).toBeInTheDocument();
    });

    it('tüm alanlar doldurulabilmeli', async () => {
        const user = userEvent.setup();
        render(<RegisterForm />);

        await user.type(screen.getByPlaceholderText('Ad Soyad'), 'Dr. Test');
        await user.type(screen.getByPlaceholderText('E-posta'), 'dr.test@hospital.com');
        await user.type(screen.getByPlaceholderText('Şifre'), 'secure123');

        expect(screen.getByPlaceholderText('Ad Soyad')).toHaveValue('Dr. Test');
        expect(screen.getByPlaceholderText('E-posta')).toHaveValue('dr.test@hospital.com');
        expect(screen.getByPlaceholderText('Şifre')).toHaveValue('secure123');
    });

    it('başarılı kayıtta anasayfaya yönlendirmeli', async () => {
        mockRegister.mockResolvedValue({ success: true });
        const user = userEvent.setup();
        render(<RegisterForm />);

        await user.type(screen.getByPlaceholderText('Ad Soyad'), 'Dr. Test');
        await user.type(screen.getByPlaceholderText('E-posta'), 'test@test.com');
        await user.type(screen.getByPlaceholderText('Şifre'), 'password123');
        await user.click(screen.getByRole('button', { name: /kayıt ol/i }));

        await waitFor(() => {
            expect(mockRegister).toHaveBeenCalledWith('test@test.com', 'password123', 'Dr. Test', 'Radyoloji Asistanı');
            expect(mockRouter.push).toHaveBeenCalledWith('/');
        });
    });

    it('başarısız kayıtta hata mesajı göstermeli', async () => {
        mockRegister.mockResolvedValue({ success: false, error: 'Bu e-posta adresi zaten kayıtlı.' });
        const user = userEvent.setup();
        render(<RegisterForm />);

        await user.type(screen.getByPlaceholderText('Ad Soyad'), 'Dr. Test');
        await user.type(screen.getByPlaceholderText('E-posta'), 'existing@test.com');
        await user.type(screen.getByPlaceholderText('Şifre'), 'password123');
        await user.click(screen.getByRole('button', { name: /kayıt ol/i }));

        await waitFor(() => {
            expect(screen.getByText('Bu e-posta adresi zaten kayıtlı.')).toBeInTheDocument();
        });
    });

    it('uzmanlık alanı seçimi mevcut olmalı', () => {
        render(<RegisterForm />);
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
    });

    it('giriş sayfası linkini içermeli', () => {
        render(<RegisterForm />);
        const loginLink = screen.getByText('Giriş Yap');
        expect(loginLink).toBeInTheDocument();
        expect(loginLink.closest('a')).toHaveAttribute('href', '/login');
    });
});
