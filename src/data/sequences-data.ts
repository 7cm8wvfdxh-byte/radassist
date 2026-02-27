// MR Sekans Bilgileri
// Radyoloji pratisyenleri için kapsamlı MR sekans referansı

export interface MRSequence {
  id: string;
  name: string;
  fullName: string;
  category: 'basic' | 'advanced' | 'functional' | 'angio' | 'special';
  description: string;
  principle: string;
  signalCharacteristics: {
    bright: string[];
    dark: string[];
    intermediate?: string[];
  };
  clinicalUse: string[];
  parameters?: {
    TR?: string;
    TE?: string;
    flipAngle?: string;
    other?: string;
  };
  tips: string[];
  relatedSequences?: string[];
  color: string;
}

export const MR_SEQUENCE_CATEGORIES: Record<string, { label: string; labelEn: string; color: string }> = {
  basic: { label: 'Temel Sekanslar', labelEn: 'Basic Sequences', color: 'cyan' },
  advanced: { label: 'İleri Sekanslar', labelEn: 'Advanced Sequences', color: 'purple' },
  functional: { label: 'Fonksiyonel', labelEn: 'Functional', color: 'emerald' },
  angio: { label: 'MR Anjiyografi', labelEn: 'MR Angiography', color: 'rose' },
  special: { label: 'Özel Teknikler', labelEn: 'Special Techniques', color: 'amber' },
};

