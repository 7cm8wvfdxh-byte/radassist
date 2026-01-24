import { Pathology } from "@/types";

export const breastPathologies: Pathology[] = [
    {
        id: "malignant-mass-breast",
        name: "Malign Kitle (İnvaziv Duktal Ca)",
        category: "Mass",
        keyPoints: ["Spiküle kontur en önemli malignite kriteridir.", "Taller-than-wide (Dikey) oryantasyon ultrasona özgüdür.", "Posterior akustik gölgeleme desmoplaziyi gösterir."],
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
        }
    },
    {
        id: "fibroadenoma",
        name: "Fibroadenom",
        category: "Mass",
        keyPoints: ["Genç hastalarda en sık benign kitle.", "Ultrasonda 'Popcorn' kalsifikasyon involüsyonu gösterir.", "İyi sınırlı ve mobildir."],
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
        }
    },
    {
        id: "cyst-simple",
        name: "Basit Kist",
        category: "Cystic",
        keyPoints: ["BI-RADS 2 lezyondur, işlem gerekmez.", "Anekoik, keskin sınırlı, posterior güçlenme.", "Septa veya solid komponent içermez."],
        findings: {
            usg: {
                description: "Anekoik (Siyah). İnce, düzgün duvar. Posterior akustik güçlenme (Posterior enhancement). İçerik/Septa yok."
            },
            mammography: {
                description: "Yuvarlak/Oval şekilli opasite. Hale işareti (Halo sign)."
            }
        }
    },
    {
        id: "complicated-cyst",
        name: "Komplike Kist",
        category: "Cystic",
        keyPoints: ["İçerik (debris) vardır ama solid komponent yoktur.", "Vaskülarite içermez.", "BI-RADS 3 kabul edilebilir."],
        findings: {
            usg: {
                description: "Homojen düşük seviyeli ekolar. Hareketli debris. Duvar kalınlaşması yok. Vaskülarite (Doppler) negatif."
            }
        }
    },
    {
        id: "intraductal-papilloma",
        name: "İntraduktal Papillom",
        category: "Ductal",
        keyPoints: ["Kanlı meme başı akıntısının en sık benign nedenidir.", "Duktus içinde solid lezyon.", "Ektatik duktus görülür."],
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
        }
    },
    {
        id: "fat-necrosis",
        name: "Yağ Nekrozu",
        category: "Benign Mimic",
        keyPoints: ["Travma öyküsü önemlidir.", "Maligniteyi taklit edebilir.", "Yağ kisti ve distrofik kalsifikasyon tipiktir."],
        findings: {
            usg: {
                description: "Yağ kisti (Oil cyst). Hipoekoik veya kompleks kitle. Ekojenik bantlar."
            },
            mammography: {
                description: "Yağ kisti (Radyolusent merkezli). Yumurta kabuğu (Egg-shell) kalsifikasyonu. Distrofik kalsifikasyonlar."
            }
        }
    }
];
