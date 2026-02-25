import { Pathology } from "@/types";

export const mskPathologies: Pathology[] = [
    {
        id: "acl-tear",
        name: "Ön Çapraz Bağ (ACL) Yırtığı",
        nameEn: "Anterior Cruciate Ligament (ACL) Tear",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Valgus + iç rotasyon + hiperekstansiyon (pivot-shift) kuvveti → ACL'nin femoral yapışma yerine yakın bölgede yırtılması. Kissing contusion paterni: tibia posteriora çarpar → lateral femoral kondil + posterolateral tibia kemik iliği ödemi (Empty Notch Sign).",
        mechanismEn: "Valgus + internal rotation + hyperextension (pivot-shift) force → ACL tear near the femoral attachment site. Kissing contusion pattern: tibia impacts posteriorly → lateral femoral condyle + posterolateral tibia bone marrow edema (Empty Notch Sign).",
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
        etiologyEn: "Sports-related trauma (70%+). Pivot-shift mechanism: Valgus + internal rotation + hyperextension. 2-8× more common in women (hormonal/anatomic — narrow intercondylar notch, increased Q angle).",
        differentialDiagnosis: ["PCL Yırtığı (Posterior çekmece testi +)", "Posterolateral Köşe Yaralanması", "MCL Yırtığı (Eşlik edebilir — O'Donoghue triadı)", "Menisküs Yırtığı"],
        differentialDiagnosisEn: ["PCL Tear (Posterior drawer test +)", "Posterolateral Corner Injury", "MCL Tear (May accompany — O'Donoghue triad)", "Meniscus Tear"],
        goldStandard: "MRI (Duyarlılık %95+). Sagittal T2 FSE/PD sekanslar ligaman bütünlüğünü en iyi gösterir.",
        goldStandardEn: "MRI (Sensitivity 95%+). Sagittal T2 FSE/PD sequences best demonstrate ligament integrity.",
        clinicalPearl: "O'Donoghue'nun mutsuz üçlüsü: ACL + MCL + Medial menisküs yırtığı. Segond kırığı (lateral tibial platoda avülsiyon) = Patolojik ACL yırtığı bulgusu.",
        clinicalPearlEn: "O'Donoghue's unhappy triad: ACL + MCL + Medial meniscus tear. Segond fracture (avulsion at lateral tibial plateau) = Pathognomonic ACL tear finding.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "ACR Appropriateness Criteria: Acute Trauma to the Knee. American College of Radiology; 2020.",
            "Radiopaedia.org - Anterior cruciate ligament tear"
        ]
    },
    {
        id: "meniscus-bucket-handle",
        name: "Kova Sapı (Bucket-Handle) Yırtık",
        nameEn: "Bucket-Handle Meniscus Tear",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Aksiyel yük altında rotasyonel yaralanma → longitudinal vertikal menisküs yırtığı → iç fragmanın interkondiler çukura deplase göçü (kova sapı hareketi). Deplase fragment femur ve tibia arasında mekanik engel oluşturur → kilitli diz.",
        mechanismEn: "Rotational injury under axial load → longitudinal vertical meniscus tear → displacement of the inner fragment into the intercondylar fossa (bucket-handle movement). The displaced fragment creates a mechanical block between the femur and tibia → locked knee.",
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
        etiologyEn: "Knee rotation under axial loading (sports, trauma). Medial meniscus shows bucket-handle tears 10x more frequently than lateral meniscus (limited mobility due to MCL attachment).",
        differentialDiagnosis: ["Radyal Menisküs Yırtığı", "Horizontal Menisküs Yırtığı", "Meniskokapsuler Ayrılma", "Displaced Flap Yırtık"],
        differentialDiagnosisEn: ["Radial Meniscus Tear", "Horizontal Meniscus Tear", "Meniscocapsular Separation", "Displaced Flap Tear"],
        goldStandard: "MRI (Sagittal + Koronal PD-FS). Absent bow tie sign sagittal kesitte 2'den az üçgen görülmesiyle tanı konur.",
        goldStandardEn: "MRI (Sagittal + Coronal PD-FS). Absent bow tie sign is diagnosed when fewer than 2 triangles are seen on sagittal images.",
        clinicalPearl: "Double PCL sign: Deplase menisküs fragmanı PCL'nin önünde ikinci bir bant olarak görülür — bucket-handle yırtığı için patognomik MRI bulgusu.",
        clinicalPearlEn: "Double PCL sign: Displaced meniscus fragment appears as a second band anterior to the PCL — pathognomonic MRI finding for bucket-handle tear.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Bucket handle meniscal tear"
        ]
    },
    {
        id: "rotator-cuff-supraspinatus",
        name: "Supraspinatus Tam Kat Yırtığı",
        nameEn: "Supraspinatus Full-Thickness Tear",
        category: "Shoulder (Omuz)",
        categoryEn: "Shoulder",
        mechanism: "Supraspinatus tendonu kritik hipovasküleer bölgede (tuberositas major'a 1cm proksimal) → kronik subakromial sıkışma + tekrarlayan yük → dejenerasyon + mikro yırtık birikimi → tam kat yırtık. Kronik yırtıkta kas fiberleri yağlı dejenerasyonla (Goutallier) değişir; retraksiyon cerrahi başarıyı etkiler.",
        mechanismEn: "Supraspinatus tendon in the critical hypovascular zone (1cm proximal to the greater tuberosity) → chronic subacromial impingement + repetitive loading → degeneration + micro-tear accumulation → full-thickness tear. In chronic tears, muscle fibers undergo fatty degeneration (Goutallier); retraction affects surgical success.",
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
        etiologyEn: "Chronic subacromial impingement + age-related degeneration. Prevalence increases above age 40. Acute: Fall or heavy lifting. Type III acromion (hook-shaped) is a predisposing factor.",
        differentialDiagnosis: ["Subakromial Bursit", "Kalsifik Tendinit", "Frozen Shoulder (Adheziv Kapsülit)", "Labral Yırtık (SLAP)"],
        differentialDiagnosisEn: ["Subacromial Bursitis", "Calcific Tendinitis", "Frozen Shoulder (Adhesive Capsulitis)", "Labral Tear (SLAP)"],
        goldStandard: "MRI (Koronal oblik T2 FS). Goutallier sınıflaması (T1 sagittal) kas yağlanmasını değerlendirir. USG deneyimli ellerde eşdeğer duyarlılığa sahiptir.",
        goldStandardEn: "MRI (Coronal oblique T2 FS). Goutallier classification (T1 sagittal) assesses muscle fatty infiltration. USG has equivalent sensitivity in experienced hands.",
        clinicalPearl: "Goutallier Grade ≥2 (kas ≤ yağ) = Cerrahi onarım sonrası kötü prognoz. Tendon retraksiyonu glenoid seviyesine ulaştıysa irreparabl kabul edilir.",
        clinicalPearlEn: "Goutallier Grade >=2 (muscle <= fat) = Poor prognosis after surgical repair. Tendon retraction reaching the glenoid level is considered irreparable.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Goutallier D, Postel JM, Bernageau J, et al. Fatty muscle degeneration in cuff ruptures. Clin Orthop Relat Res. 1994;(304):78-83.",
            "ACR Appropriateness Criteria: Shoulder Pain - Atraumatic. American College of Radiology; 2018."
        ]
    },
    {
        id: "bankart-lesion",
        name: "Bankart Lezyonu",
        nameEn: "Bankart Lesion",
        category: "Shoulder (Omuz)",
        categoryEn: "Shoulder",
        mechanism: "Omuzun anteriora travmatik dislokasyonu → humerus başının anteriora itilmesi → anteroinferior glenohumeral ligaman + labrum kompleksinin glenoiddan kopması. Hill-Sachs: humerus başı posterolateraline sertleşmiş glenoid rim çarpar → impaksiyon defekti.",
        mechanismEn: "Traumatic anterior shoulder dislocation → humeral head pushed anteriorly → avulsion of the anteroinferior glenohumeral ligament + labrum complex from the glenoid. Hill-Sachs: hardened glenoid rim impacts the posterolateral humeral head → impaction defect.",
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
        etiologyEn: "Traumatic anterior shoulder dislocation (95%). Recurrence rate after first dislocation is very high in young patients (80-90%). Contact sports (football, wrestling) and falls are the most common mechanisms.",
        differentialDiagnosis: ["SLAP Lezyonu (Süperior labrum — farklı lokalizasyon)", "ALPSA (Anterior Labroligamentöz Periosteal Sleeve Avülsiyonu)", "GLAD Lezyonu (Glenoid kıkırdak defekti)", "HAGL (Humerus tarafında avülsiyon)"],
        differentialDiagnosisEn: ["SLAP Lesion (Superior labrum — different location)", "ALPSA (Anterior Labroligamentous Periosteal Sleeve Avulsion)", "GLAD Lesion (Glenoid cartilage defect)", "HAGL (Humeral-side avulsion)"],
        goldStandard: "MR Artrografi (MRA). İntraartiküler gadolinyum labral yırtığı %90+ duyarlılıkla gösterir. Konvansiyonel MRI duyarlılığı daha düşüktür.",
        goldStandardEn: "MR Arthrography (MRA). Intra-articular gadolinium demonstrates labral tears with >90% sensitivity. Conventional MRI sensitivity is lower.",
        clinicalPearl: "Engaging Hill-Sachs: Humerus başı defektinin glenoid kenarla etkileşmesi → cerrahi onarım gerekli (Latarjet prosedürü). Kemik kaybı >%25 glenoid → tek başına Bankart onarımı yetersiz.",
        clinicalPearlEn: "Engaging Hill-Sachs: Humeral head defect engaging with the glenoid rim → surgical repair required (Latarjet procedure). Bone loss >25% glenoid → Bankart repair alone is insufficient.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Bankart lesion"
        ]
    },
    {
        id: "baker-cyst",
        name: "Baker (Popliteal) Kisti",
        nameEn: "Baker's Cyst (Popliteal Cyst)",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Diz eklem efüzyonu (menisküs yırtığı, OA, RA) → artan intraartikular basınç → medial gastroknemius-semimembranosus bursası ile eklem arasındaki 'boyun' yapısından posterior sıvı geçişi → kist büyümesi. Rüptürde sıvı baldıra yayılır → DVT taklidi.",
        mechanismEn: "Knee joint effusion (meniscus tear, OA, RA) → increased intra-articular pressure → posterior fluid passage through the 'neck' between the medial gastrocnemius-semimembranosus bursa and the joint → cyst enlargement. On rupture, fluid spreads to the calf → mimics DVT.",
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
        etiologyEn: "Secondary: Knee joint pathology (meniscus tear, OA, RA) → chronic effusion → cyst formation. Primary (rare): In children without joint pathology. More common in women.",
        differentialDiagnosis: ["DVT (Derin Ven Trombozu — rüptüre Baker kistini taklit eder)", "Popliteal Arter Anevrizması", "Ganglion Kisti", "Sinovyal Sarkom (Solid komponent, kontrastlanma)"],
        differentialDiagnosisEn: ["DVT (Deep Vein Thrombosis — mimics ruptured Baker's cyst)", "Popliteal Artery Aneurysm", "Ganglion Cyst", "Synovial Sarcoma (Solid component, enhancement)"],
        goldStandard: "USG (İlk tercih — dinamik değerlendirme, boyun yapısı). MRI altta yatan eklem patolojisini (menisküs yırtığı) gösterir.",
        goldStandardEn: "USG (First choice — dynamic evaluation, neck structure). MRI demonstrates underlying joint pathology (meniscus tear).",
        clinicalPearl: "Rüptüre Baker kisti = Psödotromboflebit sendromu: Baldırda ağrı, şişlik, DVT taklidi. USG ile ayırıcı tanı kritiktir — gereksiz antikoagülan tedaviden kaçınılır.",
        clinicalPearlEn: "Ruptured Baker's cyst = Pseudothrombophlebitis syndrome: Calf pain, swelling, mimics DVT. Differential diagnosis with USG is critical — avoids unnecessary anticoagulant therapy.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Radiopaedia.org - Baker cyst"
        ]
    },
    {
        id: "achilles-rupture",
        name: "Aşil Tendon Rüptürü",
        nameEn: "Achilles Tendon Rupture",
        category: "Ankle (Ayak Bileği)",
        categoryEn: "Ankle",
        mechanism: "Ani eksantrik kasılma kuvveti (sprintte itme, merdiven atlama) → hipovasküleer watershed bölgede (kalkaneusun 2-6cm proksimali) tendon bütünlüğünün ani kaybı. Kager yağ yastığı, rüptür alanına komşu olduğundan kanamayı içerir → ödem.",
        mechanismEn: "Sudden eccentric contraction force (sprinting push-off, stair jumping) → sudden loss of tendon integrity in the hypovascular watershed zone (2-6cm proximal to calcaneus). Kager's fat pad, adjacent to the rupture site, contains bleeding → edema.",
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
        etiologyEn: "Acute eccentric contraction (sprint, stair jumping). Common in males aged 30-50 ('Weekend warrior'). Fluoroquinolone antibiotics, steroid use, chronic tendinopathy are predisposing. Hypovascular watershed zone (2-6cm proximal to calcaneus).",
        differentialDiagnosis: ["Plantaris Tendon Rüptürü (Klinik benzer, daha hafif)", "Aşil Tendinopatisi (Parsiyel yırtık)", "Derin Ven Trombozu (Baldır ağrısı)", "Gastroknemius Yırtığı (Tennis Leg)"],
        differentialDiagnosisEn: ["Plantaris Tendon Rupture (Clinically similar, milder)", "Achilles Tendinopathy (Partial tear)", "Deep Vein Thrombosis (Calf pain)", "Gastrocnemius Tear (Tennis Leg)"],
        goldStandard: "USG (Dinamik Thompson testi ile real-time değerlendirme — duyarlılık %95+). MRI parsiyel/tam yırtık ayrımı ve cerrahi planlama için.",
        goldStandardEn: "USG (Dynamic Thompson test with real-time evaluation — sensitivity 95%+). MRI for partial/complete tear differentiation and surgical planning.",
        clinicalPearl: "Thompson testi: Baldır sıkılması → ayak plantar fleksiyonu olmalı. Yanıt yoksa tam rüptür. Fluorokinolon kullanan hastada bilateral rüptür riski hatırlanmalı!",
        clinicalPearlEn: "Thompson test: Calf squeeze → foot should plantar flex. No response = complete rupture. Bilateral rupture risk should be remembered in patients using fluoroquinolones!",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "ACR Appropriateness Criteria: Acute Trauma to the Foot. American College of Radiology; 2020.",
            "Radiopaedia.org - Achilles tendon rupture"
        ]
    },
    {
        id: "achilles-tendinopathy",
        name: "Aşil Tendinopatisi",
        nameEn: "Achilles Tendinopathy",
        category: "Ankle (Ayak Bileği)",
        categoryEn: "Ankle",
        mechanism: "Kronik tekrarlayan yük → hipovasküleer watershed bölgede yetersiz iyileşme → mukoid kollajen fibril dejenerasyonu (tendinozis). İnflamasyon minimaldir; esas olay dejeneratif kollajen yeniden yapılanması. Neovaskülarizasyon (Doppler) ağrı iletimi yapan sinir lifleriyle birliktedir.",
        mechanismEn: "Chronic repetitive loading → inadequate healing in the hypovascular watershed zone → mucoid collagen fibril degeneration (tendinosis). Inflammation is minimal; the main event is degenerative collagen remodeling. Neovascularization (Doppler) accompanies nerve fibers that transmit pain.",
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
        etiologyEn: "Chronic overuse (running, long-distance walking). Inappropriate footwear, sudden training increase. Fluoroquinolones, steroids. Obesity, diabetes, hyperlipidemia → accelerates tendon degeneration.",
        differentialDiagnosis: ["Aşil Tendon Parsiyel Yırtığı", "Retrocalcaneal Bursit", "Haglund Deformitesi (Pompa çıkıntısı)", "Plantaris Sendromu"],
        differentialDiagnosisEn: ["Achilles Tendon Partial Tear", "Retrocalcaneal Bursitis", "Haglund Deformity (Pump bump)", "Plantaris Syndrome"],
        goldStandard: "USG (Dinamik değerlendirme + Doppler neovaskülarizasyon). MRI kalınlık, intrasubstans değişiklik ve parsiyel yırtık değerlendirmesinde üstün.",
        goldStandardEn: "USG (Dynamic evaluation + Doppler neovascularization). MRI superior for thickness, intrasubstance changes, and partial tear assessment.",
        clinicalPearl: "İnsersiyonel vs non-insersiyonel tendinopati ayrımı tedaviyi yönlendirir. İnsersiyonel: Kalkaneusa yapışma yerinde → eksantrik egzersizler kontrendike. Neovaskülarizasyon = Ağrı korelasyonu (Öhberg).",
        clinicalPearlEn: "Insertional vs non-insertional tendinopathy distinction guides treatment. Insertional: At calcaneal attachment → eccentric exercises contraindicated. Neovascularization = Pain correlation (Öhberg).",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Radiopaedia.org - Achilles tendinopathy"
        ]
    },
    {
        id: "lateral-epicondylitis",
        name: "Lateral Epikondilit (Tenisçi Dirseği)",
        nameEn: "Lateral Epicondylitis (Tennis Elbow)",
        category: "Elbow (Dirsek)",
        categoryEn: "Elbow",
        mechanism: "Tekrarlayan ön kol ekstansör aktivitesi (backhand vuruşu) → ECRB'nin lateral epikondile yapışma yerinde angiofibroblastik hiperplazi. Temel patoloji: kollajen fibrillerinde dejenerasyon (tendinozis), akut inflamasyon değil. İntratendinöz mukoid değişiklikler karakteristiktir.",
        mechanismEn: "Repetitive forearm extensor activity (backhand stroke) → angiofibroblastic hyperplasia at the ECRB insertion on the lateral epicondyle. Core pathology: collagen fibril degeneration (tendinosis), not acute inflammation. Intratendinous mucoid changes are characteristic.",
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
        etiologyEn: "Repetitive wrist extension/supination activity (tennis backhand, computer use, screwdriving). Common between ages 35-55. 2x more frequent in the dominant arm. Tendinosis (degeneration) is the primary pathology.",
        differentialDiagnosis: ["Radyal Tünel Sendromu (Posterior interosseöz sinir sıkışması)", "Lateral Kollateral Ligaman Yırtığı", "Radyokapitaller Artrit", "Servikal Radikülopati (C6-C7)"],
        differentialDiagnosisEn: ["Radial Tunnel Syndrome (Posterior interosseous nerve entrapment)", "Lateral Collateral Ligament Tear", "Radiocapitellar Arthritis", "Cervical Radiculopathy (C6-C7)"],
        goldStandard: "USG (İlk tercih — yüksek rezolüsyon, dinamik değerlendirme, girişimsel rehberlik). MRI şüpheli olgularda ve cerrahi planlama öncesi.",
        goldStandardEn: "USG (First choice — high resolution, dynamic evaluation, interventional guidance). MRI in doubtful cases and before surgical planning.",
        clinicalPearl: "ECRB (Ekstansör Karpi Radialis Brevis) en sık tutulan tendondur — diğer ekstansörlerden daha derin yerleşimli ve epikondile en yakın yapışma yeri. Cozen testi: Dirseğe karşı el bileği ekstansiyonunda ağrı.",
        clinicalPearlEn: "ECRB (Extensor Carpi Radialis Brevis) is the most commonly affected tendon — deeper than other extensors with the closest attachment to the epicondyle. Cozen test: Pain with resisted wrist extension against the elbow.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Lateral epicondylitis"
        ]
    },
    {
        id: "de-quervain-tenosynovitis",
        name: "De Quervain Tenosinoviti",
        nameEn: "De Quervain's Tenosynovitis",
        category: "Wrist (El Bileği)",
        categoryEn: "Wrist",
        mechanism: "1. dorsal kompartmandaki APL ve EPB tendonlarına kronik tekrarlayan ulnar deviasyon + fleksiyon yükü → fibröz tendon kılıfının stenotik daralması → tendinöz kaymada mekanik engel + sinoviyal inflamasyon. Doğum sonrası dönemde hormonal değişiklikler bağ dokusunu predispoze eder.",
        mechanismEn: "Chronic repetitive ulnar deviation + flexion load on APL and EPB tendons in the 1st dorsal compartment → stenotic narrowing of the fibrous tendon sheath → mechanical obstruction of tendinous gliding + synovial inflammation. Postpartum hormonal changes predispose connective tissue.",
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
        etiologyEn: "Repetitive ulnar deviation + flexion (new mothers — baby holding, musicians, writers). Hormonal changes (postpartum, OCP). 6x more common in women.",
        differentialDiagnosis: ["Radyal Stiloid Kırığı", "1. CMC Eklem Artriti (Bazal Başparmak Artriti)", "İnterseksiyon Sendromu (2. kompartman)", "Wartenberg Sendromu (Radyal sinir sıkışması)"],
        differentialDiagnosisEn: ["Radial Styloid Fracture", "1st CMC Joint Arthritis (Basal Thumb Arthritis)", "Intersection Syndrome (2nd compartment)", "Wartenberg Syndrome (Radial nerve entrapment)"],
        goldStandard: "USG (Yüksek çözünürlüklü — tendon kılıf sıvısı, kalınlaşma, septum varlığı değerlendirilir). MRI nadiren gerekli.",
        goldStandardEn: "USG (High-resolution — tendon sheath fluid, thickening, septum presence evaluated). MRI rarely needed.",
        clinicalPearl: "Anatomik varyant: EPB için ayrı bir kompartman (septum) varlığı cerrahi dekompresyonda atlanırsa rekürrens nedenidir. USG ile ameliyat öncesi septum tespiti kritiktir.",
        clinicalPearlEn: "Anatomic variant: Presence of a separate compartment (septum) for EPB causes recurrence if missed during surgical decompression. Pre-operative septum detection with USG is critical.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Radiopaedia.org - De Quervain tenosynovitis"
        ]
    },
    {
        id: "patellar-tendinopathy",
        name: "Patellar Tendinopatisi (Atlayıcı Dizi)",
        nameEn: "Patellar Tendinopathy (Jumper's Knee)",
        category: "Knee (Diz)",
        categoryEn: "Knee",
        mechanism: "Tekrarlayan atlama yükü → patellar tendonun proksimal insersiyonunda kollajen mikrofibril yıkımı → angiofibroblastik hiperplazi (tendinozis). Neovaskülarizasyon: ağrıyı ileten sinir lifleriyle birlikte seyreder. Temel patoloji dejenerasyon, akut inflamasyon değil.",
        mechanismEn: "Repetitive jumping load → collagen microfibril breakdown at the proximal insertion of the patellar tendon → angiofibroblastic hyperplasia (tendinosis). Neovascularization: accompanies nerve fibers that transmit pain. Core pathology is degeneration, not acute inflammation.",
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
        etiologyEn: "Jumping sports (volleyball, basketball). Repetitive quadriceps eccentric contraction → patellar tendon proximal insertion damage. Common in adolescents and young athletes.",
        differentialDiagnosis: ["Osgood-Schlatter Hastalığı (Tibial tüberkül apofiziti)", "Sinding-Larsen-Johansson (Patellanın alt kutbu — çocuklarda)", "Hoffa Hastalığı (İnfrapatellar yağ yastığı impingement)", "Kuadriseps Tendinopatisi"],
        differentialDiagnosisEn: ["Osgood-Schlatter Disease (Tibial tubercle apophysitis)", "Sinding-Larsen-Johansson (Inferior pole of patella — in children)", "Hoffa's Disease (Infrapatellar fat pad impingement)", "Quadriceps Tendinopathy"],
        goldStandard: "USG (Dinamik değerlendirme + Doppler neovaskülarizasyon). MRI intrasubstans değişiklik ve parsiyel yırtık ayrımında üstün.",
        goldStandardEn: "USG (Dynamic evaluation + Doppler neovascularization). MRI superior for intrasubstance changes and partial tear differentiation.",
        clinicalPearl: "Victorian Institute of Sport Assessment (VISA-P) skoru klinik şiddeti objektifleştirir. Doppler neovaskülarizasyon varlığı ağrı ile koreledir ve sklerozan tedavi/PRP hedefini belirler.",
        clinicalPearlEn: "Victorian Institute of Sport Assessment (VISA-P) score objectifies clinical severity. Doppler neovascularization correlates with pain and determines sclerosing therapy/PRP targets.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "ACR Appropriateness Criteria: Chronic Knee Pain. American College of Radiology; 2018.",
            "Radiopaedia.org - Patellar tendinopathy"
        ]
    },
    {
        id: "avascular-necrosis-hip",
        name: "Avasküler Nekroz (AVN) - Femur Başı",
        nameEn: "Avascular Necrosis (AVN) - Femoral Head",
        category: "Hip (Kalça)",
        categoryEn: "Hip",
        mechanism: "Risk faktörleri (steroid, alkol, hemoglobinopatiler, dalış hastalığı) → femur başının terminal end-arterlerinde tıkanma → iskemik nekroz. Reaktif sınırda: iç hat = skleroz (hipointens), dış hat = granülasyon dokusu (hiperintens) → Double-Line Sign. İleri evrede kıkırdak + subkondral çöküş.",
        mechanismEn: "Risk factors (steroids, alcohol, hemoglobinopathies, decompression sickness) → occlusion of terminal end-arteries of the femoral head → ischemic necrosis. At the reactive border: inner line = sclerosis (hypointense), outer line = granulation tissue (hyperintense) → Double-Line Sign. Advanced stage: cartilage + subchondral collapse.",
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
        etiologyEn: "Steroid use (most common), alcohol, sickle cell anemia (SCA), decompression sickness, SLE, radiation, idiopathic. Bilateral involvement 50-80%.",
        differentialDiagnosis: ["Geçici Osteoporoz (Bone Marrow Edema Sendromu — reversibl)", "Subkondral Yetersizlik Kırığı", "Septik Artrit", "Femur Başı Stres Kırığı"],
        differentialDiagnosisEn: ["Transient Osteoporosis (Bone Marrow Edema Syndrome — reversible)", "Subchondral Insufficiency Fracture", "Septic Arthritis", "Femoral Head Stress Fracture"],
        goldStandard: "MRI (T1 + T2/STIR — Duyarlılık %99). Ficat-Arlet veya Steinberg sınıflaması. X-Ray erken evrede normal olabilir (Evre 0-I).",
        goldStandardEn: "MRI (T1 + T2/STIR — Sensitivity 99%). Ficat-Arlet or Steinberg classification. X-Ray may be normal in early stages (Stage 0-I).",
        clinicalPearl: "Double-Line Sign (T2'de): İç hat = Skleroz (hipointens) + dış hat = Granülasyon dokusu (hiperintens) — AVN için PATOGNOMONİK. Karşı kalça da mutlaka taranmalı (%50-80 bilateral).",
        clinicalPearlEn: "Double-Line Sign (on T2): Inner line = Sclerosis (hypointense) + outer line = Granulation tissue (hyperintense) — PATHOGNOMONIC for AVN. Contralateral hip must also be screened (50-80% bilateral).",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "Ficat RP. Idiopathic bone necrosis of the femoral head. J Bone Joint Surg Br. 1985;67(1):3-9.",
            "Radiopaedia.org - Avascular necrosis of the femoral head"
        ]
    },
    {
        id: "stress-fracture",
        name: "Stres Kırığı",
        nameEn: "Stress Fracture",
        category: "General (Genel)",
        categoryEn: "General",
        mechanism: "Kas yorgunluğu + tekrarlayan subkritik yük → kemik yeniden yapılanma kapasitesinin aşılması → mikro kırık birikimi. T2/STIR'de intramedullar ödem en erken bulgudur; ince hipointens kırık hattı geç dönemde X-Ray'de periosteal reaksiyon olarak belirir.",
        mechanismEn: "Muscle fatigue + repetitive subcritical loading → exceeding bone remodeling capacity → micro-fracture accumulation. Intramedullary edema on T2/STIR is the earliest finding; thin hypointense fracture line appears late on X-Ray as periosteal reaction.",
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
        etiologyEn: "Repetitive submaximal loading (running, marching, dancing). Female athlete triad (amenorrhea, low energy, osteoporosis). Sudden training increase. Insufficiency fracture: Osteoporotic bone, normal loading.",
        differentialDiagnosis: ["Osteoid Osteom (Gece ağrısı, aspirinle azalır)", "Osteomiyelit (Ateş, CRP artışı)", "Ewing Sarkomu (Periosteal reaksiyon + yumuşak doku kitlesi)", "Kemik İliği Ödemi Sendromu"],
        differentialDiagnosisEn: ["Osteoid Osteoma (Night pain, relieved by aspirin)", "Osteomyelitis (Fever, elevated CRP)", "Ewing Sarcoma (Periosteal reaction + soft tissue mass)", "Bone Marrow Edema Syndrome"],
        goldStandard: "MRI (Duyarlılık %99 — X-Ray'den 2-4 hafta önce bulgu verir). T1 hipointens kırık hattı + STIR hiperintens ödem tanı koydurucudur.",
        goldStandardEn: "MRI (Sensitivity 99% — detects findings 2-4 weeks before X-Ray). T1 hypointense fracture line + STIR hyperintense edema is diagnostic.",
        clinicalPearl: "Fredericson MRI evrelemesi (Grade 1-4): Grade 4 = Kırık hattı görülür → yük verme kısıtlanır. 'Dreaded Black Line' (Tibia ön korteks): Yavaş iyileşen, non-union riski yüksek stres kırığı.",
        clinicalPearlEn: "Fredericson MRI grading (Grade 1-4): Grade 4 = Fracture line visible → weight-bearing restricted. 'Dreaded Black Line' (Anterior tibial cortex): Slow-healing stress fracture with high non-union risk.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Fredericson M, Bergman AG, Hoffman KL, et al. Tibial stress reaction in runners: correlation of clinical symptoms and scintigraphy with a new MRI grading system. Am J Sports Med. 1995;23(4):472-481.",
            "ACR Appropriateness Criteria: Stress/Insufficiency Fracture. American College of Radiology; 2017.",
            "Radiopaedia.org - Stress fracture"
        ]
    },
    {
        id: "hip-labral-tear",
        name: "Kalça Labrumu Yırtığı",
        nameEn: "Hip Labral Tear",
        category: "Hip (Kalça)",
        categoryEn: "Hip",
        mechanism: "FAI: Cam (femoral başın asferik büyümesi) → anterosüperior labrumun her fleksiyonda sıkışması → tekrarlayan mikro yırtık birikimi. Pincer (asetabüler over-coverage) → labral ezilme ve degenerasyon. MRA: intraartiküler gadolinyum kontrast labral yırtık içine girer → net görüntüleme.",
        mechanismEn: "FAI: Cam (aspherical growth of femoral head) → anterosuperior labrum impingement with each flexion → repetitive micro-tear accumulation. Pincer (acetabular over-coverage) → labral crushing and degeneration. MRA: intra-articular gadolinium contrast enters the labral tear → clear visualization.",
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
        etiologyEn: "FAI (Femoroacetabular Impingement): Cam (aspherical femoral head) or Pincer (acetabular over-coverage). Sports trauma. Hip dysplasia. More common in women (65%).",
        differentialDiagnosis: ["Kalça OA (Dejeneratif — eklem aralığı daralması)", "İliopsoas Bursit/Snapping Hip", "Ligamentum Teres Yırtığı", "Stres Kırığı (Femur boynu)"],
        differentialDiagnosisEn: ["Hip OA (Degenerative — joint space narrowing)", "Iliopsoas Bursitis/Snapping Hip", "Ligamentum Teres Tear", "Stress Fracture (Femoral neck)"],
        goldStandard: "MR Artrografi (MRA — Duyarlılık %90+). İntraartiküler gadolinyum labral yırtık içine girerek görünür kılar. Konvansiyonel MRI duyarlılığı düşüktür (%60-70).",
        goldStandardEn: "MR Arthrography (MRA — Sensitivity 90%+). Intra-articular gadolinium enters the labral tear making it visible. Conventional MRI sensitivity is low (60-70%).",
        clinicalPearl: "Alpha açısı >55° = Cam deformitesi. Lateral CE açısı >40° = Pincer. Anterosüperior labrum en sık yırtık bölgesi (%90). FABER ve FADDIR testleri klinik değerlendirmede kullanılır.",
        clinicalPearlEn: "Alpha angle >55° = Cam deformity. Lateral CE angle >40° = Pincer. Anterosuperior labrum is the most common tear location (90%). FABER and FADDIR tests are used in clinical evaluation.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "ACR Appropriateness Criteria: Chronic Hip Pain. American College of Radiology; 2018.",
            "Radiopaedia.org - Hip labral tear"
        ]
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
        mechanismEn: "Malignant transformation of mesenchymal cells → osteoid/bone-producing tumor. Most common is conventional osteosarcoma (high grade). Metaphyseal location: Area of active cell proliferation near growth plates. Codman triangle: Periosteum lifted by tumor, forms new periosteal bone at the edge. Lung metastasis via hematogenous route (most common metastatic site).",
        etiology: "Sporadik (en sık). Risk: Retinoblastom (Rb mutasyonu), Li-Fraumeni (p53), Paget hastalığı, Radyasyon.",
        etiologyEn: "Sporadic (most common). Risk: Retinoblastoma (Rb mutation), Li-Fraumeni (p53), Paget's disease, Radiation.",
        differentialDiagnosis: ["Ewing Sarkomu (Soğan zarı periosteal reaksiyon, diafizer, 5-15 yaş)", "Kondrosarkom (Kıkırdak matriksi, daha yaşlı hastalar)", "Osteomiyelit (Periosteal reaksiyon benzerliği)", "Anevrizmal Kemik Kisti (Sıvı-sıvı seviyeleri)"],
        differentialDiagnosisEn: ["Ewing Sarcoma (Onion-skin periosteal reaction, diaphyseal, age 5-15)", "Chondrosarcoma (Cartilage matrix, older patients)", "Osteomyelitis (Similar periosteal reaction)", "Aneurysmal Bone Cyst (Fluid-fluid levels)"],
        goldStandard: "Röntgen (İlk değerlendirme — Codman üçgeni + sunburst). MRI lokal evreleme (skip metastaz, nörovasküler tutulum). BT akciğer metastaz taraması.",
        goldStandardEn: "Radiography (Initial evaluation — Codman triangle + sunburst). MRI for local staging (skip metastasis, neurovascular involvement). Chest CT for lung metastasis screening.",
        clinicalPearl: "Osteosarkom üçgeni: Distal femur + Proksimal tibia + Proksimal humerus → tüm osteosarkomların %75'i. Neoadjuvan kemoterapi sonrası MRI'da nekroz oranı (%90+) = İyi prognoz (Huvos Grade III-IV).",
        clinicalPearlEn: "Osteosarcoma triangle: Distal femur + Proximal tibia + Proximal humerus → 75% of all osteosarcomas. Post-neoadjuvant chemotherapy MRI necrosis rate (90%+) = Good prognosis (Huvos Grade III-IV).",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Primary Bone Tumors. American College of Radiology; 2020.",
            "Radiopaedia.org - Osteosarcoma"
        ]
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
        mechanismEn: "Primary tumor → hematogenous spread → red bone marrow (spine, sternum, pelvis) involvement. Batson's plexus: Paravertebral venous network facilitating direct venous spread of prostate and breast cancer to the spine. Lytic metastasis: Osteoclast activation (tumor cytokines → RANKL increase). Sclerotic: Osteoblast stimulation (prostate PSA, endothelin-1). Pathologic fracture: Cortical supportive capacity is lost.",
        etiology: "Meme, Akciğer, Prostat, Böbrek, Tiroid (%80 vakası).",
        etiologyEn: "Breast, Lung, Prostate, Kidney, Thyroid (80% of cases).",
        differentialDiagnosis: ["Multipl Miyelom (Yağmur damlası litik lezyonlar, M-spike)", "Lenfoma (Kemik tutulumu — ivory vertebra)", "Primer Kemik Tümörleri (Osteosarkom, Ewing)", "Fibröz Displazi (Benign — ground glass görünüm)"],
        differentialDiagnosisEn: ["Multiple Myeloma (Raindrop lytic lesions, M-spike)", "Lymphoma (Bone involvement — ivory vertebra)", "Primary Bone Tumors (Osteosarcoma, Ewing)", "Fibrous Dysplasia (Benign — ground glass appearance)"],
        goldStandard: "Tüm vücut MRI (DWIBS) veya PET-CT (Duyarlılık %95+). Omurga MRI T1-STIR: Normal yağlı kemik iliğinin replasmanı erken saptanır.",
        goldStandardEn: "Whole body MRI (DWIBS) or PET-CT (Sensitivity 95%+). Spine MRI T1-STIR: Replacement of normal fatty bone marrow detected early.",
        clinicalPearl: "Litik: Akciğer, Böbrek, Tiroid ('Lobo Birası Tipi' — çok kanlı). Sklerotik: Prostat, Meme (nadir). Mirelsin skoru ≥9 = Profilaktik fiksasyon (Patolojik kırık riski yüksek).",
        clinicalPearlEn: "Lytic: Lung, Kidney, Thyroid ('Lager Beer Type' — highly vascular). Sclerotic: Prostate, Breast (rare). Mirels score >=9 = Prophylactic fixation (high pathologic fracture risk).",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Bone Metastases. American College of Radiology; 2020.",
            "Radiopaedia.org - Bone metastases"
        ]
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
        mechanismEn: "Bacterial bone infection: Hematogenous (children, metaphysis) or direct inoculation (diabetes, trauma, surgery). Metaphyseal development: Slow-flowing sinusoidal capillaries → bacterial seeding. Inflammatory response → vascular thrombosis → cortex perforation → subperiosteal abscess → sinus tract. Chronic: Avascular bone (sequestrum) surrounded by new bone (involucrum).",
        etiology: "Stafilokokus aureus (%90). MRSA giderek artan. Diyabetik ayak: Polimikrobiyal. Orak hücreli anemi: Salmonella.",
        etiologyEn: "Staphylococcus aureus (90%). MRSA increasingly common. Diabetic foot: Polymicrobial. Sickle cell anemia: Salmonella.",
        differentialDiagnosis: ["Ewing Sarkomu (Soğan zarı periosteal reaksiyon — osteomiyeliti taklit eder!)", "Langerhans Hücre Histiyositozu", "Stres Kırığı (Kemik iliği ödemi)", "Charcot Artropatisi (Diyabetik ayak)"],
        differentialDiagnosisEn: ["Ewing Sarcoma (Onion-skin periosteal reaction — mimics osteomyelitis!)", "Langerhans Cell Histiocytosis", "Stress Fracture (Bone marrow edema)", "Charcot Arthropathy (Diabetic foot)"],
        goldStandard: "MRI (Duyarlılık %90-100). T1 hipointens kemik iliği + STIR hiperintens ödem + kontrastlı rim apse = Tanısal. Kemik biyopsi kültürü kesin tanı.",
        goldStandardEn: "MRI (Sensitivity 90-100%). T1 hypointense bone marrow + STIR hyperintense edema + contrast-enhanced rim abscess = Diagnostic. Bone biopsy culture for definitive diagnosis.",
        clinicalPearl: "Penumbra sign (MRI): T1 kontrastlı — apse çeperinin iç kenarında hiperintens halka. Brodie apsesi: Subakut osteomiyelitin lokalize formu (metafizer sklerotik sınırlı lezyon). Diyabetik ayakta: T1 sinyal düşüklüğü kortkese ulaşmışsa osteomiyelit tanısaldır.",
        clinicalPearlEn: "Penumbra sign (MRI): T1 contrast-enhanced — hyperintense ring at the inner margin of abscess wall. Brodie abscess: Localized form of subacute osteomyelitis (metaphyseal sclerotic-bordered lesion). In diabetic foot: T1 signal loss reaching the cortex is diagnostic for osteomyelitis.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "ACR Appropriateness Criteria: Suspected Osteomyelitis. American College of Radiology; 2020.",
            "Radiopaedia.org - Acute osteomyelitis"
        ]
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
        mechanismEn: "Repetitive microtrauma → degenerative changes at the calcaneal insertion of the plantar fascia (Tendinosis: Collagen disorganization, neovascularization, macrophage infiltration — no true inflammation!). Morning pain: Night rest → fascia shortens → first step stretches fascia → pain. Obesity, flat foot (pes planus) or high arch (pes cavus): Increased risk.",
        etiology: "Uzun süre ayakta durma, koşu, obezite, pes planus/kavus, uygunsuz ayakkabı, kısa Aşil tendonu.",
        etiologyEn: "Prolonged standing, running, obesity, pes planus/cavus, inappropriate footwear, short Achilles tendon.",
        differentialDiagnosis: ["Kalkaneal Stres Kırığı (MRI'da bant şekilli ödem)", "Tarsal Tünel Sendromu (Tibial sinir sıkışması)", "Fat Pad Atrofisi (Topuk yağ yastığı incelmesi)", "Aşil Tendinopati (Posterior topuk ağrısı — farklı lokalizasyon)"],
        differentialDiagnosisEn: ["Calcaneal Stress Fracture (Band-shaped edema on MRI)", "Tarsal Tunnel Syndrome (Tibial nerve entrapment)", "Fat Pad Atrophy (Heel fat pad thinning)", "Achilles Tendinopathy (Posterior heel pain — different location)"],
        goldStandard: "USG (İlk tercih — Fasya kalınlığı >4mm + hipoekojenite = tanısal). MRI dirençli/atipik olgularda ve ayırıcı tanıda.",
        goldStandardEn: "USG (First choice — Fascia thickness >4mm + hypoechogenicity = diagnostic). MRI for resistant/atypical cases and differential diagnosis.",
        clinicalPearl: "Plantar fasya kalınlığı: Normal <4mm, Patolojik >4mm. Kalkaneal spur (çıkıntı) = İnsidental bulgu, PF tanısı koymaz! Sabah ilk adımda şiddetli ağrı → gün içinde azalma = Tipik klinik patern.",
        clinicalPearlEn: "Plantar fascia thickness: Normal <4mm, Pathologic >4mm. Calcaneal spur = Incidental finding, does NOT diagnose PF! Severe pain on first morning step → decreases during the day = Typical clinical pattern.",
        references: [
            "Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine. 3rd ed. Lippincott Williams & Wilkins; 2007.",
            "Helms CA. Musculoskeletal MRI. 2nd ed. Saunders; 2008.",
            "ACR Appropriateness Criteria: Chronic Foot Pain. American College of Radiology; 2018.",
            "Radiopaedia.org - Plantar fasciitis"
        ]
    },
    {
        id: "pcl-tear",
        name: "Arka Çapraz Bağ (PCL) Yırtığı",
        nameEn: "Posterior Cruciate Ligament (PCL) Tear",
        category: "Diz",
        categoryEn: "Knee",
        mechanism: "Dashboard yaralanması (diz fleksiyonda tibianın posteriora itilmesi) → PCL rüptürü. İzole PCL yırtığı nadirdir; genellikle çoklu bağ yaralanması. PCL normalden 2 kat kalınsa parsiyel yırtık düşün.",
        mechanismEn: "Dashboard injury (posterior displacement of tibia with knee in flexion) → PCL rupture. Isolated PCL tear is rare; usually multi-ligament injury. If PCL is 2x thicker than normal, consider partial tear.",
        keyPoints: ["Dashboard injury mekanizması en sık.", "Sagittal MRI'da PCL'de artmış sinyal + kalınlaşma/diskontinüite.", "İzole PCL yırtığında konservatif tedavi genellikle yeterli.", "Multiligamentöz yaralanma varsa cerrahi gerekir."],
        keyPointsEn: ["Dashboard injury mechanism most common.", "Sagittal MRI: Increased signal + thickening/discontinuity in PCL.", "Conservative treatment usually sufficient for isolated PCL tear.", "Surgery needed if multiligamentous injury."],
        findings: {
            mri: { t2: "PCL'de artmış T2 sinyal (parsiyel yırtık) veya tam diskontinüite (tam yırtık). Normal PCL: Homojen hipointens bant. Kalınlaşma ve ödem. Kemik kontüzyonu: Tibial plato anterior + femoral kondil anterior.", stir: "Periligamentöz ödem. Efüzyon." }
        },
        findingsEn: {
            mri: { t2: "Increased T2 signal in PCL (partial tear) or complete discontinuity (complete tear). Normal PCL: Homogeneous hypointense band. Thickening and edema. Bone contusion: Anterior tibial plateau + anterior femoral condyle.", stir: "Periligamentous edema. Effusion." }
        },
        etiology: "Travma: Dashboard yaralanması, spor yaralanması, düşme. Diz fleksiyonda posterior yönlü kuvvet.",
        etiologyEn: "Trauma: Dashboard injury, sports injury, fall. Posterior-directed force with knee in flexion.",
        differentialDiagnosis: ["ACL Yırtığı (Anterior tibial subluksasyon, pivot shift, posterolateral kontüzyon)", "Menisküs Yırtığı (Eklemiçi patoloji, eşlik edebilir)", "Posterolateral Köşe Yaralanması (Popliteus, LCL, biseps femoris)", "Patellar Dislokasyon (Medial retinakulum yırtığı, lateral femoral kondil kontüzyonu)"],
        differentialDiagnosisEn: ["ACL Tear (Anterior tibial subluxation, pivot shift, posterolateral contusion)", "Meniscus Tear (Intra-articular pathology, may accompany)", "Posterolateral Corner Injury (Popliteus, LCL, biceps femoris)", "Patellar Dislocation (Medial retinaculum tear, lateral femoral condyle contusion)"],
        goldStandard: "MRI: Sagittal PDW/T2 — PCL kontinüitesi ve sinyal değerlendirmesi.",
        goldStandardEn: "MRI: Sagittal PDW/T2 — PCL continuity and signal assessment.",
        clinicalPearl: "Dashboard yaralanması + posterior tibial translasyon (posterior drawer testi) + MRI'da PCL diskontinüitesi = PCL yırtığı.",
        clinicalPearlEn: "Dashboard injury + posterior tibial translation (posterior drawer test) + PCL discontinuity on MRI = PCL tear.",
        references: ["Defined Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine.", "Defined approach in Sonin AH et al. AJR. 1995;164(1):135-140.", "Radiopaedia.org - PCL tear"]
    },
    {
        id: "medial-meniscus-tear",
        name: "Medial Menisküs Yırtığı",
        nameEn: "Medial Meniscus Tear",
        category: "Diz",
        categoryEn: "Knee",
        mechanism: "Ağırlık taşıma altında rotasyonel kuvvet → menisküs fibrokıkırdağında yırtılma. Posterior horn en sık tutulan bölge (%75). Grade I: İntrasübstans dejenerasyon. Grade II: Lineer sinyal yüzeye ulaşmaz. Grade III: Artiküler yüzeye ulaşan yırtık.",
        mechanismEn: "Rotational force under weight-bearing → tearing of meniscal fibrocartilage. Posterior horn is the most commonly affected region (75%). Grade I: Intrasubstance degeneration. Grade II: Linear signal not reaching the surface. Grade III: Tear reaching the articular surface.",
        keyPoints: ["Posterior horn en sık tutulan bölge.", "Grade III = Artiküler yüzeye ulaşan yırtık (cerrahi önem).", "Horizontal, vertikal, radyal, kompleks yırtık tipleri.", "ACL yırtığı ile sık birliktelik (O'Donoghue triadı)."],
        keyPointsEn: ["Posterior horn most commonly affected.", "Grade III = Tear reaching articular surface (surgical significance).", "Horizontal, vertical, radial, complex tear types.", "Frequent association with ACL tear (O'Donoghue triad)."],
        findings: {
            mri: { t2: "Menisküs içinde artiküler yüzeye uzanan artmış sinyal (Grade III). Horizontal yırtık: Üst ve alt artiküler yüzeyi bölen. Vertikal yırtık: Longitudinal uzanım. Radyal yırtık: Serbest kenara dik. Kova sapı (bucket handle): Deplase fragman interkondiler notch'ta (double PCL sign).", stir: "Perimeniskal ödem. Parameniskal kist (horizontal yırtık ile ilişkili)." }
        },
        findingsEn: {
            mri: { t2: "Increased signal extending to articular surface within meniscus (Grade III). Horizontal tear: Divides upper and lower articular surfaces. Vertical tear: Longitudinal extension. Radial tear: Perpendicular to free edge. Bucket handle: Displaced fragment in intercondylar notch (double PCL sign).", stir: "Perimeniscal edema. Parameniscal cyst (associated with horizontal tear)." }
        },
        etiology: "Akut travma (genç: spor yaralanması, rotasyonel kuvvet), dejeneratif (yaşlı: kronik aşınma, horizontal tip sık).",
        etiologyEn: "Acute trauma (young: sports injury, rotational force), degenerative (elderly: chronic wear, horizontal type common).",
        differentialDiagnosis: ["Lateral Menisküs Yırtığı (Lateral kompartman, diskoid menisküs riski)", "Meniskal Kist (Menisküs yırtığından kaynaklanan ekstra-artiküler kist)", "ACL Yırtığı (Eşlik eden patoloji, anterior tibial translasyon)", "Plika Sendromu (Medial plika, snapping, kondral hasarı taklit)"],
        differentialDiagnosisEn: ["Lateral Meniscus Tear (Lateral compartment, discoid meniscus risk)", "Meniscal Cyst (Extra-articular cyst originating from meniscus tear)", "ACL Tear (Accompanying pathology, anterior tibial translation)", "Plica Syndrome (Medial plica, snapping, mimics chondral damage)"],
        goldStandard: "MRI: Sagittal PDW/T2 — menisküs morfolojisi ve sinyal değerlendirmesi. Artroskopi: Hem tanısal hem terapötik.",
        goldStandardEn: "MRI: Sagittal PDW/T2 — meniscus morphology and signal assessment. Arthroscopy: Both diagnostic and therapeutic.",
        clinicalPearl: "Sagittal MRI'da menisküs içinde artiküler yüzeye ulaşan artmış sinyal = Grade III yırtık (cerrahi önem). Double PCL sign = Kova sapı yırtığı.",
        clinicalPearlEn: "Increased signal reaching the articular surface within meniscus on sagittal MRI = Grade III tear (surgical significance). Double PCL sign = Bucket-handle tear.",
        references: ["Defined Stoller DW. MRI in Orthopaedics.", "Defined approach in De Smet AA. Radiology. 1994;193(1):223-225.", "Radiopaedia.org - Meniscal tear"]
    },
    {
        id: "slap-lesion",
        name: "SLAP Lezyon (Superior Labrum Anterior-Posterior)",
        nameEn: "SLAP Lesion",
        category: "Omuz",
        categoryEn: "Shoulder",
        mechanism: "Superior labrumun biseps ankraj noktasından ayrılması. Overhead sporlar (beyzbol, tenis), düşme (uzanmış kol), traksiyon yaralanması. Snyder sınıflaması: Tip I (dejenerasyon), Tip II (en sık, biseps ankraj ayrılması), Tip III (kova sapı), Tip IV (biseps içine uzanım).",
        mechanismEn: "Separation of the superior labrum from the biceps anchor point. Overhead sports (baseball, tennis), fall (outstretched arm), traction injury. Snyder classification: Type I (degeneration), Type II (most common, biceps anchor separation), Type III (bucket-handle), Type IV (extends into biceps).",
        keyPoints: ["Tip II en sık (%55): Biseps ankrajının glenoid'den ayrılması.", "MR artrografi: En hassas yöntem (kontrast sublabral boşluğa geçer).", "Peel-back mekanizması: Abdüksiyon + eksternal rotasyonda labrum geriye soyulur.", "Normal varyant sublabral reses ile karışabilir (>2mm = patolojik)."],
        keyPointsEn: ["Type II most common (55%): Biceps anchor detachment from glenoid.", "MR arthrography: Most sensitive method (contrast enters sublabral space).", "Peel-back mechanism: Labrum peels back in abduction + external rotation.", "May mimic normal sublabral recess (>2mm = pathological)."],
        findings: {
            mri: { t2: "Superior labrumda artmış sinyal. Sublabral sıvı/kontrast (artrografide). Biseps labral kompleks irregülaritesi. Paralabral kist (aksiller sinir bası riski).", t1_c: "MR Artrografi: Kontrast madde superior labrum altına geçer (Tip II). Labral ayrılma ve yırtık kontur." }
        },
        findingsEn: {
            mri: { t2: "Increased signal in superior labrum. Sublabral fluid/contrast (in arthrography). Biceps-labral complex irregularity. Paralabral cyst (axillary nerve compression risk).", t1_c: "MR Arthrography: Contrast enters beneath superior labrum (Type II). Labral detachment and tear contour." }
        },
        etiology: "Overhead sporlar (beyzbol pitcher, tenis), uzanmış kola düşme, traksiyon (taşıma), dejeneratif (>40 yaş).",
        etiologyEn: "Overhead sports (baseball pitcher, tennis), fall on outstretched arm, traction (carrying), degenerative (>40 years).",
        differentialDiagnosis: ["Bankart Lezyonu (İnferior labrum, anterior instabilite)", "Sublabral Reses (Normal varyant, <2mm, 11-1 saat arası)", "Buford Kompleksi (Kordsuz superior labrum + kalın MGHL, normal varyant)", "Biseps Tendiniti (Biseps olukta sıvı, tendon kalınlaşması)"],
        differentialDiagnosisEn: ["Bankart Lesion (Inferior labrum, anterior instability)", "Sublabral Recess (Normal variant, <2mm, 11-1 o'clock)", "Buford Complex (Cordless superior labrum + thick MGHL, normal variant)", "Biceps Tendinitis (Fluid in bicipital groove, tendon thickening)"],
        goldStandard: "MR Artrografi: SLAP lezyon tespitinde en hassas (%82-100 sensitivite). Konvansiyonel MRI sensitivitesi daha düşük. Artroskopi: Kesin tanı ve tedavi.",
        goldStandardEn: "MR Arthrography: Most sensitive for SLAP lesion detection (82-100% sensitivity). Conventional MRI sensitivity is lower. Arthroscopy: Definitive diagnosis and treatment.",
        clinicalPearl: "MR artrografide kontrast maddenin superior labrum altına sızması (>2mm sublabral boşluk) = SLAP lezyon düşün.",
        clinicalPearlEn: "Contrast material leaking beneath the superior labrum on MR arthrography (>2mm sublabral space) = Suspect SLAP lesion.",
        references: ["Defined Snyder SJ et al. SLAP lesions of the shoulder. Arthroscopy. 1990;6(4):274-279.", "Defined approach in Defined ACR Appropriateness Criteria: Shoulder Pain.", "Radiopaedia.org - SLAP lesion"]
    },
    {
        id: "ewing-sarcoma",
        name: "Ewing Sarkomu",
        nameEn: "Ewing Sarcoma",
        category: "Kemik Tümörü",
        categoryEn: "Bone Tumor",
        mechanism: "EWSR1-FLI1 translokasyonu (t(11;22)) → nöroektodermal kökenli malign küçük yuvarlak hücreli tümör. Diafiz yerleşimli (osteosarkomdan farklı). Periosteal reaksiyon belirgin. 5-15 yaş pik.",
        mechanismEn: "EWSR1-FLI1 translocation (t(11;22)) → malignant small round cell tumor of neuroectodermal origin. Diaphyseal location (different from osteosarcoma). Prominent periosteal reaction. Peak age 5-15 years.",
        keyPoints: ["Diafiz/metadiafiz yerleşimli (osteosarkom: metafiz).", "Güve yeniği (moth-eaten) veya permeatif destrüksiyon.", "Soğan kabuğu (onion-skin) lameller periosteal reaksiyon.", "Büyük yumuşak doku komponenti kemik lezyonuna göre orantısız."],
        keyPointsEn: ["Diaphyseal/metadiaphyseal location (osteosarcoma: metaphysis).", "Moth-eaten or permeative destruction.", "Onion-skin (lamellated) periosteal reaction.", "Large soft tissue component disproportionate to bone lesion."],
        findings: {
            xray: { description: "Diafiz yerleşimli agresif kemik lezyonu. Güve yeniği/permeatif destrüksiyon paterni. Lameller (soğan kabuğu) periosteal reaksiyon. Sunburst paterni de olabilir. Büyük yumuşak doku kitlesi." },
            mri: { t1: "Kemik lezyonu: T1 hipointens (normal yağlı kemik iliği sinyali kayıp). Yumuşak doku kitlesi: T1 ara sinyal.", t2: "Heterojen hiperintens (nekroz, kanama). Yumuşak doku komponenti belirgin.", t1_c: "Heterojen kontrastlanma. Nekrotik alanlar kontrastlanmaz. Skip metastaz değerlendirilmeli.", stir: "Kemik iliği ödemi (tümör yayılımı). Yumuşak doku ödemi." },
            ct: { non_contrast: "Permeatif kemik destrüksiyonu. Periosteal reaksiyon. Yumuşak doku kitlesi (kemik penceresinde daha iyi)." }
        },
        findingsEn: {
            xray: { description: "Diaphyseal aggressive bone lesion. Moth-eaten/permeative destruction pattern. Lamellated (onion-skin) periosteal reaction. Sunburst pattern also possible. Large soft tissue mass." },
            mri: { t1: "Bone lesion: T1 hypointense (loss of normal fatty marrow signal). Soft tissue mass: T1 intermediate signal.", t2: "Heterogeneous hyperintense (necrosis, hemorrhage). Soft tissue component prominent.", t1_c: "Heterogeneous enhancement. Necrotic areas non-enhancing. Skip metastasis should be evaluated.", stir: "Bone marrow edema (tumor extension). Soft tissue edema." },
            ct: { non_contrast: "Permeative bone destruction. Periosteal reaction. Soft tissue mass (better on bone window)." }
        },
        etiology: "EWSR1-FLI1 gen füzyonu (t(11;22)(q24;q12)), %85. Çocuk ve adölesan (5-15 yaş). Erkeklerde daha sık. Pelvis, femur, tibia en sık lokalizasyonlar.",
        etiologyEn: "EWSR1-FLI1 gene fusion (t(11;22)(q24;q12)), 85%. Children and adolescents (5-15 years). More common in males. Pelvis, femur, tibia are the most common locations.",
        differentialDiagnosis: ["Osteosarkom (Metafiz, osteoid üretimi, sunburst, Codman üçgeni)", "Osteomiyelit (Klinik enfeksiyon, ateş, lökositoz, sekestrum)", "Lenfoma (Permeatif, yaşlı hasta, ivory vertebra)", "Eozinofilik Granülom (Çocuk, litik, vertebra plana)"],
        differentialDiagnosisEn: ["Osteosarcoma (Metaphysis, osteoid production, sunburst, Codman triangle)", "Osteomyelitis (Clinical infection, fever, leukocytosis, sequestrum)", "Lymphoma (Permeative, older patient, ivory vertebra)", "Eosinophilic Granuloma (Child, lytic, vertebra plana)"],
        goldStandard: "MRI: Lokal evreleme (yumuşak doku yayılımı, skip metastaz). Direkt grafi: Periosteal reaksiyon. BT Toraks: Akciğer metastaz taraması. Biyopsi: Kesin tanı.",
        goldStandardEn: "MRI: Local staging (soft tissue extension, skip metastasis). Plain radiography: Periosteal reaction. Chest CT: Lung metastasis screening. Biopsy: Definitive diagnosis.",
        clinicalPearl: "Çocuk/adölesanda diafiz yerleşimli agresif kemik lezyonu + soğan kabuğu periosteal reaksiyon + büyük yumuşak doku kitlesi = Ewing sarkomu düşün.",
        clinicalPearlEn: "Aggressive diaphyseal bone lesion in a child/adolescent + onion-skin periosteal reaction + large soft tissue mass = Suspect Ewing sarcoma.",
        references: ["Defined WHO Classification of Tumours of Soft Tissue and Bone, 5th ed.", "Defined ACR Appropriateness Criteria: Primary Bone Tumors.", "Radiopaedia.org - Ewing sarcoma"]
    },
    {
        id: "giant-cell-tumor",
        name: "Dev Hücreli Tümör (GCT)",
        nameEn: "Giant Cell Tumor (GCT)",
        category: "Kemik Tümörü",
        categoryEn: "Bone Tumor",
        mechanism: "Osteoklast benzeri dev hücreler + mononükleer stromal hücreler → epifiz-metafiz bölgesinde ekzantrik litik lezyon. 20-40 yaş arası sık. Subartikülere uzanır (eklem yüzeyine yakın). Lokal agresif, nadiren malign.",
        mechanismEn: "Osteoclast-like giant cells + mononuclear stromal cells → eccentric lytic lesion in the epiphysis-metaphysis region. Common between ages 20-40. Extends to subarticular area (close to joint surface). Locally aggressive, rarely malignant.",
        keyPoints: ["Epifiz yerleşimli (fizis kapandıktan sonra), subartikülere uzanır.", "Ekzantrik, ekspansil litik lezyon — sabun köpüğü (soap bubble) görünümü.", "En sık diz çevresi: Distal femur + proksimal tibia.", "20-40 yaş, kadınlarda hafif fazla."],
        keyPointsEn: ["Epiphyseal location (after physeal closure), extends to subarticular region.", "Eccentric, expansile lytic lesion — soap bubble appearance.", "Most common around knee: Distal femur + proximal tibia.", "20-40 years, slightly more common in women."],
        findings: {
            xray: { description: "Ekzantrik, litik, iyi-orta tanımlı lezyon. Epifiz-metafiz yerleşimli, subartikülere uzanır. Sklerotik rim yok veya ince. Kalsifikasyon yok. Periosteal reaksiyon minimal. Patolojik kırık eşlik edebilir." },
            mri: { t1: "Hipointens-izointens solid kitle. Hemosiderin birikimleri hipointens.", t2: "Heterojen (solid: ara sinyal, kistik: hiperintens, hemosiderin: hipointens). Sıvı-sıvı seviyeleri (sekonder ABC komponenti).", t1_c: "Yoğun kontrastlanma (solid komponent). Nekrotik alanlar kontrastlanmaz." }
        },
        findingsEn: {
            xray: { description: "Eccentric, lytic, well-to-moderately defined lesion. Epiphyseal-metaphyseal, extending to subarticular region. No sclerotic rim or thin. No calcification. Minimal periosteal reaction. Pathologic fracture may accompany." },
            mri: { t1: "Hypointense-isointense solid mass. Hemosiderin deposits hypointense.", t2: "Heterogeneous (solid: intermediate, cystic: hyperintense, hemosiderin: hypointense). Fluid-fluid levels (secondary ABC component).", t1_c: "Avid enhancement (solid component). Necrotic areas non-enhancing." }
        },
        etiology: "RANK/RANKL sinyal yolağı hiperaktivasyonu → osteoklast benzeri dev hücre proliferasyonu. Sporadik. Paget hastalığı zemininde GCT nadir.",
        etiologyEn: "RANK/RANKL signaling pathway hyperactivation → osteoclast-like giant cell proliferation. Sporadic. GCT on Paget's disease background is rare.",
        differentialDiagnosis: ["Anevrizmal Kemik Kisti-ABC (Sıvı-sıvı seviyeleri, ekspansil, metafiz)", "Kondroblastom (Epifiz, genç, kalsifikasyon +, <20 yaş)", "Subkondral Kist (Dejeneratif, küçük, osteoartrit bulguları)", "Brown Tümör (Hiperparatiroidizm, multipl litik, lab değerleri)"],
        differentialDiagnosisEn: ["Aneurysmal Bone Cyst-ABC (Fluid-fluid levels, expansile, metaphysis)", "Chondroblastoma (Epiphysis, young, calcification +, <20 years)", "Subchondral Cyst (Degenerative, small, osteoarthritis findings)", "Brown Tumor (Hyperparathyroidism, multiple lytic, lab values)"],
        goldStandard: "Direkt grafi + MRI: Epifiz yerleşimli ekzantrik litik lezyon. BT: Korteks detayı. Biyopsi: Kesin tanı.",
        goldStandardEn: "Plain radiography + MRI: Epiphyseal eccentric lytic lesion. CT: Cortex detail. Biopsy: Definitive diagnosis.",
        clinicalPearl: "20-40 yaş hastada diz çevresinde epifiz yerleşimli ekzantrik litik lezyon (subartikülere uzanan) = GCT düşün.",
        clinicalPearlEn: "Eccentric lytic epiphyseal lesion extending to subarticular region in a 20-40 year old patient around the knee = Suspect GCT.",
        references: ["Defined WHO Classification of Tumours of Soft Tissue and Bone, 5th ed.", "Defined approach in Murphey MD et al. Radiographics. 2001;21(5):1283-1309.", "Radiopaedia.org - Giant cell tumour"]
    },
    {
        id: "enchondroma",
        name: "Enkondrom",
        nameEn: "Enchondroma",
        category: "Kemik Tümörü",
        categoryEn: "Bone Tumor",
        mechanism: "Medüller kavitede benign hyalin kıkırdak tümörü. En sık el ve ayak küçük kemiklerinde. Uzun kemiklerde metafiz/diafiz yerleşimli. Kıkırdak matriksine ait 'rings and arcs' kalsifikasyon patognomonik.",
        mechanismEn: "Benign hyaline cartilage tumor in the medullary cavity. Most common in small bones of hands and feet. Metaphysis/diaphysis location in long bones. 'Rings and arcs' calcification pattern from cartilage matrix is pathognomonic.",
        keyPoints: ["Medüller, santral yerleşimli benign kıkırdak tümörü.", "Halka ve ark (rings and arcs) kalsifikasyon patognomoniktir.", "El-ayak tubüler kemiklerinde en sık.", "Uzun kemiklerde kondrosarkom ile ayrımda boyut, ağrı ve kortikal erozyon önemli."],
        keyPointsEn: ["Medullary, centrally located benign cartilage tumor.", "Rings and arcs calcification is pathognomonic.", "Most common in hand-foot tubular bones.", "Size, pain, and cortical erosion important for differentiation from chondrosarcoma in long bones."],
        findings: {
            xray: { description: "Medüller kavitede iyi sınırlı litik lezyon. Kondroid matriks kalsifikasyonu (rings and arcs = noktacıklı veya halka şeklinde). El kemiklerinde: ekspansil litik, ince korteks. Skalloping olabilir (endosteal)." },
            mri: { t1: "Hipointens (kıkırdak matriks). Kalsifikasyonlar: Punktat düşük sinyal.", t2: "Lobüle, çok hiperintens (hyalin kıkırdağın yüksek su içeriği). Kalsifikasyonlar: Düşük sinyal odaklar.", t1_c: "Periferal ve septal kontrastlanma (rings and arcs paterni). Solid kontrastlanma: kondrosarkom şüphesi." }
        },
        findingsEn: {
            xray: { description: "Well-defined lytic lesion in medullary cavity. Chondroid matrix calcification (rings and arcs = punctate or ring-shaped). In hand bones: expansile lytic, thin cortex. Scalloping possible (endosteal)." },
            mri: { t1: "Hypointense (cartilage matrix). Calcifications: Punctate low signal.", t2: "Lobulated, very hyperintense (high water content of hyaline cartilage). Calcifications: Low signal foci.", t1_c: "Peripheral and septal enhancement (rings and arcs pattern). Solid enhancement: chondrosarcoma suspicion." }
        },
        etiology: "Sporadik. Ollier hastalığı (multipl enkondromatoz), Maffucci sendromu (enkondromatoz + yumuşak doku hemanjiomları) → malign transformasyon riski yüksek.",
        etiologyEn: "Sporadic. Ollier disease (multiple enchondromatosis), Maffucci syndrome (enchondromatosis + soft tissue hemangiomas) → high risk of malignant transformation.",
        differentialDiagnosis: ["Kondrosarkom (>5cm, ağrılı, kortikal destrüksiyon, periosteal reaksiyon, endosteal scalloping >2/3)", "Kemik İnfarktı (Serpentine kalsifikasyon, epifiz/metafiz, ağrısız)", "Fibröz Displazi (Ground-glass matriks, kalsifikasyon farklı)", "Non-Ossifiye Fibrom (Ekzantrik, sklerotik rim, metafiz)"],
        differentialDiagnosisEn: ["Chondrosarcoma (>5cm, painful, cortical destruction, periosteal reaction, endosteal scalloping >2/3)", "Bone Infarct (Serpentine calcification, epiphysis/metaphysis, painless)", "Fibrous Dysplasia (Ground-glass matrix, different calcification)", "Non-Ossifying Fibroma (Eccentric, sclerotic rim, metaphysis)"],
        goldStandard: "Direkt grafi: Rings and arcs kalsifikasyon + medüller litik lezyon. MRI: T2 hiperintens lobüle kıkırdak tümörü. Takip: Büyüme/ağrı → kondrosarkom dışla.",
        goldStandardEn: "Plain radiography: Rings and arcs calcification + medullary lytic lesion. MRI: T2 hyperintense lobulated cartilage tumor. Follow-up: Growth/pain → exclude chondrosarcoma.",
        clinicalPearl: "El kemiklerinde medüller litik lezyon + kondroid kalsifikasyon = Enkondrom. Uzun kemiklerde boyut >5cm + kortikal destrüksiyon = kondrosarkom dışla.",
        clinicalPearlEn: "Medullary lytic lesion in hand bones + chondroid calcification = Enchondroma. In long bones, size >5cm + cortical destruction = exclude chondrosarcoma.",
        references: ["Defined WHO Classification of Tumours of Soft Tissue and Bone, 5th ed.", "Defined approach in Murphey MD et al. Radiographics. 1998;18(5):1213-1237.", "Radiopaedia.org - Enchondroma"]
    },
    {
        id: "aneurysmal-bone-cyst",
        name: "Anevrizmal Kemik Kisti (ABC)",
        nameEn: "Aneurysmal Bone Cyst (ABC)",
        category: "Kemik Tümörü",
        categoryEn: "Bone Tumor",
        mechanism: "Reaktif vasküler lezyon → kanla dolu multiseptate kistik kaviteler → ekspansil büyüme ('blow-out' paterni). Primer (%70) veya sekonder (GCT, kondroblastom, osteoblastom zemininde %30). USP6 gen rearrangement (primer).",
        mechanismEn: "Reactive vascular lesion → blood-filled multiseptate cystic cavities → expansile growth ('blow-out' pattern). Primary (70%) or secondary (on GCT, chondroblastoma, osteoblastoma background 30%). USP6 gene rearrangement (primary).",
        keyPoints: ["Sıvı-sıvı seviyeleri (fluid-fluid levels) karakteristik ama patognomonik değil.", "Ekspansil, blow-out kemik lezyonu + ince periosteal kabuk.", "Metafiz yerleşimli (20 yaş altı sık).", "Sekonder ABC: Altta yatan tümör araştırılmalı (GCT, kondroblastom)."],
        keyPointsEn: ["Fluid-fluid levels characteristic but not pathognomonic.", "Expansile, blow-out bone lesion + thin periosteal shell.", "Metaphyseal location (common under age 20).", "Secondary ABC: Underlying tumor should be investigated (GCT, chondroblastoma)."],
        findings: {
            xray: { description: "Ekspansil litik lezyon (blow-out). İnce periosteal kabuk (eggshell cortex). Septalar görülebilir. Metafiz yerleşimli (uzun kemikler) veya posterior elemanlar (vertebra)." },
            mri: { t1: "Multilokule kistik lezyon. Sıvı-sıvı seviyeleri: Üst kısım T1 hiperintens (methemoglobin), alt kısım hipointens (seröz sıvı). İnce septalar ve periosteal kabuk.", t2: "Sıvı-sıvı seviyeleri çok belirgin. Kistik kaviteler T2 hiperintens. Septalar hipointens.", t1_c: "Septal ve periferik kontrastlanma (ince septalar). Kist kaviteleri kontrastlanmaz. Solid kontrastlanma: Sekonder ABC veya agresif lezyon düşün." }
        },
        findingsEn: {
            xray: { description: "Expansile lytic lesion (blow-out). Thin periosteal shell (eggshell cortex). Septations may be visible. Metaphyseal (long bones) or posterior elements (vertebra)." },
            mri: { t1: "Multiloculated cystic lesion. Fluid-fluid levels: Upper portion T1 hyperintense (methemoglobin), lower portion hypointense (serous fluid). Thin septa and periosteal shell.", t2: "Fluid-fluid levels very prominent. Cystic cavities T2 hyperintense. Septa hypointense.", t1_c: "Septal and peripheral enhancement (thin septa). Cyst cavities non-enhancing. Solid enhancement: Consider secondary ABC or aggressive lesion." }
        },
        etiology: "Primer: USP6 gen rearrangement. Sekonder: GCT, kondroblastom, osteoblastom, fibröz displazi zemininde. 10-20 yaş sık.",
        etiologyEn: "Primary: USP6 gene rearrangement. Secondary: On GCT, chondroblastoma, osteoblastoma, fibrous dysplasia background. Common at ages 10-20.",
        differentialDiagnosis: ["Telanjiektatik Osteosarkom (Agresif, sıvı-sıvı seviyeleri, kalın septalar, solid kontrastlanma)", "Dev Hücreli Tümör-GCT (Epifiz, ekzantrik, solid komponent, >20 yaş)", "Basit Kemik Kisti-UBC (Kistik, sıvı-sıvı seviyesi yok, 'fallen fragment' işareti)", "Kondroblastom (Epifiz, <20 yaş, matrikal kalsifikasyon)"],
        differentialDiagnosisEn: ["Telangiectatic Osteosarcoma (Aggressive, fluid-fluid levels, thick septa, solid enhancement)", "Giant Cell Tumor-GCT (Epiphysis, eccentric, solid component, >20 years)", "Simple Bone Cyst-UBC (Cystic, no fluid-fluid levels, 'fallen fragment' sign)", "Chondroblastoma (Epiphysis, <20 years, matrix calcification)"],
        goldStandard: "MRI: Sıvı-sıvı seviyeleri + ekspansil lezyon. Direkt grafi: Blow-out ekspansiyon. Biyopsi: Kesin tanı + sekonder patoloji araştırması.",
        goldStandardEn: "MRI: Fluid-fluid levels + expansile lesion. Plain radiography: Blow-out expansion. Biopsy: Definitive diagnosis + secondary pathology investigation.",
        clinicalPearl: "Genç hastada ekspansil kemik lezyonu + MRI'da sıvı-sıvı seviyeleri = ABC düşün. Ama telanjiektatik osteosarkom dışlanmalı (kalın septalar + solid komponent = kırmızı bayrak).",
        clinicalPearlEn: "Expansile bone lesion in a young patient + fluid-fluid levels on MRI = Suspect ABC. But telangiectatic osteosarcoma must be excluded (thick septa + solid component = red flag).",
        references: ["Defined WHO Classification of Tumours of Soft Tissue and Bone, 5th ed.", "Defined approach in Kransdorf MJ, Sweet DE. Radiographics. 1995;15(5):1285-1297.", "Radiopaedia.org - Aneurysmal bone cyst"]
    },
    {
        id: "pvns",
        name: "PVNS (Pigmente Villonodüler Sinovit)",
        nameEn: "Pigmented Villonodular Synovitis (PVNS)",
        category: "Eklem",
        categoryEn: "Joint",
        mechanism: "Sinovyal membranın proliferatif hastalığı → hemosiderin birikimiyle karakterize villöz ve nodüler sinovyal hiperplazi. Monoartiküler (diz %80). Difüz veya lokalize (nodüler) form. CSF1 gen translokasyonu.",
        mechanismEn: "Proliferative disease of the synovial membrane → villous and nodular synovial hyperplasia characterized by hemosiderin deposition. Monoarticular (knee 80%). Diffuse or localized (nodular) form. CSF1 gene translocation.",
        keyPoints: ["Hemosiderin birikimi → T2'de ve özellikle GRE/SWI'da belirgin sinyal kaybı (blooming).", "Monoartiküler (diz en sık), genç erişkin.", "Difüz form: Tüm sinovya tutulumu, kemik erozyonları.", "Lokalize nodüler form: Hoffa yağ yastığında nodül."],
        keyPointsEn: ["Hemosiderin deposition → Signal loss on T2 and especially GRE/SWI (blooming).", "Monoarticular (knee most common), young adult.", "Diffuse form: Entire synovial involvement, bone erosions.", "Localized nodular form: Nodule in Hoffa fat pad."],
        findings: {
            mri: { t1: "Sinovyal kalınlaşma. Hemosiderin: T1 hipointens-izointens nodüler odaklar.", t2: "Hemosiderin: Belirgin T2 hipointens (düşük sinyal) odaklar. Sinovyal sıvı hiperintens. Kemik erozyonları.", other_sequences: "GRE (T2*)/SWI: Blooming artefaktı (hemosiderin manyetik duyarlılık → sinyal kaybı). Bu dizi tanı için en değerli.", t1_c: "Kontrastlanan sinovyal proliferasyon. Hemosiderin alanları kontrastlanmaz." }
        },
        findingsEn: {
            mri: { t1: "Synovial thickening. Hemosiderin: T1 hypointense-isointense nodular foci.", t2: "Hemosiderin: Markedly T2 hypointense (low signal) foci. Synovial fluid hyperintense. Bone erosions.", other_sequences: "GRE (T2*)/SWI: Blooming artifact (hemosiderin magnetic susceptibility → signal loss). Most valuable sequence for diagnosis.", t1_c: "Enhancing synovial proliferation. Hemosiderin areas non-enhancing." }
        },
        etiology: "Neoplastik (CSF1 gen translokasyonu → tenosinovyal dev hücreli tümör olarak yeniden sınıflandırıldı). 20-40 yaş, cinsiyet farkı yok.",
        etiologyEn: "Neoplastic (CSF1 gene translocation → reclassified as tenosynovial giant cell tumor). Age 20-40, no gender difference.",
        differentialDiagnosis: ["Sinovyal Kondramatoz (Kalsifiye küçük cisimler, kemik-kıkırdak metaplazisi)", "Hemofili Artropatisi (Tekrarlayan eklem içi kanama öyküsü, bilateral, faktör eksikliği)", "Romatoid Artrit (Simetrik, pannus, poliartriküler, RF/anti-CCP pozitif)", "Sinovyal Sarkom (Periartüküler yumuşak doku kitlesi, genç, agresif)"],
        differentialDiagnosisEn: ["Synovial Chondromatosis (Calcified small bodies, bone-cartilage metaplasia)", "Hemophilia Arthropathy (History of recurrent intra-articular bleeding, bilateral, factor deficiency)", "Rheumatoid Arthritis (Symmetric, pannus, polyarticular, RF/anti-CCP positive)", "Synovial Sarcoma (Periarticular soft tissue mass, young, aggressive)"],
        goldStandard: "MRI: GRE/SWI'da blooming + sinovyal proliferasyon + hemosiderin birikimi → tanı koydurucudur. Biyopsi: Kesin tanı.",
        goldStandardEn: "MRI: Blooming on GRE/SWI + synovial proliferation + hemosiderin deposition → diagnostic. Biopsy: Definitive diagnosis.",
        clinicalPearl: "Genç erişkinde monoartiküler sinovyal proliferasyon + MRI'da GRE/SWI'da blooming (hemosiderin) = PVNS (tenosinovyal dev hücreli tümör).",
        clinicalPearlEn: "Monoarticular synovial proliferation in a young adult + blooming on GRE/SWI on MRI (hemosiderin) = PVNS (tenosynovial giant cell tumor).",
        references: ["Defined WHO Classification of Tumours of Soft Tissue and Bone, 5th ed.", "Defined approach in Murphey MD et al. Radiographics. 2008;28(5):1493-1518.", "Radiopaedia.org - Pigmented villonodular synovitis"]
    },
    {
        id: "scaphoid-fracture",
        name: "Skafoid Kırığı",
        nameEn: "Scaphoid Fracture",
        category: "Kırık",
        categoryEn: "Fracture",
        mechanism: "El bileğine düşme (FOOSH - Fall On Outstretched Hand) → skafoid bel (waist) kırığı (%70). Proksimal fragmanın retrograd kanlanması nedeniyle AVN riski yüksek. Direkt grafide %15-20 okkült → MRI altın standart.",
        mechanismEn: "Fall on outstretched hand (FOOSH) → scaphoid waist fracture (70%). High AVN risk due to retrograde blood supply of the proximal fragment. 15-20% occult on plain radiography → MRI is gold standard.",
        keyPoints: ["Karpal kemiklerin en sık kırılan kemiidir.", "Bel (waist) kırığı en sık (%70), proksimal pol AVN riski yüksek.", "Direkt grafide %15-20 okkült — klinik şüphe varsa MRI.", "Herbert vida ile cerrahi fiksasyon (deplase kırıklarda)."],
        keyPointsEn: ["Most commonly fractured carpal bone.", "Waist fracture most common (70%), high AVN risk in proximal pole.", "15-20% occult on X-ray — MRI if clinical suspicion.", "Herbert screw surgical fixation (in displaced fractures)."],
        findings: {
            xray: { description: "Skafoid hattında kortikal kırılma (step-off). Akut dönemde normal olabilir (%15-20). 2 hafta sonra tekrar grafi: Rezorpsiyon hattı görünür hale gelir. Scaphoid fat stripe obliterasyonu (dolaylı bulgu)." },
            mri: { t1: "Kırık hattı: T1 hipointens lineer sinyal. Kemik iliği ödemi: T1 hipointens. AVN: Proksimal pol T1 sinyalinde homojen kayıp (yağ sinyali kaybı).", stir: "Kırık hattı + kemik iliği ödemi: STIR hiperintens. Ligamentöz yaralanma değerlendirmesi.", t2: "Kırık hattı T2 hiperintens. Periosteal/yumuşak doku ödemi." }
        },
        findingsEn: {
            xray: { description: "Cortical disruption at scaphoid line (step-off). May be normal in acute phase (15-20%). Repeat X-ray at 2 weeks: Resorption line becomes visible. Scaphoid fat stripe obliteration (indirect sign)." },
            mri: { t1: "Fracture line: T1 hypointense linear signal. Bone marrow edema: T1 hypointense. AVN: Homogeneous signal loss in proximal pole T1 (fat signal loss).", stir: "Fracture line + bone marrow edema: STIR hyperintense. Ligamentous injury assessment.", t2: "Fracture line T2 hyperintense. Periosteal/soft tissue edema." }
        },
        etiology: "FOOSH (uzanmış ele düşme), spor yaralanması, trafik kazası. Genç erişkinlerde sık.",
        etiologyEn: "FOOSH (fall on outstretched hand), sports injury, traffic accident. Common in young adults.",
        differentialDiagnosis: ["Distal Radius Kırığı (Colles/Smith, aynı mekanizma, direkt grafide belirgin)", "Skafoid Kontüzyonu (Ödem var ama kırık hattı yok, MRI ayrımı)", "De Quervain Tenosinoviti (1. kompartman ağrısı, Finkelstein pozitif)", "Kienbock Hastalığı (Lunat AVN, progresif kolaps, farklı mekanizma)"],
        differentialDiagnosisEn: ["Distal Radius Fracture (Colles/Smith, same mechanism, evident on plain radiography)", "Scaphoid Contusion (Edema present but no fracture line, MRI differentiation)", "De Quervain Tenosynovitis (1st compartment pain, positive Finkelstein)", "Kienböck Disease (Lunate AVN, progressive collapse, different mechanism)"],
        goldStandard: "Direkt grafi (ilk değerlendirme) → Okkült ise MRI (sensitivite %98-100). BT: Kırık hattı detayı ve kaynamama (non-union) değerlendirmesi.",
        goldStandardEn: "Plain radiography (initial evaluation) → If occult, MRI (sensitivity 98-100%). CT: Fracture line detail and non-union assessment.",
        clinicalPearl: "Anatomik enfiye çukurundan (anatomical snuffbox) hassasiyet + normal direkt grafi = Okkült skafoid kırığı düşün → MRI.",
        clinicalPearlEn: "Tenderness in the anatomical snuffbox + normal plain radiography = Suspect occult scaphoid fracture → MRI.",
        references: ["Defined ACR Appropriateness Criteria: Acute Hand and Wrist Trauma.", "Defined approach in Defined Breitenseher MJ et al. AJR. 1997;168(5):1169-1172.", "Radiopaedia.org - Scaphoid fracture"]
    },
    {
        id: "vertebral-compression-fracture",
        name: "Vertebral Kompresyon Kırığı (Benign vs Malign)",
        nameEn: "Vertebral Compression Fracture (Benign vs Malignant)",
        category: "Kırık",
        categoryEn: "Fracture",
        mechanism: "Osteoporotik: Düşük enerjili travma → vertebra korpusunda anterior wedging. Malign (patolojik): Metastatik infiltrasyon → vertebra yapısal bütünlüğü kaybolur → kompresyon. MRI ayrım kriterleri kritik.",
        mechanismEn: "Osteoporotic: Low-energy trauma → anterior wedging of vertebral body. Malignant (pathologic): Metastatic infiltration → loss of vertebral structural integrity → compression. MRI differentiation criteria are critical.",
        keyPoints: ["Benign: T1/T2 sinyal normal kemik iliği ile uyumlu, retropulse fragment, vakum fenomeni.", "Malign: Posterior eleman tutulumu, epidural kitle, konveks posterior korpus konturu, pediküler sinyal kaybı.", "DWI/ADC: Malign kırıklarda difüzyon kısıtlılığı (düşük ADC).", "Fluid sign (T2 hiperintens kleft): Benign kırık lehine."],
        keyPointsEn: ["Benign: T1/T2 signal consistent with normal marrow, retropulsed fragment, vacuum phenomenon.", "Malignant: Posterior element involvement, epidural mass, convex posterior corpus contour, pedicle signal loss.", "DWI/ADC: Diffusion restriction in malignant fractures (low ADC).", "Fluid sign (T2 hyperintense cleft): Favors benign fracture."],
        findings: {
            mri: { t1: "BENIGN: Band-like marrow edema (akut), normal sinyal korunmuş alanlar, retropulse. MALIGN: Komplet kemik iliği replasmanı (tüm korpus T1 hipointens), pediküler tutulum, epidural kitle.", t2: "BENIGN: T2 hiperintens ödem bandı, fluid sign (kleft). MALIGN: Heterojen sinyal, posterior korpus konveksitesi.", stir: "BENIGN: Akut dönemde ödem hiperintens, kronik dönemde düzelir. MALIGN: Persistan hiperintens sinyal.", dwi: "BENIGN: Akut dönemde hafif kısıtlılık (yüksek ADC). MALIGN: Belirgin kısıtlılık (düşük ADC <1.0 × 10⁻³)." },
            xray: { description: "Vertebra yükseklik kaybı (anterior wedging). Posterior duvar bütünlüğü. Vakum fenomeni (gaz): Benign lehine." },
            ct: { non_contrast: "Kırık hattı detayı. Retropulse fragment. Vakum fenomeni (benign). Osteolitik destrüksiyon (malign)." }
        },
        findingsEn: {
            mri: { t1: "BENIGN: Band-like marrow edema (acute), preserved normal signal areas, retropulsion. MALIGNANT: Complete marrow replacement (entire corpus T1 hypointense), pedicle involvement, epidural mass.", t2: "BENIGN: T2 hyperintense edema band, fluid sign (cleft). MALIGNANT: Heterogeneous signal, posterior corpus convexity.", stir: "BENIGN: Acute edema hyperintense, resolves in chronic phase. MALIGNANT: Persistent hyperintense signal.", dwi: "BENIGN: Mild restriction in acute phase (high ADC). MALIGNANT: Marked restriction (low ADC <1.0 × 10⁻³)." },
            xray: { description: "Vertebral height loss (anterior wedging). Posterior wall integrity. Vacuum phenomenon (gas): Favors benign." },
            ct: { non_contrast: "Fracture line detail. Retropulsed fragment. Vacuum phenomenon (benign). Osteolytic destruction (malignant)." }
        },
        etiology: "Benign: Osteoporoz (postmenopozal), travma, steroid kullanımı. Malign: Kemik metastazı (meme, prostat, akciğer, renal, tiroid), multipl miyelom, lenfoma.",
        etiologyEn: "Benign: Osteoporosis (postmenopausal), trauma, steroid use. Malignant: Bone metastasis (breast, prostate, lung, renal, thyroid), multiple myeloma, lymphoma.",
        differentialDiagnosis: ["Akut Osteoporotik Kırık (Band-like ödem, fluid sign, retropulse)", "Patolojik Kırık-Metastaz (Komplet replasman, pediküler tutulum, epidural kitle)", "Multipl Miyelom (Yaygın kemik iliği infiltrasyonu, pepper pot skull)", "Schmorl Nodülü (Endplate herniasyonu, kırık değil, asemptomatik)"],
        differentialDiagnosisEn: ["Acute Osteoporotic Fracture (Band-like edema, fluid sign, retropulsion)", "Pathologic Fracture-Metastasis (Complete replacement, pedicular involvement, epidural mass)", "Multiple Myeloma (Diffuse bone marrow infiltration, pepper pot skull)", "Schmorl's Node (Endplate herniation, not fracture, asymptomatic)"],
        goldStandard: "MRI: Benign vs malign ayrım (T1 sinyal paterni, pediküler tutulum, DWI/ADC). PET/BT: Malign şüphe doğrulama. Biyopsi: Kesin tanı (şüpheli olgularda).",
        goldStandardEn: "MRI: Benign vs malignant differentiation (T1 signal pattern, pedicular involvement, DWI/ADC). PET/CT: Confirmation of malignant suspicion. Biopsy: Definitive diagnosis (in suspicious cases).",
        clinicalPearl: "MRI'da kompresyon kırığında: Pediküler tutulum + komplet iliği replasman + epidural kitle + düşük ADC = Malign. Fluid sign + retropulse + normal pediküller = Benign.",
        clinicalPearlEn: "On MRI in compression fracture: Pedicular involvement + complete marrow replacement + epidural mass + low ADC = Malignant. Fluid sign + retropulsion + normal pedicles = Benign.",
        references: ["Defined approach in Defined Baur A et al. Radiology. 2003;226(2):432-437.", "Defined ACR Appropriateness Criteria: Management of Vertebral Compression Fractures.", "Radiopaedia.org - Vertebral compression fracture"]
    },
    {
        id: "soft-tissue-lipoma",
        name: "Yumuşak Doku Lipomu",
        nameEn: "Soft Tissue Lipoma",
        category: "Yumuşak Doku",
        categoryEn: "Soft Tissue",
        mechanism: "Matür adipositlerden oluşan benign mezenkimal tümör. En sık yumuşak doku tümörüdür. Yağ sinyali tüm sekanslarda cilt altı yağ ile identik. İnce septalar (<2mm) benign özellik.",
        mechanismEn: "Benign mesenchymal tumor composed of mature adipocytes. Most common soft tissue tumor. Fat signal identical to subcutaneous fat on all sequences. Thin septa (<2mm) are a benign feature.",
        keyPoints: ["Tüm sekanslarda subkutan yağ ile identik sinyal.", "Yağ baskılama sekanslarında sinyal kaybı — tanı doğrulayıcı.", "İnce septalar (<2mm), minimal kontrastlanma: Benign.", "Kalın septalar (>2mm), nodüler kontrastlanma, non-adipöz komponent: Liposarkom şüphesi."],
        keyPointsEn: ["Signal identical to subcutaneous fat on all sequences.", "Signal loss on fat suppression sequences — diagnostic confirmation.", "Thin septa (<2mm), minimal enhancement: Benign.", "Thick septa (>2mm), nodular enhancement, non-adipose component: Liposarcoma suspicion."],
        findings: {
            mri: { t1: "Yağ ile identik yüksek sinyal (subkutan yağ referans). Homojen. İnce septalar hipointens.", t2: "Yağ ile identik yüksek sinyal.", stir: "Sinyal kaybı (yağ baskılama ile doğrulama). Bu dizi tanı için anahtar.", t1_c: "Kontrastlanma yok veya minimal septal kontrastlanma. Nodüler/solid kontrastlanma: Liposarkom düşün." },
            usg: { description: "İyi sınırlı, kompresibıl, ovoid lezyon. Subkutan yağ ile izoekoik veya hafif hiperekoik. Cilt altında en sık. İnce lineer ekolar (septalar)." }
        },
        findingsEn: {
            mri: { t1: "Fat-identical high signal (subcutaneous fat reference). Homogeneous. Thin septa hypointense.", t2: "Fat-identical high signal.", stir: "Signal loss (confirmation with fat suppression). Key sequence for diagnosis.", t1_c: "No enhancement or minimal septal enhancement. Nodular/solid enhancement: Consider liposarcoma." },
            usg: { description: "Well-defined, compressible, ovoid lesion. Isoechoic or mildly hyperechoic to subcutaneous fat. Most common subcutaneously. Thin linear echoes (septa)." }
        },
        etiology: "Sporadik. Lipomatoz (multipl lipomlar): Familyal multipl lipomatoz, Dercum hastalığı, Madelung hastalığı.",
        etiologyEn: "Sporadic. Lipomatosis (multiple lipomas): Familial multiple lipomatosis, Dercum disease, Madelung disease.",
        differentialDiagnosis: ["İyi Diferansiye Liposarkom-ALT (Kalın septalar >2mm, nodüler kontrastlanma, non-adipöz komponent >25%)", "Anjiolipom (Ağrılı, subkutan, vasküler komponent, kontrast tutulumu)", "Hibernoma (Kahverengi yağ, T1'de yağdan az parlak, vasküler, kontrastlanır)", "Lipoblastom (Pediatrik, lokalize, yağ + miksoid komponent)"],
        differentialDiagnosisEn: ["Well-Differentiated Liposarcoma-ALT (Thick septa >2mm, nodular enhancement, non-adipose component >25%)", "Angiolipoma (Painful, subcutaneous, vascular component, contrast uptake)", "Hibernoma (Brown fat, less bright than fat on T1, vascular, enhances)", "Lipoblastoma (Pediatric, localized, fat + myxoid component)"],
        goldStandard: "MRI: Yağ sinyali + STIR'da sinyal kaybı + ince septalar + kontrastlanma yok = Lipom tanısı. Biyopsi: Atipik özellikler varsa.",
        goldStandardEn: "MRI: Fat signal + signal loss on STIR + thin septa + no enhancement = Lipoma diagnosis. Biopsy: If atypical features present.",
        clinicalPearl: "MRI'da tüm sekanslarda subkutan yağ ile identik + STIR'da sinyal kaybı + kontrastlanma yok = Lipom kesin tanısı. Kalın septalar veya solid komponent → liposarkom dışla.",
        clinicalPearlEn: "Identical to subcutaneous fat on all MRI sequences + signal loss on STIR + no enhancement = Definitive lipoma diagnosis. Thick septa or solid component → exclude liposarcoma.",
        references: ["Defined WHO Classification of Tumours of Soft Tissue and Bone, 5th ed.", "Defined approach in Kransdorf MJ et al. Radiographics. 2002;22(4):925-946.", "Radiopaedia.org - Lipoma"]
    },
    {
        id: "chondrosarcoma",
        name: "Kondrosarkom",
        nameEn: "Chondrosarcoma",
        category: "Kemik Tümörleri",
        categoryEn: "Bone Tumors",
        mechanism: "Kıkırdak matriksi üreten malign tümör. Düşük gradeli: İntramedüller, yavaş büyüyen. Yüksek gradeli: Agresif, kortikal destrüksiyon. Primer veya sekonder (enkondrom/osteokondrom malign transformasyonu). En sık pelvis, proksimal femur, humerus.",
        mechanismEn: "Malignant tumor producing cartilage matrix. Low-grade: Intramedullary, slow-growing. High-grade: Aggressive, cortical destruction. Primary or secondary (malignant transformation of enchondroma/osteochondroma). Most common in pelvis, proximal femur, humerus.",
        keyPoints: ["Kıkırdak matriksi: 'Rings and arcs' (halka ve yay) kalsifikasyonu PATOGNOMONİK.", "Endosteal scalloping >2/3 kortikal kalınlık = Malignite şüphesi.", "Enkondromdan ayırımda ağrı + boyut artışı + T2'de yoğun sinyal kritik.", ">40 yaş, aksiyel iskelet tercihi (pelvis en sık)."],
        keyPointsEn: ["Chondroid matrix: 'Rings and arcs' calcification PATHOGNOMONIC.", "Endosteal scalloping >2/3 cortical thickness = Malignancy suspicion.", "Pain + size increase + intense T2 signal critical to differentiate from enchondroma.", ">40 years, axial skeleton preference (pelvis most common)."],
        findings: {
            xray: { description: "İntramedüller litik lezyon. Kıkırdak matriksi kalsifikasyonu (rings and arcs). Endosteal scalloping. Kortikal ekspansiyon veya destrüksiyon (yüksek grade)." },
            ct: { non_contrast: "Kıkırdak matriksi kalsifikasyonları detaylı. Kortikal destrüksiyon derecesi. Yumuşak doku komponenti.", contrast: "Heterojen kontrastlanma. Periferal ve septal kontrastlanma paterni." },
            mri: { t1: "Hipointens lobüle kitle.", t2: "ÇOK PARLAK (hiperintens) — kıkırdak matriksinin yüksek su içeriği. Lobüle morfoloji. Septalar hipointens.", t1_c: "Periferal ve septal kontrastlanma ('rings and arcs' paterni)." }
        },
        findingsEn: {
            xray: { description: "Intramedullary lytic lesion. Chondroid matrix calcification (rings and arcs). Endosteal scalloping. Cortical expansion or destruction (high grade)." },
            ct: { non_contrast: "Detailed chondroid matrix calcifications. Degree of cortical destruction. Soft tissue component.", contrast: "Heterogeneous enhancement. Peripheral and septal enhancement pattern." },
            mri: { t1: "Hypointense lobulated mass.", t2: "VERY BRIGHT (hyperintense) — high water content of chondroid matrix. Lobulated morphology. Septa hypointense.", t1_c: "Peripheral and septal enhancement ('rings and arcs' pattern)." }
        },
        etiology: "Primer: De novo. Sekonder: Enkondrom veya osteokondrom malign transformasyonu. Maffucci sendromu ve Ollier hastalığında risk artmış.",
        etiologyEn: "Primary: De novo. Secondary: Malignant transformation of enchondroma or osteochondroma. Increased risk in Maffucci syndrome and Ollier disease.",
        differentialDiagnosis: ["Enkondrom (benign, ağrısız, <5cm, minimal scalloping)", "Kemik infarktı (serpiginöz kalsifikasyon, kontrastlanma yok)", "Osteosarkom (osteoid matriks, sunburst)", "Metastaz (multipl, litik)"],
        differentialDiagnosisEn: ["Enchondroma (benign, painless, <5cm, minimal scalloping)", "Bone Infarct (serpiginous calcification, no enhancement)", "Osteosarcoma (osteoid matrix, sunburst)", "Metastasis (multiple, lytic)"],
        goldStandard: "Radyografi + MRI + Biyopsi. Gradeleme histopatolojik (Grade I-III). Grade I ayırımı enkondromdan zor olabilir.",
        goldStandardEn: "Radiography + MRI + Biopsy. Grading is histopathologic (Grade I-III). Grade I differentiation from enchondroma can be difficult.",
        clinicalPearl: "Pelvis/proksimal femurda rings and arcs kalsifikasyonu + endosteal scalloping >2/3 + T2'de çok parlak = Kondrosarkom. Enkondromdan farklı: Ağrılı, büyüyor, >5cm.",
        clinicalPearlEn: "Rings and arcs calcification in pelvis/proximal femur + endosteal scalloping >2/3 + very bright on T2 = Chondrosarcoma. Different from enchondroma: Painful, growing, >5cm.",
        references: ["WHO Classification of Tumours of Soft Tissue and Bone. 5th ed.", "Defined approach in Murphey MD et al. Radiographics. 2003;23(5):1245-1278.", "Radiopaedia.org - Chondrosarcoma"]
    },
    {
        id: "osteochondroma",
        name: "Osteokondrom (Ekzostoz)",
        nameEn: "Osteochondroma (Exostosis)",
        category: "Kemik Tümörleri",
        categoryEn: "Bone Tumors",
        mechanism: "En sık benign kemik tümörü. Büyüme plağından kaynaklanan kemik ve kıkırdak çıkıntısı. Kortikal ve medüller kemik ana kemikle devamlılık gösterir ('parent bone continuity'). Kıkırdak kapak (cartilage cap) <2cm benign, >2cm malign transformasyon şüphesi.",
        mechanismEn: "Most common benign bone tumor. Bone and cartilage protrusion originating from the growth plate. Cortical and medullary bone shows continuity with parent bone ('parent bone continuity'). Cartilage cap <2cm benign, >2cm malignant transformation suspected.",
        keyPoints: ["Kortikal ve medüller devamlılık ana kemikle = PATOGNOMONİK.", "Kıkırdak kapak kalınlığı: <2cm benign, >2cm malign şüphesi (kondrosarkom).", "Büyüme eklemden uzağa doğru (away from joint).", "Multipl herediter ekzostoz: Otozomal dominant, multipl lezyonlar."],
        keyPointsEn: ["Cortical and medullary continuity with parent bone = PATHOGNOMONIC.", "Cartilage cap thickness: <2cm benign, >2cm malignancy suspicion (chondrosarcoma).", "Growth direction away from joint.", "Multiple hereditary exostoses: Autosomal dominant, multiple lesions."],
        findings: {
            xray: { description: "Kemik yüzeyinden dışa doğru çıkıntı (sesil veya pediküllü). Korteks ve medulla ana kemikle devamlı. Büyüme plağına yakın metafizer yerleşim." },
            mri: { t1: "Kemik iliği sinyali (medüller devamlılık). Kıkırdak kapak: T1 hipointens.", t2: "Kıkırdak kapak: T2 HİPERİNTENS (ölçüm yapılmalı). <2cm = Benign. >2cm = Malignite şüphesi.", t1_c: "Kıkırdak kapak kontrastlanabilir. Kalın, düzensiz kontrastlanma: Malign transformasyon." }
        },
        findingsEn: {
            xray: { description: "Bony protuberance from bone surface (sessile or pedunculated). Cortex and medulla continuous with parent bone. Metaphyseal location near growth plate." },
            mri: { t1: "Bone marrow signal (medullary continuity). Cartilage cap: T1 hypointense.", t2: "Cartilage cap: T2 HYPERINTENSE (measurement required). <2cm = Benign. >2cm = Malignancy suspicion.", t1_c: "Cartilage cap may enhance. Thick, irregular enhancement: Malignant transformation." }
        },
        etiology: "Büyüme plağı anomalisi. Sporadik (soliter) veya multipl herediter ekzostoz (EXT1/EXT2 gen mutasyonu, otozomal dominant).",
        etiologyEn: "Growth plate anomaly. Sporadic (solitary) or multiple hereditary exostoses (EXT1/EXT2 gene mutation, autosomal dominant).",
        differentialDiagnosis: ["Parosteal osteosarkom (kemik yüzeyinde, medüller devamlılık yok)", "Myositis ossifikans (travma öyküsü, periferal kalsifikasyon)", "Juxtakortikal kondrosarkom (kıkırdak matriksi, destrüksiyon)"],
        differentialDiagnosisEn: ["Parosteal Osteosarcoma (Bone surface, no medullary continuity)", "Myositis Ossificans (Trauma history, peripheral calcification)", "Juxtacortical Chondrosarcoma (Cartilage matrix, destruction)"],
        goldStandard: "Radyografi: Medüller ve kortikal devamlılık. MRI: Kıkırdak kapak kalınlığı ölçümü.",
        goldStandardEn: "Radiography: Medullary and cortical continuity. MRI: Cartilage cap thickness measurement.",
        clinicalPearl: "Kemik çıkıntısı + medüller/kortikal devamlılık + kıkırdak kapak <2cm = Benign osteokondrom. Ağrı, büyüme veya kapak >2cm = Malign transformasyon düşün.",
        clinicalPearlEn: "Bone protrusion + medullary/cortical continuity + cartilage cap <2cm = Benign osteochondroma. Pain, growth, or cap >2cm = Suspect malignant transformation.",
        references: ["WHO Classification of Tumours of Soft Tissue and Bone. 5th ed.", "Radiopaedia.org - Osteochondroma"]
    },
    {
        id: "pigmented-villonodular-synovitis",
        name: "PVNS (Pigmente Villonodüler Sinovit)",
        nameEn: "Pigmented Villonodular Synovitis (PVNS)",
        category: "Artiküler",
        categoryEn: "Articular",
        mechanism: "Sinovyal membranın proliferatif hastalığı. Hemosiderin birikimi karakteristik (tekrarlayan intraartiküler kanama). Diffüz (tüm eklem) veya lokalize (fokal nodüler) form. Diz en sık. 'Blooming artifact' gradient echo sekanslarda hemosiderinden kaynaklanır.",
        mechanismEn: "Proliferative disease of the synovial membrane. Hemosiderin deposition is characteristic (recurrent intra-articular bleeding). Diffuse (entire joint) or localized (focal nodular) form. Knee most common. 'Blooming artifact' on gradient echo sequences is from hemosiderin.",
        keyPoints: ["Gradient echo (T2*): 'BLOOMING' artefaktı = Hemosiderin birikimi PATOGNOMONİK.", "Diz eklemi en sık tutulan eklem.", "Kemik erozyonları her iki tarafta (non-agresif, sklerotik kenar).", "Eklem aralığı korunur (RA'dan farklı)."],
        keyPointsEn: ["Gradient echo (T2*): 'BLOOMING' artifact = Hemosiderin deposition PATHOGNOMONIC.", "Knee joint most commonly affected.", "Bone erosions on both sides (non-aggressive, sclerotic margin).", "Joint space preserved (unlike RA)."],
        findings: {
            mri: { t1: "Diffüz sinovyal kalınlaşma. Hipointens alanlar (hemosiderin).", t2: "Heterojen sinyal. Hipointens alanlar (hemosiderin). T2*: BELİRGİN 'BLOOMING' (hemosiderin manyetik susceptibilite artefaktı).", t1_c: "Sinovyal kontrastlanma (proliferatif sinovyum). Hemosiderin alanları kontrastlanmaz." },
            usg: { description: "Sinovyal kalınlaşma, eklem efüzyonu. Hiperekoik odaklar (hemosiderin). Doppler: Artmış vaskülarite." }
        },
        findingsEn: {
            mri: { t1: "Diffuse synovial thickening. Hypointense areas (hemosiderin).", t2: "Heterogeneous signal. Hypointense areas (hemosiderin). T2*: MARKED 'BLOOMING' (hemosiderin magnetic susceptibility artifact).", t1_c: "Synovial enhancement (proliferative synovium). Hemosiderin areas don't enhance." },
            usg: { description: "Synovial thickening, joint effusion. Hyperechoic foci (hemosiderin). Doppler: Increased vascularity." }
        },
        etiology: "Etiyoloji net bilinmiyor. Neoplastik veya inflamatuvar süreç tartışmalı. CSF1 translokasyonu tanımlanmış. 20-40 yaş, kadın = erkek.",
        etiologyEn: "Etiology unclear. Neoplastic or inflammatory process debated. CSF1 translocation identified. Age 20-40, female = male.",
        differentialDiagnosis: ["Hemofili artropatisi (kanama diatezi, bilateral)", "Sinovyal hemanjiom (vasküler, flebolit)", "Romatoid artrit (eklem aralığı daralması, bilateral, simetrik)", "Sinovyal sarkom (solid kitle, heterojen)"],
        differentialDiagnosisEn: ["Hemophilia Arthropathy (Bleeding diathesis, bilateral)", "Synovial Hemangioma (Vascular, phleboliths)", "Rheumatoid Arthritis (Joint space narrowing, bilateral, symmetric)", "Synovial Sarcoma (Solid mass, heterogeneous)"],
        goldStandard: "MRI: T2* blooming + diffüz sinovyal kalınlaşma + kemik erozyonları. Histopatoloji: Hemosiderin yüklü makrofajlar + dev hücreler.",
        goldStandardEn: "MRI: T2* blooming + diffuse synovial thickening + bone erosions. Histopathology: Hemosiderin-laden macrophages + giant cells.",
        clinicalPearl: "Genç hastada monoartiküler eklem şişliği + MRI'da T2* blooming = PVNS. Gradient echo sekansı tanıda anahtar — mutlaka iste.",
        clinicalPearlEn: "Monoarticular joint swelling in a young patient + T2* blooming on MRI = PVNS. Gradient echo sequence is key for diagnosis — always request it.",
        references: ["Defined approach in Defined. Radiographics PVNS.", "Radiopaedia.org - PVNS"]
    },
    {
        id: "morton-neuroma",
        name: "Morton Nöroması",
        nameEn: "Morton Neuroma",
        category: "Yumuşak Doku",
        categoryEn: "Soft Tissue",
        mechanism: "İntermetatarsal bursanın kronik kompresyonu → perinöral fibrozis (gerçek nöroma değil). En sık 3. intermetatarsal aralık (2.-3. arası), ikinci sıklıkla 2. aralık. Tekrarlayan travma ve dar ayakkabı kullanımı predispozan.",
        mechanismEn: "Chronic compression of the intermetatarsal bursa → perineural fibrosis (not a true neuroma). Most common in the 3rd intermetatarsal space (between 2nd and 3rd), second most common in the 2nd space. Repetitive trauma and narrow footwear are predisposing.",
        keyPoints: ["3. intermetatarsal aralık en sık (%65-70).", "Gerçek nöroma DEĞİL — perinöral fibrozis.", "USG'de intermetatarsal hipoekoik kitle + Mulder testi pozitif.", "MRI T1 ve T2'de hipointens (fibröz doku)."],
        keyPointsEn: ["3rd intermetatarsal space most common (65-70%).", "NOT a true neuroma — perineural fibrosis.", "Hypoechoic intermetatarsal mass on USG + positive Mulder test.", "Hypointense on both T1 and T2 MRI (fibrous tissue)."],
        findings: {
            mri: { t1: "İntermetatarsal aralıkta hipointens nodüler lezyon. Metatars başları arasında 'dumbbell' şekli.", t2: "Hipointens (fibröz doku). Çevre bursit varsa sıvı hiperintens.", t1_c: "Kontrastlanma değişken — hafif kontrastlanma olabilir." },
            usg: { description: "İntermetatarsal aralıkta hipoekoik solid kitle. Kompresyon ile Mulder 'click' muayene sonografik olarak gösterilebilir. Genellikle >5mm tanısal." }
        },
        findingsEn: {
            mri: { t1: "Hypointense nodular lesion in intermetatarsal space. 'Dumbbell' shape between metatarsal heads.", t2: "Hypointense (fibrous tissue). Surrounding bursitis fluid hyperintense.", t1_c: "Enhancement variable — mild enhancement may be present." },
            usg: { description: "Hypoechoic solid mass in intermetatarsal space. Mulder 'click' test can be demonstrated sonographically with compression. Generally >5mm diagnostic." }
        },
        etiology: "Kronik mekanik kompresyon (dar ayakkabı, yüksek topuk). Kadınlarda 8-10 kat daha sık. Tekrarlayan travma.",
        etiologyEn: "Chronic mechanical compression (narrow shoes, high heels). 8-10 times more common in women. Repetitive trauma.",
        differentialDiagnosis: ["İntermetatarsal bursit (sıvı dolu, T2 hiperintens)", "Stres fraktürü (kemik ödemi, farklı lokalizasyon)", "Sinovyal kist (T2 hiperintens, ince duvar)", "Schwannom (eksentrik, T2 hiperintens)"],
        differentialDiagnosisEn: ["Intermetatarsal Bursitis (Fluid-filled, T2 hyperintense)", "Stress Fracture (Bone edema, different location)", "Synovial Cyst (T2 hyperintense, thin wall)", "Schwannoma (Eccentric, T2 hyperintense)"],
        goldStandard: "USG (ilk basamak, dinamik değerlendirme) + MRI (atipik vakalarda).",
        goldStandardEn: "USG (First-line, dynamic evaluation) + MRI (for atypical cases).",
        clinicalPearl: "3. intermetatarsal ağrı + USG'de hipoekoik kitle + Mulder click pozitif = Morton nöroması. USG ilk basamak ve yeterlidir çoğu vakada.",
        clinicalPearlEn: "3rd intermetatarsal pain + hypoechoic mass on USG + positive Mulder click = Morton's neuroma. USG is first-line and sufficient in most cases.",
        references: ["Defined approach in Defined. Foot and ankle MRI.", "Radiopaedia.org - Morton neuroma"]
    },
    {
        id: "osteoid-osteoma",
        name: "Osteoid Osteom",
        nameEn: "Osteoid Osteoma",
        category: "Kemik Tümörleri",
        categoryEn: "Bone Tumors",
        mechanism: "Benign osteoblastik tümör. <2cm küçük nidus (santral vasküler alan) + çevre reaktif skleroz. Nidus prostaglandin üretir → gece ağrısı → ASA/NSAİD ile dramatik yanıt. En sık femur ve tibia. 5-25 yaş, erkek > kadın (3:1).",
        mechanismEn: "Benign osteoblastic tumor. <2cm small nidus (central vascular area) + surrounding reactive sclerosis. Nidus produces prostaglandins → night pain → dramatic response to ASA/NSAIDs. Most common in femur and tibia. Age 5-25, male > female (3:1).",
        keyPoints: ["Nidus <2cm + çevre skleroz = Osteoid osteom.", "Gece ağrısı + ASA/NSAİD ile dramatik yanıt KLASİK.", "BT: Nidus tespitinde altın standart (küçük radyolusen alan).", "İntraartiküler yerleşimde: Sinovit taklit eder, skleroz minimal."],
        keyPointsEn: ["Nidus <2cm + surrounding sclerosis = Osteoid osteoma.", "Night pain + dramatic response to ASA/NSAIDs is CLASSIC.", "CT: Gold standard for nidus detection (small radiolucent area).", "Intra-articular location: Mimics synovitis, minimal sclerosis."],
        findings: {
            ct: { non_contrast: "NIDUS: Küçük yuvarlak radyolusen alan (<2cm). Santral kalsifikasyon (noktasal). Belirgin çevre REAKTİF SKLEROZ (kortikal kalınlaşma).", contrast: "Nidus yoğun kontrastlanır (hipervasküler)." },
            mri: { t1: "Nidus: Hipointens veya izointens. Çevre skleroz: Hipointens.", t2: "Nidus: Hiperintens (vasküler). Çevre kemik iliği ödemi BELİRGİN (nidus boyutuna göre orantısız). Bu ödem agresif patolojiyi taklit edebilir.", t1_c: "Nidus YOĞUN kontrastlanır." },
            xray: { description: "Belirgin kortikal kalınlaşma/skleroz. Santral radyolusen alan (nidus — direkt grafide zor görülür). Periosteal reaksiyon." }
        },
        findingsEn: {
            ct: { non_contrast: "NIDUS: Small round radiolucent area (<2cm). Central calcification (punctate). Prominent surrounding REACTIVE SCLEROSIS (cortical thickening).", contrast: "Nidus enhances intensely (hypervascular)." },
            mri: { t1: "Nidus: Hypointense or isointense. Surrounding sclerosis: Hypointense.", t2: "Nidus: Hyperintense (vascular). Surrounding bone marrow edema PROMINENT (disproportionate to nidus size). This edema may mimic aggressive pathology.", t1_c: "Nidus enhances INTENSELY." },
            xray: { description: "Prominent cortical thickening/sclerosis. Central radiolucent area (nidus — difficult to see on radiograph). Periosteal reaction." }
        },
        etiology: "Benign osteoblastik neoplazm. 5-25 yaş. Erkek:Kadın = 3:1. Femur ve tibia diafiz en sık.",
        etiologyEn: "Benign osteoblastic neoplasm. Age 5-25. Male:Female = 3:1. Femur and tibia diaphysis most common.",
        differentialDiagnosis: ["Osteoblastom (>2cm, daha az skleroz)", "Stres fraktürü (lineer, ödem, öykü)", "Brodie absesi (enfeksiyon, penumbra sign)", "Eozinofilik granülom (çocuk, litik, periosteal reaksiyon)"],
        differentialDiagnosisEn: ["Osteoblastoma (>2cm, less sclerosis)", "Stress Fracture (Linear, edema, history)", "Brodie Abscess (Infection, penumbra sign)", "Eosinophilic Granuloma (Child, lytic, periosteal reaction)"],
        goldStandard: "BT: Nidus tespiti (ince kesit). MRI: Çevre ödem ve yumuşak doku değerlendirmesi. Tedavi: Perkütan radyofrekans ablasyon.",
        goldStandardEn: "CT: Nidus detection (thin section). MRI: Surrounding edema and soft tissue assessment. Treatment: Percutaneous radiofrequency ablation.",
        clinicalPearl: "Genç erkek + gece ağrısı + ASA ile düzelen + BT'de küçük nidus + skleroz = Osteoid osteom. MRI'da orantısız kemik ödemi agresif patolojiyi taklit edebilir — BT iste.",
        clinicalPearlEn: "Young male + night pain + relieved by ASA + small nidus on CT + sclerosis = Osteoid osteoma. Disproportionate bone edema on MRI may mimic aggressive pathology — order CT.",
        references: ["Defined approach in Kransdorf MJ et al. Radiographics osteoid osteoma.", "Radiopaedia.org - Osteoid osteoma"]
    },
    {
        id: "myositis-ossificans",
        name: "Miyozitis Ossifikans",
        nameEn: "Myositis Ossificans",
        category: "Yumuşak Doku",
        categoryEn: "Soft Tissue",
        mechanism: "Travma sonrası kasda heterotopik kemik oluşumu. Zonal maturasyon paterni: Periferal kalsifikasyon → santral inmatur doku. Bu patern malign tümörlerden (osteosarkom) AYIRICI — osteosarkomda santral kalsifikasyon olur.",
        mechanismEn: "Post-traumatic heterotopic bone formation in muscle. Zonal maturation pattern: Peripheral calcification → central immature tissue. This pattern DIFFERENTIATES from malignant tumors (osteosarcoma) — osteosarcoma has central calcification.",
        keyPoints: ["ZONAL PATERN: Periferik matur kemik + santral inmatur doku = Benign.", "Osteosarkom: TERS patern (santral kalsifikasyon) = Malign.", "Travma öyküsü genellikle mevcut (2-4 hafta sonra belirginleşir).", "Radyografide 3-4 hafta sonra periferal kalsifikasyon görülür."],
        keyPointsEn: ["ZONAL PATTERN: Peripheral mature bone + central immature tissue = Benign.", "Osteosarcoma: REVERSE pattern (central calcification) = Malignant.", "Trauma history usually present (becomes apparent after 2-4 weeks).", "Peripheral calcification visible on radiograph after 3-4 weeks."],
        findings: {
            xray: { description: "Erken (1-2 hafta): Normal veya non-spesifik yumuşak doku şişliği. Orta (3-4 hafta): Periferal kalsifikasyon başlar (zonal). Geç (>6 hafta): Matür periferik kemik kabuğu." },
            ct: { non_contrast: "Zonal kalsifikasyon: Periferal olgun kemik + santral yumuşak doku. Kas içi veya periosteal yerleşim. Kemikten net ayrım (cleavage plane)." },
            mri: { t1: "Erken: Kas ödemi (hipointens/izointens). Geç: Periferal kalsifikasyon hipointens rim.", t2: "Erken: Belirgin ödem (çok hiperintens — agresif patolojiyi taklit eder!). Geç: Periferal hipointens rim + santral heterojen sinyal.", t1_c: "Erken: Belirgin kontrastlanma (agresif görünüm). Geç: Periferal rim kontrastlanması." }
        },
        findingsEn: {
            xray: { description: "Early (1-2 weeks): Normal or nonspecific soft tissue swelling. Middle (3-4 weeks): Peripheral calcification begins (zonal). Late (>6 weeks): Mature peripheral bone shell." },
            ct: { non_contrast: "Zonal calcification: Peripheral mature bone + central soft tissue. Intramuscular or periosteal location. Clear separation from bone (cleavage plane)." },
            mri: { t1: "Early: Muscle edema (hypointense/isointense). Late: Peripheral calcification hypointense rim.", t2: "Early: Marked edema (very hyperintense — mimics aggressive pathology!). Late: Peripheral hypointense rim + central heterogeneous signal.", t1_c: "Early: Marked enhancement (aggressive appearance). Late: Peripheral rim enhancement." }
        },
        etiology: "Travma (en sık). Spor yaralanması, cerrahi, yanık. Nadir: Non-travmatik (spinal kord hasarı, nöroljenik).",
        etiologyEn: "Trauma (most common). Sports injury, surgery, burns. Rare: Non-traumatic (spinal cord injury, neurogenic).",
        differentialDiagnosis: ["Parosteal osteosarkom (kemik yüzeyinde, santral kalsifikasyon)", "Ekstraosseöz osteosarkom (santral kalsifikasyon, ters zonal patern)", "Tümöral kalsinozis (periartüler, kalsifiye kitleler)", "Yumuşak doku sarkomu (heterojen, agresif)"],
        differentialDiagnosisEn: ["Parosteal Osteosarcoma (Bone surface, central calcification)", "Extraosseous Osteosarcoma (Central calcification, reverse zonal pattern)", "Tumoral Calcinosis (Periarticular, calcified masses)", "Soft Tissue Sarcoma (Heterogeneous, aggressive)"],
        goldStandard: "BT: Zonal maturasyon paterni (periferik kalsifikasyon). MRI: Evreleme ve ayırıcı tanı. Erken evrede BT daha tanısal (MRI agresif patolojiyi taklit edebilir).",
        goldStandardEn: "CT: Zonal maturation pattern (peripheral calcification). MRI: Staging and differential diagnosis. In early stages, CT is more diagnostic (MRI may mimic aggressive pathology).",
        clinicalPearl: "Travma sonrası kas kitlesi + BT'de periferal kalsifikasyon (zonal patern) = Miyozitis ossifikans. Erken MRI YANILTICI olabilir (agresif tümör gibi) — BT ile doğrula. Osteosarkom TERS patern gösterir.",
        clinicalPearlEn: "Post-traumatic muscle mass + peripheral calcification on CT (zonal pattern) = Myositis ossificans. Early MRI may be MISLEADING (appears like aggressive tumor) — confirm with CT. Osteosarcoma shows REVERSE pattern.",
        references: ["Defined approach in Defined. Radiographics heterotopic ossification.", "Radiopaedia.org - Myositis ossificans"]
    },
    {
        id: "lateral-meniscus-tear",
        name: "Lateral Menisküs Yırtığı",
        nameEn: "Lateral Meniscus Tear",
        category: "Artiküler",
        categoryEn: "Articular",
        mechanism: "Lateral menisküs yırtığı mediale göre daha nadir ama spesifik yaralanma paternleri ile ilişkili. Diskoid menisküs varlığında risk artmış. ACL yırtığına sıklıkla eşlik eder (pivot shift). Parrot-beak yırtık lateral menisküste karakteristik.",
        mechanismEn: "Lateral meniscus tear is rarer than medial but associated with specific injury patterns. Risk is increased with discoid meniscus. Frequently accompanies ACL tear (pivot shift). Parrot-beak tear is characteristic of the lateral meniscus.",
        keyPoints: ["ACL yırtığı ile birlikte sık (lateral kompartman bone bruise paterni).", "Diskoid menisküs: Yırtık riskini artırır.", "Posterior horn ve gövde en sık yırtık yerleri.", "Kök yırtığı: Menisküs ekstrüzyonuna yol açar."],
        keyPointsEn: ["Frequently associated with ACL tear (lateral compartment bone bruise pattern).", "Discoid meniscus: Increases tear risk.", "Posterior horn and body most common tear locations.", "Root tear: Leads to meniscal extrusion."],
        findings: {
            mri: { t1: "Menisküs içinde lineer sinyal değişikliği (artiküler yüzeye uzanırsa yırtık).", t2: "İntrameniskal hiperintens sinyal artiküler yüzeye uzanır = Yırtık (Grade III). Menisküs morfolojisi bozulmuş olabilir. Parameniskal kist eşlik edebilir (horizontal yırtıkla ilişkili).", t1_c: "Rutin kullanılmaz." }
        },
        findingsEn: {
            mri: { t1: "Linear signal change within meniscus (tear if extends to articular surface).", t2: "Intrameniscal hyperintense signal extending to articular surface = Tear (Grade III). Meniscal morphology may be disrupted. Parameniscal cyst may accompany (associated with horizontal tear).", t1_c: "Not routinely used." }
        },
        etiology: "Travma (spor yaralanması, pivot mekanizma), dejeneratif (yaşla ilişkili). Diskoid menisküs predispozan.",
        etiologyEn: "Trauma (sports injury, pivot mechanism), degenerative (age-related). Discoid meniscus is predisposing.",
        differentialDiagnosis: ["Meniskal dejenerasyon (Grade I-II, yüzeye ulaşmaz)", "Diskoid menisküs (genişlemiş menisküs)", "Parameniskal kist (periferik kistik lezyon)", "Meniskokapsüler ayrılma (periferal, MRI'da zor)"],
        differentialDiagnosisEn: ["Meniscal Degeneration (Grade I-II, does not reach surface)", "Discoid Meniscus (Widened meniscus)", "Parameniscal Cyst (Peripheral cystic lesion)", "Meniscocapsular Separation (Peripheral, difficult on MRI)"],
        goldStandard: "MRI: Proton dansite (PD) yağ baskılı veya T2* sekanslar. Artroskopi: Kesin tanı ve tedavi.",
        goldStandardEn: "MRI: Proton density (PD) fat-suppressed or T2* sequences. Arthroscopy: Definitive diagnosis and treatment.",
        clinicalPearl: "ACL yırtığı + lateral kompartman bone bruise = Lateral menisküs yırtığını ara. Parameniskal kist varsa horizontal yırtığı doğrular.",
        clinicalPearlEn: "ACL tear + lateral compartment bone bruise = Look for lateral meniscus tear. If parameniscal cyst present, confirms horizontal tear.",
        references: ["Defined approach in Defined. Stoller's Orthopaedics and Sports Medicine.", "Radiopaedia.org - Lateral meniscus tear"]
    },
    {
        id: "tibial-plateau-fracture",
        name: "Tibia Plato Kırığı",
        nameEn: "Tibial Plateau Fracture",
        category: "Travma",
        categoryEn: "Trauma",
        mechanism: "Aksiyel yük + valgus/varus stresi → tibial platoda kırık. Lateral plato en sık (%55-70). Schatzker sınıflaması cerrahi planlamada kritik. Lipohemartroz (yağ-sıvı seviyesi) kırığı düşündürür.",
        mechanismEn: "Axial load + valgus/varus stress → tibial plateau fracture. Lateral plateau most common (55-70%). Schatzker classification is critical for surgical planning. Lipohemarthrosis (fat-fluid level) suggests fracture.",
        keyPoints: ["Schatzker sınıflaması (I-VI) cerrahi planlamada standart.", "Lipohemartroz (yağ-sıvı seviyesi) intraartiküler kırık göstergesi.", "Lateral plato en sık (%55-70). Schatzker II: Lateral split-depresyon.", "BT: Kırık patern, depresyon derinliği ve fragman pozisyonu değerlendirmesi."],
        keyPointsEn: ["Schatzker classification (I-VI) standard for surgical planning.", "Lipohemarthrosis (fat-fluid level) indicates intra-articular fracture.", "Lateral plateau most common (55-70%). Schatzker II: Lateral split-depression.", "CT: Fracture pattern, depression depth and fragment position assessment."],
        findings: {
            xray: { description: "Tibial platoda kırık hattı. Artiküler yüzey depresyonu. Lipohemartroz (lateral grafide yağ-sıvı seviyesi suprapatellar bursada)." },
            ct: { non_contrast: "Kırık patern detayı: Split, depresyon derecesi, komminüsyon. Schatzker sınıflaması. Artiküler yüzey depresyon derinliği (>2-3mm cerrahi endikasyon)." },
            mri: { t1: "Kırık hattı (hipointens). Kemik iliği ödemi.", t2: "Kemik iliği ödemi (hiperintens). Eşlik eden ligaman/menisküs yaralanmaları. Lipohemartroz: Sıvı-sıvı seviyesi.", t1_c: "Rutin değil." }
        },
        findingsEn: {
            xray: { description: "Fracture line in tibial plateau. Articular surface depression. Lipohemarthrosis (fat-fluid level in suprapatellar bursa on lateral view)." },
            ct: { non_contrast: "Fracture pattern detail: Split, depression degree, comminution. Schatzker classification. Articular surface depression depth (>2-3mm surgical indication)." },
            mri: { t1: "Fracture line (hypointense). Bone marrow edema.", t2: "Bone marrow edema (hyperintense). Associated ligament/meniscus injuries. Lipohemarthrosis: Fluid-fluid level.", t1_c: "Not routine." }
        },
        etiology: "Yüksek enerjili travma (motorlu araç kazası, düşme). Düşük enerjili (osteoporotik kemik, yaşlı). Lateral plato: Valgus stresi.",
        etiologyEn: "High-energy trauma (motor vehicle accident, fall). Low-energy (osteoporotic bone, elderly). Lateral plateau: Valgus stress.",
        differentialDiagnosis: ["Kemik kontüzyonu (kırık hattı yok, ödem mevcut)", "Osteokondral lezyon (artiküler kartilaj ve subkondral kemik)", "Stres kırığı (lineer, gradual başlangıç)"],
        differentialDiagnosisEn: ["Bone Contusion (No fracture line, edema present)", "Osteochondral Lesion (Articular cartilage and subchondral bone)", "Stress Fracture (Linear, gradual onset)"],
        goldStandard: "BT: Kırık sınıflaması ve cerrahi planlama. MRI: Yumuşak doku yaralanmaları (ligaman, menisküs). Radyografi: İlk değerlendirme.",
        goldStandardEn: "CT: Fracture classification and surgical planning. MRI: Soft tissue injuries (ligament, meniscus). Radiography: Initial evaluation.",
        clinicalPearl: "Diz travması + lateral grafide lipohemartroz = İntraartiküler kırık. BT ile Schatzker sınıfla. Depresyon >2-3mm → cerrahi. MRI ile menisküs ve bağ yaralanmalarını değerlendir.",
        clinicalPearlEn: "Knee trauma + lipohemarthrosis on lateral view = Intra-articular fracture. Classify with CT using Schatzker. Depression >2-3mm → surgery. Evaluate meniscus and ligament injuries with MRI.",
        references: ["Defined approach in Defined. Schatzker classification of tibial plateau fractures.", "Radiopaedia.org - Tibial plateau fracture"]
    },
    {
        id: "femoroacetabular-impingement",
        name: "Femoroasetabüler Sıkışma (FAİ)",
        nameEn: "Femoroacetabular Impingement (FAI)",
        category: "Artiküler",
        categoryEn: "Articular",
        mechanism: "Femur başı/boyun ile asetabulum arasında anormal temas → labral yırtık ve kıkırdak hasarı → erken osteoartrit. CAM tipi: Femur başı-boyun bileşkesinde 'bump' (alfa açısı >55°). PINCER tipi: Asetabüler aşırı örtünme. MİKST: Her ikisi birlikte (en sık).",
        mechanismEn: "Abnormal contact between the femoral head/neck and acetabulum → labral tear and cartilage damage → early osteoarthritis. CAM type: 'Bump' at the femoral head-neck junction (alpha angle >55°). PINCER type: Acetabular over-coverage. MIXED: Both together (most common).",
        keyPoints: ["CAM: Alfa açısı >55° (femur başında bump).", "PINCER: Asetabüler overörtünme (crossover sign, coxa profunda).", "Labral yırtık: Anterosüperior en sık.", "Erken osteoartrit nedeni — genç aktif hastalarda."],
        keyPointsEn: ["CAM: Alpha angle >55° (bump on femoral head).", "PINCER: Acetabular overcoverage (crossover sign, coxa profunda).", "Labral tear: Anterosuperior most common.", "Cause of early osteoarthritis — in young active patients."],
        findings: {
            xray: { description: "CAM: Femur başı-boyun bileşkesinde bump (pistol grip deformitesi). PINCER: Crossover sign, coxa profunda, protrusio asetabuli. Herniation pit (femur boyun anteriorunda kortikal irregülarite)." },
            mri: { t1: "Femur başı-boyun morfolojisi (CAM bump). Labral yapı değerlendirmesi. MR artrografi: İntraartiküler kontrast ile labral yırtık detayı.", t2: "Labral yırtık: Hiperintens sinyal veya morfolojik bozukluk. Kıkırdak defekti: Fokal kayıp veya incelme. Kemik iliği ödemi (impingement bölgesinde).", t1_c: "MR artrografi: Kontrast labral altına veya kıkırdak defektine sızar (yırtık doğrulama)." }
        },
        findingsEn: {
            xray: { description: "CAM: Bump at femoral head-neck junction (pistol grip deformity). PINCER: Crossover sign, coxa profunda, protrusio acetabuli. Herniation pit (cortical irregularity at anterior femoral neck)." },
            mri: { t1: "Femoral head-neck morphology (CAM bump). Labral structure evaluation. MR arthrography: Labral tear detail with intra-articular contrast.", t2: "Labral tear: Hyperintense signal or morphological disruption. Cartilage defect: Focal loss or thinning. Bone marrow edema (at impingement zone).", t1_c: "MR arthrography: Contrast leaks under labrum or into cartilage defect (tear confirmation)." }
        },
        etiology: "CAM: Gelişimsel (slipped capital femoral epiphysis, Legg-Calvé-Perthes sekeli). PINCER: Asetabüler retroversiyon, coxa profunda. Genetik yatkınlık ve spor aktivitesi.",
        etiologyEn: "CAM: Aspherical femoral head-neck junction (athletes, male dominant). PINCER: Acetabular over-coverage (coxa profunda, protrusio). Genetic predisposition.",
        differentialDiagnosis: ["Labral yırtık (izole, impingement morfolojisi yok)", "Kalça osteoartriti (yaşlı, diffüz)", "AVN (subkondral kresentrik sinyal değişikliği)", "İliopsoas tendinopati (anterior kalça ağrısı, farklı lokalizasyon)"],
        differentialDiagnosisEn: ["Hip OA (Primary osteoarthritis)", "Labral Tear (May be secondary to FAI)", "Hip Dysplasia (Shallow acetabulum, different mechanism)", "Stress Fracture (Femoral neck)"],
        goldStandard: "MR Artrografi: Labral yırtık ve kıkırdak hasarı. Radyografi: Alfa açısı ölçümü (CAM), crossover sign (PINCER).",
        goldStandardEn: "MR Arthrography + Plain radiography. Alpha angle (Cam) and CE angle (Pincer) measurement. Arthroscopy: Definitive diagnosis and treatment.",
        clinicalPearl: "Genç aktif hasta + anterior kalça/kasık ağrısı + fleksiyon-iç rotasyonda ağrı = FAİ düşün. Alfa açısı >55° = CAM. MR artrografi labral yırtığı gösterir.",
        clinicalPearlEn: "Groin pain in a young adult with hip flexion + internal rotation → suspect FAI. Alpha angle >55° = Cam. CE angle >40° = Pincer. Early diagnosis prevents secondary OA.",
        references: ["Defined approach in Defined. Tannast M et al. Radiographics FAI.", "Radiopaedia.org - Femoroacetabular impingement"]
    }
];
