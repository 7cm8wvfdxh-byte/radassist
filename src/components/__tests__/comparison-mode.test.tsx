import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComparisonMode } from '../comparison-mode';

vi.mock('@/context/language-context', () => ({
    useLanguage: () => ({
        language: 'tr',
        t: (key: string) => key,
    }),
}));

vi.mock('@/data/brain-pathologies', () => ({ brainPathologies: [] }));
vi.mock('@/data/spine-pathologies', () => ({ spinePathologies: [] }));
vi.mock('@/data/liver-pathologies', () => ({ liverPathologies: [] }));
vi.mock('@/data/kidney-pathologies', () => ({ kidneyPathologies: [] }));
vi.mock('@/data/lung-pathologies', () => ({ lungPathologies: [] }));
vi.mock('@/data/breast-pathologies', () => ({ breastPathologies: [] }));
vi.mock('@/data/msk-pathologies', () => ({ mskPathologies: [] }));
vi.mock('@/data/gastro-pathologies', () => ({ gastroPathologies: [] }));
vi.mock('@/data/gynecology-pathologies', () => ({ gynecologyPathologies: [] }));

describe('ComparisonMode', () => {
    it('should render comparison mode with selectors', () => {
        render(<ComparisonMode />);
        expect(screen.getByLabelText('Select left pathology')).toBeInTheDocument();
        expect(screen.getByLabelText('Select right pathology')).toBeInTheDocument();
    });

    it('should have swap button with aria-label', () => {
        render(<ComparisonMode />);
        const swapButton = screen.getByLabelText('Swap pathologies');
        expect(swapButton).toBeInTheDocument();
    });

    it('should render common pairs section', () => {
        render(<ComparisonMode />);
        expect(screen.getByText('GBM vs Metastaz')).toBeInTheDocument();
    });

    it('should render all common comparison pairs', () => {
        render(<ComparisonMode />);
        expect(screen.getByText('GBM vs Metastaz')).toBeInTheDocument();
        expect(screen.getByText('MS vs İnme')).toBeInTheDocument();
        expect(screen.getByText('HCC vs Hemanjiyom')).toBeInTheDocument();
        expect(screen.getByText('Meninjiom vs GBM')).toBeInTheDocument();
        expect(screen.getByText('EDH vs SDH')).toBeInTheDocument();
        expect(screen.getByText('RCC vs AML')).toBeInTheDocument();
    });

    it('should show empty state message when no pathologies selected', () => {
        render(<ComparisonMode />);
        expect(screen.getByText('İki patoloji seçerek karşılaştırmaya başlayın')).toBeInTheDocument();
    });

    it('should render heading', () => {
        render(<ComparisonMode />);
        expect(screen.getByText('Patoloji Karşılaştırma')).toBeInTheDocument();
    });

    it('should use flex-wrap layout for responsive quick pairs', () => {
        const { container } = render(<ComparisonMode />);
        // The quick pairs section uses flex-wrap for responsive layout
        const flexWrap = container.querySelector('.flex-wrap');
        expect(flexWrap).toBeInTheDocument();
    });
});
