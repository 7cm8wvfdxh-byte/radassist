export interface ImagingArtifact {
    id: string;
    name: string;
    turkishName: string;
    modality: 'MR' | 'BT' | 'USG' | 'MR/BT' | 'Genel';
    category: string;
    mechanism: string;
    appearance: string;
    clinicalImpact: string;
    prevention: string[];
    pitfall?: string;
}

export const IMAGING_ARTIFACTS: ImagingArtifact[] = [
    // ─── MR ARTEFAKTLARı ──────────────────────────────────────────
    {
        id: "susceptibility",
        name: "Susceptibility Artifact (Blooming)",
        turkishName: "Manyetik Duyarlılık Artefaktı",
        modality: "MR",
        category: "MR — Metal & Manyetik",
        mechanism: "Farklı manyetik duyarlılıktaki dokular (hava/kemik/metal/kan) arasında lokal manyetik alan bozulması.",
        appearance: "Sinyal kaybı bölgesi, geometrik distorsiyon, 'blooming' (büyüyen karanlık alan). GRE/T2*'da belirgin.",
        clinicalImpact: "Metal implant çevresinde tanısal bilgi kaybı. Ancak hemoraji tespitinde (SWI/T2*) diagnostik olarak kullanılır.",
        prevention: [
            "Spin-echo (SE/TSE) sekansları tercih et (GRE yerine)",
            "Bandwidth artır",
            "Voksel boyutunu küçült",
            "TE kısalt",
            "Metal azaltma sekansları kullan (MARS, SEMAC, MAVRIC)"
        ],
        pitfall: "SWI'da microbleed vs kalsifikasyon ayrımı: Phase map kullanılmalı. Kalsifikasyon → paramanyetik, kan → diamanyetik."
    },
    {
        id: "chemical_shift",
        name: "Chemical Shift Artifact",
        turkishName: "Kimyasal Kayma Artefaktı",
        modality: "MR",
        category: "MR — Frekans Bazlı",
        mechanism: "Yağ ve su protonlarının farklı rezonans frekanslarında sinyal vermesi (3.5 ppm fark).",
        appearance: "Yağ-su sınırında bir tarafta parlak, diğer tarafta karanlık bant (frekans kodlama yönünde).",
        clinicalImpact: "Böbrek-perirenal yağ sınırında, disk-vertebra sınırında yanıltıcı olabilir.",
        prevention: [
            "Bandwidth artır (ancak SNR düşer)",
            "Frekans kodlama yönünü değiştir",
            "Yağ baskılama kullan (fat-sat)"
        ],
        pitfall: "Chemical shift 'Tip 2' (in/out-of-phase): Adrenal adenom tanısında kullanılır! Opposed-phase'de sinyal kaybı → lipid-rich adenom."
    },
    {
        id: "motion_artifact_mr",
        name: "Motion Artifact (Ghosting)",
        turkishName: "Hareket Artefaktı (Hayalet Görüntü)",
        modality: "MR",
        category: "MR — Hasta Kaynaklı",
        mechanism: "Solunum, kalp atımı, peristaltizm veya istemli hareket nedeniyle faz kodlama yönünde tekrarlayan hayalet görüntüler.",
        appearance: "Faz kodlama yönünde parlak/karanlık tekrarlayan bantlar (ghost).",
        clinicalImpact: "Abdominal MR'da en sık sorun. Küçük lezyonları maskeleyebilir.",
        prevention: [
            "Nefes tutma sekansları (breath-hold)",
            "Respiratuar triggering / Navigator echo",
            "Kardiyak gating (EKG triggering)",
            "Satürasyon bantları (anterior abdominal duvar)",
            "PROPELLER/BLADE tekniği",
            "Hastaya iyi pozisyon ve talimat ver"
        ]
    },
    {
        id: "aliasing_mr",
        name: "Aliasing (Wrap-around) Artifact",
        turkishName: "Katlanma Artefaktı",
        modality: "MR",
        category: "MR — FOV & Kodlama",
        mechanism: "FOV'dan taşan anatomi, görüntünün karşı tarafına katlanır (faz kodlama yönünde).",
        appearance: "Vücut kısmının karşı tarafta görüntü üzerine binmesi.",
        clinicalImpact: "Tanısal bilgiyi bozar, lezyon gizlenebilir.",
        prevention: [
            "FOV büyüt (tüm anatomiyi kapsa)",
            "Phase oversampling (%100-200 — No Phase Wrap)",
            "Satürasyon bantları",
            "Faz ve frekans yönünü değiştir"
        ]
    },
    {
        id: "zipper_artifact",
        name: "Zipper Artifact (RF Leak)",
        turkishName: "Fermuar Artefaktı",
        modality: "MR",
        category: "MR — Donanım",
        mechanism: "Dışarıdan RF paraziti MR odasına sızması (kapı açık, Faraday kafesi hasarı).",
        appearance: "Görüntüde tek bir çizgi veya bantlar halinde artefakt (frekans kodlama yönünde).",
        clinicalImpact: "Tüm görüntüyü etkileyebilir.",
        prevention: [
            "MR odası kapısının tam kapalı olduğunu kontrol et",
            "Faraday kafesi bütünlüğünü değerlendir",
            "Elektronik cihazları odadan çıkar"
        ]
    },
    {
        id: "truncation_gibbs",
        name: "Truncation (Gibbs Ringing) Artifact",
        turkishName: "Gibbs Halkalaması Artefaktı",
        modality: "MR",
        category: "MR — Dijital/Matris",
        mechanism: "Keskin sinyal geçişlerinde (BOS-kord, yağ-su) Fourier dönüşümünde yetersiz örnekleme.",
        appearance: "Yüksek kontrast sınırlarında paralel dalgalı çizgiler (ringing). Spinal kordda santral hiperintensite taklit edebilir.",
        clinicalImpact: "Spinal kordda syringomyeli veya miyelopati taklitçisi!",
        prevention: [
            "Matris boyutunu artır (256x256 → 512x512)",
            "Filtre uygula (ancak çözünürlük düşer)"
        ],
        pitfall: "Servikal MR'da kord ortasında ince T2 hiperintens çizgi Gibbs olabilir — aksiyal kesitlerle doğrula."
    },
    {
        id: "dielectric_effect",
        name: "Dielectric (Standing Wave) Effect",
        turkishName: "Dielektrik Etki (Duran Dalga)",
        modality: "MR",
        category: "MR — 3T Spesifik",
        mechanism: "3T ve üzeri yüksek alan gücünde RF dalga boyunun vücut boyutuna yaklaşması → homojen olmayan excitation.",
        appearance: "Görüntü merkezinde veya periferinde sinyal artışı/azalması. Abdomen 3T'de sık.",
        clinicalImpact: "Karaciğer sol lobda sinyal kaybı → lezyon gizlenebilir.",
        prevention: [
            "Dielektrik pedler (su-jel yastıkları)",
            "Multi-transmit RF coil teknolojisi",
            "B1 shimming"
        ]
    },

    // ─── BT ARTEFAKTLARı ──────────────────────────────────────────
    {
        id: "beam_hardening",
        name: "Beam Hardening Artifact",
        turkishName: "Işın Sertleşme Artefaktı",
        modality: "BT",
        category: "BT — Fizik Bazlı",
        mechanism: "Polykromatik X-ışını demetinin yoğun yapılardan (kemik, metal) geçerken düşük enerjili fotonların emilmesi → ortalama enerjinin artması.",
        appearance: "Yoğun yapılar arasında koyu bantlar/çizgiler (cupping artifact). Posterior fossa BT'de klasik.",
        clinicalImpact: "Posterior fossa lezyonlarını maskeleyebilir. Dental dolgu çevresinde oral kavite değerlendirmesini bozar.",
        prevention: [
            "Filtrasyon (bow-tie filtre)",
            "Yüksek kVp kullan",
            "İteratif rekonstrüksiyon algoritmaları",
            "Dual-energy BT (monoenerjik görüntüler)",
            "Metal artefakt azaltma yazılımları (MAR)"
        ]
    },
    {
        id: "streak_artifact",
        name: "Streak Artifact",
        turkishName: "Çizgi Artefaktı (Metal/Hareket)",
        modality: "BT",
        category: "BT — Fizik Bazlı",
        mechanism: "Metal implant, yoğun kontrast veya hasta hareketi nedeniyle projeksiyon verisinde tutarsızlık.",
        appearance: "Metal/yoğun yapıdan radyal olarak yayılan parlak ve karanlık çizgiler.",
        clinicalImpact: "Protez, ortopedik implant çevresinde değerlendirmeyi engeller.",
        prevention: [
            "Metal artefakt azaltma (MAR / O-MAR / SEMAR)",
            "Yüksek kVp (140 kVp)",
            "İnce kesit kalınlığı",
            "İteratif rekonstrüksiyon",
            "Dual-energy monoenerjik görüntüler (yüksek keV)"
        ]
    },
    {
        id: "partial_volume",
        name: "Partial Volume Artifact",
        turkishName: "Parsiyel Volüm Artefaktı",
        modality: "MR/BT",
        category: "BT/MR — Dijital",
        mechanism: "Tek bir voksel/piksel içinde farklı dokuların ortalamasının alınması → gerçek dansite/sinyal kaybolur.",
        appearance: "Küçük lezyonların kaybolması veya dansitelerinin yanlış ölçülmesi. İnce yapıların bulanıklaşması.",
        clinicalImpact: "Küçük böbrek taşlarının kaçırılması, ince duvar kalınlaşmasının değerlendirilemezliği.",
        prevention: [
            "İnce kesit kalınlığı kullan (≤1mm izotropik)",
            "Küçük FOV",
            "Yüksek matris çözünürlüğü"
        ]
    },
    {
        id: "stair_step",
        name: "Stair-Step Artifact",
        turkishName: "Merdiven Basamağı Artefaktı",
        modality: "BT",
        category: "BT — Rekonstrüksiyon",
        mechanism: "Kalın aksiyel kesitlerden oluşturulan sagittal/koronal reformatlarda yetersiz z-ekseni çözünürlüğü.",
        appearance: "Eğik yapılarda (aorta, kemik) basamak basamak düzensiz kenarlar.",
        clinicalImpact: "Vertebra kırıklarının yanlış değerlendirilmesi, vasküler yapıların düzensiz görünmesi.",
        prevention: [
            "İnce kesit kalınlığı (≤1mm) ile çekim",
            "Overlap rekonstrüksiyon",
            "İzotropik voksel boyutu"
        ]
    },
    {
        id: "photon_starvation",
        name: "Photon Starvation Artifact",
        turkishName: "Foton Açlığı Artefaktı",
        modality: "BT",
        category: "BT — Hasta Faktörü",
        mechanism: "Obez hastalarda veya omuz düzeyinde X-ışını yetersiz penetre olması → düşük SNR.",
        appearance: "Horizontal çizgilenme ve gürültü artışı (özellikle omuz seviyesi ve pelvis).",
        clinicalImpact: "Obez hastalarda abdominal lezyonların değerlendirilebilirliği azalır.",
        prevention: [
            "mA artır (otomatik doz modülasyonu)",
            "kVp artır (120→140 kVp)",
            "İteratif rekonstrüksiyon",
            "Kolları yukarı kaldır (omuz düzeyi için)"
        ]
    },
    {
        id: "ring_artifact",
        name: "Ring Artifact",
        turkishName: "Halka Artefaktı",
        modality: "BT",
        category: "BT — Donanım",
        mechanism: "Detektör elemanlarından birinin arızası veya kalibrasyonunun bozulması.",
        appearance: "Görüntü merkezinde konsantrik daireler/halkalar.",
        clinicalImpact: "Tanıyı zorlaştırır, küçük lezyonları maskeleyebilir.",
        prevention: [
            "Düzenli detektör kalibrasyonu",
            "Arızalı detektör elemanının değişimi",
            "Yazılımsal düzeltme"
        ]
    },
    {
        id: "windmill_artifact",
        name: "Windmill (Helical) Artifact",
        turkishName: "Yel Değirmeni Artefaktı",
        modality: "BT",
        category: "BT — Helikal",
        mechanism: "Yüksek kontrastlı yapılarda (kemik/hava sınırı) helikal interpolasyondan kaynaklanan artefakt.",
        appearance: "Yüksek kontrastlı yapılardan uzanan döner çizgiler → yel değirmeni kanatları.",
        clinicalImpact: "Kafa tabanı, vertebra kesitlerinde belirgin.",
        prevention: [
            "Düşük pitch değeri",
            "İnce kollimasyon",
            "Çift kaynaklı BT (Dual-source)"
        ]
    },

    // ─── USG ARTEFAKTLARı ─────────────────────────────────────────
    {
        id: "posterior_acoustic_shadow",
        name: "Posterior Acoustic Shadowing",
        turkishName: "Posterior Akustik Gölge",
        modality: "USG",
        category: "USG — Atenüasyon",
        mechanism: "Ses dalgalarının yoğun yapıdan (taş, kalsifikasyon, kemik) geçerken güçlü yansıma/emilim ile zayıflaması.",
        appearance: "Yoğun yapının arkasında temiz karanlık gölge.",
        clinicalImpact: "Safra taşı, böbrek taşı, kalsifikasyon tespitinde tanısal bulgu.",
        prevention: [
            "Farklı açıdan inceleme",
            "Harmonik görüntüleme"
        ],
        pitfall: "Tanısal olarak kullanılır! Taş + gölge = kesin tanı. Gölgesiz ekojenik odak → sludge veya polip düşün."
    },
    {
        id: "posterior_enhancement",
        name: "Posterior Acoustic Enhancement",
        turkishName: "Posterior Akustik Güçlenme",
        modality: "USG",
        category: "USG — Atenüasyon",
        mechanism: "Ses dalgalarının sıvı dolu yapıdan (kist) minimal atenüasyonla geçmesi → arkadaki dokunun parlak görünmesi.",
        appearance: "Kistik yapının arkasında parlak bant.",
        clinicalImpact: "Basit kist kriterlerinden biri. Kist vs solid ayrımında kullanılır.",
        prevention: [
            "Gerekli değil — tanısal olarak değerli"
        ],
        pitfall: "Bazı solid tümörler de posterior enhancement gösterebilir (hücresel tümörler). Doppler ile değerlendir."
    },
    {
        id: "reverberation_usg",
        name: "Reverberation Artifact",
        turkishName: "Reverberasyon Artefaktı",
        modality: "USG",
        category: "USG — Yansıma",
        mechanism: "Ses dalgalarının iki paralel yansıtıcı yüzey arasında ileri-geri yansıması → tekrarlayan ekolar.",
        appearance: "Eşit aralıklı, giderek zayıflayan paralel ekojen çizgiler.",
        clinicalImpact: "Mesane içinde, plevral çizgide, metal yüzeylerde görülür.",
        prevention: [
            "Prob açısını değiştir",
            "Harmonik görüntüleme",
            "Farklı pencere kullan"
        ],
        pitfall: "A-line (akciğer USG) bir reverberasyon artefaktıdır ve NORMAL plevral kayma ile birlikte normal akciğer bulgusudur."
    },
    {
        id: "comet_tail_usg",
        name: "Comet-Tail Artifact",
        turkishName: "Kuyruklu Yıldız Artefaktı",
        modality: "USG",
        category: "USG — Yansıma",
        mechanism: "Küçük, güçlü yansıtıcılardan (kristal, mikrokalsifikasyon) kaynaklanan reverberasyon → V-şeklinde artefakt.",
        appearance: "Ekojenik odaktan uzanan kısa, daralan parlak kuyruk.",
        clinicalImpact: "Adenomyomatozis (safra kesesi), kolesterol kristalleri, pnömoperitoneum.",
        prevention: [
            "Gerekli değil — tanısal olarak değerli"
        ],
        pitfall: "Ring-down artifact (B-line) vs comet-tail: B-line uzun ve solmaz → pulmoner ödem. Comet-tail kısa ve söner."
    },
    {
        id: "mirror_artifact",
        name: "Mirror Artifact",
        turkishName: "Ayna Artefaktı",
        modality: "USG",
        category: "USG — Yansıma",
        mechanism: "Güçlü yansıtıcı düz yüzeyden (diyafragma) ses dalgalarının ayna gibi yansıması → yapının yanlış lokalizasyonu.",
        appearance: "Diyafragmanın ötesinde karaciğer parankiminin tekrar görülmesi (supradiyafragmatik psödolezyon).",
        clinicalImpact: "Karaciğer lezyonu akciğerde gibi görünebilir. Deneyimsiz kullanıcıyı yanıltabilir.",
        prevention: [
            "Prob açısını değiştir",
            "Farklı pencereden incele",
            "BT ile korelasyon"
        ]
    },
    {
        id: "edge_shadow",
        name: "Edge Shadowing (Refraction)",
        turkishName: "Kenar Gölgesi (Refraksiyon)",
        modality: "USG",
        category: "USG — Refraksiyon",
        mechanism: "Yuvarlak yapıların (kist, damar) kenarlarında ses dalgalarının kırılması → arkada ince gölge.",
        appearance: "Kist/damar kenarlarından uzanan bilateral ince gölgeler.",
        clinicalImpact: "Safra kesesi boyun kısmında taş olmadan gölge oluşabilir → yalancı pozitif.",
        prevention: [
            "Prob açısını değiştir",
            "Birden fazla açıdan değerlendir"
        ]
    },
    {
        id: "anisotropy",
        name: "Anisotropy Artifact",
        turkishName: "Anizotropi Artefaktı",
        modality: "USG",
        category: "USG — Tendon/Sinir",
        mechanism: "Tendon liflerine ses dalgalarının 90° dışında açıyla geldiğinde sinyal kaybı (tendon fibrillerinin yönelim bağımlı yansıtması).",
        appearance: "Normal tendonun hipoekojenik görünmesi → patolojik gibi (tendinopati/yırtık taklit edebilir).",
        clinicalImpact: "MSK USG'de en sık yanılma nedeni! Supraspinatus, Aşil, patellar tendonda sık.",
        prevention: [
            "Probu tendona dik tut (90° insonasyon açısı)",
            "Probu sallar gibi hafifçe açı değiştir (dinamik değerlendirme)",
            "Compound imaging kullan"
        ],
        pitfall: "Tendon prob açısı değiştirildiğinde tekrar normal ekojenik görünürse → anizotropi. Patolojide açı değiştirmekle düzelmez."
    },
    {
        id: "twinkling_artifact",
        name: "Twinkling Artifact",
        turkishName: "Parıldama Artefaktı",
        modality: "USG",
        category: "USG — Doppler",
        mechanism: "Kalsifiye yapı/taş yüzeyinde Doppler sinyalinin kaotik yansıması → yanıp sönen renkli Doppler sinyali.",
        appearance: "Taş/kalsifikasyon arkasında karışık kırmızı-mavi Doppler sinyali (akım olmadan).",
        clinicalImpact: "Küçük böbrek taşlarının tespitinde yararlı! Gölge vermeyen taşlarda bile pozitif olabilir.",
        prevention: [
            "Gerekli değil — tanısal olarak değerli"
        ],
        pitfall: "Twinkling artifact küçük taşlarda B-mod'da gölge vermeyebilir ama Doppler'da parlayarak tanıda yardımcı olur."
    }
];
