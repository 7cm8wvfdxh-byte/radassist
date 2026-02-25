import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { SearchBar } from '../search-bar';

vi.mock('@/context/language-context', () => ({
    useLanguage: () => ({
        language: 'tr',
        t: (key: string) => {
            const translations: Record<string, string> = {
                'search.placeholder': 'Patoloji, bulgu veya sekans ara...',
                'search.clear': 'Temizle',
                'search.resultsFound': 'sonuç bulundu',
                'search.noResults': 'Sonuç bulunamadı',
                'search.didYouMean': 'Bunu mu demek istediniz?',
                'search.recentSearches': 'Son Aramalar',
                'search.clearAll': 'Temizle',
                'search.navigate': 'gezin',
                'search.select': 'seç',
                'search.close': 'kapat',
            };
            return translations[key] || key;
        },
        setLanguage: vi.fn(),
        toggleLanguage: vi.fn(),
    }),
}));

describe('SearchBar', () => {
    const mockOnChange = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        window.localStorage.clear();
    });

    it('arama çubuğunu render etmeli', () => {
        render(<SearchBar value="" onChange={mockOnChange} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('placeholder göstermeli', () => {
        render(<SearchBar value="" onChange={mockOnChange} placeholder="Test ara..." />);
        expect(screen.getByPlaceholderText('Test ara...')).toBeInTheDocument();
    });

    it('değer girildiğinde onChange çağrılmalı', async () => {
        const user = userEvent.setup();
        render(<SearchBar value="" onChange={mockOnChange} />);

        const input = screen.getByRole('combobox');
        await user.type(input, 'glioblastom');

        expect(mockOnChange).toHaveBeenCalled();
    });

    it('temizle butonu değer varken görünmeli', () => {
        render(<SearchBar value="test" onChange={mockOnChange} />);
        expect(screen.getByLabelText('Temizle')).toBeInTheDocument();
    });

    it('temizle butonuna tıklayınca boş string göndermeli', async () => {
        const user = userEvent.setup();
        render(<SearchBar value="test" onChange={mockOnChange} />);

        await user.click(screen.getByLabelText('Temizle'));
        expect(mockOnChange).toHaveBeenCalledWith('');
    });

    it('sonuç sayısını göstermeli', () => {
        render(<SearchBar value="test" onChange={mockOnChange} resultCount={5} />);
        expect(screen.getByText('5 sonuç bulundu')).toBeInTheDocument();
    });

    it('sonuç bulunamadığında mesaj göstermeli', () => {
        render(<SearchBar value="test" onChange={mockOnChange} resultCount={0} />);
        expect(screen.getByText('Sonuç bulunamadı')).toBeInTheDocument();
    });

    it('"bunu mu demek istediniz" önerilerini göstermeli', () => {
        render(
            <SearchBar
                value="test"
                onChange={mockOnChange}
                resultCount={0}
                didYouMean={['teset', 'testt']}
            />
        );
        expect(screen.getByText('Bunu mu demek istediniz?')).toBeInTheDocument();
        expect(screen.getByText(/teset/)).toBeInTheDocument();
    });

    it('ARIA etiketlerini içermeli', () => {
        render(<SearchBar value="" onChange={mockOnChange} />);
        const input = screen.getByRole('combobox');
        expect(input).toHaveAttribute('aria-expanded');
        expect(input).toHaveAttribute('aria-haspopup', 'listbox');
        expect(input).toHaveAttribute('aria-autocomplete', 'list');
    });
});
