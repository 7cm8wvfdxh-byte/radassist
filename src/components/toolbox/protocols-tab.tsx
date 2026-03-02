import React, { useState } from 'react';
import { Search, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IMAGING_PROTOCOLS, ImagingProtocol } from '@/data/protocol-data';

export function ProtocolsTab() {
    const [protocolSearch, setProtocolSearch] = useState('');
    const [activeProtocol, setActiveProtocol] = useState<string | null>(null);

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

    return (
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
                        <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
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
                            {p.patientPrep && p.patientPrep.length > 0 && (
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
                            )}

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
    );
}
