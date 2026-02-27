import { Pathology } from "@/types";

// --- Radyolojik Eş Anlamlılar Sözlüğü ---
const RADIOLOGY_SYNONYMS: Record<string, string[]> = {
    // Parlaklık / Artış
    "parlak": ["hiperintens", "hiperdens", "hiperekoik", "artmış", "yüksek sinyal", "restriksiyon"],
    "beyaz": ["hiperintens", "hiperdens", "kalsifikasyon", "kanama", "hemoraji"],
    "aydınlık": ["hiperintens"],
    "hiper": ["hiperintens", "hiperdens", "hiperekoik"],

    // Koyuluk / Azalış
    "koyu": ["hipointens", "hipodens", "hipoekoik", "azalmış", "düşük sinyal", "kistik", "sıvı"],
    "siyah": ["hipointens", "hava", "gaz"],
    "hipo": ["hipointens", "hipodens", "hipoekoik"],

    // Patoloji Türleri
    "kitle": ["tümör", "lezyon", "nodül", "mass", "yer kaplayan", "neoplazm", "karsinom"],
    "kan": ["kanama", "hemoraji", "hematom", "sdh", "edh", "sah"],
    "sıvı": ["kist", "efüzyon", "ödem", "bos", "hidrosefali"],
    "kireç": ["kalsifikasyon", "kalsifik", "taş"],
    "iltihap": ["enfeksiyon", "apse", "absse", "inflamasyon", "empyem"],
    "felç": ["inme", "iskemi", "infarkt", "stroke"],
    "fıtık": ["herni", "disk", "ekstrüde", "protrüde"],

    // Görüntüleme Yöntemleri
    "bt": ["ct", "tomografi", "bilgisayarlı"],
    "mr": ["mri", "manyetik", "manyetik rezonans"],
    "usg": ["ultrason", "eko", "doppler"],

    // Spesifik Terimler
    "yer kaplayan": ["kitle", "tümör", "bası"],
    "halka": ["ring", "çevresel"],
    "baskı": ["bası", "kompresyon", "indentasyon"],
    "ödem": ["vazojenik", "sitotoksik", "şişlik", "t2 hiper"],
    "yaygın": ["diffüz", "dissemine"],

    // --- YENİ: Genişletilmiş Klinik Terimler ---
    "anevrizma": ["anevrizmal", "sakküler", "fusiform", "subaraknoid"],
    "metastaz": ["metastatik", "sekonder", "yayılım"],
    "damar": ["vasküler", "arter", "ven", "damarsal"],
    "sinir": ["nöral", "nörojenik", "nöropati"],
    "kemik": ["osseöz", "kemik iliği", "korteks", "trabeküler"],
    "tıkanıklık": ["oklüzyon", "stenoz", "darlık", "obstrüksiyon"],
    "yırtık": ["rüptür", "laserasyon", "perforasyon"],
    "büyüme": ["hipertrofi", "hiperplazi", "genişleme"],
    "küçülme": ["atrofi", "involüsyon", "dejenerasyon"],
    "ağrı": ["akut", "kronik", "semptom"],
    "kırık": ["fraktür", "kompresyon", "avülsiyon"],
    "kanamak": ["hemoraji", "hematom", "kanama"],
    "şişlik": ["ödem", "efüzyon", "kitle etkisi"],
    "düğüm": ["nodül", "nodüler", "lenfadenopati"],
    "akut karın": ["apandisit", "volvulus", "invajinasyon", "perforasyon", "peritonit"],
};

// --- Ters Sözlük (Teknik → Halk dili + diğer teknik) ---
let _reverseSynonyms: Record<string, string[]> | null = null;
function getReverseSynonyms(): Record<string, string[]> {
    if (_reverseSynonyms) return _reverseSynonyms;
    _reverseSynonyms = {};
    for (const [key, values] of Object.entries(RADIOLOGY_SYNONYMS)) {
        for (const val of values) {
            const lower = val.toLowerCase();
            if (!_reverseSynonyms[lower]) _reverseSynonyms[lower] = [];
            if (!_reverseSynonyms[lower].includes(key)) {
                _reverseSynonyms[lower].push(key);
            }
            // Diğer eş anlamlıları da ekle
            for (const otherVal of values) {
                if (otherVal !== val && !_reverseSynonyms[lower].includes(otherVal.toLowerCase())) {
                    _reverseSynonyms[lower].push(otherVal.toLowerCase());
                }
            }
        }
    }
    return _reverseSynonyms;
}

