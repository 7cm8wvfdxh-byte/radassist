import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { RADIOLOGY_CALCULATORS } from '@/data/toolbox-data';
import { cn } from '@/lib/utils';

export function CalculatorsTab() {
    const [activeCalc, setActiveCalc] = useState<string | null>(null);
    const [calcValues, setCalcValues] = useState<Record<string, number>>({});
    const [calcResult, setCalcResult] = useState<{ main: string; detail?: string } | null>(null);

    const handleCalcChange = (key: string, val: string) => {
        setCalcValues(prev => ({ ...prev, [key]: parseFloat(val) || 0 }));
        setCalcResult(null);
    };

    const calculateAdrenal = () => {
        const { pre, ven, del } = calcValues;
        if (pre === undefined || ven === undefined || del === undefined) return;
        const absoluteAPW = ((ven - del) / (ven - pre)) * 100;
        const relativeRPW = ((ven - del) / ven) * 100;
        setCalcResult({
            main: `APW: %${absoluteAPW.toFixed(1)} | RPW: %${relativeRPW.toFixed(1)}`,
            detail: absoluteAPW >= 60 || relativeRPW >= 40
                ? "Lipid-rich Adenom ile uyumlu. (Yüksek Olasılık)"
                : "Adenom dışı lezyon (Mets/Pheo/Ca) şüphesi. Washout yetersiz."
        });
    };

    const calculateVolume = () => {
        const { l, w, h } = calcValues;
        if (!l || !w || !h) return;
        setCalcResult({ main: `Volüm: ${(l * w * h * 0.52).toFixed(2)} cc (ml)` });
    };

    const calculateNascet = () => {
        const { distal, stenosis } = calcValues;
        if (!distal || !stenosis) return;
        if (stenosis > distal) { setCalcResult({ main: "Hata: Darlık çapı distalden büyük olamaz." }); return; }
        const pct = ((distal - stenosis) / distal) * 100;
        const grade = pct < 50 ? "Hafif Darlık (<%50)" : pct < 70 ? "Orta Derece Darlık (%50-69)" : "Ciddi Darlık (%70-99)";
        setCalcResult({ main: `%${pct.toFixed(1)} Stenoz (NASCET)`, detail: grade });
    };

    const calculateRECIST = () => {
        const { baseline, current } = calcValues;
        if (!baseline || !current) return;
        const change = ((current - baseline) / baseline) * 100;
        const response = current === 0 ? "Tam Yanıt (CR)" :
            change <= -30 ? "Kısmi Yanıt (PR)" :
                change >= 20 && (current - baseline) >= 5 ? "Progresif Hastalık (PD)" : "Stabil Hastalık (SD)";
        setCalcResult({ main: `%${change.toFixed(1)} Değişim`, detail: response });
    };

    const calculateEGFR = () => {
        const { creat, age, gender } = calcValues;
        if (!creat || !age) return;
        const k = gender === 1 ? 0.9 : 0.7;
        const a = gender === 1 ? -0.302 : -0.241;
        let egfr = 142 * Math.pow(Math.min(creat / k, 1), a) * Math.pow(Math.max(creat / k, 1), -1.200) * Math.pow(0.9938, age);
        if (gender === 0) egfr *= 1.012;
        const stage = egfr >= 90 ? "Evre 1 (Normal)" : egfr >= 60 ? "Evre 2 (Hafif)" : egfr >= 45 ? "Evre 3a (Hafif-Orta)" : egfr >= 30 ? "Evre 3b (Orta-Ciddi)" : egfr >= 15 ? "Evre 4 (Ciddi)" : "Evre 5 (Böbrek Yetmezliği)";
        const safety = egfr < 30 ? "🛑 IV Kontrast Riskli! Hidrasyon/Konsültasyon gerekir." : egfr < 45 ? "⚠️ IV Kontrast Dikkatli Kullanılmalı (Hidrasyon)." : "✅ IV Kontrast Güvenli.";
        setCalcResult({ main: `eGFR: ${egfr.toFixed(1)} ml/min/1.73m²`, detail: `${stage}\n${safety}` });
    };

    const calculateICH = () => {
        const { gcs, volume, ivh, infratentorial, age } = calcValues;
        let score = 0;
        if (gcs <= 4) score += 2; else if (gcs <= 12) score += 1;
        if (volume >= 30) score += 1;
        if (ivh === 1) score += 1;
        if (infratentorial === 1) score += 1;
        if (age >= 80) score += 1;
        const mortalityMap: Record<number, string> = { 0: "0%", 1: "%13", 2: "%26", 3: "%72", 4: "%97", 5: "%100", 6: "%100" };
        setCalcResult({ main: `ICH Skoru: ${score}`, detail: `Tahmini 30 Günlük Mortalite: ${mortalityMap[score] ?? "%100"}` });
    };

    const calculateTIRADS = () => {
        const { composition, echogenicity, shape, margin, echogenicfoci } = calcValues;
        const total = (composition || 0) + (echogenicity || 0) + (shape || 0) + (margin || 0) + (echogenicfoci || 0);
        const tr = total === 0 ? "TR1 (Benign)" : total < 3 ? "TR2 (Şüpheli Değil)" : total < 4 ? "TR3 (Hafif Şüpheli)" : total < 7 ? "TR4 (Orta Şüpheli)" : "TR5 (Yüksek Şüpheli)";
        const rec = total === 0 ? "İİAB gerekmez." : total < 3 ? "İİAB gerekmez." : total < 4 ? "≥2.5cm ise İİAB, ≥1.5cm ise Takip." : total < 7 ? "≥1.5cm ise İİAB, ≥1cm ise Takip." : "≥1cm ise İİAB, ≥0.5cm ise Takip.";
        setCalcResult({ main: `${tr} (Puan: ${total})`, detail: rec });
    };

    const calculateEvansIndex = () => {
        const { frontal_horn, inner_table } = calcValues;
        if (!frontal_horn || !inner_table) return;
        const ei = frontal_horn / inner_table;
        const grade = ei >= 0.37 ? "Ventriküler Dilatasyon (Hidrosefali şüphesi)" : ei >= 0.30 ? "Sınırda (Takip önerilir)" : "Normal";
        setCalcResult({ main: `Evans Index: ${ei.toFixed(3)}`, detail: `${grade}\n(N: < 0.30 | Şüpheli: 0.30-0.36 | Hidrosefali: ≥ 0.37)` });
    };

    const calculateDeRitis = () => {
        const { ast, alt } = calcValues;
        if (!ast || !alt) return;
        const ratio = ast / alt;
        const interp = ratio > 2 ? "Alkolik Hepatit düşündürür (>2)" : ratio > 1 ? "Siroz / Hepatoselüler hastalık" : ratio < 1 ? "Akut Viral Hepatit düşündürür (<1)" : "Normal sınır";
        setCalcResult({ main: `De Ritis Oranı: ${ratio.toFixed(2)}`, detail: interp });
    };

    const calculateMELD = () => {
        const { bili, inr_val, creat } = calcValues;
        if (!bili || !inr_val || !creat) return;
        const b = Math.max(bili, 1);
        const i = Math.max(inr_val, 1);
        const c = Math.max(Math.min(creat, 4), 1);
        const meld = Math.round(3.78 * Math.log(b) + 11.2 * Math.log(i) + 9.57 * Math.log(c) + 6.43);
        const mort = meld < 10 ? "<%2 (3 aylık mortalite)" : meld < 20 ? "%6–12" : meld < 30 ? "%20–25" : meld < 40 ? "%50" : ">%70";
        setCalcResult({ main: `MELD Skoru: ${meld}`, detail: `Tahmini 3 Aylık Mortalite: ${mort}` });
    };

    const calculateChildPugh = () => {
        const { bili_cp, alb, pt_cp, ascites, encep } = calcValues;
        const total = (bili_cp || 0) + (alb || 0) + (pt_cp || 0) + (ascites || 0) + (encep || 0);
        const cls = total <= 6 ? "Child A (İyi kompanze, operatif risk düşük)" : total <= 9 ? "Child B (Orta dereceli, karaciğer yetmezliği var)" : "Child C (Dekompanze siroz, yüksek operatif risk)";
        const surv = total <= 6 ? "1 yıllık sürvi: ~%100, 2 yıl: ~%85" : total <= 9 ? "1 yıl: ~%80, 2 yıl: ~%60" : "1 yıl: ~%45, 2 yıl: ~%35";
        setCalcResult({ main: `Child-Pugh ${total <= 6 ? 'A' : total <= 9 ? 'B' : 'C'} (${total} puan)`, detail: `${cls}\n${surv}` });
    };

    const calculateASPECTS = () => {
        // ASPECTS: 10 points, each checked region subtracts 1
        const regions = ['c', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'ic', 'l', 'i'];
        let score = 10;
        regions.forEach(r => { if (calcValues[r] === 1) score -= 1; });
        const rec = score >= 8 ? "Trombektomi için uygun (ASPECTS ≥ 8)" : score >= 6 ? "Seçilmiş hastalarda trombektomi — klinik değerlendirme" : "Geniş enfarkt (ASPECTS < 6) — yüksek hemorajik risk, dikkatli değerlendirin";
        setCalcResult({ main: `ASPECTS: ${score}/10`, detail: rec });
    };

    const calculateWellsPE = () => {
        const { dvt_sign, alt_diag, hr, immob, prev_dvtpe, hemoptysis, malign } = calcValues;
        const total = (dvt_sign || 0) + (alt_diag || 0) + (hr || 0) + (immob || 0) + (prev_dvtpe || 0) + (hemoptysis || 0) + (malign || 0);
        const prob = total <= 1 ? "Düşük Olasılık (<2) — D-Dimer ile dışla" : total <= 6 ? "Orta Olasılık (2-6) — D-Dimer veya BTPA" : "Yüksek Olasılık (>6) — Direkt BTPA önerilir";
        setCalcResult({ main: `Wells Skoru: ${total}`, detail: prob });
    };

    return (
        <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700">
                {RADIOLOGY_CALCULATORS.map(c => (
                    <button key={c.id} onClick={() => { setActiveCalc(c.id); setCalcResult(null); setCalcValues({}); }} className={cn("w-full text-left p-3 rounded-xl border transition-all text-sm", activeCalc === c.id ? "bg-purple-500/20 border-purple-500 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)]" : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800")}>
                        <div className="font-semibold">{c.name}</div>
                        <div className="text-[10px] opacity-60 truncate">{c.description}</div>
                    </button>
                ))}
            </div>
            <div className="flex-1 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 flex flex-col min-h-[300px] md:min-h-[400px]">
                {!activeCalc ? (
                    <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                        <Activity className="w-12 h-12 mb-3 opacity-30" />
                        <p>Sol taraftan bir hesaplayıcı seçin.</p>
                    </div>
                ) : (
                    <div className="w-full max-w-sm mx-auto space-y-6">
                        <h3 className="text-xl font-bold text-white text-center mb-6 pb-4 border-b border-white/5">{RADIOLOGY_CALCULATORS.find(c => c.id === activeCalc)?.name}</h3>

                        {activeCalc === 'adrenal_washout' && (
                            <>
                                <div className="space-y-4">
                                    <div><label className="text-xs text-zinc-400 block mb-1">Pre-Kontrast (Native) HU</label><input type="number" onChange={(e) => handleCalcChange('pre', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 30" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">Venöz Faz (Portal) HU</label><input type="number" onChange={(e) => handleCalcChange('ven', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 80" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">Geç Faz (15dk Delayed) HU</label><input type="number" onChange={(e) => handleCalcChange('del', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 40" /></div>
                                </div>
                                <button onClick={calculateAdrenal} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20 active:scale-95">Hesapla</button>
                            </>
                        )}

                        {(activeCalc === 'thyroid_volume' || activeCalc === 'prostate_volume') && (
                            <>
                                <div className="grid grid-cols-3 gap-3">
                                    <div><label className="text-xs text-zinc-400 block mb-1">Boy (cm)</label><input type="number" onChange={(e) => handleCalcChange('l', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">En (cm)</label><input type="number" onChange={(e) => handleCalcChange('w', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">Yükseklik (cm)</label><input type="number" onChange={(e) => handleCalcChange('h', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                </div>
                                <button onClick={calculateVolume} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20">Hacim Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'nascet_stenosis' && (
                            <>
                                <div className="space-y-4">
                                    <div><label className="text-xs text-zinc-400 block mb-1">Distal Normal Lümen Çapı (mm)</label><input type="number" onChange={(e) => handleCalcChange('distal', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">En Dar Kısım Çapı (mm)</label><input type="number" onChange={(e) => handleCalcChange('stenosis', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                </div>
                                <button onClick={calculateNascet} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-900/20">Darlık Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'recist' && (
                            <>
                                <div className="space-y-4">
                                    <div><label className="text-xs text-zinc-400 block mb-1">Bazal Kısa Aks/Çap (mm)</label><input type="number" onChange={(e) => handleCalcChange('baseline', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">Güncel Kısa Aks/Çap (mm)</label><input type="number" onChange={(e) => handleCalcChange('current', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                </div>
                                <button onClick={calculateRECIST} className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-rose-900/20">Yanıt Değerlendir</button>
                            </>
                        )}

                        {activeCalc === 'egfr_ckd_epi' && (
                            <>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div><label className="text-xs text-zinc-400 block mb-1">Kreatinin (mg/dL)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('creat', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                        <div><label className="text-xs text-zinc-400 block mb-1">Yaş</label><input type="number" onChange={(e) => handleCalcChange('age', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" /></div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-zinc-400 block mb-2">Cinsiyet</label>
                                        <div className="flex bg-black/40 p-1 rounded-lg border border-zinc-700">
                                            <button onClick={() => handleCalcChange('gender', '0')} className={cn("flex-1 py-1.5 rounded text-xs font-bold transition-colors", calcValues.gender === 0 ? "bg-zinc-700 text-white" : "text-zinc-500")}>Kadın</button>
                                            <button onClick={() => handleCalcChange('gender', '1')} className={cn("flex-1 py-1.5 rounded text-xs font-bold transition-colors", calcValues.gender === 1 ? "bg-zinc-700 text-white" : "text-zinc-500")}>Erkek</button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={calculateEGFR} className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20">eGFR Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'ich_score' && (
                            <>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-center justify-between"><span>GCS Skoru</span><select className="bg-black/40 border border-zinc-700 rounded p-1 text-xs w-32" onChange={e => handleCalcChange('gcs', e.target.value)}><option value="15">13-15 (0 puan)</option><option value="12">5-12 (1 puan)</option><option value="3">3-4 (2 puan)</option></select></div>
                                    <div className="flex items-center justify-between"><span>Kanama Hacmi</span><select className="bg-black/40 border border-zinc-700 rounded p-1 text-xs w-32" onChange={e => handleCalcChange('volume', e.target.value)}><option value="10">&lt; 30 ml (0)</option><option value="40">≥ 30 ml (1)</option></select></div>
                                    <div className="flex items-center justify-between"><span>Intraventriküler (IVH)</span><div className="flex bg-black/40 p-0.5 rounded border border-zinc-700"><button onClick={() => handleCalcChange('ivh', '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.ivh !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button><button onClick={() => handleCalcChange('ivh', '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.ivh === 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button></div></div>
                                    <div className="flex items-center justify-between"><span>Infratentoryal Yerleşim</span><div className="flex bg-black/40 p-0.5 rounded border border-zinc-700"><button onClick={() => handleCalcChange('infratentorial', '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.infratentorial !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button><button onClick={() => handleCalcChange('infratentorial', '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues.infratentorial === 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button></div></div>
                                    <div className="flex items-center justify-between"><span>Yaş ≥ 80</span><div className="flex bg-black/40 p-0.5 rounded border border-zinc-700"><button onClick={() => handleCalcChange('age', '70')} className={cn("px-2 py-0.5 rounded text-[10px]", (!calcValues.age || calcValues.age < 80) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button><button onClick={() => handleCalcChange('age', '85')} className={cn("px-2 py-0.5 rounded text-[10px]", (calcValues.age && calcValues.age >= 80) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Evet (+1)</button></div></div>
                                </div>
                                <button onClick={calculateICH} className="w-full py-3 bg-red-800 hover:bg-red-700 text-white rounded-xl font-bold transition-all mt-4 border border-red-500/30 shadow-lg shadow-red-900/20">Mortalite Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'ti_rads' && (
                            <>
                                <div className="space-y-4 text-sm max-h-[300px] overflow-y-auto pr-1">
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Yapı (Composition)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('composition', e.target.value)}><option value="0">Kistik / Tamamen Spongiform (0)</option><option value="0">Karışık Kistik/Solid (0)</option><option value="2">Solid veya neredeyse tamamen solid (+2)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Ekojenite</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('echogenicity', e.target.value)}><option value="0">Anekoik (0)</option><option value="1">Hiperekoik / İzoekoik (+1)</option><option value="2">Hipoekoik (+2)</option><option value="3">Çok Hipoekoik (+3)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Şekil</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('shape', e.target.value)}><option value="0">Geniş (W ≥ T) (0)</option><option value="3">Uzun (Taller-than-wide) (+3)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Kenar</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('margin', e.target.value)}><option value="0">Düzgün / Belirsiz (0)</option><option value="2">Lobüle / Düzensiz (+2)</option><option value="3">Ekstratiroidal Yayılım (+3)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Ekojenik Odak</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('echogenicfoci', e.target.value)}><option value="0">Yok (0)</option><option value="1">Makrokalsifikasyon (+1)</option><option value="2">Periferal (Rim) kalsifikasyon (+2)</option><option value="3">Punctate eksojenik odaklar (+3)</option></select></div>
                                </div>
                                <button onClick={calculateTIRADS} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all mt-2 border border-amber-500/30 shadow-lg shadow-amber-900/20">Risk Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'evans_index' && (
                            <>
                                <div className="space-y-4">
                                    <div><label className="text-xs text-zinc-400 block mb-1">Frontal Boynuz Çapı (mm) — İki tarafın toplamı</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('frontal_horn', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 44.0" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">Maksimum İç Kranial Çap (mm)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('inner_table', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="Örn: 135.0" /></div>
                                </div>
                                <button onClick={calculateEvansIndex} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20">Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'de_ritis_ratio' && (
                            <>
                                <div className="space-y-4">
                                    <div><label className="text-xs text-zinc-400 block mb-1">AST (U/L)</label><input type="number" onChange={(e) => handleCalcChange('ast', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 85" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">ALT (U/L)</label><input type="number" onChange={(e) => handleCalcChange('alt', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 40" /></div>
                                </div>
                                <button onClick={calculateDeRitis} className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-all shadow-lg">Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'meld_score' && (
                            <>
                                <div className="space-y-4">
                                    <div><label className="text-xs text-zinc-400 block mb-1">Total Bilirubin (mg/dL)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('bili', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 2.4" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">INR</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('inr_val', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 1.8" /></div>
                                    <div><label className="text-xs text-zinc-400 block mb-1">Kreatinin (mg/dL)</label><input type="number" step="0.1" onChange={(e) => handleCalcChange('creat', e.target.value)} className="w-full bg-black/40 border border-zinc-700 rounded-lg p-3 text-white" placeholder="Örn: 1.2" /></div>
                                </div>
                                <button onClick={calculateMELD} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all shadow-lg">MELD Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'child_pugh' && (
                            <>
                                <div className="space-y-3 text-sm">
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Bilirubin (mg/dL)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('bili_cp', e.target.value)}><option value="1">&lt;2 mg/dL (+1)</option><option value="2">2-3 mg/dL (+2)</option><option value="3">&gt;3 mg/dL (+3)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Albümin (g/dL)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('alb', e.target.value)}><option value="1">&gt;3.5 g/dL (+1)</option><option value="2">2.8–3.5 g/dL (+2)</option><option value="3">&lt;2.8 g/dL (+3)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">PT (saniye uzama)</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('pt_cp', e.target.value)}><option value="1">&lt;4 sn (+1)</option><option value="2">4-6 sn (+2)</option><option value="3">&gt;6 sn (+3)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Asit</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('ascites', e.target.value)}><option value="1">Yok (+1)</option><option value="2">Hafif-Orta (+2)</option><option value="3">Belirgin (+3)</option></select></div>
                                    <div className="space-y-1"><label className="text-[10px] uppercase text-zinc-500 font-bold">Ensefalopati</label><select className="w-full bg-black/40 border border-zinc-700 rounded p-2 text-xs" onChange={e => handleCalcChange('encep', e.target.value)}><option value="1">Yok (+1)</option><option value="2">Grad 1-2 (+2)</option><option value="3">Grad 3-4 (+3)</option></select></div>
                                </div>
                                <button onClick={calculateChildPugh} className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all mt-2 shadow-lg">Skor Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'aspects_score' && (
                            <>
                                <div className="space-y-3 text-sm max-h-[300px] overflow-y-auto pr-1">
                                    <p className="text-xs text-zinc-500 italic">Her bölge: normal=0 puan, iskemi=−1 puan. Toplam 10 üzerinden.</p>
                                    <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                                        <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Bazal Ganglia Düzeyi</p>
                                        {[['c', 'Kaudat (C)'], ['l', 'Lentiküler (L)'], ['i', 'İnsüla (I)'], ['ic', 'İnternal kapsül (IC)']].map(([key, label]) => (
                                            <div key={key} className="flex items-center justify-between py-1">
                                                <span>{label}</span>
                                                <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700">
                                                    <button onClick={() => handleCalcChange(key, '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Normal</button>
                                                    <button onClick={() => handleCalcChange(key, '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] === 1 ? "bg-red-600 text-white" : "text-zinc-500")}>İskemi (−1)</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                                        <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">MCA Korteks Düzeyi</p>
                                        {[['m1', 'M1 (Ant MCA)'], ['m2', 'M2 (Ant Temporal)'], ['m3', 'M3 (Post Temporal)'], ['m4', 'M4 (Ant Sup)'], ['m5', 'M5 (Lat Sup)'], ['m6', 'M6 (Post Sup)']].map(([key, label]) => (
                                            <div key={key} className="flex items-center justify-between py-1">
                                                <span>{label}</span>
                                                <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700">
                                                    <button onClick={() => handleCalcChange(key, '0')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] !== 1 ? "bg-zinc-600 text-white" : "text-zinc-500")}>Normal</button>
                                                    <button onClick={() => handleCalcChange(key, '1')} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] === 1 ? "bg-red-600 text-white" : "text-zinc-500")}>İskemi (−1)</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={calculateASPECTS} className="w-full py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl font-bold transition-all mt-2 shadow-lg">ASPECTS Hesapla</button>
                            </>
                        )}

                        {activeCalc === 'wells_pe' && (
                            <>
                                <div className="space-y-3 text-sm">
                                    {[
                                        { key: 'dvt_sign', label: 'DVT klinik bulguları', pts: 3 },
                                        { key: 'alt_diag', label: 'PE en olası tanı', pts: 3 },
                                        { key: 'hr', label: 'Kalp hızı > 100/dk', pts: 1.5 },
                                        { key: 'immob', label: 'İmmobilizasyon / Operasyon (son 4 hafta)', pts: 1.5 },
                                        { key: 'prev_dvtpe', label: 'Daha önce DVT veya PE', pts: 1.5 },
                                        { key: 'hemoptysis', label: 'Hemoptizi', pts: 1 },
                                        { key: 'malign', label: 'Aktif malignite (tedavi altında)', pts: 1 },
                                    ].map(({ key, label, pts }) => (
                                        <div key={key} className="flex items-center justify-between">
                                            <span className="text-xs pr-2">{label}</span>
                                            <div className="flex bg-black/40 p-0.5 rounded border border-zinc-700 flex-shrink-0">
                                                <button onClick={() => handleCalcChange(key, '0')} className={cn("px-2 py-0.5 rounded text-[10px]", (!calcValues[key] || calcValues[key] === 0) ? "bg-zinc-600 text-white" : "text-zinc-500")}>Hayır</button>
                                                <button onClick={() => handleCalcChange(key, String(pts))} className={cn("px-2 py-0.5 rounded text-[10px]", calcValues[key] === pts ? "bg-blue-600 text-white" : "text-zinc-500")}>Evet (+{pts})</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={calculateWellsPE} className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-xl font-bold transition-all mt-4 shadow-lg">Skor Hesapla</button>
                            </>
                        )}

                        {calcResult && (
                            <div className="mt-6 p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-xl text-center animate-in zoom-in slide-in-from-bottom-2 duration-300 shadow-xl">
                                <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-2">Sonuç</div>
                                <div className="text-xl font-bold text-white mb-2">{calcResult.main}</div>
                                {calcResult.detail && <div className="text-sm text-cyan-400 font-medium whitespace-pre-wrap px-4 py-2 bg-cyan-950/30 rounded border border-cyan-500/20 inline-block min-w-[200px]">{calcResult.detail}</div>}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
