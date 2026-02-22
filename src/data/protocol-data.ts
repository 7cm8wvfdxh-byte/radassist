export interface ProtocolStep {
    step: string;
    detail: string;
}

export interface ImagingProtocol {
    id: string;
    name: string;
    organ: string;
    modality: string;
    indication: string;
    patientPrep: string[];
    steps: ProtocolStep[];
    contrastInfo?: string;
    notes?: string;
}

export const IMAGING_PROTOCOLS: ImagingProtocol[] = [

    // ═══════════════════════════════════════════════
    // BEYİN / KRANİAL
    // ═══════════════════════════════════════════════
    {
        id: "brain_mri_routine",
        name: "Kranial MR (Rutin)",
        organ: "Beyin",
        modality: "MR",
        indication: "Baş ağrısı, nörolojik semptom, demans, epilepsi değerlendirmesi.",
        patientPrep: [
            "Metal implant/pacemaker sorgulanmalı.",
            "Klostrofobi değerlendirmesi yapılmalı.",
            "Aksesuar/takı çıkartılmalı."
        ],
        steps: [
            { step: "Sagital T1 (FLAIR)", detail: "Slab: Tüm beyin. FOV: 220mm, slice: 5mm." },
            { step: "Aksiyal T2 TSE", detail: "FOV: 220mm, slice: 5mm, tüm beyin." },
            { step: "Aksiyal FLAIR", detail: "BOS suppress, ödem ve demiyelinizasyon için temel seri." },
            { step: "Aksiyal DWI (b=0,1000)", detail: "Difüzyon kısıtlılığı araştırması (akut inme, apse)." },
            { step: "Koronal T2 (Hipokampus)", detail: "Epilepsi olgularında hipokampus volumetrisi için yatık oblique." },
            { step: "3D T1 MPRAGE/BRAVO (İsteğe Bağlı)", detail: "Kitle veya metastaz şüphesinde IVKM öncesi." }
        ],
        contrastInfo: "Rutin çekimde kontrast gerekmez. Kitle/infeksiyon şüphesinde 0.1 mmol/kg Gadolinyum IV uygulanır.",
        notes: "Akut inme protokolünde DWI + ADC + MRA serisi eklenir."
    },
    {
        id: "brain_stroke_mri",
        name: "Akut İnme MR Protokolü",
        organ: "Beyin",
        modality: "MR",
        indication: "Akut nörolojik defisit (< 24 saat), inme şüphesi.",
        patientPrep: [
            "Acil protokol — hasta hazırlığı minimuma indirilmeli.",
            "IV damar yolu açık olmalı.",
            "Vital bulgular monitörize edilmeli."
        ],
        steps: [
            { step: "DWI (b=0, 500, 1000)", detail: "İlk seri. Akut iskemi teyidi için kritik." },
            { step: "ADC Harita", detail: "DWI ile eş zamanlı oluşturulur." },
            { step: "Aksiyal FLAIR", detail: "DWI-FLAIR uyumsuzluğu → son 4.5 saat içi inme." },
            { step: "Aksiyal T2*GRE veya SWI", detail: "Hemorajik transformasyon / mikrokanama değerlendirmesi." },
            { step: "MR Anjiyografi (TOF-MRA)", detail: "Büyük damar oklüzyonu (LVO) araştırması. Kontrastsız." },
            { step: "Perfüzyon MR (DSC-PWI)", detail: "İskemik penumbra belirlenmesi için (mümkünse)." }
        ],
        contrastInfo: "MRA genellikle kontrastsız (TOF) yapılır. Venöz tromboz şüphesinde MRV için gadolinyum verilebilir.",
        notes: "Trombolitik tedavi sınırı: semptom başlangıcından itibaren 4.5 saat. Hız önceliklidir."
    },
    {
        id: "brain_ct_noncontrast",
        name: "Non-kontrast Kranial BT",
        organ: "Beyin",
        modality: "BT",
        indication: "Akut başağrısı, travma, kanama şüphesi, kontraendikasyon (pacemaker vb.).",
        patientPrep: [
            "Takı / aksesuar çıkartılmalı.",
            "Hastaların hareketsiz kalması sağlanmalı."
        ],
        steps: [
            { step: "Aksiyal Non-kontrast BT", detail: "OM hattına paralel, 5mm kesitler. Tüm beyin." },
            { step: "Kemik Penceresi Reformat", detail: "Kranial taban ve konveksite kemik patolojileri." },
            { step: "Beyin Penceresi", detail: "WW:80 WL:40 — Kanama/ödem değerlendirmesi." },
            { step: "Subdural Pencere", detail: "WW:130-200 WL:50-75 — İnce SDH tespiti için." }
        ],
        notes: "Subaraknoid kanama şüphesinde BT ardından LP (lumbar ponksiyon) planlanabilir. BT normal çıksa da 6 saat içindeki SAK %2-5 gözden kaçabilir."
    },

    // ═══════════════════════════════════════════════
    // KARACİĞER / ABDOMEN
    // ═══════════════════════════════════════════════
    {
        id: "liver_ct_triphasic",
        name: "Karaciğer Trifazik BT",
        organ: "Karaciğer",
        modality: "BT",
        indication: "HCC şüphesi, karaciğer kitlesi karakterizasyonu, siroz taraması.",
        patientPrep: [
            "En az 4 saat açlık.",
            "Serum kreatinin ve eGFR değerlendirilmeli (kontrast güvenliği).",
            "IV damar yolu (18G veya üzeri)."
        ],
        steps: [
            { step: "Non-kontrast Faz", detail: "Abdomen taraması. Hiperdens lezyon, kalsifikasyon, yağ değerlendirmesi." },
            { step: "Arteryel Faz (25–35 sn)", detail: "Kontrast enjeksiyonu sonrası 25-35. saniye. Hipervasküler lezyon tespiti (HCC, NET)." },
            { step: "Portal Venöz Faz (60–70 sn)", detail: "60-70. saniye. Parankimal kontrast doruk noktası. Hipovaskular metastazlar bu fazda belirginleşir." },
            { step: "Geç / Denge Fazı (180 sn)", detail: "3. dakika. Washout teyidi, hemanjiyom dolumu, safra yolları." }
        ],
        contrastInfo: "İyotlu IV kontrast: 1.5–2 ml/kg (max 150 ml), 3–4 ml/sn hızla. Premedikasyon: Kontrast allerjisi öyküsünde steroid + antihistaminik.",
        notes: "LI-RADS kriterleri için arteryel ve portal venöz faz zorunludur. Yağlı karaciğer değerlendirmesi için ek out-of-phase seri eklenebilir."
    },
    {
        id: "liver_mri_hepatobiliary",
        name: "Karaciğer MR (Hepatobiliyer Faz)",
        organ: "Karaciğer",
        modality: "MR",
        indication: "Karaciğer kitlesi karakterizasyonu, hepatobiliyer spesifik kontrast madde ile.",
        patientPrep: [
            "6 saat açlık (Primovist/Eovist için).",
            "IV damar yolu.",
            "eGFR > 30 ml/min (gadolinyum için)."
        ],
        steps: [
            { step: "Aksiyal T1 In-phase / Out-of-phase", detail: "Yağlı değişim / yağlı infiltrasyon tespiti." },
            { step: "Aksiyal T2 HASTE", detail: "Kistik-solid ayrımı, sıvı değerlendirmesi." },
            { step: "Aksiyal T2 TSE (Yüksek çözünürlüklü)", detail: "Detaylı lezyon morfolojisi." },
            { step: "DWI (b=0, 50, 500, 800)", detail: "Difüzyon kısıtlılığı → malignite şüphesi." },
            { step: "Dinamik kontrastlı 3D T1 GRE", detail: "Arteryel, portal, denge ve geçiş fazları." },
            { step: "Hepatobiliyer Faz (20. dakika)", detail: "Primovist/Eovist sonrası. HCC: hipointens, FNH: izointens/hiperintens." }
        ],
        contrastInfo: "Gadoxetate disodium (Primovist): 0.025 mmol/kg IV. Yavaş enjeksiyon önerilir (arteryel faz artefaktını azaltmak için).",
        notes: "FNH vs adenom ayrımında hepatobiliyer faz kritik öneme sahiptir."
    },

    // ═══════════════════════════════════════════════
    // PROSTAT
    // ═══════════════════════════════════════════════
    {
        id: "prostate_mpmri",
        name: "Prostat mpMR (Multiparametrik)",
        organ: "Prostat",
        modality: "MR",
        indication: "PSA yüksekliği, prostat kanseri şüphesi, biyopsi öncesi planlama, aktif izlem.",
        patientPrep: [
            "Çekim öncesi 1–2 gün yüksek posalı diyet kısıtlaması (barsak gazını azaltmak için).",
            "Çekim günü sabah lavman önerilir (isteğe bağlı).",
            "Son 6–8 haftada biyopsi yapılmışsa kontrendike (artefakt).",
            "Endorektal koil için mümkünse 3T kullanılmalı."
        ],
        steps: [
            { step: "Sagital T2 TSE (Localizer)", detail: "Prostat sınırlarını belirler." },
            { step: "Aksiyal T2 TSE (Yüksek çözünürlük)", detail: "Periferik zon, santral zon, kapsül değerlendirmesi. FOV: 180–200mm, slice: 3mm." },
            { step: "Koronal T2 TSE", detail: "Seminal vezikül ve kapsüler yayılım." },
            { step: "DWI (b=50, 400, 800, 1400–2000)", detail: "High-b DWI kanserde kısıtlılık gösterir. ADC haritası zorunlu." },
            { step: "DCE (Dinamik Kontrastlı)", detail: "Temporal rezolüsyon: < 15 sn. Erken kontrastlanma kinetikleri." }
        ],
        contrastInfo: "0.1 mmol/kg Gadolinyum IV, 3 ml/sn bolüs. DCE için kritik zamanlama gerekir.",
        notes: "PI-RADS v2.1 skoru: Periferik zon → DWI dominant. Transizyonel zon → T2 dominant."
    },

    // ═══════════════════════════════════════════════
    // MEME
    // ═══════════════════════════════════════════════
    {
        id: "breast_mri_screening",
        name: "Meme MR (Tarama / Tanı)",
        organ: "Meme",
        modality: "MR",
        indication: "Yüksek riskli tarama (BRCA), kemoterapi yanıt izlemi, mammografi belirsizliği.",
        patientPrep: [
            "Premenopozal kadınlarda menstrüasyon siklusunun 7–14. günü tercih edilmeli.",
            "Meme MR koili ile prone pozisyon.",
            "Takı / protez sorgulama.",
            "eGFR değerlendirmesi."
        ],
        steps: [
            { step: "Aksiyal T2 STIR (Bilateral)", detail: "Ödem, kist, fibroglandüler doku değerlendirmesi." },
            { step: "Pre-kontrast T1 Yağ Baskılı 3D GRE", detail: "Bazal değer." },
            { step: "Dinamik Kontrastlı T1 3D GRE (x5–6 faz)", detail: "Her faz 60–90 sn. Erken ve geç kontrastlanma kinetikleri." },
            { step: "Subtraksiyon Görüntüleri", detail: "Pre-kontrast çıkarılır → gerçek enhancement belirlenir." },
            { step: "MIP Reformat", detail: "3D damarlanma haritası." },
            { step: "DWI (isteğe bağlı)", detail: "Malignite kısıtlılığı değerlendirmesi." }
        ],
        contrastInfo: "0.1 mmol/kg Gadolinyum IV, 2 ml/sn.",
        notes: "BI-RADS MRG sınıflaması kullanılır. Benign kinetik: yavaş artış + plateau. Şüpheli kinetik: hızlı artış + wash-out."
    },

    // ═══════════════════════════════════════════════
    // AKCIĞER / TORAKS
    // ═══════════════════════════════════════════════
    {
        id: "chest_ct_hrct",
        name: "Toraks BT (HRCT)",
        organ: "Akciğer",
        modality: "BT",
        indication: "İnterstisyel akciğer hastalığı, bronşektazi, amfizem değerlendirmesi.",
        patientPrep: [
            "Hasta inspiryum kapasitesinde nefes tutabilmeli.",
            "Kontrastsız protokol — açlık gerekmez.",
            "Çekim sırasında nefes tutma talimatı verilmeli."
        ],
        steps: [
            { step: "Aksiyal HRCT (1mm kesit)", detail: "İnspiryumda tam akciğer taraması. Kernel: B70/Sharp." },
            { step: "Ekspiryum Serisi", detail: "Hava hapsi (air trapping) değerlendirmesi. Obliteratif bronşiyolit, hipersensitivite pnömonisi." },
            { step: "Koronal MPR (1–2mm)", detail: "Dağılım paterni belirlenmesi (bazilar, apikal, difüz)." },
            { step: "Sagital MPR", detail: "Anterior-posterior gradient değerlendirmesi." }
        ],
        notes: "Doz azaltma için LDCT (düşük doz BT) protokolü tercih edilmelidir. UIP paterni: Balık ağı, traksiyon bronşektazi, bal peteği."
    },
    {
        id: "pulmonary_angiography_ct",
        name: "Pulmoner BT Anjiyografi (BTPA)",
        organ: "Akciğer",
        modality: "BT",
        indication: "Pulmoner emboli şüphesi.",
        patientPrep: [
            "eGFR değerlendirilmeli.",
            "IV damar yolu (antekubital, 18G).",
            "Hasta nefes tutma talimatı almalı."
        ],
        steps: [
            { step: "Scout (Topogram)", detail: "Aralık belirleme: Karina üstü → diyafram altı." },
            { step: "Bolus Tracking", detail: "Ana pulmoner arterde (sağ kalp çıkışı) HU eşiği: 100–120 HU → otomatik tetik." },
            { step: "Aksiyal BTPA (1–1.25mm kesit)", detail: "İnspiryumda nefes tutturul. Kraniyokaudal yön." },
            { step: "MPR Koronal / Sagital", detail: "Segmental / subsegmental PE değerlendirmesi." },
            { step: "MIP (Maksimum İntensite Projeksiyon)", detail: "Vasküler dolum defekti görselleştirme." }
        ],
        contrastInfo: "350–370 mgI/ml iyotlu kontrast: 80–100 ml, 4–5 ml/sn. Salin flash: 30–40 ml.",
        notes: "Sağ kalp yüklenme bulguları: RV/LV oranı > 1 kötü prognoz. Aynı seansta alt ekstremite venöz BT (DVT) eklenebilir."
    },

    // ═══════════════════════════════════════════════
    // KORONER / KARDİYAK
    // ═══════════════════════════════════════════════
    {
        id: "coronary_cta",
        name: "Koroner BT Anjiyografi (KBTA)",
        organ: "Koroner Arterler",
        modality: "BT",
        indication: "Göğüs ağrısı, orta riskli koroner arter hastalığı değerlendirmesi, CAD-RADS skorlaması.",
        patientPrep: [
            "4–6 saat açlık.",
            "Kalp hızı kontrolü: Hedef < 60–65 atım/dk. Gerekirse Metoprolol 50–100 mg PO (prosedür öncesi 1 saat).",
            "Nitrat (Isosorbid dinitrat 5 mg SL) çekim öncesi 5 dk: Koroner dilatasyon için.",
            "Kafein içeren içecekler 12 saat önceden kesilmeli.",
            "IV damar yolu (antekubital, 18G veya üzeri)."
        ],
        steps: [
            { step: "Kalsiyum Skor (Agatston)", detail: "Kontrastsız, prospektif. EKG-tetikli. Koroner kalsiyum yükü belirlenir." },
            { step: "Bolus Test veya Tracking", detail: "Aorta kökünde 200 HU → otomatik tetik." },
            { step: "Prospektif / Retrospektif EKG-Gated KBTA", detail: "HR < 65: Prospektif (düşük doz). HR > 65: Retrospektif veya high-pitch spiral." },
            { step: "Koronal / Sagital MPR", detail: "Anastomoz ve bypass değerlendirmesi (varsa)." },
            { step: "Curved Planar Reformat (CPR)", detail: "Her koroner için otomatik iş istasyonu rekonstrüksiyonu." },
            { step: "3D VRT", detail: "Klinik raporlama için görsel." }
        ],
        contrastInfo: "370 mgI/ml iyotlu kontrast: 60–80 ml, 5–6 ml/sn. Salin 40 ml chase.",
        notes: "CAD-RADS 2.0 raporlama sistemi kullanılır. FFR-CT konsültasyonu CAD-RADS 3 ve üzeri için değerlendirilebilir."
    },

    // ═══════════════════════════════════════════════
    // OMURGA
    // ═══════════════════════════════════════════════
    {
        id: "lumbar_mri",
        name: "Lomber Spinal MR",
        organ: "Omurga",
        modality: "MR",
        indication: "Bel ağrısı, disk hernisi, stenoz, radikülopati, spinal kord patolojisi.",
        patientPrep: [
            "Metal implant sorgulaması (vida, rod, stimülatör).",
            "Hasta supin pozisyon, diz altı destek."
        ],
        steps: [
            { step: "Sagital T1 TSE", detail: "Vertebra morfolojisi, yağ doku, kemik iliği değerlendirmesi." },
            { step: "Sagital T2 TSE", detail: "Disk hidrasyon, spinal kanal, sinir kökü, disk hernisi temel seri." },
            { step: "Sagital STIR veya T2 Yağ Baskılı", detail: "Kemik iliği ödemi, stres fraktür, inflamasyon (Modic değişiklikleri)." },
            { step: "Aksiyal T2 TSE (L3-S1)", detail: "Her disk düzeyi için 3–4mm kesit. Foraminal darlık, fasset eklem değerlendirmesi." },
            { step: "Aksiyal T1 (isteğe bağlı)", detail: "Disk kontrast alımı veya postoperatif değerlendirme." }
        ],
        contrastInfo: "Rutin vakada kontrast gerekmez. Postoperatif fibrozis vs nüks disk için 0.1 mmol/kg gadolinyum.",
        notes: "Modic değişiklikleri: Tip 1 (akut ödem), Tip 2 (yağlı dejenerasyon), Tip 3 (skleroz)."
    },

    // ═══════════════════════════════════════════════
    // VASKÜLER
    // ═══════════════════════════════════════════════
    {
        id: "aorta_cta",
        name: "Aorta BT Anjiyografi",
        organ: "Vasküler (Aorta)",
        modality: "BT",
        indication: "Aort anevrizması, diseksiyon, travma, endovasküler tedavi planlaması.",
        patientPrep: [
            "eGFR değerlendirilmeli.",
            "IV damar yolu (antekubital veya femoral, 18G).",
            "4 saat açlık önerilir."
        ],
        steps: [
            { step: "Non-kontrast Tarama", detail: "Torakstan pelvise. İntramural hematom, kalsifikasyon değerlendirmesi." },
            { step: "Arteryel Faz (Bolus tracking)", detail: "Arkus aorta düzeyinde 150 HU → tetik. Torakstan pelvis/femorallere." },
            { step: "Venöz/Geç Faz (70–80 sn)", detail: "Endoleak, venöz yapılar, organlar." },
            { step: "3D VRT ve MIP Reformat", detail: "Anevrizma morfolojisi, boyun uzunluğu, iliak açı ölçümü." }
        ],
        contrastInfo: "350–370 mgI/ml: 100–120 ml, 4 ml/sn. Salin 40 ml.",
        notes: "EVAR planlama: Proksimal boyun çapı, uzunluk, açılanma, iliak çaplar ölçülmelidir."
    },
    {
        id: "carotid_cta",
        name: "Karotis BT Anjiyografi",
        organ: "Vasküler (Karotis)",
        modality: "BT",
        indication: "TIA, iskemik inme, karotis stenozu değerlendirmesi.",
        patientPrep: [
            "eGFR değerlendirilmeli.",
            "IV antekubital damar yolu (18G).",
            "Hasta başı nötral pozisyonda, yutkunmamalı."
        ],
        steps: [
            { step: "Scout", detail: "Arkus aortadan kranyal tabana kadar." },
            { step: "Bolus Tracking", detail: "Arkus aortada 150 HU → tetik." },
            { step: "Aksiyal CTA (0.625–1mm)", detail: "Kraniyokaudal yön. Kalın plak, ulserasyon, stenoz derecesi." },
            { step: "MPR / CPR Reformat", detail: "Her ICA/ECA için eğimli düzlem." },
            { step: "3D VRT", detail: "Stenotik segment görselleştirme." }
        ],
        contrastInfo: "350 mgI/ml: 60–80 ml, 4–5 ml/sn. Salin 30 ml chase.",
        notes: "NASCET metodu ile stenoz hesaplaması yapılır. Plak morfolojisi (yumuşak, kalsifik, mikst) raporlanmalıdır."
    },

    // ═══════════════════════════════════════════════
    // ÜRİNER / BÖBREK
    // ═══════════════════════════════════════════════
    {
        id: "urinary_ct_stone",
        name: "Üriner Sistem BT (Taşsız)",
        organ: "Böbrek / Üriner",
        modality: "BT",
        indication: "Akut böbrek koliği, üriner sistem taşı şüphesi.",
        patientPrep: [
            "Açlık gerekmez.",
            "Oral kontrast verilmez.",
            "Hasta tam mesane ile (mümkünse)."
        ],
        steps: [
            { step: "Non-kontrast Abdomen-Pelvis BT", detail: "Böbrek üstünden mesane tabanına. 3–5 mm kesit." },
            { step: "Taş Penceresi (WW:1500 WL:400)", detail: "Küçük kalsifik taşlar için." },
            { step: "Yumuşak Doku Penceresi", detail: "Periüreteral ödem, hidronefroz." },
            { step: "MPR Koronal", detail: "Üreter boyunca taş lokalizasyonu ve üreter dilatasyonu." }
        ],
        notes: "Düşük doz protokol (LDCT) yeterlidir — doz azaltımı önemlidir. Taş yoğunluğu (HU) ESWL kararını etkiler: > 900 HU → ESWL başarı azalır."
    },
    {
        id: "kidney_mri_mass",
        name: "Böbrek MR (Kitle Değerlendirme)",
        organ: "Böbrek / Üriner",
        modality: "MR",
        indication: "Böbrek kitlesi karakterizasyonu, BT'de indeteterminate lezyon.",
        patientPrep: [
            "eGFR değerlendirilmeli.",
            "IV damar yolu.",
            "4 saat açlık."
        ],
        steps: [
            { step: "Koronal T2 HASTE", detail: "Kist vs solid ayrımı. Basit kist: T2 parlak, homojen." },
            { step: "Aksiyal T1 In/Out-of-phase", detail: "Yağ içeriği (AML — anjiomiyolipom değerlendirmesi)." },
            { step: "Aksiyal T2 TSE", detail: "Detaylı morfoloji." },
            { step: "DWI (b=0, 500, 800)", detail: "Malign kitlede difüzyon kısıtlılığı." },
            { step: "Dinamik Kontrastlı T1 3D GRE", detail: "Kortiko-medullar, nefrografik, ekskretuar fazlar." },
            { step: "Subtraksiyon", detail: "Kist-solid ayrımı ve gerçek kontrastlanma değerlendirmesi." }
        ],
        contrastInfo: "0.1 mmol/kg Gadolinyum IV.",
        notes: "Bosniak 2024 sınıflaması için tüm fazlar gereklidir. Bosniak III–IV: Cerrahi / ablasyon değerlendirmesi."
    }
];
