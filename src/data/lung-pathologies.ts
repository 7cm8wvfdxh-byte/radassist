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
        "clinicalPearl": "Spiküle kenar + Plevral çekme + Hiler adenopati = Akciğer kanseri. 'Satellite nodule' + Nodül >3cm = T2 evre."
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
        "clinicalPearl": "Polo mint sign (aksiyel) + Railway track sign (koronal) = PE. RV/LV >1 = Masif/submasif PE, kötü prognoz."
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
        "mechanism": "Bakteriyel: Patojenin alt solunum yollarına ulaşması → alveolar makrofajların yetersiz temizliği → bakteri proliferasyonu → nötrofil yanıtı → eksüda dolu alveoller (konsolidasyon). Viral/COVID-19: Hücresel immün yanıt ve sitokin fırtınası → difüz alveolar hasar → tip II pnömosit hasarı → surfaktan kaybı → alveoler kollaps → ground-glass opasiteler, crazy-paving. Nekrotizan: Vaskülit ve tromboz → akciğer parankimi nekrozu → kavitasyon."
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
        "mechanism": "Solid nodül: Tam solid doku proliferasyonu — granülom (enfeksiyöz: TB, histoplazma), karsinoid, metastaz veya primer malignite. Subsolid/ground-glass nodül: Kısmi alveol dolumu ile birlikte hava korunumu — atipik adenomatöz hiperplazi (AAH) → in situ adenokarsinom (AIS) → minimal invaziv adenokarsinom (MIA) → invaziv adenokarsinom malignisite spektrumu. Solid komponent arttıkça invazyon artmaktadır."
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
        "mechanism": "Visseral veya pariyetal plevra bütünlüğünün bozulması → plevral boşluğa hava kaçışı → akciğer elastik geri çekim kuvveti ile çöküş. Primer spontan: Apikal subplevral bleb rüptürü (genç, uzun erkeklerde zayıf mezoteliyal doku). Tansiyon: Tek yönlü valf mekanizması → inspirasyonda hava girer, ekspirasyonda çıkamaz → giderek artan basınç → mediastinal şift → karşı akciğer ve venöz dönüş baskılanması → kardiyovasküler kollaps."
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
        "mechanism": "Kronik alveolar epitelyal hasar (tip II pnömosit) → anormal yara iyileşmesi → fibroblast aktivasyonu (TGF-β, PDGF) → aşırı ECM depolanması → akciğer parankim mimarisinin bozulması. Baziler/subplevral tutulum: Bu bölgelerdeki mekanik strese duyarlılık ile ilişkilidir. Honeycombing: Alveol gruplarının fibröz doku ile dolması ve birbirine yapışarak kistik hava boşlukları oluşturması."
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
        "mechanism": "Bilinmeyen tetikleyici → tekrarlayan epitelyal mikro-hasarlar → TGF-β mediated fibroblast aktivasyonu → miyofibroblastlara dönüşüm → kollajen birikimi. Alveolar yüzey azalır → gaz değişimi bozulur → restriktif patern. Baziler subplevral tutulum, bu bölgelerin solunum sırasındaki gerilme kuvvetlerine olan duyarlılığıyla açıklanır."
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
        "mechanism": "Sigara dumanı veya alfa-1 antitripsin eksikliği → proteaz/antiproteaz dengesizliği (nötrofil elastaz artışı, alfa-1 antitripsin azalması) → alveolar duvar yıkımı → hava boşluğu genişlemesi → akciğer elastisitesi azalır → hava hapsi. Sentrilobüler amfizem: Sigara ile ilişkili, merkezi asiner hasar. Panasiner: Tüm asiner yıkım. Hiperinflasyon ve flatleşen diyafram bu gaz hapsi mekanizmasının yansımasıdır."
    }
];
