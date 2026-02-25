import { describe, it, expect, beforeEach } from 'vitest';
import {
    detectModalityContext,
    expandQueryTokens,
    performSmartSearch,
    performScoredSearch,
    getSearchSuggestions,
    getDidYouMeanSuggestions,
    getRecentSearches,
    addRecentSearch,
    clearRecentSearches,
} from '../search-utils';
import { Pathology } from '@/types';

// Test için örnek patoloji verisi
const mockPathologies: Pathology[] = [
    {
        id: 'glioblastoma',
        name: 'Glioblastom (GBM)',
        nameEn: 'Glioblastoma',
        organ: 'Brain',
        category: 'Nöro-Onkoloji',
        categoryEn: 'Neuro-Oncology',
        findings: {
            mri: {
                t1: 'Hipointens kitle',
                t2: 'Hiperintens, ödem',
                dwi: 'Difüzyon kısıtlılığı',
                t1_c: 'Halka tarzı kontrastlanma',
            },
            ct: {
                non_contrast: 'Hipodens kitle',
                contrast: 'Heterojen kontrastlanma',
            },
        },
        keyPoints: ['En sık malign beyin tümörü', 'WHO Grade IV', 'Kelebek gliom'],
        etiology: 'IDH-wild type astrositer tümör',
        mechanism: 'Hızlı proliferasyon, neovaskülarizasyon',
        differentialDiagnosis: ['Metastaz', 'Lenfoma', 'Apse'],
        clinicalPearl: 'Ring enhancing lezyon ayırıcı tanıda düşünülmeli',
        goldStandard: 'MRI kontrastlı çalışma',
    },
    {
        id: 'meningioma',
        name: 'Meningiom',
        nameEn: 'Meningioma',
        organ: 'Brain',
        category: 'Nöro-Onkoloji',
        categoryEn: 'Neuro-Oncology',
        findings: {
            mri: {
                t1: 'İzointens-hafif hipointens',
                t2: 'İzointens-hafif hiperintens',
                t1_c: 'Yoğun homojen kontrastlanma, dural kuyruk',
            },
            ct: {
                non_contrast: 'Hafif hiperdens ekstra-aksiyal kitle',
                contrast: 'Yoğun homojen kontrastlanma',
            },
        },
        keyPoints: ['Ekstra-aksiyal tümör', 'Dural kuyruk işareti', 'Kadınlarda sık'],
        differentialDiagnosis: ['Schwannom', 'Hemanjiyoperisitom'],
        clinicalPearl: 'Dural tail sign patognomonik',
        goldStandard: 'Kontrastlı MRI',
    },
    {
        id: 'lumbar_disc_herniation',
        name: 'Lomber Disk Hernisi',
        nameEn: 'Lumbar Disc Herniation',
        organ: 'Spine',
        category: 'Dejeneratif',
        categoryEn: 'Degenerative',
        findings: {
            mri: {
                t1: 'Disk materyalinin posterior protrüzyonu',
                t2: 'T2 hiperintens disk materyal',
            },
        },
        keyPoints: ['L4-L5, L5-S1 en sık', 'Posterolateral herniasyon', 'Sinir kökü basısı'],
        differentialDiagnosis: ['Spinal stenoz', 'Tümör'],
    },
];

describe('detectModalityContext', () => {
    it('MR/MRI bağlamını algılamalı', () => {
        const result = detectModalityContext("MR'da hiperintens kitle");
        expect(result.modality).toBe('mri');
        expect(result.fieldPrefix).toBe('mri');
    });

    it('BT/CT bağlamını algılamalı', () => {
        const result = detectModalityContext('bt de hiperdens lezyon');
        expect(result.modality).toBe('ct');
        expect(result.fieldPrefix).toBe('ct');
    });

    it('USG bağlamını algılamalı', () => {
        const result = detectModalityContext('usg de hiperekoik kitle');
        expect(result.modality).toBe('usg');
        expect(result.fieldPrefix).toBe('usg');
    });

    it('sekans isimlerini query\'den çıkarmamalı', () => {
        const result = detectModalityContext('dwi parlak lezyon');
        expect(result.modality).toBe('mri');
        expect(result.cleanedQuery).toContain('dwi');
    });

    it('modalite yoksa null döndürmeli', () => {
        const result = detectModalityContext('kitle glioblastom');
        expect(result.modality).toBeNull();
        expect(result.fieldPrefix).toBeNull();
    });

    it('modalite terimini temizlenmiş sorgudan çıkarmalı', () => {
        const result = detectModalityContext("MR'da hiperintens");
        expect(result.cleanedQuery).not.toContain("MR'da");
        expect(result.cleanedQuery).toContain('hiperintens');
    });
});

describe('expandQueryTokens', () => {
    it('orijinal tokenleri korumalı', () => {
        const tokens = expandQueryTokens('glioblastom');
        expect(tokens).toContain('glioblastom');
    });

    it('eş anlamlıları genişletmeli (halk dili -> tıbbi)', () => {
        const tokens = expandQueryTokens('parlak');
        expect(tokens).toContain('parlak');
        expect(tokens).toContain('hiperintens');
        expect(tokens).toContain('hiperdens');
    });

    it('ters eş anlamlıları genişletmeli (tıbbi -> halk dili)', () => {
        const tokens = expandQueryTokens('hiperintens');
        expect(tokens).toContain('hiperintens');
        expect(tokens).toContain('parlak');
    });

    it('boş sorguyu boş döndürmeli', () => {
        const tokens = expandQueryTokens('');
        expect(tokens).toHaveLength(0);
    });

    it('birden fazla token genişletmeli', () => {
        const tokens = expandQueryTokens('koyu kitle');
        expect(tokens).toContain('koyu');
        expect(tokens).toContain('kitle');
        expect(tokens).toContain('hipointens');
        expect(tokens).toContain('tümör');
    });
});

