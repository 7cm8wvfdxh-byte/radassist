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
        "clinicalPearl": "Clear cell RCC: T2 hiperintens + Chemical shift pozitif (yağ içeriği). >15-20HU kontrastlanma artışı = Solid kitle (malignite şüpheli)."
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
        "mechanism": "mTOR yolağı aktivasyonu (TSC1/TSC2 mutasyonu veya sporadik) → anormal mezodermal diferansiasyon → yağ dokusu, düz kas ve anormal damarların karışımından oluşan hamartom. Anormal damarlar esnek duvardan yoksundur (anevrizma riski) → Wunderlich sendromu (spontan retroperitoneal kanama). Fat-poor AML: Düz kas baskın, TSC bağlantısı sık."
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
        "mechanism": "Renal tübülün fokal dilatasyon ve obstrüksiyonu → sıvı birikimi → kistik yapı. Edinsel kistler: Kronik renal hasarda tübüler atrofi ve fibröz bağ doku baskısıyla gelişir. Sıvı saf transüda (proteinsiz) olduğu için 0-20 HU, T2'de BOS benzeri çok parlak sinyal verir. Kontrastlanma olmaması, duvar ve içerik normalliği = benign."
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
        "mechanism": "Basit kist zemininde oluşan komplikasyonlar (kanama, enfeksiyon, displazi) → kist duvarında kalınlaşma, septumasyon, kalsifikasyon veya solid komponent. Bosniak sınıflaması, kist duvar ve içerik özelliklerine göre malignite riskini katmanlara ayırır. Solid kontrastlanan komponent (Bosniak IV) kistik RCC için yüksek risk (%90) taşır."
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
        "mechanism": "E. coli (%80+) alt üriner yoldan renal pelvise çıkan enfeksiyon → tübüler epitel tutulumu → nötrofil infiltrasyonu ve ödem. Tübüler ödem, kontrast ajanlı BT'de tübülden geçişi yavaşlatır → striated nefrogram (hipoperfüze alanlar ile normoperfüze alanların radyal şerit paterni). Amfizematoz tip: Gaz üreten bakteriler (Klebsiella, E. coli) + diyabetik mikrovasküler hasar → intraparankimal gaz birikimi."
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
        "mechanism": "İdrar supersatürasyonu → kristal nükleasyonu → taş büyümesi. Kalsiyum oksalat: Hiperoksalüri veya hiperkalsiüri. Ürik asit: Asidik idrar (pH <5.5) + hiperurisemi. Struvit (magnezyum amonyum fosfat): Üreaz (+) bakteri enfeksiyonu (Proteus, Klebsiella) → amonyak → alkali idrar. Sistin: Sistinopatide tübüler reabsorbsiyon bozukluğu. BT'de HU değeri taş kompozisyonunu yansıtır."
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
        ]
    }
];
