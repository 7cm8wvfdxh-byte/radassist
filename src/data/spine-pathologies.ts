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
    }
];
