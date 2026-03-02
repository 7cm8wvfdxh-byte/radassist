import React, { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RADIOLOGICAL_SIGNS, RadiologicalSign } from '@/data/signs-data';

export function SignsTab() {
    const [signsSearch, setSignsSearch] = useState('');
    const [activeSign, setActiveSign] = useState<string | null>(null);

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

    return (
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
                        <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
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
    );
}
