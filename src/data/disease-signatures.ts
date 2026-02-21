import { Modality } from "./lexicon";

export interface DiseaseSignature {
    id: string; // unique disease id (e.g. 'glioblastoma')
    name: string; // Display name
    organ: "Brain" | "Spine" | "Liver" | "Kidney" | "Lung" | "MSK" | "GI" | "Breast" | "Gynecology";
    signatures: {
        [key in Modality]?: {
            strongFindings: string[]; // Highly suggestive findings
            weakFindings?: string[]; // Supportive findings
            description?: string; // Brief description of appearance in this modality
        }
    };
    baseProbability: number; // Prevalence / likelihood score (0-100)
}

export const DISEASE_SIGNATURES: DiseaseSignature[] = [
    // --- BRAIN (Beyin) ---
    {
        id: "glioblastoma",
        name: "Glioblastom (GBM)",
        organ: "Brain",
        baseProbability: 15,
        signatures: {
            MRI: {
                strongFindings: ["mri_enhance_ring", "mri_edema_vasogenic", "mri_dwi_restrict", "mri_loc_intra_axial"],
                weakFindings: ["mri_t1_hypo", "mri_t2_hyper", "mri_swi_bloom"],
                description: "Tipik olarak geniş vazojenik ödem ile çevrili, periferik düzensiz kontrast tutan kitle."
            }
        }
    },
    {
        id: "meningioma",
        name: "Meningiom",
        organ: "Brain",
        baseProbability: 20,
        signatures: {
            MRI: {
                strongFindings: ["mri_enhance_dura_tail", "mri_loc_extra_axial", "mri_loc_cpa"],
                weakFindings: ["mri_t1_hypo", "mri_t2_hyper", "mri_enhance_leptomeningeal"],
                description: "Ekstra-aksiyal, dural kuyruk bulgusu gösteren, homojen kontrastlanan lezyon."
            }
        }
    },
    {
        id: "multiple_sclerosis",
        name: "Multipl Skleroz (MS)",
        organ: "Brain",
        baseProbability: 10,
        signatures: {
            MRI: {
                strongFindings: ["mri_loc_periventricular", "mri_t2_hyper"],
                weakFindings: ["mri_t1_hypo"],
                description: "Periventriküler beyaz cevherde ovoid plaklar (Dawson parmakları)."
            }
        }
    },
    {
        id: "acute_ischemic_stroke",
        name: "Akut İskemik İnme",
        organ: "Brain",
        baseProbability: 25,
        signatures: {
            MRI: {
                strongFindings: ["mri_dwi_restrict", "mri_t2_hyper"],
                description: "DWI'da difüzyon kısıtlılığı gösteren; vasküler sulama alanına uyan lezyon."
            },
            CT: {
                strongFindings: ["ct_hypodense", "ct_enhance_none"], // Early signs
                description: "Erken dönemde normal olabilir veya silik hipodansite izlenebilir."
            }
        }
    },
    {
        id: "vestibular_schwannoma",
        name: "Vestibüler Schwannom",
        organ: "Brain",
        baseProbability: 5,
        signatures: {
            MRI: {
                strongFindings: ["mri_loc_cpa", "mri_sign_ice_cream", "mri_enhance_ring"],
                description: "Serebellopontin köşede, internal akustik kanala uzanım gösteren kitle."
            }
        }
    },

    // --- SPINE (Omurga) ---
    {
        id: "lumbar_disc_herniation",
        name: "Lomber Disk Hernisi",
        organ: "Spine",
        baseProbability: 40,
        signatures: {
            MRI: {
                strongFindings: ["spine_disc_herniation", "spine_nerve_compression"],
                weakFindings: ["spine_marrow_edema"],
                description: "İntervertebral diskte taşma ve sinir kökü basısı."
            }
        }
    },
    {
        id: "spinal_stenosis_lumbar",
        name: "Lomber Spinal Stenoz",
        organ: "Spine",
        baseProbability: 30,
        signatures: {
            MRI: {
                strongFindings: ["spine_canal_stenosis"],
                description: "Spinal kanal çapında daralma."
            }
        }
    },
    {
        id: "spinal_spondylolisthesis",
        name: "Spondilolistezis",
        organ: "Spine",
        baseProbability: 15,
        signatures: {
            MRI: {
                strongFindings: ["spine_spondylolisthesis", "spine_pars_defect"],
                description: "Vertebra korpusunun bir diğeri üzerinde öne kayması."
            },
            CT: {
                strongFindings: ["spine_spondylolisthesis", "spine_pars_defect"],
                description: "Pars interartikülaris defekti ve listezis."
            }
        }
    },
    {
        id: "spinal_trauma_burst",
        name: "Spinal Patlama (Burst) Kırığı",
        organ: "Spine",
        baseProbability: 5,
        signatures: {
            CT: {
                strongFindings: ["spine_fracture_burst", "ct_hyperdense"],
                description: "Vertebra korpusunda parçalı kırık ve retropulsiyon."
            },
            MRI: {
                strongFindings: ["spine_fracture_burst", "spine_marrow_edema", "spine_nerve_compression"],
                description: "Kırık hattı, kemik iliği ödemi ve korda bası."
            }
        }
    },
    {
        id: "spinal_metastasis",
        name: "Omurga Metastazı",
        organ: "Spine",
        baseProbability: 10,
        signatures: {
            MRI: {
                strongFindings: ["mri_t1_hypo", "mri_enhance_hetero", "spine_marrow_edema"],
                description: "Vertebra korpusunda T1 hipointens infiltrasyon."
            }
        }
    },

    // --- LIVER (Karaciğer) ---
    {
        id: "hcc",
        name: "Hepatosellüler Karsinom (HCC)",
        organ: "Liver",
        baseProbability: 10,
        signatures: {
            CT: {
                strongFindings: ["ct_contrast_washout", "ct_enhance_hetero", "mri_capsule_appearance"],
                weakFindings: ["usg_liver_coarse"],
                description: "Arteriyel fazda parlak, geç fazda washout (yıkanma) gösteren kitle."
            },
            MRI: {
                strongFindings: ["ct_contrast_washout", "mri_capsule_appearance", "mri_fat_intracellular"],
                description: "Arteriyel boyanma, washout ve kapsül görünümü."
            }
        }
    },
    {
        id: "liver_cyst",
        name: "Basit Karaciğer Kisti",
        organ: "Liver",
        baseProbability: 30,
        signatures: {
            USG: {
                strongFindings: ["usg_anechoic", "usg_posterior_enhancement"],
                description: "Anek,ik, duvar yapısı izlenmeyen, posterior akustik güçlenme gösteren lezyon."
            },
            CT: {
                strongFindings: ["ct_hypodense", "ct_enhance_none"],
                description: "Su dansitesinde, kontrast tutmayan düzgün sınırlı lezyon."
            }
        }
    },
    {
        id: "liver_hemangioma",
        name: "Hemanjiyom",
        organ: "Liver",
        baseProbability: 25,
        signatures: {
            USG: {
                strongFindings: ["usg_hyperechoic"],
                description: "Düzgün sınırlı, homojen hiperekoik nodül."
            },
            CT: {
                strongFindings: ["ct_enhance_nodular"],
                description: "Periferden merkeze doğru nodüler doluş (centripetal filling) gösteren lezyon."
            }
        }
    },
    {
        id: "fnh",
        name: "Fokal Nodüler Hiperplazi (FNH)",
        organ: "Liver",
        baseProbability: 5,
        signatures: {
            CT: {
                strongFindings: ["ct_central_scar", "ct_enhance_hetero"],
                description: "Santral skar içeren, arteriyel fazda homojen parlak boyanan lezyon."
            },
            MRI: {
                strongFindings: ["ct_central_scar"],
                weakFindings: ["mri_t2_hyper"], // Scar is hyper on T2
                description: "T2 hiperintens santral skar."
            }
        }
    },
    {
        id: "hydatid_cyst",
        name: "Kist Hidatik",
        organ: "Liver",
        baseProbability: 4,
        signatures: {
            USG: {
                strongFindings: ["usg_hydatid_sand", "usg_anechoic"], // Mixed echogenicity usually
                weakFindings: ["usg_posterior_enhancement"],
                description: "Kız veziküller, hidatik kum görünümü."
            }
        }
    },

    // --- KIDNEY (Böbrek) ---
    {
        id: "kidney_stone",
        name: "Böbrek Taşı",
        organ: "Kidney",
        baseProbability: 35,
        signatures: {
            USG: {
                strongFindings: ["usg_posterior_shadowing", "usg_hyperechoic"],
                weakFindings: ["usg_kidney_hydronephrosis"],
                description: "Posterior akustik gölgeleme yapan hiperekoik odak."
            },
            CT: {
                strongFindings: ["ct_calcification", "ct_hyperdense"],
                description: "Toplayıcı sistemde hiperdens kalsifik odak."
            }
        }
    },
    {
        id: "rcc",
        name: "Renal Hücreli Karsinom (RCC)",
        organ: "Kidney",
        baseProbability: 10,
        signatures: {
            CT: {
                strongFindings: ["ct_enhance_hetero"],
                weakFindings: ["ct_calcification"],
                description: "Böbrek parankiminden kaynaklanan, heterojen kontrastlanan solid kitle."
            }
        }
    },
    {
        id: "angiomyolipoma",
        name: "Anjiyomiyolipom (AML)",
        organ: "Kidney",
        baseProbability: 8,
        signatures: {
            CT: {
                strongFindings: ["ct_fat_density"],
                description: "Makroskopik yağ dansitesi (-HU) içeren kitle."
            },
            MRI: {
                strongFindings: ["mri_fat_intracellular"], // Using existing fat finding
                description: "Yağ bastırmalı sekanslarda sinyal kaybı."
            }
        }
    },
    {
        id: "pyelonephritis",
        name: "Akut Piyelonefrit",
        organ: "Kidney",
        baseProbability: 15,
        signatures: {
            CT: {
                strongFindings: ["ct_striated_nephrogram"],
                description: "Böbrekte çizgilenme tarzında (striated) perfüzyon defekti."
            }
        }
    },
    {
        id: "bosniak_cyst",
        name: "Kompleks Renal Kist (Bosniak)",
        organ: "Kidney",
        baseProbability: 5,
        signatures: {
            CT: {
                strongFindings: ["ct_bosniak_complex"],
                weakFindings: ["ct_calcification"],
                description: "Kalın duvarlı, septalı, kontrast tutan kompleks kist."
            }
        }
    },

    // --- LUNG (Akciğer) ---
    {
        id: "lung_cancer",
        name: "Akciğer Kanseri",
        organ: "Lung",
        baseProbability: 15,
        signatures: {
            CT: {
                strongFindings: ["ct_lung_nodule_spiculated", "ct_enhance_hetero"],
                weakFindings: ["ct_pleural_effusion", "ct_cavitation"],
                description: "Spiküle konturlu (düzensiz) solid nodül veya kitle."
            }
        }
    },
    {
        id: "pneumonia",
        name: "Pnömoni",
        organ: "Lung",
        baseProbability: 40,
        signatures: {
            CT: {
                strongFindings: ["ct_lung_consolidation", "ct_lung_ground_glass"],
                description: "Hava bronkogramları içeren konsolidasyon/buzlu cam alanları."
            }
        }
    },
    {
        id: "pulmonary_embolism",
        name: "Pulmoner Emboli (PE)",
        organ: "Lung",
        baseProbability: 12,
        signatures: {
            CT: {
                strongFindings: ["ct_polo_mint_sign", "ct_hamptons_hump"],
                description: "Pulmoner arterde dolum defekti, kama şeklinde konsolidasyon."
            }
        }
    },
    {
        id: "ild",
        name: "İnterstisyel Akciğer Hastalığı (ILD)",
        organ: "Lung",
        baseProbability: 8,
        signatures: {
            CT: {
                strongFindings: ["ct_crazy_paving", "ct_lung_ground_glass"],
                description: "Yaygın buzlu cam, retiküler dansiteler, bal peteği görünümü."
            }
        }
    },

    // --- MSK (Kas-İskelet) ---
    {
        id: "acl_tear",
        name: "Ön Çapraz Bağ (ACL) Yırtığı",
        organ: "MSK",
        baseProbability: 20,
        signatures: {
            MRI: {
                strongFindings: ["mri_tendon_rupture", "mri_joint_effusion", "mri_bone_marrow_edema"],
                weakFindings: ["mri_t2_hyper"],
                description: "T2'de sinyal artışı ve ligaman devamsızlığı. Bone bruise eşlik edebilir."
            }
        }
    },
    {
        id: "rotator_cuff_tear",
        name: "Rotator Cuff Yırtığı (Supraspinatus)",
        organ: "MSK",
        baseProbability: 25,
        signatures: {
            MRI: {
                strongFindings: ["mri_tendon_rupture", "mri_t2_hyper"],
                weakFindings: ["mri_joint_effusion"],
                description: "Tendonda T2 hiperintens sıvı sinyali (gap) ve retraksiyon."
            },
            USG: {
                strongFindings: ["usg_tendon_defect"],
                description: "Fokal anekoik defekt ve kartilaj arayüz işareti."
            }
        }
    },
    {
        id: "meniscus_tear",
        name: "Menisküs Yırtığı",
        organ: "MSK",
        baseProbability: 20,
        signatures: {
            MRI: {
                strongFindings: ["mri_meniscus_tear", "mri_joint_effusion"],
                description: "Menisküs içinde yüzeye ulaşan sinyal artışı."
            }
        }
    },
    {
        id: "bankart_lesion",
        name: "Bankart Lezyonu",
        organ: "MSK",
        baseProbability: 10,
        signatures: {
            MRI: {
                strongFindings: ["mri_labrum_detach", "mri_joint_effusion"],
                description: "Anteroinferior labrumun glenoid'den ayrılması."
            }
        }
    },
    {
        id: "avascular_necrosis",
        name: "Avasküler Nekroz (AVN)",
        organ: "MSK",
        baseProbability: 8,
        signatures: {
            MRI: {
                strongFindings: ["mri_t1_hypo", "mri_bone_marrow_edema"],
                weakFindings: ["mri_t2_hyper"],
                description: "Femur başında T1 hipointens nekroz alanı, double-line sign."
            }
        }
    },

    // --- GI (Gastrointestinal) ---
    {
        id: "acute_appendicitis_gi",
        name: "Akut Apandisit",
        organ: "GI",
        baseProbability: 25,
        signatures: {
            USG: {
                strongFindings: ["usg_non_compressible", "usg_hyperechoic"],
                description: "Bası ile sönmeyen, aperistaltik tübüler yapı (>6mm)."
            },
            CT: {
                strongFindings: ["ct_appendix_dilated", "ct_fat_stranding"],
                weakFindings: ["ct_bowel_wall_thick"],
                description: "Genişlemiş apendiks ve periappendiküler yağ kirlenmesi."
            }
        }
    },
    {
        id: "acute_diverticulitis_gi",
        name: "Akut Divertikülit",
        organ: "GI",
        baseProbability: 15,
        signatures: {
            CT: {
                strongFindings: ["ct_fat_stranding", "ct_bowel_wall_thick"],
                description: "İnflame divertikül etrafında yağ kirlenmesi ve kolon duvarı kalınlaşması."
            }
        }
    },
    {
        id: "bowel_obstruction_gi",
        name: "Mekanik İleus",
        organ: "GI",
        baseProbability: 12,
        signatures: {
            CT: {
                strongFindings: ["ct_bowel_dilated"],
                weakFindings: ["ct_hypodense"],
                description: "Proksimal dilatasyon, distal kollaps, geçiş noktası."
            }
        }
    },
    {
        id: "gi_perforation",
        name: "GI Perforasyon (Serbest Hava)",
        organ: "GI",
        baseProbability: 5,
        signatures: {
            CT: {
                strongFindings: ["ct_free_air", "ct_fat_stranding"],
                description: "İntraperitoneal serbest hava ve peritoneal irritasyon."
            }
        }
    },
    {
        id: "crohn_gi",
        name: "Crohn Hastalığı",
        organ: "GI",
        baseProbability: 8,
        signatures: {
            CT: {
                strongFindings: ["ct_bowel_wall_thick", "ct_fat_stranding"],
                description: "Terminal ileum tutulumu, transmural inflamasyon, creeping fat."
            },
            MRI: {
                strongFindings: ["mri_t2_hyper", "ct_bowel_wall_thick"],
                description: "MR Enterografi: Duvar kalınlaşması, T2 hiperintensite, fistül."
            }
        }
    },

    // --- Breast (Meme) ---
    {
        id: "breast_carcinoma",
        name: "Meme Karsinomu",
        organ: "Breast",
        baseProbability: 15,
        signatures: {
            USG: {
                strongFindings: ["usg_irregular_margin", "usg_hypoechoic", "usg_posterior_shadow_breast"],
                description: "Spiküle kenarlı, hipoekoik, posterior gölgeleme yapan solid kitle."
            },
            MRI: {
                strongFindings: ["mri_breast_enhance_rapid", "mri_dwi_restrict"],
                weakFindings: ["mri_pelvic_mass"],
                description: "Hızlı kontrast tutulumu + washout kinetikleri, DWI kısıtlılığı."
            }
        }
    },
    {
        id: "fibroadenoma",
        name: "Fibroadenom",
        organ: "Breast",
        baseProbability: 30,
        signatures: {
            USG: {
                strongFindings: ["usg_hypoechoic", "usg_posterior_enhancement"],
                weakFindings: ["usg_isoechoic"],
                description: "Oval/lobüle, homojen hipoekoik, posterior güçlenme gösteren solid kitle."
            }
        }
    },
    {
        id: "breast_dcis",
        name: "DCIS (Non-Mass Enhancement)",
        organ: "Breast",
        baseProbability: 8,
        signatures: {
            MRI: {
                strongFindings: ["mri_breast_non_mass", "ct_calcification"],
                description: "Lineer/segmental NME, ince dallanan kalsifikasyonlar."
            }
        }
    },

    // --- Gynecology (Jinekoloji) ---
    {
        id: "ovarian_simple_cyst",
        name: "Basit Overyan Kist",
        organ: "Gynecology",
        baseProbability: 35,
        signatures: {
            USG: {
                strongFindings: ["usg_anechoic", "usg_posterior_enhancement"],
                description: "İnce duvarlı, anekoik, posterior güçlenme gösteren kist."
            }
        }
    },
    {
        id: "endometrioma",
        name: "Endometrioma (Çikolata Kisti)",
        organ: "Gynecology",
        baseProbability: 10,
        signatures: {
            USG: {
                strongFindings: ["usg_ground_glass_cyst"],
                description: "Buzlu cam görünümlü, homojen düşük düzeyli eko içerikli kist."
            },
            MRI: {
                strongFindings: ["mri_t1_hyper", "mri_t2_hypo"],
                description: "T1 hiperintens, T2'de shading (karanlıklaşma) gösteren kist."
            }
        }
    },
    {
        id: "dermoid_cyst",
        name: "Overyan Dermoidi (Mature Teratom)",
        organ: "Gynecology",
        baseProbability: 10,
        signatures: {
            CT: {
                strongFindings: ["ct_fat_density", "ct_calcification"],
                description: "Yağ dansitesi ve kalsifikasyon içeren kistik kitle (Rokitansky nodülü)."
            },
            USG: {
                strongFindings: ["usg_hyperechoic", "usg_posterior_shadowing"],
                description: "Tip of the Iceberg işareti, hiperekoik yağ-sıvı seviyesi."
            }
        }
    },
    {
        id: "uterine_fibroid",
        name: "Uterin Myom (Leiomyom)",
        organ: "Gynecology",
        baseProbability: 30,
        signatures: {
            USG: {
                strongFindings: ["usg_uterine_mass", "usg_hypoechoic"],
                description: "Uterustan kaynaklanan, iyi sınırlı, hipoekoik solid kitle."
            },
            MRI: {
                strongFindings: ["mri_t2_hypo", "mri_pelvic_mass"],
                description: "T2 hipointens, iyi sınırlı myometrial kitle."
            }
        }
    }
];
