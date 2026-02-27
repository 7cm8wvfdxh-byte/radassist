import { Pathology } from "@/types";

// --- Radyolojik Eş Anlamlılar Sözlüğü (Genişletilmiş) ---
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

    // Genişletilmiş Klinik Terimler
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

    // --- Karaciğer ---
    "siroz": ["hepatik fibrozis", "portal hipertansiyon", "rejeneratif nodül", "karaciğer sirozu"],
    "hepatit": ["karaciğer iltihabı", "hepatosellüler", "viral hepatit"],
    "hcc": ["hepatosellüler karsinom", "karaciğer kanseri", "hepatom"],
    "fnh": ["fokal nodüler hiperplazi", "santral skar"],
    "hemanjiom": ["kavernöz hemanjiom", "vasküler lezyon", "dolma paterni"],
    "safra": ["biliyer", "kolanjit", "kolesistit", "safra kesesi", "safra yolu"],

    // --- Akciğer ---
    "pnömoni": ["zatürre", "konsolidasyon", "enfeksiyon", "pulmoner enfeksiyon"],
    "emboli": ["pulmoner emboli", "tromboembolizm", "pe", "pte"],
    "atelektazi": ["kollaps", "volüm kaybı", "bronş tıkanıklığı"],
    "fibrozis": ["interstisyel", "pulmoner fibrozis", "bal peteği"],
    "plevral": ["plevral efüzyon", "plevral kalınlaşma", "ampiyem"],
    "nodül": ["pulmoner nodül", "soliter nodül", "milier", "spiküle"],
    "buzlu cam": ["ground glass", "ggn", "ggo", "matt cam"],

    // --- Beyin ---
    "glioblastom": ["gbm", "grade 4 gliom", "yüksek gradeli gliom"],
    "menenjiyom": ["meningiom", "dural kuyruk", "ekstra-aksiyal"],
    "schwannom": ["nörinom", "vestibüler schwannom", "akustik nöroma"],
    "ms": ["multipl skleroz", "demiyelinizan", "periventriküler plak"],
    "hidrosefali": ["ventrikül genişlemesi", "bos dolaşım bozukluğu", "obstrüktif"],
    "sah": ["subaraknoid kanama", "subaraknoid hemoraji"],
    "sdh": ["subdural hematom", "subdural kanama"],
    "edh": ["epidural hematom", "epidural kanama"],

    // --- Omurga ---
    "spondilolistezis": ["kayma", "vertebra kayması", "anterolistezis"],
    "stenoz": ["darlık", "kanal stenozu", "spinal stenoz", "foraminal stenoz"],
    "spondiloz": ["dejeneratif", "osteofit", "spondilartroz"],
    "miyelopati": ["kord basısı", "spinal kord", "miyelomalazi"],

    // --- Böbrek ---
    "rcc": ["renal hücreli karsinom", "böbrek kanseri", "renal karsinom"],
    "piyelonefrit": ["böbrek enfeksiyonu", "renal enfeksiyon", "striated nefrogram"],
    "nefrolitiyazis": ["böbrek taşı", "renal taş", "ürolitiyazis"],
    "hidronefroz": ["pelvikalisiyel genişleme", "idrar yolu tıkanıklığı"],

    // --- Meme ---
    "birads": ["bi-rads", "meme raporlama", "meme sınıflama"],
    "invaziv": ["invazif", "infiltratif", "duktal karsinom", "lobüler karsinom"],
    "fibroadenom": ["benign meme tümörü", "meme nodülü"],
    "mikrokalsifikasyon": ["mikro kalsifikasyon", "kümeleşmiş kalsifikasyon"],

    // --- Kas-İskelet ---
    "menisküs": ["meniskal yırtık", "menisküs lezyonu"],
    "labrum": ["labral yırtık", "bankart", "slap lezyon"],
    "tendon": ["tendinit", "tendinopati", "tendon rüptürü"],
    "ligaman": ["bağ", "acl", "pcl", "ligament yırtığı"],

    // --- GI ---
    "apandisit": ["appendisit", "apendiks", "sağ alt kadran"],
    "divertikülit": ["divertikül", "sol alt kadran"],
    "crohn": ["crohn hastalığı", "skip lezyon", "terminal ileum"],
    "volvulus": ["bağırsak dönmesi", "kuş gagası"],
    "ileus": ["bağırsak tıkanıklığı", "obstrüksiyon", "dilatasyon"],

    // --- Jinekoloji ---
    "endometriozis": ["endometrioma", "çikolata kisti", "endometriyal"],
    "miyom": ["fibroid", "uterin leiomyom", "myom"],
    "over kisti": ["adneksiyal kist", "ovaryan kist", "fonksiyonel kist"],
    "dermoid": ["matür teratom", "dermoid kist", "yağ içeren"],

    // --- Radyolojik İşaretler (Signs) ---
    "target sign": ["hedef işareti", "halka", "ring enhancement"],
    "halo sign": ["halo işareti", "periferik buzlu cam"],
    "rim enhancement": ["çevresel tutulum", "periferal tutulum"],
    "dural tail": ["dural kuyruk", "menenjiyom işareti"],
    "washout": ["yıkanma", "geç faz kaybı", "kontrastta kayıp"],
    "kaldırım taşı": ["crazy paving", "crazy-paving"],
    "bal peteği": ["honeycomb", "honeycombing", "fibrozis"],

    // --- Kısaltmalar ---
    "pe": ["pulmoner emboli", "tromboembolizm"],
    "dvt": ["derin ven trombozu", "venöz tromboz"],
    "avm": ["arteriyovenöz malformasyon"],
    "iab": ["intraserebral abse", "beyin apsesi"],
    "lak": ["laküner infarkt", "küçük damar hastalığı"],
};