export const MR_SEQUENCES: MRSequence[] = [
  // ── TEMEL SEKANSLAR ──────────────────────────────────────
  {
    id: 't1w',
    name: 'T1W',
    fullName: 'T1-Weighted (T1 Ağırlıklı)',
    category: 'basic',
    description: 'Anatomik detay için temel sekans. Yağ parlak, su koyu görünür.',
    principle: 'Kısa TR ve kısa TE kullanılır. Dokuların T1 relaksasyon süresindeki farklılıklara dayalı kontrast elde edilir.',
    signalCharacteristics: {
      bright: ['Yağ', 'Subakut kanama (methemoglobin)', 'Gadolinium kontrast tutulumu', 'Protein içerikli sıvı', 'Melanin', 'Paramanyetik maddeler'],
      dark: ['Su / BOS', 'Kalsifikasyon', 'Hava', 'Fibröz doku', 'Tendon / ligament', 'Hızlı akım (flow void)'],
      intermediate: ['Kas', 'Gri cevher', 'Beyaz cevher (gri cevherden parlak)'],
    },
    clinicalUse: [
      'Anatomik değerlendirme',
      'Post-kontrast inceleme',
      'Kemik iliği patolojileri',
      'Yağ içerikli lezyonlar (lipom, dermoid)',
      'Subakut hemoraji tespiti',
    ],
    parameters: { TR: '400-700 ms', TE: '10-30 ms', flipAngle: '90°' },
    tips: [
      'BOS koyu, beyaz cevher gri cevherden parlak → T1 olduğunu doğrulayın',
      'Kontrast sonrası mutlaka yağ baskılı T1 kullanın',
      'Melanom metastazları T1\'de spontan parlak olabilir',
    ],
    relatedSequences: ['t1w-fs', 't1w-gd'],
    color: 'blue',
  },
  {
    id: 't1w-fs',
    name: 'T1W FS',
    fullName: 'T1-Weighted Fat Sat (T1 Yağ Baskılı)',
    category: 'basic',
    description: 'Yağ sinyali baskılanmış T1 sekans. Kontrast tutulumunu net gösterir.',
    principle: 'T1W sekansına frekans-seçici yağ baskılama eklenir. Yağ sinyali ortadan kalkınca kontrast tutulumu belirginleşir.',
    signalCharacteristics: {
      bright: ['Gadolinium kontrast tutulumu', 'Subakut kanama', 'Protein içerikli koleksiyon', 'Melanin'],
      dark: ['Yağ (baskılanmış)', 'Su / BOS', 'Hava', 'Kalsifikasyon'],
    },
    clinicalUse: [
      'Post-kontrast değerlendirme (altın standart)',
      'Kemik iliği ödemi',
      'Enflamatuar patolojiler',
      'Tümör yayılımı değerlendirmesi',
    ],
    parameters: { TR: '400-700 ms', TE: '10-30 ms' },
    tips: [
      'Kontrast sonrası en önemli sekans',
      'Homojen yağ baskılama olmazsa DIXON tercih edin',
      'Adrenal adenomları değerlendirmede In/Out phase ile birlikte kullanın',
    ],
    relatedSequences: ['t1w', 'dixon'],
    color: 'blue',
  },
  {
    id: 't2w',
    name: 'T2W',
    fullName: 'T2-Weighted (T2 Ağırlıklı)',
    category: 'basic',
    description: 'Patoloji tespiti için temel sekans. Su ve ödem parlak görünür.',
    principle: 'Uzun TR ve uzun TE kullanılır. Dokuların T2 relaksasyon süresindeki farklılıklara dayalı kontrast elde edilir.',
    signalCharacteristics: {
      bright: ['Su / BOS', 'Ödem', 'Enflamasyon', 'Çoğu tümör', 'Kist', 'Hiyalin kıkırdak'],
      dark: ['Hava', 'Kortikal kemik', 'Kalsifikasyon', 'Fibröz doku', 'Hemosiderin', 'Deoksihemoglobin', 'Hızlı akım (flow void)'],
      intermediate: ['Yağ (orta-parlak)', 'Kas', 'Gri cevher (beyaz cevherden parlak)'],
    },
    clinicalUse: [
      'Patoloji tarama (ödem, enflamasyon)',
      'Beyin lezyonları (MS plakları, enfarkt)',
      'Spinal kanal patolojileri',
      'Eklem iç yapıları (menisküs, labrum)',
      'Abdominal organ patolojileri',
    ],
    parameters: { TR: '2000-6000 ms', TE: '80-120 ms', flipAngle: '90°' },
    tips: [
      'BOS parlak, gri cevher beyaz cevherden parlak → T2 doğrulaması',
      'Patolojilerin çoğu T2\'de parlak görünür ("parlak = patoloji" kuralı)',
      'Hemorajinin evresi T2 sinyalini etkiler - evre tablosuna bakın',
    ],
    relatedSequences: ['t2w-fs', 'flair'],
    color: 'green',
  },
  {
    id: 't2w-fs',
    name: 'T2W FS / STIR',
    fullName: 'T2 Fat Sat / Short Tau Inversion Recovery',
    category: 'basic',
    description: 'Yağ baskılı T2 sekans. Ödem ve patoloji tespitinde en hassas sekans.',
    principle: 'T2W\'ye yağ baskılama eklenir. STIR, inversion recovery ile yağı baskılar (TI ~150ms @ 1.5T). Ödem ve patoloji çok belirgin hale gelir.',
    signalCharacteristics: {
      bright: ['Ödem', 'Sıvı', 'Enflamasyon', 'Tümör', 'Kemik iliği ödemi'],
      dark: ['Yağ (baskılanmış)', 'Kortikal kemik', 'Hava', 'Fibröz doku'],
    },
    clinicalUse: [
      'Kemik iliği ödemi / kontüzyonu',
      'Yumuşak doku enflamasyonu',
      'Ligament / tendon yaralanması',
      'MSK patoloji tarama',
      'Lenf nodu değerlendirme',
    ],
    parameters: { TR: '3000-6000 ms', TE: '60-100 ms', other: 'STIR TI: 150ms (1.5T) / 220ms (3T)' },
    tips: [
      'STIR, T2 FS\'den daha homojen yağ baskılama sağlar',
      'STIR kontrast ile birlikte KULLANILMAMALI (Gd sinyalini de baskılar)',
      'Kemik iliği ödemi için en hassas sekans',
    ],
    relatedSequences: ['t2w', 'pdw-fs'],
    color: 'green',
  },
  {
    id: 'pdw',
    name: 'PD / PDW',
    fullName: 'Proton Density Weighted (Proton Yoğunluğu Ağırlıklı)',
    category: 'basic',
    description: 'Yüksek SNR ile anatomik detay. Özellikle MSK\'de menisküs ve kıkırdak için kullanılır.',
    principle: 'Uzun TR, kısa TE kullanılır. Kontrast proton yoğunluğuna bağlıdır. T1 ve T2 etkileri minimize edilir.',
    signalCharacteristics: {
      bright: ['Yağ', 'Su (orta-parlak)', 'Kıkırdak', 'Kas (orta)'],
      dark: ['Kortikal kemik', 'Kalsifikasyon', 'Fibröz doku', 'Hava'],
    },
    clinicalUse: [
      'Menisküs yırtığı değerlendirme',
      'Kıkırdak defektleri',
      'Eklem iç yapıları',
      'Rotator kaf değerlendirme',
    ],
    parameters: { TR: '2000-5000 ms', TE: '10-35 ms' },
    tips: [
      'PD FS, diz MR\'da menisküs değerlendirmede altın standarttır',
      'Kıkırdak ve menisküs arasındaki kontrastı en iyi gösteren sekanstır',
      'T2\'ye göre daha yüksek SNR sağlar',
    ],
    relatedSequences: ['pdw-fs'],
    color: 'sky',
  },
  {
    id: 'pdw-fs',
    name: 'PD FS',
    fullName: 'Proton Density Fat Saturated',
    category: 'basic',
    description: 'Yağ baskılı PD. MSK radyolojisinde standart sekans.',
    principle: 'PD sekansına yağ baskılama eklenir. Eklem sıvısı ve patoloji belirginleşir.',
    signalCharacteristics: {
      bright: ['Eklem sıvısı', 'Ödem', 'Kıkırdak (orta-parlak)', 'Patoloji'],
      dark: ['Yağ (baskılanmış)', 'Kortikal kemik', 'Normal menisküs (koyu)', 'Tendon'],
    },
    clinicalUse: [
      'Diz MR - menisküs, kıkırdak, bağ',
      'Omuz MR - rotator kaf, labrum',
      'El bileği, ayak bileği eklem değerlendirme',
      'Kemik iliği ödemi (STIR alternatifi)',
    ],
    parameters: { TR: '2000-5000 ms', TE: '25-40 ms' },
    tips: [
      'Diz MR\'da standart sekans - menisküs yırtığı için en hassas',
      'Sağlam menisküs homojen koyu, yırtık intrameniskal sinyal artışı gösterir',
      'Kıkırdak defektleri: yüzeyde düzensizlik + sinyal artışı',
    ],
    relatedSequences: ['pdw', 't2w-fs'],
    color: 'sky',
  },

  // ── İLERİ SEKANSLAR ──────────────────────────────────────
  {
    id: 'flair',
    name: 'FLAIR',
    fullName: 'Fluid Attenuated Inversion Recovery',
    category: 'advanced',
    description: 'BOS sinyali baskılanmış T2 sekans. Periventriküler ve kortikal lezyonları gösterir.',
    principle: 'Inversion recovery ile BOS baskılanır (TI ~2400ms @ 1.5T). T2 ağırlıklı görüntü elde edilir ancak BOS koyu kalır.',
    signalCharacteristics: {
      bright: ['Periventriküler lezyonlar', 'Kortikal/jukstakortikal lezyonlar', 'Gliozis', 'Subaraknoid kanama (akut)', 'Menenjit', 'Ödem'],
      dark: ['BOS (baskılanmış)', 'Hava', 'Kortikal kemik'],
    },
    clinicalUse: [
      'MS plakları (özellikle periventriküler)',
      'Akut subaraknoid kanama',
      'Leptomeningeal patolojiler',
      'Kortikal enfarktlar',
      'Gliozis ve kronik iskemik değişiklikler',
      'Beyin tümörü sınırları',
    ],
    parameters: { TR: '8000-11000 ms', TE: '80-140 ms', other: 'TI: 2400ms (1.5T) / 2800ms (3T)' },
    tips: [
      'MS tanısında en önemli sekans',
      'Subaraknoid mesafede parlak sinyal → SAK veya menenjit düşünün',
      'FLAIR\'de kortikal parlak sinyal → enfarkt, ensefalit, PRES',
      'Akut laküner enfarktlarda DWI ile birlikte değerlendirin',
    ],
    relatedSequences: ['t2w', 'dwi'],
    color: 'indigo',
  },
  {
    id: 'dwi',
    name: 'DWI',
    fullName: 'Diffusion Weighted Imaging (Difüzyon Ağırlıklı)',
    category: 'advanced',
    description: 'Su moleküllerinin difüzyonunu ölçer. Akut iskemi tanısında altın standart.',
    principle: 'Difüzyon gradyanları uygulanır. Kısıtlı difüzyon (sitotoksik ödem) parlak sinyal verir. ADC haritası ile doğrulanır.',
    signalCharacteristics: {
      bright: ['Akut iskemi/enfarkt', 'Apse (kısıtlı difüzyon)', 'Epidermoid kist', 'Yüksek selüler tümörler', 'Kolesteatom'],
      dark: ['Normal beyin parankimi', 'BOS (b1000\'de)', 'Araknoid kist'],
    },
    clinicalUse: [
      'Akut serebral iskemi (dakikalar içinde pozitif)',
      'Apse vs. nekrotik tümör ayrımı',
      'Epidermoid vs. araknoid kist ayrımı',
      'Tümör gradeleme (yüksek selülarite)',
      'Kolesteatom tespiti',
      'Ensefalit (herpes)',
    ],
    parameters: { other: 'b-değerleri: 0, 500, 1000 s/mm²' },
    tips: [
      'DWI parlak + ADC koyu = GERÇEK difüzyon kısıtlanması',
      'DWI parlak + ADC parlak = T2 shine-through (kısıtlanma yok)',
      'Akut inme: DWI 6 dakika içinde pozitifleşir, BT\'den çok önce',
      'Apse: DWI parlak + ADC koyu | Nekrotik tümör: DWI koyu + ADC parlak',
    ],
    relatedSequences: ['adc', 'flair'],
    color: 'orange',
  },
  {
    id: 'adc',
    name: 'ADC',
    fullName: 'Apparent Diffusion Coefficient (Görünür Difüzyon Katsayısı)',
    category: 'advanced',
    description: 'DWI\'dan hesaplanan kantitatif harita. Gerçek difüzyon kısıtlanmasını doğrular.',
    principle: 'Farklı b-değerlerindeki DWI\'dan hesaplanır. T2 shine-through artefaktını ortadan kaldırır.',
    signalCharacteristics: {
      bright: ['Vazojenik ödem', 'BOS', 'Nekrotik alan', 'Kronik enfarkt'],
      dark: ['Akut iskemi (sitotoksik ödem)', 'Apse', 'Yüksek selüler tümör', 'Epidermoid'],
    },
    clinicalUse: [
      'DWI ile birlikte difüzyon kısıtlanmasını doğrulama',
      'T2 shine-through artefaktını ayırt etme',
      'Tümör selülaritesini değerlendirme',
      'Tedavi yanıtı takibi',
    ],
    tips: [
      'ADC değeri düşük → kısıtlı difüzyon → patolojik',
      'Tümör ADC: düşük → yüksek grade, yüksek → düşük grade (genel kural)',
      'DWI ve ADC her zaman birlikte değerlendirilmeli',
    ],
    relatedSequences: ['dwi'],
    color: 'orange',
  },
  {
    id: 'swi',
    name: 'SWI',
    fullName: 'Susceptibility Weighted Imaging (Duyarlılık Ağırlıklı)',
    category: 'advanced',
    description: 'Manyetik duyarlılık farklılıklarını gösterir. Kanama, kalsifikasyon ve venöz yapılar için duyarlı.',
    principle: 'T2* gradyan eko sekansı. Faz ve magnitude görüntüleri birleştirilir. Paramanyetik (deoksihemoglobin, hemosiderin) ve diamanyetik (kalsifikasyon) maddeler koyu görünür.',
    signalCharacteristics: {
      bright: ['Yağ', 'Normal parankım'],
      dark: ['Hemosiderin / kanama ürünleri', 'Deoksihemoglobin', 'Kalsifikasyon', 'Venöz yapılar', 'Hava-doku sınırı artefaktı'],
    },
    clinicalUse: [
      'Mikro kanama tespiti (DAI, amiloid anjiyopati)',
      'Kavernom tanısı',
      'Venöz anomaliler (DVA)',
      'Travmatik aksonal hasar (DAI)',
      'Kalsifikasyon tespiti',
      'Tümör içi kanama',
    ],
    parameters: { TE: '20-40 ms (uzun)', flipAngle: '15-20°' },
    tips: [
      'Mikro kanamalarda T2\'den çok daha hassas',
      'Faz haritasında: kanama ve kalsifikasyon zıt sinyal verir (ayrım)',
      'DAI şüphesinde mutlaka SWI isteyin',
      'Amiloid anjiyopati: kortikal-subkortikal mikro kanamalar',
    ],
    relatedSequences: ['t2star'],
    color: 'red',
  },
  {
    id: 'dixon',
    name: 'DIXON',
    fullName: 'Dixon Tekniği (In-Phase / Opposed-Phase)',
    category: 'advanced',
    description: 'Yağ-su ayrımı tekniği. Yağ içeriği kantitatif değerlendirmesi ve homojen yağ baskılama.',
    principle: 'Su ve yağ protonları farklı rezonans frekansında precesse eder. In-phase ve opposed-phase TE\'lerde görüntü alınarak yağ ve su ayrılır.',
    signalCharacteristics: {
      bright: ['In-phase: yağ + su birlikte', 'Water-only: sadece su', 'Fat-only: sadece yağ'],
      dark: ['Opposed-phase: yağ+su karışık dokularda sinyal kaybı (India ink artefaktı)'],
    },
    clinicalUse: [
      'Adrenal adenom vs. metastaz ayrımı',
      'Karaciğer yağlanması (steatoz)',
      'Kemik iliğinde yağ değerlendirme',
      'Homojen yağ baskılama (STIR alternatifi)',
      'Yağlı tümörler (AML, lipom)',
    ],
    parameters: { other: 'In-phase TE: 4.6ms (1.5T) / 2.3ms (3T) | Opposed-phase TE: 2.3ms (1.5T) / 1.15ms (3T)' },
    tips: [
      'Adrenal: opposed-phase\'de sinyal kaybı → adenom (intrasellüler yağ)',
      'India ink artefaktı: yağ-su sınırında koyu halka (opposed-phase)',
      'Steatoz: opposed-phase\'de karaciğer sinyali dalağa göre düşer',
      'Signal Intensity Index (SII) > %20 → yağ varlığı',
    ],
    relatedSequences: ['t1w-fs'],
    color: 'violet',
  },

  // ── FONKSİYONEL SEKANSLAR ──────────────────────────────
  {
    id: 'mrspc',
    name: 'MRS',
    fullName: 'MR Spektroskopi',
    category: 'functional',
    description: 'Doku metabolitlerini ölçer. Tümör gradeleme ve ayırıcı tanıda kullanılır.',
    principle: 'Her metabolitin farklı rezonans frekansı (ppm) kullanılarak kimyasal bileşim analizi yapılır.',
    signalCharacteristics: {
      bright: [],
      dark: [],
    },
    clinicalUse: [
      'Tümör vs. enfeksiyon vs. demiyelinizan ayrımı',
      'Tümör gradeleme (Cho/Cr, Cho/NAA)',
      'Radyonekroz vs. rekürren tümör',
      'Metabolik hastalıklar',
      'Hepatik ensefalopati',
    ],
    parameters: { other: 'TE: 35ms (kısa TE) veya 144ms (uzun TE) | Single-voxel veya multi-voxel' },
    tips: [
      'NAA (2.0 ppm): nöronal belirteç, tümörde azalır',
      'Cho (3.2 ppm): membran turnover, tümörde artar',
      'Cr (3.0 ppm): enerji metabolizması, referans metabolit',
      'Laktat (1.3 ppm): anaerobik metabolizma, nekroz, apse',
      'Lipid (0.9-1.3 ppm): nekroz, yüksek grade tümör',
      'Apse: aminoasit + asetat + süksinat pikleri',
    ],
    relatedSequences: ['dwi'],
    color: 'emerald',
  },
  {
    id: 'perfusion',
    name: 'Perfüzyon MR',
    fullName: 'DSC / DCE Perfüzyon MR',
    category: 'functional',
    description: 'Doku perfüzyonunu değerlendirir. Tümör gradeleme ve iskemi değerlendirmesinde kullanılır.',
    principle: 'DSC: Kontrast bolus geçişi sırasında T2* sinyal kaybı ölçülür. DCE: T1 bazlı kontrast geçirgenliği ölçülür. rCBV, rCBF, MTT parametreleri hesaplanır.',
    signalCharacteristics: {
      bright: [],
      dark: [],
    },
    clinicalUse: [
      'Gliom gradeleme (rCBV)',
      'Rekürren tümör vs. radyonekroz',
      'Akut iskemide penumbra değerlendirme (DWI-Perfüzyon mismatch)',
      'Tümör neoanjiyogenezi',
    ],
    parameters: { other: 'DSC: GRE-EPI, TR 1-2s | DCE: 3D T1W, temporal rezolüsyon 5-10s' },
    tips: [
      'Yüksek grade gliom: rCBV artmış (>1.75 eşik)',
      'Düşük grade gliom: rCBV normal veya hafif artmış',
      'Radyonekroz: rCBV düşük | Rekürren tümör: rCBV yüksek',
      'DWI-perfüzyon mismatch → tedavi edilebilir penumbra',
    ],
    relatedSequences: ['dwi'],
    color: 'pink',
  },
  {
    id: 'dti',
    name: 'DTI',
    fullName: 'Diffusion Tensor Imaging (Difüzyon Tensör Görüntüleme)',
    category: 'functional',
    description: 'Beyaz cevher traktlarının yönelimini ve bütünlüğünü değerlendirir.',
    principle: 'En az 6 farklı yönde difüzyon gradyanı uygulanır. Fractional anisotropy (FA) ve traktografi haritaları oluşturulur.',
    signalCharacteristics: {
      bright: [],
      dark: [],
    },
    clinicalUse: [
      'Preoperatif traktografi (cerrahi planlama)',
      'Beyaz cevher hastalıkları',
      'Travmatik aksonal hasar',
      'Tümör infiltrasyonu vs. itilme ayrımı',
      'Gelişimsel anomaliler',
    ],
    parameters: { other: 'Minimum 6 difüzyon yönü, b=1000 s/mm²' },
    tips: [
      'FA değeri: 0 (izotropik) → 1 (tamamen anizotropik)',
      'Normal beyaz cevher FA ~0.4-0.8',
      'Tümör infiltrasyonu: FA azalır, fiber yönelimi bozulur',
      'Renk kodlama: Kırmızı=sağ-sol, Yeşil=ön-arka, Mavi=üst-alt',
    ],
    relatedSequences: ['dwi'],
    color: 'emerald',
  },

  // ── MR ANJİYOGRAFİ ─────────────────────────────────────
  {
    id: 'tof-mra',
    name: 'TOF MRA',
    fullName: 'Time-of-Flight MR Anjiyografi',
    category: 'angio',
    description: 'Kontrastsız MR anjiyografi. İntrakranyal arter değerlendirmede standart.',
    principle: 'Doymuş stasyoner dokuya taze (doymamış) kan girişi parlak sinyal verir. Akım hızına bağlı görüntüleme.',
    signalCharacteristics: {
      bright: ['Arteriyel akım (hızlı akım)', 'Methemoglobin (T1 kısalması)'],
      dark: ['Stasyoner doku (doymuş)', 'Yavaş / türbülan akım'],
    },
    clinicalUse: [
      'İntrakranyal anevrizma tarama',
      'Serebral arter stenozu / oklüzyonu',
      'AVM değerlendirme',
      'Karotis bifurkasyonu',
      'Dural venöz sinüs değerlendirme (venöz TOF)',
    ],
    parameters: { TR: '20-40 ms', TE: '3-7 ms', flipAngle: '15-25°' },
    tips: [
      'Kontrast gerektirmez → böbrek yetmezliğinde güvenle kullanılır',
      'Yavaş akım alanlarında sinyal kaybı → stenoz overestimasyonu',
      'Subakut trombüs T1 parlak → yanlış pozitif açık damar izlenimi',
      '3D TOF, 2D\'den daha iyi uzaysal rezolüsyon sağlar',
    ],
    relatedSequences: ['ce-mra'],
    color: 'rose',
  },
  {
    id: 'ce-mra',
    name: 'CE-MRA',
    fullName: 'Contrast-Enhanced MR Anjiyografi (Kontrastlı)',
    category: 'angio',
    description: 'Gadolinium ile kontrastlı MR anjiyografi. Geniş alan ve yüksek rezolüsyon.',
    principle: 'IV gadolinium T1 kısaltması yaparak damar lümenini parlaklaştırır. Hızlı 3D T1W GRE sekansları kullanılır.',
    signalCharacteristics: {
      bright: ['Kontrastlı kan (arter ve ven)', 'Gadolinium tutan yapılar'],
      dark: ['Kontrastsız doku'],
    },
    clinicalUse: [
      'Aort patolojileri (anevrizma, diseksiyon)',
      'Periferik arter hastalığı',
      'Renal arter stenozu',
      'Pulmoner emboli',
      'Portal ven değerlendirme',
    ],
    parameters: { other: 'Gadolinium: 0.1-0.2 mmol/kg, 2-3 ml/s, bolus timing kritik' },
    tips: [
      'Timing çok önemli - bolus tracking veya test bolus kullanın',
      'Arteriyel faz: enjeksiyondan ~15-20 sn sonra',
      'Subtraksiyon görüntüler arka plan sinyalini kaldırır',
      'eGFR <30 → NSF riski, makrosiklik ajan tercih edin',
    ],
    relatedSequences: ['tof-mra'],
    color: 'rose',
  },

  // ── ÖZEL TEKNİKLER ─────────────────────────────────────
  {
    id: 'mrcp',
    name: 'MRCP',
    fullName: 'MR Kolanjiopankreatografi',
    category: 'special',
    description: 'Safra yolları ve pankreas kanalını non-invaziv görüntüler.',
    principle: 'Ağır T2 ağırlıklı sekans (çok uzun TE). Statik sıvı parlak, doku koyu. Safra ve pankreas sıvısı yüksek sinyal verir.',
    signalCharacteristics: {
      bright: ['Safra sıvısı', 'Pankreas kanalı sıvısı', 'BOS', 'Serbest sıvı'],
      dark: ['Tüm solid dokular', 'Taşlar (filling defekt)'],
    },
    clinicalUse: [
      'Koledokolitiyazis',
      'Safra yolu darlıkları / obstrüksiyonu',
      'Pankreatik kanal anomalileri',
      'Pankreas divisum',
      'Biliyer anatomi haritalama (pre-op)',
    ],
    parameters: { TE: '600-1000 ms (çok uzun)', other: 'Solunumla tetikleme, ince kesit 3D veya kalın kesit 2D' },
    tips: [
      'Taşlar: sıvı içinde koyu dolma defekti',
      'Klatskin tümörü: bifurkasyonda keskin darlık + proksimal dilatasyon',
      'Sekretinli MRCP: pankreas kanal fonksiyonunu değerlendirir',
      'Oral negatif kontrast (ananas suyu vb.) mide/duodenum sinyalini azaltır',
    ],
    color: 'amber',
  },
  {
    id: 'mru',
    name: 'MR Ürografi',
    fullName: 'MR Ürografi',
    category: 'special',
    description: 'Üriner sistem görüntülemesi. İyotlu kontrast kullanılamayan hastalarda IVP alternatifi.',
    principle: 'T2 ağırlıklı (MRCP benzeri) veya kontrast sonrası gecikmiş T1 ağırlıklı görüntüleme.',
    signalCharacteristics: {
      bright: ['İdrar (T2W)', 'Kontrast tutan üriner sistem (T1W gecikmiş)'],
      dark: ['Solid yapılar (T2W)', 'Taşlar (dolma defekti)'],
    },
    clinicalUse: [
      'Üreteral obstrüksiyon',
      'Konjenital üriner anomaliler (pediatrik)',
      'Transplant böbrek değerlendirme',
      'İyot alerjisi olan hastalarda',
      'Gebelikte (kontrastsız)',
    ],
    tips: [
      'Statik MR ürografi (T2): obstrükte dilate sistemi gösterir',
      'Ekskretuar MR ürografi: fonksiyonel bilgi verir (kontrast gerektirir)',
      'Pediatrik hastalarda radyasyonsuz olması avantaj',
    ],
    color: 'amber',
  },
  {
    id: 'cine',
    name: 'Cine MR',
    fullName: 'Cine Balanced SSFP (Kardiyak MR)',
    category: 'special',
    description: 'Kalp fonksiyonunu hareketle değerlendirir. Ejeksiyon fraksiyonu ve duvar hareketi analizi.',
    principle: 'Balanced SSFP (TrueFISP/FIESTA) sekansı ile ECG eşliğinde kalp siklüsü boyunca görüntü alınır.',
    signalCharacteristics: {
      bright: ['Kan (T2/T1 oranı yüksek)', 'Yağ', 'Sıvı'],
      dark: ['Miyokard', 'Akciğer'],
    },
    clinicalUse: [
      'Ventrikül fonksiyonu (EF hesaplama)',
      'Duvar hareket analizi',
      'Kapak değerlendirme',
      'Konjenital kalp hastalıkları',
      'Perikardiyal patolojiler',
    ],
    parameters: { TR: '3-4 ms', TE: '1.5-2 ms', flipAngle: '45-70°', other: 'ECG gating, 20-30 faz/siklüs' },
    tips: [
      'Kan-miyokard kontrastı mükemmel',
      'Band artefaktı: B0 inhomojeneliğinde görülür, shimming önemli',
      'Short-axis kesitler: EF ve volüm hesaplama için standart',
      '4-chamber ve 2-chamber: duvar hareket değerlendirme',
    ],
    color: 'amber',
  },
  {
    id: 'lge',
    name: 'Late Gadolinium',
    fullName: 'Late Gadolinium Enhancement (Geç Kontrast Tutulumu)',
    category: 'special',
    description: 'Miyokard fibrozis ve nekroz tespiti. İskemik ve non-iskemik kardiyomiyopati ayrımı.',
    principle: 'Kontrast sonrası 10-15 dk geç fazda IR-GRE sekans. Normal miyokard koyu, fibrotik/nekrotik alan parlak.',
    signalCharacteristics: {
      bright: ['Miyokard fibrozu', 'Nekroz', 'Skar dokusu', 'Enfarkt alanı'],
      dark: ['Normal miyokard (nulled)', 'Kan'],
    },
    clinicalUse: [
      'Miyokard enfarktüsü (transmural vs. subendokardiyal)',
      'Miyokardit',
      'Hipertrofik kardiyomiyopati (HCM)',
      'Sarkoidoz',
      'Amiloidoz',
      'Viabilite değerlendirme',
    ],
    parameters: { other: 'TI: 200-350ms (miyokard nulling), kontrast sonrası 10-15 dk' },
    tips: [
      'İskemik: subendokardiyal → transmural yayılım (koroner dağılım)',
      'Non-iskemik: mid-wall veya epikardiyal tutulum',
      'Miyokardit: epikardiyal / mid-wall (inferolateral sık)',
      'Viabilite: transmural tutulum >%50 → revaskülarizasyon yanıtı kötü',
    ],
    color: 'amber',
  },
];

