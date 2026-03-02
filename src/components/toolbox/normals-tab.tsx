import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { RADIOLOGY_MEASUREMENTS, Measurement } from '@/data/toolbox-data';

export function NormalsTab() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMeasurements = RADIOLOGY_MEASUREMENTS.filter(m =>
        m.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.organ.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const groupedMeasurements = filteredMeasurements.reduce((acc, m) => {
        if (!acc[m.organ]) acc[m.organ] = [];
        acc[m.organ].push(m);
        return acc;
    }, {} as Record<string, Measurement[]>);

    return (
        <div className="max-w-3xl mx-auto w-full space-y-4">
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
            <div className="space-y-6">
                {Object.keys(groupedMeasurements).length === 0 ? (
                    <div className="text-center py-10 text-zinc-500">Sonuç bulunamadı.</div>
                ) : (
                    Object.entries(groupedMeasurements).map(([organ, items]) => (
                        <div key={organ} className="bg-zinc-900/40 rounded-2xl border border-white/5 overflow-hidden">
                            <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-bold text-zinc-400 uppercase tracking-widest">{organ}</div>
                            <div className="divide-y divide-white/5">
                                {items.map(item => (
                                    <div key={item.id} className="p-4 hover:bg-white/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <div>
                                            <h4 className="font-semibold text-zinc-200">{item.label}</h4>
                                            {item.note && <p className="text-xs text-zinc-500 italic mt-0.5">{item.note}</p>}
                                        </div>
                                        <div className="flex flex-col items-end gap-1 text-right">
                                            <div className="text-sm"><span className="text-zinc-500 text-xs mr-2">Normal:</span><span className="font-mono text-cyan-400 font-bold">{item.normalValues}</span></div>
                                            {item.pathologicalThreshold && <div className="text-sm"><span className="text-zinc-500 text-xs mr-2">Patolojik:</span><span className="font-mono text-red-400 font-bold">{item.pathologicalThreshold}</span></div>}
                                        </div>
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
