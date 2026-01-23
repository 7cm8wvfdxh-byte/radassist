import { Pathology } from '@/types';

export const spinePathologies: Pathology[] = [
    {
        "id": "lumbar_disc_herniation",
        "name": "Lomber Disk Hernisi (Bel Fıtığı)",
        "category": "Dejeneratif",
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
        "keyPoints": [
            "Terminoloji (Radiopaedia 2.0): Bulging (Taşma) vs Herni (Fıtık).",
            "Fokal (<%25) vs Yaygın (>%25).",
            "L4-L5 ve L5-S1 en sık etkilenen seviyelerdir.",
            "Acil durum: Kauda Ekuina Sendromu (İdrar retansiyonu, eyer tarzı anestezi)."
        ]
    },
    {
        "id": "spinal_stenosis_lumbar",
        "name": "Lomber Spinal Stenoz (Dar Kanal)",
        "category": "Dejeneratif",
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
        "keyPoints": [
            "Klinik: Nörojenik Kladikasyo (Yürürken bacak ağrısı, öne eğilince geçer).",
            "AP kanal çapı < 10mm (Rölatif), < 7mm (Mutlak Stenoz).",
            "Santral, Lateral Resess veya Foraminal olabilir."
        ]
    },
    {
        "id": "spondylolisthesis",
        "name": "Spondilolistezis (Bel Kayması)",
        "category": "Dejeneratif/Travma",
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
        "keyPoints": [
            "Meyerding Sınıflaması (Evre 1-4).",
            "En sık L4-L5 (Dejeneratif) ve L5-S1 (İstmik/Litik).",
            "Step-off (basamaklanma) deformitesi."
        ]
    },
    {
        "id": "spinal_metastasis",
        "name": "Spinal Metastaz",
        "category": "Neoplastik",
        "gallery": [
            {
                "url": "/images/placeholder-spine.png",
                "caption": "Görüntü Eklenecek",
                "modality": "MRI"
            }
        ],
        "findings": {
            "mri": {
                "t1": "Vertebra korpusunda normal yağ iliği sinyalinin kaybı (Hipointens). 'Baykuş Gözü' (Pedikül) kaybı (Winking owl sign).",
                "t2": "Değişken, genellikle hiperintens. Patolojik kırık (kompresyon) eşlik edebilir.",
                "t1_c": "Heterojen kontrastlanma. Epidural/Paraspinal uzanım.",
                "stir": "Yağ baskılı serilerde belirgin hiperintensite (ödem/tümör)."
            }
        },
        "keyPoints": [
            "En sık kemik metastaz kaynağı: Meme, Prostat, Akciğer.",
            "Torakal bölge en sık tutulur.",
            "Kortikal yıkım varsa BT daha duyarlıdır."
        ]
    },
    {
        "id": "spinal_trauma_burst",
        "name": "Burst (Patlama) Kırığı",
        "category": "Travma",
        "gallery": [
            {
                "url": "/images/placeholder-spine.png",
                "caption": "Görüntü Eklenecek",
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
        "keyPoints": [
            "Stabilite için TLICS sınıflaması kullanılır.",
            "Nörolojik defisit riski yüksektir.",
            "Kompresyon kırığından farkı: Arka duvar ve arka kolon tutulumudur."
        ]
    },
    {
        "id": "cervical_disc_herniation",
        "name": "Servikal Disk Hernisi (Boyun Fıtığı)",
        "category": "Dejeneratif",
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
        "keyPoints": [
            "Miyelopatik bulgular (El beceriksizliği, yürüme bozukluğu, hiperrefleksi): Cerrahi endikasyon.",
            "Radikülopati: Dermatomal ağrı ve güçsüzlük (C6: Başparmak, C7: Orta parmak).",
            "MRI'da kord sinyal değişikliği: Miyelomalaziyi gösterir (kötü prognoz).",
            "Ayırıcı tanı: OPLL (Posterior Longitudinal Ligaman Ossifikasyonu), Servikal stenoz."
        ]
    },
    {
        "id": "schmorl_nodule",
        "name": "Schmorl Nodülü",
        "category": "Dejeneratif",
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
        "keyPoints": [
            "Genellikle insidental bulgu. Ağrı ile ilişki tartışmalı.",
            "Modic değişiklikleri eşlik edebilir: Tip 1 (ödem), Tip 2 (yağ), Tip 3 (skleroz).",
            "Akut Schmorl nodülü: Ağrı kaynağı olabilir.",
            "Scheuermann hastalığı: Multipl Schmorl nodülleri + kifoz."
        ]
    },
    {
        "id": "facet_arthropathy",
        "name": "Faset Artropatisi (Faset Sendromu)",
        "category": "Dejeneratif",
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
        "keyPoints": [
            "Klinik: Bel ağrısı, ekstansiyonda artan, fleksiyonda azalan.",
            "Lomber lordoz artışı riski: Posterior element yükü artar.",
            "Sinovyal kist: Lateral resess stenozu ve radikülopati yapabilir.",
            "Faset bloğu ve ablasyon: Tanı ve tedavi amaçlı kullanılır."
        ]
    },
    {
        "id": "spinal_ependymoma",
        "name": "Spinal Ependimom (İntrameduller)",
        "category": "Neoplastik",
        "findings": {
            "mri": {
                "t1": "Korda ekspansiyon yapan izointens/hipointens kitle. Polar kistler (tümör üst/altında siringomiyeli benzeri).",
                "t2": "Santral yerleşimli, iyi sınırlı, homojen HİPERİNTENS kitle. 'Cap sign': Kranyal ve kaudal hemosiderin (hipointens) - Patognomonik.",
                "t1_c": "Yoğun, HOMOJEn kontrastlanma. Sınırlar net, cerrahi için elverişli.",
                "stir": "Tümör ve çevre ödem değerlendirmesi.",
                "location": "En sık: Konus medullaris, Filum terminale (Miksopapiller tip). Servikal > Torakal."
            }
        },
        "keyPoints": [
            "Erişkinlerde en sık intrameduller spinal tümör.",
            "'Cap sign' (hemosiderin) ependimom için patognomonik.",
            "Miksopapiller ependimom: Filum terminale, BOS yoluyla yayılım riski.",
            "Cerrahi: Tam rezeksiyon mümkün (iyi sınırlı)."
        ]
    },
    {
        "id": "spinal_schwannoma",
        "name": "Spinal Schwannom (Nörilemmoma)",
        "category": "Neoplastik",
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
        "keyPoints": [
            "En sık intradural-ekstramedüller spinal tümör.",
            "Nörofibromdan farkı: Eksentrik yerleşim, fokal, tek sinir kökü.",
            "NF2'de bilateral vestibüler schwannom + multipl spinal schwannom.",
            "'Dumbbell' tümör: Foramenı genişleterek hem kanal içi hem dışına uzanır."
        ]
    }
];
