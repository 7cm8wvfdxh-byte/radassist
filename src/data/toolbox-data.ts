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
    // --- BRAIN & SPINE ---
    {
        id: "ventricles",
        label: "Lateral Ventrikül Genişliği",
        organ: "Brain",
        normalValues: "< 10 mm (Atrium düzeyinde)",
        pathologicalThreshold: "> 10 mm (Ventrikülomegali)",
        note: "Yaşla birlikte hafif artış normaldir."
    },
    {
        id: "pituitary",
        label: "Hipofiz Yüksekliği",
        organ: "Brain",
        normalValues: "< 6 mm (Erkek/Postmenopoz), < 8 mm (Kadın), < 10 mm (Puberte/Laktasyon)",
        pathologicalThreshold: "> 10 mm (Makroadenom şüphesi)",
    },
    {
        id: "spinal_canal_cervical",
        label: "Servikal Spinal Kanal Çapı (Sagittal)",
        organ: "Spine",
        normalValues: "> 14 mm",
        pathologicalThreshold: "< 14 mm (Stenoz riski), < 10 mm (Kesin Stenoz)",
        note: "Torg-Pavlov oranı da kullanılabilir."
    },
    {
        id: "spinal_canal_lumbar",
        label: "Lomber Spinal Kanal Çapı (Sagittal)",
        organ: "Spine",
        normalValues: "> 15 mm",
        pathologicalThreshold: "< 12 mm (Rölatif Stenoz), < 10 mm (Absolute Stenoz)",
    },

    // --- ABDOMEN (LIVER/BILLIARY) ---
    {
        id: "cbd",
        label: "Koletok (Ana Safra Kanalı) Çapı",
        organ: "Abdomen",
        normalValues: "< 6 mm (Genç), Her dekadda +1 mm artabilir",
        pathologicalThreshold: "> 8-10 mm (Non-kolesistektomili)",
        note: "Kolesistektomi sonrası 10 mm'ye kadar normal kabul edilebilir."
    },
    {
        id: "liver_span",
        label: "Karaciğer Boyutu (Kraniokaudal)",
        organ: "Abdomen",
        normalValues: "< 15 cm (Midklaviküler hat)",
        pathologicalThreshold: "> 15.5 cm (Hepatomegali)",
    },
    {
        id: "spleen",
        label: "Dalak Boyutu",
        organ: "Abdomen",
        normalValues: "< 12-13 cm",
        pathologicalThreshold: "> 13 cm (Splenomegali)",
        note: "Splenik indeks (L x W x T) > 480 normal üst sınır."
    },
    {
        id: "pancreas_duct",
        label: "Pankreas Kanalı (Wirsung)",
        organ: "Abdomen",
        normalValues: "< 3 mm (Baş), < 2 mm (Gövde)",
        pathologicalThreshold: "> 3-4 mm (Dilatasyon)",
    },
    {
        id: "appendix",
        label: "Appendiks Çapı",
        organ: "Abdomen",
        normalValues: "< 6 mm",
        pathologicalThreshold: "> 6 mm + İnflamasyon bulguları (Apandisit)",
        note: "Sadece çap artışı tanı için yeterli değildir."
    },

    // --- KIDNEY ---
    {
        id: "kidney_size",
        label: "Böbrek Boyutu (Uzun Aks)",
        organ: "Kidney",
        normalValues: "9 - 12 cm",
        pathologicalThreshold: "< 9 cm (Atrofi/Kronik hastalık), > 13 cm (Ödem/Kitle/Tek böbrek)",
        note: "Sol böbrek sağdan genelde biraz büyüktür."
    },
    {
        id: "cortical_thickness",
        label: "Kortikal Kalınlık",
        organ: "Kidney",
        normalValues: "> 10 mm",
        pathologicalThreshold: "< 8-10 mm (Parankimal incelme)",
    },

    // --- VASCULAR ---
    {
        id: "aorta_abd",
        label: "Abdominal Aorta Çapı",
        organ: "Vascular",
        normalValues: "< 3 cm",
        pathologicalThreshold: "> 3 cm (Anevrizma), > 5 cm (Cerrahi sınır)",
    },
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
    }
];
