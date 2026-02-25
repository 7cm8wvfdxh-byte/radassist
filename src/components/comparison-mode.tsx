'use client';

import { useState, useMemo } from 'react';
import { ArrowLeftRight, Search, ChevronDown, ChevronUp, Brain, Bone, Flame, Bean, Wind, Scan, Dumbbell, Utensils, Heart } from 'lucide-react';
import { brainPathologies } from '@/data/brain-pathologies';
import { spinePathologies } from '@/data/spine-pathologies';
import { liverPathologies } from '@/data/liver-pathologies';
import { kidneyPathologies } from '@/data/kidney-pathologies';
import { lungPathologies } from '@/data/lung-pathologies';
import { breastPathologies } from '@/data/breast-pathologies';
import { mskPathologies } from '@/data/msk-pathologies';
import { gastroPathologies } from '@/data/gastro-pathologies';
import { gynecologyPathologies } from '@/data/gynecology-pathologies';
import { Pathology, ModalityFindings } from '@/types';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

const ORGAN_NAMES_TR: Record<string, string> = {
    brain: 'Beyin', spine: 'Omurga', liver: 'Karaciğer', kidney: 'Böbrek',
    lung: 'Akciğer', breast: 'Meme', msk: 'Kas-İskelet', gastro: 'GIS', gynecology: 'Jinekoloji',
};
const ORGAN_NAMES_EN: Record<string, string> = {
    brain: 'Brain', spine: 'Spine', liver: 'Liver', kidney: 'Kidney',
    lung: 'Lung', breast: 'Breast', msk: 'MSK', gastro: 'GI', gynecology: 'Gynecology',
};

const ALL_PATHOLOGIES: (Pathology & { organKey: string })[] = [
    ...brainPathologies.map(p => ({ ...p, organKey: 'brain' })),
    ...spinePathologies.map(p => ({ ...p, organKey: 'spine' })),
    ...liverPathologies.map(p => ({ ...p, organKey: 'liver' })),
    ...kidneyPathologies.map(p => ({ ...p, organKey: 'kidney' })),
    ...lungPathologies.map(p => ({ ...p, organKey: 'lung' })),
    ...breastPathologies.map(p => ({ ...p, organKey: 'breast' })),
    ...mskPathologies.map(p => ({ ...p, organKey: 'msk' })),
    ...gastroPathologies.map(p => ({ ...p, organKey: 'gastro' })),
    ...gynecologyPathologies.map(p => ({ ...p, organKey: 'gynecology' })),
];

// Common confusing pairs for quick comparison
const COMMON_PAIRS: { left: string; right: string; labelTr: string; labelEn: string }[] = [
    { left: 'glioblastoma', right: 'brain_metastasis', labelTr: 'GBM vs Metastaz', labelEn: 'GBM vs Metastasis' },
    { left: 'multiple_sclerosis', right: 'acute_ischemic_stroke', labelTr: 'MS vs İnme', labelEn: 'MS vs Stroke' },
    { left: 'hcc', right: 'liver_hemangioma', labelTr: 'HCC vs Hemanjiyom', labelEn: 'HCC vs Hemangioma' },
    { left: 'meningioma', right: 'glioblastoma', labelTr: 'Meninjiom vs GBM', labelEn: 'Meningioma vs GBM' },
    { left: 'epidural_hematoma', right: 'subdural_hematoma', labelTr: 'EDH vs SDH', labelEn: 'EDH vs SDH' },
    { left: 'renal_cell_carcinoma', right: 'angiomyolipoma', labelTr: 'RCC vs AML', labelEn: 'RCC vs AML' },
    { left: 'rotator_cuff_tear', right: 'shoulder_impingement', labelTr: 'Rotator Cuff Yırtığı vs İmpingement', labelEn: 'Rotator Cuff Tear vs Impingement' },
    { left: 'lumbar_disc_herniation', right: 'spinal_stenosis_lumbar', labelTr: 'Disk Hernisi vs Spinal Stenoz', labelEn: 'Disc Herniation vs Spinal Stenosis' },
];