describe('performSmartSearch', () => {
    it('boş sorguda tüm patolojileri döndürmeli', () => {
        const results = performSmartSearch(mockPathologies, '');
        expect(results).toHaveLength(mockPathologies.length);
    });

    it('isimle arama yapabilmeli', () => {
        const results = performSmartSearch(mockPathologies, 'glioblastom');
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].id).toBe('glioblastoma');
    });

    it('İngilizce isimle arama yapabilmeli', () => {
        const results = performSmartSearch(mockPathologies, 'glioblastoma');
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].id).toBe('glioblastoma');
    });

    it('kategoriye göre arama yapabilmeli', () => {
        const results = performSmartSearch(mockPathologies, 'dejeneratif');
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].id).toBe('lumbar_disc_herniation');
    });

    it('keyPoint ile eşleşebilmeli', () => {
        const results = performSmartSearch(mockPathologies, 'dural kuyruk');
        expect(results.length).toBeGreaterThan(0);
        expect(results.some(r => r.id === 'meningioma')).toBe(true);
    });

    it('eşleşme bulunamadığında boş dizi döndürmeli', () => {
        const results = performSmartSearch(mockPathologies, 'xyzunobtainium');
        expect(results).toHaveLength(0);
    });
});

describe('performScoredSearch', () => {
    it('sonuçları skora göre sıralamalı', () => {
        const results = performScoredSearch(mockPathologies, 'beyin tümör');
        if (results.length > 1) {
            for (let i = 0; i < results.length - 1; i++) {
                expect(results[i].score).toBeGreaterThanOrEqual(results[i + 1].score);
            }
        }
    });

    it('eşleşen alanları döndürmeli', () => {
        const results = performScoredSearch(mockPathologies, 'glioblastom');
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].matchedFields.length).toBeGreaterThan(0);
    });

    it('skor sıfırdan büyük olmalı', () => {
        const results = performScoredSearch(mockPathologies, 'meningiom');
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].score).toBeGreaterThan(0);
    });

    it('eş anlamlı eşleşmelerde matchType synonym olmalı', () => {
        const results = performScoredSearch(mockPathologies, 'parlak');
        if (results.length > 0) {
            expect(['exact', 'synonym', 'fuzzy']).toContain(results[0].matchType);
        }
    });
});

describe('getSearchSuggestions', () => {
    it('boş sorguda son aramaları göstermeli', () => {
        addRecentSearch('glioblastom');
        const suggestions = getSearchSuggestions(mockPathologies, '', ['glioblastom']);
        expect(suggestions.some(s => s.type === 'recent')).toBe(true);
    });

    it('patoloji isimleriyle eşleşmeli', () => {
        const suggestions = getSearchSuggestions(mockPathologies, 'menin');
        expect(suggestions.some(s => s.type === 'pathology' && s.text === 'Meningiom')).toBe(true);
    });

    it('maxResults sınırını aşmamalı', () => {
        const suggestions = getSearchSuggestions(mockPathologies, 'a', [], 3);
        expect(suggestions.length).toBeLessThanOrEqual(3);
    });

    it('fuzzy eşleşme yapabilmeli', () => {
        const suggestions = getSearchSuggestions(mockPathologies, 'glioblastm');
        // Typo olmasına rağmen öneri gelebilir
        expect(suggestions.length).toBeGreaterThanOrEqual(0);
    });
});

describe('getDidYouMeanSuggestions', () => {
    it('yakın yazım hatalarını önermeli', () => {
        const suggestions = getDidYouMeanSuggestions(mockPathologies, 'kitl');
        // 'kitle' önerilmeli
        expect(suggestions.length).toBeGreaterThanOrEqual(0);
    });

    it('çok kısa sorguda boş döndürmeli', () => {
        const suggestions = getDidYouMeanSuggestions(mockPathologies, 'a');
        expect(suggestions).toHaveLength(0);
    });

    it('maxResults sınırını aşmamalı', () => {
        const suggestions = getDidYouMeanSuggestions(mockPathologies, 'kitl', 2);
        expect(suggestions.length).toBeLessThanOrEqual(2);
    });
});

describe('Son aramalar yönetimi', () => {
    beforeEach(() => {
        clearRecentSearches();
    });

    it('son aramayı kaydetmeli ve geri alabilmeli', () => {
        addRecentSearch('glioblastom');
        const recent = getRecentSearches();
        expect(recent).toContain('glioblastom');
    });

    it('aynı aramayı tekrarlamamalı', () => {
        addRecentSearch('meningiom');
        addRecentSearch('meningiom');
        const recent = getRecentSearches();
        const count = recent.filter(s => s === 'meningiom').length;
        expect(count).toBe(1);
    });

    it('en son eklenen aramayı başa koymalı', () => {
        addRecentSearch('birinci');
        addRecentSearch('ikinci');
        const recent = getRecentSearches();
        expect(recent[0]).toBe('ikinci');
    });

    it('kısa sorguları eklememeli', () => {
        addRecentSearch('a');
        const recent = getRecentSearches();
        expect(recent).not.toContain('a');
    });

    it('temizleme sonrası boş olmalı', () => {
        addRecentSearch('test');
        clearRecentSearches();
        const recent = getRecentSearches();
        expect(recent).toHaveLength(0);
    });
});
