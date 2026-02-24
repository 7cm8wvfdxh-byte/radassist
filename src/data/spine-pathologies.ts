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
    }
];
