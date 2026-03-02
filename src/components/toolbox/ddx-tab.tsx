import React, { useState } from 'react';
import { Search, GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DDX_LIST } from '@/data/ddx-data';

export function DdxTab() {
    const [ddxSearch, setDdxSearch] = useState('');
    const [activeDdx, setActiveDdx] = useState<string | null>(null);

    const filteredDdx = DDX_LIST.filter(d =>
        d.finding.toLowerCase().includes(ddxSearch.toLowerCase()) ||
        d.organ.toLowerCase().includes(ddxSearch.toLowerCase()) ||
        d.modality.toLowerCase().includes(ddxSearch.toLowerCase())
    );

    return (
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
                        <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
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
    );
}
