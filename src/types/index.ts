export type ModalityType = "CT" | "MRI" | "USG" | "X-Ray" | "PET";

export interface ModalityFindings {
    ultrasound?: {
        description: string;
        doppler?: string;
    };
    ct?: {
        non_contrast?: string;
        contrast?: string;
        cta?: string;
        ct_venogram?: string;
        ct_perfusion?: string;
        bone_window?: string;
        bone_subtraction?: string;
        evolution?: string;
        sagittal?: string;
        coronal?: string;
        axial?: string;
    };
    mri?: {
        t1?: string;
        t2?: string;
        t2_flair?: string;
        t1_c?: string;
        t1_c_dynamic?: string;
        t1_c_coronal?: string;
        dwi?: string;
        adc?: string;
        swi?: string;
        mrv?: string;
        mra?: string;
        tof_mra?: string;
        t1_t2?: string;
        perfusion?: string;
        spectroscopy?: string;
        stir?: string;
        sagittal?: string;
        coronal?: string;
        axial?: string;
        location?: string;
        invasion?: string;
        other_sequences?: string;
    };
    dsa?: {
        description?: string;
    };
    xray?: {
        description?: string;
    };
    pet?: {
        description?: string;
        suv_max?: string;
    };
}

export interface Pathology {
    id: string;
    name: string;
    category: string;
    findings: ModalityFindings;
    keyPoints: string[];
    references?: string[];
    gallery?: {
        url: string;
        caption: string; // e.g., "T2 FLAIR", "DWI"
        modality: ModalityType;
    }[];
}

export interface CaseStep {
    id: string;
    order: number;
    title: string;
    description: string;
    imageUrl: string; // URL to the image (local or remote)
    imageCaption?: string;
    question: string;
    options: string[];
    correctOptionIndex: number;
    explanation: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    difficulty: "Kolay" | "Orta" | "Zor";
    patientHistory: string;
    finalDiagnosis: string;
    keyLearningPoint: string;
    steps: CaseStep[];
}

export interface DiagnosticRule {
    pathologyId: string;
    pathologyName: string;
    organ: "Brain" | "Spine"; // Added organ field
    modality: ModalityType;
    requiredFindings?: string[]; // IDs from lexicon that MUST be present
    strongFindings: string[]; // IDs that strongly suggest this pathology (high weight)
    weakFindings?: string[]; // IDs that correspond but with lower specificity
    excludedFindings?: string[]; // IDs that if present, rule out (or strongly lower) chance
    baseProbability?: number; // 0-100 initial likelihood based on prevalence
}


export interface ScoredPathology {
    pathologyId: string;
    pathologyName: string;
    score: number; // Calculated score
    matchedFindings: string[]; // IDs of matched findings
    missingFindings: string[]; // IDs of strong findings that were not present
    probabilityLabel: "Yüksek Olasılık" | "Orta Olasılık" | "Düşük Olasılık";
}
