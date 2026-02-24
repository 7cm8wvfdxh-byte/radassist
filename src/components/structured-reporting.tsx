'use client';

import { useState, useMemo } from 'react';
import { FileText, Copy, Check, Plus, RotateCcw } from 'lucide-react';
import { REPORT_TEMPLATES } from '@/data/report-templates';
import { RADS_SYSTEMS } from '@/data/rads-data';
import { cn } from '@/lib/utils';

interface ReportField {
    id: string;
    label: string;
    type: 'text' | 'select' | 'number' | 'checkbox' | 'textarea';
    options?: string[];
    placeholder?: string;
    unit?: string;
    defaultValue?: string;
}

interface OrganReportConfig {
    organ: string;
    label: string;
    modalities: string[];
    radsSystem?: string;
    fields: ReportField[];
    findingOptions: { id: string; label: string; category: string }[];
}

const ORGAN_CONFIGS: OrganReportConfig[] = [
    {
        organ: 'brain',
        label: 'Beyin / Kranial',
        modalities: ['Kranial MR', 'Kranial BT', 'BT Anjiyografi', 'MR Anjiyografi', 'Difüzyon MR'],
        fields: [
            { id: 'location', label: 'Lokalizasyon', type: 'select', options: ['Sağ Frontal', 'Sol Frontal', 'Sağ Parietal', 'Sol Parietal', 'Sağ Temporal', 'Sol Temporal', 'Sağ Oksipital', 'Sol Oksipital', 'Bilateral', 'Serebellar', 'Beyin Sapı', 'Selar/Parasellar', 'Pineal Bölge', 'İntraventriküler'] },
            { id: 'size', label: 'Boyut', type: 'text', placeholder: 'Ör: 35x28x22 mm' },
            { id: 'midline_shift', label: 'Orta Hat Şifti (mm)', type: 'number', unit: 'mm', defaultValue: '0' },
            { id: 'edema', label: 'Periferik Ödem', type: 'select', options: ['Yok', 'Hafif', 'Orta', 'Belirgin (Yaygın)'] },
            { id: 'enhancement', label: 'Kontrast Tutulumu', type: 'select', options: ['Yok', 'Homojen', 'Heterojen', 'Ring (Halkasal)', 'Nodüler', 'Dural Tail'] },
            { id: 'ventricles', label: 'Ventrikül Sistemi', type: 'select', options: ['Normal boyutta', 'Hafif genişlemiş', 'Belirgin genişlemiş (Hidrosefali)'] },
        ],
        findingOptions: [
            { id: 'mass_effect', label: 'Kitle etkisi (Mass effect)', category: 'Kitle' },
            { id: 'ring_enhancement', label: 'Ring (halkasal) kontrast tutulumu', category: 'Kontrast' },
            { id: 'diffusion_restriction', label: 'Difüzyon kısıtlılığı (DWI parlak)', category: 'Sinyal' },
            { id: 't2_hyperintense', label: 'T2/FLAIR hiperintensite', category: 'Sinyal' },
            { id: 'hemorrhage', label: 'Kanama (Hemoraji)', category: 'Kanama' },
            { id: 'calcification', label: 'Kalsifikasyon', category: 'Diğer' },
            { id: 'extra_axial', label: 'Ekstra-aksiyal yerleşim', category: 'Lokalizasyon' },
            { id: 'intra_axial', label: 'İntra-aksiyal yerleşim', category: 'Lokalizasyon' },
            { id: 'vasogenic_edema', label: 'Vazojenik ödem', category: 'Ödem' },
            { id: 'sulcal_effacement', label: 'Sulkal silinme', category: 'Kitle' },
            { id: 'dural_tail', label: 'Dural tail (kuyruk işareti)', category: 'Kontrast' },
            { id: 'csf_cleft', label: 'BOS mesafesi (CSF cleft)', category: 'Lokalizasyon' },
        ]
    },
    {
        organ: 'liver',
        label: 'Karaciğer',
        modalities: ['Dinamik Karaciğer BT', 'Dinamik Karaciğer MR', 'Hepatobiliyer MR (Primovist)', 'Abdomen USG'],
        radsSystem: 'li_rads',
        fields: [
            { id: 'segment', label: 'Segment', type: 'select', options: ['Segment I (Kaudat)', 'Segment II', 'Segment III', 'Segment IV', 'Segment V', 'Segment VI', 'Segment VII', 'Segment VIII', 'Çok Segmentli'] },
            { id: 'size', label: 'Lezyon Boyutu', type: 'text', placeholder: 'Ör: 32x28 mm' },
            { id: 'arterial_phase', label: 'Arteryel Faz', type: 'select', options: ['Hipervasküler (APHE)', 'Hipointens', 'İzointens'] },
            { id: 'portal_phase', label: 'Portal Venöz Faz', type: 'select', options: ['Washout (yıkanma)', 'İzointens', 'Hiperintens', 'Hipointens'] },
            { id: 'delayed_phase', label: 'Geç Faz', type: 'select', options: ['Washout', 'Kapsül tutulumu', 'İzointens', 'Hiperintens'] },
            { id: 'capsule', label: 'Kapsül', type: 'select', options: ['Yok', 'İnce kapsül', 'Kalın kapsül'] },
            { id: 'threshold_growth', label: 'Eşik Büyüme (>50% / 6 ay)', type: 'checkbox' },
            { id: 'cirrhosis', label: 'Siroz Zemini', type: 'checkbox' },
        ],
        findingOptions: [
            { id: 'aphe', label: 'Arteryel faz hiperkontrastlanma (APHE)', category: 'Majör' },
            { id: 'washout', label: 'Portal/Geç faz yıkanma (Washout)', category: 'Majör' },
            { id: 'capsule_enhancement', label: 'Kapsül kontrastlanması', category: 'Majör' },
            { id: 'threshold_growth', label: 'Eşik büyüme (>50%/6ay)', category: 'Majör' },
            { id: 'fat_in_mass', label: 'Lezyon içi yağ', category: 'Yardımcı' },
            { id: 'mosaic_pattern', label: 'Mozaik patern', category: 'Yardımcı' },
            { id: 'corona_enhancement', label: 'Corona enhancement', category: 'Yardımcı' },
            { id: 'centripetal_filling', label: 'Santripetal dolum (Hemanjiyom)', category: 'Benign' },
        ]
    },
    {
        organ: 'breast',
        label: 'Meme',
        modalities: ['Mammografi (MMG)', 'Meme USG', 'Meme MR', 'Tomosintez'],
        radsSystem: 'bi_rads',
        fields: [
            { id: 'laterality', label: 'Taraf', type: 'select', options: ['Sağ', 'Sol', 'Bilateral'] },
            { id: 'quadrant', label: 'Kadran', type: 'select', options: ['Üst Dış', 'Üst İç', 'Alt Dış', 'Alt İç', 'Santral/Retroareolar', 'Aksiller Uzanım'] },
            { id: 'size', label: 'Lezyon Boyutu', type: 'text', placeholder: 'Ör: 15x12 mm' },
            { id: 'shape', label: 'Şekil', type: 'select', options: ['Oval', 'Yuvarlak', 'Düzensiz (Irregüler)'] },
            { id: 'margins', label: 'Sınırlar', type: 'select', options: ['Düzgün', 'Lobüle', 'Spiküle', 'Belirsiz', 'Mikrolobüle'] },
            { id: 'density', label: 'Dansite (MMG)', type: 'select', options: ['Hiperdens', 'İzodens', 'Hipodens', 'Yağ İçeren'] },
            { id: 'calcification', label: 'Kalsifikasyon', type: 'select', options: ['Yok', 'Benign (kaba, yuvarlak)', 'Şüpheli (amorf, pleomorfik)', 'Yüksek şüpheli (ince lineer, dallanan)'] },
            { id: 'lymph_node', label: 'Aksiller Lenf Nodu', type: 'select', options: ['Normal morfoloji', 'Şüpheli (kortikal kalınlaşma >3mm)', 'Patolojik (yuvarlak, hilum kaybı)'] },
        ],
        findingOptions: [
            { id: 'spiculated', label: 'Spiküle kontur', category: 'Şüpheli' },
            { id: 'irregular_shape', label: 'Düzensiz şekil', category: 'Şüpheli' },
            { id: 'microcalc', label: 'Mikrokalsifikasyon (pleomorfik/lineer)', category: 'Şüpheli' },
            { id: 'skin_thickening', label: 'Cilt kalınlaşması', category: 'Şüpheli' },
            { id: 'nipple_retraction', label: 'Meme başı retraksiyonu', category: 'Şüpheli' },
            { id: 'wash_out_kinetic', label: 'Wash-out kinetik (MR)', category: 'MR' },
            { id: 'rim_enhancement', label: 'Rim kontrastlanma (MR)', category: 'MR' },
            { id: 'oval_smooth', label: 'Oval, düzgün sınırlı (Benign)', category: 'Benign' },
        ]
    },
    {
        organ: 'lung',
        label: 'Akciğer / Toraks',
        modalities: ['Toraks BT', 'Pulmoner BT Anjiyografi', 'YRBT (HRCT)', 'PA Akciğer Grafisi', 'Düşük Doz BT (LDCT)'],
        radsSystem: 'lung_rads',
        fields: [
            { id: 'laterality', label: 'Taraf', type: 'select', options: ['Sağ', 'Sol', 'Bilateral'] },
            { id: 'lobe', label: 'Lob', type: 'select', options: ['Üst Lob', 'Orta Lob (Sağ)', 'Alt Lob', 'Lingula (Sol)'] },
            { id: 'nodule_size', label: 'Nodül/Kitle Boyutu (mm)', type: 'number', unit: 'mm' },
            { id: 'nodule_type', label: 'Nodül Tipi', type: 'select', options: ['Solid', 'Part-Solid (Mikst)', 'Buzlu Cam (GGO)', 'Kalsifik'] },
            { id: 'margins_lung', label: 'Kenar Özellikleri', type: 'select', options: ['Düzgün', 'Lobüle', 'Spiküle', 'Irregüler'] },
            { id: 'lymph_nodes', label: 'Mediastinal LAP', type: 'select', options: ['Yok', 'Kısa aks <10mm (Non-spesifik)', 'Kısa aks ≥10mm (Patolojik)'] },
            { id: 'pleural_effusion', label: 'Plevral Efüzyon', type: 'select', options: ['Yok', 'Minimal', 'Orta', 'Masif'] },
        ],
        findingOptions: [
            { id: 'consolidation', label: 'Konsolidasyon', category: 'Parankim' },
            { id: 'ggo', label: 'Buzlu cam (Ground Glass Opacity)', category: 'Parankim' },
            { id: 'air_bronchogram', label: 'Hava bronkogramı', category: 'Parankim' },
            { id: 'tree_in_bud', label: 'Tomurcuklanan ağaç (Tree-in-bud)', category: 'Parankim' },
            { id: 'cavitation', label: 'Kavitasyon', category: 'Parankim' },
            { id: 'filling_defect', label: 'Dolum defekti (PE)', category: 'Vasküler' },
            { id: 'hampton_hump', label: "Hampton's Hump", category: 'Vasküler' },
            { id: 'pneumothorax', label: 'Pnömotoraks', category: 'Plevra' },
        ]
    },
    {
        organ: 'kidney',
        label: 'Böbrek / Üriner Sistem',
        modalities: ['Kontrastsız Üriner BT', 'Trifazik Böbrek BT', 'Kontrastlı Böbrek MR', 'Böbrek USG'],
        fields: [
            { id: 'laterality', label: 'Taraf', type: 'select', options: ['Sağ', 'Sol', 'Bilateral'] },
            { id: 'location', label: 'Lokalizasyon', type: 'select', options: ['Üst Pol', 'Orta Pol', 'Alt Pol', 'Hilus', 'Pelvikalisiyel Sistem', 'Üreter (Proksimal)', 'Üreter (Distal)', 'Mesane'] },
            { id: 'size', label: 'Lezyon/Taş Boyutu', type: 'text', placeholder: 'Ör: 12x10 mm' },
            { id: 'density_hu', label: 'Dansite (HU)', type: 'number', unit: 'HU' },
            { id: 'hydronephrosis', label: 'Hidronefroz', type: 'select', options: ['Yok', 'Hafif (Grade 1)', 'Orta (Grade 2)', 'İleri (Grade 3)', 'Ağır (Grade 4)'] },
            { id: 'enhancement_kidney', label: 'Kontrast Tutulumu', type: 'select', options: ['Yok (Basit kist)', 'Minimal (<20 HU artış)', 'Belirgin (>20 HU artış)', 'Heterojen'] },
        ],
        findingOptions: [
            { id: 'stone', label: 'Kalkül (Taş)', category: 'Taş' },
            { id: 'hydronephrosis', label: 'Hidronefroz / Üreterohidronefroz', category: 'Obstrüksiyon' },
            { id: 'perinephric_stranding', label: 'Perinefritik kirlenme (stranding)', category: 'İnflamasyon' },
            { id: 'solid_mass', label: 'Solid kitle (kontrast tutan)', category: 'Kitle' },
            { id: 'cystic_lesion', label: 'Kistik lezyon', category: 'Kist' },
            { id: 'renal_vein_thrombus', label: 'Renal ven trombüsü', category: 'Vasküler' },
        ]
    },
    {
        organ: 'spine',
        label: 'Omurga / Spinal',
        modalities: ['Lomber MR', 'Servikal MR', 'Torakal MR', 'Spinal BT', 'Direkt Grafi'],
        fields: [
            { id: 'level', label: 'Seviye', type: 'select', options: ['C3-C4', 'C4-C5', 'C5-C6', 'C6-C7', 'T11-T12', 'T12-L1', 'L1-L2', 'L2-L3', 'L3-L4', 'L4-L5', 'L5-S1'] },
            { id: 'herniation_type', label: 'Herniasyon Tipi', type: 'select', options: ['Bulging', 'Protrüzyon', 'Ekstrüzyon', 'Sekestrasyon'] },
            { id: 'herniation_loc', label: 'Herniasyon Yönü', type: 'select', options: ['Santral', 'Parasantral (Sağ)', 'Parasantral (Sol)', 'Foraminal (Sağ)', 'Foraminal (Sol)', 'Ekstraforaminal'] },
            { id: 'canal_stenosis', label: 'Kanal Stenozu', type: 'select', options: ['Yok', 'Hafif', 'Orta', 'İleri'] },
            { id: 'nerve_root', label: 'Sinir Kökü Basısı', type: 'select', options: ['Yok', 'Sağ sinir kökü teması', 'Sol sinir kökü teması', 'Bilateral sinir kökü basısı', 'Kauda ekuina basısı'] },
            { id: 'signal_change', label: 'Medüller Sinyal', type: 'select', options: ['Normal', 'T2 hiperintensite (Miyelopati)'] },
        ],
        findingOptions: [
            { id: 'disc_desiccation', label: 'Disk desikasyonu (T2 sinyal kaybı)', category: 'Dejeneratif' },
            { id: 'disc_herniation', label: 'Disk herniasyonu', category: 'Dejeneratif' },
            { id: 'facet_hypertrophy', label: 'Faset eklem hipertrofisi', category: 'Dejeneratif' },
            { id: 'ligamentum_flavum', label: 'Ligamentum flavum kalınlaşması', category: 'Dejeneratif' },
            { id: 'endplate_changes', label: 'End-plate değişiklikleri (Modic)', category: 'Dejeneratif' },
            { id: 'fracture', label: 'Vertebra kırığı', category: 'Travma' },
            { id: 'bone_marrow_edema', label: 'Kemik iliği ödemi', category: 'Travma' },
        ]
    },
    {
        organ: 'msk',
        label: 'Kas-İskelet Sistemi',
        modalities: ['Omuz MR', 'Diz MR', 'Kalça MR', 'Ayak-Bilek MR', 'Direkt Grafi'],
        fields: [
            { id: 'joint', label: 'Eklem', type: 'select', options: ['Omuz', 'Diz', 'Kalça', 'Ayak Bileği', 'Dirsek', 'El Bileği'] },
            { id: 'laterality', label: 'Taraf', type: 'select', options: ['Sağ', 'Sol'] },
            { id: 'tear_type', label: 'Yırtık Tipi', type: 'select', options: ['Yok', 'Parsiyel yırtık', 'Tam kat yırtık (Full-thickness)'] },
            { id: 'effusion', label: 'Eklem Efüzyonu', type: 'select', options: ['Yok', 'Minimal', 'Orta', 'Belirgin'] },
            { id: 'bone_bruise', label: 'Kemik Kontüzyonu', type: 'select', options: ['Yok', 'Mevcut'] },
        ],
        findingOptions: [
            { id: 'tendon_tear', label: 'Tendon yırtığı', category: 'Tendon' },
            { id: 'ligament_tear', label: 'Ligament yırtığı', category: 'Ligament' },
            { id: 'meniscus_tear', label: 'Menisküs yırtığı', category: 'Kıkırdak' },
            { id: 'cartilage_defect', label: 'Kıkırdak defekti', category: 'Kıkırdak' },
            { id: 'fracture_msk', label: 'Kırık / Avulsiyon', category: 'Kemik' },
            { id: 'avascular_necrosis', label: 'Avasküler nekroz (AVN)', category: 'Kemik' },
        ]
    },
    {
        organ: 'gi',
        label: 'Gastrointestinal',
        modalities: ['Abdomen BT', 'Abdomen MR', 'Abdomen USG', 'BT Kolonografi', 'MRCP'],
        fields: [
            { id: 'location', label: 'Lokalizasyon', type: 'select', options: ['Mide', 'Duodenum', 'Jejunum', 'İleum', 'Çekum', 'Apendiks', 'Çıkan Kolon', 'Transvers Kolon', 'İnen Kolon', 'Sigmoid', 'Rektum', 'Pankreas', 'Safra Kesesi', 'Safra Yolları'] },
            { id: 'wall_thickness', label: 'Duvar Kalınlığı (mm)', type: 'number', unit: 'mm' },
            { id: 'lumen', label: 'Lümen', type: 'select', options: ['Normal', 'Daralmış', 'Genişlemiş', 'Tıkanmış'] },
            { id: 'fat_stranding', label: 'Çevre Yağ Doku', type: 'select', options: ['Normal', 'Kirlenme (stranding)', 'Serbest sıvı', 'Serbest hava'] },
        ],
        findingOptions: [
            { id: 'wall_thickening', label: 'Duvar kalınlaşması', category: 'Duvar' },
            { id: 'fat_stranding_gi', label: 'Perienterik kirlenme', category: 'İnflamasyon' },
            { id: 'free_fluid', label: 'Serbest sıvı (Asit)', category: 'Periton' },
            { id: 'free_air', label: 'Serbest hava (Perforasyon)', category: 'Periton' },
            { id: 'obstruction', label: 'İleus / Obstrüksiyon bulguları', category: 'Mekanik' },
            { id: 'appendicolith', label: 'Apendikolit', category: 'Apendiks' },
        ]
    },
    {
        organ: 'gyn',
        label: 'Jinekoloji / Pelvis',
        modalities: ['Pelvis MR', 'Transvajinal USG', 'Abdominopelvik BT'],
        fields: [
            { id: 'laterality', label: 'Taraf', type: 'select', options: ['Sağ', 'Sol', 'Bilateral', 'Uterus'] },
            { id: 'size', label: 'Lezyon Boyutu', type: 'text', placeholder: 'Ör: 45x38 mm' },
            { id: 'structure', label: 'İç Yapı', type: 'select', options: ['Basit kistik', 'Kompleks kistik (septasyonlu)', 'Solid', 'Mikst (kistik-solid)'] },
            { id: 'solid_component', label: 'Solid Komponent', type: 'select', options: ['Yok', 'Mural nodül', 'Papiller projeksiyon', 'Yaygın solid'] },
            { id: 'myometrial_invasion', label: 'Miyometriyal İnvazyon', type: 'select', options: ['Yok', '< %50 (İç yarı)', '> %50 (Dış yarı)'] },
        ],
        findingOptions: [
            { id: 'simple_cyst', label: 'Basit over kisti', category: 'Benign' },
            { id: 'complex_cyst', label: 'Kompleks kistik lezyon', category: 'Şüpheli' },
            { id: 'solid_adnexal', label: 'Solid adneksiyal kitle', category: 'Şüpheli' },
            { id: 'endometrial_thickening', label: 'Endometriyal kalınlaşma', category: 'Uterus' },
            { id: 'free_fluid_pelvis', label: 'Douglas sıvısı', category: 'Periton' },
            { id: 'fibroid', label: 'Myom (Uterin Fibroid)', category: 'Uterus' },
        ]
    },
];

