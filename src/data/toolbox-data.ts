export interface Measurement {
    id: string;
    label: string;
    organ: string;
    normalValues: string;
    pathologicalThreshold: string;
    note?: string;
    reference?: string;
}

export const RADIOLOGY_MEASUREMENTS: Measurement[] = [
    // --- BRAIN & NEURO ---
    {
        id: "ventricles",
        label: "Lateral Ventrikül Genişliği (Atrium)",
        organ: "Beyin (Nöro)",
        normalValues: "< 10 mm",
        pathologicalThreshold: "> 10 mm (Ventrikülomegali)",
        note: "Aksiyal planda, glomus choroideum düzeyinde ölçülür."
    },
    {
        id: "third_ventricle",
        label: "3. Ventrikül Genişliği",
        organ: "Beyin (Nöro)",
        normalValues: "< 5-7 mm (Yaşla artar)",
        pathologicalThreshold: "> 7-10 mm",
        note: "<40 yaş: <4mm, >60 yaş: <9mm kabul edilebilir."
    },
    {
        id: "pituitary_height",
        label: "Hipofiz Bezi Yüksekliği",
        organ: "Beyin (Nöro)",
        normalValues: "Erkek/Postmenopoz: < 8mm, Kadın: < 10mm, Laktasyon/Puberte: < 12mm",
        pathologicalThreshold: "Üst sınırın üzeri (Makroadenom/Hyperplazi)",
        note: "Koronal planda santralden ölçülür."
    },
    {
        id: "iac",
        label: "İnternal Akustik Kanal (IAC) Çapı",
        organ: "Beyin (Nöro)",
        normalValues: "< 8 mm (Yükseklik)",
        pathologicalThreshold: "> 8 mm veya Asimetri > 2 mm",
        note: "Genişleme Schwannoma için şüphelidir."
    },
    {
        id: "optic_nerve_sheath",
        label: "Optik Sinir Kılıfı Çapı",
        organ: "Beyin (Nöro)",
        normalValues: "< 5.5 - 6 mm (Bulbusun 3mm arkasından)",
        pathologicalThreshold: "> 6 mm (KİBAS göstergesi)",
        note: "IIH (Psödotümör) takibinde önemlidir."
    },
    {
        id: "cc_junction",
        label: "Kranioservikal Bileşke (Basion-Dens)",
        organ: "Beyin (Nöro)",
        normalValues: "< 12 mm",
        pathologicalThreshold: "> 12 mm (Atlanto-oksipital dislokasyon)",
        note: "Harris kuralı."
    },

    // --- HEAD & NECK ---
    {
        id: "thyroid_lobe",
        label: "Tiroid Lob Boyutları",
        organ: "Baş & Boyun",
        normalValues: "AP: 1-2 cm, TR: 1.5-2.5 cm, Uzunluk: 4-6 cm",
        pathologicalThreshold: "Volüm > 18-20 ml (Goatr)",
    },
    {
        id: "lymph_node_neck",
        label: "Servikal Lenf Nodu (Kısa Aks)",
        organ: "Baş & Boyun",
        normalValues: "Level I: < 15mm, Level II: < 12mm, Diğerleri: < 10mm",
        pathologicalThreshold: "Sınırın üzeri (LAP)",
        note: "Morfoloji (yağlı hilus kaybı, nekroz) boyuttan daha değerlidir."
    },
    {
        id: "retropharyngeal_space",
        label: "Retrofaringeal Mesafe (C2 Düzeyi)",
        organ: "Baş & Boyun",
        normalValues: "< 7 mm",
        pathologicalThreshold: "> 7 mm (Apse/Ödem)",
        note: "C6 düzeyinde < 22 mm olmalıdır."
    },

    // --- SPINE ---
    {
        id: "cervical_canal_sagittal",
        label: "Servikal Spinal Kanal (Sagittal Çap)",
        organ: "Omurga (Spine)",
        normalValues: "> 14 mm",
        pathologicalThreshold: "< 14 mm (Stenoz riski), < 10 mm (Kesin Stenoz)",
    },
    {
        id: "lumbar_canal_sagittal",
        label: "Lomber Spinal Kanal (Sagittal Çap)",
        organ: "Omurga (Spine)",
        normalValues: "> 15 mm",
        pathologicalThreshold: "< 12 mm (Relatif darlık), < 10 mm (Absolut darlık)",
    },
    {
        id: "ads_distance",
        label: "Atlanto-Dental Mesafe (ADI)",
        organ: "Omurga (Spine)",
        normalValues: "Erişkin: < 3 mm, Çocuk: < 5 mm",
        pathologicalThreshold: "Artış (Transvers ligaman rüptürü/instabilite)",
    },

    // --- THORAX (CHEST) ---
    {
        id: "aorta_ascending",
        label: "Çıkan Aorta Çapı",
        organ: "Toraks",
        normalValues: "< 3.5 - 3.8 cm (Yaşla artar)",
        pathologicalThreshold: "> 4 cm (Dilatasyon), > 5-5.5 cm (Anevrizma)",
        note: "Pulmoner arter bifurkasyonu düzeyinde ölçülür."
    },
    {
        id: "aorta_descending",
        label: "İnen Aorta Çapı",
        organ: "Toraks",
        normalValues: "< 3 cm",
        pathologicalThreshold: "> 3 cm (Dilatasyon)",
    },
    {
        id: "pulmonary_artery",
        label: "Ana Pulmoner Arter Çapı",
        organ: "Toraks",
        normalValues: "< 2.9 cm",
        pathologicalThreshold: "> 2.9 cm (Pulmoner Hipertansiyon?)",
        note: "Aorta çapından geniş olmamalıdır."
    },
    {
        id: "trachea_size",
        label: "Trakea Çapı (Koronal)",
        organ: "Toraks",
        normalValues: "10 - 25 mm (E), 10 - 21 mm (K)",
        pathologicalThreshold: "> 25 mm (Trakeomegali), < 10 mm (Stenoz)",
        note: "Saber-sheath trakea: Sagittal > Koronal x2"
    },
    {
        id: "heart_size_ctr",
        label: "Kardiyotorasik Oran (CTR)",
        organ: "Toraks",
        normalValues: "< 0.50 (Erişkin PA Akciğer)",
        pathologicalThreshold: "> 0.50 (Kardiyomegali)",
        note: "Ekspiryum veya supine çekimde yalancı pozitif olabilir."
    },
    {
        id: "lymph_node_mediastinal",
        label: "Mediastinal Lenf Nodu (Kısa Aks)",
        organ: "Toraks",
        normalValues: "< 10 mm",
        pathologicalThreshold: "> 10 mm (Subkarinal bölge için >12mm)",
    },

    // --- ABDOMEN (LIVER/BILLIARY) ---
    {
        id: "liver_span",
        label: "Karaciğer Boyutu (Kraniokaudal)",
        organ: "Abdomen",
        normalValues: "< 15 - 15.5 cm (Midklaviküler hat)",
        pathologicalThreshold: "> 16 cm (Hepatomegali)",
        note: "Riedel lobu varyasyonu yanıltabilir."
    },
    {
        id: "cbd",
        label: "Koletok (Ana Safra Kanalı)",
        organ: "Abdomen",
        normalValues: "< 6-7 mm (60 yaş altı)",
        pathologicalThreshold: "> 8 mm (Obstrüksiyon?)",
        note: "Kolesistektomi sonrası 10mm'ye kadar, 60 yaş üstü her dekadda +1mm normal."
    },
    {
        id: "gallbladder_wall",
        label: "Safra Kesesi Duvar Kalınlığı",
        organ: "Abdomen",
        normalValues: "< 3 mm",
        pathologicalThreshold: "> 3 mm (Kolesistit, Asit, Kalp Yetmezliği)",
        note: "Postprandial kontrakte kesede değerlendirilmez."
    },
    {
        id: "pancreas_duct_wirsung",
        label: "Pankreas Kanalı (Wirsung)",
        organ: "Abdomen",
        normalValues: "Baş: < 3.5 mm, Gövde: < 2.5 mm, Kuyruk: < 1.5 mm",
        pathologicalThreshold: "Genişleme (Tümör, Pankreatit?)",
    },
    {
        id: "spleen",
        label: "Dalak Boyutu",
        organ: "Abdomen",
        normalValues: "< 12-13 cm",
        pathologicalThreshold: "> 13 cm (Splenomegali)",
    },
    {
        id: "portal_vein",
        label: "Portal Ven Çapı",
        organ: "Abdomen",
        normalValues: "< 13 mm",
        pathologicalThreshold: "> 13 mm (Portal Hipertansiyon)",
    },
    {
        id: "adrenal_limb",
        label: "Adrenal Bez Kalınlığı (Limb)",
        organ: "Abdomen",
        normalValues: "< 10 mm",
        pathologicalThreshold: "> 10 mm (Hiperplazi/Nodül)",
    },
    {
        id: "appendix_diameter",
        label: "Appendiks Çapı",
        organ: "Abdomen",
        normalValues: "< 6 mm",
        pathologicalThreshold: "> 6-7 mm + İnflamasyon (Apandisit)",
        note: "Bası ile komprese olmuyorsa anlamlıdır."
    },
    {
        id: "abdominal_aorta",
        label: "Abdominal Aorta",
        organ: "Abdomen",
        normalValues: "< 3 cm",
        pathologicalThreshold: "> 3 cm (Anevrizma), > 5 cm (Cerrahi Risk)",
    },

    // --- KIDNEY / URINARY ---
    {
        id: "kidney_length",
        label: "Böbrek Uzunluğu",
        organ: "Üriner (Böbrek)",
        normalValues: "9 - 13 cm",
        pathologicalThreshold: "< 9 cm (Atrofi), > 13 cm veya >2cm asimetri (Ödem, Kitle)",
    },
    {
        id: "kidney_cortex",
        label: "Böbrek Kortikal Kalınlık",
        organ: "Üriner (Böbrek)",
        normalValues: "> 10 mm",
        pathologicalThreshold: "< 8-7 mm (Parankimal hastalık/KBY)",
    },
    {
        id: "ureter_diameter",
        label: "Üreter Çapı",
        organ: "Üriner (Böbrek)",
        normalValues: "< 3-4 mm (BT'de görülmemeli/ince)",
        pathologicalThreshold: "> 4 mm (Hidroureter)",
    },
    {
        id: "bladder_wall",
        label: "Mesane Duvar Kalınlığı",
        organ: "Üriner (Böbrek)",
        normalValues: "< 3 mm (Dolu), < 5 mm (Boş)",
        pathologicalThreshold: "Artış (Sistit, Tümör, Obstrüksiyon)",
    },

    // --- PELVIS (GYNE/PROSTATE) ---
    {
        id: "endometrium_premenopausal",
        label: "Endometrium (Premenopozal)",
        organ: "Pelvis",
        normalValues: "Proliferatif: 4-8mm, Sekretuar: 7-14mm",
        pathologicalThreshold: "> 16 mm (Hiperplazi/Ca?)",
    },
    {
        id: "endometrium_postmenopausal",
        label: "Endometrium (Postmenopozal)",
        organ: "Pelvis",
        normalValues: "< 5 mm (Kanamasız), < 4-5 mm (Kanamalı)",
        pathologicalThreshold: "> 5 mm (Biyopsi gerekir)",
        note: "Tamoxifen kullananlarda < 8mm kabul edilebilir."
    },
    {
        id: "ovary_volume",
        label: "Over Volümü",
        organ: "Pelvis",
        normalValues: "Premenopoz: < 20 ml (Genelde 6-10ml)",
        pathologicalThreshold: "Postmenopoz: > 8 ml veya 2x Asimetri",
        note: "PCOS Tanımı: > 10 ml volüm veya > 12 folikül."
    },
    {
        id: "prostate_volume_ref",
        label: "Prostat Volümü",
        organ: "Pelvis",
        normalValues: "< 25-30 ml",
        pathologicalThreshold: "> 30 ml (BPH)",
    },

    // --- PEDIATRIC ---
    {
        id: "pylorus",
        label: "Pilor Stenozu (USG)",
        organ: "Pediatrik",
        normalValues: "Duvar < 3mm, Kanal < 14mm",
        pathologicalThreshold: "Duvar > 3mm, Kanal > 14mm (HPS)",
        note: "Pi (π) Kuralı: 3.14 (Duvar >3, Kanal >14)"
    },
    {
        id: "appendix_pedi",
        label: "Pediatrik Appendiks",
        organ: "Pediatrik",
        normalValues: "< 6 mm, Kompresibl",
        pathologicalThreshold: "> 6 mm, Non-kompresibl, Çevre yağ doku ekojenitesi",
    }
];

