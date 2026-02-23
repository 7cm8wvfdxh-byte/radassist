export interface RadiologicalSign {
    id: string;
    name: string;
    turkishName: string;
    modality: string;
    organ: string;
    appearance: string;
    pathology: string;
    clinicalNote?: string;
}

export const RADIOLOGICAL_SIGNS: RadiologicalSign[] = [
    // --- BRAIN & NEURO ---
    {
        id: "empty_delta",
        name: "Empty Delta Sign",
        turkishName: "Boş Delta İşareti",
        modality: "BT (Kontrastlı)",
        organ: "Beyin",
        appearance: "Süperior sagittal sinüste trombüs nedeniyle duvarın kontrastlanması, lümenin hipodens kalması → delta/üçgen görünüm.",
        pathology: "Serebral Venöz Sinüs Trombozu (CVST)",
        clinicalNote: "Başağrısı + papilödem + fokal defisit olan genç kadınlarda düşün."
    },
    {
        id: "swirl_sign",
        name: "Swirl Sign",
        turkishName: "Girdap İşareti",
        modality: "BT (Nativ)",
        organ: "Beyin",
        appearance: "Akut hematom içinde hipodens alanlar — aktif kanama/koagülopati nedeniyle pıhtılaşmamış kan.",
        pathology: "Aktif Kanama (Epidural/Subdural Hematom)",
        clinicalNote: "Cerrahi aciliyet göstergesi — hematom ekspansiyonu riski yüksek."
    },
    {
        id: "dense_mca",
        name: "Dense MCA Sign",
        turkishName: "Dens MCA İşareti",
        modality: "BT (Nativ)",
        organ: "Beyin",
        appearance: "Orta serebral arterin hiperdens görünümü — intraluminal trombüs.",
        pathology: "Akut İskemik İnme (MCA Oklüzyonu)",
        clinicalNote: "ASPECTS skoru ve CTA ile birlikte değerlendirilmeli."
    },
    {
        id: "target_sign_brain",
        name: "Target Sign (Brain)",
        turkishName: "Hedef İşareti (Beyin)",
        modality: "MR (Kontrastlı)",
        organ: "Beyin",
        appearance: "Ring enhancement + santral noktasal kontrastlanma → hedef benzeri görünüm.",
        pathology: "Toksoplazmoz (AIDS hastalarında)",
        clinicalNote: "Lenfoma ile ayırıcı tanı: Toksoplazma çoğunlukla çok odaklı, bazal ganglia yerleşimli."
    },
    {
        id: "restricted_diffusion_ring",
        name: "Ring Enhancement + Restricted Diffusion",
        turkishName: "Halka Kontrastlanma + Difüzyon Kısıtlanması",
        modality: "MR (DWI/Kontrastlı)",
        organ: "Beyin",
        appearance: "Periferal kontrastlanma + santral difüzyon kısıtlanması.",
        pathology: "Beyin Apsesi (Piyojenik)",
        clinicalNote: "Nekrotik tümörde santral difüzyon genellikle kısıtlanmaz — apse ayırıcı tanı."
    },

    // --- THORAX ---
    {
        id: "hampton_hump",
        name: "Hampton Hump",
        turkishName: "Hampton Hörgücü",
        modality: "Akciğer Grafisi / BT",
        organ: "Toraks",
        appearance: "Plevral tabanlı, kama şeklinde konsolidasyon — genellikle alt lob periferinde.",
        pathology: "Pulmoner Emboli → Pulmoner İnfarkt",
        clinicalNote: "Westermark sign (oligemi) ve Fleischner sign (dilate PA) ile birlikte PE triadı."
    },
    {
        id: "westermark_sign",
        name: "Westermark Sign",
        turkishName: "Westermark İşareti",
        modality: "Akciğer Grafisi",
        organ: "Toraks",
        appearance: "Fokal oligemi — akciğerin bir bölgesinde vasküler markinglerin azalması/kaybolması.",
        pathology: "Pulmoner Emboli (Santral)",
        clinicalNote: "Sensitivitesi düşük ama spesifik. BTPA ile teyit edilmeli."
    },
    {
        id: "silhouette_sign",
        name: "Silhouette Sign",
        turkishName: "Siluet İşareti",
        modality: "Akciğer Grafisi",
        organ: "Toraks",
        appearance: "Kalp/diyafragma sınırının kaybolması — komşu yapıyla aynı dansitede patoloji.",
        pathology: "Pnömoni, Atelektazi, Plevral Efüzyon (lokalizasyon)",
        clinicalNote: "Sağ kalp sınırı kaybı → orta lob; sol kalp → lingula; diyafragma → alt lob."
    },
    {
        id: "air_bronchogram",
        name: "Air Bronchogram",
        turkishName: "Hava Bronkogramı",
        modality: "Akciğer Grafisi / BT",
        organ: "Toraks",
        appearance: "Opak akciğer parankimi içinde hava ile dolu bronşların görülmesi.",
        pathology: "Konsolidasyon (Pnömoni, Alveoler Hemoraji, BAC/Lepidik Adenokarsinom)",
        clinicalNote: "Atelektazide genellikle bronş da kollabe olduğu için air bronchogram bulunmaz."
    },
    {
        id: "crescent_sign_lung",
        name: "Air Crescent Sign",
        turkishName: "Hava Hilal İşareti (Akciğer)",
        modality: "BT",
        organ: "Toraks",
        appearance: "Kavite içinde serbest fungus topu (aspergilloma) etrafında hilal şeklinde hava.",
        pathology: "Aspergilloma / Miçetoma",
        clinicalNote: "Pozisyon değişikliğinde fungus topu yer değiştirebilir (mobile)."
    },
    {
        id: "crazy_paving",
        name: "Crazy Paving Pattern",
        turkishName: "Kaldırım Taşı Paterni",
        modality: "BT (YRBT)",
        organ: "Toraks",
        appearance: "Buzlu cam opasitesi zemininde interlobüler septal kalınlaşma → parke/kaldırım taşı görünümü.",
        pathology: "PAP (Pulmoner Alveoler Proteinozis), Pnömoniler (COVID-19, PCP), Alveoler Hemoraji",
        clinicalNote: "COVID-19 pnömonisinde ileri evrede sık görülür."
    },
    {
        id: "tree_in_bud",
        name: "Tree-in-Bud Pattern",
        turkishName: "Ağaçta Tomurcuk Paterni",
        modality: "BT (YRBT)",
        organ: "Toraks",
        appearance: "Periferal bronşiyollerde müküs/pü ile tıkanmış dallanma paterni → tomurcuklanan ağaç.",
        pathology: "Enfeksiyöz Bronşiyolit, Tüberküloz (Endobronşiyal Yayılım), Mikobakteri",
        clinicalNote: "Lokalize → enfeksiyöz. Yaygın → immünkompromize hasta (NTM, MAC)."
    },
    {
        id: "signet_ring_sign",
        name: "Signet Ring Sign",
        turkishName: "Yüzük Taşı İşareti",
        modality: "BT",
        organ: "Toraks",
        appearance: "Dilate bronş (yüzük gövdesi) + komşu küçük pulmoner arter (taş) → yüzük görünümü.",
        pathology: "Bronşektazi",
        clinicalNote: "Normal: Bronş çapı = Arter çapı. Bronşektazi: Bronş > Arter."
    },

    // --- ABDOMEN ---
    {
        id: "target_sign_bowel",
        name: "Target Sign (Bowel)",
        turkishName: "Hedef İşareti (Barsak)",
        modality: "USG / BT",
        organ: "Abdomen",
        appearance: "Barsak duvarında konsantrik katmanlaşma → hedef/target benzeri kesit.",
        pathology: "İntususepsiyon (Pediatrik), İnflamatuar Barsak Hastalığı",
        clinicalNote: "Çocuklarda ileokolik intususepsiyon en sık (2ay-6yaş). Redüksiyona yanıt izlenir."
    },
    {
        id: "double_duct_sign",
        name: "Double Duct Sign",
        turkishName: "Çift Kanal İşareti",
        modality: "BT / MRCP",
        organ: "Abdomen",
        appearance: "Safra kanalı (CBD) + pankreas kanalı (Wirsung) birlikte dilatasyon.",
        pathology: "Periampuller Karsinom (Pankreas Başı Ca, Ampullom, Kolanjiyokarsinom)",
        clinicalNote: "Ağrısız sarılık + çift kanal dilatasyonu = Pankreas başı tümörü ta kanıtlanana kadar."
    },
    {
        id: "coffee_bean_sign",
        name: "Coffee Bean Sign",
        turkishName: "Kahve Çekirdeği İşareti",
        modality: "Akciğer Grafisi / BT",
        organ: "Abdomen",
        appearance: "Dilate sigmoid kolon loop'u ortada bir çizgiyle bölünmüş → kahve çekirdeği şekli.",
        pathology: "Sigmoid Volvulus",
        clinicalNote: "Yaşlı, psikiyatrik hasta, kronik konstipasyonda düşün. Rektosigmoidoskopi ile redüksiyon."
    },
    {
        id: "mccburney_sign_ct",
        name: "McBurney Point + Pericecal Fat Stranding",
        turkishName: "Periçekal Yağ Doku İnfiltrasyonu",
        modality: "BT",
        organ: "Abdomen",
        appearance: "Appendiks > 6mm, duvar kontrastlanması, çevre yağ doku dansite artışı (stranding).",
        pathology: "Akut Apandisit",
        clinicalNote: "Fekalit varlığı perforasyon riskini artırır."
    },
    {
        id: "whirl_sign",
        name: "Whirl Sign",
        turkishName: "Girdap İşareti (Mezenter)",
        modality: "BT",
        organ: "Abdomen",
        appearance: "Mezenterik damarların ve yağ dokunun girdap/spiral şeklinde sarılması.",
        pathology: "İnce Barsak Volvulusu, İnternal Herniasyon",
        clinicalNote: "Closed-loop obstrüksiyon ve strangülasyon riskini gösterir — acil cerrahi."
    },
    {
        id: "pneumobilia",
        name: "Pneumobilia / Rigler Triad",
        turkishName: "Pnömobilia / Rigler Triadı",
        modality: "Akciğer Grafisi / BT",
        organ: "Abdomen",
        appearance: "Safra yollarında hava + ince barsak obstrüksiyonu + ektopik safra taşı (genellikle ileum).",
        pathology: "Gallstone İleus (Safra Taşı İleusu)",
        clinicalNote: "Rigler triadı: Pnömobilia + SBO + ektopik taş. Büyük taş kolesistoenterik fistülden geçer."
    },
    {
        id: "crescent_sign_aorta",
        name: "Crescent Sign (Aorta)",
        turkishName: "Hilal İşareti (Aort)",
        modality: "BT (Nativ)",
        organ: "Abdomen",
        appearance: "AAA duvarında hiperdens hilal şeklinde alan — trombüs içine akut hemoraji.",
        pathology: "İmpending Rüptür (AAA Rüptür Riski Yüksek)",
        clinicalNote: "Acil cerrahi/EVAR endikasyonu. Hemodinamik instabilite aranmalı."
    },
    {
        id: "renal_rim_sign",
        name: "Rim Sign (Kidney)",
        turkishName: "Rim İşareti (Böbrek)",
        modality: "BT (Kontrastlı)",
        organ: "Abdomen",
        appearance: "Böbrek parankiminde kontrastlanma kaybı + sadece kapsüler/periferal ince kontrastlanma.",
        pathology: "Renal İnfarkt / Renal Arter Oklüzyonu",
        clinicalNote: "Kapsüler arterler kollateral sağlar → rim kontrastlanması. Akut böğür ağrısı + LDH yüksekliği."
    },

    // --- MSK ---
    {
        id: "sail_sign",
        name: "Sail Sign (Elbow)",
        turkishName: "Yelken İşareti (Dirsek)",
        modality: "X-Ray",
        organ: "Kas-İskelet",
        appearance: "Anterior yağ yastığının kalkık görünümü → yelken şekli. Posterior yağ yastığı görünür olması her zaman patolojiktir.",
        pathology: "Gizli Dirsek Kırığı (Eklem İçi Effüzyon)",
        clinicalNote: "Posterior fat pad sign görülürse kırık araştırılmalı (radial head fx en sık)."
    },
    {
        id: "codman_triangle",
        name: "Codman Triangle",
        turkishName: "Codman Üçgeni",
        modality: "X-Ray",
        organ: "Kas-İskelet",
        appearance: "Periostun kemik yüzeyinden agresif lezyon tarafından kaldırılması → üçgen şekilli periost reaksiyonu.",
        pathology: "Agresif Kemik Tümörü (Osteosarkom, Ewing Sarkom)",
        clinicalNote: "Sunburst/onion-peel periost reaksiyonu ile birlikte malignite düşündürür."
    },
    {
        id: "fallen_fragment",
        name: "Fallen Fragment Sign",
        turkishName: "Düşmüş Parça İşareti",
        modality: "X-Ray",
        organ: "Kas-İskelet",
        appearance: "Kistik lezyon içinde bir kemik parçasının gravitasyonla en alt kısma düşmesi.",
        pathology: "Basit (Soliter) Kemik Kisti + Patolojik Kırık",
        clinicalNote: "Anevrizmaltümör kemik kistinde düşmez (septalar tutar). Benign lezyon göstergesi."
    },
    {
        id: "double_line_sign",
        name: "Double Line Sign",
        turkishName: "Çift Çizgi İşareti",
        modality: "MR (T2)",
        organ: "Kas-İskelet",
        appearance: "Femur başında T2'de iç hipointens + dış hiperintens çift çizgi → reaktif interface.",
        pathology: "Avasküler Nekroz (AVN / Osteonekroz)",
        clinicalNote: "MR en sensitif modalite. Ficat-Arlet/Mitchell sınıflaması kullanılır."
    },
    {
        id: "bone_in_bone",
        name: "Bone-in-Bone Sign",
        turkishName: "Kemik İçinde Kemik İşareti",
        modality: "X-Ray",
        organ: "Kas-İskelet",
        appearance: "Vertebra korpusu içinde daha küçük bir vertebra görüntüsü.",
        pathology: "Paget Hastalığı, Osteopetrozis, Büyüme Gecikmesi Toparlanması",
        clinicalNote: "Paget'te: kemik genişlemesi, kalınlaşma ve skleroz. ALP yüksek."
    },

    // --- HEPATOBILIER ---
    {
        id: "starry_sky_liver",
        name: "Starry Sky (Liver)",
        turkishName: "Yıldızlı Gökyüzü (Karaciğer)",
        modality: "USG",
        organ: "Hepatobiliyer",
        appearance: "Diffüz hipoekojenik karaciğer parankimi + parlak portal ven duvarları → yıldızlı gökyüzü.",
        pathology: "Akut Hepatit (Viral, Toksik)",
        clinicalNote: "Karaciğer parankimi ödemli ve hipoekojenik olur. Periportal ekojenite artar."
    },
    {
        id: "wall_echo_shadow",
        name: "WES Sign (Wall-Echo-Shadow)",
        turkishName: "WES İşareti (Duvar-Eko-Gölge)",
        modality: "USG",
        organ: "Hepatobiliyer",
        appearance: "Safra kesesi duvarı + taştan eko + posterior akustik gölge → lümen görülmez.",
        pathology: "Safra Kesesinde Taşla Dolu (Contracted GB with stones)",
        clinicalNote: "Kontrakte kese + WES → taş kesindir. Porselain kese ile karıştırılmamalı."
    },
    {
        id: "comet_tail_artifact",
        name: "Comet-Tail Artifact (GB)",
        turkishName: "Kuyruklu Yıldız Artefaktı (SK)",
        modality: "USG",
        organ: "Hepatobiliyer",
        appearance: "Safra kesesi duvarında küçük ekojenik odak + distalinde V-şeklinde reverberasyon artefaktı.",
        pathology: "Adenomyomatozis (Rokitansky-Aschoff sinüsleri)",
        clinicalNote: "Benign durum. Kolesterol kristalleri reverberasyon artefaktına neden olur."
    },
    {
        id: "cluster_sign",
        name: "Cluster Sign",
        turkishName: "Küme İşareti",
        modality: "USG / BT",
        organ: "Hepatobiliyer",
        appearance: "Karaciğerde birbirine bitişik çok sayıda küçük apseler → küme/üzüm salkımı.",
        pathology: "Karaciğer Apsesi (Piyojenik, genellikle birleşme öncesi)",
        clinicalNote: "Tek büyük apse ile birleşebilir. Perkutan drenaj planlamasında küme dağılımı önemli."
    },

    // --- ÜRINER ---
    {
        id: "drooping_lily",
        name: "Drooping Lily Sign",
        turkishName: "Sarkık Zambak İşareti",
        modality: "IVP / BT Ürografi",
        organ: "Üriner",
        appearance: "Duplike toplama sisteminde alt pol moietenin inferiora deplase olması → sarkık zambak.",
        pathology: "Komplet Üreteral Duplikasyon + Üst Pol Patolojisi (Üreterösel, Obstrüksiyon)",
        clinicalNote: "Weigert-Meyer kuralı: Üst pol moiety → ektopik inferiora drene, obstrükte. Alt pol → VUR."
    },
    {
        id: "rim_sign_ureteral",
        name: "Soft Tissue Rim Sign",
        turkishName: "Yumuşak Doku Rim İşareti (Taş)",
        modality: "BT (Nativ)",
        organ: "Üriner",
        appearance: "Üreter lümenindeki taş etrafında ödemli üreteral duvar → yumuşak doku halkası.",
        pathology: "Üreter Taşı (vs. Flebolit ayrımı)",
        clinicalNote: "Rim sign → üreteral taş. Flebolitte 'comet-tail' sign görülür (küçük kuyruk)."
    },
    {
        id: "bear_paw_sign",
        name: "Bear Paw Sign",
        turkishName: "Ayı Pençesi İşareti",
        modality: "BT (Kontrastlı)",
        organ: "Üriner",
        appearance: "Bilateral böbreklerde multifokal, kama şeklinde kontrastlanmayan alanlar → pençe izi.",
        pathology: "Akut Pyelonefrit (Bilateral)",
        clinicalNote: "Tek taraflı fokal → fokal pyelonefrit. Bilateral yaygın → septik hasta."
    },

    // --- PELVIS / JINEKOLOJI ---
    {
        id: "chocolate_cyst",
        name: "Chocolate Cyst / Ground Glass",
        turkishName: "Çikolata Kisti / Buzlu Cam İçerik",
        modality: "USG / MR",
        organ: "Pelvis",
        appearance: "USG'de homojen iç eko (buzlu cam). MR'da T1 hiperintens + T2 düşük sinyal (shading).",
        pathology: "Endometrioma (Endometriozis)",
        clinicalNote: "T1 fat-sat ile yağdan ayrılır (endometrioma parlak kalır, dermoid söner). T2 shading tanısal."
    },
    {
        id: "cog_wheel_sign",
        name: "Cog-Wheel / Cogwheel Sign",
        turkishName: "Çark Dişi İşareti",
        modality: "USG (Transvajinal)",
        organ: "Pelvis",
        appearance: "Fallop tüpünde kalınlaşmış plicalar ile çevrili sıvı → çark dişi/tekerlek kesiti.",
        pathology: "Tubal Ektopik Gebelik / Piyosalpenks / Hidrosalpenks",
        clinicalNote: "Aksiyel kesitte → cogwheel. Sagittal kesitte → bead-on-string (beads of necklace)."
    },
    {
        id: "necklace_sign_ovary",
        name: "Necklace Sign (Ovary)",
        turkishName: "Kolye İşareti (Over)",
        modality: "USG",
        organ: "Pelvis",
        appearance: "Over periferisinde dizilmiş çok sayıda (≥12) küçük folikül → kolye boncuğu.",
        pathology: "Polikistik Over Sendromu (PKOS)",
        clinicalNote: "Rotterdam kriterleri: ≥12 folikül (2-9mm) veya over volümü >10ml."
    },

    // --- VASKÜLER ---
    {
        id: "string_of_beads",
        name: "String of Beads Sign",
        turkishName: "Boncuk Dizisi İşareti",
        modality: "Anjiografi / CTA / MRA",
        organ: "Vasküler",
        appearance: "Arterde alternans stenoz + dilatasyon → boncuk dizisi görünümü.",
        pathology: "Fibromusküler Displazi (FMD)",
        clinicalNote: "En sık renal arter + internal karotid arter. Genç kadınlarda hipertansiyon nedeni."
    },
    {
        id: "cobblestone_sign",
        name: "Cobblestone Appearance",
        turkishName: "Kaldırım Taşı Görünümü (Barsak)",
        modality: "BT / Baryumlu Grafi",
        organ: "Abdomen",
        appearance: "Barsak mukozasında ülserasyon + ödem → yüzeyden kabarık adacıklar arasında lineer ülserler.",
        pathology: "Crohn Hastalığı (Transmural İnflamasyon)",
        clinicalNote: "Skip lezyonlar + cobblestone + fistül + striktür → Crohn. Terminal ileum en sık."
    },
    {
        id: "egg_on_string",
        name: "Egg on a String Sign",
        turkishName: "İpteki Yumurta İşareti",
        modality: "Akciğer Grafisi",
        organ: "Toraks",
        appearance: "Dar mediastinum + geniş oval kalp görüntüsü → ip üzerinde yumurta.",
        pathology: "Büyük Arter Transpozisyonu (D-TGA) — Neonatal",
        clinicalNote: "Yenidoğan siyanozu + bu görünüm → TGA. Acil BT Anjio / Eko + Prostaglandin."
    },
    {
        id: "snowman_sign",
        name: "Snowman Sign (Figure 8)",
        turkishName: "Kardan Adam İşareti",
        modality: "Akciğer Grafisi",
        organ: "Toraks",
        appearance: "Suprakardiyak geniş mediastinum (dilate vertikal ven) + kalp → 8/kardan adam şekli.",
        pathology: "Suprakardiyak Total Anormal Pulmoner Venöz Dönüş (TAPVD)",
        clinicalNote: "Genellikle 2-3 ayda belirginleşir. Obstrükte TAPVD acil cerrahidir."
    },

    // --- PEDIATRIK ---
    {
        id: "double_bubble",
        name: "Double Bubble Sign",
        turkishName: "Çift Kabarcık İşareti",
        modality: "X-Ray / USG (Prenatal)",
        organ: "Pediatrik",
        appearance: "Mide + proksimal duodenumda dilatasyon → iki ayrı gaz-sıvı seviyesi.",
        pathology: "Duodenal Atrezi",
        clinicalNote: "Down Sendromu ile güçlü ilişki (%30). Prenatal USG'de polihidroamniyoz + çift kabarcık."
    },
    {
        id: "ribbon_sign",
        name: "Ribbon Sign (Bowel)",
        turkishName: "Şerit İşareti (Barsak)",
        modality: "Baryum Grafi / BT",
        organ: "Pediatrik",
        appearance: "Barsağın uzun bir segmentte daralarak şerit gibi incelmesi.",
        pathology: "Hirschsprung Hastalığı (Kalibrasyon Farkı: Aganglionik Dar + Ganglionik Geniş Segment)",
        clinicalNote: "Geçiş zonu genellikle rektosigmoid bileşkede. Baryumlu grafide tanısal."
    },
    {
        id: "boot_shaped_heart",
        name: "Boot-Shaped Heart (Coeur en Sabot)",
        turkishName: "Çizme Kalbi",
        modality: "Akciğer Grafisi",
        organ: "Pediatrik",
        appearance: "Yukarı kalkmış kardiyak apeks + konkav pulmoner segment → çizme şekli.",
        pathology: "Fallot Tetralojisi (TOF)",
        clinicalNote: "Siyanotik yenidoğan + çizme kalbi + azalmış pulmoner vaskülarite."
    },
    {
        id: "step_ladder_sign",
        name: "Step Ladder Sign",
        turkishName: "Merdiven Basamağı İşareti",
        modality: "X-Ray (Ayakta Batın)",
        organ: "Abdomen",
        appearance: "Birden çok hava-sıvı seviyesi farklı yüksekliklerde basamak basamak sıralanır.",
        pathology: "İnce Barsak Obstrüksiyonu (Mekanik İleus)",
        clinicalNote: "3-6-9 kuralı: İnce barsak >3cm, kolon >6cm, çekum >9cm dilatasyon patolojik."
    },
    {
        id: "lead_pipe_sign",
        name: "Lead Pipe Sign",
        turkishName: "Kurşun Boru İşareti",
        modality: "Baryumlu Kolon Grafisi / BT",
        organ: "Abdomen",
        appearance: "Kolonda haustra kaybı → düz, duvarsız boru görünümü.",
        pathology: "Ülseratif Kolit (Kronik, Pankolit)",
        clinicalNote: "UC → lead pipe (haustra kaybı, sürekli tutulum). Crohn → string sign (segmental)."
    },
    {
        id: "string_sign_pylorus",
        name: "String Sign (Pylorus / Crohn)",
        turkishName: "İp İşareti (Pilor/Crohn)",
        modality: "Baryum Grafi",
        organ: "Abdomen",
        appearance: "Barsak lümeninin ciddi daralma → ince ip gibi baryum geçişi.",
        pathology: "Crohn Hastalığı (Terminal İleum Striktürü) / Pilor Stenozu",
        clinicalNote: "Crohn → terminal ileum string sign (Kantor's string sign)."
    },
    {
        id: "sunburst_pattern",
        name: "Sunburst / Spiculated Pattern",
        turkishName: "Güneş Patlaması / Spiküle Patern",
        modality: "X-Ray",
        organ: "Kas-İskelet",
        appearance: "Periosttan radyal olarak dışa doğru uzanan kemik spikülasyonları → güneş ışınları.",
        pathology: "Osteosarkom (Agresif Kemik Tümörü)",
        clinicalNote: "Codman üçgeni + sunburst + permeativ destrüksiyon → malign kemik tümörü triadı."
    },
    {
        id: "onion_peel",
        name: "Onion Peel / Lamellated Periosteal Reaction",
        turkishName: "Soğan Kabuğu Periost Reaksiyonu",
        modality: "X-Ray",
        organ: "Kas-İskelet",
        appearance: "Kemik yüzeyinde çok katlı, paralel periost reaksiyonu → soğan katmanları.",
        pathology: "Ewing Sarkomu (Çocuklarda), Osteomyelit, Eozinofilik Granülom",
        clinicalNote: "Ewing: 5-15 yaş, diafiz, laminasyonlu periost, yumuşak doku kitlesi."
    },
    {
        id: "popcorn_calcification",
        name: "Popcorn Calcification",
        turkishName: "Patlamış Mısır Kalsifikasyonu",
        modality: "BT / X-Ray",
        organ: "Toraks",
        appearance: "Akciğer nodülünde kaba, halkasal kalsifikasyonlar → patlamış mısır.",
        pathology: "Pulmoner Hamartom",
        clinicalNote: "Hamartom: benign. Yağ + kalsifikasyon kombinasyonu tanısal."
    },
    {
        id: "eggshell_calcification",
        name: "Eggshell Calcification",
        turkishName: "Yumurta Kabuğu Kalsifikasyonu",
        modality: "Akciğer Grafisi / BT",
        organ: "Toraks",
        appearance: "Hiler/mediastinal lenf nodlarında ince periferal (kabuk şeklinde) kalsifikasyon.",
        pathology: "Silikozis, Sarkoidoz, Radyasyon Sonrası, Amiloidoz",
        clinicalNote: "Silikozis en sık neden. Mesleki maruziyet öyküsü araştırılmalı."
    }
];
