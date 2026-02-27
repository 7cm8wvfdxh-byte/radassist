import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmergencyPanel } from '../emergency-panel';

// Mock clipboard API
Object.assign(navigator, {
    clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
    },
});

describe('EmergencyPanel', () => {
    it('should render emergency cases', () => {
        render(<EmergencyPanel />);
        expect(screen.getByText('Akut İskemik İnme')).toBeInTheDocument();
    });

    it('should render all emergency case titles', () => {
        render(<EmergencyPanel />);
        expect(screen.getByText('Akut İskemik İnme')).toBeInTheDocument();
        expect(screen.getByText('İntrakraniyal Kanama')).toBeInTheDocument();
        expect(screen.getByText('Pulmoner Emboli (PE)')).toBeInTheDocument();
        expect(screen.getByText('Aort Diseksiyonu')).toBeInTheDocument();
        expect(screen.getByText('Tansiyon Pnömotoraks')).toBeInTheDocument();
        expect(screen.getByText('Kauda Ekuina Sendromu')).toBeInTheDocument();
        expect(screen.getByText('Akut Apandisit (Perfore)')).toBeInTheDocument();
        expect(screen.getByText('Akut Mezenterik İskemi')).toBeInTheDocument();
    });

    it('should have expandable sections with aria-expanded', () => {
        render(<EmergencyPanel />);
        const expandButtons = screen.getAllByRole('button');
        const expandableButtons = expandButtons.filter(btn => btn.hasAttribute('aria-expanded'));
        expect(expandableButtons.length).toBeGreaterThan(0);
    });

    it('should toggle expanded state on click', () => {
        render(<EmergencyPanel />);
        const firstExpandButton = screen.getAllByRole('button').find(btn => btn.hasAttribute('aria-expanded'));
        expect(firstExpandButton).toBeDefined();
        if (firstExpandButton) {
            expect(firstExpandButton.getAttribute('aria-expanded')).toBe('false');
            fireEvent.click(firstExpandButton);
            expect(firstExpandButton.getAttribute('aria-expanded')).toBe('true');
        }
    });

    it('should show case details when expanded', () => {
        render(<EmergencyPanel />);
        // Expand the first case (Akut İskemik İnme)
        const expandableBtn = screen.getAllByRole('button').find(btn => btn.hasAttribute('aria-expanded'));
        if (expandableBtn) fireEvent.click(expandableBtn);

        // Check for red flags section
        expect(screen.getByText(/Kırmızı Bayraklar/)).toBeInTheDocument();
        // Check for imaging protocol
        expect(screen.getByText(/Görüntüleme Protokolü/)).toBeInTheDocument();
        // Check for critical findings
        expect(screen.getByText(/Kritik Bulgular/)).toBeInTheDocument();
    });

    it('should have copy buttons with aria-labels when expanded', () => {
        render(<EmergencyPanel />);
        // Expand first case to show copy buttons
        const expandableBtn = screen.getAllByRole('button').find(btn => btn.hasAttribute('aria-expanded'));
        if (expandableBtn) fireEvent.click(expandableBtn);

        const copyButtons = screen.getAllByLabelText(/kopyala/i);
        expect(copyButtons.length).toBeGreaterThan(0);
    });

    it('should show urgency badges', () => {
        render(<EmergencyPanel />);
        const urgencyBadges = screen.getAllByRole('status');
        expect(urgencyBadges.length).toBeGreaterThan(0);
        // Check that Kritik urgency is shown
        expect(screen.getAllByText('Kritik').length).toBeGreaterThan(0);
    });

    it('should collapse expanded section when clicked again', () => {
        render(<EmergencyPanel />);
        const expandableBtn = screen.getAllByRole('button').find(btn => btn.hasAttribute('aria-expanded'));
        if (expandableBtn) {
            // Expand
            fireEvent.click(expandableBtn);
            expect(expandableBtn.getAttribute('aria-expanded')).toBe('true');
            // Collapse
            fireEvent.click(expandableBtn);
            expect(expandableBtn.getAttribute('aria-expanded')).toBe('false');
        }
    });

    it('should render critical notification banner', () => {
        render(<EmergencyPanel />);
        expect(screen.getByText('Kritik Bulgu Bildirimi Kuralı')).toBeInTheDocument();
    });
});
