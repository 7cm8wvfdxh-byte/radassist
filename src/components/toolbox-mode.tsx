import React, { useState, useEffect } from 'react';
import { Ruler, Search, Activity, Calculator as CalcIcon, ShieldCheck, FileText, FlaskConical, Eye, GitBranch, Droplets, Zap, BookOpen, Magnet, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { RADIOLOGY_MEASUREMENTS, RADIOLOGY_CALCULATORS, Measurement } from '@/data/toolbox-data';
import { RADS_SYSTEMS, RadsSystem } from '@/data/rads-data';
import { REPORT_TEMPLATES, ReportTemplate } from '@/data/report-templates';
import { IMAGING_PROTOCOLS, ImagingProtocol } from '@/data/protocol-data';
import { RADIOLOGICAL_SIGNS, RadiologicalSign } from '@/data/signs-data';
import { DDX_LIST } from '@/data/ddx-data';
import { CONTRAST_AGENTS, CONTRAST_REACTIONS, PREMEDICATION_PROTOCOLS, EGFR_GUIDELINES, METFORMIN_RULES, NSF_INFO } from '@/data/contrast-data';
import { IMAGING_ARTIFACTS } from '@/data/artifacts-data';
import { RADIOLOGY_GLOSSARY } from '@/data/glossary-data';
import { MR_SEQUENCES, MR_SEQUENCE_CATEGORIES, HEMORRHAGE_STAGES } from '@/data/sequences-data';
import { cn } from '@/lib/utils';

const RADS_COLOR_MAP: Record<string, { badge: string; bar: string; text: string }> = {
    green: { badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', bar: 'bg-emerald-500', text: 'text-emerald-300' },
    yellow: { badge: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30', bar: 'bg-yellow-400', text: 'text-yellow-300' },
    orange: { badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30', bar: 'bg-orange-500', text: 'text-orange-300' },
    red: { badge: 'bg-red-500/15 text-red-300 border-red-500/30', bar: 'bg-red-500', text: 'text-red-300' },
    purple: { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30', bar: 'bg-purple-500', text: 'text-purple-300' },
    gray: { badge: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30', bar: 'bg-zinc-500', text: 'text-zinc-400' },
    blue: { badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30', bar: 'bg-blue-500', text: 'text-blue-300' },
};

type ToolboxTab = 'ruler' | 'calc' | 'rads' | 'templates' | 'protocols' | 'signs' | 'ddx' | 'contrast' | 'artifacts' | 'glossary' | 'sequences';

interface ToolboxModeProps {
    activeTab?: ToolboxTab;
    onTabChange?: (tab: ToolboxTab) => void;
}

export function ToolboxMode({ activeTab: controlledTab, onTabChange }: ToolboxModeProps = {}) {
    const [internalTab, setInternalTab] = useState<ToolboxTab>(controlledTab ?? 'ruler');
    const activeTab = controlledTab ?? internalTab;
    const setActiveTab = (tab: ToolboxTab) => {
        setInternalTab(tab);
        onTabChange?.(tab);
    };

    // Sync internal tab when controlled tab changes from parent
    useEffect(() => {
        if (controlledTab && controlledTab !== internalTab) {
            setInternalTab(controlledTab);
        }
    }, [controlledTab]); // eslint-disable-line react-hooks/exhaustive-deps

    // --- RULER state ---
    const [searchQuery, setSearchQuery] = useState('');

    // --- RADS state ---
    const [activeRads, setActiveRads] = useState<string>(RADS_SYSTEMS[0].id);

    // --- CALCULATOR state ---
    const [activeCalc, setActiveCalc] = useState<string | null>(null);
    const [calcValues, setCalcValues] = useState<Record<string, number>>({});
    const [calcResult, setCalcResult] = useState<{ main: string; detail?: string } | null>(null);

    // --- TEMPLATES state ---
    const [templateSearch, setTemplateSearch] = useState('');
    const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
    const [copyFeedback, setCopyFeedback] = useState<'findings' | 'impression' | null>(null);

    // --- PROTOCOLS state ---
    const [protocolSearch, setProtocolSearch] = useState('');
    const [activeProtocol, setActiveProtocol] = useState<string | null>(null);

    // --- SIGNS state ---
    const [signsSearch, setSignsSearch] = useState('');
    const [activeSign, setActiveSign] = useState<string | null>(null);

    // --- DDX state ---
    const [ddxSearch, setDdxSearch] = useState('');
    const [activeDdx, setActiveDdx] = useState<string | null>(null);

    // --- CONTRAST state ---
    const [contrastTab, setContrastTab] = useState<'agents' | 'reactions' | 'premed' | 'egfr' | 'nsf'>('agents');

    // --- ARTIFACTS state ---
    const [artifactSearch, setArtifactSearch] = useState('');
    const [activeArtifact, setActiveArtifact] = useState<string | null>(null);

    // --- GLOSSARY state ---
    const [glossarySearch, setGlossarySearch] = useState('');

    // ── Filter Measurements ──────────────────────────────────────
    const filteredMeasurements = RADIOLOGY_MEASUREMENTS.filter(m =>
        m.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.organ.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const groupedMeasurements = filteredMeasurements.reduce((acc, m) => {
        if (!acc[m.organ]) acc[m.organ] = [];
        acc[m.organ].push(m);
        return acc;
    }, {} as Record<string, Measurement[]>);

    // ── Filter Templates ─────────────────────────────────────────
    const allTemplates = Object.values(REPORT_TEMPLATES);
    const filteredTemplates = allTemplates.filter(t =>
        t.label.toLowerCase().includes(templateSearch.toLowerCase()) ||
        t.organ.toLowerCase().includes(templateSearch.toLowerCase())
    );
    const groupedTemplates = filteredTemplates.reduce((acc, t) => {
        if (!acc[t.organ]) acc[t.organ] = [];
        acc[t.organ].push(t);
        return acc;
    }, {} as Record<string, ReportTemplate[]>);

    // ── Filter Protocols ─────────────────────────────────────────
    const filteredProtocols = IMAGING_PROTOCOLS.filter(p =>
        p.name.toLowerCase().includes(protocolSearch.toLowerCase()) ||
        p.organ.toLowerCase().includes(protocolSearch.toLowerCase()) ||
        p.modality.toLowerCase().includes(protocolSearch.toLowerCase())
    );
    const groupedProtocols = filteredProtocols.reduce((acc, p) => {
        if (!acc[p.organ]) acc[p.organ] = [];
        acc[p.organ].push(p);
        return acc;
    }, {} as Record<string, ImagingProtocol[]>);

    // ── Filter Signs ─────────────────────────────────────────────
    const filteredSigns = RADIOLOGICAL_SIGNS.filter(s =>
        s.name.toLowerCase().includes(signsSearch.toLowerCase()) ||
        s.turkishName.toLowerCase().includes(signsSearch.toLowerCase()) ||
        s.organ.toLowerCase().includes(signsSearch.toLowerCase()) ||
        s.pathology.toLowerCase().includes(signsSearch.toLowerCase())
    );
    const groupedSigns = filteredSigns.reduce((acc, s) => {
        if (!acc[s.organ]) acc[s.organ] = [];
        acc[s.organ].push(s);
        return acc;
    }, {} as Record<string, RadiologicalSign[]>);

    // ── Filter DDx ────────────────────────────────────────────────
    const filteredDdx = DDX_LIST.filter(d =>
        d.finding.toLowerCase().includes(ddxSearch.toLowerCase()) ||
        d.organ.toLowerCase().includes(ddxSearch.toLowerCase()) ||
        d.modality.toLowerCase().includes(ddxSearch.toLowerCase())
    );

    // ── Filter Artifacts ──────────────────────────────────────────
    const filteredArtifacts = IMAGING_ARTIFACTS.filter(a =>
        a.name.toLowerCase().includes(artifactSearch.toLowerCase()) ||
        a.turkishName.toLowerCase().includes(artifactSearch.toLowerCase()) ||
        a.modality.toLowerCase().includes(artifactSearch.toLowerCase()) ||
        a.category.toLowerCase().includes(artifactSearch.toLowerCase())
    );
    const groupedArtifacts = filteredArtifacts.reduce((acc, a) => {
        if (!acc[a.category]) acc[a.category] = [];
        acc[a.category].push(a);
        return acc;
    }, {} as Record<string, typeof IMAGING_ARTIFACTS>);

    // ── Filter Glossary ───────────────────────────────────────────
    const filteredGlossary = RADIOLOGY_GLOSSARY.filter(g =>
        g.abbreviation.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        g.fullForm.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        g.turkishMeaning.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        g.category.toLowerCase().includes(glossarySearch.toLowerCase())
    );
    const groupedGlossary = filteredGlossary.reduce((acc, g) => {
        if (!acc[g.category]) acc[g.category] = [];
        acc[g.category].push(g);
        return acc;
    }, {} as Record<string, typeof RADIOLOGY_GLOSSARY>);

    // ── Calculator ───────────────────────────────────────────────
    const handleCalcChange = (key: string, val: string) => {
        setCalcValues(prev => ({ ...prev, [key]: parseFloat(val) || 0 }));
        setCalcResult(null);
    };

    const calculateAdrenal = () => {
        const { pre, ven, del } = calcValues;
        if (pre === undefined || ven === undefined || del === undefined) return;
        const absoluteAPW = ((ven - del) / (ven - pre)) * 100;
        const relativeRPW = ((ven - del) / ven) * 100;
        setCalcResult({
            main: `APW: %${absoluteAPW.toFixed(1)} | RPW: %${relativeRPW.toFixed(1)}`,
            detail: absoluteAPW >= 60 || relativeRPW >= 40
                ? "Lipid-rich Adenom ile uyumlu. (Yüksek Olasılık)"
                : "Adenom dışı lezyon (Mets/Pheo/Ca) şüphesi. Washout yetersiz."
        });
    };

    const calculateVolume = () => {
        const { l, w, h } = calcValues;
        if (!l || !w || !h) return;
        setCalcResult({ main: `Volüm: ${(l * w * h * 0.52).toFixed(2)} cc (ml)` });
    };

    const calculateNascet = () => {
        const { distal, stenosis } = calcValues;
        if (!distal || !stenosis) return;
        if (stenosis > distal) { setCalcResult({ main: "Hata: Darlık çapı distalden büyük olamaz." }); return; }
        const pct = ((distal - stenosis) / distal) * 100;
        const grade = pct < 50 ? "Hafif Darlık (<%50)" : pct < 70 ? "Orta Derece Darlık (%50-69)" : "Ciddi Darlık (%70-99)";
        setCalcResult({ main: `%${pct.toFixed(1)} Stenoz (NASCET)`, detail: grade });
    };

    const calculateRECIST = () => {
        const { baseline, current } = calcValues;
        if (!baseline || !current) return;
        const change = ((current - baseline) / baseline) * 100;
        const response = current === 0 ? "Tam Yanıt (CR)" :
            change <= -30 ? "Kısmi Yanıt (PR)" :
                change >= 20 && (current - baseline) >= 5 ? "Progresif Hastalık (PD)" : "Stabil Hastalık (SD)";
        setCalcResult({ main: `%${change.toFixed(1)} Değişim`, detail: response });
    };

    const calculateEGFR = () => {
        const { creat, age, gender } = calcValues;
        if (!creat || !age) return;
        const k = gender === 1 ? 0.9 : 0.7;
        const a = gender === 1 ? -0.302 : -0.241;
        let egfr = 142 * Math.pow(Math.min(creat / k, 1), a) * Math.pow(Math.max(creat / k, 1), -1.200) * Math.pow(0.9938, age);
        if (gender === 0) egfr *= 1.012;
        const stage = egfr >= 90 ? "Evre 1 (Normal)" : egfr >= 60 ? "Evre 2 (Hafif)" : egfr >= 45 ? "Evre 3a (Hafif-Orta)" : egfr >= 30 ? "Evre 3b (Orta-Ciddi)" : egfr >= 15 ? "Evre 4 (Ciddi)" : "Evre 5 (Böbrek Yetmezliği)";
        const safety = egfr < 30 ? "🛑 IV Kontrast Riskli! Hidrasyon/Konsültasyon gerekir." : egfr < 45 ? "⚠️ IV Kontrast Dikkatli Kullanılmalı (Hidrasyon)." : "✅ IV Kontrast Güvenli.";
        setCalcResult({ main: `eGFR: ${egfr.toFixed(1)} ml/min/1.73m²`, detail: `${stage}\n${safety}` });
    };

    const calculateICH = () => {
        const { gcs, volume, ivh, infratentorial, age } = calcValues;
        let score = 0;
        if (gcs <= 4) score += 2; else if (gcs <= 12) score += 1;
        if (volume >= 30) score += 1;
        if (ivh === 1) score += 1;
        if (infratentorial === 1) score += 1;
        if (age >= 80) score += 1;
        const mortalityMap: Record<number, string> = { 0: "0%", 1: "%13", 2: "%26", 3: "%72", 4: "%97", 5: "%100", 6: "%100" };
        setCalcResult({ main: `ICH Skoru: ${score}`, detail: `Tahmini 30 Günlük Mortalite: ${mortalityMap[score] ?? "%100"}` });
    };

    const calculateTIRADS = () => {
        const { composition, echogenicity, shape, margin, echogenicfoci } = calcValues;
        const total = (composition || 0) + (echogenicity || 0) + (shape || 0) + (margin || 0) + (echogenicfoci || 0);
        const tr = total === 0 ? "TR1 (Benign)" : total < 3 ? "TR2 (Şüpheli Değil)" : total < 4 ? "TR3 (Hafif Şüpheli)" : total < 7 ? "TR4 (Orta Şüpheli)" : "TR5 (Yüksek Şüpheli)";
        const rec = total === 0 ? "İİAB gerekmez." : total < 3 ? "İİAB gerekmez." : total < 4 ? "≥2.5cm ise İİAB, ≥1.5cm ise Takip." : total < 7 ? "≥1.5cm ise İİAB, ≥1cm ise Takip." : "≥1cm ise İİAB, ≥0.5cm ise Takip.";
        setCalcResult({ main: `${tr} (Puan: ${total})`, detail: rec });
    };

    const calculateEvansIndex = () => {
        const { frontal_horn, inner_table } = calcValues;
        if (!frontal_horn || !inner_table) return;
        const ei = frontal_horn / inner_table;
        const grade = ei >= 0.37 ? "Ventriküler Dilatasyon (Hidrosefali şüphesi)" : ei >= 0.30 ? "Sınırda (Takip önerilir)" : "Normal";
        setCalcResult({ main: `Evans Index: ${ei.toFixed(3)}`, detail: `${grade}\n(N: < 0.30 | Şüpheli: 0.30-0.36 | Hidrosefali: ≥ 0.37)` });
    };

    const calculateDeRitis = () => {
        const { ast, alt } = calcValues;
        if (!ast || !alt) return;
        const ratio = ast / alt;
        const interp = ratio > 2 ? "Alkolik Hepatit düşündürür (>2)" : ratio > 1 ? "Siroz / Hepatoselüler hastalık" : ratio < 1 ? "Akut Viral Hepatit düşündürür (<1)" : "Normal sınır";
        setCalcResult({ main: `De Ritis Oranı: ${ratio.toFixed(2)}`, detail: interp });
    };

    const calculateMELD = () => {
        const { bili, inr_val, creat } = calcValues;
        if (!bili || !inr_val || !creat) return;
        const b = Math.max(bili, 1);
        const i = Math.max(inr_val, 1);
        const c = Math.max(Math.min(creat, 4), 1);
        const meld = Math.round(3.78 * Math.log(b) + 11.2 * Math.log(i) + 9.57 * Math.log(c) + 6.43);
        const mort = meld < 10 ? "<%2 (3 aylık mortalite)" : meld < 20 ? "%6–12" : meld < 30 ? "%20–25" : meld < 40 ? "%50" : ">%70";
        setCalcResult({ main: `MELD Skoru: ${meld}`, detail: `Tahmini 3 Aylık Mortalite: ${mort}` });
    };

    const calculateChildPugh = () => {
        const { bili_cp, alb, pt_cp, ascites, encep } = calcValues;
        const total = (bili_cp || 0) + (alb || 0) + (pt_cp || 0) + (ascites || 0) + (encep || 0);
        const cls = total <= 6 ? "Child A (İyi kompanze, operatif risk düşük)" : total <= 9 ? "Child B (Orta dereceli, karaciğer yetmezliği var)" : "Child C (Dekompanze siroz, yüksek operatif risk)";
        const surv = total <= 6 ? "1 yıllık sürvi: ~%100, 2 yıl: ~%85" : total <= 9 ? "1 yıl: ~%80, 2 yıl: ~%60" : "1 yıl: ~%45, 2 yıl: ~%35";
        setCalcResult({ main: `Child-Pugh ${total <= 6 ? 'A' : total <= 9 ? 'B' : 'C'} (${total} puan)`, detail: `${cls}\n${surv}` });
    };

    const calculateASPECTS = () => {
        // ASPECTS: 10 points, each checked region subtracts 1
        const regions = ['c', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'ic', 'l', 'i'];
        let score = 10;
        regions.forEach(r => { if (calcValues[r] === 1) score -= 1; });
        const rec = score >= 8 ? "Trombektomi için uygun (ASPECTS ≥ 8)" : score >= 6 ? "Seçilmiş hastalarda trombektomi — klinik değerlendirme" : "Geniş enfarkt (ASPECTS < 6) — yüksek hemorajik risk, dikkatli değerlendirin";
        setCalcResult({ main: `ASPECTS: ${score}/10`, detail: rec });
    };

    const calculateWellsPE = () => {
        const { dvt_sign, alt_diag, hr, immob, prev_dvtpe, hemoptysis, malign } = calcValues;
        const total = (dvt_sign || 0) + (alt_diag || 0) + (hr || 0) + (immob || 0) + (prev_dvtpe || 0) + (hemoptysis || 0) + (malign || 0);
        const prob = total <= 1 ? "Düşük Olasılık (<2) — D-Dimer ile dışla" : total <= 6 ? "Orta Olasılık (2-6) — D-Dimer veya BTPA" : "Yüksek Olasılık (>6) — Direkt BTPA önerilir";
        setCalcResult({ main: `Wells Skoru: ${total}`, detail: prob });
    };

    // ── Copy to clipboard helper ─────────────────────────────────
    const copyToClipboard = (text: string, type: 'findings' | 'impression') => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyFeedback(type);
            setTimeout(() => setCopyFeedback(null), 1800);
        });
    };

    return (
        <div className="h-full flex flex-col animate-in fade-in duration-500">

            {/* ─── TAB: RULER ─────────────────────────────────────── */}
            {activeTab === 'ruler' && (
                <div className="max-w-3xl mx-auto w-full space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input type="text" placeholder="Ölçüm ara (örn: koletok, dalak, aorta)..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors" />
                    </div>
                    <div className="space-y-6">
                        {Object.keys(groupedMeasurements).length === 0 ? (
                            <div className="text-center py-10 text-zinc-500">Sonuç bulunamadı.</div>
                        ) : (
                            Object.entries(groupedMeasurements).map(([organ, items]) => (
                                <div key={organ} className="bg-zinc-900/40 rounded-2xl border border-white/5 overflow-hidden">
                                    <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-bold text-zinc-400 uppercase tracking-widest">{organ}</div>
                                    <div className="divide-y divide-white/5">
                                        {items.map(item => (
                                            <div key={item.id} className="p-4 hover:bg-white/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <div>
                                                    <h4 className="font-semibold text-zinc-200">{item.label}</h4>
                                                    {item.note && <p className="text-xs text-zinc-500 italic mt-0.5">{item.note}</p>}
                                                </div>
                                                <div className="flex flex-col items-end gap-1 text-right">
                                                    <div className="text-sm"><span className="text-zinc-500 text-xs mr-2">Normal:</span><span className="font-mono text-cyan-400 font-bold">{item.normalValues}</span></div>
                                                    {item.pathologicalThreshold && <div className="text-sm"><span className="text-zinc-500 text-xs mr-2">Patolojik:</span><span className="font-mono text-red-400 font-bold">{item.pathologicalThreshold}</span></div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* ─── TAB: RADS ──────────────────────────────────────── */}
            {activeTab === 'rads' && (
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700">
                        {RADS_SYSTEMS.map(sys => (
                            <button key={sys.id} onClick={() => setActiveRads(sys.id)} className={cn("w-full text-left p-3 rounded-xl border transition-all text-sm", activeRads === sys.id ? "bg-emerald-500/20 border-emerald-500 text-emerald-200 shadow-[0_0_10px_rgba(16,185,129,0.15)]" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800")}>
                                <div className="font-bold">{sys.name}</div>
                                <div className="text-[10px] opacity-60 mt-0.5">{sys.organ} — {sys.modality}</div>
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px] overflow-y-auto">
                        {(() => {
                            const sys: RadsSystem | undefined = RADS_SYSTEMS.find(s => s.id === activeRads);
                            if (!sys) return null;
                            return (
                                <div className="space-y-4">
                                    <div className="pb-4 border-b border-white/5">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="text-xl font-extrabold text-white">{sys.name}</h3>
                                                <p className="text-xs text-zinc-500 mt-1">{sys.organ} · {sys.modality}</p>
                                            </div>
                                            <span className="flex-shrink-0 text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">{sys.categories.length} Kategori</span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{sys.description}</p>
                                        {sys.note && <p className="text-[11px] text-amber-400/70 mt-2 italic border-l-2 border-amber-500/30 pl-2">{sys.note}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        {sys.categories.map(cat => {
                                            const colors = RADS_COLOR_MAP[cat.color];
                                            return (
                                                <div key={cat.category} className="flex gap-3 p-3 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                                    <div className={cn("w-1 flex-shrink-0 rounded-full", colors.bar)} />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                                            <span className={cn("text-xs font-bold px-2 py-0.5 rounded border", colors.badge)}>{cat.category}</span>
                                                            <span className="text-sm font-semibold text-zinc-200">{cat.label}</span>
                                                            {cat.risk && <span className={cn("text-[11px] font-mono ml-auto", colors.text)}>{cat.risk}</span>}
                                                        </div>
                                                        <p className="text-xs text-zinc-400 leading-relaxed">{cat.management}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}

            {/* ─── TAB: CALCULATOR ────────────────────────────────── */}
            {activeTab === 'calc' && (
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700">
                        {RADIOLOGY_CALCULATORS.map(c => (
                            <button key={c.id} onClick={() => { setActiveCalc(c.id); setCalcResult(null); setCalcValues({}); }} className={cn("w-full text-left p-3 rounded-xl border transition-all text-sm", activeCalc === c.id ? "bg-purple-500/20 border-purple-500 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)]" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800")}>
                                <div className="font-semibold">{c.name}</div>
                                <div className="text-[10px] opacity-60 truncate">{c.description}</div>
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px]">
                        {!activeCalc ? (
                            <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                                <Activity className="w-12 h-12 mb-3 opacity-30" />
                                <p>Sol taraftan bir hesaplayıcı seçin.</p>
                            </div>
                        ) : (
                            <div className="w-full max-w-sm mx-auto space-y-6">
                                <h3 className="text-xl font-bold text-white text-center mb-6 pb-4 border-b border-white/5">{RADIOLOGY_CALCULATORS.find(c => c.id === activeCalc)?.name}</h3>

                                {activeCalc === 'adrenal_washout' && (
                                    <>
                                        <div className="space-y-4">
                                            <div><label className="text-xs text-zinc-400 block mb-1">Pre-Kontrast (Native) HU</label><input type="number" onChange={(e) => handleCalcChange('pre', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 30" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">Venöz Faz (Portal) HU</label><input type="number" onChange={(e) => handleCalcChange('ven', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 80" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">Geç Faz (15dk Delayed) HU</label><input type="number" onChange={(e) => handleCalcChange('del', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 40" /></div>
                                        </div>
                                        <button onClick={calculateAdrenal} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20 active:scale-95">Hesapla</button>
                                    </>
                                )}

                                {(activeCalc === 'thyroid_volume' || activeCalc === 'prostate_volume') && (
                                    <>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div><label className="text-xs text-zinc-400 block mb-1">Boy (cm)</label><input type="number" onChange={(e) => handleCalcChange('l', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">En (cm)</label><input type="number" onChange={(e) => handleCalcChange('w', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">Yükseklik (cm)</label><input type="number" onChange={(e) => handleCalcChange('h', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                        </div>
                                        <button onClick={calculateVolume} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20">Hacim Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'nascet_stenosis' && (
                                    <>
                                        <div className="space-y-4">
                                            <div><label className="text-xs text-zinc-400 block mb-1">Distal Normal Lümen Çapı (mm)</label><input type="number" onChange={(e) => handleCalcChange('distal', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">En Dar Kısım Çapı (mm)</label><input type="number" onChange={(e) => handleCalcChange('stenosis', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                        </div>
                                        <button onClick={calculateNascet} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-900/20">Darlık Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'recist' && (
                                    <>
                                        <div className="space-y-4">
                                            <div><label className="text-xs text-zinc-400 block mb-1">Bazal Kısa Aks/Çap (mm)</label><input type="number" onChange={(e) => handleCalcChange('baseline', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">Güncel Kısa Aks/Çap (mm)</label><input type="number" onChange={(e) => handleCalcChange('current', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                        </div>
                                        <button onClick={calculateRECIST} className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-rose-900/20">Yanıt Değerlendir</button>
                                    </>
                                )}

                                {activeCalc === 'egfr_ckd_epi' && (
                                    <>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div><label className="text-xs text-zinc-400 block mb-1">Kreatinin (mg/dL)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('creat', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                                <div><label className="text-xs text-zinc-400 block mb-1">Yaş</label><input type="number" onChange={(e) => handleCalcChange('age', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                            </div>
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-2">Cinsiyet</label>
                                                <div className="flex bg-black/40 p-1 rounded-lg border border-zinc-700">
                                                    <button onClick={() => handleCalcChange('gender', '0')} className={cn("flex-1 py-1.5 rounded text-xs font-bold transition-colors", calcValues.gender === 0 ? "bg-zinc-700 text-white" : "text-zinc-500")}>Kadın</button>
                                                    <button onClick={() => handleCalcChange('gender', '1')} className={cn("flex-1 py-1.5 rounded text-xs font-bold transition-colors", calcValues.gender === 1 ? "bg-zinc-700 text-white" : "text-zinc-500")}>Erkek</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={calculateEGFR} className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20">eGFR Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'ich_score' && (
                                    <>
                                        <div className="space-y-4 text-sm">
                                            <div className="flex items-center justify-between"><span>GCS Skoru</span><select className="bg-black/40 border border-zinc-700 rounded p-1 text-xs w-32" onChange={e => handleCalcChange('gcs', e.target.value)}><option value="15">13-15 (0 puan)</option><option value="12">5-12 (1 puan)</option><option value="3">3-4 (2 puan)</option></select></div>
                                            <div className="flex items-center justify-between"><span>Kanama Hacmi</span><select className="bg-black/40 border border-zinc-700 rounded p-1 text-xs w-32" onChange={e => handleCalcChange('volume', e.target.value)}><option value="10">&lt; 30 ml (0)</option><option value="40">≥ 30 ml (1)</option></select></div>
                                            <div className="flex items-center justify-between"><span>Intraventriküler (IVH)</span><div className="flex bg-black/40 p-0.5 rounded border border-zinc-700"><button onClick={() => handleCalcChange('ivh', '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.ivh !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button><button onClick={() => handleCalcChange('ivh', '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.ivh === 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button></div></div>
                                            <div className="flex items-center justify-between"><span>Infratentoryal Yerleşim</span><div className="flex bg-black/40 p-0.5 rounded border border-zinc-700"><button onClick={() => handleCalcChange('infratentorial', '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.infratentorial !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button><button onClick={() => handleCalcChange('infratentorial', '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.infratentorial === 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button></div></div>
                                            <div className="flex items-center justify-between"><span>Yaş ≥ 80</span><div className="flex bg-black/40 p-0.5 rounded border border-zinc-700"><button onClick={() => handleCalcChange('age', '70')} className={cn("px-2 py-0.5 rounded text-[10px]", (!calcValues.age || calcValues.age < 80) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button><button onClick={() => handleCalcChange('age', '85')} className={cn("px-2 py-0.5 rounded text-[10px]", (calcValues.age && calcValues.age >= 80) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button></div></div>
                                        </div>
                                        <button onClick={calculateICH} className="w-full py-3 bg-red-800 hover:bg-red-700 text-white rounded-xl font-bold transition-all mt-4 border border-red-500/30 shadow-lg shadow-red-900/20">Mortalite Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'ti_rads' && (
                                    <>
                                        <div className="space-y-4 text-sm max-h-[300px] overflow-y-auto pr-1">
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Yapı (Composition)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('composition', e.target.value)}><option value="0">Kistik / Tamamen Spongiform (0)</option><option value="0">Karışık Kistik/Solid (0)</option><option value="2">Solid veya neredeyse tamamen solid (+2)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Ekojenite</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('echogenicity', e.target.value)}><option value="0">Anekoik (0)</option><option value="1">Hiperekoik / İzoekoik (+1)</option><option value="2">Hipoekoik (+2)</option><option value="3">Çok Hipoekoik (+3)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Şekil</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('shape', e.target.value)}><option value="0">Geniş (W ≥ T) (0)</option><option value="3">Uzun (Taller-than-wide) (+3)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Kenar</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('margin', e.target.value)}><option value="0">Düzgün / Belirsiz (0)</option><option value="2">Lobüle / Düzensiz (+2)</option><option value="3">Ekstratiroidal Yayılım (+3)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Ekojenik Odak</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('echogenicfoci', e.target.value)}><option value="0">Yok (0)</option><option value="1">Makrokalsifikasyon (+1)</option><option value="2">Periferal (Rim) kalsifikasyon (+2)</option><option value="3">Punctate eksojenik odaklar (+3)</option></select></div>
                                        </div>
                                        <button onClick={calculateTIRADS} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all mt-2 border border-amber-500/30 shadow-lg shadow-amber-900/20">Risk Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'evans_index' && (
                                    <>
                                        <div className="space-y-4">
                                            <div><label className="text-xs text-zinc-400 block mb-1">Frontal Boynuz Çapı (mm) — İki tarafın toplamı</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('frontal_horn', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 44.0" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">Maksimum İç Kranial Çap (mm)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('inner_table', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 135.0" /></div>
                                        </div>
                                        <button onClick={calculateEvansIndex} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20">Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'de_ritis_ratio' && (
                                    <>
                                        <div className="space-y-4">
                                            <div><label className="text-xs text-zinc-400 block mb-1">AST (U/L)</label><input type="number" onChange={(e) => handleCalcChange('ast', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 85" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">ALT (U/L)</label><input type="number" onChange={(e) => handleCalcChange('alt', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 40" /></div>
                                        </div>
                                        <button onClick={calculateDeRitis} className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-all shadow-lg">Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'meld_score' && (
                                    <>
                                        <div className="space-y-4">
                                            <div><label className="text-xs text-zinc-400 block mb-1">Total Bilirubin (mg/dL)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('bili', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 2.4" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">INR</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('inr_val', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 1.8" /></div>
                                            <div><label className="text-xs text-zinc-400 block mb-1">Kreatinin (mg/dL)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('creat', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 1.2" /></div>
                                        </div>
                                        <button onClick={calculateMELD} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all shadow-lg">MELD Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'child_pugh' && (
                                    <>
                                        <div className="space-y-3 text-sm">
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Bilirubin (mg/dL)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('bili_cp', e.target.value)}><option value="1">&lt;2 mg/dL (+1)</option><option value="2">2-3 mg/dL (+2)</option><option value="3">&gt;3 mg/dL (+3)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Albümin (g/dL)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('alb', e.target.value)}><option value="1">&gt;3.5 g/dL (+1)</option><option value="2">2.8–3.5 g/dL (+2)</option><option value="3">&lt;2.8 g/dL (+3)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">PT (saniye uzama)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('pt_cp', e.target.value)}><option value="1">&lt;4 sn (+1)</option><option value="2">4-6 sn (+2)</option><option value="3">&gt;6 sn (+3)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Asit</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('ascites', e.target.value)}><option value="1">Yok (+1)</option><option value="2">Hafif-Orta (+2)</option><option value="3">Belirgin (+3)</option></select></div>
                                            <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Ensefalopati</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('encep', e.target.value)}><option value="1">Yok (+1)</option><option value="2">Grad 1-2 (+2)</option><option value="3">Grad 3-4 (+3)</option></select></div>
                                        </div>
                                        <button onClick={calculateChildPugh} className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all mt-2 shadow-lg">Skor Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'aspects_score' && (
                                    <>
                                        <div className="space-y-3 text-sm max-h-[300px] overflow-y-auto pr-1">
                                            <p className="text-xs text-zinc-500 italic">Her bölge: normal=0 puan, iskemi=−1 puan. Toplam 10 üzerinden.</p>
                                            <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Bazal Ganglia Düzeyi</p>
                                                {[['c', 'Kaudat (C)'], ['l', 'Lentiküler (L)'], ['i', 'İnsüla (I)'], ['ic', 'İnternal kapsül (IC)']].map(([key, label]) => (
                                                    <div key={key} className="flex items-center justify-between py-1">
                                                        <span>{label}</span>
                                                        <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700">
                                                            <button onClick={() => handleCalcChange(key, '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Normal</button>
                                                            <button onClick={() => handleCalcChange(key, '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] === 1 ? "bg-red-600 text-white" : "text-zinc-500")}>İskemi (−1)</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                                                <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">MCA Korteks Düzeyi</p>
                                                {[['m1', 'M1 (Ant MCA)'], ['m2', 'M2 (Ant Temporal)'], ['m3', 'M3 (Post Temporal)'], ['m4', 'M4 (Ant Sup)'], ['m5', 'M5 (Lat Sup)'], ['m6', 'M6 (Post Sup)']].map(([key, label]) => (
                                                    <div key={key} className="flex items-center justify-between py-1">
                                                        <span>{label}</span>
                                                        <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700">
                                                            <button onClick={() => handleCalcChange(key, '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Normal</button>
                                                            <button onClick={() => handleCalcChange(key, '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] === 1 ? "bg-red-600 text-white" : "text-zinc-500")}>İskemi (−1)</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <button onClick={calculateASPECTS} className="w-full py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl font-bold transition-all mt-2 shadow-lg">ASPECTS Hesapla</button>
                                    </>
                                )}

                                {activeCalc === 'wells_pe' && (
                                    <>
                                        <div className="space-y-3 text-sm">
                                            {[
                                                { key: 'dvt_sign', label: 'DVT klinik bulguları', pts: 3 },
                                                { key: 'alt_diag', label: 'PE en olası tanı', pts: 3 },
                                                { key: 'hr', label: 'Kalp hızı > 100/dk', pts: 1.5 },
                                                { key: 'immob', label: 'İmmobilizasyon / Operasyon (son 4 hafta)', pts: 1.5 },
                                                { key: 'prev_dvtpe', label: 'Daha önce DVT veya PE', pts: 1.5 },
                                                { key: 'hemoptysis', label: 'Hemoptizi', pts: 1 },
                                                { key: 'malign', label: 'Aktif malignite (tedavi altında)', pts: 1 },
                                            ].map(({ key, label, pts }) => (
                                                <div key={key} className="flex items-center justify-between">
                                                    <span className="text-xs pr-2">{label}</span>
                                                    <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700 flex-shrink-0">
                                                        <button onClick={() => handleCalcChange(key, '0')} className={cn("px-2 py-0.5 rounded text-[10px]", (!calcValues[key] || calcValues[key] === 0) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button>
                                                        <button onClick={() => handleCalcChange(key, String(pts))} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] === pts ? "bg-blue-600 text-white" : "text-zinc-500")}>Evet (+{pts})</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={calculateWellsPE} className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-xl font-bold transition-all mt-4 shadow-lg">Skor Hesapla</button>
                                    </>
                                )}

                                {calcResult && (
                                    <div className="mt-6 p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-xl text-center animate-in zoom-in slide-in-from-bottom-2 duration-300 shadow-xl">
                                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-2">Sonuç</div>
                                        <div className="text-xl font-bold text-white mb-2">{calcResult.main}</div>
                                        {calcResult.detail && <div className="text-sm text-cyan-400 font-medium whitespace-pre-wrap px-4 py-2 bg-cyan-950/30 rounded border border-cyan-500/20 inline-block min-w-[200px]">{calcResult.detail}</div>}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ─── TAB: TEMPLATES ─────────────────────────────────── */}
            {activeTab === 'templates' && (
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
                    {/* Left: list */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2 max-h-[620px]">
                        <div className="relative flex-shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                            <input type="text" placeholder="Şablon ara..." value={templateSearch} onChange={e => setTemplateSearch(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-2.5 pl-9 pr-3 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-sky-500 transition-colors" />
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                            {Object.entries(groupedTemplates).map(([organ, templates]) => (
                                <div key={organ}>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-1 mb-1">{organ}</div>
                                    <div className="space-y-1">
                                        {templates.map(t => (
                                            <button key={t.pathologyId} onClick={() => setActiveTemplate(t.pathologyId)} className={cn("w-full text-left px-3 py-2 rounded-lg border transition-all text-sm", activeTemplate === t.pathologyId ? "bg-sky-500/20 border-sky-500 text-sky-200" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200")}>
                                                {t.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {Object.keys(groupedTemplates).length === 0 && <div className="text-center py-8 text-zinc-600 text-sm">Sonuç bulunamadı.</div>}
                        </div>
                    </div>

                    {/* Right: detail */}
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px] overflow-y-auto">
                        {!activeTemplate ? (
                            <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-3">
                                <FileText className="w-12 h-12 opacity-20" />
                                <p className="text-sm">Sol taraftan bir şablon seçin.</p>
                            </div>
                        ) : (() => {
                            const t = REPORT_TEMPLATES[activeTemplate];
                            if (!t) return null;
                            return (
                                <div className="space-y-5">
                                    <div className="pb-4 border-b border-white/5">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="text-lg font-extrabold text-white">{t.label}</h3>
                                                <p className="text-xs text-zinc-500 mt-0.5">{t.organ}</p>
                                            </div>
                                            <span className="text-[10px] px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold flex-shrink-0">Şablon</span>
                                        </div>
                                        <p className="text-xs text-amber-400/70 mt-2 italic border-l-2 border-amber-500/30 pl-2">{t.technique}</p>
                                    </div>

                                    {/* Findings */}
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Bulgular (Findings)</span>
                                            <button onClick={() => copyToClipboard(t.findingsTemplate, 'findings')} className={cn("text-[10px] px-2 py-0.5 rounded border transition-all", copyFeedback === 'findings' ? "bg-sky-500/20 text-sky-300 border-sky-500/40" : "bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-sky-300 hover:border-sky-500/40")}>
                                                {copyFeedback === 'findings' ? "✓ Kopyalandı" : "Kopyala"}
                                            </button>
                                        </div>
                                        <div className="bg-zinc-950/60 border border-zinc-700/50 rounded-xl p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono">
                                            {t.findingsTemplate}
                                        </div>
                                    </div>

                                    {/* Impression */}
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Sonuç / Yorum (Impression)</span>
                                            <button onClick={() => copyToClipboard(t.impressionTemplate, 'impression')} className={cn("text-[10px] px-2 py-0.5 rounded border transition-all", copyFeedback === 'impression' ? "bg-sky-500/20 text-sky-300 border-sky-500/40" : "bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-sky-300 hover:border-sky-500/40")}>
                                                {copyFeedback === 'impression' ? "✓ Kopyalandı" : "Kopyala"}
                                            </button>
                                        </div>
                                        <div className="bg-zinc-950/60 border border-zinc-700/50 rounded-xl p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono">
                                            {t.impressionTemplate}
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}

            {/* ─── TAB: PROTOCOLS ─────────────────────────────────── */}
            {activeTab === 'protocols' && (
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
                    {/* Left: list */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2 max-h-[620px]">
                        <div className="relative flex-shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                            <input type="text" placeholder="Protokol ara..." value={protocolSearch} onChange={e => setProtocolSearch(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-2.5 pl-9 pr-3 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                            {Object.entries(groupedProtocols).map(([organ, protocols]) => (
                                <div key={organ}>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-1 mb-1">{organ}</div>
                                    <div className="space-y-1">
                                        {protocols.map(p => (
                                            <button key={p.id} onClick={() => setActiveProtocol(p.id)} className={cn("w-full text-left px-3 py-2 rounded-lg border transition-all text-sm", activeProtocol === p.id ? "bg-amber-500/20 border-amber-500 text-amber-200" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200")}>
                                                <div>{p.name}</div>
                                                <div className="text-[10px] opacity-50 mt-0.5">{p.modality}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {Object.keys(groupedProtocols).length === 0 && <div className="text-center py-8 text-zinc-600 text-sm">Sonuç bulunamadı.</div>}
                        </div>
                    </div>

                    {/* Right: detail */}
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px] overflow-y-auto">
                        {!activeProtocol ? (
                            <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-3">
                                <FlaskConical className="w-12 h-12 opacity-20" />
                                <p className="text-sm">Sol taraftan bir protokol seçin.</p>
                            </div>
                        ) : (() => {
                            const p = IMAGING_PROTOCOLS.find(pr => pr.id === activeProtocol);
                            if (!p) return null;
                            return (
                                <div className="space-y-5">
                                    {/* Header */}
                                    <div className="pb-4 border-b border-white/5">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="text-lg font-extrabold text-white">{p.name}</h3>
                                                <p className="text-xs text-zinc-500 mt-0.5">{p.organ} · {p.modality}</p>
                                            </div>
                                            <span className="text-[10px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold flex-shrink-0">{p.steps.length} Adım</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed italic">{p.indication}</p>
                                    </div>

                                    {/* Patient Prep */}
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Hasta Hazırlığı</div>
                                        <ul className="space-y-1">
                                            {p.patientPrep.map((item, i) => (
                                                <li key={i} className="flex gap-2 text-sm text-zinc-300">
                                                    <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Steps */}
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Çekim Adımları</div>
                                        <div className="space-y-2">
                                            {p.steps.map((step, i) => (
                                                <div key={i} className="flex gap-3 p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold flex items-center justify-center border border-amber-500/30">{i + 1}</span>
                                                    <div>
                                                        <div className="text-sm font-semibold text-zinc-200">{step.step}</div>
                                                        <div className="text-xs text-zinc-500 mt-0.5">{step.detail}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contrast Info */}
                                    {p.contrastInfo && (
                                        <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1">Kontrast Bilgisi</div>
                                            <p className="text-xs text-zinc-300">{p.contrastInfo}</p>
                                        </div>
                                    )}

                                    {/* Notes */}
                                    {p.notes && (
                                        <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">Notlar</div>
                                            <p className="text-xs text-zinc-300">{p.notes}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}
            {/* ─── TAB: SIGNS ───────────────────────────────────────── */}
            {activeTab === 'signs' && (
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
                    {/* Left: list */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2 max-h-[620px]">
                        <div className="relative flex-shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                            <input type="text" placeholder="İşaret ara (örn: hampton, target)..." value={signsSearch} onChange={e => setSignsSearch(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-2.5 pl-9 pr-3 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-rose-500 transition-colors" />
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                            {Object.entries(groupedSigns).map(([organ, signs]) => (
                                <div key={organ}>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-1 mb-1">{organ}</div>
                                    <div className="space-y-1">
                                        {signs.map(s => (
                                            <button key={s.id} onClick={() => setActiveSign(s.id)} className={cn("w-full text-left px-3 py-2 rounded-lg border transition-all text-sm", activeSign === s.id ? "bg-rose-500/20 border-rose-500 text-rose-200" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200")}>
                                                <div className="font-semibold">{s.name}</div>
                                                <div className="text-[10px] opacity-60">{s.turkishName}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {Object.keys(groupedSigns).length === 0 && <div className="text-center py-8 text-zinc-600 text-sm">Sonuç bulunamadı.</div>}
                        </div>
                    </div>

                    {/* Right: detail */}
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px] overflow-y-auto">
                        {!activeSign ? (
                            <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-3">
                                <Eye className="w-12 h-12 opacity-20" />
                                <p className="text-sm">Sol taraftan bir radyolojik işaret seçin.</p>
                            </div>
                        ) : (() => {
                            const s = RADIOLOGICAL_SIGNS.find(x => x.id === activeSign);
                            if (!s) return null;
                            return (
                                <div className="space-y-5">
                                    <div className="pb-4 border-b border-white/5">
                                        <h3 className="text-xl font-extrabold text-white">{s.name}</h3>
                                        <p className="text-sm text-rose-400 font-medium">{s.turkishName}</p>
                                        <div className="flex gap-2 mt-2">
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold">{s.modality}</span>
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-500/10 text-zinc-400 border border-zinc-500/20 font-semibold">{s.organ}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5">Görünüm</div>
                                        <p className="text-sm text-zinc-300 leading-relaxed">{s.appearance}</p>
                                    </div>
                                    <div className="p-3 bg-rose-500/5 border border-rose-500/20 rounded-xl">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1">İlişkili Patoloji</div>
                                        <p className="text-sm text-white font-semibold">{s.pathology}</p>
                                    </div>
                                    {s.clinicalNote && (
                                        <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">Klinik Not</div>
                                            <p className="text-xs text-zinc-300">{s.clinicalNote}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}

            {/* ─── TAB: DDX ────────────────────────────────────────────── */}
            {activeTab === 'ddx' && (
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
                    {/* Left: list */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2 max-h-[620px]">
                        <div className="relative flex-shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                            <input type="text" placeholder="Bulgu ara (ring enhance, GGO)..." value={ddxSearch} onChange={e => setDdxSearch(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-2.5 pl-9 pr-3 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-orange-500 transition-colors" />
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                            {filteredDdx.map(d => (
                                <button key={d.id} onClick={() => setActiveDdx(d.id)} className={cn("w-full text-left px-3 py-2.5 rounded-lg border transition-all text-sm", activeDdx === d.id ? "bg-orange-500/20 border-orange-500 text-orange-200" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200")}>
                                    <div className="font-semibold">{d.finding}</div>
                                    <div className="text-[10px] opacity-60">{d.organ} · {d.modality}</div>
                                </button>
                            ))}
                            {filteredDdx.length === 0 && <div className="text-center py-8 text-zinc-600 text-sm">Sonuç bulunamadı.</div>}
                        </div>
                    </div>

                    {/* Right: detail */}
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px] overflow-y-auto">
                        {!activeDdx ? (
                            <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-3">
                                <GitBranch className="w-12 h-12 opacity-20" />
                                <p className="text-sm">Sol taraftan bir bulgu seçerek DDx listesini görün.</p>
                            </div>
                        ) : (() => {
                            const d = DDX_LIST.find(x => x.id === activeDdx);
                            if (!d) return null;
                            const likelihoodColors = { common: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', less_common: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30', rare: 'bg-red-500/15 text-red-300 border-red-500/30' };
                            const likelihoodLabels = { common: 'Sık', less_common: 'Daha Az Sık', rare: 'Nadir' };
                            return (
                                <div className="space-y-5">
                                    <div className="pb-4 border-b border-white/5">
                                        <h3 className="text-xl font-extrabold text-white">{d.finding}</h3>
                                        <div className="flex gap-2 mt-2">
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold">{d.modality}</span>
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-500/10 text-zinc-400 border border-zinc-500/20 font-semibold">{d.organ}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {d.differentials.map((dx, i) => (
                                            <div key={i} className="flex gap-3 p-3 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold flex items-center justify-center border border-orange-500/30">{i + 1}</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                                        <span className="text-sm font-semibold text-zinc-200">{dx.diagnosis}</span>
                                                        <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded border", likelihoodColors[dx.likelihood])}>{likelihoodLabels[dx.likelihood]}</span>
                                                    </div>
                                                    <p className="text-xs text-zinc-400 leading-relaxed">{dx.keyFeature}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {d.clinicalPearl && (
                                        <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">Klinik İpucu</div>
                                            <p className="text-xs text-zinc-300 leading-relaxed">{d.clinicalPearl}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}

            {/* ─── TAB: CONTRAST ───────────────────────────────────────── */}
            {activeTab === 'contrast' && (
                <div className="max-w-4xl mx-auto w-full space-y-4">
                    {/* Sub-tabs */}
                    <div className="flex justify-center">
                        <div className="bg-zinc-900/50 p-1 rounded-lg border border-white/5 flex gap-1 flex-wrap justify-center">
                            {([['agents', 'Ajanlar'], ['reactions', 'Reaksiyonlar'], ['premed', 'Premedikasyon'], ['egfr', 'eGFR & Metformin'], ['nsf', 'NSF']] as const).map(([key, label]) => (
                                <button key={key} onClick={() => setContrastTab(key)} className={cn("px-3 py-1.5 rounded text-xs font-bold transition-all", contrastTab === key ? "bg-blue-600 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5")}>{label}</button>
                            ))}
                        </div>
                    </div>

                    {/* Agents */}
                    {contrastTab === 'agents' && (
                        <div className="space-y-4">
                            {CONTRAST_AGENTS.map(agent => (
                                <div key={agent.id} className="bg-zinc-900/40 rounded-2xl border border-white/5 p-5">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div>
                                            <h4 className="font-bold text-white">{agent.name}</h4>
                                            <p className="text-[10px] text-zinc-500">{agent.category}</p>
                                        </div>
                                        <span className={cn("text-[10px] px-2 py-0.5 rounded-full border font-semibold flex-shrink-0", agent.type === 'iodinated' ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" : agent.type === 'gadolinium' ? "bg-purple-500/10 text-purple-400 border-purple-500/20" : agent.type === 'ultrasound' ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20")}>{agent.type === 'iodinated' ? 'İyotlu' : agent.type === 'gadolinium' ? 'Gadolinyum' : agent.type === 'ultrasound' ? 'USG' : 'Oral'}</span>
                                    </div>
                                    <div className="text-xs text-zinc-400 mb-2"><span className="text-zinc-500 font-bold">Örnekler: </span>{agent.examples.join(', ')}</div>
                                    <div className="text-xs text-zinc-400 mb-2"><span className="text-zinc-500 font-bold">Endikasyon: </span>{agent.indication}</div>
                                    <div className="text-xs text-cyan-400 mb-2"><span className="text-zinc-500 font-bold">Dozaj: </span>{agent.dosing}</div>
                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                        <div className="p-2 bg-red-500/5 border border-red-500/10 rounded-lg">
                                            <div className="text-[10px] font-bold text-red-400 mb-1">Kontraendikasyonlar</div>
                                            <ul className="text-[10px] text-zinc-400 space-y-0.5">{agent.contraindications.map((c, i) => <li key={i}>• {c}</li>)}</ul>
                                        </div>
                                        <div className="p-2 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                                            <div className="text-[10px] font-bold text-amber-400 mb-1">Yan Etkiler</div>
                                            <ul className="text-[10px] text-zinc-400 space-y-0.5">{agent.sideEffects.map((s, i) => <li key={i}>• {s}</li>)}</ul>
                                        </div>
                                    </div>
                                    {agent.notes && <p className="text-[10px] text-amber-400/60 mt-2 italic border-l-2 border-amber-500/20 pl-2">{agent.notes}</p>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Reactions */}
                    {contrastTab === 'reactions' && (
                        <div className="space-y-4">
                            {CONTRAST_REACTIONS.map(r => (
                                <div key={r.severity} className={cn("rounded-2xl border p-5", r.severity === 'mild' ? "bg-emerald-500/5 border-emerald-500/20" : r.severity === 'moderate' ? "bg-yellow-500/5 border-yellow-500/20" : "bg-red-500/5 border-red-500/20")}>
                                    <h4 className={cn("font-bold text-lg mb-3", r.severity === 'mild' ? "text-emerald-400" : r.severity === 'moderate' ? "text-yellow-400" : "text-red-400")}>{r.label}</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Semptomlar</div>
                                            <ul className="space-y-1">{r.symptoms.map((s, i) => <li key={i} className="text-sm text-zinc-300 flex gap-2"><span className="text-zinc-500 flex-shrink-0">•</span>{s}</li>)}</ul>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Yönetim</div>
                                            <ul className="space-y-1">{r.management.map((m, i) => <li key={i} className="text-sm text-zinc-300 flex gap-2"><span className={cn("flex-shrink-0", r.severity === 'severe' ? "text-red-400" : "text-cyan-500")}>→</span>{m}</li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Premedication */}
                    {contrastTab === 'premed' && (
                        <div className="space-y-4">
                            {PREMEDICATION_PROTOCOLS.map(p => (
                                <div key={p.id} className="bg-zinc-900/40 rounded-2xl border border-white/5 p-5">
                                    <h4 className="font-bold text-white mb-1">{p.name}</h4>
                                    <p className="text-xs text-zinc-500 mb-3 italic">{p.indication}</p>
                                    <div className="space-y-2">
                                        {p.regimen.map((step, i) => (
                                            <div key={i} className="flex gap-3 p-2.5 bg-zinc-900/50 rounded-xl border border-white/5">
                                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold flex items-center justify-center border border-blue-500/30">{i + 1}</span>
                                                <span className="text-sm text-zinc-300">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {p.notes && <p className="text-[10px] text-amber-400/60 mt-3 italic border-l-2 border-amber-500/20 pl-2">{p.notes}</p>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* eGFR */}
                    {contrastTab === 'egfr' && (
                        <div className="space-y-4">
                            <div className="bg-zinc-900/40 rounded-2xl border border-white/5 p-5">
                                <h4 className="font-bold text-white mb-4">eGFR Bazlı IV Kontrast Güvenliği</h4>
                                <div className="space-y-2">
                                    {EGFR_GUIDELINES.map((g, i) => {
                                        const colorMap = { green: 'border-emerald-500/30 bg-emerald-500/5', yellow: 'border-yellow-500/30 bg-yellow-500/5', orange: 'border-orange-500/30 bg-orange-500/5', red: 'border-red-500/30 bg-red-500/5' };
                                        const textMap = { green: 'text-emerald-400', yellow: 'text-yellow-400', orange: 'text-orange-400', red: 'text-red-400' };
                                        return (
                                            <div key={i} className={cn("p-3 rounded-xl border", colorMap[g.color])}>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className={cn("font-bold text-sm", textMap[g.color])}>{g.range}</span>
                                                    <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded border", g.color === 'green' ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" : g.color === 'yellow' ? "bg-yellow-500/15 text-yellow-300 border-yellow-500/30" : g.color === 'orange' ? "bg-orange-500/15 text-orange-300 border-orange-500/30" : "bg-red-500/15 text-red-300 border-red-500/30")}>{g.risk}</span>
                                                </div>
                                                <p className="text-xs text-zinc-300">{g.action}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="bg-zinc-900/40 rounded-2xl border border-white/5 p-5">
                                <h4 className="font-bold text-white mb-3">{METFORMIN_RULES.title}</h4>
                                <div className="space-y-2">
                                    {METFORMIN_RULES.rules.map((r, i) => (
                                        <div key={i} className={cn("p-3 rounded-xl border", r.severity === 'safe' ? "bg-emerald-500/5 border-emerald-500/20" : r.severity === 'danger' ? "bg-red-500/5 border-red-500/20" : "bg-yellow-500/5 border-yellow-500/20")}>
                                            <span className={cn("text-xs font-bold", r.severity === 'safe' ? "text-emerald-400" : r.severity === 'danger' ? "text-red-400" : "text-yellow-400")}>eGFR {r.egfr}: </span>
                                            <span className="text-xs text-zinc-300">{r.action}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-amber-400/60 mt-3 italic border-l-2 border-amber-500/20 pl-2">{METFORMIN_RULES.note}</p>
                            </div>
                        </div>
                    )}

                    {/* NSF */}
                    {contrastTab === 'nsf' && (
                        <div className="bg-zinc-900/40 rounded-2xl border border-white/5 p-5 space-y-4">
                            <h4 className="font-bold text-white text-lg">{NSF_INFO.title}</h4>
                            <p className="text-sm text-zinc-400">{NSF_INFO.description}</p>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Risk Faktörleri</div>
                                <ul className="space-y-1">{NSF_INFO.riskFactors.map((r, i) => <li key={i} className="text-sm text-zinc-300 flex gap-2"><span className="text-red-400 flex-shrink-0">•</span>{r}</li>)}</ul>
                            </div>
                            <div className="space-y-2">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Ajan Risk Grupları</div>
                                {NSF_INFO.agentRiskGroups.map((g, i) => (
                                    <div key={i} className={cn("p-3 rounded-xl border", g.color === 'red' ? "bg-red-500/5 border-red-500/20" : g.color === 'yellow' ? "bg-yellow-500/5 border-yellow-500/20" : "bg-emerald-500/5 border-emerald-500/20")}>
                                        <div className={cn("text-xs font-bold mb-1", g.color === 'red' ? "text-red-400" : g.color === 'yellow' ? "text-yellow-400" : "text-emerald-400")}>{g.group}</div>
                                        <p className="text-xs text-zinc-300">{g.agents.join(' · ')}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1">Korunma</div>
                                <p className="text-xs text-zinc-300">{NSF_INFO.prevention}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* ─── TAB: ARTIFACTS ───────────────────────────────────────── */}
            {activeTab === 'artifacts' && (
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
                    {/* Left: list */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2 max-h-[620px]">
                        <div className="relative flex-shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                            <input type="text" placeholder="Artefakt ara (motion, beam)..." value={artifactSearch} onChange={e => setArtifactSearch(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-2.5 pl-9 pr-3 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-yellow-500 transition-colors" />
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                            {Object.entries(groupedArtifacts).map(([category, artifacts]) => (
                                <div key={category}>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-1 mb-1">{category}</div>
                                    <div className="space-y-1">
                                        {artifacts.map(a => (
                                            <button key={a.id} onClick={() => setActiveArtifact(a.id)} className={cn("w-full text-left px-3 py-2 rounded-lg border transition-all text-sm", activeArtifact === a.id ? "bg-yellow-500/20 border-yellow-500 text-yellow-200" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200")}>
                                                <div className="font-semibold">{a.name}</div>
                                                <div className="text-[10px] opacity-60">{a.turkishName}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {Object.keys(groupedArtifacts).length === 0 && <div className="text-center py-8 text-zinc-600 text-sm">Sonuç bulunamadı.</div>}
                        </div>
                    </div>

                    {/* Right: detail */}
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px] overflow-y-auto">
                        {!activeArtifact ? (
                            <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-3">
                                <Zap className="w-12 h-12 opacity-20" />
                                <p className="text-sm">Sol taraftan bir artefakt seçin.</p>
                            </div>
                        ) : (() => {
                            const a = IMAGING_ARTIFACTS.find(x => x.id === activeArtifact);
                            if (!a) return null;
                            return (
                                <div className="space-y-5">
                                    <div className="pb-4 border-b border-white/5">
                                        <h3 className="text-xl font-extrabold text-white">{a.name}</h3>
                                        <p className="text-sm text-yellow-400 font-medium">{a.turkishName}</p>
                                        <div className="flex gap-2 mt-2">
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-semibold">{a.modality}</span>
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-500/10 text-zinc-400 border border-zinc-500/20 font-semibold">{a.category}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5">Mekanizma</div>
                                        <p className="text-sm text-zinc-300 leading-relaxed">{a.mechanism}</p>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5">Görünüm</div>
                                        <p className="text-sm text-zinc-300 leading-relaxed">{a.appearance}</p>
                                    </div>
                                    <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-1">Klinik Etki</div>
                                        <p className="text-sm text-zinc-300">{a.clinicalImpact}</p>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Önleme / Çözüm</div>
                                        <div className="space-y-1.5">
                                            {a.prevention.map((p, i) => (
                                                <div key={i} className="flex gap-2 text-sm text-zinc-300">
                                                    <span className="text-yellow-500 flex-shrink-0">→</span>
                                                    <span>{p}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {a.pitfall && (
                                        <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-xl">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1">Dikkat (Pitfall)</div>
                                            <p className="text-xs text-zinc-300">{a.pitfall}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}

            {/* ─── TAB: GLOSSARY ───────────────────────────────────────── */}
            {activeTab === 'glossary' && (
                <div className="max-w-3xl mx-auto w-full space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input type="text" placeholder="Kısaltma ara (DWI, FLAIR, HU, PACS)..." value={glossarySearch} onChange={e => setGlossarySearch(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-teal-500 transition-colors" />
                    </div>
                    <div className="space-y-6">
                        {Object.keys(groupedGlossary).length === 0 ? (
                            <div className="text-center py-10 text-zinc-500">Sonuç bulunamadı.</div>
                        ) : (
                            Object.entries(groupedGlossary).map(([category, entries]) => (
                                <div key={category} className="bg-zinc-900/40 rounded-2xl border border-white/5 overflow-hidden">
                                    <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-bold text-zinc-400 uppercase tracking-widest">{category}</div>
                                    <div className="divide-y divide-white/5">
                                        {entries.map(entry => (
                                            <div key={entry.id} className="p-4 hover:bg-white/5 transition-colors">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-mono font-bold text-teal-400 text-lg">{entry.abbreviation}</span>
                                                            <span className="text-xs text-zinc-500">—</span>
                                                            <span className="text-sm text-zinc-300">{entry.fullForm}</span>
                                                        </div>
                                                        <p className="text-xs text-zinc-500 mt-0.5">{entry.turkishMeaning}</p>
                                                    </div>
                                                </div>
                                                {entry.description && <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{entry.description}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* ── MR SEKANSLAR ────────────────────────────────── */}
            {activeTab === 'sequences' && (
                <SequencesPanel />
            )}
        </div>
    );
}

// ── MR Sekanslar Panel Bileşeni ──────────────────────────────
function SequencesPanel() {
    const [seqSearch, setSeqSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [expandedSeq, setExpandedSeq] = useState<string | null>(null);
    const [showHemorrhageTable, setShowHemorrhageTable] = useState(false);

    const filteredSequences = MR_SEQUENCES.filter(seq => {
        const matchesCategory = activeCategory === 'all' || seq.category === activeCategory;
        const q = seqSearch.toLowerCase();
        const matchesSearch = !q || seq.name.toLowerCase().includes(q) || seq.fullName.toLowerCase().includes(q) || seq.description.toLowerCase().includes(q) || seq.clinicalUse.some(u => u.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
    });

    const seqColorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
        blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
        green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
        sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
        indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
        orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30' },
        red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', badge: 'bg-red-500/15 text-red-300 border-red-500/30' },
        violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
        emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
        pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', badge: 'bg-pink-500/15 text-pink-300 border-pink-500/30' },
        rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
        amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
    };

    const catColorMap: Record<string, string> = {
        cyan: 'bg-cyan-600 text-white shadow-cyan-500/20',
        purple: 'bg-purple-600 text-white shadow-purple-500/20',
        emerald: 'bg-emerald-600 text-white shadow-emerald-500/20',
        rose: 'bg-rose-600 text-white shadow-rose-500/20',
        amber: 'bg-amber-600 text-white shadow-amber-500/20',
    };

    return (
        <div className="max-w-4xl mx-auto w-full space-y-5">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                    type="text"
                    placeholder="Sekans ara (DWI, FLAIR, T1, T2, Dixon, MRCP)..."
                    value={seqSearch}
                    onChange={e => setSeqSearch(e.target.value)}
                    className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-fuchsia-500 transition-colors"
                />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setActiveCategory('all')}
                    className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                        activeCategory === 'all' ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20" : "bg-white/5 text-zinc-400 hover:bg-white/10"
                    )}
                >
                    Tümü
                </button>
                {Object.entries(MR_SEQUENCE_CATEGORIES).map(([key, cat]) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={cn(
                            "px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                            activeCategory === key ? `${catColorMap[cat.color]} shadow-lg` : "bg-white/5 text-zinc-400 hover:bg-white/10"
                        )}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Hemorrhage Table Toggle */}
            <button
                onClick={() => setShowHemorrhageTable(!showHemorrhageTable)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-bold hover:bg-red-500/15 transition-all w-full"
            >
                <Layers className="w-4 h-4" />
                Hemoraji Evreleri (T1/T2 Sinyal Tablosu)
                {showHemorrhageTable ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
            </button>

            {showHemorrhageTable && (
                <div className="bg-zinc-900/60 rounded-2xl border border-red-500/20 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-red-500/10 border-b border-red-500/20">
                                    <th className="px-4 py-3 text-left text-xs font-bold text-red-300">Evre</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-red-300">Süre</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-red-300">Ürün</th>
                                    <th className="px-4 py-3 text-center text-xs font-bold text-blue-300">T1 Sinyal</th>
                                    <th className="px-4 py-3 text-center text-xs font-bold text-emerald-300">T2 Sinyal</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-zinc-400">Lokasyon</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {HEMORRHAGE_STAGES.map(stage => (
                                    <tr key={stage.stage} className="hover:bg-white/5 transition-colors">
                                        <td className="px-4 py-3 font-bold text-zinc-200">{stage.stage}</td>
                                        <td className="px-4 py-3 text-zinc-400">{stage.timing}</td>
                                        <td className="px-4 py-3 text-zinc-300">{stage.product}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={cn(
                                                "px-2 py-0.5 rounded-full text-xs font-bold",
                                                stage.t1Signal.includes('Parlak') ? "bg-yellow-500/15 text-yellow-300" : "bg-zinc-500/15 text-zinc-400"
                                            )}>
                                                {stage.t1Signal}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={cn(
                                                "px-2 py-0.5 rounded-full text-xs font-bold",
                                                stage.t2Signal.includes('Parlak') ? "bg-emerald-500/15 text-emerald-300" : stage.t2Signal.includes('Koyu') ? "bg-zinc-700/50 text-zinc-400" : "bg-zinc-500/15 text-zinc-400"
                                            )}>
                                                {stage.t2Signal}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-zinc-500 text-xs">{stage.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Sequence Cards */}
            {filteredSequences.length === 0 ? (
                <div className="text-center py-10 text-zinc-500">Sonuç bulunamadı.</div>
            ) : (
                <div className="space-y-3">
                    {filteredSequences.map(seq => {
                        const colors = seqColorMap[seq.color] || seqColorMap.blue;
                        const isExpanded = expandedSeq === seq.id;
                        return (
                            <div
                                key={seq.id}
                                className={cn(
                                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                                    isExpanded ? `${colors.border} ${colors.bg}` : "border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60"
                                )}
                            >
                                {/* Header - always visible */}
                                <button
                                    onClick={() => setExpandedSeq(isExpanded ? null : seq.id)}
                                    className="w-full flex items-center gap-3 p-4 text-left"
                                >
                                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0", colors.bg, colors.text, colors.border, "border")}>
                                        {seq.name.substring(0, 3)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className={cn("font-bold text-base", colors.text)}>{seq.name}</span>
                                            <span className="text-xs text-zinc-500">{seq.fullName}</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{seq.description}</p>
                                    </div>
                                    <span className={cn("text-xs px-2 py-0.5 rounded-full border font-bold shrink-0", colors.badge)}>
                                        {MR_SEQUENCE_CATEGORIES[seq.category]?.label}
                                    </span>
                                    {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />}
                                </button>

                                {/* Expanded content */}
                                {isExpanded && (
                                    <div className="px-4 pb-5 space-y-4 border-t border-white/5 pt-4">
                                        {/* Principle */}
                                        <div>
                                            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Prensip</h4>
                                            <p className="text-sm text-zinc-300 leading-relaxed">{seq.principle}</p>
                                        </div>

                                        {/* Signal Characteristics */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="bg-yellow-500/5 rounded-xl p-3 border border-yellow-500/10">
                                                <h4 className="text-xs font-bold text-yellow-400 mb-2 flex items-center gap-1">
                                                    <span className="w-2 h-2 rounded-full bg-yellow-400" /> Parlak (Hiperintens)
                                                </h4>
                                                <ul className="space-y-1">
                                                    {seq.signalCharacteristics.bright.map((item, i) => (
                                                        <li key={i} className="text-xs text-zinc-300 flex items-start gap-1.5">
                                                            <span className="text-yellow-500 mt-0.5">•</span> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-zinc-500/5 rounded-xl p-3 border border-zinc-500/10">
                                                <h4 className="text-xs font-bold text-zinc-400 mb-2 flex items-center gap-1">
                                                    <span className="w-2 h-2 rounded-full bg-zinc-500" /> Koyu (Hipointens)
                                                </h4>
                                                <ul className="space-y-1">
                                                    {seq.signalCharacteristics.dark.map((item, i) => (
                                                        <li key={i} className="text-xs text-zinc-400 flex items-start gap-1.5">
                                                            <span className="text-zinc-600 mt-0.5">•</span> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {seq.signalCharacteristics.intermediate && seq.signalCharacteristics.intermediate.length > 0 && (
                                            <div className="bg-slate-500/5 rounded-xl p-3 border border-slate-500/10">
                                                <h4 className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1">
                                                    <span className="w-2 h-2 rounded-full bg-slate-400" /> Ara Sinyal (İzointens)
                                                </h4>
                                                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                                                    {seq.signalCharacteristics.intermediate.map((item, i) => (
                                                        <li key={i} className="text-xs text-zinc-400 flex items-start gap-1.5">
                                                            <span className="text-slate-500 mt-0.5">•</span> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Parameters */}
                                        {seq.parameters && (
                                            <div className="flex flex-wrap gap-2">
                                                {seq.parameters.TR && (
                                                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/15 text-xs font-mono text-blue-300">TR: {seq.parameters.TR}</span>
                                                )}
                                                {seq.parameters.TE && (
                                                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/15 text-xs font-mono text-emerald-300">TE: {seq.parameters.TE}</span>
                                                )}
                                                {seq.parameters.flipAngle && (
                                                    <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/15 text-xs font-mono text-purple-300">FA: {seq.parameters.flipAngle}</span>
                                                )}
                                                {seq.parameters.other && (
                                                    <span className="px-2.5 py-1 rounded-lg bg-zinc-500/10 border border-zinc-500/15 text-xs font-mono text-zinc-300">{seq.parameters.other}</span>
                                                )}
                                            </div>
                                        )}

                                        {/* Clinical Use */}
                                        <div>
                                            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Klinik Kullanım</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {seq.clinicalUse.map((use, i) => (
                                                    <span key={i} className={cn("px-2.5 py-1 rounded-lg text-xs font-medium border", colors.badge)}>
                                                        {use}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tips */}
                                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Pratik İpuçları</h4>
                                            <ul className="space-y-1.5">
                                                {seq.tips.map((tip, i) => (
                                                    <li key={i} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                                                        <span className="text-amber-500 mt-0.5 shrink-0">&#9679;</span> {tip}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
