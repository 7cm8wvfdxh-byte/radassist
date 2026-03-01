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
    },
    {
        id: "pedi_head_circumference",
        label: "Baş Çevresi (Neonatal)",
        organ: "Pediatrik",
        normalValues: "Yenidoğan: 32-38 cm, 1 yaş: ~46 cm",
        pathologicalThreshold: "< 3. persentil (Mikrosefali), > 97. persentil (Makrosefali)",
        note: "WHO büyüme eğrileri referans alınmalıdır."
    },
    {
        id: "pedi_anterior_fontanel",
        label: "Anterior Fontanel",
        organ: "Pediatrik",
        normalValues: "< 2.5 cm x 2.5 cm, Kapanma: 9-18 ay",
        pathologicalThreshold: "> 4 cm (Artmış KİBAS, Hipotiroidi), Geç kapanma (Rikets, Hipotiroidizm)",
    },
    {
        id: "pedi_thymus",
        label: "Timus (Çocuk, PA Akciğer)",
        organ: "Pediatrik",
        normalValues: "Kardiyak siluet genişliğinden küçük. 'Yelken bulgusu' normal.",
        pathologicalThreshold: "Kardiyak silueti 2x aşan geniş timus (Timik kitle?)",
        note: "Stres/hastalıkta küçülür, sonra 'rebound hiperplazi' olabilir."
    },

    // --- KAS-İSKELET (MSK) ---
    {
        id: "msk_acromiohumeral",
        label: "Akromiohümeral Mesafe (Omuz)",
        organ: "Kas-İskelet (MSK)",
        normalValues: "7 - 14 mm",
        pathologicalThreshold: "< 7 mm (Rotator Kaf Yırtığı), < 5 mm (Tam kat yırtık kuvvetle)",
        note: "PA omuz grafisinde ölçülür. Supraspinatus spasmında artabilir."
    },
    {
        id: "msk_hip_joint_space",
        label: "Kalça Eklem Aralığı (Minimum)",
        organ: "Kas-İskelet (MSK)",
        normalValues: "≥ 3 - 4 mm",
        pathologicalThreshold: "< 2 mm (Ciddi OA), < 3 mm (Orta OA)",
        note: "En dar noktadan ölçülür. Süperior, süperomedial veya aksiyal daralma olabilir."
    },
    {
        id: "msk_knee_joint_space",
        label: "Diz Eklem Aralığı (Medial/Lateral)",
        organ: "Kas-İskelet (MSK)",
        normalValues: "≥ 3 mm (Her iki kompartman)",
        pathologicalThreshold: "< 3 mm (Ciddi OA), Asimetri > 2 mm",
        note: "Yük altında PA grafide ölçülür (standing AP)."
    },
    {
        id: "msk_achilles_tendon",
        label: "Aşil Tendonu Kalınlığı",
        organ: "Kas-İskelet (MSK)",
        normalValues: "4 - 7 mm (uzun aks, kalsaneusun 2cm proksimali)",
        pathologicalThreshold: "> 7-8 mm (Tendinopati), Fokal hipoekojenik alan (Parsiyel yırtık)",
        note: "USG'de anizotropi artefaktına dikkat edilmelidir."
    },
    {
        id: "msk_patellar_tendon",
        label: "Patellar Tendon Kalınlığı",
        organ: "Kas-İskelet (MSK)",
        normalValues: "3 - 6 mm",
        pathologicalThreshold: "> 7 mm + Hipoekojenik alan (Tendinit/Parsiyel yırtık)",
        note: "Patellar inferior polun hemen altından ölçülür."
    },
    {
        id: "msk_subacromial_bursa",
        label: "Subakromiyal Bursa Sıvısı (USG)",
        organ: "Kas-İskelet (MSK)",
        normalValues: "< 2 mm",
        pathologicalThreshold: "> 2 mm (Bursit), > 4 mm (Anlamlı bursit)",
        note: "Supraspinatus tendon üzerinde değerlendirilir."
    },
    {
        id: "msk_lumbar_disc_height",
        label: "Lomber İntervertebral Disk Yüksekliği",
        organ: "Kas-İskelet (MSK)",
        normalValues: "L1-L4: 9-12 mm, L4-L5: 10-12 mm, L5-S1: 8-10 mm",
        pathologicalThreshold: "< 6 mm (Anlamlı dejenerasyon), Komşu diske göre > 30% kayıp",
    },

    // --- KARDİYAK ---
    {
        id: "cardiac_lv_edd",
        label: "Sol Ventrikül End-Diyastolik Çap (LVEDD)",
        organ: "Kardiyak",
        normalValues: "Erkek: 42-58 mm, Kadın: 38-52 mm",
        pathologicalThreshold: "> 60 mm (Sol Ventrikül Dilatasyon)",
        note: "Ekokardiyografi M-mod veya 2D; parasternaldan ölçülür."
    },
    {
        id: "cardiac_lv_esd",
        label: "Sol Ventrikül End-Sistolik Çap (LVESD)",
        organ: "Kardiyak",
        normalValues: "Erkek: 25-40 mm, Kadın: 22-35 mm",
        pathologicalThreshold: "> 45 mm (Sistolik Disfonksiyon şüphesi)",
    },
    {
        id: "cardiac_lv_ef",
        label: "Sol Ventrikül Ejeksiyon Fraksiyonu (LVEF)",
        organ: "Kardiyak",
        normalValues: "≥ 55-65% (Normal)",
        pathologicalThreshold: "45-54% (Hafif↓), 30-44% (Orta↓), < 30% (Ciddi↓)",
        note: "Simpson biplaner yöntemi en güvenilirdir."
    },
    {
        id: "cardiac_aortic_root",
        label: "Aort Kökü Çapı (Ekokardiografi)",
        organ: "Kardiyak",
        normalValues: "20-37 mm (BSA ile düzeltilmeli, > 37 mm tek başına anlamlı değil)",
        pathologicalThreshold: "> 40 mm (Dilatasyon), > 45 mm (Operasyon endikasyonu ?)",
        note: "Sinus of Valsalva düzeyinde ölçülür. Marfan, bikuspid AV takibinde önemli."
    },
    {
        id: "cardiac_left_atrium",
        label: "Sol Atriyum Çapı (LA)",
        organ: "Kardiyak",
        normalValues: "< 40 mm (Parasternal uzun aks)",
        pathologicalThreshold: "40-44 mm (Hafif), 45-49 mm (Orta), ≥ 50 mm (Ciddi dilatasyon)",
        note: "Dilate LA — AF, Mitral kapak hastalığı, KKY düşündürür."
    },
    {
        id: "cardiac_rv",
        label: "Sağ Ventrikül Bazal Çap (RV)",
        organ: "Kardiyak",
        normalValues: "< 42 mm (Apikal 4-kavite görüntüde)",
        pathologicalThreshold: "> 42 mm (RV Dilatasyon — PE, Pulmoner HT)",
        note: "RV > LV: Sağ kalp yüklenmesi. PE için D-sign (İVS düzleşmesi) araştır."
    },

    // --- VASKÜLer EK ---
    {
        id: "carotid_imt",
        label: "Karotid İntima-Media Kalınlığı (IMT)",
        organ: "Vasküler",
        normalValues: "< 0.9 mm (50 yaş altı), < 1.0 mm (50+ yaş)",
        pathologicalThreshold: "> 1.0 mm (Artmış KVH riski), > 1.5 mm (Plak)",
        note: "CCA'nın 1 cm proksimalinden USG'de ölçülür."
    },
    {
        id: "ivc_diameter",
        label: "İnferior Vena Kava Çapı (IVC)",
        organ: "Vasküler",
        normalValues: "< 21 mm (Ekspirasyonda), > 50% kollaps inspirasyonda",
        pathologicalThreshold: "> 21 mm + < 50% kollaps (Sağ kalp yüklenmesi, KKY, PE)",
        note: "Hepatik ven girişinin 2 cm distalinden subkostal aksiyal USG ile ölçülür."
    },
    {
        id: "hepatic_vein_diameter",
        label: "Hepatik Ven Çapı",
        organ: "Vasküler",
        normalValues: "< 10 mm",
        pathologicalThreshold: "> 10 mm (Hepatik venöz konjesyon, Budd-Chiari?)",
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
    },
    {
        id: "evans_index",
        name: "Evans Index (Hidrosefali)",
        organ: "Brain",
        description: "Frontal boynuzların geniş çapının maksimum iç kranial çapa oranı — BT/MR'da ventriküler dilatasyon ölçer.",
    },
    {
        id: "de_ritis_ratio",
        name: "De Ritis Oranı (AST/ALT)",
        organ: "Liver",
        description: "AST/ALT oranı; alkolik hepatit (>2), akut viral hepatit (<1), siroz değerlendirmesi için kullanılır.",
    },
    {
        id: "meld_score",
        name: "MELD Skoru (Karaciğer)",
        organ: "Liver",
        description: "Model for End-stage Liver Disease — Karaciğer sirozu/yetmezliğinde 90 günlük mortalite riskini ve transplant önceliğini belirler.",
    },
    {
        id: "child_pugh",
        name: "Child-Pugh Skoru (Siroz)",
        organ: "Liver",
        description: "Siroz şiddetini ve operatif riski değerlendiren klinik sınıflandırma (A/B/C). Bilirubin, albümin, PT, asit, ensefalopati.",
    },
    {
        id: "aspects_score",
        name: "ASPECTS (İskemik İnme)",
        organ: "Brain",
        description: "Alberta Stroke Program Early CT Score — Akut iskemik inmede bazal ganglion + korteks 10 bölge değerlendirmesi. ≥6 trombektomi için uygun.",
    },
    {
        id: "wells_pe",
        name: "Wells Skoru (PE Olasılığı)",
        organ: "Pulmonary",
        description: "Pulmoner emboli klinik olasılığını belirler. Düşük (<2) / Orta (2-6) / Yüksek (>6) olarak sınıflandırır.",
    }
];
