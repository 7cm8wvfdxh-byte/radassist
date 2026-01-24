import { Pathology } from "@/types";

export const mskPathologies: Pathology[] = [
    {
        id: "acl-tear",
        name: "Ön Çapraz Bağ (ACL) Yırtığı",
        category: "Knee (Diz)",
        keyPoints: ["En sık görülen diz bağ yaralanmasıdır.", "T2'de sinyal artışı ve devamsızlık tipiktir.", "Bone bruise (Kemik iliği ödemi) eşlik edebilir."],
        findings: {
            mri: {
                t2: "Ligaman bütünlüğünün kaybı (Discontinuity). Ödemli, kalınlaşmış ligament (Hiperintens). Horizontal oryantasyon (Ligamanın yatıklaşması). Empty Notch Sign.",
                other_sequences: "Bone Bruise (Lateral femoral kondil & Posterolateral tibia - Kissing contusion). Segond kırığı."
            }
        }
    },
    {
        id: "meniscus-bucket-handle",
        name: "Kova Sapı (Bucket-Handle) Yırtık",
        category: "Knee (Diz)",
        keyPoints: ["Longitudinal vertikal yırtığın deplase olmasıdır.", "Kilitli dize neden olur.", "Double PCL bulgusu tipiktir."],
        findings: {
            mri: {
                t2: "Absent Bow Tie Sign (Sagittal kesitte 2'den az üçgen). Double PCL Sign (Arka çapraz bağın çift görünmesi). Fragment in the Notch. Ön boynuzda güdükleşme."
            }
        }
    },
    {
        id: "rotator-cuff-supraspinatus",
        name: "Supraspinatus Tam Kat Yırtığı",
        category: "Shoulder (Omuz)",
        keyPoints: ["Omuz ağrısının en sık nedenidir.", "Tendon retraksiyonu ve kas atrofisi cerrahi başarıyı etkiler.", "Sıvı sinyali (Gap) görülür."],
        findings: {
            mri: {
                t2: "Tendonda sıvı sinyali (T2 Hiperintens gap). Retraksiyon (Tendon ucunun medialde olması). Subakromiyal-subdeltoid bursa efüzyonu.",
                t1: "Kas atrofisi (Fatty degeneration - Goutallier evrelemesi)."
            },
            usg: {
                description: "Fokal anekoik defekt. Kıkırdak arayüz işareti (Cartilage Interface Sign). Deltoid herniasyonu."
            }
        }
    },
    {
        id: "bankart-lesion",
        name: "Bankart Lezyonu",
        category: "Shoulder (Omuz)",
        keyPoints: ["Anteroinferior labrumun ayrılmasıdır.", "Omuz instabilitesine neden olur.", "Hill-Sachs lezyonu sıklıkla eşlik eder."],
        findings: {
            mri: {
                t2: "Anteroinferior labrum yoktur veya fragmante. Glenoid kenarda düzensizlik. Hill-Sachs lezyonu eşlik edebilir (Humerus başı defekti)."
            }
        }
    },
    {
        id: "baker-cyst",
        name: "Baker (Popliteal) Kisti",
        category: "Knee (Diz)",
        keyPoints: ["Media gastroknemius ve semimembranosus tendonları arasındadır.", "'Boyun' yapısının görülmesi tanı koydurucudur.", "Rüptüre olursa DVT'yi taklit eder."],
        findings: {
            mri: {
                t2: "Medial gastroknemius ve semimembranosus tendonları arasında sıvı. Boyun (neck) yapısının görülmesi tanı koydurucudur. İnce duvarlı kistik yapı."
            },
            usg: {
                description: "Anekoik, C-şekilli sıvı koleksiyonu. Posterior akustik güçlenme."
            }
        }
    },
    {
        id: "achilles-rupture",
        name: "Aşil Tendon Rüptürü",
        category: "Ankle (Ayak Bileği)",
        keyPoints: ["Watershed (kanlanması az) bölgede sık görülür (kalkaneusun 2-6cm proksimali).", "Thompson testi pozitiftir.", "Kager yağ yastığı ödemlidir."],
        findings: {
            mri: {
                t2: "Tendon bütünlüğünün kaybı. Tendon uçları arasında sıvı/hematom. Retraksiyon. Kager yağ yastığı ödemi."
            },
            usg: {
                description: "Dinamik testte (Thompson) tendon hareketsizliği. Hipoekoik defekt alanı."
            }
        }
    }
];
