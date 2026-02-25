import { Pathology } from '@/types';

export const lungPathologies: Pathology[] = [
    {
        "id": "lung_cancer",
        "name": "Akciğer Kanseri (NSCLC/SCLC)",
        "nameEn": "Lung Cancer (NSCLC/SCLC)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            { "url": "/images/lung/lung_cancer_ct.png", "caption": "BT - Spiküle Kitle", "modality": "CT" },
            { "url": "/images/lung/pancoast_mri.png", "caption": "MRI - Pancoast Tümörü", "modality": "MRI" }
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
        "findingsEn": {
            "ct": {
                "non_contrast": "Central (SCLC, Squamous): Hilar/peribronchial mass, atelectasis. Peripheral (Adenocarcinoma): Solid nodule/mass, spiculated margin, pleural tail.",
                "contrast": "Heterogeneous enhancement. Mediastinal LAP evaluation. Pleural effusion, chest wall invasion.",
                "bone_window": "Rib, vertebral destruction (T3-T4 staging)."
            },
            "mri": {
                "t1": "Pancoast tumor: Evaluation of brachial plexus, subclavian vessel invasion.",
                "t2": "Tumor-normal tissue contrast. Spinal canal invasion.",
                "dwi": "Restriction in solid tumors. Used for monitoring treatment response."
            }
        },
        "keyPoints": [
            "NSCLC (%85): Adenokarsinom (en sık), Skuamöz, Büyük hücreli.",
            "SCLC (%15): Santral, hızlı büyüme, paraneoplatik sendromlar.",
            "Evreleme: TNM (Tümör boyutu, Nodal tutulum, Metastaz).",
            "Ground-glass + solid = Part-solid nodül = Adenokarsinom şüpheli."
        ],
        "keyPointsEn": [
            "NSCLC (85%): Adenocarcinoma (most common), Squamous, Large cell.",
            "SCLC (15%): Central, rapid growth, paraneoplastic syndromes.",
            "Staging: TNM (Tumor size, Nodal involvement, Metastasis).",
            "Ground-glass + solid = Part-solid nodule = Suspicious for Adenocarcinoma."
        ],
        "mechanism": "Sigara karsinojenleri veya genetik mutasyonlar (EGFR, ALK, KRAS) → bronşiyal epitelde DNA hasarı → onkogen aktivasyonu / tümör supresör kaybı → kontrolsüz hücre proliferasyonu. Adenokarsinom subplevral asinerlerde gelişir (EGFR mutasyonu sık); skuamöz tip santral bronşlarda gelişir (skvamöz metaplazi → displazi → CIS → invaziv). SCLC nöroendokrin kökenden kaynaklanır, çok hızlı büyür.",
        "etiology": "Sigara (%85-90 risk faktörü), Radon gazı, Asbest, Mesleki karsinojenler (nikel, krom). EGFR mutasyonu: Sigara içmeyenler, Asya kökenli.",
        "differentialDiagnosis": ["Pnömoni (Ateş, CRP artışı, antibiyotiğe yanıt)", "Granülom (TB, histoplazma - kalsifikasyon)", "Karsinoid Tümör (Santral, düşük grade)", "Metastaz (Multipl nodüller, bilinen primer)"],
        "goldStandard": "BT-PET: Evreleme ve biyopsi kılavuzluğu. PET-CT: Mediastinal ve uzak metastaz değerlendirmesi. Biyopsi: Histolojik tip ve moleküler belirteç.",
        "clinicalPearl": "Spiküle kenar + Plevral çekme + Hiler adenopati = Akciğer kanseri. 'Satellite nodule' + Nodül >3cm = T2 evre.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "NCCN Clinical Practice Guidelines in Oncology: Non-Small Cell Lung Cancer. National Comprehensive Cancer Network; 2023.",
            "ACR Appropriateness Criteria: Lung Cancer Screening. American College of Radiology; 2021.",
            "Radiopaedia.org - Lung cancer"
        ]
    },
    {
        "id": "pulmonary_embolism",
        "name": "Pulmoner Emboli",
        "nameEn": "Pulmonary Embolism",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "gallery": [
            { "url": "/images/lung/pe_ct_angio.png", "caption": "BT Anjiyo - Dolum Defekti", "modality": "CT" },
            { "url": "/images/lung/hampton_hump_cxr.png", "caption": "CXR - Hampton's Hump", "modality": "X-Ray" }
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
        "findingsEn": {
            "ct": {
                "cta": "PULMONARY ARTERIAL PHASE: Intravascular filling defect. 'Polo mint sign' (Axial): Central hypodensity within the vessel. 'Railway track sign' (Coronal): Parallel hypodense thrombus.",
                "contrast": "Right ventricular dilatation (RV/LV >1 = Poor prognosis). Interventricular septum bowed to left. Pulmonary infarct: Wedge-shaped peripheral consolidation (Hampton's hump).",
                "non_contrast": "Insufficient for acute emboli diagnosis. Mosaic perfusion (chronic PE)."
            },
            "mri": {
                "mra": "MR pulmonary angiography: Alternative when contrast is contraindicated.",
                "t1_c": "Thrombus: Hypointense filling defect.",
                "other_sequences": "Perfusion MRI: Can be used as V/Q equivalent."
            }
        },
        "keyPoints": [
            "BT Pulmoner Anjiyo altın standart. Duyarlılık %90+.",
            "Wells Skoru + D-dimer: Düşük olasılık -> PE dışlanır.",
            "Sağ ventrikül strain: rV/LV >1, interventrikular septum bowing.",
            "'Saddle embolus': Ana pulmoner arter bifurkasyonu - Masif PE."
        ],
        "keyPointsEn": [
            "CT Pulmonary Angio is the gold standard. Sensitivity 90%+.",
            "Wells Score + D-dimer: Low probability -> PE excluded.",
            "Right ventricular strain: RV/LV >1, interventricular septum bowing.",
            "'Saddle embolus': Main pulmonary artery bifurcation - Massive PE."
        ],
        "mechanism": "Derin ven trombozu (DVT) → trombus kopması → sağ kalbe geçiş → pulmoner artere embolizasyon → damar tıkanması → perfüzyon azalması (ventilasyon korunur: V/Q uyumsuzluğu → hipoksi). Büyük tıkanmada sağ ventrikül afterload artar → RV dilatasyonu → sol kalp dolumu azalır → kardiyojenik şok. Pulmoner infarkt: Distal arterlerde tam tıkanma + yetersiz bronşiyal kollateral → wedge şekilli konsolidasyon (Hampton's hump).",
        "etiology": "DVT (Virchow triadı: Staz, Hiperkoagülabilite, Damar hasarı). Risk: Uzun yolculuk, Malignansi, OKS, Cerrahi sonrası, İmmobilizasyon.",
        "differentialDiagnosis": ["Pnömoni (Ateş, produktif öksürük, konsolidasyon)", "Pnömotoraks (Ani dispne, plevral hat X-ray)", "Akut koroner sendrom (EKG değişikliği, troponin)", "KOAH alevlenmesi (Kronik zemin, wheezing)"],
        "goldStandard": "BT Pulmoner Anjiografi (BTPA): Altın standart, duyarlılık >%90. V/Q sintigrafi: BT kontrendike ise (hamile, böbrek yetmezliği).",
        "clinicalPearl": "Polo mint sign (aksiyel) + Railway track sign (koronal) = PE. RV/LV >1 = Masif/submasif PE, kötü prognoz.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Pulmonary embolism"
        ]
    },
    {
        "id": "pneumonia",
        "name": "Pnömoni (Bakteriyel/Viral/COVID-19)",
        "nameEn": "Pneumonia (Bacterial/Viral/COVID-19)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "gallery": [
            { "url": "/images/lung/pneumonia_lobar.png", "caption": "BT - Lober Konsolidasyon", "modality": "CT" },
            { "url": "/images/lung/covid_ground_glass.png", "caption": "BT - Buzlu Cam (COVID-19)", "modality": "CT" }
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
        "findingsEn": {
            "ct": {
                "non_contrast": "BACTERIAL: Lobar consolidation, air-bronchograms, pleural effusion. VIRAL/ATYPICAL: Bilateral patchy ground-glass, peribronchial distribution. COVID-19: Bilateral, peripheral predominant ground-glass, crazy-paving pattern, subpleural bands.",
                "contrast": "Abscess: Ring enhancement, cavitation. Empyema: Pleural thickening and enhancement."
            },
            "mri": {
                "t2": "Consolidation: Heterogeneous hyperintense.",
                "dwi": "Abscess: Central restriction (distinguishes from necrotic material)."
            }
        },
        "keyPoints": [
            "Bakteriyel: Lober, akut. S. pneumoniae en sık.",
            "Viral/Atipik: Bilateral, interstisyel, ground-glass.",
            "COVID-19: Periferal ground-glass → Crazy paving → Konsolidasyon → Fibrozis progresyonu.",
            "Nekrotizan pnömoni: Multiple kavitasyon, Klebsiella, S. aureus."
        ],
        "keyPointsEn": [
            "Bacterial: Lobar, acute. S. pneumoniae most common.",
            "Viral/Atypical: Bilateral, interstitial, ground-glass.",
            "COVID-19: Peripheral ground-glass → Crazy paving → Consolidation → Fibrosis progression.",
            "Necrotizing pneumonia: Multiple cavitation, Klebsiella, S. aureus."
        ],
        "mechanism": "Bakteriyel: Patojenin alt solunum yollarına ulaşması → alveolar makrofajların yetersiz temizliği → bakteri proliferasyonu → nötrofil yanıtı → eksüda dolu alveoller (konsolidasyon). Viral/COVID-19: Hücresel immün yanıt ve sitokin fırtınası → difüz alveolar hasar → tip II pnömosit hasarı → surfaktan kaybı → alveoler kollaps → ground-glass opasiteler, crazy-paving. Nekrotizan: Vaskülit ve tromboz → akciğer parankimi nekrozu → kavitasyon.",
        "etiology": "Bakteriyel: S. pneumoniae (en sık toplum kökenli), H. influenzae, S. aureus, Klebsiella (alkolikler). Atipik: Mycoplasma, Legionella, Chlamydia. Viral: İnfluenza, RSV, SARS-CoV-2. Risk faktörleri: İleri yaş, immünsüpresyon, KOAH, sigara, aspirasyon.",
        "differentialDiagnosis": ["Pulmoner Ödem (Kardiyomegali, bilateral perihiler, sefalizasyon)", "Pulmoner Hemoraji (Hemoptizi, diffüz GGO, anemi)", "Organize Pnömoni (COP — periferik konsolidasyon, reverse halo)", "Eozinofilik Pnömoni (Periferal konsolidasyon, eozinofili)", "Akciğer Kanseri (Obstrüktif pnömoni, persistan infiltrat)"],
        "goldStandard": "Göğüs grafisi: İlk basamak tanı. BT toraks: Komplikasyon (apse, ampiyem) ve ayırıcı tanıda. Balgam kültürü ve kan kültürü: Etken tespiti.",
        "clinicalPearl": "Lober konsolidasyon + air-bronchogram + ateş = Bakteriyel pnömoni. Antibiyotiğe 48-72 saatte yanıt yoksa BT çek → apse, ampiyem veya altta yatan obstrüktif lezyon (tümör) araştır.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Pneumonia"
        ]
    },
    {
        "id": "lung_nodule",
        "name": "Akciğer Nodülü (Fleischner Kriterleri)",
        "nameEn": "Lung Nodule (Fleischner Criteria)",
        "category": "Belirsiz",
        "categoryEn": "Indeterminate",
        "gallery": [
            { "url": "/images/lung/nodule_spiculated.png", "caption": "BT - Spiküle Solita Nodül", "modality": "CT" },
            { "url": "/images/lung/nodule_ground_glass.png", "caption": "BT - Subsolid Nodül", "modality": "CT" }
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
        "findingsEn": {
            "ct": {
                "non_contrast": "SOLID NODULE: Homogeneous soft tissue density. SUBSOLID: Part-solid (solid + ground-glass) or Pure ground-glass. Morphology: Spiculated, lobulated, smooth margins.",
                "contrast": ">15 HU increase = Vascular nodule (suspicious for malignancy).",
                "evolution": "Volume doubling time: <400 days = High suspicion of malignancy."
            },
            "mri": {
                "dwi": "Tendency for restriction in malignant nodules.",
                "t1_c": "Evaluation of solid nodule enhancement."
            }
        },
        "keyPoints": [
            "Fleischner 2017: Solid ve subsolid nodüller için ayrı algoritmalar.",
            "<6mm solid nodül (düşük risk): Takip gerekmez.",
            "Part-solid nodül: Solid komponent >6mm = Yüksek malignite riski.",
            "PET-CT: >8mm solid nodül metabolik değerlendirme için önerilir."
        ],
        "keyPointsEn": [
            "Fleischner 2017: Separate algorithms for solid and subsolid nodules.",
            "<6mm solid nodule (low risk): No follow-up needed.",
            "Part-solid nodule: Solid component >6mm = High malignancy risk.",
            "PET-CT: Recommended for metabolic evaluation of >8mm solid nodules."
        ],
        "mechanism": "Solid nodül: Tam solid doku proliferasyonu — granülom (enfeksiyöz: TB, histoplazma), karsinoid, metastaz veya primer malignite. Subsolid/ground-glass nodül: Kısmi alveol dolumu ile birlikte hava korunumu — atipik adenomatöz hiperplazi (AAH) → in situ adenokarsinom (AIS) → minimal invaziv adenokarsinom (MIA) → invaziv adenokarsinom malignisite spektrumu. Solid komponent arttıkça invazyon artmaktadır.",
        "etiology": "Benign: Granülom (TB, histoplazmoz), hamartom (en sık benign tümör — yağ + popcorn kalsifikasyon), intrapulmoner lenf nodu. Malign: Primer akciğer kanseri (adenokarsinom en sık), metastaz, karsinoid tümör. Premalign: AAH, AIS.",
        "differentialDiagnosis": ["Granülom (Kalsifiye, stabil boyut, santral/lameller/popcorn kalsifikasyon)", "Hamartom (Yağ + kalsifikasyon, düzgün kenar)", "Metastaz (Multipl, bilinen primer)", "Karsinoid Tümör (Santral, vasküler kontrastlanma)", "İntrapulmoner Lenf Nodu (Subplevral, <12mm, alt lob)"],
        "goldStandard": "İnce kesit BT (≤1mm): Nodül morfolojisi ve dansitesi. PET-BT: >8mm solid nodüllerde metabolik aktivite. Lung-RADS ve Fleischner kriterleri: Takip algoritması. Biyopsi: Büyüyen veya şüpheli nodüllerde.",
        "clinicalPearl": "Spiküle kenar + büyüme + PET pozitiflik = Malign. Stabil >2 yıl + düzgün kenar + kalsifikasyon = Benign. Part-solid nodülde solid komponent >6mm ise malignite riski çok yüksek — hemen biyopsi veya rezeksiyon planla.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Pulmonary nodule"
        ]
    },
    {
        "id": "pneumothorax",
        "name": "Pnömotoraks",
        "nameEn": "Pneumothorax",
        "category": "Travma/İyatrojenik",
        "categoryEn": "Trauma/Iatrogenic",
        "gallery": [
            { "url": "/images/lung/pneumothorax_cxr.png", "caption": "CXR - Plevral Hat", "modality": "X-Ray" },
            { "url": "/images/lung/pneumothorax_ct.png", "caption": "BT - Serbest Hava", "modality": "CT" }
        ],
        "findings": {
            "xray": {
                "description": "Visseral plevra çizgisi (ince beyaz hat). Periferde damar izlerinin olmaması (radyolusent alan). Derin sulkus (Deep sulcus) işareti (yatan hastada)."
            },
            "ct": {
                "non_contrast": "Plevral boşlukta SERBEST HAVA. Visseral plevra çizgisi görülür. Akciğer kollapsı derecesi. Tansiyon pneumotoraks: Mediastinal şift, kontralateral tarafa itilme.",
                "bone_window": "Subkutan amfizem. Kot fraktürü (travmatik)."
            },
            "ultrasound": {
                "description": "'Lung sliding' KAYBI (en hassas bulgulardan). 'Barcode sign' (M-mode): Paralel çizgiler (normal 'seashore' paterni yerine). 'Lung point': Pnömotoraks sınırı - Patognomonik.",
                "doppler": "Kullanılmaz."
            }
        },
        "findingsEn": {
            "xray": {
                "description": "Visceral pleural line (thin white line). Absence of lung markings in periphery (radiolucent area). Deep sulcus sign (in supine patient)."
            },
            "ct": {
                "non_contrast": "FREE AIR in pleural space. Visceral pleural line visible. Degree of lung collapse. Tension pneumothorax: Mediastinal shift, displacement to contralateral side.",
                "bone_window": "Subcutaneous emphysema. Rib fracture (traumatic)."
            },
            "ultrasound": {
                "description": "Loss of 'Lung sliding' (one of the most sensitive signs). 'Barcode sign' (M-mode): Parallel lines (instead of normal 'seashore' pattern). 'Lung point': Pneumothorax border - Pathognomonic."
            }
        },
        "keyPoints": [
            "Tansiyon pneumotoraks: ACİL dekompresyon (iğne/tüp).",
            "Supin BT: Anterior/medial hava birikimi ('deep sulcus sign' X-ray'de).",
            "Primer spontan: Genç, uzun, erkek, apikal bleb.",
            "USG, yatak başı tanıda (eFAST) BT kadar duyarlıdır."
        ],
        "keyPointsEn": [
            "Tension pneumothorax: URGENT decompression (needle/tube).",
            "Supine CT: Anterior/medial air accumulation ('deep sulcus sign' on X-ray).",
            "Primary spontaneous: Young, tall, male, apical bleb.",
            "USG is as sensitive as CT in bedside diagnosis (eFAST)."
        ],
        "mechanism": "Visseral veya pariyetal plevra bütünlüğünün bozulması → plevral boşluğa hava kaçışı → akciğer elastik geri çekim kuvveti ile çöküş. Primer spontan: Apikal subplevral bleb rüptürü (genç, uzun erkeklerde zayıf mezoteliyal doku). Tansiyon: Tek yönlü valf mekanizması → inspirasyonda hava girer, ekspirasyonda çıkamaz → giderek artan basınç → mediastinal şift → karşı akciğer ve venöz dönüş baskılanması → kardiyovasküler kollaps.",
        "etiology": "Primer spontan: Apikal bleb rüptürü (genç, uzun, zayıf erkek, sigara). Sekonder spontan: KOAH/amfizem, kistik fibrozis, Langerhans hücreli histiyositoz, LAM, Pneumocystis pnömonisi. Travmatik: Künt/penetran göğüs travması, kot fraktürü. İyatrojenik: Santral venöz kateter, torasentez, mekanik ventilasyon (barotravma).",
        "differentialDiagnosis": ["Büllöz Amfizem (Dev bül, pnömotoraks taklidi — BT ile ayırt)", "Pnömomediastinum (Mediastinal hava, subkutan amfizem)", "Diyafragma Rüptürü (Travma, abdominal organ herniasyonu)", "Plevral Effüzyon (Opak hemitoraks, menisküs)", "Dev Bül (İnce duvar, çevresinde normal parankim)"],
        "goldStandard": "BT toraks: En hassas yöntem, küçük pnömotoraksları tespit eder. Akciğer grafisi (PA inspiryum): İlk basamak tanı. USG (eFAST): Acil yatak başı tanıda, lung sliding kaybı ve lung point.",
        "clinicalPearl": "Supin hastada pnömotoraks anterior birikir → PA grafide görülmeyebilir → 'deep sulcus sign' araştır. USG'de lung sliding yokluğu + barcode sign + lung point = Pnömotoraks kesin tanı. Tansiyon pnömotoraks klinik tanıdır — görüntüleme bekleme, hemen iğne dekompresyon!",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Pneumothorax"
        ]
    },
    {
        "id": "interstitial_lung_disease",
        "name": "İnterstisyel Akciğer Hastalığı (ILD/UIP)",
        "nameEn": "Interstitial Lung Disease (ILD/UIP)",
        "category": "Fibrotik",
        "categoryEn": "Fibrotic",
        "gallery": [
            { "url": "/images/lung/ild_honeycombing.png", "caption": "HRCT - Bal Peteği (Honeycombing)", "modality": "CT" },
            { "url": "/images/lung/ild_traction.png", "caption": "HRCT - Traksiyon Bronşektazi", "modality": "CT" }
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
        "findingsEn": {
            "ct": {
                "non_contrast": "UIP (Idiopathic Pulmonary Fibrosis): BASILAR, SUBPLEURAL predominance. 'Honeycombing': Cystic air spaces, thick walls - PATHOGNOMONIC. Traction bronchiectasis. Minimal or no ground-glass.",
                "contrast": "Usually not required. Can be used for complications (pulmonary HT).",
                "evolution": "NSIP: More ground-glass, less honeycombing. Better prognosis."
            },
            "mri": {
                "t2": "Fibrotic areas hypointense. Active inflammation hyperintense.",
                "other_sequences": "Functional MRI: Ventilation/perfusion assessment."
            }
        },
        "keyPoints": [
            "UIP paterni = IPF tanısı için yeterli (biyopsi gerekmez).",
            "Honeycombing + Traksiyon bronşektazi + Baziler/subplevral = UIP kesin.",
            "NSIP vs UIP: NSIP'te ground-glass fazla, honeycombing yok/az.",
            "HRCT: 1-2mm kesit kalınlığı, yüksek çözünürlük gerekli."
        ],
        "keyPointsEn": [
            "UIP pattern = Sufficient for IPF diagnosis (biopsy not required).",
            "Honeycombing + Traction bronchiectasis + Basilar/subpleural = Definite UIP.",
            "NSIP vs UIP: NSIP has more ground-glass, no/little honeycombing.",
            "HRCT: 1-2mm slice thickness, high resolution required."
        ],
        "mechanism": "Kronik alveolar epitelyal hasar (tip II pnömosit) → anormal yara iyileşmesi → fibroblast aktivasyonu (TGF-β, PDGF) → aşırı ECM depolanması → akciğer parankim mimarisinin bozulması. Baziler/subplevral tutulum: Bu bölgelerdeki mekanik strese duyarlılık ile ilişkilidir. Honeycombing: Alveol gruplarının fibröz doku ile dolması ve birbirine yapışarak kistik hava boşlukları oluşturması.",
        "etiology": "İdiyopatik: IPF (UIP paterni), NSIP, COP, AIP, DIP, RB-ILD, LIP. Otoimmün/kollajen vasküler: Romatoid artrit, skleroderma, SLE, dermatomiyozit. Çevresel/mesleki: Hipersensitivite pnömonisi (kuş besleyici, çiftçi akciğeri), pnömokonyozlar (asbestoz, silikoz). İlaca bağlı: Metotreksat, amiodaron, bleomisin, nitrofurantoin.",
        "differentialDiagnosis": ["NSIP (Ground-glass baskın, honeycombing az/yok, daha iyi prognoz)", "Hipersensitivite Pnömonisi (Üst/orta lob, mozaik atenüasyon, antijen maruziyeti)", "Sarkoidoz (Perilenfatik nodüller, hiler LAP)", "Asbestoz (Asbest öyküsü, plevral plaklar, bazal fibrozis)", "İlaca Bağlı Pnömoni (İlaç öyküsü, çekilince düzelme)"],
        "goldStandard": "HRCT toraks (1-2mm ince kesit): UIP/NSIP/COP patern tanıma. Multidisipliner değerlendirme (radyoloji + pulmonoloji + patoloji): Kesin tanı. Cerrahi akciğer biyopsisi: HRCT belirsiz ise.",
        "clinicalPearl": "HRCT'de baziler honeycombing + traksiyon bronşektazi + retiküler opasite + minimal GGO = UIP → biyopsi gerekmeden IPF tanısı konabilir. GGO baskınsa NSIP düşün — steroid yanıtı daha iyidir ve prognoz UIP'ten belirgin olarak daha iyidir.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Interstitial lung disease"
        ]
    },
    {
        "id": "ipf",
        "name": "İdiopatik Pulmoner Fibrozis (IPF / UIP)",
        "nameEn": "Idiopathic Pulmonary Fibrosis (IPF / UIP)",
        "category": "İnterstisyel",
        "categoryEn": "Interstitial",
        "findings": {
            "ct": {
                "non_contrast": "UIP Paterni: Bazal ve subplevral ağırlıklı tutulum. Balpeteği (Honeycombing) kistleri. Traksiyon bronşiektazileri. Retiküler opasiteler. Buzlu cam (Ground-glass) baskın DEĞİLDİR (Baskınsa NSIP düşün)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "UIP Pattern: Basal and subpleural predominant involvement. Honeycombing cysts. Traction bronchiectasis. Reticular opacities. Ground-glass is NOT dominant (If dominant, consider NSIP)."
            }
        },
        "keyPoints": [
            "Progresif dispne ve kuru öksürük (Yaşlı erkek hasta).",
            "UIP paterni (BT) + Klinik uyum = Biyopsi gerekmez.",
            "Balpeteği görünümü (3-10mm kistler) kötü prognoz işaretidir."
        ],
        "keyPointsEn": [
            "Progressive dyspnea and dry cough (Elderly male patient).",
            "UIP pattern (CT) + Clinical correlation = No biopsy needed.",
            "Honeycombing appearance (3-10mm cysts) is a sign of poor prognosis."
        ],
        "mechanism": "Bilinmeyen tetikleyici → tekrarlayan epitelyal mikro-hasarlar → TGF-β mediated fibroblast aktivasyonu → miyofibroblastlara dönüşüm → kollajen birikimi. Alveolar yüzey azalır → gaz değişimi bozulur → restriktif patern. Baziler subplevral tutulum, bu bölgelerin solunum sırasındaki gerilme kuvvetlerine olan duyarlılığıyla açıklanır.",
        "etiology": "İdiyopatik (tanım gereği nedeni bilinmez). Risk faktörleri: Sigara (en güçlü risk), ileri yaş (>60), erkek cinsiyet, gastroözofageal reflü (mikroaspirasyon), genetik yatkınlık (MUC5B, TERT mutasyonları). Ailesel formlar: Telomeraz mutasyonları.",
        "differentialDiagnosis": ["NSIP (GGO baskın, honeycombing yok/az, bazal/subplevral, daha iyi prognoz)", "Kronik Hipersensitivite Pnömonisi (Üst/orta lob fibrozis, mozaik atenüasyon, antijen öyküsü)", "Asbestoz (Asbest maruziyeti, plevral plaklar)", "Kollajen Vasküler Hastalık İlişkili ILD (Genç kadın, otoimmün belirteçler)", "İlaca Bağlı Fibrozis (Amiodaron, bleomisin öyküsü)"],
        "goldStandard": "HRCT toraks: UIP paterni (kesin, olası, belirsiz). ATS/ERS/JRS/ALAT 2022 kılavuzu: Kesin UIP paterni + klinik uyum = Biyopsisiz IPF tanısı. Cerrahi akciğer biyopsisi: Belirsiz HRCT paterninde.",
        "clinicalPearl": "Yaşlı erkek + progresif dispne + kuru öksürük + bilateral bazal Velcro ralleri + HRCT'de kesin UIP paterni = IPF tanısı biyopsisiz konur. Medyan sağkalım 3-5 yıl. Antifibrotik tedavi (pirfenidon, nintedanib) progresyonu yavaşlatır ama iyileştirmez.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Idiopathic pulmonary fibrosis"
        ]
    },
    {
        "id": "emphysema",
        "name": "Amfizem (KOAH)",
        "nameEn": "Emphysema (COPD)",
        "category": "Obstrüktif",
        "categoryEn": "Obstructive",
        "findings": {
            "ct": {
                "non_contrast": "Parsiyel asiner (Sentrilobüler): Sigara ile ilişkili, üst lob ağırlıklı, santral lüsent alanlar. Panasiner: Alfa-1 antitripsin eksikliği, alt lob ağırlıklı. Paraseptal: Subplevral, üst lob, pnömotoraks riski. Büllöz: >1cm hava kistleri."
            },
            "xray": {
                "description": "Akciğer hacminde artış (Hiperinflasyon). Diyaframda düzleşme. Retrosternal mesafede artış. Kot aralıklarında genişleme. 'Damla kalp' (kalbin dikey ve küçük görünmesi)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Centrilobular: Smoking-related, upper lobe predominant, central lucent areas. Panacinar: Alpha-1 antitrypsin deficiency, lower lobe predominant. Paraseptal: Subpleural, upper lobe, pneumothorax risk. Bullous: >1cm air cysts."
            },
            "xray": {
                "description": "Increased lung volume (Hyperinflation). Flattening of diaphragm. Increased retrosternal space. Widening of rib spaces. 'Teardrop heart' (heart appearing vertical and small)."
            }
        },
        "keyPoints": [
            "Sigara en önemli risk faktörüdür.",
            "Kor pulmonale (Sağ kalp yetmezliği) gelişebilir (Pulmoner arter genişlemesi >29mm).",
            "Saber-sheath trakea (Trakeanın koronal çapının daralması) eşlik edebilir."
        ],
        "keyPointsEn": [
            "Smoking is the most important risk factor.",
            "Cor pulmonale (Right heart failure) may develop (Pulmonary artery enlargement >29mm).",
            "Saber-sheath trachea (narrowing of coronal diameter of trachea) may be associated."
        ],
        "mechanism": "Sigara dumanı veya alfa-1 antitripsin eksikliği → proteaz/antiproteaz dengesizliği (nötrofil elastaz artışı, alfa-1 antitripsin azalması) → alveolar duvar yıkımı → hava boşluğu genişlemesi → akciğer elastisitesi azalır → hava hapsi. Sentrilobüler amfizem: Sigara ile ilişkili, merkezi asiner hasar. Panasiner: Tüm asiner yıkım. Hiperinflasyon ve flatleşen diyafram bu gaz hapsi mekanizmasının yansımasıdır.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Pulmonary emphysema"
        ]
    },
    {
        "id": "pleural_effusion",
        "name": "Plevral Effüzyon",
        "nameEn": "Pleural Effusion",
        "category": "Plevral",
        "categoryEn": "Pleural",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "Akciğer Grafisi - Menisküs İşareti", "modality": "X-Ray" },
            { "url": "/images/placeholder_source.png", "caption": "BT - Bilateral Plevral Efüzyon", "modality": "CT" },
            { "url": "/images/placeholder_source.png", "caption": "USG - Anekojenik Efüzyon", "modality": "USG" }
        ],
        "findings": {
            "xray": {
                "description": "PA Grafi: 200-300mL'den fazla efüzyon görülebilir. Kostofrenlik açısı körleşmesi (blunting). Menisküs işareti: Konkav üst sınır. Büyük efüzyon: Hemitoraks opasitesi, mediasten kontralaterale yer değiştirme. Lateral dekübit: 5mL kadar küçük efüzyonu gösterir. Subpulmoner: Diyaframa şişme, 'düzleşmiş' köşe."
            },
            "ct": {
                "non_contrast": "Bağımlı (posterior) alanda serbest sıvı. HU değeri: Transüda (0-15), Eksüda/Hemorajik (>20-30). Lokulasiyon (kompartmanlar arası bölücüler) eksüdayı düşündürür.",
                "contrast": "Plevral kalınlaşma + kontrastlanma = Eksüda (apse, tümör). Plevral kitle veya nodül = Malign mezotelyoma, metastaz."
            },
            "ultrasound": {
                "description": "En hassas yöntem (5-10mL görülebilir). Anekojenik (basit transüda). İç ekolar/septalar = Eksüda, ampiyem. 'Jellyfish sign': Efüzyon içinde yüzen kompresyon atelektazisi. Torasentez kılavuzluğu için ideal."
            },
            "mri": {
                "t2": "Serbest sıvı T2 hiperintens. Hemotoraksta T1 hiperintens (oksihemoglobin).",
                "other_sequences": "DWI: Ampiyemde kısıtlanma (apse içeriği)."
            }
        },
        "findingsEn": {
            "xray": {
                "description": "PA Chest X-ray: >200-300mL detectable. Costophrenic angle blunting. Meniscus sign: Concave upper border. Large effusion: Hemithorax opacity, contralateral mediastinal shift. Lateral decubitus: Detects as little as 5mL. Subpulmonic: Elevated hemidiaphragm, flat costophrenic angle."
            },
            "ct": {
                "non_contrast": "Dependent (posterior) free fluid. HU values: Transudate (0-15), Exudate/Hemorrhagic (>20-30). Loculation (septae) suggests exudate.",
                "contrast": "Pleural thickening + enhancement = Exudate (abscess, tumor). Pleural mass or nodule = Malignant mesothelioma, metastasis."
            },
            "ultrasound": {
                "description": "Most sensitive (detects 5-10mL). Anechoic (simple transudate). Internal echoes/septae = Exudate, empyema. 'Jellyfish sign': Compressive atelectasis floating in effusion. Ideal for thoracentesis guidance."
            },
            "mri": {
                "t2": "Free fluid T2 hyperintense. Hemothorax: T1 hyperintense (oxyhemoglobin).",
                "other_sequences": "DWI: Restriction in empyema (abscess content)."
            }
        },
        "keyPoints": [
            "X-Ray: Kostofrenlik körleşmesi = >200mL. Lateral dekübit = >5mL.",
            "USG: En hassas, torasentez kılavuzluğu için altın standart.",
            "BT: HU <15 = Transüda. HU >20 = Eksüda/hemorajik. Plevral kalınlaşma = Eksüda.",
            "Light Kriterleri: Eksüda vs transüda ayırımı (klinik-laboratuvar)."
        ],
        "keyPointsEn": [
            "X-Ray: Costophrenic blunting = >200mL. Lateral decubitus = >5mL.",
            "USG: Most sensitive, gold standard for thoracentesis guidance.",
            "CT: HU <15 = Transudate. HU >20 = Exudate/hemorrhagic. Pleural thickening = Exudate.",
            "Light's Criteria: Exudate vs transudate differentiation (clinical-lab)."
        ],
        "mechanism": "Plevral sıvı oluşumu: Parietal plevradan sıvı üretimi > visseral plevradan emilim. Transüda: Hidrostatik basınç artışı (KKY) veya onkotik basınç azalması (hipoalbüminemi) → osmotik kuvvetler bozulur. Eksüda: İnflamasyon/tümör → kapiller geçirgenlik artışı → protein ve hücre kaçışı. Hematotoraks: Travma/kanama. Şilotoraks: Torasik duktus hasarı.",
        "etiology": "Transüda: KKY, siroz, nefrotik sendrom, perikardit. Eksüda: Pnömoni, tüberküloz, malignite, PE, pankreatit. Hematotoraks: Travma, aort diseksiyonu.",
        "differentialDiagnosis": ["Pnömoni (Konsolidasyon, ateş)", "Atelektazi (Volüm kaybı)", "Diyafragma Elevasyonu", "Plevral Kitle (Nodüler, kalın)"],
        "goldStandard": "USG (tanı + torasentez kılavuzluğu). BT: Etiyoloji ve komplikasyon değerlendirmesi.",
        "clinicalPearl": "Masif efüzyon + kontralateral mediastinal yer değiştirme = Serbest efüzyon. İpsilateral yer değiştirme YOK = Atelektazi veya malign mezotelyoma (plevral tutulum akciğeri sabitler).",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Pleural effusion"
        ]
    },
    {
        "id": "pulmonary_tuberculosis",
        "name": "Pulmoner Tüberküloz (Akciğer Verem)",
        "nameEn": "Pulmonary Tuberculosis",
        "category": "Enfeksiyöz",
        "categoryEn": "Infectious",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "Akciğer Grafisi - Üst Lob Kavite", "modality": "X-Ray" },
            { "url": "/images/placeholder_source.png", "caption": "HRCT - Ağaç Tomurcuğu (Tree-in-Bud)", "modality": "CT" }
        ],
        "findings": {
            "xray": {
                "description": "Primer TB: Alt/orta lob konsolidasyon, hiler adenopati. Ghon kompleksi (kalsifik nodül + kalsifik hiler LAP). Post-primer (Reaktivasyon) TB: ÜST LOB dominansı, apikoposterior segment. Kavite oluşumu (ince/kalın duvarlı). Milyer TB: 1-3mm yayılmış nodüller (hematojenik). Plevral effüzyon (özellikle primer TB)."
            },
            "ct": {
                "non_contrast": "Tree-in-bud: Sentrilobüler nodüller + dallanma opasite = Endobronşial yayılım (aktif!). Kavite: Kalın düzensiz duvar (aktif) veya ince düzgün duvar (eski). Kalsifik granülom, Ranke kompleksi.",
                "contrast": "Lenfadenit: Merkezi düşük dansite + periferal rim kontrastlanması (nekrotik LAP = TB'e özgü). Milyer: Milimetrik nodüller akciğer parankiminde diffüz dağılım."
            },
            "mri": {
                "t2": "Konsolidasyon, kavite duvarı. Vertebral TB (Pott): Disk mesafesi daralması, paravertebral apse.",
                "t1_c": "Nekrotik LAP: Periferal rim kontrastlanması.",
                "dwi": "Apse formasyonunda kısıtlanma."
            }
        },
        "findingsEn": {
            "xray": {
                "description": "Primary TB: Lower/middle lobe consolidation, hilar adenopathy. Ghon complex (calcified nodule + calcified hilar LAP). Post-primary (Reactivation) TB: UPPER LOBE dominance, apicoposterior segment. Cavity formation (thin/thick-walled). Miliary TB: 1-3mm disseminated nodules (hematogenous). Pleural effusion (especially primary TB)."
            },
            "ct": {
                "non_contrast": "Tree-in-bud: Centrilobular nodules + branching opacity = Endobronchial spread (active!). Cavity: Thick irregular wall (active) or thin smooth wall (old). Calcified granuloma, Ranke complex.",
                "contrast": "Lymphadenitis: Central low density + peripheral rim enhancement (necrotic LAP = specific to TB). Miliary: Millimetric nodules diffusely distributed in lung parenchyma."
            },
            "mri": {
                "t2": "Consolidation, cavity wall. Vertebral TB (Pott's): Disc space narrowing, paravertebral abscess.",
                "t1_c": "Necrotic LAP: Peripheral rim enhancement.",
                "dwi": "Restriction in abscess formation."
            }
        },
        "keyPoints": [
            "Reaktivasyon TB: Üst lob + apikal segment + kavite = Klasik triad.",
            "Tree-in-bud işareti: Aktif endobronşial yayılım, bulaşıcılık işareti.",
            "Nekrotik LAP: Merkezi düşük dansite + rim kontrastlanma = TB'e özgü.",
            "Milyer TB: Hematojenik yayılım, immünsüprese hastalarda sık."
        ],
        "keyPointsEn": [
            "Reactivation TB: Upper lobe + apical segment + cavity = Classic triad.",
            "Tree-in-bud sign: Active endobronchial spread, infectivity marker.",
            "Necrotic LAP: Central low density + rim enhancement = Specific to TB.",
            "Miliary TB: Hematogenous spread, common in immunosuppressed patients."
        ],
        "mechanism": "Mycobacterium tuberculosis inhalasyonu → alveolar makrofajlarca fagosite edilir → granülom oluşumu (Langhans dev hücreli). Primer infeksiyonda: Alt/orta lob tutulumu, hiler LAP (Ghon kompleksi). İmmün kontrol altında latent kalır. Reaktivasyon: İmmünsüpresyon → üst lob apikal bölgeye hematojenik yayılım (yüksek O2 gerilimi) → kazeöz nekroz → kavite → endobronşial yayılım (tree-in-bud). Hematojenik yayılım → milyer TB (karaciğer, dalak, meninks, kemik).",
        "etiology": "Mycobacterium tuberculosis. Risk: HIV, immünsüpresyon, DM, kronik böbrek hastalığı, malnütrisyon, kalabalık ortam.",
        "differentialDiagnosis": ["Akciğer Kanseri (Üst lob kitle, spiküle)", "Fungal Enfeksiyon (Aspergilloz, Kavite + halo)", "Sarkoidoz (Hiler LAP, üst lob nodüller)", "Bakteriyel Pnömoni (Alt lob, akut klinik)"],
        "goldStandard": "Balgam ARB + Kültür (Löwenstein-Jensen). Moleküler: GeneXpert MTB/RIF (hızlı tanı). Görüntüleme destekleyicidir.",
        "clinicalPearl": "Üst lob + kavite + tree-in-bud = Aktif TB ekarte edilmeli. Nekrotik LAP'ta rim kontrastlanma TB'e özgüdür — lenfoma ve metastazdan ayırır.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Pulmonary tuberculosis"
        ]
    },
    {
        "id": "lung_abscess",
        "name": "Akciğer Apsesi",
        "nameEn": "Lung Abscess",
        "category": "Enfeksiyöz",
        "categoryEn": "Infectious",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "Akciğer Grafisi - Hava-Sıvı Seviyesi", "modality": "X-Ray" },
            { "url": "/images/placeholder_source.png", "caption": "BT - Kalın Duvarlı Kavite + Air-Fluid Level", "modality": "CT" }
        ],
        "findings": {
            "xray": {
                "description": "Kalın duvarlı kavite. İçinde hava-sıvı seviyesi (air-fluid level): Horizontal sınır — aspirasyon veya nekrotizan pnömonide. Alt lob, posterior segment sık (aspirasyona bağlı). Çevre parankimde konsolidasyon."
            },
            "ct": {
                "non_contrast": "Kalın, düzensiz kenarlı kaviter lezyon. İçinde hava-sıvı seviyesi. Çevresinde konsolidasyon/buzlu cam.",
                "contrast": "Duvar kontrastlanması (iltihabi granülasyon dokusu). DİKKAT: İnce, düzgün kenarlı kavite = Tümör kavitasyonu veya bül. Kalın, düzensiz = Apse."
            },
            "mri": {
                "t2": "Kavite içeriği T2 hiperintens (sıvı). Duvar T2 orta-düşük sinyal.",
                "dwi": "Apse içeriğinde belirgin kısıtlanma (piojenik materyal) — Nekrotik tümörden ayırır.",
                "t1_c": "Duvar kontrastlanması."
            }
        },
        "findingsEn": {
            "xray": {
                "description": "Thick-walled cavity. Internal air-fluid level: Horizontal border — aspiration or necrotizing pneumonia. Lower lobe, posterior segment common (aspiration-related). Surrounding parenchymal consolidation."
            },
            "ct": {
                "non_contrast": "Thick, irregular-walled cavitary lesion. Internal air-fluid level. Surrounding consolidation/ground-glass.",
                "contrast": "Wall enhancement (inflammatory granulation tissue). NOTE: Thin, smooth-walled cavity = Tumor cavitation or bulla. Thick, irregular = Abscess."
            },
            "mri": {
                "t2": "Cavity content T2 hyperintense (fluid). Wall intermediate-low signal.",
                "dwi": "Marked restriction within abscess content (pyogenic material) — distinguishes from necrotic tumor.",
                "t1_c": "Wall enhancement."
            }
        },
        "keyPoints": [
            "Hava-sıvı seviyesi + Kalın düzensiz duvar = Apse (Tümörden: DWI kısıtlanma!).",
            "Aspirasyon apseleri: Alt lob posterior segmentler, sağ > sol.",
            "DWI: Apse içeriği kısıtlanır → nekrotik tümörle en önemli ayırıcı.",
            "Antibiyotik yanıtı (4-6 hafta) veya yok → Perkütan/cerrahi drenaj."
        ],
        "keyPointsEn": [
            "Air-fluid level + Thick irregular wall = Abscess (vs Tumor: DWI restriction!).",
            "Aspiration abscesses: Lower lobe posterior segments, right > left.",
            "DWI: Abscess content restricts → most important distinguisher from necrotic tumor.",
            "Antibiotic response (4-6 weeks) or failure → Percutaneous/surgical drainage."
        ],
        "mechanism": "Pulmoner parankim nekrozu → kavite oluşumu. Aspirasyon (en sık): Bilinç bozukluğu, disfaji, periodontal hastalık → anaerobik bakteri (Bacteroides, Fusobacterium). Pnömoni komplikasyonu: Stafilokokal, Klebsiella nekrotizan pnömoni. Septik emboli: Sağ kalp endokarditi → pulmoner emboli → infarkt → kavitasyon.",
        "etiology": "Aspirasyon (en sık), nekrotizan pnömoni, septik emboli, pulmoner infarkt. Risk: Alkolizm, epilepsi, anestezi, disfaji.",
        "differentialDiagnosis": ["Kaviter Akciğer Kanseri (DWI kısıtlanma yok, ince düzgün duvar)", "TB Kavitesi (Üst lob, tree-in-bud)", "Wegener/GPA (Bilateral, multipl)", "Bül/Amfizematöz Kavite (İnce duvar, sıvı yok)"],
        "goldStandard": "BT + Balgam kültürü/bronkoskopi. DWI → apse içeriğini tümörden ayırır.",
        "clinicalPearl": "DWI'da apse içeriği kısıtlanır (parlak), nekrotik tümör kısıtlanmaz → BT'de kavitasyon gördüğünde MRI-DWI yapmanın değeri büyüktür.",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Lung abscess"
        ]
    },
    {
        "id": "sarcoidosis",
        "name": "Sarkoidoz",
        "nameEn": "Sarcoidosis",
        "category": "İnflamatuar",
        "categoryEn": "Inflammatory",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "Akciğer Grafisi - Bilateral Hiler LAP", "modality": "X-Ray" },
            { "url": "/images/placeholder_source.png", "caption": "HRCT - Perilenfatik Nodüller", "modality": "CT" }
        ],
        "findings": {
            "xray": {
                "description": "Evreleme (Scadding): Evre 0 Normal. Evre I: Bilateral hiler LAP (BHL). Evre II: BHL + pulmoner infiltrat. Evre III: Pulmoner infiltrat (BHL yok). Evre IV: Fibrozis. BHL: Simetrik, lobüler hiler büyüme ('potato nodes'). Paratrakeal LAP: Sağ > Sol."
            },
            "ct": {
                "non_contrast": "Perilenfatik dağılım: Bronkovasküler yapılar, septal çizgiler, plevra boyunca nodüller (PATOGNOMONİK!). Üst-orta lob predominansı. 'Galaxy sign': Konfluent sarkoid granülomlar. 'Halo sign': Merkezi konsolidasyon + çevre buzlu cam.",
                "contrast": "LAP kontrastlanması. Kardiyak sarkoidoz şüphesinde kalp MRI."
            },
            "mri": {
                "other_sequences": "Kardiyak MRI: Gadolinium geç tutulumu (LGE) → kardiyak sarkoidoz. Nöronal MRI: Leptomeningeal tutulum, kranial sinir tutulumu."
            }
        },
        "findingsEn": {
            "xray": {
                "description": "Scadding staging: Stage 0: Normal. Stage I: Bilateral hilar LAP (BHL). Stage II: BHL + pulmonary infiltrate. Stage III: Pulmonary infiltrate (no BHL). Stage IV: Fibrosis. BHL: Symmetric, lobular hilar enlargement ('potato nodes'). Paratracheal LAP: Right > Left."
            },
            "ct": {
                "non_contrast": "Perilymphatic distribution: Along bronchovascular bundles, septal lines, pleura (PATHOGNOMONIC!). Upper-middle lobe predominance. 'Galaxy sign': Confluent sarcoid granulomas. 'Halo sign': Central consolidation + surrounding ground-glass.",
                "contrast": "LAP enhancement. Cardiac MRI for cardiac sarcoidosis suspicion."
            },
            "mri": {
                "other_sequences": "Cardiac MRI: Gadolinium late enhancement (LGE) → cardiac sarcoidosis. Neuronal MRI: Leptomeningeal involvement, cranial nerve involvement."
            }
        },
        "keyPoints": [
            "Bilateral hiler LAP + Perilenfatik nodüller = Sarkoidoz (biyopsisiz olası tanı).",
            "HRCT: Perilenfatik dağılım (bronchovasküler + interlobüler septa + plevra) PATOGNOMONİK.",
            "ACE yüksekliği + tipik görüntüleme → BAL + Biyopsi (non-kazeöz granülom).",
            "Kardiyak sarkoidoz: LGE MRI → aritmik ani ölüm riski."
        ],
        "keyPointsEn": [
            "Bilateral hilar LAP + Perilymphatic nodules = Sarcoidosis (likely diagnosis without biopsy).",
            "HRCT: Perilymphatic distribution (bronchovascular + interlobular septa + pleura) PATHOGNOMONIC.",
            "Elevated ACE + typical imaging → BAL + Biopsy (non-caseating granuloma).",
            "Cardiac sarcoidosis: LGE MRI → risk of arrhythmic sudden death."
        ],
        "mechanism": "Antijen (mikobakteri, mantar veya organik partiküller?) → CD4+ T-hücre aktivasyonu → granülom oluşumu (non-kazeöz, epiteloid histiyositler + Langhans dev hücreleri). Perilenfatik dağılım: Granülomlar lenfatik damarlar boyunca yayılır → bronchovasküler kılıf, interlobüler septa ve plevra boyunca nodüler yapılar. Fibrozis gelişirse (Evre IV): Üst lob büzüşmesi, bronşiektazi, çekme bronşiektazisi.",
        "etiology": "Bilinmeyen (genetik yatkınlık + antijenik uyaran). HLA-DRB1 ilişkisi. Meslek maruziyeti (tarım, itfaiyecilik) sıklaştırabilir.",
        "differentialDiagnosis": ["Lenfoma (Anterior mediastinal, asimetrik LAP)", "Tüberküloz (Nekrotik LAP, üst lob kavite)", "Pnömokonyoz (Mesleki öykü, üst lob)", "Metastatik Hastalık (Bilinen primer, heterojen)"],
        "goldStandard": "Doku biyopsisi (BAL veya transbronşial biyopsi): Non-kazeöz epiteloid granülom. ACE düzeyi destekleyici.",
        "clinicalPearl": "Bilateral hiler LAP + nefes darlığı + eritema nodozum + artralji = Löfgren Sendromu (iyi prognozlu akut sarkoidoz).",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Sarcoidosis"
        ]
    },
    {
        "id": "bronchiectasis",
        "name": "Bronşiektazi",
        "nameEn": "Bronchiectasis",
        "category": "Havayolu",
        "categoryEn": "Airway",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "HRCT - Signet Ring İşareti", "modality": "CT" }
        ],
        "findings": {
            "xray": {
                "description": "Tram-track işareti: Paralel çizgiler (dilate bronşlar). Ring gölge: Yuvarlak bronş kesit görünümü. Perihiler opasite artışı. Mukoid impaksiyon: 'V' veya 'Y' şekilli opasiteler."
            },
            "ct": {
                "non_contrast": "Signet ring işareti (PATOGNOMONİK): Dilate bronş > eşlik eden pulmoner arterin çapı (normal: Bronş/Arter = 0.65-1.0). Bronş duvar kalınlaşması. Bronşların plevra ve kostofrenik açıya yakın uzanımı (bronşlar periferik kapanmaz). Silindirik, varis tipi, kistik bronşiektazi. Mukoid impaksiyon: 'Finger in glove'.",
                "contrast": "Bronş duvarı kontrastlanması. Altta yatan etiyoloji (mediastinal kitle, LAP)."
            }
        },
        "findingsEn": {
            "xray": {
                "description": "Tram-track sign: Parallel lines (dilated bronchi). Ring shadow: Circular bronchial cross-section. Perihilar opacity increase. Mucoid impaction: 'V' or 'Y' shaped opacities."
            },
            "ct": {
                "non_contrast": "Signet ring sign (PATHOGNOMONIC): Dilated bronchus > accompanying pulmonary artery diameter (normal: Bronchus/Artery = 0.65-1.0). Bronchial wall thickening. Bronchi extend to within 1cm of pleura. Cylindrical, varicose, cystic bronchiectasis. Mucoid impaction: 'Finger in glove'.",
                "contrast": "Bronchial wall enhancement. Underlying etiology (mediastinal mass, LAP)."
            }
        },
        "keyPoints": [
            "Signet ring işareti: Bronş çapı > eşlik eden arter = Bronşiektazi (HRCT'de PATOGNOMONİK).",
            "Dağılım: Santral (Alerjik bronkopulmoner aspergillozis — ABPA), Alt lob (İmmotil silia, CF), Üst lob (TB, CF).",
            "HRCT altın standarttır: Tip (silindirik/varis/kistik) ve yaygınlığı belirler.",
            "Kistik fibrozis: Bilateral üst lob + ağır bronşiektazi + pankreas tutulumu."
        ],
        "keyPointsEn": [
            "Signet ring sign: Bronchial diameter > accompanying artery = Bronchiectasis (PATHOGNOMONIC on HRCT).",
            "Distribution: Central (ABPA), Lower lobe (Immotile cilia, CF), Upper lobe (TB, CF).",
            "HRCT is gold standard: Determines type (cylindrical/varicose/cystic) and extent.",
            "Cystic fibrosis: Bilateral upper lobe + severe bronchiectasis + pancreatic involvement."
        ],
        "mechanism": "Tekrarlayan veya kronik enfeksiyon/inflamasyon → bronş duvarı harabiyeti (elastin ve kas kaybı) → kalıcı bronş dilatasyonu → sekresyon birikimi → daha fazla enfeksiyon (kısır döngü). Konjenital: Kistik fibrozis, primer siliyer diskinezi. Edinsel: Post-enfeksiyöz (TB, boğmaca), obstrüktif, immün yetmezlik, ABPA (santral bronşiektazi).",
        "etiology": "Kistik fibrozis (genç), TB (üst lob), Primer siliyer diskinezi, ABPA (santral, üst lob), İmmün yetmezlik (alt lob), Post-obstrüktif.",
        "differentialDiagnosis": ["Amfizem (Duvar yok, hava alanı genişlemesi)", "Kaviter Lezyon (TB, apse — daha kalın duvar)", "Pulmoner Kist (Konjenital)", "ABPA (Santral bronşiektazi + mukoid impaksiyon)"],
        "goldStandard": "HRCT toraksi: Signet ring işareti + bronş/arter oranı. Altta yatan etiyoloji araştırması: Ter testi (CF), siliyer motilite testi, immün panel.",
        "clinicalPearl": "Günlük pürülan balgam + kronik öksürük + HRCT'de signet ring = Bronşiektazi. Santral tutulum → ABPA ekarte et (IgE, Aspergillus seroloji).",
        "references": [
            "Webb WR, Higgins CB. Thoracic Imaging: Pulmonary and Cardiovascular Radiology. 3rd ed. Lippincott Williams & Wilkins; 2017.",
            "ACR Appropriateness Criteria. American College of Radiology. https://www.acr.org/Clinical-Resources/ACR-Appropriateness-Criteria",
            "Radiopaedia.org - Bronchiectasis"
        ]
    },
    {
        "id": "pulmonary_metastasis",
        "name": "Pulmoner Metastaz",
        "nameEn": "Pulmonary Metastasis",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "xray": { "description": "Multipl yuvarlak nodüller, bilateral, alt loblarda baskın ('cannonball' metastaz). Bazal predileksiyon (hematojen yayılım)." },
            "ct": { "non_contrast": "Multipl yuvarlak, iyi sınırlı nodüller bilateral. Alt lob dominant (hematojen). Kavitasyon (skuamöz hücreli). Kalsifikasyon (osteosarkom, kondrosarkom). Milier patern (tiroid, renal, melanom).", "contrast": "Değişken kontrastlanma. Hipervasküler metastaz (renal, tiroid, melanom): Belirgin kontrastlanma." }
        },
        "findingsEn": {
            "xray": { "description": "Multiple round nodules, bilateral, lower lobe predominant ('cannonball' metastasis)." },
            "ct": { "non_contrast": "Multiple round, well-defined bilateral nodules. Lower lobe dominant (hematogenous). Cavitation (squamous cell). Calcification (osteosarcoma). Miliary pattern (thyroid, renal, melanoma).", "contrast": "Variable enhancement." }
        },
        "keyPoints": ["Multipl bilateral nodüller + bilinen primer = Metastaz.", "Alt lob baskın (hematojen) veya lenfanjitik patern (septal kalınlaşma).", "Kavitasyon: Skuamöz hücreli primer düşündürür.", "'Cannonball' metastaz: Büyük yuvarlak nodüller (renal, kolon)."],
        "keyPointsEn": ["Multiple bilateral nodules + known primary = Metastasis.", "Lower lobe predominant (hematogenous) or lymphangitic pattern.", "Cavitation: Suggests squamous cell primary.", "'Cannonball' metastasis: Large round nodules (renal, colon)."],
        "etiology": "Hematojen yayılım en sık. Primer: Meme, kolon, renal, melanom, tiroid.",
        "mechanism": "Primer tümörden hematojen embolizasyon → pulmoner kapillerlerde tutulum → nodül büyümesi.",
        "differentialDiagnosis": ["Granülomlar (TB, fungal — kalsifiye)", "Septin emboliler (kaviter, periferal)", "Sarkoidoz (perilenfatik, hiler LAP)", "Multipl hamartomlar (yağ + kalsifikasyon)"],
        "goldStandard": "BT toraks: Nodül tespiti. PET-BT: Metabolik aktivite. Biyopsi: Primer bilinmiyorsa.",
        "clinicalPearl": "Bilinen kanser + yeni multipl pulmoner nodüller = Metastaz. Kavitasyon varsa skuamöz hücreli, kalsifikasyon varsa osteojenik primer düşün.",
        "references": ["Webb WR. Thoracic Imaging. 3rd ed. Lippincott Williams & Wilkins; 2017.", "Radiopaedia.org - Pulmonary metastasis"]
    },
    {
        "id": "pulmonary_edema",
        "name": "Pulmoner Ödem",
        "nameEn": "Pulmonary Edema",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "xray": { "description": "KARDİYOJENİK: Sefalizasyon (üst lob venöz distansiyon). Peribronşiyal kalınlaşma ('peribronchial cuffing'). Kerley B çizgileri (septal kalınlaşma). Bilateral perihiler bat-wing opasiteler. Plevral efüzyon (bilateral). Kardiyomegali." },
            "ct": { "non_contrast": "Ground-glass opasiteler (bilateral, gravitasyona bağımlı). İnterlobüler septal kalınlaşma. Peribronşiyal kalınlaşma. Plevral efüzyon. SVO dolgunluğu.", "contrast": "Kardiyomegali. SVO dolgunluğu. Pulmoner ven distansiyonu." }
        },
        "findingsEn": {
            "xray": { "description": "CARDIOGENIC: Cephalization. Peribronchial cuffing. Kerley B lines. Bilateral perihilar bat-wing opacities. Bilateral pleural effusion. Cardiomegaly." },
            "ct": { "non_contrast": "Ground-glass opacities (bilateral, gravity-dependent). Interlobular septal thickening. Peribronchial thickening. Pleural effusion. SVC fullness.", "contrast": "Cardiomegaly. SVC fullness. Pulmonary vein distension." }
        },
        "keyPoints": ["Kardiyojenik: Kardiyomegali + sefalizasyon + bat-wing + efüzyon.", "Non-kardiyojenik (ARDS): Kardiyomegali YOK, periferal dağılım.", "Kerley B çizgileri: İnterlobüler septal kalınlaşma (1-2cm horizontal çizgiler).", "Hızlı değişim: Tedaviye hızlı yanıt (diüretik sonrası)."],
        "keyPointsEn": ["Cardiogenic: Cardiomegaly + cephalization + bat-wing + effusion.", "Non-cardiogenic (ARDS): NO cardiomegaly, peripheral distribution.", "Kerley B lines: Interlobular septal thickening.", "Rapid change: Rapid response to treatment (after diuretics)."],
        "etiology": "Kardiyojenik (sol kalp yetmezliği en sık). Non-kardiyojenik: ARDS, böbrek yetmezliği, sıvı yüklenmesi, nörojenik.",
        "mechanism": "Kardiyojenik: Sol ventrikül yetmezliği → pulmoner venöz basınç artışı → kapiller sızıntı → alveolar ve interstisyel ödem.",
        "differentialDiagnosis": ["Pnömoni (asimetrik, konsolidasyon, ateş)", "Pulmoner hemoraji (hemoptizi, diffüz GGO)", "Lenfanjitik karsinomatozis (unilateral olabilir, LAP)"],
        "goldStandard": "Göğüs grafisi: Hızlı tanı. BT: Ayırıcı tanıda yardımcı. Ekokardiyografi: Kardiyak fonksiyon.",
        "clinicalPearl": "Bilateral bat-wing opasiteler + kardiyomegali + sefalizasyon + plevral efüzyon = Kardiyojenik pulmoner ödem. Diüretik sonrası hızlı düzelme tanıyı doğrular.",
        "references": ["Webb WR. Thoracic Imaging. 3rd ed. 2017.", "Radiopaedia.org - Pulmonary edema"]
    },
    {
        "id": "mesothelioma",
        "name": "Malign Plevral Mezotelyoma",
        "nameEn": "Malignant Pleural Mesothelioma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "xray": { "description": "Unilateral plevral kalınlaşma (nodüler). Plevral efüzyon. İpsilateral hemitoraks küçülmesi (çekilme). Plevral plaklar (asbest maruziyeti)." },
            "ct": { "non_contrast": "Nodüler plevral kalınlaşma (>1cm). Sirkumferensiyal (çevresel) plevral tutulum.", "contrast": "Nodüler plevral kontrastlanma. Mediastinal plevra tutulumu ('rind-like' patern). Fissürel kalınlaşma. İnterkostal alan invazyonu. Karşı taraf plevra tutulumu (ileri evre)." }
        },
        "findingsEn": {
            "xray": { "description": "Unilateral pleural thickening (nodular). Pleural effusion. Ipsilateral hemithorax shrinkage." },
            "ct": { "non_contrast": "Nodular pleural thickening (>1cm). Circumferential pleural involvement.", "contrast": "Nodular pleural enhancement. Mediastinal pleural involvement ('rind-like' pattern). Fissural thickening." }
        },
        "keyPoints": ["Asbest maruziyeti EN ÖNEMLİ risk faktörü (20-40 yıl latent dönem).", "Unilateral nodüler plevral kalınlaşma + mediastinal tutulum + fissürel kalınlaşma.", "Hemitoraks küçülmesi (çekilme) metastatik plevral hastalıktan AYIRICI.", "Sirkumferensiyal plevral tutulum + asbest öyküsü = Mezotelyoma düşün."],
        "keyPointsEn": ["Asbestos exposure MOST IMPORTANT risk factor (20-40 year latent period).", "Unilateral nodular pleural thickening + mediastinal involvement + fissural thickening.", "Hemithorax shrinkage differentiates from metastatic pleural disease.", "Circumferential pleural involvement + asbestos history = Consider mesothelioma."],
        "etiology": "Asbest maruziyeti (%80). Latent dönem 20-40 yıl. Erkeklerde daha sık.",
        "mechanism": "Asbest lifleri → plevral mezoteliyal hücrelerde kronik inflamasyon ve DNA hasarı → malign transformasyon.",
        "differentialDiagnosis": ["Metastatik plevral hastalık (bilinen primer, hemitoraks genişlemiş)", "Plevral plaklar (benign, kalsifiye, nodüler değil)", "Organize efüzyon/ampiyem (enfeksiyon öyküsü)", "Soliter fibröz tümör (pedünküllü, plevral)"],
        "goldStandard": "BT + Plevral biyopsi (torakoskopik). İmmünohistokimya: Calretinin +, WT1 +.",
        "clinicalPearl": "Asbest maruziyeti + unilateral nodüler plevral kalınlaşma + hemitoraks küçülmesi = Mezotelyoma. Plevral biyopsi zorunlu.",
        "references": ["Webb WR. Thoracic Imaging. 3rd ed. 2017.", "Radiopaedia.org - Mesothelioma"]
    },
    {
        "id": "thymoma",
        "name": "Timoma",
        "nameEn": "Thymoma",
        "category": "Mediastinal",
        "categoryEn": "Mediastinal",
        "findings": {
            "xray": { "description": "Anterior mediastinal genişleme. Lobüle kontur. Asimetrik olabilir." },
            "ct": { "non_contrast": "Anterior mediastinal solid kitle. Homojen veya heterojen (kistik alanlar, kalsifikasyon).", "contrast": "Homojen veya heterojen kontrastlanma. İyi kapsüllü (non-invaziv) veya kapsül invazyonu (invaziv). Plevral drop metastaz. Vasküler yapılara invazyon (ileri evre)." }
        },
        "findingsEn": {
            "xray": { "description": "Anterior mediastinal widening. Lobulated contour." },
            "ct": { "non_contrast": "Anterior mediastinal solid mass. Homogeneous or heterogeneous.", "contrast": "Homogeneous or heterogeneous enhancement. Well-capsulated (non-invasive) or capsular invasion (invasive). Pleural drop metastasis." }
        },
        "keyPoints": ["Anterior mediastenin EN SIK primer tümörü (erişkinde).", "Myastenia gravis ilişkisi: %30-50 timoma hastasında MG.", "'4T' anterior mediasten: Timoma, Teratom, Tiroid, Terrible (lenfoma).", "Plevral drop metastaz: Plevral yüzeyde metastaz nodülleri."],
        "keyPointsEn": ["MOST COMMON primary tumor of anterior mediastinum (in adults).", "Myasthenia gravis association: MG in 30-50% of thymoma patients.", "'4T' anterior mediastinum: Thymoma, Teratoma, Thyroid, Terrible (lymphoma).", "Pleural drop metastasis: Metastatic nodules on pleural surface."],
        "etiology": "Timik epitel kökenli. Masaoka-Koga evreleme: I (kapsüllü) - IVb (uzak metastaz). Paraneoplastik sendromlar: MG, saf kırmızı hücre aplazisi, hipogammaglobulinemi.",
        "mechanism": "Timik epitelyal hücreler → neoplastik proliferasyon → anterior mediastinal kitle. T-lenfosit matürasyonu ile ilişki → otoimmün fenomenler (MG).",
        "differentialDiagnosis": ["Lenfoma (genç, LAP, homojen, FDG avid)", "Germ hücreli tümör (teratom: yağ + kalsifikasyon)", "Tiroid guatr (servikal uzanım, iyot avidite)", "Timik kist (su dansitesinde, kontrastlanma yok)"],
        "goldStandard": "BT: Anterior mediastinal kitle karakterizasyonu. MRI: İnvazyon değerlendirmesi. Biyopsi veya cerrahi.",
        "clinicalPearl": "Anterior mediastinal kitle + myastenia gravis = Timoma. Plevral drop metastaz invaziv timomada görülür.",
        "references": ["Webb WR. Thoracic Imaging. 3rd ed. 2017.", "Radiopaedia.org - Thymoma"]
    },
    {
        "id": "covid19_pneumonia",
        "name": "COVID-19 Pnömonisi",
        "nameEn": "COVID-19 Pneumonia",
        "category": "Enfeksiyöz",
        "categoryEn": "Infectious",
        "findings": {
            "ct": { "non_contrast": "Bilateral, multifokal GROUND-GLASS opasiteler (GGO). Alt lob ve posterior dağılım baskın. 'Crazy paving' paterni (GGO + septal kalınlaşma). Konsolidasyon (ileri evre). Vasküler genişleme (pulmoner vaskülopati). Halo sign. Reverse halo (organize pnömoni paterni)." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "Bilateral, multifocal GROUND-GLASS opacities (GGO). Lower lobe and posterior predominant. 'Crazy paving' pattern. Consolidation (advanced). Vascular enlargement. Halo sign. Reverse halo (organizing pneumonia pattern)." }
        },
        "keyPoints": ["Bilateral periferal GGO en tipik bulgu.", "Crazy paving: GGO + retiküler kalınlaşma.", "CO-RADS sınıflaması: 1-5 (şüphe derecesi).", "Pulmoner emboli riski artmış (D-dimer takibi)."],
        "keyPointsEn": ["Bilateral peripheral GGO most typical finding.", "Crazy paving: GGO + reticular thickening.", "CO-RADS classification: 1-5 (suspicion level).", "Increased risk of pulmonary embolism."],
        "etiology": "SARS-CoV-2 virüs enfeksiyonu. ACE2 reseptör aracılı giriş.",
        "mechanism": "SARS-CoV-2 → tip II pnömosit hasarı → diffüz alveoler hasar → GGO/konsolidasyon. İmmün yanıt → sitokin fırtınası → ARDS.",
        "differentialDiagnosis": ["Diğer viral pnömoniler (influenza, CMV)", "Organize pnömoni (COP)", "PCP (Pneumocystis — HIV)", "Pulmoner ödem (kardiyomegali, sefalizasyon)"],
        "goldStandard": "PCR (tanı). BT: Klinik evreleme ve komplikasyon tespiti. BT anjiyografi: PE şüphesinde.",
        "clinicalPearl": "Bilateral periferal GGO + alt lob dominansı + ateş + PCR pozitif = COVID-19 pnömonisi. D-dimer yüksekse pulmoner emboli dışla.",
        "references": ["Defined approach in Simpson S et al. Radiographics. 2020;40(6):E199-E217.", "Radiopaedia.org - COVID-19"]
    },
    {
        "id": "pulmonary_hypertension",
        "name": "Pulmoner Hipertansiyon",
        "nameEn": "Pulmonary Hypertension",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "xray": { "description": "Ana pulmoner arter dilatasyonu. Santral pulmoner arterlerde genişleme + periferal 'pruning' (daralma). Sağ ventrikül büyümesi (lateral grafide retrosternal boşluk azalması)." },
            "ct": { "non_contrast": "Ana pulmoner arter çapı >29mm (veya asendan aortadan büyük). Sağ ventrikül dilatasyonu (RV/LV >1). İnterventriküler septum düzleşmesi/sol tarafa kayması.", "contrast": "BT ANJİYOGRAFİ: Ana PA çapı ölçümü. Kronin tromboembolik PH: İntraluminal web, band, eksantrik trombüs. Mozaik perfüzyon (lobüler heterojenite)." }
        },
        "findingsEn": {
            "xray": { "description": "Main pulmonary artery dilation. Central pulmonary artery enlargement + peripheral 'pruning'. RV enlargement." },
            "ct": { "non_contrast": "Main pulmonary artery diameter >29mm (or larger than ascending aorta). RV dilation (RV/LV >1). IVS flattening/bowing.", "contrast": "CT ANGIOGRAPHY: Main PA measurement. CTEPH: Intraluminal web, band, eccentric thrombus. Mosaic perfusion." }
        },
        "keyPoints": ["Ana PA çapı >29mm veya aortadan büyük = PH şüphesi.", "RV/LV oranı >1 = Sağ ventrikül dilatasyonu.", "CTEPH: Organize trombüs + mozaik perfüzyon → endarterektomi ile tedavi edilebilir.", "Septum düzleşmesi/bowing: Sağ ventrikül basınç yüklenmesi."],
        "keyPointsEn": ["Main PA >29mm or larger than aorta = PH suspicion.", "RV/LV ratio >1 = RV dilation.", "CTEPH: Organized thrombus + mosaic perfusion → treatable with endarterectomy.", "Septal flattening/bowing: RV pressure overload."],
        "etiology": "WHO Grup 1 (PAH), Grup 2 (sol kalp), Grup 3 (akciğer hastalığı), Grup 4 (CTEPH), Grup 5 (diğer).",
        "mechanism": "Pulmoner vasküler rezistans artışı → PA basınç artışı → sağ ventrikül afterload artışı → RV hipertrofi/dilatasyon → sağ kalp yetmezliği.",
        "differentialDiagnosis": ["Pulmoner emboli (akut, dolum defekti)", "Sol kalp yetmezliği (sol ventrikül dilate)", "İdiyopatik PA dilatasyonu (basınç normal)"],
        "goldStandard": "Ekokardiyografi (tarama). Sağ kalp kateterizasyonu (kesin tanı): mPAP ≥20 mmHg. BT: CTEPH değerlendirmesi.",
        "clinicalPearl": "Efor dispnesi + PA >29mm + RV/LV >1 = PH. CTEPH dışla (organize trombüs) çünkü cerrahi ile tedavi edilebilir.",
        "references": ["Webb WR. Thoracic Imaging. 3rd ed. 2017.", "Radiopaedia.org - Pulmonary hypertension"]
    },
    {
        "id": "round_atelectasis",
        "name": "Yuvarlak Atelektazi",
        "nameEn": "Round Atelectasis",
        "category": "Plevral/Parankimal",
        "categoryEn": "Pleural/Parenchymal",
        "findings": {
            "ct": { "non_contrast": "Plevral kalınlaşmaya komşu yuvarlak/oval parankimal opasifikasyon. Posterior ve alt loblarda sık.", "contrast": "'COMET TAIL' (kuyruklu yıldız) sign: Kitleye giren vasküler ve bronşiyal yapılar (kıvrılmış). Komşu plevral kalınlaşma/efüzyon. Homojen kontrastlanma. Akut açı ile plevraya temas." }
        },
        "findingsEn": {
            "ct": { "non_contrast": "Round/oval parenchymal opacification adjacent to pleural thickening.", "contrast": "'COMET TAIL' sign: Vascular and bronchial structures entering the mass (curved). Adjacent pleural thickening. Homogeneous enhancement. Acute angle with pleura." }
        },
        "keyPoints": ["'Comet tail' sign PATOGNOMONİK: Kitleye giren kıvrımlı damarlar.", "Asbest ilişkili plevral hastalık en sık neden.", "Akciğer kanseri veya metastazla karışabilir — comet tail ayırır.", "Boyutu değişmez (stabil): FDG avidite gösterebilir (FP!)."],
        "keyPointsEn": ["'Comet tail' sign PATHOGNOMONIC: Curved vessels entering the mass.", "Asbestos-related pleural disease most common cause.", "May be confused with lung cancer or metastasis — comet tail differentiates.", "Size unchanged (stable): May show FDG avidity (false positive!)."],
        "etiology": "Asbest maruziyeti (en sık). Plevral efüzyon, enfeksiyon, cerrahi sonrası.",
        "mechanism": "Plevral kalınlaşma/efüzyon → viseral plevra invaginasyonu → komşu akciğer parankimi katlanarak atelektatik kitle oluşturur.",
        "differentialDiagnosis": ["Akciğer kanseri (spiküle, LAP, büyüme)", "Metastaz (multipl, bilinen primer)", "Organize pnömoni (periferik, reverse halo)"],
        "goldStandard": "BT: Comet tail sign + plevral kalınlaşma + stabil boyut. Şüphede PET-BT veya biyopsi.",
        "clinicalPearl": "Plevral kalınlaşma komşuluğunda yuvarlak kitle + comet tail sign = Yuvarlak atelektazi. Biyopsi gerektirmez ama FDG-PET yanlış pozitif verebilir.",
        "references": ["Webb WR. Thoracic Imaging. 3rd ed. 2017.", "Radiopaedia.org - Round atelectasis"]
    }
];
