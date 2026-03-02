import React, { useState } from 'react';
import { Search, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IMAGING_ARTIFACTS, ImagingArtifact } from '@/data/artifacts-data';

export function ArtifactsTab() {
    const [artifactSearch, setArtifactSearch] = useState('');
    const [activeArtifact, setActiveArtifact] = useState<string | null>(null);

    const filteredArtifacts = IMAGING_ARTIFACTS.filter(a =>
        a.name.toLowerCase().includes(artifactSearch.toLowerCase()) ||
        a.turkishName.toLowerCase().includes(artifactSearch.toLowerCase()) ||
        a.modality.toLowerCase().includes(artifactSearch.toLowerCase())
    );
    const groupedArtifacts = filteredArtifacts.reduce((acc, a) => {
        if (!acc[a.category]) acc[a.category] = [];
        acc[a.category].push(a);
        return acc;
    }, {} as Record<string, ImagingArtifact[]>);

    return (
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
                        <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
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
    );
}
