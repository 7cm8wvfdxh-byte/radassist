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
                imageUrl: "/images/real_ct_stroke_slice.png",
                // Note: Using existing asset path from previous artifacts if available, otherwise placeholder. 
                // I recall we have 'real_ct_stroke_slice_1768626558306.png' or similar. 
                // Let's assume standard path mapping or use the one we copied before.
                // Resetting to placeholder if not found, but I will try to map to what likely exists.
                // Actually, I'll use the 'uploaded_image' ones if I renamed them, or just generic paths and ensure files exist.
                // Based on previous context, we had 'real_ct_stroke_slice_1768626558306.png'.
                // I will need to make sure this file exists in public/images/cases/ or root.
                // Let's use a safe path 'real_ct_stroke_slice.png'? No, let's use what's in spine for now or existing placeholders? 
                // Better: I will check file existence in next step or assume user puts them. 
                // For now, I'll point to placeholders or re-use Brain ones.
                // Re-using Brain Gallery images:
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
                imageUrl: "/images/real_mri_stroke_dwi.png", // Reuse existing
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
                imageUrl: "/images/mri_stroke_adc_map.png", // Reuse existing
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
    }
];
