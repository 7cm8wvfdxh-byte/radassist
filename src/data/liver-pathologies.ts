import { Pathology } from '@/types';

export const liverPathologies: Pathology[] = [
    {
        "id": "hepatocellular_carcinoma",
        "name": "Hepatoselüler Karsinom (HCC)",
        "nameEn": "Hepatocellular Carcinoma (HCC)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            { "url": "/images/liver/hcc_ct_arterial.png", "caption": "BT Arteriyel Faz (Wash-in)", "modality": "CT" },
            { "url": "/images/liver/hcc_ct_portal.png", "caption": "BT Portal Faz (Wash-out)", "modality": "CT" },
            { "url": "/images/liver/hcc_mri_t2.png", "caption": "MRI T2 Hiperintens", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Değişken ekojenite (hipo/hiper/mikst). Mozaik patern (heterojen). Tümör trombusu portal vende görülebilir.",
                "doppler": "Arteryel akım paterni. Basket pattern (çevre vaskülarite)."
            },
            "ct": {
                "non_contrast": "Genellikle hipodens. Yağ içeren HCC izodens olabilir.",
                "contrast": "ARTERİYEL FAZ: Yoğun kontrastlanma (WASH-IN) - HİPERVASKÜLER. PORTAL/GEÇ FAZ: Hızlı kontrast kaybı (WASH-OUT) - HİPODENS. Bu patern = LI-RADS 5 (Kesin HCC).",
                "cta": "Besleyici hepatik arter hipertrofisi. Portal ven trombusu (tümör veya bland)."
            },
            "mri": {
                "t1": "Genellikle hipointens. Yağ, glikojen, bakır içeren nodüller hiperintens olabilir.",
                "t2": "Hafif hiperintens (moderate). Çok parlaksa metastaz veya kolanjiokarsinom düşün.",
                "t1_c": "Arteriyel: Hiperintens (wash-in). Portal/Geç: Hipointens (wash-out). KAPSÜL kontrastlanması (geç fazda).",
                "dwi": "Kısıtlanma: Yüksek b-değerinde hiperintens, ADC düşük. Tümör gradini yansıtır.",
                "other_sequences": "Hepatobilier faz (Gd-EOB-DTPA): HİPOİNTENS (hepatosit fonksiyonu kaybı). Eğer hiperintens: İyi diferansiye HCC."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Variable echogenicity (hypo/hyper/mixed). Mosaic pattern (heterogeneous). Tumor thrombus may be seen in portal vein.",
                "doppler": "Arterial flow pattern. Basket pattern (peripheral vascularity)."
            },
            "ct": {
                "non_contrast": "Usually hypodense. Fat-containing HCC may be isodense.",
                "contrast": "ARTERIAL PHASE: Intense enhancement (WASH-IN) - HYPERVASCULAR. PORTAL/DELAYED PHASE: Rapid contrast loss (WASH-OUT) - HYPODENSE. This pattern = LI-RADS 5 (Definite HCC).",
                "cta": "Feeding hepatic artery hypertrophy. Portal vein thrombus (tumor or bland)."
            },
            "mri": {
                "t1": "Usually hypointense. Nodules containing fat, glycogen, copper may be hyperintense.",
                "t2": "Mildly hyperintense (moderate). If very bright, consider metastasis or cholangiocarcinoma.",
                "t1_c": "Arterial: Hyperintense (wash-in). Portal/Delayed: Hypointense (wash-out). CAPSULE enhancement (delayed phase).",
                "dwi": "Restriction: Hyperintense on high b-value, low ADC. Reflects tumor grade.",
                "other_sequences": "Hepatobiliary phase (Gd-EOB-DTPA): HYPOINTENSE (loss of hepatocyte function). If hyperintense: Well-differentiated HCC."
            }
        },
        "keyPoints": [
            "LI-RADS sınıflaması: LR-5 = Kesin HCC (Arteriyel wash-in + Portal wash-out + Kapsül).",
            "Sirotik karaciğerde >10mm nodül: HCC şüphesi yüksek.",
            "AFP yüksekliği + tipik görüntüleme = Biyopsi gerekmez.",
            "Portal ven trombusu: Arteriyel kontrastlanma = Tümör trombusu (Bland trombüste kontrastlanma yok)."
        ],
        "keyPointsEn": [
            "LI-RADS classification: LR-5 = Definite HCC (Arterial wash-in + Portal wash-out + Capsule).",
            "Nodule >10mm in cirrhotic liver: High suspicion for HCC.",
            "Elevated AFP + typical imaging = Biopsy not required.",
            "Portal vein thrombus: Arterial enhancement = Tumor thrombus (No enhancement in bland thrombus)."
        ],
        "mechanism": "Kronik karaciğer hasarı (siroz, viral hepatit B/C, aflatoksin) → hepatosit DNA hasarı → tümör süpresör gen kaybı (TP53, CTNNB1 mutasyonu) → klonal hepatosit proliferasyonu → HCC. Tümör neoanjiyogenezi (VEGF artışı) arteryel hipervaskülarite sağlar; bu wash-in/wash-out paterninin temelidir.",
        "etiology": "Kronik HBV/HCV enfeksiyonu (%70-80), Siroz (her etyoloji), Alkol, NASH, Aflatoksin B1 maruziyeti.",
        "differentialDiagnosis": ["Karaciğer Metastazı (Multipl, primer odak var)", "FNH (Hepatobilier fazda izointens/hiperintens)", "Hepatik Adenom (Genç kadın, OKS kullanımı)", "Kolanjiokarsinom (Periferal kontrastlanma, safra kanalı dilatasyonu)"],
        "goldStandard": "Dinamik BT veya MRI (LI-RADS 5): Arteriyel wash-in + Portal wash-out + Kapsül. Biyopsi: LI-RADS 3-4'te veya görüntüleme yetersizliğinde.",
        "clinicalPearl": "Sirotik hastada ≥10mm nodül + LI-RADS 5 paterni (wash-in/wash-out/kapsül) = Biyopsisiz HCC tanısı.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "LI-RADS: ACR CT/MRI LI-RADS v2018. American College of Radiology.",
            "American Association for the Study of Liver Diseases (AASLD) Practice Guideline: Management of Hepatocellular Carcinoma.",
            "Radiopaedia.org - Hepatocellular carcinoma"
        ]
    },
    {
        "id": "liver_metastasis",
        "name": "Karaciğer Metastazı",
        "nameEn": "Liver Metastasis",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            { "url": "/images/liver/metastasis_mri_t2.png", "caption": "MRI T2 - Target Sign", "modality": "MRI" },
            { "url": "/images/liver/metastasis_ct_portal.png", "caption": "BT Portal Faz - Hipodens", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Multipl hipodens lezyonlar. Kalsifikasyon: Müsinöz tümörler (kolon, over).",
                "contrast": "HİPOVASKÜLER (kolon, pankreas, meme): Hipodens halkalar. HİPERVASKÜLER (RCC, tiroid, melanom, NET): Arteriyel fazda kontrastlanma."
            },
            "mri": {
                "t1": "Hipointens (sıklıkla). Melanom metastazı: T1 HİPERİNTENS (melanin içeriği).",
                "t2": "HİPERİNTENS + 'Target sign' (santral hipointens, periferal hiperintens). Hedef işareti metastaz için oldukça spesifik.",
                "t1_c": "Periferal halka kontrastlanma. Merkezi kontrastlanmayan nekroz.",
                "dwi": "Difüzyon kısıtlılığı: Sellüler tümörlerde belirgin. Tedavi yanıtı takibinde kritik.",
                "other_sequences": "Hepatobilier faz: Hipointens (normal hepatosit yok)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Multiple hypodense lesions. Calcification: Mucinous tumors (colon, ovary).",
                "contrast": "HYPOVASCULAR (colon, pancreas, breast): Hypodense rims. HYPERVASCULAR (RCC, thyroid, melanoma, NET): Enhancement in arterial phase."
            },
            "mri": {
                "t1": "Hypointense (usually). Melanoma metastasis: T1 HYPERINTENSE (melanin content).",
                "t2": "HYPERINTENSE + 'Target sign' (central hypointense, peripheral hyperintense). Target sign is highly specific for metastasis.",
                "t1_c": "Peripheral ring enhancement. Central non-enhancing necrosis.",
                "dwi": "Diffusion restriction: Prominent in cellular tumors. Critical for monitoring treatment response.",
                "other_sequences": "Hepatobiliary phase: Hypointense (no normal hepatocytes)."
            }
        },
        "keyPoints": [
            "Karaciğer en sık metastaz lokasyonu (akciğerden sonra).",
            "Primer kaynak: Kolon (%50), Meme, Akciğer, Pankreas, Mide.",
            "'Target sign' (T2'de) metastaz için yüksek spesifik.",
            "Kemo sonrası kaybolmuş lezyon: 'Disappearing liver metastasis' - MRI ile takip şart."
        ],
        "keyPointsEn": [
            "Liver is the most common metastasis location (after lung).",
            "Primary source: Colon (50%), Breast, Lung, Pancreas, Stomach.",
            "'Target sign' (on T2) is highly specific for metastasis.",
            "Lesion disappeared after chemo: 'Disappearing liver metastasis' - MRI follow-up is mandatory."
        ],
        "mechanism": "Primer tümör hücreleri portal dolaşım veya lenfatik yol ile karaciğere ulaşır → sinüzoidal endotele tutunur → ekstravasasyon → tümör mikroçevresi oluşturur. Hipovasküler metastazlar (kolon, pankreas) tıkayıcı büyüme paterni gösterirken; hipervasküler metastazlar (RCC, NET, tiroid) zengin neovaskülarizasyonla arteriyel fazda kontrast tutar.",
        "etiology": "Primer kaynak: Kolon (%50), Meme, Akciğer, Pankreas, Mide. Hipervasküler: RCC, NET, Tiroid, Melanom.",
        "differentialDiagnosis": ["HCC (Sirotik zemin, AFP yüksek, wash-in/out)", "Karaciğer Apsesi (DWI kısıtlanma, ateş, klinik)", "Hepatik Hemanjiom (T2 ampul işareti, periferik dolum)", "FNH (Hepatobilier faz izointens)"],
        "goldStandard": "MRI (Hepatobilier ajan + DWI): Multimodal değerlendirme. PET-CT: Tedavi yanıtı ve evreleme.",
        "clinicalPearl": "T2'de 'Target sign' (santral hipointens, periferal hiperintens) metastaz için yüksek spesifik. Kolondan disappearing metastaz = MRI şart.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Hepatic metastases"
        ]
    },
    {
        "id": "hepatic_hemangioma",
        "name": "Karaciğer Hemanjiomu",
        "nameEn": "Hepatic Hemangioma",
        "category": "Benign",
        "categoryEn": "Benign",
        "gallery": [
            { "url": "/images/liver/hemangioma_usg.png", "caption": "USG - Hiperekoik", "modality": "USG" },
            { "url": "/images/liver/hemangioma_mri_t2.png", "caption": "MRI T2 - Ampul İşareti", "modality": "MRI" },
            { "url": "/images/liver/hemangioma_ct_delayed.png", "caption": "BT Geç Faz - Dolum", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Tipik: Homojen HİPEREKOİK kitle, keskin sınırlı, posterior akustik güçlenme. Atipik: Heterojen, büyük, kompleks.",
                "doppler": "Genellikle akım saptanmaz (yavaş akım). Dev hemanjiomlarda internal akım."
            },
            "ct": {
                "non_contrast": "İyi sınırlı, HİPODENS kitle.",
                "contrast": "PERİFERAL NODÜLER KONTRASTLANMA (Arteriyel faz) → SANTRALE DOLUM (Portal faz) → TAM DOLUM (Geç faz, 5-15 dk). 'Iris diaphragm' paterni = PATOGNOMONIK."
            },
            "mri": {
                "t1": "Hipointens, keskin sınırlı.",
                "t2": "'AMPUL' veya 'PAMUK' İŞARETİ: BOS benzeri çok parlak T2 sinyali (>BOS). Gecikmiş fazda da parlak kalır.",
                "t1_c": "BT ile aynı: Periferik nodüler → santrale dolum. Çok küçüklerde (<1cm) hızlı homojen dolum.",
                "dwi": "T2 shine-through (yalancı kısıtlanma). ADC HİPERİNTENS (gerçek kısıtlanma yok)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Typical: Homogeneous HYPERECHOIC mass, well-defined, posterior acoustic enhancement. Atypical: Heterogeneous, large, complex.",
                "doppler": "Usually no flow detected (slow flow). Internal flow in giant hemangiomas."
            },
            "ct": {
                "non_contrast": "Well-defined, HYPODENSE mass.",
                "contrast": "PERIPHERAL NODULAR ENHANCEMENT (Arterial phase) → CENTRIPETAL FILLING (Portal phase) → COMPLETE FILLING (Delayed phase, 5-15 min). 'Iris diaphragm' pattern = PATHOGNOMONIC."
            },
            "mri": {
                "t1": "Hypointense, well-defined.",
                "t2": "'LIGHT BULB' or 'COTTON WOOL' SIGN: Very bright T2 signal like CSF (>CSF). Remains bright in delayed phase.",
                "t1_c": "Same as CT: Peripheral nodular → centripetal filling. Rapid homogeneous filling in very small ones (<1cm).",
                "dwi": "T2 shine-through (pseudo-restriction). ADC HYPERINTENSE (no true restriction)."
            }
        },
        "keyPoints": [
            "En sık benign karaciğer tümörü. Kadınlarda daha sık.",
            "T2'de 'ampul' işareti = BOS'tan bile parlak.",
            "Gecikmeli dolum paterni (>60 saniye) ayırıcı.",
            "'Flash-filling hemangioma': <2cm, hızlı homojen dolum - HCC'den ayırt et."
        ],
        "keyPointsEn": [
            "Most common benign liver tumor. More common in women.",
            "'Light bulb' sign on T2 = Brighter than CSF.",
            "Delayed filling pattern (>60 seconds) is differentiating.",
            "'Flash-filling hemangioma': <2cm, rapid homogeneous filling - Distinguish from HCC."
        ],
        "mechanism": "Konjenital vasküler malformasyon → sinüzoidal kan havuzu oluşumu. Endotelyal hücrelerle döşeli, yavaş akan kan içeren kavernöz boşluklar arası fibröz septalar → periferik nodüler kontrast tutulumu, yavaş santripetal dolum. Yavaş akım nedeniyle T2'de serbest su gibi çok parlak sinyal (BOS benzeri T2 hiperintensitesi).",
        "etiology": "Konjenital vasküler hamartom. Kadınlarda daha sık (%60-70). Östrojen büyümeyi hızlandırabilir.",
        "differentialDiagnosis": ["Flash-filling HCC (<2cm, sirotik zemin, washout)", "Metastaz (Hipervasküler: NET, RCC - T2 daha az parlak)", "FNH (Santral skar, homojen arteriyel kontrast)", "Hepatik Adenom (Yağ, kanama, hepatobilier faz hipointens)"],
        "goldStandard": "MRI T2: 'Ampul işareti' (BOS'tan parlak). Gecikmiş BT: Periferik nodüler → santripetal dolum (>5dk).",
        "clinicalPearl": "T2'de BOS'tan bile parlak sinyal (ampul/lightbulb işareti) + Periferik nodüler dolum → %100'e yakın tanısal.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Hepatic hemangioma"
        ]
    },
    {
        "id": "focal_nodular_hyperplasia",
        "name": "Fokal Nodüler Hiperplazi (FNH)",
        "nameEn": "Focal Nodular Hyperplasia (FNH)",
        "category": "Benign",
        "categoryEn": "Benign",
        "gallery": [
            { "url": "/images/liver/fnh_ct_arterial.png", "caption": "BT Arteriyel - Yoğun Kontrast", "modality": "CT" },
            { "url": "/images/liver/fnh_mri_hepatobiliary.png", "caption": "MRI Hepatobilier - İzointens", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "İzo veya hafif hipodens. %30 santral SKAR görülür.",
                "contrast": "Arteriyel: Yoğun HOMOJEn kontrastlanma (HCC gibi ama homojen). Portal/Geç: İZODENS veya hafif hipodens. Santral skar: GEÇ kontrastlanır."
            },
            "mri": {
                "t1": "İzointens veya hafif hipointens.",
                "t2": "İzointens veya hafif hiperintens. Santral skar: T2 HİPERİNTENS (ayırıcı - Fibrolamelar HCC'de skar T2 hipointens).",
                "t1_c": "Arteriyel: Homojen yoğun kontrastlanma. Santral skar: Gecikmeli kontrastlanma (fibröz doku).",
                "other_sequences": "Hepatobilier faz: İZOİNTENS veya HİPERİNTENS (hepatosit fonksiyonu korunmuş) - Adenom ve metastazdan FARK."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Iso or mildly hypodense. Central SCAR seen in 30%.",
                "contrast": "Arterial: Intense HOMOGENEOUS enhancement (like HCC but homogeneous). Portal/Delayed: ISODENSE or mildly hypodense. Central scar: Enhances LATE."
            },
            "mri": {
                "t1": "Isointense or mildly hypointense.",
                "t2": "Isointense or mildly hyperintense. Central scar: T2 HYPERINTENSE (differentiator - Scar is T2 hypointense in Fibrolamellar HCC).",
                "t1_c": "Arterial: Homogeneous intense enhancement. Central scar: Delayed enhancement (fibrous tissue).",
                "other_sequences": "Hepatobiliary phase: ISOINTENSE or HYPERINTENSE (hepatocyte function preserved) - DISTINCTION from Adenoma and metastasis."
            }
        },
        "keyPoints": [
            "Genç kadınlarda. OKS kullanımıyla ilişki ZAYIF (Adenomdan fark).",
            "Santral skar + Hepatobilier fazda iso/hiperintensite = FNH.",
            "Tedavi gerektirmez (benign), takip yetersiz.",
            "Ayırıcı tanı: Fibrolamellar HCC (skar T2 hipointens, kalsifikasyon)."
        ],
        "keyPointsEn": [
            "In young women. WEAK association with OCP use (Difference from Adenoma).",
            "Central scar + Iso/hyperintensity on hepatobiliary phase = FNH.",
            "No treatment needed (benign), follow-up insufficient.",
            "Differential diagnosis: Fibrolamellar HCC (scar T2 hypointense, calcification)."
        ],
        "mechanism": "Anormal arteryel beslenmeli odak → lokal hiperperfüzyon → hepatosit ve Kupffer hücre hiperplazisi. Normal karaciğer mimarisini içerdiğinden (hepatosit, safra duktulusu, Kupffer hücresi) hepatobilier ajanlara UPTAKE yapar → hepatobilier fazda iso/hiperintensite. Santral skar, artmış kan akımına sekonder fibröz değişimi yansıtır.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Focal nodular hyperplasia"
        ]
    },
    {
        "id": "hepatic_adenoma",
        "name": "Hepatik Adenom",
        "nameEn": "Hepatic Adenoma",
        "category": "Benign",
        "categoryEn": "Benign",
        "gallery": [
            { "url": "/images/liver/adenoma_mri_t1_outphase.png", "caption": "MRI T1 Out-Phase (Yağ)", "modality": "MRI" },
            { "url": "/images/liver/adenoma_mri_hepatobiliary.png", "caption": "MRI Hepatobilier - Hipointens", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "İzo veya hiperdans (yağ veya glikojen). İNTRATÜMÖRAL KANAMA sık.",
                "contrast": "Arteriyel: Heterojen kontrastlanma. Portal/Geç: İzodens veya hipodens. Kanama: Hiperdens alanlar."
            },
            "mri": {
                "t1": "Değişken: Yağ içeriyorsa hiperintens. Kanama varsa hiperintens odaklar. Chemical shift: Yağ tespiti.",
                "t2": "Genellikle hafif hiperintens. Kanama/nekroz: Heterojen.",
                "t1_c": "Heterojen kontrastlanma. Kapsül görülebilir.",
                "other_sequences": "Hepatobilier faz: HİPOİNTENS (fonksiyonel hepatosit yok) - FNH'den FARK."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Iso or hyperdense (fat or glycogen). INTRATUMORAL HEMORRHAGE is common.",
                "contrast": "Arterial: Heterogeneous enhancement. Portal/Delayed: Isodense or hypodense. Hemorrhage: Hyperdense areas."
            },
            "mri": {
                "t1": "Variable: Hyperintense if fat containing. Hyperintense foci if hemorrhage. Chemical shift: Fat detection.",
                "t2": "Usually mildly hyperintense. Hemorrhage/necrosis: Heterogeneous.",
                "t1_c": "Heterogeneous enhancement. Capsule may be seen.",
                "other_sequences": "Hepatobiliary phase: HYPOINTENSE (no functional hepatocytes) - DISTINCTION from FNH."
            }
        },
        "keyPoints": [
            "OKS ve anabolik steroid kullanımıyla güçlü ilişki.",
            "Kanama ve malign transformasyon riski → >5cm ise rezeksiyon.",
            "Hepatobilier fazda hipointens = Adenom (FNH'de iso/hiperintens).",
            "Alt tipler: HNF1α-inactivated (yağlı), β-catenin mutant (malignite riski yüksek), Inflammatory."
        ],
        "keyPointsEn": [
            "Strong association with OCP and anabolic steroid use.",
            "Risk of hemorrhage and malignant transformation → Resection if >5cm.",
            "Hypointense on hepatobiliary phase = Adenoma (FNH is iso/hyperintense).",
            "Subtypes: HNF1α-inactivated (fatty), β-catenin mutant (high malignancy risk), Inflammatory."
        ],
        "mechanism": "Östrojen/androjen → hepatosit proliferasyonu ve apoptoz inhibisyonu → klonal hepatosit kitlesi. HNF1α inaktivasyonu: Yağ birikimi (steatotik adenom). β-catenin aktivasyonu: Hepatosit displazisi → malign transformasyon. Tümörde safra duktulusu ve Kupffer hücresi yoktur → hepatobilier fazda kontrast almaz (hipointens), FNH'den ayrım buradan yapılır.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Hepatocellular adenoma"
        ]
    },
    {
        "id": "liver_abscess",
        "name": "Karaciğer Apsesi (Piyojenik)",
        "nameEn": "Liver Abscess (Pyogenic)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "gallery": [
            { "url": "/images/liver/abscess_ct_contrast.png", "caption": "BT - Double Target Sign", "modality": "CT" },
            { "url": "/images/liver/abscess_mri_dwi.png", "caption": "MRI DWI - Kısıtlanma", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Kompleks kistik kitle. İnternal debri, septasyonlar. Kalın irregüler duvar. 'Cluster sign': Multipl küçük apseler birleşerek tek büyük apse.",
                "doppler": "Duvar ve septamlarda vaskülarite."
            },
            "ct": {
                "non_contrast": "Düşük dansiteli kistik kitle. Gaz kabarcıkları (anaerop enfeksiyon).",
                "contrast": "'Double target sign': İç halka (granülasyon dokusu kontrastlanır) + Dış halka (ödem, kontrastlanmaz). 'Cluster sign': Multipl küçük apseler."
            },
            "mri": {
                "t1": "İçerik: Değişken (debri, kan). Duvar: Hipointens.",
                "t2": "İçerik: Hiperintens. Çevre ödem: Belirgin hiperintens halka.",
                "dwi": "Merkezi DİFÜZYON KISITLAMASI (parlak) - Pü içeriği. Nekrotik tümörden FARK.",
                "t1_c": "Kalın duvar kontrastlanması. Septum kontrastlanması."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Complex cystic mass. Internal debris, septations. Thick irregular wall. 'Cluster sign': Multiple small abscesses coalescing into one large abscess.",
                "doppler": "Vascularity in wall and septa."
            },
            "ct": {
                "non_contrast": "Low density cystic mass. Gas bubbles (anaerobic infection).",
                "contrast": "'Double target sign': Inner ring (granulation tissue enhances) + Outer ring (edema, does not enhance). 'Cluster sign': Multiple small abscesses."
            },
            "mri": {
                "t1": "Content: Variable (debris, blood). Wall: Hypointense.",
                "t2": "Content: Hyperintense. Surrounding edema: Prominent hyperintense ring.",
                "dwi": "Central DIFFUSION RESTRICTION (bright) - Pus content. DISTINCT from necrotic tumor.",
                "t1_c": "Thick wall enhancement. Septal enhancement."
            }
        },
        "keyPoints": [
            "Piyojenik (bakteriyel) vs Amebik apse: Amebik tek, büyük, sağ lob.",
            "DWI kısıtlanma: Apse vs Nekrotik tümör ayırımında kritik.",
            "'Double target sign' piyojenik apse için karakteristik.",
            "Tedavi: Perkütan drenaj + Antibiyotik."
        ],
        "keyPointsEn": [
            "Pyogenic (bacterial) vs Amebic abscess: Amebic is single, large, right lobe.",
            "DWI restriction: Critical in distinguishing Abscess vs Necrotic tumor.",
            "'Double target sign' is characteristic for pyogenic abscess.",
            "Treatment: Percutaneous drainage + Antibiotics."
        ],
        "mechanism": "Bakteriyel ajan (E. coli, Klebsiella, anaeroplar) → portal bakteremi veya doğrudan yayılım → hepatosit nekrozu → nötrofil infiltrasyonu → pü birikimi. Granülasyon dokusu ile çevrili merkez (double target iç halka kontrast alır). Visköz pü içeriği su moleküllerinin difüzyonunu kısıtlar → DWI'da yüksek sinyal (nekrotik tümörde periferik kısıtlanma, apse merkezinde tam kısıtlanma).",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Pyogenic liver abscess"
        ]
    },
    {
        "id": "liver_cirrhosis",
        "name": "Siroz ve Portal Hipertansiyon",
        "nameEn": "Cirrhosis and Portal Hypertension",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
        "gallery": [
            { "url": "/images/liver/cirrhosis_ct.png", "caption": "BT - Nodüler Karaciğer", "modality": "CT" },
            { "url": "/images/liver/varices_ct.png", "caption": "BT - Özofageal Varisler", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Nodüler karaciğer yüzeyi. Heterojen parankimal ekojenite. Küçük sağ lob, büyümüş kaudat ve sol lateral segment.",
                "doppler": "Portal ven akım yavaşlaması (<16 cm/s) veya TERS akım. Splenomegali. Rekanalize umbilikal ven."
            },
            "ct": {
                "non_contrast": "Nodüler kontur. Atrofi-hipertrofi kompleksi. Asit. Splenomegali.",
                "contrast": "Hetereojen kontrastlanma. Rejeneratif nodüller iso/hipodens. Displastik nodül: Arteryel fazda silik kontrastlanma."
            },
            "mri": {
                "t1": "Rejeneratif nodüller: Siderotik ise hipointens (demir birikimi). Displastik nodül: T1 hiperintens olabilir.",
                "t2": "Rejeneratif nodüller: Hipointens (siderotik). Displastik nodül: İzointens. HCC: Hafif hiperintens.",
                "t1_c": "Rejeneratif ve displastik nodül: Arteryel FAZda BELİRGİN kontrastlanma yok. HCC: Arteryel wash-in.",
                "other_sequences": "Hepatobilier faz: Rejeneratif nodül iso/hiperintens. HCC hipointens."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Nodular liver surface. Heterogeneous parenchymal echogenicity. Small right lobe, enlarged caudate and left lateral segment.",
                "doppler": "Portal vein flow slowing (<16 cm/s) or REVERSED flow. Splenomegaly. Recanalized umbilical vein."
            },
            "ct": {
                "non_contrast": "Nodular contour. Atrophy-hypertrophy complex. Ascites. Splenomegaly.",
                "contrast": "Heterogeneous enhancement. Regenerative nodules iso/hypodense. Dysplastic nodule: Faint enhancement in arterial phase."
            },
            "mri": {
                "t1": "Regenerative nodules: Hypointense if siderotic (iron accumulation). Dysplastic nodule: Can be T1 hyperintense.",
                "t2": "Regenerative nodules: Hypointense (siderotic). Dysplastic nodule: Isointense. HCC: Mildly hyperintense.",
                "t1_c": "Regenerative and dysplastic nodule: No SIGNIFICANT enhancement in Arterial PHASE. HCC: Arterial wash-in.",
                "other_sequences": "Hepatobiliary phase: Regenerative nodule iso/hyperintense. HCC hypointense."
            }
        },
        "keyPoints": [
            "Nodül progresyonu: Rejeneratif → Displastik (düşük → yüksek grade) → HCC.",
            "Siderotik nodül: T1 ve T2'de hipointens (HCC riski düşük).",
            "Non-siderotik displastik nodül: HCC transformasyonu riski yüksek.",
            "Portal hipertansiyon bulguları: Splenomegali, asit, variksler, rekanalize umbilikal ven."
        ],
        "keyPointsEn": [
            "Nodule progression: Regenerative → Dysplastic (low → high grade) → HCC.",
            "Siderotic nodule: Hypointense on T1 and T2 (Low HCC risk).",
            "Non-siderotic dysplastic nodule: High risk of HCC transformation.",
            "Portal hypertension signs: Splenomegaly, ascites, varices, recanalized umbilical vein."
        ],
        "mechanism": "Kronik karaciğer hasarı (alkol, viral hepatit, NASH) → hepatosit nekrozu → fibröz doku birikimi (HSC aktivasyonu, TGF-β) → rejeneratif nodül formasyonu. Bozulan portal akım → portal hipertansiyon → kollateral dolaşım açılımı (özofageal varisler, umbilikal ven). Nodüler doku arteryel neovaskülarizasyon kazanırsa → displastik nodül → HCC dönüşümü.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "LI-RADS: ACR CT/MRI LI-RADS v2018. American College of Radiology.",
            "American Association for the Study of Liver Diseases (AASLD) Practice Guideline: Diagnosis and Management of Cirrhosis.",
            "Radiopaedia.org - Liver cirrhosis"
        ]
    },
    {
        "id": "hydatid_cyst",
        "name": "Hidatik Kist (Ekinokok)",
        "nameEn": "Hydatid Cyst (Echinococcus)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "gallery": [
            { "url": "/images/liver/hydatid_usg_lilly.png", "caption": "USG - Water Lily Sign", "modality": "USG" },
            { "url": "/images/liver/hydatid_ct_calcified.png", "caption": "BT - Kalsifiye Kist", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Tip I: Basit kist (uniloküler). Tip II: Yavru kistler (daughter cysts) + 'Su zambağı işareti' (membrane detachment). Tip III: Kalsifiye kist (inaktif). Gharbi Sınıflaması: Tip 1 (Saf kist). Tip 2 (Membran ayrışması - Nilüfer çiçeği / Water lily sign). Tip 3 (Kız veziküller - Bal peteği). Tip 4 (Solid - Psödotümör). Tip 5 (Kalsifik - Ölü).",
                "doppler": "Kist içinde akım yok."
            },
            "ct": {
                "non_contrast": "İyi sınırlı, su dansitesinde kist. Duvar KALSİFİKASYONU (kronik). Yavru kistler: Ana kistten düşük dansite.",
                "contrast": "Kist içi kontrastlanma YOK. Duvar minimal kontrastlanabilir. Septalar görülebilir."
            },
            "mri": {
                "t1": "Kist: Hipointens (su). Yavru kist: Daha hipointens. Kum taneleri (skoleksler): İzointens.",
                "t2": "Kist: Hiperintens. Hipointens RİM (perikist - fibröz kapsül). 'Water lily sign': Yüzen membran.",
                "dwi": "Kist içeriği: Difüzyon kolaylaşmış (sıvı). Apse'den fark.",
                "t1_c": "İç yapılar kontrastlanmaz. Perikist hafif kontrastlanabilir."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Type I: Simple cyst (unilocular). Type II: Daughter cysts + 'Water lily sign' (membrane detachment). Type III: Calcified cyst (inactive). Gharbi Classification: Type 1 (Pure cyst). Type 2 (Membrane detachment). Type 3 (Daughter vesicles - Honeycomb). Type 4 (Solid - Pseudotumor). Type 5 (Calcified - Dead).",
                "doppler": "No flow within cyst."
            },
            "ct": {
                "non_contrast": "Well-defined, water density cyst. Wall CALCIFICATION (chronic). Daughter cysts: Lower density than mother cyst.",
                "contrast": "NO enhancement inside cyst. Wall may enhance minimally. Septa may be seen."
            },
            "mri": {
                "t1": "Cyst: Hypointense (water). Daughter cyst: More hypointense. Sand (scoleces): Isointense.",
                "t2": "Cyst: Hyperintense. Hypointense RIM (pericyst - fibrous capsule). 'Water lily sign': Floating membrane.",
                "dwi": "Cyst content: Facilitated diffusion (fluid). Difference from abscess.",
                "t1_c": "Internal structures do not enhance. Pericyst may enhance mildly."
            }
        },
        "keyPoints": [
            "WHO-IWGE sınıflaması: CE1-CE5 (aktif → inaktif).",
            "'Water lily sign': Memran dekolmanı - Hidatik kist için patognomonik.",
            "Rüptür komplikasyonu: Anafilaksi, yavru kist disseminasyonu.",
            "Seroloji + Görüntüleme = Tanı. Cerrahi veya PAIR tedavi.",
            "Tip 3 (Kız vezikül) ve Tip 2 (Membran) aktiftir."
        ],
        "keyPointsEn": [
            "WHO-IWGE classification: CE1-CE5 (active → inactive).",
            "'Water lily sign': Membrane detachment - Pathognomonic for hydatid cyst.",
            "Rupture complication: Anaphylaxis, daughter cyst dissemination.",
            "Serology + Imaging = Diagnosis. Surgery or PAIR treatment.",
            "Type 3 (Daughter vesicle) and Type 2 (Membrane) are active."
        ],
        "mechanism": "Echinococcus granulosus yumurtasının oral alınımı → bağırsakta larval formu (onkosfer) açılır → portal dolaşıma girer → karaciğerde yerleşir → hidatid kist gelişir. Kist üç tabakadan oluşur: Dış (perikist, konak fibröz doku), orta (germinal epiteli), iç (germinal tabaka, yavru kist üretir). Membran ayrışması → water lily sign; kalsifikasyon → inaktif evre.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "WHO Informal Working Group on Echinococcosis. International classification of ultrasound images in cystic echinococcosis.",
            "Radiopaedia.org - Hepatic hydatid cyst"
        ]
    },
    {
        "id": "acute_cholecystitis",
        "name": "Akut Kolesistit",
        "nameEn": "Acute Cholecystitis",
        "category": "İnflamatuar",
        "categoryEn": "Inflammatory",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "USG - Safra Kesesi Duvar Kalınlaşması", "modality": "USG" },
            { "url": "/images/placeholder_source.png", "caption": "BT - Perikolesistik Sıvı", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Safra kesesi duvar kalınlaşması (>3mm). Murphy işareti pozitif (prob baskısında ağrı). Perikolesistik sıvı. Safra kesesi distansiyonu (>5cm transvers). İmpakte boyun taşı.",
                "doppler": "Duvar hipervaskülaritesi (Renkli Doppler'de artmış sinyal). Gangrenöz kolesistitte akım azalabilir."
            },
            "ct": {
                "non_contrast": "Safra kesesi distansiyonu. İntralüminal hiperdens taşlar (kalsifik).",
                "contrast": "Duvar kalınlaşması ve kontrastlanması. Perikolesistik yağ kirlenme (fat stranding). Perikolesistik sıvı. Gangrenöz: Duvar devamlılık kaybı, intralüminal membranlar. Amfizemöz: İntramural/intralüminal hava (acil!)."
            },
            "mri": {
                "t2": "Safra kesesi çevresinde T2 hiperintens ödem/sıvı. Duvar ödemi.",
                "t1_c": "Duvar kontrastlanması ve kalınlaşması.",
                "other_sequences": "MRCP: Safra kanalı değerlendirmesi, koledokolitiyazis ekartasyonu."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Gallbladder wall thickening (>3mm). Positive sonographic Murphy's sign. Pericholecystic fluid. GB distension (>5cm transverse). Impacted stone at neck.",
                "doppler": "Wall hypervascularity (increased signal on color Doppler). Reduced flow in gangrenous cholecystitis."
            },
            "ct": {
                "non_contrast": "Gallbladder distension. Intraluminal hyperdense calcified stones.",
                "contrast": "Wall thickening and enhancement. Pericholecystic fat stranding. Pericholecystic fluid. Gangrenous: Wall discontinuity, intraluminal membranes. Emphysematous: Intramural/intraluminal gas (emergency!)."
            },
            "mri": {
                "t2": "T2 hyperintense edema/fluid around gallbladder. Wall edema.",
                "t1_c": "Wall enhancement and thickening.",
                "other_sequences": "MRCP: Bile duct evaluation, exclusion of choledocholithiasis."
            }
        },
        "keyPoints": [
            "USG ilk görüntüleme yöntemidir: Duvar kalınlaşması >3mm + Murphy işareti = Tanısal.",
            "Gangrenöz kolesistit: Duvar devamlılık kaybı, intralüminal membranlar → Acil cerrahi.",
            "Amfizemöz kolesistit: İntramural hava → Diyabetik hastalarda sık, acil!",
            "Akalkülöz kolesistit: Taşsız, yoğun bakım hastalarında görülür."
        ],
        "keyPointsEn": [
            "USG is first imaging: Wall thickening >3mm + Murphy's sign = Diagnostic.",
            "Gangrenous cholecystitis: Wall discontinuity, intraluminal membranes → Emergency surgery.",
            "Emphysematous cholecystitis: Intramural gas → Common in diabetics, emergency!",
            "Acalculous cholecystitis: Without stones, seen in ICU patients."
        ],
        "mechanism": "İmpakte safra taşı → sistik kanal obstrüksiyonu → safra kesesi içi basınç artışı → duvar iskemisi → inflamasyon. Safra asitleri ve lizolesitin direkt mukozal hasar yapar. İkincil bakteri kolonizasyonu (E. coli, Klebsiella). Gangrenöz kolesistit: Transmural nekroz → perforasyon riski. Amfizemöz kolesistit: Klostridyum türleri → intramural gaz.",
        "etiology": "Kolelitiyazis (%90-95). Akalkülöz: Kritik hastalık, TPN, uzun ameliyat, travma.",
        "differentialDiagnosis": ["Akut Hepatit (Diffüz duvar kalınlaşması, LAP)", "Safra Kesesi Karsinomu (Kitlesel lezyon, invazyon)", "Perikolesistik Apse (Postperforatif)", "Hipoalbüminemi (Diffüz asit-ödem ile birlikte)"],
        "goldStandard": "USG (ilk basamak). BT: Komplikasyon değerlendirmesi (gangrenöz, amfizemöz). HIDA sintigrafisi: Sistik kanal obstrüksiyonu kanıtı.",
        "clinicalPearl": "Sonografik Murphy işareti: USG probu ile safra kesesi üzerine baskı uygulanınca ağrı — sistik kanal tıkanıklığını destekler, tanıda %85+ spesifiktir.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Right Upper Quadrant Pain. American College of Radiology; 2018.",
            "Radiopaedia.org - Acute cholecystitis"
        ]
    },
    {
        "id": "cholelithiasis",
        "name": "Kolelitiyazis (Safra Taşı)",
        "nameEn": "Cholelithiasis (Gallstones)",
        "category": "Bilier",
        "categoryEn": "Biliary",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "USG - Taş + Akustik Gölge", "modality": "USG" },
            { "url": "/images/placeholder_source.png", "caption": "BT - Kalsifik Safra Taşları", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Hiperekojenik odak + Posterior akustik gölge = PATOGNOMONİK. Pozisyon değişimi ile yer değiştirme (taşlar bağımlı konuma geçer). WES triadı: Duvar-Eko-Gölge. Kolesistitis bulguları eşlik edebilir.",
                "doppler": "Twinkle artefakt: Taş posterior yüzeyinde renkli Doppler'de titreşim artefaktı."
            },
            "ct": {
                "non_contrast": "Kalsifik taşlar (%20): Hiperdens. Kolesterol taşları (%80): İzodens veya hipodens (BT'de görülmeyebilir!). Nadir: Mezbilit (safra taşı ileusa bağlı barsakta taş).",
                "contrast": "Taş kontrastlanmaz. Safra kesesi duvarı ve çevre değerlendirmesi."
            },
            "mri": {
                "t2": "Taşlar tüm sekanslarda sinyal vermeyen koyuluk (void) olarak görülür. T2 sekanslarda safra (hiperintens) içinde hipointens taşlar belirgin.",
                "other_sequences": "MRCP: Koledokolitiyazis değerlendirmesi için ideal. İntraduktal dolum defekti (santral, düzgün konturlu)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Hyperechoic focus + Posterior acoustic shadow = PATHOGNOMONIC. Mobile with position change. WES triad: Wall-Echo-Shadow. Cholecystitis signs may accompany.",
                "doppler": "Twinkle artifact: Oscillating color Doppler signal posterior to stone."
            },
            "ct": {
                "non_contrast": "Calcified stones (20%): Hyperdense. Cholesterol stones (80%): Isodense or hypodense (may not be seen on CT!). Rare: Mirizzi (stone in cystic duct causing CHD compression).",
                "contrast": "Stones do not enhance. Evaluation of GB wall and surroundings."
            },
            "mri": {
                "t2": "Stones appear as signal voids (dark) on all sequences. Hypointense stones stand out in T2 hyperintense bile.",
                "other_sequences": "MRCP: Ideal for choledocholithiasis. Intraluminal filling defect (central, smooth contour)."
            }
        },
        "keyPoints": [
            "USG altın standarttır: Sensitivite %95+. Posterior akustik gölge = tanısal.",
            "Kolesterol taşları BT'de görülmeyebilir → USG daha değerli!",
            "MRCP: Koledokolitiyazis (ana safra kanalı taşı) için tercih.",
            "5F: Fat, Female, Forty, Fertile, Fair (risk faktörleri)."
        ],
        "keyPointsEn": [
            "USG is gold standard: Sensitivity 95%+. Posterior acoustic shadow = diagnostic.",
            "Cholesterol stones may not be visible on CT → USG more valuable!",
            "MRCP: Preferred for choledocholithiasis (common bile duct stone).",
            "5F: Fat, Female, Forty, Fertile, Fair (risk factors)."
        ],
        "mechanism": "Safranın kolesterol ile aşırı doyması (supersatürasyon) → nükleasyon → kristal büyümesi → taş oluşumu. Kolesterol taşları (%80): Safranın kolesterol/safra asidi/lesitin dengesizliği. Pigment taşları (%20): Hemoliz (siyah) veya enfeksiyon (kahverengi). Safra kesesi hipomotilitesi ve mukus hipersekresyonu nükleasyonu kolaylaştırır.",
        "etiology": "Obezite, gebelik, OKS kullanımı, hızlı kilo kaybı, hemolitik anemi, Crohn hastalığı, TPN.",
        "differentialDiagnosis": ["Safra Kesesi Polipleri (Taşın aksine yerini değiştirmez, gölge yok)", "Safra Çamuru (Akustik gölge yok, bağımlı sediman)", "Kolesterolozis (Duvar nodülleri)", "Safra Kesesi Karsinomu (Kitlesel lezyon)"],
        "goldStandard": "USG. MRCP: Koledokolitiyazis şüphesinde.",
        "clinicalPearl": "BT'de 'negatif' safra kesesi = kolesterol taşı olabilir. Klinik kolik + USG negatifse MRCP iste.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Right Upper Quadrant Pain. American College of Radiology; 2018.",
            "Radiopaedia.org - Cholelithiasis"
        ]
    },
    {
        "id": "nafld_fatty_liver",
        "name": "Yağlı Karaciğer (NAFLD/NASH)",
        "nameEn": "Fatty Liver (NAFLD/NASH)",
        "category": "Metabolik",
        "categoryEn": "Metabolic",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "USG - Hiperekojenik Karaciğer", "modality": "USG" },
            { "url": "/images/placeholder_source.png", "caption": "BT - Karaciğer Dansite Azalması", "modality": "CT" },
            { "url": "/images/placeholder_source.png", "caption": "MRI Yağ Baskılama (Out-of-Phase)", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Artmış ekojenite ('parlak karaciğer'). Karaciğer-böbrek kontrast artışı (normalde eşit). Derin yapıların görüntülenemesi (arka atenüasyon). Portal ven duvar ekojenitesi azalır (kontrast kaybı).",
                "doppler": "Normal hepatik vasküler akım (erken evrede). Siroza ilerlerse portal hipertansiyon bulguları."
            },
            "ct": {
                "non_contrast": "Karaciğer dansite < Dalak dansite = Steatoz. Karaciğer <40 HU = Belirgin steatoz. Damarlar karaciğere göre görece hiperdans görünür ('ters kontrast').",
                "contrast": "Fokal yağlanma veya fokal yağ tutulmaması alanları: Yuvarlak/coğrafik sınır, kitle etkisi yok, damar yıkımı yok."
            },
            "mri": {
                "t1": "In-phase/Out-of-phase (Çift eko): Yağ → Out-of-phase'de sinyal düşüşü (sinyal kaybı = yağlı). Chemical shift imaging altın standart.",
                "other_sequences": "MR Spektroskopi: Yağ fraksiyonunu sayısal olarak ölçer (>5% = Steatoz). Fibrozis için MR Elastografi."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Increased echogenicity ('bright liver'). Increased liver-kidney contrast (normally equal). Poor visualization of deep structures (posterior attenuation). Reduced portal vein wall echogenicity.",
                "doppler": "Normal hepatic vascular flow (early stage). Portal hypertension findings if cirrhosis develops."
            },
            "ct": {
                "non_contrast": "Liver density < Spleen density = Steatosis. Liver <40 HU = Significant steatosis. Vessels appear relatively hyperdense ('reverse contrast').",
                "contrast": "Focal fat deposition or focal fat sparing: Round/geographic borders, no mass effect, no vessel displacement."
            },
            "mri": {
                "t1": "In-phase/Out-of-phase (Dual echo): Fat → signal drop on out-of-phase (signal loss = fatty). Chemical shift imaging is gold standard.",
                "other_sequences": "MR Spectroscopy: Quantifies fat fraction (>5% = Steatosis). MR Elastography for fibrosis."
            }
        },
        "keyPoints": [
            "USG: Karaciğer > böbrek ekojenitesi = Steatoz.",
            "BT: Karaciğer <40 HU (kontrastsız) veya Karaciğer-Dalak farkı <-10 HU = Belirgin steatoz.",
            "MRI Out-of-Phase: Sinyal kaybı = Yağ depositi (en hassas yöntem).",
            "NAFLD → NASH → Fibrozis → Siroz → HCC progresyonu mümkündür."
        ],
        "keyPointsEn": [
            "USG: Liver > kidney echogenicity = Steatosis.",
            "CT: Liver <40 HU (non-contrast) or Liver-Spleen difference <-10 HU = Significant steatosis.",
            "MRI Out-of-Phase: Signal drop = Fat deposition (most sensitive method).",
            "NAFLD → NASH → Fibrosis → Cirrhosis → HCC progression is possible."
        ],
        "mechanism": "İnsülin direnci → hepatik lipogenez artışı ve yağ asidi oksidasyonu azalması → hepatosit içinde trigliserid birikimi (steatoz). NASH'ta ek olarak oksidatif stres ve sitokin aktivasyonu → inflamasyon + hepatosit hasarı → fibrozis. Görüntülemede steatoz: Yağ protonları X-ray'i daha az atenüe eder (CT'de düşük dansite), USG'de akustik saçılmayı artırır (hiperekojeni), MRI'da su ve yağ protonlarının çift eko tekniğinde faz farkı oluşturur.",
        "etiology": "Obezite, tip 2 DM, hiperlipidemi, metabolik sendrom, hızlı kilo kaybı, TPN, bazı ilaçlar (kortikosteroid, metotreksat, tamoksifen).",
        "differentialDiagnosis": ["Fokal Steatoz (Fokal yağlanma — kitle ile karışabilir)", "Glikojen Depo Hastalığı (BT'de hiperdens karaciğer)", "Amiloidoz", "Wilson Hastalığı (Bakır birikimi)"],
        "goldStandard": "MR Spektroskopi veya Karaciğer Biyopsisi (>5% steatoz = NAFLD).",
        "clinicalPearl": "BT'de karaciğer dansitesi dalaktan düşükse steatoz düşün. Fokal yağ tutulmaması (özellikle safra kesesi yatağı ve portal dal komşuluğu) tümör ile karışabilir — vasküler yapılar düzgün seyrediyorsa benign.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "American Association for the Study of Liver Diseases (AASLD) Practice Guideline: Diagnosis and Management of Nonalcoholic Fatty Liver Disease.",
            "Radiopaedia.org - Hepatic steatosis"
        ]
    },
    {
        "id": "cholangiocarcinoma",
        "name": "Kolanjiokarsinom (Safra Yolu Kanseri)",
        "nameEn": "Cholangiocarcinoma (Bile Duct Cancer)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "gallery": [
            { "url": "/images/placeholder_source.png", "caption": "BT - Periferal Kitle (İCC)", "modality": "CT" },
            { "url": "/images/placeholder_source.png", "caption": "MRCP - Safra Kanalı Darlığı", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Periferal tip (İCC): Hipoekojenik kitle ± uydu nodüller. Hiler tip (Klatskin): Konfluens düzeyinde genişlemiş intrahepatik safra kanalları (genişlemiş ama safra kesesi küçük). Distal tip: Ortak safra kanalında kitle.",
                "doppler": "Genellikle hipovasküler (HCC'den farkı). Periferik rim kontrastlanması."
            },
            "ct": {
                "non_contrast": "Hipodens kitle. Çevresinde satellit nodüller. İntrahepatik safra kanalı dilatasyonu (tıkanmanın proksimalinde).",
                "contrast": "Erken faz: Periferal ince rim kontrastlanması. Geç faz: Santripetal dolum (fibröz stroma → yavaş kontrastlanma). HCC'nin tersine wash-out yok. Kapsüler retraksiyona neden olabilir (fibröz tümör).",
                "cta": "Safra kanalı obstrüksiyon seviyesi ve portohepatik ven invazyonu (cerrahi planlamada kritik)."
            },
            "mri": {
                "t2": "Hafif hiperintens kitle. Peritümöral safra kanalı dilatasyonu. Fibröz stroma → T2 hipointens bileşen.",
                "t1_c": "Gecikmiş kontrastlanma (fibröz stroma yavaş dolar). Santripetal patern.",
                "dwi": "Kısıtlanma mevcut. ADC değeri düşük.",
                "other_sequences": "MRCP: Safra kanalı darlığı/tıkanması ve proksimal dilatasyon düzeyini gösterir. Hepatobilier faz: İCC hipodens (hepatosit kaybı)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Peripheral type (ICC): Hypoechoic mass ± satellite nodules. Hilar type (Klatskin): Dilated intrahepatic bile ducts at confluence (dilated but small GB). Distal type: Mass in common bile duct.",
                "doppler": "Usually hypovascular (distinguishing from HCC). Peripheral rim enhancement."
            },
            "ct": {
                "non_contrast": "Hypodense mass. Surrounding satellite nodules. Intrahepatic bile duct dilation (upstream from obstruction).",
                "contrast": "Early phase: Peripheral thin rim enhancement. Delayed phase: Centripetal fill-in (fibrous stroma → slow enhancement). No wash-out unlike HCC. May cause capsular retraction (fibrotic tumor).",
                "cta": "Bile duct obstruction level and portovenous invasion (critical for surgical planning)."
            },
            "mri": {
                "t2": "Mildly hyperintense mass. Peritumoral bile duct dilation. Fibrous stroma → T2 hypointense component.",
                "t1_c": "Delayed enhancement (fibrous stroma fills slowly). Centripetal pattern.",
                "dwi": "Diffusion restriction present. Low ADC.",
                "other_sequences": "MRCP: Shows bile duct stricture/obstruction and proximal dilation level. Hepatobiliary phase: ICC hypointense (hepatocyte loss)."
            }
        },
        "keyPoints": [
            "Klatskin tümörü: Hiler kolanjiokarsinom — konfluenste obstrüksiyon, Bismuth-Corlette sınıflaması.",
            "BT: Geç faz kontrastlanma (fibröz stroma) HCC'den ayırır.",
            "MRCP: Safra kanalı darlığı + proksimal dilatasyon düzeyini gösterir.",
            "Ca 19-9 yüksekliği + görüntüleme = tanı için biyopsi gerekmeyebilir."
        ],
        "keyPointsEn": [
            "Klatskin tumor: Hilar cholangiocarcinoma — obstruction at confluence, Bismuth-Corlette classification.",
            "CT: Delayed enhancement (fibrous stroma) distinguishes from HCC.",
            "MRCP: Shows bile duct stricture + proximal dilation level.",
            "Elevated Ca 19-9 + imaging = biopsy may not be needed."
        ],
        "mechanism": "Safra kanalı epiteli (kolanjiositler) malign transformasyonu → kolanjiokarsinom. Kronik inflamasyon (PSK, taş, enfeksiyon, toksin) → DNA hasarı → KRAS, IDH1/2, FGFR2 mutasyonları. Fibröz stroma üretimi tümörün geç faz kontrastlanma özelliğini açıklar. Hiler tip en sık (%50-60), periferal (intahepatik) tip ikinci sık, distal tip en az sık.",
        "etiology": "Primer sklerozan kolanjit (PSK), Kolelitiyazis, Caroli hastalığı, koledokal kist, kronik HBV/HCV, Clonorchis sinensis enfeksiyonu.",
        "differentialDiagnosis": ["HCC (Arteryel wash-in, wash-out, AFP yüksek)", "Karaciğer Metastazı (Primer odak bilinen)", "Hepatik Apse (Ateş, lökositoz)", "FNH (Santral skar, hepatobilier faz hiperintens)"],
        "goldStandard": "Dinamik BT veya MRCP + MRI. Ca 19-9 > 100 U/mL destekler. Kesin: Biyopsi veya cerrahi patoloji.",
        "clinicalPearl": "Obstrüktif sarılık + İntrahepatik safra dilatasyonu + Safra kanalı duvarında kalınlaşma → Kolanjiokarsinom şüphesi. Geç faz kontrastlanma (santripetal) HCC'den ayırt ettirir.",
        "references": [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Cholangiocarcinoma"
        ]
    },
    {
        "id": "budd_chiari_syndrome",
        "name": "Budd-Chiari Sendromu",
        "nameEn": "Budd-Chiari Syndrome",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "ultrasound": {
                "description": "Hepatik venlerde trombüs (ekojen materyal). Hepatomegali. Kaudat lob hipertrofisi. Doppler: Hepatik venlerde akım yokluğu veya ters akım. İntrahepatik kollateral venler. Asit.",
                "doppler": "Hepatik ven akımı yok veya ters. Kaudat lob venöz drenajı IVC'ye direkt olduğundan korunur."
            },
            "ct": {
                "non_contrast": "Hepatomegali. Kaudat lob hipertrofisi (ayrı venöz drenaj).",
                "contrast": "AKUT: Periferik hepatik kontrastlanma kaybı + santral (kaudat lob) korunmuş kontrastlanma ('flip-flop' patern). Hepatik venlerde dolum defekti. KRONİK: İntrahepatik kollateral venler ('spider web' patern). Kaudat lob belirgin hipertrofi. Nodüler rejeneratif hiperplazi."
            },
            "mri": {
                "t1": "Akut: Periferik karaciğer hipointens. Kaudat lob normal/hiperintens.",
                "t2": "Periferik konjesyon hiperintens. Hepatik venlerde akım void yokluğu (trombüs).",
                "t1_c": "Flip-flop enhancement: Erken faz periferik azalmış, geç faz periferik artmış kontrastlanma.",
                "dwi": "Akut konjesyon alanlarında kısıtlanma."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Hepatic vein thrombus (echogenic material). Hepatomegaly. Caudate lobe hypertrophy. Doppler: Absent or reversed flow in hepatic veins. Intrahepatic collateral veins. Ascites.",
                "doppler": "No or reversed hepatic vein flow. Caudate lobe preserved due to direct IVC drainage."
            },
            "ct": {
                "non_contrast": "Hepatomegaly. Caudate lobe hypertrophy (separate venous drainage).",
                "contrast": "ACUTE: Peripheral hepatic non-enhancement + central (caudate lobe) preserved enhancement ('flip-flop' pattern). Hepatic vein filling defects. CHRONIC: Intrahepatic collateral veins ('spider web' pattern). Caudate lobe marked hypertrophy. Nodular regenerative hyperplasia."
            },
            "mri": {
                "t1": "Acute: Peripheral liver hypointense. Caudate lobe normal/hyperintense.",
                "t2": "Peripheral congestion hyperintense. Absent flow void in hepatic veins (thrombus).",
                "t1_c": "Flip-flop enhancement: Early phase peripheral decreased, late phase peripheral increased.",
                "dwi": "Restriction in acute congestion areas."
            }
        },
        "keyPoints": [
            "Kaudat lob hipertrofisi: IVC'ye direkt drenaj → venöz konjesyondan korunur.",
            "Flip-flop patern: Erken fazda periferi karanlık/santral parlak, geç fazda tersi.",
            "'Spider web' kollateraller kronik Budd-Chiari'nin karakteristik bulgusudur.",
            "Akut karın + hepatomegali + asit + hepatik venlerde trombüs = Budd-Chiari."
        ],
        "keyPointsEn": [
            "Caudate lobe hypertrophy: Direct IVC drainage → protected from venous congestion.",
            "Flip-flop pattern: Early phase periphery dark/center bright, late phase reversed.",
            "'Spider web' collaterals are characteristic of chronic Budd-Chiari.",
            "Acute abdomen + hepatomegaly + ascites + hepatic vein thrombus = Budd-Chiari."
        ],
        "etiology": "Hiperkoagülabilite (myeloproliferatif hastalıklar, PNH, antifosfolipid sendromu, OKS, gebelik). Web/membran (Asya). İdiyopatik (%20).",
        "mechanism": "Hepatik ven veya IVC tıkanıklığı → hepatik venöz konjesyon → sinüzoidal basınç artışı → hepatosit nekrozu. Kaudat lob korunur (IVC'ye direkt drenaj).",
        "differentialDiagnosis": ["Konjestif hepatopati (sağ kalp yetmezliği, hepatik venler açık)", "VOD/SOS (sinüzoidal obstrüksiyon, KIT sonrası)", "Karaciğer sirozu (nodüler yüzey, hepatik ven trombozu yok)", "Hepatik ven web (membranöz obstrüksiyon)"],
        "goldStandard": "Doppler USG (ilk basamak) + Kontrastlı BT/MRI (konfirmasyon). DSA: TIPS planlaması için.",
        "clinicalPearl": "Akut karın + asit + hepatomegali + Doppler'da hepatik vende akım yok = Budd-Chiari. Kaudat lob hipertrofisi patognomonik.",
        "references": [
            "Defined approach in DeLeve LD et al. Hepatology. 2009;49(5):1729-1764.",
            "Radiopaedia.org - Budd-Chiari syndrome"
        ]
    },
    {
        "id": "simple_hepatic_cyst",
        "name": "Basit Hepatik Kist",
        "nameEn": "Simple Hepatic Cyst",
        "category": "Benign",
        "categoryEn": "Benign",
        "findings": {
            "ultrasound": {
                "description": "Anekoik, ince duvarlı, yuvarlak/oval lezyon. Posterior akustik güçlenme. İnternal eko yok. Septasyon yok. Solid komponent yok."
            },
            "ct": {
                "non_contrast": "Su dansitesinde (0-20 HU) homojen hipodens lezyon. İnce, düzgün duvar.",
                "contrast": "Kontrastlanma YOK (duvar veya içerik). Tüm fazlarda değişmeyen dansite."
            },
            "mri": {
                "t1": "Homojen HİPOİNTENS (su sinyali).",
                "t2": "Homojen ÇOK HİPERİNTENS ('ampul gibi parlak'). FLAIR: Suprese olur.",
                "t1_c": "Kontrastlanma YOK.",
                "dwi": "Kısıtlanma yok."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Anechoic, thin-walled, round/oval lesion. Posterior acoustic enhancement. No internal echoes. No septation. No solid component."
            },
            "ct": {
                "non_contrast": "Water density (0-20 HU) homogeneous hypodense lesion. Thin, smooth wall.",
                "contrast": "NO enhancement (wall or content). Unchanged density on all phases."
            },
            "mri": {
                "t1": "Homogeneous HYPOINTENSE (water signal).",
                "t2": "Homogeneous VERY HYPERINTENSE ('bright as a lightbulb'). FLAIR: Suppresses.",
                "t1_c": "NO enhancement.",
                "dwi": "No restriction."
            }
        },
        "keyPoints": [
            "Su dansitesi (0-20 HU) + kontrastlanma yok + ince duvar = Basit kist.",
            "USG: Anekoik + posterior güçlenme + ince duvar = Basit kist.",
            "Takip veya tedavi GEREKMEZBİLATERAL (asemptomatik ise).",
            "Komplike kist: Kanama, enfeksiyon → sinyal/dansite değişir."
        ],
        "keyPointsEn": [
            "Water density (0-20 HU) + no enhancement + thin wall = Simple cyst.",
            "USG: Anechoic + posterior enhancement + thin wall = Simple cyst.",
            "Follow-up or treatment NOT REQUIRED (if asymptomatic).",
            "Complicated cyst: Hemorrhage, infection → signal/density changes."
        ],
        "etiology": "Gelişimsel (biliyer mikro-hamartom artıkları). Prevalans: %2.5-18. Yaşla artar. Kadınlarda daha sık.",
        "mechanism": "Biliyer duktus artıkları → kistik dilatasyon → seröz sıvı birikimi. Biliyer sistemle bağlantısı yoktur.",
        "differentialDiagnosis": ["Hidatik kist (duvar kalsifikasyonu, kız veziküller)", "Biliyer kistadenom (septasyon, kontrastlanma)", "Kistik metastaz (düzensiz duvar, solid komponent)", "Abse (duvar kalın, klinik bulgular)"],
        "goldStandard": "USG genellikle yeterli. Atipik lezyonlarda MRI.",
        "clinicalPearl": "USG'de anekoik + posterior güçlenme + duvar yok = Basit kist, ileri tetkik gereksiz. İçerik yoğunluğu artmışsa veya duvar düzensizse komplike/neoplastik düşün.",
        "references": [
            "Defined approach in Defined. Abdominal imaging approach to cystic liver lesions.",
            "Radiopaedia.org - Simple hepatic cyst"
        ]
    },
    {
        "id": "portal_hypertension",
        "name": "Portal Hipertansiyon",
        "nameEn": "Portal Hypertension",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "ultrasound": {
                "description": "Portal ven çapı >13mm. Splenomegali (>13cm). Asit. Kollateral venler: Rekanalize umbilikal ven, gastrik varisler, splenorenal şant. Doppler: Portal vende akım hızı <16 cm/s. Hepatofugal akım (ileri evrede).",
                "doppler": "Portal ven akım hızı azalmış. İleri evrede hepatofugal (ters) akım. Umbilikal ven rekanalizasyonu."
            },
            "ct": {
                "non_contrast": "Portal ven dilatasyonu. Splenomegali. Asit.",
                "contrast": "Varisler: Gastroözofageal, splenorenal, retroperitoneal, rekanalize umbilikal ven (caput medusae). Splenomegali. Asit. Siroz bulguları: Nodüler karaciğer yüzeyi, kaudat/sol lob hipertrofisi, sağ lob atrofisi."
            },
            "mri": {
                "t1": "Splenomegali. Asit (T1 hipointens). Varisler: Flow void.",
                "t2": "Asit (T2 hiperintens). Varisler belirgin. Portal ven dilatasyonu."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Portal vein diameter >13mm. Splenomegaly (>13cm). Ascites. Collateral veins: Recanalized umbilical vein, gastric varices, splenorenal shunt. Doppler: Portal vein flow velocity <16 cm/s. Hepatofugal flow (advanced stage).",
                "doppler": "Decreased portal vein flow velocity. Hepatofugal (reversed) flow in advanced stage. Umbilical vein recanalization."
            },
            "ct": {
                "non_contrast": "Portal vein dilation. Splenomegaly. Ascites.",
                "contrast": "Varices: Gastroesophageal, splenorenal, retroperitoneal, recanalized umbilical vein (caput medusae). Splenomegaly. Ascites. Cirrhosis findings: Nodular liver surface, caudate/left lobe hypertrophy, right lobe atrophy."
            },
            "mri": {
                "t1": "Splenomegaly. Ascites (T1 hypointense). Varices: Flow void.",
                "t2": "Ascites (T2 hyperintense). Varices prominent. Portal vein dilation."
            }
        },
        "keyPoints": [
            "Portal ven >13mm + splenomegali + asit + varisler = Portal hipertansiyon.",
            "Doppler: Hepatofugal akım = İleri evre portal hipertansiyon.",
            "Rekanalize umbilikal ven (caput medusae) portal HT'ye özgü bulgu.",
            "Gastroözofageal varisler kanama riski: Varis çapı >5mm + kırmızı işaretler."
        ],
        "keyPointsEn": [
            "Portal vein >13mm + splenomegaly + ascites + varices = Portal hypertension.",
            "Doppler: Hepatofugal flow = Advanced portal hypertension.",
            "Recanalized umbilical vein (caput medusae) specific to portal HT.",
            "Gastroesophageal varices bleeding risk: Varix diameter >5mm + red signs."
        ],
        "etiology": "Prehepatik (portal/splenik ven trombozu), hepatik (siroz EN SIK, şistosomiyaz), posthepatik (Budd-Chiari, sağ kalp yetmezliği).",
        "mechanism": "İntrahepatik rezistans artışı (siroz) → portal venöz basınç >10-12 mmHg → portosistemik kollateral gelişimi + splenomegali + asit.",
        "differentialDiagnosis": ["Sağ kalp yetmezliği (IVC ve hepatik ven dilate)", "Portal ven trombozu (akut, dolum defekti)", "Budd-Chiari (hepatik ven trombozu)"],
        "goldStandard": "Doppler USG (ilk basamak). BT/MRI: Varis haritalaması ve siroz değerlendirmesi. HVPG (hepatik venöz basınç gradiyenti) >10 mmHg: Klinik anlamlı portal HT.",
        "clinicalPearl": "Siroz + portal ven >13mm + splenomegali + hepatofugal akım = Portal HT kesin. Gastroözofageal varisler acil kanama riski taşır.",
        "references": [
            "Defined approach in Garcia-Tsao G et al. Hepatology. 2017;65(1):310-335.",
            "Radiopaedia.org - Portal hypertension"
        ]
    },
    {
        "id": "primary_sclerosing_cholangitis",
        "name": "Primer Sklerozan Kolanjit (PSK)",
        "nameEn": "Primary Sclerosing Cholangitis (PSC)",
        "category": "İnflamatuvar",
        "categoryEn": "Inflammatory",
        "findings": {
            "ct": {
                "non_contrast": "Safra kanalı duvar kalınlaşması. Periportal ödem (halo).",
                "contrast": "Safra kanalı duvar kontrastlanması ve kalınlaşması. Segmental safra kanalı dilatasyonları ve darlıkları alternasyonu ('beaded' görünüm)."
            },
            "mri": {
                "t1": "Periportal T1 hipointens halo (ödem/fibrozis).",
                "t2": "MRCP: 'BONCUK DİZİSİ' (beaded appearance) = Multfokal striktür + dilatasyon alternasyonu. İntra ve ekstrahepatik safra kanallarında tutulum. Band benzeri striktürler. Safra kanalı duvar kalınlaşması.",
                "t1_c": "Safra kanalı duvarı kontrastlanması (aktif inflamasyon).",
                "dwi": "Aktif inflamasyonda kısıtlanma."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Bile duct wall thickening. Periportal edema (halo).",
                "contrast": "Bile duct wall enhancement and thickening. Alternating segmental bile duct dilations and strictures ('beaded' appearance)."
            },
            "mri": {
                "t1": "Periportal T1 hypointense halo (edema/fibrosis).",
                "t2": "MRCP: 'BEADED APPEARANCE' = Multifocal strictures + dilation alternation. Intra and extrahepatic bile duct involvement. Band-like strictures. Bile duct wall thickening.",
                "t1_c": "Bile duct wall enhancement (active inflammation).",
                "dwi": "Restriction in active inflammation."
            }
        },
        "keyPoints": [
            "MRCP: 'Boncuk dizisi' (beaded) = Multifokal striktür ve dilatasyon PATOGNOMONİK.",
            "İntra + ekstrahepatik safra kanalları birlikte tutulur (izole intrahepatik: küçük kanal PSK).",
            "İnflamatuvar barsak hastalığı (ÜK) ile güçlü ilişki (%70-80).",
            "Kolanjiokarsinom gelişme riski: %10-15 (ömür boyu)."
        ],
        "keyPointsEn": [
            "MRCP: 'Beaded' appearance = Multifocal strictures and dilations PATHOGNOMONIC.",
            "Intra + extrahepatic bile ducts involved together (isolated intrahepatic: small duct PSC).",
            "Strong association with IBD (UC) (70-80%).",
            "Cholangiocarcinoma risk: 10-15% (lifetime)."
        ],
        "etiology": "Otoimmün. Genetik yatkınlık + çevresel tetikleyiciler. HLA-B8, DR3 ilişkili. Erkeklerde daha sık.",
        "mechanism": "Biliyer kanal epiteli inflamasyonu → periduktüler fibrozis → multifokal striktür → biliyer staz → sekonder biliyer siroz.",
        "differentialDiagnosis": ["Kolanjiokarsinom (dominant striktür, CA 19-9 yüksek)", "IgG4 ilişkili kolanjit (uzun segment, IgG4 yüksek, steroid yanıtı)", "AIDS kolanjiopatisi (immünsuprese)", "Rekürren piyojenik kolanjit (Doğu Asya, taş)"],
        "goldStandard": "MRCP: Multifokal striktür ve dilatasyon (beaded). ERCP artık tanısal değil, terapötik. Biyopsi: Periduktüler 'onion skin' fibrozis.",
        "clinicalPearl": "Ülseratif kolit hastasında kaşıntı + ALP yüksekliği + MRCP'de boncuk dizisi = PSK. Dominant striktür varsa kolanjiokarsinom dışla.",
        "references": [
            "Defined approach in Defined. AASLD Practice Guidelines for PSC.",
            "Radiopaedia.org - Primary sclerosing cholangitis"
        ]
    },
    {
        "id": "hepatic_trauma",
        "name": "Hepatik Travma",
        "nameEn": "Hepatic Trauma",
        "category": "Travma",
        "categoryEn": "Trauma",
        "findings": {
            "ct": {
                "non_contrast": "Parankimal laserasyon (hipointens lineer alan). Subkapsüler/perihepatik hematom (hiperdens). Sentinal klot bulgusu.",
                "contrast": "AAST DERECELENDİRME: Grade I: Subkapsüler hematom <10%, kapsül yırtığı <1cm. Grade II: Hematom %10-50, laserasyon 1-3cm. Grade III: Hematom >%50 veya aktif kanama, laserasyon >3cm. Grade IV: Lob parankiminin %25-75 yıkımı. Grade V: Lob parankiminin >%75 yıkımı veya juxtahepatik venöz hasar. AKTİF KANAMA: Kontrast ekstravazasyonu. Vasküler yaralanma: Psödoanevrizma, AV fistül."
            },
            "mri": {
                "t1": "Hematom: Akut izointens, subakut hiperintens.",
                "t2": "Laserasyon hiperintens. Perihepatik sıvı."
            },
            "ultrasound": {
                "description": "FAST: Serbest sıvı (Morrison poşu, pelvis). Parankimal heterojenite (laserasyon/hematom). CEUS: Aktif kanama ve laserasyon detayı."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Parenchymal laceration (hypointense linear area). Subcapsular/perihepatic hematoma (hyperdense). Sentinel clot sign.",
                "contrast": "AAST GRADING: Grade I-V as above. ACTIVE BLEEDING: Contrast extravasation. Vascular injury: Pseudoaneurysm, AV fistula."
            },
            "mri": {
                "t1": "Hematoma: Acute isointense, subacute hyperintense.",
                "t2": "Laceration hyperintense. Perihepatic fluid."
            },
            "ultrasound": {
                "description": "FAST: Free fluid (Morrison pouch, pelvis). Parenchymal heterogeneity. CEUS: Active bleeding and laceration detail."
            }
        },
        "keyPoints": [
            "Kontrastlı BT travma değerlendirmesinde altın standart.",
            "Aktif kanama: Arteriyel fazda kontrast ekstravazasyonu → anjiyoembolizasyon.",
            "Grade I-III: Hemodinamik stabil → konservatif.",
            "Gecikmiş komplikasyonlar: Biliyer lezyon (bilioma), psödoanevrizma."
        ],
        "keyPointsEn": [
            "Contrast-enhanced CT is gold standard in trauma evaluation.",
            "Active bleeding: Contrast extravasation in arterial phase → angioembolization.",
            "Grade I-III: Hemodynamically stable → conservative.",
            "Delayed complications: Biliary injury (bilioma), pseudoaneurysm."
        ],
        "etiology": "Künt travma (motorlu araç kazası en sık). Penetran travma (bıçak, ateşli silah). Sağ lob en sık etkilenir.",
        "mechanism": "Künt kuvvet → parankimal kompresyon/deselerasyon → laserasyon, hematom, vasküler hasar.",
        "differentialDiagnosis": ["Spontan karaciğer rüptürü (HELLP sendromu, adenoma)", "Tümör rüptürü (HCC, adenom kanama)"],
        "goldStandard": "Çok fazlı kontrastlı BT: Laserasyon, hematom, aktif kanama ve vasküler hasar tespiti.",
        "clinicalPearl": "Künt travma + hemodinamik instabilite + FAST pozitif = Acil BT. Kontrast ekstravazasyonu = Aktif kanama → anjiyoembolizasyon veya cerrahi.",
        "references": [
            "Defined AAST Liver Injury Scale revision.",
            "Radiopaedia.org - Hepatic trauma"
        ]
    },
    {
        "id": "portal_vein_thrombosis",
        "name": "Portal Ven Trombozu",
        "nameEn": "Portal Vein Thrombosis",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "ultrasound": {
                "description": "Portal ven lümeninde ekojen materyal (trombüs). Doppler: Akım yokluğu veya parsiyel dolum defekti. Kavernöz transformasyon (kronik): Portal hilumda multipl küçük damarlar.",
                "doppler": "Portal vende akım yok (komplet) veya defektli (parsiyel). Tümör trombusu: İnternal arteryel akım (HCC)."
            },
            "ct": {
                "non_contrast": "Portal vende hiperdens trombüs (akut).",
                "contrast": "Portal vende dolum defekti. Kavernöz transformasyon (kronik): Portal hilumda serpentin kollateral damarlar. Barsak duvar ödemi (mezenterik konjesyon). Tümör vs bland trombüs: Tümör trombusu kontrastlanır, bland kontrastlanmaz."
            },
            "mri": {
                "t1": "Akut trombüs izointens. Subakut: T1 hiperintens (methemoglobin).",
                "t2": "Akut: Hipointens. Kronik: Kavernöz transformasyon flow voidleri."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Echogenic material in portal vein lumen (thrombus). Doppler: Absent flow or partial filling defect. Cavernous transformation (chronic): Multiple small vessels at portal hilum.",
                "doppler": "No flow in portal vein (complete) or defective (partial). Tumor thrombus: Internal arterial flow (HCC)."
            },
            "ct": {
                "non_contrast": "Hyperdense thrombus in portal vein (acute).",
                "contrast": "Filling defect in portal vein. Cavernous transformation (chronic): Serpentine collateral vessels at portal hilum. Bowel wall edema (mesenteric congestion). Tumor vs bland thrombus: Tumor thrombus enhances, bland does not."
            },
            "mri": {
                "t1": "Acute thrombus isointense. Subacute: T1 hyperintense.",
                "t2": "Acute: Hypointense. Chronic: Cavernous transformation flow voids."
            }
        },
        "keyPoints": [
            "Akut: Dolum defekti. Kronik: Kavernöz transformasyon (periportal kollateraller).",
            "Tümör vs bland trombüs ayırımı: Tümör trombusu arteriyel kontrastlanma gösterir.",
            "HCC'de portal ven tümör trombusu LI-RADS TIV (kesin tümör in vein).",
            "Siroz hastasında portal ven trombozu = Karaciğer transplant planlamasını etkiler."
        ],
        "keyPointsEn": [
            "Acute: Filling defect. Chronic: Cavernous transformation (periportal collaterals).",
            "Tumor vs bland thrombus: Tumor thrombus shows arterial enhancement.",
            "Portal vein tumor thrombus in HCC = LI-RADS TIV (definite tumor in vein).",
            "Portal vein thrombosis in cirrhosis = Affects liver transplant planning."
        ],
        "etiology": "Siroz (en sık), HCC (tümör trombusu), myeloproliferatif hastalıklar, pankreatit, abdominal enfeksiyon/cerrahi. Yenidoğan: Umbilikal kateterizasyon.",
        "mechanism": "Virchow triadı: Staz (siroz, portal HT) + endotel hasarı + hiperkoagülabilite → trombüs oluşumu.",
        "differentialDiagnosis": ["Tümör trombusu (HCC, kontrastlanır)", "Portal hipertansiyon (trombüs olmadan)", "SMV trombozu (barsak iskemisi)"],
        "goldStandard": "Doppler USG (ilk basamak). Kontrastlı BT/MRI: Trombüs uzanımı ve tümör/bland ayırımı.",
        "clinicalPearl": "Siroz + yeni asit + portal vende dolum defekti = PVT. Trombüs kontrastlanıyorsa HCC tümör trombusu düşün (LI-RADS TIV).",
        "references": [
            "Defined approach in DeLeve LD et al. Hepatology portal vein thrombosis guidelines.",
            "Radiopaedia.org - Portal vein thrombosis"
        ]
    },
    {
        "id": "caroli_disease",
        "name": "Caroli Hastalığı",
        "nameEn": "Caroli Disease",
        "category": "Konjenital",
        "categoryEn": "Congenital",
        "findings": {
            "ct": {
                "non_contrast": "İntrahepatik safra kanallarının multipl sakküler dilatasyonları. İntraluminal taşlar.",
                "contrast": "'CENTRAL DOT SIGN' (santral nokta işareti): Dilate safra kanalı içinde portal ven dalı → kontrastlanan santral nokta. PATOGNOMONİK. Fibröz karaciğer hastalığı eşlik edebilir (Caroli sendromu)."
            },
            "mri": {
                "t2": "MRCP: Multipl sakküler intrahepatik biliyer dilatasyonlar. Central dot sign (portal ven dalı intraluminal). Biliyer sistemle bağlantı doğrulanır.",
                "t1": "Dilate kanallar T1 hipointens.",
                "t1_c": "Central dot sign: Kontrastlanan portal ven dalı dilate kanal içinde."
            },
            "ultrasound": {
                "description": "İntrahepatik safra kanallarının sakküler dilatasyonları. Central dot sign (portal dalı kanal içinde). İntraduktal taşlar ve çamur."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Multiple saccular dilations of intrahepatic bile ducts. Intraluminal stones.",
                "contrast": "'CENTRAL DOT SIGN': Portal vein branch within dilated bile duct → enhancing central dot. PATHOGNOMONIC. Fibrous liver disease may accompany (Caroli syndrome)."
            },
            "mri": {
                "t2": "MRCP: Multiple saccular intrahepatic biliary dilations. Central dot sign. Biliary system connection confirmed.",
                "t1": "Dilated ducts T1 hypointense.",
                "t1_c": "Central dot sign: Enhancing portal vein branch within dilated duct."
            },
            "ultrasound": {
                "description": "Saccular dilations of intrahepatic bile ducts. Central dot sign. Intraductal stones and sludge."
            }
        },
        "keyPoints": [
            "Central dot sign PATOGNOMONİK: Dilate safra kanalı içinde kontrastlanan portal ven dalı.",
            "Caroli hastalığı (izole): Biliyer dilatasyon. Caroli sendromu: + konjenital hepatik fibrozis.",
            "Tekrarlayan kolanjit ve intrahepatik taş riski.",
            "Kolanjiokarsinom gelişme riski artmış (%7)."
        ],
        "keyPointsEn": [
            "Central dot sign PATHOGNOMONIC: Enhancing portal vein branch within dilated bile duct.",
            "Caroli disease (isolated): Biliary dilation. Caroli syndrome: + congenital hepatic fibrosis.",
            "Risk of recurrent cholangitis and intrahepatic stones.",
            "Increased cholangiocarcinoma risk (7%)."
        ],
        "etiology": "Konjenital (otozomal resesif). PKHD1 gen mutasyonu. Duktal plak malformasyonu → büyük intrahepatik safra kanallarının sakküler dilatasyonu.",
        "mechanism": "Duktal plak remodeling defekti → intrahepatik safra kanalları sakküler dilate → staz → taş oluşumu + enfeksiyon + malignite riski.",
        "differentialDiagnosis": ["Obstrüktif biliyer dilatasyon (proksimalde dilatasyon, distal darlık)", "Polikistik karaciğer hastalığı (biliyer sistemle bağlantısız)", "Primer sklerozan kolanjit (striktür + dilatasyon, edinsel)"],
        "goldStandard": "MRCP: Sakküler biliyer dilatasyonlar + central dot sign. BT: Central dot sign kontrastlı serilerde.",
        "clinicalPearl": "Genç hastada tekrarlayan kolanjit + intrahepatik sakküler biliyer dilatasyonlar + central dot sign = Caroli hastalığı.",
        "references": [
            "Defined approach in Defined. Caroli disease imaging review.",
            "Radiopaedia.org - Caroli disease"
        ]
    },
    {
        "id": "hepatic_angiosarcoma",
        "name": "Hepatik Anjiyosarkom",
        "nameEn": "Hepatic Angiosarcoma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "ct": {
                "non_contrast": "Multipl veya soliter hipodens kitle. İnternal kanama alanları (hiperdens).",
                "contrast": "Progresif SANTRAL kontrastlanma (hemanjiyoma benzer AMA düzensiz ve hızlı). Periferik progresif dolum. İnternal kanama alanları. Hızlı büyüme ve HEPATOMEGALİ."
            },
            "mri": {
                "t1": "Heterojen. Kanama alanları T1 hiperintens (methemoglobin).",
                "t2": "Heterojen hiperintens. Hemanjiyomdan farklı: Düzensiz kontrastlanma, kanama.",
                "t1_c": "İrregüler progresif kontrastlanma. Hemanjiyomdan ayırıcı: Daha hızlı ve düzensiz dolum."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Multiple or solitary hypodense mass. Internal hemorrhage areas (hyperdense).",
                "contrast": "Progressive CENTRAL enhancement (similar to hemangioma BUT irregular and rapid). Peripheral progressive filling. Internal hemorrhage areas."
            },
            "mri": {
                "t1": "Heterogeneous. Hemorrhage areas T1 hyperintense (methemoglobin).",
                "t2": "Heterogeneous hyperintense. Unlike hemangioma: Irregular enhancement, hemorrhage.",
                "t1_c": "Irregular progressive enhancement. Differentiates from hemangioma: Faster and irregular filling."
            }
        },
        "keyPoints": [
            "Karaciğerin en sık primer malign mezenkimal tümörü.",
            "Thorotrast, vinil klorür, arsenik maruziyeti = Risk faktörleri.",
            "Hemanjiyomdan ayırımı ZOR olabilir — düzensiz kontrastlanma ve kanama ipuçları.",
            "Prognoz çok kötü: Tanıda çoğu yaygın, medyan sağkalım <6 ay."
        ],
        "keyPointsEn": [
            "Most common primary malignant mesenchymal tumor of liver.",
            "Thorotrast, vinyl chloride, arsenic exposure = Risk factors.",
            "May be DIFFICULT to differentiate from hemangioma — irregular enhancement and hemorrhage are clues.",
            "Very poor prognosis: Most widespread at diagnosis, median survival <6 months."
        ],
        "etiology": "Thorotrast (eski kontrast maddesi), vinil klorür, arsenik, anabolik steroidler. İdiyopatik de olabilir.",
        "mechanism": "Hepatik sinüzoid endotel hücrelerinden kökenli malign tümör → vasküler yapılar oluşturur → hızlı büyüme ve metastaz.",
        "differentialDiagnosis": ["Hemanjiyom (düzgün progresif kontrastlanma, stabil)", "HCC (arteriyel wash-in/wash-out, AFP yüksek)", "Metastaz (primer odak bilinen)", "Epitheloid hemangioendotelyom (multifokal, daha yavaş)"],
        "goldStandard": "BT/MRI + Biyopsi (dikkatli — yüksek kanama riski). CD31, CD34 immünohistokimya.",
        "clinicalPearl": "Hızlı büyüyen heterojen hepatik kitle + düzensiz kontrastlanma + spontan kanama = Anjiyosarkom. Hemanjiyomdan farklı: Düzensiz, hızlı ve kanama.",
        "references": [
            "Defined approach in Defined. Hepatic angiosarcoma imaging.",
            "Radiopaedia.org - Hepatic angiosarcoma"
        ]
    },
    {
        "id": "hepatic_steatohepatitis",
        "name": "Non-alkolik Steatohepatit (NASH)",
        "nameEn": "Non-alcoholic Steatohepatitis (NASH)",
        "category": "Metabolik/İnflamatuvar",
        "categoryEn": "Metabolic/Inflammatory",
        "findings": {
            "ultrasound": {
                "description": "Artmış ekojenite ('parlak karaciğer'). Hepatorenal ekojenite farkı. Derin yapıların görüntülemesinde azalma. İntrahepatik vasküler yapıların silinmesi."
            },
            "ct": {
                "non_contrast": "Karaciğer attenüasyonu dalaktan <10 HU düşük (veya <40 HU mutlak). Fokal yağlanma veya fokal yağlanmadan korunmuş alanlar.",
                "contrast": "Steatoz spesifik kontrastlanma paterni göstermez. İnflamasyon bulguları indirekt."
            },
            "mri": {
                "t1": "In/out-of-phase (Dixon): Out-of-phase'de SİNYAL KAYBI = Yağ (steatoz). Yağ fraksiyonu hesaplanabilir (proton dansite yağ fraksiyonu - PDFF).",
                "t2": "Spesifik bulgu yok. MR elastografi: Fibrozis evrelemesi (kPa).",
                "other_sequences": "MR PDFF: Steatoz kantitatif ölçümü (%5'ten fazla = steatoz). MR Elastografi: Fibrozis derecesi (F0-F4). Bu iki yöntem birlikte NASH değerlendirmesinde altın standart."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Increased echogenicity ('bright liver'). Hepatorenal echogenicity difference. Decreased visualization of deep structures. Obscuration of intrahepatic vascular structures."
            },
            "ct": {
                "non_contrast": "Liver attenuation <10 HU lower than spleen (or <40 HU absolute). Focal fatty infiltration or focal fat sparing.",
                "contrast": "Steatosis doesn't show specific enhancement pattern. Inflammation findings indirect."
            },
            "mri": {
                "t1": "In/out-of-phase (Dixon): SIGNAL LOSS on out-of-phase = Fat (steatosis). Fat fraction calculable (proton density fat fraction - PDFF).",
                "t2": "No specific findings. MR elastography: Fibrosis staging (kPa).",
                "other_sequences": "MR PDFF: Quantitative steatosis measurement (>5% = steatosis). MR Elastography: Fibrosis grade (F0-F4). These two methods together are gold standard in NASH evaluation."
            }
        },
        "keyPoints": [
            "MR PDFF: Steatoz kantitatif ölçümü (>%5 = steatoz).",
            "MR Elastografi: Fibrozis evreleme (F ≥ 2 = Anlamlı fibrozis).",
            "In/out-of-phase sinyal kaybı yağı doğrular.",
            "NASH: NAFLD + inflamasyon + hepatosit hasarı (balonlaşma) → fibrozis → siroz."
        ],
        "keyPointsEn": [
            "MR PDFF: Quantitative steatosis measurement (>5% = steatosis).",
            "MR Elastography: Fibrosis staging (F ≥ 2 = Significant fibrosis).",
            "In/out-of-phase signal loss confirms fat.",
            "NASH: NAFLD + inflammation + hepatocyte injury (ballooning) → fibrosis → cirrhosis."
        ],
        "etiology": "Metabolik sendrom (obezite, DM tip 2, dislipidemi, hipertansiyon). Genetik yatkınlık (PNPLA3 polimorfizmi).",
        "mechanism": "NAFLD spektrumu: Basit steatoz → NASH (inflamasyon + balonlaşma) → fibrozis → siroz → HCC. 'İki vuruş' hipotezi: 1) Steatoz, 2) Oksidatif stres + inflamasyon.",
        "differentialDiagnosis": ["Alkolik hepatit (alkol öyküsü)", "Hemokromatozis (demir birikimi, T2* sinyal kaybı)", "Fokal yağlanma (psödolezyon)"],
        "goldStandard": "MR PDFF + MR Elastografi (non-invaziv). Biyopsi: Kesin NASH tanısı (NAS skoru ≥5).",
        "clinicalPearl": "Obez + DM + karaciğer yağlanması + transaminaz yüksekliği = NASH şüphesi. MR PDFF steatozu, MR elastografi fibrozu non-invaziv ölçer.",
        "references": [
            "Defined approach in Defined. AASLD NAFLD Practice Guidance.",
            "Radiopaedia.org - NASH"
        ]
    },
    {
        "id": "choledocholithiasis",
        "name": "Koledokolitiyazis",
        "nameEn": "Choledocholithiasis",
        "category": "Obstrüksiyon",
        "categoryEn": "Obstruction",
        "findings": {
            "ultrasound": {
                "description": "Koledok kanalı dilatasyonu (>6mm, kolesistektomi sonrası >10mm). İntraluminal hiperekoik yapı + akustik gölge. Distal koledok taşı USG ile zor görülebilir (barsak gazı). İntrahepatik safra kanalları dilate."
            },
            "ct": {
                "non_contrast": "Koledok içinde hiperdens taş (kalsiyum içerikli). İzodense taşlar (%20) zor görülür. Proksimal biliyer dilatasyon.",
                "contrast": "Taş çevresinde kontrast (target sign). Proksimal dilatasyon düzeyi."
            },
            "mri": {
                "t2": "MRCP: Koledok içinde HİPOİNTENS dolum defekti (taş). Proksimal biliyer dilatasyon. 'Meniscus sign': Taş çevresinde safra sıvısı menisküsü. MRCP altın standart non-invaziv yöntem.",
                "t1": "Taş: Değişken sinyal (kompozisyona bağlı)."
            }
        },
        "findingsEn": {
            "ultrasound": {
                "description": "Common bile duct dilation (>6mm, >10mm post-cholecystectomy). Intraluminal hyperechoic structure + acoustic shadow. Distal CBD stone may be difficult to see (bowel gas). Intrahepatic bile ducts dilated."
            },
            "ct": {
                "non_contrast": "Hyperdense stone in CBD (calcium-containing). Isodense stones (20%) difficult to see. Proximal biliary dilation.",
                "contrast": "Contrast around stone (target sign). Proximal dilation level."
            },
            "mri": {
                "t2": "MRCP: HYPOINTENSE filling defect in CBD (stone). Proximal biliary dilation. 'Meniscus sign': Bile fluid meniscus around stone. MRCP is gold standard non-invasive method.",
                "t1": "Stone: Variable signal (depends on composition)."
            }
        },
        "keyPoints": [
            "MRCP: Koledokta hipointens dolum defekti + proksimal dilatasyon = Koledokolitiyazis.",
            "USG: CBD >6mm + transaminaz/bilirubin yüksek = Ortak kanal taşı şüphesi.",
            "İzodense taşlar BT'de görülmeyebilir → MRCP daha duyarlı.",
            "Komplikasyonlar: Kolanjit (Charcot triadı), pankreatit."
        ],
        "keyPointsEn": [
            "MRCP: Hypointense filling defect in CBD + proximal dilation = Choledocholithiasis.",
            "USG: CBD >6mm + elevated transaminases/bilirubin = CBD stone suspicion.",
            "Isodense stones may be missed on CT → MRCP more sensitive.",
            "Complications: Cholangitis (Charcot triad), pancreatitis."
        ],
        "etiology": "Safra kesesi taşının migrasyonu (sekonder, en sık). Primer CBD taşı (staz, enfeksiyon — pigment taş).",
        "mechanism": "Safra taşı koledoka migrasyon → lümen obstrüksiyonu → safra stazı → biliyer dilatasyon → sarılık. Enfeksiyon eklenmesi → kolanjit.",
        "differentialDiagnosis": ["Koledok striktürü (düzgün daralma, PSK veya malign)", "Kolanjiokarsinom (düzensiz, kontrastlanan)", "Ampulla tümörü (distal obstrüksiyon, kontrastlanma)", "Mirizzi sendromu (safra kesesi taşı dıştan bası)"],
        "goldStandard": "MRCP: Non-invaziv, yüksek duyarlılık. ERCP: Tanı + terapötik (sfinkterotomi + taş çıkarma). USG: İlk basamak tarama.",
        "clinicalPearl": "Sarılık + dilate CBD + MRCP'de dolum defekti = Koledokolitiyazis. Ateş + sarılık + ağrı (Charcot triadı) = Kolanjit → acil ERCP.",
        "references": [
            "ASGE Standards of Practice: Role of endoscopy in biliary stone disease.",
            "Radiopaedia.org - Choledocholithiasis"
        ]
    },
    {
        "id": "peliosis_hepatis",
        "name": "Peliyozis Hepatis",
        "nameEn": "Peliosis Hepatis",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "ct": {
                "non_contrast": "Multipl hipodens lezyonlar (kanla dolu boşluklar). Akut kanama: Hiperdens alanlar.",
                "contrast": "Erken fazda SENTRİPETAL kontrastlanma (hemanjiyoma benzer AMA düzensiz). Geç fazda izointens hale gelir. Lezyonlar genellikle <1cm, multipl."
            },
            "mri": {
                "t1": "Hipointens lezyonlar. Kanama varsa hiperintens.",
                "t2": "Hiperintens lezyonlar (kan dolu laküner boşluklar).",
                "t1_c": "Progresif kontrastlanma (hemanjiyom benzeri). Geç fazda homojenleşir."
            },
            "ultrasound": {
                "description": "Multipl hipoekoik veya hiperekoik nodüller. Değişken ekojenite (içerik ve zamana göre). Doppler: Minimal vaskülarite."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Multiple hypodense lesions (blood-filled spaces). Acute hemorrhage: Hyperdense areas.",
                "contrast": "Early phase CENTRIPETAL enhancement (similar to hemangioma BUT irregular). Becomes isointense in late phase. Lesions generally <1cm, multiple."
            },
            "mri": {
                "t1": "Hypointense lesions. Hyperintense if hemorrhage.",
                "t2": "Hyperintense lesions (blood-filled lacunar spaces).",
                "t1_c": "Progressive enhancement (hemangioma-like). Homogenizes in late phase."
            },
            "ultrasound": {
                "description": "Multiple hypoechoic or hyperechoic nodules. Variable echogenicity. Doppler: Minimal vascularity."
            }
        },
        "keyPoints": [
            "Multipl küçük kanla dolu laküner boşluklar (sinüzoidal dilatasyon).",
            "Anabolik steroid, OKS, azatiyoprin, Bartonella (HIV) ile ilişkili.",
            "Hemanjiyoma benzer kontrastlanma — ayırım zor olabilir.",
            "Spontan rüptür ve kanama riski: Hayatı tehdit edici."
        ],
        "keyPointsEn": [
            "Multiple small blood-filled lacunar spaces (sinusoidal dilation).",
            "Associated with anabolic steroids, OCP, azathioprine, Bartonella (HIV).",
            "Enhancement similar to hemangioma — differentiation may be difficult.",
            "Spontaneous rupture and hemorrhage risk: Life-threatening."
        ],
        "etiology": "İlaç (anabolik steroidler, OKS, azatiyoprin, tamoksifen). Enfeksiyon (Bartonella henselae — HIV). Hematolojik maligniteler. Organ transplantasyonu.",
        "mechanism": "Sinüzoidal endotel hasarı → sinüzoidal dilatasyon → kanla dolu laküner boşluklar → hepatik parankimde multipl kistik lezyonlar.",
        "differentialDiagnosis": ["Hemanjiyom (soliter, klasik kontrastlanma)", "Metastaz (multipl, heterojen)", "Hepatik abse (ateş, rim kontrastlanma)", "Hepatosellüler adenom (soliter, yağ/kanama)"],
        "goldStandard": "BT/MRI: Multipl küçük lezyonlar + progresif kontrastlanma. Biyopsi dikkatli (kanama riski). Kesin tanı histopatoloji.",
        "clinicalPearl": "Anabolik steroid/OKS kullanan + multipl küçük hepatik lezyonlar + hemanjiyom benzeri kontrastlanma = Peliyozis. İlaç kesilmesi ile regresyon olabilir.",
        "references": [
            "Defined approach in Defined. Peliosis hepatis imaging review.",
            "Radiopaedia.org - Peliosis hepatis"
        ]
    }
];