// --- Sözlük Terimleri Önbellek ---
let _cachedDictionaryTerms: string[] | null = null;
function getCachedDictionaryTerms(): string[] {
    if (_cachedDictionaryTerms) return _cachedDictionaryTerms;
    const allTerms = [
        ...Object.keys(RADIOLOGY_SYNONYMS),
        ...Object.values(RADIOLOGY_SYNONYMS).flat(),
    ];
    _cachedDictionaryTerms = Array.from(new Set(allTerms.map(t => t.toLowerCase())));
    return _cachedDictionaryTerms;
}

// --- Token Variation Önbellek ---
const _tokenVariationsCache = new Map<string, string[]>();
function getCachedTokenVariations(token: string): string[] {
    const cached = _tokenVariationsCache.get(token);
    if (cached) return cached;
    const reverseSynonyms = getReverseSynonyms();
    const variations = [token];
    if (RADIOLOGY_SYNONYMS[token]) {
        for (const s of RADIOLOGY_SYNONYMS[token]) variations.push(s.toLowerCase());
    }
    if (reverseSynonyms[token]) {
        for (const s of reverseSynonyms[token]) variations.push(s.toLowerCase());
    }
    if (_tokenVariationsCache.size > 500) _tokenVariationsCache.clear();
    _tokenVariationsCache.set(token, variations);
    return variations;
}