function extractFindings(findings: ModalityFindings, isEn: boolean): { modality: string; key: string; value: string }[] {
    const result: { modality: string; key: string; value: string }[] = [];
    const modalityNames: Record<string, string> = isEn
        ? { ct: 'CT', mri: 'MRI', ultrasound: 'US', usg: 'US', xray: 'X-Ray', pet: 'PET', mammography: 'Mammography', dsa: 'DSA' }
        : { ct: 'BT', mri: 'MR', ultrasound: 'USG', usg: 'USG', xray: 'X-Ray', pet: 'PET', mammography: 'Mamografi', dsa: 'DSA' };
    const keyNames: Record<string, string> = isEn
        ? {
            t1: 'T1', t2: 'T2', t2_flair: 'T2 FLAIR', t1_c: 'T1+C', dwi: 'DWI', adc: 'ADC', swi: 'SWI',
            non_contrast: 'Non-contrast', contrast: 'Contrast', description: 'Description', doppler: 'Doppler',
            stir: 'STIR', mra: 'MRA', mrv: 'MRV', perfusion: 'Perfusion', spectroscopy: 'Spectroscopy',
            cta: 'CT Angio', bone_window: 'Bone Window', sagittal: 'Sagittal', coronal: 'Coronal', axial: 'Axial',
            cc_view: 'CC View', mlo_view: 'MLO View', suv_max: 'SUV Max', tomosynthesis: 'Tomosynthesis',
            t1_c_dynamic: 'T1+C Dynamic', tof_mra: 'TOF MRA', t1_t2: 'T1/T2',
        }
        : {
            t1: 'T1', t2: 'T2', t2_flair: 'T2 FLAIR', t1_c: 'T1+K', dwi: 'DWI', adc: 'ADC', swi: 'SWI',
            non_contrast: 'Kontrastsız', contrast: 'Kontrastlı', description: 'Tanım', doppler: 'Doppler',
            stir: 'STIR', mra: 'MRA', mrv: 'MRV', perfusion: 'Perfüzyon', spectroscopy: 'Spektroskopi',
            cta: 'BT Anjiyo', bone_window: 'Kemik Pencere', sagittal: 'Sagittal', coronal: 'Koronal', axial: 'Aksiyal',
            cc_view: 'CC Görünüm', mlo_view: 'MLO Görünüm', suv_max: 'SUV Max', tomosynthesis: 'Tomosintez',
            t1_c_dynamic: 'T1+K Dinamik', tof_mra: 'TOF MRA', t1_t2: 'T1/T2',
        };

    for (const [modality, modalityData] of Object.entries(findings)) {
        if (!modalityData || typeof modalityData !== 'object') continue;
        for (const [key, value] of Object.entries(modalityData)) {
            if (typeof value === 'string' && value.trim()) {
                result.push({
                    modality: modalityNames[modality] || modality.toUpperCase(),
                    key: keyNames[key] || key,
                    value,
                });
            }
        }
    }
    return result;
}

// Helper to get display fields for a pathology based on language
function getDisplayFields(p: Pathology, isEn: boolean) {
    return {
        name: isEn ? (p.nameEn || p.name) : p.name,
        category: isEn ? (p.categoryEn || p.category) : p.category,
        keyPoints: isEn ? (p.keyPointsEn || p.keyPoints) : p.keyPoints,
        mechanism: isEn ? (p.mechanismEn || p.mechanism) : p.mechanism,
        etiology: isEn ? (p.etiologyEn || p.etiology) : p.etiology,
        goldStandard: isEn ? (p.goldStandardEn || p.goldStandard) : p.goldStandard,
        clinicalPearl: isEn ? (p.clinicalPearlEn || p.clinicalPearl) : p.clinicalPearl,
        differentialDiagnosis: isEn ? (p.differentialDiagnosisEn || p.differentialDiagnosis) : p.differentialDiagnosis,
        findings: isEn ? (p.findingsEn || p.findings) : p.findings,
    };
}

