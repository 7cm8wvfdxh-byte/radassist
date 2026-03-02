import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RADIOLOGY_GLOSSARY, GlossaryEntry } from '@/data/glossary-data';

export function GlossaryTab() {
    const [glossarySearch, setGlossarySearch] = useState('');

    const filteredGlossary = RADIOLOGY_GLOSSARY.filter(g =>
        g.abbreviation.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        g.fullForm.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        g.turkishMeaning.toLowerCase().includes(glossarySearch.toLowerCase())
    );
    const groupedGlossary = filteredGlossary.reduce((acc, g) => {
        if (!acc[g.category]) acc[g.category] = [];
        acc[g.category].push(g);
        return acc;
    }, {} as Record<string, GlossaryEntry[]>);

    return (
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
    );
}
