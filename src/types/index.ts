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
    };
    mri?: {
        t1?: string;
        t2?: string;
        t2_flair?: string;
        t1_c?: string;
        t1_c_dynamic?: string;
        dwi?: string;
        adc?: string;
        swi?: string;
        mrv?: string;
        perfusion?: string;
        spectroscopy?: string;
        other_sequences?: string;
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
        modality: "CT" | "MRI" | "USG";
    }[];
}
