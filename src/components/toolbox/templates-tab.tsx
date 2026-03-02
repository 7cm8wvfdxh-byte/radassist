import React, { useState } from 'react';
import { Search, FileText } from 'lucide-react';
import { REPORT_TEMPLATES, ReportTemplate } from '@/data/report-templates';
import { cn } from '@/lib/utils';

export function TemplatesTab() {
    const [templateSearch, setTemplateSearch] = useState('');
    const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
    const [copyFeedback, setCopyFeedback] = useState<'findings' | 'impression' | null>(null);

    const copyToClipboard = (text: string, type: 'findings' | 'impression') => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyFeedback(type);
            setTimeout(() => setCopyFeedback(null), 1800);
        });
    };

    const allTemplates = Object.values(REPORT_TEMPLATES);
    const filteredTemplates = allTemplates.filter(t =>
        t.label.toLowerCase().includes(templateSearch.toLowerCase()) ||
        t.organ.toLowerCase().includes(templateSearch.toLowerCase())
    );
    const groupedTemplates = filteredTemplates.reduce((acc, t) => {
        if (!acc[t.organ]) acc[t.organ] = [];
        acc[t.organ].push(t);
        return acc;
    }, {} as Record<string, ReportTemplate[]>);

    return (
        <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 flex flex-col gap-2 max-h-[620px]">
                <div className="relative flex-shrink-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                    <input type="text" placeholder="Şablon ara..." value={templateSearch} onChange={e => setTemplateSearch(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-xl py-2.5 pl-9 pr-3 text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-sky-500 transition-colors" />
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
                    {Object.keys(groupedTemplates).length === 0 ? (
                        <div className="text-center py-8 text-zinc-500 text-sm">Şablon bulunamadı.</div>
                    ) : (
                        Object.entries(groupedTemplates).map(([organ, tmpls]) => (
                            <div key={organ} className="space-y-1">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase px-2">{organ}</div>
                                {tmpls.map(t => (
                                    <button key={t.pathologyId} onClick={() => setActiveTemplate(t.pathologyId)} className={cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors", activeTemplate === t.pathologyId ? "bg-sky-500/20 text-sky-200" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200")}>
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="flex-1 bg-zinc-900/40 rounded-2xl border border-white/5 p-6 flex flex-col min-h-[400px]">
                {!activeTemplate ? (
                    <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                        <FileText className="w-12 h-12 mb-3 opacity-30" />
                        <p>Bir rapor şablonu seçin.</p>
                    </div>
                ) : (
                    (() => {
                        const t = REPORT_TEMPLATES[activeTemplate as keyof typeof REPORT_TEMPLATES];
                        if (!t) return null;
                        return (
                            <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white leading-tight">{t.label}</h3>
                                    <p className="text-sm text-sky-400/80 mt-1 uppercase tracking-widest font-semibold">{t.organ} / {t.technique}</p>
                                </div>
                                <div className="flex-1 space-y-6 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700 pb-4">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Bulgular (Findings)</span>
                                            <button onClick={() => copyToClipboard(t.findingsTemplate, 'findings')} className={cn("text-[10px] px-2 py-0.5 rounded border transition-all", copyFeedback === 'findings' ? "bg-sky-500/20 text-sky-300 border-sky-500/40" : "bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-sky-300 hover:border-sky-500/40")}>
                                                {copyFeedback === 'findings' ? "✓ Kopyalandı" : "Kopyala"}
                                            </button>
                                        </div>
                                        <div className="bg-zinc-950/60 border border-zinc-700/50 rounded-xl p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono">
                                            {t.findingsTemplate}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Sonuç / Yorum (Impression)</span>
                                            <button onClick={() => copyToClipboard(t.impressionTemplate, 'impression')} className={cn("text-[10px] px-2 py-0.5 rounded border transition-all", copyFeedback === 'impression' ? "bg-sky-500/20 text-sky-300 border-sky-500/40" : "bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-sky-300 hover:border-sky-500/40")}>
                                                {copyFeedback === 'impression' ? "✓ Kopyalandı" : "Kopyala"}
                                            </button>
                                        </div>
                                        <div className="bg-zinc-950/60 border border-zinc-700/50 rounded-xl p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono">
                                            {t.impressionTemplate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()
                )}
            </div>
        </div>
    );
}
