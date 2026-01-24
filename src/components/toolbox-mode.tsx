import React, { useState } from 'react';
import { Ruler, Calculator, Search, ChevronRight, Activity, Percent, ArrowRight, Check, AlertTriangle, Calculator as CalcIcon } from 'lucide-react';
import { RADIOLOGY_MEASUREMENTS, RADIOLOGY_CALCULATORS, Measurement } from '@/data/toolbox-data';
import { cn } from '@/lib/utils';

export function ToolboxMode() {
    const [activeTab, setActiveTab] = useState<'ruler' | 'calc'>('ruler');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCalc, setActiveCalc] = useState<string | null>(null);

    // Filter Measurements
    const filteredMeasurements = RADIOLOGY_MEASUREMENTS.filter(m =>
        m.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.organ.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group by Organ
    const groupedMeasurements = filteredMeasurements.reduce((acc, m) => {
        if (!acc[m.organ]) acc[m.organ] = [];
        acc[m.organ].push(m);
        return acc;
    }, {} as Record<string, Measurement[]>);


    // Calculator State
    const [calcValues, setCalcValues] = useState<Record<string, number>>({});
    const [calcResult, setCalcResult] = useState<any>(null); // Flexible result type

    const handleCalcChange = (key: string, val: string) => {
        setCalcValues(prev => ({ ...prev, [key]: parseFloat(val) || 0 }));
        setCalcResult(null);
    };

    // --- ALGORITHMS ---

    const calculateAdrenal = () => {
        const { pre, ven, del } = calcValues;
        if (pre === undefined || ven === undefined || del === undefined) return;

        const absoluteAPW = ((ven - del) / (ven - pre)) * 100;
        const relativeRPW = ((ven - del) / ven) * 100;

        let res = {
            main: `APW: %${absoluteAPW.toFixed(1)} | RPW: %${relativeRPW.toFixed(1)}`,
            detail: absoluteAPW >= 60 || relativeRPW >= 40
                ? "Lipid-rich Adenom ile uyumlu. (Yüksek Olasılık)"
                : "Adenom dışı lezyon (Mets/Pheo/Ca) şüphesi. Washout yetersiz."
        };
        setCalcResult(res);
    };

    const calculateVolume = () => {
        const { l, w, h } = calcValues;
        if (!l || !w || !h) return;
        const vol = l * w * h * 0.52;
        setCalcResult({ main: `Volüm: ${vol.toFixed(2)} cc (ml)` });
    };

    const calculateNascet = () => {
        const { distal, stenosis } = calcValues;
        if (!distal || !stenosis) return;
        // NASCET Formula: (Distal Normal Lumen - Stenosis Diameter) / Distal Normal Lumen
        if (stenosis > distal) {
            setCalcResult({ main: "Hata: Darlık çapı distalden büyük olamaz." });
            return;
        }
        const pct = ((distal - stenosis) / distal) * 100;

        let grade = "";
        if (pct < 50) grade = "Hafif Darlık (<%50)";
        else if (pct < 70) grade = "Orta Derece Darlık (%50-69)";
        else grade = "Ciddi Darlık (%70-99)";

        setCalcResult({
            main: `%${pct.toFixed(1)} Stenoz (NASCET)`,
            detail: grade
        });
    };

    const calculateRECIST = () => {
        // Simple % change calculator
        const { baseline, current } = calcValues;
        if (!baseline || !current) return;

        const change = ((current - baseline) / baseline) * 100;
        let response = "";

        // RECIST 1.1 Basics
        if (change <= -30) response = "Kısmi Yanıt (PR)";
        else if (change >= 20 && (current - baseline) >= 5) response = "Progresif Hastalık (PD)"; // 5mm absolute increase rule
        else response = "Stabil Hastalık (SD)";

        if (current === 0) response = "Tam Yanıt (CR)";

        setCalcResult({
            main: `%${change.toFixed(1)} Değişim`,
            detail: response
        });
    };

    const calculateEGFR = () => {
        const { creat, age, gender, race } = calcValues; // gender: 0=female, 1=male. race: 0=non-black, 1=black
        if (!creat || !age) return;

        // CKD-EPI 2021 (Simplified, creatinine based)
        // Constants dependent on gender
        const k = gender === 1 ? 0.9 : 0.7;
        const a = gender === 1 ? -0.302 : -0.241;

        // Formula: 142 * min(Scr/k, 1)^a * max(Scr/k, 1)^-1.200 * 0.9938^Age * (1.012 if Female)
        // Note: 2021 formula removed race coefficient dedicatedly, usually. Let's use standard CKD-EPI.

        let egfr = 142 * Math.pow(Math.min(creat / k, 1), a) * Math.pow(Math.max(creat / k, 1), -1.200) * Math.pow(0.9938, age);

        if (gender === 0) egfr *= 1.012; // Female correction

        let stage = "";
        if (egfr >= 90) stage = "Evre 1 (Normal)";
        else if (egfr >= 60) stage = "Evre 2 (Hafif)";
        else if (egfr >= 45) stage = "Evre 3a (Hafif-Orta)";
        else if (egfr >= 30) stage = "Evre 3b (Orta-Ciddi)";
        else if (egfr >= 15) stage = "Evre 4 (Ciddi)";
        else stage = "Evre 5 (Böbrek Yetmezliği)";

        // Contrast Safety Note
        let safety = "";
        if (egfr < 30) safety = "🛑 IV Kontrast Riskli! Hidrasyon/Konsültasyon gerekir.";
        else if (egfr < 45) safety = "⚠️ IV Kontrast Dikkatli Kullanılmalı (Hidrasyon).";
        else safety = "✅ IV Kontrast Güvenli.";

        setCalcResult({
            main: `eGFR: ${egfr.toFixed(1)} ml/min/1.73m²`,
            detail: `${stage}\n${safety}`
        });
    };

    const calculateICH = () => {
        const { gcs, volume, ivh, infratentorial, age } = calcValues;
        // gcs: 3-4 (2), 5-12 (1), 13-15 (0) -> handled by UI dropdown sending 0,1,2 value directly? 
        // Or user inputs raw GCS and we logic it. Let's do raw input mapping.

        // Inputs need to be mapped if raw. Assuming UI sends pre-calculated points or raw values.
        // Let's assume UI toggle sets boolean (0/1) or raw number.

        // Score summation
        let score = 0;

        // GCS Logic
        if (gcs <= 4) score += 2;
        else if (gcs <= 12) score += 1;

        if (volume >= 30) score += 1;
        if (ivh === 1) score += 1; // Intraventricular Hemorrhage Yes
        if (infratentorial === 1) score += 1; // Infratentorial origin Yes
        if (age >= 80) score += 1;

        let mortality = "0%";
        switch (score) {
            case 0: mortality = "0%"; break;
            case 1: mortality = "%13"; break;
            case 2: mortality = "%26"; break;
            case 3: mortality = "%72"; break;
            case 4: mortality = "%97"; break;
            case 5: mortality = "%100"; break;
            case 6: mortality = "%100"; break;
        }

        setCalcResult({
            main: `ICH Skoru: ${score}`,
            detail: `Tahmini 30 Günlük Mortalite: ${mortality}`
        });
    };

    const calculateTIRADS = () => {
        const { composition, echogenicity, shape, margin, echogenicfoci } = calcValues;
        // Simple summation. UI must provide point values.
        let total = (composition || 0) + (echogenicity || 0) + (shape || 0) + (margin || 0) + (echogenicfoci || 0);

        let tr = "";
        let rec = "";

        if (total === 0) { tr = "TR1 (Benign)"; rec = "İİAB gerekmez."; }
        else if (total < 3) { tr = "TR2 (Şüpheli Değil)"; rec = "İİAB gerekmez."; }
        else if (total < 4) { tr = "TR3 (Hafif Şüpheli)"; rec = "≥2.5cm ise İİAB, ≥1.5cm ise Takip."; }
        else if (total < 7) { tr = "TR4 (Orta Şüpheli)"; rec = "≥1.5cm ise İİAB, ≥1cm ise Takip."; }
        else { tr = "TR5 (Yüksek Şüpheli)"; rec = "≥1cm ise İİAB, ≥0.5cm ise Takip."; }

        setCalcResult({
            main: `${tr} (Puan: ${total})`,
            detail: rec
        });
    };

    return (
        <div className="h-full flex flex-col animate-in fade-in duration-500">
            {/* Header Tabs */}
            <div className="flex justify-center mb-6">
                <div className="bg-zinc-900/50 p-1 rounded-xl border border-white/10 flex gap-1">
                    <button
                        onClick={() => setActiveTab('ruler')}
                        className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all",
                            activeTab === 'ruler'
                                ? "bg-cyan-600 text-white shadow-lg"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <Ruler className="w-4 h-4" />
                        Normal Değerler (Cetvel)
                    </button>
                    <button
                        onClick={() => setActiveTab('calc')}
                        className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all",
                            activeTab === 'calc'
                                ? "bg-purple-600 text-white shadow-lg"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <CalcIcon className="w-4 h-4" />
                        Hesaplayıcılar
                    </button>
                </div>
            </div>

            {/* TAB CONTENT: RULER */}
            {activeTab === 'ruler' && (
                <div className="max-w-3xl mx-auto w-full space-y-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Ölçüm ara (örn: koletok, dalak, aorta)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                        {Object.keys(groupedMeasurements).length === 0 ? (
                            <div className="text-center py-10 text-zinc-500">Sonuç bulunamadı.</div>
                        ) : (
                            Object.entries(groupedMeasurements).map(([organ, items]) => (
                                <div key={organ} className="bg-zinc-900/40 rounded-2xl border border-white/5 overflow-hidden">
                                    <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                        {organ}
                                    </div>
                                    <div className="divide-y divide-white/5">
                                        {items.map(item => (
                                            <div key={item.id} className="p-4 hover:bg-white/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <div>
                                                    <h4 className="font-semibold text-zinc-200">{item.label}</h4>
                                                    {item.note && <p className="text-xs text-zinc-500 italic mt-0.5">{item.note}</p>}
                                                </div>
                                                <div className="flex flex-col items-end gap-1 text-right">
                                                    <div className="text-sm">
                                                        <span className="text-zinc-500 text-xs mr-2">Normal:</span>
                                                        <span className="font-mono text-cyan-400 font-bold">{item.normalValues}</span>
                                                    </div>
                                                    {item.pathologicalThreshold && (
                                                        <div className="text-sm">
                                                            <span className="text-zinc-500 text-xs mr-2">Patolojik:</span>
                                                            <span className="font-mono text-red-400 font-bold">{item.pathologicalThreshold}</span>
                                                        </div>
                                                    )}
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

            {/* TAB CONTENT: CALCULATOR */}
            {activeTab === 'calc' && (
                <div className="max-w-4xl mx-auto w-full flex gap-6">
                    {/* Calc Selector */}
                    <div className="w-1/3 space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700">
                        {RADIOLOGY_CALCULATORS.map(c => (
                            <button
                                key={c.id}
                                onClick={() => { setActiveCalc(c.id); setCalcResult(null); setCalcValues({}); }}
                                className={cn(
                                    "w-full text-left p-3 rounded-xl border transition-all text-sm",
                                    activeCalc === c.id
                                        ? "bg-purple-500/20 border-purple-500 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                                        : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                                )}
                            >
                                <div className="font-semibold">{c.name}</div>
                                <div className="text-[10px] opacity-60 truncate">{c.description}</div>
                            </button>
                        ))}
                    </div>

                    {/* Active Calc Workspace */}
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[400px]">
                        {!activeCalc ? (
                            <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                                <Activity className="w-12 h-12 mb-3 opacity-30" />
                                <p>Sol taraftan bir hesaplayıcı seçin.</p>
                            </div>
                        ) : (
                            <div className="w-full max-w-sm mx-auto space-y-6">
                                <h3 className="text-xl font-bold text-white text-center mb-6 pb-4 border-b border-white/5">
                                    {RADIOLOGY_CALCULATORS.find(c => c.id === activeCalc)?.name}
                                </h3>

                                {/* 1. ADRENAL */}
                                {activeCalc === 'adrenal_washout' && (
                                    <>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Pre-Kontrast (Native) HU</label>
                                                <input type="number" onChange={(e) => handleCalcChange('pre', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 30" />
                                            </div>
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Venöz Faz (Portal) HU</label>
                                                <input type="number" onChange={(e) => handleCalcChange('ven', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 80" />
                                            </div>
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Geç Faz (15dk Delayed) HU</label>
                                                <input type="number" onChange={(e) => handleCalcChange('del', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 40" />
                                            </div>
                                        </div>
                                        <button onClick={calculateAdrenal} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20 active:scale-95">Hesapla</button>
                                    </>
                                )}

                                {/* 2. VOLUME (Thyoid/Prostate) */}
                                {(activeCalc === 'thyroid_volume' || activeCalc === 'prostate_volume') && (
                                    <>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-3 gap-3">
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">Boy (cm)</label>
                                                    <input type="number" onChange={(e) => handleCalcChange('l', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                                </div>
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">En (cm)</label>
                                                    <input type="number" onChange={(e) => handleCalcChange('w', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                                </div>
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">Yükseklik (cm)</label>
                                                    <input type="number" onChange={(e) => handleCalcChange('h', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={calculateVolume} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20">Hacim Hesapla</button>
                                    </>
                                )}

                                {/* 3. NASCET */}
                                {activeCalc === 'nascet_stenosis' && (
                                    <>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Distal Normal Lümen Çapı (mm)</label>
                                                <input type="number" onChange={(e) => handleCalcChange('distal', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                            </div>
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">En Dar Kısım Çapı (mm)</label>
                                                <input type="number" onChange={(e) => handleCalcChange('stenosis', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                            </div>
                                        </div>
                                        <button onClick={calculateNascet} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-900/20">Darlık Hesapla</button>
                                    </>
                                )}

                                {/* 4. RECIST */}
                                {activeCalc === 'recist' && (
                                    <>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Bazal Kısa Aks/Çap (mm)</label>
                                                <input type="number" onChange={(e) => handleCalcChange('baseline', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                            </div>
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Güncel Kısa Aks/Çap (mm)</label>
                                                <input type="number" onChange={(e) => handleCalcChange('current', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                            </div>
                                        </div>
                                        <button onClick={calculateRECIST} className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-rose-900/20">Yanıt Değerlendir</button>
                                    </>
                                )}

                                {/* 5. EGFR */}
                                {activeCalc === 'egfr_ckd_epi' && (
                                    <>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">Kreatinin (mg/dL)</label>
                                                    <input type="number" step="0.1" onChange={(e) => handleCalcChange('creat', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                                </div>
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">Yaş</label>
                                                    <input type="number" onChange={(e) => handleCalcChange('age', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" />
                                                </div>
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

                                {/* 6. ICH SCORE */}
                                {activeCalc === 'ich_score' && (
                                    <>
                                        <div className="space-y-4 text-sm">
                                            <div className="flex items-center justify-between">
                                                <span>GCS Skoru</span>
                                                <select className="bg-black/40 border border-zinc-700 rounded p-1 text-xs w-32" onChange={e => handleCalcChange('gcs', e.target.value)}>
                                                    <option value="15">13-15 (0 puan)</option>
                                                    <option value="12">5-12 (1 puan)</option>
                                                    <option value="3">3-4 (2 puan)</option>
                                                </select>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Kanama Hacmi</span>
                                                <select className="bg-black/40 border border-zinc-700 rounded p-1 text-xs w-32" onChange={e => handleCalcChange('volume', e.target.value)}>
                                                    <option value="10">&lt; 30 ml (0)</option>
                                                    <option value="40">≥ 30 ml (1)</option>
                                                </select>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Intraventriküler (IVH)</span>
                                                <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700">
                                                    <button onClick={() => handleCalcChange('ivh', '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.ivh !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button>
                                                    <button onClick={() => handleCalcChange('ivh', '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.ivh === 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Infratentoryal Yerleşim</span>
                                                <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700">
                                                    <button onClick={() => handleCalcChange('infratentorial', '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.infratentorial !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button>
                                                    <button onClick={() => handleCalcChange('infratentorial', '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.infratentorial === 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Yaş ≥ 80</span>
                                                <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700">
                                                    <button onClick={() => handleCalcChange('age', '70')} className={cn("px-2 py-0.5 rounded text-[10px]", (!calcValues.age || calcValues.age < 80) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button>
                                                    <button onClick={() => handleCalcChange('age', '85')} className={cn("px-2 py-0.5 rounded text-[10px]", (calcValues.age && calcValues.age >= 80) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={calculateICH} className="w-full py-3 bg-red-800 hover:bg-red-700 text-white rounded-xl font-bold transition-all mt-4 border border-red-500/30 shadow-lg shadow-red-900/20">Mortalite Hesapla</button>
                                    </>
                                )}

                                {/* 7. TI-RADS */}
                                {activeCalc === 'ti_rads' && (
                                    <>
                                        <div className="space-y-4 text-sm max-h-[300px] overflow-y-auto pr-1">
                                            {/* Composition */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase text-zinc-500 font-bold">Yapı (Composition)</label>
                                                <select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('composition', e.target.value)}>
                                                    <option value="0">Kistik / Tamamen Spongiform (0)</option>
                                                    <option value="0">Karışık Kistik/Solid (0)</option>
                                                    <option value="2">Solid veya neredeyse tamamen solid (+2)</option>
                                                </select>
                                            </div>
                                            {/* Echogenicity */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase text-zinc-500 font-bold">Ekojenite</label>
                                                <select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('echogenicity', e.target.value)}>
                                                    <option value="0">Anekoik (0)</option>
                                                    <option value="1">Hiperekoik / İzoekoik (+1)</option>
                                                    <option value="2">Hipoekoik (+2)</option>
                                                    <option value="3">Çok Hipoekoik (+3)</option>
                                                </select>
                                            </div>
                                            {/* Shape */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase text-zinc-500 font-bold">Şekil</label>
                                                <select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('shape', e.target.value)}>
                                                    <option value="0">Geniş (W ≥ T) (0)</option>
                                                    <option value="3">Uzun (Taller-than-wide) (+3)</option>
                                                </select>
                                            </div>
                                            {/* Margin */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase text-zinc-500 font-bold">Kenar</label>
                                                <select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('margin', e.target.value)}>
                                                    <option value="0">Düzgün / Belirsiz (0)</option>
                                                    <option value="2">Lobüle / Düzensiz (+2)</option>
                                                    <option value="3">Ekstratiroidal Yayılım (+3)</option>
                                                </select>
                                            </div>
                                            {/* Echogenic Foci */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase text-zinc-500 font-bold">Ekojenik Odak</label>
                                                <select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('echogenicfoci', e.target.value)}>
                                                    <option value="0">Yok (0)</option>
                                                    <option value="1">Makrokalsifikasyon (+1)</option>
                                                    <option value="2">Periferal (Rim) kalsifikasyon (+2)</option>
                                                    <option value="3">Punctate eksojenik odaklar (+3)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button onClick={calculateTIRADS} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all mt-2 border border-amber-500/30 shadow-lg shadow-amber-900/20">Risk Hesapla</button>
                                    </>
                                )}


                                {/* Result Display */}
                                {calcResult && (
                                    <div className="mt-6 p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-xl text-center animate-in zoom-in slide-in-from-bottom-2 duration-300 shadow-xl">
                                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-2">Sonuç</div>
                                        <div className="text-xl font-bold text-white mb-2">{calcResult.main}</div>
                                        {calcResult.detail && (
                                            <div className="text-sm text-cyan-400 font-medium whitespace-pre-wrap px-4 py-2 bg-cyan-950/30 rounded border border-cyan-500/20 inline-block min-w-[200px]">
                                                {calcResult.detail}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
