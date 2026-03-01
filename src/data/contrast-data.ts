// ── KONTRAST MADDE REHBERİ ──────────────────────────────────────

export interface ContrastAgent {
    id: string;
    name: string;
    type: 'iodinated' | 'gadolinium' | 'ultrasound' | 'oral';
    category: string;
    examples: string[];
    indication: string;
    dosing: string;
    contraindications: string[];
    sideEffects: string[];
    notes?: string;
}

export interface ContrastReactionProtocol {
    severity: 'mild' | 'moderate' | 'severe';
    label: string;
    symptoms: string[];
    management: string[];
}

export interface PreMedicationProtocol {
    id: string;
    name: string;
    indication: string;
    regimen: string[];
    notes?: string;
}

export interface EGFRGuideline {
    range: string;
    risk: string;
    action: string;
    color: 'green' | 'yellow' | 'orange' | 'red';
}

export const CONTRAST_AGENTS: ContrastAgent[] = [
    // --- İYODLU KONTRAST (BT) ---
    {
        id: "ionic_hoca",
        name: "İyonik Yüksek Osmolar (HOCA)",
        type: "iodinated",
        category: "İyotlu Kontrast (BT)",
        examples: ["Diatrizoate (Urografin)", "Iothalamate"],
        indication: "Artık nadiren kullanılır. GI çalışmalar için oral (Gastrografin).",
        dosing: "Oral: %2-3 solüsyon, 500-1000 ml",
        contraindications: ["IV kullanımda yüksek reaksiyon riski", "Aspirasyon riski varsa kullanılmaz (pulmoner ödem)"],
        sideEffects: ["Yüksek reaksiyon oranı", "Nefrotoksisite", "Sıcaklık hissi (şiddetli)"],
        notes: "Gastrografin: Perforasyon şüphesinde baryum yerine tercih edilir. Ancak aspirasyon riski varsa kontrendike."
    },
    {
        id: "nonionic_loca",
        name: "Non-İyonik Düşük Osmolar (LOCA)",
        type: "iodinated",
        category: "İyotlu Kontrast (BT)",
        examples: ["Iohexol (Omnipaque)", "Iopamidol (Isovue)", "Ioversol (Optiray)", "Iopromide (Ultravist)"],
        indication: "Standart IV BT kontrast. En sık kullanılan tip.",
        dosing: "IV: 1-2 ml/kg (genellikle 80-150 ml, 300-370 mgI/ml). Enjeksiyon hızı: 2-5 ml/sn.",
        contraindications: ["Alerji öyküsü (premedikasyon ile)", "Ciddi renal yetmezlik (eGFR <30)", "Metformin (eGFR <30 ise kesilmeli)"],
        sideEffects: ["Hafif sıcaklık hissi", "Metalik tat", "Bulantı", "Nadir: anafilaktoid reaksiyon"],
        notes: "Standard of care. ISO-osmolar (IOCA) alternatiften anlamlı üstünlüğü kanıtlanmamıştır."
    },
    {
        id: "nonionic_ioca",
        name: "Non-İyonik İzo-Osmolar (IOCA)",
        type: "iodinated",
        category: "İyotlu Kontrast (BT)",
        examples: ["Iodixanol (Visipaque)"],
        indication: "Yüksek riskli hastalarda (renal yetmezlik, DM) tercih edilebilir.",
        dosing: "IV: 1-2 ml/kg (genellikle 80-150 ml, 270-320 mgI/ml).",
        contraindications: ["Alerji öyküsü (premedikasyon ile)", "Ciddi renal yetmezlik"],
        sideEffects: ["LOCA'ya benzer, teorik olarak daha düşük renal toksisite"],
        notes: "İntraarteriyel kullanımda nefrotoksisite avantajı gösterilmiş. IV kullanımda LOCA ile eşdeğer."
    },

    // --- GADOLİNYUM (MR) ---
    {
        id: "gd_extracellular",
        name: "Ekstraselüler Gadolinyum (Genel)",
        type: "gadolinium",
        category: "Gadolinyum Kontrast (MR)",
        examples: ["Gadoterate (Dotarem) — Makrosiklik", "Gadobutrol (Gadovist) — Makrosiklik", "Gadoteridol (ProHance) — Makrosiklik"],
        indication: "Standart MR kontrastlı çalışmalar. Beyin, Abdomen, MSK, Anjio.",
        dosing: "0.1 mmol/kg (genellikle 10-20 ml). Gadobutrol 1.0 M (yarı hacim yeterli).",
        contraindications: ["Şiddetli renal yetmezlik (eGFR <30) → NSF riski", "Gebelik (göreceli — yarar/risk)"],
        sideEffects: ["Baş ağrısı", "Bulantı", "Nadir: NSF (lineer ajanlarda)"],
        notes: "Makrosiklik ajanlar (Dotarem, Gadovist, ProHance) NSF riski açısından en güvenli. EMA lineer IV ajanları yasakladı."
    },
    {
        id: "gd_hepatospecific",
        name: "Hepatospesifik Gadolinyum",
        type: "gadolinium",
        category: "Gadolinyum Kontrast (MR)",
        examples: ["Gd-EOB-DTPA (Primovist/Eovist)", "Gd-BOPTA (MultiHance)"],
        indication: "Karaciğer MR: HCC tarama, FNH vs adenom, metastaz arama.",
        dosing: "Primovist: 0.025 mmol/kg (1/4 standart doz). MultiHance: 0.05 mmol/kg.",
        contraindications: ["Şiddetli renal yetmezlik (eGFR <30)"],
        sideEffects: ["Geçici dispne (Primovist, %1-2)", "Bulantı"],
        notes: "Hepatobilyer faz: Primovist 20dk, MultiHance 60-120dk. Normal hepatositler kontrast alır (parlak), tümörler almaz (karanlık)."
    },
    {
        id: "gd_blood_pool",
        name: "Kan Havuzu Gadolinyum",
        type: "gadolinium",
        category: "Gadolinyum Kontrast (MR)",
        examples: ["Gadofosveset (Ablavar/Vasovist) — Piyasadan çekildi"],
        indication: "MR Anjiyografi (uzun süreli vasküler kontrastlanma).",
        dosing: "0.03 mmol/kg",
        contraindications: ["Şiddetli renal yetmezlik"],
        sideEffects: ["Parestezi", "Baş ağrısı"],
        notes: "Albumine bağlanarak uzun intravaskülier kalır. Artık piyasada yok, ekstraselüler ajanlarla MRA yapılır."
    },

    // --- USG KONTRAST ---
    {
        id: "us_contrast",
        name: "USG Kontrast (Mikrokabarcık)",
        type: "ultrasound",
        category: "USG Kontrast (CEUS)",
        examples: ["SonoVue/Lumason (Sülfür Hekzaflorid)", "Definity (Perflutren)", "Sonazoid (Perfluorobutan)"],
        indication: "Karaciğer lezyonu karakterizasyonu, CEUS, Vezikoüreteral reflü (VUR).",
        dosing: "SonoVue: 2.4 ml IV bolus. Sonazoid: 0.015 ml/kg.",
        contraindications: ["Sağ-sol kardiyak şant", "Ciddi pulmoner HT", "Kontrol edilmemiş HT"],
        sideEffects: ["Baş ağrısı", "Sıcaklık hissi", "Nadir: anafilaksi (<0.01%)"],
        notes: "Nefrotoksik DEĞİL (renal yetmezlikte güvenli). İyot/Gd alerjisinde alternatif. Sonazoid: Kupffer fazı → FNH vs HCC."
    },

    // --- ORAL KONTRAST ---
    {
        id: "oral_barium",
        name: "Baryum Sülfat (Oral/Rektal)",
        type: "oral",
        category: "Oral Kontrast",
        examples: ["Baryum sülfat süspansiyonu (E-Z-Cat, Readi-Cat)"],
        indication: "Özofagografi, Üst GI serisi, İnce barsak pasajı, Baryumlu kolon grafisi.",
        dosing: "Oral: 450-600 ml (düşük dansiteli BT için), 250 ml (yüksek dansiteli fluoro için).",
        contraindications: ["Perforasyon şüphesi (peritonit riski)", "Yüksek aspirasyon riski (pulmoner ödem)"],
        sideEffects: ["Konstipasyon", "Baryum impaksiyonu (nadir)", "Perforasyon → baryum peritonit (ölümcül)"],
        notes: "Perforasyon şüphesinde: Gastrografin kullanılır. Ancak aspirasyon riski varsa hiçbiri kullanılmaz."
    }
];

