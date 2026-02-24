import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
    {
        id: "case_001_stroke",
        title: "Konuşma Bozukluğu ile Gelen Hasta",
        difficulty: "Orta",
        patientHistory: "65 yaşında erkek hasta. Sabah uyandığında eşi tarafından konuşmasının bozulduğu ve sağ kolunu hareket ettiremediği fark edilmiş. Öyküsünde Hipertansiyon ve Atriyal Fibrilasyon mevcut.",
        finalDiagnosis: "Sol MCA Enfarktı (Akut İskemik İnme)",
        keyLearningPoint: "Hiperdens MCA işareti erken BT bulgusudur. Kesin tanı ve penumbra değerlendirmesi için Difüzyon MR kritiktir.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "İlk Görüntüleme: Kontrastsız BT",
                description: "Hasta acil servise gelişinin 30. dakikasında BT'ye alındı.",
                imageUrl: "/images/real_ct_stroke.png",
                imageCaption: "Aksiyel Non-Kontrast BT",
                question: "BT görüntüsüne dikkatli bakın. En olası bulgu nedir?",
                options: [
                    "Normal Beyin BT",
                    "Sol Slevian Fissürde 'Hiperdens MCA' İşareti",
                    "Sağ Frontal Lobda Akut Kanama",
                    "Yaygın Beyin Ödemi"
                ],
                correctOptionIndex: 1,
                explanation: "Sol MCA trasesinde damar lümeninde trombüse bağlı dansite artışı (Hiperdens MCA işareti) izlenmektedir. Bu, büyük damar tıkanıklığının erken bir bulgusudur."
            },
            {
                id: "step_2",
                order: 2,
                title: "İleri Görüntüleme: Difüzyon MR (DWI)",
                description: "Bulguları doğrulamak ve iskemi alanını görmek için Difüzyon MR çekildi.",
                imageUrl: "/images/real_mri_stroke.png",
                imageCaption: "Aksiyel DWI (b1000)",
                question: "Difüzyon ağırlıklı görüntülemede (DWI) izlenen parlaklık ne anlama gelir?",
                options: [
                    "Vazojenik Ödem (Tümör)",
                    "Sitotoksik Ödem (Akut İskemi)",
                    "Eski Enfarkt Alanı (Kronik)",
                    "Artefakt"
                ],
                correctOptionIndex: 1,
                explanation: "DWI serilerinde hiperintensite (parlaklık) ve ADC haritasında hipointensite (karanlık), akut dönemde gelişen sitotoksik ödemi (hücre şişmesi) ve dolayısıyla akut iskemiyi gösterir."
            },
            {
                id: "step_3",
                order: 3,
                title: "Tedavi Kararı",
                description: "Hasta semptom başlangıcının 3. saatinde. Kanama yok. Geniş enfarkt alanı henüz oturmamış.",
                imageUrl: "/images/mri_stroke_adc.png",
                imageCaption: "ADC Haritası",
                question: "En uygun acil tedavi yaklaşımı nedir?",
                options: [
                    "Sadece Aspirin verip izlemek",
                    "Acil Kraniyotomi (Cerrahi)",
                    "IV Trombolitik Tedavi (tPA) ve/veya Trombektomi",
                    "Antibiyotik Tedavisi"
                ],
                correctOptionIndex: 2,
                explanation: "İlk 4.5 saat içinde (ve uygun hastalarda 24 saate kadar) IV trombolitik tedavi veya mekanik trombektomi, iskemik inmede standart tedavidir. Amaç 'Penumbra' (kurtarılabilir doku) alanını kurtarmaktır."
            }
        ]
    },
    {
        "id": "case_002_cauda_equina",
        "title": "Bel Ağrısı ve İdrar Kaçırma",
        "difficulty": "Zor",
        "patientHistory": "45 yaşında kadın hasta. Ağır kaldırma sonrası başlayan şiddetli bel ağrısı şikayetiyle başvurdu. Son 6 saattir idrarını yapamadığını (retansiyon) ve her iki bacağında uyuşma olduğunu ifade ediyor.",
        "finalDiagnosis": "Kauda Ekuina Sendromu (Acil Cerrahi)",
        "keyLearningPoint": "Kauda Ekuina Sendromu bir cerrahi acildir. 'Kırmızı Bayrak' bulguları (Saddle anestezi, üriner retansiyon) atlanmamalıdır.",
        "steps": [
            {
                "id": "step_1",
                "order": 1,
                "title": "Fizik Muayene ve Öykü",
                "description": "Hastanın nörolojik muayenesinde bilateral L5-S1 dermatomlarında duyu kaybı ve 'Saddle Anestezi' (Perineal bölgede hissizlik) saptandı.",
                "imageUrl": "/images/spine/lumbar_herniation_sagittal.png",
                "imageCaption": "Lomber Sagittal T2 MR",
                "question": "Bu klinik tablo ve MR görüntüsü eşliğinde en korkulan tanı nedir?",
                "options": [
                    "Basit Mekanik Bel Ağrısı",
                    "Kauda Ekuina Sendromu",
                    "Lumbar Spinal Stenoz",
                    "Vertebral Metastaz"
                ],
                "correctOptionIndex": 1,
                "explanation": "Şiddetli bel ağrısı + Bilateral bacak semptomları + Sfinkter kusuru (İdrar retansiyonu/inkontinansı) + Saddle anestezi = Kauda Ekuina Sendromu."
            },
            {
                "id": "step_2",
                "order": 2,
                "title": "Radyolojik Değerlendirme",
                "description": "Görüntüyü tekrar inceleyin. L4-L5 seviyesindeki patolojinin boyutu ve etkisi nasıldır?",
                "imageUrl": "/images/spine/lumbar_herniation_sagittal.png",
                // Note: Ideally we would use an axial view here showing full occlusion, but utilizing what we have for now or using the generated herniation image which works well.
                "imageCaption": "Lomber Sagittal T2 MR (Yakın Plan)",
                "question": "MR bulgusu nasıl tarif edilmelidir?",
                "options": [
                    "Küçük Sınırda Bulging (Taşma)",
                    "L4-L5 Seviyesinde Masif Ekstrüde Disk Hernisi",
                    "Schmorl Nodülü",
                    "Spondilolistezis (Bel Kayması)"
                ],
                "correctOptionIndex": 1,
                "explanation": "Görüntüde spinal kanalı tama yakın dolduran, dural keseyi ve sinir köklerini (Kauda liflerini) sıkıştıran büyük (masif) bir disk ekstrüzyonu izlenmektedir."
            },
            {
                "id": "step_3",
                "order": 3,
                "title": "Tedavi Yönetimi",
                "description": "Tanı: Kauda Ekuina Sendromu. Saat: 03:00 (Gece).",
                "imageUrl": "/images/spine/lumbar_herniation_sagittal.png",
                "imageCaption": "Acil Planlama",
                "question": "En uygun tedavi yaklaşımı nedir?",
                "options": [
                    "Sabah poliklinik kontrolü önerilir",
                    "Yatak istirahati ve kas gevşetici",
                    "Fizik tedavi programı",
                    "Acil Dekompresyon Cerrahisi (Laminektomi/Diskektomi)"
                ],
                "correctOptionIndex": 3,
                "explanation": "Kauda Ekuina Sendromu cerrahi bir acildir. Kalıcı nörolojik hasarı (düşük ayak, kalıcı idrar/gaita kaçırma) önlemek için ideal olarak ilk 24-48 saat içinde cerrahi dekompresyon yapılmalıdır."
            }
        ]
    },
    {
        "id": "case_003_spinal_trauma",
        "title": "Yüksekten Düşme",
        "difficulty": "Zor",
        "patientHistory": "35 yaşında erkek hasta, inşaat işçisi. 3 metre yükseklikten (iskeleden) beton zemine ayakları üzerine düşmüş. Acil servise getirildiğinde şiddetli bel ağrısı ve her iki topukta ağrı tarifliyor. Nörolojik muayenesi olağan (intakt).",
        "finalDiagnosis": "L1 Burst Kırığı (Stabilite Riski)",
        "keyLearningPoint": "Yüksekten düşmelerde 'Kalkaneu-Vertebra' aksı unutulmamalıdır. Topuk kırığı olan hastada mutlaka Torako-lomber BT görülmelidir.",
        "steps": [
            {
                "id": "step_1",
                "order": 1,
                "title": "Travma BT Değerlendirmesi",
                "description": "Lomber BT görüntüsünde L1 vertebra korpusunda yükseklik kaybı ve parçalı görünüm izleniyor.",
                "imageUrl": "/images/spine/spinal_stenosis_axial.png", // Placeholder until we generate burst fracture
                "imageCaption": "L1 Aksiyel BT Kesiti",
                "question": "Bu kırığı 'Kompresyon' kırığından ayıran en önemli bulgu nedir?",
                "options": [
                    "Kırık parça sayısı",
                    "Ağrının şiddeti",
                    "Arka Duvarın (Posterior Korteks) etkilenmesi ve kanala taşması",
                    "Ön yükseklik kaybı oranı"
                ],
                "correctOptionIndex": 2,
                "explanation": "Burst (Patlama) kırıklarında, basit çökme kırıklarından farklı olarak 'orta kolon' ve corpus arka duvarı hasar görür. Bu durum kemik parçalarının spinal kanala doğru yer değiştirme (retropulsiyon) riskini doğurur."
            },
            {
                "id": "step_2",
                "order": 2,
                "title": "Ligaman Hasarı (MR)",
                "description": "Kemik yapıyı gördük. Peki yumuşak doku? Cerrahın kararını değiştirecek olan 'Arka Ligaman Kompleksi' (PLC) sağlam mı?",
                "imageUrl": "/images/spine/spondylolisthesis_sagittal.png", // Placeholder
                "imageCaption": "Lomber Sagittal STIR MR",
                "question": "MR'da STIR sekansında L1-L2 arasındaki interspinöz ligamanda parlaklık (hiperintensite) görülmesi ne anlama gelir?",
                "options": [
                    "Normal bulgu",
                    "Dejeneratif değişiklik (Kireçlenme)",
                    "PLC (Posterior Ligaman Kompleks) Yırtığı/Hasarı",
                    "Enfeksiyon"
                ],
                "correctOptionIndex": 2,
                "explanation": "STIR sekansındaki ödem (parlaklık), travma sonrası arka bağların (Supraspinöz/İnterspinöz) koptuğunu gösterir. PLC hasarı kırığı 'Anstabil' yapar ve genellikle cerrahi gerektirir."
            },
            {
                "id": "step_3",
                "order": 3,
                "title": "Tedavi Kararı (TLICS Skoru)",
                "description": "Özet: Burst kırığı + PLC hasarı + Nörolojik defisit yok.",
                "imageUrl": "/images/placeholder-spine.png",
                "imageCaption": "Klinik Karar Anı",
                "question": "TLICS (Thoracolumbar Injury Classification) skoruna göre önerilen tedavi?",
                "options": [
                    "Sadece yatak istirahati",
                    "Çelik korse ile taburcu",
                    "Posterior Enstrümantasyon (Vida-Rod ile Füzyon)",
                    "Fizik tedavi"
                ],
                "correctOptionIndex": 2,
                "explanation": "Burst morfolojisi (2 puan) + PLC hasarı (3 puan) = Toplam 5 puan. TLICS skoru > 4 olan hastalar cerrahi adaydır. Konservatif izlem nörolojik kötüleşme riski taşır."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // LIVER CASES
    // ═══════════════════════════════════════════════════
    {
        id: "case_004_hcc",
        title: "Siroz Hastasında Yeni Kitle",
        difficulty: "Orta",
        patientHistory: "58 yaşında erkek hasta. Hepatit B'ye bağlı siroz tanısı ile takipte. 6 aylık kontrol USG'de karaciğerde yeni lezyon saptanması üzerine ileri inceleme için yönlendirilmiş. AFP: 450 ng/mL (yüksek).",
        finalDiagnosis: "Hepatosellüler Karsinom (HCC) — LI-RADS 5",
        keyLearningPoint: "Siroz zemininde APHE + Washout + Kapsül = LI-RADS 5 (kesinlikle HCC). Biyopsi genellikle gerekmez.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Dinamik BT: Arteryel Faz",
                description: "Trifazik (dinamik) karaciğer BT çekildi. Arteryel faz görüntüsünü inceleyin.",
                imageUrl: "/images/placeholder-liver.png",
                imageCaption: "Aksiyel Arteryel Faz BT",
                question: "Karaciğer sağ lobda izlenen lezyonun arteryel fazdaki kontrastlanma paterni nedir?",
                options: [
                    "Kontrastlanma yok (hipointens)",
                    "Periferik nodüler kontrastlanma (sentripetal dolum)",
                    "Belirgin arteryel faz hiperkontrastlanma (APHE)",
                    "Homojen kontrastlanma (izointens)"
                ],
                correctOptionIndex: 2,
                explanation: "HCC klasik olarak arteryel fazda çevredeki parankimden belirgin şekilde daha yoğun kontrastlanır (APHE — Arterial Phase Hyperenhancement). Bu, tümörün hepatik arter beslemeli olmasından kaynaklanır."
            },
            {
                id: "step_2",
                order: 2,
                title: "Portal Venöz ve Geç Faz",
                description: "Aynı lezyonun portal venöz ve geç fazlarını inceleyin.",
                imageUrl: "/images/placeholder-liver.png",
                imageCaption: "Portal Venöz Faz BT",
                question: "LI-RADS 5 tanısı için arteryel faz hiperkontrastlanmaya ek olarak hangi özellik(ler) gereklidir?",
                options: [
                    "Yalnızca lezyon boyutu > 5 cm",
                    "Yalnızca santripetal dolum paterni",
                    "Washout (yıkanma) ve/veya kapsül tutulumu",
                    "Yalnızca T2 hiperintensite (MR'da)"
                ],
                correctOptionIndex: 2,
                explanation: "LI-RADS 5 için APHE + en az bir major özellik gerekir: Washout (portal/geç fazda parankime göre hipointensite), enhancing kapsül, veya eşik büyüme. Bu vaka tipik APHE + washout + kapsül gösterir."
            },
            {
                id: "step_3",
                order: 3,
                title: "LI-RADS Sınıflama ve Tedavi",
                description: "Lezyon 32 mm, APHE (+), Washout (+), Kapsül (+). Siroz zemini mevcut.",
                imageUrl: "/images/placeholder-liver.png",
                imageCaption: "LI-RADS Algoritması",
                question: "Bu lezyon için doğru LI-RADS kategorisi ve önerilen yaklaşım nedir?",
                options: [
                    "LI-RADS 3 — 6 aylık takip",
                    "LI-RADS 4 — Biyopsi önerilir",
                    "LI-RADS 5 — Kesinlikle HCC, biyopsi genellikle gerekmez",
                    "LI-RADS M — HCC dışı malignite şüphesi"
                ],
                correctOptionIndex: 2,
                explanation: "≥ 20 mm lezyon + APHE + 1 veya daha fazla major özellik (washout, kapsül, eşik büyüme) = LI-RADS 5. Tedavi: Ablasyon, TACE, rezeksiyon veya karaciğer nakli değerlendirilir."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // LUNG CASE
    // ═══════════════════════════════════════════════════
    {
        id: "case_005_pe",
        title: "Nefes Darlığı ve Göğüs Ağrısı",
        difficulty: "Orta",
        patientHistory: "42 yaşında kadın hasta. 10 gün önce diz artroskopisi geçirmiş. Son 2 gündür artan nefes darlığı ve sol göğüs ağrısı. Taşikardik (pulse: 110/dk), SpO2: 88%. D-dimer: 4500 ng/mL (çok yüksek).",
        finalDiagnosis: "Akut Masif Pulmoner Emboli",
        keyLearningPoint: "Post-operatif dönem + taşikardi + hipoksi + yüksek D-dimer = PE yüksek olasılık. RV/LV oranı > 1 ise masif PE düşün.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Pulmoner BT Anjiyografi",
                description: "Acil pulmoner BT anjiyografi (PBTA) çekildi.",
                imageUrl: "/images/placeholder-lung.png",
                imageCaption: "Aksiyel PBTA",
                question: "Pulmoner arterlerde izlenen düşük dansiteli alanlar ne anlama gelir?",
                options: [
                    "Kalsifik ateroskleroz",
                    "İntralüminal dolum defekti (trombüs)",
                    "Pulmoner arter anevrizması",
                    "Motion artefaktı"
                ],
                correctOptionIndex: 1,
                explanation: "Pulmoner arter dallarında izlenen düşük dansiteli intralüminal dolum defektleri, akut trombüs varlığını gösterir. Bu vaka bilateral ana pulmoner arter tutulumu olması nedeniyle masif PE'dir."
            },
            {
                id: "step_2",
                order: 2,
                title: "Sağ Kalp Değerlendirmesi",
                description: "Aynı BT'de kalp odacıkları değerlendirildi.",
                imageUrl: "/images/placeholder-lung.png",
                imageCaption: "Aksiyel — Kalp Düzeyi",
                question: "RV/LV oranı > 1.0 saptanması ne ifade eder?",
                options: [
                    "Normal kardiyak boyutlar",
                    "Sol kalp yetmezliği",
                    "Sağ kalp yüklenmesi (masif/submasif PE göstergesi)",
                    "Konstriktif perikardit"
                ],
                correctOptionIndex: 2,
                explanation: "RV/LV oranı > 1.0, sağ ventrikülün akut basınç yüklenmesine bağlı dilate olduğunu gösterir. Bu durum masif/submasif PE'yi işaret eder ve daha agresif tedavi (tromboliz) gerektirebilir."
            },
            {
                id: "step_3",
                order: 3,
                title: "Acil Tedavi Kararı",
                description: "Bilateral masif PE + RV dilatasyonu + Hipotansiyon (Sistolik TA: 85 mmHg).",
                imageUrl: "/images/placeholder-lung.png",
                imageCaption: "Klinik Karar",
                question: "Hemodinamik olarak instabil, masif PE hastasında ilk basamak tedavi nedir?",
                options: [
                    "Sadece düşük molekül ağırlıklı heparin (DMAH)",
                    "Sistemik trombolitik tedavi (Alteplaz/tPA)",
                    "Sadece inferior vena cava (IVC) filtresi",
                    "Aspirin + Klopidogrel"
                ],
                correctOptionIndex: 1,
                explanation: "Hemodinamik instabilite (şok, hipotansiyon) ile seyreden masif PE'de sistemik tromboliz (IV tPA/Alteplaz) birinci basamak tedavidir. Kontrendike ise cerrahi embolektomi veya kateter-yönlendirmeli tromboliz düşünülür."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // BREAST CASE
    // ═══════════════════════════════════════════════════
    {
        id: "case_006_breast",
        title: "Taramada Saptanan Meme Lezyonu",
        difficulty: "Kolay",
        patientHistory: "52 yaşında kadın hasta. Rutin tarama mammografisinde sağ memede yeni saptanan lezyon. Ailede 1. derece yakınında (anne) meme kanseri öyküsü. Fizik muayenede palpabl kitle.",
        finalDiagnosis: "Meme Karsinomu (BI-RADS 5)",
        keyLearningPoint: "Spiküle kontur + düzensiz şekil + mikrokalsifikasyon = BI-RADS 5. Biyopsi zorunludur.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Mammografi Değerlendirmesi",
                description: "CC ve MLO mammografi görüntüleri değerlendirildi.",
                imageUrl: "/images/placeholder-breast.png",
                imageCaption: "MLO Mammografi",
                question: "Sağ memede izlenen lezyonun en şüpheli özelliği nedir?",
                options: [
                    "Oval, düzgün sınırlı şekil",
                    "Spiküle (dikensi) kenarlar ve pleomorfik mikrokalsifikasyonlar",
                    "Yağ içeren (lucent center) lezyon",
                    "Kaba, yuvarlak kalsifikasyonlar"
                ],
                correctOptionIndex: 1,
                explanation: "Spiküle kenarlar ve pleomorfik/lineer mikrokalsifikasyonlar, meme karsinomun en güçlü mammografik göstergeleridir. Bu bulgular BI-RADS 4C veya 5 kategorisine girer."
            },
            {
                id: "step_2",
                order: 2,
                title: "USG Korelasyonu",
                description: "Mammografik bulgunun USG korelasyonu yapıldı.",
                imageUrl: "/images/placeholder-breast.png",
                imageCaption: "Meme USG",
                question: "USG'de hangi bulgu malignite şüphesini en çok artırır?",
                options: [
                    "Anekoik, düzgün duvarlı kistik lezyon",
                    "Yatay oryantasyonlu (wider-than-tall) hipoekoik lezyon",
                    "Dikey oryantasyonlu (taller-than-wide), düzensiz kenarlı hipoekoik solid lezyon",
                    "İnternal vaskülarite göstermeyen izokoik alan"
                ],
                correctOptionIndex: 2,
                explanation: "Dikey oryantasyonlu (taller-than-wide), düzensiz kenarlı, posterior akustik gölge veren solid lezyon, malignite için yüksek şüpheli USG bulgularıdır."
            },
            {
                id: "step_3",
                order: 3,
                title: "BI-RADS Sınıflama",
                description: "MMG: Spiküle kitle + mikrokalsifikasyon. USG: Dikey oryantasyonlu solid lezyon.",
                imageUrl: "/images/placeholder-breast.png",
                imageCaption: "BI-RADS Karar",
                question: "Doğru BI-RADS kategorisi ve önerilen yaklaşım?",
                options: [
                    "BI-RADS 3 — 6 aylık takip",
                    "BI-RADS 4A — Düşük şüpheli, isteğe bağlı biyopsi",
                    "BI-RADS 5 — Malignite ile yüksek uyumlu, biyopsi zorunlu",
                    "BI-RADS 2 — Benign, rutin takip"
                ],
                correctOptionIndex: 2,
                explanation: "Spiküle kitle + pleomorfik mikrokalsifikasyon + şüpheli USG bulguları = BI-RADS 5 (≥ %95 malignite olasılığı). Tru-cut biyopsi zorunludur. Tedavi planlaması için evreleme MR düşünülmelidir."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // KIDNEY CASE
    // ═══════════════════════════════════════════════════
    {
        id: "case_007_renal_colic",
        title: "Şiddetli Yan Ağrısı (Renal Kolik)",
        difficulty: "Kolay",
        patientHistory: "38 yaşında erkek hasta. Gece ansızın başlayan, dalgalanma gösteren şiddetli sol yan ağrısı. Kasığa yayılım mevcut. İdrar mikroskopisinde hematüri (+). Ateş yok.",
        finalDiagnosis: "Sol Üreter Taşı (Ürolitiyazis) + Obstrüktif Üropati",
        keyLearningPoint: "Kontrastsız üriner BT renal kolikte altın standarttır. Perinefritik stranding ve hidronefroz obstrüksiyonu gösterir.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Kontrastsız Üriner BT",
                description: "Hastaya kontrastsız (taşsız protokol) üriner BT çekildi.",
                imageUrl: "/images/placeholder-kidney.png",
                imageCaption: "Aksiyel Kontrastsız BT",
                question: "Sol üreterde izlenen hiperdens odak ne anlama gelir?",
                options: [
                    "Flebit (ven kalsifikasyonu)",
                    "Üreter taşı (kalkül)",
                    "Lenf nodu kalsifikasyonu",
                    "Artefakt"
                ],
                correctOptionIndex: 1,
                explanation: "Üreteral lümen içinde izlenen hiperdens (parlak) odak, ürolityazis (taş) ile uyumludur. Taşların %90'ı kalsiyum içerir ve BT'de hiperdens görünür. Ürik asit taşları da BT'de görülebilir."
            },
            {
                id: "step_2",
                order: 2,
                title: "Sekonder Bulgular",
                description: "Taşın proksimalindeki böbrek ve çevre dokular değerlendirildi.",
                imageUrl: "/images/placeholder-kidney.png",
                imageCaption: "Koronal BT",
                question: "Sol böbrekte izlenen toplayıcı sistem genişlemesi ve perinefritik kirlenme (stranding) ne gösterir?",
                options: [
                    "Kronik böbrek hastalığı",
                    "Akut obstrüktif üropati (taşın tıkanma yaptığı kanıt)",
                    "Pyelonefrit",
                    "Renal arter stenozu"
                ],
                correctOptionIndex: 1,
                explanation: "Hidronefroz (toplayıcı sistem genişlemesi) + perirenal stranding (yağ dokusunda kirlenme), taşa bağlı akut obstrüksiyonun ikincil bulgularıdır. Bu bulgular akut kolikle koreledir."
            },
            {
                id: "step_3",
                order: 3,
                title: "Tedavi Kararı",
                description: "8 mm taş, sol distal üreterde. Grade 2 hidronefroz. Ateş ve enfeksiyon bulgusu yok.",
                imageUrl: "/images/placeholder-kidney.png",
                imageCaption: "Tedavi Planlaması",
                question: "> 6 mm üreter taşı için önerilen tedavi yaklaşımı nedir?",
                options: [
                    "Sadece sıvı içmek ve beklemek",
                    "ESWL (Şok dalga ile taş kırma) veya Üreteroskopi (URS)",
                    "Acil nefrektomi",
                    "Antibiyotik tedavisi"
                ],
                correctOptionIndex: 1,
                explanation: "6 mm'den büyük taşlar spontan düşme olasılığı düşüktür. ESWL (Extracorporeal Shock Wave Lithotripsy) veya üreteroskopik tedavi (URS) endikedir. Enfeksiyon eşlik ederse acil DJ stent/nefrostomi gerekir."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // MSK CASE
    // ═══════════════════════════════════════════════════
    {
        id: "case_008_acl",
        title: "Futbol Oynarken Diz Yaralanması",
        difficulty: "Kolay",
        patientHistory: "24 yaşında erkek hasta, amatör futbolcu. Top sektirirken ani dönme hareketi sırasında sol dizinde 'çıt' sesi duymuş ve yere düşmüş. Diz belirgin şiş, instabil. Lachman testi ve ön çekmece testi pozitif.",
        finalDiagnosis: "Ön Çapraz Bağ (ACL) Tam Yırtığı + Lateral Menisküs Yırtığı",
        keyLearningPoint: "ACL yırtığı 'O'Donoghue Unhappy Triad' (ACL + MCL + Medial Menisküs) veya bone bruise paterni ile birlikte görülebilir.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Diz MR: Sagittal Görüntü",
                description: "Sol diz MR incelemesi yapıldı. Sagittal T2 ağırlıklı görüntü değerlendirildi.",
                imageUrl: "/images/placeholder-msk.png",
                imageCaption: "Sagittal PD-FS (Proton Yoğunluklu)",
                question: "ACL yırtığının en güvenilir MR bulgusu nedir?",
                options: [
                    "ACL lifleri normal seyir ve sinyalde",
                    "ACL liflerinde devamlılık kaybı ve T2 sinyal artışı",
                    "Sadece eklem efüzyonu varlığı",
                    "Patella lateralizasyonu"
                ],
                correctOptionIndex: 1,
                explanation: "ACL yırtığında MR'da ligament liflerinin devamlılığı kaybolur (görülmez), sinyal artışı (ödem) ve şekil bozukluğu izlenir. Sekonder bulgular: Anterior tibial translasyon, posterior horn menisküs açılanması (buckle sign)."
            },
            {
                id: "step_2",
                order: 2,
                title: "Kemik Kontüzyonu (Bone Bruise)",
                description: "Sagittal ve koronal görüntülerde kemik iliği ödemi paterni değerlendirildi.",
                imageUrl: "/images/placeholder-msk.png",
                imageCaption: "Sagittal STIR — Kemik İliği",
                question: "ACL yırtığında tipik bone bruise paterni nerededir?",
                options: [
                    "Medial femoral kondil + medial tibial plato",
                    "Lateral femoral kondil posterolateral + posterolateral tibial plato",
                    "Patellada anterior",
                    "Fibula başında"
                ],
                correctOptionIndex: 1,
                explanation: "ACL yırtığında 'pivot-shift' mekanizmasına bağlı lateral femoral kondil posterolateral ve posterolateral tibial plato kemik iliği ödemi (bone bruise) izlenir. Bu patern ACL yırtığı için %90+ spesifiktir."
            },
            {
                id: "step_3",
                order: 3,
                title: "Tedavi Planlaması",
                description: "ACL tam yırtığı + Lateral menisküs bucket-handle yırtığı + Bone bruise. Aktif sporcu.",
                imageUrl: "/images/placeholder-msk.png",
                imageCaption: "Tedavi Kararı",
                question: "Genç aktif sporcuda ACL tam yırtığı tedavisi nedir?",
                options: [
                    "Sadece fizik tedavi yeterlidir",
                    "Dizlik + istirahat + 6 ay sonra kontrol",
                    "ACL rekonstrüksiyonu (cerrahi) + menisküs onarımı",
                    "İntra-artiküler kortikosteroid enjeksiyonu"
                ],
                correctOptionIndex: 2,
                explanation: "Genç, aktif sporcuda ACL tam yırtığı artroskopik rekonstrüksiyon endikasyonudur. Eşlik eden menisküs yırtığı aynı seansta onarılır. Greft seçenekleri: Otojen hamstring, patellar tendon."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // GI CASE
    // ═══════════════════════════════════════════════════
    {
        id: "case_009_appendicitis",
        title: "Sağ Alt Kadran Ağrısı",
        difficulty: "Kolay",
        patientHistory: "22 yaşında erkek hasta. 12 saattir devam eden karın ağrısı, başlangıçta göbek çevresindeyken sağ alt kadrana migrasyon göstermiş. Bulantı, iştahsızlık, ateş (37.8°C). WBC: 15.000/mm³.",
        finalDiagnosis: "Akut Apandisit",
        keyLearningPoint: "Apendiks çapı >6mm + periapendisiyal kirlenme (stranding) + apendikolit = Akut apandisit. BT sensitivitesi %98.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Kontrastlı Abdomen BT",
                description: "İV kontrastlı abdomen BT çekildi. Sağ iliak fossa değerlendirildi.",
                imageUrl: "/images/placeholder-gi.png",
                imageCaption: "Aksiyel Kontrastlı BT",
                question: "BT'de apandisite işaret eden en önemli bulgu nedir?",
                options: [
                    "Normal kalibrasyonda apendiks (<6mm)",
                    "Genişlemiş apendiks (>6mm) + duvar kalınlaşması + periapendisiyal kirlenme",
                    "Sol alt kadran inflamasyonu",
                    "Serbest intraperitoneal hava"
                ],
                correctOptionIndex: 1,
                explanation: "Akut apandisin BT'deki klasik bulguları: Apendiks çapı >6mm, duvar kalınlaşması, kontrast tutulumu, periapendisiyal yağ kirlenme (fat stranding), ve sıklıkla apendikolit eşlik eder."
            },
            {
                id: "step_2",
                order: 2,
                title: "Komplikasyon Değerlendirmesi",
                description: "Apendiks duvarı ve çevre doku detaylı incelendi.",
                imageUrl: "/images/placeholder-gi.png",
                imageCaption: "Aksiyel BT — Yakın Plan",
                question: "Hangi bulgu perforasyonu düşündürür?",
                options: [
                    "Apendiksin düzgün duvar yapısı",
                    "Periapendisiyal serbest sıvı koleksiyonu + apendiks duvar defekti",
                    "Sadece lökositoz",
                    "Çekum duvar kalınlaşması"
                ],
                correctOptionIndex: 1,
                explanation: "Perforasyon bulguları: Apendiks duvarında devamlılık kaybı (defekt), periapendisiyal organize/serbest sıvı (apse), ekstralüminal hava. Perforasyon varsa tedavi stratejisi değişebilir."
            },
            {
                id: "step_3",
                order: 3,
                title: "Tedavi Kararı",
                description: "Akut non-perfore apandisit. Genel durum stabil.",
                imageUrl: "/images/placeholder-gi.png",
                imageCaption: "Cerrahi Planlama",
                question: "Standart tedavi yaklaşımı nedir?",
                options: [
                    "Antibiyotik ile konservatif tedavi (tek başına)",
                    "Laparoskopik apendektomi",
                    "Perkütan drenaj",
                    "Sadece gözlem"
                ],
                correctOptionIndex: 1,
                explanation: "Non-komplike akut apandisitte laparoskopik apendektomi altın standart tedavidir. Bazı merkezlerde antibiyotik-ilk yaklaşım uygulanabilir, ancak cerrahi hala birincil tedavi seçeneğidir."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // GYN CASE
    // ═══════════════════════════════════════════════════
    {
        id: "case_010_ovarian_torsion",
        title: "Ani Başlayan Alt Karın Ağrısı (Kadın)",
        difficulty: "Orta",
        patientHistory: "28 yaşında kadın hasta. 4 saat önce aniden başlayan şiddetli sol alt karın ağrısı. Bulantı-kusma eşlik ediyor. Son adet 2 hafta önce. Bilinen sol overde 6 cm dermoid kist mevcut.",
        finalDiagnosis: "Sol Over Torsiyonu",
        keyLearningPoint: "Over torsiyonu cerrahi acildir. 'Whirlpool sign' (pediküler kıvrılma), overde ödem/büyüme ve azalmış/kayıp Doppler akımı tanı triadıdır.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Pelvis USG (Gray-scale)",
                description: "Acil transvajinal USG yapıldı. Sol adneksiyal bölge değerlendirildi.",
                imageUrl: "/images/placeholder-gyn.png",
                imageCaption: "Transvajinal USG — Sol Over",
                question: "Sol overde izlenen belirgin büyüme ve periferik foliküler dizilim ne anlama gelir?",
                options: [
                    "Normal over görünümü",
                    "Over torsiyonuna bağlı stromal ödem (büyümüş, ödemli over)",
                    "Polikistik over sendromu (PCOS)",
                    "Over hiperstimülasyonu"
                ],
                correctOptionIndex: 1,
                explanation: "Over torsiyonunda, venöz ve lenfatik drenaj bozulmasına bağlı over belirgin şekilde büyür (ödem). Periferik foliküler dizilim (peripheral follicle sign) stromal ödemin ittiği foliküllerden kaynaklanır."
            },
            {
                id: "step_2",
                order: 2,
                title: "Doppler USG Değerlendirmesi",
                description: "Renkli ve spektral Doppler ile ovarian vaskülarite değerlendirildi.",
                imageUrl: "/images/placeholder-gyn.png",
                imageCaption: "Renkli Doppler USG",
                question: "Sol overde arteriyel ve venöz akımın azalmış/kaybolmuş olması ne ifade eder?",
                options: [
                    "Normal fizyolojik varyasyon",
                    "Over torsiyonunda vasküler pediülün kıvrılması (iskemi riski)",
                    "Yumurtlama (ovülasyon) dönemi",
                    "Pelvik inflamatuvar hastalık"
                ],
                correctOptionIndex: 1,
                explanation: "Doppler'de azalmış/kayıp ovarian akım, torsiyona bağlı vasküler pedikül kıvrılmasını gösterir. Ancak dikkat: Erken torsiyonda arteriyel akım korunabilir (dual supply). Klinik korelasyon esastır."
            },
            {
                id: "step_3",
                order: 3,
                title: "Acil Müdahale",
                description: "USG: Büyümüş ödemli over + dermoid kist + azalmış Doppler akımı. Klinik: Akut ağrı, bulantı.",
                imageUrl: "/images/placeholder-gyn.png",
                imageCaption: "Cerrahi Karar",
                question: "Over torsiyonunda doğru tedavi yaklaşımı nedir?",
                options: [
                    "Analizi ve 24 saat gözlem",
                    "Antibiyotik tedavisi",
                    "Acil laparoskopik detorsiyon (± kistektomi)",
                    "Oral kontraseptif tedavisi"
                ],
                correctOptionIndex: 2,
                explanation: "Over torsiyonu cerrahi acildir. Laparoskopik detorsiyon (torsiyonun açılması) yapılır. Over canlı ise korunur (oophoropexy). Nekrotik ise ooforektomi gerekebilir. Kist varsa kistektomi eklenir."
            }
        ]
    },

    // ═══════════════════════════════════════════════════
    // NEURO CASE (Additional Brain)
    // ═══════════════════════════════════════════════════
    {
        id: "case_011_gbm",
        title: "İlerleyici Baş Ağrısı ve Nöbet",
        difficulty: "Orta",
        patientHistory: "55 yaşında erkek hasta. 3 haftadır giderek artan baş ağrısı, sabahları belirgin bulantı-kusma ve 2 gün önce ilk kez jeneralize tonik-klonik nöbet geçirme öyküsü. Nörolojik muayenede sol hemiparezi saptanmış.",
        finalDiagnosis: "Glioblastom Multiforme (GBM — WHO Grade IV)",
        keyLearningPoint: "Ring enhancement + nekroz + vasküler ödem + kelebek görünümü (korpus kallozum geçişi) = GBM. Perfüzyon MR'da rCBV artışı, Spektroskopide Cho/NAA artışı tanıyı destekler.",
        steps: [
            {
                id: "step_1",
                order: 1,
                title: "Kontrastlı Kranial MR",
                description: "Kranial MR incelemesinde IVKM sonrası T1 ağırlıklı görüntüler değerlendirildi.",
                imageUrl: "/images/placeholder-brain.png",
                imageCaption: "Aksiyal T1+K MR",
                question: "Sağ frontoparietal bölgede izlenen lezyonun en belirgin kontrastlanma paterni nedir?",
                options: [
                    "Homojen, yoğun kontrastlanma",
                    "Kalın, düzensiz halkasal (ring) kontrastlanma + santral nekroz",
                    "Kontrastlanma yok",
                    "İnce, düzgün halkasal kontrastlanma (apse paterni)"
                ],
                correctOptionIndex: 1,
                explanation: "GBM tipik olarak kalın, düzensiz duvar kalınlığı gösteren ring (halkasal) kontrastlanma ve santral nekroz ile karakterizedir. İnce, düzgün ring enhancement daha çok apse veya metastaz lehine değerlendirilir."
            },
            {
                id: "step_2",
                order: 2,
                title: "İleri MR Sekansları",
                description: "DWI, Perfüzyon MR ve MR Spektroskopi değerlendirildi.",
                imageUrl: "/images/placeholder-brain.png",
                imageCaption: "Perfüzyon MR (rCBV haritası)",
                question: "GBM'de perfüzyon MR'da (rCBV) tipik olarak ne beklenir?",
                options: [
                    "Düşük rCBV (hipovasküler lezyon)",
                    "Normal rCBV",
                    "Yüksek rCBV (hipervasküler — neoanjiyogenez)",
                    "Heterojen, sadece periferal rCBV artışı"
                ],
                correctOptionIndex: 2,
                explanation: "GBM yüksek dereceli glial tümör olarak belirgin neoanjiyogenez gösterir. rCBV (relative cerebral blood volume) artışı, yüksek grade tümörü düşük grade'den ayırmada kritik parametredir."
            },
            {
                id: "step_3",
                order: 3,
                title: "Ayırıcı Tanı ve Planlama",
                description: "Ring enhancement + nekroz + yüksek rCBV + peri-lezyone ödem. 55 yaş.",
                imageUrl: "/images/placeholder-brain.png",
                imageCaption: "Ayırıcı Tanı",
                question: "Ring enhancement gösteren lezyonda en önemli ayırıcı tanı nedir?",
                options: [
                    "Multipl Skleroz",
                    "Serebral apse (DWI'da santral difüzyon kısıtlılığı)",
                    "Araknoid kist",
                    "Meninjiyom"
                ],
                correctOptionIndex: 1,
                explanation: "Ring enhancement yapan lezyonlarda 'MAGIC DR' mnemoniği: Metastaz, Apse, Glioblastom, İnfarkt (subakut), Contusion, Demyelinization, Radiation necrosis. Apse DWI'da santral kısıtlılık gösterir (GBM'de göstermez)."
            }
        ]
    }
];