export interface Calculator {
    id: string;
    name: string;
    organ: string;
    description: string;
}

export const RADIOLOGY_CALCULATORS: Calculator[] = [
    {
        id: "adrenal_washout",
        name: "Adrenal Washout Hesaplayıcı",
        organ: "Adrenal",
        description: "Adrenal kitlelerin adenom vs non-adenom ayrımı için BT dansite değerlerini kullanır.",
    },
    {
        id: "thyroid_volume",
        name: "Tiroid Volüm Hesaplayıcı",
        organ: "Thyroid",
        description: "Eliipsoid formülüne göre tiroid loblarının hacmini hesaplar.",
    },
    {
        id: "prostate_volume",
        name: "Prostat Volüm Hesaplayıcı",
        organ: "Prostate",
        description: "L x W x H x 0.52 formülü ile prostat hacmi.",
    },
    {
        id: "ich_score",
        name: "ICH Score (Beyin Kanaması)",
        organ: "Brain",
        description: " intraserebral hemorajide 30 günlük mortalite riskini tahmin eder. (Hemphill Score)",
    },
    {
        id: "ti_rads",
        name: "ACR TI-RADS (Tiroid Nodül)",
        organ: "Thyroid",
        description: "Tiroid nodüllerinin malignite riskini ve ince iğne aspirasyon (İİAB) gerekliliğini belirler.",
    },
    {
        id: "egfr_ckd_epi",
        name: "eGFR (Böbrek Fonksiyonu)",
        organ: "Kidney",
        description: "Kontrast madde güvenliği için CKD-EPI formülü ile glomerüler filtrasyon hızını hesaplar.",
    },
    {
        id: "nascet_stenosis",
        name: "NASCET (Karotis Darlığı)",
        organ: "Vascular",
        description: "Distal normal lümen ve darlık çapına göre stenoz yüzdesini hesaplar.",
    },
    {
        id: "recist",
        name: "RECIST 1.1 (Tümör Yanıtı)",
        organ: "Oncology",
        description: "Bazal ve takip ölçümlerine göre tümörün tedaviye yanıtını (CR, PR, SD, PD) belirler.",
    }
];