export const CONTRAST_REACTIONS: ContrastReactionProtocol[] = [
    {
        severity: "mild",
        label: "Hafif Reaksiyon",
        symptoms: [
            "Ürtiker (sınırlı, birkaç lezyon)",
            "Kaşıntı",
            "Bulantı / kusma (hafif)",
            "Sıcaklık hissi",
            "Baş ağrısı",
            "Hapşırık / nazal konjesyon"
        ],
        management: [
            "Gözlem (genellikle self-limited, 15-30 dk)",
            "Diphenhydramine 25-50 mg IV/PO (semptomatik)",
            "Hasta izleme: en az 30 dakika"
        ]
    },
    {
        severity: "moderate",
        label: "Orta Reaksiyon",
        symptoms: [
            "Yaygın ürtiker",
            "Yüz/boyun ödemi (anjiyoödem)",
            "Bronkospazm (wheezing)",
            "Taşikardi",
            "Hipotansiyon (hafif-orta, sistolik >90)",
            "Şiddetli kusma"
        ],
        management: [
            "Oksijen (6-10 L/dk, maske)",
            "Epinefrin (IM) 0.3 mg (1:1000) — bronkospazm varsa",
            "Diphenhydramine 50 mg IV",
            "Salbutamol nebül (bronkospazm için)",
            "IV sıvı (Normal Salin 500-1000 ml bolus)",
            "Acil müdahale ekibini bilgilendir"
        ]
    },
    {
        severity: "severe",
        label: "Ciddi Reaksiyon (Anafilaksi)",
        symptoms: [
            "Ciddi hipotansiyon (sistolik <90 mmHg)",
            "Laringeal ödem (stridor, ses kısıklığı)",
            "Ciddi bronkospazm (solunum sıkıntısı)",
            "Kardiyak arrest",
            "Bilinç kaybı / konfüzyon",
            "Siyanoz"
        ],
        management: [
            "ACİL: Epinefrin 0.3-0.5 mg IM (uyluk lateral) — 5 dk'da tekrar edilebilir",
            "Havayolu güvenliği → entübasyon hazırlığı",
            "Oksijen (15 L/dk, non-rebreather maske)",
            "IV erişim → Normal Salin 1-2 L hızlı infüzyon",
            "Diphenhydramine 50 mg IV + Ranitidin 50 mg IV",
            "Metilprednizolon 125 mg IV",
            "Kardiyak arrest → CPR + ACLS protokolü",
            "ACİL servise transfer"
        ]
    }
];

