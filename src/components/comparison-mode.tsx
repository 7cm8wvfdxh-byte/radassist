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

const ALL_PATHOLOGIES: (Pathology & { organ: string })[] = [
    ...brainPathologies.map(p => ({ ...p, organ: 'Beyin' })),
    ...spinePathologies.map(p => ({ ...p, organ: 'Omurga' })),
    ...liverPathologies.map(p => ({ ...p, organ: 'Karaciğer' })),
    ...kidneyPathologies.map(p => ({ ...p, organ: 'Böbrek' })),
    ...lungPathologies.map(p => ({ ...p, organ: 'Akciğer' })),
    ...breastPathologies.map(p => ({ ...p, organ: 'Meme' })),
    ...mskPathologies.map(p => ({ ...p, organ: 'Kas-İskelet' })),
    ...gastroPathologies.map(p => ({ ...p, organ: 'GIS' })),
    ...gynecologyPathologies.map(p => ({ ...p, organ: 'Jinekoloji' })),
];

// Common confusing pairs for quick comparison
const COMMON_PAIRS: { left: string; right: string; label: string }[] = [
    { left: 'glioblastoma', right: 'brain_metastasis', label: 'GBM vs Metastaz' },
    { left: 'multiple_sclerosis', right: 'acute_ischemic_stroke', label: 'MS vs İnme' },
    { left: 'hcc', right: 'liver_hemangioma', label: 'HCC vs Hemanjiyom' },
    { left: 'meningioma', right: 'glioblastoma', label: 'Meninjiom vs GBM' },
    { left: 'epidural_hematoma', right: 'subdural_hematoma', label: 'EDH vs SDH' },
    { left: 'renal_cell_carcinoma', right: 'angiomyolipoma', label: 'RCC vs AML' },
    { left: 'rotator_cuff_tear', right: 'shoulder_impingement', label: 'Rotator Cuff Yırtığı vs İmpingement' },
    { left: 'lumbar_disc_herniation', right: 'spinal_stenosis_lumbar', label: 'Disk Hernisi vs Spinal Stenoz' },
];

