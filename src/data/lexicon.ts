export type Modality = "USG" | "CT" | "MRI";

export interface FindingOption {
    id: string;
    label: string;
    category: "Eko/Dansite/Sinyal" | "Kontrastlanma" | "Şekil/Kenar" | "Diğer";
    weight: number; // 1 (Nonspecific) - 10 (Pathognomonic)
}

// --- USG (Ultrason) ---
export const USG_FINDINGS: FindingOption[] = [
    // Eko Yapısı
    { id: "usg_anechoic", label: "Anek,ik (Sıvı/Kistik)", category: "Eko/Dansite/Sinyal", weight: 5 },
    { id: "usg_hyperechoic", label: "Hiperekoik (Parlak)", category: "Eko/Dansite/Sinyal", weight: 3 },
    { id: "usg_hypoechoic", label: "Hipoekoik (Koyu)", category: "Eko/Dansite/Sinyal", weight: 3 },
    { id: "usg_isoechoic", label: "İzoekoik", category: "Eko/Dansite/Sinyal", weight: 2 },
    { id: "usg_posterior_enhancement", label: "Posterior Akustik Güçlenme", category: "Diğer", weight: 6 }, // Kist lehine
    { id: "usg_posterior_shadowing", label: "Posterior Akustik Gölgeleme", category: "Diğer", weight: 7 }, // Taş/Kalsifikasyon
    { id: "usg_doppler_vascular", label: "Doppler: Vaskülarite Artışı", category: "Diğer", weight: 5 },
    { id: "usg_liver_coarse", label: "Kaba Granüler Eko Yapısı", category: "Eko/Dansite/Sinyal", weight: 6 }, // Siroz/Hepatit
    { id: "usg_kidney_hydronephrosis", label: "Hidronefroz (Pelvikalisesiyel Genişleme)", category: "Şekil/Kenar", weight: 8 },
];

// --- CT (Bilgisayarlı Tomografi) ---
export const CT_FINDINGS: FindingOption[] = [
    // Dansite
    { id: "ct_hypodense", label: "Hipodens (Koyu)", category: "Eko/Dansite/Sinyal", weight: 3 },
    { id: "ct_hyperdense", label: "Hiperdens (Parlak/Kan/Kalsifik)", category: "Eko/Dansite/Sinyal", weight: 4 },
    { id: "ct_isodense", label: "İzodens", category: "Eko/Dansite/Sinyal", weight: 2 },
    { id: "ct_fat_density", label: "Yağ Dansitesi (- HU)", category: "Eko/Dansite/Sinyal", weight: 8 }, // Lipom vs
    { id: "ct_calcification", label: "Kalsifikasyon", category: "Eko/Dansite/Sinyal", weight: 7 },
    // Kontrast
    { id: "ct_enhance_none", label: "Kontrast Tutulumu Yok", category: "Kontrastlanma", weight: 4 },
    { id: "ct_enhance_ring", label: "Ring (Halka) Tarzı Tutulum", category: "Kontrastlanma", weight: 8 },
    { id: "ct_enhance_hetero", label: "Heterojen Tutulum", category: "Kontrastlanma", weight: 5 },
    { id: "ct_enhance_nodular", label: "Nodüler Tutulum", category: "Kontrastlanma", weight: 6 },
    { id: "ct_contrast_washout", label: "Washout (Geç Fazda Yıkanma)", category: "Kontrastlanma", weight: 9 }, // HCC
    // Akciğer
    { id: "ct_lung_ground_glass", label: "Buzlu Cam (Ground Glass)", category: "Eko/Dansite/Sinyal", weight: 6 },
    { id: "ct_lung_consolidation", label: "Konsolidasyon / Hava Bronkogramı", category: "Eko/Dansite/Sinyal", weight: 7 },
    { id: "ct_lung_nodule_spiculated", label: "Spiküle (Düzensiz) Nodül", category: "Şekil/Kenar", weight: 9 }, // Malignite
    { id: "ct_lung_emphysema", label: "Amfizem / Kist", category: "Eko/Dansite/Sinyal", weight: 6 },
    { id: "ct_pleural_effusion", label: "Plevral Efüzyon (Sıvı)", category: "Diğer", weight: 5 },
];

