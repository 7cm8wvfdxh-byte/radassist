export interface DifferentialDiagnosis {
    id: string;
    finding: string;
    modality: string;
    organ: string;
    differentials: {
        diagnosis: string;
        likelihood: 'common' | 'less_common' | 'rare';
        keyFeature: string;
    }[];
    clinicalPearl?: string;
}

export const DDX_LIST: DifferentialDiagnosis[] = [
    // --- BRAIN ---
    {
        id: "ring_enhance_brain",
        finding: "Ring Enhancement (Beyin)",
        modality: "MR (Kontrastlı)",
        organ: "Beyin",
        differentials: [
            { diagnosis: "Beyin Apsesi", likelihood: "common", keyFeature: "DWI kısıtlanması, ince düzgün duvar, sentral nekroz" },
            { diagnosis: "GBM (Glioblastom)", likelihood: "common", keyFeature: "Kalın, düzensiz duvar. Perifokal ödem. Nekrotik santral." },
            { diagnosis: "Metastaz", likelihood: "common", keyFeature: "Multipl lezyonlar, gri-beyaz cevher bileşkesi. Bilinen primer tümör." },
            { diagnosis: "Toksoplazmoz", likelihood: "less_common", keyFeature: "AIDS hastası, bazal ganglia, multifokal. Target sign." },
            { diagnosis: "Radyasyon Nekrozu", likelihood: "less_common", keyFeature: "Radyoterapi öyküsü. MR Spektroskopi ile ayrım." },
            { diagnosis: "Demyelinizasyon (Tumefaktif MS)", likelihood: "rare", keyFeature: "Açık halka (open ring) enhancement. Genç hasta." }
        ],
        clinicalPearl: "Apse vs Tümör: DWI'da difüzyon kısıtlanması apse lehine. MR Spektroskopi'de amino asit piki → apse."
    },
    {
        id: "t2_hyperintense_white_matter",
        finding: "T2/FLAIR Hiperintens Beyaz Cevher Lezyonları",
        modality: "MR",
        organ: "Beyin",
        differentials: [
            { diagnosis: "Kronik Küçük Damar Hastalığı (Mikroanjiyopati)", likelihood: "common", keyFeature: "Periventriküler, yaşlı hasta, HT/DM öyküsü." },
            { diagnosis: "Multipl Skleroz (MS)", likelihood: "common", keyFeature: "Periventriküler (Dawson fingers), juxtakortikal, infratentoryel. Genç kadın." },
            { diagnosis: "Migren", likelihood: "less_common", keyFeature: "Birkaç noktasal subkortikal lezyon. Stabil klinik." },
            { diagnosis: "ADEM", likelihood: "less_common", keyFeature: "Monofazik, viral enfeksiyon sonrası, bilateral asimetrik büyük lezyonlar." },
            { diagnosis: "NMO (Devic)", likelihood: "rare", keyFeature: "Optik sinir + uzun segment spinal kord (≥3 segment) lezyonları. AQP4 antikoru." },
            { diagnosis: "PML", likelihood: "rare", keyFeature: "İmmunsuprese hasta, asimetrik beyaz cevher, kitle etkisi/kontrastlanma yok." }
        ],
        clinicalPearl: "MS kriterleri: Zamansal ve mekansal ayrım (DIS + DIT). Dawson fingers + Kontrastlanan lezyon + Kortikal lezyon → MS."
    },
    {
        id: "cystic_sellar_lesion",
        finding: "Kistik Seller/Paraseller Lezyon",
        modality: "MR",
        organ: "Beyin",
        differentials: [
            { diagnosis: "Rathke Kisti", likelihood: "common", keyFeature: "İntrasellar, T1 hiperintens (protein), kontrastlanma yok." },
            { diagnosis: "Kraniofaringiom", likelihood: "common", keyFeature: "Kistik+solid, kalsifikasyon. Çocukta supraseller, erişkinde intra+supra." },
            { diagnosis: "Kistik Hipofiz Adenomu", likelihood: "less_common", keyFeature: "Sellar genişleme, duvar kontrastlanması. Hormonal aktivite araştır." },
            { diagnosis: "Araknoid Kist", likelihood: "less_common", keyFeature: "BOS sinyal intensitesi, tüm sekanslarda. Duvar kontrastlanmaz." },
            { diagnosis: "Epidermoid Kist", likelihood: "rare", keyFeature: "DWI hiperintens (kısıtlanma). BOS'tan ayrımı DWI ile yapılır." }
        ],
        clinicalPearl: "Supraseller kistik lezyon + kalsifikasyon → Kraniofaringiom. T1 parlak kist → Rathke veya proteinöz kraniofaringiom."
    },

    // --- THORAX ---
    {
        id: "solitary_pulmonary_nodule",
        finding: "Soliter Pulmoner Nodül (SPN)",
        modality: "BT",
        organ: "Toraks",
        differentials: [
            { diagnosis: "Granülom (Tbc, Histoplazma)", likelihood: "common", keyFeature: "Kalsifiye, stabil boyut, düzgün sınır, santral/laminar kalsifikasyon." },
            { diagnosis: "Akciğer Karsinomu", likelihood: "common", keyFeature: "Spiküle kenar, büyüme gösteren, >8mm, PET avid." },
            { diagnosis: "Hamartom", likelihood: "less_common", keyFeature: "Popcorn kalsifikasyon, yağ içeriği (-40 HU), düzgün kenar." },
            { diagnosis: "Metastaz (Soliter)", likelihood: "less_common", keyFeature: "Bilinen primer tümör öyküsü. Düzgün kenarlı, hızlı büyüme." },
            { diagnosis: "AVM (Arteriovenöz Malformasyon)", likelihood: "rare", keyFeature: "Besleyici arter + drene eden ven. Kontrastla homojen dolum." },
            { diagnosis: "İnflamatuar (Organize Pnömoni)", likelihood: "less_common", keyFeature: "Reverse halo sign, migratory pattern. Antibiyotik yanıtı." }
        ],
        clinicalPearl: "Fleischner kriterleri: <6mm → takip gerekmez (düşük riskli). >8mm → PET-BT veya biyopsi. Büyüme hızı (VDT) önemli."
    },
    {
        id: "mediastinal_mass",
        finding: "Mediastinal Kitle (Anterior/Orta/Posterior)",
        modality: "BT",
        organ: "Toraks",
        differentials: [
            { diagnosis: "Timoma / Timik Karsinom", likelihood: "common", keyFeature: "Anterior mediastinum. Myastenia Gravis ile ilişkili. Kalsifikasyon olabilir." },
            { diagnosis: "Lenfoma (Hodgkin)", likelihood: "common", keyFeature: "Anterior+orta mediastinum. Büyük LAP konglomeratı. Genç erkek." },
            { diagnosis: "Germ Hücreli Tümör (Teratom)", likelihood: "less_common", keyFeature: "Anterior. Yağ + kalsifikasyon + yumuşak doku → dermoid." },
            { diagnosis: "Nörojenik Tümör (Schwannoma)", likelihood: "less_common", keyFeature: "Posterior mediastinum, paravertebral. Dumbbell şekli → spinal uzanım." },
            { diagnosis: "Retrosternal Guatr", likelihood: "less_common", keyFeature: "Superior mediastinum. Boyun tiroid ile sürekli. Kalsifikasyon." },
            { diagnosis: "Bronkojenik Kist", likelihood: "rare", keyFeature: "Orta mediastinum, subkarinal. Su dansiteli kist. Kontrastlanmaz." }
        ],
        clinicalPearl: "4T kuralı (Anterior): Timoma, Teratom, Tiroid, (Terrible) Lenfoma."
    },
    {
        id: "bilateral_hilar_lad",
        finding: "Bilateral Hiler Lenfadenopati",
        modality: "Akciğer Grafisi / BT",
        organ: "Toraks",
        differentials: [
            { diagnosis: "Sarkoidoz", likelihood: "common", keyFeature: "Bilateral simetrik hiler LAP ± perilenfatik nodüller. Genç kadın." },
            { diagnosis: "Lenfoma", likelihood: "common", keyFeature: "Asimetrik olabilir, büyük LAP kitlesi. B semptomlar." },
            { diagnosis: "Metastatik Hastalık", likelihood: "less_common", keyFeature: "Bilinen primer Ca. Asimetrik. Hematojen yayılım." },
            { diagnosis: "Enfeksiyon (Tbc, Fungal)", likelihood: "less_common", keyFeature: "Ateş, kültür pozitifliği. Tbc: tek taraflı olabilir, nekrotik LAP." },
            { diagnosis: "Silikozis/Pnömokonyoz", likelihood: "rare", keyFeature: "Mesleki maruziyet. Eggshell kalsifikasyon. Üst lob dominant." }
        ],
        clinicalPearl: "Bilateral simetrik hiler LAP + üveit + erythema nodosum → Löfgren sendromu (akut sarkoidoz)."
    },

    // --- ABDOMEN ---
    {
        id: "liver_lesion_hyper_arterial",
        finding: "Karaciğer Lezyonu — Arteriyel Faz Kontrastlanma",
        modality: "BT / MR (Dinamik)",
        organ: "Abdomen",
        differentials: [
            { diagnosis: "Hepatoselüler Karsinom (HCC)", likelihood: "common", keyFeature: "Sirotik KC, arteriyel wash-in + portal venöz wash-out + kapsül." },
            { diagnosis: "Fokal Nodüler Hiperplazi (FNH)", likelihood: "common", keyFeature: "Genç kadın, santral skar (T2 hiperintens), hepatobilyer faz retansiyon." },
            { diagnosis: "Hepatik Adenom", likelihood: "less_common", keyFeature: "OCP kullanımı, hemoraji riski, yağ/kanama içerebilir." },
            { diagnosis: "Hipervaskülier Metastaz", likelihood: "less_common", keyFeature: "RCC, melanom, NET, tiroid Ca. Multipl. Bilinen primer." },
            { diagnosis: "Hemanjiom (Flash-filling)", likelihood: "less_common", keyFeature: "Küçük hemanjiom hızlı dolabilir. T2 çok parlak." },
            { diagnosis: "Arterioportal Şant", likelihood: "rare", keyFeature: "Kama şeklinde, subkapsüler. Portal fazda izodense. Psödolezyon." }
        ],
        clinicalPearl: "LI-RADS: Sirotik KC'de arteriyel wash-in + wash-out + kapsül → LR-5 (kesin HCC). Gd-EOB ile hepatobilyer faz çok değerli."
    },
    {
        id: "t2_hypointense_liver",
        finding: "Karaciğer Lezyonu — T2 Hipointens",
        modality: "MR",
        organ: "Abdomen",
        differentials: [
            { diagnosis: "Hemanjiom (Hızlı akımlı / Skleroze)", likelihood: "less_common", keyFeature: "Nadir. Skleroze hemanjiom T2'de karanlık olabilir." },
            { diagnosis: "Hepatoselüler Karsinom (Diferansiye)", likelihood: "common", keyFeature: "İyi diferansiye HCC. Sirozda. Arteriyel kontrastlanma." },
            { diagnosis: "Metastaz (Musin-Poor)", likelihood: "common", keyFeature: "Kolon, meme Ca. T2 hipointens solid metastaz." },
            { diagnosis: "Demir İçeren Lezyon (Siderotic Nodül)", likelihood: "less_common", keyFeature: "Rejeneratif/displastik nodül. T2*/GRE'de sinyal kaybı." },
            { diagnosis: "Hepatik Adenom (Hemoraji sonrası)", likelihood: "rare", keyFeature: "Hemosiderin birikimi → T2 sinyal kaybı." }
        ],
        clinicalPearl: "T2 hipointens KC lezyonu → solid düşün. T2 çok parlak → kist veya hemanjiom. Aradaki → metastaz veya HCC."
    },
    {
        id: "adrenal_mass",
        finding: "Adrenal Kitle",
        modality: "BT / MR",
        organ: "Abdomen",
        differentials: [
            { diagnosis: "Adrenal Adenom", likelihood: "common", keyFeature: "Nativ <10 HU → lipid-rich adenom. Opposed-phase MR sinyal kaybı." },
            { diagnosis: "Metastaz", likelihood: "common", keyFeature: "Bilinen Ca, bilateral olabilir. Nativ >10 HU. Washout yetersiz." },
            { diagnosis: "Feokromasitoma", likelihood: "less_common", keyFeature: "T2 çok parlak (light-bulb sign). HT, taşikardi, terleme triadı." },
            { diagnosis: "Adrenokortikal Karsinom", likelihood: "rare", keyFeature: "Büyük (>4cm), heterojen, invazif. Hormonal aktif olabilir." },
            { diagnosis: "Miyelolipom", likelihood: "less_common", keyFeature: "Makroskopik yağ içeriği (-30 ile -120 HU). Tanısal." }
        ],
        clinicalPearl: "İnsidental adrenal nodül: <10 HU → adenom. >10 HU → Washout BT veya MR chemical shift. APW ≥60% veya RPW ≥40% → adenom."
    },
    {
        id: "renal_cystic_lesion",
        finding: "Böbrek Kistik Lezyon (Bosniak Sınıflaması)",
        modality: "BT / MR",
        organ: "Abdomen",
        differentials: [
            { diagnosis: "Basit Kist (Bosniak I)", likelihood: "common", keyFeature: "Su dansitesi, ince duvar, septas yok, kontrastlanma yok." },
            { diagnosis: "Minimal Komplike Kist (Bosniak II)", likelihood: "common", keyFeature: "İnce septas (<1mm), ince kalsifikasyon, hiperdense kist <3cm." },
            { diagnosis: "Multiloküler Kistik Nefroma (Bosniak IIF-III)", likelihood: "less_common", keyFeature: "Kalın septas, minimal kontrastlanma. Takip gerektirir." },
            { diagnosis: "Kistik RCC (Bosniak III-IV)", likelihood: "less_common", keyFeature: "Kalın irregüler septa/duvar, solid kontrastlanan komponent." },
            { diagnosis: "Apse / Enfekte Kist", likelihood: "less_common", keyFeature: "Duvar kalınlaşması, çevre infiltrasyon, klinik bulgular." },
            { diagnosis: "AML (Minimal Yağ)", likelihood: "rare", keyFeature: "Hiperdense olabilir ama kistik değil. Yağ yokluğunda zor tanı." }
        ],
        clinicalPearl: "Bosniak IIF → takip (5 yıl). Bosniak III → %50 malignite → cerrahi önerilir. Bosniak IV → maligniteden değerlendir."
    },

    // --- MSK ---
    {
        id: "lytic_bone_lesion",
        finding: "Litik Kemik Lezyonu",
        modality: "X-Ray / BT",
        organ: "Kas-İskelet",
        differentials: [
            { diagnosis: "Metastaz (Litik)", likelihood: "common", keyFeature: ">40 yaş. Multipl. Akciğer, meme, böbrek, tiroid Ca." },
            { diagnosis: "Multiple Miyelom / Plazmasitom", likelihood: "common", keyFeature: "'Punched-out' lezyonlar. Kafatasında ve aksiyel iskelet." },
            { diagnosis: "Dev Hücreli Tümör (GCT)", likelihood: "less_common", keyFeature: "Epifiz+metafiz, subartikülier. 20-40 yaş. 'Sabun köpüğü' görünüm." },
            { diagnosis: "Anevrizmaltümör Kemik Kisti (ABC)", likelihood: "less_common", keyFeature: "Ekspansil, sıvı-sıvı seviyeleri (fluid-fluid levels). <20 yaş." },
            { diagnosis: "Fibröz Displazi", likelihood: "less_common", keyFeature: "'Ground-glass' (buzlu cam) matriks. Genellikle monostotik." },
            { diagnosis: "Langerhans Hücreli Histiyositoz (LCH)", likelihood: "rare", keyFeature: "Çocuk, kafatasında permeativ litik lezyon. 'Beveled edge' görünüm." }
        ],
        clinicalPearl: "FEGNOMASHIC mnemoniği: Fibrous dysplasia, EG, Giant cell, NOF, Mets/Myeloma, Aneurysmal, Simple cyst, Hemangioma, Infection, Chondroblastoma."
    },
    {
        id: "sclerotic_bone_lesion",
        finding: "Sklerotik Kemik Lezyonu",
        modality: "X-Ray / BT",
        organ: "Kas-İskelet",
        differentials: [
            { diagnosis: "Osteoblastik Metastaz", likelihood: "common", keyFeature: "Prostat, meme Ca. Multipl. Aksiyel iskelet." },
            { diagnosis: "Kemik Adası (Enostoz)", likelihood: "common", keyFeature: "Küçük, yuvarlak, düzgün kenarlı, stabil. Radyonüklid negatif." },
            { diagnosis: "Paget Hastalığı", likelihood: "less_common", keyFeature: "Kemik genişlemesi, kortikal kalınlaşma, cotton-wool görünüm (kafada)." },
            { diagnosis: "Lenfoma (Kemik)", likelihood: "less_common", keyFeature: "Permeativ skleroz, yumuşak doku kitlesi. Ivory vertebra." },
            { diagnosis: "Osteoid Osteoma", likelihood: "less_common", keyFeature: "Nidus (<2cm) + çevre reaktif skleroz. Gece ağrısı, aspirin yanıtı." },
            { diagnosis: "Melorheostosis", likelihood: "rare", keyFeature: "Kemik korteksinde 'akan mum' görünümü. Dermatomal dağılım." }
        ],
        clinicalPearl: "Ivory vertebra DDx: Paget, metastaz (prostat/meme), lenfoma. Paget'te vertebra büyümüştür, metastazda normal boyut."
    },
    {
        id: "joint_effusion_with_erosion",
        finding: "Eklem Efüzyonu + Kemik Erozyonu",
        modality: "MR / X-Ray",
        organ: "Kas-İskelet",
        differentials: [
            { diagnosis: "Romatoid Artrit (RA)", likelihood: "common", keyFeature: "Simetrik, MCP/PIP eklemler. Periartikülier osteopeni. Pannus." },
            { diagnosis: "Gut Artriti", likelihood: "common", keyFeature: "Asimetrik, 1. MTP. 'Overhanging edge' erozyonlar. Tofüs." },
            { diagnosis: "Septik Artrit", likelihood: "less_common", keyFeature: "Monoartikülier, akut. Sinovyal kontrastlanma. Aspirasyon tanısal." },
            { diagnosis: "Psöriatik Artrit", likelihood: "less_common", keyFeature: "DIP eklem tutulumu, 'pencil-in-cup' deformitesi, daktilitis." },
            { diagnosis: "PVNS (Pigmented Villonodular Synovitis)", likelihood: "rare", keyFeature: "T2 hipointens nodüller (hemosiderin). GRE'de 'blooming'." }
        ],
        clinicalPearl: "Erozyon lokalizasyonu: RA → bare area (çıplak bölge). Gut → overhanging edge. Psöriatik → pencil-in-cup."
    },

    // --- PEDIATRIK ---
    {
        id: "posterior_fossa_mass_pedi",
        finding: "Posterior Fossa Kitlesi (Çocuk)",
        modality: "MR",
        organ: "Pediatrik",
        differentials: [
            { diagnosis: "Pilositik Astrositom (Serebellar)", likelihood: "common", keyFeature: "Kistik+mural nodül. Kontrast tutan nodül. İyi prognoz." },
            { diagnosis: "Medulloblastom", likelihood: "common", keyFeature: "Midline, vermis kaynaklı. DWI kısıtlanma (hücresel). Drop metastaz." },
            { diagnosis: "Ependimom", likelihood: "less_common", keyFeature: "4. ventrikül tabanından. Foramenlere uzanım ('plastic' tümör). Kalsifikasyon." },
            { diagnosis: "Beyin Sapı Gliomu (DIPG)", likelihood: "less_common", keyFeature: "Pons difüz genişlemiş. Kontrastlanma minimal. Kötü prognoz." },
            { diagnosis: "Atipik Teratoid/Rhabdoid (ATRT)", likelihood: "rare", keyFeature: "<3 yaş. Heterojen. DWI kısıtlanma. Agresif." }
        ],
        clinicalPearl: "Çocukta posterior fossa: Midline → medulloblastom veya ependimom. Lateral serebellar → pilositik astrositom."
    },

    // --- VASKÜLER / GENEL ---
    {
        id: "calcified_lymph_nodes",
        finding: "Kalsifiye Lenf Nodları",
        modality: "BT",
        organ: "Genel",
        differentials: [
            { diagnosis: "Granülomatöz Hastalık (Tbc, Sarkoidoz)", likelihood: "common", keyFeature: "Mediastinal/hiler. Eggshell veya amorf kalsifikasyon." },
            { diagnosis: "Tedavi Sonrası Lenfoma", likelihood: "common", keyFeature: "KT/RT sonrası rezidü LAP kalsifikasyonu." },
            { diagnosis: "Silikozis / Pnömokonyoz", likelihood: "less_common", keyFeature: "Mesleki maruziyet. Eggshell kalsifikasyon. Üst lob fibrozis." },
            { diagnosis: "Metastaz (Müsinöz/Papiller Tiroid)", likelihood: "less_common", keyFeature: "Tiroid papiller Ca metastazı. Over müsinöz Ca." },
            { diagnosis: "Castleman Hastalığı", likelihood: "rare", keyFeature: "Hiyalin-vasküler tip. Hipervaskülier LAP + kalsifikasyon." }
        ],
        clinicalPearl: "Eggshell kalsifikasyon → silikozis, sarkoidoz. Dağınık amorf → granülomatöz (Tbc)."
    },
    {
        id: "ground_glass_opacity",
        finding: "Buzlu Cam Opasitesi (GGO) — Akciğer",
        modality: "BT (YRBT)",
        organ: "Toraks",
        differentials: [
            { diagnosis: "Viral Pnömoni (COVID-19, Influenza)", likelihood: "common", keyFeature: "Bilateral, periferal, alt lob dominant. Yuvarlak GGO." },
            { diagnosis: "PCP (Pneumocystis jirovecii)", likelihood: "common", keyFeature: "AIDS hastası. Bilateral perihiler GGO. CD4<200." },
            { diagnosis: "Organize Pnömoni (OP/COP)", likelihood: "less_common", keyFeature: "Periferik konsolidasyon + GGO. Reverse halo sign." },
            { diagnosis: "Alveoler Hemoraji", likelihood: "less_common", keyFeature: "Bilateral GGO + hemoptizi. Vaskülit, antikoagülan." },
            { diagnosis: "Hipersensitivite Pnömonisi", likelihood: "less_common", keyFeature: "Üst-orta lob dominant. Maruziyet öyküsü. Mozaik atenüasyon." },
            { diagnosis: "Adenokarsinom in situ (AAH/AIS)", likelihood: "rare", keyFeature: "Persistan soliter GGO. Yavaş büyüme. Takip veya rezeksiyon." }
        ],
        clinicalPearl: "Persistan soliter GGO >6mm → 3 aylık takip BT. Büyüme/solid komponent gelişimi → malignite."
    }
];
