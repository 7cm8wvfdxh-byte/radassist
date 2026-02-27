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
        "mechanismEn": "VHL gene mutation (clear cell) → HIF-1α stabilization → increased VEGF and erythropoietin → tumor neovascularization (explains hypervascularity). Originates from proximal tubular cells. Papillary type: MET mutation, less vascular. Chromophobe: Originates from intercalated cells, less aggressive. T2 hyperintensity in clear cell is related to lipid/glycogen content.",
        "etiology": "Sigara, Obezite, Hipertansiyon, Diyaliz hastası böbrek kistleri. VHL sendromu: Bilateral, multisentrik RCC. Herediter papiller RCC: MET mutasyonu.",
        "etiologyEn": "Smoking, Obesity, Hypertension, Acquired cystic kidney disease in dialysis patients. VHL syndrome: Bilateral, multicentric RCC. Hereditary papillary RCC: MET mutation.",
        "differentialDiagnosis": ["Anjiyomiyolipom (Makroskopik yağ <-10HU = Kesin AML)", "Onkositom (Santral yıldız skar, benign ama görüntülemeyle ayrılamaz)", "Ürotelyal Ca (Santral, lümene uzanır, kontürü bozmaz)", "Abse (DWI kısıtlanma, ateş, klinik)"],
        "differentialDiagnosisEn": ["Angiomyolipoma (Macroscopic fat <-10HU = Definitive AML)", "Oncocytoma (Central stellate scar, benign but indistinguishable by imaging)", "Urothelial Ca (Central, extends into lumen, does not distort contour)", "Abscess (DWI restriction, fever, clinical)"],
        "goldStandard": "Multifazik BT (Kortikomedüller + Nefrogenik + Geç faz): RCC karakterizasyonu. MRI: Yağ tespiti, IVC değerlendirmesi.",
        "goldStandardEn": "Multiphasic CT (Corticomedullary + Nephrographic + Delayed phase): RCC characterization. MRI: Fat detection, IVC evaluation.",
        "clinicalPearl": "Clear cell RCC: T2 hiperintens + Chemical shift pozitif (yağ içeriği). >15-20HU kontrastlanma artışı = Solid kitle (malignite şüpheli).",
        "clinicalPearlEn": "Clear cell RCC: T2 hyperintense + Chemical shift positive (fat content). >15-20HU enhancement increase = Solid mass (suspicious for malignancy).",
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
        "etiology": "Sporadik (%80) veya Tüberöz Skleroz Kompleksi (TSC) ilişkili (%20). TSC: TSC1/TSC2 gen mutasyonu → bilateral, multipl AML'ler. Kadınlarda daha sık (hormonal etki).",
        "etiologyEn": "Sporadic (80%) or Tuberous Sclerosis Complex (TSC) associated (20%). TSC: TSC1/TSC2 gene mutation → bilateral, multiple AMLs. More common in women (hormonal influence).",
        "differentialDiagnosis": ["Renal Hücreli Karsinom (Fat-poor AML ile karışabilir; yağ yoksa BT ile ayrılamaz)", "Onkositom (Solid, homojen kontrastlanma)", "Renal lipom/liposarkom (Çok nadir, tamamen yağ)", "Wilms tümörü (Çocuk, yağ içermez)"],
        "differentialDiagnosisEn": ["Renal Cell Carcinoma (Can be confused with fat-poor AML; indistinguishable by CT if no fat)", "Oncocytoma (Solid, homogeneous enhancement)", "Renal lipoma/liposarcoma (Very rare, entirely fat)", "Wilms tumor (Pediatric, does not contain fat)"],
        "goldStandard": "Non-kontrast BT: Makroskopik yağ tespiti (<-10 HU = kesin AML). Fat-poor AML: MRI chemical shift, biyopsi veya cerrahi gerekebilir.",
        "goldStandardEn": "Non-contrast CT: Macroscopic fat detection (<-10 HU = definitive AML). Fat-poor AML: MRI chemical shift, biopsy or surgery may be required.",
        "clinicalPearl": "BT'de <-10 HU yağ dokusu = AML kesin tanı, biyopsiye gerek yok. >4 cm AML'de spontan kanama riski artar → profilaktik embolizasyon düşün. TSC'li hastada bilateral AML'ler beklenir.",
        "clinicalPearlEn": "Fat tissue <-10 HU on CT = Definitive AML diagnosis, no biopsy needed. >4 cm AML has increased spontaneous hemorrhage risk → consider prophylactic embolization. Bilateral AMLs are expected in TSC patients.",
        "mechanismEn": "mTOR pathway activation (TSC1/TSC2 mutation or sporadic) → abnormal mesodermal differentiation → hamartoma composed of a mixture of fat tissue, smooth muscle, and abnormal vessels. Abnormal vessels lack elastic walls (aneurysm risk) → Wunderlich syndrome (spontaneous retroperitoneal hemorrhage). Fat-poor AML: Smooth muscle dominant, frequent TSC association.",
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
        "etiology": "Edinsel (yaşlanma, tübüler obstrüksiyon). İnsidans yaşla artar: >50 yaş bireylerin %50'sinden fazlasında en az bir basit kist bulunur. Kronik böbrek hastalığında sıklık artar.",
        "etiologyEn": "Acquired (aging, tubular obstruction). Incidence increases with age: more than 50% of individuals over 50 have at least one simple cyst. Frequency increases in chronic kidney disease.",
        "differentialDiagnosis": ["Hiperdens kist (Bosniak II, >20 HU ama kontrastlanma yok)", "Parapelvik kist (Sinüs yerleşimli, hidronefroz ile karışabilir)", "Kistik RCC (Bosniak III-IV, septum/duvar kontrastlanması)", "ADPKD (Multipl bilateral kistler, büyük böbrekler, aile öyküsü)"],
        "differentialDiagnosisEn": ["Hyperdense cyst (Bosniak II, >20 HU but no enhancement)", "Parapelvic cyst (Sinus location, can be confused with hydronephrosis)", "Cystic RCC (Bosniak III-IV, septum/wall enhancement)", "ADPKD (Multiple bilateral cysts, enlarged kidneys, family history)"],
        "goldStandard": "USG: İlk basamak, basit kist kriterleri (anekoik, ince duvar, posterior güçlenme). BT: Bosniak sınıflaması ile karakterizasyon.",
        "goldStandardEn": "USG: First-line, simple cyst criteria (anechoic, thin wall, posterior enhancement). CT: Characterization with Bosniak classification.",
        "clinicalPearl": "USG'de 4 kriter: Anekoik + ince pürüzsüz duvar + posterior akustik güçlenme + internal eko yok = Bosniak I basit kist, takip gereksiz. Atipik özellik varsa BT/MRI ile Bosniak sınıflaması yap.",
        "clinicalPearlEn": "4 criteria on USG: Anechoic + thin smooth wall + posterior acoustic enhancement + no internal echoes = Bosniak I simple cyst, no follow-up needed. If atypical features present, perform Bosniak classification with CT/MRI.",
        "mechanismEn": "Focal dilation and obstruction of renal tubule → fluid accumulation → cystic structure. Acquired cysts: Develop due to tubular atrophy and fibrous tissue compression in chronic renal disease. Since the fluid is pure transudate (protein-free), it measures 0-20 HU and gives CSF-like very bright signal on T2. Absence of enhancement, normal wall and content = benign.",
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
        "etiology": "Basit kist zemininde kanama, enfeksiyon veya neoplastik değişim. Kistik RCC: Clear cell tip kistik dejenerasyon. Multilokuler kistik nefroma. Kist komplikasyonları (hemorajik, enfekte kist).",
        "etiologyEn": "Hemorrhage, infection, or neoplastic change arising from a simple cyst. Cystic RCC: Clear cell type cystic degeneration. Multilocular cystic nephroma. Cyst complications (hemorrhagic, infected cyst).",
        "differentialDiagnosis": ["Basit kist (Bosniak I, kontrastlanma yok)", "Hemorajik kist (Bosniak II, >20 HU ama kontrastlanma yok)", "Kistik RCC (Bosniak III-IV, solid kontrastlanan komponent)", "Multilokuler kistik nefroma (Bosniak III, pelvise herniasyon)", "Kist enfeksiyonu (Kalın duvar, klinik bulgular)"],
        "differentialDiagnosisEn": ["Simple cyst (Bosniak I, no enhancement)", "Hemorrhagic cyst (Bosniak II, >20 HU but no enhancement)", "Cystic RCC (Bosniak III-IV, solid enhancing component)", "Multilocular cystic nephroma (Bosniak III, herniation into pelvis)", "Cyst infection (Thick wall, clinical findings)"],
        "goldStandard": "Kontrastlı BT (multifazik): Bosniak sınıflaması altın standardı. MRI: Septum ve duvar kontrastlanmasında BT'den daha sensitif (2019 güncellemesiyle MRI bulguları da dahil edildi).",
        "goldStandardEn": "Contrast-enhanced CT (multiphasic): Gold standard for Bosniak classification. MRI: More sensitive than CT for septum and wall enhancement (MRI findings incorporated in the 2019 update).",
        "clinicalPearl": "Bosniak IIF: Takip gerekli (yıllık BT, 5 yıl). Bosniak III-IV: Cerrahi. 2019 güncellemesinde MRI bulguları eklendi ve IIF kategorisi netleştirildi. Septum kalınlığı ve kontrastlanması en kritik parametrelerdir.",
        "clinicalPearlEn": "Bosniak IIF: Follow-up required (annual CT, 5 years). Bosniak III-IV: Surgery. MRI findings added in 2019 update and IIF category clarified. Septum thickness and enhancement are the most critical parameters.",
        "mechanismEn": "Complications arising from simple cysts (hemorrhage, infection, dysplasia) → wall thickening, septation, calcification, or solid component. Bosniak classification stratifies malignancy risk based on cyst wall and content characteristics. Solid enhancing component (Bosniak IV) carries high risk (90%) for cystic RCC.",
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
        "etiology": "Asandan enfeksiyon (en sık): E. coli (%80+), Klebsiella, Proteus. Risk faktörleri: Kadın cinsiyet, üriner obstrüksiyon, vezikoüreteral reflü (VUR), diyabet, gebelik, immunsupresyon, üriner kateterizasyon.",
        "etiologyEn": "Ascending infection (most common): E. coli (80%+), Klebsiella, Proteus. Risk factors: Female sex, urinary obstruction, vesicoureteral reflux (VUR), diabetes, pregnancy, immunosuppression, urinary catheterization.",
        "differentialDiagnosis": ["Renal infarkt (Kama şekilli ama kontrastlanmaz; ateş/lökositoz genellikle yok)", "Renal lenfoma (Multipl, bilateral, hipovasküler)", "Renal apse (Halka kontrastlanma, lokalize koleksiyon)", "Akut tübüler nekroz (Bilateral, diffüz, klinik bağlam farklı)", "Fokal piyelonefrit vs RCC (Fokal hipoperfüze alan kitle ile karışabilir — takip BT ile ayrım)"],
        "differentialDiagnosisEn": ["Renal infarct (Wedge-shaped but does not enhance; fever/leukocytosis usually absent)", "Renal lymphoma (Multiple, bilateral, hypovascular)", "Renal abscess (Ring enhancement, localized collection)", "Acute tubular necrosis (Bilateral, diffuse, different clinical context)", "Focal pyelonephritis vs RCC (Focal hypoperfused area can mimic a mass — differentiate with follow-up CT)"],
        "goldStandard": "Klinik tanı (ateş + kostovertebral hassasiyet + piyüri). Kontrastlı BT: Komplikasyon şüphesinde (apse, amfizematöz piyelonefrit, obstrüksiyon). DWI-MRI: Radyasyon kaygısında alternatif.",
        "goldStandardEn": "Clinical diagnosis (fever + costovertebral tenderness + pyuria). Contrast-enhanced CT: When complication is suspected (abscess, emphysematous pyelonephritis, obstruction). DWI-MRI: Alternative when radiation is a concern.",
        "clinicalPearl": "Antibiyotik tedavisine 72 saat yanıtsızlık → kontrastlı BT çek (apse? obstrüksiyon?). Amfizematöz piyelonefrit (intraparankimal gaz) = acil cerrahi/drenaj, genellikle diyabetik hastada. USG %70 normal olabilir — normal USG piyelonefriti dışlamaz.",
        "clinicalPearlEn": "No response to antibiotics within 72 hours → obtain contrast-enhanced CT (abscess? obstruction?). Emphysematous pyelonephritis (intraparenchymal gas) = emergency surgery/drainage, usually in diabetic patients. USG may be normal in 70% — normal USG does not exclude pyelonephritis.",
        "mechanismEn": "E. coli (80%+) ascending infection from lower urinary tract to renal pelvis → tubular epithelial involvement → neutrophil infiltration and edema. Tubular edema slows contrast transit through tubules on contrast-enhanced CT → striated nephrogram (radial stripe pattern of hypoperfused and normally perfused areas). Emphysematous type: Gas-producing bacteria (Klebsiella, E. coli) + diabetic microvascular damage → intraparenchymal gas accumulation.",
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
        "etiology": "Kalsiyum oksalat (%75-80): Hiperkalsiüri, hiperoksalüri. Ürik asit (%5-10): Gut, myeloproliferatif hastalıklar, asidik idrar. Struvit (%10-15): Üreaz-pozitif bakteri enfeksiyonu (Proteus). Sistin (%1-2): Otozomal resesif sistinüri. Risk faktörleri: Dehidratasyon, yüksek protein diyeti, aile öyküsü, medüller sünger böbrek.",
        "etiologyEn": "Calcium oxalate (75-80%): Hypercalciuria, hyperoxaluria. Uric acid (5-10%): Gout, myeloproliferative diseases, acidic urine. Struvite (10-15%): Urease-producing bacterial infection (Proteus). Cystine (1-2%): Autosomal recessive cystinuria. Risk factors: Dehydration, high-protein diet, family history, medullary sponge kidney.",
        "differentialDiagnosis": ["Flebolit (Pelvik ven kalsifikasyonu, 'comet tail' bulgusu, rim sign yok)", "Vasküler kalsifikasyon (Tübüler, damar seyrine uyumlu)", "Renal arter anevrizması (Kalsifiye, hilum komşuluğunda)", "Appendikolit (Sağ alt kadran, klinik bağlam)", "Tüberküloz kalsifikasyonu (Parankimal, düzensiz)"],
        "differentialDiagnosisEn": ["Phlebolith (Pelvic vein calcification, 'comet tail' sign, no rim sign)", "Vascular calcification (Tubular, follows vessel course)", "Renal artery aneurysm (Calcified, adjacent to hilum)", "Appendicolith (Right lower quadrant, clinical context)", "Tuberculosis calcification (Parenchymal, irregular)"],
        "goldStandard": "Non-kontrast BT: Altın standart (sensitivite %95-98, spesifisite %96-100). USG: Çocuklarda ve gebelerde ilk tercih. Dual-energy BT: Taş kompozisyonu tayini (ürik asit vs kalsiyum ayrımı).",
        "goldStandardEn": "Non-contrast CT: Gold standard (sensitivity 95-98%, specificity 96-100%). USG: First choice in children and pregnant patients. Dual-energy CT: Stone composition determination (uric acid vs calcium differentiation).",
        "clinicalPearl": "Ürik asit taşları BT'de nispeten düşük HU (<600) gösterir ve alkali idrar tedavisine yanıt verir — cerrahi gerekmeyebilir. Struvit taşları staghorn konfigürasyonu gösterir ve tedavisiz tekrarlar. Dual-energy BT taş tipini non-invaziv ayırt edebilir.",
        "clinicalPearlEn": "Uric acid stones show relatively low HU (<600) on CT and respond to urine alkalinization therapy — surgery may not be needed. Struvite stones present in staghorn configuration and recur without treatment. Dual-energy CT can non-invasively differentiate stone type.",
        "mechanismEn": "Urine supersaturation → crystal nucleation → stone growth. Calcium oxalate: Hyperoxaluria or hypercalciuria. Uric acid: Acidic urine (pH <5.5) + hyperuricemia. Struvite (magnesium ammonium phosphate): Urease-producing bacterial infection (Proteus, Klebsiella) → ammonia → alkaline urine. Cystine: Tubular reabsorption defect in cystinopathy. HU value on CT reflects stone composition.",
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
        "etiology": "Sporadik (çoğunluk). Birt-Hogg-Dube sendromu: Bilateral, multipl onkositomlar + kromofob RCC. İnsidans: Tüm renal neoplazmlerin %3-7'si. Erkeklerde daha sık, genellikle >50 yaş.",
        "etiologyEn": "Sporadic (majority). Birt-Hogg-Dube syndrome: Bilateral, multiple oncocytomas + chromophobe RCC. Incidence: 3-7% of all renal neoplasms. More common in males, usually >50 years old.",
        "differentialDiagnosis": ["Renal Hücreli Karsinom (En önemli ayırıcı; görüntüleme ile kesin ayrım çoğu zaman mümkün değil)", "Kromofob RCC (Onkositomla histolojik benzerlik, spoke-wheel olabilir)", "Fat-poor AML (Homojen solid kitle, yağ saptanamaz)", "Renal adenom (Küçük, <1 cm, insidental)"],
        "differentialDiagnosisEn": ["Renal Cell Carcinoma (Most important differential; definitive distinction by imaging is often not possible)", "Chromophobe RCC (Histological similarity to oncocytoma, may show spoke-wheel pattern)", "Fat-poor AML (Homogeneous solid mass, fat not detectable)", "Renal adenoma (Small, <1 cm, incidental)"],
        "goldStandard": "Kontrastlı BT/MRI: Santral skar + spoke-wheel kontrastlanma paterni şüphe uyandırır ama kesin tanı koydurmaz. Kesin tanı: Cerrahi eksizyon + histopatoloji. Biyopsi güvenilirliği sınırlıdır.",
        "goldStandardEn": "Contrast-enhanced CT/MRI: Central scar + spoke-wheel enhancement pattern raises suspicion but is not diagnostic. Definitive diagnosis: Surgical excision + histopathology. Biopsy reliability is limited.",
        "clinicalPearl": "Santral yıldız skar + spoke-wheel kontrastlanma paterni onkositomu düşündürür ama RCC'yi dışlamaz — %30-50'sinde skar yoktur. Görüntüleme ile kesin tanı konamadığından çoğu olguda parsiyel nefrektomi yapılır ve tanı patolojik olarak konur.",
        "clinicalPearlEn": "Central stellate scar + spoke-wheel enhancement pattern suggests oncocytoma but does not exclude RCC — scar is absent in 30-50%. Since definitive diagnosis cannot be made by imaging, partial nephrectomy is performed in most cases and diagnosis is established pathologically.",
        "mechanismEn": "Benign epithelial tumor originating from proximal tubular intercalated cells (oncocytes). Mitochondria-rich eosinophilic cells form compact nests. The central stellate scar results from fibrotic stromal accumulation.",
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
        "etiology": "Sigara (en güçlü risk faktörü, 2-4 kat risk artışı), aromatik aminler (mesleki maruziyet: boya, kimya sanayi), aristoloşik asit (Balkan nefropatisi), siklofosfamid, kronik enfeksiyon/irritasyon, fenasetin kullanımı.",
        "etiologyEn": "Smoking (strongest risk factor, 2-4 fold increased risk), aromatic amines (occupational exposure: dye, chemical industry), aristolochic acid (Balkan nephropathy), cyclophosphamide, chronic infection/irritation, phenacetin use.",
        "differentialDiagnosis": ["Renal Hücreli Karsinom (Kortikal kökenli, böbrek konturunu bozar, hipervasküler)", "Kan pıhtısı (Dolum defekti ama kontrastlanma yok, pozisyonla değişebilir)", "Fungus topu (İmmunsuprese hasta, antifungal tedaviye yanıt)", "Fibroepitelyal polip (Nadir, üreter yerleşimli benign tümör)", "Renal pelvis taşı (Hiperdens, akustik gölge)"],
        "differentialDiagnosisEn": ["Renal Cell Carcinoma (Cortical origin, distorts renal contour, hypervascular)", "Blood clot (Filling defect but no enhancement, may change with position)", "Fungus ball (Immunosuppressed patient, response to antifungal therapy)", "Fibroepithelial polyp (Rare, ureteral benign tumor)", "Renal pelvis stone (Hyperdense, acoustic shadow)"],
        "goldStandard": "BT Ürografi (boşaltım fazı): Dolum defekti tespitinde altın standart. Üreterorenoskopi + biyopsi: Histopatolojik tanı. Sitoloji: Yüksek grade tümörlerde yardımcı.",
        "goldStandardEn": "CT Urography (excretory phase): Gold standard for detecting filling defects. Ureteroscopy + biopsy: Histopathological diagnosis. Cytology: Helpful in high-grade tumors.",
        "clinicalPearl": "Ağrısız makroskopik hematüri + BT ürografide dolum defekti + böbrek konturu normal = Ürotelyal karsinom düşün. Field effect nedeniyle TÜM ürotelyumu (bilateral böbrekler + üreterler + mesane) tara. Sigara öyküsü risk artırır.",
        "clinicalPearlEn": "Painless gross hematuria + filling defect on CT urography + normal renal contour = Consider urothelial carcinoma. Due to field effect, scan the ENTIRE urothelium (bilateral kidneys + ureters + bladder). Smoking history increases risk.",
        "mechanismEn": "Chronic urothelial irritation (smoking, aromatic amine exposure) → DNA damage → Transitional epithelial dysplasia → Carcinoma. Multifocal due to 'field effect' affecting the entire urothelium; synchronous bladder tumor is common.",
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
        "mechanismEn": "Urinary system obstruction → increased pressure in collecting system → calyceal dilation → renal parenchymal atrophy (chronic). Acute obstruction: Pain, renal function impairment. Chronic: Silent → severe parenchymal loss. Most common cause in children: UPJ (Ureteropelvic junction) stenosis. In adults: Stone > mass > extrinsic compression (retroperitoneal fibrosis, tumor).",
        "etiology": "Taş (üreteral), Ürotelyal tümör, Dıştan bası (over/uterus tümörü, retroperitoneal kitle), UPJ darlığı, Prostat hipertrofisi/karsinomu, Retroperitoneal fibrozis.",
        "etiologyEn": "Stone (ureteral), Urothelial tumor, Extrinsic compression (ovarian/uterine tumor, retroperitoneal mass), UPJ stenosis, Prostatic hypertrophy/carcinoma, Retroperitoneal fibrosis.",
        "differentialDiagnosis": ["Parapelvik Kist (USG'de anekojenik — ama kaliksler normal)", "Megakaliks (Anatomik varyasyon)", "Yalancı Hidronefroz (Dolu mesane, aşırı hidrasyon)"],
        "differentialDiagnosisEn": ["Parapelvic Cyst (Anechoic on USG — but calyces normal)", "Megacalyx (Anatomic variant)", "False Hydronephrosis (Full bladder, excessive hydration)"],
        "goldStandard": "USG (ilk basamak) + BT Ürografi (etiyoloji). Fonksiyon değerlendirmesi: DMSA/MAG3 sintigrafisi.",
        "goldStandardEn": "USG (first-line) + CT Urography (etiology). Functional assessment: DMSA/MAG3 scintigraphy.",
        "clinicalPearl": "USG'de toplayıcı sistem genişlemesi görüldüğünde MUTLAKA üreter ve mesane değerlendir — taşı kaçırma. RI >0.70 obstrüksiyonu kanıtlar.",
        "clinicalPearlEn": "When collecting system dilation is seen on USG, ALWAYS evaluate the ureter and bladder — do not miss a stone. RI >0.70 proves obstruction.",
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
        "mechanismEn": "PKD1 (polycystin-1) or PKD2 (polycystin-2) mutation → tubular epithelial cell proliferation and fluid secretion → cystic dilation → kidney enlargement → renal compression → chronic kidney disease. Disruption of both alleles (two-hit hypothesis): Germline mutation + somatic second mutation → cyst formation. Biliary epithelium in the liver also expresses the same protein → hepatic cysts.",
        "etiology": "PKD1 gen mutasyonu (kr. 16) %85; PKD2 (kr. 4) %15. PKD1: Daha ağır hastalık, erken ESRD.",
        "etiologyEn": "PKD1 gene mutation (chr. 16) 85%; PKD2 (chr. 4) 15%. PKD1: More severe disease, early ESRD.",
        "differentialDiagnosis": ["Otozomal Resesif PKD (Çocukluk, daha ağır)", "Von Hippel-Lindau (RCC + nöroblastom + hemanjioblastom)", "Multipl Basit Kistler (ADPKD'ye göre sayıca az, böbrek boyutu normal)", "Medüller Kistik Böbrek (Farklı genetik, küçük böbrek)"],
        "differentialDiagnosisEn": ["Autosomal Recessive PKD (Childhood, more severe)", "Von Hippel-Lindau (RCC + neuroblastoma + hemangioblastoma)", "Multiple Simple Cysts (Fewer in number compared to ADPKD, normal kidney size)", "Medullary Cystic Kidney (Different genetics, small kidney)"],
        "goldStandard": "Aile öyküsü + USG (Ravine kriterleri). Genetik test: Tanı belirsizliğinde (PKD1/2 dizi analizi).",
        "goldStandardEn": "Family history + USG (Ravine criteria). Genetic testing: When diagnosis is uncertain (PKD1/2 sequence analysis).",
        "clinicalPearl": "Genç hipertansif hasta + bilateral büyümüş böbrekler + karaciğer kistleri = ADPKD. Aile öyküsünde intrakraniyal anevrizma varsa MRA taraması yap.",
        "clinicalPearlEn": "Young hypertensive patient + bilateral enlarged kidneys + liver cysts = ADPKD. If family history of intracranial aneurysm, perform MRA screening.",
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
        "mechanismEn": "Embolism or thrombosis in renal artery → blood flow to renal parenchyma is interrupted → ischemic necrosis. Wedge shape: Arterial supply is regional (wedge-shaped) → infarct area corresponds to this anatomy. Cortical rim sign: Capsular and periureteral arteries supply the capsule → capsular rim is preserved. DWI restriction: Ischemic cells (cytotoxic edema) restrict water diffusion.",
        "etiology": "Atriyal fibrilasyon (kardiyoembolik), Aort diseksiyonu, Trombotik hastalıklar (antifosfolipid sendromu), Vaskülit, Travma, İatrojenik (anjiyografi komplikasyonu).",
        "etiologyEn": "Atrial fibrillation (cardioembolic), Aortic dissection, Thrombotic diseases (antiphospholipid syndrome), Vasculitis, Trauma, Iatrogenic (angiography complication).",
        "differentialDiagnosis": ["Pyelonefrit (Stranding + ateş, kama şekilli ama kontrastlanır)", "Renal Hücreli Karsinom (Kitlesel, heterojen kontrastlanma)", "Lenfoma (Difüz parankimal tutulum)"],
        "differentialDiagnosisEn": ["Pyelonephritis (Stranding + fever, wedge-shaped but enhances)", "Renal Cell Carcinoma (Mass-like, heterogeneous enhancement)", "Lymphoma (Diffuse parenchymal involvement)"],
        "goldStandard": "BT Anjiografi: İnfarkt alanı + renal arterin değerlendirmesi. DWI + MRA: Radyasyon kullanmak istenmediğinde.",
        "goldStandardEn": "CT Angiography: Infarct area + renal artery evaluation. DWI + MRA: When avoiding radiation.",
        "clinicalPearl": "AF öyküsü + ani yan ağrısı + idrarda kan + BT'de kama defekti = Renal emboli. Korteks işareti subakut evrede izlenir (acil BT'de olmayabilir).",
        "clinicalPearlEn": "AF history + sudden flank pain + hematuria + wedge-shaped defect on CT = Renal embolism. Cortical rim sign is seen in the subacute phase (may not be present on emergency CT).",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Renal Vascular Disease. American College of Radiology.",
            "Radiopaedia.org - Renal infarction"
        ]
    },
    {
        "id": "renal_abscess",
        "name": "Böbrek Apsesi (Renal Apse)",
        "nameEn": "Renal Abscess",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "mechanism": "Akut piyelonefritin ilerlemesiyle renal parankimde likefaksiyon nekrozu → lokalize pürülan koleksiyon. Hematojen yolla da oluşabilir (S. aureus bakteriyemisi). Nötrofil infiltrasyonu ve doku yıkımı → kalın fibröz kapsül oluşumu. DWI'da kısıtlanma: Visköz pürülan materyal (yüksek hücresel içerik) su difüzyonunu kısıtlar. Perinefritik apse: Renal kapsülü aşarak perirenal alana yayılım.",
        "mechanismEn": "Liquefactive necrosis in renal parenchyma due to progression of acute pyelonephritis → localized purulent collection. Can also occur hematogenously (S. aureus bacteremia). Neutrophil infiltration and tissue destruction → thick fibrous capsule formation. DWI restriction: Viscous purulent material (high cellular content) restricts water diffusion. Perinephric abscess: Spread to perirenal space by crossing the renal capsule.",
        "etiology": "Komplike piyelonefrit (en sık), hematojen yayılım (S. aureus), obstrüktif üropati, diyabet, immunsupresyon, renal taş hastalığı.",
        "etiologyEn": "Complicated pyelonephritis (most common), hematogenous spread (S. aureus), obstructive uropathy, diabetes, immunosuppression, renal stone disease.",
        "findings": {
            "ct": {
                "non_contrast": "Renal parankimde hipodens koleksiyon. Perinefritik yağ dokusu kirlilik artışı (stranding). Böbrek boyutunda artış.",
                "contrast": "KALIN DUVARLI, PERİFERAL KONTRASTLANAN (ring enhancement) koleksiyon. Santral hipodansite (nekrotik/pürülan materyal kontrastlanmaz). Perinefritik apse: Böbrek dışına uzanan koleksiyon. Gerota fasyası kalınlaşması."
            },
            "mri": {
                "t1": "Santral hipointens (pürülan sıvı). Duvar izo-hipointens.",
                "t2": "Santral hiperintens. Periferal duvar hipointens.",
                "dwi": "BELİRGİN DİFÜZYON KISITLANMASI: Apse kavitesi parlak (ADC düşük). Kistik/nekrotik tümörden ayırıcı tanıda çok önemli."
            },
            "usg": {
                "description": "Kalın duvarlı, düzensiz sınırlı, internal eko içeren koleksiyon. Değişken ekojenite (hipo-hiperekoik debris). Perinefritik sıvı. Apse duvarında vaskülarite artışı (Doppler)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Hypodense collection in renal parenchyma. Perinephric fat stranding. Increased kidney size.",
                "contrast": "THICK-WALLED, PERIPHERAL ENHANCING (ring enhancement) collection. Central hypodensity (necrotic/purulent material does not enhance). Perinephric abscess: Collection extending beyond kidney. Gerota fascia thickening."
            },
            "mri": {
                "t1": "Central hypointense (purulent fluid). Wall iso-hypointense.",
                "t2": "Central hyperintense. Peripheral wall hypointense.",
                "dwi": "MARKED DIFFUSION RESTRICTION: Abscess cavity bright (low ADC). Very important for differentiation from cystic/necrotic tumor."
            },
            "usg": {
                "description": "Thick-walled, irregularly marginated collection with internal echoes. Variable echogenicity (hypo-hyperechoic debris). Perinephric fluid. Increased vascularity in abscess wall (Doppler)."
            }
        },
        "keyPoints": [
            "Kalın duvar + ring enhancement + DWI kısıtlanma = Apse.",
            "DWI: Apse vs nekrotik tümör ayrımında kritik (apse DWI'da parlak, ADC düşük).",
            "Diyabetik ve immunsuprese hastalarda komplikasyon riski yüksek.",
            ">3 cm apse: Perkütan drenaj endikasyonu."
        ],
        "keyPointsEn": [
            "Thick wall + ring enhancement + DWI restriction = Abscess.",
            "DWI: Critical for abscess vs necrotic tumor differentiation (abscess bright on DWI, low ADC).",
            "High complication risk in diabetic and immunosuppressed patients.",
            ">3 cm abscess: Indication for percutaneous drainage."
        ],
        "differentialDiagnosis": ["Kistik/nekrotik RCC (Kontrastlanan solid komponent, DWI daha az kısıtlanma)", "Enfekte kist (Daha ince duvar, klinik bağlam)", "Renal hematom (Travma öyküsü, akut evrede hiperdens)"],
        "differentialDiagnosisEn": ["Cystic/necrotic RCC (Enhancing solid component, less DWI restriction)", "Infected cyst (Thinner wall, clinical context)", "Renal hematoma (Trauma history, hyperdense in acute phase)"],
        "goldStandard": "Kontrastlı BT: Apse tespiti ve boyut değerlendirmesi. DWI: Nekrotik tümörden ayrım. Perkütan aspirasyon: Tanısal ve terapötik.",
        "goldStandardEn": "Contrast-enhanced CT: Abscess detection and size assessment. DWI: Differentiation from necrotic tumor. Percutaneous aspiration: Diagnostic and therapeutic.",
        "clinicalPearl": "Piyelonefrit tedavisine 72 saatte yanıt yoksa BT çek — apse gelişmiş olabilir. DWI kısıtlanması apseyi nekrotik tümörden ayırır.",
        "clinicalPearlEn": "If no response to pyelonephritis treatment within 72 hours, obtain CT — abscess may have developed. DWI restriction differentiates abscess from necrotic tumor.",
        "references": [
            "Kawashima A et al. Imaging of renal inflammatory disease. Radiol Clin North Am. 2000;38(5):1067-1089.",
            "ACR Appropriateness Criteria: Acute Pyelonephritis. American College of Radiology.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Renal abscess"
        ]
    },
    {
        "id": "xanthogranulomatous_pyelonephritis",
        "name": "Ksantogranülomatöz Piyelonefrit (XGP)",
        "nameEn": "Xanthogranulomatous Pyelonephritis (XGP)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "mechanism": "Kronik obstrüksiyon (genellikle staghorn kalkülüs) + kronik enfeksiyon (Proteus, E. coli) → makrofaj infiltrasyonu → lipid yüklü köpüksü makrofajlar (ksantom hücreleri) → granülomatöz doku yıkımı. Renal parankimi yıkarak pelvis ve kalikslerden perinefritik alana yayılır. Bear's paw (ayı pençesi) görünümü: Dilate kaliksler çevresinde düşük dansiteli inflamatuar doku birikimi.",
        "mechanismEn": "Chronic obstruction (usually staghorn calculus) + chronic infection (Proteus, E. coli) → macrophage infiltration → lipid-laden foamy macrophages (xanthoma cells) → granulomatous tissue destruction. Destroys renal parenchyma and spreads from pelvis and calyces to the perinephric space. Bear's paw appearance: Accumulation of low-density inflammatory tissue surrounding dilated calyces.",
        "etiology": "Staghorn kalkülüs + kronik enfeksiyon (Proteus mirabilis en sık). Risk faktörleri: Diyabet, obstrüktif üropati, immunsupresyon. Kadınlarda daha sık.",
        "etiologyEn": "Staghorn calculus + chronic infection (Proteus mirabilis most common). Risk factors: Diabetes, obstructive uropathy, immunosuppression. More common in women.",
        "findings": {
            "ct": {
                "non_contrast": "Staghorn kalkülüs (santral hiperdens taş). Böbrek büyümüş, parankim yıkılmış. Dilate kaliksler çevresinde düşük dansiteli materyal.",
                "contrast": "BEAR'S PAW (AYI PENÇESİ) BELİRTİSİ: Kontrast tutmayan dilate kaliksler (debris/pü) çevresinde kontrast tutan inflamatuar doku halkası. Perinefritik yayılım: Gerota fasyası kalınlaşması, psoas kası tutulumu. Böbrek fonksiyonu genellikle kayıp."
            },
            "mri": {
                "t1": "Ksantom dokusu hipointens. Lipid yüklü makrofajlar nedeniyle T1'de hafif sinyal artışı olabilir.",
                "t2": "Dilate kaliksler hiperintens (debris). Çevre inflamatuar doku heterojen.",
                "dwi": "İnflamatuar doku ve debris alanlarında difüzyon kısıtlanması."
            },
            "usg": {
                "description": "Büyümüş böbrek. Santral hiperekoik kalkülüs (akustik gölge). Dilate kaliksler içinde ekojen debris. Renal parankim ekojenitesinde artış. Normal parankim-sinüs ayrımı kaybolmuş."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Staghorn calculus (central hyperdense stone). Enlarged kidney, destroyed parenchyma. Low-density material surrounding dilated calyces.",
                "contrast": "BEAR'S PAW SIGN: Ring of enhancing inflammatory tissue surrounding non-enhancing dilated calyces (debris/pus). Perinephric extension: Gerota fascia thickening, psoas muscle involvement. Renal function usually lost."
            },
            "mri": {
                "t1": "Xanthomatous tissue hypointense. May show mild signal increase due to lipid-laden macrophages.",
                "t2": "Dilated calyces hyperintense (debris). Surrounding inflammatory tissue heterogeneous.",
                "dwi": "Diffusion restriction in inflammatory tissue and debris areas."
            },
            "usg": {
                "description": "Enlarged kidney. Central hyperechoic calculus (acoustic shadow). Echogenic debris in dilated calyces. Increased echogenicity of renal parenchyma. Loss of normal parenchyma-sinus differentiation."
            }
        },
        "keyPoints": [
            "Staghorn kalkülüs + büyümüş fonksiyonsuz böbrek = XGP düşün.",
            "Bear's paw (ayı pençesi) belirtisi: BT'de dilate kaliksleri çevreleyen inflamatuar doku halkası.",
            "Genellikle unilateral; RCC'yi taklit edebilir (fokal form).",
            "Tedavi: Nefrektomi (antibiyotikle tek başına tedavi yetersiz)."
        ],
        "keyPointsEn": [
            "Staghorn calculus + enlarged nonfunctioning kidney = Consider XGP.",
            "Bear's paw sign: Ring of inflammatory tissue surrounding dilated calyces on CT.",
            "Usually unilateral; can mimic RCC (focal form).",
            "Treatment: Nephrectomy (antibiotics alone insufficient)."
        ],
        "differentialDiagnosis": ["Renal hücreli karsinom (Fokal XGP, kitle benzeri görünüm)", "Tüberküloz piyelonefrit (Kalsifikasyon, autonephrectomy)", "Renal apse (Lokalize, ring enhancement)"],
        "differentialDiagnosisEn": ["Renal cell carcinoma (Focal XGP, mass-like appearance)", "Tuberculous pyelonephritis (Calcification, autonephrectomy)", "Renal abscess (Localized, ring enhancement)"],
        "goldStandard": "Kontrastlı BT: Staghorn kalkülüs + bear's paw paterni tanısaldır. Kesin tanı: Histopatoloji (köpüksü makrofajlar).",
        "goldStandardEn": "Contrast-enhanced CT: Staghorn calculus + bear's paw pattern is diagnostic. Definitive diagnosis: Histopathology (foamy macrophages).",
        "clinicalPearl": "Orta yaşlı kadın + staghorn taş + büyümüş non-fonksiyone böbrek + BT'de bear's paw = XGP. Fokal form RCC'yi taklit eder — dikkat!",
        "clinicalPearlEn": "Middle-aged woman + staghorn stone + enlarged nonfunctioning kidney + bear's paw on CT = XGP. Focal form mimics RCC — caution!",
        "references": [
            "Craig WD et al. Xanthogranulomatous pyelonephritis: Imaging findings. AJR Am J Roentgenol. 2008;190(4):917-923.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Xanthogranulomatous pyelonephritis"
        ]
    },
    {
        "id": "renal_trauma",
        "name": "Böbrek Travması",
        "nameEn": "Renal Trauma",
        "category": "Travma",
        "categoryEn": "Trauma",
        "mechanism": "Künt veya penetran travma → renal parankimal laserasyon, subkapsüler/perinefritik hematom, vasküler hasar. AAST derecelendirmesi hasarın ciddiyetini belirler. Grade I-III: Konservatif tedavi. Grade IV-V: Cerrahi veya anjiyografik embolizasyon. Vasküler pediküler hasar (Grade V): Renal arter intiması yırtılır → tromboz → global iskemi.",
        "mechanismEn": "Blunt or penetrating trauma → renal parenchymal laceration, subcapsular/perinephric hematoma, vascular injury. AAST grading determines injury severity. Grade I-III: Conservative management. Grade IV-V: Surgery or angiographic embolization. Vascular pedicle injury (Grade V): Renal artery intimal tear → thrombosis → global ischemia.",
        "etiology": "Künt travma (%80-90): Motorlu araç kazası, düşme, spor yaralanması. Penetran travma (%10-20): Bıçak, ateşli silah. Predispozan: Hidronefrotik böbrek, böbrek kisti/tümör (minör travmayla bile hasar).",
        "etiologyEn": "Blunt trauma (80-90%): Motor vehicle accident, fall, sports injury. Penetrating trauma (10-20%): Stab wound, gunshot. Predisposing: Hydronephrotic kidney, renal cyst/tumor (injury even with minor trauma).",
        "findings": {
            "ct": {
                "non_contrast": "Perinefritik/subkapsüler hematom (hiperdens, 40-70 HU). Parankimal heterojenite. Retroperitoneal serbest sıvı.",
                "contrast": "AAST DERECELENDİRME: Grade I: Subkapsüler hematom, kontüzyon. Grade II: <1 cm laserasyon, sınırlı perinefritik hematom. Grade III: >1 cm laserasyon (toplayıcı sisteme ulaşmayan). Grade IV: Toplayıcı sisteme uzanan laserasyon veya segmenter vasküler hasar. Grade V: Shattered kidney (parçalanmış böbrek) veya renal pediküler hasar. AKTİF KANAMA: Kontrast ekstravazasyonu (arteriyel fazda hiperdens odak). ÜRINOM: Gecikmiş fazda kontrast sızıntısı (toplayıcı sistem hasarı)."
            },
            "mri": {
                "t1": "Hematom: Akut T1 izo-hipointens, subakut T1 hiperintens (methemoglobin).",
                "t2": "Laserasyon hattı: T2 hiperintens. Hematom: Akut hipointens, subakut hiperintens.",
                "dwi": "İskemik parankimde kısıtlanma."
            },
            "usg": {
                "description": "İlk değerlendirme için FAST (Focused Assessment with Sonography for Trauma): Serbest sıvı tespiti. Perinefritik sıvı/hematom (eko düzeyi değişken). Parankimal heterojenite. Doppler: Vasküler hasarda perfüzyon kaybı."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Perinephric/subcapsular hematoma (hyperdense, 40-70 HU). Parenchymal heterogeneity. Retroperitoneal free fluid.",
                "contrast": "AAST GRADING: Grade I: Subcapsular hematoma, contusion. Grade II: <1 cm laceration, limited perinephric hematoma. Grade III: >1 cm laceration (not reaching collecting system). Grade IV: Laceration extending to collecting system or segmental vascular injury. Grade V: Shattered kidney or renal pedicle injury. ACTIVE BLEEDING: Contrast extravasation (hyperdense focus in arterial phase). URINOMA: Contrast leak in delayed phase (collecting system injury)."
            },
            "mri": {
                "t1": "Hematoma: Acute T1 iso-hypointense, subacute T1 hyperintense (methemoglobin).",
                "t2": "Laceration line: T2 hyperintense. Hematoma: Acute hypointense, subacute hyperintense.",
                "dwi": "Restriction in ischemic parenchyma."
            },
            "usg": {
                "description": "Initial assessment with FAST (Focused Assessment with Sonography for Trauma): Free fluid detection. Perinephric fluid/hematoma (variable echo level). Parenchymal heterogeneity. Doppler: Loss of perfusion in vascular injury."
            }
        },
        "keyPoints": [
            "Kontrastlı BT (arteriyel + portovenöz + gecikmiş faz): Renal travma değerlendirmesinde altın standart.",
            "AAST Grade I-III: Konservatif tedavi (>%90). Grade IV-V: Girişimsel/cerrahi.",
            "Gecikmiş faz (5-10 dk): Kontrast sızıntısı = toplayıcı sistem hasarı (ürinom).",
            "Aktif kanama: Arteriyel fazda kontrast ekstravazasyonu → anjiyoembolizasyon."
        ],
        "keyPointsEn": [
            "Contrast-enhanced CT (arterial + portovenous + delayed phase): Gold standard for renal trauma evaluation.",
            "AAST Grade I-III: Conservative management (>90%). Grade IV-V: Interventional/surgical.",
            "Delayed phase (5-10 min): Contrast leak = collecting system injury (urinoma).",
            "Active bleeding: Contrast extravasation in arterial phase → angioembolization."
        ],
        "differentialDiagnosis": ["Pre-existing patoloji (Tümör, kist — travmayla komplike)", "Spontan perinefritik hematom (Wunderlich sendromu — AML rüptürü)"],
        "differentialDiagnosisEn": ["Pre-existing pathology (Tumor, cyst — complicated by trauma)", "Spontaneous perinephric hematoma (Wunderlich syndrome — AML rupture)"],
        "goldStandard": "Multifazik kontrastlı BT (arteriyel + portovenöz + gecikmiş faz): AAST evreleme ve komplikasyon tespiti. BT anjiyografi: Vasküler hasar değerlendirmesi.",
        "goldStandardEn": "Multiphasic contrast-enhanced CT (arterial + portovenous + delayed phase): AAST staging and complication detection. CT angiography: Vascular injury assessment.",
        "clinicalPearl": "Travma BT'de GECİKMİŞ FAZ çekmeyi unutma — toplayıcı sistem hasarı (ürinom) sadece gecikmiş fazda görülür. Hemodinamik stabil Grade IV-V: Selektif anjiyoembolizasyon.",
        "clinicalPearlEn": "Do not forget to obtain DELAYED PHASE on trauma CT — collecting system injury (urinoma) is only visible on delayed phase. Hemodynamically stable Grade IV-V: Selective angioembolization.",
        "references": [
            "Buckley JC, McAninch JW. Revision of current American Association for the Surgery of Trauma Renal Injury grading system. J Trauma. 2011;70(1):35-37.",
            "ACR Appropriateness Criteria: Renal Trauma. American College of Radiology.",
            "Radiopaedia.org - Renal trauma"
        ]
    },
    {
        "id": "renal_artery_stenosis",
        "name": "Renal Arter Stenozu",
        "nameEn": "Renal Artery Stenosis",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "mechanism": "İki ana etiyoloji: 1) Ateroskleroz (%90): Proksimal renal arterde (ostium/proksimal 1/3) plak birikimi → lümen daralması → renal hipoperfüzyon → RAAS aktivasyonu → renovasküler hipertansiyon. 2) Fibromusküler displazi (FMD) (%10): Medial fibroplazi → arter duvarında segmenter daralma ve dilatasyon → 'tespih dizisi' (string of beads) görünümü. Renal arter %60-70'den fazla daraldığında hemodinamik olarak anlamlı → tardus-parvus paterni Doppler'da izlenir.",
        "mechanismEn": "Two main etiologies: 1) Atherosclerosis (90%): Plaque accumulation in proximal renal artery (ostium/proximal 1/3) → luminal narrowing → renal hypoperfusion → RAAS activation → renovascular hypertension. 2) Fibromuscular dysplasia (FMD) (10%): Medial fibroplasia → segmental narrowing and dilation of arterial wall → 'string of beads' appearance. When renal artery is narrowed >60-70%, it becomes hemodynamically significant → tardus-parvus pattern seen on Doppler.",
        "etiology": "Ateroskleroz (%90): Yaşlı, erkek, sigara, DM, hiperlipidemi. Fibromusküler displazi (%10): Genç kadın, bilateral olabilir. Nadir: Nörofibromatozis, Takayasu arteriti, radyasyon.",
        "etiologyEn": "Atherosclerosis (90%): Elderly, male, smoking, DM, hyperlipidemia. Fibromuscular dysplasia (10%): Young woman, may be bilateral. Rare: Neurofibromatosis, Takayasu arteritis, radiation.",
        "findings": {
            "ct": {
                "non_contrast": "Böbrek boyut asimetrisi (etkilenen taraf küçük). Aortik ateroskleroz/kalsifikasyon.",
                "contrast": "BT ANJİYOGRAFİ: Proksimal renal arterde fokal daralma (ateroskleroz: ostial/proksimal). FMD: Distal 2/3'te 'tespih dizisi' (string of beads) — segmenter stenoz ve anevrizma alternansı. Post-stenotik dilatasyon. Etkilenen böbrekte geç nefrogramı (gecikmiş kontrast tutulumu)."
            },
            "mri": {
                "t1": "Böbrek boyut asimetrisi.",
                "t2": "MR Anjiyografi (MRA): Stenoz derecesi, post-stenotik dilatasyon. Gadolinyum-kontrastlı MRA: Yüksek doğruluk.",
                "dwi": "İleri iskemide kortikal kısıtlanma."
            },
            "usg": {
                "description": "Böbrek boyut farkı (>1.5 cm). Kortikal incelme (etkilenen taraf). DOPPLER: Renal arterde pik sistolik hız (PSV) >180-200 cm/s. Renal/aort PSV oranı (RAR) >3.5. TARDUS-PARVUS PATERNİ: İntrarenal arterlerde yükselme zamanı uzamış (acceleration time >0.07 sn), pik azalmış (acceleration index düşük). Rezistif indeks (RI) farkı >0.05 (bilateral karşılaştırma)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Renal size asymmetry (affected side smaller). Aortic atherosclerosis/calcification.",
                "contrast": "CT ANGIOGRAPHY: Focal narrowing in proximal renal artery (atherosclerosis: ostial/proximal). FMD: 'String of beads' in distal 2/3 — alternating segmental stenosis and aneurysm. Post-stenotic dilation. Delayed nephrogram in affected kidney."
            },
            "mri": {
                "t1": "Renal size asymmetry.",
                "t2": "MR Angiography (MRA): Stenosis degree, post-stenotic dilation. Gadolinium-enhanced MRA: High accuracy.",
                "dwi": "Cortical restriction in advanced ischemia."
            },
            "usg": {
                "description": "Renal size discrepancy (>1.5 cm). Cortical thinning (affected side). DOPPLER: Renal artery peak systolic velocity (PSV) >180-200 cm/s. Renal-to-aortic PSV ratio (RAR) >3.5. TARDUS-PARVUS PATTERN: Prolonged acceleration time (>0.07 sec) and decreased peak (low acceleration index) in intrarenal arteries. Resistive index (RI) difference >0.05 (bilateral comparison)."
            }
        },
        "keyPoints": [
            "Doppler USG: Tardus-parvus paterni + PSV >200 cm/s + RAR >3.5 = Hemodinamik anlamlı stenoz.",
            "Ateroskleroz: Proksimal/ostial. FMD: Distal, 'tespih dizisi' görünümü.",
            "BT/MR anjiyografi: Stenoz derecesi ve cerrahi planlama.",
            "Genç kadın + dirençli hipertansiyon = FMD düşün."
        ],
        "keyPointsEn": [
            "Doppler USG: Tardus-parvus pattern + PSV >200 cm/s + RAR >3.5 = Hemodynamically significant stenosis.",
            "Atherosclerosis: Proximal/ostial. FMD: Distal, 'string of beads' appearance.",
            "CT/MR angiography: Stenosis degree and surgical planning.",
            "Young woman + resistant hypertension = Consider FMD."
        ],
        "differentialDiagnosis": ["Renal arter anevrizması (Fokal dilatasyon)", "Renal arter diseksiyonu (İntimal flep, çift lümen)", "Takayasu arteriti (Büyük damar vasküliti, genç kadın)"],
        "differentialDiagnosisEn": ["Renal artery aneurysm (Focal dilation)", "Renal artery dissection (Intimal flap, double lumen)", "Takayasu arteritis (Large vessel vasculitis, young woman)"],
        "goldStandard": "Dijital Subtraksiyon Anjiyografi (DSA): Altın standart (invaziv). BT Anjiyografi: Non-invaziv alternatif, yüksek doğruluk. Doppler USG: İlk basamak tarama.",
        "goldStandardEn": "Digital Subtraction Angiography (DSA): Gold standard (invasive). CT Angiography: Non-invasive alternative, high accuracy. Doppler USG: First-line screening.",
        "clinicalPearl": "Dirençli hipertansiyon + böbrek boyut asimetrisi + Doppler'da tardus-parvus = Renal arter stenozu. Genç kadında FMD düşün (tespih dizisi, distal stenoz).",
        "clinicalPearlEn": "Resistant hypertension + renal size asymmetry + tardus-parvus on Doppler = Renal artery stenosis. Consider FMD in young woman (string of beads, distal stenosis).",
        "references": [
            "Defined RG et al. Renal artery stenosis. Radiol Clin North Am. 2015;53(2):217-231.",
            "ACR Appropriateness Criteria: Renovascular Hypertension. American College of Radiology.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Renal artery stenosis"
        ]
    },
    {
        "id": "renal_vein_thrombosis",
        "name": "Renal Ven Trombozu",
        "nameEn": "Renal Vein Thrombosis",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "mechanism": "Renal ven lümeninde trombüs oluşumu → venöz dönüş bozulması → böbrekte konjesyon, ödem ve boyut artışı → kortikomedüller diferansiasyon kaybı. Akut: Böbrek şişer, hemorajik infarkt riski. Kronik: Kollateral venöz drenaj gelişir, böbrek küçülür. Nefrotik sendrom: Protein kaybı → antitrombin III azalması → hiperkoagülabilite. RCC: Tümör trombusu renal vene ve İVC'ye uzanabilir.",
        "mechanismEn": "Thrombus formation in renal vein lumen → venous return impairment → renal congestion, edema, and size increase → loss of corticomedullary differentiation. Acute: Kidney swells, hemorrhagic infarction risk. Chronic: Collateral venous drainage develops, kidney shrinks. Nephrotic syndrome: Protein loss → antithrombin III decrease → hypercoagulability. RCC: Tumor thrombus can extend to renal vein and IVC.",
        "etiology": "Nefrotik sendrom (en sık yetişkin), membranöz nefropati, RCC (tümör trombusu), dehidratasyon (yenidoğan), travma, dıştan bası. Yenidoğan: Dehidratasyon + sepsis.",
        "etiologyEn": "Nephrotic syndrome (most common in adults), membranous nephropathy, RCC (tumor thrombus), dehydration (neonate), trauma, extrinsic compression. Neonate: Dehydration + sepsis.",
        "findings": {
            "ct": {
                "non_contrast": "Böbrek boyutunda artış. Renal ven hiperdens (akut trombüs). Perinefritik stranding.",
                "contrast": "Renal ven lümeninde dolum defekti (trombüs). Böbrekte gecikmiş/azalmış kontrastlanma. Kortikomedüller diferansiasyon kaybı. İVC uzanımı: İVC'de dolum defekti. Kronik: Renal ven kalsifikasyonu, kollateral venler, atrofik böbrek."
            },
            "mri": {
                "t1": "Akut trombüs: T1 izointens. Subakut: T1 hiperintens (methemoglobin). Böbrek boyutu artmış.",
                "t2": "Akut trombüs: T2 hipointens. Böbrek parankimi ödematöz (T2 hiperintens). Renal ven lümeninde sinyal kaybı (flow void yokluğu).",
                "dwi": "İskemik parankimde difüzyon kısıtlanması."
            },
            "usg": {
                "description": "Böbrek boyutu artmış (akut). Kortikomedüller diferansiasyon azalmış. Renal ven lümeninde ekojen materyal (trombüs). DOPPLER: Renal vende akım yokluğu veya azalması. Artmış renal arter RI (>0.7). İVC'de trombüs uzanımı kontrol edilmeli."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Increased kidney size. Hyperdense renal vein (acute thrombus). Perinephric stranding.",
                "contrast": "Filling defect in renal vein lumen (thrombus). Delayed/decreased renal enhancement. Loss of corticomedullary differentiation. IVC extension: Filling defect in IVC. Chronic: Renal vein calcification, collateral veins, atrophic kidney."
            },
            "mri": {
                "t1": "Acute thrombus: T1 isointense. Subacute: T1 hyperintense (methemoglobin). Kidney size increased.",
                "t2": "Acute thrombus: T2 hypointense. Renal parenchyma edematous (T2 hyperintense). Loss of signal in renal vein lumen (absence of flow void).",
                "dwi": "Diffusion restriction in ischemic parenchyma."
            },
            "usg": {
                "description": "Kidney size increased (acute). Decreased corticomedullary differentiation. Echogenic material in renal vein lumen (thrombus). DOPPLER: Absent or decreased flow in renal vein. Increased renal artery RI (>0.7). Check for IVC thrombus extension."
            }
        },
        "keyPoints": [
            "Büyümüş böbrek + renal vende dolum defekti + kortikomedüller diferansiasyon kaybı = RVT.",
            "Nefrotik sendromda (özellikle membranöz nefropati) RVT riski artmış.",
            "RCC'de renal ven ve İVC'ye tümör trombusu uzanımı kontrol edilmeli.",
            "Yenidoğanda dehidratasyon + hematüri + büyük böbrek = RVT."
        ],
        "keyPointsEn": [
            "Enlarged kidney + filling defect in renal vein + loss of corticomedullary differentiation = RVT.",
            "Increased RVT risk in nephrotic syndrome (especially membranous nephropathy).",
            "Check for tumor thrombus extension to renal vein and IVC in RCC.",
            "In newborn: Dehydration + hematuria + large kidney = RVT."
        ],
        "differentialDiagnosis": ["RCC tümör trombusu (Kontrastlanan trombüs, böbrek kitlesi)", "İVC trombozu (Alt ekstremite ödemi, bilateral)", "Renal arter stenozu (Küçük böbrek, Doppler farklı)"],
        "differentialDiagnosisEn": ["RCC tumor thrombus (Enhancing thrombus, renal mass)", "IVC thrombosis (Lower extremity edema, bilateral)", "Renal artery stenosis (Small kidney, different Doppler)"],
        "goldStandard": "Kontrastlı BT/MR Venografi: Trombüs tespiti ve uzanım değerlendirmesi. Doppler USG: İlk basamak, renal ven akımı değerlendirmesi.",
        "goldStandardEn": "Contrast-enhanced CT/MR Venography: Thrombus detection and extension assessment. Doppler USG: First-line, renal vein flow evaluation.",
        "clinicalPearl": "Nefrotik sendrom + ani yan ağrısı + hematüri + proteinüri artışı = RVT düşün. Doppler'da renal vende akım kaybı + böbrek şişmesi tanı koydurur.",
        "clinicalPearlEn": "Nephrotic syndrome + sudden flank pain + hematuria + increased proteinuria = Consider RVT. Loss of flow in renal vein on Doppler + kidney swelling establishes diagnosis.",
        "references": [
            "Asghar M, Ahmed K, Shah SS et al. Renal vein thrombosis. Eur J Vasc Endovasc Surg. 2007;34(2):217-223.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Renal vein thrombosis"
        ]
    },
    {
        "id": "multilocular_cystic_nephroma",
        "name": "Multilokular Kistik Nefroma",
        "nameEn": "Multilocular Cystic Nephroma",
        "category": "Benign/Malign",
        "categoryEn": "Benign/Malignant",
        "mechanism": "Nadir benign kistik renal neoplazm. Bimodal yaş dağılımı: Çocuk (erkek, <5 yaş) ve yetişkin (kadın, >40 yaş). İyi sınırlı, multiloküle kistik kitle, fibröz septumlarla ayrılmış kistik boşluklardan oluşur. Solid komponent içermez (saf kistik). Renal pelvise herniasyon (protrüzyon) karakteristik bulgudur. Bosniak III veya IV olarak sınıflandırılabilir → cerrahi gerektirir.",
        "mechanismEn": "Rare benign cystic renal neoplasm. Bimodal age distribution: Children (male, <5 years) and adults (female, >40 years). Well-defined, multiloculated cystic mass composed of cystic spaces separated by fibrous septa. Contains no solid component (purely cystic). Herniation (protrusion) into renal pelvis is a characteristic finding. May be classified as Bosniak III or IV → requires surgery.",
        "etiology": "Etiyolojisi tam bilinmemektedir. Metanefrik blastom veya Wolffian kanal artıklarından köken aldığı düşünülmektedir. Bimodal dağılım: Erkek çocuk (<5 yaş) ve yetişkin kadın (>40 yaş).",
        "etiologyEn": "Etiology is not fully understood. Thought to originate from metanephric blastoma or Wolffian duct remnants. Bimodal distribution: Male children (<5 years) and adult women (>40 years).",
        "findings": {
            "ct": {
                "non_contrast": "İyi sınırlı, multiloküle kistik kitle. Septumlar izo-hiperdens olabilir. Kalsifikasyon septum veya duvarda görülebilir.",
                "contrast": "Septumlar ve duvar kontrastlanır (Bosniak III/IV). Kistik boşluklar kontrastlanmaz. PELVİSE HERNİASYON: Kitle renal pelvise doğru protrüde olur — KARAKTERİSTİK. Solid kontrastlanan nodül yoktur (saf kistik)."
            },
            "mri": {
                "t1": "Kistik boşluklar hipointens. Septumlar izo-hipointens. Hemorajik kistler T1 hiperintens olabilir.",
                "t2": "Kistik boşluklar hiperintens. Septumlar hipointens. Multiloküle yapı net seçilir.",
                "dwi": "Kistik boşluklarda kısıtlanma yok. Septumlar minimal kısıtlanma gösterebilir."
            },
            "usg": {
                "description": "İyi sınırlı, multiloküle kistik kitle. İnce septumlar. İnternal debris minimal. Solid komponent yok. Renal pelvise herniasyon USG'de zor görülebilir."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Well-defined, multiloculated cystic mass. Septa may be iso-hyperdense. Calcification may be seen in septum or wall.",
                "contrast": "Septa and wall enhance (Bosniak III/IV). Cystic spaces do not enhance. HERNIATION INTO PELVIS: Mass protrudes into renal pelvis — CHARACTERISTIC. No solid enhancing nodule (purely cystic)."
            },
            "mri": {
                "t1": "Cystic spaces hypointense. Septa iso-hypointense. Hemorrhagic cysts may be T1 hyperintense.",
                "t2": "Cystic spaces hyperintense. Septa hypointense. Multiloculated structure well delineated.",
                "dwi": "No restriction in cystic spaces. Septa may show minimal restriction."
            },
            "usg": {
                "description": "Well-defined, multiloculated cystic mass. Thin septa. Minimal internal debris. No solid component. Herniation into renal pelvis may be difficult to see on USG."
            }
        },
        "keyPoints": [
            "Multiloküle kistik kitle + renal pelvise herniasyon = Kistik nefroma düşün.",
            "Bosniak III/IV: Cerrahi (parsiyel nefrektomi) gereklidir.",
            "Bimodal: Erkek çocuk (<5 yaş) ve yetişkin kadın (>40 yaş).",
            "Kistik RCC'den ayrımı zor olabilir — kesin tanı histopatoloji."
        ],
        "keyPointsEn": [
            "Multiloculated cystic mass + herniation into renal pelvis = Consider cystic nephroma.",
            "Bosniak III/IV: Surgery (partial nephrectomy) required.",
            "Bimodal: Male children (<5 years) and adult women (>40 years).",
            "May be difficult to distinguish from cystic RCC — definitive diagnosis by histopathology."
        ],
        "differentialDiagnosis": ["Kistik RCC (Solid kontrastlanan komponent, düzensiz duvar)", "Multilokuler kistik renal tümör (MCRT — düşük grade clear cell RCC)", "Mikst epitelyal-stromal tümör (Kadın, solid+kistik)", "Kistik nefroblastom (Çocuk, solid komponent eşlik eder)"],
        "differentialDiagnosisEn": ["Cystic RCC (Solid enhancing component, irregular wall)", "Multilocular cystic renal tumor (MCRT — low-grade clear cell RCC)", "Mixed epithelial-stromal tumor (Female, solid+cystic)", "Cystic nephroblastoma (Child, solid component present)"],
        "goldStandard": "Kontrastlı BT/MRI: Bosniak sınıflaması. Kesin tanı: Cerrahi eksizyon + histopatoloji.",
        "goldStandardEn": "Contrast-enhanced CT/MRI: Bosniak classification. Definitive diagnosis: Surgical excision + histopathology.",
        "clinicalPearl": "Multiloküle kistik kitle + pelvise herniasyon + solid komponent yokluğu = Kistik nefroma. Çocukta erkek, yetişkinde kadın dominant — bimodal dağılımı hatırla.",
        "clinicalPearlEn": "Multiloculated cystic mass + herniation into pelvis + absence of solid component = Cystic nephroma. Male dominant in children, female dominant in adults — remember the bimodal distribution.",
        "references": [
            "Castillo OA et al. Multilocular cystic nephroma: A systematic review. Urology. 2016;90:22-27.",
            "Silverman SG et al. Bosniak Classification of Cystic Renal Masses, Version 2019. Radiology. 2019;292(2):475-488.",
            "Radiopaedia.org - Multilocular cystic nephroma"
        ]
    },
    {
        "id": "medullary_sponge_kidney",
        "name": "Medüller Sünger Böbrek",
        "nameEn": "Medullary Sponge Kidney",
        "category": "Konjenital",
        "categoryEn": "Congenital",
        "mechanism": "Toplayıcı kanalların (Bellini kanalları) medüller piramitlerde kistik dilatasyonu → medüller nefrokalsinoz. Dilate kanallar idrar stazına yol açar → kalsiyum tuzu çökelmesi → nefrokalsinoz ve nefrolitiyazis. Sporadik, genellikle bilateral ve tüm piramitleri tutar. Etiyoloji tam bilinmemekle birlikte gelişimsel bir anomali olarak kabul edilir.",
        "mechanismEn": "Cystic dilation of collecting ducts (ducts of Bellini) in medullary pyramids → medullary nephrocalcinosis. Dilated ducts cause urinary stasis → calcium salt precipitation → nephrocalcinosis and nephrolithiasis. Sporadic, usually bilateral and involves all pyramids. Etiology not fully known but is considered a developmental anomaly.",
        "etiology": "Etiyolojisi kesin bilinmemektedir. Gelişimsel anomali (toplayıcı kanal ektazisi). Sporadik vakaların çoğunluğu. Nadiren otozomal dominant kalıtım bildirilmiştir. İlişkili durumlar: Ehlers-Danlos sendromu, Beckwith-Wiedemann sendromu.",
        "etiologyEn": "Etiology is not definitively known. Developmental anomaly (collecting duct ectasia). Majority are sporadic cases. Rarely autosomal dominant inheritance has been reported. Associated conditions: Ehlers-Danlos syndrome, Beckwith-Wiedemann syndrome.",
        "findings": {
            "ct": {
                "non_contrast": "MEDÜLLERNEFROKALSİNOZ: Renal piramitlerde bilateral, simetrik kalsifikasyonlar. 'Paintbrush appearance' (boya fırçası görünümü): Medüller piramitlerde lineer kalsifikasyonlar. Papillalarda küçük taşlar (1-3 mm).",
                "contrast": "Medüller kistik ektazi: Kontrast dolu dilate toplayıcı kanallar piramitlerde ('bouquet of flowers' görünümü). Kontrast maddenin piramitlerde birikmesi (gecikmiş fazda belirgin)."
            },
            "mri": {
                "t1": "Medüller piramitlerde hipointens kistik alanlar.",
                "t2": "Dilate toplayıcı kanallar: T2 hiperintens küçük kistik alanlar medüller piramitlerde.",
                "dwi": "Genellikle kısıtlanma göstermez."
            },
            "usg": {
                "description": "Medüller piramitlerde hiperekoik odaklar (nefrokalsinoz). 'Twinkle artifact': Kalsifikasyonlar üzerinde renkli Doppler artefaktı. Piramitlerde ekojenite artışı. Bilateral ve simetrik tutulum tipik."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "MEDULLARY NEPHROCALCINOSIS: Bilateral, symmetric calcifications in renal pyramids. 'Paintbrush appearance': Linear calcifications in medullary pyramids. Small stones (1-3 mm) in papillae.",
                "contrast": "Medullary cystic ectasia: Contrast-filled dilated collecting ducts in pyramids ('bouquet of flowers' appearance). Contrast pooling in pyramids (prominent in delayed phase)."
            },
            "mri": {
                "t1": "Hypointense cystic areas in medullary pyramids.",
                "t2": "Dilated collecting ducts: T2 hyperintense small cystic areas in medullary pyramids.",
                "dwi": "Usually no restriction."
            },
            "usg": {
                "description": "Hyperechoic foci in medullary pyramids (nephrocalcinosis). 'Twinkle artifact': Color Doppler artifact over calcifications. Increased echogenicity in pyramids. Bilateral and symmetric involvement typical."
            }
        },
        "keyPoints": [
            "Medüller piramitlerde bilateral nefrokalsinoz = Medüller sünger böbrek düşün.",
            "'Paintbrush appearance': Piramitlerde lineer kalsifikasyonlar (BT'de tanısal).",
            "Genellikle asemptomatik; tekrarlayan taş ve ÜSY ile prezente olabilir.",
            "Böbrek fonksiyonu genellikle korunur (kortikal hasar minimal)."
        ],
        "keyPointsEn": [
            "Bilateral nephrocalcinosis in medullary pyramids = Consider medullary sponge kidney.",
            "'Paintbrush appearance': Linear calcifications in pyramids (diagnostic on CT).",
            "Usually asymptomatic; may present with recurrent stones and UTIs.",
            "Renal function usually preserved (minimal cortical damage)."
        ],
        "differentialDiagnosis": ["Hiperparatiroidizm (Medüller nefrokalsinoz ama metabolik neden)", "Renal tübüler asidoz (Medüller nefrokalsinoz + metabolik asidoz)", "Papiller nekroz (Kaviter lezyonlar, farklı klinik)", "ADPKD (Kortikal kistler baskın, medüller değil)"],
        "differentialDiagnosisEn": ["Hyperparathyroidism (Medullary nephrocalcinosis but metabolic cause)", "Renal tubular acidosis (Medullary nephrocalcinosis + metabolic acidosis)", "Papillary necrosis (Cavitary lesions, different clinical presentation)", "ADPKD (Cortical cysts predominant, not medullary)"],
        "goldStandard": "Non-kontrast BT: Medüller nefrokalsinoz tespiti. İVP (İntravenöz Pyelografi): Klasik 'paintbrush/bouquet of flowers' görünümü — artık nadiren kullanılır, BT ve BT ürografi tercih edilir.",
        "goldStandardEn": "Non-contrast CT: Medullary nephrocalcinosis detection. IVP (Intravenous Pyelography): Classic 'paintbrush/bouquet of flowers' appearance — rarely used now, CT and CT urography preferred.",
        "clinicalPearl": "Tekrarlayan taş oluşumu + bilateral medüller nefrokalsinoz + normal böbrek fonksiyonu = Medüller sünger böbrek. Genellikle insidental saptanır.",
        "clinicalPearlEn": "Recurrent stone formation + bilateral medullary nephrocalcinosis + normal renal function = Medullary sponge kidney. Usually incidentally detected.",
        "references": [
            "Gambaro G et al. Medullary sponge kidney. Curr Opin Nephrol Hypertens. 2013;22(4):421-426.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Medullary sponge kidney"
        ]
    },
    {
        "id": "duplex_collecting_system",
        "name": "Duplex Toplayıcı Sistem (Duplisite)",
        "nameEn": "Duplex Collecting System (Duplication)",
        "category": "Konjenital",
        "categoryEn": "Congenital",
        "mechanism": "Embriyolojik gelişim sırasında üreterik tomurcuğun erken bifurkasyonu veya çift üreterik tomurcuk oluşumu → çift toplayıcı sistem. Komplet duplikasyon: İki ayrı üreter mesaneye ayrı ayrı açılır. Weigert-Meyer kuralı: Üst pol üreteri mesaneye aşağıda ve medialde açılır (ektopik, obstrüksiyon riski), alt pol üreteri normalde açılır (VUR riski). Üst pol üreterosel ve ektopik üreter → obstrüksiyon → 'drooping lily' bulgusu.",
        "mechanismEn": "Early bifurcation of the ureteric bud or formation of double ureteric buds during embryological development → duplex collecting system. Complete duplication: Two separate ureters open into the bladder independently. Weigert-Meyer rule: Upper pole ureter opens into the bladder inferiorly and medially (ectopic, obstruction risk), lower pole ureter opens normally (VUR risk). Upper pole ureterocele and ectopic ureter → obstruction → 'drooping lily' sign.",
        "etiology": "Konjenital: Üreterik tomurcuk anomalisi. En sık üriner sistem anomalisi (%0.8 genel popülasyon). Kadınlarda daha sık. Komplet vs inkomplet duplikasyon.",
        "etiologyEn": "Congenital: Ureteric bud anomaly. Most common urinary system anomaly (0.8% general population). More common in women. Complete vs incomplete duplication.",
        "findings": {
            "ct": {
                "non_contrast": "İki ayrı renal pelvis ve kalikslerin görülmesi. Üst pol: Obstrüksiyon varsa dilatasyon/hidronefroz.",
                "contrast": "BT ÜROGRAFİ: İki ayrı toplayıcı sistem ve üreter (komplet). 'DROOPING LILY' BELİRTİSİ: Alt pol kalikslerinin aşağı ve laterale deviye görünümü (üst pol dilatasyonu nedeniyle). ÜRETEROSEL: Mesane içinde üreter distal ucunun kistik dilatasyonu ('cobra head' görünümü). Ektopik üreter: Üst pol üreterinin mesane dışına açılması."
            },
            "mri": {
                "t2": "MR Ürografi: T2 ağırlıklı sekanslarda dilate toplayıcı sistem ve üreterler parlak (sıvı). Ektopik üreter insertsiyon yeri tespiti. Üst pol displazisi: T2'de küçük, atrofik üst pol.",
                "t1": "Dilate sistem sıvı dolu: T1 hipointens.",
                "dwi": "Enfeksiyon eşliğinde kısıtlanma."
            },
            "usg": {
                "description": "İki ayrı renal pelvis. Üst pol: Dilatasyon/hidronefroz (obstrüksiyon varsa). Alt pol: Normal veya VUR'a bağlı dilatasyon. Mesanede ÜRETEROSEL: Anekoik kistik yapı mesane tabanında. 'Drooping lily': Alt pol kalikslerinin normal pozisyonlarının altında görülmesi."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Visualization of two separate renal pelves and calyces. Upper pole: Dilation/hydronephrosis if obstruction present.",
                "contrast": "CT UROGRAPHY: Two separate collecting systems and ureters (complete). 'DROOPING LILY' SIGN: Lower pole calyces deviated inferiorly and laterally (due to upper pole dilation). URETEROCELE: Cystic dilation of distal ureter within bladder ('cobra head' appearance). Ectopic ureter: Upper pole ureter opening outside bladder."
            },
            "mri": {
                "t2": "MR Urography: Dilated collecting system and ureters bright on T2-weighted sequences (fluid). Detection of ectopic ureter insertion site. Upper pole dysplasia: Small, atrophic upper pole on T2.",
                "t1": "Dilated system filled with fluid: T1 hypointense.",
                "dwi": "Restriction if infection present."
            },
            "usg": {
                "description": "Two separate renal pelves. Upper pole: Dilation/hydronephrosis (if obstruction). Lower pole: Normal or dilation due to VUR. URETEROCELE in bladder: Anechoic cystic structure at bladder base. 'Drooping lily': Lower pole calyces seen below their normal position."
            }
        },
        "keyPoints": [
            "Weigert-Meyer kuralı: Üst pol = ektopik üreter (obstrüksiyon), Alt pol = ortotopik (VUR).",
            "'Drooping lily' belirtisi: Alt pol kalikslerinin inferolaterale deviyasyonu.",
            "Üreterosel: Mesanede 'cobra head' görünümü (üreter distalinin kistik dilatasyonu).",
            "MR ürografi: Çocuklarda radyasyonsuz değerlendirme için tercih edilir."
        ],
        "keyPointsEn": [
            "Weigert-Meyer rule: Upper pole = ectopic ureter (obstruction), Lower pole = orthotopic (VUR).",
            "'Drooping lily' sign: Inferolateral deviation of lower pole calyces.",
            "Ureterocele: 'Cobra head' appearance in bladder (cystic dilation of distal ureter).",
            "MR urography: Preferred for radiation-free evaluation in children."
        ],
        "differentialDiagnosis": ["Üst pol kist (Ayrı pelvis yok, tek üreter)", "Cross-fused ektopi (Böbrekler aynı tarafta)", "Hidronefroz (Tek sistem, global dilatasyon)"],
        "differentialDiagnosisEn": ["Upper pole cyst (No separate pelvis, single ureter)", "Cross-fused ectopia (Kidneys on the same side)", "Hydronephrosis (Single system, global dilation)"],
        "goldStandard": "BT Ürografi: Komplet anatomik değerlendirme. MR Ürografi: Çocuklarda tercih (radyasyonsuz). Voiding sistoüretrografi (VCUG): VUR değerlendirmesi.",
        "goldStandardEn": "CT Urography: Complete anatomic evaluation. MR Urography: Preferred in children (radiation-free). Voiding cystourethrography (VCUG): VUR evaluation.",
        "clinicalPearl": "Tekrarlayan ÜSY + üst pol hidronefrozu = Duplex sistem + ektopik üreterosel düşün. Weigert-Meyer kuralını hatırla: Üst = obstrüksiyon, Alt = reflü.",
        "clinicalPearlEn": "Recurrent UTIs + upper pole hydronephrosis = Consider duplex system + ectopic ureterocele. Remember the Weigert-Meyer rule: Upper = obstruction, Lower = reflux.",
        "references": [
            "Fernbach SK et al. Ureteral duplication and its complications. Radiographics. 1997;17(1):109-127.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Duplex collecting system"
        ]
    },
    {
        "id": "horseshoe_kidney",
        "name": "At Nalı Böbrek",
        "nameEn": "Horseshoe Kidney",
        "category": "Konjenital",
        "categoryEn": "Congenital",
        "mechanism": "Embriyolojik gelişim sırasında (4-6. hafta) metanefrik blastomların alt pollerinin orta hatta füzyonu → istmus oluşumu (genellikle alt polleri birleştirir). İnferior mezenterik arter (İMA) istmusun önünden geçer → böbreklerin normal kranial migrasyonunu engeller → böbrekler normal pozisyonlarından aşağıda kalır (ektopik). Malrotasyon: Renal pelvisler anteriora veya laterale bakar (normal medial yerine). Üreteropelvik bileşke obstrüksiyonu riski artar.",
        "mechanismEn": "Fusion of lower poles of metanephric blastemas at midline during embryological development (weeks 4-6) → isthmus formation (usually connects lower poles). Inferior mesenteric artery (IMA) passes anterior to the isthmus → prevents normal cranial migration of kidneys → kidneys remain lower than normal position (ectopic). Malrotation: Renal pelves face anteriorly or laterally (instead of normal medial). Ureteropelvic junction obstruction risk increases.",
        "etiology": "Konjenital füzyon anomalisi. İnsidans: ~1/400-600. Erkeklerde 2 kat daha sık. İlişkili anomaliler: Turner sendromu, trizomi 18, trizomi 21. UPJ obstrüksiyonu, VUR, nefrolitiyazis riski artmış.",
        "etiologyEn": "Congenital fusion anomaly. Incidence: ~1/400-600. 2 times more common in males. Associated anomalies: Turner syndrome, trisomy 18, trisomy 21. Increased risk of UPJ obstruction, VUR, nephrolithiasis.",
        "findings": {
            "ct": {
                "non_contrast": "İSTMUS: İki böbreğin alt pollerini birleştiren parankimal veya fibröz bant (aorta ve İVC önünde). Düşük pozisyon: Böbrekler L3-L5 seviyesinde (normal L1-L3). Malrotasyon: Renal pelvisler anteriora/laterale dönük.",
                "contrast": "İstmus kontrastlanması (parankimal ise). Toplayıcı sistem anatomisi: Malrotasyon nedeniyle atipik kaliks düzeni. UPJ obstrüksiyonu: Varsa dilatasyon."
            },
            "mri": {
                "t1": "İstmus: Renal parankim sinyalinde (parankimal tip) veya hipointens (fibröz tip).",
                "t2": "MR ürografi: Toplayıcı sistem anatomisi, üreter seyri, obstrüksiyon değerlendirmesi. İstmus yapısı ve vasküler anatomik varyasyonlar.",
                "dwi": "Spesifik bulgu yok (komplikasyon yoksa)."
            },
            "usg": {
                "description": "Aortanın önünde istmus (pre-aortik parankim bandı). Böbrekler normalden aşağıda. Alt pol füzyonu. Malrotasyon: Hilumlar anteriora veya laterale bakar. USG'de istmus her zaman net görülmeyebilir (barsak gazı)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "ISTHMUS: Parenchymal or fibrous band connecting lower poles of both kidneys (anterior to aorta and IVC). Low position: Kidneys at L3-L5 level (normal L1-L3). Malrotation: Renal pelves facing anteriorly/laterally.",
                "contrast": "Isthmus enhancement (if parenchymal). Collecting system anatomy: Atypical calyceal arrangement due to malrotation. UPJ obstruction: Dilation if present."
            },
            "mri": {
                "t1": "Isthmus: Renal parenchymal signal (parenchymal type) or hypointense (fibrous type).",
                "t2": "MR urography: Collecting system anatomy, ureteral course, obstruction assessment. Isthmus structure and vascular anatomic variations.",
                "dwi": "No specific findings (if no complication)."
            },
            "usg": {
                "description": "Isthmus anterior to aorta (pre-aortic parenchymal band). Kidneys lower than normal. Lower pole fusion. Malrotation: Hila facing anteriorly or laterally. Isthmus may not always be clearly seen on USG (bowel gas)."
            }
        },
        "keyPoints": [
            "Alt pol füzyonu + istmus (aorta önü) + düşük pozisyon + malrotasyon = At nalı böbrek.",
            "İMA istmusun kranialinde → migrasyonu engeller → ektopik (düşük) pozisyon.",
            "Turner sendromu ile ilişkili (%10-20 Turner hastasında).",
            "UPJ obstrüksiyonu, nefrolitiyazis ve Wilms tümörü riski artmış."
        ],
        "keyPointsEn": [
            "Lower pole fusion + isthmus (pre-aortic) + low position + malrotation = Horseshoe kidney.",
            "IMA cranial to isthmus → prevents migration → ectopic (low) position.",
            "Associated with Turner syndrome (10-20% of Turner patients).",
            "Increased risk of UPJ obstruction, nephrolithiasis, and Wilms tumor."
        ],
        "differentialDiagnosis": ["Cross-fused renal ektopi (Asimetrik füzyon, tek tarafta)", "Pelvik ektopik böbrek (Füzyon yok)", "Renal agenezi (Tek böbrek, kontralateral kompansatris hipertrofi)"],
        "differentialDiagnosisEn": ["Cross-fused renal ectopia (Asymmetric fusion, on one side)", "Pelvic ectopic kidney (No fusion)", "Renal agenesis (Single kidney, contralateral compensatory hypertrophy)"],
        "goldStandard": "BT/BT Ürografi: İstmus, vasküler anatomi, toplayıcı sistem değerlendirmesi. MR Ürografi: Çocuklarda tercih.",
        "goldStandardEn": "CT/CT Urography: Isthmus, vascular anatomy, collecting system evaluation. MR Urography: Preferred in children.",
        "clinicalPearl": "BT'de aorta önünde pre-aortik parankim bandı = At nalı böbrek istmusu. Cerrahi öncesi vasküler anatomi değerlendirmesi kritik (multiple renal arterler sık).",
        "clinicalPearlEn": "Pre-aortic parenchymal band anterior to aorta on CT = Horseshoe kidney isthmus. Pre-surgical vascular anatomy evaluation is critical (multiple renal arteries common).",
        "references": [
            "Glodny B et al. Kidney fusion anomalies revisited: Clinical and imaging features. AJR Am J Roentgenol. 2012;199(5):W589-W597.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Horseshoe kidney"
        ]
    },
    {
        "id": "ureteral_stone",
        "name": "Üreter Taşı",
        "nameEn": "Ureteral Stone",
        "category": "Obstrüksiyon",
        "categoryEn": "Obstruction",
        "mechanism": "Böbrekte oluşan taşın üretere migrasyonu → üreteral lümen obstrüksiyonu → proksimalde hidroüreter ve hidronefroz. Üç anatomik darlık noktasında takılma olasılığı yüksek: 1) Üreteropelvik bileşke (UPJ), 2) İliak damarların çaprazladığı yer, 3) Üreterovezikal bileşke (UVJ — en sık). Üreteral spazm + mukozal ödem → akut renal kolik (ciddi aralıklı ağrı).",
        "mechanismEn": "Migration of stone formed in kidney to ureter → ureteral lumen obstruction → proximal hydroureter and hydronephrosis. High probability of impaction at three anatomic narrowing points: 1) Ureteropelvic junction (UPJ), 2) Iliac vessel crossing, 3) Ureterovesical junction (UVJ — most common). Ureteral spasm + mucosal edema → acute renal colic (severe intermittent pain).",
        "etiology": "Kalsiyum oksalat taşları en sık (%80). Ürik asit, struvit, sistin. Risk faktörleri: Dehidratasyon, hiperkalsiüri, hiperoksalüri, hiperürisemi, düşük idrar hacmi. Tekrarlayan taş oluşumunda metabolik değerlendirme gerekli.",
        "etiologyEn": "Calcium oxalate stones most common (80%). Uric acid, struvite, cystine. Risk factors: Dehydration, hypercalciuria, hyperoxaluria, hyperuricemia, low urine volume. Metabolic evaluation required for recurrent stone formation.",
        "findings": {
            "ct": {
                "non_contrast": "NON-KONTRAST BT ALTIN STANDART (Sensitivite %95-100). Üreter lümeninde hiperdens taş. TİSSUE RİM SIGN: Taş çevresinde yumuşak doku halkası (mukozal ödem). Proksimalde hidroüreter ve hidronefroz. Perinefritik/periüreteral stranding. Sekonder bulgular: Böbrek boyutu artışı, perinefritik sıvı.",
                "contrast": "Genellikle gerekli değil. Obstrüktif nefropati değerlendirmesinde gecikmiş nefrogram görülebilir."
            },
            "mri": {
                "t2": "MR Ürografi: Dilate üreter ve toplayıcı sistem (T2 hiperintens). Obstrüksiyon seviyesi tespiti. Taş: T2'de hipointens boşluk (sinyal void).",
                "t1": "Spesifik bulgu yok.",
                "dwi": "İskemik parankimde kısıtlanma (ileri obstrüksiyon)."
            },
            "usg": {
                "description": "Proksimal üreter taşı: Hiperekoik odak + akustik gölge (UPJ bölgesinde). Distal üreter taşı: Dolu mesane penceresi ile UVJ'de taş görülebilir. Orta üreter taşı: USG ile zor görülür (barsak gazı). İNDİREKT BULGULAR: Hidronefroz, üreteral jet yokluğu (Doppler'da etkilenen tarafta jet izlenmez)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "NON-CONTRAST CT GOLD STANDARD (Sensitivity 95-100%). Hyperdense stone in ureteral lumen. TISSUE RIM SIGN: Soft tissue rim around stone (mucosal edema). Proximal hydroureter and hydronephrosis. Perinephric/periureteral stranding. Secondary findings: Increased kidney size, perinephric fluid.",
                "contrast": "Usually not required. Delayed nephrogram may be seen in obstructive nephropathy evaluation."
            },
            "mri": {
                "t2": "MR Urography: Dilated ureter and collecting system (T2 hyperintense). Obstruction level detection. Stone: Hypointense void on T2 (signal void).",
                "t1": "No specific findings.",
                "dwi": "Restriction in ischemic parenchyma (advanced obstruction)."
            },
            "usg": {
                "description": "Proximal ureteral stone: Hyperechoic focus + acoustic shadow (at UPJ region). Distal ureteral stone: Stone may be visible at UVJ with full bladder window. Mid-ureteral stone: Difficult to see on USG (bowel gas). INDIRECT FINDINGS: Hydronephrosis, absent ureteral jet (no jet on Doppler on affected side)."
            }
        },
        "keyPoints": [
            "Non-kontrast BT: Üreter taşı tespitinde altın standart (%95-100 sensitivite).",
            "Tissue rim sign: Taş çevresinde mukozal ödem halkası — fleboliti taştan ayırır.",
            "Üç darlık noktası: UPJ, iliak damar çaprazı, UVJ (en sık takılma yeri).",
            "USG: İlk basamak (çocuk, gebe); üreteral jet yokluğu obstrüksiyonu düşündürür."
        ],
        "keyPointsEn": [
            "Non-contrast CT: Gold standard for ureteral stone detection (95-100% sensitivity).",
            "Tissue rim sign: Mucosal edema ring around stone — distinguishes stone from phlebolith.",
            "Three narrowing points: UPJ, iliac vessel crossing, UVJ (most common impaction site).",
            "USG: First-line (children, pregnant); absent ureteral jet suggests obstruction."
        ],
        "differentialDiagnosis": ["Flebolit (Pelviste, daha yuvarlak, 'comet tail' bulgusu, rim sign yok)", "Vasküler kalsifikasyon (Tübüler, damar seyrine uyumlu)", "Appendikolit (Sağ alt kadran, klinik bağlam)"],
        "differentialDiagnosisEn": ["Phlebolith (Pelvic, more round, 'comet tail' sign, no rim sign)", "Vascular calcification (Tubular, follows vessel course)", "Appendicolith (Right lower quadrant, clinical context)"],
        "goldStandard": "Non-kontrast BT: Taş tespiti ve lokalizasyonu. USG: Çocuk ve gebelerde ilk basamak. BT ürografi: Anatomik varyasyon ve komplikasyon değerlendirmesi.",
        "goldStandardEn": "Non-contrast CT: Stone detection and localization. USG: First-line in children and pregnant patients. CT urography: Anatomic variant and complication evaluation.",
        "clinicalPearl": "Akut renal kolik + non-kontrast BT'de hiperdens taş + tissue rim sign + proksimal dilatasyon = Üreter taşı kesin tanı. Fleboliti dışlamak için rim sign'a dikkat et.",
        "clinicalPearlEn": "Acute renal colic + hyperdense stone on non-contrast CT + tissue rim sign + proximal dilation = Definitive diagnosis of ureteral stone. Pay attention to rim sign to exclude phlebolith.",
        "references": [
            "Smith RC et al. Acute flank pain: Comparison of non-contrast-enhanced CT and intravenous urography. Radiology. 1995;194(3):789-794.",
            "ACR Appropriateness Criteria: Acute Onset Flank Pain — Suspicion of Stone Disease. American College of Radiology.",
            "Radiopaedia.org - Ureteral calculus"
        ]
    },
    {
        "id": "nutcracker_syndrome",
        "name": "Nutcracker Sendromu (Fındıkkıran)",
        "nameEn": "Nutcracker Syndrome",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "ct": {
                "non_contrast": "Sol renal ven dilatasyonu.",
                "contrast": "Sol renal venin SMA ile aorta arasında kompresyonu. Proksimal sol renal ven dilatasyonu (>3:1 proksimal/distal çap oranı). Aortomezenterik açı <35°. Aortomezenterik mesafe <10mm. Sol gonadal ven dilatasyonu."
            },
            "mri": {
                "t1": "Sol renal ven kompresyonu ve proksimal dilatasyonu.",
                "t2": "MR Venografi: Sol renal ven seyri, kompresyon derecesi, kollateral venöz yapılar."
            },
            "usg": {
                "description": "Sol renal ven proksimalinde dilatasyon. Aortomezenterik segmentte çap daralması. DOPPLER: Dar segmentte pik velosite artışı (>100 cm/s). Proksimal/distal çap oranı >3:1."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Left renal vein dilation.",
                "contrast": "Left renal vein compression between SMA and aorta. Proximal left renal vein dilation (>3:1 ratio). Aortomesenteric angle <35°. Aortomesenteric distance <10mm. Left gonadal vein dilation."
            },
            "mri": {
                "t1": "Left renal vein compression and proximal dilation.",
                "t2": "MR Venography: Left renal vein course, compression degree, collateral venous structures."
            },
            "usg": {
                "description": "Dilation in proximal left renal vein. Diameter narrowing at aortomesenteric segment. DOPPLER: Peak velocity increase (>100 cm/s). Proximal/distal diameter ratio >3:1."
            }
        },
        "keyPoints": [
            "Sol renal ven SMA-aorta arasında sıkışması → hematüri + sol varikosel.",
            "Aortomezenterik açı <35° ve mesafe <10mm tanısal.",
            "Proksimal/distal renal ven çap oranı >3:1 anlamlı kompresyon.",
            "Genç, zayıf hastalarda daha sık."
        ],
        "keyPointsEn": [
            "Left renal vein compressed between SMA-aorta → hematuria + left varicocele.",
            "Aortomesenteric angle <35° and distance <10mm diagnostic.",
            "Proximal/distal renal vein diameter ratio >3:1 significant compression.",
            "More common in young, thin patients."
        ],
        "etiology": "Sol renal venin SMA ve aorta arasında kompresyonu. Zayıf hastalarda retroperitoneal yağ azlığı predispozan.",
        "etiologyEn": "Compression of left renal vein between SMA and aorta. Lack of retroperitoneal fat in thin patients is predisposing.",
        "mechanism": "Sol renal ven kompresyonu → venöz hipertansiyon → hematüri + sol gonadal ven reflüsü → varikosel.",
        "mechanismEn": "Left renal vein compression → venous hypertension → hematuria + left gonadal vein reflux → varicocele.",
        "differentialDiagnosis": ["IgA nefropatisi (hematüri, biyopsi ile ayırım)", "Sol renal ven trombozu (akut, dolum defekti)", "SMA sendromu (duodenum kompresyonu)"],
        "differentialDiagnosisEn": ["IgA nephropathy (hematuria, differentiation by biopsy)", "Left renal vein thrombosis (acute, filling defect)", "SMA syndrome (duodenal compression)"],
        "goldStandard": "BT/MR Anjiyografi: Aortomezenterik açı ve mesafe ölçümü. Doppler USG ilk basamak.",
        "goldStandardEn": "CT/MR Angiography: Aortomesenteric angle and distance measurement. Doppler USG first-line.",
        "clinicalPearl": "Genç zayıf hasta + açıklanamayan hematüri + sol varikosel = Nutcracker sendromu. BT'de aortomezenterik açı <35° doğrular.",
        "clinicalPearlEn": "Young thin patient + unexplained hematuria + left varicocele = Nutcracker syndrome. Aortomesenteric angle <35° on CT confirms.",
        "references": [
            "Kurklinsky AK, Rooke TW. Mayo Clin Proc. 2010;85(6):552-559.",
            "Radiopaedia.org - Nutcracker syndrome"
        ]
    },
    {
        "id": "renal_lymphoma",
        "name": "Renal Lenfoma",
        "nameEn": "Renal Lymphoma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "ct": {
                "non_contrast": "Multipl bilateral hipodens kitleler. Diffüz infiltrasyon: Nefromegali.",
                "contrast": "MİNİMAL kontrastlanma (HİPOVASKÜLER). Multipl bilateral hipodens nodüller. Perinefritik yumuşak doku. Retroperitoneal lenfadenopati."
            },
            "mri": {
                "t1": "Hipointens kitleler.",
                "t2": "İzointens veya hafif hipointens.",
                "dwi": "BELİRGİN DWI kısıtlanması (yüksek sellülarite). ADC çok düşük.",
                "t1_c": "Minimal kontrastlanma."
            },
            "usg": {
                "description": "Multipl hipoeoik kitleler bilateral. Diffüz infiltrasyonda büyümüş böbrek. Retroperitoneal lenfadenopati."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Multiple bilateral hypodense masses. Diffuse infiltration: Nephromegaly.",
                "contrast": "MINIMAL enhancement (HYPOVASCULAR). Multiple bilateral hypodense nodules. Perinephric soft tissue. Retroperitoneal lymphadenopathy."
            },
            "mri": {
                "t1": "Hypointense masses.",
                "t2": "Isointense or mildly hypointense.",
                "dwi": "MARKED DWI restriction (high cellularity). Very low ADC.",
                "t1_c": "Minimal enhancement."
            },
            "usg": {
                "description": "Multiple hypoechoic bilateral masses. Enlarged kidney in diffuse infiltration. Retroperitoneal lymphadenopathy."
            }
        },
        "keyPoints": [
            "Multipl bilateral renal kitle + minimal kontrastlanma + LAP = Lenfoma.",
            "RCC'den farklı HİPOVASKÜLER.",
            "DWI kısıtlanması çok belirgin.",
            "Genellikle sistemik NHL'nin renal tutulumudur."
        ],
        "keyPointsEn": [
            "Multiple bilateral renal masses + minimal enhancement + LAP = Lymphoma.",
            "HYPOVASCULAR unlike RCC.",
            "Very marked DWI restriction.",
            "Usually renal involvement of systemic NHL."
        ],
        "etiology": "Genellikle sekonder (sistemik NHL renal tutulumu). Primer renal lenfoma çok nadir.",
        "etiologyEn": "Usually secondary (renal involvement of systemic NHL). Primary renal lymphoma is very rare.",
        "mechanism": "Lenfomatöz infiltrasyon → multipl nodüler/diffüz renal tutulum. Hipovasküler yapı.",
        "mechanismEn": "Lymphomatous infiltration → multiple nodular/diffuse renal involvement. Hypovascular structure.",
        "differentialDiagnosis": ["RCC (hipervasküler, belirgin kontrastlanma)", "Metastaz (heterojen kontrastlanma)", "Renal abse (klinik bulgular)"],
        "differentialDiagnosisEn": ["RCC (hypervascular, prominent enhancement)", "Metastasis (heterogeneous enhancement)", "Renal abscess (clinical findings)"],
        "goldStandard": "BT + Biyopsi. DWI-MRI tedavi yanıtı değerlendirmesinde kullanışlı.",
        "goldStandardEn": "CT + Biopsy. DWI-MRI useful for treatment response evaluation.",
        "clinicalPearl": "Bilateral hipovasküler renal kitleler + retroperitoneal LAP + belirgin DWI kısıtlanma = Lenfoma. RCC aksine kontrastlanma çok azdır.",
        "clinicalPearlEn": "Bilateral hypovascular renal masses + retroperitoneal LAP + marked DWI restriction = Lymphoma. Unlike RCC, enhancement is very minimal.",
        "references": [
            "Urban BA, Fishman EK. Radiographics. 2000;20(1):197-212.",
            "Radiopaedia.org - Renal lymphoma"
        ]
    },
    {
        "id": "upj_obstruction",
        "name": "Üreteropelvik Bileşke (UPJ) Obstrüksiyonu",
        "nameEn": "Ureteropelvic Junction (UPJ) Obstruction",
        "category": "Obstrüksiyon/Konjenital",
        "categoryEn": "Obstruction/Congenital",
        "findings": {
            "ct": {
                "non_contrast": "Belirgin pelviektazi. Kaliksler dilate. Üreter NORMAL kalibrasyonda.",
                "contrast": "Gecikmiş nefrogramı. BT ürografi: Dilate renal pelvis, normal kalibre üreter. Çaprazlayan damar görülebilir."
            },
            "mri": {
                "t2": "MR Ürografi: Belirgin pelviektazi + normal kalibre üreter. Çaprazlayan damar tespiti.",
                "t1": "Dilate pelvis T1 hipointens. Parankimal incelme (kronik)."
            },
            "usg": {
                "description": "Belirgin pelviektazi (SFU Grade 3-4). Kaliksler dilate, yuvarlaklaşmış. Proksimal üreter görülmez. Prenatal USG'de en sık hidronefrozun nedeni."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Marked pelvicaliectasis. Calyces dilated. Ureter NORMAL caliber.",
                "contrast": "Delayed nephrogram. CT urography: Dilated renal pelvis, normal caliber ureter. Crossing vessel may be seen."
            },
            "mri": {
                "t2": "MR Urography: Marked pelvicaliectasis + normal caliber ureter. Crossing vessel detection.",
                "t1": "Dilated pelvis T1 hypointense. Parenchymal thinning (chronic)."
            },
            "usg": {
                "description": "Marked pelvicaliectasis (SFU Grade 3-4). Calyces dilated, rounded. Proximal ureter not visualized. Most common cause of prenatal hydronephrosis."
            }
        },
        "keyPoints": [
            "Pelviektazi + normal kalibre üreter = UPJ obstrüksiyonu.",
            "Prenatal hidronefrozun EN SIK nedeni.",
            "Çaprazlayan damar cerrahi planlamada önemli.",
            "MAG3 sintigrafi: Obstrüksiyon konfirmasyonu + split fonksiyon."
        ],
        "keyPointsEn": [
            "Pelvicaliectasis + normal caliber ureter = UPJ obstruction.",
            "MOST COMMON cause of prenatal hydronephrosis.",
            "Crossing vessel important for surgical planning.",
            "MAG3 scintigraphy: Obstruction confirmation + split function."
        ],
        "etiology": "Konjenital (intrinsik aperistaltik segment veya ekstrinsik çaprazlayan damar) veya edinsel (taş, cerrahi sonrası).",
        "etiologyEn": "Congenital (intrinsic aperistaltic segment or extrinsic crossing vessel) or acquired (stone, post-surgical).",
        "mechanism": "UPJ'de intrinsik stenoz veya ekstrinsik bası → renal pelvis dilatasyonu → parankimal atrofi.",
        "mechanismEn": "Intrinsic stenosis or extrinsic compression at UPJ → renal pelvis dilation → parenchymal atrophy.",
        "differentialDiagnosis": ["Konjenital megakaliks (pelvis normal, parankim normal)", "VUR (üreter dilate)", "Posterior üretral valv (bilateral)"],
        "differentialDiagnosisEn": ["Congenital megacalyx (pelvis normal, parenchyma normal)", "VUR (ureter dilated)", "Posterior urethral valve (bilateral)"],
        "goldStandard": "USG + MAG3 diüretik renografi. BT/MR ürografi: Anatomi ve çaprazlayan damar.",
        "goldStandardEn": "USG + MAG3 diuretic renography. CT/MR urography: Anatomy and crossing vessel.",
        "clinicalPearl": "Yenidoğan USG'de pelviektazi + normal üreter = UPJ. MAG3'te T1/2 >20 dk = obstrüksiyon.",
        "clinicalPearlEn": "Pelvicaliectasis on neonatal USG + normal ureter = UPJ. T1/2 >20 min on MAG3 = obstruction.",
        "references": [
            "Fernbach SK, Maizels M, Conway JJ. Pediatr Radiol. 1993;23(6):478-480.",
            "Radiopaedia.org - UPJ obstruction"
        ]
    },
    {
        "id": "renal_cortical_necrosis",
        "name": "Renal Kortikal Nekroz",
        "nameEn": "Renal Cortical Necrosis",
        "category": "Vasküler/Acil",
        "categoryEn": "Vascular/Emergency",
        "findings": {
            "ct": {
                "non_contrast": "Erken: Normal. Geç: Kortikal kalsifikasyon ('tram-track' paterni).",
                "contrast": "Kortekste kontrastlanma YOKLUĞU. Medulla korunmuş. 'REVERSE RIM SIGN': Korteks kontrastlanmaz, medulla kontrastlanır."
            },
            "mri": {
                "t1": "Kortikal sinyal değişikliği. Kronik: Atrofi.",
                "t2": "Erken: Kortikal ödem. Geç: İncelme ve fibrozis.",
                "dwi": "Akut: Kortekste belirgin difüzyon kısıtlanması."
            },
            "usg": {
                "description": "Erken: Korteks hipoekoik. Geç: Kortikal kalsifikasyon. Doppler: Kortikal perfüzyon azalmış."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Early: Normal. Late: Cortical calcification ('tram-track' pattern).",
                "contrast": "ABSENCE of cortical enhancement. Medulla preserved. 'REVERSE RIM SIGN': Cortex doesn't enhance, medulla enhances."
            },
            "mri": {
                "t1": "Cortical signal changes. Chronic: Atrophy.",
                "t2": "Early: Cortical edema. Late: Thinning and fibrosis.",
                "dwi": "Acute: Marked cortical diffusion restriction."
            },
            "usg": {
                "description": "Early: Cortex hypoechoic. Late: Cortical calcification. Doppler: Cortical perfusion decreased."
            }
        },
        "keyPoints": [
            "'Tram-track' kortikal kalsifikasyon patognomonik (geç bulgu).",
            "Reverse rim sign: Korteks kontrastlanmaz + medulla kontrastlanır.",
            "DIC, abruptio plasenta, septik şok en sık nedenler.",
            "Bilateral tutulum → akut böbrek yetmezliği."
        ],
        "keyPointsEn": [
            "'Tram-track' cortical calcification pathognomonic (late finding).",
            "Reverse rim sign: Cortex doesn't enhance + medulla enhances.",
            "DIC, abruptio placentae, septic shock most common causes.",
            "Bilateral involvement → acute renal failure."
        ],
        "etiology": "DIC, abruptio plasenta, eklampsi, septik şok, hemorajik şok, HÜS.",
        "etiologyEn": "DIC, abruptio placentae, eclampsia, septic shock, hemorrhagic shock, HUS.",
        "mechanism": "Kortikal arterlerde vazospazm + mikrotrombüs → kortikal iskemi → nekroz. Medüller kan akımı korunur.",
        "mechanismEn": "Vasospasm + microthrombi in cortical arteries → cortical ischemia → necrosis. Medullary blood flow is preserved.",
        "differentialDiagnosis": ["ATN (korteks kontrastlanır, geçici)", "Renal ven trombozu (unilateral olabilir)", "Renal infarkt (segmental)"],
        "differentialDiagnosisEn": ["ATN (cortex enhances, transient)", "Renal vein thrombosis (may be unilateral)", "Renal infarction (segmental)"],
        "goldStandard": "Kontrastlı BT: Reverse rim sign. Non-kontrast BT (geç): Tram-track kalsifikasyon.",
        "goldStandardEn": "Contrast-enhanced CT: Reverse rim sign. Non-contrast CT (late): Tram-track calcification.",
        "clinicalPearl": "Obstetrik acil sonrası bilateral böbrek yetmezliği + korteks kontrastlanmıyor = Kortikal nekroz.",
        "clinicalPearlEn": "Bilateral renal failure after obstetric emergency + cortex does not enhance = Cortical necrosis.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Renal cortical necrosis"
        ]
    },
    {
        "id": "page_kidney",
        "name": "Page Böbrek",
        "nameEn": "Page Kidney",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "ct": {
                "non_contrast": "Subkapsüler hematom (hiperdens). Böbrek parankimine dıştan bası → bikonveks lens şekli.",
                "contrast": "Komprese böbrekte gecikmiş kontrastlanma. Hematom kontrastlanmaz."
            },
            "mri": {
                "t1": "Subakut hematom: HİPERİNTENS (methemoglobin).",
                "t2": "Akut hematom: Hipointens. Subakut: Hiperintens."
            },
            "usg": {
                "description": "Subkapsüler koleksiyon. Böbreğe dıştan bası. Bikonveks şekil. Doppler: RI artışı."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Subcapsular hematoma (hyperdense). External compression → biconvex lens shape.",
                "contrast": "Delayed enhancement in compressed kidney. Hematoma doesn't enhance."
            },
            "mri": {
                "t1": "Subacute hematoma: HYPERINTENSE (methemoglobin).",
                "t2": "Acute hematoma: Hypointense. Subacute: Hyperintense."
            },
            "usg": {
                "description": "Subcapsular collection. External compression on kidney. Biconvex shape. Doppler: Increased RI."
            }
        },
        "keyPoints": [
            "Subkapsüler hematom → parankimal kompresyon → RAAS aktivasyonu → hipertansiyon.",
            "Bikonveks subkapsüler koleksiyon + hipertansiyon = Page böbrek.",
            "Travma en sık neden.",
            "Drenaj/nefrektomi → hipertansiyon düzelir."
        ],
        "keyPointsEn": [
            "Subcapsular hematoma → parenchymal compression → RAAS activation → hypertension.",
            "Biconvex subcapsular collection + hypertension = Page kidney.",
            "Trauma most common cause.",
            "Drainage/nephrectomy → hypertension resolves."
        ],
        "etiology": "Travma, AML rüptürü, renal biyopsi komplikasyonu, antikoagülan kullanımı.",
        "etiologyEn": "Trauma, AML rupture, renal biopsy complication, anticoagulant use.",
        "mechanism": "Subkapsüler hematom → renal hipoperfüzyon → RAAS aktivasyonu → renovasküler hipertansiyon.",
        "mechanismEn": "Subcapsular hematoma → renal hypoperfusion → RAAS activation → renovascular hypertension.",
        "differentialDiagnosis": ["Perinefritik hematom (kapsül dışı, bası yapmaz)", "Renal abse (ateş, lökositoz)", "Ürinoma (idrar kaçağı)"],
        "differentialDiagnosisEn": ["Perinephric hematoma (extracapsular, no compression)", "Renal abscess (fever, leukocytosis)", "Urinoma (urine leak)"],
        "goldStandard": "Kontrastlı BT + klinik korelasyon (yeni hipertansiyon).",
        "goldStandardEn": "Contrast-enhanced CT + clinical correlation (new-onset hypertension).",
        "clinicalPearl": "Travma sonrası yeni başlayan hipertansiyon + subkapsüler hematom = Page böbrek.",
        "clinicalPearlEn": "New-onset hypertension after trauma + subcapsular hematoma = Page kidney.",
        "references": [
            "Dopson SJ, et al. Kidney Int Rep. 2017;2(3):501-503.",
            "Radiopaedia.org - Page kidney"
        ]
    },
    {
        "id": "renal_papillary_necrosis",
        "name": "Renal Papiller Nekroz",
        "nameEn": "Renal Papillary Necrosis",
        "category": "İskemik",
        "categoryEn": "Ischemic",
        "findings": {
            "ct": {
                "non_contrast": "Papiller bölgede irregüler hipodensiteler. Kalsifiye papilla.",
                "contrast": "BT ÜROGRAFİ: Papiller kavitasyonlar. 'EGG IN A CUP': Nekrotik papilla kaliks içinde. Medüller kavitasyonlar. Bilateral tutulum olabilir."
            },
            "mri": {
                "t2": "Papiller kavitasyonlar (T2 hiperintens).",
                "t1": "Değişken sinyal.",
                "dwi": "Akut nekrozda kısıtlanma."
            },
            "usg": {
                "description": "Papiller hiperekoik odaklar. Kaliks deformitesi. Nekrotik papilla kaliks içinde. Medüller ekojenite artışı."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Irregular hypodensities in papillary region. Calcified papilla.",
                "contrast": "CT UROGRAPHY: Papillary cavitations. 'EGG IN A CUP': Necrotic papilla within calyx. Medullary cavitations. Bilateral involvement possible."
            },
            "mri": {
                "t2": "Papillary cavitations (T2 hyperintense).",
                "t1": "Variable signal.",
                "dwi": "Restriction in acute necrosis."
            },
            "usg": {
                "description": "Papillary hyperechoic foci. Calyceal deformity. Necrotic papilla within calyx. Increased medullary echogenicity."
            }
        },
        "keyPoints": [
            "POSTCARDS: Pyelonefrit, Obstrüksiyon, Sickle cell, Tbc, Cirrhosis, Analgesic, Renal transplant, DM, Sistemik vaskülit.",
            "'Egg in a cup' patognomonik.",
            "DM + NSAİD en sık kombine risk.",
            "Kopan papilla üreteral obstrüksiyon yapabilir."
        ],
        "keyPointsEn": [
            "POSTCARDS mnemonic for causes.",
            "'Egg in a cup' pathognomonic.",
            "DM + NSAID most common combined risk.",
            "Detached papilla may cause ureteral obstruction."
        ],
        "etiology": "POSTCARDS mnemonik: Pyelonefrit, Obstrüksiyon, Orak hücreli anemi, Tbc, Siroz, Analjezik, Renal transplant, DM, Vaskülit.",
        "etiologyEn": "POSTCARDS mnemonic: Pyelonephritis, Obstruction, Sickle cell disease, Tuberculosis, Cirrhosis, Analgesic, Renal transplant, Diabetes Mellitus, Systemic vasculitis.",
        "mechanism": "Papiller bölgenin düşük oksijen basıncı + vasküler hasar → iskemi → nekroz.",
        "mechanismEn": "Low oxygen tension in papillary region + vascular damage → ischemia → necrosis.",
        "differentialDiagnosis": ["Renal tüberküloz (kaliks deformitesi, kalsifikasyon)", "Medüller sünger böbrek (kistik ektazi)", "Kronik pyelonefrit (kortikal skar)"],
        "differentialDiagnosisEn": ["Renal tuberculosis (calyceal deformity, calcification)", "Medullary sponge kidney (cystic ectasia)", "Chronic pyelonephritis (cortical scarring)"],
        "goldStandard": "BT ürografi: Papiller kavitasyonlar + 'egg in a cup'.",
        "goldStandardEn": "CT urography: Papillary cavitations + 'egg in a cup'.",
        "clinicalPearl": "DM + NSAİD + hematüri + papiller kavitasyon = Papiller nekroz. POSTCARDS mnemonik ile risk hatırla.",
        "clinicalPearlEn": "DM + NSAID + hematuria + papillary cavitation = Papillary necrosis. Remember risks with the POSTCARDS mnemonic.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Renal papillary necrosis"
        ]
    },
    {
        "id": "acquired_cystic_kidney_disease",
        "name": "Edinsel Kistik Böbrek Hastalığı (ACKD)",
        "nameEn": "Acquired Cystic Kidney Disease (ACKD)",
        "category": "Kistik",
        "categoryEn": "Cystic",
        "findings": {
            "ct": {
                "non_contrast": "Küçük atrofik böbreklerde BİLATERAL MULTİPL KİSTLER. Kist duvarı kalsifikasyonu. Kist içi kanama (hiperdens kist).",
                "contrast": "Kistler kontrastlanmaz. Solid kontrastlanan komponent = RCC şüphesi. ACKD zemininde papiller RCC en sık."
            },
            "mri": {
                "t1": "Hemorajik kist T1 hiperintens. Solid komponent aranmalı.",
                "t2": "Multipl kistler T2 hiperintens.",
                "dwi": "Solid lezyonlarda kısıtlanma (RCC şüphesi)."
            },
            "usg": {
                "description": "Küçük atrofik böbreklerde multipl kistler. Kist içi debris. Hemodiyaliz süresiyle kist sayısı artar."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "BILATERAL MULTIPLE CYSTS in small atrophic kidneys. Cyst wall calcification. Intracystic hemorrhage (hyperdense cyst).",
                "contrast": "Cysts don't enhance. Solid enhancing component = RCC suspicion. Papillary RCC most common in ACKD."
            },
            "mri": {
                "t1": "Hemorrhagic cyst T1 hyperintense. Solid component should be sought.",
                "t2": "Multiple cysts T2 hyperintense.",
                "dwi": "Restriction in solid lesions (RCC suspicion)."
            },
            "usg": {
                "description": "Multiple cysts in small atrophic kidneys. Intracystic debris. Cyst number increases with dialysis duration."
            }
        },
        "keyPoints": [
            "SDBY + >3-5 kist/böbrek = ACKD (ADPKD'den farklı: küçük böbrek).",
            "Hemodiyaliz >3 yıl: %40-60 görülür.",
            "RCC riski 3-6 kat artmış.",
            "ADPKD: Büyük böbrek, ACKD: Küçük atrofik böbrek."
        ],
        "keyPointsEn": [
            "ESRD + >3-5 cysts/kidney = ACKD (differs from ADPKD: small kidney).",
            "Hemodialysis >3 years: 40-60% incidence.",
            "RCC risk 3-6 fold increased.",
            "ADPKD: Large kidneys, ACKD: Small atrophic kidneys."
        ],
        "etiology": "SDBY + uzun süreli hemodiyaliz. Tübüler obstrüksiyon + büyüme faktörleri → kistogenez.",
        "etiologyEn": "ESRD + long-term hemodialysis. Tubular obstruction + growth factors → cystogenesis.",
        "mechanism": "Tübüler obstrüksiyon → epitel proliferasyonu → kist → displazi → RCC gelişme riski.",
        "mechanismEn": "Tubular obstruction → epithelial proliferation → cyst → dysplasia → risk of RCC development.",
        "differentialDiagnosis": ["ADPKD (büyük böbrekler, aile öyküsü)", "VHL (kist + RCC + organ tutulumları)", "Multipl basit kistler (yaşlı, SDBY yok)"],
        "differentialDiagnosisEn": ["ADPKD (large kidneys, family history)", "VHL (cysts + RCC + organ involvement)", "Multiple simple cysts (elderly, no ESRD)"],
        "goldStandard": "BT/MRI: SDBY zemininde bilateral multipl kistler + solid komponent taraması. Yıllık USG önerilir.",
        "goldStandardEn": "CT/MRI: Bilateral multiple cysts in ESRD setting + solid component screening. Annual USG recommended.",
        "clinicalPearl": "Diyaliz hastasında küçük böbreklerde multipl kist + yeni solid komponent = ACKD + RCC. ADPKD'den farklı: böbrekler KÜÇÜKTÜR.",
        "clinicalPearlEn": "Multiple cysts in small kidneys in dialysis patient + new solid component = ACKD + RCC. Different from ADPKD: kidneys are SMALL.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Acquired cystic kidney disease"
        ]
    }
];