// Auto-calculate LI-RADS
function calculateLiRads(fields: Record<string, string>): string {
    const hasAPHE = fields.arterial_phase === 'Hipervasküler (APHE)';
    const hasWashout = fields.portal_phase === 'Washout (yıkanma)' || fields.delayed_phase === 'Washout';
    const hasCapsule = fields.capsule === 'İnce kapsül' || fields.capsule === 'Kalın kapsül' || fields.delayed_phase === 'Kapsül tutulumu';
    const hasGrowth = fields.threshold_growth === 'true';
    const size = parseInt(fields.size?.match(/\d+/)?.[0] || '0');

    if (!hasAPHE) {
        if (hasGrowth) return 'LR-4';
        return size < 20 ? 'LR-3' : 'LR-3';
    }
    // Has APHE
    const ancillaryCount = [hasWashout, hasCapsule, hasGrowth].filter(Boolean).length;
    if (size < 10) return ancillaryCount >= 1 ? 'LR-4' : 'LR-3';
    if (size < 20) {
        if (ancillaryCount >= 2) return 'LR-5';
        if (ancillaryCount >= 1) return 'LR-4';
        return 'LR-3';
    }
    // size >= 20mm
    if (ancillaryCount >= 1) return 'LR-5';
    return 'LR-4';
}

