export interface ReportTemplate {
    pathologyId: string;
    technique: string;
    clinicalInfo?: string; // Generic placeholder or specific to disease
    findingsTemplate: string; // The core text with placeholders
    impressionTemplate: string; // The conclusion text
}

export const REPORT_TEMPLATES: Record<string, ReportTemplate> = {
    // --- BRAIN ---
    "glioblastoma": {
        pathologyId: "glioblastoma",
        technique: "Multiplanar, multisekans kranial MR incelemesi.",
        findingsTemplate: "Serebral hemisferde, belirgin kitle etkisi (mass effect) oluşturan, çevresinde geniş vazojenik ödem alanı izlenen, T1 ağırlıklı serilerde hipointens, T2 ağırlıklı serilerde heterojen hiperintens sinyal özelliğinde kitle lezyonu izlenmiştir. IVKM sonrası lezyonda periferik, kalın ve düzensiz kontrast tutulumu (ring enhancement) ve yer yer nekrotik alanlar dikkati çekmiştir. Orta hat yapılarında karşı tarafa şift izlenmektedir.",
        impressionTemplate: "Tanımlanan kitle lezyonu; ön planda yüksek dereceli glial tümör (Glioblastom) ile uyumlu değerlendirilmiştir. Histopatolojik verifikasyon önerilir."
    },
    "multiple_sclerosis": {
        pathologyId: "multiple_sclerosis",
        technique: "T1, T2, FLAIR ağırlıklı kranial MR incelemesi.",
        findingsTemplate: "Periventriküler beyaz cevherde, korpus kallozumda ve semiovale düzeyinde, T2 ve FLAIR ağırlıklı serilerde hiperintens sinyal artışı gösteren ovoid şekilli (Dawson parmakları) demiyelinizan plaklar izlenmiştir. Bazı lezyonların IVKM sonrası aktif kontrast tutulumu gösterdiği saptanmıştır.",
        impressionTemplate: "Demiyelinizan hastalık (Multipl Skleroz) ile uyumlu MR bulguları. McDonald kriterleri açısından klinik korelasyon önerilir."
    },
    "acute_ischemic_stroke": {
        pathologyId: "acute_ischemic_stroke",
        technique: "Difüzyon ağırlıklı (DWI/ADC) kranial MR incelemesi.",
        findingsTemplate: "Vasküler sulama alanına uyan lokalizasyonda, DWI incelemede difüzyon kısıtlılığı (parlak sinyal), ADC haritalamada sinyal kaybı izlenmiştir. T2/FLAIR serilerde hafif hiperintensite izlenmekte olup, belirgin hemorajik transformasyon saptanmamıştır.",
        impressionTemplate: "Akut dönem iskemik enfarkt ile uyumlu bulgular."
    },


    "meningioma": {
        pathologyId: "meningioma",
        technique: "Multiplanar kranial MR (T1, T2, FLAIR) ve IVKM sonrası sekanslar.",
        findingsTemplate: "Ekstra-aksiyal yerleşimli, T1'de izointens, T2'de izo-hiperintens, IVKM sonrası yoğun ve homojen kontrastlanan kitle lezyonu izlenmiştir. Lezyonun dural tabanı geniş olup, komşu durada 'kuyruk' tarzında kontrastlanma (dural tail) dikkati çekmiştir. Beyin parankimi ile arasında BOS mesafesi (CSF cleft) korunmuştur.",
        impressionTemplate: "Tipik MR bulguları Meningiom ile uyumludur."
    },
    "subdural_hematoma": {
        pathologyId: "subdural_hematoma",
        technique: "Non-kontrast Kranial BT.",
        findingsTemplate: "Frontoparietal konveksitede, kalvarium ile beyin parankimi arasında, orağı (falks) geçmeyen ancak sütürleri geçen, hilal (yarım ay) şeklinde hiperdens ekstra-aksiyal koleksiyon izlenmiştir. Alttaki parankime bası ve sulkal silinme mevcuttur. Orta hat şifti değerlendirilmelidir.",
        impressionTemplate: "Akut Subdural Hematom (SDH) ile uyumlu BT bulguları."
    },
    "epidural_hematoma": {
        pathologyId: "epidural_hematoma",
        technique: "Non-kontrast Kranial BT.",
        findingsTemplate: "Temporoparietal bölgede, bikonveks (lens) şeklinde, sütür hatlarını geçmeyen ancak dural refleksiyonları geçebilen hiperdens koleksiyon izlenmiştir. Komşu kemikte lineer fraktür hattı seçilmektedir. Belirgin kitle etkisi mevcuttur.",
        impressionTemplate: "Akut Epidural Hematom (EDH). Acil Nöroşirürji konsültasyonu önerilir."
    },
    "subarachnoid_hemorrhage": {
        pathologyId: "subarachnoid_hemorrhage",
        technique: "Non-kontrast Kranial BT.",
        findingsTemplate: "Bazal sisternalarda, Silviyan fissürlerde ve kortikal sulkuslarda hiperdens görünüm (kan) izlenmiştir. 'Deniz yıldızı' (Star sign) görünümü mevcuttur. Ventriküler sisteme açılım (intraventriküler hemoraji) eşlik etmektedir.",
        impressionTemplate: "Akut Subaraknoid Kanama (SAK). Etyolojiye yönelik BT Anjiyografi önerilir."
    },
    "cerebral_abscess": {
        pathologyId: "cerebral_abscess",
        technique: "Difüzyon ağırlıklı ve kontrastlı Kranial MR.",
        findingsTemplate: "T2 ağırlıklı serilerde hiperintens, çevresinde geniş vazojenik ödem alanı bulunan, IVKM sonrası ince ve düzgün halkasal (ring) kontrastlanma gösteren lezyon izlenmiştir. DWI incelemede lezyon merkezinde belirgin difüzyon kısıtlılığı (parlak sinyal) saptanmıştır (ADC düşüklüğü ile uyumlu).",
        impressionTemplate: "Piyojenik Serebral Apse ile uyumlu MR bulguları."
    },

    // --- SPINE ---
    "lumbar_disc_herniation": {
        pathologyId: "lumbar_disc_herniation",
        technique: "Sagittal ve aksiyal planlarda T1 ve T2 ağırlıklı Lomber Spinal MR incelemesi.",
        findingsTemplate: "L[X]-L[Y] intervertebral diskinde yükseklik kaybı ve dejenerasyona sekonder T2 sinyal kaybı (disk desikasyonu) izlenmiştir. Bu düzeyde dural keseye ve sinir köküne bası oluşturan disk herniasyonu izlenmektedir. Nöral foramenler daralmıştır.",
        impressionTemplate: "L[X]-L[Y] disk herniasyonu ve sinir kökü basısı."
    },
    "spinal_stenosis_lumbar": {
        pathologyId: "spinal_stenosis_lumbar",
        technique: "Lomber Spinal MR.",
        findingsTemplate: "Lomber lordoz düzleşmiştir. L3-4 ve L4-5 düzeylerinde faset eklem hipertrofisi ve ligamentum flavum kalınlaşmasına bağlı spinal kanal çapında daralma izlenmiştir. Dural kese sıkışmış olup, kauda ekuina liflerinde kıvrımlanma (redundancy) mevcuttur.",
        impressionTemplate: "Lomber Spinal Stenoz (Dar Kanal)."
    },
    "vertebral_osteomyelitis": {
        pathologyId: "vertebral_osteomyelitis",
        technique: "Kontrastlı Spinal MR.",
        findingsTemplate: "L3 ve L4 vertebra korpuslarında karşılıklı end-plate destrüksiyonu, T1 hipointens, T2 hiperintens sinyal değişiklikleri (ödem) izlenmiştir. IVKM sonrası vertebra korpuslarında ve arada kalan disk dokusunda yoğun kontrastlanma mevcuttur. Paraspinal yumuşak dokuda apse formasyonu eşlik etmektedir.",
        impressionTemplate: "Spondilodiskit (Vertebral Osteomiyelit) ile uyumlu bulgular."
    },
    "spondylolisthesis": {
        pathologyId: "spondylolisthesis",
        technique: "Lomber Spinal MR/BT.",
        findingsTemplate: "L5 vertebranın S1 vertebra üzerinde anteriora doğru yer değiştirdiği (anterolistezis) izlenmiştir. Pars interartikülarislerde defekt (spondilolizis) veya faset eklem dejenerasyonu eşlik etmektedir. Spinal kanal ön-arka çapı daralmıştır.",
        impressionTemplate: "L5-S1 Spondilolistezis."
    }
    ,

    // --- LIVER ---
    "hcc": {
        pathologyId: "hcc",
        technique: "Dinamik (trifazik) karaciğer BT/MR incelemesi.",
        findingsTemplate: "Karaciğer parankiminde, arteryel fazda belirgin kontrastlanan, portal venöz ve geç fazlarda parankime göre daha düşük dansitede izlenen (washout) kitle lezyonu dikkati çekmiştir. Lezyon çevresinde kapsül yapısı (geç fazda boyanan) izlenmektedir.",
        impressionTemplate: "Siroz zemininde gelişmiş Hepatosellüler Karsinom (HCC) ile uyumlu dinamik kontrastlanma paterni."
    },
    "liver_hemangioma": {
        pathologyId: "liver_hemangioma",
        technique: "Dinamik karaciğer BT/MR incelemesi.",
        findingsTemplate: "Karaciğerde düzgün sınırlı hipodens/hipointens lezyon izlenmiştir. Arteryel fazda periferik nodüler tarzda kontrastlanan lezyonun, geç fazlarda santrale doğru dolum göstererek (centripetal filling) homojen hale geldiği izlenmiştir.",
        impressionTemplate: "Tipik kavernöz hemanjiyom ile uyumlu bulgular."
    },

    // --- KIDNEY ---
    "kidney_stone": {
        pathologyId: "kidney_stone",
        technique: "Kontrastsız Üriner Sistem BT.",
        findingsTemplate: "Böbrek toplayıcı sisteminde/üreterde yüksek dansiteli (kalsifik) taş ve buna sekonder proksimalde hidronefrotik değişiklikler izlenmiştir. Perinefritik yağ planlarında kirlenme (stranding) saptanmıştır.",
        impressionTemplate: "Üriner sistem taşı (Ürolitiyazis) ve obstrüktif üropati bulguları."
    },

    // --- LUNG ---
    "pneumonia": {
        pathologyId: "pneumonia",
        technique: "Toraks BT incelemesi.",
        findingsTemplate: "Akciğer parankiminde, hava bronkogramları içeren konsolidasyon alanları ve buzlu cam dansiteleri izlenmiştir. Plevral effüzyon eşlik etmemektedir.",
        impressionTemplate: "Pnömonik infiltrasyon ile uyumlu bulgular."
    },
    "pulmonary_embolism": {
        pathologyId: "pulmonary_embolism",
        technique: "Pulmoner BT Anjiyografi.",
        findingsTemplate: "Pulmoner arter ana dallarında ve lober dallarda lümen içerisinde dolum defekti (trombüs) izlenmiştir. Distal akciğer segmentlerinde kama şeklinde subplevral konsolidasyon (Hampton's hump) alanı mevcuttur.",
        impressionTemplate: "Akut Pulmoner Emboli ile uyumlu BT bulguları."
    }
};

export const GENERIC_TEMPLATE: ReportTemplate = {
    pathologyId: "generic",
    technique: "Radyolojik Görüntüleme.",
    findingsTemplate: "İnceleme alanında patolojik sinyal/dansite değişiklikleri izlenmiştir. Seçilen bulgular klinik ile korele edilmelidir.",
    impressionTemplate: "Tanımlanan bulgular [Olası Tanı] ile uyumlu olabilir."
};