function PathologySelector({
    selected,
    onSelect,
    side,
    isEn,
}: {
    selected: Pathology | null;
    onSelect: (p: Pathology) => void;
    side: 'left' | 'right';
    isEn: boolean;
}) {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const organNames = isEn ? ORGAN_NAMES_EN : ORGAN_NAMES_TR;

    const filtered = useMemo(() => {
        if (!search.trim()) return ALL_PATHOLOGIES.slice(0, 20);
        const q = search.toLowerCase();
        return ALL_PATHOLOGIES.filter(p => {
            const name = isEn ? (p.nameEn || p.name) : p.name;
            const organ = organNames[p.organKey] || '';
            return name.toLowerCase().includes(q) || organ.toLowerCase().includes(q);
        }).slice(0, 20);
    }, [search, isEn, organNames]);

    const organIcons: Record<string, React.ReactNode> = {
        brain: <Brain className="w-3 h-3" />,
        spine: <Bone className="w-3 h-3" />,
        liver: <Flame className="w-3 h-3" />,
        kidney: <Bean className="w-3 h-3" />,
        lung: <Wind className="w-3 h-3" />,
        breast: <Scan className="w-3 h-3" />,
        msk: <Dumbbell className="w-3 h-3" />,
        gastro: <Utensils className="w-3 h-3" />,
        gynecology: <Heart className="w-3 h-3" />,
    };

    const selectedName = selected ? (isEn ? (selected.nameEn || selected.name) : selected.name) : '';

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full px-4 py-3 rounded-xl border text-left transition-all flex items-center justify-between",
                    selected
                        ? "bg-zinc-800/50 border-zinc-600 text-white"
                        : side === 'left'
                            ? "bg-blue-500/5 border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                            : "bg-amber-500/5 border-amber-500/30 text-amber-300 hover:bg-amber-500/10"
                )}
            >
                <span className="font-medium text-sm">
                    {selected ? selectedName : (isEn ? 'Select Pathology...' : 'Patoloji Seçin...')}
                </span>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isOpen && (
                <div className="absolute z-50 top-full mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2 border-b border-zinc-800">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder={isEn ? "Search pathology..." : "Patoloji ara..."}
                                className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 focus:border-zinc-500 outline-none"
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {filtered.map(p => {
                            const pName = isEn ? (p.nameEn || p.name) : p.name;
                            const pOrgan = organNames[p.organKey] || '';
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => { onSelect(p); setIsOpen(false); setSearch(''); }}
                                    className="w-full px-4 py-2.5 text-left hover:bg-zinc-800 transition-colors flex items-center gap-2 text-sm border-b border-zinc-800/50 last:border-0"
                                >
                                    <span className="text-zinc-500">{organIcons[p.organKey]}</span>
                                    <span className="text-zinc-200">{pName}</span>
                                    <span className="text-[10px] text-zinc-500 ml-auto">{pOrgan}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export function ComparisonMode() {
    const { language } = useLanguage();
    const isEn = language === 'en';

    const [leftPathology, setLeftPathology] = useState<Pathology | null>(null);
    const [rightPathology, setRightPathology] = useState<Pathology | null>(null);
    const [expandedSections, setExpandedSections] = useState<string[]>(['findings', 'keypoints', 'differential']);

    const toggleSection = (id: string) => {
        setExpandedSections(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    const loadPair = (leftId: string, rightId: string) => {
        const left = ALL_PATHOLOGIES.find(p => p.id === leftId);
        const right = ALL_PATHOLOGIES.find(p => p.id === rightId);
        if (left) setLeftPathology(left);
        if (right) setRightPathology(right);
    };

    const swapSides = () => {
        const temp = leftPathology;
        setLeftPathology(rightPathology);
        setRightPathology(temp);
    };

    const left = leftPathology ? getDisplayFields(leftPathology, isEn) : null;
    const right = rightPathology ? getDisplayFields(rightPathology, isEn) : null;

    const leftFindings = left ? extractFindings(left.findings, isEn) : [];
    const rightFindings = right ? extractFindings(right.findings, isEn) : [];

    return (
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent flex items-center gap-2">
                    <ArrowLeftRight className="w-7 h-7 text-blue-400" />
                    {isEn ? 'Pathology Comparison' : 'Patoloji Karşılaştırma'}
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                    {isEn
                        ? 'Compare two pathologies side by side to see differential diagnosis differences.'
                        : 'İki patolojiyi yan yana karşılaştırarak ayırıcı tanı farklarını görün.'}
                </p>
            </div>

            {/* Quick Pairs */}
            <div className="mb-6">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                    {isEn ? 'Commonly Compared Pairs' : 'Sık Karşılaştırılan Çiftler'}
                </p>
                <div className="flex flex-wrap gap-2">
                    {COMMON_PAIRS.map(pair => (
                        <button
                            key={pair.labelTr}
                            onClick={() => loadPair(pair.left, pair.right)}
                            className="px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
                        >
                            {isEn ? pair.labelEn : pair.labelTr}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selector Row */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex-1">
                    <p className="text-xs font-bold text-blue-400 mb-1">{isEn ? 'LEFT' : 'SOL'}</p>
                    <PathologySelector selected={leftPathology} onSelect={setLeftPathology} side="left" isEn={isEn} />
                </div>
                <button
                    onClick={swapSides}
                    className="mt-5 p-2 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors"
                    title={isEn ? "Swap sides" : "Tarafları değiştir"}
                >
                    <ArrowLeftRight className="w-4 h-4 text-zinc-400" />
                </button>
                <div className="flex-1">
                    <p className="text-xs font-bold text-amber-400 mb-1">{isEn ? 'RIGHT' : 'SAĞ'}</p>
                    <PathologySelector selected={rightPathology} onSelect={setRightPathology} side="right" isEn={isEn} />
                </div>
            </div>

            {/* Comparison Content */}
            {left && right ? (
                <div className="space-y-4">
                    {/* Summary Row */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                            <h3 className="font-bold text-blue-300 text-lg">{left.name}</h3>
                            <p className="text-xs text-zinc-400">{left.category}</p>
                            {left.mechanism && (
                                <p className="text-xs text-zinc-400 mt-2 line-clamp-2">{left.mechanism}</p>
                            )}
                        </div>
                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                            <h3 className="font-bold text-amber-300 text-lg">{right.name}</h3>
                            <p className="text-xs text-zinc-400">{right.category}</p>
                            {right.mechanism && (
                                <p className="text-xs text-zinc-400 mt-2 line-clamp-2">{right.mechanism}</p>
                            )}
                        </div>
                    </div>

                    {/* Findings Section */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleSection('findings')}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                        >
                            <span className="text-sm font-bold text-zinc-300">{isEn ? 'Imaging Findings' : 'Görüntüleme Bulguları'}</span>
                            {expandedSections.includes('findings') ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                        </button>
                        {expandedSections.includes('findings') && (
                            <div className="border-t border-zinc-800">
                                <div className="grid grid-cols-2 divide-x divide-zinc-800">
                                    <div className="p-4 space-y-2">
                                        {leftFindings.length > 0 ? leftFindings.map((f, i) => (
                                            <div key={i} className="text-xs">
                                                <span className="text-blue-400 font-bold">{f.modality} {f.key}: </span>
                                                <span className="text-zinc-300">{f.value}</span>
                                            </div>
                                        )) : <p className="text-xs text-zinc-500">{isEn ? 'No findings data' : 'Bulgu verisi yok'}</p>}
                                    </div>
                                    <div className="p-4 space-y-2">
                                        {rightFindings.length > 0 ? rightFindings.map((f, i) => (
                                            <div key={i} className="text-xs">
                                                <span className="text-amber-400 font-bold">{f.modality} {f.key}: </span>
                                                <span className="text-zinc-300">{f.value}</span>
                                            </div>
                                        )) : <p className="text-xs text-zinc-500">{isEn ? 'No findings data' : 'Bulgu verisi yok'}</p>}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Key Points Section */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleSection('keypoints')}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                        >
                            <span className="text-sm font-bold text-zinc-300">{isEn ? 'Key Points' : 'Anahtar Noktalar'}</span>
                            {expandedSections.includes('keypoints') ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                        </button>
                        {expandedSections.includes('keypoints') && (
                            <div className="border-t border-zinc-800">
                                <div className="grid grid-cols-2 divide-x divide-zinc-800">
                                    <div className="p-4">
                                        <ul className="space-y-1.5">
                                            {left.keyPoints.map((kp, i) => (
                                                <li key={i} className="text-xs text-zinc-300 flex items-start gap-1.5">
                                                    <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                                                    {kp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4">
                                        <ul className="space-y-1.5">
                                            {right.keyPoints.map((kp, i) => (
                                                <li key={i} className="text-xs text-zinc-300 flex items-start gap-1.5">
                                                    <span className="text-amber-400 mt-0.5 shrink-0">•</span>
                                                    {kp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Differential Diagnosis Section */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleSection('differential')}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                        >
                            <span className="text-sm font-bold text-zinc-300">{isEn ? 'Differential Diagnosis / Additional Info' : 'Ayırıcı Tanı / Ek Bilgi'}</span>
                            {expandedSections.includes('differential') ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                        </button>
                        {expandedSections.includes('differential') && (
                            <div className="border-t border-zinc-800">
                                <div className="grid grid-cols-2 divide-x divide-zinc-800">
                                    <div className="p-4 space-y-3">
                                        {left.etiology && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Etiology' : 'Etiyoloji'}</p>
                                                <p className="text-xs text-zinc-300">{left.etiology}</p>
                                            </div>
                                        )}
                                        {left.goldStandard && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Gold Standard' : 'Altın Standart'}</p>
                                                <p className="text-xs text-blue-300">{left.goldStandard}</p>
                                            </div>
                                        )}
                                        {left.clinicalPearl && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Clinical Pearl' : 'Klinik İpucu'}</p>
                                                <p className="text-xs text-emerald-300">{left.clinicalPearl}</p>
                                            </div>
                                        )}
                                        {left.differentialDiagnosis && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Differential Diagnosis' : 'Ayırıcı Tanılar'}</p>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {left.differentialDiagnosis.map((dd, i) => (
                                                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                                            {dd}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 space-y-3">
                                        {right.etiology && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Etiology' : 'Etiyoloji'}</p>
                                                <p className="text-xs text-zinc-300">{right.etiology}</p>
                                            </div>
                                        )}
                                        {right.goldStandard && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Gold Standard' : 'Altın Standart'}</p>
                                                <p className="text-xs text-amber-300">{right.goldStandard}</p>
                                            </div>
                                        )}
                                        {right.clinicalPearl && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Clinical Pearl' : 'Klinik İpucu'}</p>
                                                <p className="text-xs text-emerald-300">{right.clinicalPearl}</p>
                                            </div>
                                        )}
                                        {right.differentialDiagnosis && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">{isEn ? 'Differential Diagnosis' : 'Ayırıcı Tanılar'}</p>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {right.differentialDiagnosis.map((dd, i) => (
                                                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                                            {dd}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Key Differentiator Box */}
                    <div className="bg-gradient-to-r from-blue-500/5 via-zinc-900 to-amber-500/5 border border-zinc-700 rounded-xl p-4">
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                            {isEn ? 'Critical Differentiators' : 'Ayırıcı Tanıda Kritik Farklar'}
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="border-b border-zinc-800">
                                        <th className="text-left py-2 px-2 text-zinc-500 font-medium">{isEn ? 'Feature' : 'Özellik'}</th>
                                        <th className="text-left py-2 px-2 text-blue-400 font-medium">{left.name}</th>
                                        <th className="text-left py-2 px-2 text-amber-400 font-medium">{right.name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-zinc-800/50">
                                        <td className="py-2 px-2 text-zinc-500">{isEn ? 'Category' : 'Kategori'}</td>
                                        <td className="py-2 px-2 text-zinc-300">{left.category}</td>
                                        <td className="py-2 px-2 text-zinc-300">{right.category}</td>
                                    </tr>
                                    <tr className="border-b border-zinc-800/50">
                                        <td className="py-2 px-2 text-zinc-500">{isEn ? 'Mechanism' : 'Mekanizma'}</td>
                                        <td className="py-2 px-2 text-zinc-300">{left.mechanism || '—'}</td>
                                        <td className="py-2 px-2 text-zinc-300">{right.mechanism || '—'}</td>
                                    </tr>
                                    <tr className="border-b border-zinc-800/50">
                                        <td className="py-2 px-2 text-zinc-500">{isEn ? 'Gold Standard' : 'Altın Standart'}</td>
                                        <td className="py-2 px-2 text-blue-300">{left.goldStandard || '—'}</td>
                                        <td className="py-2 px-2 text-amber-300">{right.goldStandard || '—'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-2 text-zinc-500">{isEn ? 'Clinical Pearl' : 'Klinik İpucu'}</td>
                                        <td className="py-2 px-2 text-emerald-300">{left.clinicalPearl || '—'}</td>
                                        <td className="py-2 px-2 text-emerald-300">{right.clinicalPearl || '—'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-zinc-600">
                    <ArrowLeftRight className="w-16 h-16 mb-4 opacity-20" />
                    <p className="text-lg font-medium">
                        {isEn ? 'Select two pathologies to start comparing' : 'İki patoloji seçerek karşılaştırmaya başlayın'}
                    </p>
                    <p className="text-sm mt-1">
                        {isEn ? 'or click one of the quick pairs above' : 'veya yukarıdaki hızlı çiftlerden birini tıklayın'}
                    </p>
                </div>
            )}
        </div>
    );
}
