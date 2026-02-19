import { Pathology } from "@/types";

export const mskPathologies: Pathology[] = [
    {
        id: "acl-tear",
        name: "Ön Çapraz Bağ (ACL) Yırtığı",
        nameEn: "Anterior Cruciate Ligament (ACL) Tear",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        keyPoints: ["En sık görülen diz bağ yaralanmasıdır.", "T2'de sinyal artışı ve devamsızlık tipiktir.", "Bone bruise (Kemik iliği ödemi) eşlik edebilir."],
        keyPointsEn: ["Most common knee ligament injury.", "Increased signal and discontinuity on T2 are typical.", "Bone bruise (marrow edema) may be present."],
        findings: {
            mri: {
                t2: "Ligaman bütünlüğünün kaybı (Discontinuity). Ödemli, kalınlaşmış ligament (Hiperintens). Horizontal oryantasyon (Ligamanın yatıklaşması). Empty Notch Sign.",
                other_sequences: "Bone Bruise (Lateral femoral kondil & Posterolateral tibia - Kissing contusion). Segond kırığı."
            }
        },
        findingsEn: {
            mri: {
                t2: "Loss of ligament continuity. Edematous, thickened ligament (Hyperintense). Horizontal orientation (Ligament flattening). Empty Notch Sign.",
                other_sequences: "Bone Bruise (Lateral femoral condyle & Posterolateral tibia - Kissing contusion). Segond fracture."
            }
        }
    },
    {
        id: "meniscus-bucket-handle",
        name: "Kova Sapı (Bucket-Handle) Yırtık",
        nameEn: "Bucket-Handle Meniscus Tear",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        keyPoints: ["Longitudinal vertikal yırtığın deplase olmasıdır.", "Kilitli dize neden olur.", "Double PCL bulgusu tipiktir."],
        keyPointsEn: ["Displaced longitudinal vertical tear.", "Causes locked knee.", "Double PCL sign is typical."],
        findings: {
            mri: {
                t2: "Absent Bow Tie Sign (Sagittal kesitte 2'den az üçgen). Double PCL Sign (Arka çapraz bağın çift görünmesi). Fragment in the Notch. Ön boynuzda güdükleşme."
            }
        },
        findingsEn: {
            mri: {
                t2: "Absent Bow Tie Sign (<2 triangles on sagittal). Double PCL Sign (Double appearance of PCL). Fragment in the Notch. Truncated anterior horn."
            }
        }
    },
    {
        id: "rotator-cuff-supraspinatus",
        name: "Supraspinatus Tam Kat Yırtığı",
        nameEn: "Supraspinatus Full-Thickness Tear",
        category: "Shoulder (Omuz)",
        categoryEn: "Shoulder",
        keyPoints: ["Omuz ağrısının en sık nedenidir.", "Tendon retraksiyonu ve kas atrofisi cerrahi başarıyı etkiler.", "Sıvı sinyali (Gap) görülür."],
        keyPointsEn: ["Most common cause of shoulder pain.", "Tendon retraction and muscle atrophy affect surgical success.", "Fluid signal (Gap) is seen."],
        findings: {
            mri: {
                t2: "Tendonda sıvı sinyali (T2 Hiperintens gap). Retraksiyon (Tendon ucunun medialde olması). Subakromiyal-subdeltoid bursa efüzyonu.",
                t1: "Kas atrofisi (Fatty degeneration - Goutallier evrelemesi)."
            },
            usg: {
                description: "Fokal anekoik defekt. Kıkırdak arayüz işareti (Cartilage Interface Sign). Deltoid herniasyonu."
            }
        },
        findingsEn: {
            mri: {
                t2: "Fluid signal in tendon (T2 Hyperintense gap). Retraction (Tendon end medialized). Subacromial-subdeltoid bursa effusion.",
                t1: "Muscle atrophy (Fatty degeneration - Goutallier staging)."
            },
            usg: {
                description: "Focal anechoic defect. Cartilage Interface Sign. Deltoid herniation."
            }
        }
    },
    {
        id: "bankart-lesion",
        name: "Bankart Lezyonu",
        nameEn: "Bankart Lesion",
        category: "Shoulder (Omuz)",
        categoryEn: "Shoulder",
        keyPoints: ["Anteroinferior labrumun ayrılmasıdır.", "Omuz instabilitesine neden olur.", "Hill-Sachs lezyonu sıklıkla eşlik eder."],
        keyPointsEn: ["Detachment of anteroinferior labrum.", "Causes shoulder instability.", "Hill-Sachs lesion is frequently associated."],
        findings: {
            mri: {
                t2: "Anteroinferior labrum yoktur veya fragmante. Glenoid kenarda düzensizlik. Hill-Sachs lezyonu eşlik edebilir (Humerus başı defekti)."
            }
        },
        findingsEn: {
            mri: {
                t2: "Anteroinferior labrum absent or fragmented. Irregularity at glenoid rim. Hill-Sachs lesion may be present (Humeral head defect)."
            }
        }
    },
    {
        id: "baker-cyst",
        name: "Baker (Popliteal) Kisti",
        nameEn: "Baker's Cyst (Popliteal Cyst)",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        keyPoints: ["Media gastroknemius ve semimembranosus tendonları arasındadır.", "'Boyun' yapısının görülmesi tanı koydurucudur.", "Rüptüre olursa DVT'yi taklit eder."],
        keyPointsEn: ["Located between medial gastrocnemius and semimembranosus tendons.", "Visualization of 'neck' is diagnostic.", "Rupture mimics DVT."],
        findings: {
            mri: {
                t2: "Medial gastroknemius ve semimembranosus tendonları arasında sıvı. Boyun (neck) yapısının görülmesi tanı koydurucudur. İnce duvarlı kistik yapı."
            },
            usg: {
                description: "Anekoik, C-şekilli sıvı koleksiyonu. Posterior akustik güçlenme."
            }
        },
        findingsEn: {
            mri: {
                t2: "Fluid between medial gastrocnemius and semimembranosus tendons. Visualization of 'neck' is diagnostic. Thin-walled cystic structure."
            },
            usg: {
                description: "Anechoic, C-shaped fluid collection. Posterior acoustic enhancement."
            }
        }
    },
    {
        id: "achilles-rupture",
        name: "Aşil Tendon Rüptürü",
        nameEn: "Achilles Tendon Rupture",
        category: "Ankle (Ayak Bileği)",
        categoryEn: "Ankle",
        keyPoints: ["Watershed (kanlanması az) bölgede sık görülür (kalkaneusun 2-6cm proksimali).", "Thompson testi pozitiftir.", "Kager yağ yastığı ödemlidir."],
        keyPointsEn: ["Common in watershed (hypovascular) zone (2-6cm proximal to calcaneus).", "Thompson test is positive.", "Kager's fat pad is edematous."],
        findings: {
            mri: {
                t2: "Tendon bütünlüğünün kaybı. Tendon uçları arasında sıvı/hematom. Retraksiyon. Kager yağ yastığı ödemi."
            },
            usg: {
                description: "Dinamik testte (Thompson) tendon hareketsizliği. Hipoekoik defekt alanı."
            }
        },
        findingsEn: {
            mri: {
                t2: "Loss of tendon integrity. Fluid/hematoma between tendon ends. Retraction. Kager's fat pad edema."
            },
            usg: {
                description: "Lack of tendon movement on dynamic test (Thompson). Hypoechoic defect area."
            }
        }
    }
];