// --- Fonetik Eşleştirme Haritası (Türkçe tıbbi yazım hataları) ---
const PHONETIC_MAP: Record<string, string[]> = {
    "siroz": ["seroz", "şiroz", "ciroz"],
    "seroz": ["siroz", "seröz"],
    "pnömoni": ["pnomoni", "pnömöni", "numoni", "nümoni"],
    "fibrozis": ["fibröz", "fibrozis", "fibroziz"],
    "hidrosefali": ["hidrosefli", "hidrosefalı", "hidrocefali"],
    "hiperintens": ["hiperintenz", "hiperıntens", "hiperindens"],
    "hipointens": ["hipointenz", "hipoıntens", "hipoindens"],
    "kalsifikasyon": ["kalsifkasyon", "kalsifikason", "kalsifikaysyon"],
    "menenjiyom": ["meningiom", "meninjiom", "menenjıyom"],
    "glioblastom": ["glioblastoma", "glioblastöm", "gliyoblastom"],
    "spondilolistezis": ["spondilolistesis", "spondilolıstezis", "spondilolisteziz"],
    "anevrizma": ["anevrızma", "anövrizma", "anevrima"],
    "hemoraji": ["hemoraji", "hemorajı", "hemorjı"],
    "tromboz": ["tromböz", "trombos", "trombuz"],
    "stenoz": ["stenöz", "stenos", "stenuz"],
    "hepatosellüler": ["hepatoselüler", "hepatosellülar", "hepatosellüller"],
    "emboli": ["embölü", "embolı", "embölı"],
    "metastaz": ["metaztaz", "metasdaz", "metastez"],
    "enfeksiyon": ["enfeksıyon", "enfeksyon", "infeksiyon"],
    "lezyon": ["lezion", "lezhon", "lezyen"],
    "apandisit": ["appendisit", "apandicit", "apandısıt"],
    "piyelonefrit": ["piylonefrit", "piyelonefirt", "pialonefrit"],
    "divertikülit": ["divertikülüt", "divertikülıt", "divertiklit"],
    "endometriozis": ["endometrioziz", "endometriosis", "endometriözis"],
    "schwannom": ["şuannom", "şvannom", "svannom", "schwannoma"],
    "kolanjit": ["kolanjıt", "kolancit", "kolanjıt"],
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

    // Fonetik düzeltme: Yanlış yazımdan doğru yazıma dönüştür
    const phoneticCorrection = getPhoneticCorrection(token);
    if (phoneticCorrection && phoneticCorrection !== token) {
        variations.push(phoneticCorrection);
        // Düzeltilmiş kelime için de sinonim genişletme yap
        if (RADIOLOGY_SYNONYMS[phoneticCorrection]) {
            for (const s of RADIOLOGY_SYNONYMS[phoneticCorrection]) variations.push(s.toLowerCase());
        }
        if (reverseSynonyms[phoneticCorrection]) {
            for (const s of reverseSynonyms[phoneticCorrection]) variations.push(s.toLowerCase());
        }
    }

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

// --- Fonetik Düzeltme ---
function getPhoneticCorrection(token: string): string | null {
    // Doğrudan fonetik haritada anahtar olarak var mı?
    if (PHONETIC_MAP[token]) return token;

    // Fonetik haritadaki varyantlarda ara
    for (const [correct, variants] of Object.entries(PHONETIC_MAP)) {
        if (variants.includes(token)) return correct;
    }
    return null;
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
        // Fonetik düzeltme
        const corrected = getPhoneticCorrection(token);
        if (corrected && corrected !== token) {
            expandedTokens.add(corrected);
        }
        const effectiveToken = corrected || token;

        // İleri yönlü: Halk dili -> Tıbbi
        if (RADIOLOGY_SYNONYMS[effectiveToken]) {
            RADIOLOGY_SYNONYMS[effectiveToken].forEach(syn => expandedTokens.add(syn.toLowerCase()));
        }

        // Geri yönlü: Tıbbi -> Halk dili + diğer teknik terimler
        if (reverseSynonyms[effectiveToken]) {
            reverseSynonyms[effectiveToken].forEach(syn => expandedTokens.add(syn.toLowerCase()));
        }

        // Kısmi eşleşme (en az 3 karakter)
        if (effectiveToken.length >= 3) {
            Object.keys(RADIOLOGY_SYNONYMS).forEach(key => {
                if (key.includes(effectiveToken) || effectiveToken.includes(key)) {
                    RADIOLOGY_SYNONYMS[key].forEach(syn => expandedTokens.add(syn.toLowerCase()));
                    expandedTokens.add(key);
                }
            });
            // Ters sözlükte de kısmi eşleşme
            Object.keys(reverseSynonyms).forEach(key => {
                if (key.includes(effectiveToken) || effectiveToken.includes(key)) {
                    reverseSynonyms[key].forEach(syn => expandedTokens.add(syn.toLowerCase()));
                    expandedTokens.add(key);
                }
            });
        }
    });

    return Array.from(expandedTokens);
}