function extractFindings(findings: ModalityFindings): { modality: string; key: string; value: string }[] {
    const result: { modality: string; key: string; value: string }[] = [];
    const modalityNames: Record<string, string> = {
        ct: 'BT', mri: 'MR', ultrasound: 'USG', usg: 'USG', xray: 'X-Ray', pet: 'PET', mammography: 'Mamografi', dsa: 'DSA'
    };
    const keyNames: Record<string, string> = {
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

function PathologySelector({
    selected,
    onSelect,
    side
}: {
    selected: Pathology | null;
    onSelect: (p: Pathology) => void;
    side: 'left' | 'right';
}) {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filtered = useMemo(() => {
        if (!search.trim()) return ALL_PATHOLOGIES.slice(0, 20);
        const q = search.toLowerCase();
        return ALL_PATHOLOGIES.filter(p =>
            p.name.toLowerCase().includes(q) || p.organ.toLowerCase().includes(q)
        ).slice(0, 20);
    }, [search]);

    const organIcons: Record<string, React.ReactNode> = {
        'Beyin': <Brain className="w-3 h-3" />,
        'Omurga': <Bone className="w-3 h-3" />,
        'Karaciğer': <Flame className="w-3 h-3" />,
        'Böbrek': <Bean className="w-3 h-3" />,
        'Akciğer': <Wind className="w-3 h-3" />,
        'Meme': <Scan className="w-3 h-3" />,
        'Kas-İskelet': <Dumbbell className="w-3 h-3" />,
        'GIS': <Utensils className="w-3 h-3" />,
        'Jinekoloji': <Heart className="w-3 h-3" />,
    };

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
                    {selected ? selected.name : 'Patoloji Seçin...'}
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
                                placeholder="Patoloji ara..."
                                className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 focus:border-zinc-500 outline-none"
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {filtered.map(p => (
                            <button
                                key={p.id}
                                onClick={() => { onSelect(p); setIsOpen(false); setSearch(''); }}
                                className="w-full px-4 py-2.5 text-left hover:bg-zinc-800 transition-colors flex items-center gap-2 text-sm border-b border-zinc-800/50 last:border-0"
                            >
                                <span className="text-zinc-500">{organIcons[p.organ]}</span>
                                <span className="text-zinc-200">{p.name}</span>
                                <span className="text-[10px] text-zinc-500 ml-auto">{p.organ}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export function ComparisonMode() {
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

    const leftFindings = leftPathology ? extractFindings(leftPathology.findings) : [];
    const rightFindings = rightPathology ? extractFindings(rightPathology.findings) : [];

    return (
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent flex items-center gap-2">
                    <ArrowLeftRight className="w-7 h-7 text-blue-400" />
                    Patoloji Karşılaştırma
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                    İki patolojiyi yan yana karşılaştırarak ayırıcı tanı farklarını görün.
                </p>
            </div>

            {/* Quick Pairs */}
            <div className="mb-6">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Sık Karşılaştırılan Çiftler</p>
                <div className="flex flex-wrap gap-2">
                    {COMMON_PAIRS.map(pair => (
                        <button
                            key={pair.label}
                            onClick={() => loadPair(pair.left, pair.right)}
                            className="px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
                        >
                            {pair.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selector Row */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex-1">
                    <p className="text-xs font-bold text-blue-400 mb-1">SOL</p>
                    <PathologySelector selected={leftPathology} onSelect={setLeftPathology} side="left" />
                </div>
                <button
                    onClick={swapSides}
                    className="mt-5 p-2 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors"
                    title="Tarafları değiştir"
                >
                    <ArrowLeftRight className="w-4 h-4 text-zinc-400" />
                </button>
                <div className="flex-1">
                    <p className="text-xs font-bold text-amber-400 mb-1">SAĞ</p>
                    <PathologySelector selected={rightPathology} onSelect={setRightPathology} side="right" />
                </div>
            </div>

            {/* Comparison Content */}
            {leftPathology && rightPathology ? (
                <div className="space-y-4">
                    {/* Summary Row */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                            <h3 className="font-bold text-blue-300 text-lg">{leftPathology.name}</h3>
                            <p className="text-xs text-zinc-400">{leftPathology.category}</p>
                            {leftPathology.mechanism && (
                                <p className="text-xs text-zinc-400 mt-2 line-clamp-2">{leftPathology.mechanism}</p>
                            )}
                        </div>
                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                            <h3 className="font-bold text-amber-300 text-lg">{rightPathology.name}</h3>
                            <p className="text-xs text-zinc-400">{rightPathology.category}</p>
                            {rightPathology.mechanism && (
                                <p className="text-xs text-zinc-400 mt-2 line-clamp-2">{rightPathology.mechanism}</p>
                            )}
                        </div>
                    </div>

                    {/* Findings Section */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleSection('findings')}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                        >
                            <span className="text-sm font-bold text-zinc-300">Görüntüleme Bulguları</span>
                            {expandedSections.includes('findings') ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                        </button>
                        {expandedSections.includes('findings') && (
                            <div className="border-t border-zinc-800">
                                <div className="grid grid-cols-2 divide-x divide-zinc-800">
                                    {/* Left Findings */}
                                    <div className="p-4 space-y-2">
                                        {leftFindings.length > 0 ? leftFindings.map((f, i) => (
                                            <div key={i} className="text-xs">
                                                <span className="text-blue-400 font-bold">{f.modality} {f.key}: </span>
                                                <span className="text-zinc-300">{f.value}</span>
                                            </div>
                                        )) : <p className="text-xs text-zinc-500">Bulgu verisi yok</p>}
                                    </div>
                                    {/* Right Findings */}
                                    <div className="p-4 space-y-2">
                                        {rightFindings.length > 0 ? rightFindings.map((f, i) => (
                                            <div key={i} className="text-xs">
                                                <span className="text-amber-400 font-bold">{f.modality} {f.key}: </span>
                                                <span className="text-zinc-300">{f.value}</span>
                                            </div>
                                        )) : <p className="text-xs text-zinc-500">Bulgu verisi yok</p>}
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
                            <span className="text-sm font-bold text-zinc-300">Anahtar Noktalar</span>
                            {expandedSections.includes('keypoints') ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                        </button>
                        {expandedSections.includes('keypoints') && (
                            <div className="border-t border-zinc-800">
                                <div className="grid grid-cols-2 divide-x divide-zinc-800">
                                    <div className="p-4">
                                        <ul className="space-y-1.5">
                                            {leftPathology.keyPoints.map((kp, i) => (
                                                <li key={i} className="text-xs text-zinc-300 flex items-start gap-1.5">
                                                    <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                                                    {kp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4">
                                        <ul className="space-y-1.5">
                                            {rightPathology.keyPoints.map((kp, i) => (
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
                            <span className="text-sm font-bold text-zinc-300">Ayırıcı Tanı / Ek Bilgi</span>
                            {expandedSections.includes('differential') ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                        </button>
                        {expandedSections.includes('differential') && (
                            <div className="border-t border-zinc-800">
                                <div className="grid grid-cols-2 divide-x divide-zinc-800">
                                    <div className="p-4 space-y-3">
                                        {leftPathology.etiology && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Etiyoloji</p>
                                                <p className="text-xs text-zinc-300">{leftPathology.etiology}</p>
                                            </div>
                                        )}
                                        {leftPathology.goldStandard && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Altın Standart</p>
                                                <p className="text-xs text-blue-300">{leftPathology.goldStandard}</p>
                                            </div>
                                        )}
                                        {leftPathology.clinicalPearl && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Klinik İpucu</p>
                                                <p className="text-xs text-emerald-300">{leftPathology.clinicalPearl}</p>
                                            </div>
                                        )}
                                        {leftPathology.differentialDiagnosis && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Ayırıcı Tanılar</p>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {leftPathology.differentialDiagnosis.map((dd, i) => (
                                                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                                            {dd}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 space-y-3">
                                        {rightPathology.etiology && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Etiyoloji</p>
                                                <p className="text-xs text-zinc-300">{rightPathology.etiology}</p>
                                            </div>
                                        )}
                                        {rightPathology.goldStandard && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Altın Standart</p>
                                                <p className="text-xs text-amber-300">{rightPathology.goldStandard}</p>
                                            </div>
                                        )}
                                        {rightPathology.clinicalPearl && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Klinik İpucu</p>
                                                <p className="text-xs text-emerald-300">{rightPathology.clinicalPearl}</p>
                                            </div>
                                        )}
                                        {rightPathology.differentialDiagnosis && (
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase">Ayırıcı Tanılar</p>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {rightPathology.differentialDiagnosis.map((dd, i) => (
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
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Ayırıcı Tanıda Kritik Farklar</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="border-b border-zinc-800">
                                        <th className="text-left py-2 px-2 text-zinc-500 font-medium">Özellik</th>
                                        <th className="text-left py-2 px-2 text-blue-400 font-medium">{leftPathology.name}</th>
                                        <th className="text-left py-2 px-2 text-amber-400 font-medium">{rightPathology.name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-zinc-800/50">
                                        <td className="py-2 px-2 text-zinc-500">Kategori</td>
                                        <td className="py-2 px-2 text-zinc-300">{leftPathology.category}</td>
                                        <td className="py-2 px-2 text-zinc-300">{rightPathology.category}</td>
                                    </tr>
                                    <tr className="border-b border-zinc-800/50">
                                        <td className="py-2 px-2 text-zinc-500">Mekanizma</td>
                                        <td className="py-2 px-2 text-zinc-300">{leftPathology.mechanism || '—'}</td>
                                        <td className="py-2 px-2 text-zinc-300">{rightPathology.mechanism || '—'}</td>
                                    </tr>
                                    <tr className="border-b border-zinc-800/50">
                                        <td className="py-2 px-2 text-zinc-500">Altın Standart</td>
                                        <td className="py-2 px-2 text-blue-300">{leftPathology.goldStandard || '—'}</td>
                                        <td className="py-2 px-2 text-amber-300">{rightPathology.goldStandard || '—'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-2 text-zinc-500">Klinik İpucu</td>
                                        <td className="py-2 px-2 text-emerald-300">{leftPathology.clinicalPearl || '—'}</td>
                                        <td className="py-2 px-2 text-emerald-300">{rightPathology.clinicalPearl || '—'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-zinc-600">
                    <ArrowLeftRight className="w-16 h-16 mb-4 opacity-20" />
                    <p className="text-lg font-medium">İki patoloji seçerek karşılaştırmaya başlayın</p>
                    <p className="text-sm mt-1">veya yukarıdaki hızlı çiftlerden birini tıklayın</p>
                </div>
            )}
        </div>
    );
}
