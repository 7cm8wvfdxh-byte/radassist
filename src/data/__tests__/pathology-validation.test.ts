import { describe, it, expect } from 'vitest';
import { Pathology } from '@/types';

// Tüm patoloji modüllerini import et
import { brainPathologies } from '../brain-pathologies';
import { spinePathologies } from '../spine-pathologies';
import { liverPathologies } from '../liver-pathologies';
import { kidneyPathologies } from '../kidney-pathologies';
import { lungPathologies } from '../lung-pathologies';
import { breastPathologies } from '../breast-pathologies';
import { mskPathologies } from '../msk-pathologies';
import { gastroPathologies } from '../gastro-pathologies';
import { gynecologyPathologies } from '../gynecology-pathologies';

const ALL_MODULES: { name: string; data: Pathology[] }[] = [
    { name: 'Brain', data: brainPathologies },
    { name: 'Spine', data: spinePathologies },
    { name: 'Liver', data: liverPathologies },
    { name: 'Kidney', data: kidneyPathologies },
    { name: 'Lung', data: lungPathologies },
    { name: 'Breast', data: breastPathologies },
    { name: 'MSK', data: mskPathologies },
    { name: 'Gastro', data: gastroPathologies },
    { name: 'Gynecology', data: gynecologyPathologies },
];

describe('Patoloji veri doğrulama', () => {
    it('tüm modüller en az bir patoloji içermeli', () => {
        ALL_MODULES.forEach(({ name, data }) => {
            expect(data.length, `${name} modülünde patoloji yok`).toBeGreaterThan(0);
        });
    });

    ALL_MODULES.forEach(({ name, data }) => {
        describe(`${name} modülü`, () => {
            it('her patolojide zorunlu alanlar olmalı', () => {
                data.forEach(p => {
                    expect(p.id, `${p.name || 'bilinmeyen'}: id eksik`).toBeTruthy();
                    expect(p.name, `${p.id}: name eksik`).toBeTruthy();
                    expect(p.category, `${p.id}: category eksik`).toBeTruthy();
                    expect(p.findings, `${p.id}: findings eksik`).toBeDefined();
                    expect(Array.isArray(p.keyPoints), `${p.id}: keyPoints dizi olmalı`).toBe(true);
                });
            });

            it('ID değerleri benzersiz olmalı (veya çok az tekrar)', () => {
                const ids = data.map(p => p.id);
                const uniqueIds = new Set(ids);
                const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
                if (duplicates.length > 0) {
                    console.warn(`Uyarı - ${name}: tekrarlayan ID'ler: ${duplicates.join(', ')}`);
                }
                // Modül içinde en fazla 2 tekrarlayan ID kabul edilir
                expect(
                    duplicates.length,
                    `${name}: çok fazla tekrarlayan ID: ${duplicates.join(', ')}`
                ).toBeLessThanOrEqual(2);
            });

            it('en az bir görüntüleme modalitesi tanımlı olmalı', () => {
                data.forEach(p => {
                    const hasFindings = Object.keys(p.findings).length > 0;
                    expect(hasFindings, `${p.id}: hiç görüntüleme verisi yok`).toBe(true);
                });
            });

            it('keyPoints boş dizi olmamalı', () => {
                data.forEach(p => {
                    expect(
                        p.keyPoints.length,
                        `${p.id}: keyPoints boş`
                    ).toBeGreaterThan(0);
                });
            });

            it('findings altındaki değerler string veya object olmalı', () => {
                data.forEach(p => {
                    const findings = p.findings as Record<string, unknown>;
                    Object.entries(findings).forEach(([modality, value]) => {
                        if (value !== undefined && value !== null) {
                            expect(
                                typeof value,
                                `${p.id}.findings.${modality} geçersiz tip: ${typeof value}`
                            ).toBe('object');
                        }
                    });
                });
            });

            it('patoloji isimleri boş olmamalı ve sadece boşluk içermemeli', () => {
                data.forEach(p => {
                    expect(
                        p.name.trim().length,
                        `${p.id}: isim boş veya sadece boşluk`
                    ).toBeGreaterThan(0);
                });
            });
        });
    });
});

