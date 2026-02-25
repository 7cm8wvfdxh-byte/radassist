import { Pathology } from "@/types";

export const breastPathologies: Pathology[] = [
    {
        id: "malignant-mass-breast",
        name: "Malign Kitle (İnvaziv Duktal Ca)",
        nameEn: "Malignant Mass (Invasive Ductal Ca)",
        category: "Mass",
        categoryEn: "Mass",
        mechanism: "DNA hasarı ve genetik mutasyonlar (BRCA1/2, HER2 amplifikasyonu) → terminal duktulo-lobüler ünitenin anaplastik dönüşümü → invaziv büyüme. Tümör stroması desmoplastik reaksiyon oluşturur → spiküle görünüm + sertlik.",
        keyPoints: ["Spiküle kontur en önemli malignite kriteridir.", "Taller-than-wide (Dikey) oryantasyon ultrasona özgüdür.", "Posterior akustik gölgeleme desmoplaziyi gösterir."],
        keyPointsEn: ["Spiculated margin is the most important malignancy criterion.", "Taller-than-wide (Vertical) orientation is specific to ultrasound.", "Posterior acoustic shadowing indicates desmoplasia."],
        findings: {
            usg: {
                description: "Spiküle veya mikrolobüle kontur (Irregular margin). Taller-than-wide (Dikey oryantasyon). Posterior akustik gölgeleme (Posterior shadowing). Hiperekoik halo (Desmoplastik reaksiyon)."
            },
            mammography: {
                description: "Yüksek dansiteli kitle. Spiküle kenar. Yapısal distorsiyon eşlik edebilir. Pleomorfik mikrokalsifikasyonlar (BI-RADS 5)."
            },
            mri: {
                t1_c_dynamic: "Tip 3 (Washout) kinetik eğri. Heterojen kontrastlanma. Rim (çevresel) kontrastlanma."
            }
        },
        findingsEn: {
            usg: {
                description: "Spiculated or microlobulated margin (Irregular margin). Taller-than-wide (Vertical orientation). Posterior acoustic shadowing. Hyperechoic halo (Desmoplastic reaction)."
            },
            mammography: {
                description: "High density mass. Spiculated margin. Associated architectural distortion. Pleomorphic microcalcifications (BI-RADS 5)."
            },
            mri: {
                t1_c_dynamic: "Type 3 (Washout) kinetic curve. Heterogeneous enhancement. Rim (peripheral) enhancement."
            }
        },
        etiology: "Genetik mutasyonlar (BRCA1/2, TP53, HER2 amplifikasyonu). Risk faktörleri: Aile öyküsü, erken menarş, geç menopoz, nulliparite, uzun süreli HRT, obezite, radyasyon maruziyeti.",
        differentialDiagnosis: [
            "Fibroadenom (Düzgün sınırlı, oval, wider-than-tall, mobil)",
            "Yağ Nekrozu (Travma öyküsü, yağ kisti, egg-shell kalsifikasyon)",
            "Granüler Hücreli Tümör (Spiküle kenar, benign ancak maligniteyi taklit eder)",
            "Radyal Skar (Spiküle, santral radyolusensi, stellat yapı)"
        ],
        goldStandard: "Mammografi (tarama) + USG (karakterizasyon) + MRI (evreleme): BI-RADS 5 → Kalın iğne (core) biyopsi ile histopatolojik doğrulama.",
        clinicalPearl: "Spiküle kenar + posterior akustik gölgeleme + Tip 3 (washout) kinetik eğri = İnvaziv karsinom üçlüsü.",
        references: [
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "ACR Appropriateness Criteria: Palpable Breast Masses. American College of Radiology.",
            "Radiopaedia.org - Breast lesion characterization"
        ]
    },
    {
        id: "fibroadenoma",
        name: "Fibroadenom",
        nameEn: "Fibroadenoma",
        category: "Mass",
        categoryEn: "Mass",
        mechanism: "Hormonal stimülasyon (östrojen) → stroma ve lobüler epitelyal doku proliferasyonu → bifazik benign tümör. Kapsüler büyüme düzenli sınırları oluşturur. İnvolüsyonda kollajen birikimi → kaba 'popcorn' kalsifikasyon.",
        keyPoints: ["Genç hastalarda en sık benign kitle.", "Ultrasonda 'Popcorn' kalsifikasyon involüsyonu gösterir.", "İyi sınırlı ve mobildir."],
        keyPointsEn: ["Most common benign mass in young patients.", "'Popcorn' calcification on ultrasound indicates involution.", "Well-defined and mobile."],
        findings: {
            usg: {
                description: "Oval şekil (Wider-than-tall). Sirkumskribe (Düzgün) kenar. Hipoekoik veya izoekoik. Posterior akustik güçlenme (bazen)."
            },
            mammography: {
                description: "İyi sınırlı kitle. Kaba (Popcorn) kalsifikasyonlar (İnvolüsyonda)."
            },
            mri: {
                t1_c_dynamic: "Tip 1 (Persistan) veya Tip 2 (Plato) kinetik eğri. Non-ihanche septalar (Dark internal septations)."
            }
        },
        findingsEn: {
            usg: {
                description: "Oval shape (Wider-than-tall). Circumscribed (Smooth) margin. Hypoechoic or isoechoic. Posterior acoustic enhancement (sometimes)."
            },
            mammography: {
                description: "Well-defined mass. Coarse (Popcorn) calcifications (in involution)."
            },
            mri: {
                t1_c_dynamic: "Type 1 (Persistent) or Type 2 (Plateau) kinetic curve. Non-enhancing septations (Dark internal septations)."
            }
        },
        etiology: "Östrojene bağımlı fibroepitelyal neoplazi. Puberte ve gebelikte büyüyebilir, menopoz sonrası involüsyon gösterir. Genetik: MED12 mutasyonu sık.",
        differentialDiagnosis: [
            "Filloides Tümör (Hızlı büyüme, >5 cm, kistik alanlar, yaş >35)",
            "İnvaziv Karsinom (Spiküle kenar, posterior gölgeleme, Tip 3 kinetik)",
            "Papillom (İntraduktal lokalizasyon, kanlı akıntı)",
            "Lenfoma (Düzgün sınırlı, belirgin hipoekoik, bilateral olabilir)"
        ],
        goldStandard: "USG: İlk değerlendirme (genç hastada). BI-RADS 3 → 6 ay takip veya core biyopsi. Mammografi: >30 yaş üstünde eklenir.",
        clinicalPearl: "30 yaş altı kadında oval, düzgün sınırlı, mobil kitle = Fibroadenom düşün, BI-RADS 3 ile takip edilebilir.",
        references: [
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Radiopaedia.org - Breast imaging"
        ]
    },
    {
        id: "cyst-simple",
        name: "Basit Kist",
        nameEn: "Simple Cyst",
        category: "Cystic",
        categoryEn: "Cystic",
        mechanism: "Terminal duktülün fibröz obliterasyonu veya dilate olması → luminal sekresyon birikimi → fibroelastik duvarlı, saf seröz sıvı içeren kavite. Sıvı içeriği akustik empedans farkı yaratmaz → posterior güçlenme.",
        keyPoints: ["BI-RADS 2 lezyondur, işlem gerekmez.", "Anekoik, keskin sınırlı, posterior güçlenme.", "Septa veya solid komponent içermez."],
        keyPointsEn: ["BI-RADS 2 lesion, no action needed.", "Anechoic, sharp margins, posterior enhancement.", "No septations or solid components."],
        findings: {
            usg: {
                description: "Anekoik (Siyah). İnce, düzgün duvar. Posterior akustik güçlenme (Posterior enhancement). İçerik/Septa yok."
            },
            mammography: {
                description: "Yuvarlak/Oval şekilli opasite. Hale işareti (Halo sign)."
            }
        },
        findingsEn: {
            usg: {
                description: "Anechoic (Black). Thin, smooth wall. Posterior acoustic enhancement. No content/septa."
            },
            mammography: {
                description: "Round/Oval shaped opacity. Halo sign."
            }
        },
        etiology: "Hormonal dalgalanmalar (östrojen/progesteron) ve lobüler involüsyon. Perimenapozal dönemde en sık. Terminal duktal lobüler ünitede (TDLU) sekresyon birikimi.",
        differentialDiagnosis: [
            "Komplike Kist (İç ekolar, debris, BI-RADS 3)",
            "Galaktosel (Laktasyon döneminde, yağ-sıvı seviyesi)",
            "Kistik Papillom (Kist duvarında solid nodül, Doppler pozitif)",
            "Kistik Metastaz (Düzensiz duvar, solid komponent, klinik öykü)"
        ],
        goldStandard: "USG: Tanı için yeterli. Anekoik + ince duvar + posterior güçlenme = Basit kist (BI-RADS 2). Ek tetkik gerekmez.",
        clinicalPearl: "Anekoik + ince düzgün duvar + posterior akustik güçlenme = Basit kist üçlüsü → BI-RADS 2, takip gerekmez.",
        references: [
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "ACR Appropriateness Criteria: Evaluation of the Symptomatic Breast. American College of Radiology."
        ]
    },
    {
        id: "complicated-cyst",
        name: "Komplike Kist",
        nameEn: "Complicated Cyst",
        category: "Cystic",
        categoryEn: "Cystic",
        mechanism: "Basit kist içine kanama veya inflamasyon → sıvı içeriğinde protein ve debrinin artması → homojen düşük seviyeli ekolar. Vasküler yapı içermez; Doppler negatiftir.",
        keyPoints: ["İçerik (debris) vardır ama solid komponent yoktur.", "Vaskülarite içermez.", "BI-RADS 3 kabul edilebilir."],
        keyPointsEn: ["Contains debris but no solid component.", "No vascularity.", "Considered BI-RADS 3."],
        findings: {
            usg: {
                description: "Homojen düşük seviyeli ekolar. Hareketli debris. Duvar kalınlaşması yok. Vaskülarite (Doppler) negatif."
            }
        },
        findingsEn: {
            usg: {
                description: "Homogeneous low-level echoes. Mobile debris. No wall thickening. Vascularity (Doppler) negative."
            }
        },
        etiology: "Basit kistin içine kanama (spontan veya travmatik), enfeksiyon veya yüksek proteinli sekresyon birikimi. Hormonal değişiklikler zemin hazırlar.",
        differentialDiagnosis: [
            "Basit Kist (Anekoik, iç eko yok, BI-RADS 2)",
            "İntrakistik Papillom (Doppler pozitif solid nodül, kist duvarında kitle)",
            "Kistik Karsinom (Düzensiz duvar, solid komponent, vaskülarite mevcut)",
            "Apse (Kalın düzensiz duvar, klinik enfeksiyon bulguları, ateş)"
        ],
        goldStandard: "USG: İlk değerlendirme. Doppler negatif + homojen düşük ekolar = Komplike kist (BI-RADS 3). 6 ay takip USG veya aspirasyon.",
        clinicalPearl: "Komplike kistte Doppler negatifliği anahtar bulgudur — solid komponentli intrakistik lezyonlardan ayırt eder.",
        references: [
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Radiopaedia.org - Breast cysts"
        ]
    },
    {
        id: "intraductal-papilloma",
        name: "İntraduktal Papillom",
        nameEn: "Intraductal Papilloma",
        category: "Ductal",
        categoryEn: "Ductal",
        mechanism: "Retroareolar büyük duktusun epitelinin fibro-vasküler pediküllü papiler proliferasyonu → duktus obstrüksiyonu → proksimal dilatasyon + seröz/kanlı akıntı. Apokrin metaplazi ve epiteli kaplayan papiler dallanmalar karakteristiktir.",
        keyPoints: ["Kanlı meme başı akıntısının en sık benign nedenidir.", "Duktus içinde solid lezyon.", "Ektatik duktus görülür."],
        keyPointsEn: ["Most common benign cause of bloody nipple discharge.", "Solid lesion within duct.", "Ectatic duct seen."],
        findings: {
            usg: {
                description: "Dilate duktus içinde solid nodül. Vaskülarize intra-kistik kitle. Duktus ektazisi."
            },
            mammography: {
                description: "Genellikle bulgu vermez. Retroareolar iyi sınırlı opasite veya kalsifikasyon (nadir)."
            },
            mri: {
                t1_c: "Duktus içinde kontrastlanan nodül. Duktus trasesi boyunca uzanım."
            }
        },
        findingsEn: {
            usg: {
                description: "Solid nodule within dilated duct. Vascularized intra-cystic mass. Duct ectasia."
            },
            mammography: {
                description: "Usually occult. Retroareolar well-defined opacity or calcification (rare)."
            },
            mri: {
                t1_c: "Enhancing nodule within the duct. Extension along the duct track."
            }
        },
        etiology: "Duktus epitelinin fibrovasküler çekirdek etrafında papiller proliferasyonu. Santral (soliter): Büyük retroareolar duktus, 40-50 yaş. Periferik (multipl): Küçük periferik duktuslar, malignite riski daha yüksek.",
        differentialDiagnosis: [
            "DCIS (Mikrokalsifikasyonlar, non-mass enhancement, duktal dağılım)",
            "İnvaziv Papiller Karsinom (Düzensiz kenar, stromal invazyon, yaşlı hasta)",
            "Duktus Ektazisi (Duktus dilatasyonu var ama intraluminal solid kitle yok)",
            "Galaktore (Bilateral süt benzeri akıntı, endokrin neden, solid lezyon yok)"
        ],
        goldStandard: "USG + Duktografi (galaktografi): Duktus içi dolum defekti. MRI: Kontrastlanan intraduktal lezyon. Kesin tanı: Eksizyonel biyopsi.",
        clinicalPearl: "Tek taraflı, spontan, kanlı/seröz meme başı akıntısı olan kadında ilk düşünülecek tanı intraduktal papillomdur.",
        references: [
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "ACR Appropriateness Criteria: Evaluation of Nipple Discharge. American College of Radiology.",
            "Radiopaedia.org - Breast cysts"
        ]
    },
    {
        id: "fat-necrosis",
        name: "Yağ Nekrozu",
        nameEn: "Fat Necrosis",
        category: "Benign Mimic",
        categoryEn: "Benign Mimic",
        mechanism: "Travma, cerrahi veya radyasyon → yağ hücrelerinde iskemik nekroz → lipidlerin serbest yağ asitlerine dönüşümü → granülomatöz inflamatuar yanıt → fibrozis. Kapsülleşme: yağ kisti (radyolusen merkezli, egg-shell kalsifikasyon) → eski lezyonda distrofik kalsifikasyon.",
        keyPoints: ["Travma öyküsü önemlidir.", "Maligniteyi taklit edebilir.", "Yağ kisti ve distrofik kalsifikasyon tipiktir."],
        keyPointsEn: ["History of trauma is important.", "Can mimic malignancy.", "Oil cyst and dystrophic calcification are typical."],
        findings: {
            usg: {
                description: "Yağ kisti (Oil cyst). Hipoekoik veya kompleks kitle. Ekojenik bantlar."
            },
            mammography: {
                description: "Yağ kisti (Radyolusent merkezli). Yumurta kabuğu (Egg-shell) kalsifikasyonu. Distrofik kalsifikasyonlar."
            }
        },
        findingsEn: {
            usg: {
                description: "Oil cyst. Hypoechoic or complex mass. Echogenic bands."
            },
            mammography: {
                description: "Oil cyst (Radiolucent center). Egg-shell calcification. Dystrophic calcifications."
            }
        },
        etiology: "Travma (en sık), meme cerrahisi (lumpektomi, redüksiyon), radyoterapi, biyopsi sonrası. Obez hastalarda ve büyük memeli kadınlarda daha sık.",
        differentialDiagnosis: [
            "İnvaziv Karsinom (Spiküle kenar, posterior gölgeleme, klinik sert kitle)",
            "Yağ İçeren Lezyon — Hamartom (Yağ + fibroglandüler doku karışımı, kapsüllü)",
            "Granülomatöz Mastit (Düzensiz hipoekoik alan, bilateral olabilir, tüberküloz/sarkoidoz)",
            "Seroma (Cerrahi sonrası, saf sıvı koleksiyonu, solid komponent yok)"
        ],
        goldStandard: "Mammografi: Yağ kisti (radyolusen merkez + egg-shell kalsifikasyon) tanı koydurucudur. Şüpheli olgularda MRI veya biyopsi.",
        clinicalPearl: "Mammografide radyolusen merkezli kitle + çevresel (egg-shell) kalsifikasyon + travma/cerrahi öyküsü = Yağ nekrozu, biyopsi gerekmez.",
        references: [
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Radiopaedia.org - Breast lesion characterization"
        ]
    },
    {
        id: "dcis",
        name: "Duktal Karsinoma In Situ (DCIS)",
        nameEn: "Ductal Carcinoma In Situ (DCIS)",
        category: "Malign",
        categoryEn: "Malignant",
        keyPoints: [
            "İnvaziv olmayan meme kanseri — bazal membranı geçmez.",
            "Mammografi: Segmental/lineer ince pleomorfik mikrokalsifikasyonlar = Klasik bulgu.",
            "MRI: Non-mass enhancement (NME) — duktal/segmental dağılım.",
            "Tedavisiz invaziv kansere ilerleyebilir (%30-50)."
        ],
        keyPointsEn: [
            "Non-invasive breast cancer — does not cross basement membrane.",
            "Mammography: Segmental/linear fine pleomorphic microcalcifications = Classic finding.",
            "MRI: Non-mass enhancement (NME) — ductal/segmental distribution.",
            "May progress to invasive cancer without treatment (30-50%)."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "Mammografi - Mikrokalsifikasyonlar", modality: "Mammography" },
            { url: "/images/placeholder_source.png", caption: "MRI - Duktal Non-Mass Tutulum", modality: "MRI" }
        ],
        findings: {
            mammography: {
                description: "Segmental veya lineer dağılımlı ince pleomorfik/lineer mikrokalsifikasyonlar (BI-RADS 4-5). Düzensiz sınırlı kitle (komedo tip). Asimetri."
            },
            usg: {
                description: "DCIS USG'de görülmeyebilir (%50-60). Düzensiz hipoekoik alan. Mikrokalsifikasyonlar: Hiperekojenik noktacıklar. Duktal genişleme."
            },
            mri: {
                t1_c: "Non-mass enhancement (NME): Segmental, duktal veya lineer dağılım. Kinetik: Plateau veya wash-out paterni. Kitlesel lezyon daha az sık.",
                other_sequences: "DWI: ADC değeri düşük (invaziv kanserle örtüşebilir)."
            }
        },
        findingsEn: {
            mammography: {
                description: "Fine pleomorphic/linear microcalcifications in segmental or linear distribution (BI-RADS 4-5). Irregular-bordered mass (comedo type). Asymmetry."
            },
            usg: {
                description: "DCIS may not be visualized on USG (50-60%). Irregular hypoechoic area. Microcalcifications: Hyperechoic punctate foci. Ductal dilatation."
            },
            mri: {
                t1_c: "Non-mass enhancement (NME): Segmental, ductal or linear distribution. Kinetics: Plateau or wash-out pattern. Mass lesion less common.",
                other_sequences: "DWI: Low ADC value (may overlap with invasive cancer)."
            }
        },
        mechanism: "Epitelyal hücreler lümen içinde prolifere olur, bazal membran sağlamdır. Komedo nekroz (yüksek grade): Nekrotik merkez + kalsifikasyon → mammografide mikrokalsifikasyonlar. MRI'da non-mass enhancement: Duktal sistem boyunca yayılım, kitlesel karsinom oluşturmaz.",
        etiology: "Yaş (50+ sık), aile öyküsü, BRCA1/2, yoğun meme dokusu, hormon tedavisi.",
        differentialDiagnosis: [
            "Fibrokistik Değişiklikler (Yaygın kalsifikasyonlar, bilateral, yuvarlak/amorf)",
            "Sklerozan Adenozis (Gruplu kalsifikasyonlar, lobüler dağılım, benign)",
            "İnvaziv Duktal Karsinom (Kitle mevcut, spiküle kenar, bazal membran aşılmış)",
            "Lobüler Karsinoma In Situ — LCIS (Genellikle görüntülemede okkült, insidental bulgu)"
        ],
        goldStandard: "Mammografi (mikrokalsifikasyon tespiti) + Stereotaktik vakum biyopsi. MRI: Hastalık yaygınlığının değerlendirilmesi ve cerrahi planlama.",
        clinicalPearl: "Mammografide segmental/lineer dağılımlı ince pleomorfik mikrokalsifikasyonlar = DCIS'e kadar suçlu kabul et.",
        references: [
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Radiopaedia.org - Breast imaging",
            "ACR Appropriateness Criteria: Breast Microcalcifications. American College of Radiology."
        ]
    },
    {
        id: "phyllodes-tumor",
        name: "Filloides Tümör (Sistadenofibrom)",
        nameEn: "Phyllodes Tumor",
        category: "Nadir",
        categoryEn: "Rare",
        keyPoints: [
            "Fibroepitelyal tümör — benign/borderline/malign olabilir.",
            "Büyük, hızlı büyüyen kitle (kısa sürede >5cm) — Fibroadenomu taklit eder.",
            "USG: Düzgün sınırlı, lobüle hipoekoik kitle + internal kistik alanlar.",
            "Malign filloides: Lokal nüks sık, metastaz akciğere (lenf nodu değil!)."
        ],
        keyPointsEn: [
            "Fibroepithelial tumor — can be benign/borderline/malignant.",
            "Large, rapidly growing mass (>5cm in short time) — mimics fibroadenoma.",
            "USG: Well-defined, lobular hypoechoic mass + internal cystic areas.",
            "Malignant phyllodes: Frequent local recurrence, metastasis to lung (not lymph node!)."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Büyük Lobüle Kitle + Kistik Alan", modality: "USG" },
            { url: "/images/placeholder_source.png", caption: "MRI - Heterojen Filloides Tümör", modality: "MRI" }
        ],
        findings: {
            usg: {
                description: "Büyük, düzgün sınırlı, lobüle hipoekoik kitle. İçinde kistik alanlar (yırtılmış yaprak benzeri boşluklar). Posterior akustik güçlenme. Hızlı büyüme öyküsü."
            },
            mammography: {
                description: "Büyük, oval/lobüle, düzgün sınırlı, yoğun kitle. Kalsifikasyon genellikle yok (fibroadenomdan farkı). BI-RADS 3-4."
            },
            mri: {
                t2: "Yoğun heterojen kitle, içinde T2 hiperintens kistik boşluklar ('yaprak' görünümü). T1+K: Heterojen kontrastlanma. Hızlı wash-in (malign bileşen).",
                dwi: "ADC değeri: Benign > malign (grade ile ters korelasyon)."
            }
        },
        findingsEn: {
            usg: {
                description: "Large, well-defined, lobular hypoechoic mass. Internal cystic spaces (leaf-like clefts). Posterior acoustic enhancement. History of rapid growth."
            },
            mammography: {
                description: "Large, oval/lobular, well-defined, dense mass. Usually no calcifications (differs from fibroadenoma). BI-RADS 3-4."
            },
            mri: {
                t2: "Dense heterogeneous mass with T2 hyperintense cystic spaces ('leaf' appearance). T1+C: Heterogeneous enhancement. Rapid wash-in (malignant component).",
                dwi: "ADC value: Benign > malignant (inversely correlated with grade)."
            }
        },
        mechanism: "İntralobüler stromal hücre proliferasyonu + epitelyal komponent → fibroepitelyal tümör. 'Yaprak' görünümü (phyllodes = yaprak): Belirgin stromal büyüme epiepitelyal duktus içine doğru itmesi. Malign: Stromal sarkomatöz transformasyon → Hematojen metastaz (akciğer sık). Lenfatik metastaz nadirdir (malign mezankimal tümör).",
        etiology: "Orta yaş kadın (35-50). Fibroadenomdan dönüşüm tartışmalı.",
        differentialDiagnosis: [
            "Fibroadenom (Yavaş büyüme, daha küçük, kistik alan yok, genç yaş)",
            "İnvaziv Karsinom (Spiküle kenar, posterior gölgeleme, lenfadenopati)",
            "Meme Sarkomu (Benzer büyüme paterni, ancak epitelyal komponent yok)",
            "Dev Fibroadenom (>5 cm fibroadenom, kistik alan yok, homojen)"
        ],
        goldStandard: "USG + Kalın iğne (core) biyopsi: Stromal sellülarite değerlendirmesi. İnce iğne biyopsisi yetersiz! Kesin tanı ve grade: Eksizyonel biyopsi.",
        clinicalPearl: "Hızla büyüyen büyük kitle + USG'de kistik boşluklar (yaprak yarıkları) = Filloides düşün; fibroadenom olarak takibe bırakma, core biyopsi yap.",
        references: [
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "Radiopaedia.org - Breast cysts"
        ]
    },
    {
        id: "galactocele",
        name: "Galaktosel",
        nameEn: "Galactocele",
        category: "Benign",
        categoryEn: "Benign",
        keyPoints: [
            "Emzirme döneminde obstrükte duktal sistemde süt birikimi.",
            "USG: İçeriğe göre anekoik/hipoekoik/kompleks. Yağ-sıvı seviyesi görülebilir.",
            "Mammografi: Yağ içeriği varsa hipolüsent (lucent) — 'oil cyst' benzeri.",
            "Genellikle kendiliğinden geriler; semptomluysa aspirasyon."
        ],
        keyPointsEn: [
            "Milk retention cyst due to obstructed ductal system during lactation.",
            "USG: Anechoic/hypoechoic/complex depending on content. Fat-fluid level may be seen.",
            "Mammography: Hypodense (lucent) if fat-containing — resembles 'oil cyst'.",
            "Usually resolves spontaneously; aspiration if symptomatic."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Hipoekoik Kistik Lezyon (Laktasyon)", modality: "USG" }
        ],
        findings: {
            usg: {
                description: "Laktasyon/emzirme döneminde, iyi sınırlı kistik lezyon. İçeriğe göre: Anekoik (sıvı süt), hipoekoik (kremsi içerik), kompleks (pıhtılaşmış süt). Yağ-sıvı seviyesi patognomonik. Posterior akustik güçlenme."
            },
            mammography: {
                description: "Yağ içeriği yüksekse hipolüsent (koyu). Kalsiyum içeriği yüksekse hiperdans. Miks: 'Hamada sign' — içeride yağ-sıvı seviyesi. Düzgün sınırlı, oval/yuvarlak kitle."
            },
            mri: {
                t1: "Yüksek T1 sinyal (yağ/protein içerik). İçerik farklılığına göre sinyal değişir.",
                t2: "T2 hiperintens (sıvı bileşen). Yağ-sıvı ayrışımı."
            }
        },
        findingsEn: {
            usg: {
                description: "During lactation/breastfeeding, well-defined cystic lesion. Content-dependent: Anechoic (liquid milk), hypoechoic (creamy content), complex (curdled milk). Fat-fluid level pathognomonic. Posterior acoustic enhancement."
            },
            mammography: {
                description: "Hypodense (dark) if high fat content. Hyperdense if high calcium content. Mixed: 'Hamada sign' — fat-fluid level within lesion. Well-defined, oval/round mass."
            },
            mri: {
                t1: "High T1 signal (fat/protein content). Signal varies with content.",
                t2: "T2 hyperintense (fluid component). Fat-fluid separation."
            }
        },
        mechanism: "Emzirme döneminde duktal obstrüksiyon (bükülme, inflamasyon, tıkanma) → süt birikimi → kistik genişleme. Süt içeriği zaman içinde değişir: Dilüe süt (anekoik) → kremsi madde (hipoekoik) → pıhtılaşmış protein (kompleks). Yağ-sıvı seviyesi: Yağ üstte (az yoğun), sıvı altta (fazla yoğun) — patognomonik.",
        etiology: "Laktasyon döneminde (emzirme) veya emzirme bitimi sonrasında. Duktal obstrüksiyon, travma, enflamasyon.",
        differentialDiagnosis: [
            "Basit Kist (Laktasyon dışı dönemde, anekoik, yağ-sıvı seviyesi yok)",
            "Meme Apsesi (Kalın düzensiz duvar, ateş, eritem, Doppler periferal vaskülarite)",
            "Yağ Nekrozu (Travma öyküsü, laktasyon dışı, yağ kisti + kalsifikasyon)",
            "Laktasyonel Adenom (Solid kitle, emzirme döneminde, hipoekoik, vaskülarize)"
        ],
        goldStandard: "USG: Tanı için yeterli (laktasyon döneminde kistik lezyon + yağ-sıvı seviyesi). Aspirasyon: Hem tanısal (süt içeriği) hem terapötik.",
        clinicalPearl: "Emziren kadında kistik kitle + yağ-sıvı seviyesi = Galaktosel, aspirasyonda süt gelir → tanı doğrulanır.",
        references: [
            "Kopans DB. Breast Imaging. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.",
            "ACR Appropriateness Criteria: Breast Pain. American College of Radiology.",
            "Radiopaedia.org - Breast lesion characterization"
        ]
    },
    {
        id: "invasive-lobular-carcinoma",
        name: "İnvaziv Lobüler Karsinom (ILC)",
        nameEn: "Invasive Lobular Carcinoma (ILC)",
        category: "Malign",
        categoryEn: "Malignant",
        mechanism: "E-cadherin kaybı → tek sıra halinde infiltratif büyüme (Indian file pattern) → USG ve mammografide gizli kalabilir. Bilateral ve multifokal olma eğilimi yüksek. İnvaziv karsinomların %10-15'i.",
        keyPoints: ["E-cadherin kaybı PATOGNOMONİK (immünohistokimya).", "Mammografi ve USG'de GİZLİ kalabilir (desmoplastik reaksiyon az).", "MRI en duyarlı modalite (multifokalite ve bilateralite tespiti).", "Bilateral meme kanseri riski artmış."],
        keyPointsEn: ["E-cadherin loss PATHOGNOMONIC (immunohistochemistry).", "May be OCCULT on mammography and USG (less desmoplastic reaction).", "MRI most sensitive modality (multifocality and bilaterality detection).", "Increased risk of bilateral breast cancer."],
        findings: {
            mammography: { description: "Asimetrik dansite veya yapısal distorsiyon. Kitle her zaman görülmez. Kalsifikasyon nadir. BI-RADS 4 veya 5." },
            usg: { description: "İll-defined hipoekoik alan veya posterior akustik gölgeleme. Belirgin kitle oluşturmayabilir." },
            mri: { t1_c_dynamic: "İrregüler kitle veya non-mass enhancement. Multifokal ve multisentrisite en iyi MRI ile saptanır. Tip 3 kinetik eğri." }
        },
        findingsEn: {
            mammography: { description: "Asymmetric density or architectural distortion. Mass may not always be visible. Calcification rare. BI-RADS 4 or 5." },
            usg: { description: "Ill-defined hypoechoic area or posterior acoustic shadowing. May not form a discrete mass." },
            mri: { t1_c_dynamic: "Irregular mass or non-mass enhancement. Multifocality and multicentricity best detected by MRI. Type 3 kinetic curve." }
        },
        etiology: "CDH1 gen mutasyonu (herediter diffüz gastrik kanser sendromu ile ilişkili). Hormon reseptör pozitifliği yüksek (%90+ ER+).",
        differentialDiagnosis: ["İnvaziv duktal karsinom (daha belirgin kitle)", "Yapısal distorsiyon (radyal skar, cerrahi skar)", "Lenfoma (bilateral, düşük kontrastlanma)"],
        goldStandard: "Mammografi + USG + MRI (multifokalite). Histopatoloji: E-cadherin negatif.",
        clinicalPearl: "Mammografide gizli meme kanseri + MRI'da non-mass enhancement = ILC düşün. Cerrahi öncesi MRI zorunlu (multifokalite ve kontralateral hastalık).",
        references: ["ACR BI-RADS Atlas. 5th ed. American College of Radiology; 2013.", "Radiopaedia.org - Invasive lobular carcinoma"]
    },
    {
        id: "inflammatory-breast-cancer",
        name: "İnflamatuvar Meme Kanseri",
        nameEn: "Inflammatory Breast Cancer",
        category: "Malign",
        categoryEn: "Malignant",
        mechanism: "Dermal lenfatiklerin tümör embolisi → lenfatik obstrüksiyon → diffüz ödem ('peau d'orange'). Klinik tanı: >1/3 meme cildinde eritem ve ödem. En agresif meme kanseri formu.",
        keyPoints: ["KLİNİK TANI: Eritem + ödem + peau d'orange (>1/3 meme cildi).", "Belirgin kitle olmayabilir — diffüz cilt ve parankimal değişiklikler.", "USG: Diffüz cilt kalınlaşması (>5mm) + parankimal ödem.", "Mastit ile karışabilir — antibiyotiğe yanıtsızlık → biyopsi."],
        keyPointsEn: ["CLINICAL DIAGNOSIS: Erythema + edema + peau d'orange (>1/3 breast skin).", "May not have a discrete mass — diffuse skin and parenchymal changes.", "USG: Diffuse skin thickening (>5mm) + parenchymal edema.", "May be confused with mastitis — no response to antibiotics → biopsy."],
        findings: {
            mammography: { description: "Diffüz cilt kalınlaşması. Trabeküler kalınlaşma. Aksiller lenfadenopati. Belirgin kitle olmayabilir." },
            usg: { description: "Cilt kalınlaşması >5mm. Parankimal ödem (hipoekoik alanlar). Aksiller LAP." },
            mri: { t1_c_dynamic: "Diffüz non-mass enhancement. Cilt kontrastlanması ve kalınlaşması. Meme boyutunda artış." }
        },
        findingsEn: {
            mammography: { description: "Diffuse skin thickening. Trabecular thickening. Axillary lymphadenopathy." },
            usg: { description: "Skin thickening >5mm. Parenchymal edema. Axillary LAP." },
            mri: { t1_c_dynamic: "Diffuse non-mass enhancement. Skin enhancement and thickening." }
        },
        etiology: "Dermal lenfatik tümör embolisi. Genellikle yüksek grade, ER/PR negatif, HER2 pozitif olma eğiliminde.",
        differentialDiagnosis: ["Mastit/abse (ateş, antibiyotiğe yanıt)", "Lenfatik obstrüksiyon (aksiller cerrahi sonrası)", "Radyasyon dermatiti (radyoterapi öyküsü)"],
        goldStandard: "Klinik tanı + Cilt biyopsisi (dermal lenfatik tümör embolisi). Evreleme: PET-BT.",
        clinicalPearl: "Kırmızı, şiş meme + antibiyotiğe yanıtsız 'mastit' = İnflamatuvar meme kanseri şüphesi → acil cilt biyopsisi.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Inflammatory breast cancer"]
    },
    {
        id: "breast-abscess",
        name: "Meme Absesi / Mastit",
        nameEn: "Breast Abscess / Mastitis",
        category: "İnflamatuvar",
        categoryEn: "Inflammatory",
        mechanism: "Bakteriyel enfeksiyon (S. aureus en sık) → meme dokusu inflamasyonu (mastit) → apse formasyonu (lokalize koleksiyon). Laktasyonel: Emzirme döneminde çatlak meme başından enfeksiyon. Non-laktasyonel: Periduktal mastit, granülomatöz mastit.",
        keyPoints: ["Laktasyonel mastit/apse: Emzirme döneminde en sık.", "USG: Hipoekoik koleksiyon + kalın düzensiz duvar + internal debris.", "USG eşliğinde drenaj terapötik.", "Antibiyotiğe yanıtsız 'mastit' → inflamatuvar karsinom dışla."],
        keyPointsEn: ["Lactational mastitis/abscess: Most common during breastfeeding.", "USG: Hypoechoic collection + thick irregular wall + internal debris.", "USG-guided drainage is therapeutic.", "Mastitis unresponsive to antibiotics → rule out inflammatory carcinoma."],
        findings: {
            usg: { description: "Kalın duvarlı hipoekoik/anekoik koleksiyon. İnternal debris ve septasyonlar. Çevre doku ödemi ve hiperekojenite. Doppler: Periferal hipervaskülarite." },
            mammography: { description: "Fokal asimetrik dansite. Cilt kalınlaşması. İnternal hava (nadir, drenaj sonrası)." },
            mri: { t1_c_dynamic: "Rim (periferal) kontrastlanma. Santral non-kontrastlanan alan (nekroz/pü). Çevre ödem." }
        },
        findingsEn: {
            usg: { description: "Thick-walled hypoechoic/anechoic collection. Internal debris and septations. Surrounding tissue edema. Doppler: Peripheral hypervascularity." },
            mammography: { description: "Focal asymmetric density. Skin thickening." },
            mri: { t1_c_dynamic: "Rim (peripheral) enhancement. Central non-enhancing area (necrosis/pus)." }
        },
        etiology: "S. aureus (en sık), streptokoklar. Laktasyonel (çatlak meme başı) veya non-laktasyonel (periduktal mastit, granülomatöz mastit).",
        differentialDiagnosis: ["İnflamatuvar meme kanseri (antibiyotiğe yanıtsız, cilt biyopsisi)", "Yağ nekrozu (travma öyküsü, yağ kisti)", "Granülomatöz mastit (kronik, steroid yanıtlı)"],
        goldStandard: "USG: Tanı + USG eşliğinde drenaj (terapötik). Aspirat kültürü.",
        clinicalPearl: "Emziren kadında ateş + eritematöz kitle + USG'de koleksiyon = Meme apsesi → USG eşliğinde drenaj + antibiyotik.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Breast abscess"]
    },
    {
        id: "gynecomastia",
        name: "Jinekomasti",
        nameEn: "Gynecomastia",
        category: "Benign",
        categoryEn: "Benign",
        mechanism: "Erkekte östrojen/androjen dengesizliği → meme glandüler doku proliferasyonu. Fizyolojik (neonatal, pubertal, senil) veya patolojik (ilaç, karaciğer hastalığı, testiküler tümör, Klinefelter).",
        keyPoints: ["Erkekte EN SIK meme kitlesi nedeni.", "Retroareolar konsentrik veya eksantrik doku artışı.", "USG: Retroareolar hipoekoik 'dallanma' paterni.", "Erkekte unilateral sert kitle → meme karsinomu dışla (nadir ama önemli)."],
        keyPointsEn: ["MOST COMMON cause of breast mass in males.", "Retroareolar concentric or eccentric tissue increase.", "USG: Retroareolar hypoechoic 'branching' pattern.", "Unilateral hard mass in male → rule out breast carcinoma (rare but important)."],
        findings: {
            mammography: { description: "Retroareolar üçgensi veya yelpaze şekilli dansite artışı. Bilateral simetrik (fizyolojik) veya unilateral (patolojik). Dört patern: Nodüler, dendritik, diffüz, asimetrik." },
            usg: { description: "Retroareolar hipoekoik solid doku. Dallanma paterni. Bilateral ve simetrik ise benign." }
        },
        findingsEn: {
            mammography: { description: "Retroareolar triangular or fan-shaped density increase. Bilateral symmetric or unilateral." },
            usg: { description: "Retroareolar hypoechoic solid tissue. Branching pattern. Benign if bilateral and symmetric." }
        },
        etiology: "İlaç (spironolakton, ketokonazol, anabolik steroidler, antiandrojenler), karaciğer sirozu, hipertiroidi, Klinefelter, testiküler tümör.",
        differentialDiagnosis: ["Erkek meme kanseri (sert, eksantrik, nipple retraksiyon)", "Lipom (yağ sinyali)", "Psödojinekomasti (adipöz doku, glandüler değil)"],
        goldStandard: "Mammografi: Retroareolar glandüler doku. USG: Ek değerlendirme. Klinik + hormonal değerlendirme.",
        clinicalPearl: "Erkekte bilateral retroareolar doku artışı = Jinekomasti. Unilateral, sert, eksantrik kitle = Erkek meme kanseri düşün → biyopsi.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Gynecomastia"]
    },
    {
        id: "fibrocystic-changes",
        name: "Fibrokistik Değişiklikler",
        nameEn: "Fibrocystic Changes",
        category: "Benign",
        categoryEn: "Benign",
        mechanism: "Hormonal stimülasyona bağlı meme dokusunun fibroz ve kistik değişiklikleri. Menstrüel siklusla değişen semptomlar. En sık 30-50 yaş kadınlarda. Premenopozal kadınların %50'sinde mevcut.",
        keyPoints: ["Premenopozal kadınlarda EN SIK meme durumu.", "Multipl basit ve komplike kistler + stromal fibroz.", "Siklusla değişen ağrı ve hassasiyet KARAKTERİSTİK.", "Atipik duktal/lobüler hiperplazi → kanser riski hafif artmış."],
        keyPointsEn: ["MOST COMMON breast condition in premenopausal women.", "Multiple simple and complicated cysts + stromal fibrosis.", "Cyclical pain and tenderness CHARACTERISTIC.", "Atypical ductal/lobular hyperplasia → slightly increased cancer risk."],
        findings: {
            usg: { description: "Multipl basit kistler (anekoik, ince duvarlı). Komplike kistler (internal eko, ince debris). Solid fibröz alanlar (hipoekoik). Mikrokistler." },
            mammography: { description: "Diffüz veya fokal dansiteleri. Multipl kistler. Kaba 'teacup' kalsifikasyonlar (benign). Heterojen dens meme dokusu." }
        },
        findingsEn: {
            usg: { description: "Multiple simple cysts (anechoic, thin-walled). Complicated cysts (internal echoes). Solid fibrous areas (hypoechoic). Microcysts." },
            mammography: { description: "Diffuse or focal densities. Multiple cysts. Coarse 'teacup' calcifications (benign). Heterogeneous dense breast tissue." }
        },
        etiology: "Hormonal (östrojen dominansı). Hormon dalgalanmaları → siklik meme ağrısı ve şişlik.",
        differentialDiagnosis: ["Multipl fibroadenomlar (solid, iyi sınırlı)", "DCIS (mikrokalsifikasyonlar, BI-RADS 4)", "Meme kanseri (irregüler kitle, spiküle)"],
        goldStandard: "USG: Basit kistlerin doğrulanması. Mammografi: Tarama. Atipik bulgularda biyopsi.",
        clinicalPearl: "Siklik meme ağrısı + USG'de multipl basit kistler + normal mammografi = Fibrokistik değişiklikler. Tedavi semptomatik.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Fibrocystic changes"]
    },
    {
        id: "radial-scar",
        name: "Radyal Skar (Kompleks Sklerozan Lezyon)",
        nameEn: "Radial Scar (Complex Sclerosing Lesion)",
        category: "Benign/Riskli",
        categoryEn: "Benign/High-Risk",
        mechanism: "Fibröz merkez + radyal uzanan duktüller ve lobüller → yapısal distorsiyon. Mammografide maligniteyi taklit eder (spiküle lezyon). >1cm ise 'kompleks sklerozan lezyon' olarak adlandırılır. Atipik epitelyal hiperplazi eşlik edebilir.",
        keyPoints: ["Mammografide MALİGNİTEYİ TAKLİT EDER (spiküle lezyon).", "Santral radyolüsensi + radyal uzanan spiküller.", "Biyopsi zorunlu: Eşlik eden atipi ve gizli karsinom dışlanmalı.", ">1cm = Kompleks sklerozan lezyon; cerrahi eksizyon önerilir."],
        keyPointsEn: ["MIMICS MALIGNANCY on mammography (spiculated lesion).", "Central radiolucency + radially extending spicules.", "Biopsy mandatory: Exclude associated atypia and occult carcinoma.", ">1cm = Complex sclerosing lesion; surgical excision recommended."],
        findings: {
            mammography: { description: "Spiküle lezyon (maligniteyi taklit eder). Santral radyolusensi (lucent center). Farklı projeksiyonlarda boyut değişikliği (black star)." },
            usg: { description: "Hipoekoik irregüler alan. Posterior akustik gölgeleme. Yapısal distorsiyon." }
        },
        findingsEn: {
            mammography: { description: "Spiculated lesion (mimics malignancy). Central radiolucency (lucent center). Size change on different projections (black star)." },
            usg: { description: "Hypoechoic irregular area. Posterior acoustic shadowing. Architectural distortion." }
        },
        etiology: "Benign proliferatif lezyon. Etiyoloji tam bilinmiyor. Hormonal etkiler olabilir.",
        differentialDiagnosis: ["İnvaziv duktal karsinom (solid santral, kalsifikasyon)", "İnvaziv lobüler karsinom (yapısal distorsiyon, MRI'da non-mass enhancement)", "Cerrahi skar (önceki cerrahi öyküsü)", "Yağ nekrozu (travma, yağ kisti)"],
        goldStandard: "Mammografi + USG → Core/vakum biyopsi zorunlu. >1cm veya atipi varsa cerrahi eksizyon.",
        clinicalPearl: "Mammografide spiküle lezyon + santral radyolusensi = Radyal skar düşün. MALİGNİTE dışlanamaz → biyopsi HER ZAMAN gerekli.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Radial scar"]
    },
    {
        id: "breast-hamartoma",
        name: "Meme Hamartomu (Fibroadenolipom)",
        nameEn: "Breast Hamartoma (Fibroadenolipoma)",
        category: "Benign",
        categoryEn: "Benign",
        mechanism: "Normal meme dokusu komponentlerinin (yağ, fibröz doku, glandüler doku) kapsüle içinde anormal organizasyonu. 'Meme içinde meme' görünümü karakteristik.",
        keyPoints: ["'Meme içinde meme' (breast within a breast) PATOGNOMONİK.", "İnce kapsül ile çevrili mikst dansite kitle.", "Yağ + glandüler + fibröz doku kombinasyonu.", "Benign — takip veya tedavi gerektirmez."],
        keyPointsEn: ["'Breast within a breast' PATHOGNOMONIC.", "Mixed density mass surrounded by thin capsule.", "Combination of fat + glandular + fibrous tissue.", "Benign — no follow-up or treatment needed."],
        findings: {
            mammography: { description: "İyi sınırlı, mikst dansite (yağ + yumuşak doku) kitle. İnce kapsül (radyolusen halo). 'Meme içinde meme' görünümü." },
            usg: { description: "İyi sınırlı, mikst ekojenitenin kitle. Heterojen iç yapı (yağ + solid alanlar). İnce kapsül." }
        },
        findingsEn: {
            mammography: { description: "Well-defined, mixed density (fat + soft tissue) mass. Thin capsule (radiolucent halo). 'Breast within a breast' appearance." },
            usg: { description: "Well-defined, mixed echogenicity mass. Heterogeneous internal structure. Thin capsule." }
        },
        etiology: "Gelişimsel. Normal meme dokusu komponentlerinin disorganizasyonu.",
        differentialDiagnosis: ["Fibroadenom (daha homojen, solid)", "Lipom (sadece yağ)", "Fillodes tümör (hızlı büyüme, kistik alanlar)"],
        goldStandard: "Mammografi: 'Breast within a breast'. İleri tetkik gerekmez.",
        clinicalPearl: "Mammografide mikst dansite kitle + ince kapsül + 'meme içinde meme' = Hamartom. Benign, biyopsi genellikle gerekmez.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Breast hamartoma"]
    },
    {
        id: "implant-rupture",
        name: "Meme İmplant Rüptürü",
        nameEn: "Breast Implant Rupture",
        category: "İmplant İlişkili",
        categoryEn: "Implant-Related",
        mechanism: "Silikon implant kabuğunun yırtılması. İntrakapüler: Silikon fibröz kapsül içinde kalır → 'linguine sign'. Ekstrakapüler: Silikon fibröz kapsül dışına sızar → granülom oluşumu.",
        keyPoints: ["'Linguine sign': İntrakapüler rüptürde kıvrımlı implant kabuğu = PATOGNOMONİK.", "'Snowstorm': Ekstrakapüler silikon sızıntısı USG'de.", "MRI implant değerlendirmesinde en duyarlı modalite.", "İntrakapüler rüptür: Silikon su baskılı (silikon spesifik) sekanslar anahtar."],
        keyPointsEn: ["'Linguine sign': Wavy implant shell in intracapsular rupture = PATHOGNOMONIC.", "'Snowstorm': Extracapsular silicone leak on USG.", "MRI most sensitive modality for implant evaluation.", "Intracapsular rupture: Silicone-specific suppression sequences key."],
        findings: {
            mri: { t1: "İmplant kontur ve bütünlük değerlendirmesi.", t2: "İNTRAKAPSÜLER: 'Linguine sign' (kıvrımlı kabuk fragmanları), 'keyhole/teardrop sign' (silikon-sıvı ayrımı). EKSTRAKAPÜLER: Silikon granülomları (ekstra-implant hiperintens odaklar).", t1_c: "Rutin kullanılmaz. Kapsüler kontraksiyon/enflamasyon değerlendirmesi." },
            usg: { description: "İntrakapüler: 'Stepladder sign' (çoklu ekojen çizgiler). Ekstrakapüler: 'Snowstorm appearance' (hiperekoik, gölgeleme). Kapsüler kontur düzensizliği." }
        },
        findingsEn: {
            mri: { t1: "Implant contour and integrity assessment.", t2: "INTRACAPSULAR: 'Linguine sign', 'keyhole/teardrop sign'. EXTRACAPSULAR: Silicone granulomas.", t1_c: "Not routine." },
            usg: { description: "Intracapsular: 'Stepladder sign'. Extracapsular: 'Snowstorm appearance'. Capsular contour irregularity." }
        },
        etiology: "İmplant yaşlanması (>10 yıl), travma, cerrahi komplikasyon.",
        differentialDiagnosis: ["İntakt implant (düzgün kontur, linguine sign yok)", "Kapsüler kontraksiyon (implant şekil değişikliği, rüptür yok)", "Seroma (periprostetik sıvı koleksiyonu)"],
        goldStandard: "MRI: Silikon spesifik sekanslar (silikon su baskılı). Linguine sign = İntrakapüler rüptür.",
        clinicalPearl: "MRI'da linguine sign = İntrakapüler rüptür kesin tanısı. Ekstrakapüler sızıntı varsa cerrahi revizyon daha acil.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Breast implant rupture"]
    },
    {
        id: "mucinous-carcinoma-breast",
        name: "Müsinöz Karsinom (Meme)",
        nameEn: "Mucinous Carcinoma (Breast)",
        category: "Malign",
        categoryEn: "Malignant",
        mechanism: "Müsin üreten tümör hücreleri ekstraselüler müsin gölcükleri oluşturur → iyi sınırlı, yumuşak kitle. Saf (pure) form iyi prognozlu. Mikst form (duktal komponent eşlik eder) daha agresif.",
        keyPoints: ["İyi sınırlı → YANILTICI benign görünüm (fibroadenom gibi).", "Yaşlı kadınlarda sık (60-70 yaş).", "Saf form: Çok iyi prognoz (>90% 10-yıllık sağkalım).", "T2 HİPERİNTENS (müsin içeriği): MRI'da fibroadenomdan farklı yüksek T2 sinyali."],
        keyPointsEn: ["Well-defined → MISLEADING benign appearance (like fibroadenoma).", "Common in elderly women (60-70 years).", "Pure form: Excellent prognosis (>90% 10-year survival).", "T2 HYPERINTENSE (mucin content): Different from fibroadenoma high T2 signal on MRI."],
        findings: {
            mammography: { description: "İyi sınırlı, yuvarlak/lobüle kitle. Düşük-orta dansite. Benign görünüm yanıltıcı olabilir." },
            usg: { description: "İyi sınırlı, homojen hipoekoik kitle. Posterior akustik güçlenme (yüksek su içeriği). Komplex kist ile karışabilir." },
            mri: { t1_c_dynamic: "T2 ÇOK HİPERİNTENS (müsin). Progresif kontrastlanma (Tip 1 veya 2 eğri). Homojen." }
        },
        findingsEn: {
            mammography: { description: "Well-defined, round/lobulated mass. Low-medium density." },
            usg: { description: "Well-defined, homogeneous hypoechoic mass. Posterior acoustic enhancement. May be confused with complex cyst." },
            mri: { t1_c_dynamic: "T2 VERY HYPERINTENSE (mucin). Progressive enhancement (Type 1 or 2 curve). Homogeneous." }
        },
        etiology: "Duktal epitelden kökenli müsin üreten karsinom. ER/PR pozitifliği yüksek. HER2 genellikle negatif.",
        differentialDiagnosis: ["Fibroadenom (genç yaş, T2 orta sinyal)", "Fillodes tümör (hızlı büyüme, kistik)", "Komplike kist (aspire edildiğinde tanı)", "Medüller karsinom (genç, yüksek grade)"],
        goldStandard: "Mammografi + USG + Core biyopsi. MRI: T2 hiperintensite (müsin doğrulama).",
        clinicalPearl: "Yaşlı kadında iyi sınırlı kitle + T2 çok parlak (müsin) + yavaş kontrastlanma = Müsinöz karsinom. Benign görünüm yanıltıcı → 50+ yaş iyi sınırlı kitlede biyopsi düşün.",
        references: ["ACR BI-RADS Atlas. 5th ed. 2013.", "Radiopaedia.org - Mucinous carcinoma breast"]
    }
];
