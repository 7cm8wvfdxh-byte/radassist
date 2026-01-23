import { DiagnosticRule } from '@/types';

export const DIAGNOSTIC_RULES: DiagnosticRule[] = [
    // --- BRAIN ---
    {
        pathologyId: "glioblastoma",
        pathologyName: "Glioblastom (GBM)",
        organ: "Brain",
        modality: "MRI",
        strongFindings: [
            "mri_enhance_ring", // Kalın düzensiz halka
            "mri_edema_vasogenic", // Geniş ödem
            "mri_loc_intra_axial",
            "mri_dwi_restrict" // Sellüler kısımlarda
        ],
        weakFindings: [
            "mri_t1_hypo",
            "mri_t2_hyper"
        ],
        baseProbability: 15
    },
    {
        pathologyId: "meningioma",
        pathologyName: "Meningiom",
        organ: "Brain",
        modality: "MRI",
        strongFindings: [
            "mri_enhance_dura_tail",
            "mri_loc_extra_axial",
            "mri_loc_cpa", // Sık yerleşim
            "mri_enhance_leptomeningeal" // Bazen
        ],
        weakFindings: [
            "mri_t1_hypo",
            "mri_t2_hyper"
        ],
        baseProbability: 20
    },
    {
        pathologyId: "multiple_sclerosis",
        pathologyName: "Multipl Skleroz (MS)",
        organ: "Brain",
        modality: "MRI",
        strongFindings: [
            "mri_loc_periventricular", // Dawson fingers
            "mri_t2_hyper"
        ],
        weakFindings: [
            "mri_t1_hypo" // Black holes
        ],
        baseProbability: 10
    },
    {
        pathologyId: "acute_ischemic_stroke",
        pathologyName: "Akut İskemik İnme / İnfarkt",
        organ: "Brain",
        modality: "MRI",
        strongFindings: [
            "mri_dwi_restrict", // ALTIN STANDART
            "mri_t2_hyper"
        ],
        baseProbability: 25
    },
    {
        pathologyId: "vestibular_schwannoma",
        pathologyName: "Vestibüler Schwannom",
        organ: "Brain",
        modality: "MRI",
        strongFindings: [
            "mri_loc_cpa",
            "mri_sign_ice_cream",
            "mri_enhance_ring" // Bazen kistik
        ],
        baseProbability: 5
    },

    // --- SPINE ---
    {
        pathologyId: "lumbar_disc_herniation",
        pathologyName: "Lomber Disk Hernisi",
        organ: "Spine",
        modality: "MRI",
        strongFindings: [
            "spine_disc_herniation",
            "spine_nerve_compression"
        ],
        baseProbability: 40 // Çok sık
    },
    {
        pathologyId: "spinal_stenosis_lumbar",
        pathologyName: "Lomber Spinal Stenoz",
        organ: "Spine",
        modality: "MRI",
        strongFindings: [
            "spine_canal_stenosis"
        ],
        baseProbability: 30
    },
    {
        pathologyId: "spinal_trauma_burst",
        pathologyName: "Spinal Patlama (Burst) Kırığı",
        organ: "Spine",
        modality: "CT", // CT daha yaygındır travmada ama MRI da olur
        strongFindings: [
            "spine_fracture_burst",
            "ct_hyperdense" // Kemik fragmanı
        ],
        baseProbability: 5
    }
];
