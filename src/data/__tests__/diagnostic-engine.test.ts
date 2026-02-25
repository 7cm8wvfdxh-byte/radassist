import { describe, it, expect } from 'vitest';
import { DIAGNOSTIC_RULES } from '../diagnostic-engine';

describe('DIAGNOSTIC_RULES veri yapısı', () => {
    it('en az bir kural tanımlı olmalı', () => {
        expect(DIAGNOSTIC_RULES.length).toBeGreaterThan(0);
    });

    it('her kuralda zorunlu alanlar olmalı', () => {
        DIAGNOSTIC_RULES.forEach(rule => {
            expect(rule.pathologyId).toBeTruthy();
            expect(rule.pathologyName).toBeTruthy();
            expect(rule.organ).toBeTruthy();
            expect(rule.modality).toBeTruthy();
            expect(Array.isArray(rule.strongFindings)).toBe(true);
            expect(rule.strongFindings.length).toBeGreaterThan(0);
        });
    });

    it('organ değerleri geçerli olmalı', () => {
        const validOrgans = ['Brain', 'Spine', 'Liver', 'Kidney', 'Lung'];
        DIAGNOSTIC_RULES.forEach(rule => {
            expect(validOrgans).toContain(rule.organ);
        });
    });

    it('modalite değerleri geçerli olmalı', () => {
        const validModalities = ['CT', 'MRI', 'USG', 'X-Ray', 'PET', 'Mammography'];
        DIAGNOSTIC_RULES.forEach(rule => {
            expect(validModalities).toContain(rule.modality);
        });
    });

    it('baseProbability 0-100 arasında olmalı', () => {
        DIAGNOSTIC_RULES.forEach(rule => {
            if (rule.baseProbability !== undefined) {
                expect(rule.baseProbability).toBeGreaterThanOrEqual(0);
                expect(rule.baseProbability).toBeLessThanOrEqual(100);
            }
        });
    });

    it('pathologyId benzersiz olmalı', () => {
        const ids = DIAGNOSTIC_RULES.map(r => r.pathologyId);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
    });

    it('brain patolojileri doğru tanımlanmış olmalı', () => {
        const brainRules = DIAGNOSTIC_RULES.filter(r => r.organ === 'Brain');
        expect(brainRules.length).toBeGreaterThan(0);

        const gbm = brainRules.find(r => r.pathologyId === 'glioblastoma');
        expect(gbm).toBeDefined();
        expect(gbm!.strongFindings).toContain('mri_enhance_ring');
    });

    it('spine patolojileri doğru tanımlanmış olmalı', () => {
        const spineRules = DIAGNOSTIC_RULES.filter(r => r.organ === 'Spine');
        expect(spineRules.length).toBeGreaterThan(0);

        const disc = spineRules.find(r => r.pathologyId === 'lumbar_disc_herniation');
        expect(disc).toBeDefined();
        expect(disc!.strongFindings).toContain('spine_disc_herniation');
    });

    it('liver patolojileri doğru tanımlanmış olmalı', () => {
        const liverRules = DIAGNOSTIC_RULES.filter(r => r.organ === 'Liver');
        expect(liverRules.length).toBeGreaterThan(0);

        const hcc = liverRules.find(r => r.pathologyId === 'hcc');
        expect(hcc).toBeDefined();
        expect(hcc!.strongFindings).toContain('ct_contrast_washout');
    });

    it('weakFindings tanımlı olanlar dizi olmalı', () => {
        DIAGNOSTIC_RULES.forEach(rule => {
            if (rule.weakFindings) {
                expect(Array.isArray(rule.weakFindings)).toBe(true);
            }
        });
    });
});
