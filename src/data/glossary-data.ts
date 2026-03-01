export interface GlossaryEntry {
    id: string;
    abbreviation: string;
    fullForm: string;
    turkishMeaning: string;
    category: string;
    description?: string;
}

export const RADIOLOGY_GLOSSARY: GlossaryEntry[] = [
    // ─── MR SEKANS & TEKNİK ──────────────────────────────────────
    {
        id: "dwi",
        abbreviation: "DWI",
        fullForm: "Diffusion Weighted Imaging",
        turkishMeaning: "Difüzyon Ağırlıklı Görüntüleme",
        category: "MR Sekans",
        description: "Su moleküllerinin Brownian hareketini ölçer. Akut inme, apse, tümör hücreleselliği değerlendirmesinde temel."
    },
    {
        id: "adc",
        abbreviation: "ADC",
        fullForm: "Apparent Diffusion Coefficient",
        turkishMeaning: "Görünür Difüzyon Katsayısı",
        category: "MR Sekans",
        description: "DWI'dan hesaplanan kantitatif harita. Düşük ADC = kısıtlanmış difüzyon (inme, apse, yüksek hücresellik)."
    },
    {
        id: "flair",
        abbreviation: "FLAIR",
        fullForm: "Fluid Attenuated Inversion Recovery",
        turkishMeaning: "Sıvı Baskılamalı İnversiyon İyileşme",
        category: "MR Sekans",
        description: "BOS sinyalini baskılar. Periventriküler lezyonlar, subaraknoid kanama, menenjit için çok değerli."
    },
    {
        id: "stir",
        abbreviation: "STIR",
        fullForm: "Short Tau Inversion Recovery",
        turkishMeaning: "Kısa Tau İnversiyon İyileşme",
        category: "MR Sekans",
        description: "Yağ sinyalini baskılar. Kemik iliği ödemi, kas ödemi, inflamasyon tespitinde kullanılır. Chemical-shift bağımsız."
    },
    {
        id: "swi",
        abbreviation: "SWI",
        fullForm: "Susceptibility Weighted Imaging",
        turkishMeaning: "Duyarlılık Ağırlıklı Görüntüleme",
        category: "MR Sekans",
        description: "Manyetik duyarlılık farkları ile kontrast oluşturur. Microbleed, DAI, kavernom, kalsifikasyon tespitinde üstün."
    },
    {
        id: "gre",
        abbreviation: "GRE",
        fullForm: "Gradient Recalled Echo",
        turkishMeaning: "Gradyan Geri Çağırmalı Eko",
        category: "MR Sekans",
        description: "T2* ağırlıklı görüntüler. Hemoraji, kalsifikasyon, demir birikimine hassas. Susceptibility artefaktına duyarlı."
    },
    {
        id: "tse",
        abbreviation: "TSE / FSE",
        fullForm: "Turbo Spin Echo / Fast Spin Echo",
        turkishMeaning: "Turbo Spin Eko / Hızlı Spin Eko",
        category: "MR Sekans",
        description: "Klasik spin-echo'nun hızlandırılmış versiyonu. ETL (echo train length) ile süre kısaltılır. Temel T1/T2 sekansı."
    },
    {
        id: "haste",
        abbreviation: "HASTE",
        fullForm: "Half-Fourier Acquisition Single-Shot Turbo Spin Echo",
        turkishMeaning: "Yarım-Fourier Tek Atış TSE",
        category: "MR Sekans",
        description: "Çok hızlı T2 ağırlıklı görüntüleme. Nefes tutamayanlar, fetal MR, MRCP bazı sekanslarında kullanılır."
    },
    {
        id: "vibe",
        abbreviation: "VIBE",
        fullForm: "Volumetric Interpolated Breath-hold Examination",
        turkishMeaning: "Volümetrik İnterpolasyonlu Nefes Tutma",
        category: "MR Sekans",
        description: "3D T1 ağırlıklı GRE. Karaciğer dinamik kontrastlı çalışma, abdomen MR'da standart. Siemens terminolojisi."
    },
    {
        id: "dixon",
        abbreviation: "Dixon",
        fullForm: "Dixon Technique (Water-Fat Separation)",
        turkishMeaning: "Dixon Tekniği (Su-Yağ Ayrımı)",
        category: "MR Sekans",
        description: "Chemical shift bazlı su ve yağ ayrımı. In-phase, opposed-phase, water-only, fat-only görüntüler üretir."
    },
    {
        id: "mr_spectroscopy",
        abbreviation: "MRS",
        fullForm: "Magnetic Resonance Spectroscopy",
        turkishMeaning: "MR Spektroskopi",
        category: "MR Sekans",
        description: "Doku metabolitlerini ölçer. NAA, Cho, Cr, Lac, Lip pikleri. Tümör gradlama, apse vs tümör ayrımında değerli."
    },
    {
        id: "dce",
        abbreviation: "DCE-MRI",
        fullForm: "Dynamic Contrast Enhanced MRI",
        turkishMeaning: "Dinamik Kontrastlı MR",
        category: "MR Sekans",
        description: "Zaman çözünürlüklü kontrastlı çekim. Perfüzyon parametreleri (Ktrans, Kep) ölçülür. Meme, prostat MR'da temel."
    },
    {
        id: "mrcp",
        abbreviation: "MRCP",
        fullForm: "Magnetic Resonance Cholangiopancreatography",
        turkishMeaning: "MR Kolanjiopankreatografi",
        category: "MR Teknik",
        description: "Ağır T2 ağırlıklı sekanslarla safra ve pankreas kanallarının kontrastsız görüntülenmesi."
    },
    {
        id: "mra",
        abbreviation: "MRA",
        fullForm: "Magnetic Resonance Angiography",
        turkishMeaning: "MR Anjiyografi",
        category: "MR Teknik",
        description: "TOF (Time of Flight), PC (Phase Contrast) veya CE-MRA (kontrastlı) ile damar görüntüleme."
    },
    {
        id: "dti",
        abbreviation: "DTI",
        fullForm: "Diffusion Tensor Imaging",
        turkishMeaning: "Difüzyon Tensör Görüntüleme",
        category: "MR Sekans",
        description: "Beyaz cevher traktlarının yönelimini gösterir. FA (fraksiyonel anizotropi) haritası. Traktografi."
    },

    // ─── BT TEKNİK ──────────────────────────────────────────────
    {
        id: "hu",
        abbreviation: "HU",
        fullForm: "Hounsfield Unit",
        turkishMeaning: "Hounsfield Ünitesi",
        category: "BT Teknik",
        description: "BT'de doku dansitesi ölçüm birimi. Su=0, Hava=-1000, Kemik=+1000, Yağ=-100, Kan(akut)=50-70."
    },
    {
        id: "cta",
        abbreviation: "CTA",
        fullForm: "Computed Tomography Angiography",
        turkishMeaning: "BT Anjiyografi",
        category: "BT Teknik",
        description: "IV kontrastlı arteriyel/venöz faz BT. PE, aort diseksiyonu, karotis stenozu, intrakranial anevrizma değerlendirmesi."
    },
    {
        id: "hrct",
        abbreviation: "HRCT / YRBT",
        fullForm: "High Resolution CT / Yüksek Rezolüsyonlu BT",
        turkishMeaning: "Yüksek Çözünürlüklü BT",
        category: "BT Teknik",
        description: "İnce kesit (≤1mm), yüksek çözünürlüklü akciğer BT. İnterstisyel akciğer hastalığı, bronşektazi, emfizem."
    },
    {
        id: "dect",
        abbreviation: "DECT",
        fullForm: "Dual Energy CT",
        turkishMeaning: "Çift Enerjili BT",
        category: "BT Teknik",
        description: "İki farklı enerji (80/140 kVp) ile materyal ayrımı. Gut tofi, böbrek taşı kompozisyonu, virtual unenhanced, iod haritası."
    },
    {
        id: "ctdi",
        abbreviation: "CTDIvol",
        fullForm: "CT Dose Index (Volume)",
        turkishMeaning: "BT Doz İndeksi (Volüm)",
        category: "BT Teknik",
        description: "BT'de radyasyon dozunu gösteren standart metrik (mGy). DLP (Dose Length Product) = CTDIvol x tarama uzunluğu."
    },
    {
        id: "mip",
        abbreviation: "MIP",
        fullForm: "Maximum Intensity Projection",
        turkishMeaning: "Maksimum Yoğunluk Projeksiyon",
        category: "BT/MR Rekonstrüksiyon",
        description: "Her piksel için ışın boyunca en yüksek değeri gösteren projeksiyon. Vasküler yapılar, pulmoner nodüller."
    },
    {
        id: "minip",
        abbreviation: "MinIP",
        fullForm: "Minimum Intensity Projection",
        turkishMeaning: "Minimum Yoğunluk Projeksiyon",
        category: "BT/MR Rekonstrüksiyon",
        description: "Her piksel için en düşük değeri gösteren projeksiyon. Trakeobronşiyal ağaç, hava yolları değerlendirmesi."
    },
    {
        id: "vr",
        abbreviation: "VR / VRT",
        fullForm: "Volume Rendering Technique",
        turkishMeaning: "Hacimsel Görüntüleme",
        category: "BT/MR Rekonstrüksiyon",
        description: "3D hacimsel görüntüleme. Cerrahi planlama, vasküler anatomi, kemik kırık değerlendirmesi."
    },

    // ─── GENEL RADYOLOJİ ──────────────────────────────────────────
    {
        id: "pacs",
        abbreviation: "PACS",
        fullForm: "Picture Archiving and Communication System",
        turkishMeaning: "Görüntü Arşivleme ve İletişim Sistemi",
        category: "Genel Radyoloji",
        description: "Tıbbi görüntülerin dijital depolanması, iletilmesi ve görüntülenmesi sistemi."
    },
    {
        id: "dicom",
        abbreviation: "DICOM",
        fullForm: "Digital Imaging and Communications in Medicine",
        turkishMeaning: "Tıpta Dijital Görüntüleme ve İletişim",
        category: "Genel Radyoloji",
        description: "Tıbbi görüntüleme standardı. Hasta bilgisi, çekim parametreleri ve görüntü verisi içerir."
    },
    {
        id: "ris",
        abbreviation: "RIS",
        fullForm: "Radiology Information System",
        turkishMeaning: "Radyoloji Bilgi Sistemi",
        category: "Genel Radyoloji",
        description: "Radyoloji iş akışı yönetimi: hasta kayıt, randevu, rapor yazma, istatistik."
    },
    {
        id: "cad",
        abbreviation: "CAD",
        fullForm: "Computer-Aided Detection/Diagnosis",
        turkishMeaning: "Bilgisayar Destekli Tespit/Tanı",
        category: "Genel Radyoloji",
        description: "Görüntülerde patoloji tespitinde AI/makine öğrenme destekli algoritmalar. Mamografi, akciğer nodülü."
    },

    // ─── SKOPI & GİRİŞİMSEL ────────────────────────────────────
    {
        id: "dsa",
        abbreviation: "DSA",
        fullForm: "Digital Subtraction Angiography",
        turkishMeaning: "Dijital Subtraksiyon Anjiyografi",
        category: "Girişimsel Radyoloji",
        description: "Kontrast öncesi mask görüntüsü çıkarılarak sadece damarların gösterilmesi. Gold standard anjiyografi."
    },
    {
        id: "tace",
        abbreviation: "TACE",
        fullForm: "Transarterial Chemoembolization",
        turkishMeaning: "Transarteryel Kemoembolizasyon",
        category: "Girişimsel Radyoloji",
        description: "HCC tedavisinde tümör besleyici artere kemoterapi + embolizan partiküllerin verilmesi."
    },
    {
        id: "rfa",
        abbreviation: "RFA",
        fullForm: "Radiofrequency Ablation",
        turkishMeaning: "Radyofrekans Ablasyon",
        category: "Girişimsel Radyoloji",
        description: "RF enerjisi ile tümör/lezyonun ısıtılarak koagülasyon nekrozu oluşturulması. KC, böbrek, kemik tümörü."
    },
    {
        id: "tips",
        abbreviation: "TIPS",
        fullForm: "Transjugular Intrahepatic Portosystemic Shunt",
        turkishMeaning: "Transjugüler İntrahepatik Portosistemik Şant",
        category: "Girişimsel Radyoloji",
        description: "Portal HT tedavisinde hepatik ven ile portal ven arasına stent yerleştirilmesi."
    },
    {
        id: "evar",
        abbreviation: "EVAR",
        fullForm: "Endovascular Aneurysm Repair",
        turkishMeaning: "Endovasküler Anevrizma Tamiri",
        category: "Girişimsel Radyoloji",
        description: "AAA veya torasik aort anevrizmasına endovasküler stent-greft yerleştirilmesi."
    },

    // ─── NÜKLeer TIP / PET ────────────────────────────────────
    {
        id: "suv",
        abbreviation: "SUV",
        fullForm: "Standardized Uptake Value",
        turkishMeaning: "Standartlaştırılmış Tutulum Değeri",
        category: "Nükleer Tıp / PET",
        description: "PET-BT'de FDG tutulum miktarının kantitatif ölçüsü. SUVmax >2.5 genellikle malignite düşündürür."
    },
    {
        id: "fdg",
        abbreviation: "FDG",
        fullForm: "Fluorodeoxyglucose (18F-FDG)",
        turkishMeaning: "Florodeoksiglukoz",
        category: "Nükleer Tıp / PET",
        description: "PET-BT'de en sık kullanılan radyofarmasötik. Glukoz metabolizması yüksek hücrelerde (tümör, inflamasyon) tutulur."
    },
    {
        id: "spect",
        abbreviation: "SPECT",
        fullForm: "Single Photon Emission Computed Tomography",
        turkishMeaning: "Tek Foton Emisyon BT",
        category: "Nükleer Tıp / PET",
        description: "Gama kamera ile 3D fonksiyonel görüntüleme. Miyokard perfüzyon sintigrafisi, kemik SPECT."
    },

    // ─── SINIFLAMA SİSTEMLERİ ──────────────────────────────────
    {
        id: "birads",
        abbreviation: "BI-RADS",
        fullForm: "Breast Imaging Reporting and Data System",
        turkishMeaning: "Meme Görüntüleme Raporlama ve Veri Sistemi",
        category: "Sınıflama Sistemi",
        description: "ACR meme görüntüleme standardı. 0-6 arası kategori. Mamografi, USG, MR."
    },
    {
        id: "lirads",
        abbreviation: "LI-RADS",
        fullForm: "Liver Imaging Reporting and Data System",
        turkishMeaning: "Karaciğer Görüntüleme Raporlama ve Veri Sistemi",
        category: "Sınıflama Sistemi",
        description: "Sirotik karaciğerde HCC şüpheli lezyonların standardize değerlendirmesi. LR-1 (benign) → LR-5 (kesin HCC)."
    },
    {
        id: "pirads",
        abbreviation: "PI-RADS",
        fullForm: "Prostate Imaging Reporting and Data System",
        turkishMeaning: "Prostat Görüntüleme Raporlama ve Veri Sistemi",
        category: "Sınıflama Sistemi",
        description: "Prostat mpMRI'da klinik anlamlı kanserin değerlendirilmesi. PI-RADS 1-5."
    },
    {
        id: "lungrads",
        abbreviation: "Lung-RADS",
        fullForm: "Lung CT Screening Reporting and Data System",
        turkishMeaning: "Akciğer BT Tarama Raporlama Sistemi",
        category: "Sınıflama Sistemi",
        description: "Düşük doz BT ile akciğer kanseri taramasında nodül yönetimi. Kategori 1-4."
    },
    {
        id: "recist_abbr",
        abbreviation: "RECIST",
        fullForm: "Response Evaluation Criteria in Solid Tumors",
        turkishMeaning: "Solid Tümörlerde Yanıt Değerlendirme Kriterleri",
        category: "Sınıflama Sistemi",
        description: "Onkolojik tedavi yanıtını değerlendirme: CR (tam), PR (kısmi), SD (stabil), PD (progresif)."
    },

    // ─── FİZİK & DOZ ──────────────────────────────────────────
    {
        id: "alara",
        abbreviation: "ALARA",
        fullForm: "As Low As Reasonably Achievable",
        turkishMeaning: "Makul Olarak Elde Edilebilir En Düşük Doz",
        category: "Radyasyon Güvenliği",
        description: "Radyasyon korumanın temel prensibi. Tanısal kaliteyi koruyarak dozu minimize et."
    },
    {
        id: "snr",
        abbreviation: "SNR",
        fullForm: "Signal-to-Noise Ratio",
        turkishMeaning: "Sinyal-Gürültü Oranı",
        category: "Görüntü Kalitesi",
        description: "Görüntü kalitesinin temel ölçüsü. Yüksek SNR = daha az gürültülü, net görüntü."
    },
    {
        id: "cnr",
        abbreviation: "CNR",
        fullForm: "Contrast-to-Noise Ratio",
        turkishMeaning: "Kontrast-Gürültü Oranı",
        category: "Görüntü Kalitesi",
        description: "İki doku arasındaki sinyal farkının gürültüye oranı. Lezyon tespitinde SNR'dan daha önemli."
    },
    {
        id: "fov_abbr",
        abbreviation: "FOV",
        fullForm: "Field of View",
        turkishMeaning: "Görüntüleme Alanı",
        category: "Görüntü Kalitesi",
        description: "Görüntülenen anatomik alanın büyüklüğü (cm). Küçük FOV = yüksek çözünürlük ama sınırlı kapsam."
    },
    {
        id: "tr_te",
        abbreviation: "TR / TE",
        fullForm: "Repetition Time / Echo Time",
        turkishMeaning: "Tekrarlama Zamanı / Eko Zamanı",
        category: "MR Sekans",
        description: "MR'da temel zamanlama parametreleri. T1W: kısa TR + kısa TE. T2W: uzun TR + uzun TE."
    },
    {
        id: "flip_angle",
        abbreviation: "FA",
        fullForm: "Flip Angle",
        turkishMeaning: "Çevirme Açısı",
        category: "MR Sekans",
        description: "RF darbesinin magnetizasyonu çevirdiği açı. SE=90°, GRE genellikle düşük FA (10-30°). T1 kontrastını etkiler."
    },
    {
        id: "etl",
        abbreviation: "ETL",
        fullForm: "Echo Train Length",
        turkishMeaning: "Eko Treni Uzunluğu",
        category: "MR Sekans",
        description: "TSE/FSE'de bir TR'de toplanan eko sayısı. Yüksek ETL = hızlı çekim ama T2 bulanıklaşma artar."
    },
    {
        id: "nex",
        abbreviation: "NEX / NSA",
        fullForm: "Number of Excitations / Number of Signal Averages",
        turkishMeaning: "Uyarım Sayısı / Sinyal Ortalama Sayısı",
        category: "MR Sekans",
        description: "Her faz kodlama adımının tekrar sayısı. NEX↑ → SNR↑ (√NEX kadar) ama süre uzar."
    }
];
