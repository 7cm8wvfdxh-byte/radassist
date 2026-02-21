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
    },
    {
        id: "achilles-tendinopathy",
        name: "Aşil Tendinopatisi",
        nameEn: "Achilles Tendinopathy",
        category: "Ankle (Ayak Bileği)",
        categoryEn: "Ankle",
        keyPoints: ["Rüptür öncüsü olabilir; watershed bölgesinde sık.", "MRI'da iğ şekilli (fusiform) kalınlaşma tipiktir.", "USG dinamik inceleme ile izlenir."],
        keyPointsEn: ["May precede rupture; common in watershed zone.", "Fusiform thickening on MRI is typical.", "USG allows dynamic assessment."],
        findings: {
            mri: {
                t2: "Tendonda iğ şekilli (fusiform) kalınlaşma. İntrasubstans T2 sinyal artışı (mikro yırtıklar). Peritendinöz ödem.",
                t1: "Tendon kalınlaşması, sınırlar korunmuş."
            },
            usg: {
                description: "Tendon kalınlaşması ve hipoekojenite. Renkli Doppler'de vaskülarite artışı (Neovaskülarizasyon). Tendon içinde hipoekoik fokal alanlar."
            }
        },
        findingsEn: {
            mri: {
                t2: "Fusiform tendon thickening. Intratendinous T2 signal increase (microteats). Peritendinous edema.",
                t1: "Tendon thickening, margins preserved."
            },
            usg: {
                description: "Tendon thickening and hypoechogenicity. Increased vascularity on Color Doppler (Neovascularization). Focal hypoechoic areas within tendon."
            }
        }
    },
    {
        id: "lateral-epicondylitis",
        name: "Lateral Epikondilit (Tenisçi Dirseği)",
        nameEn: "Lateral Epicondylitis (Tennis Elbow)",
        category: "Elbow (Dirsek)",
        categoryEn: "Elbow",
        keyPoints: ["Ekstansör karpi radialis brevis (ECRB) en sık etkilenen tendondur.", "Tendinoz (dejenerasyon) esas patolojidir, inflamasyon değil.", "USG ile tanı ve girişimsel tedavi yönetilebilir."],
        keyPointsEn: ["ECRB is the most commonly affected tendon.", "Tendinosis (degeneration) is the main pathology, not inflammation.", "Diagnosis and interventional treatment possible with USG."],
        findings: {
            mri: {
                t2: "Lateral epikondilin hemen distalinde, ortak ekstansör tendonda T2 sinyal artışı ve kalınlaşma. İleri evrede parsiyel/tam yırtık.",
                t1: "Tendon kalınlaşması. Lateral epikondilin kortikal düzensizliği."
            },
            usg: {
                description: "Ortak ekstansör tendonda kalınlaşma ve hipoekojenite. Lateral epikondilin kortikal erozyonu. Doppler: Neovaskülarizasyon."
            }
        },
        findingsEn: {
            mri: {
                t2: "T2 signal increase and thickening in common extensor tendon just distal to lateral epicondyle. Partial/complete tear in advanced cases.",
                t1: "Tendon thickening. Cortical irregularity of lateral epicondyle."
            },
            usg: {
                description: "Common extensor tendon thickening and hypoechogenicity. Cortical erosion of lateral epicondyle. Doppler: Neovascularization."
            }
        }
    },
    {
        id: "de-quervain-tenosynovitis",
        name: "De Quervain Tenosinoviti",
        nameEn: "De Quervain's Tenosynovitis",
        category: "Wrist (El Bileği)",
        categoryEn: "Wrist",
        keyPoints: ["1. dorsal kompartman (APL + EPB) tutulur.", "Finkelstein testi pozitiftir.", "Yeni anneler ve müzisyenlerde sık."],
        keyPointsEn: ["1st dorsal compartment (APL + EPB) is involved.", "Finkelstein test is positive.", "Common in new mothers and musicians."],
        findings: {
            mri: {
                t2: "1. dorsal kompartmanda APL ve EPB tendon kılıflarında sıvı (T2 Hiper). Tendon kalınlaşması ve peritendinöz ödem.",
                stir: "Tendon kılıfı boyunca hiperintens sinyal."
            },
            usg: {
                description: "1. kompartmanda tendon kılıfında sıvı. Tendon kalınlaşması ve hipoekojenite. Radyal stiloidde kortikal düzensizlik olabilir."
            }
        },
        findingsEn: {
            mri: {
                t2: "Fluid in APL and EPB tendon sheaths of the 1st dorsal compartment (T2 Hyper). Tendon thickening and peritendinous edema.",
                stir: "Hyperintense signal along tendon sheath."
            },
            usg: {
                description: "Fluid in 1st compartment tendon sheath. Tendon thickening and hypoechogenicity. Cortical irregularity at radial styloid may occur."
            }
        }
    },
    {
        id: "patellar-tendinopathy",
        name: "Patellar Tendinopatisi (Atlayıcı Dizi)",
        nameEn: "Patellar Tendinopathy (Jumper's Knee)",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        keyPoints: ["Patellar tendonun proksimal yapışma yerinde en sık görülür.", "Atlama sporlarında sık (voleybol, basketbol).", "USG ile Doppler neovaskülarizasyonu tedaviyi yönlendirir."],
        keyPointsEn: ["Most common at proximal patellar tendon insertion.", "Common in jumping sports (volleyball, basketball).", "Doppler neovascularization guides treatment."],
        findings: {
            mri: {
                t2: "Proksimal patellar tendonda, patellanın alt kutbunda fokal T2 sinyal artışı ve kalınlaşma. Hoffa yağ yastığı ödemi (infrapatellar).",
                t1: "Tendon kalınlaşması ve düzensizliği."
            },
            usg: {
                description: "Proksimal tendonda kalınlaşma ve hipoekojenite. Patellanın alt kutbunda kortikal düzensizlik. Doppler: Belirgin neovaskülarizasyon."
            }
        },
        findingsEn: {
            mri: {
                t2: "Focal T2 signal increase and thickening at proximal patellar tendon, inferior pole of patella. Hoffa fat pad edema (infrapatellar).",
                t1: "Tendon thickening and irregularity."
            },
            usg: {
                description: "Proximal tendon thickening and hypoechogenicity. Cortical irregularity at inferior pole of patella. Doppler: Prominent neovascularization."
            }
        }
    },
    {
        id: "avascular-necrosis-hip",
        name: "Avasküler Nekroz (AVN) - Femur Başı",
        nameEn: "Avascular Necrosis (AVN) - Femoral Head",
        category: "Hip (Kalça)",
        categoryEn: "Hip",
        keyPoints: ["Erken evre tanısı MRI ile mümkündür (X-Ray normal olabilir).", "Double-Line Sign (T2'de): İç hipointens + dış hiperintens hat — patognomik.", "Risk faktörleri: Steroid, alkol, orak hücreli anemi, dalış."],
        keyPointsEn: ["Early stage diagnosis possible with MRI (X-Ray may be normal).", "Double-Line Sign (T2): Inner hypointense + outer hyperintense band — pathognomonic.", "Risk factors: Steroids, alcohol, sickle cell anemia, diving."],
        findings: {
            mri: {
                t1: "Femur başında T1 hipointens nekroz odağı (subkortikal). Kama veya bant şeklinde.",
                t2: "Double-Line Sign: Skleroz (iç hat, hipointens) + granülasyon dokusu (dış hat, hiperintens). Eklem efüzyonu.",
                other_sequences: "Evre 1-2 lezyonlar X-Ray'de görünmez; erken MRI kritik."
            }
        },
        findingsEn: {
            mri: {
                t1: "T1 hypointense necrosis focus in femoral head (subcortical). Wedge or band-shaped.",
                t2: "Double-Line Sign: Sclerosis (inner band, hypointense) + granulation tissue (outer band, hyperintense). Joint effusion.",
                other_sequences: "Stage 1-2 lesions invisible on X-Ray; early MRI is critical."
            }
        }
    },
    {
        id: "stress-fracture",
        name: "Stres Kırığı",
        nameEn: "Stress Fracture",
        category: "General (Genel)",
        categoryEn: "General",
        keyPoints: ["Kırık hattı X-Ray'de görülmeyebilir; MRI en duyarlı yöntemdir.", "Metatars 2-3 ve tibia en sık lokalizasyondur.", "T2/STIR'de kemik iliği ödemi erken bulgu."],
        keyPointsEn: ["Fracture line may not be visible on X-Ray; MRI is most sensitive.", "Metatarsals 2-3 and tibia are most common locations.", "Bone marrow edema on T2/STIR is an early finding."],
        findings: {
            mri: {
                t2: "Kemik iliği ödemi (T2/STIR hiperintens). İnce hipointens kırık hattı (T1 ve T2'de).",
                stir: "Belirgin periosteal ödem ve kemik iliği ödemi.",
                t1: "T1 hipointens kırık hattı ve eşlik eden ödem."
            },
            xray: {
                description: "Erken evrede genellikle normal. Geç evrede periosteal reaksiyon (Radyopak hat) veya iyileşme kaplusu."
            }
        },
        findingsEn: {
            mri: {
                t2: "Bone marrow edema (T2/STIR hyperintense). Thin hypointense fracture line (on T1 and T2).",
                stir: "Prominent periosteal and bone marrow edema.",
                t1: "T1 hypointense fracture line with accompanying edema."
            },
            xray: {
                description: "Usually normal in early stages. Late stage: periosteal reaction (radiopaque line) or healing callus."
            }
        }
    },
    {
        id: "hip-labral-tear",
        name: "Kalça Labrumu Yırtığı",
        nameEn: "Hip Labral Tear",
        category: "Hip (Kalça)",
        categoryEn: "Hip",
        keyPoints: ["FAI (Femoroacetabüler İmpingement) ile sık ilişkilidir.", "MR Artrografi (MRA) tanı standardıdır.", "Anterosüperior labrum en sık yırtık bölgesidir."],
        keyPointsEn: ["Frequently associated with FAI (Femoroacetabular Impingement).", "MR Arthrography (MRA) is the diagnostic standard.", "Anterosuperior labrum is the most common tear site."],
        findings: {
            mri: {
                t2: "Labrum içinde veya tabanında T2 hiperintens sinyal (kontrast madde penetrasyonu - MRA'da daha belirgin). Labrum şeklinde düzensizlik veya parçalanma.",
                other_sequences: "MR Artrografi: İntraartikular gadolinyum ile labral yırtık daha net görüntülenir. Cam/Pincer deformitesi (FAI) eklem aralığı kaybıyla birlikte."
            }
        },
        findingsEn: {
            mri: {
                t2: "T2 hyperintense signal within or at base of labrum (contrast penetration — more evident on MRA). Labral shape irregularity or fragmentation.",
                other_sequences: "MR Arthrography: Labral tear better visualized with intra-articular gadolinium. Cam/Pincer deformity (FAI) with joint space loss."
            }
        }
    }
];
