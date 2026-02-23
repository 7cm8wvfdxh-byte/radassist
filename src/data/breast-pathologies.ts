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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    }
];
