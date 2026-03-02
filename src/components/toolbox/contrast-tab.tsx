import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CONTRAST_AGENTS, CONTRAST_REACTIONS, PREMEDICATION_PROTOCOLS, EGFR_GUIDELINES, METFORMIN_RULES, NSF_INFO } from '@/data/contrast-data';

export function ContrastTab() {
    const [contrastTab, setContrastTab] = useState<'agents' | 'reactions' | 'premed' | 'egfr' | 'nsf'>('agents');

    return (
        <div className="max-w-4xl mx-auto w-full space-y-4">
            {/* Sub-tabs */}
            <div className="flex justify-center">
                <div className="bg-zinc-900/50 p-1 rounded-lg border border-white/5 flex gap-1 flex-wrap justify-center">
                    {(Object.entries({
                        agents: 'Ajanlar',
                        reactions: 'Reaksiyonlar',
                        premed: 'Premedikasyon',
                        egfr: 'eGFR & Metformin',
                        nsf: 'NSF'
                    }) as [typeof contrastTab, string][]).map(([key, label]) => (
                        <button key={key} onClick={() => setContrastTab(key)} className={cn("px-3 py-1.5 rounded text-xs font-bold transition-all", contrastTab === key ? "bg-blue-600 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5")}>{label}</button>
                    ))}
                </div>
            </div>

            {/* Agents */}
            {contrastTab === 'agents' && (
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
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
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
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
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    {PREMEDICATION_PROTOCOLS.map(p => (
                        <div key={p.id} className="bg-zinc-900/40 rounded-2xl border border-white/5 p-5">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-white text-lg">{p.name}</h4>
                                <span className={cn("text-[10px] px-2 py-0.5 rounded border font-semibold", p.type === 'elective' ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" : "bg-red-500/15 text-red-300 border-red-500/30")}>{p.type === 'elective' ? 'Elektif' : 'Acil'}</span>
                            </div>
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
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
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
                <div className="bg-zinc-900/40 rounded-2xl border border-white/5 p-5 space-y-4 animate-in fade-in zoom-in-95 duration-300">
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
    );
}
