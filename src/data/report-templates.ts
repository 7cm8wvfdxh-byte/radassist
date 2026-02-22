export interface ReportTemplate {
    pathologyId: string;
    label: string;
    organ: string;
    technique: string;
    clinicalInfo?: string;
    findingsTemplate: string;
    impressionTemplate: string;
}

export const REPORT_TEMPLATES: Record<string, ReportTemplate> = {

    // ═══════════════════════════════════════════════════
    // BRAIN & NEURO
    // ═══════════════════════════════════════════════════
    "glioblastoma": {
        pathologyId: "glioblastoma",
        label: "Glioblastom (GBM)",
        organ: "Beyin",
        technique: "Multiplanar, multisekans kranial MR incelemesi.",
        findingsTemplate: "Serebral hemisferde, belirgin kitle etkisi (mass effect) oluşturan, çevresinde geniş vazojenik ödem alanı izlenen, T1 ağırlıklı serilerde hipointens, T2 ağırlıklı serilerde heterojen hiperintens sinyal özelliğinde kitle lezyonu izlenmiştir. IVKM sonrası lezyonda periferik, kalın ve düzensiz kontrast tutulumu (ring enhancement) ve yer yer nekrotik alanlar dikkati çekmiştir. Orta hat yapılarında karşı tarafa şift izlenmektedir.",
        impressionTemplate: "Tanımlanan kitle lezyonu; ön planda yüksek dereceli glial tümör (Glioblastom) ile uyumlu değerlendirilmiştir. Histopatolojik verifikasyon önerilir."
    },
    "multiple_sclerosis": {
        pathologyId: "multiple_sclerosis",
        label: "Multipl Skleroz (MS)",
        organ: "Beyin",
        technique: "T1, T2, FLAIR ağırlıklı kranial MR incelemesi.",
        findingsTemplate: "Periventriküler beyaz cevherde, korpus kallozumda ve semiovale düzeyinde, T2 ve FLAIR ağırlıklı serilerde hiperintens sinyal artışı gösteren ovoid şekilli (Dawson parmakları) demiyelinizan plaklar izlenmiştir. Bazı lezyonların IVKM sonrası aktif kontrast tutulumu gösterdiği saptanmıştır.",
        impressionTemplate: "Demiyelinizan hastalık (Multipl Skleroz) ile uyumlu MR bulguları. McDonald kriterleri açısından klinik korelasyon önerilir."
    },
    "acute_ischemic_stroke": {
        pathologyId: "acute_ischemic_stroke",
        label: "Akut İskemik İnme",
        organ: "Beyin",
        technique: "Difüzyon ağırlıklı (DWI/ADC) kranial MR incelemesi.",
        findingsTemplate: "Vasküler sulama alanına uyan lokalizasyonda, DWI incelemede difüzyon kısıtlılığı (parlak sinyal), ADC haritalamada sinyal kaybı izlenmiştir. T2/FLAIR serilerde hafif hiperintensite izlenmekte olup, belirgin hemorajik transformasyon saptanmamıştır.",
        impressionTemplate: "Akut dönem iskemik enfarkt ile uyumlu bulgular."
    },
    "meningioma": {
        pathologyId: "meningioma",
        label: "Meninjiom",
        organ: "Beyin",
        technique: "Multiplanar kranial MR (T1, T2, FLAIR) ve IVKM sonrası sekanslar.",
        findingsTemplate: "Ekstra-aksiyal yerleşimli, T1'de izointens, T2'de izo-hiperintens, IVKM sonrası yoğun ve homojen kontrastlanan kitle lezyonu izlenmiştir. Lezyonun dural tabanı geniş olup, komşu durada 'kuyruk' tarzında kontrastlanma (dural tail) dikkati çekmiştir. Beyin parankimi ile arasında BOS mesafesi (CSF cleft) korunmuştur.",
        impressionTemplate: "Tipik MR bulguları Meningiom ile uyumludur."
    },
    "subdural_hematoma": {
        pathologyId: "subdural_hematoma",
        label: "Subdural Hematom (SDH)",
        organ: "Beyin",
        technique: "Non-kontrast Kranial BT.",
        findingsTemplate: "Frontoparietal konveksitede, kalvarium ile beyin parankimi arasında, orağı (falks) geçmeyen ancak sütürleri geçen, hilal (yarım ay) şeklinde hiperdens ekstra-aksiyal koleksiyon izlenmiştir. Alttaki parankime bası ve sulkal silinme mevcuttur. Orta hat şifti değerlendirilmelidir.",
        impressionTemplate: "Akut Subdural Hematom (SDH) ile uyumlu BT bulguları."
    },
    "epidural_hematoma": {
        pathologyId: "epidural_hematoma",
        label: "Epidural Hematom (EDH)",
        organ: "Beyin",
        technique: "Non-kontrast Kranial BT.",
        findingsTemplate: "Temporoparietal bölgede, bikonveks (lens) şeklinde, sütür hatlarını geçmeyen ancak dural refleksiyonları geçebilen hiperdens koleksiyon izlenmiştir. Komşu kemikte lineer fraktür hattı seçilmektedir. Belirgin kitle etkisi mevcuttur.",
        impressionTemplate: "Akut Epidural Hematom (EDH). Acil Nöroşirürji konsültasyonu önerilir."
    },
    "subarachnoid_hemorrhage": {
        pathologyId: "subarachnoid_hemorrhage",
        label: "Subaraknoid Kanama (SAK)",
        organ: "Beyin",
        technique: "Non-kontrast Kranial BT.",
        findingsTemplate: "Bazal sisternalarda, Silviyan fissürlerde ve kortikal sulkuslarda hiperdens görünüm (kan) izlenmiştir. 'Deniz yıldızı' (Star sign) görünümü mevcuttur. Ventriküler sisteme açılım (intraventriküler hemoraji) eşlik etmektedir.",
        impressionTemplate: "Akut Subaraknoid Kanama (SAK). Etyolojiye yönelik BT Anjiyografi önerilir."
    },
    "cerebral_abscess": {
        pathologyId: "cerebral_abscess",
        label: "Serebral Apse",
        organ: "Beyin",
        technique: "Difüzyon ağırlıklı ve kontrastlı Kranial MR.",
        findingsTemplate: "T2 ağırlıklı serilerde hiperintens, çevresinde geniş vazojenik ödem alanı bulunan, IVKM sonrası ince ve düzgün halkasal (ring) kontrastlanma gösteren lezyon izlenmiştir. DWI incelemede lezyon merkezinde belirgin difüzyon kısıtlılığı (parlak sinyal) saptanmıştır (ADC düşüklüğü ile uyumlu).",
        impressionTemplate: "Piyojenik Serebral Apse ile uyumlu MR bulguları."
    },
    "hydrocephalus": {
        pathologyId: "hydrocephalus",
        label: "Hidrosefali",
        organ: "Beyin",
        technique: "Non-kontrast Kranial BT / MR.",
        findingsTemplate: "Lateral ventriküller, 3. ventrikül ve 4. ventrikülde belirgin genişleme izlenmiştir. Ventriküllerin köşelerinde interstisyel ödem ile uyumlu T2/FLAIR hiperintensitesi seçilmektedir. Sulkal silinme mevcut olup BOS emilim bozukluğu ile uyumludur. Akvaduktal stenoz veya BOS yol açıklığı değerlendirilmiştir.",
        impressionTemplate: "Obstrüktif/Komunikant Hidrosefali ile uyumlu bulgular. Etyoloji araştırılmalıdır."
    },
    "brain_metastasis": {
        pathologyId: "brain_metastasis",
        label: "Beyin Metastazı",
        organ: "Beyin",
        technique: "IVKM sonrası T1, T2, FLAIR, kontrastlı 3D sekanslar.",
        findingsTemplate: "Her iki serebral hemisferde kortikosubkortikal yerleşimli, çevrelerinde vazojenik ödem alanı içeren, IVKM sonrası halkasal veya nodüler kontrast tutulumu gösteren çok sayıda lezyon saptanmıştır. Lezyonlar gri-beyaz madde birleşim noktalarında ağırlıklı olarak izlenmektedir.",
        impressionTemplate: "Çoklu beyin metastazı ile uyumlu MR bulguları. Primer odak araştırılmalıdır."
    },

    // ═══════════════════════════════════════════════════
    // SPINE
    // ═══════════════════════════════════════════════════
    "lumbar_disc_herniation": {
        pathologyId: "lumbar_disc_herniation",
        label: "Lomber Disk Herniasyonu",
        organ: "Omurga",
        technique: "Sagittal ve aksiyal planlarda T1 ve T2 ağırlıklı Lomber Spinal MR incelemesi.",
        findingsTemplate: "L[X]-L[Y] intervertebral diskinde yükseklik kaybı ve dejenerasyona sekonder T2 sinyal kaybı (disk desikasyonu) izlenmiştir. Bu düzeyde dural keseye ve sinir köküne bası oluşturan disk herniasyonu izlenmektedir. Nöral foramenler daralmıştır.",
        impressionTemplate: "L[X]-L[Y] disk herniasyonu ve sinir kökü basısı."
    },
    "spinal_stenosis_lumbar": {
        pathologyId: "spinal_stenosis_lumbar",
        label: "Lomber Spinal Stenoz",
        organ: "Omurga",
        technique: "Lomber Spinal MR.",
        findingsTemplate: "Lomber lordoz düzleşmiştir. L3-4 ve L4-5 düzeylerinde faset eklem hipertrofisi ve ligamentum flavum kalınlaşmasına bağlı spinal kanal çapında daralma izlenmiştir. Dural kese sıkışmış olup, kauda ekuina liflerinde kıvrımlanma (redundancy) mevcuttur.",
        impressionTemplate: "Lomber Spinal Stenoz (Dar Kanal)."
    },
    "vertebral_osteomyelitis": {
        pathologyId: "vertebral_osteomyelitis",
        label: "Spondilodiskit",
        organ: "Omurga",
        technique: "Kontrastlı Spinal MR.",
        findingsTemplate: "L3 ve L4 vertebra korpuslarında karşılıklı end-plate destrüksiyonu, T1 hipointens, T2 hiperintens sinyal değişiklikleri (ödem) izlenmiştir. IVKM sonrası vertebra korpuslarında ve arada kalan disk dokusunda yoğun kontrastlanma mevcuttur. Paraspinal yumuşak dokuda apse formasyonu eşlik etmektedir.",
        impressionTemplate: "Spondilodiskit (Vertebral Osteomiyelit) ile uyumlu bulgular."
    },
    "spondylolisthesis": {
        pathologyId: "spondylolisthesis",
        label: "Spondilolistezis",
        organ: "Omurga",
        technique: "Lomber Spinal MR/BT.",
        findingsTemplate: "L5 vertebranın S1 vertebra üzerinde anteriora doğru yer değiştirdiği (anterolistezis) izlenmiştir. Pars interartikülarislerde defekt (spondilolizis) veya faset eklem dejenerasyonu eşlik etmektedir. Spinal kanal ön-arka çapı daralmıştır.",
        impressionTemplate: "L5-S1 Spondilolistezis."
    },
    "cervical_disc_herniation": {
        pathologyId: "cervical_disc_herniation",
        label: "Servikal Disk Herniasyonu",
        organ: "Omurga",
        technique: "Sagittal ve aksiyal planlarda Servikal Spinal MR.",
        findingsTemplate: "C[X]-C[Y] intervertebral disk düzeyinde, T2 sinyal kaybı gösteren disk materyali dural keseye ve sinir köküne bası oluşturmaktadır. Santral veya parasentral yerleşimli disk protrüzyonu/ekstrüzyonu izlenmiştir. Komşu foramen nöral daralma mevcuttur. Servikal spinal kanalda [belirgin/hafif] ön-arka çap daralması saptanmıştır.",
        impressionTemplate: "C[X]-C[Y] servikal disk herniasyonu ve [sinir kökü/medüller] bası. Nöroşirürji değerlendirmesi önerilir."
    },

    // ═══════════════════════════════════════════════════
    // MUSCULOSKELETAL
    // ═══════════════════════════════════════════════════
    "rotator_cuff_tear": {
        pathologyId: "rotator_cuff_tear",
        label: "Rotator Manşet Yırtığı",
        organ: "MSK (Omuz)",
        technique: "Koronal, sagital ve aksiyal planlarda omuz MR incelemesi.",
        findingsTemplate: "Supraspinatus tendonu lateralden başlayarak incelemede tam kat yırtık (full-thickness tear) izlenmiştir. Yırtık defektinin genişliği yaklaşık [X] cm olarak ölçülmüştür. Musküler atrofi ve yağlı dejenerasyon [evre: Goutallier 0-4] olarak değerlendirilmiştir. Subakromial-subdeltoid bursada efüzyon eşlik etmektedir. Akromion tipi [Tip 1/2/3] olarak izlenmiştir.",
        impressionTemplate: "Supraspinatus tendonu tam kat yırtığı ile uyumlu bulgular. Ortopedi konsültasyonu önerilir."
    },
    "meniscus_tear": {
        pathologyId: "meniscus_tear",
        label: "Menisküs Yırtığı",
        organ: "MSK (Diz)",
        technique: "Koronal, sagital ve aksiyal planlarda diz MR incelemesi.",
        findingsTemplate: "Medial/lateral menisküste, sagital serilerde eklem yüzeyine uzanan T2 hiperintens sinyal değişikliği izlenmiştir. Yırtık pattern [vertikal/horizontal/radyal/bucket-handle] tipi ile uyumludur. Komşu kemiklerde subkondral ödem (bone bruise) eşlik etmektedir. Ön çapraz bağda (ACL) [sağlam/gerilme/parsiyel/tam yırtık] izlenmiştir.",
        impressionTemplate: "Medial/Lateral menisküs yırtığı. Ortopedi değerlendirmesi önerilir."
    },
    "hip_avascular_necrosis": {
        pathologyId: "hip_avascular_necrosis",
        label: "Kalça Avasküler Nekroz",
        organ: "MSK (Kalça)",
        technique: "Koronal ve aksiyal planlarda kalça MR incelemesi.",
        findingsTemplate: "Femur başının süperiyor-anterior kesiminde, T1 ağırlıklı serilerde hipointens, T2 ağırlıklı serilerde çift kontur (double-line sign) olarak izlenen avasküler nekroz alanı dikkati çekmiştir. Ficat-Arlet evrelemesi açısından [Evre I-IV] olarak değerlendirilmiştir. Eklemde efüzyon [mevcut/yok] olarak saptanmıştır.",
        impressionTemplate: "Femur başı avasküler nekrozu (AVN) ile uyumlu MR bulguları. Ortopedi konsültasyonu önerilir."
    },
    "achilles_tendon_tear": {
        pathologyId: "achilles_tendon_tear",
        label: "Aşil Tendonu Yırtığı",
        organ: "MSK (Ayak-Bilek)",
        technique: "Sagital ve aksiyal planlarda Ayak-bilek MR incelemesi.",
        findingsTemplate: "Aşil tendonu kalkaneusa yaklaşık [X] cm proksimalinde tam kat yırtık (full-thickness tear) izlenmiştir. Proksimal güdük [X] cm retrakte olmuştur. Peritendinöz ödem ve Kager yağ yastığında ödem belirgindir. Kalkaneusta tendon insersiyonunda değişiklik [mevcut/yok] olarak izlenmiştir.",
        impressionTemplate: "Aşil tendonu tam kat yırtığı. Ortopedi / Ortopedik cerrahi değerlendirmesi önerilir."
    },

    // ═══════════════════════════════════════════════════
    // LIVER & BILIARY
    // ═══════════════════════════════════════════════════
    "hcc": {
        pathologyId: "hcc",
        label: "Hepatosellüler Karsinom (HCC)",
        organ: "Karaciğer",
        technique: "Dinamik (trifazik) karaciğer BT/MR incelemesi.",
        findingsTemplate: "Karaciğer parankiminde, arteryel fazda belirgin kontrastlanan, portal venöz ve geç fazlarda parankime göre daha düşük dansitede izlenen (washout) kitle lezyonu dikkati çekmiştir. Lezyon çevresinde kapsül yapısı (geç fazda boyanan) izlenmektedir.",
        impressionTemplate: "Siroz zemininde gelişmiş Hepatosellüler Karsinom (HCC) ile uyumlu dinamik kontrastlanma paterni."
    },
    "liver_hemangioma": {
        pathologyId: "liver_hemangioma",
        label: "Karaciğer Hemanjiyomu",
        organ: "Karaciğer",
        technique: "Dinamik karaciğer BT/MR incelemesi.",
        findingsTemplate: "Karaciğerde düzgün sınırlı hipodens/hipointens lezyon izlenmiştir. Arteryel fazda periferik nodüler tarzda kontrastlanan lezyonun, geç fazlarda santrale doğru dolum göstererek (centripetal filling) homojen hale geldiği izlenmiştir.",
        impressionTemplate: "Tipik kavernöz hemanjiyom ile uyumlu bulgular."
    },
    "liver_metastasis": {
        pathologyId: "liver_metastasis",
        label: "Karaciğer Metastazı",
        organ: "Karaciğer",
        technique: "Dinamik (trifazik) karaciğer BT/MR incelemesi.",
        findingsTemplate: "Karaciğer parankiminde her iki lobda dağılım gösteren, arteryel fazda hipervasküler/hipovaskular kontrastlanma gösteren, portal ve geç fazlarda target appearance (hedef) veya rim enhancement izlenen çok sayıda lezyon saptanmıştır. Lezyonlar T2 ağırlıklı serilerde hiperintens, T1'de hipointens sinyal özelliği göstermektedir.",
        impressionTemplate: "Çok sayıda karaciğer metastazı ile uyumlu bulgular. Primer odak ile korelasyon önerilir."
    },
    "acute_pancreatitis": {
        pathologyId: "acute_pancreatitis",
        label: "Akut Pankreatit",
        organ: "Pankreas",
        technique: "Kontrastlı Abdomen BT.",
        findingsTemplate: "Pankreas parankiminin tamamında belirgin ödem ve pankreatik kontrastlanmada heterojenite izlenmiştir. Peripankreatik yağ dokusunda yaygın sıvı koleksiyonları ve kirlenme (stranding) dikkati çekmektedir. [Balthazar Evre: A-E]. Pankreatik nekroza uyan kontrast tutulmayan alana [rastlanmıştır/rastlanmamıştır]. Pankreas kanalı genişlemesi [mevcut/yok].",
        impressionTemplate: "Akut Pankreatit ile uyumlu BT bulguları (Balthazar [Evre]). Klinik takip önerilir."
    },
    "choledocholithiasis": {
        pathologyId: "choledocholithiasis",
        label: "Koledokolitiyazis",
        organ: "Safra Yolları",
        technique: "MRCP ve kontrastlı Abdomen MR.",
        findingsTemplate: "MRCP görüntülerinde ana safra kanalında intralüminal, T2 hipointens taş(lar) saptanmıştır. Proksimalde safra kanallarında dilatasyon (koletok: [X] mm) izlenmektedir. Safra kesesinde ek taşlar [mevcut/yok] olarak değerlendirilmiştir. Karaciğer parankiminde kolestaza bağlı değişiklikler [eşlik etmektedir/eşlik etmemektedir].",
        impressionTemplate: "Koledokolitiyazis ve proksimal biliyer dilatasyon. ERCP veya cerrahi değerlendirme önerilir."
    },

    // ═══════════════════════════════════════════════════
    // KIDNEY & URINARY
    // ═══════════════════════════════════════════════════
    "kidney_stone": {
        pathologyId: "kidney_stone",
        label: "Ürolitiyazis",
        organ: "Böbrek",
        technique: "Kontrastsız Üriner Sistem BT.",
        findingsTemplate: "Böbrek toplayıcı sisteminde/üreterde yüksek dansiteli (kalsifik) taş ve buna sekonder proksimalde hidronefrotik değişiklikler izlenmiştir. Perinefritik yağ planlarında kirlenme (stranding) saptanmıştır.",
        impressionTemplate: "Üriner sistem taşı (Ürolitiyazis) ve obstrüktif üropati bulguları."
    },
    "renal_cell_carcinoma": {
        pathologyId: "renal_cell_carcinoma",
        label: "Renal Hücreli Karsinom (RCC)",
        organ: "Böbrek",
        technique: "Trifazik Böbrek BT veya Kontrastlı MR.",
        findingsTemplate: "Böbrek [üst/orta/alt] pol parankiminden kaynaklanan, arteryel fazda belirgin ve heterojen kontrastlanan, nefrografik fazda parsiyel washout gösteren kitle lezyonu izlenmiştir. Lezyon boyutları yaklaşık [X]x[Y]x[Z] cm olarak ölçülmüştür. Renal ven ve inferior vena kavaya uzanım [mevcut/yok] olarak değerlendirilmiştir. Lenf nodu tutulumu [mevcut/yok] olarak izlenmiştir.",
        impressionTemplate: "Renal Hücreli Karsinom (RCC) ile uyumlu bulgular. Üroloji ve onkoloji konsültasyonu önerilir."
    },

    // ═══════════════════════════════════════════════════
    // LUNG & THORAX
    // ═══════════════════════════════════════════════════
    "pneumonia": {
        pathologyId: "pneumonia",
        label: "Pnömoni",
        organ: "Akciğer",
        technique: "Toraks BT incelemesi.",
        findingsTemplate: "Akciğer parankiminde, hava bronkogramları içeren konsolidasyon alanları ve buzlu cam dansiteleri izlenmiştir. Plevral effüzyon eşlik etmemektedir.",
        impressionTemplate: "Pnömonik infiltrasyon ile uyumlu bulgular."
    },
    "pulmonary_embolism": {
        pathologyId: "pulmonary_embolism",
        label: "Pulmoner Emboli (PE)",
        organ: "Akciğer",
        technique: "Pulmoner BT Anjiyografi.",
        findingsTemplate: "Pulmoner arter ana dallarında ve lober dallarda lümen içerisinde dolum defekti (trombüs) izlenmiştir. Distal akciğer segmentlerinde kama şeklinde subplevral konsolidasyon (Hampton's hump) alanı mevcuttur.",
        impressionTemplate: "Akut Pulmoner Emboli ile uyumlu BT bulguları."
    },
    "pneumothorax": {
        pathologyId: "pneumothorax",
        label: "Pnömotoraks",
        organ: "Akciğer",
        technique: "PA Akciğer Grafisi / Toraks BT.",
        findingsTemplate: "Plevral mesafede hava koleksiyonu izlenmiştir. Akciğer üst lobda viseral plevra hattı seçilmektedir. Mediastinal şift [mevcut/yok] olarak değerlendirilmiştir. Tansiyon pnömotoraks bulgularına [rastlanmıştır/rastlanmamıştır].",
        impressionTemplate: "[Sağ/Sol] Pnömotoraks. Boyut ve klinik değerlendirmeye göre drenaj kararı verilmelidir."
    },
    "lung_cancer": {
        pathologyId: "lung_cancer",
        label: "Akciğer Kanseri",
        organ: "Akciğer",
        technique: "Kontrastlı Toraks BT.",
        findingsTemplate: "Sağ/sol akciğer [üst/orta/alt] lobda, spiküle kenarlı, düzensiz konturlu, solid kitle lezyonu izlenmiştir. Kitle boyutları yaklaşık [X]x[Y] cm olarak ölçülmüştür. Komşu plevra, göğüs duvarı ile ilişkisi [mevcut/yok] olarak değerlendirilmiştir. İpsilateral hiler ve mediastinal lenf nodu büyümesi [mevcut/yok] olarak izlenmiştir. Uzak metastatik bulgu [saptanmamıştır/saptanmıştır].",
        impressionTemplate: "Akciğer kanseri ile uyumlu bulgular. Histopatolojik doğrulama ve evreleme için Göğüs Hastalıkları / Onkoloji değerlendirmesi önerilir."
    },
    "pleural_effusion": {
        pathologyId: "pleural_effusion",
        label: "Plevral Efüzyon",
        organ: "Akciğer",
        technique: "PA Akciğer Grafisi / Toraks BT.",
        findingsTemplate: "[Sağ/Sol/Her iki] kostofrenik sinüste ve plevral mesafede serbest sıvı koleksiyonu izlenmiştir. Plevra yaprağı kalınlaşması ve enhancement [mevcut/yok] olarak değerlendirilmiştir. Komşu akciğer parankiminde basıya bağlı atelektazi [mevcut/yok] olarak izlenmiştir.",
        impressionTemplate: "[Sağ/Sol/Bilateral] Plevral Efüzyon. Altta yatan etiyoloji araştırılmalıdır."
    },

    // ═══════════════════════════════════════════════════
    // BREAST
    // ═══════════════════════════════════════════════════
    "breast_cancer": {
        pathologyId: "breast_cancer",
        label: "Meme Kanseri (MRG)",
        organ: "Meme",
        technique: "Bilateral dinamik kontrastlı Meme MR incelemesi.",
        findingsTemplate: "Sağ/sol memede [üst dış/üst iç/alt dış/alt iç] kadrana yerleşimli, düzensiz konturlu/spiküle kenarlı, IVKM sonrası erken yoğun kontrastlanma ve hızlı yıkama (wash-out kinetik) gösteren kitle lezyonu izlenmiştir. T2 ağırlıklı serilerde perifokal ödem dikkati çekmektedir. İpsilateral aksiller lenf nodu [morfolojisi normal/şüpheli büyümüş] olarak değerlendirilmiştir.",
        impressionTemplate: "Meme MR bulguları malinite ile uyumludur (BI-RADS 4/5). Biyopsi önerilir."
    },

    // ═══════════════════════════════════════════════════
    // PROSTATE
    // ═══════════════════════════════════════════════════
    "prostate_cancer": {
        pathologyId: "prostate_cancer",
        label: "Prostat Kanseri (mpMRG)",
        organ: "Prostat",
        technique: "Multiparametrik Prostat MR incelemesi (T2, DWI, DCE).",
        findingsTemplate: "Periferik zon [sağ/sol]/[apeks/orta/baz] kesimde T2 ağırlıklı serilerde hipointens, DWI incelemede difüzyon kısıtlılığı gösteren (ADC düşüklüğü), DCE'de erken kontrastlanma ile karakterize odak izlenmiştir. Odağın kapsüler uzanımı [şüpheli/yok] olarak değerlendirilmiştir. PI-RADS skoru: [4/5].",
        impressionTemplate: "Periferik zon lezyonu, klinik olarak anlamlı prostat karsinomu ile uyumludur (PI-RADS [4/5]). MRG-füzyon biyopsi önerilir."
    },

    // ═══════════════════════════════════════════════════
    // GYNECOLOGY
    // ═══════════════════════════════════════════════════
    "endometrial_cancer": {
        pathologyId: "endometrial_cancer",
        label: "Endometrium Kanseri",
        organ: "Jinekoloji",
        technique: "Pelvis MR (T2, DWI, kontrastlı sekanslar).",
        findingsTemplate: "Uterus kavitesini dolduran, endometriyumu belirgin genişleten, T2 ağırlıklı serilerde heterojen sinyal özelliğinde kitle lezyonu izlenmiştir. DWI'da difüzyon kısıtlılığı belirgindir. Miyometriyal invazyon derinliği [iç yarı/dış yarı — < veya > %50] olarak değerlendirilmiştir. Servikal stromal tutulum [mevcut/yok]. Parametriyal ve pelvik lenf nodu tutulumu [mevcut/yok] olarak izlenmiştir.",
        impressionTemplate: "Endometrium kanseri ile uyumlu bulgular. FIGO evrelemesi için cerrahi ve onkoloji konsültasyonu önerilir."
    },
    "ovarian_cyst": {
        pathologyId: "ovarian_cyst",
        label: "Over Kisti / Kitlesi",
        organ: "Jinekoloji",
        technique: "Pelvis USG / MR incelemesi.",
        findingsTemplate: "[Sağ/Sol] overde [X]x[Y] cm boyutlarında, ince duvarlı/kalın duvarlı, iç septasyonlar içeren/içermeyen, solid komponent barındıran/barındırmayan kistik lezyon izlenmiştir. İntraküstik papiller projeksiyon/nodül [mevcut/yok] olarak değerlendirilmiştir. Serbest peritoneal sıvı [eşlik etmektedir/etmemektedir].",
        impressionTemplate: "Over kistik lezyonu (O-RADS [2/3/4/5]). Jinekoonkoloji konsültasyonu önerilir."
    },

    // ═══════════════════════════════════════════════════
    // VASCULAR
    // ═══════════════════════════════════════════════════
    "aortic_aneurysm": {
        pathologyId: "aortic_aneurysm",
        label: "Aort Anevrizması",
        organ: "Vasküler",
        technique: "Kontrastlı Aorta BT Anjiyografi.",
        findingsTemplate: "Abdominal/torasik aorta [infrarenal/suprarenal] kesimde maksimum çapı [X] cm olarak ölçülen anevrizma izlenmiştir. Anevrizma duvarında mural trombüs dikkati çekmektedir. Renal arterler ile ilişkisi [üst sınır renal arterlerin [altında/üstünde]] olarak değerlendirilmiştir. Rüptür bulgularına (periaortik hematom, retroperitoneal kanama) [rastlanmamıştır/rastlanmıştır].",
        impressionTemplate: "Aort Anevrizması ([X] cm). Vasküler cerrahi veya girişimsel radyoloji konsültasyonu önerilir."
    },
    "carotid_stenosis": {
        pathologyId: "carotid_stenosis",
        label: "Karotis Stenozu",
        organ: "Vasküler",
        technique: "BT Anjiyografi veya MR Anjiyografi.",
        findingsTemplate: "[Sağ/Sol] internal karotis arterin başlangıç kesiminde aterosklerotik plak ve lümen daralması izlenmiştir. NASCET metoduna göre stenoz oranı yaklaşık [%] olarak hesaplanmıştır. Plak morfolojisi [kalsifik/mikst/yumuşak] olarak değerlendirilmiştir. Ülsere plak görünümü [mevcut/yok].",
        impressionTemplate: "Karotis Stenozu (%[darlık]). Nöroloji ve vasküler cerrahi konsültasyonu önerilir."
    },

    // ═══════════════════════════════════════════════════
    // ABDOMEN — GI
    // ═══════════════════════════════════════════════════
    "appendicitis": {
        pathologyId: "appendicitis",
        label: "Apandisit",
        organ: "Abdomen (GI)",
        technique: "Kontrastsız / Kontrastlı Abdomen BT.",
        findingsTemplate: "Çekuma komşu lokalizasyonda, çapı [X] mm'yi aşan, lümeni dolmayan, duvarı kalınlaşmış apendiks izlenmiştir. Çevre yağ dokusunda inflamatuvar değişiklikler (kirlenme) ve periapendisiyal sıvı dikkati çekmiştir. Appendikolith varlığı [mevcut/yok] olarak değerlendirilmiştir. Perforasyon bulguları [mevcut/yok] olarak izlenmiştir.",
        impressionTemplate: "Akut Apandisit ile uyumlu BT bulguları. Cerrahi konsültasyon önerilir."
    },
    "bowel_obstruction": {
        pathologyId: "bowel_obstruction",
        label: "Barsak Tıkanıklığı (İleus)",
        organ: "Abdomen (GI)",
        technique: "Kontrastsız/Kontrastlı Abdomen BT.",
        findingsTemplate: "İnce/kalın barsak anslarında belirgin genişleme ve hava-sıvı seviyeleri izlenmiştir. Geçiş nokta [X] lokalizasyonunda saptanmıştır. Distal barsak segmentleri dekomprese görünümde olup obstrüktif patern ile uyumludur. Barsak duvarında iskemi bulgusu (pnömatozis, portal hava) [mevcut/yok] olarak değerlendirilmiştir.",
        impressionTemplate: "Mekanik barsak tıkanıklığı (İleus) ile uyumlu bulgular. Acil cerrahi değerlendirme önerilir."
    },
    "colorectal_cancer": {
        pathologyId: "colorectal_cancer",
        label: "Kolorektal Karsinom",
        organ: "Abdomen (GI)",
        technique: "Kontrastlı Abdomen-Pelvis BT.",
        findingsTemplate: "[Sigmoid/Rektum/Çıkan kolon/İnen kolon] segmentinde dairesel veya ekzofitik kitle lezyonu izlenmiştir. Lümen belirgin daralmış ve barsak duvarı düzensiz kalınlaşma göstermektedir. Perikolonik yağ doku infiltrasyonu [mevcut/yok] olarak değerlendirilmiştir. Mezorektal fasya mesafesi [X] mm. Bölgesel mezenterik lenf nodu büyümesi [mevcut/yok]. Karaciğerde metastatik lezyon [mevcut/yok].",
        impressionTemplate: "Kolorektal karsinom ile uyumlu bulgular. Kolonoskopi / Genel Cerrahi ve Onkoloji konsültasyonu önerilir."
    }
};

export const GENERIC_TEMPLATE: ReportTemplate = {
    pathologyId: "generic",
    label: "Genel Şablon",
    organ: "Genel",
    technique: "Radyolojik Görüntüleme.",
    findingsTemplate: "İnceleme alanında patolojik sinyal/dansite değişiklikleri izlenmiştir. Seçilen bulgular klinik ile korele edilmelidir.",
    impressionTemplate: "Tanımlanan bulgular [Olası Tanı] ile uyumlu olabilir."
};
