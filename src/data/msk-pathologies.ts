import { Pathology } from "@/types";

export const mskPathologies: Pathology[] = [
    {
        id: "acl-tear",
        name: "Ön Çapraz Bağ (ACL) Yırtığı",
        nameEn: "Anterior Cruciate Ligament (ACL) Tear",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Valgus + iç rotasyon + hiperekstansiyon (pivot-shift) kuvveti → ACL'nin femoral yapışma yerine yakın bölgede yırtılması. Kissing contusion paterni: tibia posteriora çarpar → lateral femoral kondil + posterolateral tibia kemik iliği ödemi (Empty Notch Sign).",
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
        },
        etiology: "Sporla ilişkili travma (%70+). Pivot-shift mekanizması: Valgus + iç rotasyon + hiperekstansiyon. Kadınlarda 2-8× daha sık (hormonal/anatomik — dar interkondiler notch, artmış Q açısı).",
        differentialDiagnosis: ["PCL Yırtığı (Posterior çekmece testi +)", "Posterolateral Köşe Yaralanması", "MCL Yırtığı (Eşlik edebilir — O'Donoghue triadı)", "Menisküs Yırtığı"],
        goldStandard: "MRI (Duyarlılık %95+). Sagittal T2 FSE/PD sekanslar ligaman bütünlüğünü en iyi gösterir.",
        clinicalPearl: "O'Donoghue'nun mutsuz üçlüsü: ACL + MCL + Medial menisküs yırtığı. Segond kırığı (lateral tibial platoda avülsiyon) = Patolojik ACL yırtığı bulgusu."
    },
    {
        id: "meniscus-bucket-handle",
        name: "Kova Sapı (Bucket-Handle) Yırtık",
        nameEn: "Bucket-Handle Meniscus Tear",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Aksiyel yük altında rotasyonel yaralanma → longitudinal vertikal menisküs yırtığı → iç fragmanın interkondiler çukura deplase göçü (kova sapı hareketi). Deplase fragment femur ve tibia arasında mekanik engel oluşturur → kilitli diz.",
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
        },
        etiology: "Aksiyel yük altında diz rotasyonu (spor, travma). Medial menisküs lateral menisküsten 10× daha sık bucket-handle yırtığı gösterir (MCL'ye yapışık olması nedeniyle mobilite kısıtlı).",
        differentialDiagnosis: ["Radyal Menisküs Yırtığı", "Horizontal Menisküs Yırtığı", "Meniskokapsuler Ayrılma", "Displaced Flap Yırtık"],
        goldStandard: "MRI (Sagittal + Koronal PD-FS). Absent bow tie sign sagittal kesitte 2'den az üçgen görülmesiyle tanı konur.",
        clinicalPearl: "Double PCL sign: Deplase menisküs fragmanı PCL'nin önünde ikinci bir bant olarak görülür — bucket-handle yırtığı için patognomik MRI bulgusu."
    },
    {
        id: "rotator-cuff-supraspinatus",
        name: "Supraspinatus Tam Kat Yırtığı",
        nameEn: "Supraspinatus Full-Thickness Tear",
        category: "Shoulder (Omuz)",
        categoryEn: "Shoulder",
        mechanism: "Supraspinatus tendonu kritik hipovasküleer bölgede (tuberositas major'a 1cm proksimal) → kronik subakromial sıkışma + tekrarlayan yük → dejenerasyon + mikro yırtık birikimi → tam kat yırtık. Kronik yırtıkta kas fiberleri yağlı dejenerasyonla (Goutallier) değişir; retraksiyon cerrahi başarıyı etkiler.",
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
        },
        etiology: "Kronik subakromial sıkışma (impingement) + yaşa bağlı dejenerasyon. 40 yaş üstü prevalans artar. Akut: Düşme veya ağırlık kaldırma. Tip III akromion (çengel şekilli) predispozan faktör.",
        differentialDiagnosis: ["Subakromial Bursit", "Kalsifik Tendinit", "Frozen Shoulder (Adheziv Kapsülit)", "Labral Yırtık (SLAP)"],
        goldStandard: "MRI (Koronal oblik T2 FS). Goutallier sınıflaması (T1 sagittal) kas yağlanmasını değerlendirir. USG deneyimli ellerde eşdeğer duyarlılığa sahiptir.",
        clinicalPearl: "Goutallier Grade ≥2 (kas ≤ yağ) = Cerrahi onarım sonrası kötü prognoz. Tendon retraksiyonu glenoid seviyesine ulaştıysa irreparabl kabul edilir."
    },
    {
        id: "bankart-lesion",
        name: "Bankart Lezyonu",
        nameEn: "Bankart Lesion",
        category: "Shoulder (Omuz)",
        categoryEn: "Shoulder",
        mechanism: "Omuzun anteriora travmatik dislokasyonu → humerus başının anteriora itilmesi → anteroinferior glenohumeral ligaman + labrum kompleksinin glenoiddan kopması. Hill-Sachs: humerus başı posterolateraline sertleşmiş glenoid rim çarpar → impaksiyon defekti.",
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
        },
        etiology: "Anteriora travmatik omuz dislokasyonu (%95). İlk dislokasyondan sonra rekürrens oranı genç hastalarda (%80-90) çok yüksektir. Kontakt sporlar (futbol, güreş) ve düşme en sık mekanizma.",
        differentialDiagnosis: ["SLAP Lezyonu (Süperior labrum — farklı lokalizasyon)", "ALPSA (Anterior Labroligamentöz Periosteal Sleeve Avülsiyonu)", "GLAD Lezyonu (Glenoid kıkırdak defekti)", "HAGL (Humerus tarafında avülsiyon)"],
        goldStandard: "MR Artrografi (MRA). İntraartiküler gadolinyum labral yırtığı %90+ duyarlılıkla gösterir. Konvansiyonel MRI duyarlılığı daha düşüktür.",
        clinicalPearl: "Engaging Hill-Sachs: Humerus başı defektinin glenoid kenarla etkileşmesi → cerrahi onarım gerekli (Latarjet prosedürü). Kemik kaybı >%25 glenoid → tek başına Bankart onarımı yetersiz."
    },
    {
        id: "baker-cyst",
        name: "Baker (Popliteal) Kisti",
        nameEn: "Baker's Cyst (Popliteal Cyst)",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Diz eklem efüzyonu (menisküs yırtığı, OA, RA) → artan intraartikular basınç → medial gastroknemius-semimembranosus bursası ile eklem arasındaki 'boyun' yapısından posterior sıvı geçişi → kist büyümesi. Rüptürde sıvı baldıra yayılır → DVT taklidi.",
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
        },
        etiology: "Sekonder: Diz eklem patolojisi (menisküs yırtığı, OA, RA) → kronik efüzyon → kist oluşumu. Primer (nadir): Çocuklarda eklem patolojisi olmadan. Kadınlarda daha sık.",
        differentialDiagnosis: ["DVT (Derin Ven Trombozu — rüptüre Baker kistini taklit eder)", "Popliteal Arter Anevrizması", "Ganglion Kisti", "Sinovyal Sarkom (Solid komponent, kontrastlanma)"],
        goldStandard: "USG (İlk tercih — dinamik değerlendirme, boyun yapısı). MRI altta yatan eklem patolojisini (menisküs yırtığı) gösterir.",
        clinicalPearl: "Rüptüre Baker kisti = Psödotromboflebit sendromu: Baldırda ağrı, şişlik, DVT taklidi. USG ile ayırıcı tanı kritiktir — gereksiz antikoagülan tedaviden kaçınılır."
    },
    {
        id: "achilles-rupture",
        name: "Aşil Tendon Rüptürü",
        nameEn: "Achilles Tendon Rupture",
        category: "Ankle (Ayak Bileği)",
        categoryEn: "Ankle",
        mechanism: "Ani eksantrik kasılma kuvveti (sprintte itme, merdiven atlama) → hipovasküleer watershed bölgede (kalkaneusun 2-6cm proksimali) tendon bütünlüğünün ani kaybı. Kager yağ yastığı, rüptür alanına komşu olduğundan kanamayı içerir → ödem.",
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
        },
        etiology: "Akut eksantrik kasılma (sprint, merdiven atlama). 30-50 yaş erkeklerde sık ('Weekend warrior'). Fluorokinolon antibiyotikler, steroid kullanımı, kronik tendinopatisi predispozan. Hipovasküleer watershed bölge (kalkaneusun 2-6cm proksimali).",
        differentialDiagnosis: ["Plantaris Tendon Rüptürü (Klinik benzer, daha hafif)", "Aşil Tendinopatisi (Parsiyel yırtık)", "Derin Ven Trombozu (Baldır ağrısı)", "Gastroknemius Yırtığı (Tennis Leg)"],
        goldStandard: "USG (Dinamik Thompson testi ile real-time değerlendirme — duyarlılık %95+). MRI parsiyel/tam yırtık ayrımı ve cerrahi planlama için.",
        clinicalPearl: "Thompson testi: Baldır sıkılması → ayak plantar fleksiyonu olmalı. Yanıt yoksa tam rüptür. Fluorokinolon kullanan hastada bilateral rüptür riski hatırlanmalı!"
    },
    {
        id: "achilles-tendinopathy",
        name: "Aşil Tendinopatisi",
        nameEn: "Achilles Tendinopathy",
        category: "Ankle (Ayak Bileği)",
        categoryEn: "Ankle",
        mechanism: "Kronik tekrarlayan yük → hipovasküleer watershed bölgede yetersiz iyileşme → mukoid kollajen fibril dejenerasyonu (tendinozis). İnflamasyon minimaldir; esas olay dejeneratif kollajen yeniden yapılanması. Neovaskülarizasyon (Doppler) ağrı iletimi yapan sinir lifleriyle birliktedir.",
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
        },
        etiology: "Kronik aşırı kullanım (koşu, uzun mesafe yürüyüş). Uygunsuz ayakkabı, ani antrenman artışı. Fluorokinolon, steroid. Obezite, diyabet, hiperlipidemi → tendon dejenerasyonunu hızlandırır.",
        differentialDiagnosis: ["Aşil Tendon Parsiyel Yırtığı", "Retrocalcaneal Bursit", "Haglund Deformitesi (Pompa çıkıntısı)", "Plantaris Sendromu"],
        goldStandard: "USG (Dinamik değerlendirme + Doppler neovaskülarizasyon). MRI kalınlık, intrasubstans değişiklik ve parsiyel yırtık değerlendirmesinde üstün.",
        clinicalPearl: "İnsersiyonel vs non-insersiyonel tendinopati ayrımı tedaviyi yönlendirir. İnsersiyonel: Kalkaneusa yapışma yerinde → eksantrik egzersizler kontrendike. Neovaskülarizasyon = Ağrı korelasyonu (Öhberg)."
    },
    {
        id: "lateral-epicondylitis",
        name: "Lateral Epikondilit (Tenisçi Dirseği)",
        nameEn: "Lateral Epicondylitis (Tennis Elbow)",
        category: "Elbow (Dirsek)",
        categoryEn: "Elbow",
        mechanism: "Tekrarlayan ön kol ekstansör aktivitesi (backhand vuruşu) → ECRB'nin lateral epikondile yapışma yerinde angiofibroblastik hiperplazi. Temel patoloji: kollajen fibrillerinde dejenerasyon (tendinozis), akut inflamasyon değil. İntratendinöz mukoid değişiklikler karakteristiktir.",
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
        },
        etiology: "Tekrarlayan el bileği ekstansiyon/supinasyon aktivitesi (tenis backhand, bilgisayar kullanımı, vida çevirme). 35-55 yaş arası sık. Dominant kolda 2× daha fazla. Tendinozis (dejenerasyon) esas patolojidir.",
        differentialDiagnosis: ["Radyal Tünel Sendromu (Posterior interosseöz sinir sıkışması)", "Lateral Kollateral Ligaman Yırtığı", "Radyokapitaller Artrit", "Servikal Radikülopati (C6-C7)"],
        goldStandard: "USG (İlk tercih — yüksek rezolüsyon, dinamik değerlendirme, girişimsel rehberlik). MRI şüpheli olgularda ve cerrahi planlama öncesi.",
        clinicalPearl: "ECRB (Ekstansör Karpi Radialis Brevis) en sık tutulan tendondur — diğer ekstansörlerden daha derin yerleşimli ve epikondile en yakın yapışma yeri. Cozen testi: Dirseğe karşı el bileği ekstansiyonunda ağrı."
    },
    {
        id: "de-quervain-tenosynovitis",
        name: "De Quervain Tenosinoviti",
        nameEn: "De Quervain's Tenosynovitis",
        category: "Wrist (El Bileği)",
        categoryEn: "Wrist",
        mechanism: "1. dorsal kompartmandaki APL ve EPB tendonlarına kronik tekrarlayan ulnar deviasyon + fleksiyon yükü → fibröz tendon kılıfının stenotik daralması → tendinöz kaymada mekanik engel + sinoviyal inflamasyon. Doğum sonrası dönemde hormonal değişiklikler bağ dokusunu predispoze eder.",
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
        },
        etiology: "Tekrarlayan ulnar deviasyon + fleksiyon (yeni anneler — bebek kucaklama, müzisyenler, yazarlar). Hormonal değişiklikler (postpartum, OKS). Kadınlarda 6× daha sık.",
        differentialDiagnosis: ["Radyal Stiloid Kırığı", "1. CMC Eklem Artriti (Bazal Başparmak Artriti)", "İnterseksiyon Sendromu (2. kompartman)", "Wartenberg Sendromu (Radyal sinir sıkışması)"],
        goldStandard: "USG (Yüksek çözünürlüklü — tendon kılıf sıvısı, kalınlaşma, septum varlığı değerlendirilir). MRI nadiren gerekli.",
        clinicalPearl: "Anatomik varyant: EPB için ayrı bir kompartman (septum) varlığı cerrahi dekompresyonda atlanırsa rekürrens nedenidir. USG ile ameliyat öncesi septum tespiti kritiktir."
    },
    {
        id: "patellar-tendinopathy",
        name: "Patellar Tendinopatisi (Atlayıcı Dizi)",
        nameEn: "Patellar Tendinopathy (Jumper's Knee)",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Tekrarlayan atlama yükü → patellar tendonun proksimal insersiyonunda kollajen mikrofibril yıkımı → angiofibroblastik hiperplazi (tendinozis). Neovaskülarizasyon: ağrıyı ileten sinir lifleriyle birlikte seyreder. Temel patoloji dejenerasyon, akut inflamasyon değil.",
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
        },
        etiology: "Atlama sporları (voleybol, basketbol). Tekrarlayan kuadriseps eksantrik kasılması → patellar tendon proksimal insertio hasarı. Adölesanlar ve genç sporcularda sık.",
        differentialDiagnosis: ["Osgood-Schlatter Hastalığı (Tibial tüberkül apofiziti)", "Sinding-Larsen-Johansson (Patellanın alt kutbu — çocuklarda)", "Hoffa Hastalığı (İnfrapatellar yağ yastığı impingement)", "Kuadriseps Tendinopatisi"],
        goldStandard: "USG (Dinamik değerlendirme + Doppler neovaskülarizasyon). MRI intrasubstans değişiklik ve parsiyel yırtık ayrımında üstün.",
        clinicalPearl: "Victorian Institute of Sport Assessment (VISA-P) skoru klinik şiddeti objektifleştirir. Doppler neovaskülarizasyon varlığı ağrı ile koreledir ve sklerozan tedavi/PRP hedefini belirler."
    },
    {
        id: "avascular-necrosis-hip",
        name: "Avasküler Nekroz (AVN) - Femur Başı",
        nameEn: "Avascular Necrosis (AVN) - Femoral Head",
        category: "Hip (Kalça)",
        categoryEn: "Hip",
        mechanism: "Risk faktörleri (steroid, alkol, hemoglobinopatiler, dalış hastalığı) → femur başının terminal end-arterlerinde tıkanma → iskemik nekroz. Reaktif sınırda: iç hat = skleroz (hipointens), dış hat = granülasyon dokusu (hiperintens) → Double-Line Sign. İleri evrede kıkırdak + subkondral çöküş.",
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
        },
        etiology: "Steroid kullanımı (en sık), alkol, orak hücreli anemi (SCA), dalış hastalığı (dekompresyon), SLE, radyasyon, idiyopatik. Bilateral tutulum %50-80.",
        differentialDiagnosis: ["Geçici Osteoporoz (Bone Marrow Edema Sendromu — reversibl)", "Subkondral Yetersizlik Kırığı", "Septik Artrit", "Femur Başı Stres Kırığı"],
        goldStandard: "MRI (T1 + T2/STIR — Duyarlılık %99). Ficat-Arlet veya Steinberg sınıflaması. X-Ray erken evrede normal olabilir (Evre 0-I).",
        clinicalPearl: "Double-Line Sign (T2'de): İç hat = Skleroz (hipointens) + dış hat = Granülasyon dokusu (hiperintens) — AVN için PATOGNOMONİK. Karşı kalça da mutlaka taranmalı (%50-80 bilateral)."
    },
    {
        id: "stress-fracture",
        name: "Stres Kırığı",
        nameEn: "Stress Fracture",
        category: "General (Genel)",
        categoryEn: "General",
        mechanism: "Kas yorgunluğu + tekrarlayan subkritik yük → kemik yeniden yapılanma kapasitesinin aşılması → mikro kırık birikimi. T2/STIR'de intramedullar ödem en erken bulgudur; ince hipointens kırık hattı geç dönemde X-Ray'de periosteal reaksiyon olarak belirir.",
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
        },
        etiology: "Tekrarlayan submaksimal yük (koşu, marş, dans). Kadın atlet triadı (amenore, düşük enerji, osteoporoz). Ani antrenman artışı. Yetersizlik kırığı: Osteoporotik kemik, normal yük.",
        differentialDiagnosis: ["Osteoid Osteom (Gece ağrısı, aspirinle azalır)", "Osteomiyelit (Ateş, CRP artışı)", "Ewing Sarkomu (Periosteal reaksiyon + yumuşak doku kitlesi)", "Kemik İliği Ödemi Sendromu"],
        goldStandard: "MRI (Duyarlılık %99 — X-Ray'den 2-4 hafta önce bulgu verir). T1 hipointens kırık hattı + STIR hiperintens ödem tanı koydurucudur.",
        clinicalPearl: "Fredericson MRI evrelemesi (Grade 1-4): Grade 4 = Kırık hattı görülür → yük verme kısıtlanır. 'Dreaded Black Line' (Tibia ön korteks): Yavaş iyileşen, non-union riski yüksek stres kırığı."
    },
    {
        id: "hip-labral-tear",
        name: "Kalça Labrumu Yırtığı",
        nameEn: "Hip Labral Tear",
        category: "Hip (Kalça)",
        categoryEn: "Hip",
        mechanism: "FAI: Cam (femoral başın asferik büyümesi) → anterosüperior labrumun her fleksiyonda sıkışması → tekrarlayan mikro yırtık birikimi. Pincer (asetabüler over-coverage) → labral ezilme ve degenerasyon. MRA: intraartiküler gadolinyum kontrast labral yırtık içine girer → net görüntüleme.",
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
        },
        etiology: "FAI (Femoroacetabüler İmpingement): Cam (asferik femur başı) veya Pincer (asetabüler over-coverage). Spor travması. Kalça displazisi. Kadınlarda daha sık (%65).",
        differentialDiagnosis: ["Kalça OA (Dejeneratif — eklem aralığı daralması)", "İliopsoas Bursit/Snapping Hip", "Ligamentum Teres Yırtığı", "Stres Kırığı (Femur boynu)"],
        goldStandard: "MR Artrografi (MRA — Duyarlılık %90+). İntraartiküler gadolinyum labral yırtık içine girerek görünür kılar. Konvansiyonel MRI duyarlılığı düşüktür (%60-70).",
        clinicalPearl: "Alpha açısı >55° = Cam deformitesi. Lateral CE açısı >40° = Pincer. Anterosüperior labrum en sık yırtık bölgesi (%90). FABER ve FADDIR testleri klinik değerlendirmede kullanılır."
    },
    {
        id: "osteosarcoma",
        name: "Osteosarkom",
        nameEn: "Osteosarcoma",
        category: "Neoplastik",
        categoryEn: "Neoplastic",
        keyPoints: [
            "En sık primer kemik malignitesi (miyelom hariç) — 10-20 yaş ve >60 yaş bimodal.",
            "Metafizer yerleşim (distal femur, proksimal tibia, proksimal humerus — 'osteosarkom üçgeni').",
            "Codman üçgeni + güneş ışını paterni (sunburst) = PATOGNOMONİK röntgen bulgusu.",
            "MRI: Tümör sınırlarını, nörovasküler yapı ilişkisini ve skip metastazı gösterir."
        ],
        keyPointsEn: [
            "Most common primary bone malignancy (excluding myeloma) — bimodal 10-20 and >60 years.",
            "Metaphyseal location (distal femur, proximal tibia, proximal humerus — 'osteosarcoma triangle').",
            "Codman triangle + sunburst pattern = PATHOGNOMONIC X-ray finding.",
            "MRI: Shows tumor extent, neurovascular involvement and skip metastases."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "Röntgen - Codman Üçgeni + Sunburst", modality: "X-Ray" },
            { url: "/images/placeholder_source.png", caption: "MRI - Tümör Sınırları", modality: "MRI" }
        ],
        findings: {
            xray: {
                description: "Metafizer yerleşimli kemik yıkımı (litik) + yeni kemik oluşumu (sklerotik). Codman üçgeni: Periost kaldırılmış, tümör kenarda periost reaksiyonu. Sunburst (güneş ışını): İğne benzeri periosteal reaksiyon. Korteks destrüksiyonu + yumuşak doku kitlesi."
            },
            mri: {
                t1: "Tümör T1 düşük-orta sinyal (medullar kanal tutulumu). Kemik iliği invazyonu.",
                t2: "Heterojen yüksek sinyal (ödem + tümör + nekroz). Yumuşak doku bileşeni.",
                t1_c: "Heterojen kontrastlanma. Nekrotik alanlar kontrastlanmaz (tedavi yanıtı değerlendirmesinde önemli).",
                other_sequences: "Tüm vücut MRI veya PET-CT: Skip metastaz, uzak metastaz."
            }
        },
        findingsEn: {
            xray: {
                description: "Metaphyseal bone destruction (lytic) + new bone formation (sclerotic). Codman triangle: Elevated periosteum, periosteal reaction at tumor edge. Sunburst: Needle-like periosteal reaction. Cortical destruction + soft tissue mass."
            },
            mri: {
                t1: "Tumor T1 low-intermediate signal (medullary canal involvement). Bone marrow invasion.",
                t2: "Heterogeneous high signal (edema + tumor + necrosis). Soft tissue component.",
                t1_c: "Heterogeneous enhancement. Necrotic areas do not enhance (important for treatment response).",
                other_sequences: "Whole body MRI or PET-CT: Skip metastasis, distant metastasis."
            }
        },
        mechanism: "Mezenşimal hücre malign transformasyonu → osteoid / kemik üreten tümör. En sık konvansiyonel osteosarkom (yüksek grade). Metafizer lokalizasyon: Büyüme plaklarına yakın aktif hücre proliferasyonu bölgesi. Codman üçgeni: Periost tümör tarafından kaldırılır, kenarda yeni periost kemik oluşturur. Akciğer metastazı hematojen yolla (en sık metastaz bölgesi).",
        etiology: "Sporadik (en sık). Risk: Retinoblastom (Rb mutasyonu), Li-Fraumeni (p53), Paget hastalığı, Radyasyon.",
        differentialDiagnosis: ["Ewing Sarkomu (Soğan zarı periosteal reaksiyon, diafizer, 5-15 yaş)", "Kondrosarkom (Kıkırdak matriksi, daha yaşlı hastalar)", "Osteomiyelit (Periosteal reaksiyon benzerliği)", "Anevrizmal Kemik Kisti (Sıvı-sıvı seviyeleri)"],
        goldStandard: "Röntgen (İlk değerlendirme — Codman üçgeni + sunburst). MRI lokal evreleme (skip metastaz, nörovasküler tutulum). BT akciğer metastaz taraması.",
        clinicalPearl: "Osteosarkom üçgeni: Distal femur + Proksimal tibia + Proksimal humerus → tüm osteosarkomların %75'i. Neoadjuvan kemoterapi sonrası MRI'da nekroz oranı (%90+) = İyi prognoz (Huvos Grade III-IV)."
    },
    {
        id: "bone-metastasis",
        name: "Kemik Metastazı",
        nameEn: "Bone Metastasis",
        category: "Neoplastik",
        categoryEn: "Neoplastic",
        keyPoints: [
            "En sık malign kemik lezyonu (primer kemik tümörlerinden çok daha sık).",
            "Aksiyel iskelet (omurga, pelvis, kot, sternum) + proksimal humerus/femur tutulumu sık.",
            "Litik: Akciğer, böbrek, tiroid. Sklerotik: Prostat, meme (nadir). Mixt: Meme, akciğer.",
            "MRI kemik iliği tutulumunu diğer yöntemlerden çok önce gösterir."
        ],
        keyPointsEn: [
            "Most common malignant bone lesion (far more common than primary bone tumors).",
            "Axial skeleton (spine, pelvis, rib, sternum) + proximal humerus/femur common.",
            "Lytic: Lung, kidney, thyroid. Sclerotic: Prostate, breast (rare). Mixed: Breast, lung.",
            "MRI shows bone marrow involvement much earlier than other modalities."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "Röntgen - Litik Kemik Metastazı", modality: "X-Ray" },
            { url: "/images/placeholder_source.png", caption: "MRI - Kemik İliği Tutulumu", modality: "MRI" }
        ],
        findings: {
            xray: {
                description: "Litik metastaz: Korteks destrüksiyonu + içi boş görünüm. Sklerotik: Yoğun (fildişi) kemik alanları. Patolojik kırık riski: Korteksin >50% tutulumu veya femurda >2.5cm lezyon."
            },
            mri: {
                t1: "T1 hipointens (normal yağlı kemik iliğinin yerini alır). Diffüz veya fokal tutulum.",
                t2: "T2 hiperintens (ödem, tümör). STIR: En hassas kemik iliği ödemi gösterimi.",
                t1_c: "Kontrastlanma (hipervasküler metastazlar: Böbrek, tiroid, meme).",
                dwi: "Diffüz kemik metastazında kısıtlanma. Tedavi yanıtı izleminde (ADC artışı → yanıt)."
            }
        },
        findingsEn: {
            xray: {
                description: "Lytic metastasis: Cortical destruction + hollow appearance. Sclerotic: Dense (ivory) bone areas. Pathologic fracture risk: >50% cortical involvement or >2.5cm femoral lesion."
            },
            mri: {
                t1: "T1 hypointense (replaces normal fatty bone marrow). Diffuse or focal involvement.",
                t2: "T2 hyperintense (edema, tumor). STIR: Most sensitive for bone marrow edema.",
                t1_c: "Enhancement (hypervascular metastases: Kidney, thyroid, breast).",
                dwi: "Restriction in diffuse bone metastasis. Treatment response monitoring (ADC increase → response)."
            }
        },
        mechanism: "Primer tümör → hematojen yayılım → kırmızı kemik iliği (omurga, sternum, pelvis) tutulumu. Batson pleksusu: Prostat ve göğüs kanserinin omurgaya direkt venöz yayılımını kolaylaştıran paravertebral venöz ağ. Litik metastaz: Osteoklast aktivasyonu (tümör sitokinleri → RANKL artışı). Sklerotik: Osteoblast uyarımı (prostat PSA, endotelin-1). Patolojik kırık: Korteksin destekleyici kapasitesi kaybedilir.",
        etiology: "Meme, Akciğer, Prostat, Böbrek, Tiroid (%80 vakası).",
        differentialDiagnosis: ["Multipl Miyelom (Yağmur damlası litik lezyonlar, M-spike)", "Lenfoma (Kemik tutulumu — ivory vertebra)", "Primer Kemik Tümörleri (Osteosarkom, Ewing)", "Fibröz Displazi (Benign — ground glass görünüm)"],
        goldStandard: "Tüm vücut MRI (DWIBS) veya PET-CT (Duyarlılık %95+). Omurga MRI T1-STIR: Normal yağlı kemik iliğinin replasmanı erken saptanır.",
        clinicalPearl: "Litik: Akciğer, Böbrek, Tiroid ('Lobo Birası Tipi' — çok kanlı). Sklerotik: Prostat, Meme (nadir). Mirelsin skoru ≥9 = Profilaktik fiksasyon (Patolojik kırık riski yüksek)."
    },
    {
        id: "acute-osteomyelitis",
        name: "Akut Osteomiyelit",
        nameEn: "Acute Osteomyelitis",
        category: "Enfeksiyöz",
        categoryEn: "Infectious",
        keyPoints: [
            "MRI erken tanıda altın standarttır — röntgen normal iken MRI pozitif olabilir (48-72 saat).",
            "T1 hipointens + STIR/T2 hiperintens kemik iliği = Osteomiyelit paterni.",
            "Çocukta: Metafizer tutulum, Stafilokokus aureus.",
            "Diyabetik ayak osteomiyelit: MRI'da kemik yüzeyi ile yumuşak doku ilişkisi kritik."
        ],
        keyPointsEn: [
            "MRI is gold standard for early diagnosis — X-ray may be normal when MRI is positive (48-72h).",
            "T1 hypointense + STIR/T2 hyperintense bone marrow = Osteomyelitis pattern.",
            "Child: Metaphyseal involvement, Staphylococcus aureus.",
            "Diabetic foot osteomyelitis: Bone surface-soft tissue relationship critical on MRI."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "Röntgen - Periost Reaksiyonu (Geç)", modality: "X-Ray" },
            { url: "/images/placeholder_source.png", caption: "MRI STIR - Kemik İliği Ödemi", modality: "MRI" }
        ],
        findings: {
            xray: {
                description: "Erken (ilk 10-14 gün): Normal veya hafif yumuşak doku şişliği. Geç: Kemik yıkımı, periost reaksiyonu, skleroz. Kronik: Sequestr (nekrotik kemik) + involukrum (yeni periost kemiği)."
            },
            mri: {
                t1: "Kemik iliği T1 hipointens (normal yağ iliği sinyal kaybı). En hassas erken bulgu.",
                t2: "STIR/T2 hiperintens (ödem). Yumuşak doku tutulumu (selülit, miyozit).",
                t1_c: "Rim kontrastlı apse (santral düşük, rim yüksek kontrastlanma). Kemik yüzey devamlılık kaybı.",
                other_sequences: "DWI: Apse içeriğinde kısıtlanma. Diyabetik ayak: T1 hipointensi kortekse ulaşmışsa osteomiyelit tanısaldır."
            }
        },
        findingsEn: {
            xray: {
                description: "Early (first 10-14 days): Normal or mild soft tissue swelling. Late: Bone destruction, periosteal reaction, sclerosis. Chronic: Sequestrum (necrotic bone) + involucrum (new periosteal bone)."
            },
            mri: {
                t1: "Bone marrow T1 hypointense (loss of normal fatty marrow signal). Most sensitive early finding.",
                t2: "STIR/T2 hyperintense (edema). Soft tissue involvement (cellulitis, myositis).",
                t1_c: "Rim-enhancing abscess (low central, high rim enhancement). Cortical surface discontinuity.",
                other_sequences: "DWI: Restriction in abscess content. Diabetic foot: If T1 hypointensity reaches cortex, osteomyelitis is diagnostic."
            }
        },
        mechanism: "Bakteriyel kemik enfeksiyonu: Hematojen (çocuk, metafiz) veya direkt inokülasyon (diyabet, travma, cerrahi). Metafizde gelişimi: Yavaş akımla zengin sinüzoidal kapillerler → bakteriyel yerleşim. İltihabi yanıt → vasküler tromboz → korteks perforasyon → subperiosteal apse → sinus trakt. Kronik: Avasküler kemik (sequestr) etrafında yeni kemik (involukrum).",
        etiology: "Stafilokokus aureus (%90). MRSA giderek artan. Diyabetik ayak: Polimikrobiyal. Orak hücreli anemi: Salmonella.",
        differentialDiagnosis: ["Ewing Sarkomu (Soğan zarı periosteal reaksiyon — osteomiyeliti taklit eder!)", "Langerhans Hücre Histiyositozu", "Stres Kırığı (Kemik iliği ödemi)", "Charcot Artropatisi (Diyabetik ayak)"],
        goldStandard: "MRI (Duyarlılık %90-100). T1 hipointens kemik iliği + STIR hiperintens ödem + kontrastlı rim apse = Tanısal. Kemik biyopsi kültürü kesin tanı.",
        clinicalPearl: "Penumbra sign (MRI): T1 kontrastlı — apse çeperinin iç kenarında hiperintens halka. Brodie apsesi: Subakut osteomiyelitin lokalize formu (metafizer sklerotik sınırlı lezyon). Diyabetik ayakta: T1 sinyal düşüklüğü kortkese ulaşmışsa osteomiyelit tanısaldır."
    },
    {
        id: "plantar-fasciitis",
        name: "Plantar Fasiit",
        nameEn: "Plantar Fasciitis",
        category: "Tendon/Fasya",
        categoryEn: "Tendon/Fascia",
        keyPoints: [
            "En sık ayak ağrısı nedeni — topuk ağrısı, sabah ilk adımda en şiddetli.",
            "USG: Plantar fasya kalınlığı >4mm + eko heterojenitesi = Tanısal.",
            "Röntgen: Kalkaneal spur (çoğunlukla insidental, PF'ye özgü değil).",
            "MRI: Şiddetli/atipik olgularda ve ayırıcı tanıda (stres kırığı, tümör)."
        ],
        keyPointsEn: [
            "Most common cause of heel pain — worst with first steps in the morning.",
            "USG: Plantar fascia thickness >4mm + echo heterogeneity = Diagnostic.",
            "X-ray: Calcaneal spur (mostly incidental, not specific to PF).",
            "MRI: For severe/atypical cases and differential diagnosis (stress fracture, tumor)."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Plantar Fasya Kalınlaşması", modality: "USG" },
            { url: "/images/placeholder_source.png", caption: "MRI STIR - Fasyal Ödem", modality: "MRI" }
        ],
        findings: {
            usg: {
                description: "Plantar fasyanın kalkaneal insertio'sunda kalınlık artışı (>4mm, normal <4mm). İnternal ekojenite azalması (hypoechoic) — ödem/dejenerasyon. Fasyal fibrilerde devamlılık bozukluğu (parsiyel yırtık). Power Doppler: Neovaskülarizasyon (kronik degeneratif değişiklik).",
                doppler: "Kronik olgularda neovaskülariasyon artışı (kronik tendinopati paterni)."
            },
            xray: {
                description: "Kalkaneal spur (inferoanterior): İnsidental bulgu, PF'ye spesifik değil. Kortikal erozyon (ileri evre)."
            },
            mri: {
                t2: "STIR: Plantar fasyanın kalkaneal insertio'sunda hiperintensite (ödem). Perifer fasyal ödem.",
                t1_c: "Kontrastlanma: Aktif inflamasyon.",
                other_sequences: "Kalkaneal stres kırığı ekartasyonu: T1 hipointens + STIR hiperintens bant (kırık hattı). Tümör ekartasyonu."
            }
        },
        findingsEn: {
            usg: {
                description: "Thickness increase at calcaneal insertion of plantar fascia (>4mm, normal <4mm). Decreased internal echogenicity (hypoechoic) — edema/degeneration. Discontinuity of fascial fibers (partial tear). Power Doppler: Neovascularization (chronic degenerative change).",
                doppler: "Increased neovascularization in chronic cases (chronic tendinopathy pattern)."
            },
            xray: {
                description: "Calcaneal spur (inferoanterior): Incidental finding, not specific to PF. Cortical erosion (advanced stage)."
            },
            mri: {
                t2: "STIR: Hyperintensity at calcaneal insertion of plantar fascia (edema). Perifascial edema.",
                t1_c: "Enhancement: Active inflammation.",
                other_sequences: "Calcaneal stress fracture exclusion: T1 hypointense + STIR hyperintense band (fracture line). Tumor exclusion."
            }
        },
        mechanism: "Tekrarlayan mikrotravma → plantar fasyanın kalkaneal insersiyonunda dejeneratif değişiklikler (Tendinozis: Kollajen deorganizasyonu, neovaskülariasyon, makrofaj infiltrasyonu — gerçek inflamasyon yok!). Sabah ağrısı: Gece istirahati → fasya kısalır → ilk adımda fasya gerilir → ağrı. Şişman, düz ayak (pes planus) veya yüksek ark (pes kavus): Risk arttırır.",
        etiology: "Uzun süre ayakta durma, koşu, obezite, pes planus/kavus, uygunsuz ayakkabı, kısa Aşil tendonu.",
        differentialDiagnosis: ["Kalkaneal Stres Kırığı (MRI'da bant şekilli ödem)", "Tarsal Tünel Sendromu (Tibial sinir sıkışması)", "Fat Pad Atrofisi (Topuk yağ yastığı incelmesi)", "Aşil Tendinopati (Posterior topuk ağrısı — farklı lokalizasyon)"],
        goldStandard: "USG (İlk tercih — Fasya kalınlığı >4mm + hipoekojenite = tanısal). MRI dirençli/atipik olgularda ve ayırıcı tanıda.",
        clinicalPearl: "Plantar fasya kalınlığı: Normal <4mm, Patolojik >4mm. Kalkaneal spur (çıkıntı) = İnsidental bulgu, PF tanısı koymaz! Sabah ilk adımda şiddetli ağrı → gün içinde azalma = Tipik klinik patern."
    }
];
