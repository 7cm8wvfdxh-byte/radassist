import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { LanguageProvider, useLanguage } from '../language-context';

// Test bileşeni
function TestConsumer() {
    const { language, t, toggleLanguage, setLanguage } = useLanguage();
    return (
        <div>
            <span data-testid="language">{language}</span>
            <span data-testid="translation">{t('nav.home')}</span>
            <button data-testid="toggle" onClick={toggleLanguage}>Toggle</button>
            <button data-testid="set-en" onClick={() => setLanguage('en')}>EN</button>
            <button data-testid="set-tr" onClick={() => setLanguage('tr')}>TR</button>
        </div>
    );
}

describe('LanguageContext', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    it('varsayılan dil Türkçe olmalı', () => {
        render(
            <LanguageProvider>
                <TestConsumer />
            </LanguageProvider>
        );
        expect(screen.getByTestId('language').textContent).toBe('tr');
    });

    it('Türkçe çevirileri döndürmeli', () => {
        render(
            <LanguageProvider>
                <TestConsumer />
            </LanguageProvider>
        );
        expect(screen.getByTestId('translation').textContent).toBe('Ana Sayfa');
    });

    it('dil değiştirme çalışmalı', async () => {
        const user = userEvent.setup();
        render(
            <LanguageProvider>
                <TestConsumer />
            </LanguageProvider>
        );

        await user.click(screen.getByTestId('toggle'));
        expect(screen.getByTestId('language').textContent).toBe('en');
        expect(screen.getByTestId('translation').textContent).toBe('Home');
    });

    it('setLanguage ile dil ayarlanabilmeli', async () => {
        const user = userEvent.setup();
        render(
            <LanguageProvider>
                <TestConsumer />
            </LanguageProvider>
        );

        await user.click(screen.getByTestId('set-en'));
        expect(screen.getByTestId('language').textContent).toBe('en');

        await user.click(screen.getByTestId('set-tr'));
        expect(screen.getByTestId('language').textContent).toBe('tr');
    });

    it('bulunamayan anahtar olduğu gibi döndürülmeli', () => {
        function KeyTestConsumer() {
            const { t } = useLanguage();
            return <span data-testid="missing">{t('nonexistent.key')}</span>;
        }

        render(
            <LanguageProvider>
                <KeyTestConsumer />
            </LanguageProvider>
        );
        expect(screen.getByTestId('missing').textContent).toBe('nonexistent.key');
    });

    it('provider dışında kullanımda hata fırlatmalı', () => {
        const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { });
        expect(() => render(<TestConsumer />)).toThrow('useLanguage must be used within a LanguageProvider');
        consoleError.mockRestore();
    });

    it('dil tercihini localStorage\'a kaydetmeli', async () => {
        const user = userEvent.setup();
        render(
            <LanguageProvider>
                <TestConsumer />
            </LanguageProvider>
        );

        await user.click(screen.getByTestId('set-en'));
        expect(window.localStorage.setItem).toHaveBeenCalledWith('radassist-language', 'en');
    });
});
