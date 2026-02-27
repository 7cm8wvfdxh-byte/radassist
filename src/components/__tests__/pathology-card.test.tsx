import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PathologyCard } from '../pathology-card';

vi.mock('next/image', () => ({
    default: (props: Record<string, unknown>) => <img {...props} />,
}));

vi.mock('@/context/language-context', () => ({
    useLanguage: () => ({
        language: 'tr',
        t: (key: string) => {
            const translations: Record<string, string> = {
                'pathology.keyPoints': 'Anahtar Noktalar',
                'pathology.findings': 'Bulgular',
                'pathology.differential': 'Ayırıcı Tanı',
                'pathology.gallery': 'Galeri',
                'pathology.addFavorite': 'Favorilere Ekle',
                'pathology.removeFavorite': 'Favorilerden Çıkar',
                'quick_view': 'Özet',
                'detailed_view': 'Detay',
                'mechanism': 'Mekanizma',
            };
            return translations[key] || key;
        },
    }),
}));

vi.mock('@/lib/search-utils', () => ({
    expandQueryTokens: (query: string) => query ? query.toLowerCase().split(/\s+/) : [],
}));

const mockPathology = {
    id: 'test-pathology',
    name: 'Test Patoloji',
    nameEn: 'Test Pathology',
    category: 'Test Kategori',
    categoryEn: 'Test Category',
    organ: 'Beyin',
    findings: {
        ct: { non_contrast: 'BT bulgusu' },
        mri: { t1: 'T1 bulgusu', t2: 'T2 bulgusu' },
    },
    findingsEn: {
        ct: { non_contrast: 'CT finding' },
        mri: { t1: 'T1 finding', t2: 'T2 finding' },
    },
    keyPoints: ['Nokta 1', 'Nokta 2'],
    keyPointsEn: ['Point 1', 'Point 2'],
    differentialDiagnosis: ['Tanı 1', 'Tanı 2'],
    differentialDiagnosisEn: ['Diag 1', 'Diag 2'],
    gallery: [{ url: '/test.jpg', caption: 'Test görüntü', modality: 'MRI' as const }],
    clinicalPearl: 'Klinik ipucu',
    goldStandard: 'Altın standart',
    etiology: 'Nedeni',
    mechanism: 'Mekanizma açıklaması',
};

describe('PathologyCard', () => {
    const mockToggleFavorite = vi.fn();

    const defaultProps = {
        data: mockPathology as any,
        isFavorite: false,
        onToggleFavorite: mockToggleFavorite,
        highlightQuery: '',
    };

    it('should render pathology name', () => {
        render(<PathologyCard {...defaultProps} />);
        expect(screen.getByText('Test Patoloji')).toBeInTheDocument();
    });

    it('should render category', () => {
        render(<PathologyCard {...defaultProps} />);
        expect(screen.getByText('Test Kategori')).toBeInTheDocument();
    });

    it('should show key points on summary tab', () => {
        render(<PathologyCard {...defaultProps} />);
        // Key points appear on both front (summary) and back (key points section) faces
        expect(screen.getAllByText('Nokta 1').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Nokta 2').length).toBeGreaterThanOrEqual(1);
    });

    it('should have tab navigation with role="tablist"', () => {
        render(<PathologyCard {...defaultProps} />);
        const tablist = screen.getByRole('tablist');
        expect(tablist).toBeInTheDocument();
        const tabs = screen.getAllByRole('tab');
        expect(tabs.length).toBeGreaterThan(0);
    });

    it('should call onToggleFavorite when favorite button is clicked', () => {
        render(<PathologyCard {...defaultProps} />);
        const favoriteButton = screen.getByLabelText('Favorilere ekle');
        fireEvent.click(favoriteButton);
        expect(mockToggleFavorite).toHaveBeenCalled();
    });

    it('should show remove label when already favorited', () => {
        render(<PathologyCard {...defaultProps} isFavorite={true} />);
        const favoriteButton = screen.getByLabelText('Favorilerden kaldır');
        expect(favoriteButton).toBeInTheDocument();
    });

    it('should have aria-pressed attribute on favorite button', () => {
        render(<PathologyCard {...defaultProps} isFavorite={true} />);
        const favoriteButton = screen.getByLabelText('Favorilerden kaldır');
        expect(favoriteButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('should switch tab content when modality tab is clicked', () => {
        render(<PathologyCard {...defaultProps} />);
        const tabs = screen.getAllByRole('tab');
        // Find the CT tab
        const ctTab = tabs.find(tab => tab.textContent?.includes('BT'));
        if (ctTab) {
            fireEvent.click(ctTab);
            expect(ctTab).toHaveAttribute('aria-selected', 'true');
        }
    });

    it('should render gallery image', () => {
        render(<PathologyCard {...defaultProps} />);
        const image = screen.getByAltText('Test Patoloji - MRI');
        expect(image).toBeInTheDocument();
    });

    it('should show differential diagnosis on back face after flip', () => {
        render(<PathologyCard {...defaultProps} />);
        // Find and click the flip button (Detay text)
        const flipButton = screen.getByText('Detay');
        fireEvent.click(flipButton);
        // Now the back face should be visible with differential diagnosis
        expect(screen.getByText('Tanı 1')).toBeInTheDocument();
        expect(screen.getByText('Tanı 2')).toBeInTheDocument();
    });
});
