import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AIAssistant } from '../ai-assistant';

// Mock DOMPurify
vi.mock('dompurify', () => ({
    default: {
        sanitize: (html: string) => html,
    },
}));

// Mock language context
vi.mock('@/context/language-context', () => ({
    useLanguage: () => ({
        language: 'tr',
        t: (key: string) => {
            const translations: Record<string, string> = {
                'ai.title': 'Patoloji Arama',
                'ai.subtitle': '9 organ veritabanında arama yapın',
                'ai.placeholder': 'Hastalık adı veya bulgu yazın...',
                'ai.quickPrompts': 'Hızlı Aramalar',
                'ai.thinking': 'Aranıyor...',
                'ai.welcomeTitle': 'Patoloji Arama Asistanı',
                'ai.welcomeText': '9 organ sistemindeki patoloji veritabanından arama yapabilirsiniz.',
                'ai.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',
                'ai.clearChat': 'Sohbeti temizle',
                'ai.disclaimer': 'Yanıtlar veritabanı aramasına dayalıdır.',
            };
            return translations[key] || key;
        },
    }),
}));

describe('AIAssistant', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        global.fetch = vi.fn();
        // Mock scrollIntoView which is not available in jsdom
        Element.prototype.scrollIntoView = vi.fn();
    });

    it('should render welcome screen with title', () => {
        render(<AIAssistant />);
        expect(screen.getByText('Patoloji Arama')).toBeInTheDocument();
        expect(screen.getByText('9 organ veritabanında arama yapın')).toBeInTheDocument();
    });

    it('should render quick prompts', () => {
        render(<AIAssistant />);
        expect(screen.getByText('Glioblastom')).toBeInTheDocument();
        expect(screen.getByText('Multiple Skleroz')).toBeInTheDocument();
        expect(screen.getByText('Disk hernisi')).toBeInTheDocument();
        expect(screen.getByText('Pulmoner emboli')).toBeInTheDocument();
    });

    it('should have accessible input with placeholder', () => {
        render(<AIAssistant />);
        const input = screen.getByPlaceholderText('Hastalık adı veya bulgu yazın...');
        expect(input).toBeInTheDocument();
        expect(input).toBeEnabled();
    });

    it('should have aria-live region for messages', () => {
        render(<AIAssistant />);
        const messageArea = screen.getByRole('log');
        expect(messageArea).toBeInTheDocument();
        expect(messageArea).toHaveAttribute('aria-live', 'polite');
    });

    it('should update input value on type', async () => {
        render(<AIAssistant />);
        const input = screen.getByPlaceholderText('Hastalık adı veya bulgu yazın...');
        await userEvent.type(input, 'test query');
        expect(input).toHaveValue('test query');
    });

    it('should clear input after form submit', async () => {
        const mockResponse = {
            ok: true,
            body: {
                getReader: () => ({
                    read: vi.fn()
                        .mockResolvedValueOnce({ done: false, value: new TextEncoder().encode('Test response') })
                        .mockResolvedValueOnce({ done: true, value: undefined }),
                }),
            },
        };
        (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(mockResponse);

        render(<AIAssistant />);
        const input = screen.getByPlaceholderText('Hastalık adı veya bulgu yazın...');
        await userEvent.type(input, 'Glioblastom');

        const form = document.getElementById('chat-form') as HTMLFormElement;
        fireEvent.submit(form);

        await waitFor(() => {
            expect(input).toHaveValue('');
        });
    });

    it('should show error message on API failure', async () => {
        (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Network error'));

        render(<AIAssistant />);
        const input = screen.getByPlaceholderText('Hastalık adı veya bulgu yazın...');
        await userEvent.type(input, 'test');

        const form = document.getElementById('chat-form') as HTMLFormElement;
        fireEvent.submit(form);

        await waitFor(() => {
            expect(screen.getByText(/Bir hata oluştu/)).toBeInTheDocument();
        });
    });

    it('should not show clear button when no messages', () => {
        render(<AIAssistant />);
        expect(screen.queryByLabelText('Sohbeti temizle')).not.toBeInTheDocument();
    });

    it('should disable send button when input is empty', () => {
        render(<AIAssistant />);
        const sendButton = screen.getByLabelText('Send message');
        expect(sendButton).toBeDisabled();
    });
});