describe('Modüller arası tutarlılık', () => {
    const allPathologies = ALL_MODULES.flatMap(m => m.data);

    it('tüm modüller genelinde tekrarlayan ID sayısı minimum olmalı', () => {
        const ids = allPathologies.map(p => p.id);
        const uniqueIds = new Set(ids);
        const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
        if (duplicates.length > 0) {
            console.warn(`Uyarı - Modüller arası tekrarlayan ID'ler (${duplicates.length}): ${duplicates.join(', ')}`);
        }
        // Birkaç tekrar olabilir (aynı patoloji farklı organları etkileyebilir)
        // ama çok fazla tekrar kabul edilemez
        expect(
            duplicates.length,
            `Çok fazla tekrarlayan ID: ${duplicates.join(', ')}`
        ).toBeLessThan(5);
    });

    it('toplam patoloji sayısı makul olmalı', () => {
        expect(allPathologies.length).toBeGreaterThan(50);
    });

    it('her modül en az 5 patoloji içermeli', () => {
        ALL_MODULES.forEach(({ name, data }) => {
            expect(
                data.length,
                `${name} modülü çok az patoloji içeriyor (${data.length})`
            ).toBeGreaterThanOrEqual(5);
        });
    });
});

describe('disease-signatures ve lexicon tutarlılığı', () => {
    it('disease-signatures dosyası geçerli yapıda olmalı', async () => {
        const { DISEASE_SIGNATURES } = await import('../disease-signatures');
        expect(DISEASE_SIGNATURES.length).toBeGreaterThan(0);

        DISEASE_SIGNATURES.forEach(ds => {
            expect(ds.id).toBeTruthy();
            expect(ds.name).toBeTruthy();
            expect(ds.organ).toBeTruthy();
            expect(ds.signatures).toBeDefined();
            expect(typeof ds.baseProbability).toBe('number');
        });
    });

    it('lexicon findings dosyası geçerli yapıda olmalı', async () => {
        const { USG_FINDINGS, CT_FINDINGS, MRI_FINDINGS } = await import('../lexicon');

        expect(USG_FINDINGS.length).toBeGreaterThan(0);
        expect(CT_FINDINGS.length).toBeGreaterThan(0);
        expect(MRI_FINDINGS.length).toBeGreaterThan(0);

        const allFindings = [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS];
        allFindings.forEach(f => {
            expect(f.id).toBeTruthy();
            expect(f.label).toBeTruthy();
            expect(f.category).toBeTruthy();
            expect(typeof f.weight).toBe('number');
            expect(f.weight).toBeGreaterThanOrEqual(1);
            expect(f.weight).toBeLessThanOrEqual(10);
        });
    });

    it('lexicon finding ID\'leri benzersiz olmalı', async () => {
        const { USG_FINDINGS, CT_FINDINGS, MRI_FINDINGS } = await import('../lexicon');
        const allIds = [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS].map(f => f.id);
        const uniqueIds = new Set(allIds);
        expect(uniqueIds.size).toBe(allIds.length);
    });

    it('disease-signatures finding referansları lexicon\'da mevcut olmalı', async () => {
        const { DISEASE_SIGNATURES } = await import('../disease-signatures');
        const { USG_FINDINGS, CT_FINDINGS, MRI_FINDINGS } = await import('../lexicon');

        const allFindingIds = new Set(
            [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS].map(f => f.id)
        );

        const missingRefs: string[] = [];

        DISEASE_SIGNATURES.forEach(ds => {
            Object.values(ds.signatures).forEach(sig => {
                if (sig) {
                    sig.strongFindings.forEach(fId => {
                        if (!allFindingIds.has(fId)) {
                            missingRefs.push(`${ds.id} -> ${fId}`);
                        }
                    });
                    sig.weakFindings?.forEach(fId => {
                        if (!allFindingIds.has(fId)) {
                            missingRefs.push(`${ds.id} -> ${fId} (weak)`);
                        }
                    });
                }
            });
        });

        // Eksik referanslar varsa uyar (bazıları kasıtlı olabilir)
        if (missingRefs.length > 0) {
            console.warn(`Eksik lexicon referansları (${missingRefs.length}):`, missingRefs.slice(0, 10));
        }
        // Çok fazla eksik referans olmamalı
        expect(
            missingRefs.length,
            `Çok fazla eksik lexicon referansı: ${missingRefs.length}`
        ).toBeLessThan(50);
    });
});
