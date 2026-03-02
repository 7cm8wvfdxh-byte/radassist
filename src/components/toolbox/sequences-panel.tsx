import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MR_SEQUENCES, MR_SEQUENCE_CATEGORIES, HEMORRHAGE_STAGES } from '@/data/sequences-data';

export function SequencesPanel() {
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
        rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30' }
    };

    const catColorMap: Record<string, string> = {
        'blue': 'bg-blue-600 text-white',
        'green': 'bg-emerald-600 text-white',
        'sky': 'bg-sky-600 text-white',
        'indigo': 'bg-indigo-600 text-white',
        'orange': 'bg-orange-600 text-white',
        'red': 'bg-red-600 text-white',
        'violet': 'bg-violet-600 text-white',
        'emerald': 'bg-emerald-600 text-white',
        'rose': 'bg-rose-600 text-white'
    };

    return (
        <div className="max-w-4xl mx-auto w-full space-y-4 animate-in fade-in zoom-in-95 duration-300">
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
                <div className="bg-zinc-900/60 rounded-2xl border border-red-500/20 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
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
                                    <div className="px-4 pb-5 space-y-4 border-t border-white/5 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
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
