import { Pathology } from '@/types';

export const spinePathologies: Pathology[] = [
    {
        "id": "lumbar_disc_herniation",
        "name": "Lomber Disk Hernisi (Bel Fıtığı)",
        "nameEn": "Lumbar Disc Herniation",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
        "gallery": [
            {
                "url": "/images/spine/lumbar_herniation_sagittal.png",
                "caption": "Sagittal T2: L4-L5 Ekstrüzyon",
                "modality": "MRI"
            }
        ],
        "findings": {
            "mri": {
                "t2": "Disk yüksekliğinde azalma (Dejenerasyon). Nükleus pulpozusun anulus fibrozusu yırtarak taşması. Yüksek sinyalli 'HIZ' (High Intensity Zone) anüler yırtığı gösterir.",
                "t1": "Epidural yağ mesafesinin silinmesi. Sinir kökü basısı.",
                "sagittal": "Disk dikey boyutu > taban boyutu ise 'Ekstrüzyon', taban > dikey ise 'Protrüzyon'. Diskle bağlantısı kopmuşsa 'Sekestre'.",
                "axial": "Lokasyon: Santral, Parasantral (Resess), Foraminal, Ekstraforaminal."
            },
            "ct": {
                "non_contrast": "Yumuşak doku dansitesinde disk materyalinin kanal içine uzanımı. Kalsifikasyon olabilir (Sert disk)."
            }
        },
        "findingsEn": {
            "mri": {
                "t2": "Decreased disc height (Degeneration). Nucleus pulposus herniating through annulus fibrosus. High signal 'HIZ' (High Intensity Zone) indicates annular tear.",
                "t1": "Effacement of epidural fat. Nerve root compression.",
                "sagittal": "Disc vertical dimension > base dimension = 'Extrusion', Base > vertical = 'Protrusion'. Disconnected from disc = 'Sequestrated'.",
                "axial": "Location: Central, Paracentral (Recess), Foraminal, Extraforaminal."
            },
            "ct": {
                "non_contrast": "Soft tissue density disc material extending into the canal. Calcification may be present (Hard disc)."
            }
        },
        "keyPoints": [
            "Terminoloji (Radiopaedia 2.0): Bulging (Taşma) vs Herni (Fıtık).",
            "Fokal (<%25) vs Yaygın (>%25).",
            "L4-L5 ve L5-S1 en sık etkilenen seviyelerdir.",
            "Acil durum: Kauda Ekuina Sendromu (İdrar retansiyonu, eyer tarzı anestezi)."
        ],
        "keyPointsEn": [
            "Terminology (Radiopaedia 2.0): Bulging vs Herniation.",
            "Focal (<25%) vs Diffuse (>25%).",
            "L4-L5 and L5-S1 are the most frequently affected levels.",
            "Emergency: Cauda Equina Syndrome (Urinary retention, saddle anesthesia)."
        ],
        "mechanism": "Yaşlanma veya tekrarlayan travma → anulus fibrozus kollajen liflerinin yıkımı → nükleus pulpozus su kaybı (T2 sinyal azalması) → disk yüksekliği azalması → anular yırtık → nükleus pulpozus materyalinin kanal/foramene herniyasyonu. Mekanik bası + kimyasal enflamasyon (fosfolipaz A2 salınımı) → sinir kökü ödemi ve radikülopati.",
        "etiology": "Dejeneratif (yaşlanma, tekrarlayan aksiyel yüklenme), Akut travma, Konjenital dar kanal, Genetik predispozisyon.",
        "differentialDiagnosis": ["Piriformis Sendromu (Ekstraforaminal, piriformis kasında patoloji)", "Faset Artropatisi (Posterior ağrı, ekstansiyonda artar)", "Spinal Stenoz (Bilateral nörojenik kladikasyo)", "Vertebral Metastaz (Gece ağrısı, T1 sinyal kaybı)"],
        "goldStandard": "MRI (Sagittal + Aksiyel T2): Kanal çapı, sinir kökü basısı, kord sinyali değerlendirmesi. BT myelografi: MRI çekilemez ise.",
        "clinicalPearl": "L4-L5 herniasyonu → L5 kökü basısı (Ayak dorsifleksiyon zayıflığı). L5-S1 → S1 (Aşil refleks kaybı). İdrar retansiyonu + Eyer anestezi = Kauda Ekuina Acil!",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Fardon DF et al. Lumbar disc nomenclature: version 2.0. Spine J. 2014;14(11):2525-2545.",
            "ACR Appropriateness Criteria: Low Back Pain. American College of Radiology.",
            "Radiopaedia.org - Lumbar disc herniation"
        ]
    },
    {
        "id": "spinal_stenosis_lumbar",
        "name": "Lomber Spinal Stenoz (Dar Kanal)",
        "nameEn": "Lumbar Spinal Stenosis",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
        "gallery": [
            {
                "url": "/images/spine/spinal_stenosis_axial.png",
                "caption": "Aksiyel T2: Yonca Yaprağı (Trefoil) Görünümü",
                "modality": "MRI"
            }
        ],
        "findings": {
            "mri": {
                "t2": "BOS mesafesinin daralması. Kauda ekuina liflerinde 'kıvrımlanma' (redundancy). Aksiyel kesitte 'Yonca Yaprağı' (Trefoil) görünümü.",
                "axial": "Ligamentum flavum hipertrofisi (>4mm). Faset eklem artrozu/hipertrofisi."
            }
        },
        "findingsEn": {
            "mri": {
                "t2": "Narrowing of CSF space. 'Redundancy' (curling) of cauda equina nerve roots. 'Trefoil' appearance on axial sections.",
                "axial": "Ligamentum flavum hypertrophy (>4mm). Facet joint arthrosis/hypertrophy."
            }
        },
        "keyPoints": [
            "Klinik: Nörojenik Kladikasyo (Yürürken bacak ağrısı, öne eğilince geçer).",
            "AP kanal çapı < 10mm (Rölatif), < 7mm (Mutlak Stenoz).",
            "Santral, Lateral Resess veya Foraminal olabilir."
        ],
        "keyPointsEn": [
            "Clinical: Neurogenic Claudication (Leg pain with walking, relieved by leaning forward).",
            "AP canal diameter < 10mm (Relative), < 7mm (Absolute Stenosis).",
            "Can be Central, Lateral Recess, or Foraminal."
        ],
        "mechanism": "Çoklu dejeneratif değişikliklerin birikmesi → kanal daralması. Disk yükseklik kaybı → faset ekleme artan yük → faset artrozu ve hipertrofi. Ligamentum flavum: Elastin kaybı → kollajen hipertrofisi (>4mm). Osteofitler + ligaman hipertrofisi + faset hipertrofisi = trifokal (trefoil) dar kanal. Öne eğilme sırasında kanal açılması nörojenik kladikasiyo ile bisiklete binebilme ayrımını açıklar.",
        "etiology": "Dejeneratif (en sık): Disk protrüzyonu, faset hipertrofisi, ligamentum flavum kalınlaşması. Konjenital dar kanal (kısa pediküller). Spondilolistezis. Postoperatif (epidural fibrozis).",
        "differentialDiagnosis": ["Vasküler Kladikasyo (Nabız kaybı, ABI düşük, yürüyünce artan ağrı dinlenmekle geçer)", "Disk Hernisi (Tek kök tutulumu, Lasègue +)", "Spinal Tümör/Metastaz (Gece ağrısı, kilo kaybı, T1 sinyal kaybı)", "Periferik Nöropati (Diyabet, simetrik, çorap-eldiven)"],
        "goldStandard": "MRI (Aksiyel + Sagittal T2): Kanal çapı, ligamentum flavum kalınlığı, foraminal stenoz. Yonca yaprağı (trefoil) görünümü. BT myelografi: MRI kontrendike ise.",
        "clinicalPearl": "Nörojenik kladikasyo: Yürürken artan bilateral bacak ağrısı, öne eğilince (market arabası pozisyonu) rahatlar. Vasküler kladikasyoda ise dinlenmekle geçer ancak postür önemli değildir.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Low Back Pain. American College of Radiology.",
            "Radiopaedia.org - Lumbar spinal stenosis"
        ]
    },
    {
        "id": "spondylolisthesis",
        "name": "Spondilolistezis (Bel Kayması)",
        "nameEn": "Spondylolisthesis",
        "category": "Dejeneratif/Travma",
        "categoryEn": "Degenerative/Trauma",
        "gallery": [
            {
                "url": "/images/spine/spondylolisthesis_sagittal.png",
                "caption": "Sagittal T2: L5-S1 Anterolistezis (Grade 2)",
                "modality": "MRI"
            }
        ],
        "findings": {
            "mri": {
                "sagittal": "Bir vertebranın alttakine göre öne (anterolistezis) veya arkaya (retrolistezis) kayması. Kanal çapında daralma.",
                "t2": "Pars interartikülariste ödem (Aktif spondilolizis) veya defekt (Kronik)."
            },
            "ct": {
                "bone_window": "Pars interartikülaris defekti 'İskoç Köpeği' (Scottie Dog) boynunda kırık görünümü."
            }
        },
        "findingsEn": {
            "mri": {
                "sagittal": "Anterior (anterolisthesis) or posterior (retrolisthesis) slippage of one vertebra relative to the one below. Narrowing of canal diameter.",
                "t2": "Edema in pars interarticularis (Active spondylolysis) or defect (Chronic)."
            },
            "ct": {
                "bone_window": "Pars interarticularis defect appearing as a break in the 'Scottie Dog' neck."
            }
        },
        "keyPoints": [
            "Meyerding Sınıflaması (Evre 1-4).",
            "En sık L4-L5 (Dejeneratif) ve L5-S1 (İstmik/Litik).",
            "Step-off (basamaklanma) deformitesi."
        ],
        "keyPointsEn": [
            "Meyerding Classification (Grade 1-4).",
            "Most common at L4-L5 (Degenerative) and L5-S1 (Isthmic/Lytic).",
            "Step-off deformity."
        ],
        "mechanism": "İstmik tip: Tekrarlayan hiperextansiyon stresi (jimnastikçi, futbolcu) → pars interartikülaris stres kırığı (spondilolizis) → her iki tarafta kırık → vertebra kayması. Dejeneratif tip: Faset ve disk dejenerasyonu → posterior stabilizasyon kaybı → öne kayma. Travmatik tip: Akut yüksek enerjili travma → pars veya pedikül kırığı → ani kayma. Kayma derecesi arttıkça kanal ve foramen daralır.",
        "etiology": "İstmik/Litik: Pars interartikülaris stres kırığı (genç sporcular). Dejeneratif: Faset ve disk dejenerasyonu (yaşlılar, L4-L5). Travmatik: Akut kırık. Patolojik: Tümör/enfeksiyon. Displastik: Konjenital faset anomalisi.",
        "differentialDiagnosis": ["Spinal Stenoz (Dar kanal, kayma olmadan)", "Disk Hernisi (Tek seviye, kayma olmadan, kök basısı)", "Vertebral Kompresyon Kırığı (Yükseklik kaybı, kayma yok)", "Ankilozan Spondilit (Andersson lezyonu, psödoartroz)"],
        "goldStandard": "BT (Sagittal + Aksiyel): Pars defekti ve kayma derecesi. MRI: Sinir kökü basısı, disk patolojisi, kord değerlendirmesi. Fleksiyon-Ekstansiyon grafisi: Dinamik instabilite.",
        "clinicalPearl": "Genç sporcu (jimnastikçi) + bel ağrısı + L5-S1 pars defekti = İstmik spondilolistezis. Yaşlı hasta + L4-L5 + dar kanal = Dejeneratif spondilolistezis. Meyerding Grade ≥3 = Cerrahi endikasyon.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Spondylolisthesis"
        ]
    },
    {
        "id": "spinal_metastasis",
        "name": "Spinal Metastaz",
        "nameEn": "Spinal Metastasis",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            {
                "url": "/images/spine/spinal_metastasis_sagittal.png",
                "caption": "Sagittal T1: 'Winking Owl' (Pedikül Kaybı) ve Kitle",
                "modality": "MRI"
            }
        ],
        "findings": {
            "mri": {
                "t1": "Vertebra korpusunda normal yağ iliği sinyalinin kaybı (Hipointens). 'Baykuş Gözü' (Pedikül) kaybı (Winking owl sign).",
                "t2": "Değişken, genellikle hiperintens. Patolojik kırık (kompresyon) eşlik eder.",
                "t1_c": "Heterojen kontrastlanma. Epidural/Paraspinal uzanım.",
                "stir": "Yağ baskılı serilerde belirgin hiperintensite (ödem/tümör)."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "Loss of normal fatty marrow signal in vertebral body (Hypointense). Loss of pedicle ('Winking Owl' sign).",
                "t2": "Variable, usually hyperintense. Associated pathologic fracture (compression).",
                "t1_c": "Heterogeneous enhancement. Epidural/Paraspinal extension.",
                "stir": "Marked hyperintensity on fat-suppressed sequences (edema/tumor)."
            }
        },
        "keyPoints": [
            "En sık kemik metastaz kaynağı: Meme, Prostat, Akciğer.",
            "Torakal bölge en sık tutulur.",
            "Kortikal yıkım varsa BT daha duyarlıdır."
        ],
        "keyPointsEn": [
            "Most common sources of bone metastasis: Breast, Prostate, Lung.",
            "Thoracic region is most frequently affected.",
            "CT is more sensitive if cortical destruction is present."
        ],
        "mechanism": "Primer tümör hematojen yayılımla Batson pleksusundan (vertebral venöz pleksus) vertebra kemik iliğine ulaşır → trabeküler yıkım. Osteolitik (akciğer, böbrek, tiroid, melanom) vs osteoblastik (prostat, meme). Normal yağ iliği yerini tümör hücreleri aldığı için T1'de hipointens (yağ sinyali kaybolur). STIR sekansında su içeriği arttığı için parlak sinyal verir.",
        "etiology": "Hematojen yayılım (Batson venöz pleksusu): Meme, Prostat, Akciğer, Böbrek, Tiroid (en sık 5 kaynak). Osteolitik: Akciğer, Böbrek, Tiroid, Melanom. Osteoblastik: Prostat, Meme (tedavi sonrası).",
        "differentialDiagnosis": ["Osteoporotik Kompresyon Kırığı (T1 normal sinyal korunur, posterior eleman sağlam)", "Vertebral Osteomiyelit/Spondilodiskit (Disk tutulumu, end-plate erozyonu, klinik enfeksiyon)", "Multipl Miyelom (Yaygın T1 hipointensite, 'rain drop skull', M-protein)", "Lenfoma (DWI kısıtlanma belirgin, homojen infiltrasyon)", "Hemanjiom (T1 VE T2 hiperintens, polka dot)"],
        "goldStandard": "MRI Tüm Omurga (Sagittal T1, T2, STIR, T1+K): Multipl lezyonlar, pedikül tutulumu, epidural uzanım. BT: Kortikal destrüksiyon. PET-BT: Evreleme ve tedavi yanıtı.",
        "clinicalPearl": "Vertebra T1 hipointens + pedikül kaybı (Winking Owl) + gece ağrısı = Metastaz düşün. Osteoporotik kırıktan ayırt: Metastazda posterior eleman tutulumu ve konveks posterior duvar bulgusu var, STIR'da sinyal artışı belirgin.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Back Pain — Cancer Suspected. American College of Radiology.",
            "Radiopaedia.org - Spinal metastases"
        ]
    },
    {
        "id": "spinal_trauma_burst",
        "name": "Burst (Patlama) Kırığı",
        "nameEn": "Burst Fracture",
        "category": "Travma",
        "categoryEn": "Trauma",
        "gallery": [
            {
                "url": "/images/spine/burst_fracture_ct.png",
                "caption": "Sagittal BT: L1 Patlama Kırığı ve Retropulsiyon",
                "modality": "CT"
            }
        ],
        "findings": {
            "ct": {
                "bone_window": "Vertebra korpusunun hem ön hem arka kolonunun kırılması. Arka duvarın spinal kanala doğru retropulsiyonu (taşması).",
                "sagittal": "Yükseklik kaybı, kifotik açılanma."
            },
            "mri": {
                "t2": "Kord ödemi/kontüzyonu varlığının değerlendirilmesi.",
                "stir": "Posterior ligaman kompleks (PLC) hasarı (Hiperintensite) açısından kritiktir."
            }
        },
        "findingsEn": {
            "ct": {
                "bone_window": "Fracture involving both anterior and posterior columns of vertebral body. Retropulsion of posterior wall into spinal canal.",
                "sagittal": "Height loss, kyphotic angulation."
            },
            "mri": {
                "t2": "Evaluation for cord edema/contusion.",
                "stir": "Critical for assessing Posterior Ligamentous Complex (PLC) injury (Hyperintensity)."
            }
        },
        "keyPoints": [
            "Stabilite için TLICS sınıflaması kullanılır.",
            "Nörolojik defisit riski yüksektir.",
            "Kompresyon kırığından farkı: Arka duvar ve arka kolon tutulumudur."
        ],
        "keyPointsEn": [
            "TLICS classification is used for stability.",
            "High risk of neurological deficit.",
            "Distinction from compression fracture: Involvement of posterior wall and posterior column."
        ],
        "mechanism": "Yüksek enerjili aksiyel yüklenme (suyun yüzeyine ayak dibi ile düşme, trafik kazası) → vertebra korpusunun santral çökmesi → her iki korteksin kırılması → kemik parçacıklarının spinal kanala retropulsiyonu. Dennis'in üç kolon modeli: Orta ve arka kolon birlikte tutulunca kord basısı ve nörolojik hasar riski artar; bu burst kırığını kompresyon kırığından ayırır.",
        "etiology": "Yüksek enerjili travma: Yüksekten düşme (aksiyel yüklenme), trafik kazası, dalma yaralanması. Torakolomber bileşke (T12-L2) en sık tutulan bölge.",
        "differentialDiagnosis": ["Kompresyon Kırığı (Yalnızca ön kolon tutulumu, arka duvar sağlam)", "Chance Kırığı (Fleksiyon-distraksiyon, horizontal kırık hattı, emniyet kemeri)", "Patolojik Kırık (Altta yatan tümör/metastaz, minimal travma)", "Osteoporotik Kırık (Yaşlı, düşük enerjili, arka duvar genellikle sağlam)"],
        "goldStandard": "BT (Sagittal + Aksiyel + Koronal reformat): Kırık hattı, retropulsiyon, kanal daralma oranı. MRI: PLC hasarı (STIR), kord kontüzyonu (T2). TLICS skoru cerrahi karar için kullanılır.",
        "clinicalPearl": "Burst kırığında arka duvar retropulsiyonu + PLC hasarı (MRI STIR'da hiperintensite) = İnstabil kırık → cerrahi. TLICS skoru ≥5 = Cerrahi endikasyon. Kompresyon kırığından farkı: Arka duvar kırığı ve retropulsiyon varlığıdır.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Suspected Spine Trauma. American College of Radiology.",
            "Radiopaedia.org - Burst fracture"
        ]
    },
    {
        "id": "cervical_disc_herniation",
        "name": "Servikal Disk Hernisi (Boyun Fıtığı)",
        "nameEn": "Cervical Disc Herniation",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
        "findings": {
            "mri": {
                "t2": "Disk T2 sinyalinde azalma (dejenerasyon). Posterior/posterolateral disk çıkıntısı. Kord basısı varsa: Miyelopati bulguları (T2'de kord içi hiperintensite - 'Snake eye' veya 'Pencil-like' görünüm).",
                "t1": "Epidural yağ mesafesinin silinmesi. Disk-osteofil kompleksi anterior veya posterior.",
                "sagittal": "C5-C6 ve C6-C7 en sık etkilenen seviyeler. Disk yükseklik kaybı. Retrolistezis eşlik edebilir.",
                "axial": "Foraminal daralma, sinir kökü basısı. Kord kompresyonu değerlendirmesi.",
                "t2_flair": "Miyelopati değerlendirmesi için STIR veya T2 tercih edilir."
            },
            "ct": {
                "non_contrast": "Kalsifiye disk (sert disk). Osteofitler (spondiloz). Foraminal daralma.",
                "bone_window": "Uncovertebral artropati, faset dejenerasyonu."
            }
        },
        "findingsEn": {
            "mri": {
                "t2": "Decreased T2 disc signal (degeneration). Posterior/posterolateral disc protrusion. If cord compression: Myelopathy signs (intramedullary hyperintensity on T2 - 'Snake eye' or 'Pencil-like' appearance).",
                "t1": "Effacement of epidural fat. Disc-osteophyte complex anteriorly or posteriorly.",
                "sagittal": "C5-C6 and C6-C7 are most commonly affected levels. Disc height loss. Retrolisthesis may be associated.",
                "axial": "Foraminal narrowing, nerve root compression. Evaluation of cord compression.",
                "t2_flair": "STIR or T2 preferred for myelopathy evaluation."
            },
            "ct": {
                "non_contrast": "Calcified disc (hard disc). Osteophytes (spondylosis). Foraminal narrowing.",
                "bone_window": "Uncovertebral arthropathy, facet degeneration."
            }
        },
        "keyPoints": [
            "Miyelopatik bulgular (El beceriksizliği, yürüme bozukluğu, hiperrefleksi): Cerrahi endikasyon.",
            "Radikülopati: Dermatomal ağrı ve güçsüzlük (C6: Başparmak, C7: Orta parmak).",
            "MRI'da kord sinyal değişikliği: Miyelomalaziyi gösterir (kötü prognoz).",
            "Ayırıcı tanı: OPLL (Posterior Longitudinal Ligaman Ossifikasyonu), Servikal stenoz."
        ],
        "keyPointsEn": [
            "Myelopathic signs (Clumsiness, gait disturbance, hyperreflexia): Surgical indication.",
            "Radiculopathy: Dermatomal pain and weakness (C6: Thumb, C7: Middle finger).",
            "Cord signal change on MRI: Indicates myelomalacia (poor prognosis).",
            "Differential diagnosis: OPLL (Ossification of Posterior Longitudinal Ligament), Cervical stenosis."
        ],
        "mechanism": "Servikal bölgede disk dejenerasyonu → nükleus pulpozus herniyasyonu veya disk-osteofil kompleksi oluşumu → posterior/posterolateral bası → sinir kökü basısı (radikülopati) veya kord kompresyonu (miyelopati). Lomber disk hernisinden farklı olarak dar kanal alanı nedeniyle küçük bir herninin bile kord basısına yol açabileceği unutulmamalı. Unkovertebral artropati foraminal stenoza ek katkı sağlar.",
        "etiology": "Dejeneratif (yaşlanma, tekrarlayan travma). Akut travma (whiplash). Unkovertebral artropati ve faset artrozu foraminal daralma yapar. C5-C6 ve C6-C7 en sık tutulan seviyeler (en fazla hareket eden segmentler).",
        "differentialDiagnosis": ["OPLL — Posterior Longitudinal Ligaman Ossifikasyonu (BT'de kalsifikasyon, Asyalılarda sık)", "Servikal Spondilotik Miyelopati (Yaygın spondiloz, multipl seviye)", "Servikal İntramedüller Tümör (Kord ekspansiyonu, kontrastlanma)", "Transvers Miyelit (İnflamatuvar, BOS bulguları)", "Brakiyal Pleksopati (Pancoast tümörü, travma — Servikal MRI normal)"],
        "goldStandard": "MRI (Sagittal + Aksiyel T2, T1, T2*GRE): Disk hernisi, kord basısı, miyelopati sinyal değişikliği. BT: Kalsifiye disk (sert disk) ve OPLL değerlendirmesi. EMG: Radikülopati konfirmasyonu.",
        "clinicalPearl": "Servikal miyelopati bulguları (el beceriksizliği, yürüme bozukluğu, hiperrefleksi, Babinski +) = Cerrahi endikasyon. Kord içi T2 sinyal artışı = Miyelomalazi (kötü prognoz, geri dönüşümsüz). C5-C6: C6 kökü (başparmak uyuşması, biseps zayıflığı), C6-C7: C7 kökü (orta parmak, triseps zayıflığı).",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Fardon DF et al. Lumbar disc nomenclature: version 2.0. Spine J. 2014;14(11):2525-2545.",
            "ACR Appropriateness Criteria: Myelopathy. American College of Radiology.",
            "Radiopaedia.org - Cervical disc herniation"
        ]
    },
    {
        "id": "schmorl_nodule",
        "name": "Schmorl Nodülü",
        "nameEn": "Schmorl Node",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
        "findings": {
            "mri": {
                "t1": "Vertebra end-plate'e doğru fokal disk hernisi. Akut: Çevre ödem (hipointens). Kronik: Sklerotik halka.",
                "t2": "Akut: End-plate ödem (hiperintens). Kronik: Reaktif skleroz (hipointens). Disk materyali değişken sinyal.",
                "stir": "Akut evrede belirgin ödem. Kronik evrede ödem kaybolur.",
                "sagittal": "End-plate'te fokal defekt ve disk hernisi visualizasyonu."
            },
            "ct": {
                "bone_window": "End-plate irregülaritesi. Sklerotik halka (kronik). Multipl lezyonlar olabilir."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "Focal disc herniation into vertebral end-plate. Acute: Surrounding edema (hypointense). Chronic: Sclerotic rim.",
                "t2": "Acute: End-plate edema (hyperintense). Chronic: Reactive sclerosis (hypointense). Disc material signal variable.",
                "stir": "Marked edema in acute phase. Edema resolves in chronic phase.",
                "sagittal": "Visualization of focal defect in end-plate and disc herniation."
            },
            "ct": {
                "bone_window": "End-plate irregularity. Sclerotic rim (chronic). Multiple lesions may be present."
            }
        },
        "keyPoints": [
            "Genellikle insidental bulgu. Ağrı ile ilişki tartışmalı.",
            "Modic değişiklikleri eşlik edebilir: Tip 1 (ödem), Tip 2 (yağ), Tip 3 (skleroz).",
            "Akut Schmorl nodülü: Ağrı kaynağı olabilir.",
            "Scheuermann hastalığı: Multipl Schmorl nodülleri + kifoz."
        ],
        "keyPointsEn": [
            "Usually an incidental finding. Relation to pain is controversial.",
            "May be associated with Modic changes: Type 1 (edema), Type 2 (fat), Type 3 (sclerosis).",
            "Acute Schmorl node: Can be a source of pain.",
            "Scheuermann's disease: Multiple Schmorl nodes + kyphosis."
        ],
        "mechanism": "Zayıflamış vertebral end-plate + aniden artan aksiyel yük → nükleus pulpozusun end-plate korteksini delerek vertebra spongioza dokusu içine herniyasyonu. End-plate kıkırdağının konjenital zayıflığı (Scheuermann hastalığı) ya da osteoporoz zemin hazırlar. Akut fazda çevre kemikte ödem/vasküler tepki (Modic Tip 1), kronik fazda reaktif skleroz (Modic Tip 3) oluşur.",
        "etiology": "Dejeneratif (end-plate zayıflaması). Scheuermann hastalığı (konjenital end-plate anomalisi). Osteoporoz. Travma (aksiyel yüklenme). Torakolomber bileşke en sık lokalizasyon.",
        "differentialDiagnosis": ["Modic Değişiklikleri (End-plate'e sınırlı sinyal değişikliği, disk hernisi yok)", "Vertebral Metastaz (Fokal kitle, T1 hipointens, kortikal destrüksiyon)", "Spondilodiskit (Disk tutulumu, iki komşu vertebra, kontrastlanma)", "Limbus Vertebra (Anterior end-plate köşe defekti, dejeneratif)"],
        "goldStandard": "MRI (Sagittal T1, T2, STIR): End-plate defekti ve çevre ödem değerlendirmesi. BT: End-plate irregülaritesi ve sklerotik halka. Akut vs kronik ayrımı STIR ile yapılır.",
        "clinicalPearl": "Çoğu insidental ve asemptomatik — raporda not et, panik yapma. STIR'da çevre ödem varsa = Akut Schmorl nodülü (ağrı kaynağı olabilir). Multipl Schmorl nodülleri + kifoz + düzensiz end-plate = Scheuermann hastalığı düşün.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Schmorl node"
        ]
    },
    {
        "id": "facet_arthropathy",
        "name": "Faset Artropatisi (Faset Sendromu)",
        "nameEn": "Facet Arthropathy (Facet Syndrome)",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
        "findings": {
            "mri": {
                "t2": "Faset eklem hipertrofisi. Eklem effüzyonu (hiperintens). Sinovyal kist oluşumu (lateral resess basısı yapabilir).",
                "t1": "Faset sklerozisi (hipointens). Yağlı dejenerasyon.",
                "axial": "Faset genişlemesi ve açılanma değişikliği. Ligamentum flavum hipertrofisi eşlik eder.",
                "stir": "Aktif inflamasyon varsa ödem."
            },
            "ct": {
                "bone_window": "Faset hipertrofisi. Osteofit formasyonu. Vakum fenomeni (gaz birikimi - ileri dejenerasyon).",
                "axial": "Faset subluksasyonu. Kanal ve foramen daralması."
            }
        },
        "findingsEn": {
            "mri": {
                "t2": "Facet joint hypertrophy. Joint effusion (hyperintense). Synovial cyst formation (may cause lateral recess compression).",
                "t1": "Facet sclerosis (hypointense). Fatty degeneration.",
                "axial": "Facet enlargement and angulation change. Associated with ligamentum flavum hypertrophy.",
                "stir": "Edema if active inflammation is present."
            },
            "ct": {
                "bone_window": "Facet hypertrophy. Osteophyte formation. Vacuum phenomenon (gas accumulation - advanced degeneration).",
                "axial": "Facet subluxation. Narrowing of canal and foramen."
            }
        },
        "keyPoints": [
            "Klinik: Bel ağrısı, ekstansiyonda artan, fleksiyonda azalan.",
            "Lomber lordoz artışı riski: Posterior element yükü artar.",
            "Sinovyal kist: Lateral resess stenozu ve radikülopati yapabilir.",
            "Faset bloğu ve ablasyon: Tanı ve tedavi amaçlı kullanılır."
        ],
        "keyPointsEn": [
            "Clinical: Lower back pain, worsened by extension, relieved by flexion.",
            "Increased lumbar lordosis risk: Increases load on posterior elements.",
            "Synovial cyst: Can cause lateral recess stenosis and radiculopathy.",
            "Facet block and ablation: Used for diagnosis and treatment."
        ],
        "mechanism": "Faset (zigapofiziyel) eklem artrozisi: Disk yüksekliği azaldıkça faset ekleme binen yük artar → kıkırdak dejenerasyonu → kemik subkondral değişiklikler → osteofitler → eklem kapsülü ve çevredeki sinoviyal membranın kalınlaşması. Sinoviyal kist: Kronik irritasyon → sinoviyal sıvının eklem kapsülü zayıf noktasından herniyasyonu → lateral recess veya foramene bası yapabilir.",
        "etiology": "Dejeneratif (en sık): Disk yükseklik kaybına sekonder artan faset yükü. Travmatik: Faset kırığı/subluksasyonu. İnflamatuvar: Romatoid artrit, ankilozan spondilit. Lomber bölge en sık tutulur (L4-L5, L5-S1).",
        "differentialDiagnosis": ["Disk Hernisi (Radiküler ağrı, fleksiyonda artar, SLR +)", "Sakroiliak Eklem Disfonksiyonu (FABER testi +, SI bölgede hassasiyet)", "Lomber Spinal Stenoz (Bilateral kladikasyo, disk + faset + ligaman)", "Piriformis Sendromu (Gluteal ağrı, piriformis germe testi +)", "Vertebral Kompresyon Kırığı (Akut ağrı, osteoporoz)"],
        "goldStandard": "MRI (Aksiyel + Sagittal T2): Faset hipertrofisi, effüzyon, sinoviyal kist. BT: Faset sklerozisi, osteofit, vakum fenomeni. Tanısal faset blokajı: Ağrı kaynağı konfirmasyonu.",
        "clinicalPearl": "Bel ağrısı + ekstansiyonda artış + fleksiyonda rahatlama + paraspinal hassasiyet = Faset artropatisi düşün. Sinoviyal kist lateral resess stenozu yapıyorsa radikülopati olabilir — disk hernisi ile karışabilir.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Low Back Pain. American College of Radiology.",
            "Radiopaedia.org - Facet joint arthropathy"
        ]
    },
    {
        "id": "spinal_ependymoma",
        "name": "Spinal Ependimom (İntrameduller)",
        "nameEn": "Spinal Ependymoma (Intramedullary)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            {
                "url": "/images/spine/ependymoma_sagittal.png",
                "caption": "Sagittal T2: Kord İçi (İntramedüller) Ependimom",
                "modality": "MRI"
            }
        ],
        "findings": {
            "mri": {
                "t1": "Korda ekspansiyon yapan izointens/hipointens kitle. Polar kistler (tümör üst/altında siringomiyeli benzeri).",
                "t2": "Santral yerleşimli, iyi sınırlı, homojen HİPERİNTENS kitle. 'Cap sign': Kranyal ve kaudal hemosiderin (hipointens) - Patognomonik.",
                "t1_c": "Yoğun, HOMOJEn kontrastlanma. Sınırlar net, cerrahi için elverişli.",
                "stir": "Tümör ve çevre ödem değerlendirmesi.",
                "location": "En sık: Konus medullaris, Filum terminale (Miksopapiller tip). Servikal > Torakal."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "Isointense/hypointense mass expanding the cord. Polar cysts (syrinx-like cysts above/below tumor).",
                "t2": "Centrally located, well-defined, homogeneous HYPERINTENSE mass. 'Cap sign': Cranial and caudal hemosiderin (hypointense) - Pathognomonic.",
                "t1_c": "Intense, HOMOGENEOUS enhancement. Clear margins, favorable for surgery.",
                "stir": "Evaluation of tumor and surrounding edema.",
                "location": "Most common: Conus medullaris, Filum terminale (Myxopapillary type). Cervical > Thoracic."
            }
        },
        "keyPoints": [
            "Erişkinlerde en sık intrameduller spinal tümör.",
            "'Cap sign' (hemosiderin) ependimom için patognomonik.",
            "Miksopapiller ependimom: Filum terminale, BOS yoluyla yayılım riski.",
            "Cerrahi: Tam rezeksiyon mümkün (iyi sınırlı)."
        ],
        "keyPointsEn": [
            "Most common intramedullary spinal tumor in adults.",
            "'Cap sign' (hemosiderin) is pathognomonic for ependymoma.",
            "Myxopapillary ependymoma: Filum terminale, risk of CSF seeding.",
            "Surgery: Gross total resection is possible (well-defined)."
        ],
        "mechanism": "Ependimal hücrelerden (spinal kanalın santral kanalını ve ventriküllerini döşeyen hücreler) köken alan WHO Grade 2 tümör. Tümöre ait kanama→hemosiderin birikimi (cap sign); polar kistler ependimal hasar ve BOS birikmesiyle oluşur. Konus ve filum terminale lokalizasyonu: Bu bölgelerde geniş ependimal hücre rezervuarı bulunur. İyi sınırlı yapısı cerrahi tam rezeksiyona olanak tanır.",
        "etiology": "Ependimal hücrelerden köken alan WHO Grade 2 neoplazmlar. Sporadik veya NF2 ilişkili (NF2'de multipl olabilir). Erişkinlerde en sık intramedüller tümör. Miksopapiller alt tip: Filum terminale/konus lokalizasyonu.",
        "differentialDiagnosis": ["Spinal Astrositom (İnfiltratif, sınırları belirsiz, eksantrik, heterojen kontrastlanma)", "Hemanjioblastom (Mural nodül + kist, Von Hippel-Lindau sendromu)", "Metastaz (Multipl, hızlı büyüme, kord dışı tutulum baskın)", "Gangliogliom (Nadir, kalsifikasyon olabilir, genç yaş)"],
        "goldStandard": "Kontrastlı MRI (Sagittal + Aksiyel T1+K, T2): Santral, iyi sınırlı, homojen kontrastlanan kitle + cap sign + polar kistler. T2* GRE: Hemosiderin (cap sign) duyarlılığı artırır.",
        "clinicalPearl": "'Cap sign' (hemosiderin) gördüğünde ependimom düşün — astrositomda bu bulgu yoktur. Homojen kontrastlanma + iyi sınırlı = Ependimom (cerrahi rezeksiyon uygun). Heterojen + infiltratif = Astrositom (cerrahi zor).",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Spinal ependymoma"
        ]
    },
    {
        "id": "spinal_schwannoma",
        "name": "Spinal Schwannom (Nörilemmoma)",
        "nameEn": "Spinal Schwannoma (Neurilemmoma)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            {
                "url": "/images/spine/schwannoma_axial.png",
                "caption": "Aksiyel T1+C: 'Dumbbell' (Kum Saati) Şekilli Tümör",
                "modality": "MRI"
            }
        ],
        "findings": {
            "mri": {
                "t1": "İzointens veya hafif hipointens kitle. Foraminal genişleme.",
                "t2": "HETEROJEn hiperintens (Antoni A/B alanları). 'Target sign': Santral hipointens, periferal hiperintens.",
                "t1_c": "Yoğun kontrastlanma. Kistik/nekrotik alanlar kontrastlanmaz.",
                "axial": "Foraminal genişleme (kemik remodeling). 'Dumbbell' konfigürasyonu: Hem intradural hem ekstradural uzanım."
            },
            "ct": {
                "bone_window": "Neural foramen genişlemesi. Kemik erozyonu (yavaş büyüyen)."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "Isointense or slightly hypointense mass. Foraminal widening.",
                "t2": "HETEROGENEOUS hyperintense (Antoni A/B areas). 'Target sign': Central hypointense, peripheral hyperintense.",
                "t1_c": "Intense enhancement. Cystic/necrotic areas do not enhance.",
                "axial": "Foraminal widening (bone remodeling). 'Dumbbell' configuration: Both intradural and extradural extension."
            },
            "ct": {
                "bone_window": "Neural foramen enlargement. Bone erosion (slow growing)."
            }
        },
        "keyPoints": [
            "En sık intradural-ekstramedüller spinal tümör.",
            "Nörofibromdan farkı: Eksentrik yerleşim, fokal, tek sinir kökü.",
            "NF2'de bilateral vestibüler schwannom + multipl spinal schwannom.",
            "'Dumbbell' tümör: Foramenı genişleterek hem kanal içi hem dışına uzanır."
        ],
        "keyPointsEn": [
            "Most common intradural-extramedullary spinal tumor.",
            "Distinction from Neurofibroma: Eccentric location, focal, single nerve root.",
            "In NF2: Bilateral vestibular schwannomas + multiple spinal schwannomas.",
            "'Dumbbell' tumor: Extends both inside and outside the canal by widening the foramen."
        ],
        "mechanism": "Schwann hücrelerinden köken alan benign tümör (WHO Grade 1). Spinal sinir köklerinde (dorsal > ventral) gelişir. Yavaş büyüme → foramen kemik remodelinge uğrar (genişler). Antoni A (hücresel, kompakt) ve Antoni B (miksoid, hücresiz) alanlar arası geçiş → T2 heterojenik hiperintensite ve target sign. NF2'de NF2 geninin (merlin proteini) bialelik inaktivasyonu → multipl schwannom.",
        "etiology": "Schwann hücrelerinden köken alan benign tümör (WHO Grade 1). Sporadik (en sık). NF2 ilişkili (multipl schwannom + bilateral vestibüler schwannom). Schwannomatozis (NF2 negatif, multipl schwannom).",
        "differentialDiagnosis": ["Nörofibrom (Fusiform, sinir merkezinde, NF1 ilişkili, kontrastlanma homojen)", "Menenjiyom (Geniş tabanlı dural temas, dural tail, torasik dominant)", "Spinal Metastaz (Multipl, hızlı büyüme, destrüktif)", "Paragangliom (Filum terminale, vasküler, 'salt and pepper')"],
        "goldStandard": "Kontrastlı MRI (Aksiyel + Sagittal T1+K, T2): Foraminal genişleme + dumbbell konfigürasyon + heterojen T2 hiperintensite + yoğun kontrastlanma. BT: Foramen genişlemesi.",
        "clinicalPearl": "Foraminal genişleme + dumbbell şekil + T2 heterojen hiperintensite (target sign) + yoğun kontrastlanma = Schwannom. Nörofibromda sinir merkezinden (fusiform) büyür; schwannomda sinir eksentrik olarak itilir. Multipl schwannom = NF2 düşün.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Spinal schwannoma"
        ]
    },
    {
        "id": "vertebral_osteomyelitis",
        "name": "Vertebral Osteomiyelit (Spondilodiskit)",
        "nameEn": "Vertebral Osteomyelitis (Spondylodiscitis)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "findings": {
            "mri": {
                "t1": "Vertebra korpusunda ve END-PLATE'lerde HİPO İNTENSİTE (normal yağ sinyali kaybı). İki komşu vertebra tutulumu tipik.",
                "t2": "Vertebra ve disk: HİPERİNTENS sinyal (ödem). Disk yüksekliğinde azalma ve sinyal artışı.",
                "stir": "End-plate ve paraspinal ödem çok belirgin. En duyarlı sekans.",
                "t1_c": "End-plate'lerde, diskte ve paraspinal yumuşak dokuda KONTRASTLANMA. Apse: Halka kontrastlanma.",
                "dwi": "Apse: Merkezi difüzyon KISITLAMASI. Dejeneratif Modic'den FARK.",
                "sagittal": "Karakteristik: İki komşu vertebra + aralarındaki disk tutulumu."
            },
            "ct": {
                "bone_window": "End-plate erozyonu ve destrüksiyon. Disk mesafesi daralması. Sekonder kemik sklerozisi (kronik)."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "HYPOINTENSITY in vertebral body and END-PLATES (loss of normal marrow fat signal). Involvement of two adjacent vertebrae is typical.",
                "t2": "Vertebra and disc: HYPERINTENSE signal (edema). Decreased disc height and increased signal.",
                "stir": "End-plate and paraspinal edema is very prominent. Most sensitive sequence.",
                "t1_c": "ENHANCEMENT in end-plates, disc, and paraspinal soft tissue. Abscess: Ring enhancement.",
                "dwi": "Abscess: Central diffusion RESTRICTION. DISTINCT from degenerative Modic changes.",
                "sagittal": "Characteristic: Involvement of two adjacent vertebrae + intervening disc."
            },
            "ct": {
                "bone_window": "End-plate erosion and destruction. Disc space narrowing. Secondary bone sclerosis (chronic)."
            }
        },
        "keyPoints": [
            "En sık etken: Staph. aureus. TB bölgelerde M. tuberculosis.",
            "Modic Tip 1'den farkı: DWI kısıtlanma, kontrastlanma paterni, disk tutulumu.",
            "Lomber bölge en sık. Hematojen yayılım (üriner, IV ilaç).",
            "Komplikasyonlar: Epidural apse, paraspinal apse, patolojik kırık."
        ],
        "keyPointsEn": [
            "Most common agent: Staph. aureus. M. tuberculosis in endemic areas.",
            "Distinction from Modic Type 1: DWI restriction, enhancement pattern, disc involvement.",
            "Lumbar region most common. Hematogenous spread (urinary, IV drugs).",
            "Complications: Epidural abscess, paraspinal abscess, pathologic fracture."
        ],
        "mechanism": "Hematojen bakteriyemi (S. aureus, Klebsiella) → vertebral metafizer bölge arteriyollerinde tutulma → end-plate vasküler hasar → disk avasküleri nedeniyle disk başlangıçta korunur → ilerleme sonucu disk katılımı. İki komşu vertebranın end-plate'lerinin simetrik tutulumu tipiktir (disk ortak besleme alanı). Enfeksiyon ilerledikçe epidural/paraspinal apse oluşabilir.",
        "etiology": "Hematojen yayılım (en sık): S. aureus (%50-70), Gram-negatif basiller (üriner kaynak). İV ilaç kullanımı, diyabet, immunosupresyon, yakın cerrahi/girişim risk faktörleri. Endemik bölgelerde M. tuberculosis.",
        "differentialDiagnosis": ["Modic Tip 1 Değişiklikleri (Disk sinyali normal/dejeneratif, DWI kısıtlanma yok, kontrastlanma difüz)", "Vertebral Metastaz (Disk korunur, pedikül tutulumu, kilo kaybı)", "Tüberküloz Spondiliti (Disk korunmuş, paraspinal soğuk apse, gibbus, subligamentöz yayılım)", "Nöropatik Artropati — Charcot Spine (DM/Siringomiyeli zemininde, debris, vakum fenomeni)"],
        "goldStandard": "MRI (Sagittal T1, T2, STIR, T1+K, DWI): End-plate erozyonu + disk tutulumu + kontrastlanma + DWI kısıtlanma (apse). BT rehberliğinde biyopsi: Kültür ve duyarlılık testi.",
        "clinicalPearl": "İki komşu vertebrada end-plate erozyonu + disk tutulumu + paraspinal koleksiyon = Spondilodiskit. Modic Tip 1'den farkı: DWI kısıtlanma (apse), disk T2 hiperintens (enfeksiyon), klinik enfeksiyon bulguları (ateş, CRP yüksek).",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Vertebral osteomyelitis"
        ]
    },
    {
        "id": "epidural_abscess_spine",
        "name": "Spinal Epidural Apse",
        "nameEn": "Spinal Epidural Abscess",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "findings": {
            "mri": {
                "t1": "Epidural mesafede İZOİNTENS veya hafif hipointens sıvı koleksiyonu. Kord basısı.",
                "t2": "HİPERİNTENS epidural koleksiyon. Kord ödemi/miyelopati bulguları (T2 hiperintensite).",
                "t1_c": "Periferal HALKA şeklinde kontrastlanma. Merkez kontrastlanmaz (pürülan içerik).",
                "dwi": "Merkezi KISITLANMA (Parlak) - PÜ içeriği. AYIRT EDİCİ ÖZELLİK!",
                "stir": "Çevre ödem ve inflamasyon.",
                "axial": "Teka basısı, kord kompresyonu derecesi. Cerrahi planlama için kritik."
            },
            "ct": {
                "non_contrast": "Epidural yumuşak doku dansitesi. Kemik destrüksiyon (osteomiyelit eşliği).",
                "contrast": "Halka kontrastlanma."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "ISOINTENSE or slightly hypointense fluid collection in epidural space. Cord compression.",
                "t2": "HYPERINTENSE epidural collection. Cord edema/myelopathy signs (T2 hyperintensity).",
                "t1_c": "Peripheral RING-like enhancement. Center does not enhance (purulent content).",
                "dwi": "Central RESTRICTION (Bright) - Pus content. DISTINGUISHING FEATURE!",
                "stir": "Surrounding edema and inflammation.",
                "axial": "Thecal sac compression, degree of cord compression. Critical for surgical planning."
            },
            "ct": {
                "non_contrast": "Epidural soft tissue density. Bone destruction (associated osteomyelitis).",
                "contrast": "Ring enhancement."
            }
        },
        "keyPoints": [
            "NÖROŞİRÜRJİK ACİL! Kord basısı = Acil dekompresyon.",
            "Triad: Ateş + Bel/Sırt ağrısı + Nörolojik defisit.",
            "DWI en önemli sekans: Kısıtlanma = pü konfirme.",
            "Risk faktörleri: IV ilaç kullanımı, DM, immunosupresyon, yakın spinal girişim."
        ],
        "keyPointsEn": [
            "NEUROSURGICAL EMERGENCY! Cord compression = Urgent decompression.",
            "Triad: Fever + Back pain + Neurological deficit.",
            "DWI is the most important sequence: Restriction = pus confirmation.",
            "Risk factors: IV drug use, DM, immunosuppression, recent spinal procedure."
        ],
        "mechanism": "Hematojen yayılım veya komşu vertebra osteomiyelitinden direkt yayılım → epidural mesafede pü birikimi. Visköz pü → su moleküllerinin hareketi kısıtlanır → DWI'da parlak, ADC düşük. Epidural mesafedeki artan basınç → spinal kord ve sinir köklerine kompresyon ve vasküler ischemi → nörolojik hasar. Torasik bölgede kanal dardır, küçük koleksiyonlar bile nörolojik defisit yapabilir.",
        "etiology": "S. aureus (en sık, %60-90). Hematojen yayılım (cilt enfeksiyonu, endokardit, üriner). Direkt yayılım (vertebral osteomiyelit). İatrojenik (spinal cerrahi, epidural kateter, LP). Risk: IV ilaç kullanımı, DM, immunosupresyon.",
        "differentialDiagnosis": ["Epidural Hematom (Antikoagülan, T1 hiperintens subakut, DWI kısıtlanma yok)", "Disk Hernisi (Disk aralığı düzeyinde, kontrastlanma yok, ateş yok)", "Epidural Metastaz (Kemik destrüksiyonu, kontrastlanma solid, DWI farklı)", "Epidural Lipomatozis (Yağ sinyali, steroid kullanımı)"],
        "goldStandard": "ACİL MRI (Sagittal + Aksiyel T1+K + DWI): Halka kontrastlanma + DWI kısıtlanma = Apse konfirme. BT rehberliğinde aspirasyon/drenaj: Kültür ve duyarlılık testi.",
        "clinicalPearl": "Ateş + sırt ağrısı + nörolojik defisit = Spinal epidural apse şüphesi → ACİL MRI iste. DWI kısıtlanma (parlak) pü içeriğini gösterir. 24 saat içinde cerrahi yapılmazsa kalıcı parapleji riski yüksek!",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Spinal epidural abscess"
        ]
    },
    {
        "id": "pott_disease",
        "name": "Tüberküloz Spondiliti (Pott Hastalığı)",
        "nameEn": "Tuberculous Spondylitis (Pott Disease)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "findings": {
            "mri": {
                "t1": "Vertebra tutulumu: T1 hipointens. Multipl vertebra tutulumu (atlayıcı lezyonlar). Anterior vertebra tutulumu ön planda.",
                "t2": "Paraspinal apse (kum saati şeklinde). 'Cold abscess' - düşük inflamasyon. Disk KORUNMUŞ olabilir (Piyojenik'ten FARK).",
                "t1_c": "İnce, düzgün duvar kontrastlanması. Heterojen iç yapı.",
                "stir": "Vertebra ödemi. Paraspinal ve psoas apsesi yayılımı.",
                "sagittal": "Gibbus deformitesi (kifoz). Subligamentöz yayılım (multipl vertebra tutulumu)."
            },
            "ct": {
                "bone_window": "İnce trabeküler destrüksiyon. Paraspinal kalsifikasyon (kronik TB için tipik).",
                "contrast": "Kalın apse duvarı. Çevre rim kontrastlanması."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "Vertebral involvement: T1 hypointense. Multiple vertebral involvement (skip lesions). Anterior vertebral involvement predominates.",
                "t2": "Paraspinal abscess (hourglass shape). 'Cold abscess' - low inflammation. Disc may be PRESERVED (DISTINCTION from Pyogenic).",
                "t1_c": "Thin, smooth wall enhancement. Heterogeneous internal structure.",
                "stir": "Vertebral edema. Spread to paraspinal and psoas abscess.",
                "sagittal": "Gibbus deformity (kyphosis). Subligamentous spread (multiple vertebral involvement)."
            },
            "ct": {
                "bone_window": "Fine trabecular destruction. Paraspinal calcification (typical for chronic TB).",
                "contrast": "Thick abscess wall. Peripheral rim enhancement."
            }
        },
        "keyPoints": [
            "Piyojenik enfeksiyondan farkı: Disk korunmuş, paraspinal apse, yavaş seyir, subligamentöz yayılım.",
            "Torakal ve lomber vertebra en sık. Posterior elementler korunur (piyojenikte tutulabilir).",
            "'Cold abscess': Klasik inflamasyon bulguları olmayan apse.",
            "Gibbus (açısal kifoz) kronik Pott hastalığı için patognomonik."
        ],
        "keyPointsEn": [
            "Difference from pyogenic infection: Disc preserved, paraspinal abscess, slow course, subligamentous spread.",
            "Thoracic and lumbar vertebrae most common. Posterior elements spared (can be involved in pyogenic).",
            "'Cold abscess': Abscess without classic signs of inflammation.",
            "Gibbus (angular kyphosis) is pathognomonic for chronic Pott disease."
        ],
        "mechanism": "M. tuberculosis hematojen yayılım → vertebral ön elemanlar (cisimler) tutulur → yavaş granülomatöz yıkım. Disk enzim salabilecek nötrofil içermediğinden (tüberküloz granülomatöz inflamasyon) disk ileri aşamaya kadar korunur (piyojenik enfeksiyondan fark). Anterior subligamentöz yayılım → multipl vertebra tutulumu. Vertebra ön yüzünde çöküş → kyphosis (gibbus deformitesi). Soğuk apse: Düşük ateş/belirgin inflamasyon yok çünkü granülomatöz tepki lokalize eder.",
        "etiology": "Mycobacterium tuberculosis. Hematojen yayılım (primer akciğer TB'den). Endemik bölgelerde sık. Torakal ve lomber bölge en sık tutulan segmentler. İmmunosupresyon ve HIV risk faktörleri.",
        "differentialDiagnosis": ["Piyojenik Spondilodiskit (Disk erken tutulur, hızlı seyir, yüksek ateş, nötrofil yoğun)", "Brusella Spondiliti (Endemik bölge, düşük ateş, L4-L5 sık, 'parrot beak' osteofitler)", "Vertebral Metastaz (Disk korunur ama posterior element tutulumu var, hızlı seyir)", "Fungal Spondiliti (İmmunosupresyon, yavaş seyir, nadir)"],
        "goldStandard": "MRI (Sagittal T1, T2, STIR, T1+K): Vertebra anterior tutulumu + disk korunmuş + paraspinal soğuk apse + subligamentöz yayılım. BT rehberliğinde biyopsi: ARB boyama, kültür, PCR (Xpert MTB/RIF).",
        "clinicalPearl": "Disk KORUNMUŞ + paraspinal büyük apse + subligamentöz multipl vertebra tutulumu + gibbus = Pott hastalığı (TB spondilit). Piyojenikte disk ERKEN tutulur ve hızlı seyreder. Psoas apsesi TB'de karakteristik — kasık bölgesine yayılabilir.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Tuberculous spondylitis (Pott disease)"
        ]
    },
    {
        "id": "spinal_discitis_osteomyelitis",
        "name": "Spondilodiskitis / Vertebral Osteomiyelit",
        "nameEn": "Spondylodiscitis / Vertebral Osteomyelitis",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "findings": {
            "mri": {
                "t2": "Disk mesafesinde ve komşu vertebra uç plaklarında PARLAK sinyal (ödem/sıvı). Disk yüksekliğinde azalma. Paravertebral/Epidural apse (Hiperintens koleksiyon).",
                "t1": "Konfluent hipointens (karanlık) kemik iliği ödemi (İki komşu vertebra ve disk tutulumu).",
                "t1_c": "Disk ve vertebralarda yoğun diffüz kontrastlanma. Apse varsa çevresel (Rim) boyanma.",
                "dwi": "Apse içinde difüzyon kısıtlılığı (Parlak)."
            },
            "ct": {
                "bone_window": "Geç dönemde vertebral uç plaklarda erozyon (tırtıklı görünüm), destrüksiyon. 'Mirror effect' (karşılıklı yüzeylerde harabiyet)."
            }
        },
        "findingsEn": {
            "mri": {
                "t2": "BRIGHT signal (edema/fluid) in disc space and adjacent vertebral endplates. Decreased disc height. Paravertebral/Epidural abscess (Hyperintense collection).",
                "t1": "Confluent hypointense (dark) marrow edema (Involvement of two adjacent vertebrae and disc).",
                "t1_c": "Intense diffuse enhancement in disc and vertebrae. Peripheral (Rim) enhancement if abscess is present.",
                "dwi": "Diffusion restriction within abscess (Bright)."
            },
            "ct": {
                "bone_window": "Late stage endplate erosion (jagged appearance), destruction. 'Mirror effect' (destruction on opposing surfaces)."
            }
        },
        "keyPoints": [
            "MRI tanıda altın standarttır.",
            "En sık etken S. aureus.",
            "Tüberküloz (Pott hastalığı): Gibbus deformitesi, büyük psoas apseleri, disk nispeten korunur (Skip lesions)."
        ],
        "keyPointsEn": [
            "MRI is the gold standard for diagnosis.",
            "Most common agent is S. aureus.",
            "Tuberculosis (Pott disease): Gibbus deformity, large psoas abscesses, disc relatively preserved (Skip lesions)."
        ],
        "mechanism": "S. aureus hematojen yayılım → vertebral end-plate damarlanması (ağırlıklı olarak diskin beslendiği alanlar) tıkanır → end-plate nekrozu → diskitis. İnfeksiyonun diskte ilerlemesiyle disk yüksekliği azalır ve sinyal artar. Epidural apse: Enfeksiyonun posterior epidural mesafeye yayılması ile oluşur. Piyojenik enfeksiyonun potttan farkı: Disk erken tutulur, nötrofil kökenli proteolitik enzimler diski hızla yıkar.",
        "etiology": "Piyojenik: S. aureus (%50+), Gram-negatif (E. coli, Klebsiella — üriner kaynak). Hematojen yayılım en sık. IV ilaç kullanımı, DM, immunosupresyon risk faktörleri. Postoperatif: S. epidermidis, Propionibacterium. Lomber bölge en sık.",
        "differentialDiagnosis": ["Modic Tip 1 Değişiklikleri (Disk normal/dejeneratif, enfeksiyon klinik bulguları yok, DWI kısıtlanma yok)", "Tüberküloz Spondiliti (Disk korunmuş, paraspinal soğuk apse, gibbus, yavaş seyir)", "Nöropatik Artropati (Charcot Spine) (DM zemininde, debris, vakum fenomeni, ağrısız)", "Dejeneratif Disk Hastalığı (End-plate düzenli, disk vakum fenomeni, ateş/CRP yok)"],
        "goldStandard": "MRI (T1, T2, STIR, T1+K, DWI): İki komşu vertebra end-plate tutulumu + disk sinyal artışı + kontrastlanma. DWI: Apse kısıtlanma gösterir. BT rehberliğinde biyopsi: Kültür (altın standart etiyolojik tanı).",
        "clinicalPearl": "MRI'da iki komşu vertebra end-plate'inde erozyon + aradaki diskte T2 sinyal artışı + paraspinal koleksiyon = Spondilodiskit. 'Mirror image' end-plate erozyonu karakteristik. DWI kısıtlanma varsa apse düşün. Modic Tip 1'den ayırt: Disk T2 parlak + klinik enfeksiyon = Spondilodiskit.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Spondylodiscitis"
        ]
    },
    {
        "id": "modic_changes",
        "name": "Modic Değişiklikleri (Vertebral Endplate)",
        "nameEn": "Modic Changes (Vertebral Endplate)",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
        "findings": {
            "mri": {
                "t1": "Tip 1 (Ödem): Hipointens. Tip 2 (Yağlı): Hiperintens. Tip 3 (Sklerotik): Hipointens.",
                "t2": "Tip 1: Hiperintens (Aktif inflamasyon). Tip 2: İzo/Hiperintens (Sarı ilik). Tip 3: Hipointens (Kemik sklerozu).",
                "t1_c": "Tip 1 değişiklikler kontrast tutabilir (enfeksiyonla karışabilir, ancak disk sağlamdır!)."
            }
        },
        "findingsEn": {
            "mri": {
                "t1": "Type 1 (Edema): Hypointense. Type 2 (Fatty): Hyperintense. Type 3 (Sclerotic): Hypointense.",
                "t2": "Type 1: Hyperintense (Active inflammation). Type 2: Iso/Hyperintense (Yellow marrow). Type 3: Hypointense (Bone sclerosis).",
                "t1_c": "Type 1 changes may enhance (can be confused with infection, but disc is intact!)."
            }
        },
        "keyPoints": [
            "Tip 1 Modic değişiklikleri bel ağrısı ile güçlü ilişkilidir.",
            "Enfeksiyondan farkı: Disk sinyali normaldir veya sadece dejeneredir (Diskitiste disk parlaktır)."
        ],
        "keyPointsEn": [
            "Type 1 Modic changes are strongly associated with low back pain.",
            "Distinction from infection: Disc signal is normal or only degenerative (Disc is bright in discitis)."
        ],
        "mechanism": "Disk dejenerasyonu ve biyomekanik stres → vertebral end-plate mikro-hasarı → reaktif kemik iliği değişiklikleri. Tip 1 (akut/subakut): End-plate kırığı/nekroz + vasküler granülasyon dokusu → T1 hipointens, T2 hiperintens. Tip 2 (kronik): Granülasyon dokusu yerini yağlı ilik dönüşümüne bırakır → T1 hiperintens (yağ sinyali). Tip 3 (ileri kronik): Reaktif kemik sklerozu → T1 ve T2 hipointens.",
        "etiology": "Dejeneratif disk hastalığına sekonder end-plate mikro-hasarı. Biyomekanik stres ve aksiyel yüklenme. Disk dejenerasyonu → end-plate mikro-kırıkları → reaktif kemik iliği değişiklikleri. Lomber bölge en sık (L4-L5, L5-S1).",
        "differentialDiagnosis": ["Spondilodiskit (Disk T2 hiperintens + end-plate erozyon + kontrastlanma + ateş/CRP)", "Vertebral Metastaz (Fokal kitle, pedikül tutulumu, kortikal destrüksiyon)", "Vertebral Hemanjiom (T1 VE T2 hiperintens, polka dot)", "Paget Hastalığı (Vertebra genişlemesi, kalın korteks, 'picture frame')"],
        "goldStandard": "MRI (Sagittal T1, T2): End-plate sinyal değişiklikleri paterni (Tip 1/2/3). Kontrastlı MRI: Tip 1 kontrastlanabilir — enfeksiyonla karışabilir, DWI ve klinik korelasyon gerekir. BT: End-plate sklerozisi (Tip 3).",
        "clinicalPearl": "Modic Tip 1 (T1 karanlık, T2 parlak) = Aktif inflamasyon = Bel ağrısı ile en çok ilişkili tip. Spondilodiskitten ayırt: Modic'te disk sinyali NORMAL veya dejeneratif, spondilodiskitte disk T2'de PARLAK. Tip 1→Tip 2→Tip 3 doğal seyir olabilir (akut→kronik).",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Modic changes"
        ]
    },
    {
        "id": "spondylolysis",
        "name": "Spondilolizis ve Listezis (Bel Kayması)",
        "nameEn": "Spondylolysis and Listhesis",
        "category": "Travma / Dejeneratif",
        "categoryEn": "Trauma / Degenerative",
        "findings": {
            "ct": {
                "bone_window": "Pars interartikulariste defekt (kırık hattı). 'İskoç Köpeği' (Scotch Terrier) boynu kırık görünümü. Grade 1-4 kayma (Meyerding).",
                "sagittal": "Vertebra korpusunun bir alt seviyeye göre öne (anterolistezis) veya arkaya (retrolistezis) yer değiştirmesi."
            },
            "mri": {
                "t2": "Pars defekti çevresinde ödem (Akut stres reaksiyonu). Genişlemiş spinal kanal (Lizise bağlıysa) veya dar kanal (Dejeneratifse).",
                "sagittal": "Foraminal stenoz (Sinir kökü basısı)."
            }
        },
        "findingsEn": {
            "ct": {
                "bone_window": "Defect in pars interarticularis (fracture line). 'Scottie Dog' (Scotch Terrier) neck fracture appearance. Grade 1-4 slippage (Meyerding).",
                "sagittal": "Anterior (anterolisthesis) or posterior (retrolisthesis) displacement of vertebral body relative to the one below."
            },
            "mri": {
                "t2": "Edema around pars defect (Acute stress reaction). Widened spinal canal (if Lytic) or narrow canal (if Degenerative).",
                "sagittal": "Foraminal stenosis (Nerve root compression)."
            }
        },
        "keyPoints": [
            "Genç sporcularda (jimnastik) L5-S1 en sık (%90).",
            "Spondilolizis: Pars defekti.",
            "Spondilolistezis: Kayma.",
            "İstmik (Litik) tipte kanal genişler, Dejeneratif tipte kanal daralır."
        ],
        "keyPointsEn": [
            "Most common at L5-S1 in young athletes (gymnastics) (90%).",
            "Spondylolysis: Pars defect.",
            "Spondylolisthesis: Slippage.",
            "Canal widens in Isthmic (Lytic) type, narrows in Degenerative type."
        ],
        "mechanism": "Tekrarlayan hiperextansiyon ve rotasyon kuvvetleri → pars interartikülaris'te stres kırığı (spondilolizis). Pars, hem faset eklemi hem de disk dejenerasyonunun yükünü taşıyan narin bir kemik köprüdür. İki taraflı pars kırığı → vertebra korpusunun posterior elementlerden ayrışması → anteriorlistezis (kayma). İstmik tipte: Kırık parçalar arasındaki mesafe artar ve spinal kanal genişler (dejeneratif stenozdaki daralmanın aksine).",
        "etiology": "Stres kırığı: Tekrarlayan hiperextansiyon (jimnastik, futbol, halter). L5 en sık tutulan vertebra (%90). Genetik predispozisyon (ailesel yatkınlık). Genç sporcularda (10-15 yaş) en sık sırt ağrısı nedenlerinden biri.",
        "differentialDiagnosis": ["Faset Artropatisi (Faset hipertrofisi, posterior ağrı, kayma yok)", "Lomber Strain (Kas-ligaman yaralanması, MRI'da pars defekti yok)", "Lomber Disk Hernisi (Radiküler semptomlar, pars sağlam)", "Spinal Tümör (Gece ağrısı, kemik destrüksiyonu, kilo kaybı)", "Spondilolistezis (Pars defektine sekonder kayma — ek tanı)"],
        "goldStandard": "BT (İnce kesit aksiyel + sagittal reformat): Pars interartikülaris defekti ('İskoç köpeği boyun kırığı'). MRI (STIR/T2): Pars çevresinde kemik ödemi (akut stres reaksiyonu). SPECT/BT: Aktif kemik metabolizması tespiti (stres reaksiyonu vs kronik defekt).",
        "clinicalPearl": "Genç sporcu (jimnastik, futbol) + bel ağrısı + hiperextansiyonda artan ağrı + L5 pars defekti = Spondilolizis. Oblik grafide 'İskoç köpeği boyun kırığı' görünümü. Aktif stres reaksiyonu (MRI ödemi +) = İstirahat ve breys ile iyileşme şansı var. Kronik defekt = İyileşme beklenmez.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Low Back Pain. American College of Radiology.",
            "Radiopaedia.org - Spondylolysis"
        ]
    },
    {
        "id": "transverse_myelitis",
        "name": "Transvers Miyelit",
        "nameEn": "Transverse Myelitis",
        "category": "İnflamatuar",
        "categoryEn": "Inflammatory",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "MRI Sagittal T2 - Kord İçi Hiperintensite", "modality": "MRI" },
            { "url": "/images/placeholder_source.png", "caption": "MRI Aksiyel T2 - Merkezi Lezyon", "modality": "MRI" }
        ],
        "findings": {
            "mri": {
                "t2": "Spinal kord içinde T2 hiperintens lezyon: Longitüdinal uzanım ≥3 vertebra segmenti (LETM — Longitudinally Extensive Transverse Myelitis) → Nöromiyelitis Optika Spektrumu (NMOSD) şüphesi. Kısa (<2 seg): Multipl Skleroz, MS lezyonu. Santral tutulum: Gri madde ağırlıklı (NMO, MS). Periferik tutulum: Vasküler etiyoloji.",
                "t1_c": "Aktif evrede kontrast tutulumu (açık lezyon = gadolinium +). Genellikle lezyon kord şişmesi ile birliktedir.",
                "other_sequences": "DWI: Vasküler miyelopati ayırımında (iskemik → kısıtlanma var). Beyin MRI: MS veya NMO ayrımı için mutlaka değerlendir."
            }
        },
        "findingsEn": {
            "mri": {
                "t2": "T2 hyperintense lesion within spinal cord: Longitudinal extension ≥3 vertebral segments (LETM) → Neuromyelitis Optica Spectrum Disorder (NMOSD) suspicion. Short (<2 seg): Multiple Sclerosis lesion. Central involvement: Gray matter predominant (NMO, MS). Peripheral: Vascular etiology.",
                "t1_c": "Gadolinium enhancement in active phase (open lesion = gadolinium +). Usually with cord swelling.",
                "other_sequences": "DWI: Distinguishing vascular myelopathy (ischemic → restriction present). Brain MRI: Must evaluate for MS vs NMO differentiation."
            }
        },
        "keyPoints": [
            "LETM (≥3 segment): NMOSD (Nöromiyelitis Optika) → AQP4-IgG veya MOG-IgG test et.",
            "Kısa lezyon (<2 segment): Multipl Skleroz plaği.",
            "Lezyon santral gri maddede: NMO, iskemik. Periferik beyaz maddede: MS.",
            "Kontrast tutulumu: Aktif lezyon — high dose steroid tedavisi."
        ],
        "keyPointsEn": [
            "LETM (≥3 segments): NMOSD → Test AQP4-IgG or MOG-IgG.",
            "Short lesion (<2 segments): Multiple Sclerosis plaque.",
            "Central gray matter lesion: NMO, ischemic. Peripheral white matter: MS.",
            "Gadolinium enhancement: Active lesion — high dose steroid treatment."
        ],
        "mechanism": "İnflamatuar/otoimmün saldırı → spinal kord demyelinizasyonu ve aksonal hasar. NMOSD: AQP4 (aquaporin-4) su kanalı antikorları astrositlere saldırır → kord ödemi + nekroz (LETM). MS: Oligodendrositler hedef → fokal kısa demyelinik plaklar. İdiyopatik: Post-enfeksiyöz (viral/bakteriyel), paraneoplastik, vaskülit. T2 hiperintensite: Ödem + demiyelinizasyon + aksonal hasar.",
        "etiology": "İdiyopatik, NMOSD (AQP4-IgG), MS, MOG-IgG ilişkili hastalık, Post-enfeksiyöz (EBV, Coxsackie, HSV), SLE, Sjögren sendromu, Paraneoplastik.",
        "differentialDiagnosis": ["MS (Kısa lezyon, periferik, beyin lezyonları)", "Spinal Kord İskemisi (DWI kısıtlanma, ani başlangıç)", "Spinal Kord Tümörü (Kitlesel, kontrastlanma)", "Servikal Miyelopati (Dejeneratif, disk hernisi eşliği)"],
        "goldStandard": "MRI (sagittal T2 + T1+K + DWI). Seroloji: AQP4-IgG, MOG-IgG, MS paneli. BOS: Oligoklonal bant.",
        "clinicalPearl": "Uzun T2 lezyonu (≥3 segment) = NMOSD şüphesi → AQP4-IgG test et. Kısa lezyon = MS olası. İkisi de farklı tedavi gerektirir!",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Myelopathy. American College of Radiology.",
            "Radiopaedia.org - Transverse myelitis"
        ]
    },
    {
        "id": "syringomyelia",
        "name": "Siringomiyeli",
        "nameEn": "Syringomyelia",
        "category": "Yapısal",
        "categoryEn": "Structural",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "MRI Sagittal T2 - İntramedüller Kistik Kavite", "modality": "MRI" },
            { "url": "/images/placeholder_source.png", "caption": "MRI Aksiyel T2 - Kord İçi Sirinks", "modality": "MRI" }
        ],
        "findings": {
            "mri": {
                "t2": "Spinal kord içinde uzun, silindirik, T2 hiperintens (BOS ile izointens) kavite. Servikal ve torakal kord en sık. Sirinks genişliği ve uzunluğu değerlendirmesi. Kord atrofisi (kronik vakalar).",
                "t1": "Sirinkin içeriği T1 hipointens (BOS gibi). Gadolinium sonrası kontrast tutmaz (neoplastik kist tutabilir — önemli ayırıcı).",
                "other_sequences": "Chiari malformasyonu: Tonsilar herniasyon (>5mm foramen magnumdan aşağı). Tümör: Eşlik eden kontrast tutan nodül. Faz kontrast (Flow MRI): Sirinks içi BOS akım dinamiği."
            }
        },
        "findingsEn": {
            "mri": {
                "t2": "Long, cylindrical, T2 hyperintense (isointense with CSF) cavity within spinal cord. Cervical and thoracic cord most common. Assessment of syrinx width and length. Cord atrophy (chronic cases).",
                "t1": "Syrinx content T1 hypointense (like CSF). No gadolinium enhancement (neoplastic cyst may enhance — important differential).",
                "other_sequences": "Chiari malformation: Tonsillar herniation (>5mm below foramen magnum). Tumor: Accompanying enhancing nodule. Phase contrast (Flow MRI): CSF flow dynamics within syrinx."
            }
        },
        "keyPoints": [
            "MRI: Kord içi uzun kistik kavite. T1/T2 BOS ile eş sinyal = Sirinx (tümör içermez).",
            "En sık neden: Chiari Tip I — servikal sirinx + tonsilar herniasyon.",
            "Gadolinium tutulumu: Neoplastik kist (ependimom, astrositom) — her zaman kontrastlı incele!",
            "Tedavi: Altta yatan nedene yönelik (Chiari cerrahisi, tümör eksizyonu, araknoid plastiği)."
        ],
        "keyPointsEn": [
            "MRI: Long cystic cavity within cord. T1/T2 isointense with CSF = Syrinx (non-tumoral).",
            "Most common cause: Chiari Type I — cervical syrinx + tonsillar herniation.",
            "Gadolinium enhancement: Neoplastic cyst (ependymoma, astrocytoma) — always use contrast!",
            "Treatment: Address underlying cause (Chiari surgery, tumor resection, arachnoid plasty)."
        ],
        "mechanism": "BOS akım dinamiği bozulması → spinal kord içinde basınç dalgalanmaları → interstisyel sıvının kord içinde birikmesi → sirinx oluşumu. Chiari malformasyonu: Tonsilar herniasyon → foramen magnum BOS akımını engeller → valsin etkisi → sirinx. Post-travmatik: Araknoid adhezyon → BOS akım bloğu. Tümör ilişkili: İntramedüller tümör sekresyonu veya BOS akım distorsiyonu. İdiyopatik: BOS akım anormalliği.",
        "etiology": "Chiari Tip I Malformasyonu (en sık), Post-travmatik araknoid adezyon, İntramedüller tümör (ependimom, astrositom), Post-enfeksiyöz araknoidit, İdiyopatik.",
        "differentialDiagnosis": ["İntramedüller Tümör (Gadolinium tutan nodül/kitle)", "Hidromiyelik Kavite (Normal kanal genişlemesi)", "Dilate Santral Kanal (Normal varyant <2mm)", "MS Lezyonu (Periferik, gadolinium +, kistik değil)"],
        "goldStandard": "Sagittal + Aksiyel T1, T2 MRI. T1+K: Neoplastik bileşen ekartasyonu. Faz kontrast MRI: BOS akım dinamiği (Chiari'de akım bozulması).",
        "clinicalPearl": "Servikal sirinx gördüğünde MUTLAKA kraniyoservikal bileşkeyi değerlendir — Chiari varlığını dışla. Kraniovertebrasyonel bileşkede herniasyon + sirinx = Chiari cerrahisi planı.",
        "references": [
            "Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Syringomyelia"
        ]
    },
    {
        "id": "ankylosing_spondylitis",
        "name": "Ankilozan Spondilit",
        "nameEn": "Ankylosing Spondylitis",
        "category": "İnflamatuvar",
        "categoryEn": "Inflammatory",
        "findings": {
            "ct": { "non_contrast": "Sindesmofitler (vertebra gövdesi kenarında ince kemik köprüleri). 'Bambu kamışı' (bamboo spine) görünümü. Sakroiliak eklem füzyonu. Faset eklem ankilozu." },
            "mri": { "t1": "Erken: Vertebra köşelerinde sinyal değişikliği (Romanus lezyonu). İleri: Yağlı dejenerasyon (T1 hiperintens).", "t2": "Erken: Köşe ödemi (parlak Romanus lezyonu). STIR: Aktif inflamasyon hiperintens. Sakroiliak eklem kemik iliği ödemi (aktif sakroiliit).", "t1_c": "Aktif lezyonlarda kontrastlanma." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "Syndesmophytes (thin bony bridges at vertebral body margins). 'Bamboo spine' appearance. Sacroiliac joint fusion. Facet joint ankylosis." },
            "mri": { "t1": "Early: Signal changes at vertebral corners (Romanus lesion). Advanced: Fatty degeneration (T1 hyperintense).", "t2": "Early: Corner edema (bright Romanus lesion). STIR: Active inflammation hyperintense. Sacroiliac joint bone marrow edema (active sacroiliitis).", "t1_c": "Enhancement in active lesions." }
        },
        "keyPoints": ["Sakroiliit BİLATERAL ve SİMETRİK (RA'dan farklı).", "Bamboo spine: Yaygın sindesmofitler → ankiloz.", "Romanus lezyonu: Vertebra köşesinde inflamasyon (parlak köşe bulgusu).", "Andersson lezyonu: Discovertebral destrüksiyon (psödoartroz)."],
        "keyPointsEn": ["Sacroiliitis BILATERAL and SYMMETRIC (unlike RA).", "Bamboo spine: Extensive syndesmophytes → ankylosis.", "Romanus lesion: Inflammation at vertebral corner (shiny corner sign).", "Andersson lesion: Discovertebral destruction (pseudoarthrosis)."],
        "etiology": "Otoimmün. HLA-B27 pozitifliği (%90+). Genetik yatkınlık + çevresel tetikleyiciler.",
        "mechanism": "Entezis (ligaman-kemik bileşkesi) inflamasyonu → kemik erozyonu → reaktif kemik oluşumu → ankiloz.",
        "differentialDiagnosis": ["DISH (osteofitler anterolateral, SI eklem korunur)", "Psöriatik artrit (asimetrik sindesmofitler)", "Reaktif artrit (asimetrik SI tutulum)", "Enfeksiyöz sakroiliit (unilateral)"],
        "goldStandard": "MRI (erken tanı): STIR'da sakroiliak kemik iliği ödemi. Radyografi: İleri evre (bambu kamışı, SI füzyon).",
        "clinicalPearl": "Genç erkek + kronik bel ağrısı + sabah tutukluğu + bilateral sakroiliit = Ankilozan spondilit. MRI STIR aktif inflamasyonu erken gösterir.",
        "references": ["Defined approach in Defined. Radiographics AS imaging.", "Radiopaedia.org - Ankylosing spondylitis"]
    },
    {
        "id": "vertebral_hemangioma",
        "name": "Vertebral Hemanjiom",
        "nameEn": "Vertebral Hemangioma",
        "category": "Benign Tümör",
        "categoryEn": "Benign Tumor",
        "findings": {
            "ct": { "non_contrast": "Vertebra gövdesinde 'polka dot' (benekli) patern = Aksiyel kesitte kalınlaşmış vertikaler trabeküller arası yağ. Sagittalde 'corduroy' (kadife) patern = Vertikaler çizgilenme." },
            "mri": { "t1": "HİPERİNTENS (yağ içeriği nedeniyle). Polka dot/corduroy patern.", "t2": "HİPERİNTENS (yağ + vasküler komponent). T1 ve T2'de birlikte hiperintensite = Tipik hemanjiom.", "t1_c": "Kontrastlanma değişken. Agresif hemanjiomda belirgin kontrastlanma + epidural uzanım." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "'Polka dot' pattern = Thickened vertical trabeculae with fat in between. Sagittal 'corduroy' pattern = Vertical striations." },
            "mri": { "t1": "HYPERINTENSE (due to fat content). Polka dot/corduroy pattern.", "t2": "HYPERINTENSE (fat + vascular component). Hyperintensity on both T1 and T2 = Typical hemangioma.", "t1_c": "Variable enhancement. Prominent enhancement + epidural extension in aggressive hemangioma." }
        },
        "keyPoints": ["T1 VE T2'de birlikte hiperintensite = Tipik vertebral hemanjiom.", "BT'de polka dot (aksiyel) ve corduroy (sagittal) PATOGNOMONİK.", "Agresif hemanjiom: T1 hipointens (az yağ), epidural uzanım, kortikal ekspansiyon.", "Çoğu insidental ve asemptomatik — tedavi gerektirmez."],
        "keyPointsEn": ["Hyperintensity on BOTH T1 and T2 = Typical vertebral hemangioma.", "CT polka dot (axial) and corduroy (sagittal) PATHOGNOMONIC.", "Aggressive hemangioma: T1 hypointense (less fat), epidural extension, cortical expansion.", "Most incidental and asymptomatic — no treatment needed."],
        "etiology": "Vasküler hamartom. En sık torasik vertebra. İnsidans: %10-12 (otopsi). Kadınlarda daha sık.",
        "mechanism": "Vasküler malformasyon → trabeküler kemik rezorbsiyonu → vertikaler trabeküller kalınlaşır, horizontaller rezorbe olur → polka dot/corduroy paterni.",
        "differentialDiagnosis": ["Metastaz (T1 hipointens, T2 hiperintens — hemanjiomda her iki sekans parlak)", "Lenfoma (T1 hipointens, DWI kısıtlanma)", "Paget hastalığı (kortikal kalınlaşma, genişleme)", "Yağlı dejenerasyon (T1 parlak ama T2'de yağ baskılanır)"],
        "goldStandard": "MRI: T1+T2 hiperintensite. BT: Polka dot/corduroy. Agresif ise kontrastlı MRI.",
        "clinicalPearl": "MRI'da vertebrada T1 VE T2 parlak = Hemanjiom. T1 karanlık ise metastaz veya agresif hemanjiom düşün. Çoğu insidental, raporda belirtip geç.",
        "references": ["Defined approach in Defined. Vertebral hemangioma imaging.", "Radiopaedia.org - Vertebral hemangioma"]
    },
    {
        "id": "sacral_insufficiency_fracture",
        "name": "Sakral Yetmezlik Kırığı",
        "nameEn": "Sacral Insufficiency Fracture",
        "category": "Travma/Metabolik",
        "categoryEn": "Trauma/Metabolic",
        "findings": {
            "ct": { "non_contrast": "Sakral alada lineer sklerotik bantlar. Kırık hattı koronal planda en iyi görülür. Bilateral olabilir." },
            "mri": { "t1": "Sakral alada bilateral hipointens bantlar. H-şekilli patern (her iki ala + horizontal komponent).", "t2": "STIR: BELİRGİN HİPERİNTENS kemik iliği ödemi. H-şekilli veya kelebek patern. Bilateral ala tutulumu + horizontal sakral kırık = 'Honda sign' (H harfi).", "t1_c": "Kontrastlanma olabilir (reaktif)." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "Linear sclerotic bands in sacral ala. Fracture line best seen on coronal plane. May be bilateral." },
            "mri": { "t1": "Bilateral hypointense bands in sacral ala. H-shaped pattern.", "t2": "STIR: PROMINENT HYPERINTENSE bone marrow edema. H-shaped or butterfly pattern. Bilateral ala involvement + horizontal sacral fracture = 'Honda sign' (H letter).", "t1_c": "Enhancement may be present (reactive)." }
        },
        "keyPoints": ["'Honda sign' (H harfi): Bilateral sakral ala + horizontal kırık PATOGNOMONİK.", "Osteoporoz, radyoterapi, steroid kullanımı risk faktörleri.", "Direkt grafide sıklıkla GÖZDen kaçar → MRI veya BT ile tanı.", "Yaşlı kadın + bel/kalça ağrısı + osteoporoz = Sakral yetmezlik kırığı düşün."],
        "keyPointsEn": ["'Honda sign' (H letter): Bilateral sacral ala + horizontal fracture PATHOGNOMONIC.", "Osteoporosis, radiotherapy, steroid use are risk factors.", "Often MISSED on plain radiographs → diagnosed by MRI or CT.", "Elderly woman + low back/hip pain + osteoporosis = Consider sacral insufficiency fracture."],
        "etiology": "Osteoporoz (en sık), radyoterapi (pelvik), uzun süreli steroid kullanımı, romatoid artrit, Paget hastalığı.",
        "mechanism": "Zayıflamış kemik (osteoporotik) + normal fizyolojik yüklenme → sakral aladaki stres konsantrasyonu → kırık.",
        "differentialDiagnosis": ["Sakral metastaz (fokal kitle, kortikal destrüksiyon)", "Sakroiliit (SI eklem tutulumu, inflamatuvar)", "Sakral fraktür (yüksek enerjili travma)"],
        "goldStandard": "MRI STIR: Kemik iliği ödemi + Honda sign. BT: Sklerotik kırık hatları. Sintigrafi: H-patern (sensitif ama nonspesifik).",
        "clinicalPearl": "Yaşlı osteoporotik hasta + bel/sakral ağrı + normal grafi = MRI iste. Honda sign (H) = Sakral yetmezlik kırığı.",
        "references": ["Defined approach in Defined. Sacral insufficiency fractures imaging.", "Radiopaedia.org - Sacral insufficiency fracture"]
    },
    {
        "id": "spinal_meningioma",
        "name": "Spinal Menenjiyom",
        "nameEn": "Spinal Meningioma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "ct": { "non_contrast": "İntradural ekstramedüller izodens/hafif hiperdens kitle. Kalsifikasyon olabilir.", "contrast": "Yoğun homojen kontrastlanma. Dural kuyruk (tail) bulgusu." },
            "mri": { "t1": "Kord ile İZOİNTENS (gözden kaçabilir kontrastsız serilerde). Duraya geniş tabanlı temas.", "t2": "İzointens veya hafif hiperintens. Kord kompresyonu ve yer değiştirmesi.", "t1_c": "YOĞUN ve HOMOJEN kontrastlanma. Dural tail (kuyruk) PATOGNOMONİK. Geniş tabanlı dural temas." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "Intradural extramedullary isodense/slightly hyperdense mass. Calcification possible.", "contrast": "Intense homogeneous enhancement. Dural tail sign." },
            "mri": { "t1": "ISOINTENSE to cord (may be missed on non-contrast). Broad-based dural attachment.", "t2": "Isointense or mildly hyperintense. Cord compression and displacement.", "t1_c": "INTENSE and HOMOGENEOUS enhancement. Dural tail PATHOGNOMONIC. Broad-based dural contact." }
        },
        "keyPoints": ["İntradural ekstramedüller tümörlerin 2. en sığı (schwannomdan sonra).", "Torasik segment en sık (%80). Kadınlarda belirgin dominans.", "Dural tail + homojen kontrastlanma + geniş tabanlı dural temas = Menenjiyom.", "Schwannomdan ayırım: Menenjiyom geniş tabanlı, schwannom foraminal uzanım gösterir."],
        "keyPointsEn": ["2nd most common intradural extramedullary tumor (after schwannoma).", "Thoracic segment most common (80%). Female predominance.", "Dural tail + homogeneous enhancement + broad dural base = Meningioma.", "Differentiation from schwannoma: Meningioma broad-based, schwannoma shows foraminal extension."],
        "etiology": "Araknoid kap hücrelerinden kökenli. Kadınlarda sık (hormonal ilişki). Nörofibromatozis tip 2'de multipl olabilir.",
        "mechanism": "Araknoid kap hücreleri → yavaş büyüyen intradural ekstramedüller kitle → spinal kord kompresyonu → progresif myelopati.",
        "differentialDiagnosis": ["Schwannom (foraminal uzanım, dumbbell şekli)", "Nörofibrom (pleksiform, NF1)", "Metastaz (multipl, hızlı büyüme)", "Spinal hemanjiyoblastom (mural nodül, kist)"],
        "goldStandard": "Kontrastlı MRI: Yoğun homojen kontrastlanma + dural tail + intradural ekstramedüller pozisyon.",
        "clinicalPearl": "Orta yaş kadın + progresif myelopati + torasik intradural ekstramedüller kitle + dural tail = Spinal menenjiyom.",
        "references": ["Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.", "Radiopaedia.org - Spinal meningioma"]
    },
    {
        "id": "spinal_epidural_hematoma",
        "name": "Spinal Epidural Hematom",
        "nameEn": "Spinal Epidural Hematoma",
        "category": "Vasküler/Acil",
        "categoryEn": "Vascular/Emergency",
        "findings": {
            "ct": { "non_contrast": "Epidural alanda hiperdens koleksiyon (akut kan). Spinal kanal daralması. Kord kompresyonu." },
            "mri": { "t1": "Akut: İzointens. Subakut (>24-48 saat): T1 HİPERİNTENS (methemoglobin). Bikonveks lens şekilli epidural koleksiyon.", "t2": "Akut: Heterojen/hipointens. Subakut: Hiperintens. Posterior epidural alanda EN SIK (venöz pleksus).", "t1_c": "Periferik kontrastlanma (subakut evrede)." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "Hyperdense collection in epidural space (acute blood). Spinal canal narrowing. Cord compression." },
            "mri": { "t1": "Acute: Isointense. Subacute (>24-48h): T1 HYPERINTENSE (methemoglobin). Biconvex lens-shaped epidural collection.", "t2": "Acute: Heterogeneous/hypointense. Subacute: Hyperintense. MOST COMMON in posterior epidural space (venous plexus).", "t1_c": "Peripheral enhancement (subacute stage)." }
        },
        "keyPoints": ["Posterior epidural alan en sık lokalizasyon (epidural venöz pleksus).", "Antikoagülan kullanımı en önemli risk faktörü.", "Acil cerrahi dekompresyon: 24-48 saat içinde yapılmazsa kalıcı nörolojik hasar.", "Akut parapleji + antikoagülan = Spinal epidural hematom düşün → ACİL MRI."],
        "keyPointsEn": ["Posterior epidural space most common location (epidural venous plexus).", "Anticoagulant use most important risk factor.", "Emergency surgical decompression: Permanent neurological damage if not done within 24-48h.", "Acute paraplegia + anticoagulant = Think spinal epidural hematoma → EMERGENT MRI."],
        "etiology": "Antikoagülan tedavi, koagülopati, travma, spinal cerrahi/girişim sonrası, vasküler malformasyon. Spontan (hipertansiyon).",
        "mechanism": "Epidural venöz pleksus kanaması → epidural hematom → spinal kord kompresyonu → akut myelopati.",
        "differentialDiagnosis": ["Epidural abse (ateş, lökositoz, rim kontrastlanma)", "Disk herniasyonu (disk aralığı düzeyinde)", "Spinal tümör (kontrastlanma, destrüksiyon)", "Epidural lipomatozis (yağ sinyali)"],
        "goldStandard": "ACİL MRI: T1+T2 sagittal ve aksiyel. Cerrahi karar 24-48 saat içinde.",
        "clinicalPearl": "Antikoagülan alan hasta + akut sırt ağrısı + progresif parapleji = ACİL MRI. Posterior epidural T1 hiperintens koleksiyon = Hematom.",
        "references": ["Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.", "Radiopaedia.org - Spinal epidural hematoma"]
    },
    {
        "id": "tethered_cord",
        "name": "Gergin Omurilik Sendromu",
        "nameEn": "Tethered Cord Syndrome",
        "category": "Konjenital",
        "categoryEn": "Congenital",
        "findings": {
            "mri": { "t1": "Konus medullaris L2-L3 ALTINDA (normal: L1-L2 üst kenar). Filum terminale kalın (>2mm). Filum terminale içinde yağ (lipom): T1 HİPERİNTENS.", "t2": "Konus pozisyonu aşağıda. Kalın filum. Eşlik eden anomaliler: Lipom, dermoid, diastematomiyeli, spinal lipomiyelomeningosel.", "t1_c": "Tümöral komponent varsa kontrastlanma." }
        },
        "findingsEn": {
            "mri": { "t1": "Conus medullaris BELOW L2-L3 (normal: L1-L2 upper border). Thickened filum terminale (>2mm). Fat within filum terminale (lipoma): T1 HYPERINTENSE.", "t2": "Low conus position. Thickened filum. Associated anomalies: Lipoma, dermoid, diastematomyelia, spinal lipomyelomeningocele.", "t1_c": "Enhancement if tumoral component present." }
        },
        "keyPoints": ["Konus medullaris L2-L3 altında = Gergin omurilik.", "Kalın filum terminale (>2mm) + filum içinde yağ KARAKTERİSTİK.", "Çocuklarda: Üriner inkontinans, ayak deformitesi, skolyoz.", "Yetişkin tethered cord: Geç başlangıç, progresif nörolojik bozulma."],
        "keyPointsEn": ["Conus medullaris below L2-L3 = Tethered cord.", "Thickened filum terminale (>2mm) + fat within filum CHARACTERISTIC.", "Children: Urinary incontinence, foot deformity, scoliosis.", "Adult tethered cord: Late onset, progressive neurological deterioration."],
        "etiology": "Konjenital: Spinal disrafizm spektrumu (okkült veya açık). Postoperatif: Miyelomeningosel onarımı sonrası yapışıklık.",
        "mechanism": "Filum terminale kalınlaşması veya interspinal lipom → konus medullarisin aşağıda sabitlenmesi → büyümeyle kord gerilimi → nörolojik hasar.",
        "differentialDiagnosis": ["Normal konus varyantı (L2-L3 sınırında, filum normal)", "Spinal lipom (yağ kitlesi, konus düzeyi değişken)", "Diastematomiyeli (kord bölünmesi, kemik spur)"],
        "goldStandard": "MRI: Konus düzeyi + filum kalınlığı + eşlik eden anomaliler. Sagittal T1 + T2 + aksiyel kesitler.",
        "clinicalPearl": "Çocukta üriner inkontinans + cilt bulgusu (dimple, kıllanma, lipom) + MRI'da düşük konus = Tethered cord. Filum içinde yağ doğrular.",
        "references": ["Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.", "Radiopaedia.org - Tethered cord"]
    },
    {
        "id": "spinal_avm",
        "name": "Spinal AVM (Dural AV Fistül)",
        "nameEn": "Spinal AVM (Dural AV Fistula)",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "mri": { "t1": "Kord üzerinde serpentin flow voidler (dilate perimedüller venler).", "t2": "Kord içinde hiperintensite (venöz konjesyon myelopatisi). Kord yüzeyinde multipl flow void yapıları ('FLow void cluster'). Kord ödemi ve şişliği.", "t1_c": "Kord kontrastlanması (venöz konjesyon). Dilate perimedüller venler kontrastlanır." }
        },
        "findingsEn": {
            "mri": { "t1": "Serpentine flow voids on cord surface (dilated perimedullary veins).", "t2": "Hyperintensity within cord (venous congestive myelopathy). Multiple flow void structures on cord surface. Cord edema and swelling.", "t1_c": "Cord enhancement (venous congestion). Dilated perimedullary veins enhance." }
        },
        "keyPoints": ["Kord yüzeyinde serpentin flow voidler + kord T2 hiperintensitesi = Spinal dural AV fistül.", "En sık spinal vasküler malformasyon (Tip I: Dural AV fistül).", "Progresif myelopati + inkontinans (orta yaş erkek).", "DSA (spinal anjiyografi): Kesin tanı ve tedavi planlaması."],
        "keyPointsEn": ["Serpentine flow voids on cord surface + cord T2 hyperintensity = Spinal dural AV fistula.", "Most common spinal vascular malformation (Type I: Dural AV fistula).", "Progressive myelopathy + incontinence (middle-aged male).", "DSA (spinal angiography): Definitive diagnosis and treatment planning."],
        "etiology": "Edinsel (Tip I dural AV fistül, en sık). Konjenital (Tip II-IV, nadir). Orta yaş erkek dominant.",
        "mechanism": "Dural düzeyde arteriyovenöz şant → perimedüller venlerde basınç artışı → venöz konjesyon → kord iskemisi ve myelopati.",
        "differentialDiagnosis": ["Spinal kord tümörü (fokal kitle, kontrastlanma)", "Transvers myelit (akut, enflamatuvar)", "MS (plak benzeri lezyonlar)", "Sarkoidoz (menengeal kontrastlanma)"],
        "goldStandard": "Spinal DSA (anjiyografi): Fistül lokalizasyonu ve besleyici arter. MRI: İlk tarama.",
        "clinicalPearl": "Orta yaşlı erkek + progresif myelopati + kord yüzeyinde flow void = Spinal dural AV fistül. DSA ile kesin tanı ve embolizasyon/cerrahi tedavi.",
        "references": ["Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.", "Radiopaedia.org - Spinal dural arteriovenous fistula"]
    },
    {
        "id": "cauda_equina_syndrome",
        "name": "Kauda Equina Sendromu",
        "nameEn": "Cauda Equina Syndrome",
        "category": "Acil",
        "categoryEn": "Emergency",
        "findings": {
            "ct": { "non_contrast": "Disk herniasyonu veya spinal kanal daralması (etiyolojiye göre). Serbest fragman olabilir." },
            "mri": { "t1": "Kauda equina liflerinin kompresyonu (disk, tümör, hematom, abse). L1-2 altında spinal kanal içinde etiyolojik lezyon.", "t2": "Kauda equina lifleri çevresinde sıvı kaybı (sıkışma). Büyük disk herniasyonu veya spinal kanal daraltan lezyon. Kord sinyal değişikliği (konus düzeyinde tutulum varsa).", "t1_c": "Etiyolojiye göre: Tümör (kontrastlanma), abse (rim kontrastlanma)." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "Disc herniation or spinal canal narrowing (based on etiology). Free fragment may be present." },
            "mri": { "t1": "Cauda equina compression (disc, tumor, hematoma, abscess). Etiological lesion within spinal canal below L1-2.", "t2": "Loss of fluid around cauda equina fibers (compression). Large disc herniation or canal-narrowing lesion. Cord signal change (if conus level involvement).", "t1_c": "Based on etiology: Tumor (enhancement), abscess (rim enhancement)." }
        },
        "keyPoints": ["ACİL: Cerrahi dekompresyon 24-48 saat içinde → kalıcı nörolojik hasar riski.", "Saddle anestezi + üriner retansiyon/inkontinans + bilateral alt ekstremite güçsüzlük.", "Büyük disk herniasyonu EN SIK neden.", "ACİL MRI endikasyonu: Saddle anestezi + sfinkter disfonksiyonu."],
        "keyPointsEn": ["EMERGENCY: Surgical decompression within 24-48h → risk of permanent neurological damage.", "Saddle anesthesia + urinary retention/incontinence + bilateral lower extremity weakness.", "Large disc herniation MOST COMMON cause.", "EMERGENT MRI indication: Saddle anesthesia + sphincter dysfunction."],
        "etiology": "Büyük disk herniasyonu (en sık), spinal stenoz, tümör, epidural abse, epidural hematom, travma.",
        "mechanism": "L1-2 altında spinal kanalda kauda equina liflerinin kompresyonu → alt motor nöron lezyonu → bilateral radikülöpati + sfinkter disfonksiyonu.",
        "differentialDiagnosis": ["Konus medullaris sendromu (üst motor nöron bulguları, erken sfinkter)", "Bilateral lumbosakral radikülöpati (asimetrik olabilir)", "Spinal kord kompresyonu (üst seviye, üst motor nöron)"],
        "goldStandard": "ACİL MRI: Kauda equina kompresyonu + etiyolojik lezyon tespiti. Sagittal + aksiyel T1, T2.",
        "clinicalPearl": "Saddle anestezi + üriner retansiyon + büyük disk = Kauda equina sendromu → ACİL MRI ve cerrahi. 24-48 saat gecikme kalıcı sfinkter hasarına yol açar.",
        "references": ["Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.", "Radiopaedia.org - Cauda equina syndrome"]
    },
    {
        "id": "tarlov_cyst",
        "name": "Tarlov Kisti (Perinöral Kist)",
        "nameEn": "Tarlov Cyst (Perineural Cyst)",
        "category": "Konjenital/Gelişimsel",
        "categoryEn": "Congenital/Developmental",
        "findings": {
            "ct": { "non_contrast": "Sakral foramenlerde BOS dansitesinde kistik lezyon. Kemik remodellingi (kronik bası)." },
            "mri": { "t1": "BOS ile İZOİNTENS (hipointens) kistik lezyon. Sakral sinir kökü posterior ganglionu düzeyinde.", "t2": "BOS ile İZOİNTENS (çok hiperintens). Sakral foramenler düzeyinde, genellikle multipl ve bilateral. Kist içinde sinir kök lifleri görülebilir.", "t1_c": "Kontrastlanma yok." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "CSF-density cystic lesion in sacral foramina. Bone remodeling (chronic pressure)." },
            "mri": { "t1": "ISOINTENSE to CSF (hypointense) cystic lesion. At level of sacral nerve root posterior ganglion.", "t2": "ISOINTENSE to CSF (very hyperintense). At sacral foramina level, usually multiple and bilateral. Nerve root fibers may be seen within cyst.", "t1_c": "No enhancement." }
        },
        "keyPoints": ["Sakral foramenlerde BOS sinyalinde kistik lezyonlar.", "Çoğu ASEMPTOMATİK ve insidental.", "Büyük kistler: Sakral ağrı, radikülopati, sfinkter semptomları.", "Sinir kök lifleri kist DUVARINDA bulunur (diğer kistlerden ayırıcı)."],
        "keyPointsEn": ["CSF-signal cystic lesions in sacral foramina.", "Most ASYMPTOMATIC and incidental.", "Large cysts: Sacral pain, radiculopathy, sphincter symptoms.", "Nerve root fibers found in cyst WALL (differentiates from other cysts)."],
        "etiology": "Konjenital (meningeal divertikül). Travma ve BOS basınç değişiklikleri kist büyümesini tetikleyebilir.",
        "mechanism": "Posterior kök gangliyonu düzeyinde araknoid proliferasyon → BOS birikimi → kist oluşumu. Kronik bası → kemik remodellingi.",
        "differentialDiagnosis": ["Meningeal divertikül (sinir kök lifleri kist içinde değil)", "Araknoid kist (perinöral değil)", "Schwannom (solid komponent, kontrastlanma)", "Ependimal kist (intramedüller)"],
        "goldStandard": "MRI: BOS sinyalinde sakral kist + kist duvarında sinir kök lifleri.",
        "clinicalPearl": "Sakral MRI'da insidental BOS sinyalinde kistler = Tarlov kisti. Çoğu tedavi gerektirmez. Semptomatik büyük kistlerde perkütan aspirasyon veya cerrahi.",
        "references": ["Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.", "Radiopaedia.org - Tarlov cyst"]
    },
    {
        "id": "spinal_cord_infarction",
        "name": "Spinal Kord İnfarktı",
        "nameEn": "Spinal Cord Infarction",
        "category": "Vasküler/Acil",
        "categoryEn": "Vascular/Emergency",
        "findings": {
            "mri": { "t1": "Erken: Normal veya hafif hipointensite. Geç: Kord atrofisi.", "t2": "'OWL EYES' (baykuş gözü) veya 'SNAKE EYES': Aksiyel kesitte bilateral anterior horn hiperintensitesi. Sagittalde longitudinal uzun segment T2 hiperintensitesi ('pencil-like'). Anterior spinal arter territorysine uyumlu.", "dwi": "ERKEN: Difüzyon kısıtlanması (akut infarkt). T2'den ÖNCE pozitifleşir.", "t1_c": "Subakut evrede kontrastlanma (kan-beyin bariyeri bozulması)." }
        },
        "findingsEn": {
            "mri": { "t1": "Early: Normal or mild hypointensity. Late: Cord atrophy.", "t2": "'OWL EYES' or 'SNAKE EYES': Bilateral anterior horn hyperintensity on axial. Longitudinal long segment T2 hyperintensity on sagittal ('pencil-like'). Consistent with anterior spinal artery territory.", "dwi": "EARLY: Diffusion restriction (acute infarct). Becomes positive BEFORE T2.", "t1_c": "Enhancement in subacute stage (blood-cord barrier breakdown)." }
        },
        "keyPoints": ["'Owl eyes' (baykuş gözü): Aksiyelde bilateral anterior horn tutulumu PATOGNOMONİK.", "Anterior spinal arter sendromu en sık (%75).", "Aort cerrahisi/anjiyografi sonrası en sık etiyoloji.", "DWI erken tanıda T2'den daha sensitif."],
        "keyPointsEn": ["'Owl eyes': Bilateral anterior horn involvement on axial PATHOGNOMONIC.", "Anterior spinal artery syndrome most common (75%).", "Most common etiology after aortic surgery/angiography.", "DWI more sensitive than T2 for early diagnosis."],
        "etiology": "Aort cerrahisi/aortik klemp, aort diseksiyonu, ateroskleroz, vaskülit, hipotansiyon, fibrokartilajenöz embolizm.",
        "mechanism": "Anterior spinal arter oklüzyonu → anterior 2/3 kord iskemisi → bilateral motor + ağrı/ısı kaybı (spinotalamik) AMA dorsal kolon korunur (propriyosepsiyon sağlam).",
        "differentialDiagnosis": ["Transvers myelit (daha simetrik, inflamatuvar belirteçler)", "MS akut atağı (asimetrik, periferik plaklar)", "Nöromiyelitis optika (NMOSD - uzun segment, optik sinir tutulumu)", "Spinal kord kompresyonu (dış bası bulguları)"],
        "goldStandard": "ACİL MRI: DWI + T2 (owl eyes + anterior kord tutulumu). Aort görüntüleme (etiyoloji).",
        "clinicalPearl": "Aort cerrahisi sonrası akut parapleji + ağrı/ısı kaybı + propriyosepsiyon korunmuş = Anterior spinal arter sendromu. MRI DWI owl eyes paterni doğrular.",
        "references": ["Ross JS. Diagnostic Imaging: Spine. 4th ed. Elsevier; 2021.", "Radiopaedia.org - Spinal cord infarction"]
    }
];
