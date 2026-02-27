'use client';

import { useState } from 'react';
import { MapPin, Brain, Bone, Flame, Bean, Wind, Scan, Dumbbell, Utensils, Heart, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnatomyRegion {
    id: string;
    label: string;
    description: string;
    normalValues?: { parameter: string; value: string; note?: string }[];
    relatedPathologies: string[];
}

interface AnatomyOrgan {
    id: string;
    label: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    segments: AnatomyRegion[];
    clinicalNotes: string[];
}

const ANATOMY_DATA: AnatomyOrgan[] = [
    {
        id: 'brain',
        label: 'Beyin',
        icon: <Brain className="w-5 h-5" />,
        color: 'indigo',
        description: 'Kranial anatomi, lob yapıları, vasküler sulama alanları ve ventrikül sistemi.',
        clinicalNotes: [
            'Willis poligonu: ICA, ACA, MCA, PCA, AComm, PComm — anevrizma lokalizasyonları',
            'MCA sulama alanı: Lateral serebral korteks — en sık stroke bölgesi',
            'ACA sulama alanı: Medial serebral korteks, frontal lob',
            'PCA sulama alanı: Oksipital lob, temporal lob medial',
            'Broca alanı: Sol frontal (konuşma üretimi), Wernicke: Sol temporal (dil anlama)',
        ],
        segments: [
            {
                id: 'frontal',
                label: 'Frontal Lob',
                description: 'Motor fonksiyon, karar verme, kişilik, Broca alanı (sol)',
                normalValues: [
                    { parameter: 'Kortikal kalınlık', value: '2.5–4.0 mm', note: 'Atrofide incelme' },
                ],
                relatedPathologies: ['Glioblastom', 'Meninjiom (Konveksite)', 'Frontal kontüzyon'],
            },
            {
                id: 'temporal',
                label: 'Temporal Lob',
                description: 'İşitme, hafıza (hipokampüs), Wernicke alanı (sol)',
                normalValues: [
                    { parameter: 'Hipokampüs hacmi', value: '3.0–3.5 cm³', note: 'Alzheimer\'da azalır' },
                ],
                relatedPathologies: ['Herpes ensefaliti', 'Mezial temporal skleroz', 'Temporal lob epilepsisi'],
            },
            {
                id: 'parietal',
                label: 'Parietal Lob',
                description: 'Somatosensöryel fonksiyon, mekansal farkındalık',
                relatedPathologies: ['İskemik inme (MCA)', 'Metastaz'],
            },
            {
                id: 'occipital',
                label: 'Oksipital Lob',
                description: 'Görme merkezi (primer vizüel korteks)',
                relatedPathologies: ['PCA enfarktı', 'Kortikal körlük', 'PRES (posterior)'],
            },
            {
                id: 'cerebellum',
                label: 'Serebellum (Beyincik)',
                description: 'Denge, koordinasyon, ince motor kontrol',
                normalValues: [
                    { parameter: 'Serebellar tonsil pozisyonu', value: 'Foramen magnum hizası veya yukarısı', note: '>5mm herniasyon = Chiari I' },
                ],
                relatedPathologies: ['Serebellar hemoraji', 'Pilositik astrositom (çocuk)', 'Medulloblastom'],
            },
            {
                id: 'ventricles',
                label: 'Ventrikül Sistemi',
                description: 'Lateral ventrikül, 3. ventrikül, akuadukt, 4. ventrikül',
                normalValues: [
                    { parameter: 'Evans indeksi', value: '< 0.3', note: '≥ 0.3 = Hidrosefali' },
                    { parameter: 'Lateral ventrikül genişliği', value: '< 10 mm (TP)' },
                    { parameter: '3. ventrikül genişliği', value: '< 7 mm' },
                ],
                relatedPathologies: ['Hidrosefali', 'Kolloid kist (3. ventrikül)', 'Ependimom'],
            },
        ],
    },
    {
        id: 'liver',
        label: 'Karaciğer',
        icon: <Flame className="w-5 h-5" />,
        color: 'rose',
        description: 'Couinaud segment anatomisi, hepatik vasküler yapılar ve safra yolları.',
        clinicalNotes: [
            'Couinaud sınıflaması: Hepatik venlere ve portal ven dallarına göre 8 segment',
            'Sağ hepatik ven: Segment V-VIII ile VI-VII arasında sınır',
            'Orta hepatik ven: Sağ ve sol lob arasında (Cantlie hattı)',
            'Sol hepatik ven: Segment II ile III arasında',
            'Portal ven: Dual kan beslemesi (hepatik arter %25 + portal ven %75)',
        ],
        segments: [
            { id: 'seg1', label: 'Segment I (Kaudat Lob)', description: 'IVC ve portal ven bifurkasyonu arasında. Direkt hepatik venlere drene olur.', relatedPathologies: ['Budd-Chiari (kompansatuar hipertrofi)'] },
            { id: 'seg2', label: 'Segment II (Sol lateral süperior)', description: 'Sol hepatik ven solunda, portal ven sol dalı üstünde', relatedPathologies: ['HCC', 'Hemanjiyom'] },
            { id: 'seg3', label: 'Segment III (Sol lateral inferior)', description: 'Sol hepatik ven solunda, portal ven sol dalı altında', relatedPathologies: ['Fokal nodüler hiperplazi'] },
            { id: 'seg4', label: 'Segment IV (Sol medial)', description: 'Orta ve sol hepatik ven arasında. IVa (superior) ve IVb (inferior)', relatedPathologies: ['HCC', 'Metastaz'] },
            { id: 'seg5', label: 'Segment V (Sağ anterior inferior)', description: 'Orta ve sağ hepatik ven arasında, portal ven sağ dalı altında', relatedPathologies: ['HCC', 'Metastaz'] },
            { id: 'seg6', label: 'Segment VI (Sağ posterior inferior)', description: 'Sağ hepatik ven sağında, portal ven sağ dalı altında', relatedPathologies: ['Kist', 'Apse'] },
            { id: 'seg7', label: 'Segment VII (Sağ posterior süperior)', description: 'Sağ hepatik ven sağında, portal ven sağ dalı üstünde', relatedPathologies: ['Hemanjiyom', 'Metastaz'] },
            { id: 'seg8', label: 'Segment VIII (Sağ anterior süperior)', description: 'Orta ve sağ hepatik ven arasında, portal ven sağ dalı üstünde', relatedPathologies: ['HCC', 'FNH'] },
        ],
    },
    {
        id: 'lung',
        label: 'Akciğer',
        icon: <Wind className="w-5 h-5" />,
        color: 'cyan',
        description: 'Lob ve segment anatomisi, fissürler, bronşiyal ağaç ve mediastinal kompartmanlar.',
        clinicalNotes: [
            'Sağ akciğer: 3 lob (üst, orta, alt), 10 segment. Sol akciğer: 2 lob (üst, alt), 8-9 segment',
            'Major (oblik) fissür: Her iki akciğerde mevcut. Minor (horizontal) fissür: Sadece sağ akciğer',
            'Lingula: Sol üst lobun inferior bölümü (sağdaki orta loba karşılık)',
            'Aortopulmoner pencere: Sol rekürren laringeal sinir geçişi — LAP önemli',
            'Mediastinal kompartmanlar: Anterior (timus, lenfoma), Orta (kalp, aorta), Posterior (nörojenik tümörler)',
        ],
        segments: [
            { id: 'rul', label: 'Sağ Üst Lob', description: 'Apikal (S1), Posterior (S2), Anterior (S3) segmentler', relatedPathologies: ['Akciğer kanseri', 'Tüberküloz (apikal)', 'Pancoast tümörü'] },
            { id: 'rml', label: 'Sağ Orta Lob', description: 'Lateral (S4) ve Medial (S5) segmentler', relatedPathologies: ['Orta lob sendromu', 'Pnömoni'] },
            { id: 'rll', label: 'Sağ Alt Lob', description: 'Superior (S6), Medial bazal (S7), Anterior/Lateral/Posterior bazal (S8-10)', relatedPathologies: ['Aspirasyon pnömonisi', 'Bronşektazi'] },
            { id: 'lul', label: 'Sol Üst Lob', description: 'Apikoposterior (S1+2), Anterior (S3), Süperior lingula (S4), İnferior lingula (S5)', relatedPathologies: ['Akciğer kanseri', 'Sarkoidoz (hiler LAP)'] },
            { id: 'lll', label: 'Sol Alt Lob', description: 'Superior (S6), Anteromedial bazal (S7+8), Lateral/Posterior bazal (S9-10)', relatedPathologies: ['Aspirasyon', 'Plevral efüzyon'] },
        ],
    },
    {
        id: 'spine',
        label: 'Omurga',
        icon: <Bone className="w-5 h-5" />,
        color: 'emerald',
        description: 'Vertebral anatomi, disk yapısı, spinal kanal ölçümleri ve sinir kökü ilişkileri.',
        clinicalNotes: [
            'Servikal: C1-C7 (7 vertebra). C3-C7 unkovertebral eklemler (Luschka)',
            'Torakal: T1-T12 (12 vertebra). Kosta artikülasyonları',
            'Lomber: L1-L5 (5 vertebra). En geniş vertebra korpusları',
            'Konus medüllaris: Spinal kordun sonu — normalde L1-L2 seviyesi',
            'Kauda ekuina: L2 altında sinir kökleri (at kuyruğu)',
        ],
        segments: [
            { id: 'cervical', label: 'Servikal Bölge (C1-C7)', description: 'En hareketli segment. C5-C6, C6-C7 en sık herniasyon seviyeleri.', normalValues: [
                { parameter: 'Spinal kanal AP çapı', value: '> 13 mm (normal)', note: '< 10 mm = kritik stenoz' },
                { parameter: 'Disk yüksekliği', value: '3-6 mm' },
            ], relatedPathologies: ['Servikal disk hernisi', 'Miyelopati', 'Servikal stenoz'] },
            { id: 'thoracic', label: 'Torakal Bölge (T1-T12)', description: 'En az hareketli. Kosta stabilizasyonu. T11-L2 en sık kırık bölgesi.', normalValues: [
                { parameter: 'Spinal kanal AP çapı', value: '> 12 mm' },
                { parameter: 'Normal kifoz açısı', value: '20-45°' },
            ], relatedPathologies: ['Kompresyon kırığı', 'Metastatik vertebra', 'Scheuermann'] },
            { id: 'lumbar', label: 'Lomber Bölge (L1-L5)', description: 'Yük taşıyan segment. L4-L5, L5-S1 en sık herniasyon seviyeleri.', normalValues: [
                { parameter: 'Spinal kanal AP çapı', value: '> 15 mm', note: '< 10 mm = stenoz' },
                { parameter: 'Normal lordoz açısı', value: '40-60°' },
                { parameter: 'Disk yüksekliği', value: '7-10 mm' },
            ], relatedPathologies: ['Lomber disk hernisi', 'Lomber stenoz', 'Spondilolistezis'] },
        ],
    },
    {
        id: 'kidney',
        label: 'Böbrek',
        icon: <Bean className="w-5 h-5" />,
        color: 'amber',
        description: 'Böbrek anatomisi, toplayıcı sistem, üreter seyri ve komşu yapılar.',
        clinicalNotes: [
            'Böbrek boyutu: Uzun aks 9-13 cm, genişlik 4-6 cm, kalınlık 3-5 cm',
            'Kortikal kalınlık: Normal > 1 cm (atrofide incelir)',
            'Renal arter: Aortadan (L1-L2 seviyesi) çıkar. %25-30 aksesuar arter',
            'Üreter: 3 fizyolojik darlık — PUJ, iliak damar geçişi, UVJ (taş sıklıkla buralarda tıkanır)',
            'Adrenal bezler: Böbreğin süperior-medialinde. Sağ: V-şekli, Sol: Y/Hilal şekli',
        ],
        segments: [
            { id: 'cortex', label: 'Böbrek Korteksi', description: 'Glomerüller ve proksimal/distal tübüller. Kontrast arteryel fazda belirgin tutulur.', normalValues: [
                { parameter: 'Kortikal kalınlık', value: '> 10 mm', note: '< 10 mm = kronik hasar' },
            ], relatedPathologies: ['Renal Hücreli Karsinom', 'Akut pyelonefrit', 'Kortikal kist'] },
            { id: 'medulla', label: 'Böbrek Medullası (Piramidler)', description: 'Henle kulbu ve toplayıcı kanallar. Papilla: Kalikslerle buluşma noktası.', relatedPathologies: ['Medüller sünger böbrek', 'Papiller nekroz'] },
            { id: 'collecting', label: 'Toplayıcı Sistem (Pelvis-Kaliks)', description: 'Minor kaliksler → Major kaliksler → Renal pelvis → Üreter', normalValues: [
                { parameter: 'Renal pelvis AP çapı', value: '< 10 mm (erişkin)', note: '> 10 mm = pyelektazi' },
            ], relatedPathologies: ['Hidronefroz', 'Ürolitiyazis', 'TCC (Ürotelyal karsinom)'] },
        ],
    },
    {
        id: 'breast',
        label: 'Meme',
        icon: <Scan className="w-5 h-5" />,
        color: 'pink',
        description: 'Meme anatomisi, kadran sistemi, aksiller yapılar ve lenf drenaj yolları.',
        clinicalNotes: [
            'Kadran sistemi: Üst-dış (%50 kanser), Üst-iç, Alt-dış, Alt-iç, Retroareolar',
            'Cooper bağları: Cilt ile pektoral fasya arası — tümör invazyonunda retraksiyon yapar',
            'Aksiller lenf nodu seviyeleri: Level I (lateral), II (pektoralis minor arkası), III (medial)',
            'Meme dansitesi (ACR): a (yağlı) → d (aşırı dens) — dens memede MMG sensitivitesi düşer',
            'İnternal mammarian lenf nodu zinciri: Sternum kenarı — medial tümörlerde tutulabilir',
        ],
        segments: [
            { id: 'upper_outer', label: 'Üst Dış Kadran', description: 'Meme kanserinin %50\'si bu kadranda. Aksiller uzanım bölgesi.', relatedPathologies: ['İnvaziv duktal karsinom', 'Fibroadenom'] },
            { id: 'upper_inner', label: 'Üst İç Kadran', description: 'İnternal mammarian LN drenajı önemli.', relatedPathologies: ['Meme kanseri'] },
            { id: 'lower_outer', label: 'Alt Dış Kadran', description: 'Relatif olarak daha az kanser görülür.', relatedPathologies: ['Yağ nekrozu', 'Kist'] },
            { id: 'retroareolar', label: 'Retroareolar / Santral', description: 'Meme başı altı. Duktal yapılar yoğun.', relatedPathologies: ['İntraduktal papillom', 'Paget hastalığı'] },
        ],
    },
    {
        id: 'msk',
        label: 'Kas-İskelet',
        icon: <Dumbbell className="w-5 h-5" />,
        color: 'orange',
        description: 'Majör eklem anatomisi, tendon/ligament yapıları ve klinik korelasyonlar.',
        clinicalNotes: [
            'Omuz: Rotator Manşet = Supraspinatus + Infraspinatus + Teres Minor + Subscapularis',
            'Diz: ACL — pivot guard, PCL — posterior stabilite, MCL + LCL — lateral stabilite',
            'Menisküsler: Medial (C-şekli, immobil) ve Lateral (O-şekli, mobil)',
            'Kalça: Femur başı — subkondral kemiğin tek beslenmesi (retinakular arterler)',
            'Ayak bileği: Aşil tendonu — en güçlü tendon, en sık yırtılan tendonlardan biri',
        ],
        segments: [
            { id: 'shoulder', label: 'Omuz Eklemi', description: 'Glenohumeral eklem. En hareketli eklem. Rotator manşet stabilizasyonu.', normalValues: [
                { parameter: 'Akromiohumeral mesafe', value: '> 7 mm', note: '< 7 mm = impingement' },
                { parameter: 'Supraspinatus tendon kalınlığı', value: '4-8 mm' },
            ], relatedPathologies: ['Rotator Cuff yırtığı', 'İmpingement', 'Labrum yırtığı'] },
            { id: 'knee', label: 'Diz Eklemi', description: 'Femorotibial + Patellofemoral eklemler. ACL, PCL, MCL, LCL, menisküsler.', normalValues: [
                { parameter: 'ACL açısı (sagittal)', value: '< 55° (Blumensaat hattı ile)' },
            ], relatedPathologies: ['ACL yırtığı', 'Menisküs yırtığı', 'Kıkırdak defekti'] },
            { id: 'hip', label: 'Kalça Eklemi', description: 'Ball-and-socket tipi. Labrum, ligamentum teres, kapsüler ligamentler.', normalValues: [
                { parameter: 'Alfa açısı (FAI)', value: '< 55°', note: '> 55° = Cam morfolojisi' },
            ], relatedPathologies: ['AVN', 'Femuroasetabüler impingement', 'Kalça kırığı'] },
        ],
    },
    {
        id: 'gi',
        label: 'Gastrointestinal',
        icon: <Utensils className="w-5 h-5" />,
        color: 'green',
        description: 'GIS tüp anatomisi, pankreas, safra yolları ve mezenterik damarlar.',
        clinicalNotes: [
            'Apendiks: Çekumun posteromedialinde. Normal çap < 6 mm. Apendikolit → apandisit',
            'Pankreas: Baş (duodenum C-loop), Gövde (SMA arkasında), Kuyruk (splenik hilusa uzanır)',
            'Safra kanalı: Normal < 6 mm (kolesistektomi sonrası < 10 mm kabul edilebilir)',
            'SMA: Aortadan L1 seviyesinde çıkar. İnce barsak ve proksimal kolon besler',
            'IMA: Sol kolon, sigmoid ve üst rektum besler',
        ],
        segments: [
            { id: 'stomach', label: 'Mide', description: 'Fundus, Korpus, Antrum, Pilor. Duvar kalınlığı: distansiyon ile < 5 mm.', relatedPathologies: ['Gastrik kanser', 'GIST', 'Peptik ülser'] },
            { id: 'small_bowel', label: 'İnce Barsak', description: 'Duodenum, Jejunum, İleum. Normal çap < 3 cm (distansiyonsuz).', relatedPathologies: ['Crohn hastalığı', 'İleus', 'Meckel divertikülü'] },
            { id: 'colon', label: 'Kolon', description: 'Çekum, Çıkan, Transvers, İnen, Sigmoid, Rektum. Normal çap < 6 cm (çekum < 9 cm).', relatedPathologies: ['Kolorektal kanser', 'Divertikülit', 'Volvulus'] },
            { id: 'pancreas', label: 'Pankreas', description: 'Retroperitoneal organ. Baş: 3 cm, Gövde: 2.5 cm, Kuyruk: 2 cm (max AP).', normalValues: [
                { parameter: 'Pankreas kanalı (Wirsung)', value: '< 3 mm', note: '> 3 mm = patolojik dilatasyon' },
            ], relatedPathologies: ['Pankreatit', 'Pankreas adenokarsinomu', 'IPMN'] },
        ],
    },
    {
        id: 'gyn',
        label: 'Jinekoloji',
        icon: <Heart className="w-5 h-5" />,
        color: 'purple',
        description: 'Uterin anatomi, over yapıları, zonal anatomi ve pelvik komşuluklar.',
        clinicalNotes: [
            'Uterus: Endometrium, Junctional zone (JZ), Myometrium. JZ kalınlığı > 12 mm = Adenomyozis',
            'Endometrium kalınlığı: Proliferatif 4-8mm, Sekretuar 8-14mm, Postmenopozal < 5mm',
            'Over hacmi: Reprodüktif dönem 3-10 cm³. Postmenopozal < 2 cm³',
            'Douglas poşu: Pelvisin en derin bölgesi — serbest sıvı burada birikir',
            'Over torsiyonu: Whirlpool sign + büyümüş ödemli over + azalmış Doppler akım',
        ],
        segments: [
            { id: 'uterus', label: 'Uterus', description: 'Fundus, Korpus, İstmus, Serviks. 3 tabakalı zonal anatomi (MR ile değerlendirilir).', normalValues: [
                { parameter: 'Uterus uzunluğu', value: '6-9 cm (nullipar)', note: 'Multipar: 8-10 cm' },
                { parameter: 'Endometrium (premenopoz)', value: '4-14 mm (faza göre)' },
                { parameter: 'Endometrium (postmenopoz)', value: '< 5 mm', note: '> 5 mm → değerlendirme' },
            ], relatedPathologies: ['Endometrium kanseri', 'Myom', 'Adenomyozis'] },
            { id: 'ovary', label: 'Overler', description: 'Reprodüktif yaşta ovoidal, foliküller içerir. Postmenopozal dönemde küçülür.', normalValues: [
                { parameter: 'Over hacmi', value: '< 10 cm³ (reprodüktif)', note: '> 20 cm³ = patolojik' },
                { parameter: 'Dominant folikül (ovülasyon)', value: '18-24 mm' },
            ], relatedPathologies: ['Over kisti', 'Dermoid kist', 'Over karsinomu', 'Torsion'] },
        ],
    },
];

export function AnatomyAtlas() {
    const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
    const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

    const organ = ANATOMY_DATA.find(o => o.id === selectedOrgan);

    const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
        indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
        emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
        rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
        amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
        cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
        pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
        orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
        green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
        purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    };

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent flex items-center gap-2">
                    <MapPin className="w-7 h-7 text-teal-400" />
                    Anatomi Atlası & Referans
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                    Organ segment anatomisi, normal ölçüler ve ilişkili patolojiler.
                </p>
            </div>

            {!selectedOrgan ? (
                /* Organ Selection Grid */
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {ANATOMY_DATA.map(o => {
                        const colors = colorClasses[o.color] || colorClasses.indigo;
                        return (
                            <button
                                key={o.id}
                                onClick={() => setSelectedOrgan(o.id)}
                                aria-pressed={selectedOrgan === o.id}
                                className={cn(
                                    "p-4 rounded-xl border transition-all text-left group hover:scale-[1.02]",
                                    colors.bg, colors.border
                                )}
                            >
                                <div className={cn("mb-2", colors.text)}>{o.icon}</div>
                                <p className="font-bold text-zinc-200 group-hover:text-white">{o.label}</p>
                                <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{o.description}</p>
                                <p className="text-[10px] text-zinc-600 mt-2">{o.segments.length} bölge</p>
                            </button>
                        );
                    })}
                </div>
            ) : organ ? (
                <div className="space-y-6">
                    {/* Back + Header */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { setSelectedOrgan(null); setExpandedRegion(null); }}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-sm transition-colors"
                        >
                            ← Geri
                        </button>
                        <div className={cn("p-2 rounded-lg", colorClasses[organ.color]?.bg, colorClasses[organ.color]?.text)}>
                            {organ.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white">{organ.label} Anatomisi</h3>
                    </div>

                    {/* Clinical Notes */}
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Klinik Notlar
                        </h4>
                        <ul className="space-y-1.5">
                            {organ.clinicalNotes.map((note, i) => (
                                <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                                    <span className={cn("mt-0.5 shrink-0", colorClasses[organ.color]?.text)}>•</span>
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Segments */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-zinc-300">Bölgeler / Segmentler</h4>
                        {organ.segments.map(seg => {
                            const isExpanded = expandedRegion === seg.id;
                            return (
                                <div
                                    key={seg.id}
                                    className={cn(
                                        "bg-zinc-900/60 border rounded-xl overflow-hidden transition-all",
                                        isExpanded ? `${colorClasses[organ.color]?.border}` : "border-zinc-800"
                                    )}
                                >
                                    <button
                                        onClick={() => setExpandedRegion(isExpanded ? null : seg.id)}
                                        aria-expanded={isExpanded}
                                        aria-controls={`region-${seg.id}`}
                                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
                                    >
                                        <div className="text-left">
                                            <h5 className="font-bold text-zinc-200">{seg.label}</h5>
                                            <p className="text-xs text-zinc-500 mt-0.5">{seg.description}</p>
                                        </div>
                                        {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                                    </button>

                                    {isExpanded && (
                                        <div id={`region-${seg.id}`} role="region" className="border-t border-zinc-800 p-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
                                            {/* Normal Values */}
                                            {seg.normalValues && seg.normalValues.length > 0 && (
                                                <div>
                                                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-2">Normal Değerler</p>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                        {seg.normalValues.map((nv, i) => (
                                                            <div key={i} className="bg-emerald-500/5 border border-emerald-500/15 rounded-lg px-3 py-2">
                                                                <p className="text-xs text-zinc-300 font-medium">{nv.parameter}</p>
                                                                <p className="text-sm text-emerald-300 font-bold">{nv.value}</p>
                                                                {nv.note && <p className="text-[10px] text-zinc-500 mt-0.5">{nv.note}</p>}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Related Pathologies */}
                                            <div>
                                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">İlişkili Patolojiler</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {seg.relatedPathologies.map((rp, i) => (
                                                        <span
                                                            key={i}
                                                            className={cn(
                                                                "text-[10px] px-2 py-0.5 rounded-full border",
                                                                colorClasses[organ.color]?.bg,
                                                                colorClasses[organ.color]?.border,
                                                                colorClasses[organ.color]?.text,
                                                            )}
                                                        >
                                                            {rp}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