export const PREMEDICATION_PROTOCOLS: PreMedicationProtocol[] = [
    {
        id: "elective_13h",
        name: "Elektif Premedikasyon (13 Saat Protokolü)",
        indication: "Planlı kontrastlı BT/MR, önceki kontrast reaksiyon öyküsü olan hasta.",
        regimen: [
            "Prednisone 50 mg PO — Çekimden 13 saat önce",
            "Prednisone 50 mg PO — Çekimden 7 saat önce",
            "Prednisone 50 mg PO + Diphenhydramine 50 mg PO/IV — Çekimden 1 saat önce"
        ],
        notes: "ACR önerisi. Metilprednizolon 32 mg alternatif (12 + 2 saat önce)."
    },
    {
        id: "emergency_5h",
        name: "Acil Premedikasyon (5 Saat Protokolü)",
        indication: "Acil kontrastlı çekim gereken, kontrast alerjisi öyküsü olan hasta.",
        regimen: [
            "Metilprednizolon 40 mg IV — Hemen",
            "Metilprednizolon 40 mg IV — Çekimden 4 saat önce",
            "Diphenhydramine 50 mg IV — Çekimden 1 saat önce"
        ],
        notes: "5 saatlik protokol ideal olmayan koşullarda kullanılır. Daha kısa sürede etkinliği kanıtlanmamıştır."
    },
    {
        id: "breakthrough_reaction",
        name: "Breakthrough Reaksiyon Protokolü",
        indication: "Premedikasyona rağmen reaksiyon gelişen hasta (tekrar çekim gerektiğinde).",
        regimen: [
            "Farklı kontrast ajanı kullan (marka değiştir)",
            "Standart 13 saat premedikasyon uygula",
            "Epinefrin hazır bulundur",
            "Radyoloji uzmanı gözetiminde enjeksiyon"
        ],
        notes: "Ciddi anafilaksi öyküsü → kontrast verilmesi gerçekten gerekli mi tekrar değerlendir."
    }
];

