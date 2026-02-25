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
    }
];
