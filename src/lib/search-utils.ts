import { Pathology } from "@/types";

// --- Radyolojik Eş Anlamlılar Sözlüğü ---
// Kullanıcının "halk dili" veya "kısaltma" ile aradığı terimleri
// teknik karşılıklarına eşler.
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
};

/**
 * Sorgu içindeki tokenları genişleterek eş anlamlılarını da içeren
 * bir "aranacak kelimeler" seti oluşturur.
 */
export function expandQueryTokens(query: string): string[] {
    const rawTokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    const expandedTokens = new Set<string>(rawTokens);

    rawTokens.forEach(token => {
        // Tam eşleşme kontrolü
        if (RADIOLOGY_SYNONYMS[token]) {
            RADIOLOGY_SYNONYMS[token].forEach(syn => expandedTokens.add(syn));
        }

        // Kısmi eşleşme (örn: "hiper" yazınca da yakalasın)
        // Çok agresif olmaması için sadece en az 3 karakterli olanlarda
        if (token.length >= 3) {
            Object.keys(RADIOLOGY_SYNONYMS).forEach(key => {
                if (key.includes(token) || token.includes(key)) {
                    RADIOLOGY_SYNONYMS[key].forEach(syn => expandedTokens.add(syn));
                }
            });
        }
    });

    return Array.from(expandedTokens);
}

/**
 * Bir patoloji nesnesini aranabilir tek bir metin bloğuna dönüştürür.
 * (Cache için optimize edilebilir ama şimdilik dinamik)
 */
function getSearchableText(p: Pathology): string {
    return [
        p.name,
        p.category,
        p.organ || "",
        p.etiology || "",
        p.clinicalPearl || "",
        p.goldStandard || "",
        ...(p.keyPoints || []),
        ...(p.differentialDiagnosis || []),
        // Findings object recursive search
        ...Object.values(p.findings.ct || {}),
        ...Object.values(p.findings.mri || {}),
        ...Object.values(p.findings.usg || {}),
        ...Object.values(p.findings.xray || {}),
        ...Object.values(p.findings.pet || {}),
        // Keys
        ...Object.keys(p.findings.ct || {}),
        ...Object.keys(p.findings.mri || {})
    ].join(" ").toLowerCase();
}

/**
 * Akıllı arama algoritması
 */
export function performSmartSearch(pathologies: Pathology[], query: string): Pathology[] {
    if (!query.trim()) return pathologies;

    const rawTokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);

    // Gelişmiş strateji:
    // Kullanıcının yazdığı HER kelime (veya eş anlamlısı) 
    // sonucun içinde geçmelidir (AND Logic).
    // Ancak her bir kelime için eş anlamlılar OR mantığıyla çalışır.
    // Örnek: "Parlak Kitle" -> (Parlak OR Hiperintens OR ...) AND (Kitle OR Tümör OR ...)

    return pathologies.filter(p => {
        const text = getSearchableText(p);

        return rawTokens.every(token => {
            // Bu token için olası tüm varyasyonları bul
            let possibleVariations = [token];

            // Sözlükten bak
            if (RADIOLOGY_SYNONYMS[token]) {
                possibleVariations = [...possibleVariations, ...RADIOLOGY_SYNONYMS[token]];
            }
            // Veya sözlükteki anahtarlardan biri bu token'ı içeriyor mu? (Tersine arama)
            /* 
               Kullanıcı "hiperintens" yazdıysa, sözlükteki "parlak" anahtarı bunu içeriyor.
               Ama biz "parlak"ı aramalı mıyız? Belki.
               Genelde spesifik teknik terim yazdıysa daha genel olanı aramak gürültü yaratabilir.
               Şimdilik tek yönlü (Halk dili -> Tıbbi) daha güvenli.
            */

            // Token metnin içinde geçiyor mu? (Varyasyonlardan EN AZ BİRİ)
            return possibleVariations.some(variation => text.includes(variation));
        });
    });
}