export const EGFR_GUIDELINES: EGFRGuideline[] = [
    {
        range: "≥ 60 ml/min",
        risk: "Düşük Risk",
        action: "Standart IV kontrast güvenle verilebilir. Ek önlem gerekmez.",
        color: "green"
    },
    {
        range: "45 - 59 ml/min",
        risk: "Hafif Risk",
        action: "IV kontrast verilebilir. Hidrasyon önerilir (NaCl %0.9, 1ml/kg/saat, 6-12 saat).",
        color: "yellow"
    },
    {
        range: "30 - 44 ml/min",
        risk: "Orta Risk",
        action: "IV kontrast dikkatli. Hidrasyon zorunlu. Minimum kontrast dozu. Nefroloji konsültasyonu değerlendir.",
        color: "orange"
    },
    {
        range: "< 30 ml/min",
        risk: "Yüksek Risk (CIN/PC-AKI)",
        action: "IV kontrast mümkünse kaçınılmalı. Alternatif: Kontrastsız MR, USG, CEUS. Zorunluysa: hidrasyon + minimum doz + nefroloji.",
        color: "red"
    }
];

export const METFORMIN_RULES = {
    title: "Metformin ve İyotlu Kontrast Kuralları",
    rules: [
        { egfr: "≥ 30 ml/min", action: "Metformin kesilmesine GEREK YOK. Standart kontrast verilebilir.", severity: "safe" as const },
        { egfr: "< 30 ml/min veya AKI", action: "Metformin KESİLMELİ. Kontrast sonrası 48 saat metformin verilmez. eGFR kontrolü sonrası başlanır.", severity: "danger" as const },
        { egfr: "Acil durum", action: "Kontrast verilir, metformin kesilir, 48 saat sonra eGFR kontrolü.", severity: "warning" as const }
    ],
    note: "ACR 2023 güncellemesi: eGFR ≥30 olan hastalarda metformin kesilmesine gerek yoktur."
};

export const NSF_INFO = {
    title: "Nefrojenik Sistemik Fibrozis (NSF)",
    description: "Gadolinyum bazlı kontrast ajanların (GBCA) ciddi renal yetmezlikli hastalarda nadir görülen, deri ve organlarda fibrozise yol açan komplikasyonu.",
    riskFactors: [
        "eGFR < 30 ml/min (özellikle diyaliz hastaları)",
        "Akut Böbrek Yetmezliği (AKI)",
        "Lineer gadolinyum ajanları (yüksek risk)",
        "Yüksek doz gadolinyum",
        "Pro-inflamatuar durum"
    ],
    agentRiskGroups: [
        { group: "Yüksek Risk (Kontraindike eGFR<30)", agents: ["Gadodiamide (Omniscan)", "Gadopentetate (Magnevist)", "Gadoversetamide (OptiMARK)"], color: "red" as const },
        { group: "Orta Risk (Dikkatli kullanım)", agents: ["Gadobenate (MultiHance)", "Gadofosveset (Ablavar)", "Gadoxetate (Primovist/Eovist)"], color: "yellow" as const },
        { group: "Düşük Risk (Güvenli)", agents: ["Gadoterate (Dotarem)", "Gadobutrol (Gadovist)", "Gadoteridol (ProHance)"], color: "green" as const }
    ],
    prevention: "Makrosiklik ajanlar tercih edilmelidir. eGFR <30 ise gadolinyum verilmemeli veya düşük riskli ajan minimum dozda kullanılmalı."
};
