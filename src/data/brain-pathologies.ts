import { Pathology } from '@/types';

export const brainPathologies: Pathology[] = [
    {
        "id": "acute_ischemic_stroke",
        "name": "Akut İskemik İnme (Acute Ischemic Stroke)",
        "category": "Vasküler",
        "gallery": [
            { "url": "/images/real_ct_stroke.png", "caption": "BT (Non-Contrast)", "modality": "CT" },
            { "url": "/images/real_mri_stroke.png", "caption": "DWI (Difüzyon)", "modality": "MRI" },
            { "url": "/images/mri_stroke_adc.png", "caption": "ADC Haritası", "modality": "MRI" },
            { "url": "/images/mri_stroke_flair.png", "caption": "T2 FLAIR", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "İlk saatlerde (<6s) genellikle normal. Erken bulgular: Hiperdens MCA işareti (trombus), İnsular ribbon (şerit) kaybı, Gri-beyaz cevher ayrımının silinmesi (lentiform nükleus kararması). Geç dönem (>6s): Hipodansite (sitotoksik ödem) ve kitle etkisi.",
                "cta": "Damar oklüzyonu (kesilme/cutoff işareti), distal damarlarda dolum defekti, kollateral durumun değerlendirilmesi.",
                "ct_perfusion": "İnfarkt çekirdeği (Core): Düşük CBV, Düşük CBF. Penumbra (Kurtarılabilir alan): Normal/Yüksek CBV, Düşük CBF, Artmış MTT/Tmax."
            },
            "mri": {
                "t1": "İzointens (erken), Hipointens (kronik). Parankimal şişme.",
                "t2_flair": "Hiperakut fazda normal olabilir. >6-12 saat sonra hiperintens sinyal gelişir. 2-3. haftada 'Fogging effect' (sislenme) nedeniyle lezyon izointens görünebilir.",
                "dwi": "Belirgin Hiperintensite (Difüzyon kısıtlılığı - Restricted Diffusion) - En duyarlı erken bulgu (dakikalar içinde).",
                "adc": "Hipointens (gerçek kısıtlamayı doğrular). ~2. haftada normalleşir (yalancı normalleşme).",
                "t1_c": "İntravasküler kontrastlanma (erken/subakut - 1-3 gün). Parankimal kontrastlanma (subakut - günler/haftalar, 'luxury perfusion').",
                "swi": "Hemorajik transformasyon veya trombus içinde 'blooming' artefaktı (susceptibility vessel sign)."
            }
        },
        "mechanism": "Sitotoksik ödem (hücre şişmesi) nedeniyle su moleküllerinin hareketi kısıtlanır (DWI Parlak). Kan-beyin bariyeri yıkılınca vazojenik ödem ve kontrastlanma başlar.",
        "keyPoints": [
            "DWI, erken tanı ve iskemi ayırımı için altın standarttır.",
            "BT, beyin kanamasını (hemorajiyi) dışlamak için ilk tercihtir.",
            "ASPECTS skoru, MCA infarktlarında iskemik alanın yaygınlığını değerlendirmek için kullanılır.",
            "Zaman beyindir: Tromboliz penceresi <4.5 saat, Trombektomi <24 saat (seçilmiş vakalarda)."
        ],
        "nameEn": "Acute Ischemic Stroke",
        "categoryEn": "Vascular",
        "findingsEn": {
            "ct": {
                "non_contrast": "Usually normal in first hours (<6h). Early signs: Hyperdense MCA sign (thrombus), Loss of insular ribbon, Loss of gray-white matter differentiation (obscuration of lentiform nucleus). Late (>6h): Hypodensity (cytotoxic edema) and mass effect.",
                "cta": "Vessel occlusion (cutoff sign), filling defect in distal vessels, evaluation of collaterals.",
                "ct_perfusion": "Infarct Core: Low CBV, Low CBF. Penumbra (Salvageable tissue): Normal/High CBV, Low CBF, Increased MTT/Tmax."
            },
            "mri": {
                "t1": "Isointense (early), Hypointense (chronic). Parenchymal swelling.",
                "t2_flair": "May be normal in hyperacute phase. Hyperintense signal develops >6-12 hours. Lesion may appear isointense at 2-3 weeks due to 'Fogging effect'.",
                "dwi": "Marked Hyperintensity (Restricted Diffusion) - Most sensitive early sign (within minutes).",
                "adc": "Hypointense (confirms true restriction). Normalizes around 2 weeks (pseudonormalization).",
                "t1_c": "Intravascular enhancement (early/subacute - 1-3 days). Parenchymal enhancement (subacute - days/weeks, 'luxury perfusion').",
                "swi": "Blooming artifact in hemorrhagic transformation or thrombus (susceptibility vessel sign)."
            }
        },
        "keyPointsEn": [
            "DWI is the gold standard for early diagnosis and differentiation of ischemia.",
            "CT is the first choice to exclude hemorrhage.",
            "ASPECTS score is used to assess the extent of ischemic area in MCA infarcts.",
            "Time is brain: Thrombolysis window <4.5 hours, Thrombectomy <24 hours (in selected cases)."
        ],
        "etiology": "Kardiyoembolik (%30): AF, Endokardit. Büyük damar ateroskleroz (%25). Küçük damar hastalığı (laküner, %25). Kriptojenik (%20). CADASIL, Vaskülit (Nadir).",
        "differentialDiagnosis": ["Beyin Tümörü (Subakut başlangıç, kitle etkisi, kontrast tutulumu)", "MS Plakı (Genç hasta, ovoid periventriküler lezyonlar)", "Beyin Apsesi (DWI pozitif ama klinik farklı: ateş)", "Hemiplejik Migren (Geri dönüşümlü, MR geçici bulgu)"],
        "goldStandard": "MRI DWI/ADC: Akut infarkt (DWI parlak/ADC karanlık). BT: İlk değerlendirme (kanama ekle). BT anjiyografi: Büyük damar oklüzyonu (LVO) tespiti.",
        "clinicalPearl": "DWI parlak + ADC karanlık = Akut iskemi (İlk dakikalardan itibaren pozitif). BT ilk 6 saatte normal olabilir, DWI asla.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases-Stroke. American College of Radiology; 2021.",
            "Radiopaedia.org - Acute Ischemic Stroke",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "glioblastoma",
        "name": "Glioblastom (GBM - IDH-wildtype)",
        "category": "Neoplastik",
        "gallery": [
            { "url": "/images/real_ct_gbm.png", "caption": "BT (Kontrastlı)", "modality": "CT" },
            { "url": "/images/real_mri_gbm.png", "caption": "T1+C (Aksiyel)", "modality": "MRI" },
            { "url": "/images/mri_gbm_flair.png", "caption": "T2 FLAIR", "modality": "MRI" },
            { "url": "/images/mri_gbm_coronal.png", "caption": "T1+C (Koronal)", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Merkezi heterojenite (nekroz) içeren düzensiz hipodens kitle. Belirgin kitle etkisi ve vazojenik ödem.",
                "contrast": "Düzensiz, kalın, nodüler tarzda periferik (halka) kontrastlanma. Merkezi nekrotik alan kontrast tutmaz."
            },
            "mri": {
                "t1": "Hipointens, heterojen kitle. Kanama alanları hiperintens olabilir.",
                "t2_flair": "Heterojen hiperintensite. Çevresel geniş vazojenik ödem ('eldiven parmağı' görünümü), korpus kallozum tutulumu.",
                "t1_c": "Kalın, düzensiz, nodüler periferik rim (halka) tarzı kontrastlanma. Santral nekroz.",
                "dwi": "Değişken. Sellüler (hücresel) komponentlerde kısıtlanma olabilir. Nekrotik alanlarda difüzyon kolaylaşmıştır.",
                "perfusion": "Kontrastlanan komponentlerde yüksek rCBV (neoanjiyogenez).",
                "spectroscopy": "Yüksek Kolin (hücre yıkımı/turnover), Düşük NAA (nöronal kayıp), Lipid/Laktat piki (nekroz)."
            }
        },
        "mechanism": "Hızlı, infiltratif tümör büyümesi ve santral nekroz. 'Palizadik nekroz' çevresindeki canlı tümör hücreleri yoğun kontrast tutar (Ring Enhancement).",
        "keyPoints": [
            "Erişkinlerde en sık görülen primer malign beyin tümörüdür.",
            "Orta hattı geçme eğilimindedir (Kelebek / Butterfly glioma).",
            "WHO 2021 sınıflamasına göre moleküler tanımı IDH-wildtype'tır."
        ],
        "nameEn": "Glioblastoma (GBM - IDH-wildtype)",
        "categoryEn": "Neoplastic",
        "findingsEn": {
            "ct": {
                "non_contrast": "Irregular hypodense mass containing central heterogeneity (necrosis). Significant mass effect and vasogenic edema.",
                "contrast": "Irregular, thick, nodular peripheral (ring) enhancement. Central necrotic area does not enhance."
            },
            "mri": {
                "t1": "Hypointense, heterogeneous mass. Hemorrhagic areas may be hyperintense.",
                "t2_flair": "Heterogeneous hyperintensity. Extensive surrounding vasogenic edema ('finger-like' appearance), corpus callosum involvement.",
                "t1_c": "Thick, irregular, nodular peripheral rim enhancement. Central necrosis.",
                "dwi": "Variable. Restriction may occur in cellular components. Diffusion is facilitated in necrotic areas.",
                "perfusion": "High rCBV in enhancing components (neoangiogenesis).",
                "spectroscopy": "High Choline (cell destruction/turnover), Low NAA (neuronal loss), Lipid/Lactate peak (necrosis)."
            }
        },
        "keyPointsEn": [
            "Most common primary malignant brain tumor in adults.",
            "Tends to cross the midline (Butterfly glioma).",
            "Molecular definition according to WHO 2021 is IDH-wildtype."
        ],
        "etiology": "Sporadik (%90+), Radyasyon maruziyeti, NF1/NF2 (Pediatrik GBM). WHO 2021: IDH-wildtype, TERT promoter mutasyonu, EGFR amplifikasyonu.",
        "differentialDiagnosis": ["Beyin Metastazı (Multipl, gri-beyaz madde bileşkesi, bilinen primer)", "Primer CNS Lenfoma (Santral derin yerleşim, üniform kontrastlanma)", "Anaplastik Astrositom (IDH mutant, daha az nekroz)", "Beyin Apses (DWI merkezi kısıtlanma, ateş)"],
        "goldStandard": "MRI T1+C + FLAIR + DWI + Perfüzyon + Spektroskopi. Stereotaktik biyopsi: Moleküler tanı için.",
        "clinicalPearl": "Rim (çevresel) kontrastlanma + Merkezi nekroz + FLAIR ödem + Kelebek patern (korpus kallozum invazyonu) = GBM klasik triadı.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Intracranial Neoplasms. American College of Radiology; 2020.",
            "Radiopaedia.org - Glioblastoma (IDH-wildtype)",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "meningioma",
        "name": "Meningiom (Meningioma)",
        "category": "Neoplastik",
        "gallery": [
            { "url": "/images/mri_meningioma_t1c.png", "caption": "T1+C (Dural Kuyruk)", "modality": "MRI" },
            { "url": "/images/mri_meningioma_t2.png", "caption": "T2 (BOS Cleft)", "modality": "MRI" },
            { "url": "/images/ct_meningioma.png", "caption": "BT (Kalsifikasyon)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Ekstra-aksiyal, genellikle hiperdens (%70-75) veya izodens kitle. Kalsifikasyon sıktır (%20-25). Komşu kemikte hiperostozis.",
                "contrast": "Yoğun, homojen kontrastlanma."
            },
            "mri": {
                "t1": "Gri cevhere göre izointens veya hipointens.",
                "t2": "İzointens veya hiperintens. 'CSF cleft sign' (beyin parankimi ile tümör arasında BOS mesafesi).",
                "t1_c": "Yoğun, homojen kontrastlanma. 'Dural tail' (dural kuyruk) işareti (komşu durada kalınlaşma/kontrastlanma).",
                "adc": "Genellikle difüzyon kolaylaşmıştır, ancak atipik/malign tiplerde kısıtlanma (restriksiyon) görülebilir.",
                "spectroscopy": "Alanin piki (ayırt edici özellik), Yüksek Kolin."
            }
        },
        "mechanism": "Ekstra-aksiyal, meninkslerden köken alan yavaş büyüyen tümör. 'Dural kuyruk' reaktif vaskülarizasyon veya tümör infiltrasyonu nedeniyle oluşur.",
        "keyPoints": [
            "En sık görülen ekstra-aksiyal tümördür.",
            "Kadınlarda daha sıktır.",
            "'Dural kuyruk' ve 'BOS yarığı' (CSF cleft) klasik bulgulardır."
        ],
        "nameEn": "Meningioma",
        "categoryEn": "Neoplastic",
        "findingsEn": {
            "ct": {
                "non_contrast": "Extra-axial, usually hyperdense (70-75%) or isodense mass. Calcification is common (20-25%). Hyperostosis in adjacent bone.",
                "contrast": "Intense, homogenous enhancement."
            },
            "mri": {
                "t1": "Isointense or hypointense relative to gray matter.",
                "t2": "Isointense or hyperintense. 'CSF cleft sign' (CSF space between brain parenchyma and tumor).",
                "t1_c": "Intense, homogenous enhancement. 'Dural tail' sign (thickening/enhancement of adjacent dura).",
                "adc": "Usually facilitated diffusion, but restriction may be seen in atypical/malignant types.",
                "spectroscopy": "Alanine peak (distinguishing feature), High Choline."
            }
        },
        "keyPointsEn": [
            "Most common extra-axial tumor.",
            "More common in women.",
            "'Dural tail' and 'CSF cleft' are classic signs."
        ],
        "etiology": "Araknoid hücre kökenli. Radyasyon (iyonizan), NF2 mutasyonu (bilateral = NF2). Kadınlarda 2:1. Progesteron reseptörü pozitifliği büyümeyi etkiler.",
        "differentialDiagnosis": ["Dural Metastaz (İrregüler sınır, agresif yıkım, bilinen primer)", "Schwannom (Sinir kökenli, foramen genişlemesi, dumbbell)", "Hemanjiyoperisitom (Seri yenidenme, kemik yıkım)", "Lenfoma (Dural plak, uniform kontrast, BOS tutulumu)"],
        "goldStandard": "MRI T1+C: Homojen yoğun kontrastlanma + Dural tail. BT: Hiperostoz veya kemik yıkım değerlendirmesi.",
        "clinicalPearl": "Dural tail + BOS yarığı (CSF cleft) + Homojen kontrastlanma + Ekstra-aksiyel = Menenjiyom. Kadın + Konveksite yerleşimi en sık.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Intracranial Neoplasms. American College of Radiology; 2020.",
            "Radiopaedia.org - Meningioma",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "multiple_sclerosis",
        "name": "Multipl Skleroz (MS)",
        "nameEn": "Multiple Sclerosis (MS)",
        "category": "Demiyelinizan",
        "categoryEn": "Demyelinating",
        "gallery": [
            { "url": "/images/mri_ms_sagittal.png", "caption": "Sagittal (Dawson)", "modality": "MRI" },
            { "url": "/images/mri_ms_axial.png", "caption": "Axial FLAIR", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Duyarlılığı düşüktür. Beyaz cevherde non-spesifik hipodansiteler. İleri evrede atrofi."
            },
            "mri": {
                "t2_flair": "Ventriküllere dik yerleşimli (perpendiküler) multipl hiperintens ovoid lezyonlar. Yerleşim: Periventriküler (Dawson parmakları), Jukstakortikal/Kortikal, İnfratentoryal, Spinal kord.",
                "t1": "İzointens veya Hipointens ('Kara delikler' / Black holes = geri dönüşümsüz aksonal hasar).",
                "t1_c": "Açık halka şeklinde (open-ring) kontrastlanma aktif demiyelinizasyonu gösterir.",
                "swi": "Santral ven işareti (lezyonun içinden geçen ven), mikrovasküler hastalıktan ayırmada yardımcıdır."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Low sensitivity. Non-specific hypodensities in white matter. Atrophy in advanced stages."
            },
            "mri": {
                "t2_flair": "Multiple hyperintense ovoid lesions perpendicular to ventricles. Location: Periventricular (Dawson's fingers), Juxtacortical/Cortical, Infratentorial, Spinal cord.",
                "t1": "Isointense or Hypointense ('Black holes' = irreversible axonal damage).",
                "t1_c": "Open-ring enhancement indicates active demyelination.",
                "swi": "Central vein sign (vein passing through lesion) helps differentiate from microvascular disease."
            }
        },
        "mechanism": "Otoimmün T-hücre aracılı miyelin kılıf hasarı. Kan-beyin bariyeri (BBB) bozulduğunda akut plaklarda kontrastlanma görülür.",
        "keyPoints": [
            "Zamanda (DIT) ve Mekanda (DIS) yayılım.",
            "Tanı için McDonald Kriterleri kullanılır.",
            "Lezyonlar arasında normal beyaz cevher bulunur."
        ],
        "keyPointsEn": [
            "Dissemination in Time (DIT) and Space (DIS).",
            "McDonald Criteria used for diagnosis.",
            "Normal white matter exists between lesions."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Multiple Sclerosis. American College of Radiology; 2019.",
            "Radiopaedia.org - Multiple Sclerosis",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "subdural_hematoma",
        "name": "Subdural Hematom (SDH)",
        "nameEn": "Subdural Hematoma (SDH)",
        "category": "Travma",
        "categoryEn": "Trauma",
        "gallery": [
            { "url": "/images/ct_sdh.png", "caption": "BT (Akut Hilal)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Hilal (yarım ay) şeklinde. Dural refleksiyonları (falks/tentoryum) GEÇMEZ, sütürleri GEÇER. Akut (<3 gün): Hiperdens. Subakut (3gün-3hafta): İzodens (gözden kaçabilir - kitle etkisine dikkat). Kronik (>3 hafta): Hipodens.",
                "contrast": "Kronik SDH'de membranlarda kontrastlanma. Kortikal damarlarda itilme."
            },
            "mri": {
                "t1": "Akut: İzointens. Subakut (erken): Hiperintens (Met-Hb). Kronik: Hipointens.",
                "t2": "Akut: Hipointens. Subakut: Hiperintens. Kronik: Hiperintens. Akut-üzerine-kronik kanamalarda 'Hematokrit etkisi' (seviyelemesı)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Crescent shaped. Does NOT cross dural reflections (falx/tentorium), DOES cross sutures. Acute (<3 days): Hyperdense. Subacute (3d-3w): Isodense (may be missed - look for mass effect). Chronic (>3 weeks): Hypodense.",
                "contrast": "Enhancement of membranes in chronic SDH. Cortical vein displacement."
            },
            "mri": {
                "t1": "Acute: Isointense. Subacute (early): Hyperintense (Met-Hb). Chronic: Hypointense.",
                "t2": "Acute: Hypointense. Subacute: Hyperintense. Chronic: Hyperintense. 'Hematocrit effect' (fluid-fluid level) in acute-on-chronic hemorrhage."
            }
        },
        "keyPoints": [
            "Venöz kaynaklıdır (köprü venleri).",
            "Yaşlılarda ve alkoliklerde (atrofi nedeniyle venler gerildiği için) sıktır.",
            "Akut-üzerine-kronik SDH: BT'de miks (karışık) dansite."
        ],
        "keyPointsEn": [
            "Venous origin (bridging veins).",
            "Common in elderly and alcoholics (due to atrophy stretching veins).",
            "Acute-on-chronic SDH: Mixed density on CT."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Head Trauma. American College of Radiology; 2020.",
            "Radiopaedia.org - Subdural Hematoma",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "epidural_hematoma",
        "name": "Epidural Hematom (EDH)",
        "nameEn": "Epidural Hematoma (EDH)",
        "category": "Travma",
        "categoryEn": "Trauma",
        "gallery": [
            { "url": "/images/ct_edh.png", "caption": "BT (Lens/Bikonveks)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Bikonveks (lens) şeklinde. Dural refleksiyonları (falks) GEÇER, sütürleri GEÇMEZ (kırık hattı yoksa). Heterojen 'swirl' (girdap) işareti aktif kanamayı gösterir.",
                "bone_window": "Vakaların %85-95'inde eşlik eden kafatası kırığı vardır."
            },
            "mri": {
                "t1": "İzointens (akut).",
                "t2": "Deoksihemoglobin nedeniyle hipointens (akut).",
                "swi": "Blooming artefaktı."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Biconvex (lens) shaped. Crosses dural reflections (falx), DOES NOT cross sutures (unless fractured). Heterogeneous 'swirl' sign indicates active bleeding.",
                "bone_window": "Skull fracture associated in 85-95% of cases."
            },
            "mri": {
                "t1": "Isointense (acute).",
                "t2": "Hypointense due to deoxyhemoglobin (acute).",
                "swi": "Blooming artifact."
            }
        },
        "keyPoints": [
            "Arteriyel kaynaklıdır (Genellikle A. Meningea Media).",
            "Lucid interval (bilincin açılıp tekrar kapanması) klasik ama her zaman görülmez.",
            "Belirgin kitle etkisi varsa nöroşirürjik acildir."
        ],
        "keyPointsEn": [
            "Arterial origin (Usually Middle Meningeal Artery).",
            "Lucid interval (regaining consciousness then deteriorating) is classic but not always present.",
            "Neurosurgical emergency if significant mass effect."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Head Trauma. American College of Radiology; 2020.",
            "Radiopaedia.org - Epidural Hematoma",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "subarachnoid_hemorrhage",
        "name": "Subaraknoid Kanama (SAK)",
        "nameEn": "Subarachnoid Hemorrhage (SAH)",
        "category": "Travma/Vasküler",
        "categoryEn": "Trauma/Vascular",
        "gallery": [
            { "url": "/images/ct_sah.png", "caption": "BT (Yıldız Belirtisi)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Subaraknoid mesafelerde (sisternalar, sulkuslar, fissürler) hiperdansite. Bazal sisternalarda 'Deniz yıldızı' görünümü.",
                "cta": "Etiyolojideki anevrizmayı (Berry anevrizması) saptamak için gereklidir."
            },
            "mri": {
                "t2_flair": "Sulkuslarda hiperintens sinyal ('Kirli BOS' görünümü - çok duyarlıdır).",
                "swi": "Sulkuslarda blooming artefaktı.",
                "t1": "Akut dönemde genellikle yüksek sinyal vermez."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Hyperdensity in subarachnoid spaces (cisterns, sulci, fissures). 'Starfish' appearance in basal cisterns.",
                "cta": "Required to detect underlying aneurysm (Berry aneurysm)."
            },
            "mri": {
                "t2_flair": "Hyperintense signal in sulci ('Dirty CSF' appearance - very sensitive).",
                "swi": "Blooming artifact in sulci.",
                "t1": "Usually no high signal in acute phase."
            }
        },
        "keyPoints": [
            "Ani başlayan şiddetli baş ağrısı ('Hayatımın en kötü ağrısı').",
            "En sık neden travmadır; travma dışı en sık neden anevrizma rüptürüdür.",
            "Komplikasyonlar: Vazospazm, Hidrosefali."
        ],
        "keyPointsEn": [
            "Sudden onset severe headache ('Worst headache of my life').",
            "Most common cause is trauma; non-traumatic cause is aneurysm rupture.",
            "Complications: Vasospasm, Hydrocephalus."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases-Stroke. American College of Radiology; 2021.",
            "Radiopaedia.org - Subarachnoid Hemorrhage",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "cerebral_abscess",
        "name": "Serebral Apse",
        "nameEn": "Cerebral Abscess",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
        "findings": {
            "ct": {
                "non_contrast": "Hipodens merkez, izodens/hafif hiperdens kapsül, çevresinde geniş ödem.",
                "contrast": "İnce, düzgün, pürüzsüz halka şeklinde kontrastlanma."
            },
            "mri": {
                "t1": "Merkez hipointens, kapsül izointens.",
                "t2": "Merkez hiperintens, kapsül hipointens.",
                "dwi": "Merkezi kesimde Belirgin Kısıtlanma (Hiperintens) - Püy içeriği nedeniyle.",
                "adc": "Hipointens.",
                "t2_flair": "Geniş vazojenik ödem.",
                "swi": "Çift halka işareti (dual rim sign) - dışta hipointens, içte hiperintens."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Hypodense center, isodense/slightly hyperdense capsule, extensive surrounding edema.",
                "contrast": "Thin, smooth, uniform ring enhancement."
            },
            "mri": {
                "t1": "Hypointense center, isointense capsule.",
                "t2": "Hyperintense center, hypointense capsule.",
                "dwi": "Marked Restriction (Hyperintense) centrally - Due to pus content.",
                "adc": "Hypointense.",
                "t2_flair": "Extensive vasogenic edema.",
                "swi": "Dual rim sign - hypointense outer, hyperintense inner."
            }
        },
        "keyPoints": [
            "Halka kontrastlanan lezyon ayırıcı tanısı: 'MAGICAL DR' (Metastaz, Apse, GBM, İnfarkt, Kontüzyon, AIDS, Lenfoma, Demiyelinizasyon, Radyasyon).",
            "Difüzyon kısıtlığı (DWI), nekrotik tümörlerden (genellikle kolaylaşmıştır) ayırt etmede kilit rol oynar."
        ],
        "keyPointsEn": [
            "Ring enhancing lesion DDx: 'MAGICAL DR' (Metastasis, Abscess, GBM, Infarct, Contusion, AIDS, Lymphoma, Demyelination, Radiation).",
            "Restricted diffusion (DWI) is key to differentiate from necrotic tumors (usually facilitated)."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Focal Neurologic Deficit. American College of Radiology; 2020.",
            "Radiopaedia.org - Cerebral Abscess",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "vestibular_schwannoma",
        "name": "Vestibüler Schwannom (Akustik Nörinom)",
        "nameEn": "Vestibular Schwannoma (Acoustic Neuroma)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "ct": {
                "non_contrast": "Serebellopontin köşe (CPA) sisternasında izo/hipodens kitle. İç Kulak Yolu (IAC) genişlemesi.",
                "contrast": "Kontrastlanır."
            },
            "mri": {
                "t1": "İzointens veya hipointens.",
                "t2": "Heterojen hiperintens. Eşlik eden araknoid kistler olabilir.",
                "t1_c": "Yoğun kontrastlanma. 'Dondurma külahı' (Ice cream cone) görünümü (intra ve ekstra-kanaliküler bileşenler).",
                "dwi": "Difüzyon kısıtlamaz — Meningiom ve Epidermoidin aksine (Epidermoid DWI parlak, Schwannom değil).",
                "swi": "Mikrokanamalar sıktır (Meningiomun aksine)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Iso/hypodense mass in cerebellopontine angle (CPA) cistern. Widening of Internal Auditory Canal (IAC).",
                "contrast": "Enhances."
            },
            "mri": {
                "t1": "Isointense or hypointense.",
                "t2": "Heterogeneous hyperintense. Associated arachnoid cysts may occur.",
                "t1_c": "Intense enhancement. 'Ice cream cone' appearance (intra- and extra-canalicular components).",
                "dwi": "No diffusion restriction — unlike Meningioma and Epidermoid (Epidermoid is DWI bright, Schwannoma is not).",
                "swi": "Microhemorrhages are common (unlike Meningioma)."
            }
        },
        "keyPoints": [
            "8. kafa çiftinin vestibüler dalından köken alır.",
            "Sensörinöral tip işitme kaybı.",
            "Bilateral (iki taraflı) olması NF2 hastalığını düşündürür."
        ],
        "keyPointsEn": [
            "Arises from vestibular branch of 8th cranial nerve.",
            "Sensorineural hearing loss.",
            "Bilateral involvement suggests NF2 disease."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Hearing Loss and/or Vertigo. American College of Radiology; 2018.",
            "Radiopaedia.org - Vestibular Schwannoma",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "pituitary_adenoma",
        "name": "Hipofiz Adenomu",
        "nameEn": "Pituitary Adenoma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "mechanism": "Adenohipofiz hücrelerinden monoklonal proliferasyon. Makroadenomlar sellar genişlemeye ve optik kiazma basısına neden olur. Dinamik MRI'da normal gland önce kontrast tutar; mikroadenom relatif hipointens (daha az kontrastlanan) olarak kalır.",
        "findings": {
            "ct": {
                "non_contrast": "Sellar genişleme, klinoidlerde erozyon (Makroadenom).",
                "contrast": "Kontrastlanma paterni değişkendir."
            },
            "mri": {
                "t1": "Genellikle izointens. Kanama varsa hiperintens (Apopleksi).",
                "t2": "Değişken.",
                "t1_c_dynamic": "Mikroadenom (<10mm): Erken fazlarda normal glanda göre daha az kontrastlanır (hipo-enhancing). Makroadenom (>10mm): Heterojen kontrastlanma, diyafragma sella tarafından sıkıştırılırsa 'kardan adam' (figure-of-8) görünümü."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Sellar enlargement, erosion of clinoids (Macroadenoma).",
                "contrast": "Variable enhancement pattern."
            },
            "mri": {
                "t1": "Usually isointense. Hyperintense if hemorrhage (Apoplexy).",
                "t2": "Variable.",
                "t1_c_dynamic": "Microadenoma (<10mm): Less enhancement than normal gland in early phases (hypo-enhancing). Macroadenoma (>10mm): Heterogeneous enhancement, 'figure-of-8' appearance if compressed by diaphragma sellae."
            }
        },
        "keyPoints": [
            "Optik kiazma basısı (bitemporal hemianopsi).",
            "Fonksiyonel (Prolaktinoma, GH salgılayan) veya Non-fonksiyonel olabilir.",
            "Hipofizer apopleksi acil bir durumdur."
        ],
        "keyPointsEn": [
            "Optic chiasm compression (bitemporal hemianopsia).",
            "Can be Functional (Prolactinoma, GH-secreting) or Non-functional.",
            "Pituitary apoplexy is a medical emergency."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Neuroendocrine Imaging. American College of Radiology; 2019.",
            "Radiopaedia.org - Pituitary Adenoma",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "cerebral_metastasis",
        "name": "Serebral Metastaz",
        "nameEn": "Cerebral Metastasis",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "mechanism": "Hematojen yayılım ile gri-beyaz cevher bileşkesine yerleşim (kan akımının yavaşladığı ve emboli tuzağına düştüğü alan). Primer tümörden kaynaklanan tümör hücreleri lokal invazyon ve vazojenik ödeme yol açar.",
        "gallery": [
            { "url": "/images/mri_mets.png", "caption": "T1+C (Çoklu Halka)", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "İzo/Hipo/Hiperdens. Multipl lezyonlar > Tek (%50). Kitle boyutuna oranla çok geniş vazojenik ödem. Hemorajik olabilir (Renal hücreli, Koryokarsinom, Melanom, Tiroid).",
                "contrast": "Halka şeklinde (kalın/düzensiz) veya solid kontrastlanma."
            },
            "mri": {
                "t1": "İzo/Hipointens. Hemorajikse veya melanin içeriyorsa hiperintens.",
                "t2_flair": "Geniş vazojenik ödem.",
                "t1_c": "Kontrastlanır. Küçük lezyonlar (<5mm) sadece kontrastlı MR'da görülebilir.",
                "dwi": "Genellikle difüzyon kolaylaşmıştır (Facilitated).",
                "spectroscopy": "Lipid/Lactate piki. Kolin/NAA oranı yüksektir ancak peritümöral ödem alanında oranlar NORMALDİR (GBM infiltrasyonunun aksine)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Iso/Hypo/Hyperdense. Multiple lesions > Single (50%). Vasogenic edema disproportionately large relative to mass size. Can be hemorrhagic (Renal cell, Choriocarcinoma, Melanoma, Thyroid).",
                "contrast": "Ring-shaped (thick/irregular) or solid enhancement."
            },
            "mri": {
                "t1": "Iso/Hypointense. Hyperintense if hemorrhagic or contains melanin.",
                "t2_flair": "Large vasogenic edema.",
                "t1_c": "Enhances. Small lesions (<5mm) may only be visible on contrast-enhanced MRI.",
                "dwi": "Generally facilitated diffusion.",
                "spectroscopy": "Lipid/Lactate peak. Elevated Cho/NAA ratio, but peritumoral edema shows NORMAL ratios (unlike GBM infiltration)."
            }
        },
        "keyPoints": [
            "Erişkinlerde en sık görülen intrakraniyal tümördür.",
            "Gri-beyaz cevher bileşkesi tipik yerleşim yeridir.",
            "Akciğer, Meme, Melanom, Böbrek ve Kolon en sık primer kaynaklardır."
        ],
        "keyPointsEn": [
            "Most common intracranial tumor in adults.",
            "Gray-white matter junction is the typical location.",
            "Lung, Breast, Melanoma, Kidney and Colon are the most common primary sources."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Intracranial Neoplasms. American College of Radiology; 2020.",
            "Radiopaedia.org - Cerebral Metastasis",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "cavernous_malformation",
        "name": "Kavernom (Cavernous Malformation)",
        "category": "Vasküler",
        "gallery": [
            { "url": "/images/mri_cavernoma.png", "caption": "T2 (Popcorn)", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Hiperdens nodül (kalsifikasyon/hemoraji). Yakın zamanda kanamadıysa ödem yoktur."
            },
            "mri": {
                "t2": "'Patlamış mısır' (Popcorn) görünümü (karışık hiper/hipo sinyal).",
                "swi": "Hipointens rim (Hemosiderin halkası) - Blooming artefaktı. En duyarlı sekanstır.",
                "t1": "Değişken (kanın evresine göre).",
                "t1_c": "Minimal kontrastlanma veya kontrastlanma yok. Genellikle DVA (Gelişimsel Venöz Anomalisi) eşlik eder."
            }
        },
        "keyPoints": [
            "Anjiyografik olarak görülmez (düşük akımlı/okült).",
            "Ailesel vakalarda çokludur (Multipl) (CCM genleri).",
            "Kanama riski taşır."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Radiopaedia.org - Cavernous Malformation",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "diffuse_axonal_injury",
        "name": "Diffüz Aksonal Yaralanma (DAI)",
        "category": "Travma",
        "findings": {
            "ct": {
                "non_contrast": "Genellikle Normaldir (%50-80). Gri-beyaz cevher bileşkesinde, korpus kallozumda veya beyin sapında küçük peteşiyel kanamalar görülebilir."
            },
            "mri": {
                "swi": "Multipl blooming veren mikrokanamalar (Evre 1: Gri-beyaz, Evre 2: Korpus Kallozum, Evre 3: Beyin sapı).",
                "t2_flair": "Hemorajik olmayan bileşenlerde hiperintens odaklar.",
                "dwi": "Akut fazda difüzyon kısıtlılığı."
            }
        },
        "keyPoints": [
            "Rotasyonel hızlanma/yavaşlama yaralanması.",
            "Klinik-Radyolojik uyumsuzluk (GKS düşük ama BT normal olabilir).",
            "SWI en duyarlı sekanstır."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Head Trauma. American College of Radiology; 2022.",
            "Radiopaedia.org - Diffuse Axonal Injury",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "idiopathic_intracranial_hypertension",
        "name": "İdiyopatik İntrakraniyal Hipertansiyon (Psödotümör Serebri)",
        "category": "Sellar/Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Zor izlenen (slit-like) ventriküller. Empty (boş) sella."
            },
            "mri": {
                "t2": "Empty sella turcica (hipofiz basısı). Optik sinir kılıflarında genişleme (distansiyon). Optik sinirlerde tortiyozite (kıvrımlanma).",
                "t1_c": "Optik sinir başında intraoküler protrüzyon.",
                "mrv": "Transvers sinüslerde (distal) darlık/stenoz."
            }
        },
        "keyPoints": [
            "Doğurganlık çağındaki obez kadınlar.",
            "Papilödem, Baş ağrısı, Görme bozuklukları.",
            "Venöz Sinüs Trombozu mutlaka dışlanmalıdır."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Headache. American College of Radiology; 2019.",
            "Radiopaedia.org - Idiopathic Intracranial Hypertension",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "hydrocephalus_nph",
        "name": "Normal Basınçlı Hidrosefali (NPH)",
        "category": "Dejeneratif",
        "findings": {
            "ct": {
                "non_contrast": "Atrofiye oranla orantısız ventrikül genişlemesi. Evans İndeksi > 0.3."
            },
            "mri": {
                "t2": "Ventrikülomegali. Serebral akuaduktta 'flow void' (akım boşluğu) artışı (hiperdinamik BOS). Verteks düzeyinde giruslarda sıkışma ('Crowding').",
                "t2_flair": "Periventriküler hiperintensite (transependimal geçiş - akut hidrosefaliden daha az belirgindir)."
            }
        },
        "keyPoints": [
            "Klasik Triad: Yürüme bozukluğu ('manyetik yürüyüş'), Demans, İdrar inkontinansı.",
            "Orantısız genişlemiş subaraknoid mesafeli hidrosefali (DESH) bulguları."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Normal Pressure Hydrocephalus",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "tuberous_sclerosis",
        "name": "Tuberoskleroz Kompleksi",
        "category": "Fakomatoz",
        "findings": {
            "ct": {
                "non_contrast": "Kalsifiye subependimal nodüller (SEN). Kortikal tüberler (hipodens)."
            },
            "mri": {
                "t2_flair": "Kortikal/Subkortikal tüberler (Hiperintens). Beyaz cevherde radyasyon (radial migration) hatları.",
                "t1_c": "Foramen Monro düzeyinde Subependimal Dev Hücreli Astrositom (SEGA) (Kontrastlanan, >1cm kitle)."
            }
        },
        "keyPoints": [
            "Epilepsi, Cilt lezyonları (adenom sebaseum).",
            "Renal AML (Anjiyomiyolipom), Kardiyak Rabdomyomlar.",
            "SEGA gelişimi açısından takip gereklidir."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Tuberous Sclerosis Complex",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "arteriovenous_malformation",
        "name": "Arteriyovenöz Malformasyon (AVM)",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "İzo/Hiperdens solucan paketi (bag of worms). Kalsifikasyon. Kanama yoksa kitle etkisi yapmaz.",
                "cta": "Opake olan nidus, besleyici arterler, erken drene olan venler."
            },
            "mri": {
                "t2": "Serpiginöz 'flow void' (akım boşluğu) yapıları ('Solucan paketi').",
                "t1": "Flow void. Tromboze ise yüksek sinyal.",
                "swi": "Eşlik eden kanama varsa blooming.",
                "t1_c": "Nidus ve damarlarda yoğun kontrastlanma."
            }
        },
        "keyPoints": [
            "Kapiller yatak olmaksızın konjenital şant.",
            "Yüksek akımlı lezyon.",
            "Cerrahi risk için Spetzler-Martin derecelendirmesi."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Radiopaedia.org - Arteriovenous Malformation",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "venous_sinus_thrombosis",
        "name": "Serebral Venöz Sinüs Trombozu",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Hiperdens damar/sinüs işareti (Cord sign). İntra-parankimal kanama (sıklıkla bilateral/parasagittal, arteriyel alana uymayan).",
                "ct_venogram": "Empty Delta (Boş Delta) işareti (Superior Sagittal Sinüste dolum defekti)."
            },
            "mri": {
                "t1": "İzointens (akut) -> Hiperintens (subakut trombus).",
                "t2": "Normal 'flow void' (akım boşluğu) kaybı.",
                "mrv": "Dolum defektleri / akım kesintisi."
            }
        },
        "keyPoints": [
            "Hiperkoagülasyon durumları (OKS kullanımı, gebelik, Faktör V Leiden).",
            "Arteriyel sulama alanlarına uymayan hemorajik infarktlar."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Radiopaedia.org - Cerebral Venous Sinus Thrombosis",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "herpes_encephalitis",
        "name": "Herpes Simpleks Ensefaliti",
        "category": "Enfeksiyon",
        "findings": {
            "ct": {
                "non_contrast": "Medial temporal loblar/insulada hipodansite. Erken dönemde sıklıkla normaldir."
            },
            "mri": {
                "t2_flair": "Medial temporal loblar, hipokampus, singulat girus ve insulada hiperintensite. Önce tek taraflı sonra bilateral asimetrik.",
                "dwi": "Tipik olarak kısıtlanmış difüzyon görülür.",
                "t1_c": "Yamasal/Giral kontrastlanma (subakut dönem).",
                "swi": "Mikrokanamalar (nekrotizan karakterde)."
            }
        },
        "keyPoints": [
            "HSV-1 etkenidir. Limbik sistemi tutar.",
            "Bazal ganglionlar korunur (MCA infarktının aksine).",
            "Yüksek mortalite - Şüphe anında hemen Asiklovir başlanmalı."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: CNS Infections. American College of Radiology; 2020.",
            "Radiopaedia.org - Herpes Simplex Encephalitis",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "arachnoid_cyst",
        "name": "Araknoid Kist",
        "category": "Konjenital",
        "findings": {
            "ct": {
                "non_contrast": "Keskin sınırlı, BOS dansitesinde ekstra-aksiyal sıvı koleksiyonu. Komşu kemikte incelme/taraklanma (scalloping)."
            },
            "mri": {
                "t1": "BOS ile izointens.",
                "t2": "BOS ile izointens.",
                "t2_flair": "Tamamen baskılanır (Siyah) - Epidermoid kistten ayrımında önemlidir.",
                "dwi": "Difüzyon kolaylaşmıştır (Siyah/Hipointens) - Epidermoidden (Parlak) ayrımında KRİTİKTİR."
            }
        },
        "keyPoints": [
            "Orta kraniyal çukur (temporal/Sylvian) en sık yerleşim yeridir.",
            "Genellikle insidentaldir (tesadüfen bulunur).",
            "Galassi sınıflaması kullanılır."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Arachnoid Cyst",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "primary_cns_lymphoma",
        "name": "Primer Serebral Lenfoma (PCNSL)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Gri cevhere göre izo-hiperdens (hücresel yoğunluk nedeniyle). Genellikle derin yerleşimli (periventriküler, bazal ganglion).",
                "contrast": "İmmünkompetan hastalarda: Yoğun, homojen kontrastlanma. İmmünkompromize (HIV vb.): Halka şeklinde, düzensiz kontrastlanma (merkezi nekroz)."
            },
            "mri": {
                "t1": "İzo-Hipointens.",
                "t2": "İzo-Hipointens (yüksek sellülarite). Bu özellik gliomlardan ayırıcı tanıda önemlidir (gliomlar genellikle parlaktır).",
                "t2_flair": "Orta derecede peritümöral ödem (GBM veya Metastaza göre daha az).",
                "dwi": "Belirgin Difüzyon Kısıtlılığı (Parlak) - Yüksek N/C oranı nedeniyle.",
                "t1_c": "Homojen, bulutsu (fluffy) kontrastlanma. 'Notch sign' (çentik işareti) görülebilir.",
                "spectroscopy": "Lipid/Lactate piki (MASİF), Yüksek Kolin. GBM'den farkı: Perfüzyon genellikle DÜŞÜKTÜR (hipoperfüzyon)."
            }
        },
        "keyPoints": [
            "Steroidlere dramatik yanıt verir ('Hayalet tümör' - Ghost tumor). Biyopsi öncesi steroid VERİLMEMELİDİR.",
            "Genellikle B-hücreli lenfomadır.",
            "İmmün sistemi baskılanmış hastalarda (EBV ilişkili) görünüm çok farklıdır (nekrotik, halkasal)."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebral Neoplasm. American College of Radiology; 2020.",
            "Radiopaedia.org - Primary CNS Lymphoma",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "intracerebral_hemorrhage",
        "name": "İntraserebral Kanama (Hemorajik İnme)",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Hiperakut/Akut dönem: Hiperdens (60-80 HU) parankimal hematom. Çevre hipodansite (ödem). Kitle etkisi ve ventriküler şift. 'Spot sign' (aktif kanama odağı) BT anjiyoda görülebilir.",
                "contrast": "Aktif ekstravazasyon alanları (kötü prognoz). Altta yatan lezyon (AVM, tümör) araştırması.",
                "evolution": "Subakut (3-14 gün): İzodansite. Kronik (>14 gün): Hipodansite, kavite oluşumu."
            },
            "mri": {
                "t1": "Hiperakut (<6s): İzointens (Oksihemoglobin). Akut (6s-3gün): İzointens-hipointens (Deoksihemoglobin). Erken subakut: Hiperintens periferal halka (intraselüler Met-Hb). Geç subakut: Homojen hiperintens (ekstraselüler Met-Hb).",
                "t2": "Hiperakut: Hiperintens. Akut: Hipointens halka (Deoksihemoglobin). Subakut: Hiperintens merkez, hipointens rim. Kronik: Belirgin hipointens hemosiderin halkası.",
                "swi": "Tüm evrelerde belirgin 'blooming' artefaktı. En duyarlı sekans. Mikrokanama tespiti.",
                "t2_flair": "Çevresel vazojenik ödem değerlendirmesi. Subaraknoid kanama eşlik ediyor mu?",
                "dwi": "Akut hematomda periferal difüzyon kısıtlılığı (sitotoksik ödem)."
            }
        },
        "keyPoints": [
            "En sık neden: Hipertansiyon (bazal ganglia, talamus, pons, serebellum).",
            "Genç hastada lobar kanama: Amiloid anjiyopati, AVM, kavernom düşün.",
            "BT anjiyoda 'Spot sign': Hematom genişlemesi riski yüksek.",
            "Kanama kronolojisi MRI'da T1/T2 sinyal değişimleriyle takip edilir."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Radiopaedia.org - Intracerebral Hemorrhage",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "cerebral_aneurysm",
        "name": "Serebral Anevrizma (Berry Anevrizması)",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Rüptüre: Subaraknoid kanama (sisternalarda hiperdansite). İntrüptüre: Genellikle insidental.",
                "cta": "Anevrizma lokasyonu (Willis poligonu), boyut ölçümü, dome/neck oranı, ana damarla ilişki. Dev anevrizma (>25mm) trombüs ve kalsifikasyon içerebilir.",
                "bone_subtraction": "Kemik artefaktlarını elimine eder, özellikle kafa tabanındaki anevrizmalarda."
            },
            "mri": {
                "tof_mra": "Akım bağımlı parlak sinyal. Küçük anevrizmaları (>3mm) tespit eder. Türbülan akım nedeniyle sinyal kaybı olabilir.",
                "t1_t2": "Dev anevrizma: Akım boşluğu (flow void), periferal trombüs (T1 hiperintens).",
                "t1_c": "Duvar kontrastlanması (inflamasyon veya instabilite belirtisi olabilir).",
                "swi": "Rüptür geçmişi: Hemosiderin birikimi."
            },
            "dsa": {
                "description": "Altın standart. 3D rotasyonel anjiyo. Tedavi planlaması (koil vs klip). Kollateral akım değerlendirmesi."
            }
        },
        "keyPoints": [
            "En sık yerleşim: Anterior kominikan arter (%30), Posterior kominikan arter (%25), MCA bifurkasyonu (%20).",
            "Rüptür riski: Boyut >7mm, posterior sirkülasyon, irregüler şekil, 'daughter sac'.",
            "PHASES skoru rüptür riskini tahmin eder.",
            "Polikistik böbrek hastalığı, Ehlers-Danlos, aile öyküsü: Tarama endikasyonu."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Radiopaedia.org - Cerebral Aneurysm",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "low_grade_glioma",
        "name": "Düşük Dereceli Gliom (WHO Grade 2)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Homojen hipodens kitle. Kalsifikasyon (%20-40, özellikle oligodendrogliomda). Minimal kitle etkisi. Kontrastlanma genellikle YOK.",
                "contrast": "Kontrastlanma varsa: Grade artışı düşünülmeli (anaplastik transformasyon)."
            },
            "mri": {
                "t1": "Homojen hipointens, iyi sınırlı kitle. Kortikal tutulum sık (gri-beyaz cevher ayrımının silinmesi).",
                "t2_flair": "Homojen HİPERİNTENS. Keskin sınırlı. FLAIR'de çevre ödem minimal veya yok.",
                "dwi": "Difüzyon kısıtlılığı YOK (GBM'den fark - sellülarite düşük).",
                "t1_c": "Kontrastlanma YOK veya minimal. Kontrastlanma: Yüksek grade düşündürür.",
                "perfusion": "rCBV DÜŞÜK veya normal (<1.75). GBM'de yüksektir (>1.75).",
                "spectroscopy": "Kolin/NAA oranı hafif artmış (GBM'den daha az). myo-Inozitol artışı (Grade 2 belirtisi)."
            }
        },
        "keyPoints": [
            "WHO 2021: IDH-mutant astrositom, Oligodendrogliom (1p/19q ko-delesyon).",
            "Genellikle genç erişkinlerde (30-40 yaş), epilepsi ile prezentasyon.",
            "Frontal ve temporal loblar en sık yerleşim.",
            "'T2-FLAIR mismatch': Astrositom için spesifik (T2'de hiperintens, FLAIR'de santral hipointens)."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebral Neoplasm. American College of Radiology; 2020.",
            "Radiopaedia.org - Low Grade Glioma",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "pituitary_macroadenoma",
        "name": "Hipofiz Makroadenomu (>10mm)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Sellar genişleme, klinoid erozyonu. Suprasellar uzanım. Heterojen (kanama, kist, nekroz).",
                "contrast": "Homojen veya heterojen kontrastlanma. Normal hipofiz dokusu ayırt edilemeyebilir."
            },
            "mri": {
                "t1": "İzointens veya hafif hipointens. Kanama varsa (Apopleksi): Hiperintens alanlar.",
                "t2": "Değişken. Solid: İzointens. Kistik/Nekrotik: Hiperintens.",
                "t1_c": "Yoğun kontrastlanma. Dinamik çekimde normal hipofizden GEÇ kontrastlanır.",
                "t1_c_coronal": "'Figure-of-8' (Kardan adam) görünümü: Suprasellar uzanım, diyafragma sella tarafından sıkıştırılma.",
                "invasion": "Kavernöz sinüs invazyonu: Internal karotid arter %50'den fazla sarılmışsa invazyon olasılığı yüksek."
            }
        },
        "keyPoints": [
            "Fonksiyonel: Prolaktinoma (en sık), GH salgılayan (Akromegali), ACTH (Cushing).",
            "Non-fonksiyonel: Kitle etkisi ile semptom (Bitemporal hemianopsi - optik kiazma basısı).",
            "Hipofizer apopleksi: Ani kanama/nekroz - Acil nöroşirürji konsültasyonu.",
            "Prolaktinoma tedavisi: Önce medikal (Dopamin agonisti), cerrahi ikinci seçenek."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "ACR Appropriateness Criteria: Pituitary Adenoma. American College of Radiology; 2021.",
            "Radiopaedia.org - Pituitary Macroadenoma"
        ]
    },
    {
        "id": "craniopharyngioma",
        "name": "Kraniyofarenjiom",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Suprasellar kalsifiye (>%90) kistik/solid kitle. Kalsifikasyon PATOGNOMONIK. Çocuklarda %90, erişkinlerde %50 kalsifiye.",
                "contrast": "Solid komponent ve kist duvarı kontrastlanır."
            },
            "mri": {
                "t1": "KİST: T1 HİPERİNTENS (kolesterol kristalleri, protein içeriği) - AYIRT EDİCİ ÖZELLİK. Solid: İzointens.",
                "t2": "Kist: Hiperintens (değişken). Solid: Heterojen.",
                "t2_flair": "Kistik komponent belirgin. Çevre gliozis/ödem.",
                "t1_c": "Solid komponent ve kist duvarı belirgin kontrastlanma. İnce veya nodüler rim.",
                "location": "Suprasellar (%75), Intrasellar+Suprasellar (%20), Sadece intrasellar (%5)."
            }
        },
        "keyPoints": [
            "Bimodal yaş dağılımı: Çocukluk (5-15 yaş) ve erişkinler (50-75 yaş).",
            "Adamantinomatöz tip (çocuk): Kalsifiye, kistik. Papiller tip (erişkin): Daha solid.",
            "Ayırıcı tanı: Rathke yarığı kisti (kalsifikasyon yok, daha küçük), Dermoid kist, Hipofiz adenomu.",
            "Tedavi zorluğu: Hipotalamus yapışıklığı nedeniyle subtotal rezeksiyon."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Blaser SI, et al. Pediatric neuroimaging references where applicable.",
            "Radiopaedia.org - Craniopharyngioma"
        ]
    },
    {
        "id": "toxoplasmosis_cns",
        "name": "Toksoplazmoz (Serebral - AIDS)",
        "category": "Enfeksiyon",
        "findings": {
            "ct": {
                "non_contrast": "Multipl hipodens lezyonlar, bazal ganglia ve kortikomedüller bileşke. Kitle etkisi ve ödem.",
                "contrast": "Halka şeklinde (ring) kontrastlanma. 'Eksantrik hedef işareti' (eccentric target sign) görülebilir."
            },
            "mri": {
                "t1": "Hipointens lezyonlar. Subakut kanama varsa hiperintens alanlar.",
                "t2": "Merkez: Hafif hiperintens. Çevre: Belirgin hiperintens vazojenik ödem.",
                "t2_flair": "Ödem çok belirgin. Multipl lezyonlar tipik.",
                "t1_c": "Halka kontrastlanma. 'Eksantrik hedef işareti': Halkanın bir tarafında nodüler kontrastlanma - PATOGNOMONIK.",
                "dwi": "Genellikle difüzyon kısıtlılığı YOK (Lenfomadan FARK). Merkez kolaylaşmış veya hafif kısıtlı.",
                "perfusion": "rCBV DÜŞÜK (Lenfomada yüksek olabilir)."
            }
        },
        "keyPoints": [
            "AIDS tanımlayan hastalık. CD4 <100 hücre/μL.",
            "Lenfoma vs Toksoplazmoz: DWI (Lenfoma = kısıtlanma), Perfüzyon, Thal skalası.",
            "Eksantrik hedef işareti toksoplazmoz için yüksek spesifik.",
            "Empirik tedavi (2 hafta): Yanıt varsa tanı doğrulanır, yoksa biyopsi."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: HIV-Associated Central Nervous System Disease. American College of Radiology; 2022.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "Radiopaedia.org - Cerebral Toxoplasmosis"
        ]
    },
    {
        "id": "neurocysticercosis",
        "name": "Nörosistiserkoz",
        "category": "Enfeksiyon",
        "findings": {
            "ct": {
                "non_contrast": "Evre bağımlı: VEZİKÜLER: İnce duvarlı kist, içinde hiperdans skoleks ('nokta'). KOLLOİDAL: Çevre ödem, kist bulanıklaşması. GRANÜLER: Kalsifiye nodül. KALSİFİYE: Tamamen kalsifiye.",
                "contrast": "Kolloidal ve granüler evrelerde halka kontrastlanma. Veziküler ve kalsifiye evrelerde kontrastlanma yok."
            },
            "mri": {
                "t1": "Veziküler: Hipointens kist. Skoleks izointens ('baş döndüren nokta'). Kolloidal: Hiperintens kist içeriği (protein).",
                "t2": "Veziküler: Hiperintens kist, skoleks hipointens. Kolloidal: 'Hole with dot' - Hiperintens çevre ödem, santral kist.",
                "t2_flair": "Çevre ödem değerlendirmesi. Intraventricular kistler için kritik.",
                "t1_c": "Kolloidal ve granüler: Halka kontrastlanma (inflamatuar yanıt). Veziküler ve kalsifiye: Kontrastlanma yok.",
                "dwi": "Kist içeriği: Difüzyon kolaylaşmış. Apse'den farkı.",
                "swi": "Kalsifikasyon tespiti. Kronik lezyonlar."
            }
        },
        "keyPoints": [
            "Dünyada en sık kazanılmış epilepsi nedeni.",
            "4 evre: Veziküler → Kolloidal → Granüler → Kalsifiye.",
            "Skoleks görülmesi patognomonik ('solucan başı').",
            "Racemoz form: Bazal sisternalarda üzüm salkımı şeklinde kistler."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Central Nervous System Infections. American College of Radiology; 2021.",
            "Radiopaedia.org - Neurocysticercosis"
        ]
    },
    {
        "id": "chiari_i_malformation",
        "name": "Chiari Tip I Malformasyonu",
        "category": "Konjenital",
        "findings": {
            "mri": {
                "t1": "Sagittal: Serebellar tonsillerin foramen magnum altına >5mm herniasyonu. Tonsil sivri (peg-like) şekil.",
                "t2": "Foramen magnum düzeyinde BOS akım alanı daralması. Siringomiyeli eşlik ediyor mu?",
                "t2_flair": "Siringomiyeli: Servikal kordda santral kavite (BOS sinyali).",
                "other_sequences": "BOS akım çalışması (Phase Contrast - Cine MRI): Foramen magnum düz. anterior ve posterior akım bozukluğu.",
                "sagittal": "Kritik ölçüm: Tonsil pozisyonu (McRae hattına göre). Kranioservikal bileşke anomalileri (baziler invaginasyon)."
            },
            "ct": {
                "bone_window": "Platibazi, baziler invaginasyon, küçük posterior fossa."
            }
        },
        "keyPoints": [
            "Semptomlar: Öksürükle tetiklenen oksipital baş ağrısı, el uyuşması.",
            "Siringomiyeli %25-70 eşlik eder.",
            "Chiari 0: Tonsil herniasyonu yok ama BOS akım bozukluğu var.",
            "Cerrahi: Posterior fossa dekompresyonu (BOS akımını düzeltmek için)."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Blaser SI, et al. Pediatric neuroimaging references where applicable.",
            "ACR Appropriateness Criteria: Chiari Malformations. American College of Radiology; 2020.",
            "Radiopaedia.org - Chiari I Malformation"
        ]
    },
    {
        "id": "dandy_walker_malformation",
        "name": "Dandy-Walker Malformasyonu",
        "category": "Konjenital",
        "findings": {
            "mri": {
                "t1": "Sagittal: Vermis HİPOPLAZİSİ veya agenezisi. 4. ventrikül dilatasyonu ve posterior fossaya balonlaşması.",
                "t2": "Posterior fossa kisti (4. ventrikül ile devamlılık). Tentoryum elevasyonu. Torkular-lambdoid inversiyonu.",
                "t2_flair": "Kist BOS ile izointens (baskılanır). Hidrosefali değerlendirmesi.",
                "sagittal": "Klasik triad: 1) Vermis hipoplazisi, 2) 4. ventrikül kistik dilatasyonu, 3) Posterior fossa genişlemesi.",
                "coronal": "Lateral ventriküler dilatasyon (hidrosefali sık)."
            },
            "ct": {
                "non_contrast": "Büyük posterior fossa, tentoryum yüksek yerleşimli, 4. ventrikül genişlemiş."
            }
        },
        "keyPoints": [
            "Dandy-Walker varyantı: Daha hafif vermis hipoplazisi, posterior fossa normal boyutta.",
            "Mega cisterna magna: Vermis normal, sadece büyük sisterna - Ayırıcı tanı.",
            "%70-90 hidrosefali eşliği.",
            "Diğer anomaliler eşlik edebilir: Korpus kallozum agenezisi, heterotopiler."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Blaser SI, et al. Pediatric neuroimaging references where applicable.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Dandy-Walker Malformation"
        ]
    },
    {
        "id": "corpus_callosum_agenesis",
        "name": "Korpus Kallozum Agenezisi",
        "category": "Konjenital",
        "findings": {
            "mri": {
                "t1": "Sagittal: Korpus kallozum YOK. Radial sulkuslar (3. ventrikül çevresinde güneş ışını paterni).",
                "t2": "Aksiyel: Lateral ventriküller paralel ('yarış arabası boynuzları' - racing car sign). Kolposfali (oksipital hornlar disproportionally genişlemiş).",
                "t2_flair": "Probst demeti: Korpus kallozum yerine oluşan longitudinal lifler (ventrikül medial duvarında).",
                "coronal": "'Viking kaskı' görünümü: Lateral ventriküller yukarı ve dışa açılı.",
                "sagittal": "İnterhemisferik kist (lipom) eşlik edebilir."
            },
            "ct": {
                "non_contrast": "Paralel ventriküller, kolposfali, yüksek 3. ventrikül."
            }
        },
        "keyPoints": [
            "Parsiyel agenezi: Posterior kısım (splenium) en sık eksik.",
            "Lipom (interhemisferik) %50 eşlik eder.",
            "Sendromik: Aicardi sendromu (kızlarda), ACC+Koriyoretinal lakünler+İnfantil spazm.",
            "Asemptomatik olabilir veya gelişimsel gecikme ile prezente."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Blaser SI, et al. Pediatric neuroimaging references where applicable.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "Radiopaedia.org - Agenesis of the Corpus Callosum"
        ]
    },
    {
        "id": "adem",
        "name": "Akut Dissemine Ensefalomiyelit (ADEM)",
        "category": "Demiyelinizan",
        "findings": {
            "mri": {
                "t1": "Hafif hipointens lezyonlar. Akut evrede kitle etkisi ve ödem olabilir.",
                "t2_flair": "Multipl, asimetrik, kötü sınırlı (fluffy) beyaz cevher lezyonları. DEEP gray matter tutulumu (Talamus, bazal ganglia) - MS'den FARK!",
                "dwi": "Akut lezyonlarda değişken difüzyon kısıtlılığı.",
                "t1_c": "Değişken kontrastlanma paterni: Halka, nodüler veya kontrastlanma yok. 'Open ring' paterni (MS benzeri) görülebilir.",
                "other_sequences": "Spinal kord tutulumu: Longitudinal uzun segment miyelit (>3 vertebra) - NMO'ya benzer ama monofazik."
            },
            "ct": {
                "non_contrast": "Duyarlılık düşük. Multifokal hipodansiteler beyaz cevherde."
            }
        },
        "keyPoints": [
            "Post-enfeksiyöz veya post-aşı. Çocuklarda daha sık (ortalama 5-8 yaş).",
            "Monofazik seyir (MS'den fark). Relaps: MS veya MDEM düşündürür.",
            "Deep gray matter tutulumu (talamus, bazal ganglia) ADEM için tipik, MS'de nadir.",
            "Difüz, kötü sınırlı lezyonlar - MS'de oval, iyi sınırlı Dawson parmakları."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Blaser SI, et al. Pediatric neuroimaging references where applicable.",
            "ACR Appropriateness Criteria: Demyelinating Disease. American College of Radiology; 2021.",
            "Radiopaedia.org - Acute Disseminated Encephalomyelitis (ADEM)"
        ]
    },
    {
        "id": "medulloblastoma",
        "name": "Medulloblastom (Posterior Fossa Tümörü)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Vermis/4. ventrikül yerleşimli HİPERDENS kitle (yüksek sellülarite). Kalsifikasyon %20. Obstrüktif hidrosefali sık.",
                "contrast": "Heterojen kontrastlanma."
            },
            "mri": {
                "t1": "Hipointens kitle. Nekroz veya kist alanları içerebilir.",
                "t2": "İzo-Hipointens (Yüksek sellülarite nedeniyle) - Ependimom ve pilositik astrositomdan FARK!",
                "dwi": "Belirgin DİFÜZYON KISITLAMASI (parlak) - Yüksek N/C oranı ve sellülarite. AYIRT EDİCİ ÖZELLİK!",
                "t1_c": "Heterojen kontrastlanma. Leptomeningeal yayılım ('drop metastaz') için tüm spinal aks taranmalı.",
                "spectroscopy": "Yüksek Kolin, Düşük NAA. Taurin piki - Embriyonal tümörlerde görülür."
            }
        },
        "keyPoints": [
            "Çocuklarda en sık malign beyin tümörü. Ortalama 5-7 yaş.",
            "Lokasyon: Çocukta VERMIS (midline), Erişkinde HEMİSFER (lateral).",
            "DWI kısıtlaması: Pilocytic astrositom ve ependimomdan ayırıcı (onlarda kısıtlanma yok).",
            "Staging: Tüm nöroaksis MR + LP (leptomeningeal yayılım)."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Blaser SI, et al. Pediatric neuroimaging references where applicable.",
            "ACR Appropriateness Criteria: Pediatric Cerebellar Neoplasm. American College of Radiology; 2020.",
            "Radiopaedia.org - Medulloblastoma"
        ]
    },
    {
        "id": "pilocytic_astrocytoma",
        "name": "Pilositik Astrositom (WHO Grade 1)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Kistik kitle + kontrastlanan mural nodül. Serebellumda en sık. Kalsifikasyon nadir.",
                "contrast": "Solid komponent (mural nodül) yoğun kontrastlanır. Kist duvarı kontrastlanmayabilir."
            },
            "mri": {
                "t1": "Kist: Hipointens. Mural nodül: İzointens.",
                "t2": "Kist: BOS benzeri hiperintens veya proteinöz içerik nedeniyle BOS'tan hafif farklı. Nodül: Hiperintens.",
                "dwi": "Difüzyon kısıtlılığı YOK (Medulloblastomdan FARK). ADC değerleri yüksek.",
                "t1_c": "Mural nodül: Yoğun, HOMOJEn kontrastlanma. Kist duvarı kontrastlanırsa rezeksiyon gerektirir.",
                "perfusion": "rCBV normal veya hafif artmış. Malign tümörlerden düşük."
            }
        },
        "keyPoints": [
            "Çocuk ve genç erişkinlerde en sık düşük dereceli beyin tümörü.",
            "WHO Grade 1 - Excellent prognoz, cerrahi küratif.",
            "Lokasyonlar: Serebellum > Optik yolak (NF1) > Hipotalamus.",
            "'Kist + mural nodül' paterni klasik ama %50 solid olabilir."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Blaser SI, et al. Pediatric neuroimaging references where applicable.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Pilocytic Astrocytoma"
        ]
    },
    {
        "id": "pres",
        "name": "PRES (Posterior Reversible Encephalopathy Syndrome)",
        "category": "Vasküler / Metabolik",
        "findings": {
            "mri": {
                "t2_flair": "Bilateral simetrik, özellikle paryeto-oksipital loblarda beyaz cevherde vazojenik ödem (Hiperintens). Frontal lob ve bazal ganglion tutulumu da görülebilir.",
                "dwi": "Genellikle difüzyon kısıtlanması YOKTUR (Vazojenik ödem). Eğer kısıtlanma varsa (Sitotoksik ödem) irreversibl hasarı (infarkt) gösterir.",
                "swi": "Mikrohemorajiler görülebilir."
            }
        },
        "mechanism": "Akut hipertansiyon -> Serebral otoregülasyon kaybı -> Endotel hasarı -> Vazojenik ödem.",
        "keyPoints": [
            "Klinik: Baş ağrısı, nöbet, görme bozukluğu, mental durum değişikliği.",
            "Etyoloji: Hipertansiyon, Eklampsi, İmmünsupresif ilaçlar (Siklosporin).",
            "Genellikle reversibldir, ancak tedavi edilmezse infarkta ilerler."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Radiopaedia.org - Posterior Reversible Encephalopathy Syndrome (PRES)"
        ]
    },
    {
        "id": "avm",
        "name": "Arteriovenöz Malformasyon (AVM)",
        "category": "Vasküler",
        "findings": {
            "mri": {
                "t2": "Nidus (karışık yumak) içinde 'Flow Void' (siyah, akım boşluğu) yapıları. Sinyal artışı (ödem/gliosis) çevre dokuda olabilir.",
                "t1_c": "Güçlü kontrastlanma."
            },
            "dsa": {
                "description": "Altın standart: Erken venöz drenaj (kapiller yatak yok), besleyici arterler, nidus ve drene eden venler."
            },
            "ct": {
                "cta": "Kalsifikasyon içerebilen, kontrastlanan vasküler yumak. Erken venöz dolum."
            }
        },
        "keyPoints": [
            "Spetzler-Martin skoru cerrahi riski belirler.",
            "Yıllık kanama riski %2-4.",
            "Nidus içinde anevrizma olması kanama riskini artırır."
        ],
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "Radiopaedia.org - Arteriovenous Malformation (Brain)"
        ]
    }
];
