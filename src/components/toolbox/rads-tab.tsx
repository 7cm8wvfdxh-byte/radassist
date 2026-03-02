import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { RADS_SYSTEMS, RadsSystem } from '@/data/rads-data';

const RADS_COLOR_MAP: Record<string, { badge: string; bar: string; text: string }> = {
    green: { badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', bar: 'bg-emerald-500', text: 'text-emerald-300' },
    yellow: { badge: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30', bar: 'bg-yellow-400', text: 'text-yellow-300' },
    orange: { badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30', bar: 'bg-orange-500', text: 'text-orange-300' },
    red: { badge: 'bg-red-500/15 text-red-300 border-red-500/30', bar: 'bg-red-500', text: 'text-red-300' },
    purple: { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30', bar: 'bg-purple-500', text: 'text-purple-300' },
    gray: { badge: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30', bar: 'bg-zinc-500', text: 'text-zinc-400' },
    blue: { badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30', bar: 'bg-blue-500', text: 'text-blue-300' },
};

export function RadsTab() {
    const [activeRads, setActiveRads] = useState<string>(RADS_SYSTEMS[0].id);

    return (
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
    );
}
