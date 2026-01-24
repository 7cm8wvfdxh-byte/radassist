import { Modality } from "./lexicon";

export interface DiseaseSignature {
    id: string; // unique disease id (e.g. 'glioblastoma')
    name: string; // Display name
    organ: "Brain" | "Spine" | "Liver" | "Kidney" | "Lung";
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
    // --- BRAIN ---
    {
        id: "glioblastoma",
        name: "Glioblastom (GBM)",
        organ: "Brain",
        baseProbability: 15,
        signatures: {
            MRI: {
                strongFindings: ["mri_enhance_ring", "mri_edema_vasogenic", "mri_dwi_restrict", "mri_loc_intra_axial"],
                weakFindings: ["mri_t1_hypo", "mri_t2_hyper"],
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

    // --- SPINE ---
    {
        id: "lumbar_disc_herniation",
        name: "Lomber Disk Hernisi",
        organ: "Spine",
        baseProbability: 40,
        signatures: {
            MRI: {
                strongFindings: ["spine_disc_herniation", "spine_nerve_compression"],
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
        id: "spinal_trauma_burst",
        name: "Spinal Patlama (Burst) Kırığı",
        organ: "Spine",
        baseProbability: 5,
        signatures: {
            CT: {
                strongFindings: ["spine_fracture_burst", "ct_hyperdense"],
                description: "Vertebra korpusunda parçalı kırık ve retropulsiyon."
            }
        }
    },

    // --- LIVER ---
    {
        id: "hcc",
        name: "Hepatosellüler Karsinom (HCC)",
        organ: "Liver",
        baseProbability: 10,
        signatures: {
            CT: {
                strongFindings: ["ct_contrast_washout", "ct_enhance_hetero"],
                weakFindings: ["usg_liver_coarse"], // If USG findings present in context
                description: "Arteriyel fazda parlak, geç fazda washout (yıkanma) gösteren kitle."
            }
            // USG signature could be added if needed
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

    // --- KIDNEY ---
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

    // --- LUNG ---
    {
        id: "lung_cancer",
        name: "Akciğer Kanseri",
        organ: "Lung",
        baseProbability: 15,
        signatures: {
            CT: {
                strongFindings: ["ct_lung_nodule_spiculated", "ct_enhance_hetero"],
                weakFindings: ["ct_pleural_effusion"],
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
    }
];
