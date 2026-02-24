import { Pathology } from '@/types';

export const kidneyPathologies: Pathology[] = [
    {
        "id": "renal_cell_carcinoma",
        "name": "Renal Hücreli Karsinom (RCC)",
        "nameEn": "Renal Cell Carcinoma (RCC)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            { "url": "/images/kidney/rcc_ct_corticomedullary.png", "caption": "BT Kortikomedüller - Heterojen", "modality": "CT" },
            { "url": "/images/kidney/rcc_mri_t2.png", "caption": "MRI T2 - Clear Cell Hiperintens", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Solid renal kitle. Değişken ekojenite (hipo, izo, hiperekoik). Kortikal bulging. Renin venine uzanım kontrol edilmeli.",
                "doppler": "İntratümöral vaskülarite. Renal ven trombusu: Arteryalize akım."
            },
            "ct": {
                "non_contrast": "Solid kitle, renal korteksten köken. Kalsifikasyon santral veya periferal olabilir.",
                "contrast": "KORTIKOMEDÜLLER FAZ: Heterojen kontrastlanma (>15-20 HU artış = solid). NEFROGRAFİK FAZ: En iyi tümör-parankim kontrastı. GEÇ FAZ: Wash-out paterni. 'Pseudokapsül': Periferal kontrastlanan halka."
            },
            "mri": {
                "t1": "Genellikle hipointens. Hemorajik alanlar hiperintens. Clear cell tip: T2'de lipid/glikojen nedeniyle sinyal değişkenliği.",
                "t2": "Clear cell: HİPERİNTENS (en sık tip). Papiller ve kromofob: HİPOİNTENS - Önemli ayırıcı.",
                "t1_c": "Heterojen kontrastlanma. Nekrotik ve kistik alanlar kontrastlanmaz.",
                "dwi": "Değişken kısıtlanma. Yüksek grade = daha fazla kısıtlanma.",
                "other_sequences": "Chemical shift: Clear cell RCC'de sinyal kaybı (lipid içerir)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Solid renal mass. Variable echogenicity (hypo, iso, hyperechoic). Cortical bulging. Check for renal vein extension.",
                "doppler": "Intratumoral vascularity. Renal vein thrombus: Arterialized flow."
            },
            "ct": {
                "non_contrast": "Solid mass arising from renal cortex. Calcification can be central or peripheral.",
                "contrast": "CORTICOMEDULLARY PHASE: Heterogeneous enhancement (>15-20 HU increase = solid). NEPHROGRAPHIC PHASE: Best tumor-parenchyma contrast. DELAYED PHASE: Wash-out pattern. 'Pseudocapsule': Peripheral enhancing rim."
            },
            "mri": {
                "t1": "Usually hypointense. Hemorrhagic areas hyperintense. Clear cell type: Signal variability on T2 due to lipid/glycogen.",
                "t2": "Clear cell: HYPERINTENSE (most common type). Papillary and chromophobe: HYPOINTENSE - Important differentiator.",
                "t1_c": "Heterogeneous enhancement. Necrotic and cystic areas do not enhance.",
                "dwi": "Variable restriction. High grade = more restriction.",
                "other_sequences": "Chemical shift: Signal drop in Clear Cell RCC (contains lipid)."
            }
        },
        "keyPoints": [
            "%85 Clear cell tip. T2'de hiperintens, chemical shift pozitif.",
            "Papiller ve Kromofob: T2'de hipointens - Clear cell'den ayırıcı.",
            "IVC trombusu: Sağ atriyuma kadar uzanabilir - Cerrahi planlama kritik.",
            "'Small renal mass' (<4cm): İzlem vs Ablasyon vs Cerrahi."
        ],
        "keyPointsEn": [
            "85% Clear cell type. T2 hyperintense, chemical shift positive.",
            "Papillary and Chromophobe: T2 hypointense - Distinguishes from Clear cell.",
            "IVC thrombus: Can extend to right atrium - Critical for surgical planning.",
            "'Small renal mass' (<4cm): Watch & Wait vs Ablation vs Surgery."
        ],
        "mechanism": "VHL gen mutasyonu (clear cell) → HIF-1α stabilizasyonu → VEGF ve eritropoietin artışı → tümör neovaskülarizasyonu (hipervasküleri açıklar). Proksimal tübüler hücrelerden köken. Papiller tip: MET mutasyonu, daha az vasküler. Kromofob: İnterskal hücrelerden köken, daha az agresif. Clear cell'de T2 hiperintensitesi lipid/glikojen içeriğiyle ilişkilidir.",
        "etiology": "Sigara, Obezite, Hipertansiyon, Diyaliz hastası böbrek kistleri. VHL sendromu: Bilateral, multisentrik RCC. Herediter papiller RCC: MET mutasyonu.",
        "differentialDiagnosis": ["Anjiyomiyolipom (Makroskopik yağ <-10HU = Kesin AML)", "Onkositom (Santral yıldız skar, benign ama görüntülemeyle ayrılamaz)", "Ürotelyal Ca (Santral, lümene uzanır, kontürü bozmaz)", "Abse (DWI kısıtlanma, ateş, klinik)"],
        "goldStandard": "Multifazik BT (Kortikomedüller + Nefrogenik + Geç faz): RCC karakterizasyonu. MRI: Yağ tespiti, IVC değerlendirmesi.",
        "clinicalPearl": "Clear cell RCC: T2 hiperintens + Chemical shift pozitif (yağ içeriği). >15-20HU kontrastlanma artışı = Solid kitle (malignite şüpheli).",
        "references": [
            "Israel GM, Bosniak MA. Renal imaging for diagnosis and staging of renal cell carcinoma. Urol Clin North Am. 2003;30(3):499-514.",
            "ACR Appropriateness Criteria: Renal Cell Carcinoma Staging. American College of Radiology.",
            "Silverman SG et al. Bosniak Classification of Cystic Renal Masses, Version 2019. Radiology. 2019;292(2):475-488.",
            "Radiopaedia.org - Renal cell carcinoma"
        ]
    },
    {
        "id": "angiomyolipoma",
        "name": "Anjiyomiyolipom (AML)",
        "nameEn": "Angiomyolipoma (AML)",
        "category": "Benign",
        "categoryEn": "Benign",
        "gallery": [
            { "url": "/images/kidney/aml_ct_fat.png", "caption": "BT - Makroskopik Yağ (-40 HU)", "modality": "CT" },
            { "url": "/images/kidney/aml_usg.png", "caption": "USG - Hiperekoik", "modality": "USG" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Tipik: Küçük, homojen, belirgin HİPEREKOİK kitle (yağ içeriği nedeniyle). Akustik gölge minimal.",
                "doppler": "Minimal internal vaskülarite."
            },
            "ct": {
                "non_contrast": "YAĞ DOKUSU TESPİTİ: <-10 HU = Makroskopik yağ = PATOGNOMONIK. Fat-poor AML: Yağ saptanamaz (-10 ile +20 HU arası).",
                "contrast": "Heterojen kontrastlanma. Yağ içermeyen alanlar kontrastlanır."
            },
            "mri": {
                "t1": "Yağ: T1 HİPERİNTENS. India ink artefaktı (chemical shift - yağ-su interface).",
                "t2": "Yağ: Hiperintens. Kas: Hipointens. Vasküler: Flow void.",
                "other_sequences": "Fat-sat sekanslar: Yağ baskılanır → Sinyal kaybı konfirme eder."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Typical: Small, homogeneous, markedly HYPERECHOIC mass (due to fat content). Minimal acoustic shadowing.",
                "doppler": "Minimal internal vascularity."
            },
            "ct": {
                "non_contrast": "FAT DETECTION: <-10 HU = Macroscopic fat = PATHOGNOMONIC. Fat-poor AML: Fat not detectable (-10 to +20 HU).",
                "contrast": "Heterogeneous enhancement. Non-fatty areas enhance."
            },
            "mri": {
                "t1": "Fat: T1 HYPERINTENSE. India ink artifact (chemical shift - fat-water interface).",
                "t2": "Fat: Hyperintense. Muscle: Hypointense. Vascular: Flow void.",
                "other_sequences": "Fat-sat sequences: Fat suppresses → Confirms signal loss."
            }
        },
        "keyPoints": [
            "Makroskopik yağ (<-10 HU) tespit edilirse AML kesin tanı.",
            "Fat-poor AML: RCC'den ayırt edilemez, cerrahi gerekebilir.",
            "Tüberöz Skleroz: Bilateral, multipl AML'ler.",
            ">4cm AML: Kanama riski artar → Embolizasyon düşünülmeli."
        ],
        "keyPointsEn": [
            "Detection of macroscopic fat (<-10 HU) confirms AML diagnosis.",
            "Fat-poor AML: Indistinguishable from RCC, may require surgery.",
            "Tuberous Sclerosis: Bilateral, multiple AMLs.",
            ">4cm AML: Increased bleeding risk → Consider embolization."
        ],
        "mechanism": "mTOR yolağı aktivasyonu (TSC1/TSC2 mutasyonu veya sporadik) → anormal mezodermal diferansiasyon → yağ dokusu, düz kas ve anormal damarların karışımından oluşan hamartom. Anormal damarlar esnek duvardan yoksundur (anevrizma riski) → Wunderlich sendromu (spontan retroperitoneal kanama). Fat-poor AML: Düz kas baskın, TSC bağlantısı sık.",
        "references": [
            "Israel GM, Bosniak MA. Renal imaging for diagnosis and staging of renal cell carcinoma. Urol Clin North Am. 2003;30(3):499-514.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Renal angiomyolipoma"
        ]
    },
    {
        "id": "simple_renal_cyst",
        "name": "Basit Renal Kist",
        "nameEn": "Simple Renal Cyst",
        "category": "Benign",
        "categoryEn": "Benign",
        "gallery": [
            { "url": "/images/kidney/cyst_usg_anechoic.png", "caption": "USG - Anekoik, Posterior Güçlenme", "modality": "USG" },
            { "url": "/images/kidney/cyst_ct.png", "caption": "BT - Su Dansitesi", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "ANEKOİK sıvı. İnce, pürüzsüz duvar. Posterior akustik güçlenme. İnternal eko veya septasyon YOK.",
                "doppler": "Internal vaskülarite YOK."
            },
            "ct": {
                "non_contrast": "Su dansitesi (0-20 HU). İnce duvar. Homojen içerik.",
                "contrast": "Kontrastlanma YOK (<10 HU değişim). Bosniak I = Basit kist."
            },
            "mri": {
                "t1": "Homojen hipointens (su sinyali).",
                "t2": "Homojen HİPERİNTENS. BOS benzeri parlak sinyal.",
                "dwi": "T2 shine-through. ADC hiperintens (gerçek kısıtlanma yok)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "ANECHOIC fluid. Thin, smooth wall. Posterior acoustic enhancement. NO internal echoes or septations.",
                "doppler": "NO internal vascularity."
            },
            "ct": {
                "non_contrast": "Water density (0-20 HU). Thin wall. Homogeneous content.",
                "contrast": "NO enhancement (<10 HU change). Bosniak I = Simple cyst."
            },
            "mri": {
                "t1": "Homogeneous hypointense (water signal).",
                "t2": "Homogeneous HYPERINTENSE. CSF-like bright signal.",
                "dwi": "T2 shine-through. ADC hyperintense (no true restriction)."
            }
        },
        "keyPoints": [
            "Bosniak I: Basit kist - İzlem veya tedavi gereksiz.",
            "%50 yaş üstü bireylerde en az bir basit kist bulunur.",
            "Hiperdens kist: >20 HU ama kontrastlanma yok - Bosniak II.",
            "Takip gerekli: Sadece Bosniak IIF ve üstü."
        ],
        "keyPointsEn": [
            "Bosniak I: Simple cyst - No follow-up or treatment needed.",
            "At least one simple cyst is found in 50% of individuals over 50.",
            "Hyperdense cyst: >20 HU but no enhancement - Bosniak II.",
            "Follow-up required: Only for Bosniak IIF and above."
        ],
        "mechanism": "Renal tübülün fokal dilatasyon ve obstrüksiyonu → sıvı birikimi → kistik yapı. Edinsel kistler: Kronik renal hasarda tübüler atrofi ve fibröz bağ doku baskısıyla gelişir. Sıvı saf transüda (proteinsiz) olduğu için 0-20 HU, T2'de BOS benzeri çok parlak sinyal verir. Kontrastlanma olmaması, duvar ve içerik normalliği = benign.",
        "references": [
            "Silverman SG et al. Bosniak Classification of Cystic Renal Masses, Version 2019. Radiology. 2019;292(2):475-488.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Simple renal cyst"
        ]
    },
    {
        "id": "bosniak_classification",
        "name": "Bosniak Sınıflaması (Kompleks Kist)",
        "nameEn": "Bosniak Classification (Complex Cyst)",
        "category": "Benign/Malign",
        "categoryEn": "Benign/Malignant",
        "gallery": [
            { "url": "/images/kidney/bosniak_types.png", "caption": "Bosniak Sınıflaması Şeması", "modality": "CT" },
            { "url": "/images/kidney/bosniak_3_ct.png", "caption": "Bosniak III - Kalın Duvar/Septum", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Kist dansitesi ve homojenitesi değerlendirilir.",
                "contrast": "BOSNİAK I: Basit kist (<20 HU, kontrastlanma yok). BOSNİAK II: Birkaç ince septum, ince kalsifikasyon, hiperdens kist (<3cm). BOSNİAK IIF: Çok sayıda septum, minimal duvar/septum kalınlaşması, takip gerekli. BOSNİAK III: Kalın irregular duvar/septum, ölçülebilir kontrastlanma. BOSNİAK IV: Solid kontrastlanan komponent."
            },
            "mri": {
                "t1_c": "Septum ve duvar kontrastlanması değerlendirilir. MR daha sensitif.",
                "t2": "Kist içerik kompleksitesi, septasyonlar görülür."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Cyst density and homogeneity evaluated.",
                "contrast": "BOSNIAK I: Simple cyst (<20 HU, no enhancement). BOSNIAK II: Few thin septa, fine calcification, hyperdense cyst (<3cm). BOSNIAK IIF: Multiple septa, minimal wall/septal thickening, follow-up required. BOSNIAK III: Thick irregular wall/septum, measurable enhancement. BOSNIAK IV: Solid enhancing component."
            },
            "mri": {
                "t1_c": "Septal and wall enhancement evaluated. MRI is more sensitive.",
                "t2": "Cyst content complexity, septations visualized."
            }
        },
        "keyPoints": [
            "Bosniak I-II: Benign, takip gerekmiyor.",
            "Bosniak IIF: Takip gerekli (%5-10 malignite).",
            "Bosniak III-IV: Cerrahi önerilir (%50-90 malignite).",
            "2019 güncellemesi: MRI bulguları da değerlendirmeye alındı."
        ],
        "keyPointsEn": [
            "Bosniak I-II: Benign, no follow-up needed.",
            "Bosniak IIF: Follow-up required (5-10% malignancy).",
            "Bosniak III-IV: Surgery recommended (50-90% malignancy).",
            "2019 update: MRI findings incorporated."
        ],
        "mechanism": "Basit kist zemininde oluşan komplikasyonlar (kanama, enfeksiyon, displazi) → kist duvarında kalınlaşma, septumasyon, kalsifikasyon veya solid komponent. Bosniak sınıflaması, kist duvar ve içerik özelliklerine göre malignite riskini katmanlara ayırır. Solid kontrastlanan komponent (Bosniak IV) kistik RCC için yüksek risk (%90) taşır.",
        "references": [
            "Bosniak MA. The Bosniak Renal Cyst Classification: 25 Years Later. Radiology. 2012;262(3):781-785.",
            "Silverman SG et al. Bosniak Classification of Cystic Renal Masses, Version 2019. Radiology. 2019;292(2):475-488.",
            "Israel GM, Bosniak MA. Renal imaging for diagnosis and staging of renal cell carcinoma. Urol Clin North Am. 2003;30(3):499-514.",
            "Radiopaedia.org - Bosniak classification"
        ]
    },
    {
        "id": "acute_pyelonephritis",
        "name": "Akut Piyelonefrit",
        "nameEn": "Acute Pyelonephritis",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "gallery": [
            { "url": "/images/kidney/pyelonephritis_ct.png", "caption": "BT - Striated Nefrogram", "modality": "CT" },
            { "url": "/images/kidney/pyelonephritis_dwi.png", "caption": "MRI DWI - Kısıtlanma", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Genellikle NORMAL görünüm (%70). Böbrek boyutunda artış. Kortikal ekojenite azalması veya artışı. Renal sinüs ekojenitesinde silinme.",
                "doppler": "Etkilenen alanda perfüzyon azalması veya artışı."
            },
            "ct": {
                "non_contrast": "Böbrek boyutunda artış. Perinefritik yağ dokusu densitesi artmış. Amfizematoz pyelonefrit: İntraparankimal gaz.",
                "contrast": "'STRİATED NEFROGRAM': Radyal hipoperfüze bantlar (tübüler obstrüksiyon). Fokal hipoperfüze alan (fokal piyelonefrit). Apse: Halka kontrastlanan sıvı koleksiyonu."
            },
            "mri": {
                "t1": "Kortikal ödem nedeniyle hafif hipointensite.",
                "t2": "Ödemli alanlar hiperintens. Perinefritik sıvı/ödem.",
                "dwi": "Akut inflamasyon alanlarında belirgin difüzyon kısıtlılığı (Parlak)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Often NORMAL appearance (70%). Increased kidney size. Decreased or increased cortical echogenicity. Loss of renal sinus echogenicity.",
                "doppler": "Decreased or increased perfusion in affected area."
            },
            "ct": {
                "non_contrast": "Increased kidney size. Increased perinephric fat density. Emphysematous pyelonephritis: Intraparenchymal gas.",
                "contrast": "'STRIATED NEPHROGRAM': Radial hypoperfused bands (tubular obstruction). Focal hypoperfused area (focal nephritis). Abscess: Ring-enhancing fluid collection."
            },
            "mri": {
                "t1": "Mild hypointensity due to cortical edema.",
                "t2": "Edematous areas hyperintense. Perinephric fluid/edema.",
                "dwi": "Marked diffusion restriction (Bright) in areas of acute inflammation."
            }
        },
        "keyPoints": [
            "'Striated nefrogram' akut piyelonefrit için karakteristik.",
            "Komplike piyelonefrit: Apse, nekroz, obstrüksiyon.",
            "Amfizematöz piyelonefrit: İntraparankimal gaz (DM, acil).",
            "Klinik + idrar + görüntüleme = Tanı. BT komplikasyon için."
        ],
        "keyPointsEn": [
            "'Striated nephrogram' is characteristic for acute pyelonephritis.",
            "Complicated pyelonephritis: Abscess, necrosis, obstruction.",
            "Emphysematous pyelonephritis: Intraparenchymal gas (DM, emergency).",
            "Clinical + urine + imaging = Diagnosis. CT for complications."
        ],
        "mechanism": "E. coli (%80+) alt üriner yoldan renal pelvise çıkan enfeksiyon → tübüler epitel tutulumu → nötrofil infiltrasyonu ve ödem. Tübüler ödem, kontrast ajanlı BT'de tübülden geçişi yavaşlatır → striated nefrogram (hipoperfüze alanlar ile normoperfüze alanların radyal şerit paterni). Amfizematoz tip: Gaz üreten bakteriler (Klebsiella, E. coli) + diyabetik mikrovasküler hasar → intraparankimal gaz birikimi.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Pyelonephritis. American College of Radiology.",
            "Radiopaedia.org - Acute pyelonephritis"
        ]
    },
    {
        "id": "nephrolithiasis",
        "name": "Renal Taş (Nefrolitiyazis)",
        "nameEn": "Nephrolithiasis (Kidney Stone)",
        "category": "Obstrüksiyon",
        "categoryEn": "Obstruction",
        "gallery": [
            { "url": "/images/kidney/stone_ct.png", "caption": "BT Non-Kontrast - Hiperdens Taş", "modality": "CT" },
            { "url": "/images/kidney/stone_usg_shadow.png", "caption": "USG - Akustik Gölge", "modality": "USG" }
        ],
        "findings": {
            "ultrasound": {
                "description": "HİPEREKOİK odak + AKUSTIK GÖLGELEME (posterior). 'Twinkle artifact': Doppler'da taş arkasında renkli artefakt.",
                "doppler": "Obstrüksiyon: Artmış renal rezistif indeks (RI >0.7). Tarda-parvus paterni distal stenozda."
            },
            "ct": {
                "non_contrast": "NON-KONTRAST BT ALTIN STANDART. Taş: Hiperdens (ürik asit >300 HU, kalsiyum >600 HU). Soft tissue rim sign: Üreteral taş çevresinde ödem. Hidronefroz ve hidroüreter derecesi.",
                "contrast": "Genellikle gerekli değil. Obstrüktif nefropati değerlendirmesi."
            },
            "mri": {
                "t2": "Taş: HİPOİNTENS boşluk (sinyal yok). Hidronefroz: Hiperintens dilate toplayıcı sistem.",
                "other_sequences": "Ürografi sekansları: Obstrüksiyon seviyesi."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "HYPERECHOIC focus + ACOUSTIC SHADOWING (posterior). 'Twinkle artifact': Colored artifact behind stone on Doppler.",
                "doppler": "Obstruction: Increased renal resistive index (RI >0.7). Tardus-parvus pattern in distal stenosis."
            },
            "ct": {
                "non_contrast": "NON-CONTRAST CT GOLD STANDARD. Stone: Hyperdense (uric acid >300 HU, calcium >600 HU). Soft tissue rim sign: Edema around ureteral stone. Degree of hydronephrosis and hydroureter.",
                "contrast": "Usually not required. Evaluation of obstructive nephropathy."
            },
            "mri": {
                "t2": "Stone: HYPOINTENSE void (no signal). Hydronephrosis: Hyperintense dilated collecting system.",
                "other_sequences": "Urography sequences: Obstruction level."
            }
        },
        "keyPoints": [
            "Non-kontrast BT sensitivitesi %95-98.",
            "Taş kompozisyonu: Kalsiyum oksalat > Ürik asit > Struvit > Sistin.",
            "Ürik asit taşlar: Daha düşük HU (<600), medikal tedaviye yanıt.",
            "'Rim sign': Üreteral taş çevresinde yumuşak doku - Flebit'ten ayırıcı."
        ],
        "keyPointsEn": [
            "Non-contrast CT sensitivity 95-98%.",
            "Stone composition: Calcium oxalate > Uric acid > Struvite > Cystine.",
            "Uric acid stones: Lower HU (<600), response to medical therapy.",
            "'Rim sign': Soft tissue around ureteral stone - Distinguishes from phlebolith."
        ],
        "mechanism": "İdrar supersatürasyonu → kristal nükleasyonu → taş büyümesi. Kalsiyum oksalat: Hiperoksalüri veya hiperkalsiüri. Ürik asit: Asidik idrar (pH <5.5) + hiperurisemi. Struvit (magnezyum amonyum fosfat): Üreaz (+) bakteri enfeksiyonu (Proteus, Klebsiella) → amonyak → alkali idrar. Sistin: Sistinopatide tübüler reabsorbsiyon bozukluğu. BT'de HU değeri taş kompozisyonunu yansıtır.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Onset Flank Pain — Suspicion of Stone Disease. American College of Radiology.",
            "Radiopaedia.org - Nephrolithiasis"
        ]
    },
    {
        "id": "renal_oncocytoma",
        "name": "Renal Onkositom",
        "nameEn": "Renal Oncocytoma",
        "category": "Benign",
        "categoryEn": "Benign",
        "mechanism": "Proksimal tübüler intersitisyel hücrelerden (onkositler) köken alan benign epitelyal tümör. Mitokondri açısından zengin eozinofilik hücreler kompakt adacıklar oluşturur. Santral yıldız şeklindeki skar, fibrotik stroma birikiminin sonucudur.",
        "findings": {
            "ct": {
                "contrast": "RCC ile ayrımı zordur. Santral skar (Yıldızvari hipodansite) klasik bulgusudur (%30-50). Spoke-wheel (tekerlek) tarzı kontrastlanma."
            },
            "mri": {
                "t1": "İzo/Hipointens. Santral skar hipointens.",
                "t2": "İzointens veya hafif hiperintens."
            }
        },
        "findingsEn": {
            "ct": {
                "contrast": "Difficult to distinguish from RCC. Central scar (Stellate hypodensity) is classic finding (30-50%). Spoke-wheel pattern enhancement."
            },
            "mri": {
                "t1": "Iso/Hypointense. Central scar hypointense.",
                "t2": "Isointense or slightly hyperintense."
            }
        },
        "keyPoints": [
            "İkinci en sık benign renal tümör (AML'den sonra).",
            "Görüntüleme ile RCC'den kesin ayrımı zordur, genellikle cerrahi sonrası tanı konur.",
            "Santral skar RCC'de de görülebilir (Nekroz) ancak onkositomda daha düzenlidir."
        ],
        "keyPointsEn": [
            "Second most common benign renal tumor (after AML).",
            "Definitive distinction from RCC is difficult with imaging, usually diagnosed post-surgery.",
            "Central scar can also be seen in RCC (Necrosis), but is more regular in oncocytoma."
        ],
        "references": [
            "Israel GM, Bosniak MA. Renal imaging for diagnosis and staging of renal cell carcinoma. Urol Clin North Am. 2003;30(3):499-514.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Renal oncocytoma"
        ]
    },
    {
        "id": "tcc_renal_pelvis",
        "name": "Transizyonel Hücreli Karsinom (TCC) / Ürotelyal Ca",
        "nameEn": "Transitional Cell Carcinoma (TCC) / Urothelial Ca",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "mechanism": "Kronik ürotelyum irritasyonu (sigara, aromatik amin maruziyeti) → DNA hasarı → Transizyonel epitel displazisi → Karsinoma. Tüm ürotelyumu etkileyebilen 'field effect' nedeniyle multifokaldır; eş zamanlı mesane tümörü sık görülür.",
        "findings": {
            "ct": {
                "contrast": "Renal pelviste santral yerleşimli yumuşak doku kitlesi. Dolum defekti. Kalisiyel dilatasyon (Tümör obstrüksiyonuna bağlı).",
                "non_contrast": "İzodens kitle.",
                "ct_venogram": "CT Ürografi (Boşaltım fazı) altın standarttır."
            },
            "mri": {
                "t2": "Hipointens (Böbrek parankimine göre).",
                "dwi": "Difüzyon kısıtlar."
            }
        },
        "findingsEn": {
            "ct": {
                "contrast": "Centrally located soft tissue mass in renal pelvis. Filling defect. Caliceal dilatation (due to tumor obstruction).",
                "non_contrast": "Isodense mass.",
                "ct_venogram": "CT Urography (Excretory phase) is gold standard."
            },
            "mri": {
                "t2": "Hypointense (relative to renal parenchyma).",
                "dwi": "Restricts diffusion."
            }
        },
        "keyPoints": [
            "Mesane kanseri ile birlikteliği sıktır (Multifokalite - Field defect).",
            "Hemalüri en sık semptomdur.",
            "RCC'den farkı: Böbrek konturunu bozmaz (santral yerleşim), parankimi invaze etmeden toplayıcı sistemi doldurur."
        ],
        "keyPointsEn": [
            "Frequent association with bladder cancer (Multifocality - Field defect).",
            "Hematuria is the most common symptom.",
            "Distinction from RCC: Does not distort kidney contour (central location), fills collecting system without invading parenchyma."
        ],
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Hematuria. American College of Radiology.",
            "Radiopaedia.org - Transitional cell carcinoma of the renal pelvis"
        ]
    },
    {
        "id": "hydronephrosis",
        "name": "Hidronefroz (Toplayıcı Sistem Dilatasyonu)",
        "nameEn": "Hydronephrosis (Collecting System Dilation)",
        "category": "Obstrüktif",
        "categoryEn": "Obstructive",
        "gallery": [
            { "url": "/images/kidney/stone_usg_shadow.png", "caption": "USG - Toplayıcı Sistem Dilatasyonu", "modality": "USG" },
            { "url": "/images/kidney/stone_ct.png", "caption": "BT - Hidronefroz + Taş", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Toplayıcı sistemde anekoik alan genişlemesi. Derecelendirme: Grade I (minör pelvis dilatasyonu), Grade II (pelvis + major kaliksler), Grade III (pelvis + tüm kaliksler, parankimde incelme yok), Grade IV (belirgin dilatasyon, parankimde belirgin incelme). Gerçek vs Yalancı Hidronefroz: İdrar kesesi dolu, fazla sıvı alımı yalancı pozitifliğe neden olabilir.",
                "doppler": "Obstrüktif üropati: Böbrek içi arteriyel dirençte artış (RI >0.70). Karşı böbrekte kompansatris hipertrofi."
            },
            "ct": {
                "non_contrast": "Toplayıcı sistemde dilatasyon (su yoğunluğu). Üreter takibi: Taş (hiperdens), kitle veya dıştan bası saptanabilir. Perinefritik yağ kirlenme (enfeksiyon eşliğinde).",
                "contrast": "Gecikmiş faz (10-15 dk): Kontrast dolmuş dilate toplayıcı sistem görüntülenir. Obstrüksiyon seviyesi netleşir."
            },
            "mri": {
                "t2": "Toplayıcı sistem ve üreter T2 hiperintens (sıvı). MR Ürografi: T2 ağırlıklı — İVP'nin MR eşdeğeri. Obstrüksiyon seviyesi ve etiyoloji.",
                "t1_c": "Geç faz ürografik sekans: Dilate sistem kontrastle dolu."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Anechoic space enlargement in collecting system. Grading: Grade I (minor pelvis dilation), Grade II (pelvis + major calyces), Grade III (pelvis + all calyces, no parenchymal thinning), Grade IV (marked dilation, significant parenchymal thinning). True vs False Hydronephrosis: Full bladder, excess fluid intake may cause false positives.",
                "doppler": "Obstructive uropathy: Increased intrarenal arterial resistance (RI >0.70). Compensatory hypertrophy in contralateral kidney."
            },
            "ct": {
                "non_contrast": "Collecting system dilation (water density). Ureter tracing: Stone (hyperdense), mass or extrinsic compression. Perinephric fat stranding (with infection).",
                "contrast": "Delayed phase (10-15 min): Contrast-filled dilated collecting system visualized. Obstruction level clarified."
            },
            "mri": {
                "t2": "Collecting system and ureter T2 hyperintense (fluid). MR Urography: T2-weighted — MR equivalent of IVP. Obstruction level and etiology.",
                "t1_c": "Late urographic sequence: Dilated system filled with contrast."
            }
        },
        "keyPoints": [
            "USG: Grade I-IV derecelendirme. RI >0.70 = Obstrüktif üropati kanıtı.",
            "BT Ürogarafi: Taş, tümör veya dıştan bası etiyolojisini netleştirir.",
            "MR Ürografi: Çocuklar ve gebeler için (radyasyonsuz).",
            "Piyonefroz şüphesinde (ateş + obstrüksiyon): Acil dekompresyon (DJ stent/nefrostomi)."
        ],
        "keyPointsEn": [
            "USG: Grade I-IV grading. RI >0.70 = Proof of obstructive uropathy.",
            "CT Urography: Clarifies etiology (stone, tumor or extrinsic compression).",
            "MR Urography: For children and pregnant patients (radiation-free).",
            "Suspected pyonephrosis (fever + obstruction): Urgent decompression (DJ stent/nephrostomy)."
        ],
        "mechanism": "Üriner sistem obstrüksiyonu → toplayıcı sistemde basınç artışı → kalikslerin genişlemesi → renal parankimde atrofi (kronik). Akut obstrüksiyon: Ağrı, renal fonksiyon bozulması. Kronik: Sessiz → ciddi parankimal kayıp. Çocuklarda en sık neden: UPJ (Üreteropelvik bileşke) darlığı. Erişkinde: Taş > kitle > dıştan bası (retroperitoneal fibrozis, tümör).",
        "etiology": "Taş (üreteral), Ürotelyal tümör, Dıştan bası (over/uterus tümörü, retroperitoneal kitle), UPJ darlığı, Prostat hipertrofisi/karsinomu, Retroperitoneal fibrozis.",
        "differentialDiagnosis": ["Parapelvik Kist (USG'de anekojenik — ama kaliksler normal)", "Megakaliks (Anatomik varyasyon)", "Yalancı Hidronefroz (Dolu mesane, aşırı hidrasyon)"],
        "goldStandard": "USG (ilk basamak) + BT Ürografi (etiyoloji). Fonksiyon değerlendirmesi: DMSA/MAG3 sintigrafisi.",
        "clinicalPearl": "USG'de toplayıcı sistem genişlemesi görüldüğünde MUTLAKA üreter ve mesane değerlendir — taşı kaçırma. RI >0.70 obstrüksiyonu kanıtlar.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Onset Flank Pain — Suspicion of Stone Disease. American College of Radiology.",
            "Radiopaedia.org - Hydronephrosis"
        ]
    },
    {
        "id": "adpkd",
        "name": "Otozomal Dominant Polikistik Böbrek Hastalığı (ADPKD)",
        "nameEn": "Autosomal Dominant Polycystic Kidney Disease (ADPKD)",
        "category": "Konjenital",
        "categoryEn": "Congenital",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "USG - Bilateral Polikistik Böbrekler", "modality": "USG" },
            { "url": "/images/placeholder_source.png", "caption": "BT - Büyümüş Polikistik Böbrekler", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Bilateral böbrek büyümesi. Çok sayıda değişik boyutlarda renal kistler (bilateral). Hepatik kistler (%75): Karaciğerde multiple kistler — ADPKD'nin ekstrarenal bulgusu. İntrarenal kistlerde içi eko (komplikasyon: Kanama, enfeksiyon).",
                "doppler": "Renal kan akımı azalmış (ileri evre). Renovasküler hipertansiyon."
            },
            "ct": {
                "non_contrast": "Bilateral büyümüş böbrekler, tüm parankimi dolduran çok sayıda kist. Akut kanama: Hiperdens kist içeriği. Kalsifikasyon: Kist duvarında.",
                "contrast": "Kistler kontrast tutmaz. Solid bileşen = Komplikasyon (RCC, enfekte kist) şüphesi."
            },
            "mri": {
                "t2": "Kistler T2 hiperintens (sıvı). Hemorajik kist: T1 hiperintens, T2 değişken. Kist sayısı ve hacim ölçümü (Total Kidney Volume — TKV).",
                "t1": "Hemorajik kistler T1 parlak (methemoglobin).",
                "other_sequences": "İntrakraniyal anevrizma: Beyin MRA (aile öyküsüne göre tarama)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Bilateral kidney enlargement. Numerous variable-sized renal cysts (bilateral). Hepatic cysts (75%): Multiple liver cysts — extrarenal manifestation of ADPKD. Internal echoes in renal cysts (complication: Hemorrhage, infection).",
                "doppler": "Reduced renal blood flow (advanced stage). Renovascular hypertension."
            },
            "ct": {
                "non_contrast": "Bilateral enlarged kidneys, numerous cysts filling all parenchyma. Acute hemorrhage: Hyperdense cyst content. Calcification: In cyst wall.",
                "contrast": "Cysts do not enhance. Solid component = Complication (RCC, infected cyst) suspicion."
            },
            "mri": {
                "t2": "Cysts T2 hyperintense (fluid). Hemorrhagic cyst: T1 hyperintense, T2 variable. Cyst count and volume measurement (Total Kidney Volume — TKV).",
                "t1": "Hemorrhagic cysts T1 bright (methemoglobin).",
                "other_sequences": "Intracranial aneurysm: Brain MRA (screening based on family history)."
            }
        },
        "keyPoints": [
            "ADPKD: PKD1 (%85) veya PKD2 (%15) mutasyonu — otozomal dominant.",
            "Ravine Kriterleri: Yaşa göre kist sayısı eşiği (15-39 yaş: ≥3 kist/böbrek).",
            "Ekstrarenal tutulum: Karaciğer kistleri (%75), intrakraniyal anevrizma (%5-10), mitral kapak prolapsusu.",
            "TKV (Total Böbrek Hacmi): Hastalık progresyon belirteci — Tolvaptan tedavisi seçiminde."
        ],
        "keyPointsEn": [
            "ADPKD: PKD1 (85%) or PKD2 (15%) mutation — autosomal dominant.",
            "Ravine Criteria: Age-dependent cyst count threshold (age 15-39: ≥3 cysts/kidney).",
            "Extrarenal involvement: Liver cysts (75%), intracranial aneurysm (5-10%), mitral valve prolapse.",
            "TKV (Total Kidney Volume): Disease progression marker — for Tolvaptan treatment selection."
        ],
        "mechanism": "PKD1 (polisistin-1) veya PKD2 (polisistin-2) mutasyonu → tübüler epitel hücre proliferasyonu ve sıvı sekresyonu → kistik dilatasyon → böbrek büyümesi → renal kompresyon → kronik böbrek hastalığı. Her iki alelin bozulması (two-hit hipotezi): Germline mutasyon + somatik ikinci mutasyon → kist oluşumu. Karaciğerde de biliyer epitel aynı protein eksprese eder → hepatik kistler.",
        "etiology": "PKD1 gen mutasyonu (kr. 16) %85; PKD2 (kr. 4) %15. PKD1: Daha ağır hastalık, erken ESRD.",
        "differentialDiagnosis": ["Otozomal Resesif PKD (Çocukluk, daha ağır)", "Von Hippel-Lindau (RCC + nöroblastom + hemanjioblastom)", "Multipl Basit Kistler (ADPKD'ye göre sayıca az, böbrek boyutu normal)", "Medüller Kistik Böbrek (Farklı genetik, küçük böbrek)"],
        "goldStandard": "Aile öyküsü + USG (Ravine kriterleri). Genetik test: Tanı belirsizliğinde (PKD1/2 dizi analizi).",
        "clinicalPearl": "Genç hipertansif hasta + bilateral büyümüş böbrekler + karaciğer kistleri = ADPKD. Aile öyküsünde intrakraniyal anevrizma varsa MRA taraması yap.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Silverman SG et al. Bosniak Classification of Cystic Renal Masses, Version 2019. Radiology. 2019;292(2):475-488.",
            "Radiopaedia.org - Autosomal dominant polycystic kidney disease"
        ]
    },
    {
        "id": "renal_infarction",
        "name": "Renal İnfarkt",
        "nameEn": "Renal Infarction",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "BT Kontrast - Kama Şekilli Perfüzyon Defekti", "modality": "CT" },
            { "url": "/images/placeholder_source.png", "caption": "MRI DWI - Renal İnfarkt Kısıtlanma", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Erken evrede USG normal olabilir. Renkli Doppler: İnfarkt alanında perfüzyon kaybı (kontralateral ile karşılaştır). Global infarkt: Tüm böbrekte akım yok.",
                "doppler": "Parsiyel infarkt: Fokal Doppler sinyal azalması. Renal arter embolisi: Ana damarda akım yokluğu."
            },
            "ct": {
                "non_contrast": "Erken: Normal veya hafif şişme.",
                "contrast": "KORTIKOMEDÜLLER FAZ: Üçgen/kama şekilli, kapsülden uzanan, kontrast tutmayan hipodens alan. 'Korteks işareti' (cortical rim sign): Kapsüler kolateral beslenme nedeniyle ince hiperintens rim — geç evrede izlenir (subakut). Global infarkt: Tüm böbrek kontrast tutmaz."
            },
            "mri": {
                "t2": "Subakut: T2 değişken sinyal.",
                "t1_c": "Üçgen şekilli perfüzyon defekti. Korteks işareti görülebilir.",
                "dwi": "Akut infarkt: Kısıtlanma (iskemik hasarlı tübüler epitel → sitotoksik ödem)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "USG may be normal in early stages. Color Doppler: Loss of perfusion in infarcted area (compare with contralateral). Global infarction: No flow in entire kidney.",
                "doppler": "Partial infarction: Focal Doppler signal reduction. Renal artery embolism: No flow in main vessel."
            },
            "ct": {
                "non_contrast": "Early: Normal or mild swelling.",
                "contrast": "CORTICOMEDULLARY PHASE: Triangular/wedge-shaped, capsule-based, non-enhancing hypodense area. 'Cortical rim sign': Thin hyperenhancing rim due to capsular collateral supply — seen in subacute phase. Global infarction: Entire kidney does not enhance."
            },
            "mri": {
                "t2": "Subacute: Variable T2 signal.",
                "t1_c": "Wedge-shaped perfusion defect. Cortical rim sign may be present.",
                "dwi": "Acute infarction: Restriction (ischemic tubular epithelium → cytotoxic edema)."
            }
        },
        "keyPoints": [
            "BT kontrast: Kama şekilli (kapsülden uzanan) kontrast tutmayan alan = Renal infarkt.",
            "Korteks işareti (cortical rim sign): Kapsüler kolateral → ince kontrastan şerit — subakut evre.",
            "DWI: Akut infarkt kısıtlanır (serebral iskemiye benzer).",
            "Etiyoloji: AF/kardiyak emboli, aort diseksiyonu, tromboz, vaskülit."
        ],
        "keyPointsEn": [
            "CT contrast: Wedge-shaped (capsule-based) non-enhancing area = Renal infarction.",
            "Cortical rim sign: Capsular collateral → thin contrast stripe — subacute phase.",
            "DWI: Acute infarction restricts (similar to cerebral ischemia).",
            "Etiology: AF/cardiac embolism, aortic dissection, thrombosis, vasculitis."
        ],
        "mechanism": "Renal arterde embolizm veya tromboz → renal parankime kan akışı kesilir → iskemik nekroz. Kama şekli: Arteriyel besleme bölgesel (kama şeklinde) → infarkt alanı bu anatomiye uyar. Korteks işareti: Kapsüler ve periüreteral arterler kapsülü besler → kapsüler rim korunur. DWI kısıtlanması: İskemik hücreler (sitotoksik ödem) su difüzyonunu kısıtlar.",
        "etiology": "Atriyal fibrilasyon (kardiyoembolik), Aort diseksiyonu, Trombotik hastalıklar (antifosfolipid sendromu), Vaskülit, Travma, İatrojenik (anjiyografi komplikasyonu).",
        "differentialDiagnosis": ["Pyelonefrit (Stranding + ateş, kama şekilli ama kontrastlanır)", "Renal Hücreli Karsinom (Kitlesel, heterojen kontrastlanma)", "Lenfoma (Difüz parankimal tutulum)"],
        "goldStandard": "BT Anjiografi: İnfarkt alanı + renal arterin değerlendirmesi. DWI + MRA: Radyasyon kullanmak istenmediğinde.",
        "clinicalPearl": "AF öyküsü + ani yan ağrısı + idrarda kan + BT'de kama defekti = Renal emboli. Korteks işareti subakut evrede izlenir (acil BT'de olmayabilir).",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Renal Vascular Disease. American College of Radiology.",
            "Radiopaedia.org - Renal infarction"
        ]
    }
];
