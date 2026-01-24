import React, { useState } from 'react';
import { Ruler, Calculator, Search, ChevronRight, Activity, Percent, ArrowRight, Check } from 'lucide-react';
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


    // Calculator State (Generic container for all inputs)
    const [calcValues, setCalcValues] = useState<Record<string, number>>({});
    const [calcResult, setCalcResult] = useState<string | null>(null);

    const handleCalcChange = (key: string, val: string) => {
        setCalcValues(prev => ({ ...prev, [key]: parseFloat(val) || 0 }));
        setCalcResult(null); // Reset result on change
    };

    const calculateAdrenal = () => {
        const { pre, ven, del } = calcValues;
        if (pre === undefined || ven === undefined || del === undefined) return;

        const absoluteAPW = ((ven - del) / (ven - pre)) * 100;
        const relativeRPW = ((ven - del) / ven) * 100;

        let res = `APW: %${absoluteAPW.toFixed(1)} | RPW: %${relativeRPW.toFixed(1)}`;
        if (absoluteAPW >= 60 || relativeRPW >= 40) {
            res += " -> Lipid-rich Adenom ile uyumlu.";
        } else {
            res += " -> Adenom dışı lezyon (Mets/Pheo) düşün.";
        }
        setCalcResult(res);
    };

    const calculateVolume = () => {
        const { l, w, h } = calcValues;
        if (!l || !w || !h) return;
        const vol = l * w * h * 0.52;
        setCalcResult(`Volüm: ${vol.toFixed(2)} cc (ml)`);
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
                        <Calculator className="w-4 h-4" />
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
                                                    <div className="text-sm">
                                                        <span className="text-zinc-500 text-xs mr-2">Patolojik:</span>
                                                        <span className="font-mono text-red-400 font-bold">{item.pathologicalThreshold}</span>
                                                    </div>
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
                    <div className="w-1/3 space-y-2">
                        {RADIOLOGY_CALCULATORS.map(c => (
                            <button
                                key={c.id}
                                onClick={() => { setActiveCalc(c.id); setCalcResult(null); setCalcValues({}); }}
                                className={cn(
                                    "w-full text-left p-3 rounded-xl border transition-all text-sm",
                                    activeCalc === c.id
                                        ? "bg-purple-500/20 border-purple-500 text-purple-200"
                                        : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                                )}
                            >
                                <div className="font-semibold">{c.name}</div>
                                <div className="text-[10px] opacity-60 truncate">{c.description}</div>
                            </button>
                        ))}
                    </div>

                    {/* Active Calc Workspace */}
                    <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-center items-center min-h-[300px]">
                        {!activeCalc ? (
                            <div className="text-zinc-600 text-center">
                                <Activity className="w-12 h-12 mx-auto mb-3 opacity-30" />
                                <p>Sol taraftan bir hesaplayıcı seçin.</p>
                            </div>
                        ) : (
                            <div className="w-full max-w-sm space-y-6">
                                <h3 className="text-xl font-bold text-white text-center mb-6">
                                    {RADIOLOGY_CALCULATORS.find(c => c.id === activeCalc)?.name}
                                </h3>

                                {/* Adrenal Inputs */}
                                {activeCalc === 'adrenal_washout' && (
                                    <>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Pre-Kontrast (Native) HU</label>
                                                <input type="number" onChange={(e) => handleCalcChange('pre', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-2 text-white" />
                                            </div>
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Venöz Faz (Portal) HU</label>
                                                <input type="number" onChange={(e) => handleCalcChange('ven', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-2 text-white" />
                                            </div>
                                            <div>
                                                <label className="text-xs text-zinc-400 block mb-1">Geç Faz (15dk Delayed) HU</label>
                                                <input type="number" onChange={(e) => handleCalcChange('del', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-2 text-white" />
                                            </div>
                                        </div>
                                        <button onClick={calculateAdrenal} className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold transition-colors">Hesapla</button>
                                    </>
                                )}

                                {/* Generic Volume Inputs */}
                                {(activeCalc === 'thyroid_volume' || activeCalc === 'prostate_volume') && (
                                    <>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-2">
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">Boy (cm)</label>
                                                    <input type="number" onChange={(e) => handleCalcChange('l', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-2 text-white" />
                                                </div>
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">En (cm)</label>
                                                    <input type="number" onChange={(e) => handleCalcChange('w', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-2 text-white" />
                                                </div>
                                                <div>
                                                    <label className="text-xs text-zinc-400 block mb-1">Yükseklik (cm)</label>
                                                    <input type="number" onChange={(e) => handleCalcChange('h', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-2 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={calculateVolume} className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold transition-colors">Hacim Hesapla</button>
                                    </>
                                )}

                                {/* Result Display */}
                                {calcResult && (
                                    <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center animate-in zoom-in spin-in-1 duration-300">
                                        <div className="text-sm text-purple-300 font-bold mb-1">SONUÇ</div>
                                        <div className="text-lg font-mono text-white">{calcResult}</div>
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