// --- Modalite Algılama ---
const MODALITY_PATTERNS: { pattern: RegExp; modality: string; fieldPrefix: string }[] = [
    { pattern: /\b(?:mr['\u2019]?(?:da|de|ı|i)?|mri['\u2019]?(?:da|de)?|manyetik)\b/i, modality: "mri", fieldPrefix: "mri" },
    { pattern: /\b(?:bt['\u2019]?(?:de|da|si)?|ct['\u2019]?(?:de|da)?|tomografi)\b/i, modality: "ct", fieldPrefix: "ct" },
    { pattern: /\b(?:usg['\u2019]?(?:de|da)?|ultrason|doppler)\b/i, modality: "usg", fieldPrefix: "usg" },
    { pattern: /\b(?:röntgen|x[- ]?ray|direkt\s*grafi)\b/i, modality: "xray", fieldPrefix: "xray" },
    { pattern: /\b(?:pet['\u2019]?(?:te|ta|bt)?)\b/i, modality: "pet", fieldPrefix: "pet" },
    { pattern: /\b(?:mamografi|mammografi|mamo)\b/i, modality: "mammography", fieldPrefix: "mammography" },
    // MR sekansları
    { pattern: /\bt1['\u2019]?(?:de|da)?\b/i, modality: "mri", fieldPrefix: "mri" },
    { pattern: /\bt2['\u2019]?(?:de|da)?\b/i, modality: "mri", fieldPrefix: "mri" },
    { pattern: /\b(?:flair|dwi|adc|swi|stir)\b/i, modality: "mri", fieldPrefix: "mri" },
];

export interface ModalityContext {
    modality: string | null;
    fieldPrefix: string | null;
    cleanedQuery: string;
}

export function detectModalityContext(query: string): ModalityContext {
    let detected: { modality: string; fieldPrefix: string } | null = null;
    let cleanedQuery = query;

    for (const { pattern, modality, fieldPrefix } of MODALITY_PATTERNS) {
        const match = query.match(pattern);
        if (match) {
            detected = { modality, fieldPrefix };
            // Sekans isimleri (t1, t2, dwi vb) query'den çıkarılmasın, arama terimi olarak kalsın
            const isSequence = /^(t1|t2|flair|dwi|adc|swi|stir)$/i.test(match[0]);
            if (!isSequence) {
                cleanedQuery = cleanedQuery.replace(match[0], "").trim();
            }
            break;
        }
    }

    return {
        modality: detected?.modality || null,
        fieldPrefix: detected?.fieldPrefix || null,
        cleanedQuery,
    };
}

// --- Levenshtein Distance (Fuzzy Matching) with Memoization ---
const _distanceCache = new Map<string, number>();

function levenshteinDistance(a: string, b: string): number {
    const cacheKey = a < b ? `${a}|${b}` : `${b}|${a}`;
    const cached = _distanceCache.get(cacheKey);
    if (cached !== undefined) return cached;

    const aLen = a.length;
    const bLen = b.length;

    if (aLen === 0) { _distanceCache.set(cacheKey, bLen); return bLen; }
    if (bLen === 0) { _distanceCache.set(cacheKey, aLen); return aLen; }

    // Early exit: if length difference exceeds typical threshold, skip full computation
    if (Math.abs(aLen - bLen) > 3) {
        const dist = Math.abs(aLen - bLen);
        _distanceCache.set(cacheKey, dist);
        return dist;
    }

    const matrix: number[][] = [];
    for (let i = 0; i <= aLen; i++) matrix[i] = [i];
    for (let j = 0; j <= bLen; j++) matrix[0][j] = j;

    for (let i = 1; i <= aLen; i++) {
        for (let j = 1; j <= bLen; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    const result = matrix[aLen][bLen];
    // Limit cache size to prevent memory growth
    if (_distanceCache.size > 10000) _distanceCache.clear();
    _distanceCache.set(cacheKey, result);
    return result;
}

function isFuzzyMatch(token: string, target: string, maxDistance: number = 1): boolean {
    if (token.length < 4) return token === target;
    if (target.includes(token) || token.includes(target)) return true;

    // Kelime bazında kontrol
    const words = target.split(/\s+/);
    for (const word of words) {
        if (word.length >= 3 && levenshteinDistance(token, word) <= maxDistance) {
            return true;
        }
    }
    return false;
}

// --- Token Genişletme (Bidirectional) ---
export function expandQueryTokens(query: string): string[] {
    const rawTokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    const expandedTokens = new Set<string>(rawTokens);

    const reverseSynonyms = getReverseSynonyms();

    rawTokens.forEach(token => {
        // İleri yönlü: Halk dili -> Tıbbi
        if (RADIOLOGY_SYNONYMS[token]) {
            RADIOLOGY_SYNONYMS[token].forEach(syn => expandedTokens.add(syn.toLowerCase()));
        }

        // Geri yönlü: Tıbbi -> Halk dili + diğer teknik terimler
        if (reverseSynonyms[token]) {
            reverseSynonyms[token].forEach(syn => expandedTokens.add(syn.toLowerCase()));
        }

        // Kısmi eşleşme (en az 3 karakter)
        if (token.length >= 3) {
            Object.keys(RADIOLOGY_SYNONYMS).forEach(key => {
                if (key.includes(token) || token.includes(key)) {
                    RADIOLOGY_SYNONYMS[key].forEach(syn => expandedTokens.add(syn.toLowerCase()));
                    expandedTokens.add(key);
                }
            });
            // Ters sözlükte de kısmi eşleşme
            Object.keys(reverseSynonyms).forEach(key => {
                if (key.includes(token) || token.includes(key)) {
                    reverseSynonyms[key].forEach(syn => expandedTokens.add(syn.toLowerCase()));
                    expandedTokens.add(key);
                }
            });
        }
    });

    return Array.from(expandedTokens);
}

// --- Aranabilir Alanlar (Weighted) ---
interface SearchField {
    text: string;
    weight: number;
    fieldName: string;
}

// Cache searchable fields per pathology to avoid recomputing on every search
const _fieldsCache = new WeakMap<Pathology, SearchField[]>();

function getSearchableFields(p: Pathology): SearchField[] {
    const cached = _fieldsCache.get(p);
    if (cached) return cached;

    const fields: SearchField[] = [];

    // İsim (en yüksek ağırlık)
    fields.push({ text: p.name.toLowerCase(), weight: 10, fieldName: "name" });
    if (p.nameEn) fields.push({ text: p.nameEn.toLowerCase(), weight: 10, fieldName: "nameEn" });

    // Kategori
    fields.push({ text: p.category.toLowerCase(), weight: 8, fieldName: "category" });
    if (p.categoryEn) fields.push({ text: p.categoryEn.toLowerCase(), weight: 8, fieldName: "categoryEn" });

    // Organ
    if (p.organ) fields.push({ text: p.organ.toLowerCase(), weight: 7, fieldName: "organ" });

    // Klinik Pearl & Gold Standard (yüksek önem)
    if (p.clinicalPearl) fields.push({ text: p.clinicalPearl.toLowerCase(), weight: 6, fieldName: "clinicalPearl" });
    if (p.goldStandard) fields.push({ text: p.goldStandard.toLowerCase(), weight: 6, fieldName: "goldStandard" });

    // Key Points
    (p.keyPoints || []).forEach((kp, i) => {
        fields.push({ text: kp.toLowerCase(), weight: 5, fieldName: `keyPoint_${i}` });
    });

    // Etiology & Mechanism
    if (p.etiology) fields.push({ text: p.etiology.toLowerCase(), weight: 4, fieldName: "etiology" });
    if (p.mechanism) fields.push({ text: p.mechanism.toLowerCase(), weight: 4, fieldName: "mechanism" });

    // Differential Diagnosis
    (p.differentialDiagnosis || []).forEach((dd, i) => {
        fields.push({ text: dd.toLowerCase(), weight: 3, fieldName: `ddx_${i}` });
    });

    // Findings (modalite bazlı)
    const addFindingsFields = (findings: Record<string, string | undefined> | undefined, prefix: string, weight: number) => {
        if (!findings) return;
        Object.entries(findings).forEach(([key, val]) => {
            if (val && typeof val === 'string') {
                fields.push({ text: val.toLowerCase(), weight, fieldName: `${prefix}.${key}` });
            }
        });
    };

    addFindingsFields(p.findings.ct as Record<string, string | undefined>, "ct", 3);
    addFindingsFields(p.findings.mri as Record<string, string | undefined>, "mri", 3);
    addFindingsFields(p.findings.usg as Record<string, string | undefined>, "usg", 3);
    addFindingsFields(p.findings.xray as Record<string, string | undefined>, "xray", 3);
    addFindingsFields(p.findings.pet as Record<string, string | undefined>, "pet", 3);
    addFindingsFields(p.findings.mammography as Record<string, string | undefined>, "mammography", 3);

    _fieldsCache.set(p, fields);
    return fields;
}

// Eski uyumluluk için basit text oluşturucu (HighlightedText tarafından kullanılıyor)
function getSearchableText(p: Pathology): string {
    return getSearchableFields(p).map(f => f.text).join(" ");
}

// --- Arama Sonucu Tipi ---
export interface SearchResult {
    pathology: Pathology;
    score: number;
    matchedFields: { fieldName: string; snippet: string; weight: number }[];
    matchType: "exact" | "synonym" | "fuzzy";
}

// --- Context Snippet Oluşturucu ---
function extractSnippet(text: string, token: string, contextLength: number = 60): string {
    const lowerText = text.toLowerCase();
    const idx = lowerText.indexOf(token.toLowerCase());
    if (idx === -1) return text.slice(0, contextLength * 2) + (text.length > contextLength * 2 ? "..." : "");

    const start = Math.max(0, idx - contextLength);
    const end = Math.min(text.length, idx + token.length + contextLength);
    let snippet = text.slice(start, end);
    if (start > 0) snippet = "..." + snippet;
    if (end < text.length) snippet = snippet + "...";
    return snippet;
}

// --- Ana Akıllı Arama (Geliştirilmiş, Skorlu) ---
export function performSmartSearch(pathologies: Pathology[], query: string): Pathology[] {
    if (!query.trim()) return pathologies;

    const results = performScoredSearch(pathologies, query);
    return results.map(r => r.pathology);
}

export function performScoredSearch(pathologies: Pathology[], query: string): SearchResult[] {
    if (!query.trim()) return pathologies.map(p => ({
        pathology: p,
        score: 0,
        matchedFields: [],
        matchType: "exact" as const,
    }));

    // Modalite bağlamını algıla
    const modalityCtx = detectModalityContext(query);
    const effectiveQuery = modalityCtx.cleanedQuery || query;

    const rawTokens = effectiveQuery.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    if (rawTokens.length === 0) return pathologies.map(p => ({
        pathology: p, score: 0, matchedFields: [], matchType: "exact" as const,
    }));

    const results: SearchResult[] = [];

    // Pre-compute token variations using cached lookups
    const tokenVariationsMap = new Map<string, string[]>();
    for (const token of rawTokens) {
        tokenVariationsMap.set(token, getCachedTokenVariations(token));
    }

    const hasModalityCtx = !!modalityCtx.modality;
    const modalPrefix = modalityCtx.fieldPrefix;

    // Bütünsel (phrase) arama: 2+ kelime yazıldığında tam ifadeyi de ara
    const fullPhrase = rawTokens.length >= 2 ? rawTokens.join(" ") : null;

    for (const p of pathologies) {
        const fields = getSearchableFields(p);

        let totalScore = 0;
        let allTokensMatched = true;
        const matchedFields: SearchResult["matchedFields"] = [];
        let bestMatchType: SearchResult["matchType"] = "exact";

        // --- Bütünsel ifade araması (phrase search) ---
        let phraseMatchScore = 0;
        if (fullPhrase) {
            for (const field of fields) {
                const fieldWeight = hasModalityCtx && field.fieldName.startsWith(modalPrefix!)
                    ? field.weight + 4
                    : field.weight;

                if (field.text.includes(fullPhrase)) {
                    phraseMatchScore += fieldWeight * 3;
                    matchedFields.push({
                        fieldName: field.fieldName,
                        snippet: extractSnippet(field.text, fullPhrase),
                        weight: field.weight,
                    });
                }
            }
        }

        // Tam ifade eşleşmesi varsa token bazlı aramayı atlayarak doğrudan ekle
        if (phraseMatchScore > 0) {
            const nameLower = p.name.toLowerCase();
            if (nameLower.includes(fullPhrase!)) {
                phraseMatchScore *= 2.5;
            } else if (rawTokens.some(t => nameLower.includes(t))) {
                phraseMatchScore *= 1.5;
            }

            const seen = new Set<string>();
            const uniqueFields = matchedFields.filter(f => {
                const key = f.fieldName;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

            results.push({
                pathology: p,
                score: phraseMatchScore,
                matchedFields: uniqueFields.slice(0, 3),
                matchType: "exact",
            });
            continue;
        }

        // --- Token bazlı arama (mevcut davranış) ---
        for (const token of rawTokens) {
            const possibleVariations = tokenVariationsMap.get(token)!;

            let tokenMatched = false;
            let tokenBestScore = 0;

            for (const field of fields) {
                // Calculate weight inline (avoid array copy for modality bonus)
                const fieldWeight = hasModalityCtx && field.fieldName.startsWith(modalPrefix!)
                    ? field.weight + 4
                    : field.weight;

                // Exact / substring match
                for (const variation of possibleVariations) {
                    if (field.text.includes(variation)) {
                        tokenMatched = true;
                        const isOriginalToken = variation === token;
                        const matchScore = isOriginalToken ? fieldWeight * 2 : fieldWeight;
                        if (!isOriginalToken && bestMatchType === "exact") bestMatchType = "synonym";

                        if (matchScore > tokenBestScore) {
                            tokenBestScore = matchScore;
                        }

                        matchedFields.push({
                            fieldName: field.fieldName,
                            snippet: extractSnippet(field.text, variation),
                            weight: field.weight,
                        });
                        break;
                    }
                }
            }

            // Fuzzy match (bulunamadıysa) - only high-weight fields first for speed
            if (!tokenMatched && token.length >= 4) {
                const maxDist = token.length <= 5 ? 1 : 2;
                for (const field of fields) {
                    if (field.weight < 5) continue;
                    if (isFuzzyMatch(token, field.text, maxDist)) {
                        tokenMatched = true;
                        tokenBestScore = field.weight * 0.5;
                        bestMatchType = "fuzzy";
                        matchedFields.push({
                            fieldName: field.fieldName,
                            snippet: extractSnippet(field.text, token),
                            weight: field.weight,
                        });
                        break;
                    }
                }
                if (!tokenMatched) {
                    for (const field of fields) {
                        if (field.weight >= 5) continue;
                        if (isFuzzyMatch(token, field.text, maxDist)) {
                            tokenMatched = true;
                            tokenBestScore = field.weight * 0.5;
                            bestMatchType = "fuzzy";
                            matchedFields.push({
                                fieldName: field.fieldName,
                                snippet: extractSnippet(field.text, token),
                                weight: field.weight,
                            });
                            break;
                        }
                    }
                }
            }

            if (!tokenMatched) {
                allTokensMatched = false;
                break;
            }

            totalScore += tokenBestScore;
        }

        if (allTokensMatched && totalScore > 0) {
            // İsim tam eşleşme bonusu
            const nameLower = p.name.toLowerCase();
            if (rawTokens.some(t => nameLower.includes(t))) {
                totalScore *= 1.5;
            }
            // Tam isim eşleşmesi
            if (rawTokens.length > 0 && nameLower.includes(rawTokens.join(" "))) {
                totalScore *= 2;
            }

            // Deduplicate matchedFields
            const seen = new Set<string>();
            const uniqueFields = matchedFields.filter(f => {
                const key = f.fieldName;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

            results.push({
                pathology: p,
                score: totalScore,
                matchedFields: uniqueFields.slice(0, 3), // En fazla 3 snippet
                matchType: bestMatchType,
            });
        }
    }

    // Skora göre sırala (yüksek → düşük)
    results.sort((a, b) => b.score - a.score);

    return results;
}

// --- Otomatik Tamamlama Önerileri ---
export interface SearchSuggestion {
    text: string;
    type: "pathology" | "term" | "recent" | "case" | "lexicon" | "announcement";
    category?: string;
    organ?: string;
    url?: string;
}

// Ek veri kaynakları için arayüzler
export interface ExtraSearchSource {
    caseStudies?: { id: string; title: string; finalDiagnosis: string; patientHistory: string; difficulty: string }[];
    lexiconTerms?: { id: string; label: string; category: string }[];
    announcements?: { id: string; title: string; type: string; content: string; url?: string }[];
}

export function getSearchSuggestions(
    pathologies: Pathology[],
    query: string,
    recentSearches: string[] = [],
    maxResults: number = 10,
    extraSources?: ExtraSearchSource
): SearchSuggestion[] {
    if (!query.trim()) {
        // Query boşsa son aramaları göster
        return recentSearches.slice(0, maxResults).map(s => ({
            text: s,
            type: "recent" as const,
        }));
    }

    const lower = query.toLowerCase().trim();
    const suggestions: SearchSuggestion[] = [];
    const seen = new Set<string>();

    // 1. Patoloji isimleri (en yüksek öncelik)
    for (const p of pathologies) {
        const name = p.name.toLowerCase();
        const nameEn = p.nameEn?.toLowerCase() || "";
        if (name.includes(lower) || nameEn.includes(lower)) {
            if (!seen.has(p.name)) {
                seen.add(p.name);
                suggestions.push({
                    text: p.name,
                    type: "pathology",
                    category: p.category,
                    organ: p.organ,
                });
            }
        }
        if (suggestions.length >= 5) break;
    }

    // 2. Vaka çalışmaları
    if (extraSources?.caseStudies) {
        for (const cs of extraSources.caseStudies) {
            if (suggestions.length >= maxResults) break;
            const titleLower = cs.title.toLowerCase();
            const diagLower = cs.finalDiagnosis.toLowerCase();
            const histLower = cs.patientHistory.toLowerCase();
            if (titleLower.includes(lower) || diagLower.includes(lower) || histLower.includes(lower)) {
                const key = `case-${cs.id}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    suggestions.push({
                        text: cs.title,
                        type: "case",
                        category: cs.difficulty,
                        url: `/case-studies/${cs.id}`,
                    });
                }
            }
        }
    }

    // 3. Leksikon (bulgu terimleri)
    if (extraSources?.lexiconTerms) {
        for (const term of extraSources.lexiconTerms) {
            if (suggestions.length >= maxResults) break;
            const labelLower = term.label.toLowerCase();
            if (labelLower.includes(lower)) {
                const key = `lex-${term.id}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    suggestions.push({
                        text: term.label,
                        type: "lexicon",
                        category: term.category,
                    });
                }
            }
        }
    }

    // 4. Duyurular
    if (extraSources?.announcements) {
        for (const ann of extraSources.announcements) {
            if (suggestions.length >= maxResults) break;
            const titleLower = ann.title.toLowerCase();
            const contentLower = ann.content.toLowerCase();
            if (titleLower.includes(lower) || contentLower.includes(lower)) {
                const key = `ann-${ann.id}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    suggestions.push({
                        text: ann.title,
                        type: "announcement",
                        category: ann.type,
                        url: ann.url,
                    });
                }
            }
        }
    }

    // 5. Fuzzy patoloji isimleri (eğer az sonuç bulunduysa)
    if (suggestions.length < 3 && lower.length >= 3) {
        for (const p of pathologies) {
            if (seen.has(p.name)) continue;
            const nameWords = p.name.toLowerCase().split(/[\s()/,-]+/);
            for (const word of nameWords) {
                if (word.length >= 3 && levenshteinDistance(lower, word) <= 2) {
                    seen.add(p.name);
                    suggestions.push({
                        text: p.name,
                        type: "pathology",
                        category: p.category,
                        organ: p.organ,
                    });
                    break;
                }
            }
            if (suggestions.length >= maxResults) break;
        }
    }

    // 6. Sözlük terimleri (eş anlamlılar sözlüğü)
    const uniqueTerms = getCachedDictionaryTerms();

    for (const term of uniqueTerms) {
        if (suggestions.length >= maxResults) break;
        if (seen.has(term)) continue;
        if (term.includes(lower) || lower.includes(term)) {
            seen.add(term);
            suggestions.push({
                text: term.charAt(0).toUpperCase() + term.slice(1),
                type: "term",
            });
        }
    }

    return suggestions.slice(0, maxResults);
}

// --- "Bunu mu demek istediniz?" Önerileri ---
export function getDidYouMeanSuggestions(
    pathologies: Pathology[],
    query: string,
    maxResults: number = 3
): string[] {
    const lower = query.toLowerCase().trim();
    if (lower.length < 2) return [];

    const candidates: { text: string; distance: number }[] = [];

    // Patoloji isimleri
    for (const p of pathologies) {
        const nameWords = p.name.toLowerCase().split(/[\s()/,-]+/).filter(w => w.length >= 3);
        for (const word of nameWords) {
            const dist = levenshteinDistance(lower, word);
            if (dist <= 3 && dist > 0) {
                candidates.push({ text: word, distance: dist });
            }
        }
    }

    // Sözlük terimleri
    for (const key of Object.keys(RADIOLOGY_SYNONYMS)) {
        const dist = levenshteinDistance(lower, key);
        if (dist <= 2 && dist > 0) {
            candidates.push({ text: key, distance: dist });
        }
    }

    // Sırala ve deduplicate
    candidates.sort((a, b) => a.distance - b.distance);
    const seen = new Set<string>();
    const results: string[] = [];
    for (const c of candidates) {
        if (!seen.has(c.text) && c.text !== lower) {
            seen.add(c.text);
            results.push(c.text);
        }
        if (results.length >= maxResults) break;
    }

    return results;
}

// --- Son Aramalar Yönetimi ---
const RECENT_SEARCHES_KEY = "radassist-recent-searches";
const MAX_RECENT_SEARCHES = 10;

export function getRecentSearches(): string[] {
    if (typeof window === "undefined") return [];
    try {
        const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch { /* ignore */ }
    return [];
}

export function addRecentSearch(query: string): void {
    if (typeof window === "undefined") return;
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;

    try {
        const searches = getRecentSearches().filter(s => s !== trimmed);
        searches.unshift(trimmed);
        localStorage.setItem(
            RECENT_SEARCHES_KEY,
            JSON.stringify(searches.slice(0, MAX_RECENT_SEARCHES))
        );
    } catch { /* ignore */ }
}

export function clearRecentSearches(): void {
    if (typeof window === "undefined") return;
    try { localStorage.removeItem(RECENT_SEARCHES_KEY); } catch { /* ignore */ }
}

// Eski API uyumluluğu için getSearchableText export
export { getSearchableText };