// Auto-calculate BI-RADS suggestion
function calculateBiRads(findings: string[]): string {
    const suspicious = ['spiculated', 'irregular_shape', 'microcalc', 'skin_thickening', 'nipple_retraction', 'wash_out_kinetic', 'rim_enhancement'];
    const benign = ['oval_smooth'];
    const suspCount = findings.filter(f => suspicious.includes(f)).length;
    const benignCount = findings.filter(f => benign.includes(f)).length;

    if (suspCount >= 3) return '5';
    if (suspCount >= 2) return '4C';
    if (suspCount >= 1) return '4A';
    if (benignCount > 0) return '3';
    return '2';
}

export function StructuredReporting() {
    const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
    const [selectedModality, setSelectedModality] = useState('');
    const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
    const [selectedFindings, setSelectedFindings] = useState<string[]>([]);
    const [clinicalInfo, setClinicInfo] = useState('');
    const [copied, setCopied] = useState(false);
    const [selectedRadsCategory, setSelectedRadsCategory] = useState<string | null>(null);

    const config = ORGAN_CONFIGS.find(c => c.organ === selectedOrgan);

    // Auto-calculate RADS score
    const calculatedRads = useMemo(() => {
        if (!config?.radsSystem) return null;
        if (config.radsSystem === 'li_rads') return calculateLiRads(fieldValues);
        if (config.radsSystem === 'bi_rads') return calculateBiRads(selectedFindings);
        return null;
    }, [config, fieldValues, selectedFindings]);

    const radsSystem = config?.radsSystem ? RADS_SYSTEMS.find(r => r.id === config.radsSystem) : null;
    const radsCategory = radsSystem?.categories.find(c => c.category === (selectedRadsCategory || calculatedRads));

    // Generate dynamic report
    const generatedReport = useMemo(() => {
        if (!config) return '';
        const lines: string[] = [];

        lines.push('═══════════════════════════════════════');
        lines.push('         RADYOLOJİ RAPORU');
        lines.push('═══════════════════════════════════════');
        lines.push('');
        lines.push(`KLİNİK BİLGİ: ${clinicalInfo || '[Klinik bilgi giriniz]'}`);
        lines.push('');
        lines.push(`İNCELEME: ${selectedModality || config.modalities[0]}`);
        lines.push('');
        lines.push('TEKNİK:');
        lines.push(`${selectedModality || config.modalities[0]} incelemesi uygulanmıştır.`);
        lines.push('');
        lines.push('BULGULAR:');

        // Build findings from field values
        const fieldLines: string[] = [];
        config.fields.forEach(field => {
            const val = fieldValues[field.id];
            if (val && val !== 'Yok' && val !== '0' && val !== 'false' && val !== 'Normal') {
                fieldLines.push(`${field.label}: ${val}${field.unit ? ' ' + field.unit : ''}`);
            }
        });

        if (fieldLines.length > 0) {
            lines.push(fieldLines.join('. ') + '.');
        }

        // Add selected findings
        if (selectedFindings.length > 0) {
            const findingLabels = selectedFindings
                .map(id => config.findingOptions.find(f => f.id === id)?.label)
                .filter(Boolean);
            lines.push(`\nSaptanan bulgular: ${findingLabels.join(', ')}.`);
        }

        // RADS scoring
        if (radsSystem && (selectedRadsCategory || calculatedRads)) {
            const cat = radsSystem.categories.find(c => c.category === (selectedRadsCategory || calculatedRads));
            if (cat) {
                lines.push(`\n${radsSystem.name} Değerlendirmesi: ${cat.category} — ${cat.label}`);
                lines.push(`Risk: ${cat.risk || 'N/A'}`);
            }
        }

        lines.push('');
        lines.push('SONUÇ & ÖNERİLER:');

        // Try to find a matching report template
        const matchedTemplate = Object.values(REPORT_TEMPLATES).find(t =>
            t.organ.toLowerCase().includes(config.label.split('/')[0].trim().toLowerCase()) ||
            t.organ.toLowerCase().includes(config.organ)
        );

        if (radsCategory) {
            lines.push(`${radsSystem!.name}: ${radsCategory.category} (${radsCategory.label})`);
            lines.push(`Önerilen Yönetim: ${radsCategory.management}`);
        } else if (matchedTemplate) {
            lines.push(matchedTemplate.impressionTemplate);
        } else {
            lines.push('Tanımlanan bulgular klinik bilgi ile birlikte değerlendirilmelidir.');
        }

        lines.push('');
        lines.push('───────────────────────────────────────');
        lines.push('* Bu rapor yapay zeka destekli taslak niteliğindedir.');
        lines.push('  Uzman radyolog onayı gerektirir.');

        return lines.join('\n');
    }, [config, selectedModality, fieldValues, selectedFindings, clinicalInfo, radsSystem, radsCategory, selectedRadsCategory, calculatedRads]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(generatedReport);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleReset = () => {
        setFieldValues({});
        setSelectedFindings([]);
        setClinicInfo('');
        setSelectedRadsCategory(null);
    };

    return (
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent flex items-center gap-2">
                    <FileText className="w-7 h-7 text-emerald-400" />
                    Yapılandırılmış Raporlama
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                    Organ ve bulguları seçerek dinamik radyoloji raporu oluşturun. RADS skorları otomatik hesaplanır.
                </p>
            </div>

            {/* Organ Selection */}
            {!selectedOrgan ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {ORGAN_CONFIGS.map(c => (
                        <button
                            key={c.organ}
                            onClick={() => { setSelectedOrgan(c.organ); handleReset(); }}
                            className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all text-left group"
                        >
                            <p className="font-bold text-zinc-200 group-hover:text-emerald-300 transition-colors">{c.label}</p>
                            <p className="text-xs text-zinc-500 mt-1">{c.modalities.length} modalite</p>
                            {c.radsSystem && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-2 inline-block">
                                    {RADS_SYSTEMS.find(r => r.id === c.radsSystem)?.name}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Back + Organ Header */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { setSelectedOrgan(null); handleReset(); }}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-sm transition-colors"
                        >
                            ← Geri
                        </button>
                        <h3 className="text-lg font-bold text-white">{config?.label}</h3>
                        {config?.radsSystem && calculatedRads && (
                            <span className="text-sm px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                                {radsSystem?.name}: {calculatedRads}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* LEFT: Form */}
                        <div className="flex-1 space-y-5 overflow-y-auto max-h-[70vh] pr-2">
                            {/* Clinical Info */}
                            <div>
                                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Klinik Bilgi</label>
                                <textarea
                                    value={clinicalInfo}
                                    onChange={e => setClinicInfo(e.target.value)}
                                    placeholder="Hastanın semptomları, öyküsü..."
                                    className="w-full mt-1 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-200 text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none resize-none"
                                    rows={2}
                                />
                            </div>

                            {/* Modality */}
                            <div>
                                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">İnceleme Yöntemi</label>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {config?.modalities.map(m => (
                                        <button
                                            key={m}
                                            onClick={() => setSelectedModality(m)}
                                            className={cn(
                                                "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                                                selectedModality === m
                                                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                                                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                                            )}
                                        >
                                            {m}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Dynamic Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {config?.fields.map(field => (
                                    <div key={field.id}>
                                        <label className="text-xs font-medium text-zinc-400">{field.label}</label>
                                        {field.type === 'select' ? (
                                            <select
                                                value={fieldValues[field.id] || ''}
                                                onChange={e => setFieldValues(prev => ({ ...prev, [field.id]: e.target.value }))}
                                                className="w-full mt-1 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-200 text-sm focus:border-emerald-500/50 outline-none"
                                            >
                                                <option value="">Seçiniz...</option>
                                                {field.options?.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        ) : field.type === 'checkbox' ? (
                                            <label className="flex items-center gap-2 mt-1 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={fieldValues[field.id] === 'true'}
                                                    onChange={e => setFieldValues(prev => ({ ...prev, [field.id]: e.target.checked ? 'true' : 'false' }))}
                                                    className="w-4 h-4 rounded bg-zinc-800 border-zinc-600 text-emerald-500 focus:ring-emerald-500/30"
                                                />
                                                <span className="text-sm text-zinc-300">Evet</span>
                                            </label>
                                        ) : field.type === 'textarea' ? (
                                            <textarea
                                                value={fieldValues[field.id] || ''}
                                                onChange={e => setFieldValues(prev => ({ ...prev, [field.id]: e.target.value }))}
                                                placeholder={field.placeholder}
                                                className="w-full mt-1 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-200 text-sm focus:border-emerald-500/50 outline-none resize-none"
                                                rows={2}
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                value={fieldValues[field.id] || field.defaultValue || ''}
                                                onChange={e => setFieldValues(prev => ({ ...prev, [field.id]: e.target.value }))}
                                                placeholder={field.placeholder}
                                                className="w-full mt-1 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-200 text-sm focus:border-emerald-500/50 outline-none"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Finding Checkboxes */}
                            <div>
                                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Saptanan Bulgular</label>
                                <div className="mt-2 space-y-3">
                                    {Object.entries(
                                        (config?.findingOptions || []).reduce((acc, f) => {
                                            if (!acc[f.category]) acc[f.category] = [];
                                            acc[f.category].push(f);
                                            return acc;
                                        }, {} as Record<string, NonNullable<typeof config>["findingOptions"]>)
                                    ).map(([category, findings]) => (
                                        <div key={category} className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-3">
                                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">{category}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {findings.map(f => (
                                                    <button
                                                        key={f.id}
                                                        onClick={() => setSelectedFindings(prev =>
                                                            prev.includes(f.id) ? prev.filter(x => x !== f.id) : [...prev, f.id]
                                                        )}
                                                        className={cn(
                                                            "px-2.5 py-1.5 rounded-lg text-xs border transition-all flex items-center gap-1.5",
                                                            selectedFindings.includes(f.id)
                                                                ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                                                                : "bg-zinc-800/30 border-zinc-700/50 text-zinc-400 hover:bg-zinc-800"
                                                        )}
                                                    >
                                                        {selectedFindings.includes(f.id) ? (
                                                            <Check className="w-3 h-3" />
                                                        ) : (
                                                            <Plus className="w-3 h-3 opacity-50" />
                                                        )}
                                                        {f.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RADS Scoring Panel */}
                            {radsSystem && (
                                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800/80 rounded-xl border border-emerald-500/20 p-4">
                                    <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        {radsSystem.name} Sınıflama
                                    </h4>
                                    {calculatedRads && (
                                        <p className="text-xs text-zinc-400 mb-3">
                                            Otomatik hesaplanan skor: <span className="text-emerald-300 font-bold">{calculatedRads}</span>
                                            <span className="text-zinc-500 ml-1">(manuel değiştirebilirsiniz)</span>
                                        </p>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {radsSystem.categories.map(cat => {
                                            const colorMap: Record<string, string> = {
                                                green: 'border-green-500/40 bg-green-500/10 text-green-400',
                                                yellow: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400',
                                                orange: 'border-orange-500/40 bg-orange-500/10 text-orange-400',
                                                red: 'border-red-500/40 bg-red-500/10 text-red-400',
                                                purple: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
                                                gray: 'border-zinc-500/40 bg-zinc-500/10 text-zinc-400',
                                                blue: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
                                            };
                                            const isActive = (selectedRadsCategory || calculatedRads) === cat.category;
                                            return (
                                                <button
                                                    key={cat.category}
                                                    onClick={() => setSelectedRadsCategory(cat.category)}
                                                    className={cn(
                                                        "px-3 py-1.5 rounded-lg text-xs border transition-all",
                                                        isActive
                                                            ? `${colorMap[cat.color]} ring-2 ring-offset-1 ring-offset-zinc-900 font-bold`
                                                            : "bg-zinc-800/50 border-zinc-700/50 text-zinc-500 hover:text-zinc-300"
                                                    )}
                                                >
                                                    {cat.category}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {radsCategory && (
                                        <div className="mt-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                                            <p className="text-sm font-bold text-zinc-200">{radsCategory.category}: {radsCategory.label}</p>
                                            <p className="text-xs text-zinc-400 mt-1">Risk: {radsCategory.risk || 'N/A'}</p>
                                            <p className="text-xs text-emerald-300 mt-1">{radsCategory.management}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Reset Button */}
                            <button
                                onClick={handleReset}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-zinc-700 to-zinc-600 text-white font-semibold shadow-lg hover:from-zinc-600 hover:to-zinc-500 transition-all flex items-center justify-center gap-2"
                            >
                                <RotateCcw className="w-5 h-5" />
                                Formu Sıfırla
                            </button>
                        </div>

                        {/* RIGHT: Live Preview */}
                        <div className="flex-1 bg-white text-zinc-900 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
                            <div className="bg-zinc-100 px-4 py-3 border-b flex items-center justify-between shrink-0">
                                <h4 className="font-bold text-zinc-800 text-sm flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-zinc-600" />
                                    Canlı Rapor Önizleme
                                </h4>
                                <div className="flex items-center gap-2">
                                    <button onClick={handleReset} className="p-1.5 hover:bg-zinc-200 rounded-lg transition-colors" title="Sıfırla">
                                        <RotateCcw className="w-4 h-4 text-zinc-500" />
                                    </button>
                                    <button onClick={handleCopy} className="p-1.5 hover:bg-zinc-200 rounded-lg transition-colors" title="Kopyala">
                                        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-zinc-500" />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                                {generatedReport}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