// --- MRI (Manyetik Rezonans) ---
export const MRI_FINDINGS: FindingOption[] = [
    // T1
    { id: "mri_t1_hypo", label: "T1: Hipointens (Koyu)", category: "Eko/Dansite/Sinyal", weight: 3 },
    { id: "mri_t1_hyper", label: "T1: Hiperintens (Parlak)", category: "Eko/Dansite/Sinyal", weight: 6 }, // Kan/Yağ/Melanin
    // T2/FLAIR
    { id: "mri_t2_hyper", label: "T2/FLAIR: Hiperintens (Ödem/Sıvı)", category: "Eko/Dansite/Sinyal", weight: 4 },
    { id: "mri_t2_hypo", label: "T2: Hipointens (Koyu)", category: "Eko/Dansite/Sinyal", weight: 6 }, // Kalsifikasyon/Kan ürünü
    // DWI (Difüzyon)
    { id: "mri_dwi_restrict", label: "DWI: Difüzyon Kısıtlılığı (Parlak)", category: "Eko/Dansite/Sinyal", weight: 9 }, // İskemi/Abse/Sellüler Tümör
    { id: "mri_dwi_normal", label: "DWI: Kısıtlama Yok", category: "Eko/Dansite/Sinyal", weight: 3 },
    // Kontrast
    { id: "mri_enhance_ring", label: "Kontrast: Ring (Halka) Şeklinde", category: "Kontrastlanma", weight: 8 },
    { id: "mri_enhance_dura_tail", label: "Kontrast: Dural Kuyruk İşareti", category: "Kontrastlanma", weight: 9 }, // Menenjiyom
    { id: "mri_enhance_leptomeningeal", label: "Kontrast: Leptomeningeal (Giral)", category: "Kontrastlanma", weight: 8 },
    // Diğer
    { id: "mri_edema_vasogenic", label: "Ödem: Vazojenik (Parmaksı)", category: "Diğer", weight: 7 },
    { id: "mri_swi_bloom", label: "SWI: Blooming (Kanama/Kalsifikasyon)", category: "Diğer", weight: 8 },
    { id: "mri_fat_intracellular", label: "İntrasellüler Yağ (OOP Sinyal Kaybı)", category: "Eko/Dansite/Sinyal", weight: 9 }, // Adenom/Yağlanma
    // Lokasyon / Patern (MRI)
    { id: "mri_loc_extra_axial", label: "Yerleşim: Ekstra-aksiyal (Beyin dışı)", category: "Diğer", weight: 8 },
    { id: "mri_loc_intra_axial", label: "Yerleşim: İntra-aksiyal (Beyin parankimi)", category: "Diğer", weight: 5 },
    { id: "mri_loc_periventricular", label: "Yerleşim: Periventriküler", category: "Diğer", weight: 7 }, // MS
    { id: "mri_loc_cpa", label: "Yerleşim: Serebellopontin Köşe (CPA)", category: "Diğer", weight: 9 }, // Vestibüler, Meningiom
    { id: "mri_sign_ice_cream", label: "İşaret: Dondurma Külahı (Ice Cream Cone)", category: "Şekil/Kenar", weight: 10 }, // Vestibüler Schwannom

    // --- Spine (Omurga) ---
    { id: "spine_disc_herniation", label: "Disk Herniasyonu (Fıtık)", category: "Şekil/Kenar", weight: 9 },
    { id: "spine_nerve_compression", label: "Sinir Kökü Basısı", category: "Diğer", weight: 8 },
    { id: "spine_canal_stenosis", label: "Spinal Kanal Darlığı (Stenoz)", category: "Şekil/Kenar", weight: 8 },
    { id: "spine_marrow_edema", label: "Kemik İliği Ödemi (T2 Hiper)", category: "Eko/Dansite/Sinyal", weight: 6 },
    { id: "spine_fracture_burst", label: "Kırık: Burst (Patlama) Tipi", category: "Şekil/Kenar", weight: 10 },
    { id: "spine_spondylolisthesis", label: "Spondilolistezis (Kayma)", category: "Şekil/Kenar", weight: 9 },
    { id: "spine_pars_defect", label: "Pars İnterartikülaris Defekti", category: "Diğer", weight: 9 },
    { id: "spine_modic_change", label: "Modic Değişikliği (Tip 1/2/3)", category: "Eko/Dansite/Sinyal", weight: 6 },

    // --- Liver (Karaciğer) ---
    { id: "ct_central_scar", label: "Santral Skar (FNH)", category: "Şekil/Kenar", weight: 9 },
    { id: "mri_capsule_appearance", label: "Kapsül Görünümü (HCC)", category: "Şekil/Kenar", weight: 8 },
    { id: "ct_target_sign", label: "Target (Hedef) İşareti", category: "Şekil/Kenar", weight: 7 }, // Metastaz/Apse
    { id: "usg_hydatid_sand", label: "Hidatik Kum / Kız Vezikül", category: "Diğer", weight: 10 }, // Kist Hidatik

    // --- Kidney (Böbrek) ---
    { id: "ct_bosniak_complex", label: "Kompleks Kist (Septum/Duvar)", category: "Şekil/Kenar", weight: 8 },
    { id: "ct_striated_nephrogram", label: "Striated (Çizgili) Nefrogram", category: "Kontrastlanma", weight: 9 }, // Piyelonefrit

    // --- Lung (Akciğer) ---
    { id: "ct_hamptons_hump", label: "Hampton's Hump (Üçgen Konsolidasyon)", category: "Şekil/Kenar", weight: 9 }, // PE
    { id: "ct_polo_mint_sign", label: "Polo Mint Sign (Damar İçi Defekt)", category: "Şekil/Kenar", weight: 10 }, // PE
    { id: "ct_crazy_paving", label: "Crazy Paving (Kaldırım Taşı)", category: "Diğer", weight: 7 }, // COVID/Proteinosis
    { id: "ct_cavitation", label: "Kavitasyon (Hava İçeren Boşluk)", category: "Eko/Dansite/Sinyal", weight: 8 }, // TB/Apse/Ca
