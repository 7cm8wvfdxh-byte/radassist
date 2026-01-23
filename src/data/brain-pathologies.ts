import { Pathology } from '@/types';

export const brainPathologies: Pathology[] = [
    {
        "id": "acute_ischemic_stroke",
        "name": "Akut İskemik İnme (Acute Ischemic Stroke)",
        "category": "Vasküler",
        "gallery": [
            { "url": "/images/real_ct_stroke.png", "caption": "BT (Non-Contrast)", "modality": "CT" },
            { "url": "/images/real_mri_stroke.png", "caption": "DWI (Difüzyon)", "modality": "MRI" },
            { "url": "/images/mri_stroke_adc.png", "caption": "ADC Haritası", "modality": "MRI" },
            { "url": "/images/mri_stroke_flair.png", "caption": "T2 FLAIR", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "İlk saatlerde (<6s) genellikle normal. Erken bulgular: Hiperdens MCA işareti (trombus), İnsular ribbon (şerit) kaybı, Gri-beyaz cevher ayrımının silinmesi (lentiform nükleus kararması). Geç dönem (>6s): Hipodansite (sitotoksik ödem) ve kitle etkisi.",
                "cta": "Damar oklüzyonu (kesilme/cutoff işareti), distal damarlarda dolum defekti, kollateral durumun değerlendirilmesi.",
                "ct_perfusion": "İnfarkt çekirdeği (Core): Düşük CBV, Düşük CBF. Penumbra (Kurtarılabilir alan): Normal/Yüksek CBV, Düşük CBF, Artmış MTT/Tmax."
            },
            "mri": {
                "t1": "İzointens (erken), Hipointens (kronik). Parankimal şişme.",
                "t2_flair": "Hiperakut fazda normal olabilir. >6-12 saat sonra hiperintens sinyal gelişir. 2-3. haftada 'Fogging effect' (sislenme) nedeniyle lezyon izointens görünebilir.",
                "dwi": "Belirgin Hiperintensite (Difüzyon kısıtlılığı - Restricted Diffusion) - En duyarlı erken bulgu (dakikalar içinde).",
                "adc": "Hipointens (gerçek kısıtlamayı doğrular). ~2. haftada normalleşir (yalancı normalleşme).",
                "t1_c": "İntravasküler kontrastlanma (erken/subakut - 1-3 gün). Parankimal kontrastlanma (subakut - günler/haftalar, 'luxury perfusion').",
                "swi": "Hemorajik transformasyon veya trombus içinde 'blooming' artefaktı (susceptibility vessel sign)."
            }
        },
        "keyPoints": [
            "DWI, erken tanı ve iskemi ayırımı için altın standarttır.",
            "BT, beyin kanamasını (hemorajiyi) dışlamak için ilk tercihtir.",
            "ASPECTS skoru, MCA infarktlarında iskemik alanın yaygınlığını değerlendirmek için kullanılır.",
            "Zaman beyindir: Tromboliz penceresi <4.5 saat, Trombektomi <24 saat (seçilmiş vakalarda)."
        ]
    },
    {
        "id": "glioblastoma",
        "name": "Glioblastom (GBM - IDH-wildtype)",
        "category": "Neoplastik",
        "gallery": [
            { "url": "/images/real_ct_gbm.png", "caption": "BT (Kontrastlı)", "modality": "CT" },
            { "url": "/images/real_mri_gbm.png", "caption": "T1+C (Aksiyel)", "modality": "MRI" },
            { "url": "/images/mri_gbm_flair.png", "caption": "T2 FLAIR", "modality": "MRI" },
            { "url": "/images/mri_gbm_coronal.png", "caption": "T1+C (Koronal)", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Merkezi heterojenite (nekroz) içeren düzensiz hipodens kitle. Belirgin kitle etkisi ve vazojenik ödem.",
                "contrast": "Düzensiz, kalın, nodüler tarzda periferik (halka) kontrastlanma. Merkezi nekrotik alan kontrast tutmaz."
            },
            "mri": {
                "t1": "Hipointens, heterojen kitle. Kanama alanları hiperintens olabilir.",
                "t2_flair": "Heterojen hiperintensite. Çevresel geniş vazojenik ödem ('eldiven parmağı' görünümü), korpus kallozum tutulumu.",
                "t1_c": "Kalın, düzensiz, nodüler periferik rim (halka) tarzı kontrastlanma. Santral nekroz.",
                "dwi": "Değişken. Sellüler (hücresel) komponentlerde kısıtlanma olabilir. Nekrotik alanlarda difüzyon kolaylaşmıştır.",
                "perfusion": "Kontrastlanan komponentlerde yüksek rCBV (neoanjiyogenez).",
                "spectroscopy": "Yüksek Kolin (hücre yıkımı/turnover), Düşük NAA (nöronal kayıp), Lipid/Laktat piki (nekroz)."
            }
        },
        "keyPoints": [
            "Erişkinlerde en sık görülen primer malign beyin tümörüdür.",
            "Orta hattı geçme eğilimindedir (Kelebek / Butterfly glioma).",
            "WHO 2021 sınıflamasına göre moleküler tanımı IDH-wildtype'tır."
        ]
    },
    {
        "id": "meningioma",
        "name": "Meningiom (Meningioma)",
        "category": "Neoplastik",
        "gallery": [
            { "url": "/images/mri_meningioma_t1c.png", "caption": "T1+C (Dural Kuyruk)", "modality": "MRI" },
            { "url": "/images/mri_meningioma_t2.png", "caption": "T2 (BOS Cleft)", "modality": "MRI" },
            { "url": "/images/ct_meningioma.png", "caption": "BT (Kalsifikasyon)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Ekstra-aksiyal, genellikle hiperdens (%70-75) veya izodens kitle. Kalsifikasyon sıktır (%20-25). Komşu kemikte hiperostozis.",
                "contrast": "Yoğun, homojen kontrastlanma."
            },
            "mri": {
                "t1": "Gri cevhere göre izointens veya hipointens.",
                "t2": "İzointens veya hiperintens. 'CSF cleft sign' (beyin parankimi ile tümör arasında BOS mesafesi).",
                "t1_c": "Yoğun, homojen kontrastlanma. 'Dural tail' (dural kuyruk) işareti (komşu durada kalınlaşma/kontrastlanma).",
                "adc": "Genellikle difüzyon kolaylaşmıştır, ancak atipik/malign tiplerde kısıtlanma (restriksiyon) görülebilir.",
                "spectroscopy": "Alanin piki (ayırt edici özellik), Yüksek Kolin."
            }
        },
        "keyPoints": [
            "En sık görülen ekstra-aksiyal tümördür.",
            "Kadınlarda daha sıktır.",
            "'Dural kuyruk' ve 'BOS yarığı' (CSF cleft) klasik bulgulardır."
        ]
    },
    {
        "id": "multiple_sclerosis",
        "name": "Multipl Skleroz (MS)",
        "category": "Demiyelinizan",
        "gallery": [
            { "url": "/images/mri_ms_sagittal.png", "caption": "Sagittal (Dawson)", "modality": "MRI" },
            { "url": "/images/mri_ms_axial.png", "caption": "Axial FLAIR", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Duyarlılığı düşüktür. Beyaz cevherde non-spesifik hipodansiteler. İleri evrede atrofi."
            },
            "mri": {
                "t2_flair": "Ventriküllere dik yerleşimli (perpendiküler) multipl hiperintens ovoid lezyonlar. Yerleşim: Periventriküler (Dawson parmakları), Jukstakortikal/Kortikal, İnfratentoryal, Spinal kord.",
                "t1": "İzointens veya Hipointens ('Kara delikler' / Black holes = geri dönüşümsüz aksonal hasar).",
                "t1_c": "Açık halka şeklinde (open-ring) kontrastlanma aktif demiyelinizasyonu gösterir.",
                "swi": "Santral ven işareti (lezyonun içinden geçen ven), mikrovasküler hastalıktan ayırmada yardımcıdır."
            }
        },
        "keyPoints": [
            "Zamanda (DIT) ve Mekanda (DIS) yayılım.",
            "Tanı için McDonald Kriterleri kullanılır.",
            "Lezyonlar arasında normal beyaz cevher bulunur."
        ]
    },
    {
        "id": "subdural_hematoma",
        "name": "Subdural Hematom (SDH)",
        "category": "Travma",
        "gallery": [
            { "url": "/images/ct_sdh.png", "caption": "BT (Akut Hilal)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Hilal (yarım ay) şeklinde. Dural refleksiyonları (falks/tentoryum) GEÇMEZ, sütürleri GEÇER. Akut (<3 gün): Hiperdens. Subakut (3gün-3hafta): İzodens (gözden kaçabilir - kitle etkisine dikkat). Kronik (>3 hafta): Hipodens.",
                "contrast": "Kronik SDH'de membranlarda kontrastlanma. Kortikal damarlarda itilme."
            },
            "mri": {
                "t1": "Akut: İzointens. Subakut (erken): Hiperintens (Met-Hb). Kronik: Hipointens.",
                "t2": "Akut: Hipointens. Subakut: Hiperintens. Kronik: Hiperintens. Akut-üzerine-kronik kanamalarda 'Hematokrit etkisi' (seviyelemesı)."
            }
        },
        "keyPoints": [
            "Venöz kaynaklıdır (köprü venleri).",
            "Yaşlılarda ve alkoliklerde (atrofi nedeniyle venler gerildiği için) sıktır.",
            "Akut-üzerine-kronik SDH: BT'de miks (karışık) dansite."
        ]
    },
    {
        "id": "epidural_hematoma",
        "name": "Epidural Hematom (EDH)",
        "category": "Travma",
        "gallery": [
            { "url": "/images/ct_edh.png", "caption": "BT (Lens/Bikonveks)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Bikonveks (lens) şeklinde. Dural refleksiyonları (falks) GEÇER, sütürleri GEÇMEZ (kırık hattı yoksa). Heterojen 'swirl' (girdap) işareti aktif kanamayı gösterir.",
                "bone_window": "Vakaların %85-95'inde eşlik eden kafatası kırığı vardır."
            },
            "mri": {
                "t1": "İzointens (akut).",
                "t2": "Deoksihemoglobin nedeniyle hipointens (akut).",
                "swi": "Blooming artefaktı."
            }
        },
        "keyPoints": [
            "Arteriyel kaynaklıdır (Genellikle A. Meningea Media).",
            "Lucid interval (bilincin açılıp tekrar kapanması) klasik ama her zaman görülmez.",
            "Belirgin kitle etkisi varsa nöroşirürjik acildir."
        ]
    },
    {
        "id": "subarachnoid_hemorrhage",
        "name": "Subaraknoid Kanama (SAK)",
        "category": "Travma/Vasküler",
        "gallery": [
            { "url": "/images/ct_sah.png", "caption": "BT (Yıldız Belirtisi)", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Subaraknoid mesafelerde (sisternalar, sulkuslar, fissürler) hiperdansite. Bazal sisternalarda 'Deniz yıldızı' görünümü.",
                "cta": "Etiyolojideki anevrizmayı (Berry anevrizması) saptamak için gereklidir."
            },
            "mri": {
                "t2_flair": "Sulkuslarda hiperintens sinyal ('Kirli BOS' görünümü - çok duyarlıdır).",
                "swi": "Sulkuslarda blooming artefaktı.",
                "t1": "Akut dönemde genellikle yüksek sinyal vermez."
            }
        },
        "keyPoints": [
            "Ani başlayan şiddetli baş ağrısı ('Hayatımın en kötü ağrısı').",
            "En sık neden travmadır; travma dışı en sık neden anevrizma rüptürüdür.",
            "Komplikasyonlar: Vazospazm, Hidrosefali."
        ]
    },
    {
        "id": "cerebral_abscess",
        "name": "Serebral Apse",
        "category": "Enfeksiyon",
        "findings": {
            "ct": {
                "non_contrast": "Hipodens merkez, izodens/hafif hiperdens kapsül, çevresinde geniş ödem.",
                "contrast": "İnce, düzgün, pürüzsüz halka şeklinde kontrastlanma."
            },
            "mri": {
                "t1": "Merkez hipointens, kapsül izointens.",
                "t2": "Merkez hiperintens, kapsül hipointens.",
                "dwi": "Merkezi kesimde Belirgin Kısıtlanma (Hiperintens) - Püy içeriği nedeniyle.",
                "adc": "Hipointens.",
                "t2_flair": "Geniş vazojenik ödem.",
                "swi": "Çift halka işareti (dual rim sign) - dışta hipointens, içte hiperintens."
            }
        },
        "keyPoints": [
            "Halka kontrastlanan lezyon ayırıcı tanısı: 'MAGICAL DR' (Metastaz, Apse, GBM, İnfarkt, Kontüzyon, AIDS, Lenfoma, Demiyelinizasyon, Radyasyon).",
            "Difüzyon kısıtlığı (DWI), nekrotik tümörlerden (genellikle kolaylaşmıştır) ayırt etmede kilit rol oynar."
        ]
    },
    {
        "id": "vestibular_schwannoma",
        "name": "Vestibüler Schwannom (Akustik Nörinom)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Serebellopontin köşe (CPA) sisternasında izo/hipodens kitle. İç Kulak Yolu (IAC) genişlemesi.",
                "contrast": "Kontrastlanır."
            },
            "mri": {
                "t1": "İzointens veya hipointens.",
                "t2": "Heterojen hiperintens. Eşlik eden araknoid kistler olabilir.",
                "t1_c": "Yoğun kontrastlanma. 'Dondurma külahı' (Ice cream cone) görünümü (intra ve ekstra-kanaliküler bileşenler).",
                "swi": "Mikrokanamalar sıktır (Meningiomun aksine)."
            }
        },
        "keyPoints": [
            "8. kafa çiftinin vestibüler dalından köken alır.",
            "Sensörinöral tip işitme kaybı.",
            "Bilateral (iki taraflı) olması NF2 hastalığını düşündürür."
        ]
    },
    {
        "id": "pituitary_adenoma",
        "name": "Hipofiz Adenomu",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Sellar genişleme, klinoidlerde erozyon (Makroadenom).",
                "contrast": "Kontrastlanma paterni değişkendir."
            },
            "mri": {
                "t1": "Genellikle izointens. Kanama varsa hiperintens (Apopleksi).",
                "t2": "Değişken.",
                "t1_c_dynamic": "Mikroadenom (<10mm): Erken fazlarda normal glanda göre daha az kontrastlanır (hipo-enhancing). Makroadenom (>10mm): Heterojen kontrastlanma, diyafragma sella tarafından sıkıştırılırsa 'kardan adam' (figure-of-8) görünümü."
            }
        },
        "keyPoints": [
            "Optik kiazma basısı (bitemporal hemianopsi).",
            "Fonksiyonel (Prolaktinoma, GH salgılayan) veya Non-fonksiyonel olabilir.",
            "Hipofizer apopleksi acil bir durumdur."
        ]
    },
    {
        "id": "cerebral_metastasis",
        "name": "Serebral Metastaz",
        "category": "Neoplastik",
        "gallery": [
            { "url": "/images/mri_mets.png", "caption": "T1+C (Çoklu Halka)", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "İzo/Hipo/Hiperdens. Multipl lezyonlar > Tek (%50). Kitle boyutuna oranla çok geniş vazojenik ödem. Hemorajik olabilir (Renal hücreli, Koryokarsinom, Melanom, Tiroid).",
                "contrast": "Halka şeklinde (kalın/düzensiz) veya solid kontrastlanma."
            },
            "mri": {
                "t1": "İzo/Hipointens. Hemorajikse veya melanin içeriyorsa hiperintens.",
                "t2_flair": "Geniş vazojenik ödem.",
                "t1_c": "Kontrastlanır. Küçük lezyonlar (<5mm) sadece kontrastlı MR'da görülebilir.",
                "dwi": "Genellikle difüzyon kolaylaşmıştır (Facilitated).",
                "spectroscopy": "Lipid/Lactate piki. Kolin/NAA oranı yüksektir ancak peritümöral ödem alanında oranlar NORMALDİR (GBM infiltrasyonunun aksine)."
            }
        },
        "keyPoints": [
            "Erişkinlerde en sık görülen intrakraniyal tümördür.",
            "Gri-beyaz cevher bileşkesi tipik yerleşim yeridir.",
            "Akciğer, Meme, Melanom, Böbrek ve Kolon en sık primer kaynaklardır."
        ]
    },
    {
        "id": "cavernous_malformation",
        "name": "Kavernom (Cavernous Malformation)",
        "category": "Vasküler",
        "gallery": [
            { "url": "/images/mri_cavernoma.png", "caption": "T2 (Popcorn)", "modality": "MRI" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Hiperdens nodül (kalsifikasyon/hemoraji). Yakın zamanda kanamadıysa ödem yoktur."
            },
            "mri": {
                "t2": "'Patlamış mısır' (Popcorn) görünümü (karışık hiper/hipo sinyal).",
                "swi": "Hipointens rim (Hemosiderin halkası) - Blooming artefaktı. En duyarlı sekanstır.",
                "t1": "Değişken (kanın evresine göre).",
                "t1_c": "Minimal kontrastlanma veya kontrastlanma yok. Genellikle DVA (Gelişimsel Venöz Anomalisi) eşlik eder."
            }
        },
        "keyPoints": [
            "Anjiyografik olarak görülmez (düşük akımlı/okült).",
            "Ailesel vakalarda çokludur (Multipl) (CCM genleri).",
            "Kanama riski taşır."
        ]
    },
    {
        "id": "diffuse_axonal_injury",
        "name": "Diffüz Aksonal Yaralanma (DAI)",
        "category": "Travma",
        "findings": {
            "ct": {
                "non_contrast": "Genellikle Normaldir (%50-80). Gri-beyaz cevher bileşkesinde, korpus kallozumda veya beyin sapında küçük peteşiyel kanamalar görülebilir."
            },
            "mri": {
                "swi": "Multipl blooming veren mikrokanamalar (Evre 1: Gri-beyaz, Evre 2: Korpus Kallozum, Evre 3: Beyin sapı).",
                "t2_flair": "Hemorajik olmayan bileşenlerde hiperintens odaklar.",
                "dwi": "Akut fazda difüzyon kısıtlılığı."
            }
        },
        "keyPoints": [
            "Rotasyonel hızlanma/yavaşlama yaralanması.",
            "Klinik-Radyolojik uyumsuzluk (GKS düşük ama BT normal olabilir).",
            "SWI en duyarlı sekanstır."
        ]
    },
    {
        "id": "idiopathic_intracranial_hypertension",
        "name": "İdiyopatik İntrakraniyal Hipertansiyon (Psödotümör Serebri)",
        "category": "Sellar/Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Zor izlenen (slit-like) ventriküller. Empty (boş) sella."
            },
            "mri": {
                "t2": "Empty sella turcica (hipofiz basısı). Optik sinir kılıflarında genişleme (distansiyon). Optik sinirlerde tortiyozite (kıvrımlanma).",
                "t1_c": "Optik sinir başında intraoküler protrüzyon.",
                "mrv": "Transvers sinüslerde (distal) darlık/stenoz."
            }
        },
        "keyPoints": [
            "Doğurganlık çağındaki obez kadınlar.",
            "Papilödem, Baş ağrısı, Görme bozuklukları.",
            "Venöz Sinüs Trombozu mutlaka dışlanmalıdır."
        ]
    },
    {
        "id": "hydrocephalus_nph",
        "name": "Normal Basınçlı Hidrosefali (NPH)",
        "category": "Dejeneratif",
        "findings": {
            "ct": {
                "non_contrast": "Atrofiye oranla orantısız ventrikül genişlemesi. Evans İndeksi > 0.3."
            },
            "mri": {
                "t2": "Ventrikülomegali. Serebral akuaduktta 'flow void' (akım boşluğu) artışı (hiperdinamik BOS). Verteks düzeyinde giruslarda sıkışma ('Crowding').",
                "t2_flair": "Periventriküler hiperintensite (transependimal geçiş - akut hidrosefaliden daha az belirgindir)."
            }
        },
        "keyPoints": [
            "Klasik Triad: Yürüme bozukluğu ('manyetik yürüyüş'), Demans, İdrar inkontinansı.",
            "Orantısız genişlemiş subaraknoid mesafeli hidrosefali (DESH) bulguları."
        ]
    },
    {
        "id": "tuberous_sclerosis",
        "name": "Tuberoskleroz Kompleksi",
        "category": "Fakomatoz",
        "findings": {
            "ct": {
                "non_contrast": "Kalsifiye subependimal nodüller (SEN). Kortikal tüberler (hipodens)."
            },
            "mri": {
                "t2_flair": "Kortikal/Subkortikal tüberler (Hiperintens). Beyaz cevherde radyasyon (radial migration) hatları.",
                "t1_c": "Foramen Monro düzeyinde Subependimal Dev Hücreli Astrositom (SEGA) (Kontrastlanan, >1cm kitle)."
            }
        },
        "keyPoints": [
            "Epilepsi, Cilt lezyonları (adenom sebaseum).",
            "Renal AML (Anjiyomiyolipom), Kardiyak Rabdomyomlar.",
            "SEGA gelişimi açısından takip gereklidir."
        ]
    },
    {
        "id": "arteriovenous_malformation",
        "name": "Arteriyovenöz Malformasyon (AVM)",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "İzo/Hiperdens solucan paketi (bag of worms). Kalsifikasyon. Kanama yoksa kitle etkisi yapmaz.",
                "cta": "Opake olan nidus, besleyici arterler, erken drene olan venler."
            },
            "mri": {
                "t2": "Serpiginöz 'flow void' (akım boşluğu) yapıları ('Solucan paketi').",
                "t1": "Flow void. Tromboze ise yüksek sinyal.",
                "swi": "Eşlik eden kanama varsa blooming.",
                "t1_c": "Nidus ve damarlarda yoğun kontrastlanma."
            }
        },
        "keyPoints": [
            "Kapiller yatak olmaksızın konjenital şant.",
            "Yüksek akımlı lezyon.",
            "Cerrahi risk için Spetzler-Martin derecelendirmesi."
        ]
    },
    {
        "id": "venous_sinus_thrombosis",
        "name": "Serebral Venöz Sinüs Trombozu",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Hiperdens damar/sinüs işareti (Cord sign). İntra-parankimal kanama (sıklıkla bilateral/parasagittal, arteriyel alana uymayan).",
                "ct_venogram": "Empty Delta (Boş Delta) işareti (Superior Sagittal Sinüste dolum defekti)."
            },
            "mri": {
                "t1": "İzointens (akut) -> Hiperintens (subakut trombus).",
                "t2": "Normal 'flow void' (akım boşluğu) kaybı.",
                "mrv": "Dolum defektleri / akım kesintisi."
            }
        },
        "keyPoints": [
            "Hiperkoagülasyon durumları (OKS kullanımı, gebelik, Faktör V Leiden).",
            "Arteriyel sulama alanlarına uymayan hemorajik infarktlar."
        ]
    },
    {
        "id": "herpes_encephalitis",
        "name": "Herpes Simpleks Ensefaliti",
        "category": "Enfeksiyon",
        "findings": {
            "ct": {
                "non_contrast": "Medial temporal loblar/insulada hipodansite. Erken dönemde sıklıkla normaldir."
            },
            "mri": {
                "t2_flair": "Medial temporal loblar, hipokampus, singulat girus ve insulada hiperintensite. Önce tek taraflı sonra bilateral asimetrik.",
                "dwi": "Tipik olarak kısıtlanmış difüzyon görülür.",
                "t1_c": "Yamasal/Giral kontrastlanma (subakut dönem).",
                "swi": "Mikrokanamalar (nekrotizan karakterde)."
            }
        },
        "keyPoints": [
            "HSV-1 etkenidir. Limbik sistemi tutar.",
            "Bazal ganglionlar korunur (MCA infarktının aksine).",
            "Yüksek mortalite - Şüphe anında hemen Asiklovir başlanmalı."
        ]
    },
    {
        "id": "arachnoid_cyst",
        "name": "Araknoid Kist",
        "category": "Konjenital",
        "findings": {
            "ct": {
                "non_contrast": "Keskin sınırlı, BOS dansitesinde ekstra-aksiyal sıvı koleksiyonu. Komşu kemikte incelme/taraklanma (scalloping)."
            },
            "mri": {
                "t1": "BOS ile izointens.",
                "t2": "BOS ile izointens.",
                "t2_flair": "Tamamen baskılanır (Siyah) - Epidermoid kistten ayrımında önemlidir.",
                "dwi": "Difüzyon kolaylaşmıştır (Siyah/Hipointens) - Epidermoidden (Parlak) ayrımında KRİTİKTİR."
            }
        },
        "keyPoints": [
            "Orta kraniyal çukur (temporal/Sylvian) en sık yerleşim yeridir.",
            "Genellikle insidentaldir (tesadüfen bulunur).",
            "Galassi sınıflaması kullanılır."
        ]
    },
    {
        "id": "primary_cns_lymphoma",
        "name": "Primer Serebral Lenfoma (PCNSL)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Gri cevhere göre izo-hiperdens (hücresel yoğunluk nedeniyle). Genellikle derin yerleşimli (periventriküler, bazal ganglion).",
                "contrast": "İmmünkompetan hastalarda: Yoğun, homojen kontrastlanma. İmmünkompromize (HIV vb.): Halka şeklinde, düzensiz kontrastlanma (merkezi nekroz)."
            },
            "mri": {
                "t1": "İzo-Hipointens.",
                "t2": "İzo-Hipointens (yüksek sellülarite). Bu özellik gliomlardan ayırıcı tanıda önemlidir (gliomlar genellikle parlaktır).",
                "t2_flair": "Orta derecede peritümöral ödem (GBM veya Metastaza göre daha az).",
                "dwi": "Belirgin Difüzyon Kısıtlılığı (Parlak) - Yüksek N/C oranı nedeniyle.",
                "t1_c": "Homojen, bulutsu (fluffy) kontrastlanma. 'Notch sign' (çentik işareti) görülebilir.",
                "spectroscopy": "Lipid/Lactate piki (MASİF), Yüksek Kolin. GBM'den farkı: Perfüzyon genellikle DÜŞÜKTÜR (hipoperfüzyon)."
            }
        },
        "keyPoints": [
            "Steroidlere dramatik yanıt verir ('Hayalet tümör' - Ghost tumor). Biyopsi öncesi steroid VERİLMEMELİDİR.",
            "Genellikle B-hücreli lenfomadır.",
            "İmmün sistemi baskılanmış hastalarda (EBV ilişkili) görünüm çok farklıdır (nekrotik, halkasal)."
        ]
    },
    {
        "id": "intracerebral_hemorrhage",
        "name": "İntraserebral Kanama (Hemorajik İnme)",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Hiperakut/Akut dönem: Hiperdens (60-80 HU) parankimal hematom. Çevre hipodansite (ödem). Kitle etkisi ve ventriküler şift. 'Spot sign' (aktif kanama odağı) BT anjiyoda görülebilir.",
                "contrast": "Aktif ekstravazasyon alanları (kötü prognoz). Altta yatan lezyon (AVM, tümör) araştırması.",
                "evolution": "Subakut (3-14 gün): İzodansite. Kronik (>14 gün): Hipodansite, kavite oluşumu."
            },
            "mri": {
                "t1": "Hiperakut (<6s): İzointens (Oksihemoglobin). Akut (6s-3gün): İzointens-hipointens (Deoksihemoglobin). Erken subakut: Hiperintens periferal halka (intraselüler Met-Hb). Geç subakut: Homojen hiperintens (ekstraselüler Met-Hb).",
                "t2": "Hiperakut: Hiperintens. Akut: Hipointens halka (Deoksihemoglobin). Subakut: Hiperintens merkez, hipointens rim. Kronik: Belirgin hipointens hemosiderin halkası.",
                "swi": "Tüm evrelerde belirgin 'blooming' artefaktı. En duyarlı sekans. Mikrokanama tespiti.",
                "t2_flair": "Çevresel vazojenik ödem değerlendirmesi. Subaraknoid kanama eşlik ediyor mu?",
                "dwi": "Akut hematomda periferal difüzyon kısıtlılığı (sitotoksik ödem)."
            }
        },
        "keyPoints": [
            "En sık neden: Hipertansiyon (bazal ganglia, talamus, pons, serebellum).",
            "Genç hastada lobar kanama: Amiloid anjiyopati, AVM, kavernom düşün.",
            "BT anjiyoda 'Spot sign': Hematom genişlemesi riski yüksek.",
            "Kanama kronolojisi MRI'da T1/T2 sinyal değişimleriyle takip edilir."
        ]
    },
    {
        "id": "cerebral_aneurysm",
        "name": "Serebral Anevrizma (Berry Anevrizması)",
        "category": "Vasküler",
        "findings": {
            "ct": {
                "non_contrast": "Rüptüre: Subaraknoid kanama (sisternalarda hiperdansite). İntrüptüre: Genellikle insidental.",
                "cta": "Anevrizma lokasyonu (Willis poligonu), boyut ölçümü, dome/neck oranı, ana damarla ilişki. Dev anevrizma (>25mm) trombüs ve kalsifikasyon içerebilir.",
                "bone_subtraction": "Kemik artefaktlarını elimine eder, özellikle kafa tabanındaki anevrizmalarda."
            },
            "mri": {
                "tof_mra": "Akım bağımlı parlak sinyal. Küçük anevrizmaları (>3mm) tespit eder. Türbülan akım nedeniyle sinyal kaybı olabilir.",
                "t1_t2": "Dev anevrizma: Akım boşluğu (flow void), periferal trombüs (T1 hiperintens).",
                "t1_c": "Duvar kontrastlanması (inflamasyon veya instabilite belirtisi olabilir).",
                "swi": "Rüptür geçmişi: Hemosiderin birikimi."
            },
            "dsa": {
                "description": "Altın standart. 3D rotasyonel anjiyo. Tedavi planlaması (koil vs klip). Kollateral akım değerlendirmesi."
            }
        },
        "keyPoints": [
            "En sık yerleşim: Anterior kominikan arter (%30), Posterior kominikan arter (%25), MCA bifurkasyonu (%20).",
            "Rüptür riski: Boyut >7mm, posterior sirkülasyon, irregüler şekil, 'daughter sac'.",
            "PHASES skoru rüptür riskini tahmin eder.",
            "Polikistik böbrek hastalığı, Ehlers-Danlos, aile öyküsü: Tarama endikasyonu."
        ]
    },
    {
        "id": "low_grade_glioma",
        "name": "Düşük Dereceli Gliom (WHO Grade 2)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Homojen hipodens kitle. Kalsifikasyon (%20-40, özellikle oligodendrogliomda). Minimal kitle etkisi. Kontrastlanma genellikle YOK.",
                "contrast": "Kontrastlanma varsa: Grade artışı düşünülmeli (anaplastik transformasyon)."
            },
            "mri": {
                "t1": "Homojen hipointens, iyi sınırlı kitle. Kortikal tutulum sık (gri-beyaz cevher ayrımının silinmesi).",
                "t2_flair": "Homojen HİPERİNTENS. Keskin sınırlı. FLAIR'de çevre ödem minimal veya yok.",
                "dwi": "Difüzyon kısıtlılığı YOK (GBM'den fark - sellülarite düşük).",
                "t1_c": "Kontrastlanma YOK veya minimal. Kontrastlanma: Yüksek grade düşündürür.",
                "perfusion": "rCBV DÜŞÜK veya normal (<1.75). GBM'de yüksektir (>1.75).",
                "spectroscopy": "Kolin/NAA oranı hafif artmış (GBM'den daha az). myo-Inozitol artışı (Grade 2 belirtisi)."
            }
        },
        "keyPoints": [
            "WHO 2021: IDH-mutant astrositom, Oligodendrogliom (1p/19q ko-delesyon).",
            "Genellikle genç erişkinlerde (30-40 yaş), epilepsi ile prezentasyon.",
            "Frontal ve temporal loblar en sık yerleşim.",
            "'T2-FLAIR mismatch': Astrositom için spesifik (T2'de hiperintens, FLAIR'de santral hipointens)."
        ]
    },
    {
        "id": "pituitary_macroadenoma",
        "name": "Hipofiz Makroadenomu (>10mm)",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Sellar genişleme, klinoid erozyonu. Suprasellar uzanım. Heterojen (kanama, kist, nekroz).",
                "contrast": "Homojen veya heterojen kontrastlanma. Normal hipofiz dokusu ayırt edilemeyebilir."
            },
            "mri": {
                "t1": "İzointens veya hafif hipointens. Kanama varsa (Apopleksi): Hiperintens alanlar.",
                "t2": "Değişken. Solid: İzointens. Kistik/Nekrotik: Hiperintens.",
                "t1_c": "Yoğun kontrastlanma. Dinamik çekimde normal hipofizden GEÇ kontrastlanır.",
                "t1_c_coronal": "'Figure-of-8' (Kardan adam) görünümü: Suprasellar uzanım, diyafragma sella tarafından sıkıştırılma.",
                "invasion": "Kavernöz sinüs invazyonu: Internal karotid arter %50'den fazla sarılmışsa invazyon olasılığı yüksek."
            }
        },
        "keyPoints": [
            "Fonksiyonel: Prolaktinoma (en sık), GH salgılayan (Akromegali), ACTH (Cushing).",
            "Non-fonksiyonel: Kitle etkisi ile semptom (Bitemporal hemianopsi - optik kiazma basısı).",
            "Hipofizer apopleksi: Ani kanama/nekroz - Acil nöroşirürji konsültasyonu.",
            "Prolaktinoma tedavisi: Önce medikal (Dopamin agonisti), cerrahi ikinci seçenek."
        ]
    },
    {
        "id": "craniopharyngioma",
        "name": "Kraniyofarenjiom",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Suprasellar kalsifiye (>%90) kistik/solid kitle. Kalsifikasyon PATOGNOMONIK. Çocuklarda %90, erişkinlerde %50 kalsifiye.",
                "contrast": "Solid komponent ve kist duvarı kontrastlanır."
            },
            "mri": {
                "t1": "KİST: T1 HİPERİNTENS (kolesterol kristalleri, protein içeriği) - AYIRT EDİCİ ÖZELLİK. Solid: İzointens.",
                "t2": "Kist: Hiperintens (değişken). Solid: Heterojen.",
                "t2_flair": "Kistik komponent belirgin. Çevre gliozis/ödem.",
                "t1_c": "Solid komponent ve kist duvarı belirgin kontrastlanma. İnce veya nodüler rim.",
                "location": "Suprasellar (%75), Intrasellar+Suprasellar (%20), Sadece intrasellar (%5)."
            }
        },
        "keyPoints": [
            "Bimodal yaş dağılımı: Çocukluk (5-15 yaş) ve erişkinler (50-75 yaş).",
            "Adamantinomatöz tip (çocuk): Kalsifiye, kistik. Papiller tip (erişkin): Daha solid.",
            "Ayırıcı tanı: Rathke yarığı kisti (kalsifikasyon yok, daha küçük), Dermoid kist, Hipofiz adenomu.",
            "Tedavi zorluğu: Hipotalamus yapışıklığı nedeniyle subtotal rezeksiyon."
        ]
    }
];
