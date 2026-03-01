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
        "mechanismEn": "Water molecule movement is restricted due to cytotoxic edema (cell swelling) (DWI Bright). Vasogenic edema and enhancement begin when the blood-brain barrier breaks down.",
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
        "etiologyEn": "Cardioembolic (30%): AF, Endocarditis. Large vessel atherosclerosis (25%). Small vessel disease (lacunar, 25%). Cryptogenic (20%). CADASIL, Vasculitis (Rare).",
        "differentialDiagnosis": ["Beyin Tümörü (Subakut başlangıç, kitle etkisi, kontrast tutulumu)", "MS Plakı (Genç hasta, ovoid periventriküler lezyonlar)", "Beyin Apsesi (DWI pozitif ama klinik farklı: ateş)", "Hemiplejik Migren (Geri dönüşümlü, MR geçici bulgu)"],
        "differentialDiagnosisEn": ["Brain Tumor (Subacute onset, mass effect, contrast enhancement)", "MS Plaque (Young patient, ovoid periventricular lesions)", "Brain Abscess (DWI positive but different clinical presentation: fever)", "Hemiplegic Migraine (Reversible, transient MRI finding)"],
        "goldStandard": "MRI DWI/ADC: Akut infarkt (DWI parlak/ADC karanlık). BT: İlk değerlendirme (kanama ekle). BT anjiyografi: Büyük damar oklüzyonu (LVO) tespiti.",
        "goldStandardEn": "MRI DWI/ADC: Acute infarct (DWI bright/ADC dark). CT: Initial evaluation (exclude hemorrhage). CT angiography: Large vessel occlusion (LVO) detection.",
        "clinicalPearl": "DWI parlak + ADC karanlık = Akut iskemi (İlk dakikalardan itibaren pozitif). BT ilk 6 saatte normal olabilir, DWI asla.",
        "clinicalPearlEn": "DWI bright + ADC dark = Acute ischemia (Positive from the first minutes). CT can be normal in the first 6 hours, DWI never.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019;50:e344-e418.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases-Stroke. American College of Radiology; 2021.",
            "Radiopaedia.org - Acute ischaemic stroke (https://radiopaedia.org/articles/acute-ischaemic-stroke)"
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
        "mechanismEn": "Rapid, infiltrative tumor growth and central necrosis. Viable tumor cells surrounding 'palisading necrosis' show intense contrast uptake (Ring Enhancement).",
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
        "etiologyEn": "Sporadic (90%+), Radiation exposure, NF1/NF2 (Pediatric GBM). WHO 2021: IDH-wildtype, TERT promoter mutation, EGFR amplification.",
        "differentialDiagnosis": ["Beyin Metastazı (Multipl, gri-beyaz madde bileşkesi, bilinen primer)", "Primer CNS Lenfoma (Santral derin yerleşim, üniform kontrastlanma)", "Anaplastik Astrositom (IDH mutant, daha az nekroz)", "Beyin Apses (DWI merkezi kısıtlanma, ateş)"],
        "differentialDiagnosisEn": ["Brain Metastasis (Multiple, gray-white matter junction, known primary)", "Primary CNS Lymphoma (Central deep location, uniform enhancement)", "Anaplastic Astrocytoma (IDH mutant, less necrosis)", "Brain Abscess (DWI central restriction, fever)"],
        "goldStandard": "MRI T1+C + FLAIR + DWI + Perfüzyon + Spektroskopi. Stereotaktik biyopsi: Moleküler tanı için.",
        "goldStandardEn": "MRI T1+C + FLAIR + DWI + Perfusion + Spectroscopy. Stereotactic biopsy: For molecular diagnosis.",
        "clinicalPearl": "Rim (çevresel) kontrastlanma + Merkezi nekroz + FLAIR ödem + Kelebek patern (korpus kallozum invazyonu) = GBM klasik triadı.",
        "clinicalPearlEn": "Rim (peripheral) enhancement + Central necrosis + FLAIR edema + Butterfly pattern (corpus callosum invasion) = Classic GBM triad.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Louis DN et al. The 2021 WHO Classification of Tumors of the Central Nervous System. Neuro Oncol. 2021;23(8):1231-1251.",
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
        "mechanismEn": "Extra-axial, slow-growing tumor originating from the meninges. 'Dural tail' occurs due to reactive vascularization or tumor infiltration.",
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
        "etiologyEn": "Arachnoid cell origin. Radiation (ionizing), NF2 mutation (bilateral = NF2). Female:Male ratio 2:1. Progesterone receptor positivity affects growth.",
        "differentialDiagnosis": ["Dural Metastaz (İrregüler sınır, agresif yıkım, bilinen primer)", "Schwannom (Sinir kökenli, foramen genişlemesi, dumbbell)", "Hemanjiyoperisitom (Seri yenidenme, kemik yıkım)", "Lenfoma (Dural plak, uniform kontrast, BOS tutulumu)"],
        "differentialDiagnosisEn": ["Dural Metastasis (Irregular border, aggressive destruction, known primary)", "Schwannoma (Nerve origin, foraminal widening, dumbbell shape)", "Hemangiopericytoma (Recurrence tendency, bone destruction)", "Lymphoma (Dural plaque, uniform enhancement, CSF involvement)"],
        "goldStandard": "MRI T1+C: Homojen yoğun kontrastlanma + Dural tail. BT: Hiperostoz veya kemik yıkım değerlendirmesi.",
        "goldStandardEn": "MRI T1+C: Homogeneous intense enhancement + Dural tail. CT: Evaluation of hyperostosis or bone destruction.",
        "clinicalPearl": "Dural tail + BOS yarığı (CSF cleft) + Homojen kontrastlanma + Ekstra-aksiyel = Menenjiyom. Kadın + Konveksite yerleşimi en sık.",
        "clinicalPearlEn": "Dural tail + CSF cleft + Homogeneous enhancement + Extra-axial = Meningioma. Female + Convexity location is most common.",
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
        "mechanismEn": "Autoimmune T-cell mediated myelin sheath damage. Enhancement is seen in acute plaques when the blood-brain barrier (BBB) is disrupted.",
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
        "etiology": "Otoimmün, multifaktöriyel. Genetik yatkınlık (HLA-DRB1*15:01). Çevresel: EBV enfeksiyonu, D vitamini eksikliği, sigara, yüksek enlem. Kadınlarda 2-3:1.",
        "etiologyEn": "Autoimmune, multifactorial. Genetic predisposition (HLA-DRB1*15:01). Environmental: EBV infection, vitamin D deficiency, smoking, high latitude. Female:Male ratio 2-3:1.",
        "differentialDiagnosis": ["Nöromiyelitis Optika (NMO - AQP4 antikor, uzun segment miyelit)", "ADEM (Monofazik, derin gri cevher tutulumu, çocuk)", "Nörosarkoidoz (Leptomeningeal kontrastlanma, hipotalamus)", "Susac Sendromu (Corpus callosum santral lezyonları, işitme kaybı, retinal dal oklüzyonu)", "Vaskülit (Farklı vasküler alanlarda infarktlar)"],
        "differentialDiagnosisEn": ["Neuromyelitis Optica (NMO - AQP4 antibody, longitudinally extensive myelitis)", "ADEM (Monophasic, deep gray matter involvement, children)", "Neurosarcoidosis (Leptomeningeal enhancement, hypothalamus)", "Susac Syndrome (Central corpus callosum lesions, hearing loss, retinal branch occlusion)", "Vasculitis (Infarcts in different vascular territories)"],
        "goldStandard": "MRI beyin + spinal kord (FLAIR + T1+C): McDonald 2017 kriterleri (DIS + DIT). BOS: Oligoklonal bantlar.",
        "goldStandardEn": "MRI brain + spinal cord (FLAIR + T1+C): McDonald 2017 criteria (DIS + DIT). CSF: Oligoclonal bands.",
        "clinicalPearl": "Periventriküler ovoid lezyonlar (Dawson parmakları) + Open-ring kontrastlanma + Santral ven işareti = MS. FLAIR'de 'ateş böceği' paterni (parlak, yaygın).",
        "clinicalPearlEn": "Periventricular ovoid lesions (Dawson's fingers) + Open-ring enhancement + Central vein sign = MS. 'Firefly' pattern on FLAIR (bright, widespread).",
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
        "mechanism": "Köprü venlerinin yırtılması sonucu dura ile araknoid arasında kan birikimi. Yaşlılarda serebral atrofi köprü venlerini gerer ve düşük enerjili travmalarla bile yırtılmalarına neden olur.",
        "mechanismEn": "Blood accumulation between dura and arachnoid due to tearing of bridging veins. In elderly patients, cerebral atrophy stretches bridging veins, making them susceptible to rupture even with low-energy trauma.",
        "etiology": "Travma (köprü ven rüptürü). Yaşlılar (serebral atrofi → ven gerilmesi), antikoagülan kullanımı, alkolizm, koagülopati. Bebeklerde: Non-aksidental travma (çocuk istismarı) düşünülmelidir.",
        "etiologyEn": "Trauma (bridging vein rupture). Elderly (cerebral atrophy -> vein stretching), anticoagulant use, alcoholism, coagulopathy. In infants: Non-accidental trauma (child abuse) should be considered.",
        "differentialDiagnosis": ["Epidural Hematom (Bikonveks, arteriyel, sütürleri geçmez)", "Subdural Higroma (BOS yoğunluğu, travma sonrası)", "Subdural Ampiyem (Ateş, rim kontrastlanması, DWI kısıtlanması)", "Araknoid Kist (BOS dansitesi, kitle etkisi az)"],
        "differentialDiagnosisEn": ["Epidural Hematoma (Biconvex, arterial, does not cross sutures)", "Subdural Hygroma (CSF density, post-traumatic)", "Subdural Empyema (Fever, rim enhancement, DWI restriction)", "Arachnoid Cyst (CSF density, minimal mass effect)"],
        "goldStandard": "BT (kontrastsız): Akut SDH hiperdens hilal. İzodens subakut SDH için MRI (T1 hiperintens Met-Hb) daha duyarlıdır.",
        "goldStandardEn": "CT (non-contrast): Acute SDH hyperdense crescent. MRI (T1 hyperintense Met-Hb) is more sensitive for isodense subacute SDH.",
        "clinicalPearl": "Hilal şekli + sütürleri geçer + dural refleksiyonları geçmez = SDH. Subakut izodens SDH: BT'de gözden kaçabilir - orta hat şiftine ve sulkal asimetriye dikkat et.",
        "clinicalPearlEn": "Crescent shape + crosses sutures + does not cross dural reflections = SDH. Subacute isodense SDH: May be missed on CT - look for midline shift and sulcal asymmetry.",
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
        "mechanism": "Temporal kemik kırığı sonucu A. meningea media rüptürü ile dura ve kafatası arasında arteriyel kan birikimi. Dura periosta yapışık olduğu için bikonveks (lens) şekil alır.",
        "mechanismEn": "Arterial blood accumulation between dura and skull due to middle meningeal artery rupture from temporal bone fracture. Takes biconvex (lens) shape because dura is adherent to periosteum.",
        "etiology": "Travma → temporal kemik kırığı → A. meningea media rüptürü (%85-95). Daha nadir: Meningeal ven veya dural sinüs yaralanması, koagülopati.",
        "etiologyEn": "Trauma -> temporal bone fracture -> middle meningeal artery rupture (85-95%). Less common: Meningeal vein or dural sinus injury, coagulopathy.",
        "differentialDiagnosis": ["Subdural Hematom (Hilal şekli, sütürleri geçer, venöz kaynaklı)", "Subaraknoid Kanama (Sisternalarda, sulkuslarda hiperdansite)", "İntraserebral Hematom (Parankimal, hipertansif lokasyonlar)", "Dural Metastaz (Bilinen malignite, düzensiz kontrastlanma)"],
        "differentialDiagnosisEn": ["Subdural Hematoma (Crescent shape, crosses sutures, venous origin)", "Subarachnoid Hemorrhage (Hyperdensity in cisterns and sulci)", "Intracerebral Hematoma (Parenchymal, hypertensive locations)", "Dural Metastasis (Known malignancy, irregular enhancement)"],
        "goldStandard": "BT (kontrastsız): Bikonveks hiperdens koleksiyon + kemik penceresinde kırık hattı. BT anjiyo: Aktif kanama odağı (swirl sign).",
        "goldStandardEn": "CT (non-contrast): Biconvex hyperdense collection + fracture line on bone window. CT angiography: Active bleeding focus (swirl sign).",
        "clinicalPearl": "Bikonveks (lens) şekli + sütürleri geçmez + temporal kemik kırığı = EDH. 'Swirl sign' (girdap işareti) aktif kanamayı gösterir → acil cerrahi.",
        "clinicalPearlEn": "Biconvex (lens) shape + does not cross sutures + temporal bone fracture = EDH. 'Swirl sign' indicates active bleeding -> emergency surgery.",
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
        "mechanism": "Subaraknoid mesafeye (beyin ve araknoid zar arasına) kanama. Anevrizma rüptüründe yüksek basınçlı arteriyel kan BOS ile karışır. Vazospazm mekanizması: Oksi-hemoglobin yıkım ürünlerinin damar düz kasını uyarması.",
        "mechanismEn": "Hemorrhage into the subarachnoid space (between brain and arachnoid membrane). In aneurysm rupture, high-pressure arterial blood mixes with CSF. Vasospasm mechanism: Oxyhemoglobin degradation products stimulating vascular smooth muscle.",
        "etiology": "Travmatik (%80): En sık neden. Non-travmatik: Anevrizma rüptürü (%80 non-travmatik), perimezensefalik SAK (%10), AVM, vaskülit, koagülopati.",
        "etiologyEn": "Traumatic (80%): Most common cause. Non-traumatic: Aneurysm rupture (80% of non-traumatic), perimesencephalic SAH (10%), AVM, vasculitis, coagulopathy.",
        "differentialDiagnosis": ["İntraserebral Kanama (Parankimal hematom, hipertansif lokasyonlar)", "Reversibl Serebral Vazokonstriksiyon Sendromu (RCVS - Gök gürültüsü baş ağrısı, segmental vazospazm)", "Posterior Fossa Tümör Kanaması (Kitle etkisi, kontrastlanma)", "Serebral Venöz Tromboz (Venöz infarkt, Delta işareti)"],
        "differentialDiagnosisEn": ["Intracerebral Hemorrhage (Parenchymal hematoma, hypertensive locations)", "Reversible Cerebral Vasoconstriction Syndrome (RCVS - Thunderclap headache, segmental vasospasm)", "Posterior Fossa Tumor Hemorrhage (Mass effect, enhancement)", "Cerebral Venous Thrombosis (Venous infarct, Delta sign)"],
        "goldStandard": "BT (kontrastsız): İlk 6 saatte %98 duyarlılık. BT anjiyo: Anevrizma tespiti. Negatif BT'de LP (ksantokromi).",
        "goldStandardEn": "CT (non-contrast): 98% sensitivity within first 6 hours. CT angiography: Aneurysm detection. LP if CT negative (xanthochromia).",
        "clinicalPearl": "'Hayatımın en kötü baş ağrısı' + BT'de bazal sisternalarda hiperdansite = SAK. Fisher skalası vazospazm riskini tahmin eder. 4-14. günler vazospazm penceresi.",
        "clinicalPearlEn": "'Worst headache of my life' + hyperdensity in basal cisterns on CT = SAH. Fisher scale predicts vasospasm risk. Days 4-14 are the vasospasm window.",
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
        "mechanism": "Enfeksiyon ajanının beyin parankimine ulaşması sonucu serebritis gelişir, ardından kapsüllenme ile apse oluşur. Merkezdeki püy (visköz sıvı) DWI'da difüzyon kısıtlanmasına neden olur.",
        "mechanismEn": "Infection agent reaches brain parenchyma causing cerebritis, followed by encapsulation forming an abscess. Central pus (viscous fluid) causes diffusion restriction on DWI.",
        "etiology": "Bakteriyel (%60-70): Streptococcus, Staphylococcus. Yayılım: Hematojen, komşuluk (sinüzit, otit, mastoidit), penetran travma, cerrahi. İmmünsuprese: Fungal (Aspergillus), Toxoplazma, Nocardia.",
        "etiologyEn": "Bacterial (60-70%): Streptococcus, Staphylococcus. Spread: Hematogenous, contiguous (sinusitis, otitis, mastoiditis), penetrating trauma, surgery. Immunosuppressed: Fungal (Aspergillus), Toxoplasma, Nocardia.",
        "differentialDiagnosis": ["GBM (Kalın düzensiz kontrastlanan halka, DWI merkez kolaylaşmış)", "Metastaz (Multipl, gri-beyaz bileşke, bilinen primer)", "Demiyelinizan Lezyon (Open-ring kontrastlanma, MS öyküsü)", "Subakut İnfarkt (Vasküler teritory, giral kontrastlanma)"],
        "differentialDiagnosisEn": ["GBM (Thick irregular ring enhancement, DWI center facilitated)", "Metastasis (Multiple, gray-white junction, known primary)", "Demyelinating Lesion (Open-ring enhancement, MS history)", "Subacute Infarct (Vascular territory, gyral enhancement)"],
        "goldStandard": "MRI DWI/ADC: Merkezi difüzyon kısıtlılığı (DWI parlak/ADC karanlık). T1+C: İnce düzgün halka kontrastlanma. Dual rim sign (SWI).",
        "goldStandardEn": "MRI DWI/ADC: Central diffusion restriction (DWI bright/ADC dark). T1+C: Thin smooth ring enhancement. Dual rim sign (SWI).",
        "clinicalPearl": "Halka kontrastlanma + merkezi DWI kısıtlanması + ateş = Apse. GBM'de merkez DWI genellikle kolaylaşmıştır. Dual rim sign (SWI) apse için spesifiktir.",
        "clinicalPearlEn": "Ring enhancement + central DWI restriction + fever = Abscess. In GBM, central DWI is usually facilitated. Dual rim sign (SWI) is specific for abscess.",
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
        "mechanism": "Schwann hücrelerinin benign proliferasyonu ile 8. kranial sinirin vestibüler dalında yavaş büyüyen kitle oluşur. İnternal akustik kanaldan serebellopontin köşeye doğru büyür ('dondurma külahı').",
        "mechanismEn": "Benign proliferation of Schwann cells forms a slow-growing mass on the vestibular branch of the 8th cranial nerve. Grows from the internal auditory canal into the cerebellopontine angle ('ice cream cone').",
        "etiology": "Sporadik (%95) veya NF2 ilişkili (bilateral). Schwann hücrelerinden köken alır. NF2 gen mutasyonu (merlin proteini). 8. kranial sinirin vestibüler dalı.",
        "etiologyEn": "Sporadic (95%) or NF2-associated (bilateral). Originates from Schwann cells. NF2 gene mutation (merlin protein). Vestibular branch of 8th cranial nerve.",
        "differentialDiagnosis": ["Menenjiyom (Geniş dural taban, dural kuyruk, kalsifikasyon)", "Epidermoid Kist (DWI parlak, kontrastlanmaz)", "Fasiyal Sinir Schwannomu (Fasiyal kanal genişlemiş)", "Araknoid Kist (BOS sinyali, kontrastlanmaz)"],
        "differentialDiagnosisEn": ["Meningioma (Broad dural base, dural tail, calcification)", "Epidermoid Cyst (DWI bright, no enhancement)", "Facial Nerve Schwannoma (Facial canal widened)", "Arachnoid Cyst (CSF signal, no enhancement)"],
        "goldStandard": "MRI T1+C (ince kesit): İnternal akustik kanal genişlemesi + yoğun kontrastlanan kitle. CISS/FIESTA sekansı küçük tümörlerin tespitinde üstün.",
        "goldStandardEn": "MRI T1+C (thin section): Internal auditory canal widening + intensely enhancing mass. CISS/FIESTA sequences superior for detecting small tumors.",
        "clinicalPearl": "CPA kitlesi + İAK genişlemesi + 'dondurma külahı' görünümü = Schwannom. Bilateral ise NF2 kesin. Epidermoidin aksine DWI kısıtlanmaz.",
        "clinicalPearlEn": "CPA mass + IAC widening + 'ice cream cone' appearance = Schwannoma. If bilateral, NF2 is definitive. Unlike epidermoid, no DWI restriction.",
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
        "mechanismEn": "Monoclonal proliferation from anterior pituitary cells. Macroadenomas cause sellar enlargement and optic chiasm compression. On dynamic MRI, normal gland enhances first; microadenoma remains relatively hypointense (less enhancing).",
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
        "etiology": "Adenohipofiz hücrelerinin monoklonal proliferasyonu. Sporadik (%95). Sendromik: MEN1 (prolaktinoma + hiperparatiroidi + pankreas tümörü), Carney kompleksi, McCune-Albright.",
        "etiologyEn": "Monoclonal proliferation of anterior pituitary cells. Sporadic (95%). Syndromic: MEN1 (prolactinoma + hyperparathyroidism + pancreatic tumor), Carney complex, McCune-Albright.",
        "differentialDiagnosis": ["Kraniyofarenjiom (Supraseller, kalsifiye, kistik, T1 hiperintens)", "Rathke Yarığı Kisti (İntra/supraseller, kontrast tutmaz, T1 hiperintens)", "Hipofizer Apopleksi (Akut kanama, acil)", "Menenjiyom (Dural taban, yoğun homojen kontrast)"],
        "differentialDiagnosisEn": ["Craniopharyngioma (Suprasellar, calcified, cystic, T1 hyperintense)", "Rathke Cleft Cyst (Intra/suprasellar, no enhancement, T1 hyperintense)", "Pituitary Apoplexy (Acute hemorrhage, emergency)", "Meningioma (Dural base, intense homogeneous enhancement)"],
        "goldStandard": "MRI dinamik kontrastlı (koronal ince kesit): Mikroadenom erken fazda hipointens, normal gland kontrastlanır. Prolaktin düzeyi >200 ng/mL = Prolaktinoma.",
        "goldStandardEn": "Dynamic contrast-enhanced MRI (coronal thin section): Microadenoma hypointense in early phase, normal gland enhances. Prolactin level >200 ng/mL = Prolactinoma.",
        "clinicalPearl": "Dinamik MRI'da normal gland önce parlar, mikroadenom geç kalır (hipointens kalır). Prolaktin >200 ng/mL ise biyopsiye gerek yok, Dopamin agonisti başla.",
        "clinicalPearlEn": "On dynamic MRI, normal gland enhances first, microadenoma remains behind (stays hypointense). If prolactin >200 ng/mL, no biopsy needed, start dopamine agonist.",
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
        "mechanismEn": "Hematogenous spread to the gray-white matter junction (area where blood flow slows and emboli become trapped). Tumor cells from the primary tumor cause local invasion and vasogenic edema.",
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
        "etiology": "Hematojen yayılım. Primer kaynaklar: Akciğer (%40-50), Meme (%15-25), Melanom (%5-20), Böbrek (%5-10), Kolorektal (%5). Hemorajik metastazlar: 'MR. CT' (Melanom, Renal, Koryokarsinom, Tiroid).",
        "etiologyEn": "Hematogenous spread. Primary sources: Lung (40-50%), Breast (15-25%), Melanoma (5-20%), Kidney (5-10%), Colorectal (5%). Hemorrhagic metastases: 'MR. CT' (Melanoma, Renal, Choriocarcinoma, Thyroid).",
        "differentialDiagnosis": ["GBM (Tek, infiltratif, kelebek paterni, korpus kallozum geçişi)", "Beyin Apsesi (İnce düzgün halka, DWI kısıtlı merkez)", "Primer CNS Lenfoma (Periventriküler, homojen, DWI kısıtlı)", "Demiyelinizan Hastalık (Open-ring, MS öyküsü)"],
        "differentialDiagnosisEn": ["GBM (Solitary, infiltrative, butterfly pattern, corpus callosum crossing)", "Brain Abscess (Thin smooth ring, DWI restricted center)", "Primary CNS Lymphoma (Periventricular, homogeneous, DWI restricted)", "Demyelinating Disease (Open-ring, MS history)"],
        "goldStandard": "MRI T1+C (üç düzlem, ince kesit): Multipl kontrastlanan lezyonlar. Çift doz kontrast veya SWI hemorajik metastaz için. Tüm vücut PET/BT primer odak araştırması.",
        "goldStandardEn": "MRI T1+C (three planes, thin section): Multiple enhancing lesions. Double dose contrast or SWI for hemorrhagic metastasis. Whole body PET/CT for primary source investigation.",
        "clinicalPearl": "Multipl kontrastlanan lezyonlar + gri-beyaz bileşke + geniş ödem/küçük kitle = Metastaz. Peritümöral ödemde MRS normal (GBM'de anormal - infiltrasyon).",
        "clinicalPearlEn": "Multiple enhancing lesions + gray-white junction + large edema/small mass = Metastasis. MRS is normal in peritumoral edema (abnormal in GBM - infiltration).",
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
        "nameEn": "Cavernous Malformation (Cavernoma)",
        "category": "Vasküler",
        "categoryEn": "Vascular",
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
        "keyPointsEn": [
            "Angiographically occult (low-flow/occult lesion).",
            "Multiple in familial cases (CCM genes).",
            "Carries risk of hemorrhage."
        ],
        "mechanism": "Düşük akımlı vasküler malformasyon. Genişlemiş kapiller boşluklar (sinüzoidler) arasına tekrarlayan mikrokanamalar olur. Hemosiderin birikimi T2/SWI'da karakteristik halka oluşturur.",
        "mechanismEn": "Low-flow vascular malformation. Recurrent microhemorrhages occur between dilated capillary spaces (sinusoids). Hemosiderin deposition creates the characteristic ring on T2/SWI.",
        "etiology": "Sporadik (%80, genellikle tek) veya ailesel (%20, multipl - CCM1/CCM2/CCM3 gen mutasyonları). Düşük akımlı vasküler malformasyon (kapiller düzeyde). Radyasyon sonrası gelişebilir.",
        "etiologyEn": "Sporadic (80%, usually solitary) or familial (20%, multiple - CCM1/CCM2/CCM3 gene mutations). Low-flow vascular malformation (capillary level). May develop after radiation.",
        "differentialDiagnosis": ["Hemorajik Metastaz (Kontrastlanma, peritümöral ödem)", "Amiloid Anjiyopati (Yaşlı, lobar mikrokanamalar, SWI'da yaygın)", "Kapiller Telenjiektazi (SWI'da küçük, T1+C'de kontrastlanma)", "Diffüz Aksonal Yaralanma (Travma öyküsü, gri-beyaz bileşke)"],
        "differentialDiagnosisEn": ["Hemorrhagic Metastasis (Enhancement, peritumoral edema)", "Amyloid Angiopathy (Elderly, lobar microbleeds, widespread on SWI)", "Capillary Telangiectasia (Small on SWI, enhancement on T1+C)", "Diffuse Axonal Injury (Trauma history, gray-white junction)"],
        "goldStandard": "MRI SWI/GRE: Hemosiderin halkası (blooming artefaktı). T2: Popcorn görünümü. Konvansiyonel anjiyografi negatiftir (okült lezyon).",
        "goldStandardEn": "MRI SWI/GRE: Hemosiderin ring (blooming artifact). T2: Popcorn appearance. Conventional angiography is negative (occult lesion).",
        "clinicalPearl": "T2'de 'popcorn' + SWI'da hemosiderin halkası + anjiyografide görülmez = Kavernom. Multipl ise ailesel kavernomatoz düşün (CCM genleri). DVA eşliği sık.",
        "clinicalPearlEn": "T2 'popcorn' + SWI hemosiderin ring + angiographically occult = Cavernoma. If multiple, consider familial cavernomatosis (CCM genes). DVA association is common.",
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
        "nameEn": "Diffuse Axonal Injury (DAI)",
        "category": "Travma",
        "categoryEn": "Trauma",
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
        "keyPointsEn": [
            "Rotational acceleration/deceleration injury.",
            "Clinical-radiological mismatch (low GCS but CT may be normal).",
            "SWI is the most sensitive sequence."
        ],
        "mechanism": "Rotasyonel hızlanma/yavaşlama kuvvetleri farklı yoğunluktaki dokularda (gri-beyaz cevher bileşkesi) kesme (shearing) stresi oluşturur ve akson hasarına yol açar. Aksonal hasar mikro-kanamalara neden olur.",
        "mechanismEn": "Rotational acceleration/deceleration forces create shearing stress at tissues of different density (gray-white matter junction) leading to axonal damage. Axonal injury causes microhemorrhages.",
        "etiology": "Yüksek enerjili travma (trafik kazası). Rotasyonel kesme (shearing) kuvvetleri → aksonal hasar. Adams sınıflaması: Evre 1 (gri-beyaz bileşke), Evre 2 (korpus kallozum), Evre 3 (beyin sapı - en kötü prognoz).",
        "etiologyEn": "High-energy trauma (motor vehicle accident). Rotational shearing forces -> axonal damage. Adams classification: Grade 1 (gray-white junction), Grade 2 (corpus callosum), Grade 3 (brainstem - worst prognosis).",
        "differentialDiagnosis": ["Serebral Kontüzyon (Kortikal, inferior frontal/anterior temporal, kanama odaklı)", "Çoklu Serebral Metastaz (Multipl, kontrastlanma, bilinen primer)", "Fat Embolisi Sendromu (Uzun kemik kırığı, starfield paterni, DWI)", "Amiloid Anjiyopati (Yaşlı, lobar dağılım, travma yok)"],
        "differentialDiagnosisEn": ["Cerebral Contusion (Cortical, inferior frontal/anterior temporal, hemorrhagic focus)", "Multiple Cerebral Metastases (Multiple, enhancement, known primary)", "Fat Embolism Syndrome (Long bone fracture, starfield pattern, DWI)", "Amyloid Angiopathy (Elderly, lobar distribution, no trauma)"],
        "goldStandard": "MRI SWI: Multipl mikrokanamalar (blooming). DWI: Akut aksonal hasar. BT: Sıklıkla normal (%50-80), ancak acilde ilk tercih.",
        "goldStandardEn": "MRI SWI: Multiple microhemorrhages (blooming). DWI: Acute axonal injury. CT: Often normal (50-80%), but first choice in emergency.",
        "clinicalPearl": "BT normal + düşük GKS = DAI düşün → MRI SWI iste. Gri-beyaz bileşke + korpus kallozum splenium + dorsolateral beyin sapı = Klasik DAI üçlüsü.",
        "clinicalPearlEn": "Normal CT + low GCS = Consider DAI -> Order MRI SWI. Gray-white junction + corpus callosum splenium + dorsolateral brainstem = Classic DAI triad.",
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
        "nameEn": "Idiopathic Intracranial Hypertension (Pseudotumor Cerebri)",
        "category": "Sellar/Vasküler",
        "categoryEn": "Sellar/Vascular",
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
        "keyPointsEn": [
            "Obese women of childbearing age.",
            "Papilledema, headache, visual disturbances.",
            "Venous sinus thrombosis must be excluded."
        ],
        "mechanism": "Artmış intrakraniyal basınç ile BOS emilimi veya venöz drenaj bozukluğu arasındaki dengesizlik. Obezitede intraabdominal basınç artışı venöz dönüşü engeller ve intrakraniyal basıncı artırır.",
        "mechanismEn": "Imbalance between CSF absorption or venous drainage disturbance and increased intracranial pressure. In obesity, increased intra-abdominal pressure impedes venous return and raises intracranial pressure.",
        "etiology": "İdiyopatik. Risk faktörleri: Obezite, kadın cinsiyet, doğurganlık çağı. İlaçlar: Tetrasiklin, A vitamini, büyüme hormonu, OKS. BOS emilim bozukluğu veya venöz basınç artışı.",
        "etiologyEn": "Idiopathic. Risk factors: Obesity, female sex, childbearing age. Medications: Tetracycline, vitamin A, growth hormone, OCP. CSF absorption dysfunction or increased venous pressure.",
        "differentialDiagnosis": ["Serebral Venöz Sinüs Trombozu (Akut başlangıç, MRV'de akım defekti)", "İntrakranial Kitle Lezyonu (Papilödem + fokal nörolojik defisit)", "Meningeal Karsinomatoz (Leptomeningeal kontrastlanma)", "Sarkoidoz (Leptomeningeal, hipotalamik tutulum)"],
        "differentialDiagnosisEn": ["Cerebral Venous Sinus Thrombosis (Acute onset, flow defect on MRV)", "Intracranial Mass Lesion (Papilledema + focal neurological deficit)", "Meningeal Carcinomatosis (Leptomeningeal enhancement)", "Sarcoidosis (Leptomeningeal, hypothalamic involvement)"],
        "goldStandard": "MRI + MRV: Empty sella, optik sinir kılıf genişlemesi, transvers sinüs stenozu. LP: Açılış basıncı >25 cmH2O, normal BOS biyokimyası.",
        "goldStandardEn": "MRI + MRV: Empty sella, optic nerve sheath distension, transverse sinus stenosis. LP: Opening pressure >25 cmH2O, normal CSF biochemistry.",
        "clinicalPearl": "Obez genç kadın + baş ağrısı + papilödem + Empty sella + optik sinir kılıf genişlemesi = İİH. MRV mutlaka yapılmalı (venöz sinüs trombozu dışla).",
        "clinicalPearlEn": "Obese young woman + headache + papilledema + Empty sella + optic nerve sheath distension = IIH. MRV must be performed (exclude venous sinus thrombosis).",
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
        "nameEn": "Normal Pressure Hydrocephalus (NPH)",
        "category": "Dejeneratif",
        "categoryEn": "Degenerative",
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
        "keyPointsEn": [
            "Classic Triad: Gait disturbance ('magnetic gait'), Dementia, Urinary incontinence.",
            "Disproportionately enlarged subarachnoid space hydrocephalus (DESH) findings."
        ],
        "mechanism": "BOS emilim bozukluğu nedeniyle ventriküller genişler ancak BOS basıncı normal sınırlarda kalır. Periventrikler beyaz cevherdeki gerilme frontal motor lifleri etkileyerek yürüyüş bozukluğuna neden olur.",
        "mechanismEn": "Ventricles enlarge due to CSF absorption dysfunction but CSF pressure remains within normal limits. Stretching of periventricular white matter affects frontal motor fibers causing gait disturbance.",
        "etiology": "İdiyopatik (%50+). Sekonder: Önceki SAK, menenjit, travma. BOS emilim bozukluğu (araknoid granülasyonlar). Yaşlı popülasyonda (%60-80 yaş).",
        "etiologyEn": "Idiopathic (50%+). Secondary: Previous SAH, meningitis, trauma. CSF absorption dysfunction (arachnoid granulations). Elderly population (60-80 years).",
        "differentialDiagnosis": ["Alzheimer Hastalığı (Hipokampal atrofi, medial temporal lob atrofisi, Evans indeksi normal)", "Serebral Atrofi (Sulkuslar orantılı genişlemiş, ex-vacuo ventrikulomegali)", "Obstrüktif Hidrosefali (Akut başlangıç, baş ağrısı, 4. ventrikül/akuadukt obstrüksiyonu)", "Subkortikal Vasküler Demans (Periventriküler beyaz cevher lezyonları)"],
        "differentialDiagnosisEn": ["Alzheimer Disease (Hippocampal atrophy, medial temporal lobe atrophy, normal Evans index)", "Cerebral Atrophy (Proportionally enlarged sulci, ex-vacuo ventriculomegaly)", "Obstructive Hydrocephalus (Acute onset, headache, 4th ventricle/aqueduct obstruction)", "Subcortical Vascular Dementia (Periventricular white matter lesions)"],
        "goldStandard": "MRI: Evans indeksi >0.3, DESH paterni (konveksite sıkışma + Sylvian fissür genişlemesi), akuadukt flow void artışı. Tap testi (30-50 mL BOS boşaltma sonrası yürüyüş iyileşmesi).",
        "goldStandardEn": "MRI: Evans index >0.3, DESH pattern (convexity crowding + Sylvian fissure widening), increased aqueductal flow void. Tap test (gait improvement after 30-50 mL CSF drainage).",
        "clinicalPearl": "Yaşlıda yürüyüş bozukluğu (ilk semptom) + ventrikülomegali + konveksite sıkışma + Evans >0.3 = NPH. Tap testi pozitifse şant tedavisi yararlı. 'Wet, wacky, wobbly' = İdrar, demans, yürüyüş.",
        "clinicalPearlEn": "Gait disturbance in elderly (first symptom) + ventriculomegaly + convexity crowding + Evans >0.3 = NPH. If tap test positive, shunt therapy is beneficial. 'Wet, wacky, wobbly' = Urinary incontinence, dementia, gait.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Normal Pressure Hydrocephalus",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016."
        ]
    },
    {
        "id": "tuberous_sclerosis",
        "name": "Tuberoskleroz Kompleksi",
        "nameEn": "Tuberous Sclerosis Complex (TSC)",
        "category": "Fakomatoz",
        "categoryEn": "Phakomatosis",
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
        "keyPointsEn": [
            "Epilepsy, Skin lesions (adenoma sebaceum).",
            "Renal AML (Angiomyolipoma), Cardiac Rhabdomyomas.",
            "Follow-up required for SEGA development."
        ],
        "mechanism": "TSC1/TSC2 gen mutasyonu mTOR yolağının aşırı aktivasyonuna yol açar. Bu hücresel büyüme ve proliferasyonu artırarak hamartom oluşumuna neden olur. Kortikal tüberler nörogliyal migrasyon anomalisidir.",
        "mechanismEn": "TSC1/TSC2 gene mutation leads to overactivation of the mTOR pathway. This increases cellular growth and proliferation causing hamartoma formation. Cortical tubers are neuroglial migration anomalies.",
        "etiology": "Otozomal dominant. TSC1 (hamartin, 9q34) veya TSC2 (tüberin, 16p13.3) gen mutasyonu. mTOR yolağı aktivasyonu. De novo mutasyon %60-70.",
        "etiologyEn": "Autosomal dominant. TSC1 (hamartin, 9q34) or TSC2 (tuberin, 16p13.3) gene mutation. mTOR pathway activation. De novo mutation 60-70%.",
        "differentialDiagnosis": ["Periventriküler Heterotopi (Subependimal, kontrastlanmaz, kalsifiye değil)", "Santral Nörositom (Foramen Monro, kontrastlanır, genç erişkin)", "Subependimal Yayılım (Metastaz veya gliom, düzensiz, kontrastlanır)", "Sturge-Weber Sendromu (Leptomeningeal anjiomatozis, kortikal kalsifikasyon)"],
        "differentialDiagnosisEn": ["Periventricular Heterotopia (Subependymal, no enhancement, not calcified)", "Central Neurocytoma (Foramen of Monro, enhances, young adult)", "Subependymal Spread (Metastasis or glioma, irregular, enhances)", "Sturge-Weber Syndrome (Leptomeningeal angiomatosis, cortical calcification)"],
        "goldStandard": "MRI beyin (FLAIR + T1+C): Kortikal tüberler, SEN, SEGA tespiti. BT: Kalsifiye SEN'ler. Genetik test: TSC1/TSC2 mutasyon analizi.",
        "goldStandardEn": "MRI brain (FLAIR + T1+C): Detection of cortical tubers, SEN, SEGA. CT: Calcified SENs. Genetic testing: TSC1/TSC2 mutation analysis.",
        "clinicalPearl": "Kalsifiye subependimal nodüller + kortikal tüberler + SEGA (Foramen Monro) = TSC. SEGA >1cm ve büyüyorsa tedavi (mTOR inhibitörü veya cerrahi). Renal AML ve LAM taraması unutulmamalı.",
        "clinicalPearlEn": "Calcified subependymal nodules + cortical tubers + SEGA (Foramen of Monro) = TSC. If SEGA >1cm and growing, treat (mTOR inhibitor or surgery). Do not forget renal AML and LAM screening.",
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
        "nameEn": "Arteriovenous Malformation (AVM)",
        "category": "Vasküler",
        "categoryEn": "Vascular",
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
        "keyPointsEn": [
            "Congenital shunt without capillary bed.",
            "High-flow lesion.",
            "Spetzler-Martin grading for surgical risk."
        ],
        "mechanism": "Konjenital vasküler anomali. Kapiller yatak gelişmediği için arteriyel kan doğrudan venöz sisteme drene olur (AV şant). Yüksek akım nidusta anevrizma ve çevre dokuda iskemi/kanama riski oluşturur.",
        "mechanismEn": "Congenital vascular anomaly. Arterial blood drains directly into the venous system (AV shunt) because the capillary bed fails to develop. High flow creates risk of aneurysm in the nidus and ischemia/hemorrhage in surrounding tissue.",
        "etiology": "Konjenital vasküler malformasyon. Embriyolojik dönemde kapiller yatağın gelişmemesi → direkt arteriyovenöz şant. Sporadik. HHT (Osler-Weber-Rendu) ile ilişkili olabilir.",
        "etiologyEn": "Congenital vascular malformation. Failure of capillary bed development during embryonic period -> direct arteriovenous shunt. Sporadic. May be associated with HHT (Osler-Weber-Rendu).",
        "differentialDiagnosis": ["Dural AV Fistül (Edinsel, dural besleyiciler, pulsatil tinnitus)", "Kavernom (Düşük akımlı, anjiyografide görülmez)", "Hemorajik Tümör (Kontrastlanma, kitle etkisi)", "Gelişimsel Venöz Anomali (Caput medusae, düşük akımlı)"],
        "differentialDiagnosisEn": ["Dural AV Fistula (Acquired, dural feeders, pulsatile tinnitus)", "Cavernoma (Low-flow, angiographically occult)", "Hemorrhagic Tumor (Enhancement, mass effect)", "Developmental Venous Anomaly (Caput medusae, low-flow)"],
        "goldStandard": "DSA (Dijital Subtraksiyon Anjiyografi): Altın standart. Nidus, besleyici arterler, drene olan venler. MRI/MRA: Tarama. Spetzler-Martin sınıflaması (boyut, lokasyon, venöz drenaj).",
        "goldStandardEn": "DSA (Digital Subtraction Angiography): Gold standard. Nidus, feeding arteries, draining veins. MRI/MRA: Screening. Spetzler-Martin classification (size, location, venous drainage).",
        "clinicalPearl": "T2'de serpiginöz flow void ('solucan paketi') + BT anjiyoda erken venöz dolum = AVM. Spetzler-Martin skoru tedavi kararını belirler. Kanama riski yıllık %2-4, önceki kanama riski artırır.",
        "clinicalPearlEn": "Serpiginous flow voids on T2 ('bag of worms') + early venous filling on CTA = AVM. Spetzler-Martin score determines treatment decision. Annual bleeding risk 2-4%, prior hemorrhage increases risk.",
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
        "nameEn": "Cerebral Venous Sinus Thrombosis (CVST)",
        "category": "Vasküler",
        "categoryEn": "Vascular",
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
        "keyPointsEn": [
            "Hypercoagulable states (OCP use, pregnancy, Factor V Leiden).",
            "Hemorrhagic infarcts not conforming to arterial territories."
        ],
        "mechanism": "Venöz sinüste trombüs oluşumu venöz drenajı engeller. Venöz basınç artışı parankimal venöz infarkt ve hemorajiye yol açar. Arteriyel sulama alanlarına uymayan hemorajik lezyonlar oluşur.",
        "mechanismEn": "Thrombus formation in venous sinus obstructs venous drainage. Increased venous pressure leads to parenchymal venous infarction and hemorrhage. Hemorrhagic lesions not conforming to arterial territories develop.",
        "etiology": "Hiperkoagülabilite: OKS kullanımı, gebelik/postpartum, Faktör V Leiden, Protein C/S eksikliği, antifosfolipid sendromu. Enfeksiyon (sinüzit, otit, mastoidit). Dehidratasyon. Malignite.",
        "etiologyEn": "Hypercoagulability: OCP use, pregnancy/postpartum, Factor V Leiden, Protein C/S deficiency, antiphospholipid syndrome. Infection (sinusitis, otitis, mastoiditis). Dehydration. Malignancy.",
        "differentialDiagnosis": ["Arteriyel İskemik İnme (Vasküler teritory uyumu, DWI kısıtlanması)", "Hemorajik İnme (Hipertansif lokasyonlar, basal ganglia)", "PRES (Paryeto-oksipital, vazojenik ödem, DWI negatif)", "Dural AV Fistül (Pulsatil tinnitus, venöz konjesyon)"],
        "differentialDiagnosisEn": ["Arterial Ischemic Stroke (Vascular territory concordance, DWI restriction)", "Hemorrhagic Stroke (Hypertensive locations, basal ganglia)", "PRES (Parieto-occipital, vasogenic edema, DWI negative)", "Dural AV Fistula (Pulsatile tinnitus, venous congestion)"],
        "goldStandard": "MRV (MR Venografi): Akım defekti/sinüs oklüzyonu. BT Venografi: Empty Delta işareti. MRI T1/T2: Flow void kaybı + subakut trombüste T1 hiperintensite.",
        "goldStandardEn": "MRV (MR Venography): Flow defect/sinus occlusion. CT Venography: Empty Delta sign. MRI T1/T2: Loss of flow void + T1 hyperintensity in subacute thrombus.",
        "clinicalPearl": "Genç kadın + baş ağrısı + arteriyel alana uymayan hemorajik infarkt = CVST düşün. Empty Delta işareti (SSS'de dolum defekti) + cord sign (hiperdens sinüs) = Klasik bulgular. MRV mutlaka istenmelidir.",
        "clinicalPearlEn": "Young woman + headache + hemorrhagic infarct not conforming to arterial territory = Consider CVST. Empty Delta sign (filling defect in SSS) + cord sign (hyperdense sinus) = Classic findings. MRV must be ordered.",
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
        "nameEn": "Herpes Simplex Encephalitis (HSE)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
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
        "keyPointsEn": [
            "Caused by HSV-1. Involves the limbic system.",
            "Basal ganglia are spared (unlike MCA infarct).",
            "High mortality - Acyclovir should be started immediately on suspicion."
        ],
        "mechanism": "HSV-1 trigeminal gangliyondaki latent enfeksiyondan reaktive olur ve temporal loba yayılır (nörotropizm). Nekrotizan ensefalit gelişir, hemorajik nekroz ve ödem oluşur.",
        "mechanismEn": "HSV-1 reactivates from latent infection in the trigeminal ganglion and spreads to the temporal lobe (neurotropism). Necrotizing encephalitis develops with hemorrhagic necrosis and edema.",
        "etiology": "HSV-1 (erişkin), HSV-2 (neonatal). Latent trigeminal gangliyon enfeksiyonunun reaktivasyonu veya primer enfeksiyon. Temporal loba nörotropizm (olfaktör/trigeminal sinir yolu).",
        "etiologyEn": "HSV-1 (adult), HSV-2 (neonatal). Reactivation of latent trigeminal ganglion infection or primary infection. Neurotropism to temporal lobe (olfactory/trigeminal nerve pathway).",
        "differentialDiagnosis": ["MCA İnfarktı (Bazal ganglionlar tutulur, vasküler teritory)", "Limbik Ensefalit (Otoimmün, anti-NMDAR, bilateral medial temporal)", "Gliom (Kitle etkisi, kontrastlanma, yavaş progresyon)", "Status Epileptikus (DWI kısıtlanması, kortikal ödem, nöbet öyküsü)"],
        "differentialDiagnosisEn": ["MCA Infarct (Basal ganglia involved, vascular territory)", "Limbic Encephalitis (Autoimmune, anti-NMDAR, bilateral medial temporal)", "Glioma (Mass effect, enhancement, slow progression)", "Status Epilepticus (DWI restriction, cortical edema, seizure history)"],
        "goldStandard": "MRI (FLAIR + DWI): Medial temporal lob + insula hiperintensitesi (DWI erken pozitif). BOS PCR: HSV DNA (altın standart tanı).",
        "goldStandardEn": "MRI (FLAIR + DWI): Medial temporal lobe + insula hyperintensity (DWI early positive). CSF PCR: HSV DNA (gold standard diagnosis).",
        "clinicalPearl": "Ateş + konfüzyon + medial temporal lob T2/FLAIR hiperintensitesi = HSE hasta ispat edilene kadar. Bazal ganglia KORUNMASI MCA infarktından ayırır. Asiklovir HEMEN başla, PCR sonucunu bekleme.",
        "clinicalPearlEn": "Fever + confusion + medial temporal lobe T2/FLAIR hyperintensity = HSE until proven otherwise. SPARING of basal ganglia differentiates from MCA infarct. Start Acyclovir IMMEDIATELY, do not wait for PCR results.",
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
        "nameEn": "Arachnoid Cyst",
        "category": "Konjenital",
        "categoryEn": "Congenital",
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
        "keyPointsEn": [
            "Middle cranial fossa (temporal/Sylvian) is the most common location.",
            "Usually incidental (found accidentally).",
            "Galassi classification is used."
        ],
        "mechanism": "Araknoid membranın gelişimsel duplikasyonu sonucu oluşan BOS benzeri sıvı içeren benign kist. Kist duvarı sekretuar araknoid hücrelerden oluşur ve kist yavaşça büyüyebilir.",
        "mechanismEn": "Benign cyst containing CSF-like fluid formed by developmental duplication of the arachnoid membrane. Cyst wall consists of secretory arachnoid cells and the cyst may slowly enlarge.",
        "etiology": "Konjenital (araknoidal membranın gelişimsel duplikasyonu). Edinsel (travma, enfeksiyon, cerrahi sonrası) daha nadir. BOS benzeri sıvı içerir.",
        "etiologyEn": "Congenital (developmental duplication of arachnoid membrane). Acquired (post-traumatic, post-infectious, post-surgical) is less common. Contains CSF-like fluid.",
        "differentialDiagnosis": ["Epidermoid Kist (DWI parlak, FLAIR suprese olmaz)", "Nöroepitelyal Kist (İntraparankimal, BOS sinyali)", "Kronik Subdural Higroma (Hilal şekli, travma öyküsü)", "Porensefalik Kist (Ventrikül ile bağlantılı, perinatal hasar)"],
        "differentialDiagnosisEn": ["Epidermoid Cyst (DWI bright, FLAIR does not suppress)", "Neuroepithelial Cyst (Intraparenchymal, CSF signal)", "Chronic Subdural Hygroma (Crescent shape, trauma history)", "Porencephalic Cyst (Connected to ventricle, perinatal injury)"],
        "goldStandard": "MRI: Tüm sekanslarda BOS ile izointens + FLAIR'de tam baskılanma + DWI'da kolaylaşmış difüzyon. BT: BOS dansitesinde ekstra-aksiyal koleksiyon.",
        "goldStandardEn": "MRI: Isointense to CSF on all sequences + complete suppression on FLAIR + facilitated diffusion on DWI. CT: Extra-axial collection at CSF density.",
        "clinicalPearl": "BOS sinyalinde ekstra-aksiyal kist + FLAIR'de supresyon + DWI karanlık = Araknoid kist. DWI parlaksa epidermoid kist düşün. Çoğu asemptomatik ve takip yeterli.",
        "clinicalPearlEn": "Extra-axial cyst at CSF signal + FLAIR suppression + DWI dark = Arachnoid cyst. If DWI bright, consider epidermoid cyst. Most are asymptomatic and follow-up is sufficient.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Arachnoid Cyst",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "primary_cns_lymphoma",
        "name": "Primer Serebral Lenfoma (PCNSL)",
        "nameEn": "Primary CNS Lymphoma (PCNSL)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
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
        "keyPointsEn": [
            "Responds dramatically to steroids ('Ghost tumor'). Steroids MUST NOT be given before biopsy.",
            "Usually B-cell lymphoma.",
            "Appearance is very different in immunocompromised patients (EBV-related) - necrotic, ring-enhancing."
        ],
        "mechanism": "Malign B-hücre lenfositlerin SSS parankimine infiltrasyonu. Yüksek sellülarite ve yüksek nükleus/sitoplazma oranı DWI kısıtlanmasına neden olur. Steroidler tümör hücrelerinde apoptoz indükleyerek lezyonun 'kaybolmasına' yol açar.",
        "mechanismEn": "Infiltration of malignant B-cell lymphocytes into CNS parenchyma. High cellularity and high nucleus/cytoplasm ratio cause DWI restriction. Steroids induce apoptosis in tumor cells causing the lesion to 'disappear'.",
        "etiology": "İmmünkompetan: Sporadik, ileri yaş (>60). İmmünkompromize: EBV ilişkili (HIV/AIDS, organ transplant). Diffüz büyük B-hücreli lenfoma (%90+).",
        "etiologyEn": "Immunocompetent: Sporadic, advanced age (>60). Immunocompromised: EBV-associated (HIV/AIDS, organ transplant). Diffuse large B-cell lymphoma (90%+).",
        "differentialDiagnosis": ["GBM (Periferal halka kontrastlanma, nekroz, infiltratif)", "Toksoplazmoz (AIDS, multipl halka, eksantrik hedef, DWI negatif)", "Metastaz (Multipl, gri-beyaz bileşke, bilinen primer)", "Sarkoidoz (Leptomeningeal, granülomatöz)"],
        "differentialDiagnosisEn": ["GBM (Peripheral ring enhancement, necrosis, infiltrative)", "Toxoplasmosis (AIDS, multiple rings, eccentric target, DWI negative)", "Metastasis (Multiple, gray-white junction, known primary)", "Sarcoidosis (Leptomeningeal, granulomatous)"],
        "goldStandard": "MRI (T1+C + DWI + Perfüzyon + MRS): Homojen kontrastlanma + DWI kısıtlanması + düşük rCBV + yüksek lipid/laktat piki. Stereotaktik biyopsi: Kesin tanı. Steroid öncesi biyopsi kritik.",
        "goldStandardEn": "MRI (T1+C + DWI + Perfusion + MRS): Homogeneous enhancement + DWI restriction + low rCBV + high lipid/lactate peak. Stereotactic biopsy: Definitive diagnosis. Biopsy before steroids is critical.",
        "clinicalPearl": "Derin periventriküler + homojen kontrastlanma + DWI parlak + düşük perfüzyon = Lenfoma. Steroid 'hayalet tümör' yaratır (lezyon kaybolur, biyopsi negatif gelir). BİYOPSİ ÖNCESI STEROİD VERME!",
        "clinicalPearlEn": "Deep periventricular + homogeneous enhancement + DWI bright + low perfusion = Lymphoma. Steroids create 'ghost tumor' (lesion disappears, biopsy comes back negative). DO NOT GIVE STEROIDS BEFORE BIOPSY!",
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
        "nameEn": "Intracerebral Hemorrhage (Hemorrhagic Stroke)",
        "category": "Vasküler",
        "categoryEn": "Vascular",
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
        "keyPointsEn": [
            "Most common cause: Hypertension (basal ganglia, thalamus, pons, cerebellum).",
            "Lobar hemorrhage in young patient: Consider amyloid angiopathy, AVM, cavernoma.",
            "'Spot sign' on CTA: High risk of hematoma expansion.",
            "Hemorrhage chronology is tracked by T1/T2 signal changes on MRI."
        ],
        "mechanism": "Kronik hipertansiyon perforatör arterlerde lipohyalinoz ve Charcot-Bouchard mikroanevrizmaları oluşturur. Ani basınç artışı ile bu damarlar rüptüre olarak parankimal kanamaya neden olur.",
        "mechanismEn": "Chronic hypertension causes lipohyalinosis and Charcot-Bouchard microaneurysms in perforating arteries. Sudden pressure increase ruptures these vessels causing parenchymal hemorrhage.",
        "etiology": "Hipertansif (%60-70): Bazal ganglia, talamus, pons, serebellum. Serebral Amiloid Anjiyopati (%15-20): Yaşlı, lobar. AVM/Kavernom: Genç hasta. Antikoagülan tedavi. Tümör kanaması.",
        "etiologyEn": "Hypertensive (60-70%): Basal ganglia, thalamus, pons, cerebellum. Cerebral Amyloid Angiopathy (15-20%): Elderly, lobar. AVM/Cavernoma: Young patient. Anticoagulant therapy. Tumor hemorrhage.",
        "differentialDiagnosis": ["Hemorajik İnfarkt (Vasküler teritory, giral patern)", "Hemorajik Metastaz (Multipl, ödem/kitle orantısızlığı)", "Kavernom Kanaması (Popcorn, hemosiderin halkası)", "Dural AV Fistül Kanaması (Venöz konjesyon, pulsatil tinnitus)"],
        "differentialDiagnosisEn": ["Hemorrhagic Infarct (Vascular territory, gyral pattern)", "Hemorrhagic Metastasis (Multiple, edema/mass disproportion)", "Cavernoma Hemorrhage (Popcorn, hemosiderin ring)", "Dural AV Fistula Hemorrhage (Venous congestion, pulsatile tinnitus)"],
        "goldStandard": "BT (kontrastsız): İlk değerlendirme. BT anjiyo: Spot sign (aktif kanama), altta yatan neden. MRI (subakut dönem): Kanama kronolojisi, altta yatan patoloji (tümör, AVM, kavernom).",
        "goldStandardEn": "CT (non-contrast): Initial evaluation. CT angiography: Spot sign (active bleeding), underlying cause. MRI (subacute period): Hemorrhage chronology, underlying pathology (tumor, AVM, cavernoma).",
        "clinicalPearl": "Hipertansif hastada bazal ganglia/talamus kanaması = Hipertansif ICH (en sık). Genç + lobar = AVM/kavernom ara. Yaşlı + multipl lobar mikrokanama (SWI) = Amiloid anjiyopati. Spot sign = Acil!",
        "clinicalPearlEn": "Basal ganglia/thalamus hemorrhage in hypertensive patient = Hypertensive ICH (most common). Young + lobar = Look for AVM/cavernoma. Elderly + multiple lobar microbleeds (SWI) = Amyloid angiopathy. Spot sign = Emergency!",
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
        "nameEn": "Cerebral Aneurysm (Berry Aneurysm)",
        "category": "Vasküler",
        "categoryEn": "Vascular",
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
        "keyPointsEn": [
            "Most common location: Anterior communicating artery (30%), Posterior communicating artery (25%), MCA bifurcation (20%).",
            "Rupture risk: Size >7mm, posterior circulation, irregular shape, 'daughter sac'.",
            "PHASES score predicts rupture risk.",
            "Polycystic kidney disease, Ehlers-Danlos, family history: Screening indication."
        ],
        "mechanism": "Arteriyel bifurkasyonlarda hemodinamik stres damar duvarındaki tunika media ve internal elastik laminada dejenerasyona yol açar. Sakküler genişleme oluşur ve rüptür riski taşır.",
        "mechanismEn": "Hemodynamic stress at arterial bifurcations causes degeneration of the tunica media and internal elastic lamina of the vessel wall. Saccular dilation develops and carries rupture risk.",
        "etiology": "Edinsel (dejeneratif): Hemodinamik stres → tunika media hasarı. Risk faktörleri: Hipertansiyon, sigara, aile öyküsü. İlişkili sendromlar: ADPKD, Ehlers-Danlos tip IV, Marfan, aort koarktasyonu.",
        "etiologyEn": "Acquired (degenerative): Hemodynamic stress -> tunica media damage. Risk factors: Hypertension, smoking, family history. Associated syndromes: ADPKD, Ehlers-Danlos type IV, Marfan, aortic coarctation.",
        "differentialDiagnosis": ["Infundibular Genişleme (Koni şekilli, <3mm, arterin merkezden çıkışı)", "İnfektif (Mikotik) Anevrizma (Distal yerleşim, endokardit)", "Dissekan Anevrizma (Fusiform, intramural hematom)", "Onkotik Anevrizma (Atriyal miksoma, koryokarsinom)"],
        "differentialDiagnosisEn": ["Infundibular Widening (Cone-shaped, <3mm, artery arising from center)", "Infectious (Mycotic) Aneurysm (Distal location, endocarditis)", "Dissecting Aneurysm (Fusiform, intramural hematoma)", "Oncotic Aneurysm (Atrial myxoma, choriocarcinoma)"],
        "goldStandard": "DSA (3D rotasyonel anjiografi): Altın standart (boyut, şekil, dome/neck oranı, tedavi planlaması). BT anjiyo: Tarama ve acil değerlendirme. MR anjiyo (TOF): Non-invaziv tarama.",
        "goldStandardEn": "DSA (3D rotational angiography): Gold standard (size, shape, dome/neck ratio, treatment planning). CT angiography: Screening and emergency evaluation. MR angiography (TOF): Non-invasive screening.",
        "clinicalPearl": "Willis poligonu bifurkasyonlarında sakküler genişleme = Berry anevrizması. >7mm, irregüler şekil, daughter sac = Yüksek rüptür riski. ADPKD hastalarında aile öyküsü varsa MRA tarama.",
        "clinicalPearlEn": "Saccular dilation at Circle of Willis bifurcations = Berry aneurysm. >7mm, irregular shape, daughter sac = High rupture risk. MRA screening in ADPKD patients with family history.",
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
        "nameEn": "Low-Grade Glioma (WHO Grade 2)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
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
        "keyPointsEn": [
            "WHO 2021: IDH-mutant astrocytoma, Oligodendroglioma (1p/19q co-deletion).",
            "Usually presents in young adults (30-40 years) with epilepsy.",
            "Frontal and temporal lobes are the most common locations.",
            "'T2-FLAIR mismatch': Specific for astrocytoma (T2 hyperintense, FLAIR central hypointense)."
        ],
        "mechanism": "IDH mutant glial hücrelerin yavaş proliferasyonu ile infiltratif büyüme gösterir. Düşük sellülarite ve minimal neoanjiyogenez nedeniyle DWI kısıtlanması ve kontrastlanma genellikle yoktur.",
        "mechanismEn": "Slow proliferation of IDH-mutant glial cells with infiltrative growth. Lack of DWI restriction and enhancement due to low cellularity and minimal neoangiogenesis.",
        "etiology": "IDH1/2 mutasyonu (>%80). WHO 2021: IDH-mutant astrositom (ATRX kaybı) veya Oligodendrogliom (1p/19q ko-delesyon). Li-Fraumeni sendromu (TP53). Radyasyon maruziyeti.",
        "etiologyEn": "IDH1/2 mutation (>80%). WHO 2021: IDH-mutant astrocytoma (ATRX loss) or Oligodendroglioma (1p/19q co-deletion). Li-Fraumeni syndrome (TP53). Radiation exposure.",
        "differentialDiagnosis": ["GBM (Halka kontrastlanma, nekroz, yüksek perfüzyon)", "DNET (Kortikal, genç, 'bubbly' görünüm, kontrast tutmaz)", "Gangliogliom (Kistik + kontrastlanan nodül, temporal lob)", "Ensefalit (Akut klinik, ateş, DWI kısıtlanması)"],
        "differentialDiagnosisEn": ["GBM (Ring enhancement, necrosis, high perfusion)", "DNET (Cortical, young, 'bubbly' appearance, no enhancement)", "Ganglioglioma (Cystic + enhancing nodule, temporal lobe)", "Encephalitis (Acute clinical presentation, fever, DWI restriction)"],
        "goldStandard": "MRI (T2/FLAIR + T1+C + DWI + Perfüzyon + MRS): Kontrastlanmayan T2 hiperintens lezyon + düşük rCBV. Histopatoloji + moleküler analiz (IDH, 1p/19q, ATRX): Kesin sınıflama.",
        "goldStandardEn": "MRI (T2/FLAIR + T1+C + DWI + Perfusion + MRS): Non-enhancing T2 hyperintense lesion + low rCBV. Histopathology + molecular analysis (IDH, 1p/19q, ATRX): Definitive classification.",
        "clinicalPearl": "Genç erişkinde epilepsi + kontrastlanmayan T2 hiperintens lezyon + düşük perfüzyon = Düşük dereceli gliom. T2-FLAIR mismatch varsa IDH-mutant astrositom. Kontrastlanma başlarsa grade artışı düşün.",
        "clinicalPearlEn": "Epilepsy in young adult + non-enhancing T2 hyperintense lesion + low perfusion = Low-grade glioma. If T2-FLAIR mismatch present, IDH-mutant astrocytoma. If enhancement develops, consider grade progression.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Louis DN et al. The 2021 WHO Classification of Tumors of the Central Nervous System. Neuro Oncol. 2021;23(8):1231-1251.",
            "Radiopaedia.org - Low Grade Glioma",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019."
        ]
    },
    {
        "id": "pituitary_macroadenoma",
        "name": "Hipofiz Makroadenomu (>10mm)",
        "nameEn": "Pituitary Macroadenoma (>10mm)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
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
        "keyPointsEn": [
            "Functional: Prolactinoma (most common), GH-secreting (Acromegaly), ACTH (Cushing).",
            "Non-functional: Symptoms from mass effect (Bitemporal hemianopsia - optic chiasm compression).",
            "Pituitary apoplexy: Sudden hemorrhage/necrosis - Emergency neurosurgery consult.",
            "Prolactinoma treatment: Medical first (Dopamine agonist), surgery second choice."
        ],
        "mechanism": "Adenohipofiz hücrelerinin monoklonal proliferasyonu ile >10mm kitle oluşur. Supraseller uzanım optik kiazmayı baskılayarak bitemporal hemianopsiye neden olur. Diyafragma sella baskısı 'figure-of-8' görünümü yaratır.",
        "mechanismEn": "Monoclonal proliferation of anterior pituitary cells forms a >10mm mass. Suprasellar extension compresses the optic chiasm causing bitemporal hemianopsia. Diaphragma sellae compression creates the 'figure-of-8' appearance.",
        "etiology": "Adenohipofiz hücrelerinin benign monoklonal proliferasyonu. Fonksiyonel: Prolaktinoma (%40), Non-fonksiyonel (%30), GH (%20), ACTH (%5). MEN1 sendromu ile ilişkili olabilir.",
        "etiologyEn": "Benign monoclonal proliferation of anterior pituitary cells. Functional: Prolactinoma (40%), Non-functional (30%), GH (20%), ACTH (5%). May be associated with MEN1 syndrome.",
        "differentialDiagnosis": ["Kraniyofarenjiom (Kalsifikasyon, kistik, T1 hiperintens)", "Menenjiyom (Dural taban, yoğun homojen kontrast, dural kuyruk)", "Rathke Yarığı Kisti (Kontrast tutmaz, küçük, T1 hiperintens)", "Metastaz (Hipofiz sapı kalınlaşması, diabetes insipidus, bilinen primer)"],
        "differentialDiagnosisEn": ["Craniopharyngioma (Calcification, cystic, T1 hyperintense)", "Meningioma (Dural base, intense homogeneous enhancement, dural tail)", "Rathke Cleft Cyst (No enhancement, small, T1 hyperintense)", "Metastasis (Pituitary stalk thickening, diabetes insipidus, known primary)"],
        "goldStandard": "MRI koronal ince kesit (T1+C dinamik): Supraseller uzanım, kavernöz sinüs invazyonu, optik kiazma basısı değerlendirmesi. Hormonal profil: Prolaktin, GH, IGF-1, kortizol.",
        "goldStandardEn": "MRI coronal thin section (dynamic T1+C): Assessment of suprasellar extension, cavernous sinus invasion, optic chiasm compression. Hormonal profile: Prolactin, GH, IGF-1, cortisol.",
        "clinicalPearl": "Supraseller kitle + 'Figure-of-8' (kardan adam) görünümü + bitemporal hemianopsi = Makroadenom. Prolaktin >200 ng/mL: Prolaktinoma kesin (hook effect'e dikkat). Kavernöz sinüs invazyonu: ICA %50'den fazla sarılma.",
        "clinicalPearlEn": "Suprasellar mass + 'Figure-of-8' (snowman) appearance + bitemporal hemianopsia = Macroadenoma. Prolactin >200 ng/mL: Prolactinoma definitive (beware hook effect). Cavernous sinus invasion: ICA encasement >50%.",
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
        "nameEn": "Craniopharyngioma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
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
        "keyPointsEn": [
            "Bimodal age distribution: Childhood (5-15 years) and adults (50-75 years).",
            "Adamantinomatous type (child): Calcified, cystic. Papillary type (adult): More solid.",
            "DDx: Rathke cleft cyst (no calcification, smaller), Dermoid cyst, Pituitary adenoma.",
            "Treatment challenge: Subtotal resection due to hypothalamic adhesion."
        ],
        "mechanism": "Rathke kesesinin embriyonik artıklarından gelişen benign tümör. Kist içeriğindeki kolesterol kristalleri ve protein T1 hiperintensiteye neden olur. Kalsifikasyon adamantinomatöz tipte çok belirgindir.",
        "mechanismEn": "Benign tumor developing from embryonic remnants of Rathke's pouch. Cholesterol crystals and protein in cyst content cause T1 hyperintensity. Calcification is very prominent in the adamantinomatous type.",
        "etiology": "Rathke kesesi (Rathke's pouch) artıklarından köken alır. Adamantinomatöz tip: CTNNB1 (beta-katenin) mutasyonu, çocuk. Papiller tip: BRAF V600E mutasyonu, erişkin.",
        "etiologyEn": "Originates from remnants of Rathke's pouch. Adamantinomatous type: CTNNB1 (beta-catenin) mutation, children. Papillary type: BRAF V600E mutation, adults.",
        "differentialDiagnosis": ["Hipofiz Makroadenomu (Sellar kaynaklı, kalsifikasyon nadir, T1 hiperintens değil)", "Rathke Yarığı Kisti (Kalsifikasyon yok, küçük, kontrastlanmaz)", "Dermoid Kist (Yağ sinyali, T1 hiperintens, kalsifikasyon nadir)", "Optik Yolak Gliomu (NF1, kontrast tutabilir, kalsifikasyon yok)"],
        "differentialDiagnosisEn": ["Pituitary Macroadenoma (Sellar origin, calcification rare, not T1 hyperintense)", "Rathke Cleft Cyst (No calcification, small, no enhancement)", "Dermoid Cyst (Fat signal, T1 hyperintense, calcification rare)", "Optic Pathway Glioma (NF1, may enhance, no calcification)"],
        "goldStandard": "MRI (T1, T1+C, T2) + BT (kalsifikasyon): Supraseller kalsifiye kistik/solid kitle + T1 hiperintens kist içeriği. BT kalsifikasyon tespiti için üstündür.",
        "goldStandardEn": "MRI (T1, T1+C, T2) + CT (calcification): Suprasellar calcified cystic/solid mass + T1 hyperintense cyst content. CT is superior for calcification detection.",
        "clinicalPearl": "Supraseller kalsifiye + kistik kitle + T1 hiperintens kist = Kraniyofarenjiom. Çocukta kalsifikasyon %90 (patognomonik). Erişkin papiller tipte BRAF V600E hedefli tedavi mümkün.",
        "clinicalPearlEn": "Suprasellar calcified + cystic mass + T1 hyperintense cyst = Craniopharyngioma. Calcification 90% in children (pathognomonic). BRAF V600E targeted therapy possible in adult papillary type.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Neuroendocrine Imaging. American College of Radiology; 2019.",
            "Radiopaedia.org - Craniopharyngioma"
        ]
    },
    {
        "id": "toxoplasmosis_cns",
        "name": "Toksoplazmoz (Serebral - AIDS)",
        "nameEn": "Toxoplasmosis (Cerebral - AIDS)",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
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
        "keyPointsEn": [
            "AIDS-defining illness. CD4 <100 cells/uL.",
            "Lymphoma vs Toxoplasmosis: DWI (Lymphoma = restriction), Perfusion, Thallium scale.",
            "Eccentric target sign is highly specific for toxoplasmosis.",
            "Empiric treatment (2 weeks): If response, diagnosis confirmed; if not, biopsy."
        ],
        "mechanism": "İmmünsupresyon durumunda latent Toxoplasma gondii kistlerinin reaktivasyonu. Parazit beyin parankiminde nekrotizan ensefalit oluşturur. Halka kontrastlanma enflamatuar kapsülü, eksantrik hedef işareti ise parazitik nodülü yansıtır.",
        "mechanismEn": "Reactivation of latent Toxoplasma gondii cysts during immunosuppression. The parasite causes necrotizing encephalitis in brain parenchyma. Ring enhancement reflects the inflammatory capsule, and the eccentric target sign reflects the parasitic nodule.",
        "etiology": "Toxoplasma gondii paraziti reaktivasyonu. İmmünsupresyon (HIV/AIDS, CD4 <100). Kedi dışkısı veya çiğ et ile bulaş → latent enfeksiyonun reaktivasyonu. En sık AIDS ilişkili fırsatçı SSS enfeksiyonu.",
        "etiologyEn": "Toxoplasma gondii parasite reactivation. Immunosuppression (HIV/AIDS, CD4 <100). Transmission via cat feces or raw meat -> reactivation of latent infection. Most common AIDS-associated opportunistic CNS infection.",
        "differentialDiagnosis": ["Primer CNS Lenfoma (Tek/az sayıda, homojen kontrast, DWI kısıtlı, yüksek perfüzyon)", "Beyin Apsesi (İnce düzgün halka, DWI merkez kısıtlı)", "PML (Kontrastlanma yok, U-fiber tutulumu, kütle etkisi yok)", "Metastaz (Bilinen primer, gri-beyaz bileşke)"],
        "differentialDiagnosisEn": ["Primary CNS Lymphoma (Single/few, homogeneous enhancement, DWI restricted, high perfusion)", "Brain Abscess (Thin smooth ring, DWI center restricted)", "PML (No enhancement, U-fiber involvement, no mass effect)", "Metastasis (Known primary, gray-white junction)"],
        "goldStandard": "MRI (T1+C + DWI + Perfüzyon): Multipl halka kontrastlanan lezyonlar + eksantrik hedef işareti. Seroloji: Toxoplasma IgG pozitif. Empirik tedaviye yanıt (2 hafta).",
        "goldStandardEn": "MRI (T1+C + DWI + Perfusion): Multiple ring-enhancing lesions + eccentric target sign. Serology: Toxoplasma IgG positive. Response to empiric treatment (2 weeks).",
        "clinicalPearl": "AIDS + CD4 <100 + multipl halka lezyonlar + eksantrik hedef işareti = Toksoplazmoz. Lenfomadan ayırt: DWI (Tokso = negatif, Lenfoma = pozitif), Perfüzyon (Tokso = düşük). 2 hafta empirik tedaviye yanıt yoksa biyopsi.",
        "clinicalPearlEn": "AIDS + CD4 <100 + multiple ring lesions + eccentric target sign = Toxoplasmosis. Differentiate from lymphoma: DWI (Toxo = negative, Lymphoma = positive), Perfusion (Toxo = low). If no response to 2-week empiric treatment, biopsy.",
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
        "nameEn": "Neurocysticercosis",
        "category": "Enfeksiyon",
        "categoryEn": "Infection",
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
        "keyPointsEn": [
            "Most common cause of acquired epilepsy worldwide.",
            "4 stages: Vesicular -> Colloidal -> Granular -> Calcified.",
            "Visualization of scolex is pathognomonic ('worm head').",
            "Racemose form: Grape-like clusters of cysts in basal cisterns."
        ],
        "mechanism": "Taenia solium larvası (sistiserk) beyin parankimine yerleşir ve kist oluşturur. Parazit canlıyken (veziküler evre) immün yanıt minimals. Parazit ölünce (kolloidal evre) şiddetli inflamatuar yanıt ve çevre ödem gelişir.",
        "mechanismEn": "Taenia solium larva (cysticercus) lodges in brain parenchyma and forms a cyst. Immune response is minimal when the parasite is alive (vesicular stage). When the parasite dies (colloidal stage), intense inflammatory response and surrounding edema develop.",
        "etiology": "Taenia solium (domuz tenyası) larvası (sistiserk). Fekal-oral bulaş (domuz eti veya kontamine su/gıda). Endemik bölgeler: Latin Amerika, Güneydoğu Asya, Afrika.",
        "etiologyEn": "Taenia solium (pork tapeworm) larva (cysticercus). Fecal-oral transmission (pork or contaminated water/food). Endemic regions: Latin America, Southeast Asia, Africa.",
        "differentialDiagnosis": ["Beyin Apsesi (Tek, ince düzgün halka, DWI kısıtlı merkez)", "Metastaz (Multipl, gri-beyaz bileşke, bilinen primer)", "Tüberkülom (Kalsifiye, halka kontrast, 'target sign')", "Toksoplazmoz (AIDS, bazal ganglia, eksantrik hedef)"],
        "differentialDiagnosisEn": ["Brain Abscess (Solitary, thin smooth ring, DWI restricted center)", "Metastasis (Multiple, gray-white junction, known primary)", "Tuberculoma (Calcified, ring enhancement, 'target sign')", "Toxoplasmosis (AIDS, basal ganglia, eccentric target)"],
        "goldStandard": "MRI (T1+C, T2, FLAIR, DWI) + BT (kalsifikasyon): Evre bağımlı bulgular. Kist içinde skoleks tespiti (T1/T2). Seroloji: EITB (Enzyme-linked immunoelectrotransfer blot).",
        "goldStandardEn": "MRI (T1+C, T2, FLAIR, DWI) + CT (calcification): Stage-dependent findings. Scolex detection within cyst (T1/T2). Serology: EITB (Enzyme-linked immunoelectrotransfer blot).",
        "clinicalPearl": "Endemik bölgeden gelen hastada nöbet + kist içinde skoleks (nokta) = Nörosistiserkoz. 4 evre görünümü hatırla: Veziküler (canlı), Kolloidal (ödem), Granüler (halka), Kalsifiye (granülom). Farklı evrelerdeki lezyonlar aynı anda olabilir.",
        "clinicalPearlEn": "Seizure in patient from endemic region + scolex (dot) within cyst = Neurocysticercosis. Remember 4-stage appearance: Vesicular (alive), Colloidal (edema), Granular (ring), Calcified (granuloma). Lesions at different stages may coexist.",
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
        "nameEn": "Chiari Type I Malformation",
        "category": "Konjenital",
        "categoryEn": "Congenital",
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
        "keyPointsEn": [
            "Symptoms: Cough-triggered occipital headache, hand numbness.",
            "Syringomyelia accompanies in 25-70%.",
            "Chiari 0: No tonsillar herniation but CSF flow disturbance present.",
            "Surgery: Posterior fossa decompression (to correct CSF flow)."
        ],
        "mechanism": "Küçük posterior fossa serebellar tonsillerin foramen magnum altına herniasyonuna neden olur. Tonsiller herniasyon BOS akımını engeller ve siringomiyeli gelişimine yol açabilir.",
        "mechanismEn": "Small posterior fossa causes herniation of cerebellar tonsils below the foramen magnum. Tonsillar herniation obstructs CSF flow and may lead to syringomyelia development.",
        "etiology": "Küçük posterior fossa (konjenital veya edinsel). Konjenital kranioservikal bileşke anomalisi. Edinsel: İntrakranyal hipotansiyon, LP sonrası, tethered kord. Genetik yatkınlık.",
        "etiologyEn": "Small posterior fossa (congenital or acquired). Congenital craniocervical junction anomaly. Acquired: Intracranial hypotension, post-LP, tethered cord. Genetic predisposition.",
        "differentialDiagnosis": ["Chiari II Malformasyonu (Miyelomeningosel, tektal beaking, düşük tentoryum)", "Tonsillar Ektopi (3-5mm, asemptomatik, fizyolojik varyant)", "İntrakraniyal Hipotansiyon (LP/dural kaçak öyküsü, difüz pakimeningeal kontrast)", "Posterior Fossa Kitlesi (Tonsil herniasyonuna neden olabilir)"],
        "differentialDiagnosisEn": ["Chiari II Malformation (Myelomeningocele, tectal beaking, low tentorium)", "Tonsillar Ectopia (3-5mm, asymptomatic, physiologic variant)", "Intracranial Hypotension (LP/dural leak history, diffuse pachymeningeal enhancement)", "Posterior Fossa Mass (May cause tonsillar herniation)"],
        "goldStandard": "MRI sagittal (T1/T2): Tonsil herniasyonu >5mm (foramen magnum altı). BOS akım çalışması (Phase Contrast Cine MRI): Foramen magnum akım dinamikleri. Servikal MRI: Siringomiyeli taraması.",
        "goldStandardEn": "MRI sagittal (T1/T2): Tonsillar herniation >5mm (below foramen magnum). CSF flow study (Phase Contrast Cine MRI): Foramen magnum flow dynamics. Cervical MRI: Syringomyelia screening.",
        "clinicalPearl": "Sagittal MRI'da serebellar tonsiller foramen magnum altına >5mm herniasyon + sivri (peg-like) tonsil şekli = Chiari I. Siringomiyeli eşlik ediyorsa cerrahi endikasyonu güçlenir. Valsalva ile ağrı provokasyonu klasik.",
        "clinicalPearlEn": "Cerebellar tonsils >5mm below foramen magnum on sagittal MRI + pointed (peg-like) tonsillar shape = Chiari I. Surgical indication strengthens if syringomyelia is present. Pain provocation with Valsalva is classic.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "ACR Appropriateness Criteria: Chiari Malformations. American College of Radiology; 2020.",
            "Radiopaedia.org - Chiari I Malformation"
        ]
    },
    {
        "id": "dandy_walker_malformation",
        "name": "Dandy-Walker Malformasyonu",
        "nameEn": "Dandy-Walker Malformation",
        "category": "Konjenital",
        "categoryEn": "Congenital",
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
        "keyPointsEn": [
            "Dandy-Walker variant: Milder vermian hypoplasia, normal-sized posterior fossa.",
            "Mega cisterna magna: Normal vermis, only enlarged cisterna - Differential diagnosis.",
            "70-90% associated hydrocephalus.",
            "Other anomalies may coexist: Corpus callosum agenesis, heterotopias."
        ],
        "mechanism": "Serebellar vermisin gelişimsel bozukluğu sonucu 4. ventrikül kistik dilatasyon gösterir ve posterior fossa genişler. Tentoryum yükselerek supratentoryal yapıları iter. BOS akımı bozularak hidrosefali gelişebilir.",
        "mechanismEn": "Developmental disorder of the cerebellar vermis causes cystic dilation of the 4th ventricle and posterior fossa enlargement. Tentorium elevates pushing supratentorial structures. CSF flow disruption may lead to hydrocephalus.",
        "etiology": "Serebellar vermis gelişim bozukluğu (4. haftadan itibaren). Sporadik (%çoğunluk). İlişkili: Kromozomal anomaliler (Trizomi 13, 18, 21), konjenital enfeksiyonlar (CMV, rubella), fetal alkol sendromu.",
        "etiologyEn": "Cerebellar vermis developmental disorder (from 4th week). Sporadic (majority). Associated: Chromosomal anomalies (Trisomy 13, 18, 21), congenital infections (CMV, rubella), fetal alcohol syndrome.",
        "differentialDiagnosis": ["Dandy-Walker Varyantı (Hafif vermis hipoplazisi, normal posterior fossa)", "Mega Sisterna Magna (Normal vermis, sadece genişlemiş sisterna)", "Blake Kesesi Kisti (Ekspanse 4. ventrikül, vermis normal)", "Araknoid Kist (Posterior fossa, vermis kompresyonu)"],
        "differentialDiagnosisEn": ["Dandy-Walker Variant (Mild vermian hypoplasia, normal posterior fossa)", "Mega Cisterna Magna (Normal vermis, only enlarged cisterna)", "Blake Pouch Cyst (Expanded 4th ventricle, normal vermis)", "Arachnoid Cyst (Posterior fossa, vermis compression)"],
        "goldStandard": "MRI sagittal (T1/T2): Vermis hipoplazisi/agenezisi + 4. ventrikül kistik dilatasyonu + posterior fossa genişlemesi (tentoryum elevasyonu). Prenatal USG/fetal MRI: Erken tanı.",
        "goldStandardEn": "MRI sagittal (T1/T2): Vermian hypoplasia/agenesis + cystic dilation of 4th ventricle + posterior fossa enlargement (tentorium elevation). Prenatal US/fetal MRI: Early diagnosis.",
        "clinicalPearl": "Klasik triad: Vermis hipoplazisi + 4. ventrikül kistik genişlemesi + genişlemiş posterior fossa = Dandy-Walker. Vermis normal ise DW varyantı veya mega sisterna magna düşün. Eşlik eden supratentoryal anomalileri ara.",
        "clinicalPearlEn": "Classic triad: Vermian hypoplasia + cystic dilation of 4th ventricle + enlarged posterior fossa = Dandy-Walker. If vermis is normal, consider DW variant or mega cisterna magna. Look for associated supratentorial anomalies.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Dandy-Walker Malformation"
        ]
    },
    {
        "id": "corpus_callosum_agenesis",
        "name": "Korpus Kallozum Agenezisi",
        "nameEn": "Agenesis of the Corpus Callosum",
        "category": "Konjenital",
        "categoryEn": "Congenital",
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
        "keyPointsEn": [
            "Partial agenesis: Posterior part (splenium) most commonly absent.",
            "Lipoma (interhemispheric) accompanies in 50%.",
            "Syndromic: Aicardi syndrome (in girls), ACC+Chorioretinal lacunae+Infantile spasms.",
            "May be asymptomatic or present with developmental delay."
        ],
        "mechanism": "Gestasyonun 8-20. haftaları arasında korpus kallozumun gelişememesi. Kommissüral lifler karşı hemisfere geçemez ve Probst demeti olarak ipsilateral olarak seyreder. Bu durum paralel ventrikül konfigürasyonuna yol açar.",
        "mechanismEn": "Failure of corpus callosum development between 8-20 weeks of gestation. Commissural fibers cannot cross to the opposite hemisphere and course ipsilaterally as Probst bundles. This leads to parallel ventricular configuration.",
        "etiology": "Nöral gelişim bozukluğu (8-20. gestasyonel hafta). Sporadik veya sendromik. İlişkili: Aicardi sendromu (X-bağlantılı), FAS, Trizomi 13/18, metabolik hastalıklar (piruvat dehidrogenaz eksikliği).",
        "etiologyEn": "Neural developmental disorder (8-20 gestational weeks). Sporadic or syndromic. Associated: Aicardi syndrome (X-linked), FAS, Trisomy 13/18, metabolic diseases (pyruvate dehydrogenase deficiency).",
        "differentialDiagnosis": ["Holoprozensefali (Orta hat yapıları füzyonu, tek ventrikül)", "Septo-optik Displazi (Septum pellucidum yokluğu, optik sinir hipoplazisi)", "Hidranensefali (Serebral hemisferler yok, falks korunmuş)", "Normal Varyant (Kavum septum pellucidum yokluğu, asemptomatik)"],
        "differentialDiagnosisEn": ["Holoprosencephaly (Midline structure fusion, single ventricle)", "Septo-optic Dysplasia (Absent septum pellucidum, optic nerve hypoplasia)", "Hydranencephaly (Cerebral hemispheres absent, falx preserved)", "Normal Variant (Absent cavum septum pellucidum, asymptomatic)"],
        "goldStandard": "MRI sagittal (T1): Korpus kallozum yokluğu, radyal sulkuslar. Aksiyel: Paralel ventriküller ('yarış arabası boynuzları'). Koronal: 'Viking kaskı' görünümü. Kolposfali.",
        "goldStandardEn": "MRI sagittal (T1): Absent corpus callosum, radial sulci. Axial: Parallel ventricles ('racing car horns'). Coronal: 'Viking helmet' appearance. Colpocephaly.",
        "clinicalPearl": "Sagittal MRI'da korpus kallozum yok + radyal sulkuslar + paralel ventriküller + kolposfali = ACC. Parsiyel agenezide splenium (posterior) önce eksik olur. İnterhemisferik lipom ve Probst demeti eşlik edebilir.",
        "clinicalPearlEn": "Absent corpus callosum on sagittal MRI + radial sulci + parallel ventricles + colpocephaly = ACC. In partial agenesis, splenium (posterior) is absent first. Interhemispheric lipoma and Probst bundles may accompany.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "Radiopaedia.org - Agenesis of the Corpus Callosum"
        ]
    },
    {
        "id": "adem",
        "name": "Akut Dissemine Ensefalomiyelit (ADEM)",
        "nameEn": "Acute Disseminated Encephalomyelitis (ADEM)",
        "category": "Demiyelinizan",
        "categoryEn": "Demyelinating",
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
        "keyPointsEn": [
            "Post-infectious or post-vaccination. More common in children (average 5-8 years).",
            "Monophasic course (unlike MS). Relapse: Suggests MS or MDEM.",
            "Deep gray matter involvement (thalamus, basal ganglia) typical for ADEM, rare in MS.",
            "Diffuse, poorly defined lesions - MS has oval, well-defined Dawson's fingers."
        ],
        "mechanism": "Enfeksiyon veya aşılama sonrası moleküler benzerlik (molecular mimicry) mekanizmasıyla otoimmün demiyelinizasyon gelişir. T-hücre aracılı perivenüler inflamasyon beyaz cevher ve derin gri cevheri etkiler.",
        "mechanismEn": "Autoimmune demyelination develops via molecular mimicry mechanism after infection or vaccination. T-cell mediated perivenular inflammation affects white matter and deep gray matter.",
        "etiology": "Post-enfeksiyöz otoimmün demiyelinizasyon (1-4 hafta sonra). Viral: Kızamık, kabakulak, VZV, EBV, influenza. Post-aşı (nadir). Çocuklarda daha sık (%80 pediatrik). Anti-MOG ilişkili olabilir.",
        "etiologyEn": "Post-infectious autoimmune demyelination (1-4 weeks later). Viral: Measles, mumps, VZV, EBV, influenza. Post-vaccination (rare). More common in children (80% pediatric). May be anti-MOG associated.",
        "differentialDiagnosis": ["Multipl Skleroz (Relaps, periventriküler Dawson parmakları, derin gri cevher tutulumu nadir)", "NMO/NMOSD (AQP4 antikor, uzun segment miyelit, optik nörit)", "Viral Ensefalit (Ateş yüksek, BOS hücre artışı, HSV için temporal lob)", "Akut Nekrotizan Ensefalopati (Bilateral talamik nekroz, influenza, çocuk)"],
        "differentialDiagnosisEn": ["Multiple Sclerosis (Relapsing, periventricular Dawson's fingers, deep gray matter involvement rare)", "NMO/NMOSD (AQP4 antibody, longitudinally extensive myelitis, optic neuritis)", "Viral Encephalitis (High fever, CSF pleocytosis, temporal lobe for HSV)", "Acute Necrotizing Encephalopathy (Bilateral thalamic necrosis, influenza, children)"],
        "goldStandard": "MRI (FLAIR + T1+C + DWI): Multifokal, asimetrik, kötü sınırlı beyaz cevher + derin gri cevher lezyonları. Monofazik seyir. Anti-MOG antikor testi.",
        "goldStandardEn": "MRI (FLAIR + T1+C + DWI): Multifocal, asymmetric, poorly defined white matter + deep gray matter lesions. Monophasic course. Anti-MOG antibody testing.",
        "clinicalPearl": "Çocukta viral enfeksiyon sonrası ensefalopati + multifokal beyaz cevher + derin gri cevher (talamus) lezyonları = ADEM. MS'den farkı: Monofazik, kötü sınırlı, derin gri cevher tutulumu. Relaps olursa MS'e geçiş düşün.",
        "clinicalPearlEn": "Post-viral encephalopathy in child + multifocal white matter + deep gray matter (thalamus) lesions = ADEM. Difference from MS: Monophasic, poorly defined, deep gray matter involvement. If relapse occurs, consider transition to MS.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "ACR Appropriateness Criteria: Demyelinating Disease. American College of Radiology; 2021.",
            "Radiopaedia.org - Acute Disseminated Encephalomyelitis (ADEM)"
        ]
    },
    {
        "id": "medulloblastoma",
        "name": "Medulloblastom (Posterior Fossa Tümörü)",
        "nameEn": "Medulloblastoma (Posterior Fossa Tumor)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
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
        "keyPointsEn": [
            "Most common malignant brain tumor in children. Average age 5-7 years.",
            "Location: VERMIS (midline) in children, HEMISPHERE (lateral) in adults.",
            "DWI restriction: Differentiates from pilocytic astrocytoma and ependymoma (no restriction in those).",
            "Staging: Entire neuraxis MRI + LP (leptomeningeal spread)."
        ],
        "mechanism": "Embriyonal nöroektodermal hücrelerden kaynaklanan yüksek dereceli malign tümör. Yüksek sellülarite ve yüksek N/C oranı DWI'da belirgin kısıtlanmaya neden olur. BOS yoluyla leptomeningeal yayılım (drop metastaz) gösterir.",
        "mechanismEn": "High-grade malignant tumor arising from embryonal neuroectodermal cells. High cellularity and high N/C ratio cause marked restriction on DWI. Shows leptomeningeal spread (drop metastasis) via CSF pathway.",
        "etiology": "Embriyonal tümör (primitif nöroektodermal). WHO 2021 moleküler alt tipleri: WNT-aktif (iyi prognoz), SHH-aktif, Grup 3 (en kötü prognoz, MYC amplifikasyonu), Grup 4 (en sık). Gorlin sendromu (SHH tipi).",
        "etiologyEn": "Embryonal tumor (primitive neuroectodermal). WHO 2021 molecular subtypes: WNT-active (good prognosis), SHH-active, Group 3 (worst prognosis, MYC amplification), Group 4 (most common). Gorlin syndrome (SHH type).",
        "differentialDiagnosis": ["Pilositik Astrositom (Kist + mural nodül, DWI kısıtlılığı yok)", "Ependimom (4. ventrikül tabanı, foraminalardan plastik uzanım)", "Atipik Teratoid/Rabdoid Tümör (AT/RT, <3 yaş, agresif)", "Beyin Sapı Gliomu (Diffüz pontin genişleme, kontrastlanmaz)"],
        "differentialDiagnosisEn": ["Pilocytic Astrocytoma (Cyst + mural nodule, no DWI restriction)", "Ependymoma (4th ventricle floor, plastic extension through foramina)", "Atypical Teratoid/Rhabdoid Tumor (AT/RT, <3 years, aggressive)", "Brainstem Glioma (Diffuse pontine expansion, no enhancement)"],
        "goldStandard": "MRI beyin + tüm spinal aks (T1+C, DWI): Vermis/4. ventrikül solid kitle + DWI kısıtlanması + drop metastaz taraması. Histopatoloji + moleküler sınıflama (WNT, SHH, Grup 3/4).",
        "goldStandardEn": "MRI brain + entire spinal axis (T1+C, DWI): Vermis/4th ventricle solid mass + DWI restriction + drop metastasis screening. Histopathology + molecular classification (WNT, SHH, Group 3/4).",
        "clinicalPearl": "Çocukta posterior fossa solid kitle + DWI kısıtlanması + hiperdens BT = Medulloblastom. Pilositik astrositomda DWI negatiftir (en önemli ayırıcı bulgu). Leptomeningeal yayılım için tüm spinal aks taranmalı.",
        "clinicalPearlEn": "Posterior fossa solid mass in child + DWI restriction + hyperdense on CT = Medulloblastoma. DWI is negative in pilocytic astrocytoma (most important differentiating finding). Entire spinal axis must be scanned for leptomeningeal spread.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Louis DN et al. The 2021 WHO Classification of Tumors of the Central Nervous System. Neuro Oncol. 2021;23(8):1231-1251.",
            "ACR Appropriateness Criteria: Pediatric Cerebellar Neoplasm. American College of Radiology; 2020.",
            "Radiopaedia.org - Medulloblastoma"
        ]
    },
    {
        "id": "pilocytic_astrocytoma",
        "name": "Pilositik Astrositom (WHO Grade 1)",
        "nameEn": "Pilocytic Astrocytoma (WHO Grade 1)",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
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
        "keyPointsEn": [
            "Most common low-grade brain tumor in children and young adults.",
            "WHO Grade 1 - Excellent prognosis, surgery is curative.",
            "Locations: Cerebellum > Optic pathway (NF1) > Hypothalamus.",
            "'Cyst + mural nodule' pattern is classic but 50% may be solid."
        ],
        "mechanism": "Düşük dereceli glial tümör. BRAF-KIAA1549 füzyon geni MAPK yolağını aktive eder. Kistik komponent sekretuar protein birikimi sonucu oluşur. Düşük sellülarite ve yavaş büyüme DWI kısıtlanmasının olmamasını açıklar.",
        "mechanismEn": "Low-grade glial tumor. BRAF-KIAA1549 fusion gene activates the MAPK pathway. Cystic component forms due to secretory protein accumulation. Low cellularity and slow growth explain the absence of DWI restriction.",
        "etiology": "BRAF-KIAA1549 füzyon geni (serebellar tipte %90). NF1 ilişkili: Optik yolak gliomu. Sporadik (%çoğunluk). WHO Grade 1, düşük mitotik indeks.",
        "etiologyEn": "BRAF-KIAA1549 fusion gene (90% in cerebellar type). NF1-associated: Optic pathway glioma. Sporadic (majority). WHO Grade 1, low mitotic index.",
        "differentialDiagnosis": ["Medulloblastom (Solid, vermis, DWI kısıtlanması, hiperdens BT)", "Hemanjioblastom (Erişkin, yoğun kontrastlanan nodül, VHL)", "Ependimom (4. ventrikül tabanı, foraminalardan plastik uzanım)", "Gangliogliom (Temporal lob, kistik + solid, kalsifikasyon)"],
        "differentialDiagnosisEn": ["Medulloblastoma (Solid, vermis, DWI restriction, hyperdense on CT)", "Hemangioblastoma (Adult, intensely enhancing nodule, VHL)", "Ependymoma (4th ventricle floor, plastic extension through foramina)", "Ganglioglioma (Temporal lobe, cystic + solid, calcification)"],
        "goldStandard": "MRI (T1+C, T2, DWI): Kist + yoğun kontrastlanan mural nodül + DWI kısıtlanması yok. Cerrahi + histopatoloji: BRAF füzyon analizi.",
        "goldStandardEn": "MRI (T1+C, T2, DWI): Cyst + intensely enhancing mural nodule + no DWI restriction. Surgery + histopathology: BRAF fusion analysis.",
        "clinicalPearl": "Çocukta serebellumda kist + kontrastlanan mural nodül + DWI negatif = Pilositik astrositom. Medulloblastomdan farkı: DWI kısıtlanması YOK. NF1 hastasında optik yolak gliomu genellikle pilositik astrositomdur.",
        "clinicalPearlEn": "Cyst + enhancing mural nodule in cerebellum of child + DWI negative = Pilocytic astrocytoma. Difference from medulloblastoma: NO DWI restriction. Optic pathway glioma in NF1 patient is usually pilocytic astrocytoma.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "Louis DN et al. The 2021 WHO Classification of Tumors of the Central Nervous System. Neuro Oncol. 2021;23(8):1231-1251.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Pilocytic Astrocytoma"
        ]
    },
    {
        "id": "pres",
        "name": "PRES (Posterior Reversible Encephalopathy Syndrome)",
        "nameEn": "Posterior Reversible Encephalopathy Syndrome (PRES)",
        "category": "Vasküler / Metabolik",
        "categoryEn": "Vascular/Metabolic",
        "findings": {
            "mri": {
                "t2_flair": "Bilateral simetrik, özellikle paryeto-oksipital loblarda beyaz cevherde vazojenik ödem (Hiperintens). Frontal lob ve bazal ganglion tutulumu da görülebilir.",
                "dwi": "Genellikle difüzyon kısıtlanması YOKTUR (Vazojenik ödem). Eğer kısıtlanma varsa (Sitotoksik ödem) irreversibl hasarı (infarkt) gösterir.",
                "swi": "Mikrohemorajiler görülebilir."
            }
        },
        "mechanism": "Akut hipertansiyon -> Serebral otoregülasyon kaybı -> Endotel hasarı -> Vazojenik ödem.",
        "mechanismEn": "Acute hypertension -> Loss of cerebral autoregulation -> Endothelial damage -> Vasogenic edema.",
        "keyPoints": [
            "Klinik: Baş ağrısı, nöbet, görme bozukluğu, mental durum değişikliği.",
            "Etyoloji: Hipertansiyon, Eklampsi, İmmünsupresif ilaçlar (Siklosporin).",
            "Genellikle reversibldir, ancak tedavi edilmezse infarkta ilerler."
        ],
        "keyPointsEn": [
            "Clinical: Headache, seizures, visual disturbance, altered mental status.",
            "Etiology: Hypertension, Eclampsia, Immunosuppressive drugs (Cyclosporine).",
            "Usually reversible, but progresses to infarction if untreated."
        ],
        "etiology": "Akut hipertansiyon (%70-80), eklampsi/preeklampsi, immünsupresif ilaçlar (siklosporin, takrolimus), kemoterapötikler, otoimmün hastalıklar (SLE), renal yetmezlik, sepsis.",
        "etiologyEn": "Acute hypertension (70-80%), eclampsia/preeclampsia, immunosuppressive drugs (cyclosporine, tacrolimus), chemotherapeutics, autoimmune diseases (SLE), renal failure, sepsis.",
        "differentialDiagnosis": ["Venöz Sinüs Trombozu (MRV'de dolum defekti, hemorajik venöz infarkt)", "Bilateral Posterior Serebral Arter İnfarktı (DWI kısıtlanması, vasküler teritory)", "Progresif Multifokal Lökoensefalopati (İmmünsuprese, asimetrik, U-fiber)", "Osmotik Demyelinizasyon (Pons, Na düzeltme öyküsü)"],
        "differentialDiagnosisEn": ["Venous Sinus Thrombosis (Filling defect on MRV, hemorrhagic venous infarct)", "Bilateral Posterior Cerebral Artery Infarct (DWI restriction, vascular territory)", "Progressive Multifocal Leukoencephalopathy (Immunosuppressed, asymmetric, U-fiber)", "Osmotic Demyelination (Pons, Na correction history)"],
        "goldStandard": "MRI (FLAIR + DWI): Bilateral paryeto-oksipital vazojenik ödem (FLAIR hiperintens) + DWI'da kısıtlanma YOKTUR (vazojenik ödem). DWI kısıtlanması varsa irreversibl hasar.",
        "goldStandardEn": "MRI (FLAIR + DWI): Bilateral parieto-occipital vasogenic edema (FLAIR hyperintense) + NO restriction on DWI (vasogenic edema). If DWI restriction present, irreversible damage.",
        "clinicalPearl": "Hipertansif kriz/eklampsi + nöbet + bilateral paryeto-oksipital FLAIR hiperintensite + DWI negatif = PRES. DWI pozitif ise kötü prognoz (irreversibl). Posterior baskınlık nedeni: Posterior sirkülasyonda sempatik innervasyon daha az.",
        "clinicalPearlEn": "Hypertensive crisis/eclampsia + seizure + bilateral parieto-occipital FLAIR hyperintensity + DWI negative = PRES. If DWI positive, poor prognosis (irreversible). Posterior predominance reason: Less sympathetic innervation in posterior circulation.",
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
        "nameEn": "Arteriovenous Malformation (AVM)",
        "category": "Vasküler",
        "categoryEn": "Vascular",
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
        "keyPointsEn": [
            "Spetzler-Martin score determines surgical risk.",
            "Annual bleeding risk is 2-4%.",
            "Aneurysm within the nidus increases bleeding risk."
        ],
        "mechanism": "Konjenital yüksek akımlı vasküler anomali. Kapiller yatak yokluğunda arteriyel kan doğrudan venöz sisteme drene olur. Nidus (anormal damar yumağı) kanama ve çal fenomeni riskini taşır.",
        "mechanismEn": "Congenital high-flow vascular anomaly. Arterial blood drains directly into the venous system in the absence of a capillary bed. The nidus (abnormal vascular tangle) carries risk of hemorrhage and steal phenomenon.",
        "etiology": "Konjenital vasküler malformasyon. Kapiller yatak gelişmemiş → direkt AV şant. Sporadik veya HHT ilişkili (Osler-Weber-Rendu sendromu). Yüksek akımlı lezyon.",
        "etiologyEn": "Congenital vascular malformation. Capillary bed undeveloped -> direct AV shunt. Sporadic or HHT-associated (Osler-Weber-Rendu syndrome). High-flow lesion.",
        "differentialDiagnosis": ["Dural AV Fistül (Edinsel, dural besleyiciler, pulsatil tinnitus)", "Kavernom (Düşük akımlı, anjiyografide okült)", "Vasküler Tümör (Metastaz, GBM - kontrastlanma paterni farklı)", "DVA (Düşük akımlı, caput medusae, benign)"],
        "differentialDiagnosisEn": ["Dural AV Fistula (Acquired, dural feeders, pulsatile tinnitus)", "Cavernoma (Low-flow, angiographically occult)", "Vascular Tumor (Metastasis, GBM - different enhancement pattern)", "DVA (Low-flow, caput medusae, benign)"],
        "goldStandard": "DSA (Dijital Subtraksiyon Anjiyografi): Altın standart - nidus, besleyiciler, drenaj paternini gösterir. MRI/MRA tarama amaçlıdır.",
        "goldStandardEn": "DSA (Digital Subtraction Angiography): Gold standard - shows nidus, feeders, drainage pattern. MRI/MRA is for screening purposes.",
        "clinicalPearl": "MRI'da serpiginöz flow void + DSA'da erken venöz dolum = AVM. Spetzler-Martin sınıflaması tedavi kararını (cerrahi, embolizasyon, radyocerrahi) yönlendirir. İntranidal anevrizma varsa kanama riski yükselir.",
        "clinicalPearlEn": "Serpiginous flow void on MRI + early venous filling on DSA = AVM. Spetzler-Martin classification guides treatment decision (surgery, embolization, radiosurgery). If intranidal aneurysm present, bleeding risk increases.",
        "references": [
            "Osborn AG. Osborn's Brain: Imaging, Pathology, and Anatomy. 2nd ed. Elsevier; 2017.",
            "ACR Appropriateness Criteria: Cerebrovascular Diseases. American College of Radiology; 2021.",
            "Atlas SW. Magnetic Resonance Imaging of the Brain and Spine. 5th ed. Lippincott Williams & Wilkins; 2016.",
            "Radiopaedia.org - Arteriovenous Malformation (Brain)"
        ]
    },
    {
        "id": "oligodendroglioma",
        "name": "Oligodendrogliom",
        "nameEn": "Oligodendroglioma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "ct": {
                "non_contrast": "Kortikal/subkortikal hipodens kitle. %70-90 kaba, 'popcorn' tarzı kalsifikasyon PATOGNOMONİK. Kemik remodellingi (yavaş büyüme).",
                "contrast": "Minimal veya heterojen kontrastlanma."
            },
            "mri": {
                "t1": "Hipointens. Kalsifikasyon ve kanama alanlarında sinyal karışıklığı.",
                "t2": "Hiperintens, heterojen. Kortikal tutulum belirgin. Kalsifikasyonlar hipointens.",
                "t1_c": "Değişken kontrastlanma. Anaplastik oligodendrogliomda daha belirgin.",
                "dwi": "Genellikle hafif kısıtlanma. Yüksek gradede belirginleşir."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Cortical/subcortical hypodense mass. 70-90% coarse 'popcorn' calcification is PATHOGNOMONIC. Bone remodeling (slow growth).",
                "contrast": "Minimal or heterogeneous enhancement."
            },
            "mri": {
                "t1": "Hypointense. Signal heterogeneity in areas of calcification and hemorrhage.",
                "t2": "Hyperintense, heterogeneous. Cortical involvement is prominent. Calcifications are hypointense.",
                "t1_c": "Variable enhancement. More prominent in anaplastic oligodendroglioma.",
                "dwi": "Generally mild restriction. More prominent in high grade."
            }
        },
        "keyPoints": [
            "1p/19q ko-delesyonu tanısal ve prognostik belirteçtir.",
            "IDH mutasyonu pozitifliği iyi prognoz göstergesi.",
            "Frontal lob en sık tutulum yeri.",
            "Kalsifikasyon + kortikal yerleşim = Oligodendrogliom düşün."
        ],
        "keyPointsEn": [
            "1p/19q co-deletion is diagnostic and prognostic marker.",
            "IDH mutation positivity indicates good prognosis.",
            "Frontal lobe is the most common location.",
            "Calcification + cortical location = Consider oligodendroglioma."
        ],
        "etiology": "IDH1/2 mutasyonu + 1p/19q ko-delesyonu. Oligodendroglial prekürsör hücrelerinden köken alır.",
        "etiologyEn": "IDH1/2 mutation + 1p/19q co-deletion. Originates from oligodendroglial precursor cells.",
        "mechanism": "IDH mutant oligodendroglial hücreler → yavaş proliferasyon → kortikal infiltrasyon → kalsifikasyon birikimi. Anaplastik transformasyon zamanla gelişebilir.",
        "mechanismEn": "IDH mutant oligodendroglial cells → slow proliferation → cortical infiltration → calcification accumulation. Anaplastic transformation may develop over time.",
        "differentialDiagnosis": [
            "Düşük gradeli astrositom (kalsifikasyon daha nadir)",
            "Gangliogliom (kortikal, kistik komponent)",
            "DNET (kortikal, genç hasta, 'bubbly' görünüm)",
            "Metastaz (peritümöral ödem daha belirgin)"
        ],
        "differentialDiagnosisEn": [
            "Low-grade astrocytoma (calcification rarer)",
            "Ganglioglioma (cortical, cystic component)",
            "DNET (cortical, young patient, 'bubbly' appearance)",
            "Metastasis (peritumoral edema more prominent)"
        ],
        "goldStandard": "MRI + Histopatoloji: 1p/19q ko-delesyonu ve IDH mutasyon analizi (WHO 2021 sınıflaması).",
        "goldStandardEn": "MRI + Histopathology: 1p/19q co-deletion and IDH mutation analysis (WHO 2021 classification).",
        "clinicalPearl": "Kortikal kitlede kaba kalsifikasyon = Oligodendrogliom düşün (tanıda %90 doğruluk). Kemoterapiye (PCV) en iyi yanıt veren beyin tümörü.",
        "clinicalPearlEn": "Coarse calcification in a cortical mass = Consider oligodendroglioma (90% diagnostic accuracy). Brain tumor with best response to chemotherapy (PCV).",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "WHO Classification of Tumours of the Central Nervous System. 5th ed. 2021.",
            "Radiopaedia.org - Oligodendroglioma"
        ]
    },
    {
        "id": "hemangioblastoma",
        "name": "Hemanjioblastom",
        "nameEn": "Hemangioblastoma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "ct": {
                "non_contrast": "Posterior fossa kistik lezyon. Kist duvarında veya içinde solid mural nodül (hiperdens).",
                "contrast": "Mural nodül YOĞUN kontrastlanır. Kist duvarı kontrastlanmaz (reaktif, tümöral değil)."
            },
            "mri": {
                "t1": "Kist: Hipointens (BOS ile izointens veya hafif hiperintens - proteinöz). Mural nodül: İzointens.",
                "t2": "Kist: Belirgin hiperintens. Mural nodül: İzointens, Flow void yapıları içerebilir (hipervasküler).",
                "t1_c": "Mural nodül YOĞUN ve HOMojen kontrastlanır. Kist duvarı kontrastlanmaz.",
                "dwi": "Kısıtlanma yok (difüzyon serbest)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Posterior fossa cystic lesion. Solid mural nodule on cyst wall (hyperdense).",
                "contrast": "Mural nodule enhances INTENSELY. Cyst wall does not enhance (reactive, not tumoral)."
            },
            "mri": {
                "t1": "Cyst: Hypointense (isointense or mildly hyperintense to CSF - proteinaceous). Mural nodule: Isointense.",
                "t2": "Cyst: Markedly hyperintense. Mural nodule: Isointense, may contain flow voids (hypervascular).",
                "t1_c": "Mural nodule enhances INTENSELY and HOMOGENEOUSLY. Cyst wall does not enhance.",
                "dwi": "No restriction (free diffusion)."
            }
        },
        "keyPoints": [
            "Posterior fossanın en sık primer intra-aksiyel tümörü (erişkinde).",
            "Von Hippel-Lindau sendromu ile ilişki: %25-40 VHL hastasında görülür.",
            "Kist duvarı tümöral DEĞİLDİR - cerrahi sadece mural nodülü hedefler.",
            "Polisitemi eşlik edebilir (eritropoietin üretimi)."
        ],
        "keyPointsEn": [
            "Most common primary intra-axial tumor of posterior fossa (in adults).",
            "Associated with Von Hippel-Lindau syndrome: seen in 25-40% of VHL patients.",
            "Cyst wall is NOT tumoral - surgery targets only the mural nodule.",
            "Polycythemia may accompany (erythropoietin production)."
        ],
        "etiology": "Sporadik veya VHL sendromu (VHL gen mutasyonu, 3p25-26). Mezenşimal kökenli vasküler tümör.",
        "etiologyEn": "Sporadic or VHL syndrome (VHL gene mutation, 3p25-26). Mesenchymal origin vascular tumor.",
        "mechanism": "VHL gen kaybı → HIF yolağı aktivasyonu → VEGF artışı → hipervasküler tümör gelişimi. Kist, tümöral sıvı sızıntısından oluşur.",
        "mechanismEn": "VHL gene loss → HIF pathway activation → VEGF increase → hypervascular tumor development. Cyst forms from tumoral fluid leakage.",
        "differentialDiagnosis": [
            "Pilositik astrositom (çocuklarda, benzer kist + nodül)",
            "Metastaz (multipl, peritümöral ödem)",
            "Ependimom (4. ventrikülden kaynak, kalsifikasyon)",
            "Medulloblastom (çocuk, solid, vermis yerleşimli)"
        ],
        "differentialDiagnosisEn": [
            "Pilocytic astrocytoma (children, similar cyst + nodule)",
            "Metastasis (multiple, peritumoral edema)",
            "Ependymoma (originating from 4th ventricle, calcification)",
            "Medulloblastoma (children, solid, vermis location)"
        ],
        "goldStandard": "MRI (kist + yoğun kontrastlanan mural nodül). VHL şüphesinde genetik test ve multisistem tarama (retina, böbrek, pankreas).",
        "goldStandardEn": "MRI (cyst + intensely enhancing mural nodule). Genetic testing and multisystem screening (retina, kidney, pancreas) if VHL is suspected.",
        "clinicalPearl": "Posterior fossa kist + yoğun kontrastlanan mural nodül + flow void = Hemanjioblastom. Multipl ise VHL düşün ve tüm vücut taraması yap.",
        "clinicalPearlEn": "Posterior fossa cyst + intensely enhancing mural nodule + flow void = Hemangioblastoma. If multiple, consider VHL and perform whole-body screening.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "WHO Classification of CNS Tumours. 5th ed. 2021.",
            "Radiopaedia.org - Hemangioblastoma"
        ]
    },
    {
        "id": "epidermoid_cyst",
        "name": "Epidermoid Kist",
        "nameEn": "Epidermoid Cyst",
        "category": "Konjenital/Gelişimsel",
        "categoryEn": "Congenital/Developmental",
        "findings": {
            "ct": {
                "non_contrast": "BOS dansitesine yakın hipodens lezyon. Serebelopontin açı veya paraseller bölge. İnsinüe edici büyüme paterni.",
                "contrast": "Kontrastlanma yok (periferal ince kontrastlanma nadiren)."
            },
            "mri": {
                "t1": "Hipointens (BOS benzeri). FLAIR: BOS'tan farklı olarak SUPRESE OLMAZ (HİPERİNTENS kalır) - AYIRICI BULGU.",
                "t2": "Hiperintens (BOS benzeri). Heterojen olabilir.",
                "t1_c": "Kontrastlanma yok. Periferal ince kontrastlanma nadir.",
                "dwi": "BELİRGİN DİFÜZYON KISITLANMASI - 'parlak ampul' işareti. Araknoid kistten AYIRICI en önemli bulgu."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Hypodense lesion near CSF density. Cerebellopontine angle or parasellar region. Insinuating growth pattern.",
                "contrast": "No enhancement (peripheral thin enhancement rarely)."
            },
            "mri": {
                "t1": "Hypointense (CSF-like). FLAIR: Does NOT suppress like CSF (remains HYPERINTENSE) - DISTINGUISHING FINDING.",
                "t2": "Hyperintense (CSF-like). May be heterogeneous.",
                "t1_c": "No enhancement. Peripheral thin enhancement rare.",
                "dwi": "MARKED DIFFUSION RESTRICTION - 'bright bulb' sign. Most important finding to distinguish from arachnoid cyst."
            }
        },
        "keyPoints": [
            "DWI kısıtlanması araknoid kistten ayırmada ANAHTAR bulgudur.",
            "FLAIR'de suprese olmaması BOS'tan farklılığı gösterir.",
            "Serebelopontin açının 3. en sık kitlesi (schwannom ve menenjiyomdan sonra).",
            "Keratin ve kolesterol kristalleri ('mother of pearl' görünümü) içerir."
        ],
        "keyPointsEn": [
            "DWI restriction is the KEY finding to differentiate from arachnoid cyst.",
            "Non-suppression on FLAIR differentiates from CSF.",
            "3rd most common mass of cerebellopontine angle (after schwannoma and meningioma).",
            "Contains keratin and cholesterol crystals ('mother of pearl' appearance)."
        ],
        "etiology": "Konjenital ektopik epidermal inklüzyon. Nöral tüp kapanması sırasında ektoderm artıkları intrakraniyel yerleşim gösterir.",
        "etiologyEn": "Congenital ectopic epidermal inclusion. Ectodermal remnants become intracranially located during neural tube closure.",
        "mechanism": "Ektodermik epitelyal hücreler → keratin ve kolesterol birikimi → yavaş büyüyen kistik lezyon. Sisternlere insinüe olarak yayılır.",
        "mechanismEn": "Ectodermal epithelial cells → keratin and cholesterol accumulation → slow-growing cystic lesion. Spreads by insinuating into cisterns.",
        "differentialDiagnosis": [
            "Araknoid kist (DWI kısıtlanması YOK, FLAIR suprese)",
            "Dermoid kist (yağ içerir, T1 hiperintens)",
            "Nöroenterik kist (prepontin, T1 hiperintens olabilir)",
            "Kistik schwannom (kontrastlanma mevcut)"
        ],
        "differentialDiagnosisEn": [
            "Arachnoid cyst (NO DWI restriction, FLAIR suppressed)",
            "Dermoid cyst (contains fat, T1 hyperintense)",
            "Neuroenteric cyst (prepontine, may be T1 hyperintense)",
            "Cystic schwannoma (enhancement present)"
        ],
        "goldStandard": "MRI: DWI kısıtlanması + FLAIR'de suprese olmama + kontrastlanmayan kistik lezyon üçlüsü.",
        "goldStandardEn": "MRI: DWI restriction + non-suppression on FLAIR + non-enhancing cystic lesion triad.",
        "clinicalPearl": "Serebelopontin açıda BOS benzeri kitle: DWI parlaksa epidermoid, DWI karanlıksa araknoid kist. Bu basit kural tanıyı büyük ölçüde daraltır.",
        "clinicalPearlEn": "CSF-like mass in the cerebellopontine angle: If DWI bright = epidermoid, if DWI dark = arachnoid cyst. This simple rule largely narrows the diagnosis.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Epidermoid cyst (intracranial)",
            "Smirniotopoulos JG, et al. Radiographics. 2006;26(Suppl 1):S173-S189."
        ]
    },
    {
        "id": "colloid_cyst",
        "name": "Kolloid Kist",
        "nameEn": "Colloid Cyst",
        "category": "Konjenital/Gelişimsel",
        "categoryEn": "Congenital/Developmental",
        "findings": {
            "ct": {
                "non_contrast": "3. ventrikül anteriorunda (foramen Monro düzeyinde) yuvarlak, HİPERDENS (60-90 HU) lezyon. BİLATERAL hidrosefali.",
                "contrast": "Kontrastlanma yok veya minimal periferal."
            },
            "mri": {
                "t1": "Genellikle HİPERİNTENS (proteinöz içerik). %30 izointens olabilir.",
                "t2": "Değişken: Hipo/izo/hiperintens (içerik viskozitesine bağlı). Yüksek viskozitede HİPOİNTENS.",
                "t1_c": "Kontrastlanma yok (ince rim nadiren).",
                "dwi": "Değişken. Genellikle kısıtlanma yok."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Round, HYPERDENSE (60-90 HU) lesion in anterior 3rd ventricle (at foramen of Monro). BILATERAL hydrocephalus.",
                "contrast": "No enhancement or minimal peripheral."
            },
            "mri": {
                "t1": "Usually HYPERINTENSE (proteinaceous content). May be isointense in 30%.",
                "t2": "Variable: Hypo/iso/hyperintense (depends on viscosity). HYPOINTENSE with high viscosity.",
                "t1_c": "No enhancement (thin rim rarely).",
                "dwi": "Variable. Generally no restriction."
            }
        },
        "keyPoints": [
            "Lokalizasyonu PATOGNOMONİK: 3. ventrikül ön kısmı, foramen Monro düzeyi.",
            "Ani ölüm riski: Pozisyonel foramen Monro obstrüksiyonu → akut hidrosefali.",
            "BT'de hiperdens + 3. ventrikül anterioru = Kolloid kist tanısı neredeyse kesin.",
            "Asemptomatik küçük kistlerde izlem, semptomatik/büyük olanlarda cerrahi."
        ],
        "keyPointsEn": [
            "Location is PATHOGNOMONIC: Anterior 3rd ventricle, foramen of Monro level.",
            "Risk of sudden death: Positional foramen of Monro obstruction → acute hydrocephalus.",
            "Hyperdense on CT + anterior 3rd ventricle = Nearly definitive diagnosis of colloid cyst.",
            "Surveillance for small asymptomatic cysts, surgery for symptomatic/large ones."
        ],
        "etiology": "Konjenital endodermal kökenli. Embriyolojik nöroepitelyal artık.",
        "etiologyEn": "Congenital endodermal origin. Embryological neuroepithelial remnant.",
        "mechanism": "Endodermal artık → 3. ventrikül tavanında kistik lezyon → mukoid/proteinöz materyal birikimi → foramen Monro obstrüksiyonu → bilateral lateral ventrikül dilatasyonu.",
        "mechanismEn": "Endodermal remnant → cystic lesion in the roof of the 3rd ventricle → mucoid/proteinaceous material accumulation → foramen of Monro obstruction → bilateral lateral ventricle dilation.",
        "differentialDiagnosis": [
            "Subependimal dev hücreli astrositom (tüberoz skleroz, kontrastlanır)",
            "Santral nörositom (lateral ventrikül, kontrastlanır)",
            "Koroid pleksus papillomu (ventrikül içi, kontrastlanır)",
            "Kraniyofarenjiom (supraseller, kalsifikasyon)"
        ],
        "differentialDiagnosisEn": [
            "Subependymal giant cell astrocytoma (tuberous sclerosis, enhances)",
            "Central neurocytoma (lateral ventricle, enhances)",
            "Choroid plexus papilloma (intraventricular, enhances)",
            "Craniopharyngioma (suprasellar, calcification)"
        ],
        "goldStandard": "BT (hiperdens 3. ventrikül lezyonu) + MRI (T1 hiperintens, foramen Monro düzeyi).",
        "goldStandardEn": "CT (hyperdense 3rd ventricle lesion) + MRI (T1 hyperintense, foramen of Monro level).",
        "clinicalPearl": "3. ventrikülde yuvarlak, BT'de hiperdens lezyon = Kolloid kist. Ani baş ağrısı ile başvuran hastada akut hidrosefali nedeni olabilir - acil şant gerekebilir.",
        "clinicalPearlEn": "Round, hyperdense lesion on CT in the 3rd ventricle = Colloid cyst. May cause acute hydrocephalus in a patient presenting with sudden headache - emergency shunt may be required.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Colloid cyst",
            "Beaumont TL, et al. J Neurosurg. 2016;125(6):1420-1430."
        ]
    },
    {
        "id": "cns_vasculitis",
        "name": "SSS Vasküliti (Primer Serebral Anjiit)",
        "nameEn": "CNS Vasculitis (Primary Cerebral Angiitis)",
        "category": "Vasküler/İnflamatuvar",
        "categoryEn": "Vascular/Inflammatory",
        "findings": {
            "ct": {
                "non_contrast": "Multipl infarkt alanları (farklı vasküler territorylerde). Normal olabilir.",
                "contrast": "Leptomeningeal kontrastlanma olabilir."
            },
            "mri": {
                "t1": "Multipl subkortikal ve derin beyaz cevher lezyonları. Akut infarkt alanları.",
                "t2": "Multipl T2/FLAIR hiperintens lezyonlar, farklı yaşlarda. Beyaz cevher ve korteks tutulumu.",
                "t1_c": "Leptomeningeal/vasküler kontrastlanma. Damar duvarı kontrastlanması (vessel wall imaging'de).",
                "dwi": "Akut infarktlarda kısıtlanma. Farklı vasküler territorylerde eşzamanlı difüzyon pozitif lezyonlar."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Multiple infarct areas (in different vascular territories). May be normal.",
                "contrast": "Leptomeningeal enhancement may be present."
            },
            "mri": {
                "t1": "Multiple subcortical and deep white matter lesions. Acute infarct areas.",
                "t2": "Multiple T2/FLAIR hyperintense lesions of different ages. White matter and cortex involvement.",
                "t1_c": "Leptomeningeal/vascular enhancement. Vessel wall enhancement (on vessel wall imaging).",
                "dwi": "Restriction in acute infarcts. Simultaneous diffusion-positive lesions in different vascular territories."
            }
        },
        "keyPoints": [
            "Farklı vasküler territorylerde, farklı yaşlarda infarktlar = Vaskülit düşün.",
            "Vessel wall MRI: Konsantrik (düzgün) damar duvarı kontrastlanması aterosklerozdan ayırır.",
            "Konvansiyonel anjiyografi 'boncuk dizisi' (beading) paterni gösterebilir.",
            "Genç hastada açıklanamayan multipl infarkt = Vaskülit araştır."
        ],
        "keyPointsEn": [
            "Infarcts of different ages in different vascular territories = Consider vasculitis.",
            "Vessel wall MRI: Concentric (smooth) vessel wall enhancement differentiates from atherosclerosis.",
            "Conventional angiography may show 'string of beads' (beading) pattern.",
            "Unexplained multiple infarcts in young patient = Investigate vasculitis."
        ],
        "etiology": "Primer SSS vasküliti (idiyopatik) veya sekonder (SLE, PAN, granülomatöz polianjiit, Behçet, enfeksiyon ilişkili).",
        "etiologyEn": "Primary CNS vasculitis (idiopathic) or secondary (SLE, PAN, granulomatosis with polyangiitis, Behcet, infection-related).",
        "mechanism": "İmmün aracılı damar duvarı inflamasyonu → intimal proliferasyon + lümen daralması → iskemi/infarkt. Büyük ve orta boy damarlar tutulabilir.",
        "mechanismEn": "Immune-mediated vessel wall inflammation → intimal proliferation + luminal narrowing → ischemia/infarct. Large and medium-sized vessels may be involved.",
        "differentialDiagnosis": [
            "Multipl skleroz (periventriküler, Dawson fingers)",
            "Aterosklerotik hastalık (yaşlı, risk faktörleri)",
            "Kardiyoembolik infarkt (aynı vasküler territory)",
            "CADASIL (temporal pol ve dış kapsül tutulumu)"
        ],
        "differentialDiagnosisEn": [
            "Multiple sclerosis (periventricular, Dawson fingers)",
            "Atherosclerotic disease (elderly, risk factors)",
            "Cardioembolic infarct (same vascular territory)",
            "CADASIL (temporal pole and external capsule involvement)"
        ],
        "goldStandard": "MRI + Vessel Wall Imaging + DSA (konvansiyonel anjiyografi). Kesin tanı: Beyin/meningeal biyopsi.",
        "goldStandardEn": "MRI + Vessel Wall Imaging + DSA (conventional angiography). Definitive diagnosis: Brain/meningeal biopsy.",
        "clinicalPearl": "Genç hasta + multipl vasküler territoryde infarkt + ESR/CRP yüksekliği = Vaskülit. Vessel wall MRI aterosklerozdan ayırmada çok değerli.",
        "clinicalPearlEn": "Young patient + infarcts in multiple vascular territories + elevated ESR/CRP = Vasculitis. Vessel wall MRI is very valuable in differentiating from atherosclerosis.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Hajj-Ali RA, et al. Lancet Neurol. 2011;10(6):561-572.",
            "Radiopaedia.org - CNS vasculitis"
        ]
    },
    {
        "id": "wernicke_encephalopathy",
        "name": "Wernicke Ensefalopatisi",
        "nameEn": "Wernicke Encephalopathy",
        "category": "Metabolik/Toksik",
        "categoryEn": "Metabolic/Toxic",
        "findings": {
            "ct": {
                "non_contrast": "Genellikle NORMAL. İleri vakalarda talamus ve periventriküler hipodensiteler.",
                "contrast": "Mamiller cisim kontrastlanması (nadir görülür BT'de)."
            },
            "mri": {
                "t1": "Genellikle normal. Kronik evrede mamiller cisim atrofisi.",
                "t2": "SİMETRİK hiperintensite: Mediyal talamusta, periakvaduktal gri cevherde, mamiller cisimlerde, tektal plakada. PATOGNOMONİK dağılım.",
                "t1_c": "Mamiller cisim kontrastlanması (akut fazda). Periventriküler kontrastlanma olabilir.",
                "dwi": "Akut fazda kısıtlanma gösterebilir (sitotoksik ödem). Reversibl olabilir."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Usually NORMAL. Thalamic and periventricular hypodensities in advanced cases.",
                "contrast": "Mammillary body enhancement (rarely seen on CT)."
            },
            "mri": {
                "t1": "Usually normal. Mammillary body atrophy in chronic stage.",
                "t2": "SYMMETRIC hyperintensity: In medial thalami, periaqueductal gray matter, mammillary bodies, tectal plate. PATHOGNOMONIC distribution.",
                "t1_c": "Mammillary body enhancement (in acute phase). Periventricular enhancement may be present.",
                "dwi": "May show restriction in acute phase (cytotoxic edema). May be reversible."
            }
        },
        "keyPoints": [
            "Klasik triad: Konfüzyon + ataksi + oftalmopleji (sadece %16 tam triad gösterir).",
            "Simetrik mediyal talamus + periakvaduktal tutulum = Wernicke düşün.",
            "Mamiller cisim tutulumu PATOGNOMONİK (MRI'da en spesifik bulgu).",
            "Tedavi: Acil IV tiamin - gecikme kalıcı Korsakoff sendromuna yol açar."
        ],
        "keyPointsEn": [
            "Classic triad: Confusion + ataxia + ophthalmoplegia (only 16% show complete triad).",
            "Symmetric medial thalami + periaqueductal involvement = Think Wernicke.",
            "Mammillary body involvement is PATHOGNOMONIC (most specific finding on MRI).",
            "Treatment: Emergent IV thiamine - delay leads to permanent Korsakoff syndrome."
        ],
        "etiology": "Tiamin (B1 vitamini) eksikliği. En sık kronik alkolizm. Diğer: Hiperemezis gravidarum, malabsorbsiyon, uzun süreli TPN, bariatrik cerrahi sonrası.",
        "etiologyEn": "Thiamine (vitamin B1) deficiency. Most commonly chronic alcoholism. Others: Hyperemesis gravidarum, malabsorption, prolonged TPN, post-bariatric surgery.",
        "mechanism": "Tiamin eksikliği → oksidatif metabolizma bozukluğu → seçici nöronal hasar (enerji metabolizmasına bağımlı bölgelerde: talamus, mamiller cisimler, periventriküler).",
        "mechanismEn": "Thiamine deficiency → oxidative metabolism impairment → selective neuronal damage (in regions dependent on energy metabolism: thalami, mammillary bodies, periventricular areas).",
        "differentialDiagnosis": [
            "Derin serebral ven trombozu (bilateral talamik lezyon)",
            "Top of basilar sendromu (bilateral talamus + mezensefalon infarktı)",
            "Creutzfeldt-Jakob hastalığı (kortikal + bazal ganglia DWI kısıtlanması)",
            "Osmotik demyelinizasyon (santral pontin myelinoliz)"
        ],
        "differentialDiagnosisEn": [
            "Deep cerebral vein thrombosis (bilateral thalamic lesion)",
            "Top of basilar syndrome (bilateral thalamus + mesencephalon infarct)",
            "Creutzfeldt-Jakob disease (cortical + basal ganglia DWI restriction)",
            "Osmotic demyelination (central pontine myelinolysis)"
        ],
        "goldStandard": "MRI FLAIR/T2: Simetrik mediyal talamus + periakvaduktal + mamiller cisim hiperintensitesi. Klinik: Tiamin düzeyi (düşük).",
        "goldStandardEn": "MRI FLAIR/T2: Symmetric medial thalami + periaqueductal + mammillary body hyperintensity. Clinical: Thiamine level (low).",
        "clinicalPearl": "Alkolik hastada konfüzyon + simetrik talamus T2 hiperintensitesi = Wernicke. Glukoz vermeden ÖNCE tiamin ver - aksi takdirde tabloyu ağırlaştırırsın.",
        "clinicalPearlEn": "Confusion in alcoholic patient + symmetric thalamus T2 hyperintensity = Wernicke. Give thiamine BEFORE glucose - otherwise the condition worsens.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Zuccoli G, et al. AJNR Am J Neuroradiol. 2009;30(1):171-176.",
            "Radiopaedia.org - Wernicke encephalopathy"
        ]
    },
    {
        "id": "moyamoya_disease",
        "name": "Moyamoya Hastalığı",
        "nameEn": "Moyamoya Disease",
        "category": "Vasküler",
        "categoryEn": "Vascular",
        "findings": {
            "ct": {
                "non_contrast": "İnfarkt alanları (bazen hemorajik). Bazal ganglia bölgesinde kalsifikasyon (kronik).",
                "cta": "Bilateral ICA terminal segment ve proksimal ACA/MCA'da belirgin darlık/oklüzyon. Bazalde 'dumanlı bulut' şeklinde kollateral ağ."
            },
            "mri": {
                "t1": "Bazal ganglia ve periventriküler bölgede multipl flow void yapıları (kollateraller). İnfarkt sekelleri.",
                "t2": "Multipl 'flow void' (bazal kollateraller). Ivy sign (leptomeningeal kollateraller): FLAIR'de sulkal hiperintensite.",
                "t1_c": "Leptomeningeal kontrastlanma (pial kollateraller). Bazal ganglia kontrastlanan kollateral damar ağı.",
                "dwi": "Akut iskemik olaylarda difüzyon kısıtlanması. Watershed (sınır zon) infarktları."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Infarct areas (sometimes hemorrhagic). Calcification in basal ganglia region (chronic).",
                "cta": "Marked stenosis/occlusion in bilateral ICA terminal segments and proximal ACA/MCA. 'Puff of smoke' collateral network at base."
            },
            "mri": {
                "t1": "Multiple flow void structures in basal ganglia and periventricular region (collaterals). Infarct sequelae.",
                "t2": "Multiple flow voids (basal collaterals). Ivy sign (leptomeningeal collaterals): Sulcal hyperintensity on FLAIR.",
                "t1_c": "Leptomeningeal enhancement (pial collaterals). Enhancing collateral vascular network in basal ganglia.",
                "dwi": "Diffusion restriction in acute ischemic events. Watershed (border zone) infarcts."
            }
        },
        "keyPoints": [
            "Bilateral ICA terminal stenoz/oklüzyon + bazal kollateral ağ = 'Dumanlı bulut (Moyamoya)' görünümü.",
            "'Ivy sign' (FLAIR sulkal hiperintensite): Leptomeningeal kollateral göstergesi.",
            "Çocuklarda iskemik, erişkinlerde hemorajik prezentasyon daha sık.",
            "Doğu Asya popülasyonunda çok daha sık (Japonya, Kore)."
        ],
        "keyPointsEn": [
            "Bilateral ICA terminal stenosis/occlusion + basal collateral network = 'Puff of smoke (Moyamoya)' appearance.",
            "'Ivy sign' (sulcal hyperintensity on FLAIR): Indicator of leptomeningeal collaterals.",
            "Ischemic presentation more common in children, hemorrhagic in adults.",
            "Much more common in East Asian populations (Japan, Korea)."
        ],
        "etiology": "İdiyopatik (Moyamoya hastalığı) veya sekonder (Moyamoya sendromu: Nörofibromatozis tip 1, orak hücreli anemi, Down sendromu, radyasyon sonrası).",
        "etiologyEn": "Idiopathic (Moyamoya disease) or secondary (Moyamoya syndrome: Neurofibromatosis type 1, sickle cell anemia, Down syndrome, post-radiation).",
        "mechanism": "Progresif intimal fibröz kalınlaşma → ICA terminal segment ve proksimal Willis poligonu dallarında stenoz/oklüzyon → kompansatuvar bazal perforatör ve leptomeningeal kollateral gelişimi.",
        "mechanismEn": "Progressive intimal fibrous thickening → stenosis/occlusion in ICA terminal segment and proximal Circle of Willis branches → compensatory basal perforator and leptomeningeal collateral development.",
        "differentialDiagnosis": [
            "Aterosklerotik intrakraniyel stenoz (yaşlı, asimetrik)",
            "Vaskülit (inflamatuvar belirteçler yüksek)",
            "Fibromusküler displazi (genç kadın, renal arter tutulumu)",
            "İntrakraniyel ateroskleroz (fokal, unilateral olabilir)"
        ],
        "differentialDiagnosisEn": [
            "Atherosclerotic intracranial stenosis (elderly, asymmetric)",
            "Vasculitis (elevated inflammatory markers)",
            "Fibromuscular dysplasia (young female, renal artery involvement)",
            "Intracranial atherosclerosis (focal, may be unilateral)"
        ],
        "goldStandard": "DSA (konvansiyonel anjiyografi): Bilateral ICA terminal oklüzyon + bazal moyamoya damarları. MRA/CTA tarama için kullanılır.",
        "goldStandardEn": "DSA (conventional angiography): Bilateral ICA terminal occlusion + basal moyamoya vessels. MRA/CTA used for screening.",
        "clinicalPearl": "Genç hastada tekrarlayan TIA/infarkt + bilateral ICA stenoz + bazal ganglia flow voidler = Moyamoya. Hiperventilasyon semptomları provoke eder (PaCO2 düşüşü → vazokonstrüksiyon).",
        "clinicalPearlEn": "Recurrent TIA/infarcts in young patient + bilateral ICA stenosis + basal ganglia flow voids = Moyamoya. Hyperventilation provokes symptoms (PaCO2 decrease → vasoconstriction).",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Scott RM, Smith ER. N Engl J Med. 2009;360(12):1226-1237.",
            "Radiopaedia.org - Moyamoya disease"
        ]
    },
    {
        "id": "choroid_plexus_papilloma",
        "name": "Koroid Pleksus Papillomu",
        "nameEn": "Choroid Plexus Papilloma",
        "category": "Neoplastik",
        "categoryEn": "Neoplastic",
        "findings": {
            "ct": {
                "non_contrast": "Ventrikül içi lobüle, izodens/hafif hiperdens kitle. Kalsifikasyon %25. Belirgin HİDROSEFALİ.",
                "contrast": "YOĞUN ve HOMOJEN kontrastlanma."
            },
            "mri": {
                "t1": "İzointens/hafif hipointens ventrikül içi kitle. Lobüle kontur ('karnabahar' görünümü).",
                "t2": "İzointens/hafif hiperintens. Lobüle morfoloji belirgin.",
                "t1_c": "YOĞUN ve HOMOJEN kontrastlanma. Lobüle yapı çok belirgin kontrastlı serilerde.",
                "dwi": "Genellikle kısıtlanma yok (papillomda). Karsinomda kısıtlanma olabilir."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Intraventricular lobulated, isodense/mildly hyperdense mass. Calcification 25%. Prominent HYDROCEPHALUS.",
                "contrast": "INTENSE and HOMOGENEOUS enhancement."
            },
            "mri": {
                "t1": "Isointense/mildly hypointense intraventricular mass. Lobulated contour ('cauliflower' appearance).",
                "t2": "Isointense/mildly hyperintense. Lobulated morphology prominent.",
                "t1_c": "INTENSE and HOMOGENEOUS enhancement. Lobulated structure very prominent on contrast series.",
                "dwi": "Generally no restriction (in papilloma). Restriction may be present in carcinoma."
            }
        },
        "keyPoints": [
            "Çocuklarda lateral ventrikül, erişkinlerde 4. ventrikül yerleşimi.",
            "Hidrosefali: BOS aşırı üretimi + obstrüksiyon.",
            "Karsinom ayırımı: Beyin parankimi invazyonu, nekroz, DWI kısıtlanması.",
            "Yoğun kontrastlanma + ventrikül içi lobüle kitle + hidrosefali = CPP düşün."
        ],
        "keyPointsEn": [
            "Lateral ventricle in children, 4th ventricle in adults.",
            "Hydrocephalus: CSF overproduction + obstruction.",
            "Carcinoma differentiation: Brain parenchyma invasion, necrosis, DWI restriction.",
            "Intense enhancement + intraventricular lobulated mass + hydrocephalus = Think CPP."
        ],
        "etiology": "Koroid pleksus epitelinden kaynaklanan benign (WHO Grade I) tümör. Li-Fraumeni sendromu (TP53 mutasyonu) ile ilişki.",
        "etiologyEn": "Benign (WHO Grade I) tumor originating from choroid plexus epithelium. Associated with Li-Fraumeni syndrome (TP53 mutation).",
        "mechanism": "Koroid pleksus epiteli → papiller proliferasyon → BOS aşırı üretimi + mekanik obstrüksiyon → hidrosefali.",
        "mechanismEn": "Choroid plexus epithelium → papillary proliferation → CSF overproduction + mechanical obstruction → hydrocephalus.",
        "differentialDiagnosis": [
            "Ependimom (4. ventrikül tabanından kaynak)",
            "Medulloblastom (solid, vermis, çocuk)",
            "Meningiom (erişkin, trigon bölgesi)",
            "Metastaz (koroid pleksusa metastaz, erişkin)"
        ],
        "differentialDiagnosisEn": [
            "Ependymoma (originating from 4th ventricle floor)",
            "Medulloblastoma (solid, vermis, child)",
            "Meningioma (adult, trigone region)",
            "Metastasis (metastasis to choroid plexus, adult)"
        ],
        "goldStandard": "MRI: Yoğun kontrastlanan ventrikül içi lobüle kitle. Histopatoloji: Papiller yapılar, fibrövasküler kor.",
        "goldStandardEn": "MRI: Intensely enhancing intraventricular lobulated mass. Histopathology: Papillary structures, fibrovascular core.",
        "clinicalPearl": "Süt çocuğunda makrosefali + ventrikül içi yoğun kontrastlanan lobüle kitle = Koroid pleksus papillomu. Lateral ventrikülde ise koroid pleksus karsinomunu da dışla.",
        "clinicalPearlEn": "Macrocephaly in infant + intensely enhancing intraventricular lobulated mass = Choroid plexus papilloma. If in the lateral ventricle, also exclude choroid plexus carcinoma.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "WHO Classification of CNS Tumours. 5th ed. 2021.",
            "Radiopaedia.org - Choroid plexus papilloma"
        ]
    },
    {
        "id": "pml",
        "name": "PML (Progresif Multifokal Lökoensefalopati)",
        "nameEn": "Progressive Multifocal Leukoencephalopathy (PML)",
        "category": "Enfeksiyöz/Demyelinizan",
        "categoryEn": "Infectious/Demyelinating",
        "findings": {
            "ct": {
                "non_contrast": "Asimetrik beyaz cevher hipodensiteleri. Kütle etkisi yok. Multifokal.",
                "contrast": "Kontrastlanma YOK (tipik). İmmün rekonstitüsyon durumunda (IRIS) periferal kontrastlanma olabilir."
            },
            "mri": {
                "t1": "Beyaz cevherde hipointens lezyonlar. U-fiber (subkortikal arkuat lifler) tutulumu KARAKTERİSTİK.",
                "t2": "Asimetrik, multifokal, konfluent beyaz cevher hiperintensiteleri. Subkortikal U-fiber tutulumu (kortikal kenar boyunca). Kütle etkisi ve perileziyonel ödem YOK.",
                "t1_c": "Kontrastlanma yok (tipik PML). IRIS gelişirse: Periferal/patchy kontrastlanma.",
                "dwi": "Aktif lezyon kenarında kısıtlanma (ilerleyen demyelinizasyon cephesi). Santral bölümde kısıtlanma yok."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Asymmetric white matter hypodensities. No mass effect. Multifocal.",
                "contrast": "NO enhancement (typical). Peripheral enhancement may be present in immune reconstitution (IRIS)."
            },
            "mri": {
                "t1": "Hypointense lesions in white matter. U-fiber (subcortical arcuate fibers) involvement is CHARACTERISTIC.",
                "t2": "Asymmetric, multifocal, confluent white matter hyperintensities. Subcortical U-fiber involvement (along cortical margin). NO mass effect or perilesional edema.",
                "t1_c": "No enhancement (typical PML). If IRIS develops: Peripheral/patchy enhancement.",
                "dwi": "Restriction at active lesion edge (advancing demyelination front). No restriction in central portion."
            }
        },
        "keyPoints": [
            "İmmünsuprese hastada (HIV, natalizumab, transplant) beyaz cevher lezyonları = PML düşün.",
            "U-fiber tutulumu MS'ten AYIRICI: MS subkortikal U-fiberleri genellikle korur.",
            "Kontrastlanma olmaması + kütle etkisi olmaması = PML. Kontrastlanma varsa IRIS düşün.",
            "JC virüs PCR (BOS) ile doğrulama yapılır."
        ],
        "keyPointsEn": [
            "White matter lesions in immunosuppressed patient (HIV, natalizumab, transplant) = Think PML.",
            "U-fiber involvement DIFFERENTIATES from MS: MS generally spares subcortical U-fibers.",
            "No enhancement + no mass effect = PML. If enhancement present, consider IRIS.",
            "Confirmation with JC virus PCR (CSF)."
        ],
        "etiology": "JC virüs (John Cunningham virus) reaktivasyonu. İmmünsupresyon: HIV/AIDS (CD4 <200), natalizumab (MS tedavisi), organ transplantasyonu, hematolojik maligniteler.",
        "etiologyEn": "JC virus (John Cunningham virus) reactivation. Immunosuppression: HIV/AIDS (CD4 <200), natalizumab (MS treatment), organ transplantation, hematologic malignancies.",
        "mechanism": "JC virüs → oligodendrosit enfeksiyonu → demyelinizasyon → progresif beyaz cevher hasarı. Subkortikal U-fiberler dahil yaygın tutulum.",
        "mechanismEn": "JC virus → oligodendrocyte infection → demyelination → progressive white matter damage. Widespread involvement including subcortical U-fibers.",
        "differentialDiagnosis": [
            "Multipl skleroz (periventriküler, Dawson fingers, U-fiber korunur)",
            "HIV ensefalopatisi (simetrik, periventriküler, daha diffüz)",
            "Lenfoma (kütle etkisi, kontrastlanma, DWI kısıtlanma)",
            "ADEM (çocuk/genç, monofazik, kontrastlanma olabilir)"
        ],
        "differentialDiagnosisEn": [
            "Multiple sclerosis (periventricular, Dawson fingers, U-fibers spared)",
            "HIV encephalopathy (symmetric, periventricular, more diffuse)",
            "Lymphoma (mass effect, enhancement, DWI restriction)",
            "ADEM (child/young, monophasic, enhancement may be present)"
        ],
        "goldStandard": "MRI (subkortikal U-fiber tutulumu + kontrastlanmama) + BOS JC virüs PCR pozitifliği.",
        "goldStandardEn": "MRI (subcortical U-fiber involvement + no enhancement) + CSF JC virus PCR positivity.",
        "clinicalPearl": "İmmünsuprese hasta + asimetrik beyaz cevher lezyonu + U-fiber tutulumu + kontrastlanma yok = PML. Natalizumab kullanan MS hastasında yeni lezyon gelişirse PML'yi dışla.",
        "clinicalPearlEn": "Immunosuppressed patient + asymmetric white matter lesion + U-fiber involvement + no enhancement = PML. If new lesion develops in MS patient on natalizumab, exclude PML.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Berger JR, et al. N Engl J Med. 2017;376(8):765-773.",
            "Radiopaedia.org - Progressive multifocal leukoencephalopathy"
        ]
    },
    {
        "id": "central_pontine_myelinolysis",
        "name": "Santral Pontin Miyelinoliz (Osmotik Demyelinizasyon)",
        "nameEn": "Central Pontine Myelinolysis (Osmotic Demyelination)",
        "category": "Metabolik/Toksik",
        "categoryEn": "Metabolic/Toxic",
        "findings": {
            "ct": {
                "non_contrast": "Ponsta hipodens alan. Erken evrede normal olabilir. BT sensitivitesi düşük.",
                "contrast": "Genellikle kontrastlanma yok."
            },
            "mri": {
                "t1": "Pons santralinde hipointens alan. 'Trident (üçlü diş)' veya 'yarasa kanat' şekli KARAKTERİSTİK.",
                "t2": "Pons santralinde SİMETRİK hiperintensite. Ventrolateral pons ve tegmentum KORUNUR (trident sign). Ekstrapontin tutulum: Bazal ganglia, talamus, serebellum.",
                "t1_c": "Kontrastlanma yok (tipik). Subakut dönemde hafif kontrastlanma nadiren.",
                "dwi": "ERKEN BULGU: Semptom başlangıcından 24 saat içinde DWI kısıtlanması görülebilir (T2/FLAIR'den ÖNCE pozitifleşir)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Hypodense area in pons. May be normal in early stage. CT sensitivity is low.",
                "contrast": "Generally no enhancement."
            },
            "mri": {
                "t1": "Hypointense area in central pons. 'Trident' or 'bat wing' shape is CHARACTERISTIC.",
                "t2": "SYMMETRIC hyperintensity in central pons. Ventrolateral pons and tegmentum are SPARED (trident sign). Extrapontine involvement: Basal ganglia, thalamus, cerebellum.",
                "t1_c": "No enhancement (typical). Mild enhancement rarely in subacute period.",
                "dwi": "EARLY FINDING: DWI restriction can be seen within 24 hours of symptom onset (becomes positive BEFORE T2/FLAIR)."
            }
        },
        "keyPoints": [
            "Hiponatreminin hızlı düzeltilmesi (>10-12 mEq/L/gün) en sık neden.",
            "Trident sign: Santral pons tutulumu + ventrolateral korunma = Patognomonik.",
            "DWI erken tanıda T2/FLAIR'den daha sensitif - semptom başlangıcından 24 saat içinde pozitifleşir.",
            "Ekstrapontin miyelinoliz: Bazal ganglia, talamus tutulumu → parkinsonizm, distoni."
        ],
        "keyPointsEn": [
            "Rapid correction of hyponatremia (>10-12 mEq/L/day) is the most common cause.",
            "Trident sign: Central pons involvement + ventrolateral sparing = Pathognomonic.",
            "DWI is more sensitive than T2/FLAIR in early diagnosis - becomes positive within 24 hours of onset.",
            "Extrapontine myelinolysis: Basal ganglia, thalamus involvement → parkinsonism, dystonia."
        ],
        "etiology": "Hızlı osmolalite değişimi. En sık: Hiponatremi hızlı düzeltilmesi. Risk faktörleri: Kronik alkolizm, malnütrisyon, karaciğer transplantasyonu, yanık.",
        "etiologyEn": "Rapid osmolality change. Most common: Rapid correction of hyponatremia. Risk factors: Chronic alcoholism, malnutrition, liver transplantation, burns.",
        "mechanism": "Hızlı serum osmolalite artışı → oligodendrosit hasarı (osmotik stres) → miyelinoliz. Pons bu hasara en duyarlı bölge (vasküler anatomisi nedeniyle).",
        "mechanismEn": "Rapid serum osmolality increase → oligodendrocyte damage (osmotic stress) → myelinolysis. Pons is the most vulnerable region to this damage (due to its vascular anatomy).",
        "differentialDiagnosis": [
            "Pontin infarkt (asimetrik, vasküler territory)",
            "Pontin gliom (çocuk, genişleyen kitle, kontrastlanma)",
            "MS plağı (asimetrik, diğer demyelinizan lezyonlar)",
            "Wernicke ensefalopatisi (periakvaduktal, mamiller cisim)"
        ],
        "differentialDiagnosisEn": [
            "Pontine infarct (asymmetric, vascular territory)",
            "Pontine glioma (child, expanding mass, enhancement)",
            "MS plaque (asymmetric, other demyelinating lesions)",
            "Wernicke encephalopathy (periaqueductal, mammillary bodies)"
        ],
        "goldStandard": "MRI DWI (erken tanı) + T2/FLAIR (trident sign). Klinik: Hiponatremi düzeltme öyküsü + kuadripleji/psödobulber palsi.",
        "goldStandardEn": "MRI DWI (early diagnosis) + T2/FLAIR (trident sign). Clinical: History of hyponatremia correction + quadriplegia/pseudobulbar palsy.",
        "clinicalPearl": "Hiponatremi düzeltildikten 2-6 gün sonra kuadripleji gelişen hastada: Pons MRI DWI çek. T2 negatif olsa bile DWI pozitif olabilir. Altın kural: Na düzeltme hızı <8-10 mEq/L/gün.",
        "clinicalPearlEn": "In a patient developing quadriplegia 2-6 days after hyponatremia correction: Order pons MRI DWI. DWI may be positive even if T2 is negative. Golden rule: Na correction rate <8-10 mEq/L/day.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Martin RJ. J Neurol Neurosurg Psychiatry. 2004;75(Suppl 3):iii22-iii28.",
            "Radiopaedia.org - Osmotic demyelination syndrome"
        ]
    },
    {
        "id": "cerebral_venous_angioma",
        "name": "Gelişimsel Venöz Anomali (DVA)",
        "nameEn": "Developmental Venous Anomaly (DVA)",
        "category": "Vasküler/Konjenital",
        "categoryEn": "Vascular/Congenital",
        "findings": {
            "ct": {
                "non_contrast": "Genellikle NORMAL. Nadiren lineer hiperdens yapı (dilate kolektör ven).",
                "contrast": "'Caput medusae' (Medusa başı) görünümü: Santral dilate kolektör vene drene olan radyal medüller venlerin yıldız şeklinde dizilimi."
            },
            "mri": {
                "t1": "Genellikle normal. Flow void (kolektör ven) görülebilir.",
                "t2": "Genellikle normal. Kolektör ven flow void olarak izlenir. T2* (SWI): Radyal medüller venler hipointens.",
                "t1_c": "'CAPUT MEDUSAE': Yoğun kontrastlanan radyal venler + santral dilate kolektör ven. EN KARAKTERİSTİK BULGU.",
                "dwi": "Normal (kısıtlanma yok)."
            }
        },
        "findingsEn": {
            "ct": {
                "non_contrast": "Usually NORMAL. Rarely linear hyperdense structure (dilated collector vein).",
                "contrast": "'Caput medusae' (Medusa head) appearance: Star-shaped arrangement of radial medullary veins draining into central dilated collector vein."
            },
            "mri": {
                "t1": "Usually normal. Flow void (collector vein) may be visible.",
                "t2": "Usually normal. Collector vein seen as flow void. T2* (SWI): Radial medullary veins hypointense.",
                "t1_c": "'CAPUT MEDUSAE': Intensely enhancing radial veins + central dilated collector vein. MOST CHARACTERISTIC FINDING.",
                "dwi": "Normal (no restriction)."
            }
        },
        "keyPoints": [
            "En sık intrakraniyel vasküler malformasyon (insidental, %2.5 otopsi).",
            "'Caput medusae' (Medusa başı) PATOGNOMONİK: Radyal venler + santral kolektör ven.",
            "BENİGN - cerrahi endikasyonu YOK. Normal beyin drenajının bir parçası.",
            "Eşlik eden kavernöz malformasyon: %20-30 birlikte görülür."
        ],
        "keyPointsEn": [
            "Most common intracranial vascular malformation (incidental, 2.5% autopsy).",
            "'Caput medusae' (Medusa head) is PATHOGNOMONIC: Radial veins + central collector vein.",
            "BENIGN - NO surgical indication. Part of normal brain drainage.",
            "Associated cavernous malformation: Seen together in 20-30%."
        ],
        "etiology": "Gelişimsel venöz varyant. Normal venöz gelişim sırasında oluşan drene edici ven anomalisi.",
        "etiologyEn": "Developmental venous variant. Draining vein anomaly formed during normal venous development.",
        "mechanism": "Embriyolojik dönemde normal medüller venlerin gerilemesi yerine kalıcı olması → alternatif venöz drenaj yolu oluşumu → 'caput medusae' paterni.",
        "mechanismEn": "Persistence instead of regression of normal medullary veins during embryological period → formation of alternative venous drainage pathway → 'caput medusae' pattern.",
        "differentialDiagnosis": [
            "Kavernöz malformasyon (T2* 'bloom', kontrastlanma minimal)",
            "AVM (arteriyel besleyiciler, erken venöz drenaj)",
            "Sturge-Weber (leptomeningeal anjiomatozis)",
            "Dural AV fistül (pulsatil tinnitus, erken venöz dolum)"
        ],
        "differentialDiagnosisEn": [
            "Cavernous malformation (T2* 'bloom', minimal enhancement)",
            "AVM (arterial feeders, early venous drainage)",
            "Sturge-Weber (leptomeningeal angiomatosis)",
            "Dural AV fistula (pulsatile tinnitus, early venous filling)"
        ],
        "goldStandard": "MRI kontrastlı: Caput medusae görünümü. Ek tetkik gerektirmez.",
        "goldStandardEn": "Contrast-enhanced MRI: Caput medusae appearance. No additional workup required.",
        "clinicalPearl": "İnsidental kontrastlı MRI'da 'caput medusae' = DVA. Benign, cerrahi YAPILMAZ (çıkarılırsa venöz infarkt gelişir). Eşlik eden kavernöm varsa onu takip et.",
        "clinicalPearlEn": "Incidental 'caput medusae' on contrast MRI = DVA. Benign, NO surgery (removal causes venous infarct). If associated cavernoma exists, follow that one.",
        "references": [
            "Osborn AG. Osborn's Brain. 2nd ed. Elsevier; 2017.",
            "Defined AL, et al. AJNR Am J Neuroradiol. 2011;32(9):1568-1574.",
            "Radiopaedia.org - Developmental venous anomaly"
        ]
    }
];
