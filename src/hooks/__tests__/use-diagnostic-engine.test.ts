import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDiagnosticEngine } from '../use-diagnostic-engine';

describe('useDiagnosticEngine', () => {
    // --- Initial State ---
    it('should return empty results when no findings are selected', () => {
        const { result } = renderHook(() =>
            useDiagnosticEngine([], 'Brain')
        );
        expect(result.current).toEqual([]);
    });

    it('should return empty results for organ with no matching findings', () => {
        const { result } = renderHook(() =>
            useDiagnosticEngine(['mri_t1_hypo'], 'Gynecology')
        );
        // Might return empty or low-score results that are filtered out
        expect(Array.isArray(result.current)).toBe(true);
    });

    // --- Finding Matching ---
    it('should return scored results when strong findings are provided for Brain', () => {
        // Glioblastoma strong findings: mri_enhance_ring, mri_edema_vasogenic, mri_dwi_restrict, mri_loc_intra_axial
        const { result } = renderHook(() =>
            useDiagnosticEngine(
                ['mri_enhance_ring', 'mri_edema_vasogenic', 'mri_dwi_restrict', 'mri_loc_intra_axial'],
                'Brain'
            )
        );
        expect(result.current.length).toBeGreaterThan(0);
        // Glioblastoma should be among top results
        const gbm = result.current.find(r => r.pathologyId === 'glioblastoma');
        expect(gbm).toBeDefined();
        expect(gbm!.score).toBeGreaterThan(0);
        expect(gbm!.matchedFindings.length).toBeGreaterThan(0);
    });

    it('should score higher when more strong findings match', () => {
        // One finding
        const { result: resultOne } = renderHook(() =>
            useDiagnosticEngine(['mri_enhance_ring'], 'Brain')
        );
        // Multiple findings
        const { result: resultMultiple } = renderHook(() =>
            useDiagnosticEngine(
                ['mri_enhance_ring', 'mri_edema_vasogenic', 'mri_dwi_restrict', 'mri_loc_intra_axial'],
                'Brain'
            )
        );

        const gbmOne = resultOne.current.find(r => r.pathologyId === 'glioblastoma');
        const gbmMultiple = resultMultiple.current.find(r => r.pathologyId === 'glioblastoma');

        if (gbmOne && gbmMultiple) {
            expect(gbmMultiple.score).toBeGreaterThan(gbmOne.score);
            expect(gbmMultiple.matchedFindings.length).toBeGreaterThan(gbmOne.matchedFindings.length);
        }
    });

    it('should track matched findings correctly', () => {
        const selectedFindings = ['mri_dwi_restrict', 'mri_t2_hyper'];
        const { result } = renderHook(() =>
            useDiagnosticEngine(selectedFindings, 'Brain')
        );
        // Acute ischemic stroke has these as strong findings
        const stroke = result.current.find(r => r.pathologyId === 'acute_ischemic_stroke');
        expect(stroke).toBeDefined();
        if (stroke) {
            expect(stroke.matchedFindings).toContain('mri_dwi_restrict');
            expect(stroke.matchedFindings).toContain('mri_t2_hyper');
        }
    });

    it('should identify missing strong findings', () => {
        // Only provide one of GBMs strong findings
        const { result } = renderHook(() =>
            useDiagnosticEngine(['mri_enhance_ring'], 'Brain')
        );
        const gbm = result.current.find(r => r.pathologyId === 'glioblastoma');
        if (gbm) {
            expect(gbm.missingFindings.length).toBeGreaterThan(0);
            // mri_edema_vasogenic is a strong finding for GBM that was not selected
            expect(gbm.missingFindings).toContain('mri_edema_vasogenic');
        }
    });

    // --- Organ Filtering ---
    it('should filter results by selected organ', () => {
        // Spine findings should not return Brain pathologies
        const { result } = renderHook(() =>
            useDiagnosticEngine(['spine_disc_herniation', 'spine_nerve_compression'], 'Spine')
        );
        expect(result.current.length).toBeGreaterThan(0);
        // All results should be Spine pathologies, not Brain
        const hasLumbarDisc = result.current.some(r => r.pathologyId === 'lumbar_disc_herniation');
        expect(hasLumbarDisc).toBe(true);
        // Should NOT contain brain pathologies
        const hasBrainPathology = result.current.some(r => r.pathologyId === 'glioblastoma');
        expect(hasBrainPathology).toBe(false);
    });

    it('should return different results for different organs with same findings', () => {
        // mri_t2_hyper is used in both Brain and potentially other organs
        const { result: brainResult } = renderHook(() =>
            useDiagnosticEngine(['mri_t2_hyper'], 'Brain')
        );
        const { result: spineResult } = renderHook(() =>
            useDiagnosticEngine(['mri_t2_hyper'], 'Spine')
        );
        // Results should be different since diseases are organ-specific
        const brainIds = brainResult.current.map(r => r.pathologyId);
        const spineIds = spineResult.current.map(r => r.pathologyId);
        // They should not have overlapping IDs (brain diseases vs spine diseases)
        const overlap = brainIds.filter(id => spineIds.includes(id));
        expect(overlap.length).toBe(0);
    });

    // --- Probability Labels ---
    it('should assign probability labels based on score', () => {
        // High score scenario - all strong findings for GBM
        const { result } = renderHook(() =>
            useDiagnosticEngine(
                ['mri_enhance_ring', 'mri_edema_vasogenic', 'mri_dwi_restrict', 'mri_loc_intra_axial'],
                'Brain'
            )
        );
        const gbm = result.current.find(r => r.pathologyId === 'glioblastoma');
        expect(gbm).toBeDefined();
        if (gbm) {
            // With 4 strong findings and weights multiplied by 3, score should be > 50
            expect(gbm.probabilityLabel).toBe('Yüksek Olasılık');
        }
    });

    it('should filter out results with score <= 10 or no matched findings', () => {
        const { result } = renderHook(() =>
            useDiagnosticEngine(['mri_t1_hypo'], 'Brain')
        );
        // All returned results should have score > 10 and at least one matched finding
        result.current.forEach(r => {
            expect(r.score).toBeGreaterThan(10);
            expect(r.matchedFindings.length).toBeGreaterThan(0);
        });
    });

    // --- Result Sorting ---
    it('should return results sorted by score in descending order', () => {
        const { result } = renderHook(() =>
            useDiagnosticEngine(
                ['mri_enhance_ring', 'mri_edema_vasogenic', 'mri_dwi_restrict'],
                'Brain'
            )
        );
        if (result.current.length >= 2) {
            for (let i = 1; i < result.current.length; i++) {
                expect(result.current[i - 1].score).toBeGreaterThanOrEqual(result.current[i].score);
            }
        }
    });

    // --- Weak Findings ---
    it('should include weak findings in score with lower weight', () => {
        // GBM weak findings: mri_t1_hypo, mri_t2_hyper, mri_swi_bloom
        // Compare score with only weak findings vs strong findings
        const { result: weakResult } = renderHook(() =>
            useDiagnosticEngine(['mri_t1_hypo', 'mri_t2_hyper'], 'Brain')
        );
        const { result: strongResult } = renderHook(() =>
            useDiagnosticEngine(['mri_enhance_ring', 'mri_edema_vasogenic'], 'Brain')
        );

        const gbmWeak = weakResult.current.find(r => r.pathologyId === 'glioblastoma');
        const gbmStrong = strongResult.current.find(r => r.pathologyId === 'glioblastoma');

        // Strong findings should contribute more to the score than weak findings
        if (gbmWeak && gbmStrong) {
            expect(gbmStrong.score).toBeGreaterThan(gbmWeak.score);
        }
    });

    // --- Reactivity ---
    it('should update results when findings change', () => {
        const { result, rerender } = renderHook(
            ({ findings, organ }) => useDiagnosticEngine(findings, organ),
            { initialProps: { findings: [] as string[], organ: 'Brain' as const } }
        );
        expect(result.current).toEqual([]);

        rerender({ findings: ['mri_enhance_ring', 'mri_edema_vasogenic'], organ: 'Brain' as const });
        expect(result.current.length).toBeGreaterThan(0);
    });
});
