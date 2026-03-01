'use client';

import { useState } from 'react';
import { AlertTriangle, Phone, Clock, Zap, ChevronDown, ChevronUp, Copy, Check, Siren, Brain, Bone, Wind, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmergencyCase {
    id: string;
    title: string;
    organ: string;
    icon: React.ReactNode;
    color: string;
    urgency: 'Acil' | 'Yarı-Acil' | 'Kritik';
    timeWindow: string;
    redFlags: string[];
    imagingProtocol: string;
    criticalFindings: string[];
    reportTemplate: string;
    notifyTemplate: string;
    differentialDiagnosis: string[];
    management: string;
}

const EMERGENCY_CASES: EmergencyCase[] = [
    {
        id: 'acute_stroke',
        title: 'Akut İskemik İnme',
        organ: 'Beyin',
        icon: <Brain className="w-5 h-5" />,
        color: 'red',
        urgency: 'Kritik',
        timeWindow: '< 4.5 saat (IV tPA) / < 24 saat (Trombektomi)',
        redFlags: [
            'Ani başlayan hemiparezi/hemipleji',
            'Konuşma bozukluğu (afazi/dizartri)',
            'Yüz felci (asimetri)',
            'Bilinç değişikliği',
            'NIHSS skoru yüksek',
        ],
        imagingProtocol: 'Acil kontrastsız BT (kanama dışlama) → DWI MR → BT/MR Anjiyografi (büyük damar tıkanıklığı) → BT Perfüzyon (penumbra değerlendirmesi)',
        criticalFindings: [
            'Hiperdens MCA işareti (erken BT)',
            'DWI pozitif difüzyon kısıtlılığı',
            'ADC düşüklüğü (sitotoksik ödem)',
            'Büyük damar oklüzyonu (BTA/MRA)',
            'Penumbra/core uyumsuzluğu (mismatch)',
        ],
        reportTemplate: 'DWI serilerde [lokalizasyon] bölgesinde difüzyon kısıtlılığı izlenmiştir. ADC haritasında karşılık gelen hipointensite saptanmıştır. Büyük damar oklüzyonu açısından BT/MR Anjiyografi önerilir. SONUÇ: Akut iskemik enfarkt ile uyumlu bulgular.',
        notifyTemplate: 'KRİTİK BULGU BİLDİRİMİ: Akut iskemik inme bulguları saptanmıştır. Trombolitik/trombektomi penceresi açıktır. ACİL NÖROLOJİ KONSÜLTASYONU GEREKLİDİR.',
        differentialDiagnosis: ['Hemorajik inme', 'Todd paralizisi (post-iktal)', 'Hipoglisemi', 'Beyin absesi', 'Tümör (GBM)'],
        management: 'Kanama dışlanınca → IV tPA (4.5 saat) ve/veya mekanik trombektomi (24 saat, LVO). ASPECTS skoru ve penumbra değerlendirmesi.',
    },
    {
        id: 'intracranial_hemorrhage',
        title: 'İntrakraniyal Kanama',
        organ: 'Beyin',
        icon: <Brain className="w-5 h-5" />,
        color: 'red',
        urgency: 'Kritik',
        timeWindow: 'Dakikalar içinde değerlendirme',
        redFlags: [
            'Şiddetli baş ağrısı ("hayatımın en kötü ağrısı")',
            'Bilinç kaybı / GCS düşüklüğü',
            'Kusma, ense sertliği',
            'Antikoagülan kullanımı',
            'Pupil asimetrisi (ünkal herniasyon)',
        ],
        imagingProtocol: 'Acil kontrastsız BT → SAK ise: BT Anjiyografi (anevrizma) → DSA (cerrahi planlama)',
        criticalFindings: [
            'İntraparankimal hiperdens hemoraji',
            'Subaraknoid hiperdensite (bazal sisternalar)',
            'Subdural / Epidural koleksiyon',
            'Orta hat şifti > 5mm',
            'Herniasyon bulguları',
        ],
        reportTemplate: '[Lokalizasyon] bölgesinde akut hemoraji ile uyumlu hiperdens alan izlenmiştir. Hematom boyutu: [X]x[Y] cm. Orta hat şifti: [Z] mm. SONUÇ: Akut intrakraniyal kanama. Acil Nöroşirürji konsültasyonu önerilir.',
        notifyTemplate: 'KRİTİK BULGU: Akut intrakraniyal kanama saptanmıştır. Orta hat şifti [var/yok]. ACİL NÖROŞİRÜRJİ KONSÜLTASYONU.',
        differentialDiagnosis: ['Hipertansif kanama', 'Anevrizma rüptürü (SAK)', 'AVM kanaması', 'Travmatik hemoraji', 'Koagülopati'],
        management: 'ABC stabilizasyonu, GCS takibi, İKB yönetimi. SAK → Anevrizma tedavisi (coiling/clipping). Parankimal → Cerrahi vs konservatif.',
    },
    {
        id: 'pulmonary_embolism',
        title: 'Pulmoner Emboli (PE)',
        organ: 'Akciğer',
        icon: <Wind className="w-5 h-5" />,
        color: 'red',
        urgency: 'Kritik',
        timeWindow: 'Saatler içinde antikoagülasyon/tromboliz',
        redFlags: [
            'Ani başlayan nefes darlığı / göğüs ağrısı',
            'Taşikardi, hipotansiyon',
            'D-dimer yüksekliği',
            'Derin ven trombozu öyküsü/bulguları',
            'İmmobilizasyon, post-op, kanser öyküsü',
        ],
        imagingProtocol: 'Pulmoner BT Anjiyografi (PBTA) — altın standart → Sağ kalp yüklenmesi değerlendirmesi → Alt ekstremite Doppler USG',
        criticalFindings: [
            'Pulmoner arter dallarında dolum defekti (trombüs)',
            'RV/LV oranı > 1.0 (sağ kalp yüklenmesi)',
            'İnterventriküler septum düzleşmesi (D-sign)',
            'Kama şekilli plevral opaksite (Hampton Hump)',
            'Mozaik perfüzyon paterni',
        ],
        reportTemplate: 'Pulmoner arter [ana dal/lober/segmental] dallarında dolum defekti izlenmiştir. RV/LV oranı: [X]. SONUÇ: Akut pulmoner emboli. Klinik korelasyon ve antikoagülan tedavi önerilir.',
        notifyTemplate: 'KRİTİK BULGU: Akut pulmoner emboli saptanmıştır. [Masif/Submasif/Non-masif]. ACİL KLİNİK DEĞERLENDİRME GEREKLİDİR.',
        differentialDiagnosis: ['Aort diseksiyonu', 'Miyokard enfarktüsü', 'Pnömotoraks', 'Perikardit', 'Pnömoni'],
        management: 'Antikoagülasyon (Heparin). Masif PE → Sistemik tromboliz veya cerrahi embolektomi. Hemodinamik destek.',
    },
    {
        id: 'aortic_dissection',
        title: 'Aort Diseksiyonu',
        organ: 'Toraks/Abdomen',
        icon: <Zap className="w-5 h-5" />,
        color: 'red',
        urgency: 'Kritik',
        timeWindow: 'Stanford A: ACİL cerrahi (dakikalar). Stanford B: Medikal tedavi',
        redFlags: [
            'Yırtılır tarzda göğüs/sırt ağrısı',
            'Kol-kol tansiyon farkı',
            'Hipotansiyon, şok bulguları',
            'Nabız farkı (pulse deficit)',
            'Marfan sendromu / bağ dokusu hastalığı',
        ],
        imagingProtocol: 'Aort BT Anjiyografi (EKG-gated tercih) — acil → Transözofageal EKO (intraoperatif)',
        criticalFindings: [
            'İntimal flap (gerçek-yalancı lümen ayırımı)',
            'Stanford A: Çıkan aort tutulumu',
            'Stanford B: İnen aortla sınırlı',
            'Perikardiyal efüzyon (tamponad riski)',
            'Dal damar obstrüksiyonu (malperfüzyon)',
        ],
        reportTemplate: '[Stanford A/B] tipi aort diseksiyonu izlenmiştir. İntimal flap [çıkan/inen] aorttan başlayıp [X] düzeyine kadar uzanmaktadır. SONUÇ: Akut aort diseksiyonu. Acil Kardiyovasküler Cerrahi konsültasyonu önerilir.',
        notifyTemplate: 'KRİTİK BULGU: Akut aort diseksiyonu (Stanford [A/B]) saptanmıştır. ACİL KARDİYOVASKÜLER CERRAHİ KONSÜLTASYONU.',
        differentialDiagnosis: ['Akut koroner sendrom', 'Pulmoner emboli', 'Pnömotoraks', 'Aort anevrizması rüptürü'],
        management: 'Stanford A: ACİL cerrahi onarım. Stanford B: Medikal tedavi (tansiyon kontrolü, beta-bloker). Komplike B: Endovasküler stent-greft.',
    },
    {
        id: 'tension_pneumothorax',
        title: 'Tansiyon Pnömotoraks',
        organ: 'Akciğer',
        icon: <Wind className="w-5 h-5" />,
        color: 'red',
        urgency: 'Kritik',
        timeWindow: 'Dakikalar (klinik tanı, görüntüleme beklenmez)',
        redFlags: [
            'Şiddetli nefes darlığı, siyanoz',
            'Tek taraflı solunum sesleri kaybı',
            'Trakeal deviasyon (karşı tarafa)',
            'Hipotansiyon, taşikardi',
            'Juguler venöz dolgunluk',
        ],
        imagingProtocol: 'PA Akciğer Grafisi (hasta stabil ise) → Toraks BT (şüpheli durumlarda)',
        criticalFindings: [
            'Geniş pnömotoraks (> %50)',
            'Mediastinal şift (karşı tarafa)',
            'Diyafram düzleşmesi/inversiyonu',
            'Derin sulkus işareti (sırt üstü grafide)',
        ],
        reportTemplate: '[Sağ/Sol] hemitoraksta geniş pnömotoraks izlenmiştir. Mediastinal yapılarda karşı tarafa şift mevcuttur. SONUÇ: Tansiyon Pnömotoraks. ACİL dekompresyon gereklidir.',
        notifyTemplate: 'KRİTİK BULGU: Tansiyon pnömotoraks. ACİL iğne dekompresyonu/tüp torakostomi GEREKLİDİR.',
        differentialDiagnosis: ['Basit pnömotoraks', 'Masif plevral efüzyon', 'Hemotoraks', 'Diyafram rüptürü'],
        management: 'ACİL iğne dekompresyonu (2. interkostal alan, midklaviküler hat) → Tüp torakostomi (göğüs tüpü).',
    },
    {
        id: 'cauda_equina',
        title: 'Kauda Ekuina Sendromu',
        organ: 'Omurga',
        icon: <Bone className="w-5 h-5" />,
        color: 'red',
        urgency: 'Acil',
        timeWindow: '< 24-48 saat (cerrahi dekompresyon)',
        redFlags: [
            'Bilateral bacak ağrısı/güçsüzlük',
            'Saddle anestezi (perineal bölge)',
            'İdrar retansiyonu / inkontinans',
            'Gaita inkontinansı',
            'Cinsel disfonksiyon',
        ],
        imagingProtocol: 'Acil Lomber MR (sagittal + aksiyal T1, T2) → Kontrastlı MR (enfeksiyon/tümör şüphesinde)',
        criticalFindings: [
            'Masif disk ekstrüzyonu (spinal kanalı dolduran)',
            'Kauda ekuina liflerinde bası/kıvrımlanma',
            'Spinal kanal tama yakın oklüde',
            'Epidural apse/tümör (alternatif nedenler)',
        ],
        reportTemplate: '[Seviye] düzeyinde masif disk ekstrüzyonu/kitle lezyonu izlenmiştir. Spinal kanal tama yakın oklüde olup kauda ekuina lifleri sıkıştırılmaktadır. SONUÇ: Kauda Ekuina Sendromu. ACİL cerrahi dekompresyon önerilir.',
        notifyTemplate: 'KRİTİK BULGU: Kauda Ekuina Sendromu ile uyumlu bulgular. ACİL NÖROŞİRÜRJİ KONSÜLTASYONU.',
        differentialDiagnosis: ['Konus medüllaris sendromu', 'Spinal epidural apse', 'Spinal metastaz', 'Guillain-Barré sendromu'],
        management: 'ACİL cerrahi dekompresyon (laminektomi/diskektomi). 24-48 saat içinde müdahale kalıcı nörolojik hasarı önler.',
    },
    {
        id: 'appendicitis',
        title: 'Akut Apandisit (Perfore)',
        organ: 'Abdomen',
        icon: <Flame className="w-5 h-5" />,
        color: 'red',
        urgency: 'Acil',
        timeWindow: '< 24 saat (perforasyon riski)',
        redFlags: [
            'Sağ alt kadran ağrısı (McBurney noktası)',
            'Ateş, lökositoz',
            'Rebound tenderness',
            'Anoreksi, bulantı/kusma',
            'Ağrının göbek çevresinden sağ alt kadrana migrasyonu',
        ],
        imagingProtocol: 'Abdomen BT (kontrastlı tercih) — altın standart → USG (çocuk/gebe → ilk tercih)',
        criticalFindings: [
            'Apendiks çapı > 6 mm',
            'Duvar kalınlaşması ve kontrast tutulumu',
            'Periapendisiyal yağ kirlenme (stranding)',
            'Apendikolit varlığı',
            'Perforasyon: Serbest sıvı, apse formasyonu',
        ],
        reportTemplate: 'Çekuma komşu apendiks çapı [X] mm olarak ölçülmüş olup duvar kalınlaşması ve kontrast tutulumu izlenmiştir. Periapendisiyal yağ dokusunda inflamatuvar değişiklikler mevcuttur. SONUÇ: Akut Apandisit. Cerrahi konsültasyon önerilir.',
        notifyTemplate: 'KRİTİK BULGU: Akut apandisit saptanmıştır. Perforasyon bulguları [mevcut/yok]. CERRAHİ KONSÜLTASYON önerilir.',
        differentialDiagnosis: ['Mezenterik lenfadenit', 'Over torsiyonu', 'Ektopik gebelik', 'Crohn hastalığı', 'Divertikülit'],
        management: 'Laparoskopik apendektomi. Perfore/apseli: Perkütan drenaj ± gecikmeli apendektomi.',
    },
    {
        id: 'bowel_ischemia',
        title: 'Akut Mezenterik İskemi',
        organ: 'Abdomen',
        icon: <Flame className="w-5 h-5" />,
        color: 'red',
        urgency: 'Kritik',
        timeWindow: '< 6 saat (barsak nekrozu öncesi)',
        redFlags: [
            'Karın ağrısı (muayene bulgularıyla orantısız şiddet)',
            'Kanlı dışkı / rektal kanama',
            'Atriyal fibrilasyon öyküsü',
            'Laktat yüksekliği',
            'Yaşlı hasta, ateroskleroz',
        ],
        imagingProtocol: 'Kontrastlı Abdomen BT Anjiyografi (arteryel + portal venöz faz)',
        criticalFindings: [
            'SMA/IMA/Çölyak trunkusta dolum defekti/oklüzyon',
            'Barsak duvarında kontrast tutulmaması',
            'Pnömatozis intestinalis (barsak duvarında hava)',
            'Portal venöz hava',
            'Mezenterik ödem ve serbest sıvı',
        ],
        reportTemplate: '[SMA/IMA] orijininde oklüzyon/trombüs izlenmiştir. İlgili barsak segmentlerinde duvar kontrastlanma defekti saptanmıştır. SONUÇ: Akut mezenterik iskemi. ACİL cerrahi/girişimsel radyoloji konsültasyonu.',
        notifyTemplate: 'KRİTİK BULGU: Akut mezenterik iskemi saptanmıştır. ACİL CERRAHİ/GİRİŞİMSEL KONSÜLTASYON.',
        differentialDiagnosis: ['Barsak obstrüksiyonu', 'Pankreatit', 'İnflamatuvar barsak hastalığı', 'Mezenterik ven trombozu'],
        management: 'ACİL cerrahi eksplorasyon ve/veya endovasküler revaskülarizasyon. Nekrotik barsak rezeksiyonu.',
    },
];

export function EmergencyPanel() {
    const [expandedCase, setExpandedCase] = useState<string | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = async (text: string, id: string) => {
        await navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const urgencyColors: Record<string, string> = {
        'Kritik': 'bg-red-500/20 text-red-400 border-red-500/40',
        'Acil': 'bg-orange-500/20 text-orange-400 border-orange-500/40',
        'Yarı-Acil': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
    };

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent flex items-center gap-2">
                    <Siren className="w-7 h-7 text-red-400" />
                    Acil Radyoloji Paneli
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                    Kritik bulgu tanıma, bildirim şablonları ve acil protokoller. Nöbette hızlı referans.
                </p>
            </div>

            {/* Critical Notification Banner */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-red-300">Kritik Bulgu Bildirimi Kuralı</p>
                        <p className="text-xs text-zinc-400 mt-1">
                            ACR Practice Guideline: Beklenmeyen veya acil müdahale gerektiren bulgular, ilgili klinisyene sözlü olarak bildirilmeli ve kayıt altına alınmalıdır.
                            Bildirim zamanı, kişi ve iletişim yöntemi rapora eklenmelidir.
                        </p>
                    </div>
                </div>
            </div>

            {/* Emergency Cases Grid */}
            <div className="space-y-3">
                {EMERGENCY_CASES.map(ec => {
                    const isExpanded = expandedCase === ec.id;
                    return (
                        <div
                            key={ec.id}
                            className={cn(
                                "bg-zinc-900/60 border rounded-xl overflow-hidden transition-all",
                                isExpanded ? "border-red-500/30" : "border-zinc-800 hover:border-zinc-700"
                            )}
                        >
                            {/* Case Header */}
                            <button
                                onClick={() => setExpandedCase(isExpanded ? null : ec.id)}
                                aria-expanded={isExpanded}
                                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-zinc-800/30 transition-colors"
                            >
                                <div className={cn("p-2 rounded-lg", ec.color === 'red' ? 'bg-red-500/10 text-red-400' : 'bg-orange-500/10 text-orange-400')}>
                                    {ec.icon}
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-zinc-200">{ec.title}</h3>
                                        <span role="status" className={cn("text-[10px] px-2 py-0.5 rounded-full border font-bold", urgencyColors[ec.urgency])}>
                                            {ec.urgency}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-zinc-500 mt-0.5">
                                        <span>{ec.organ}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {ec.timeWindow}
                                        </span>
                                    </div>
                                </div>
                                {isExpanded ? <ChevronUp className="w-5 h-5 text-zinc-500" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
                            </button>

                            {/* Expanded Content */}
                            {isExpanded && (
                                <div className="border-t border-zinc-800 p-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                                    {/* Red Flags */}
                                    <div>
                                        <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Kırmızı Bayraklar (Red Flags)
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {ec.redFlags.map((flag, i) => (
                                                <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-red-500/10 text-red-300 border border-red-500/20">
                                                    {flag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Imaging Protocol */}
                                    <div>
                                        <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Görüntüleme Protokolü</h4>
                                        <p className="text-sm text-zinc-300 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                                            {ec.imagingProtocol}
                                        </p>
                                    </div>

                                    {/* Critical Findings */}
                                    <div>
                                        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Kritik Bulgular</h4>
                                        <ul className="space-y-1">
                                            {ec.criticalFindings.map((cf, i) => (
                                                <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                                                    <Zap className="w-3 h-3 text-amber-400 mt-1 shrink-0" />
                                                    {cf}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* DDx */}
                                    <div>
                                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Ayırıcı Tanı</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {ec.differentialDiagnosis.map((dd, i) => (
                                                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                                                    {dd}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Management */}
                                    <div>
                                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Tedavi Yönetimi</h4>
                                        <p className="text-sm text-emerald-200 bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/20">
                                            {ec.management}
                                        </p>
                                    </div>

                                    {/* Report & Notification Templates */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700 relative">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="text-[10px] font-bold text-zinc-400 uppercase">Rapor Taslağı</h5>
                                                <button
                                                    onClick={() => handleCopy(ec.reportTemplate, `report-${ec.id}`)}
                                                    className="p-1 hover:bg-zinc-700 rounded transition-colors"
                                                    aria-label="Rapor şablonunu kopyala"
                                                >
                                                    {copiedId === `report-${ec.id}` ? (
                                                        <Check className="w-3 h-3 text-green-400" aria-hidden="true" />
                                                    ) : (
                                                        <Copy className="w-3 h-3 text-zinc-500" />
                                                    )}
                                                </button>
                                            </div>
                                            <p className="text-xs text-zinc-300 font-mono">{ec.reportTemplate}</p>
                                        </div>
                                        <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/20 relative">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="text-[10px] font-bold text-red-400 uppercase flex items-center gap-1">
                                                    <Phone className="w-3 h-3" />
                                                    Bildirim Şablonu
                                                </h5>
                                                <button
                                                    onClick={() => handleCopy(ec.notifyTemplate, `notify-${ec.id}`)}
                                                    className="p-1 hover:bg-zinc-700 rounded transition-colors"
                                                    aria-label="Rapor şablonunu kopyala"
                                                >
                                                    {copiedId === `notify-${ec.id}` ? (
                                                        <Check className="w-3 h-3 text-green-400" aria-hidden="true" />
                                                    ) : (
                                                        <Copy className="w-3 h-3 text-zinc-500" />
                                                    )}
                                                </button>
                                            </div>
                                            <p className="text-xs text-red-200 font-mono font-bold">{ec.notifyTemplate}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
