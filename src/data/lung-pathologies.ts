import { Pathology } from '@/types';

export const lungPathologies: Pathology[] = [
    {
        "id": "lung_cancer",
        "name": "Akciğer Kanseri (NSCLC/SCLC)",
        "category": "Neoplastik",
        "gallery": [
            { "url": "/images/lung/lung_cancer_ct.png", "caption": "BT - Spiküle Kitle", "modality": "CT" },
            // { "url": "/images/lung/pancoast_mri.png", "caption": "MRI - Pancoast Tümörü", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Santral (SCLC, Skuamöz): Hiler/peribronşial kitle, atelektazi. Periferik (Adenokarsinom): Solid nodül/kitle, spiküle kontur, pleural tail.",
                "contrast": "Heterojen kontrastlanma. Mediastinal LAP değerlendirmesi. Plevral effüzyon, göğüs duvarı invazyonu.",
                "bone_window": "Kot, vertebra destrüksiyonu (T3-T4 evreleme)."
            },
            "mri": {
                "t1": "Pancoast tümör: Brakiyal pleksus, subklavian damar invazyonu değerlendirmesi.",
                "t2": "Tümör-normal doku kontrastı. Spinal kanal invazyonu.",
                "dwi": "Solid tümörlerde kısıtlanma. Tedavi yanıtı izleminde kullanılır."
            }
        },
        "keyPoints": [
            "NSCLC (%85): Adenokarsinom (en sık), Skuamöz, Büyük hücreli.",
            "SCLC (%15): Santral, hızlı büyüme, paraneoplatik sendromlar.",
            "Evreleme: TNM (Tümör boyutu, Nodal tutulum, Metastaz).",
            "Ground-glass + solid = Part-solid nodül = Adenokarsinom şüpheli."
        ]
    },
    {
        "id": "pulmonary_embolism",
        "name": "Pulmoner Emboli",
        "category": "Vasküler",
        "gallery": [
            // { "url": "/images/lung/pe_ct_angio.png", "caption": "BT Anjiyo - Dolum Defekti", "modality": "CT" },
            // { "url": "/images/lung/hampton_hump_cxr.png", "caption": "CXR - Hampton's Hump", "modality": "X-Ray" }
        ],
        "findings": {
            "ct": {
                "cta": "PULMONER ARTERİYEL FAZ: İntravasküler dolum defekti. 'Polo mint sign' (Aksiyal): Damar içinde santral hipodansite. 'Railway track sign' (Koronal): Paralel hipodens trombus.",
                "contrast": "Sağ ventrikül dilatasyonu (RV/LV >1 = Kötü prognoz). İnterventrikular septum sola itilmiş. Pulmoner infarkt: Wedge-shaped periferal konsolidasyon (Hampton's hump).",
                "non_contrast": "Akut emboli tanısında yetersiz. Mozaik perfüzyon (kronik PE)."
            },
            "mri": {
                "mra": "MR pulmoner anjiografi: Kontrast verilememesi durumunda alternatif.",
                "t1_c": "Trombus: Hipointens dolum defekti.",
                "other_sequences": "Perfüzyon MR: V/Q eşdeğeri olarak kullanılabilir."
            }
        },
        "keyPoints": [
            "BT Pulmoner Anjiyo altın standart. Duyarlılık %90+.",
            "Wells Skoru + D-dimer: Düşük olasılık -> PE dışlanır.",
            "Sağ ventrikül strain: rV/LV >1, interventrikular septum bowing.",
            "'Saddle embolus': Ana pulmoner arter bifurkasyonu - Masif PE."
        ]
    },
    {
        "id": "pneumonia",
        "name": "Pnömoni (Bakteriyel/Viral/COVID-19)",
        "category": "Enfeksiyon",
        "gallery": [
            // { "url": "/images/lung/pneumonia_lobar.png", "caption": "BT - Lober Konsolidasyon", "modality": "CT" },
            // { "url": "/images/lung/covid_ground_glass.png", "caption": "BT - Buzlu Cam (COVID-19)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "BAKTERİYEL: Lober konsolidasyon, air-bronchograms, plevral efüzyon. VİRAL/ATİPİK: Bilateral yamalı ground-glass, peribronşiyal dağılım. COVID-19: Bilateral, periferal ağırlıklı ground-glass, crazy-paving paterni, subplevral bantlar.",
                "contrast": "Apse: Halka kontrastlanma, kavitasyon. Ampiyem: Plevral kalınlaşma ve kontrastlanma."
            },
            "mri": {
                "t2": "Konsolidasyon: Heterojen hiperintens.",
                "dwi": "Apse: Merkezi kısıtlanma (nekrotik materyalden ayırıcı)."
            }
        },
        "keyPoints": [
            "Bakteriyel: Lober, akut. S. pneumoniae en sık.",
            "Viral/Atipik: Bilateral, interstisyel, ground-glass.",
            "COVID-19: Periferal ground-glass → Crazy paving → Konsolidasyon → Fibrozis progresyonu.",
            "Nekrotizan pnömoni: Multiple kavitasyon, Klebsiella, S. aureus."
        ]
    },
    {
        "id": "lung_nodule",
        "name": "Akciğer Nodülü (Fleischner Kriterleri)",
        "category": "Belirsiz",
        "gallery": [
            // { "url": "/images/lung/nodule_spiculated.png", "caption": "BT - Spiküle Solita Nodül", "modality": "CT" },
            // { "url": "/images/lung/nodule_ground_glass.png", "caption": "BT - Subsolid Nodül", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "SOLİD NODÜL: Homojen yumuşak doku dansitesi. SUBSOLID: Part-solid (solid + ground-glass) veya Pure ground-glass. Morfoloji: Spiküle, lobüle, düzgün kenarlı.",
                "contrast": ">15 HU artış = Vasküler nodül (malignite şüpheli).",
                "evolution": "Volüm doubling time: <400 gün = Malignite şüphesi yüksek."
            },
            "mri": {
                "dwi": "Malign nodüllerde kısıtlanma eğilimi.",
                "t1_c": "Solid nodül kontrastlanma değerlendirmesi."
            }
        },
        "keyPoints": [
            "Fleischner 2017: Solid ve subsolid nodüller için ayrı algoritmalar.",
            "<6mm solid nodül (düşük risk): Takip gerekmez.",
            "Part-solid nodül: Solid komponent >6mm = Yüksek malignite riski.",
            "PET-CT: >8mm solid nodül metabolik değerlendirme için önerilir."
        ]
    },
    {
        "id": "pneumothorax",
        "name": "Pnömotoraks",
        "category": "Travma/İyatrojenik",
        "gallery": [
            // { "url": "/images/lung/pneumothorax_cxr.png", "caption": "CXR - Plevral Hat", "modality": "X-Ray" },
            // { "url": "/images/lung/pneumothorax_ct.png", "caption": "BT - Serbest Hava", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Plevral boşlukta SERBEST HAVA. Visseral plevra çizgisi görülür. Akciğer kollapsı derecesi. Tansiyon pneumotoraks: Mediastinal şift, kontralateral tarafa itilme.",
                "bone_window": "Subkutan amfizem. Kot fraktürü (travmatik)."
            },
            "ultrasound": {
                "description": "'Lung sliding' KAYBI = Pnömotoraks. 'Barcode sign' (M-mode): Paralel çizgiler (normal 'seashore' paterni yerine). 'Lung point': Pnömotoraks sınırı - Patognomonik.",
                "doppler": "Kullanılmaz."
            }
        },
        "keyPoints": [
            "Tansiyon pneumotoraks: ACİL dekompresyon (iğne/tüp).",
            "Supin BT: Anterior/medial hava birikimi ('deep sulcus sign' X-ray'de).",
            "Primer spontan: Genç, uzun, erkek, apikal bleb.",
            "Sekonder: KOAH, interstisyel akciğer hastalığı, travma."
        ]
    },
    {
        "id": "interstitial_lung_disease",
        "name": "İnterstisyel Akciğer Hastalığı (ILD/UIP)",
        "category": "Fibrotik",
        "gallery": [
            // { "url": "/images/lung/ild_honeycombing.png", "caption": "HRCT - Bal Peteği (Honeycombing)", "modality": "CT" },
            // { "url": "/images/lung/ild_traction.png", "caption": "HRCT - Traksiyon Bronşektazi", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "UIP (İdiyopatik Pulmoner Fibrozis): BAZİLER, SUBPLEVRAL ağırlıklı. 'Honeycombing' (bal peteği): Kistik hava boşlukları, kalın duvarlar - PATOGNOMONIK. Traksiyon bronşektazi. Minimal veya yok ground-glass.",
                "contrast": "Genellikle gerekli değil. Komplikasyon (pulmoner HT) için kullanılabilir.",
                "evolution": "NSIP: Daha fazla ground-glass, daha az honeycombing. Daha iyi prognoz."
            },
            "mri": {
                "t2": "Fibrotik alanlar hipointens. Aktif inflamasyon hiperintens.",
                "other_sequences": "Fonksiyonel MR: Ventilasyon/perfüzyon değerlendirmesi."
            }
        },
        "keyPoints": [
            "UIP paterni = IPF tanısı için yeterli (biyopsi gerekmez).",
            "Honeycombing + Traksiyon bronşektazi + Baziler/subplevral = UIP kesin.",
            "NSIP vs UIP: NSIP'te ground-glass fazla, honeycombing yok/az.",
            "HRCT: 1-2mm kesit kalınlığı, yüksek çözünürlük gerekli."
        ]
    },
    {
        "id": "ipf",
        "name": "İdiopatik Pulmoner Fibrozis (IPF / UIP)",
        "category": "İnterstisyel",
        "findings": {
            "ct": {
                "non_contrast": "UIP Paterni: Bazal ve subplevral ağırlıklı tutulum. Balpeteği (Honeycombing) kistleri. Traksiyon bronşiektazileri. Retiküler opasiteler. Buzlu cam (Ground-glass) baskın DEĞİLDİR (Baskınsa NSIP düşün)."
            }
        },
        "keyPoints": [
            "Progresif dispne ve kuru öksürük (Yaşlı erkek hasta).",
            "UIP paterni (BT) + Klinik uyum = Biyopsi gerekmez.",
            "Balpeteği görünümü (3-10mm kistler) kötü prognoz işaretidir."
        ]
    },
    {
        "id": "pneumothorax",
        "name": "Pnömotoraks",
        "category": "Acil",
        "findings": {
            "xray": {
                "description": "Visseral plevra çizgisi (ince beyaz hat). Periferde damar izlerinin olmaması (radyolusent alan). Derin sulkus (Deep sulcus) işareti (yatan hastada)."
            },
            "ct": {
                "non_contrast": "Plevral boşlukta hava. Akciğer parankiminde kollaps. Tansiyon pnömotoraks: Mediastinal şif (karşı tarafa itilme), trakeal deviasyon, diyafram basısı."
            },
            "usg": {
                "description": "Akciğer kayma hareketinin (Lung sliding) ve kuyruklu yıldız (Comet tail) artefaktının kaybolması. Barcode/Stratosphere sign (M-mod). Lung point (Sağlam ve pnömotoraks sınırını gösterir - Spesifiktir)."
            }
        },
        "keyPoints": [
            "Tansiyon pnömotoraks klinik bir tanıdır, röntgen BEKLENMEZ (Acil iğne dekompresyonu!).",
            "Primer spontan: Genç, uzun, zayıf erkek, sigara içicisi (Apikal bleb rüptürü).",
            "USG, yatak başı tanıda (eFAST) BT kadar duyarlıdır."
        ]
    },
    {
        "id": "emphysema",
        "name": "Amfizem (KOAH)",
        "category": "Obstrüktif",
        "findings": {
            "ct": {
                "non_contrast": "Parsiyel asiner (Sentrilobüler): Sigara ile ilişkili, üst lob ağırlıklı, santral lüsent alanlar. Panasiner: Alfa-1 antitripsin eksikliği, alt lob ağırlıklı. Paraseptal: Subplevral, üst lob, pnömotoraks riski. Büllöz: >1cm hava kistleri."
            },
            "xray": {
                "description": "Akciğer hacminde artış (Hiperinflasyon). Diyaframda düzleşme. Retrosternal mesafede artış. Kot aralıklarında genişleme. 'Damla kalp' (kalbin dikey ve küçük görünmesi)."
            }
        },
        "keyPoints": [
            "Sigara en önemli risk faktörüdür.",
            "Kor pulmonale (Sağ kalp yetmezliği) gelişebilir (Pulmoner arter genişlemesi >29mm).",
            "Saber-sheath trakea (Trakeanın koronal çapının daralması) eşlik edebilir."
        ]
    }
];
