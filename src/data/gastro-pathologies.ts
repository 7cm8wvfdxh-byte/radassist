import { Pathology } from "@/types";

export const gastroPathologies: Pathology[] = [
    {
        id: "acute-appendicitis",
        name: "Akut Apandisit",
        nameEn: "Acute Appendicitis",
        category: "Bowel (Acil)",
        categoryEn: "Bowel (Emergency)",
        keyPoints: ["Sağ alt kadran ağrısının en sık nedenidir.", "BT tanıda yüksek duyarlılığa sahiptir.", "Çap >6mm ve duvar kalınlaşması kritiktir."],
        keyPointsEn: ["Most common cause of RLQ pain.", "CT has high sensitivity for diagnosis.", "Diameter >6mm and wall thickening are critical."],
        gallery: [
            { "url": "/images/gastro/appendicitis_ct.png", "caption": "BT - Akut Apandisit (>6mm)", "modality": "CT" }
        ],
        findings: {
            usg: {
                description: "Kör sonlanan, aperistaltik, bası ile sönmeyen tübüler yapı. Çap > 6 mm. Etraf yağ dokuda ekojenite artışı (inflamasyon). Appendikolit (fekalit) görülebilir."
            },
            ct: {
                contrast: "Genişlemiş (>6 mm) appendiks. Duvar kontrastlanması ve kalınlaşması. Periappendiküler yağ planlarında kirlenme (fat stranding). Çekum tabanında kalınlaşma (Arrowhead sign)."
            }
        },
        findingsEn: {
            usg: {
                description: "Blind-ending, aperistaltic, non-compressible tubular structure. Diameter > 6 mm. Increased echogenicity in surrounding fat (inflammation). Appendicolith (fecalith) my be seen."
            },
            ct: {
                contrast: "Dilated (>6 mm) appendix. Wall enhancement and thickening. Periappendiceal fat stranding. Thickening at the cecal base (Arrowhead sign)."
            }
        },
        mechanism: "Appendiks lümeninin fekalit, lenfoid hiperplazi veya parazit ile obstrüksiyonu → mukus birikimi → lümen içi basınç artışı → venöz drenaj bozulması → iskemi → bakteriyel aşırı büyüme (E. coli, Bacteroides) → transmural inflamasyon → perforasyon riski. Çap >6mm obstrüksiyona işaret eder; periappendiküler yağ kirlenmesi (fat stranding) inflamasyonun yayıldığını gösterir.",
        etiology: "Fekalit obstrüksiyonu (en sık), lenfoid hiperplazi (çocuklarda), parazitler, appendiküler tümör (karsinoid — nadir). Genç erişkinlerde pik insidans (10-30 yaş).",
        differentialDiagnosis: ["Mezenterik Lenfadenit (Viral — çocuklarda)", "Over Kist Rüptürü/Torsiyonu (Kadınlarda)", "Crohn Hastalığı (Terminal ileit)", "Sağ Üreter Taşı (Kolik ağrı)"],
        goldStandard: "BT (Duyarlılık %95+). Çocuklarda ve hamilelerde: USG ilk tercih (Graded compression tekniği).",
        clinicalPearl: "Arrowhead sign: Çekum tabanında kontrastlanan fokal kalınlaşma → obstrükte appendiks orifisi. Appendikolit varlığı perforasyon riskini artırır (%50+).",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "ACR Appropriateness Criteria: Right Lower Quadrant Pain. American College of Radiology; 2018.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Acute appendicitis"
        ]
    },
    {
        id: "acute-diverticulitis",
        name: "Akut Divertikülit",
        nameEn: "Acute Diverticulitis",
        category: "Bowel (Acil)",
        categoryEn: "Bowel (Emergency)",
        keyPoints: ["Sol alt kadran ağrısının sık sebebidir (Sigmoid kolon).", "Komplike divertikülit (apse, perforasyon) Hinchey sınıflaması ile evrelenir.", "Kolonoskopi akut dönemde kontrendikedir."],
        keyPointsEn: ["Common cause of LLQ pain (Sigmoid colon).", "Complicated diverticulitis (abscess, perforation) is staged by Hinchey classification.", "Colonoscopy is contraindicated in the acute phase."],
        findings: {
            ct: {
                contrast: "İnflame bir divertikül etrafında yağ kirlenmesi (Fat stranding). Kolon duvarında segmental kalınlaşma. Perikolik apse veya serbest hava (Perforasyon?)."
            },
            usg: {
                description: "Kolon duvarından dışarı uzanan hipoekoik kese (divertikül). Etrafında hiperekoik yağ halosu (inflamasyon)."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Fat stranding around an inflamed diverticulum. Segmental thickening of colon wall. Pericolic abscess or free air (Perforation?)."
            },
            usg: {
                description: "Hypoechoic outpouching from colon wall (diverticulum). Surrounding hyperechoic fat halo (inflammation)."
            }
        },
        mechanism: "Düşük lifli diyet → uzun geçiş süresi → artmış intralüminal basınç → kolon duvarının zayıf noktalarında (vasküler geçiş noktaları) mukozanın herniyasyonu → divertikül oluşumu. Fekalit ile tıkanan divertikül → mikroperfürasyon → perikolik inflamasyon. Komplikasyon: Perforasyon (Hinchey 1-4), apse, fistül, obstrüksiyon.",
        etiology: "Düşük lifli diyet, yaşlanma (>60 yaş %50+), obezite, sedanter yaşam. Sigmoid kolon en sık tutulan bölge (%95 Batı toplumları). Sağ kolon: Asya toplumlarında daha sık.",
        differentialDiagnosis: ["Kolon Kanseri (Kronik divertikülit kanser riskini artırır!)", "Crohn Hastalığı (Segmental tutulum — benzer görünüm)", "Epiploik Appendajit (Fokal yağ nekrozu)", "Over Patolojisi (Sol taraf — kadınlarda)"],
        goldStandard: "BT (IV kontrast — Duyarlılık %95+). Kolonoskopi akut dönemde kontrendike (perforasyon riski), 6-8 hafta sonra yapılmalı.",
        clinicalPearl: "Hinchey sınıflaması: I = Perikolik apse, II = Pelvik apse, III = Purülan peritonit, IV = Fekal peritonit. Hinchey III-IV = Acil cerrahi. 'Sol tarafın apandisiti' olarak bilinir.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Hinchey EJ, Schaal PG, Richards GK. Treatment of perforated diverticular disease of the colon. Adv Surg. 1978;12:85-109.",
            "ACR Appropriateness Criteria: Left Lower Quadrant Pain. American College of Radiology; 2018.",
            "Radiopaedia.org - Acute diverticulitis"
        ]
    },
    {
        id: "acute-pancreatitis",
        name: "Akut Pankreatit (Ödematöz/Nekrotizan)",
        nameEn: "Acute Pancreatitis (Edematous/Necrotizing)",
        category: "Pancreas",
        categoryEn: "Pancreas",
        keyPoints: ["Tanı için amilaz/lipaz artışı yeterlidir, BT komplikasyonları (nekroz) görmek için çekilir.", "Erken BT (ilk 72 saat) nekrozu hafife alabilir.", "Balthazar skoru ciddiyeti belirler."],
        keyPointsEn: ["Amylase/lipase elevation sufficient for diagnosis, CT is for complications (necrosis).", "Early CT (first 72h) may underestimate necrosis.", "Balthazar score determines severity."],
        gallery: [
            { "url": "/images/gastro/pancreatitis_ct.png", "caption": "BT - Akut Pankreatit (Ödem)", "modality": "CT" }
        ],
        findings: {
            ct: {
                contrast: "Ödematöz: Pankreasta diffüz/fokal büyüme, sınırlarında silinme, peripankreatik sıvı. Nekrotizan: Pankreas parankiminde kontrast tutmayan (hipodens) alanlar."
            },
            usg: {
                description: "Pankreas büyümüş ve hipoekoik (ödem). Safra kesesi taşı (etyoloji?) araştırılmalı."
            },
            mri: {
                t2: "Sıvı koleksiyonlarını ve ana pankreas kanalını (MRCP) daha iyi gösterir."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Edematous: Diffuse/focal enlargement, indistinct margins, peripancreatic fluid. Necrotizing: Non-enhancing (hypodense) areas in pancreatic parenchyma."
            },
            usg: {
                description: "Pancreas enlarged and hypoechoic (edema). Look for gallstones (etiology?)."
            },
            mri: {
                t2: "Better visualization of fluid collections and main pancreatic duct (MRCP)."
            }
        },
        mechanism: "Safra taşı veya alkol → pankreatik asiner hücrelerde tripsinojeni erken aktive eden mekanizmalar → tripsin içeride birikimine bağlı oto-sindirim. Hafif: Ödem ve peripankreatik sıvı (ödematöz pankreatit). Ağır: Pankreas parankiminin transmural nekrozu → damar hasarı → sepsis. BT'de kontrast almayan alanlar nekrozu yansıtır; erken çekilirse (72h) olduğundan hafif görünebilir.",
        etiology: "Safra taşı (%40), alkol (%30), hipertrigliseridemi, post-ERCP, ilaçlar (azatioprin, valproik asit), idiyopatik (%15-20).",
        differentialDiagnosis: ["Perfore Peptik Ülser (Serbest hava)", "SMA Trombozu (Mezenter iskemisi)", "Pankreas Karsinomu (Fokal kitle — PK'yi taklit edebilir)", "Otoimmün Pankreatit (IgG4 — 'sosis pankreas')"],
        goldStandard: "BT (İV kontrast, pankreatik faz — 72 saat sonra optimal). Balthazar/CTSI skoru ciddiyeti belirler. MRI/MRCP safra taşı etiyolojisinde üstün.",
        clinicalPearl: "Erken BT (<72h) nekrozu hafife alır! BT 72-96. saatte çekilmeli. Nekroz >%30 = Ciddi pankreatit. Walled-off nekroz (WON): 4 hafta sonra enkapsüle olur → perkütan/endoskopik drenaj zamanlaması.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Balthazar EJ. Acute pancreatitis: assessment of severity with clinical and CT evaluation. Radiology. 2002;223(3):603-613.",
            "ACR Appropriateness Criteria: Acute Pancreatitis. American College of Radiology; 2019.",
            "Radiopaedia.org - Acute pancreatitis"
        ]
    },
    {
        id: "pancreatic-adenocarcinoma",
        name: "Pankreas Adenokarsinomu",
        nameEn: "Pancreatic Adenocarcinoma",
        category: "Pancreas",
        categoryEn: "Pancreas",
        keyPoints: ["Genellikle pankreas başında görülür ve ağrısız sarılık yapar.", "'Double Duct Sign' (Wirsung ve Koledok genişlemesi) tipiktir.", "Hipovasküler bir tümördür (Kistin aksine)."],
        keyPointsEn: ["Usually in pancreatic head, causes painless jaundice.", "'Double Duct Sign' (Dilation of Wirsung and CBD) is typical.", "Hypovascular tumor (unlike cysts)."],
        findings: {
            ct: {
                contrast: "Pankreatik fazda (geç arteriyel) çevre parankime göre HİPODENS (karanlık) kitle. Arkasındaki duktuslarda dilatasyon (atrofi). Vasküler invazyon (SMA/SMV) açısından değerlendirilmeli (Unresectable?)."
            },
            mri: {
                t1_c: "Kontrastlı serilerde hipointens kitle.",
                other_sequences: "MRCP: 'Double Duct Sign' (Çift kanal bulgusu). Ani sonlanma (Abrupt cutoff)."
            }
        },
        findingsEn: {
            ct: {
                contrast: "HYPODENSE (dark) mass relative to parenchyma in pancreatic (late arterial) phase. Upstream ductal dilatation (atrophy). Evaluate for vascular invasion (SMA/SMV - Unresectable?)."
            },
            mri: {
                t1_c: "Hypointense mass on contrast sequences.",
                other_sequences: "MRCP: 'Double Duct Sign'. Abrupt cutoff."
            }
        },
        mechanism: "KRAS mutasyonu (%90+) → ERK/MAPK sinyal aktivasyonu → pankreas duktal epitelinde kontrolsüz proliferasyon. Desmoplastik stroma oluşumu → tümör hipovaskülerdir (Yoğun fibrotik doku kontrast geçişini engeller → BT'de hipodens). Pankreas başı lokalizasyonu → erken safra kanalı ve Wirsung kanalı kompresyonu → painless obstrüktif sarılık + double duct sign.",
        etiology: "Sigara (%25 risk artışı), kronik pankreatit, diyabet (yeni başlangıçlı), aile öyküsü, BRCA2 mutasyonu, Lynch sendromu. Ortalama tanı yaşı 70.",
        differentialDiagnosis: ["Kronik Pankreatit (Kalsifikasyonlar + atrofi)", "Otoimmün Pankreatit (IgG4 — steroid yanıtı)", "Nöroendokrin Tümör (Hipervasküler — arteriyel fazda kontrast tutar)", "Metastaz (Böbrek, melanom)"],
        goldStandard: "Pankreas protokolü BT (Çift fazlı — arteriyel + portal venöz). MRCP double duct sign'ı net gösterir. EUS + FNA kesin tanı.",
        clinicalPearl: "Hipovasküler kitle = Adenokarsinom, Hipervasküler kitle = NET/Adacık hücre tümörü. SMA/SMV tutulumu >180° = Unresectable (Borderline resectable: 90-180°). Courvoisier yasası: Ağrısız sarılık + palpabl safra kesesi = Pankreas başı Ca.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "NCCN Clinical Practice Guidelines in Oncology: Pancreatic Adenocarcinoma. National Comprehensive Cancer Network; 2023.",
            "ACR Appropriateness Criteria: Jaundice. American College of Radiology; 2019.",
            "Radiopaedia.org - Pancreatic adenocarcinoma"
        ]
    },
    {
        id: "crohn-disease",
        name: "Crohn Hastalığı (Aktif)",
        nameEn: "Crohn's Disease (Active)",
        category: "Bowel (Inflammatory)",
        categoryEn: "Bowel (Inflammatory)",
        keyPoints: ["Transmural inflamasyon yapar (Ülseratif kolit sadece mukoza).", "Terminal ileum en sık tutulan yerdir.", "Comb sign (Tarak belirtisi) aktif inflamasyonu gösterir."],
        keyPointsEn: ["Transmural inflammation (UC is mucosa only).", "Terminal ileum is most commonly involved.", "Comb sign indicates active inflammation."],
        findings: {
            ct: {
                contrast: "Bağırsak duvarında belirgin kalınlaşma ve kontrastlanma (Mural stratification). Comb sign: Mezenterik vaskülaritede belirginleşme. Creeping fat: Mezenter yağ dokusu proliferasyonu."
            },
            mri: {
                other_sequences: "MR Enterografi: Duvar kalınlaşması, T2 hiperintensite (ödem), Ülserler, Fistül traktları ve Apseler."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Marked bowel wall thickening and enhancement (Mural stratification). Comb sign: Prominent mesenteric vascularity. Creeping fat: Mesenteric fat proliferation."
            },
            mri: {
                other_sequences: "MR Enterography: Wall thickening, T2 hyperintensity (edema), Ulcers, Fistula tracts and Abscesses."
            }
        },
        mechanism: "Anormal Th1/Th17 immün yanıt + bağırsak mikrobiyom disregülasyonu → mukozal bariyer bozulması → transmural granülomatöz inflamasyon (tüm katmanlar tutulur). Skip lezyonlar (atlayıcı tutulum) Crohn'a özgüdür. Kronik inflamasyon: Fibroz ve darlık, fistül/apse oluşumu. Comb sign: Aktif inflamasyonun besleyici mezenterik damarların artmasına yol açması.",
        etiology: "Multifaktöriyel: Genetik (NOD2/CARD15), çevresel (sigara riski artırır!), mikrobiyom disregülasyonu, otoimmün. Genç erişkinlerde pik (15-30 yaş). Kuzey Avrupa/Yahudi kökenli daha sık.",
        differentialDiagnosis: ["Ülseratif Kolit (Sadece mukozal, rektumdan başlar, sürekli tutulum)", "Bağırsak Tüberkülozu (Çekum — kazeöz granülom)", "Behçet Hastalığı (İleoçekal ülserler)", "İskemik Kolit (Yaşlı, watershed bölgeler)"],
        goldStandard: "MR Enterografi (MRE — Duyarlılık %85-90). Radyasyon yok, genç hastalarda ideal. BT Enterografi akut değerlendirmede alternatif.",
        clinicalPearl: "Creeping fat: Crohn'a özgü — mezenter yağı bağırsağı sarar. Comb sign: Aktif inflamasyon → vasa recta belirginleşmesi (BT/MRI'da 'tarak' görünümü). String sign: İleri fibrotik darlık → baryumda ince lümen.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "ACR Appropriateness Criteria: Crohn Disease. American College of Radiology; 2020.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Crohn disease"
        ]
    },
    {
        id: "bowel-obstruction",
        name: "İleus (Mekanik Bağırsak Tıkanıklığı)",
        nameEn: "Ileus (Small Bowel Obstruction)",
        category: "Bowel (Acil)",
        categoryEn: "Bowel (Emergency)",
        keyPoints: ["Hava-sıvı seviyeleri direkt grafide tipiktir.", "BT'de 'Geçiş Noktası' (Transition Zone) aranır (Dilate ve kollabe segment arası).", "En sık neden yapışıklıklardır (brid)."],
        keyPointsEn: ["Air-fluid levels are typical on X-ray.", "Look for 'Transition Zone' on CT (between dilated and collapsed segments).", "Most common cause is adhesions."],
        findings: {
            xray: {
                description: "Hava-sıvı seviyeleri (ayakta Dkb). İnce bağırsak kıvrımlarının genişlemesi (>3cm, 'merdiven basamağı'). Kolonda gaz yokluğu (Tam tıkanıklık)."
            },
            ct: {
                contrast: "Proksimal segmentlerde dilatasyon (>2.5-3cm), distalde kollaps (Transition point). Small Bowel Feces Sign: Tıkanıklığın hemen proksimalinde feçes benzeri görünüm."
            }
        },
        findingsEn: {
            xray: {
                description: "Air-fluid levels (upright). Dilated small bowel loops (>3cm, 'stepladder'). Absence of gas in colon (Complete obstruction)."
            },
            ct: {
                contrast: "Dilatation in proximal segments (>2.5-3cm), collapse distally (Transition point). Small Bowel Feces Sign: Feces-like appearance immediately proximal to obstruction."
            }
        },
        mechanism: "Mekanik engel (yapışıklık, herni, tümör, volvülüs) → bağırsak lümeninin tıkanması → proksimalde gaz ve sıvı birikimi → distansiyon → mukozal iskemi → bakteri translokasyonu. Strangülasyon (kapalı loop): Venöz drenaj + arteriyel beslenme bozulması → hızlı nekroz ve perforasyon (acil!). BT'de geçiş noktası (transition zone) tıkanan yeri, small bowel feces sign ise kronik parsiyel obstrüksiyonu gösterir.",
        etiology: "Yapışıklıklar/brid (%60-75 — önceki cerrahi), inguinal herni (%15), tümör (%10), Crohn hastalığı, volvülüs. Kolon obstrüksiyonunda en sık neden: Kolorektal kanser.",
        differentialDiagnosis: ["Paralitik İleus (Fonksiyonel — postoperatif, elektrolit bozukluğu)", "Oğmentöz Pseudo-Obstrüksiyon (Ogilvie)", "Mezenter İskemisi (Vasküler acil)", "İnternal Herni (Bariatrik cerrahi sonrası)"],
        goldStandard: "BT (İV kontrast — Duyarlılık %95+). Transition point (geçiş noktası) ve strangülasyon bulgularını (duvar kontrastlanma kaybı, mezenter ödem) gösterir.",
        clinicalPearl: "Small bowel feces sign: Tıkanıklığın hemen proksimalinde bağırsak içeriğinin feçes benzeri görünmesi → geçiş noktasının yakınında olduğunu işaret eder. Closed loop: Bağırsak segmentinin her iki ucundan tıkanması → hızlı strangülasyon → acil cerrahi!",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "ACR Appropriateness Criteria: Suspected Small Bowel Obstruction. American College of Radiology; 2019.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Small bowel obstruction"
        ]
    },
    {
        id: "colorectal-carcinoma",
        name: "Kolorektal Karsinom",
        nameEn: "Colorectal Carcinoma",
        category: "Bowel (Tumor)",
        categoryEn: "Bowel (Tumor)",
        keyPoints: ["Sigmoid ve rektum en sık lokalizasyondur.", "'Apple core' (elma kurdu) görünümü baryumlu grafide tipiktir.", "MRI rektal kanserde lokal evreleme standardıdır."],
        keyPointsEn: ["Sigmoid and rectum are the most common locations.", "'Apple core' appearance is typical on barium enema.", "MRI is the standard for local staging in rectal cancer."],
        findings: {
            ct: {
                contrast: "Kolon duvarında asimetrik kalınlaşma ve lümen daralması (Apple core). Mezenterik lenf nodları. Karaciğer ve peritoneal metastaz araştırması."
            },
            mri: {
                other_sequences: "Rektal MRI: Tümör tabakalaşması (T1-T3 evre), mezorektum fasya invazyonu (MRF+/-), lenf nodu morfoljisi. Difüzyon (DWI) tümör sınırlarını netleştirir."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Asymmetric colon wall thickening and luminal narrowing (Apple core). Mesenteric lymph nodes. Evaluation for hepatic and peritoneal metastases."
            },
            mri: {
                other_sequences: "Rectal MRI: Tumor layering (T1-T3 stage), mesorectal fascia invasion (MRF+/-), lymph node morphology. Diffusion (DWI) clarifies tumor margins."
            }
        },
        mechanism: "APC, KRAS, TP53 mutasyonlarının birikimi → kolorektal karsinom gelişim basamakları (Adenoma-karsinom sekansı). Hiperplastik polip → adenom → yüksek grade displazi → invaziv karsinom (10-15 yıl). MSI (mikrosatellit instabilite): Lynch sendromu → farklı mutasyon yolu. Tümör desmoplastik büyüme ile lümeni daralttıkça apple-core görünümü oluşur.",
        etiology: "Sporadik (%70-80): Yaş >50, düşük lifli diyet, kırmızı et, obezite, sigara. Herediter: Lynch sendromu (MSI — %5), FAP (APC mutasyonu — %1). İnflamatuar: Uzun süreli ÜK/Crohn → displazi → kanser.",
        differentialDiagnosis: ["Divertikülit (Segmental kalınlaşma — akut inflamasyon)", "Lenfoma (Diffüz kalınlaşma, anevrizmik dilatasyon)", "Endometriozis (Rektosigmoid — siklik semptomlar)", "Kolon Metastazı (Nadir — melanom, meme)"],
        goldStandard: "Kolonoskopi + Biyopsi (Kesin tanı). BT evreleme (T, N, M). Rektal kanser: MRI lokal evreleme standardı (mezorektal fasya invazyonu).",
        clinicalPearl: "Apple core sign: Baryumda veya BT'de lümenin konsantrik daralması → CRC için klasik. Rektal MRI'da CRM (Circumferential Resection Margin) >1mm = Negatif → cerrahi prognoz iyi. 50 yaş altı CRC artıyor → 'erken başlangıçlı CRC' farkındalığı.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "NCCN Clinical Practice Guidelines in Oncology: Rectal Cancer. National Comprehensive Cancer Network; 2023.",
            "ACR Appropriateness Criteria: Colorectal Cancer Screening. American College of Radiology; 2018.",
            "Radiopaedia.org - Colorectal carcinoma"
        ]
    },
    {
        id: "mesenteric-ischemia",
        name: "Akut Mezenter İskemisi",
        nameEn: "Acute Mesenteric Ischemia",
        category: "Bowel (Acil)",
        categoryEn: "Bowel (Emergency)",
        keyPoints: ["'Ağrı ile orantısız muayene bulgusu' klasik klinik triyadın parçasıdır.", "SMA embolisi en sık nedendir (%50).", "Pnömatozis intestinalis ve portal venöz gaz kötü prognoz işaretidir."],
        keyPointsEn: ["'Pain out of proportion to examination' is part of the classic triad.", "SMA embolism is the most common cause (50%).", "Pneumatosis intestinalis and portal venous gas indicate poor prognosis."],
        findings: {
            ct: {
                contrast: "BT Anjiyografi (CTA): SMA/SMV içinde dolum defekti (trombüs/emboli). Bağırsak duvarında incelme veya kontrast tutmaması (nekroz). Pnömatozis intestinalis (Duvar içinde gaz kabarcıkları). Portal venöz sistem içinde gaz.",
                non_contrast: "Mezenterik damarlarda hiperdens trombüs görülebilir."
            }
        },
        findingsEn: {
            ct: {
                contrast: "CT Angiography (CTA): Filling defect in SMA/SMV (thrombus/embolus). Bowel wall thinning or lack of enhancement (necrosis). Pneumatosis intestinalis (gas bubbles within wall). Gas within portal venous system.",
                non_contrast: "Hyperdense thrombus in mesenteric vessels may be visible."
            }
        },
        mechanism: "SMA embolisi (%50, kardiyak kaynaklı) veya trombüs → mezenterik arteriyel akım kaybı → bağırsak iskemisi → mukoza nekrozu → transmural hasar → pnömatozis intestinalis (duvar içi gaz). Venöz tromboz (SMV): Venöz konjesyon → arteriyel yetmezlik. Geç aşamada: Bağırsak perforasyonu → peritonit. Portal venöz gaz = Kritik iskemi/nekroz (Çok kötü prognoz işareti).",
        etiology: "SMA embolisi (%50 — AF, valvüler hastalık), SMA trombozu (%25 — ateroskleroz), SMV trombozu (%10 — hiperkoagülabilite), NOMI (%15 — düşük kardiyak output, vazopresör).",
        differentialDiagnosis: ["Akut Pankreatit (Epigastrik ağrı, amilaz artışı)", "Perfore Ülser (Serbest hava)", "İnflamatuar Bağırsak Hastalığı (Kronik — duvar kalınlaşması)", "Aort Diseksiyonu (SMA köken tıkanıklığı)"],
        goldStandard: "BT Anjiyografi (CTA — Duyarlılık %95+). Arteriyel + portal venöz faz: SMA/SMV dolum defekti + bağırsak duvar değişiklikleri.",
        clinicalPearl: "'Pain out of proportion': Şiddetli karın ağrısı + normal fizik muayene = Mezenter iskemisi düşün! Pnömatozis intestinalis + Portal venöz gaz = Geç evre bulgusu → mortalite >%70. Laktat yüksekliği geç ve non-spesifik.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "ACR Appropriateness Criteria: Acute Onset of Abdominal Pain and Suspicion of Mesenteric Ischemia. American College of Radiology; 2018.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Acute mesenteric ischemia"
        ]
    },
    {
        id: "intussusception",
        name: "İnvajinasyon (İntussusception)",
        nameEn: "Intussusception",
        category: "Bowel (Acil)",
        categoryEn: "Bowel (Emergency)",
        keyPoints: ["Çocuklarda en sık karın cerrahisi acillerinden biridir; ileokolik tip sık.", "Erişkinde altta yatan sebep (kitle) araştırılmalıdır.", "USG'de 'Target Sign' (hedef işareti) tanı koydurucudur."],
        keyPointsEn: ["One of the most common abdominal surgical emergencies in children; ileocolic type is frequent.", "In adults, an underlying cause (mass) should be investigated.", "'Target Sign' on USG is diagnostic."],
        findings: {
            usg: {
                description: "Transvers kesitte: Target sign (Hedef İşareti) — iç içe geçmiş halka görünümü. Longitudinal kesitte: Pseudokidney Sign (Böbrek benzeri görünüm). Renkli Doppler ile vaskülarite değerlendirmesi."
            },
            ct: {
                contrast: "Bağırsak içinde bağırsak görünümü (Bowel-within-bowel). İnvajine mezokolon yağ dokusu ve damarları (Leading point). Primer kitle lezyonu araştırması."
            }
        },
        findingsEn: {
            usg: {
                description: "Transverse view: Target Sign — concentric ring appearance. Longitudinal view: Pseudokidney Sign. Vascularity assessment with Color Doppler."
            },
            ct: {
                contrast: "Bowel-within-bowel appearance. Invaginated mesenteric fat and vessels (Leading point). Bowel investigation for primary mass lesion."
            }
        },
        mechanism: "Öncü lezyon (polip, Meckel divertikülü, lenfoma) veya idiyopatik peristaltik anomali → bir bağırsak segmentinin bir sonrakinin içine teleskop gibi girişi → venöz staz → mukoza ödemi → arteryel yetmezlik → nekroz. Çocuklarda (%90 idiyopatik): Lenfoid hipertrofi (viral enfeksiyon sonrası) öncü lezyon görevi görür. Target sign: İç içe geçmiş bağırsak duvarlarının aksiyel kesitteki halka görüntüsüdür.",
        etiology: "Çocuklarda: İdiyopatik (%90 — lenfoid hiperplazi, viral), Meckel divertikülü, polip. Erişkinlerde: Öncü lezyon (%90 — polip, lenfoma, lipom, metastaz). İleokolik tip en sık.",
        differentialDiagnosis: ["Appendisit (Sağ alt kadran ağrısı — çocuklarda ayırıcı)", "Midgut Volvülüs (Yenidoğan — malrotasyon)", "Henoch-Schönlein Purpurası (İntramural hematom)", "Kolon Kanseri (Erişkinde öncü lezyon)"],
        goldStandard: "USG (Çocuklarda ilk tercih — Duyarlılık %98+). Target sign (transvers) + Pseudokidney sign (longitudinal). Erişkinde: BT (öncü lezyon araştırması).",
        clinicalPearl: "Çocuklarda klasik triad: Kolik karın ağrısı + Kusma + 'Çilek jölesi' dışkı (mukus + kan). Pnömatik veya hidrostatik redüksiyon: Çocuklarda ilk tedavi seçeneği. 3-3-3 kuralı: >3 yaş, >3 gün semptom, >3cm = Cerrahi daha olası.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Abdominal Pain in Children. American College of Radiology; 2020.",
            "Radiopaedia.org - Intussusception"
        ]
    },
    {
        id: "gist",
        name: "GİST (Gastrointestinal Stromal Tümör)",
        nameEn: "GIST (Gastrointestinal Stromal Tumor)",
        category: "Bowel (Tumor)",
        categoryEn: "Bowel (Tumor)",
        keyPoints: ["En sık mide ve ince barsakta görülür.", "Ekzofitik büyüme paternine sahiptir (Lümene değil, dışarıya doğru büyür).", "c-KIT (CD117) pozitifliği tanı koydurucudur; imatinib ile tedavi edilir."],
        keyPointsEn: ["Most common in stomach and small intestine.", "Exophytic growth pattern (grows outward, not into lumen).", "c-KIT (CD117) positivity is diagnostic; treated with imatinib."],
        findings: {
            ct: {
                contrast: "Ekzofitik, iyi sınırlı, heterojen kontrastlanan kitle (Nekroz/Kistik değişiklik içerebilir). Küçük lezyonlar homojen. İnce barsakta ülserasyon görülebilir."
            },
            mri: {
                t2: "Heterojen sinyal intensitesi (Nekroz alanları T2 hiperintens). Kapsül genellikle sağlam."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Exophytic, well-defined, heterogeneously enhancing mass (may contain necrosis/cystic change). Small lesions are homogeneous. Ulceration may be seen in small intestine."
            },
            mri: {
                t2: "Heterogeneous signal intensity (necrotic areas are T2 hyperintense). Capsule usually intact."
            }
        },
        mechanism: "KIT (CD117) veya PDGFRA onkogen aktivasyon mutasyonu → Cajal hücrelerinden köken alan interstisyel pacemaker hücreleri kontrolsüz prolifere olur → GİST oluşumu. c-KIT mutasyonu (%75): İmatinib tedavisine yanıt verir. Ekzofitik büyüme: Kas tabakasından kaynaklanan tümör dışa doğru büyür, lümene geç uzanır (bu nedenle obstrüksiyon geç olur). Büyüdükçe merkezi nekroz/kavitasyon gelişir.",
        etiology: "KIT (CD117) mutasyonu (%75-80), PDGFRA mutasyonu (%10-15), SDH defisiensi (pediatrik GIST). Sporadik (en sık). Carney triadı, NF1 sendromu ilişkili olabilir.",
        differentialDiagnosis: ["Leiomyom (Benign — özofagus ve rektumda daha sık)", "Schwannom (GIS yerleşimli — nadir)", "Glomüs Tümörü (Mide — nadir)", "Mezenkimal Metastaz (Melanom — GIS metastazı sık)"],
        goldStandard: "BT (İV kontrast — arteriyel + portal faz). PET-CT tedavi yanıtı izleminde. EUS + FNA/Biyopsi: c-KIT (CD117) pozitifliği kesin tanı.",
        clinicalPearl: "İmatinib (Gleevec) tedaviye yanıt: BT'de boyut küçülmesi + Hounsfield değerinde azalma (Choi kriterleri — RECIST'ten farklı!). Boyut değişmese bile tümör nekrozu = Yanıt. Risk sınıflaması: Boyut >5cm + Mitoz >5/50HPF = Yüksek risk.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "NCCN Clinical Practice Guidelines in Oncology: Gastrointestinal Stromal Tumors (GIST). National Comprehensive Cancer Network; 2023.",
            "Radiopaedia.org - Gastrointestinal stromal tumor"
        ]
    },
    {
        id: "liver-abscess",
        name: "Pyojenik Karaciğer Apsesi",
        nameEn: "Pyogenic Liver Abscess",
        category: "Liver (Karaciğer)",
        categoryEn: "Liver",
        keyPoints: ["Bilier patoloji (kolanjit) en sık etiyolojidir.", "Cluster sign: Birleşmiş multipl apse odaklarının görünümü.", "Perkütan drenaj hem tanı hem tedavi sağlar."],
        keyPointsEn: ["Biliary pathology (cholangitis) is the most common etiology.", "Cluster sign: Appearance of merged multiple abscess foci.", "Percutaneous drainage provides both diagnosis and treatment."],
        findings: {
            ct: {
                contrast: "Karaciğerde, duvarı kontrast tutan (rim enhancement), içi hipodens sıvı koleksiyonu. Cluster Sign: Birleşme eğiliminde multipl odaklar. Çift hedef (Double Target) işareti."
            },
            usg: {
                description: "Hipoekoik veya karışık ekojenitede kistik yapı, düzensiz iç yüzey. Posterior akustik güçlenme. İçeride hava kabarcıkları (gaz üreten bakteri — hareketli parlak odaklar)."
            },
            mri: {
                t2: "T2 hiperintens sıvı içeriği. Kalın, kontrast tutan duvar.",
                dwi: "Pü içeriği nedeniyle belirgin difüzyon kısıtlılığı."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Hypodense fluid collection with rim-enhancing wall in liver. Cluster Sign: Multiple foci with tendency to merge. Double Target Sign."
            },
            usg: {
                description: "Hypoechoic or mixed echogenicity cystic structure, irregular inner surface. Posterior acoustic enhancement. Air bubbles inside (gas-forming bacteria — mobile bright foci)."
            },
            mri: {
                t2: "T2 hyperintense fluid content. Thick, contrast-enhancing wall.",
                dwi: "Marked diffusion restriction due to pus content."
            }
        },
        mechanism: "Bilier sistem enfeksiyonu (kolanjit → portal bakteremi) veya hematojen yayılım → karaciğerde fokal bakteriyel enfeksiyon → merkezi likefaksiyon nekrozu → pü birikimi → apse kavitesi. Granülasyon dokusu çeperinin BT'de iç halka kontrastlanması, çevre ödem dış halkayı oluşturur (double target sign). DWI parlak: Pü yüksek viskoziteli → difüzyon kısıtlı.",
        etiology: "Bilier patoloji (kolanjit) en sık (%40-60). Portal ven (appendisit, divertikülit → pileflebit). Hematojen (endokardit, sepsis). Direkt yayılım (subfrenik apse). Kriptojenik (%15-20).",
        differentialDiagnosis: ["Amibik Apse (Tek, büyük, sağ lob — Entamoeba histolytica)", "Kistik Metastaz (Nekrotik — over, kolon Ca)", "Hidatik Kist (Kalsifik duvar, kız veziküller)", "Hepatoselüler Karsinom (Nekrotik — AFP artışı)"],
        goldStandard: "BT (İV kontrast — rim enhancement + cluster sign). USG rehberli perkütan aspirasyon/drenaj hem tanı hem tedavi. DWI apse tespitinde çok duyarlı.",
        clinicalPearl: "Cluster sign: Küçük apselerin birleşme eğilimi → tek büyük kavite oluşumu. Double target sign: İç halka (granülasyon — kontrastlanır) + dış halka (ödem — kontrastlanmaz). DWI: Apse parlak (pü → kısıtlı difüzyon) vs nekrotik tümör (değişken).",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Abdominal Pain - Fever or Suspected Abscess. American College of Radiology; 2018.",
            "Radiopaedia.org - Pyogenic liver abscess"
        ]
    },
    {
        id: "esophageal-carcinoma",
        name: "Özofagus Karsinomu",
        nameEn: "Esophageal Carcinoma",
        category: "Esophagus (Yemek Borusu)",
        categoryEn: "Esophagus",
        keyPoints: ["Skuamöz hücreli karsinom üst/orta 1/3, adenokarsinom alt 1/3 (Barrett özofagusu).", "CT evrelemede; lokal invazyon, lenf nodu ve uzak metastaz değerlendirilir.", "PET/CT rekürrens ve evrelemede kritik rol oynar."],
        keyPointsEn: ["Squamous cell carcinoma in upper/middle 1/3, adenocarcinoma in lower 1/3 (Barrett's esophagus).", "CT staging assesses local invasion, lymph nodes, and distant metastases.", "PET/CT plays a critical role in recurrence and staging."],
        findings: {
            ct: {
                contrast: "Özofagus duvarında halkasal kalınlaşma ve lümen daralması. Mediastinal lenf nodları. Komşu yapılara (aorta, trakea) invazyon değerlendirmesi. Karaciğer ve akciğer metastazları."
            },
            mri: {
                other_sequences: "Lokal evreleme: Adventisya tutulumu (T3), komşu yapı invazyonu (T4). Difüzyon (DWI) tümör aktivitesini gösterir."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Circumferential wall thickening and luminal narrowing of esophagus. Mediastinal lymph nodes. Assessment of invasion into adjacent structures (aorta, trachea). Liver and lung metastases."
            },
            mri: {
                other_sequences: "Local staging: Adventitia involvement (T3), adjacent structure invasion (T4). Diffusion (DWI) shows tumor activity."
            }
        },
        mechanism: "Skuamöz hücreli karsinom (üst/orta 1/3): Sigara, alkol, sıcak içecek → skuamöz epitel kronik hasarı → displazi → SCC. Adenokarsinom (alt 1/3): Kronik GÖRH → Barrett metaplazisi (kolumnar epitel) → intestinal metaplazi → displazi → adenokarsinom. Her iki tip çevresel (sirkumferensiyel) büyüme ile lümeni daraltır; mediasten yakınlığı erken damar ve sinir invazyonuna yol açar.",
        etiology: "SCC: Sigara, alkol, sıcak içecek (çay), akalazya, kostik madde. Adenokarsinom: Barrett özofagusu (kronik GÖRH), obezite, sigara. Adenokarsinom insidansı hızla artıyor.",
        differentialDiagnosis: ["Akalazya (Kuş gagası görünümü — benign)", "Özofageal Striktür (Koroziv veya peptik)", "Leiomyom (Submuköz kitle — en sık benign özofagus tümörü)", "Ekstrensek Bası (Mediasten kitlesi, aort anevrizması)"],
        goldStandard: "Endoskopi + Biyopsi (Kesin tanı). BT evreleme: Lokal invazyon, LAP, uzak metastaz. PET-CT: Uzak metastaz ve rekürrens tespitinde üstün.",
        clinicalPearl: "Barrett özofagusu: >3cm uzunluk + intestinal metaplazi = Yüksek adenokarsinom riski → düzenli endoskopik surveyans. Endoskopik USG (EUS): T ve N evreleme doğruluğu BT'den üstün. Rat-tail sign: Baryumda düzensiz lümen daralması.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "NCCN Clinical Practice Guidelines in Oncology: Esophageal and Esophagogastric Junction Cancers. National Comprehensive Cancer Network; 2023.",
            "Radiopaedia.org - Esophageal carcinoma"
        ]
    },
    {
        id: "gastric-cancer",
        name: "Mide Kanseri (Gastrik Adenokarsinom)",
        nameEn: "Gastric Cancer (Gastric Adenocarcinoma)",
        category: "Neoplastik",
        categoryEn: "Neoplastic",
        gallery: [
            { url: "/images/placeholder_source.png", caption: "BT - Mide Duvarı Kalınlaşması", modality: "CT" },
            { url: "/images/placeholder_source.png", caption: "MRI - Lokal Yayılım Değerlendirmesi", modality: "MRI" }
        ],
        findings: {
            ct: {
                contrast: "Mide duvarı kalınlaşması (>5mm) ve kontrast tutan irregüler kitle. Sirkumferensiyel duvar kalınlaşması (linitis plastica — Borrmann IV). Perigastrik yağ invazyonu. Perigastrik LAP. Karaciğer metastazı. Peritoneal implantlar + asit (Evre IV). Krukenberg tümörü: Over metastazı (bilateral solid over kitlesi)."
            },
            mri: {
                t2: "Mide duvarı katmanları: T2 hipointens muskularis propria invazyonu → T3 evre.",
                dwi: "Solid tümör kısıtlanır. Peritoneal implantlar DWI'da görülebilir.",
                t1_c: "Erken arteryel kontrastlanma (mukoza tutulumu). Lokal evreleme (T1-T4)."
            }
        },
        findingsEn: {
            ct: {
                contrast: "Gastric wall thickening (>5mm) and enhancing irregular mass. Circumferential wall thickening (linitis plastica — Borrmann IV). Perigastric fat invasion. Perigastric LAP. Liver metastasis. Peritoneal implants + ascites (Stage IV). Krukenberg tumor: Ovarian metastasis (bilateral solid ovarian mass)."
            },
            mri: {
                t2: "Gastric wall layers: T2 hypointense muscularis propria invasion → T3 stage.",
                dwi: "Solid tumor restricts. Peritoneal implants visible on DWI.",
                t1_c: "Early arterial enhancement (mucosal involvement). Local staging (T1-T4)."
            }
        },
        keyPoints: [
            "BT: Lokal invazyon (T evresi) + Lenf nodu (N evresi) + Metastaz (M evresi) değerlendirmesi.",
            "Linitis plastica (Borrmann IV): Diffüz duvar kalınlaşması → 'deri torbası' mide görünümü.",
            "Krukenberg tümörü: Mide Ca'nın over metastazı — bilateral solid over kitlesi.",
            "Lauren sınıflaması: İntestinal tip (H. pylori) vs Diffüz tip (CDH1 mutasyonu)."
        ],
        keyPointsEn: [
            "CT: Local invasion (T stage) + Lymph node (N stage) + Metastasis (M stage).",
            "Linitis plastica (Borrmann IV): Diffuse wall thickening → 'leather bottle' stomach.",
            "Krukenberg tumor: Ovarian metastasis of gastric Ca — bilateral solid ovarian mass.",
            "Lauren classification: Intestinal type (H. pylori) vs Diffuse type (CDH1 mutation)."
        ],
        mechanism: "Helicobacter pylori → kronik gastrit → intestinal metaplazi → displazi → adenokarsinom (intestinal tip). Diffüz tip: CDH1 (E-kaderin) mutasyonu → hücre adhezyonu kaybı → diffüz infiltrasyon (linitis plastica). Peritona yayılım: Küçük kurvatura, kesiyle temas, implantasyon. Lenfatik: Perigastrik → çölyak → para-aortik. Hematojen: Karaciğer → akciğer → kemik.",
        etiology: "H. pylori enfeksiyonu (%90+), tuzlu/tütsülenmiş gıda, sigara, mide polipleri, önceki mide cerrahisi, aile öyküsü.",
        differentialDiagnosis: ["Mide Lenfoması (MALT — diffüz LAP, BT'de geniş duvar kalınlaşması)", "GIST (Egzofitik büyüme, mezenkimal)", "Gastrik Ülser (Benign — düzgün sınırlı, çevrede kıvrımlar)", "Metastatik Tutulum"],
        goldStandard: "Endoskopi + Biyopsi (Kesin tanı). BT: Evreleme (TNM). PET-CT: Uzak metastaz ve tedavi yanıtı. EUS: Mide duvarı katmanlarını gösterir (T evreleme).",
        clinicalPearl: "Linitis plastica (Borrmann IV): Mide duvarının diffüz infiltrasyonu → 'deri torbası' mide → BT'de peristaltik kayıp. Krukenberg tümörü: Over metastazı = Evre IV. Virchow nodu (sol supraklavikuler LAP) = Uzak metastaz işareti.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "NCCN Clinical Practice Guidelines in Oncology: Gastric Cancer. National Comprehensive Cancer Network; 2023.",
            "Radiopaedia.org - Gastric adenocarcinoma"
        ]
    },
    {
        id: "peptic-ulcer-perforation",
        name: "Peptik Ülser Perforasyonu",
        nameEn: "Peptic Ulcer Perforation",
        category: "Acil",
        categoryEn: "Emergency",
        gallery: [
            { url: "/images/placeholder_source.png", caption: "Ayakta Direkt Karın Grafisi - Serbest Hava", modality: "X-Ray" },
            { url: "/images/placeholder_source.png", caption: "BT - Pnömoperitoneum + Periulseröz Değişiklik", modality: "CT" }
        ],
        findings: {
            xray: {
                description: "Ayakta Direkt Karın Grafisi (ADKG): Karaciğer ile diyafram arasında ince hava çizgisi (serbest intraperitoneal hava = PNÖMOPERİTONEUM). Miktarı az olduğunda görülmeyebilir. Sol lateral dekübit grafi: Daha küçük hava miktarlarını gösterir."
            },
            ct: {
                non_contrast: "Serbest intraperitoneal hava (pnömoperitoneum): Karaciğer altı, falciform ligament yanında, pelvis. Perihepatik serbest sıvı.",
                contrast: "Periulseröz yağ kirlenme (ülser bölgesi → inflamasyon + perforasyon). Mide/duodenum duvarında defekt. Kontrastın extravasasyonu (aktif kaçak — nadir). Peritonit bulguları (omental sıvı, mezenter kalınlaşma)."
            }
        },
        findingsEn: {
            xray: {
                description: "Upright Abdominal X-ray (ADKG): Thin air line between liver and diaphragm (free intraperitoneal air = PNEUMOPERITONEUM). May not be visible with small amounts. Left lateral decubitus: Shows smaller amounts of air."
            },
            ct: {
                non_contrast: "Free intraperitoneal air (pneumoperitoneum): Subhepatic, alongside falciform ligament, pelvis. Perihepatic free fluid.",
                contrast: "Periulcerative fat stranding (ulcer site → inflammation + perforation). Gastric/duodenal wall defect. Contrast extravasation (active leak — rare). Peritonitis findings (omental fluid, mesenteric thickening)."
            }
        },
        keyPoints: [
            "ADKG: Diyafram altı serbest hava = Pnömoperitoneum = Acil cerrahi!",
            "BT: Serbest havanın miktarı ve kaynağını tespit eder (mide/duodenum ön yüzü en sık).",
            "Pnömoperitoneum olmayabilir! (%10-30 yalancı negatif) — klinik şüphede BT tercih et.",
            "Duodenum ön yüz perforasyonu en sık bölge (H. pylori + NSAİİ)."
        ],
        keyPointsEn: [
            "AXR: Free air under diaphragm = Pneumoperitoneum = Emergency surgery!",
            "CT: Determines amount and source of free air (anterior gastric/duodenal wall most common).",
            "Pneumoperitoneum may be absent! (10-30% false negative) — CT preferred in clinical suspicion.",
            "Anterior duodenal wall perforation most common (H. pylori + NSAIDs)."
        ],
        mechanism: "Peptik ülser → mide/duodenum mukozasının tam kat delinmesi → intraperitoneal hava ve içerik sızması → kimyasal peritonit (duodenal sıvı sterildir ilk 6 saatte). H. pylori duodenum ön yüzünde ülser oluşturur; NSAİİ koruyucu mukusı azaltır. Serbest hava subfrenik boşluğa yükselir → ADKG'de görülür. Perikumferansiyel BT kesitlerde 'oral/IV kontrast extravasasyonu' = Aktif sızıntı (ameliyathane!).",
        etiology: "H. pylori (%70-90), NSAİİ kullanımı, sigara, stres ülseri (yoğun bakım), Zollinger-Ellison sendromu.",
        differentialDiagnosis: ["Apse Rüptürü (Pnömoperitoneum yok, lokalize)", "Appendisit Perforasyonu (Sağ alt kadran)", "Hava Yutan (Aerofaji)", "İatrojenik (Endoskopi perforasyonu)"],
        goldStandard: "Ayakta ADKG (İlk tercih — serbest hava). BT (Duyarlılık %95+ — küçük hava miktarlarını gösterir). Endoskopi akut perforasyonda kontrendike!",
        clinicalPearl: "Rigler sign: Bağırsak duvarının hem iç hem dış yüzeyinin hava ile görünmesi (double wall sign). %10-30 perforasyonda serbest hava görülmez → klinik şüphede BT. Duodenum ön yüz perforasyonu en sık → serbest hava sağ subfrenik bölgede.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Abdominal Pain and Fever or Suspected Abdominal Abscess. American College of Radiology; 2018.",
            "Radiopaedia.org - Peptic ulcer perforation"
        ]
    },
    {
        id: "acute-cholecystitis-gi",
        name: "Akut Kolesistit (Safra Taşına Bağlı)",
        nameEn: "Acute Calculous Cholecystitis",
        category: "İnflamatuar",
        categoryEn: "Inflammatory",
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Murphy İşareti + Taş", modality: "USG" },
            { url: "/images/placeholder_source.png", caption: "BT - Perikolesistik Stranding", modality: "CT" }
        ],
        findings: {
            usg: {
                description: "Safra kesesi taşı (hiperekojenik + akustik gölge). Safra kesesi distansiyonu. Duvar kalınlaşması >3mm. Perikolesistik sıvı. Sonografik Murphy işareti: Prob ile baskı → ağrı. Gangrenöz: İntralüminal membranlar.",
                doppler: "Artmış mural vaskülarite (inflamasyon)."
            },
            ct: {
                contrast: "Mural kalınlaşma + kontrastlanma. Perikolesistik yağ kirlenme (fat stranding). Akalkülöz: Taş yok, klinikle değerlendir. Gangrenöz: Mural defekt, intralüminal hava. Amfizemöz: İntramural hava (acil)."
            }
        },
        findingsEn: {
            usg: {
                description: "Gallstones (hyperechoic + acoustic shadow). GB distension. Wall thickening >3mm. Pericholecystic fluid. Sonographic Murphy's sign: Press with probe → pain. Gangrenous: Intraluminal membranes.",
                doppler: "Increased mural vascularity (inflammation)."
            },
            ct: {
                contrast: "Mural thickening + enhancement. Pericholecystic fat stranding. Acalculous: No stone, correlate clinically. Gangrenous: Mural defect, intraluminal gas. Emphysematous: Intramural gas (emergency)."
            }
        },
        keyPoints: [
            "USG: İlk tercih — Sonografik Murphy + Duvar kalınlaşması + Taş = Tanısal.",
            "Gangrenöz Kolesistit: Duvar devamlılık kaybı → Acil laparoskopik kolesistektomi.",
            "Amfizemöz Kolesistit: İntramural hava → Diyabetik, klostridiyum → Acil!",
            "HIDA sintigrafisi: Sistik kanal tıkanıklığını kanıtlar (altın standart scintigraphy)."
        ],
        keyPointsEn: [
            "USG: First choice — Sonographic Murphy + Wall thickening + Stone = Diagnostic.",
            "Gangrenous Cholecystitis: Wall discontinuity → Emergency laparoscopic cholecystectomy.",
            "Emphysematous Cholecystitis: Intramural gas → Diabetic, clostridium → Emergency!",
            "HIDA scintigraphy: Proves cystic duct obstruction (gold standard scintigraphy)."
        ],
        mechanism: "İmpakte kalküler sistik kanalda → obstrüksiyon → safra kesesi distansiyonu → duvar iskemisi → inflamasyon. Sekonder bakteri kolonizasyonu (E. coli, Klebsiella). Gangrenöz: Transmural nekroz → perforasyon riski. Amfizemöz (gaz üreten bakteri — Clostridium, E. coli) → intramural hava → diyabetik hastalarda sık.",
        etiology: "Kolelitiyazis (%90-95). Akalkülöz: Kritik hastalık (TPN, sepsis, uzun ameliyat). Amfizemöz: Diyabet + anaerobik bakteri.",
        differentialDiagnosis: ["Bilier Kolik (Geçici ağrı — inflamasyon yok)", "Akut Kolanjit (Charcot triadı: Ateş + sarılık + sağ üst kadran ağrısı)", "Peptik Ülser (Epigastrik ağrı)", "Hepatit (Diffüz KC hassasiyeti)"],
        goldStandard: "USG (İlk tercih — Duyarlılık %95+). HIDA sintigrafisi: Sistik kanal obstrüksiyonunun kanıtlanması (4h dolmama = Pozitif). Şüpheli olgularda BT: Komplikasyonlar (gangrenöz, amfizemöz).",
        clinicalPearl: "Sonografik Murphy işareti: Prob ile baskıda ağrı + taş + duvar kalınlaşması = Tanısal triad. WES triadı: Wall thickening + Edema + Sonographic Murphy = PPV %94. Amfizemöz kolesistit (intramural hava): Acil kolesistektomi — mortalite %15-25.",
        references: [
            "Gore RM, Levine MS. Textbook of Gastrointestinal Radiology. 4th ed. Elsevier; 2015.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Right Upper Quadrant Pain. American College of Radiology; 2018.",
            "Radiopaedia.org - Acute cholecystitis"
        ]
    }
];
