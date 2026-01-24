import React, { useState } from 'react';
import { Modality } from '@/data/lexicon';
import { USG_FINDINGS, CT_FINDINGS, MRI_FINDINGS } from '@/data/lexicon';
import { useDiagnosticEngine } from '@/hooks/use-diagnostic-engine';
import { clsx } from 'clsx';
import { Check, ChevronRight, Stethoscope, AlertTriangle, FileText, X, Brain, Bone, Activity, Droplets, Wind, Sparkles } from 'lucide-react';
import { REPORT_TEMPLATES, GENERIC_TEMPLATE } from '@/data/report-templates';

interface DiagnosisWizardProps {
    activeModule: 'brain' | 'spine' | 'liver' | 'kidney' | 'lung';
}

export function DiagnosisWizard({ activeModule }: DiagnosisWizardProps) {
    const getInitialOrgan = () => {
        switch (activeModule) {
            case 'brain': return "Brain";
            case 'spine': return "Spine";
            case 'liver': return "Liver";
            case 'kidney': return "Kidney";
            case 'lung': return "Lung";
            default: return "Brain";
        }
    };
    const [organ, setOrgan] = useState<"Brain" | "Spine" | "Liver" | "Kidney" | "Lung">(getInitialOrgan());
    const [modality, setModality] = useState<Modality | null>(null);
    const [selectedFindings, setSelectedFindings] = useState<string[]>([]);
    const [isReportOpen, setIsReportOpen] = useState(false);

    // Hook handles the heavy lifting
    const results = useDiagnosticEngine(selectedFindings, organ);

    const activeFindingsList = modality === 'USG' ? USG_FINDINGS
        : modality === 'CT' ? CT_FINDINGS
            : modality === 'MRI' ? MRI_FINDINGS
                : [];

    // Group findings by category
    const groupedFindings = activeFindingsList.reduce((acc, finding) => {
        if (!acc[finding.category]) acc[finding.category] = [];
        acc[finding.category].push(finding);
        return acc;
    }, {} as Record<string, typeof activeFindingsList>);

    const toggleFinding = (id: string) => {
        setSelectedFindings(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex flex-col md:flex-row h-full gap-6 p-4 md:p-6 animate-in fade-in duration-500">
            {/* LEFT PANEL: INPUTS */}
            <div className="flex-1 overflow-y-auto space-y-6">
                <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                        <Stethoscope className="w-6 h-6 text-cyan-400" />
                        Tanı Sihirbazı
                    </h2>
                    <p className="text-sm text-zinc-400 mt-1">
                        Bulguları seçerek olası tanıları ve rapor taslağını görüntüleyin.
                    </p>
                </div>

                {/* --- SELECTED FINDINGS DASHBOARD --- */}
                {selectedFindings.length > 0 && (
                    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800/80 rounded-xl p-4 border border-cyan-500/20 shadow-lg shadow-cyan-900/10 animate-in fade-in slide-in-from-top-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                                <Activity className="w-4 h-4" />
                                Seçili Bulgular ({selectedFindings.length})
                            </h3>
                            <button
                                onClick={() => setSelectedFindings([])}
                                className="text-[10px] text-zinc-500 hover:text-red-400 transition-colors"
                            >
                                Temizle
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {selectedFindings.map(id => {
                                // Find label from ALL potential findings
                                const allFindings = [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS];
                                const finding = allFindings.find(f => f.id === id);
                                const label = finding?.label || id;

                                return (
                                    <button
                                        key={id}
                                        onClick={() => toggleFinding(id)}
                                        className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/40 text-cyan-200 border border-cyan-500/30 text-xs hover:bg-red-950/40 hover:text-red-300 hover:border-red-500/30 transition-all"
                                    >
                                        <span>{label}</span>
                                        <X className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Step 0: Organ Selection */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-zinc-300">Organ Sistemi</label>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => { setOrgan("Brain"); setSelectedFindings([]); }}
                            className={clsx(
                                "flex-1 min-w-[100px] p-3 rounded-xl border flex items-center justify-center gap-2 transition-all",
                                organ === "Brain"
                                    ? "bg-indigo-500/20 border-indigo-500 text-indigo-50 shadow-lg shadow-indigo-500/10"
                                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                            )}
                        >
                            <Brain className="w-5 h-5" />
                            <span className="font-semibold">Beyin</span>
                        </button>
                        <button
                            onClick={() => { setOrgan("Spine"); setSelectedFindings([]); }}
                            className={clsx(
                                "flex-1 min-w-[100px] p-3 rounded-xl border flex items-center justify-center gap-2 transition-all",
                                organ === "Spine"
                                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-50 shadow-lg shadow-emerald-500/10"
                                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                            )}
                        >
                            <Bone className="w-5 h-5" />
                            <span className="font-semibold">Omurga</span>
                        </button>
                        <button
                            onClick={() => { setOrgan("Liver"); setSelectedFindings([]); }}
                            className={clsx(
                                "flex-1 min-w-[100px] p-3 rounded-xl border flex items-center justify-center gap-2 transition-all",
                                organ === "Liver"
                                    ? "bg-amber-500/20 border-amber-500 text-amber-50 shadow-lg shadow-amber-500/10"
                                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                            )}
                        >
                            <Activity className="w-5 h-5" />
                            <span className="font-semibold">Karaciğer</span>
                        </button>
                        <button
                            onClick={() => { setOrgan("Kidney"); setSelectedFindings([]); }}
                            className={clsx(
                                "flex-1 min-w-[100px] p-3 rounded-xl border flex items-center justify-center gap-2 transition-all",
                                organ === "Kidney"
                                    ? "bg-blue-500/20 border-blue-500 text-blue-50 shadow-lg shadow-blue-500/10"
                                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                            )}
                        >
                            <Droplets className="w-5 h-5" />
                            <span className="font-semibold">Böbrek</span>
                        </button>
                        <button
                            onClick={() => { setOrgan("Lung"); setSelectedFindings([]); }}
                            className={clsx(
                                "flex-1 min-w-[100px] p-3 rounded-xl border flex items-center justify-center gap-2 transition-all",
                                organ === "Lung"
                                    ? "bg-sky-500/20 border-sky-500 text-sky-50 shadow-lg shadow-sky-500/10"
                                    : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                            )}
                        >
                            <Wind className="w-5 h-5" />
                            <span className="font-semibold">Akciğer</span>
                        </button>
                    </div>
                </div>

                {/* Step 1: Modality */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-zinc-300">İnceleme Yöntemi (Modality)</label>
                    <div className="flex gap-2">
                        {(['USG', 'CT', 'MRI'] as Modality[]).map(m => (
                            <button
                                key={m}
                                onClick={() => { setModality(m); setSelectedFindings([]); }}
                                className={clsx(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                                    modality === m
                                        ? "bg-cyan-500/20 border-cyan-500 text-cyan-50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                        : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                                )}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Step 2: Findings */}
                {modality && (
                    <div className="space-y-4 animate-in slide-in-from-left-4 duration-300">
                        <label className="text-sm font-medium text-zinc-300">Saptanan Bulgular</label>
                        <div className="space-y-4">
                            {Object.entries(groupedFindings).map(([category, findings]) => {
                                // Dynamic Category Icon
                                let CatIcon = FileText;
                                if (category.includes("Eko") || category.includes("Dansite")) CatIcon = Activity;
                                if (category.includes("Kontrast")) CatIcon = Droplets;
                                if (category.includes("Şekil")) CatIcon = Brain; // Placeholder shape icon
                                if (category.includes("Diğer")) CatIcon = Check;

                                return (
                                    <div key={category} className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-3 relative overflow-hidden group">
                                        {/* Category Header */}
                                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                                            <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-cyan-400 group-hover:bg-cyan-950/30 transition-colors">
                                                <CatIcon className="w-4 h-4" />
                                            </div>
                                            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                                {category}
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-1 gap-2 relative z-10">
                                            {findings.map(finding => (
                                                <button
                                                    key={finding.id}
                                                    onClick={() => toggleFinding(finding.id)}
                                                    className={clsx(
                                                        "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all text-left border relative overflow-hidden group/btn",
                                                        selectedFindings.includes(finding.id)
                                                            ? "bg-cyan-950/40 text-cyan-100 border-cyan-500/30 shadow-[0_0_10px_rgba(8,145,178,0.1)]"
                                                            : "bg-zinc-800/20 text-zinc-400 hover:bg-zinc-800/60 border-transparent hover:border-zinc-700"
                                                    )}
                                                >
                                                    {/* Selection Indicator Bar */}
                                                    {selectedFindings.includes(finding.id) && (
                                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
                                                    )}

                                                    <span className="pl-1">{finding.label}</span>
                                                    {selectedFindings.includes(finding.id) ? (
                                                        <div className="bg-cyan-500 rounded-full p-0.5 animate-in zoom-in spin-in-90 duration-300">
                                                            <Check className="w-3 h-3 text-black font-bold" />
                                                        </div>
                                                    ) : (
                                                        <div className="w-4 h-4 rounded-full border border-zinc-700 group-hover/btn:border-zinc-500 transition-colors" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* RIGHT PANEL: RESULTS */}
            <div className="flex-1 bg-zinc-900/80 rounded-2xl border border-zinc-800 p-5 overflow-hidden flex flex-col min-h-[400px]">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-100">Analiz Sonuçları</h3>
                    {results.length > 0 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {results.length} Eşleşme
                        </span>
                    )}
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-zinc-700">
                    {selectedFindings.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-600 space-y-3 opacity-60">
                            <Stethoscope className="w-12 h-12" />
                            <p className="text-center text-sm">Bulguları seçmeye başladığınızda<br />olası tanılar burada listelenecektir.</p>
                        </div>
                    ) : results.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-3">
                            <AlertTriangle className="w-10 h-10 text-orange-500/50" />
                            <p className="text-center text-sm">Seçilen kriterlere uygun<br />tanı bulunamadı.</p>
                        </div>
                    ) : (
                        results.map((result, idx) => (
                            <div
                                key={result.pathologyId}
                                className={clsx(
                                    "p-4 rounded-xl border transition-all animate-in slide-in-from-bottom-4 duration-500",
                                    idx === 0
                                        ? "bg-gradient-to-br from-cyan-900/20 to-zinc-900 border-cyan-500/50 shadow-lg shadow-cyan-900/10"
                                        : "bg-zinc-800/40 border-zinc-800"
                                )}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className={clsx("font-bold", idx === 0 ? "text-cyan-50 text-lg" : "text-zinc-200")}>
                                            {result.pathologyName}
                                        </h4>
                                        <span className={clsx(
                                            "text-xs px-1.5 py-0.5 rounded ml-0 mt-1 inline-block",
                                            result.probabilityLabel === 'Yüksek Olasılık' ? "bg-green-500/20 text-green-400" :
                                                result.probabilityLabel === 'Orta Olasılık' ? "bg-yellow-500/20 text-yellow-400" :
                                                    "bg-zinc-700 text-zinc-400"
                                        )}>
                                            %{Math.min(result.score, 99)} Güven
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-white/10">#{idx + 1}</span>
                                    </div>
                                </div>

                                {/* SMART SUGGESTIONS: Missing Strong Findings */}
                                {idx === 0 && result.missingFindings && result.missingFindings.length > 0 && (
                                    <div className="mt-3 pt-3 border-t border-cyan-500/30">
                                        <p className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-2 flex items-center gap-1">
                                            <Sparkles className="w-3 h-3" />
                                            Tanıyı Güçlendir (Bunu Kontrol Et):
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {result.missingFindings.slice(0, 3).map(mId => {
                                                const allFindings = [...USG_FINDINGS, ...CT_FINDINGS, ...MRI_FINDINGS];
                                                const fDef = allFindings.find(f => f.id === mId);
                                                if (!fDef) return null;

                                                return (
                                                    <button
                                                        key={mId}
                                                        onClick={() => toggleFinding(mId)}
                                                        className="text-xs bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-200 px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 group/sug"
                                                    >
                                                        <span>{fDef.label}?</span>
                                                        <span className="opacity-50 text-[10px] group-hover/sug:opacity-100 group-hover/sug:text-cyan-400">+3 Puan</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-1 mt-3">
                                    <p className="text-xs text-zinc-500">Eşleşen Bulgular:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {result.matchedFindings.map(fid => {
                                            const finding = groupedFindings[Object.keys(groupedFindings).find(cat => groupedFindings[cat].find(f => f.id === fid)) || ""]?.find(f => f.id === fid)
                                                || activeFindingsList.find(f => f.id === fid); // Fallback search
                                            return (
                                                <span key={fid} className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-700/50 text-zinc-300 border border-zinc-700">
                                                    {finding?.label || fid}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Result Footer: Report Generation Button */}
                {results.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-800">
                        <button
                            onClick={() => setIsReportOpen(true)}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-900/20 hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2">
                            <FileText className="w-5 h-5" />
                            Rapor Taslağı Oluştur
                        </button>
                    </div>
                )}
            </div>

            {/* Report Modal */}
            {isReportOpen && results.length > 0 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white text-zinc-900 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
                        <div className="bg-zinc-100 px-6 py-4 border-b flex justify-between items-center shrink-0">
                            <h3 className="font-bold text-lg text-zinc-800 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-zinc-600" />
                                Radyoloji Rapor Taslağı
                            </h3>
                            <button onClick={() => setIsReportOpen(false)} className="p-2 hover:bg-zinc-200 rounded-full transition-colors">
                                <X className="w-5 h-5 text-zinc-500" />
                            </button>
                        </div>

                        <div className="p-8 font-mono text-sm leading-relaxed overflow-y-auto">
                            {(() => {
                                // Select the best matching template based on the top result
                                const topResult = results[0];
                                const template = REPORT_TEMPLATES[topResult.pathologyId] || GENERIC_TEMPLATE;

                                return (
                                    <>
                                        <p className="font-bold mb-2">KLİNİK BİLGİ:</p>
                                        <p className="mb-4 text-zinc-600">[Klinik bilgi giriniz...]</p>

                                        <p className="font-bold mb-2">İNCELEME:</p>
                                        <p className="mb-4 text-zinc-600 font-semibold uppercase">
                                            {organ === 'Brain' ? 'Kranial' : organ === 'Spine' ? 'Spinal' : organ === 'Liver' ? 'Abdominal (Karaciğer)' : organ === 'Kidney' ? 'Üriner sistem' : 'Toraks'} {modality} incelemesi
                                        </p>

                                        <p className="font-bold mb-2">TEKNİK:</p>
                                        <p className="mb-4 text-zinc-600">{template.technique}</p>

                                        <p className="font-bold mb-2">BULGULAR:</p>
                                        <p className="mb-4 text-zinc-700 whitespace-pre-line">
                                            {template.findingsTemplate}
                                        </p>

                                        {/* List specific selected findings as well to ensure nothing is missed */}
                                        <p className="font-bold mb-1 text-xs text-zinc-500">EK İŞARETLENEN BULGULAR:</p>
                                        <ul className="list-disc pl-5 mb-6 space-y-1 text-zinc-600 text-xs">
                                            {selectedFindings.map(id => {
                                                const label = activeFindingsList.find(f => f.id === id)?.label || id;
                                                return <li key={id}>{label}</li>
                                            })}
                                        </ul>

                                        <p className="font-bold mb-2">SONUÇ & ÖNERİLER:</p>
                                        <div className="space-y-4 text-zinc-900 font-semibold bg-zinc-100 p-4 rounded-lg border border-zinc-200">
                                            <p className="uppercase">{template.impressionTemplate.replace("[Olası Tanı]", topResult.pathologyName)}</p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-zinc-200">
                                            <p className="text-zinc-500 text-xs mb-2">Olası Ayırıcı Tanılar (Alternatifler):</p>
                                            <ol className="list-decimal pl-5 text-zinc-600 text-xs">
                                                {results.slice(1, 4).map((res) => (
                                                    <li key={res.pathologyId}>
                                                        <span className="font-medium">{res.pathologyName}</span>
                                                        <span className="text-zinc-400 ml-1">({res.probabilityLabel})</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                        <p className="mt-4 italic text-zinc-400 text-[10px] text-center">
                                            * Bu rapor yapay zeka destekli taslak niteliğindedir. Uzman radyolog onayı gerektirir.
                                        </p>
                                    </>
                                );
                            })()}
                        </div>

                        <div className="bg-zinc-50 px-6 py-4 border-t flex justify-end gap-3 shrink-0">
                            <button onClick={() => setIsReportOpen(false)} className="px-4 py-2 text-zinc-600 font-medium hover:text-zinc-900">Kapat</button>
                            <button className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 font-medium">Kopyala</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
