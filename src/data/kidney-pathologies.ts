import { Pathology } from '@/types';

export const kidneyPathologies: Pathology[] = [
    {
        "id": "renal_cell_carcinoma",
        "name": "Renal Hücreli Karsinom (RCC)",
        "category": "Neoplastik",
        "gallery": [
            // { "url": "/images/kidney/rcc_ct_corticomedullary.png", "caption": "BT Kortikomedüller - Heterojen", "modality": "CT" },
            // { "url": "/images/kidney/rcc_mri_t2.png", "caption": "MRI T2 - Clear Cell Hiperintens", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Solid renal kitle. Değişken ekojenite (hipo, izo, hiperekoik). Kortikal bulging. Renin venine uzanım kontrol edilmeli.",
                "doppler": "İntratümöral vaskülarite. Renal ven trombusu: Arteryalize akım."
            },
            "ct": {
                "non_contrast": "Solid kitle, renal korteksten köken. Kalsifikasyon santral veya periferal olabilir.",
                "contrast": "KORTIKOMEDÜLLER FAZ: Heterojen kontrastlanma (>15-20 HU artış = solid). NEFROGRAFİK FAZ: En iyi tümör-parankim kontrastı. GEÇ FAZ: Wash-out paterni. 'Pseudokapsül': Periferal kontrastlanan halka."
            },
            "mri": {
                "t1": "Genellikle hipointens. Hemorajik alanlar hiperintens. Clear cell tip: T2'de lipid/glikojen nedeniyle sinyal değişkenliği.",
                "t2": "Clear cell: HİPERİNTENS (en sık tip). Papiller ve kromofob: HİPOİNTENS - Önemli ayırıcı.",
                "t1_c": "Heterojen kontrastlanma. Nekrotik ve kistik alanlar kontrastlanmaz.",
                "dwi": "Değişken kısıtlanma. Yüksek grade = daha fazla kısıtlanma.",
                "other_sequences": "Chemical shift: Clear cell RCC'de sinyal kaybı (lipid içerir)."
            }
        },
        "keyPoints": [
            "%85 Clear cell tip. T2'de hiperintens, chemical shift pozitif.",
            "Papiller ve Kromofob: T2'de hipointens - Clear cell'den ayırıcı.",
            "IVC trombusu: Sağ atriyuma kadar uzanabilir - Cerrahi planlama kritik.",
            "'Small renal mass' (<4cm): İzlem vs Ablasyon vs Cerrahi."
        ]
    },
    {
        "id": "angiomyolipoma",
        "name": "Anjiyomiyolipom (AML)",
        "category": "Benign",
        "gallery": [
            // { "url": "/images/kidney/aml_ct_fat.png", "caption": "BT - Makroskopik Yağ (-40 HU)", "modality": "CT" },
            // { "url": "/images/kidney/aml_usg.png", "caption": "USG - Hiperekoik", "modality": "USG" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Tipik: Küçük, homojen, belirgin HİPEREKOİK kitle (yağ içeriği nedeniyle). Akustik gölge minimal.",
                "doppler": "Minimal internal vaskülarite."
            },
            "ct": {
                "non_contrast": "YAĞ DOKUSU TESPİTİ: <-10 HU = Makroskopik yağ = PATOGNOMONIK. Fat-poor AML: Yağ saptanamaz (-10 ile +20 HU arası).",
                "contrast": "Heterojen kontrastlanma. Yağ içermeyen alanlar kontrastlanır."
            },
            "mri": {
                "t1": "Yağ: T1 HİPERİNTENS. India ink artefaktı (chemical shift - yağ-su interface).",
                "t2": "Yağ: Hiperintens. Kas: Hipointens. Vasküler: Flow void.",
                "other_sequences": "Fat-sat sekanslar: Yağ baskılanır → Sinyal kaybı konfirme eder."
            }
        },
        "keyPoints": [
            "Makroskopik yağ (<-10 HU) tespit edilirse AML kesin tanı.",
            "Fat-poor AML: RCC'den ayırt edilemez, cerrahi gerekebilir.",
            "Tüberöz Skleroz: Bilateral, multipl AML'ler.",
            ">4cm AML: Kanama riski artar → Embolizasyon düşünülmeli."
        ]
    },
    {
        "id": "simple_renal_cyst",
        "name": "Basit Renal Kist",
        "category": "Benign",
        "gallery": [
            // { "url": "/images/kidney/cyst_usg_anechoic.png", "caption": "USG - Anekoik, Posterior Güçlenme", "modality": "USG" },
            // { "url": "/images/kidney/cyst_ct.png", "caption": "BT - Su Dansitesi", "modality": "CT" }
        ],
        "findings": {
            "ultrasound": {
                "description": "ANEKOİK sıvı. İnce, pürüzsüz duvar. Posterior akustik güçlenme. İnternal eko veya septasyon YOK.",
                "doppler": "Internal vaskülarite YOK."
            },
            "ct": {
                "non_contrast": "Su dansitesi (0-20 HU). İnce duvar. Homojen içerik.",
                "contrast": "Kontrastlanma YOK (<10 HU değişim). Bosniak I = Basit kist."
            },
            "mri": {
                "t1": "Homojen hipointens (su sinyali).",
                "t2": "Homojen HİPERİNTENS. BOS benzeri parlak sinyal.",
                "dwi": "T2 shine-through. ADC hiperintens (gerçek kısıtlanma yok)."
            }
        },
        "keyPoints": [
            "Bosniak I: Basit kist - İzlem veya tedavi gereksiz.",
            "%50 yaş üstü bireylerde en az bir basit kist bulunur.",
            "Hiperdens kist: >20 HU ama kontrastlanma yok - Bosniak II.",
            "Takip gerekli: Sadece Bosniak IIF ve üstü."
        ]
    },
    {
        "id": "bosniak_classification",
        "name": "Bosniak Sınıflaması (Kompleks Kist)",
        "category": "Benign/Malign",
        "gallery": [
            // { "url": "/images/kidney/bosniak_types.png", "caption": "Bosniak Sınıflaması Şeması", "modality": "CT" },
            // { "url": "/images/kidney/bosniak_3_ct.png", "caption": "Bosniak III - Kalın Duvar/Septum", "modality": "CT" }
        ],
        "findings": {
            "ct": {
                "non_contrast": "Kist dansitesi ve homojenitesi değerlendirilir.",
                "contrast": "BOSNİAK I: Basit kist (<20 HU, kontrastlanma yok). BOSNİAK II: Birkaç ince septum, ince kalsifikasyon, hiperdens kist (<3cm). BOSNİAK IIF: Çok sayıda septum, minimal duvar/septum kalınlaşması, takip gerekli. BOSNİAK III: Kalın irregular duvar/septum, ölçülebilir kontrastlanma. BOSNİAK IV: Solid kontrastlanan komponent."
            },
            "mri": {
                "t1_c": "Septum ve duvar kontrastlanması değerlendirilir. MR daha sensitif.",
                "t2": "Kist içerik kompleksitesi, septasyonlar görülür."
            }
        },
        "keyPoints": [
            "Bosniak I-II: Benign, takip gerekmiyor.",
            "Bosniak IIF: Takip gerekli (%5-10 malignite).",
            "Bosniak III-IV: Cerrahi önerilir (%50-90 malignite).",
            "2019 güncellemesi: MRI bulguları da değerlendirmeye alındı."
        ]
    },
    {
        "id": "acute_pyelonephritis",
        "name": "Akut Piyelonefrit",
        "category": "Enfeksiyon",
        "gallery": [
            // { "url": "/images/kidney/pyelonephritis_ct.png", "caption": "BT - Striated Nefrogram", "modality": "CT" },
            // { "url": "/images/kidney/pyelonephritis_dwi.png", "caption": "MRI DWI - Kısıtlanma", "modality": "MRI" }
        ],
        "findings": {
            "ultrasound": {
                "description": "Genellikle NORMAL görünüm (%70). Böbrek boyutunda artış. Kortikal ekojenite azalması veya artışı.",
                "doppler": "Etkilenen alanda perfüzyon azalması veya artışı."
            },
            "ct": {
                "non_contrast": "Böbrek boyutunda artış. Perinefritik yağ dokusu densitesi artmış.",
                "contrast": "'STRİATED NEFROGRAM': Radyal hipoperfüze bantlar (tübüler obstrüksiyon). Fokal hipoperfüze alan (fokal piyelonefrit). Apse: Halka kontrastlanan sıvı koleksiyonu."
            },
            "mri": {
                "t1": "Kortikal ödem nedeniyle hafif hipointensite.",
                "t2": "Ödemli alanlar hiperintens. Perinefritik sıvı/ödem.",
                "dwi": "Akut inflamasyon alanlarında kısıtlanma. Apse: Belirgin kısıtlanma."
            }
        },
        "keyPoints": [
            "'Striated nefrogram' akut piyelonefrit için karakteristik.",
            "Komplike piyelonefrit: Apse, nekroz, obstrüksiyon.",
            "Amfizematöz piyelonefrit: İntraparankimal gaz (DM, acil).",
            "Klinik + idrar + görüntüleme = Tanı. BT komplikasyon için."
        ]
    },
    {
        "id": "nephrolithiasis",
        "name": "Renal Taş (Nefrolitiyazis)",
        "category": "Obstrüksiyon",
        "gallery": [
            { "url": "/images/kidney/stone_ct.png", "caption": "BT Non-Kontrast - Hiperdens Taş", "modality": "CT" },
            // { "url": "/images/kidney/stone_usg_shadow.png", "caption": "USG - Akustik Gölge", "modality": "USG" }
        ],
        "findings": {
            "ultrasound": {
                "description": "HİPEREKOİK odak + AKUSTIK GÖLGELEME (posterior). 'Twinkle artifact': Doppler'da taş arkasında renkli artefakt.",
                "doppler": "Obstrüksiyon: Artmış renal rezistif indeks (RI >0.7). Tarda-parvus paterni distal stenozda."
            },
            "ct": {
                "non_contrast": "NON-KONTRAST BT ALTIN STANDART. Taş: Hiperdens (ürik asit >300 HU, kalsiyum >600 HU). Soft tissue rim sign: Üreteral taş çevresinde ödem. Hidronefroz ve hidroüreter derecesi.",
                "contrast": "Genellikle gerekli değil. Obstrüktif nefropati değerlendirmesi."
            },
            "mri": {
                "t2": "Taş: HİPOİNTENS boşluk (sinyal yok). Hidronefroz: Hiperintens dilate toplayıcı sistem.",
                "other_sequences": "Ürografi sekansları: Obstrüksiyon seviyesi."
            }
        },
        "keyPoints": [
            "Non-kontrast BT sensitivitesi %95-98.",
            "Taş kompozisyonu: Kalsiyum oksalat > Ürik asit > Struvit > Sistin.",
            "Ürik asit taşlar: Daha düşük HU (<600), medikal tedaviye yanıt.",
            "'Rim sign': Üreteral taş çevresinde yumuşak doku - Flebit'ten ayırıcı."
        ]
    }
];