// ── HEMORAJI EVRELERİ TABLOSU ─────────────────────────────
export interface HemorrhageStage {
  stage: string;
  timing: string;
  product: string;
  t1Signal: string;
  t2Signal: string;
  location: string;
}

export const HEMORRHAGE_STAGES: HemorrhageStage[] = [
  { stage: 'Hiperakut', timing: '<6 saat', product: 'Oksihemoglobin', t1Signal: 'İzo/hafif hipo', t2Signal: 'Parlak', location: 'İntrasellüler' },
  { stage: 'Akut', timing: '6-72 saat', product: 'Deoksihemoglobin', t1Signal: 'İzo/hafif hipo', t2Signal: 'Koyu', location: 'İntrasellüler' },
  { stage: 'Erken subakut', timing: '3-7 gün', product: 'Methemoglobin', t1Signal: 'Parlak', t2Signal: 'Koyu', location: 'İntrasellüler' },
  { stage: 'Geç subakut', timing: '1-4 hafta', product: 'Methemoglobin', t1Signal: 'Parlak', t2Signal: 'Parlak', location: 'Ekstrasellüler' },
  { stage: 'Kronik', timing: '>1 ay', product: 'Hemosiderin/Ferritin', t1Signal: 'Koyu', t2Signal: 'Koyu (rim)', location: 'Ekstrasellüler' },
];
