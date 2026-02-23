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
    },

    // ═══════════════════════════════════════════════
    // TİROİD / BOYUN USG
    // ═══════════════════════════════════════════════
    {
        id: "thyroid_usg",
        name: "Tiroid USG",
        organ: "Tiroid",
        modality: "USG",
        indication: "Tiroid nodülü, guatr, tiroidit, boyun kitlesi değerlendirmesi.",
        patientPrep: [
            "Aç kalmaya gerek yok.",
            "Boyun bölgesinde takı çıkartılmalı.",
            "Hasta supin pozisyonda, boyun hiperekstensiyon pozisyonunda."
        ],
        steps: [
            { step: "Tiroid Lobu (Sağ-Sol) B-Mode", detail: "7-15 MHz lineer prob. Uzun ve kısa aks boyutlar ölçülür. Lob boyutu: AP x TR x Uzunluk (mm)." },
            { step: "İsthmus Kalınlığı", detail: "Orta hattan AP çap ölçümü (N: < 3mm)." },
            { step: "Parankimal Yapı", detail: "Ekojenite, heterojenite, nodülarite, vaskülarizasyon değerlendirilir." },
            { step: "Nodül Karakterizasyonu (TI-RADS)", detail: "Yapı, ekojenite, şekil (geniş vs uzun), kenar, ekojenik odak. ACR TI-RADS skoru hesaplanır." },
            { step: "Doppler / Power Doppler", detail: "Diffüz hipervaskülarizan → Graves. Periferik vaskülarizan → Hashimoto." },
            { step: "Servikal Lenf Nodları", detail: "Level II-VI boyu: Kısa aks çap, morfoloji (hilus, korteks)." }
        ],
        notes: "TI-RADS ≥ TR4 (≥4 puan) veya TR3 ≥1.5 cm → İİAB değerlendirmesi. Elastografi (varsa) ek bilgi sağlar."
    },
    {
        id: "renal_usg",
        name: "Böbrek USG",
        organ: "Böbrek / Üriner",
        modality: "USG",
        indication: "Böbrek boyutu ve parankimal hastalık, hidronefroz, kitle, taş.",
        patientPrep: [
            "Aç kalmaya gerek yok.",
            "Dolu mesane tercih edilir (mesane değerlendirmesi yapılacaksa).",
            "Hasta supin veya dekübit lateral pozisyonunda."
        ],
        steps: [
            { step: "B-Mode (3-5 MHz Konveks Prob)", detail: "Sağ böbrek: Subkostal ve interkostal pencereler. Sol böbrek: Posterior/lateral yaklaşım." },
            { step: "Böbrek Boyutları", detail: "Uzunluk (kranio-kaudal), AP ve transvers çap ölçümü. N: 9-13 cm." },
            { step: "Korteks Kalınlığı", detail: "N: > 10 mm. Azalmış korteks → Kronik böbrek hastalığı." },
            { step: "Toplama Sistemi", detail: "Pelvis çapı (N: < 10mm), kaliksiyel dilatasyon derecesi (SFU Grade 1-4)." },
            { step: "Kitle/Kist Değerlendirmesi", detail: "Boyut, lokalizasyon, iç yapı. Kist: Bosniak sınıflaması. Solid: Kontrast BT/MR önerilir." },
            { step: "Resistif İndeks (RI) — Doppler", detail: "N: 0.5–0.7. >0.7 → Renal arter darlığı, obstrüksiyon. İnterlobar arterlerden ölçülür." }
        ],
        notes: "Akut pyelonefrit: USG normalse CT gerekebilir. Hidronefroz derecesi SFU sistemi ile raporlanmalıdır."
    },
    {
        id: "abdominal_usg",
        name: "Batın USG (Tüm Abdomen)",
        organ: "Abdomen",
        modality: "USG",
        indication: "Karın ağrısı, organ boyutu, asit, lenfadenopati genel değerlendirmesi.",
        patientPrep: [
            "En az 4-6 saat aç olunmalı (safra kesesi için optimal).",
            "Yeterli sıvı alınmış, mesane dolu olmalı.",
            "Hasta supin pozisyonda."
        ],
        steps: [
            { step: "Karaciğer", detail: "Sağ lob uzunluğu (N: <15cm), sol lob, segmental anatomi. Ekojenik yapı, fokal lezyon (kist, hemanjiom, metastaz)." },
            { step: "Safra Yolları ve Safra Kesesi", detail: "Kolelitiyazis (ekojen taş + arka gölge), duvar kalınlığı (N: <3mm), CBD çapı (N: <6-7mm)." },
            { step: "Pankreas", detail: "Başta 2.5-3 cm, gövde 2cm, kuyruk 2cm normal. Wirsung kanalı (N: <3mm). Solid kitle/kistik lezyon." },
            { step: "Dalak", detail: "Uzun aks (N: <13cm). Splenomegali, fokal lezyon, aksesuar dalak." },
            { step: "Böbrekler (Her İki)", detail: "Boyut, korteks, toplama sistemi, kist/kitle (bkz. Böbrek USG protokolü)." },
            { step: "Serbest Sıvı (Asit)", detail: "Morison poşu, pelvis, Koller de sac: Serbest sıvı miktarı ve lokalizasyonu." },
            { step: "Büyük Damarlar", detail: "Abdominal aorta (N: <3cm), İVC, portal ven çapı (N: <13mm)." }
        ],
        notes: "Postprandial incelemede safra kesesi kontrakte olabilir — bildirilmelidir. Şüpheli kitleler için kontrast görüntüleme (BT/MR) önerilir."
    },

    // ═══════════════════════════════════════════════
    // KARORİD DOPPLER USG
    // ═══════════════════════════════════════════════
    {
        id: "carotid_doppler_usg",
        name: "Karotis Doppler USG",
        organ: "Vasküler (Karotis)",
        modality: "USG-Doppler",
        indication: "İnme/TIA risk, karotis darlığı, plak değerlendirmesi, tarama.",
        patientPrep: [
            "Aç kalmaya gerek yok.",
            "Boyun bölgesinde aksesuar çıkartılmalı.",
            "Hasta supin, baş hafifçe karşı tarafa çevrilmiş."
        ],
        steps: [
            { step: "B-Mode Genel Değerlendirme", detail: "Her iki CCA, ICA, ECA ve vertebral arterler görüntülenir." },
            { step: "İntima-Media Kalınlığı (IMT)", detail: "CCA'nın 1 cm proksimalinden B-mode ile. N: <0.9mm. >1.5mm → Plak." },
            { step: "Plak Değerlendirmesi", detail: "Lokalizasyon, boyut (cm²), yüzey (düzgün/düzensiz), ekojenisite (homojen/heterojen/hipoekoik). Hipoekoik yumuşak plak → emboli riski yüksek." },
            { step: "Doppler Spektral Analiz (PSV / EDV)", detail: "ICA PSV: N < 125 cm/s. >125: %50-69, >230: ≥%70 stenoz. ICA/CCA oranı: N < 2." },
            { step: "Renk Doppler", detail: "Mozaik akım paterni (türbülans) → darlık. Sinyal kaybı → oklüzyon." },
            { step: "Vertebral Arterler", detail: "Akım yönü (retrograd → subklavyan steal). PSV değerleri." }
        ],
        notes: "NASCET kriterlerine göre darlık yüzdesi hesaplanır. %70+ darlık → Endarterektomi veya stent değerlendirmesi."
    },

    // ═══════════════════════════════════════════════
    // DERİN VEN DOPPLER USG
    // ═══════════════════════════════════════════════
    {
        id: "lower_extremity_venous_usg",
        name: "Alt Ekstremite Venöz Doppler USG (DVT)",
        organ: "Vasküler (Venöz)",
        modality: "USG-Doppler",
        indication: "DVT şüphesi, ödematöz ekstremite, emboli kaynağı araştırması.",
        patientPrep: [
            "Aç kalmaya gerek yok.",
            "Hasta supin pozisyonunda. İnguinal bölge için hafif dış rotasyon."
        ],
        steps: [
            { step: "Kompresyon USG (CUS) — Proksimal", detail: "Ortak femoral ven, yüzeyel femoral ven, popliteal ven. Her 2 cm'de kompresyon. Tromboz → non-kompressibl." },
            { step: "Renkli Doppler", detail: "Spontan akım, faz değişimi (respiratuvar), Valsalva yanıtı değerlendirilir. Tromboz → Akım yokluğu." },
            { step: "Kompresyon USG — Distal", detail: "Tibio-peroneal trunkus, posterior tibial, peroneal venler. Teknik olarak güç olabilir." },
            { step: "Büyük Safen Ven (GSV)", detail: "Yüzeyel DVT veya tromboflebit için." },
            { step: "Poplitiyal Fossada Kist Değerlendirmesi", detail: "Baker kisti → DVT ile benzer klinik sunum." }
        ],
        notes: "Wells skoru ≥2 ve D-dimer pozitifse USG endikasyonu güçlüdür. Negatif proksimal USG + yüksek klinik şüphe → 1 haftada tekrar veya BTPA düşünülmeli."
    },

    // ═══════════════════════════════════════════════
    // KAS-İSKELET MR
    // ═══════════════════════════════════════════════
    {
        id: "knee_mri",
        name: "Diz MRG",
        organ: "Kas-İskelet",
        modality: "MR",
        indication: "Diz ağrısı, menisküs/bağ yırtığı şüphesi, kıkırdak değerlendirme.",
        patientPrep: [
            "Metal implant sorgulanmalı (diz protezi varsa artefakt olabilir).",
            "Ön bölmede sarmal (knee coil) kullanılmalı.",
            "Diz tam ekstansiyon / hafif fleksiyonda."
        ],
        steps: [
            { step: "Sagital PD FS (Temel Seri)", detail: "4 mm, FOV 16cm. Menisküs, PCL/ACL değerlendirmesi. Anterior-posterior komissür." },
            { step: "Koronal T2 FS", detail: "4 mm. MCL/LCL, menisküs gövdesi, tibiofemortal eklem aralığı." },
            { step: "Aksiyal PD FS", detail: "4 mm. Patella kıkırdağı, retinakulumlar, patellar tendon, MPFL." },
            { step: "Sagital T1", detail: "Kemik iliği değerlendirmesi (ödem, nekroz, kırık)." },
            { step: "Koronal T1 (İsteğe Bağlı)", detail: "Menisküs dejeneras yonu, kemik lezyonu." },
            { step: "IVKM (Seçici)", detail: "Kitle, enfeksiyon, sürrealist pannus şüphesinde." }
        ],
        notes: "Menisküs yırtık derecelendirmesi: Grad 1-2 (İçsel dejeneras yon), Grad 3 (Yırtık — eklem yüzeyine ulaşan). ACL yırtığı: 'Empty notch sign', femoral attachment area. Kıkırdak: ICRS veya OARSI skoru."
    },
    {
        id: "shoulder_mri",
        name: "Omuz MRG",
        organ: "Kas-İskelet",
        modality: "MR",
        indication: "Rotator kaf yırtığı, omuz ağrısı, SLAP lezyonu, instabilite.",
        patientPrep: [
            "Metal implant sorgulanmalı.",
            "Shoulder coil. Hasta supin, kol nötral (başparmak yukarı).",
            "Artrografi için direkt intraartüküler gadolinyum."
        ],
        steps: [
            { step: "Koronal Oblik PD FS (Ana seri)", detail: "Supraspinatus tendonuna paralel. Tam kat / parsiyel yırtık, kalınlık, geri çekilme mesafesi." },
            { step: "Sagital Oblik T2 FS", detail: "Muskulotendinöz bileşke. Akromion tipi (düz/kıvrık/çengel), impingement değerlendirmesi." },
            { step: "Aksiyal T2 FS veya PD FS", detail: "Biseps tendon, labrum ant/post, glenoid kıkırdak." },
            { step: "Koronal T1", detail: "Supraspinatus yağlı atrofi değerlendirmesi." },
            { step: "Sagital T1", detail: "Infraspinatus / teres minor atrofisi (Goutallier sınıflaması)." },
            { step: "3D Gradient Echo (İsteğe Bağlı)", detail: "Labrum detayı, kıkırdak." }
        ],
        notes: "Tam kat yırtıkta geri çekilme mesafesi (Patte sınıflaması) ve yağlı atrofi (Goutallier 0-4) raporlanmalıdır. Artrografi, labrum ve parsiyel yüzeyel yırtıklar için üstündür."
    },
    {
        id: "hip_mri",
        name: "Kalça MRG",
        organ: "Kas-İskelet",
        modality: "MR",
        indication: "AVN, labrum yırtığı, FAI, stres kırığı, koksartroz.",
        patientPrep: [
            "Metal implant sorgulanmalı (kalça protezi kontrendikasyon olabilir).",
            "Phased-array gövde koili. Hasta supin, her iki kalça değerlendirilebilir."
        ],
        steps: [
            { step: "Koronal T1 (Her iki kalça)", detail: "Kemik iliği yapısı. AVN: T1 hipointensite bantı (kresent). Korteks bütünlüğü." },
            { step: "Koronal STIR (Her iki kalça)", detail: "Kemik iliği ödemi, stres kırığı, sinoviyal kalınlaşma." },
            { step: "Aksiyal T1 ve T2 FS", detail: "Femoral baş, boyun, sferisitesi. Alfa açısı (CAM deformitesi): >55° anormal." },
            { step: "Sagital PD FS (Unilateral)", detail: "Labrum, anterior ve posterior, anterior impingement." },
            { step: "IVKM (Seçici)", detail: "Tümör, enfeksiyon şüphesinde." }
        ],
        notes: "AVN evrelemesi: Ficat-Arlet (0-4). Stres kırığı: Inferior boyun bölgesi (kompressiyon) vs süperiyor (distraksiyon — yüksek riskli). FAI: Alfa açısı + CE açısı kombine değerlendirilmelidir."
    },
    {
        id: "ankle_mri",
        name: "Ayak Bileği MRG",
        organ: "Kas-İskelet",
        modality: "MR",
        indication: "Tendon patolojisi (Aşil, peroneal, posterior tibial), bağ, osteokondroz.",
        patientPrep: [
            "Küçük ekstremite koili tercih edilir.",
            "Ayak bileği nötral pozisyonda (plantifleksiyon yok).",
            "Metal çıkartılmalı."
        ],
        steps: [
            { step: "Sagital PD FS", detail: "Aşil tendonu (kalınlık, sinyal), Kalkaneusun kemik iliği, peroneal retinakulumlar." },
            { step: "Aksiyal PD FS", detail: "Peroneal tendon, FHL, FDL, posterior tibial tendon. İnterossöz membran. Tünel içi tenosinovitis." },
            { step: "Koronal T2 FS", detail: "Deltoid, ATFL, CFL bağları. Talus dom OCD (osteokondroz)." },
            { step: "Sagital T1", detail: "Kemik yağ iliği, kırık, avasküler nekroz." },
            { step: "3D GRE / T2* (İsteğe Bağlı)", detail: "Eklem kıkırdağı haritalaması için." }
        ],
        notes: "Aşil tendon yırtığı: Tam kat yırtıkta geri çekilme mesafesi Rodineau veya Kuwada ile sınıflanır. OCD: Berndt-Harty radyolojik / Anderson MR sınıflaması kullanılır."
    },

    // ═══════════════════════════════════════════════
    // HEPATOBİLİYER ÖZEL
    // ═══════════════════════════════════════════════
    {
        id: "mrcp",
        name: "MRCP (Manyetik Rezonans Kolanjiopankreatografi)",
        organ: "Hepatobiliyer / Pankreas",
        modality: "MR",
        indication: "Safra yolu dilatasyonu, kolelitiyazis, kolanjit, IPMN, pankreas kanalı patolojisi.",
        patientPrep: [
            "En az 4-6 saat aç olunmalı (safra kesesi ve kanalların dolu görülmesi için).",
            "Susuz kalınmalı — mide içeriği MRCP'yi artefaktla bozabilir.",
            "Negatif oral kontrast (ananas suyu / blueberry juice): İsteğe bağlı gastrik sinyal bastırma."
        ],
        steps: [
            { step: "2D HASTE Koronal", detail: "Tek nefes tutma, 40-80mm slab. Genel overviw — safra yolları, pankreas kanalı." },
            { step: "3D MRCP (Navigator gated)", detail: "1-1.5mm izotropik. Çok planar MPR reformat — detaylı anatomik değerlendirme." },
            { step: "Aksiyel T2 HASTE", detail: "Karaciğer parankimi, perikoledokal yapılar, pankreatik kist." },
            { step: "Aksiyel ve Koronal T1 FS VIBE", detail: "Sinyal az: Yağ baskılı pankreas parankimi, patolojik kontrast tutulumu." },
            { step: "Dinamik Kontrastlı VIBE (İsteğe Bağlı)", detail: "IPMN solid bileşen, kolanjiyokarsinom, ampuller kitle için." },
            { step: "MIP Reformat", detail: "Maksimum intensite projeksiyonu — safra yolu ağacı 3D görünümü." }
        ],
        contrastInfo: "Temel MRCP kontrastsız yapılır. Kitle şüpheliise 0.1 mmol/kg Gadolinyum IV eklenir.",
        notes: "Wirsung kanalı çapı: Baş<3.5mm, gövde<2.5mm, kuyruk<1.5mm. Dilasyon → Tümör/kronik pankreatit. Kolanjioskopi veya ERCP öncesi yol haritası oluşturur."
    },
    {
        id: "mr_enterography",
        name: "MR Enterografi (İnce Barsak MRG)",
        organ: "Gastrointestinal",
        modality: "MR",
        indication: "Crohn hastalığı, ince barsak tümörü, obscure kanama, Meckel divertikülü.",
        patientPrep: [
            "4-6 saat açlık.",
            "1.5-2 litre oral kontrast (poliethylenglikol bazlı veya mannitol + su) — 45-60 dk içinde içirilir.",
            "Peristaltizm inhibitörü (Buscopan / Glucagon) IV verilir.",
            "IV damar yolu (antekubital, 18G)."
        ],
        steps: [
            { step: "Koronal SSFSE / HASTE (Barsak Dolumu Kontrolü)", detail: "Yeterli distansiyon var mı? Gerekirse oral kontrastı tamamla." },
            { step: "Koronal T2 HASTE", detail: "Barsak ansı distansiyonu, duvar kalınlığı, mezenter." },
            { step: "Aksiyel T2 FS HASTE", detail: "Terminal ileum, mezenter, lenf nodları." },
            { step: "Aksiyel DWI (b=50, 500, 800)", detail: "Aktif inflamasyon, ülser, apse: Difüzyon kısıtlılığı gösterir." },
            { step: "Dinamik Kontrastlı T1 FS VIBE", detail: "Duvar kontrastlanması — aktif Crohn değerlendirmesi." },
            { step: "Enteroklizis (Alternatif)", detail: "Nazojejunal tüp ile direkt kontrast verilmesi — daha iyi distansiyon sağlar." }
        ],
        contrastInfo: "0.1 mmol/kg Gadolinyum IV. MaReady (Gadofosveset) enteroklizis için alternatif.",
        notes: "Crohn hastalığı değerlendirmesi: Duvar kalınlığı (N:<3mm), mural stratifikasyon kaybı, comb sign (mezenterik vasküler konjesyon), creeping fat, striktur, fistül. Harvey-Bradshaw veya CDAI klinik skoru ile korele edilmelidir."
    },

    // ═══════════════════════════════════════════════
    // ADRENAL BT
    // ═══════════════════════════════════════════════
    {
        id: "adrenal_ct_protocol",
        name: "Adrenal BT Protokolü (Washout)",
        organ: "Adrenal",
        modality: "BT",
        indication: "Adrenal insidentaloma, adrenal kitle karakterizasyonu.",
        patientPrep: [
            "eGFR değerlendirilmeli.",
            "IV damar yolu (18G antekubital).",
            "4 saat açlık."
        ],
        steps: [
            { step: "Native (Kontrastsız) Faz", detail: "Adrenal bölge. ROI ile HU ölçümü: <10 HU → lipid-rich adenom (başka faz gerekmez). >10HU → adrenal washout protokolüne devam." },
            { step: "Portal-Venöz Faz (60-70 saniye)", detail: "IV kontrast sonrası. Adrenal kontrast tutulumu ve peak enhancement." },
            { step: "15 Dakika Gecikmiş Faz", detail: "Gecikmiş kontrastlanma ve washout hesaplaması için kritik faz." },
            { step: "Washout Hesaplama", detail: "APW = [(Venöz-Geç)/(Venöz-Native)] x100. RPW = [(Venöz-Geç)/Venöz] x100." },
            { step: "Multiplanar Reformat (MPR)", detail: "Aksiyel, koronal, sagital 2-3mm kesitler. Lezyon karakteri, komşu organlar." }
        ],
        contrastInfo: "370 mgI/ml: 80-100 ml, 3 ml/sn.",
        notes: "APW ≥ %60 veya RPW ≥ %40 → Lipid-rich Adenom (benign). APW < %60 → Adenom dışı düşün (feokromositoma, metastaz). Native <10 HU → Zaten Adenom (washout hesaplanmaz). Feokromositoma şüphesinde kontrast öncesi alfa blokaj gerekebilir."
    }
];
