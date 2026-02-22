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
        ]
    }
];