// --- Gelişmiş Sorgu Ayrıştırma (Negatif arama + Alan bazlı arama) ---
interface ParsedQuery {
    includeTokens: string[];
    excludeTokens: string[];
    fieldFilters: { field: string; value: string }[];
    rawQuery: string;
}

function parseAdvancedQuery(query: string): ParsedQuery {
    const includeTokens: string[] = [];
    const excludeTokens: string[] = [];
    const fieldFilters: { field: string; value: string }[] = [];

    // Alan bazlı arama: "organ:beyin", "modalite:mr"
    const fieldPattern = /(\w+):(\S+)/g;
    let cleanedQuery = query;
    let fieldMatch;
    while ((fieldMatch = fieldPattern.exec(query)) !== null) {
        const fieldName = fieldMatch[1].toLowerCase();
        const fieldValue = fieldMatch[2].toLowerCase();
        // Bilinen alan isimleri
        const fieldAliases: Record<string, string> = {
            "organ": "organ", "modül": "organ", "module": "organ",
            "kategori": "category", "category": "category", "cat": "category",
            "modalite": "modality", "modality": "modality", "mod": "modality",
            "tip": "category", "type": "category",
        };
        if (fieldAliases[fieldName]) {
            fieldFilters.push({ field: fieldAliases[fieldName], value: fieldValue });
            cleanedQuery = cleanedQuery.replace(fieldMatch[0], "").trim();
        }
    }

    // Token'ları ayır, "-" ile başlayanlar hariç tutma
    const tokens = cleanedQuery.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    for (const token of tokens) {
        if (token.startsWith("-") && token.length > 1) {
            excludeTokens.push(token.slice(1));
        } else {
            includeTokens.push(token);
        }
    }

    return { includeTokens, excludeTokens, fieldFilters, rawQuery: cleanedQuery };
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

    // Gelişmiş sorgu ayrıştırma (negatif arama, alan filtreleme)
    const parsed = parseAdvancedQuery(query);

    // Modalite bağlamını algıla
    const modalityCtx = detectModalityContext(parsed.rawQuery);
    const effectiveQuery = modalityCtx.cleanedQuery || parsed.rawQuery;

    const rawTokens = parsed.includeTokens.length > 0
        ? parsed.includeTokens
        : effectiveQuery.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    if (rawTokens.length === 0) return pathologies.map(p => ({
        pathology: p, score: 0, matchedFields: [], matchType: "exact" as const,
    }));

    // Alan filtreleme uygula
    let filteredPool = pathologies;
    if (parsed.fieldFilters.length > 0) {
        filteredPool = pathologies.filter(p => {
            return parsed.fieldFilters.every(ff => {
                if (ff.field === "organ") {
                    return p.organ?.toLowerCase().includes(ff.value);
                }
                if (ff.field === "category") {
                    return p.category.toLowerCase().includes(ff.value) ||
                        (p.categoryEn?.toLowerCase().includes(ff.value));
                }
                if (ff.field === "modality") {
                    const findings = p.findings as Record<string, unknown>;
                    return !!findings[ff.value];
                }
                return true;
            });
        });
    }

    const results: SearchResult[] = [];

    // Pre-compute token variations using cached lookups
    const tokenVariationsMap = new Map<string, string[]>();
    for (const token of rawTokens) {
        tokenVariationsMap.set(token, getCachedTokenVariations(token));
    }

    // Negatif token varyasyonları
    const excludeVariations: string[] = [];
    for (const token of parsed.excludeTokens) {
        excludeVariations.push(token);
        const variations = getCachedTokenVariations(token);
        excludeVariations.push(...variations);
    }

    const hasModalityCtx = !!modalityCtx.modality;
    const modalPrefix = modalityCtx.fieldPrefix;

    // Bütünsel (phrase) arama: 2+ kelime yazıldığında tam ifadeyi de ara
    const fullPhrase = rawTokens.length >= 2 ? rawTokens.join(" ") : null;

    for (const p of filteredPool) {
        const fields = getSearchableFields(p);

        // Negatif arama: Hariç tutma kontrolü
        if (excludeVariations.length > 0) {
            const allText = fields.map(f => f.text).join(" ");
            const shouldExclude = excludeVariations.some(ex => allText.includes(ex));
            if (shouldExclude) continue;
        }

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
    type: "pathology" | "term" | "recent" | "case" | "lexicon" | "announcement" | "trending";
    category?: string;
    organ?: string;
    url?: string;
    estimatedResults?: number;
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
        // Query boşsa: Trending aramaları ve son aramaları göster
        const trending = getTrendingSearches(5);
        const trendingSuggestions: SearchSuggestion[] = trending.map(t => ({
            text: t.query,
            type: "trending" as const,
            category: `${t.count}x`,
        }));

        const recentSuggestions: SearchSuggestion[] = recentSearches.slice(0, maxResults - trending.length).map(s => ({
            text: s,
            type: "recent" as const,
        }));

        // Trending + Recent, ama duplicate olmasın
        const seen = new Set<string>();
        const combined: SearchSuggestion[] = [];
        for (const s of [...trendingSuggestions, ...recentSuggestions]) {
            if (!seen.has(s.text.toLowerCase())) {
                seen.add(s.text.toLowerCase());
                combined.push(s);
            }
            if (combined.length >= maxResults) break;
        }
        return combined;
    }

    const lower = query.toLowerCase().trim();
    const suggestions: SearchSuggestion[] = [];
    const seen = new Set<string>();

    // 1. Patoloji isimleri (en yüksek öncelik) + tahmini sonuç sayısı
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

    // 6. Fonetik düzeltme önerileri
    if (suggestions.length < 3 && lower.length >= 3) {
        const corrected = getPhoneticCorrection(lower);
        if (corrected && corrected !== lower && !seen.has(corrected)) {
            seen.add(corrected);
            suggestions.push({
                text: corrected.charAt(0).toUpperCase() + corrected.slice(1),
                type: "term",
                category: "Düzeltme",
            });
        }
    }

    // 7. Sözlük terimleri (eş anlamlılar sözlüğü)
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

// --- "Bunu mu demek istediniz?" Önerileri (İyileştirilmiş: düşük sonuçlarda da göster) ---
export function getDidYouMeanSuggestions(
    pathologies: Pathology[],
    query: string,
    resultCount: number = 0,
    maxResults: number = 3
): string[] {
    const lower = query.toLowerCase().trim();
    if (lower.length < 2) return [];

    // Sonuç sayısı 3'ten fazlaysa önerme
    if (resultCount > 3) return [];

    const candidates: { text: string; distance: number }[] = [];

    // Fonetik düzeltme (en yüksek öncelik)
    const corrected = getPhoneticCorrection(lower);
    if (corrected && corrected !== lower) {
        candidates.push({ text: corrected, distance: 0 });
    }

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

    // Sözlük terimleri (genişletilmiş sözlükten)
    for (const key of Object.keys(RADIOLOGY_SYNONYMS)) {
        const dist = levenshteinDistance(lower, key);
        if (dist <= 2 && dist > 0) {
            candidates.push({ text: key, distance: dist });
        }
    }

    // Fonetik harita anahtarları
    for (const key of Object.keys(PHONETIC_MAP)) {
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

// --- Tahmini Sonuç Sayısı (Dropdown için hızlı tahmin) ---
export function getEstimatedResultCount(pathologies: Pathology[], query: string): number {
    if (!query.trim()) return pathologies.length;
    const lower = query.toLowerCase().trim();
    let count = 0;
    for (const p of pathologies) {
        const text = getSearchableText(p);
        if (text.includes(lower)) {
            count++;
        }
    }
    return count;
}

// --- Arama İstatistikleri / Trending Sistemi ---
const SEARCH_STATS_KEY = "radassist-search-stats";
const MAX_TRENDING_ENTRIES = 50;

interface SearchStatEntry {
    query: string;
    count: number;
    lastUsed: number;
}

export function trackSearchQuery(query: string): void {
    if (typeof window === "undefined") return;
    const trimmed = query.trim().toLowerCase();
    if (!trimmed || trimmed.length < 2) return;

    try {
        const stats = getSearchStats();
        const existing = stats.find(s => s.query === trimmed);
        if (existing) {
            existing.count++;
            existing.lastUsed = Date.now();
        } else {
            stats.push({ query: trimmed, count: 1, lastUsed: Date.now() });
        }

        // Limit entries
        stats.sort((a, b) => b.count - a.count);
        localStorage.setItem(
            SEARCH_STATS_KEY,
            JSON.stringify(stats.slice(0, MAX_TRENDING_ENTRIES))
        );
    } catch { /* ignore */ }
}

export function getSearchStats(): SearchStatEntry[] {
    if (typeof window === "undefined") return [];
    try {
        const stored = localStorage.getItem(SEARCH_STATS_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch { /* ignore */ }
    return [];
}

export function getTrendingSearches(limit: number = 5): SearchStatEntry[] {
    const stats = getSearchStats();
    // Sadece 2+ kez aranan ve son 7 günde kullanılan
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return stats
        .filter(s => s.count >= 2 && s.lastUsed > weekAgo)
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
}

// --- Kategori Filtre Sonuçları ---
export interface CategoryFilterResult {
    category: string;
    count: number;
    organ?: string;
}

export function getCategoryFilters(results: SearchResult[]): CategoryFilterResult[] {
    const counts = new Map<string, { count: number; organ?: string }>();

    for (const r of results) {
        const cat = r.pathology.category;
        const existing = counts.get(cat);
        if (existing) {
            existing.count++;
        } else {
            counts.set(cat, { count: 1, organ: r.pathology.organ });
        }
    }

    return Array.from(counts.entries())
        .map(([category, data]) => ({ category, count: data.count, organ: data.organ }))
        .sort((a, b) => b.count - a.count);
}

// --- Organ Filtre Sonuçları ---
export interface OrganFilterResult {
    organ: string;
    count: number;
}

export function getOrganFilters(results: SearchResult[]): OrganFilterResult[] {
    const counts = new Map<string, number>();

    for (const r of results) {
        const organ = r.pathology.organ || "Diğer";
        counts.set(organ, (counts.get(organ) || 0) + 1);
    }

    return Array.from(counts.entries())
        .map(([organ, count]) => ({ organ, count }))
        .sort((a, b) => b.count - a.count);
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

    // Trending istatistiklerini de güncelle
    trackSearchQuery(trimmed);
}

export function clearRecentSearches(): void {
    if (typeof window === "undefined") return;
    try { localStorage.removeItem(RECENT_SEARCHES_KEY); } catch { /* ignore */ }
}

// Eski API uyumluluğu için getSearchableText export
export { getSearchableText };
