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
    },
    {
        id: "chronic-pancreatitis",
        name: "Kronik Pankreatit",
        nameEn: "Chronic Pancreatitis",
        category: "Pankreas",
        categoryEn: "Pancreas",
        mechanism: "Tekrarlayan inflamasyon → parankimal fibrozis ve atrofi → kalsifikasyon + duktal dilatasyon. Alkol en sık neden (%70-80). Parankimal kalsifikasyonlar ve zincir göl (chain of lakes) paterni tipiktir.",
        keyPoints: ["Parankimal kalsifikasyonlar patognomoniktir.", "Ana pankreatik kanalda dilatasyon (>3mm) ve düzensizlik.", "Parankimal atrofi geç dönemde belirginleşir.", "BT: kalsifikasyon + atrofi + duktal dilatasyon üçlüsü."],
        keyPointsEn: ["Parenchymal calcifications are pathognomonic.", "Main pancreatic duct dilatation (>3mm) and irregularity.", "Parenchymal atrophy becomes prominent in late stage.", "CT: calcification + atrophy + ductal dilatation triad."],
        findings: {
            ct: { non_contrast: "Parankimal kalsifikasyonlar (punktat veya kaba). Pankreatik kanal dilatasyonu (>3mm, düzensiz kontur). Parankimal atrofi. Peripankreatik sıvı koleksiyonu/psödokist.", contrast: "Azalmış parankimal kontrastlanma (fibrozis). Psödokist: kontrastlanmayan sıvı koleksiyonu." },
            mri: { t1: "Parankimal sinyal kaybı (fibrozis, T1 kısalması kaybolur). Normal parlak pankreas sinyali kayıptır.", t2: "Duktal dilatasyon T2 hiperintens. Psödokist hiperintens.", other_sequences: "MRCP: Duktal düzensizlik, striktür/dilatasyon alternasyonu (chain of lakes). Yan dal ektazisi." },
            usg: { description: "Heterojen parankimal eko. Kalsifikasyonlar (hiperekojen odaklar + gölgeleme). Ana kanal dilatasyonu. Psödokist." }
        },
        findingsEn: {
            ct: { non_contrast: "Parenchymal calcifications (punctate or coarse). Pancreatic duct dilatation (>3mm, irregular contour). Parenchymal atrophy. Peripancreatic fluid collection/pseudocyst.", contrast: "Decreased parenchymal enhancement (fibrosis). Pseudocyst: non-enhancing fluid collection." },
            mri: { t1: "Parenchymal signal loss (fibrosis, loss of T1 shortening). Normal bright pancreas signal is lost.", t2: "Ductal dilatation T2 hyperintense. Pseudocyst hyperintense.", other_sequences: "MRCP: Ductal irregularity, stricture/dilatation alternation (chain of lakes). Side branch ectasia." },
            usg: { description: "Heterogeneous parenchymal echo. Calcifications (hyperechoic foci + shadowing). Main duct dilatation. Pseudocyst." }
        },
        etiology: "Alkol (%70-80), idiopatik, herediter (PRSS1, SPINK1), otoimmün pankreatit (IgG4), obstrüktif (tümör, travma), hiperparatiroidizm.",
        differentialDiagnosis: ["Pankreas Adenokarsinomu (Fokal kitle, çift kanal işareti, vasküler invazyon)", "Otoimmün Pankreatit (Sosis şeklinde diffüz büyüme, IgG4 yüksek, steroid yanıtı)", "IPMN (Duktal kistik dilatasyon, müsinöz içerik, malignite potansiyeli)", "Akut Pankreatit (Akut klinik, peripankreatik inflamasyon, kalsifikasyon yok)"],
        goldStandard: "BT: Kalsifikasyon + atrofi + duktal değişiklikler. MRCP: Duktal morfoloji (Cambridge sınıflaması). EUS: Erken dönem değişiklikler (Rosemont kriterleri).",
        clinicalPearl: "Pankreatik parankimal kalsifikasyonlar = Kronik pankreatit patognomoniktir. Alkol öyküsü + kalsifikasyon + duktal dilatasyon → tanı.",
        references: ["ACR Appropriateness Criteria: Acute Pancreatitis. American College of Radiology; 2019.", "Bollen TL et al. Imaging of Chronic Pancreatitis. Radiol Clin North Am. 2012;50(3):407-428.", "Radiopaedia.org - Chronic pancreatitis"]
    },
    {
        id: "pancreatic-ipmn",
        name: "İntraduktAl Papiller Müsinöz Neoplazi (IPMN)",
        nameEn: "Intraductal Papillary Mucinous Neoplasm (IPMN)",
        category: "Pankreas",
        categoryEn: "Pancreas",
        mechanism: "Pankreatik duktus epitelinin papiller proliferasyonu → müsin aşırı üretimi → duktal dilatasyon. Ana kanal (MD-IPMN): yüksek malignite riski (%60-70). Dal tipi (BD-IPMN): düşük risk (%15-25). Mikst tip her ikisi.",
        keyPoints: ["Ana kanal IPMN: Ana kanal ≥10mm → cerrahi endikasyonu.", "Dal tipi IPMN: Kistik lezyon + ana kanal ile bağlantı.", "Fukuoka kriterleri: Yüksek riskli stigmatalar (kontrastlanan mural nodül, kanal ≥10mm, sarılık).", "Takip: Sendai/Fukuoka/ACG kılavuzları."],
        keyPointsEn: ["Main duct IPMN: Main duct ≥10mm → surgical indication.", "Branch duct IPMN: Cystic lesion communicating with main duct.", "Fukuoka criteria: High-risk stigmata (enhancing mural nodule, duct ≥10mm, jaundice).", "Follow-up: Sendai/Fukuoka/ACG guidelines."],
        findings: {
            ct: { non_contrast: "Kistik dilatasyon (dal tipi) veya diffüz ana kanal dilatasyonu.", contrast: "Kontrastlanan mural nodül (malignite göstergesi). Duvar kalınlaşması. Papiller projeksiyonlar." },
            mri: { t2: "Kistik lezyon T2 hiperintens. Ana kanal ile bağlantı gösterilebilir.", other_sequences: "MRCP: Ana kanal dilatasyonu. Kist-kanal bağlantısı (en iyi MRCP ile). Dal tipi: üzüm salkımı (grape-like cluster). DWI: Mural nodül kısıtlılık gösterebilir." }
        },
        findingsEn: {
            ct: { non_contrast: "Cystic dilatation (branch duct type) or diffuse main duct dilatation.", contrast: "Enhancing mural nodule (malignancy indicator). Wall thickening. Papillary projections." },
            mri: { t2: "Cystic lesion T2 hyperintense. Communication with main duct can be demonstrated.", other_sequences: "MRCP: Main duct dilatation. Cyst-duct communication (best shown on MRCP). Branch duct: grape-like cluster. DWI: Mural nodule may show restriction." }
        },
        etiology: "İleri yaş (60-70), erkeklerde daha sık (ana kanal tip). Sporadik. Kronik pankreatit ve diyabet ilişkili olabilir.",
        differentialDiagnosis: ["Müsinöz Kistik Neoplazi-MCN (Kadın, gövde/kuyruk, kanal ile bağlantı yok, periferal kalsifikasyon)", "Seröz Kistadenoma-SCN (Merkezi skar + kalsifikasyon, mikrokistik, benign)", "Psödokist (Pankreatit öyküsü, duvar kontrastlanması, müsin değil)", "Pankreas Adenokarsinomu (Solid kitle, vasküler invazyon)"],
        goldStandard: "MRCP + kontrastlı MRI: Kist-kanal bağlantısı ve mural nodül. EUS + FNA: Kist sıvısı analizi (CEA, müsin, sitoloji). Fukuoka kriterleri ile risk sınıflandırması.",
        clinicalPearl: "MRCP'de ana pankreatik kanal ile bağlantılı kistik lezyon = IPMN düşün. Mural nodül + kanal ≥10mm = yüksek riskli stigmata → cerrahi.",
        references: ["Tanaka M et al. Revisions of International Consensus Fukuoka Guidelines 2017. Pancreatology. 2017;17(5):738-753.", "ACR Appropriateness Criteria: Pancreatic Cyst. American College of Radiology.", "Radiopaedia.org - IPMN"]
    },
    {
        id: "pancreatic-neuroendocrine",
        name: "Pankreatik Nöroendokrin Tümör (pNET)",
        nameEn: "Pancreatic Neuroendocrine Tumor (pNET)",
        category: "Pankreas",
        categoryEn: "Pancreas",
        mechanism: "Langerhans adacık hücrelerinden köken alır. Hipervasküler tümör: arteriyel fazda yoğun kontrastlanma (pankreas adenokarsinomun tam tersi). Fonksiyonel (%30-40): insülinoma, gastrinoma, VIPoma. Non-fonksiyonel (%60-70): daha büyük, geç bulgu.",
        keyPoints: ["Arteriyel fazda belirgin kontrastlanma (hipervasküler) — adenokarsinomdan ayırıcı.", "Fonksiyonel tip: küçük, erken semptom (hipoglisemi/Zollinger-Ellison).", "Non-fonksiyonel: büyük kitle, karaciğer metastazı ile prezente olabilir.", "WHO grade sınıflaması: G1/G2 (NET) vs G3 (NEC)."],
        keyPointsEn: ["Arterial phase avid enhancement (hypervascular) — differentiates from adenocarcinoma.", "Functional type: small, early symptoms (hypoglycemia/Zollinger-Ellison).", "Non-functional: large mass, may present with liver metastasis.", "WHO grade classification: G1/G2 (NET) vs G3 (NEC)."],
        findings: {
            ct: { non_contrast: "İzodans veya hafif hiperdans solid kitle.", contrast: "Arteriyel fazda yoğun homojen kontrastlanma (küçük tümör). Büyük tümörde heterojen, merkezi nekroz. Karaciğer metastazları da hipervasküler." },
            mri: { t1: "Hipointens veya izointens.", t2: "Hiperintens. Kistik/nekrotik alanlar çok hiperintens.", t1_c: "Arteriyel fazda yoğun kontrastlanma. Hepatik metastazlar da arteriyel fazda parlar.", dwi: "Difüzyon kısıtlılığı (yüksek grade'de belirgin)." }
        },
        findingsEn: {
            ct: { non_contrast: "Isodense or mildly hyperdense solid mass.", contrast: "Arterial phase avid homogeneous enhancement (small tumor). Heterogeneous with central necrosis in large tumors. Liver metastases are also hypervascular." },
            mri: { t1: "Hypointense or isointense.", t2: "Hyperintense. Cystic/necrotic areas very hyperintense.", t1_c: "Arterial phase avid enhancement. Hepatic metastases also enhance in arterial phase.", dwi: "Diffusion restriction (prominent in high grade)." }
        },
        etiology: "Sporadik (%90). MEN1 sendromu (%10) — gastrinoma, insülinoma. VHL sendromu. Nörofibromatozis tip 1. Tüberoz skleroz.",
        differentialDiagnosis: ["Pankreas Adenokarsinomu (Hipovasküler, vasküler invazyon, çift kanal işareti)", "Solid Psödopapiller Tümör (Genç kadın, büyük heterojen kitle)", "Pankreatik Metastaz (RCC metastazı hipervasküler olabilir, öykü)", "İntrapankreatik Aksesuar Dalak (Dalak ile aynı kontrastlanma paterni)"],
        goldStandard: "Çok fazlı BT (arteriyel + portal): Hipervasküler kitle tespiti. MRI: Karaciğer metastaz taraması. Ga-68 DOTATATE PET/BT: Somatostatin reseptör pozitif tümörler.",
        clinicalPearl: "Pankreasta arteriyel fazda parlayan (hipervasküler) kitle = NET düşün (adenokarsinomun tam tersi olan kontrastlanma paterni).",
        references: ["Defined ACR guidelines for pancreatic NET imaging.", "Defined WHO 2019 classification of digestive system tumours.", "Radiopaedia.org - Pancreatic neuroendocrine tumour"]
    },
    {
        id: "epiploic-appendagitis",
        name: "Epiploik Apandajit",
        nameEn: "Epiploic Appendagitis",
        category: "Akut Karın",
        categoryEn: "Acute Abdomen",
        mechanism: "Epiploik apandajın (peritoneal yağ çıkıntısı) spontan torsiyonu veya venöz trombozuna bağlı iskemik nekroz. Kendini sınırlayan patoloji. Cerrahi gerektirmez → konservatif tedavi yeterli.",
        keyPoints: ["Oval, yağ dansitesinde perikolonik lezyon + hiperattenüe halka işareti.", "En sık sigmoid ve çıkan kolonda.", "Apandisit veya divertikülit ile karışır → gereksiz cerrahi riski.", "Kendini sınırlar, konservatif tedavi (NSAİİ) yeterlidir."],
        keyPointsEn: ["Oval, fat-density pericolonic lesion + hyperattenuating ring sign.", "Most common at sigmoid and ascending colon.", "Mimics appendicitis or diverticulitis → risk of unnecessary surgery.", "Self-limiting, conservative treatment (NSAIDs) is sufficient."],
        findings: {
            ct: { non_contrast: "Oval yağ dansitesinde perikolonik lezyon (-50 ile -100 HU). Hiperattenüe halka işareti (inflame seroza). Çevresel yağ dokusu çizgilenme (fat stranding).", contrast: "Hiperattenüe halka kontrastlanabilir. Kolon duvarı tipik olarak normaldir (divertikülitte duvar kalınlaşır)." }
        },
        findingsEn: {
            ct: { non_contrast: "Oval fat-density pericolonic lesion (-50 to -100 HU). Hyperattenuating ring sign (inflamed serosa). Surrounding fat stranding.", contrast: "Hyperattenuating ring may enhance. Colonic wall is typically normal (unlike diverticulitis with wall thickening)." }
        },
        etiology: "Spontan torsiyon (en sık), venöz tromboz. Risk faktörleri: Obezite, ağır egzersiz, hernia.",
        differentialDiagnosis: ["Akut Divertikülit (Kolon duvar kalınlaşması, divertikül, perikolonik apse)", "Akut Apandisit (Sağ tarafta ise, dilate apendiks, fekalit)", "Omental İnfarkt (Daha büyük, sağ tarafta, halka işareti yok)", "Mezenterik Pannikülit (Mezenterik yağ dokusu, tümöral psödokapsül)"],
        goldStandard: "BT: Perikolonik oval yağ dansiteli lezyon + halka işareti + normal kolon duvarı → tanı koydurucudur. Cerrahi gerekmez.",
        clinicalPearl: "Perikolonik oval yağ dansiteli lezyon + hiperattenüe halka + normal kolon duvarı = Epiploik apandajit → cerrahiden kaçın, NSAİİ yeterli.",
        references: ["Singh AK et al. CT appearance of acute appendagitis. AJR Am J Roentgenol. 2004;183(5):1303-1307.", "Radiopaedia.org - Epiploic appendagitis"]
    },
    {
        id: "omental-infarction",
        name: "Omental İnfarkt",
        nameEn: "Omental Infarction",
        category: "Akut Karın",
        categoryEn: "Acute Abdomen",
        mechanism: "Omentum majusun sağ tarafında venöz tromboz veya torsiyon → yağ dokusunda iskemik nekroz. Sağ alt/üst kadranda ağrı. Epiploik apandajitten daha büyük lezyon.",
        keyPoints: ["Sağ tarafta, büyük heterojen yağ dansiteli kitle + çizgilenme.", "Triangular veya cake-like morfoloji.", "Apandisit veya kolesistit ile karışır.", "Kendini sınırlar, konservatif tedavi yeterli."],
        keyPointsEn: ["Right-sided, large heterogeneous fat-density mass + stranding.", "Triangular or cake-like morphology.", "Mimics appendicitis or cholecystitis.", "Self-limiting, conservative treatment sufficient."],
        findings: {
            ct: { non_contrast: "Sağ alt/üst kadranda büyük (>3cm) yağ dansiteli heterojen kitle. Çevresel yağ çizgilenmesi. Whirl sign (torsiyon) görülebilir.", contrast: "Minimal periferik kontrastlanma. Kolon/apendiks normal." }
        },
        findingsEn: {
            ct: { non_contrast: "Large (>3cm) heterogeneous fat-density mass in right lower/upper quadrant. Surrounding fat stranding. Whirl sign (torsion) may be seen.", contrast: "Minimal peripheral enhancement. Colon/appendix normal." }
        },
        etiology: "Venöz tromboz (en sık), torsiyon. Risk: Obezite, koagülopati, vaskülit, travma, cerrahi.",
        differentialDiagnosis: ["Akut Apandisit (Dilate apendiks, fekalit, periapendiseal sıvı)", "Epiploik Apandajit (Daha küçük, oval, halka işareti)", "Mezenterik Pannikülit (Mezenter kökünde, pseudokapsül)", "Yağ İçeren Tümör (Liposarkom: solid komponent, kontrastlanma)"],
        goldStandard: "BT: Sağ tarafta büyük yağ dansiteli kitle + çizgilenme + normal apendiks/kolon → tanı.",
        clinicalPearl: "Sağ tarafta büyük yağ dansiteli kitle + normal apendiks = Omental infarkt düşün → gereksiz cerrahiden kaçın.",
        references: ["Kamaya A et al. Imaging manifestation of abdominal fat necrosis and its mimics. Radiographics. 2011;31(7):2021-2034.", "Radiopaedia.org - Omental infarction"]
    },
    {
        id: "sigmoid-volvulus",
        name: "Sigmoid Volvulus",
        nameEn: "Sigmoid Volvulus",
        category: "Obstrüksiyon",
        categoryEn: "Obstruction",
        mechanism: "Uzun sigmoid kolon mezosu etrafında ≥360° rotasyonu → kapalı lüp obstrüksiyon + vasküler kompromize. Yaşlı, psikiyatrik hastalar ve kronik konstipasyonda sık.",
        keyPoints: ["Direkt grafide 'coffee bean sign' (kahve çekirdeği işareti) patognomonik.", "BT: Whirl sign (mezenter burgaçlanması) + dilate sigmoid.", "Çekal volvulustan farklı olarak sigmoid mezenter kökünden döner.", "Tedavi: Endoskopik detorsiyon → elektif cerrahi."],
        keyPointsEn: ["'Coffee bean sign' on plain film is pathognomonic.", "CT: Whirl sign (mesentery swirl) + dilated sigmoid.", "Unlike cecal volvulus, sigmoid rotates from its mesenteric root.", "Treatment: Endoscopic detorsion → elective surgery."],
        findings: {
            ct: { non_contrast: "Masif dilate sigmoid kolon. Whirl sign (mezenterik burgaçlanma). Kuş gagası işareti (bird beak sign) — geçiş noktası. Kapalı lüp obstrüksiyon. İskemi varsa: duvar kalınlaşması, pnömatozis.", contrast: "İskemik duvar: kontrastlanma kaybı. Mezenterik vasküler congestion." },
            xray: { description: "Coffee bean sign: Pelvis'ten üst abdomena uzanan devasa, hava ile dolu sigmoid lüp. Haustrasyon kaybı. Sigmoid kıvrımları örtüşür." }
        },
        findingsEn: {
            ct: { non_contrast: "Massively dilated sigmoid colon. Whirl sign (mesenteric swirl). Bird beak sign at transition point. Closed-loop obstruction. Ischemia: wall thickening, pneumatosis.", contrast: "Ischemic wall: loss of enhancement. Mesenteric vascular congestion." },
            xray: { description: "Coffee bean sign: Massive air-filled sigmoid loop extending from pelvis to upper abdomen. Loss of haustration. Overlapping sigmoid folds." }
        },
        etiology: "Uzun sigmoid mezo (konjenital veya edinsel), kronik konstipasyon, laksatif kullanımı, nöropsikiyatrik hastalar, yaşlı hasta.",
        differentialDiagnosis: ["Çekal Volvulus (Sağ tarafta, kidney bean, genç yaş)", "İnce Barsak Obstrüksiyonu (Küçük kalibre, valvülae conniventes)", "Toksik Megakolon (Ülseratif kolit/C.diff, haustrasyon kaybı, >6cm)", "Ogilvie Sendromu (Psödoobstrüksiyon, mekanik neden yok)"],
        goldStandard: "Direkt grafi: Coffee bean sign (tanı koydurabilir). BT: Whirl sign + kapalı lüp → cerrahi/endoskopik detorsiyon kararı.",
        clinicalPearl: "Direkt grafide pelvis'ten yükselen dev hava dolu sigmoid lüp (coffee bean) = Sigmoid volvulus → acil endoskopik detorsiyon.",
        references: ["Peterson CM et al. Volvulus of the gastrointestinal tract: appearances at multimodality imaging. Radiographics. 2009;29(5):1281-1293.", "Radiopaedia.org - Sigmoid volvulus"]
    },
    {
        id: "ulcerative-colitis",
        name: "Ülseratif Kolit",
        nameEn: "Ulcerative Colitis",
        category: "İnflamatuar",
        categoryEn: "Inflammatory",
        mechanism: "Otoimmün mukozal inflamasyon, rektumdan proksimale doğru sürekli (continuous) yayılım. Sadece mukoza/submukozayı tutar (transmural değil). Kronik dönemde: haustra kaybı → 'kurşun boru' (lead pipe) kolon.",
        keyPoints: ["Rektumdan başlar, proksimale sürekli yayılır (skip lezyon yok).", "Haustra kaybı → lead pipe (kurşun boru) kolon.", "Backwash ileitis: Pankolit durumunda terminal ileum tutulumu.", "Toksik megakolon riski (transvers kolon >6cm)."],
        keyPointsEn: ["Starts from rectum, spreads proximally continuously (no skip lesions).", "Loss of haustration → lead pipe colon.", "Backwash ileitis: Terminal ileum involvement in pancolitis.", "Risk of toxic megacolon (transverse colon >6cm)."],
        findings: {
            ct: { non_contrast: "Sürekli kolon duvar kalınlaşması (rektumdan başlayan). Haustra kaybı. Perikolonik yağ çizgilenmesi (Crohn'dan daha az).", contrast: "Mukozal hiperemik kontrastlanma (aktif hastalık). Target sign (katmanlı kontrastlanma). Mezenterik vasküler genişleme (comb sign — Crohn'da daha belirgin)." },
            mri: { t2: "Duvar ödemi (T2 hiperintens). Mukozal düzensizlik. Perikolonik sıvı.", dwi: "Aktif inflamasyonda difüzyon kısıtlılığı." }
        },
        findingsEn: {
            ct: { non_contrast: "Continuous colonic wall thickening (starting from rectum). Loss of haustration. Pericolonic fat stranding (less than Crohn's).", contrast: "Mucosal hyperemic enhancement (active disease). Target sign (layered enhancement). Mesenteric vascular engorgement (comb sign — more prominent in Crohn's)." },
            mri: { t2: "Wall edema (T2 hyperintense). Mucosal irregularity. Pericolonic fluid.", dwi: "Diffusion restriction in active inflammation." }
        },
        etiology: "Otoimmün, genetik yatkınlık (HLA-B27 ilişkili), çevresel faktörler. 20-40 yaş pik. Sigara bırakma riski artırır (Crohn'un tersi).",
        differentialDiagnosis: ["Crohn Hastalığı (Skip lezyonlar, transmural, fistül, ileal tutulum, krepe taşı)", "Enfeksiyöz Kolit (C.difficile, CMV: immünsüprese, akut başlangıç)", "İskemik Kolit (Yaşlı, watershed bölge, parmak izi işareti)", "Radyasyon Koliti (Radyoterapi öyküsü, rektosigmoid, kronik)"],
        goldStandard: "Kolonoskopi + biyopsi: Altın standart. BT Enterografi/MR Enterografi: Hastalık yaygınlığı ve komplikasyonlar.",
        clinicalPearl: "Rektumdan başlayıp kesintisiz proksimale uzanan kolon duvar kalınlaşması + haustra kaybı = Ülseratif kolit (Crohn'da skip lezyonlar var).",
        references: ["Defined ACR guidelines for IBD imaging.", "Defined AGA guidelines for ulcerative colitis management.", "Radiopaedia.org - Ulcerative colitis"]
    },
    {
        id: "splenic-infarction",
        name: "Dalak İnfarktı",
        nameEn: "Splenic Infarction",
        category: "Vasküler",
        categoryEn: "Vascular",
        mechanism: "Splenik arter veya dallarının embolik veya trombotik oklüzyonu → kama şeklinde parankimal iskemi/nekroz. En sık kardiyoembolik (AF, endokardit, trombofililer).",
        keyPoints: ["Kama şeklinde (wedge-shaped) periferik hipodens alan — klasik bulgu.", "Splenik kapsüle dayanan geniş tabanlı, hilusu gösteren dar uçlu.", "En sık embolik etiyoloji (AF, endokardit).", "Global infarkt: tüm dalak kontrastlanmaz (splenik arter trombozu)."],
        keyPointsEn: ["Wedge-shaped peripheral hypodense area — classic finding.", "Broad base at splenic capsule, narrow apex pointing toward hilum.", "Most commonly embolic etiology (AF, endocarditis).", "Global infarct: entire spleen non-enhancing (splenic artery thrombosis)."],
        findings: {
            ct: { non_contrast: "Kama şeklinde hipodens alan. Akut dönemde düşük kontrast farkı.", contrast: "Kontrastlanmayan kama şeklinde periferik alan (çok belirgin). Çevresel normal parankimden keskin sınır. Global infarkt: tüm dalak kontrastlanmaz." },
            usg: { description: "Kama şeklinde hipoekoik alan. Doppler: Perfüzyon kaybı. Akut dönemde ağrılı." }
        },
        findingsEn: {
            ct: { non_contrast: "Wedge-shaped hypodense area. Low contrast difference in acute phase.", contrast: "Non-enhancing wedge-shaped peripheral area (very conspicuous). Sharp demarcation from surrounding normal parenchyma. Global infarct: entire spleen non-enhancing." },
            usg: { description: "Wedge-shaped hypoechoic area. Doppler: Loss of perfusion. Painful in acute phase." }
        },
        etiology: "Kardiyoembolik (AF, endokardit %40), hematolojik (orak hücre, myeloproliferatif), trombofili, pankreatit (splenik ven trombozu), travma, vaskülit.",
        differentialDiagnosis: ["Dalak Laserasyonu (Travma, subkapsüler hematom, hemoperitoneum)", "Dalak Apsesi (Rim kontrastlanma, sıvı içerik, ateş)", "Dalak Lenfoması (Fokal hipodens lezyon, yaygın, bilateral olabilir)", "Dalak Kisti (Düzgün sınırlı, sıvı dansitesinde, kontrastlanmaz)"],
        goldStandard: "Kontrastlı BT: Kama şeklinde kontrastlanmayan alan → tanı. Ekokardiyografi/Holter: Embolik kaynak araştırması.",
        clinicalPearl: "Kontrastlı BT'de kama şeklinde periferik kontrastlanmayan alan = Dalak infarktı → embolik kaynak (AF, endokardit) araştır.",
        references: ["Defined ACR guidelines for splenic imaging.", "Defined approach in Radiology journal.", "Radiopaedia.org - Splenic infarction"]
    },
    {
        id: "abdominal-aortic-aneurysm",
        name: "Abdominal Aort Anevrizması (AAA)",
        nameEn: "Abdominal Aortic Aneurysm (AAA)",
        category: "Vasküler",
        categoryEn: "Vascular",
        mechanism: "Aort duvarında elastin ve kollajen dejenerasyonu → lokalize dilatasyon (>3cm veya normalin %50'sinden fazla). En sık infrarenal (%85). Ateroskleroz, ileri yaş, erkek, sigara risk faktörleri. Rüptür riski çap ile orantılı (>5.5cm yüksek risk).",
        keyPoints: [">3cm abdominal aort çapı = Anevrizma tanımı.", "Rüptür riski: >5.5cm erkekte, >5.0cm kadında → cerrahi (EVAR/açık).", "Mural trombüs: Yarım ay şeklinde hipodens materyal.", "Rüptür bulguları: Retroperitoneal hematom, draped aorta sign, crescent sign."],
        keyPointsEn: [">3cm abdominal aortic diameter = Aneurysm definition.", "Rupture risk: >5.5cm in men, >5.0cm in women → surgical (EVAR/open).", "Mural thrombus: Crescent-shaped hypodense material.", "Rupture signs: Retroperitoneal hematoma, draped aorta sign, crescent sign."],
        findings: {
            ct: { non_contrast: "Dilate aort (>3cm). Mural trombüs (hipodens). Duvar kalsifikasyonu. Crescent sign (akut intramural hematom → impending rüptür).", contrast: "Patent lümen + mural trombüs ayrımı. Aktif kontras ekstravasasyonu (rüptür). Retroperitoneal hematom. İliak arter uzanımı." },
            usg: { description: "Dilate aort (>3cm AP çap). Mural trombüs (hipoekoik). Tarama için idealdir. Rüptür değerlendirmesi için yetersiz (BT gerekli)." }
        },
        findingsEn: {
            ct: { non_contrast: "Dilated aorta (>3cm). Mural thrombus (hypodense). Wall calcification. Crescent sign (acute intramural hematoma → impending rupture).", contrast: "Patent lumen + mural thrombus differentiation. Active contrast extravasation (rupture). Retroperitoneal hematoma. Iliac artery extension." },
            usg: { description: "Dilated aorta (>3cm AP diameter). Mural thrombus (hypoechoic). Ideal for screening. Insufficient for rupture assessment (CT needed)." }
        },
        etiology: "Ateroskleroz (%90), hipertansiyon, sigara, erkek cinsiyet, aile öyküsü, kollajen doku hastalıkları (Marfan, Ehlers-Danlos), enfektif (mikotik anevrizma).",
        differentialDiagnosis: ["Aort Diseksiyonu (İntimal flep, çift lümen, akut göğüs/sırt ağrısı)", "Retroperitoneal Fibrozis (Periaortik yumuşak doku, üreter medializasyonu)", "Periaortik Lenfadenopati (Lenf nodları aortu sarmaz, lobüle kontur)", "İnflamatuar AAA (Kalın duvar, perianevrizmal fibrozis, idiopatik)"],
        goldStandard: "USG: Tarama (US Preventive Task Force önerisi: 65-75 yaş erkek). BT Anjiyografi: Cerrahi planlama, rüptür değerlendirme, anatomik detay.",
        clinicalPearl: "AAA >5.5cm = Rüptür riski yüksek → elektif cerrahi. Crescent sign (intramural hematom) = İmpending rüptür → acil cerrahi.",
        references: ["Defined SVS clinical practice guidelines for AAA.", "ACR Appropriateness Criteria: Abdominal Aortic Aneurysm. American College of Radiology.", "Radiopaedia.org - Abdominal aortic aneurysm"]
    },
    {
        id: "mesenteric-panniculitis",
        name: "Mezenterik Pannikülit (Sklerozan Mezenterit)",
        nameEn: "Mesenteric Panniculitis (Sclerosing Mesenteritis)",
        category: "Mezenter",
        categoryEn: "Mesentery",
        mechanism: "Mezenterik yağ dokusunun kronik inflamasyonu → fibrozis ve nekroz. Spektrum: Mezenterik lipodistrofi (yağ nekrozu) → mezenterik pannikülit (inflamasyon) → sklerozan mezenterit/retraktil mezenterit (fibrozis).",
        keyPoints: ["Misty mesentery: Mezenterik yağ dansitesinde artış.", "Fat ring sign: Mezenterik damarlar etrafında korunmuş yağ halesi.", "Tümöral pseudokapsül: Yumuşak doku kapsülü.", "Genellikle insidental, ancak malignite dışlanmalı."],
        keyPointsEn: ["Misty mesentery: Increased mesenteric fat density.", "Fat ring sign: Preserved fat halo around mesenteric vessels.", "Tumoral pseudocapsule: Soft tissue capsule.", "Usually incidental, but malignancy should be excluded."],
        findings: {
            ct: { non_contrast: "Mezenterik yağ dansitesinde artış (misty mesentery). Mezenterik kök yerleşimli yumuşak doku kitlesi. Fat ring sign: Damarlar etrafında korunmuş yağ halesi. Tümöral psödokapsül.", contrast: "Hafif kontrastlanma gösteren psödokapsül. İnce septalar ve küçük lenf nodları." }
        },
        findingsEn: {
            ct: { non_contrast: "Increased mesenteric fat density (misty mesentery). Soft tissue mass at mesenteric root. Fat ring sign: Preserved fat halo around vessels. Tumoral pseudocapsule.", contrast: "Mildly enhancing pseudocapsule. Thin septa and small lymph nodes." }
        },
        etiology: "İdiopatik (en sık), abdominal cerrahi sonrası, otoimmün hastalıklar, malignite ilişkili (lenfoma, karsinoid), travma, enfeksiyon.",
        differentialDiagnosis: ["Lenfoma (Mezenterik lenfadenopati, sandwich sign, büyük nodlar)", "Karsinoid Tümör (Desmoplastik reaksiyon, mezenterik kitle, kalsifikasyon)", "Retraktil Mezenterit (Aynı spektrum, ama barsak obstrüksiyonu yapabilir)", "Peritoneal Karsinomatoz (Omental cake, asit, peritoneal nodüller)"],
        goldStandard: "BT: Misty mesentery + fat ring sign + pseudokapsül → tanı. Malignite dışlanmalı (özellikle lenfoma). Biyopsi sadece şüpheli vakalarda.",
        clinicalPearl: "Mezenterik yağda artmış dansite (misty mesentery) + damarlar etrafında korunmuş yağ (fat ring sign) + psödokapsül = Mezenterik pannikülit.",
        references: ["Defined approach in Daskalogiannaki et al. CT evaluation. AJR. 2000;174(2):427-431.", "Radiopaedia.org - Mesenteric panniculitis"]
    },
    {
        id: "rectal-carcinoma",
        name: "Rektal Karsinom",
        nameEn: "Rectal Carcinoma",
        category: "Neoplastik",
        categoryEn: "Neoplastic",
        mechanism: "Adenom-karsinom sekansı (APC → KRAS → TP53 mutasyonları). Rektal kanser evrelemesinde MRI kritik: mezorektal fasya (CRM), EMVI, T ve N evresi. Neoadjuvan kemoradyoterapi kararı MRI bulgularına dayanır.",
        keyPoints: ["MRI: Rektal kanser lokal evrelemesinde altın standart.", "CRM (Circumferential Resection Margin): Mezorektal fasya ile tümör arası mesafe (<1mm = pozitif CRM).", "EMVI (Extramural Vascular Invasion): Damar içinde tümöral sinyal.", "T3 alt sınıflandırma: T3a (<1mm), T3b (1-5mm), T3c (5-15mm), T3d (>15mm)."],
        keyPointsEn: ["MRI: Gold standard for local staging of rectal cancer.", "CRM (Circumferential Resection Margin): Distance between tumor and mesorectal fascia (<1mm = positive CRM).", "EMVI (Extramural Vascular Invasion): Tumoral signal within vessels.", "T3 substaging: T3a (<1mm), T3b (1-5mm), T3c (5-15mm), T3d (>15mm)."],
        findings: {
            ct: { contrast: "Rektal duvar kalınlaşması + luminal daralma. Perirektal yağ invazyonu. Bölgesel lenfadenopati. Karaciğer/akciğer metastaz taraması." },
            mri: { t2: "Tümör: T2 ara sinyal (mukozal katmanları bozar). Mezorektal fasya (T2 hipointens ince çizgi) ile tümör arası mesafe = CRM. Muscularis propria (T2 hipointens) invazyonu = T3.", dwi: "Difüzyon kısıtlılığı (tümör tespiti ve nüks değerlendirmesi). ADC değeri düşük.", t1_c: "Kontrastlanma (tedavi yanıtı değerlendirmesinde faydalı)." }
        },
        findingsEn: {
            ct: { contrast: "Rectal wall thickening + luminal narrowing. Perirectal fat invasion. Regional lymphadenopathy. Liver/lung metastasis screening." },
            mri: { t2: "Tumor: T2 intermediate signal (disrupts mucosal layers). Distance between mesorectal fascia (T2 hypointense thin line) and tumor = CRM. Muscularis propria (T2 hypointense) invasion = T3.", dwi: "Diffusion restriction (tumor detection and recurrence assessment). Low ADC value.", t1_c: "Enhancement (useful in treatment response assessment)." }
        },
        etiology: "Adenom-karsinom sekansı, FAP, Lynch sendromu (HNPCC), IBD (özellikle ülseratif kolit), yaş >50, Batı diyeti, sigara, alkol, obezite.",
        differentialDiagnosis: ["Rektal Polip (Benign, pediküllü veya sesil, kitle etkisi yok)", "Rektal GIST (Submukozal, düzgün sınırlı, egzofitik)", "Rektal Lenfoma (Yaygın duvar kalınlaşması, homojen)", "Rektal Endometriozis (Kadın, siklik semptomlar, anterior duvar)"],
        goldStandard: "MRI (yüksek çözünürlüklü T2): Lokal evreleme (T, N, CRM, EMVI). BT Toraks/Abdomen: Uzak metastaz. Kolonoskopi + biyopsi: Histolojik tanı.",
        clinicalPearl: "Rektal MRI'da CRM <1mm = Pozitif CRM → neoadjuvan kemoradyoterapi endike. EMVI pozitifliği kötü prognostik faktör.",
        references: ["ESGAR consensus for MRI staging of rectal cancer, 2013.", "Mercury Study Group. MRI in rectal cancer. Lancet. 2006;367(9512):789-797.", "ACR Appropriateness Criteria: Staging of Colorectal Cancer. American College of Radiology.", "Radiopaedia.org - Rectal carcinoma MRI staging"]
    },
    {
        id: "internal-hernia",
        name: "İnternal Herni",
        nameEn: "Internal Hernia",
        category: "Obstrüksiyon",
        categoryEn: "Obstruction",
        mechanism: "Barsak anslarının peritoneal veya mezenterik defektten geçmesi → kapalı lüp obstrüksiyon riski. Post-bariatrik cerrahi (Roux-en-Y gastrik bypass) sonrası en sık. Petersen herni, transmezokolik herni, jejunojejunal mesenterik defekt.",
        keyPoints: ["Post-bariatrik cerrahi sonrası en sık neden.", "BT: Mezenterik swirl sign (burgaçlanma) — anahtar bulgu.", "Kümelenmiş barsak ansları (clustered small bowel).", "Urgency: İskemi ve strangülasyon riski yüksek."],
        keyPointsEn: ["Most common cause after bariatric surgery.", "CT: Mesenteric swirl sign — key finding.", "Clustered small bowel loops.", "Urgency: High risk of ischemia and strangulation."],
        findings: {
            ct: { non_contrast: "Kümelenmiş barsak ansları (sol üst kadranda). Mezenterik swirl sign. Yer değiştirmiş barsak ansları.", contrast: "Duvar kontrastlanma kaybı (iskemi). Mezenterik vasküler congestion. SMA/SMV pozisyon anomalisi." }
        },
        findingsEn: {
            ct: { non_contrast: "Clustered small bowel loops (in left upper quadrant). Mesenteric swirl sign. Displaced bowel loops.", contrast: "Wall enhancement loss (ischemia). Mesenteric vascular congestion. SMA/SMV positional anomaly." }
        },
        etiology: "Post-bariatrik cerrahi (Roux-en-Y, %1-9), konjenital peritoneal defektler (paraduodenal, foramen Winslow, transmezokolik), post-cerrahi adhezyon defektleri.",
        differentialDiagnosis: ["Adhezyonal Obstrüksiyon (Cerrahi öyküsü, geçiş noktası, swirl sign yok)", "Volvulus (Sigmoid/çekal, coffee bean, belirgin dilatasyon)", "Closed-loop Obstrüksiyon (C veya U şeklinde dilate barsak, radial dağılım)", "Mezenterik İskemi (Vasküler oklüzyon, paper-thin wall)"],
        goldStandard: "Kontrastlı BT: Swirl sign + kümelenmiş barsak + geçiş noktası. Klinik korelasyon: bariatrik cerrahi öyküsü. Cerrahi: Kesin tanı ve tedavi.",
        clinicalPearl: "Bariatrik cerrahi öyküsü olan hastada akut karın + BT'de swirl sign + kümelenmiş barsak = İnternal herni → acil cerrahi.",
        references: ["Defined approach in Lockhart et al. Internal hernia after gastric bypass. Radiology. 2007;242(3):824-831.", "Radiopaedia.org - Internal hernia"]
    },
    {
        id: "mesenteric-ischemia",
        name: "Mezenterik İskemi (Akut)",
        nameEn: "Acute Mesenteric Ischemia",
        category: "Vasküler",
        categoryEn: "Vascular",
        mechanism: "SMA oklüzyonu (embolik %50, trombotik %25) veya non-oklüzif mezenterik iskemi (NOMI %20) → barsak duvarı iskemisi → nekroz ve perforasyon. Mortalite yüksek (%60-80). 'Time is bowel' — erken tanı kritik.",
        keyPoints: ["SMA'da embolus veya trombüs (BT anjiyografi).", "Barsak duvar kalınlaşması veya paper-thin wall (ileri evre).", "Pnömatozis intestinalis + portal venöz gaz = İleri iskemi/nekroz.", "Ağrı-muayene uyumsuzluğu: Şiddetli ağrı, minimal karın bulgusu ('pain out of proportion')."],
        keyPointsEn: ["SMA embolus or thrombus (CT angiography).", "Bowel wall thickening or paper-thin wall (advanced stage).", "Pneumatosis intestinalis + portal venous gas = Advanced ischemia/necrosis.", "Pain-exam discordance: Severe pain, minimal abdominal findings ('pain out of proportion')."],
        findings: {
            ct: { non_contrast: "Barsak duvarında hipodens veya hiperattenüe alan (kanama). Pnömatozis intestinalis (duvar içi gaz). Portal venöz gaz (ominöz bulgu).", contrast: "SMA'da dolum defekti (embolus/trombüs). Barsak duvarında kontrastlanma kaybı (non-viable). Hiperkontrastlanma (reperfüzyon). Mezenterik yağ çizgilenmesi. Serbest sıvı." }
        },
        findingsEn: {
            ct: { non_contrast: "Bowel wall hypodense or hyperattenuating area (hemorrhage). Pneumatosis intestinalis (intramural gas). Portal venous gas (ominous finding).", contrast: "SMA filling defect (embolus/thrombus). Bowel wall non-enhancement (non-viable). Hyperenhancement (reperfusion). Mesenteric fat stranding. Free fluid." }
        },
        etiology: "Embolik (AF, endokardit, aort aterom %50), trombotik (ateroskleroz %25), NOMI (düşük kardiyak output, vazopresörler %20), venöz tromboz (portal/SMV %5).",
        differentialDiagnosis: ["Mekanik Barsak Obstrüksiyonu (Geçiş noktası, dilatasyon-dekompresyon)", "İBH (Kronik, duvar kalınlaşması, skip lezyon/sürekli tutulum)", "Enfeksiyöz Enterokolit (Ateş, ishal, diffüz duvar kalınlaşması)", "Pankreatit (Peripankreatik inflamasyon, amilaz yüksek)"],
        goldStandard: "BT Anjiyografi: SMA oklüzyonu + barsak duvarı değişiklikleri. DSA: Endovasküler tedavi için. Cerrahi eksplorasyon: İleri evre.",
        clinicalPearl: "AF + akut şiddetli karın ağrısı + minimal muayene bulgusu = Akut mezenterik iskemi düşün → acil BT anjiyografi.",
        references: ["Defined ACR Appropriateness Criteria for acute abdominal pain.", "Defined AGA guidelines for mesenteric ischemia.", "Radiopaedia.org - Acute mesenteric ischemia"]
    },
    {
        id: "cecal-volvulus",
        name: "Çekal Volvulus",
        nameEn: "Cecal Volvulus",
        category: "Obstrüksiyon",
        categoryEn: "Obstruction",
        mechanism: "Çekum ve terminal ileumun mezenterik aks etrafında torsiyonu → kapalı loop obstrüksiyon. Mobil çekum (yetersiz retroperitoneal fiksasyon) predispozan. Saat yönünde veya ters yöne rotasyon. İskemi ve perforasyon riski yüksek.",
        keyPoints: ["Sağ alt kadrandan sol üst kadrana yer değiştirmiş dilate çekum.", "'Coffee bean' (kahve çekirdeği) bulgusu sağ tarafta.", "Kapalı loop obstrüksiyon → iskemi riski yüksek → acil cerrahi.", "Sigmoid volvulustan farklı: Daha genç, daha nadir, daha acil."],
        keyPointsEn: ["Dilated cecum displaced from RLQ to LUQ.", "'Coffee bean' sign on right side.", "Closed loop obstruction → high ischemia risk → emergency surgery.", "Unlike sigmoid volvulus: Younger, rarer, more urgent."],
        findings: {
            ct: { non_contrast: "Dilate çekum (>9 cm, perforasyon riski). Sol üst kadrana yer değiştirmiş çekum. 'Whirl sign': Mezenterik vasküler pediküllerin döndüğü nokta.", contrast: "Barsak duvarı kontrastlanma kaybı (iskemi). Mezenterik whirl. Geçiş noktası (transition point)." }
        },
        findingsEn: {
            ct: { non_contrast: "Dilated cecum (>9 cm, perforation risk). Cecum displaced to LUQ. 'Whirl sign': Point of mesenteric vascular pedicle rotation.", contrast: "Loss of bowel wall enhancement (ischemia). Mesenteric whirl. Transition point." }
        },
        etiology: "Mobil çekum (yetersiz retroperitoneal fiksasyon). Genç/orta yaş. Önceki cerrahi, adezyonlar.",
        differentialDiagnosis: ["Sigmoid volvulus (yaşlı, sol taraf, rektosigmoid birleşim)", "İnce barsak obstrüksiyonu (multipl dilate anslar)", "Çekal baskül (anteroposterior katlanma, volvulus değil)"],
        goldStandard: "BT: Whirl sign + dilate yer değiştirmiş çekum + geçiş noktası.",
        clinicalPearl: "Sol üst kadrana yer değiştirmiş dilate çekum + whirl sign = Çekal volvulus. Sigmoid volvulusun aksine endoskopik redüksiyon genellikle başarısız → cerrahi gerekir.",
        references: ["Defined approach in Defined Defined. Radiographics approach to cecal volvulus.", "Radiopaedia.org - Cecal volvulus"]
    },
    {
        id: "small-bowel-lymphoma",
        name: "İnce Barsak Lenfoması",
        nameEn: "Small Bowel Lymphoma",
        category: "Neoplastik",
        categoryEn: "Neoplastic",
        mechanism: "Non-Hodgkin lenfomanın GIS tutulumu → ince barsak en sık ekstra-nodal GIS tutulum yeri. MALT lenfoma, diffüz büyük B hücreli lenfoma veya T-hücreli lenfoma (çölyak ilişkili). Submukozal büyüme → aneverizmal dilatasyon (obstrüksiyon nadir). Mezenterik LAP belirgin.",
        keyPoints: ["Aneverizmal dilatasyon PATOGNOMONİK (obstrüksiyon yerine genişleme).", "İleum en sık tutulum yeri (Peyer plakları).", "Sandwich sign: Mezenterik LAP damarları sarar.", "Obstrüksiyon nadir (submukozal büyüme, peristaltiz korunur)."],
        keyPointsEn: ["Aneurysmal dilation PATHOGNOMONIC (expansion instead of obstruction).", "Ileum most common site (Peyer patches).", "Sandwich sign: Mesenteric LAP encases vessels.", "Obstruction rare (submucosal growth, peristalsis preserved)."],
        findings: {
            ct: { contrast: "Segmenter veya diffüz barsak duvar kalınlaşması. Aneverizmal dilatasyon (lümen genişlemesi). Homojen, hafif kontrastlanma. 'Sandwich sign': Mezenterik LAP mezenterik damarları sarar. Kavitasyon/ülserasyon alanları." }
        },
        findingsEn: {
            ct: { contrast: "Segmental or diffuse bowel wall thickening. Aneurysmal dilation (luminal expansion). Homogeneous, mild enhancement. 'Sandwich sign': Mesenteric LAP encases mesenteric vessels. Cavitation/ulceration areas." }
        },
        etiology: "NHL > HL. MALT lenfoma (H. pylori ilişkili mide), DLBCL, Burkitt, T-hücreli (çölyak ilişkili). İmmünsupresyon ve çölyak hastalığı risk faktörleri.",
        differentialDiagnosis: ["Crohn hastalığı (skip lezyonlar, fistül, abse)", "Adenokarsinom (apple-core, obstrüksiyon)", "GIST (ekzofitik, nekroz)", "Karsinoid tümör (hipervasküler, desmoplastik reaksiyon)"],
        goldStandard: "BT + Endoskopik biyopsi. PET-BT evreleme için. Histopatoloji: Lenfoma alt tip sınıflaması.",
        clinicalPearl: "İnce barsakta duvar kalınlaşması + aneverizmal dilatasyon (obstrüksiyon YOK) + sandwich sign = Lenfoma. Adenokarsinomdan farklı olarak obstrüksiyon yapmaz.",
        references: ["Defined approach in Defined GI lymphoma. Defined Radiographics.", "Radiopaedia.org - Small bowel lymphoma"]
    },
    {
        id: "retroperitoneal-fibrosis",
        name: "Retroperitoneal Fibrozis (Ormond Hastalığı)",
        nameEn: "Retroperitoneal Fibrosis (Ormond Disease)",
        category: "İnflamatuvar",
        categoryEn: "Inflammatory",
        mechanism: "Retroperitoneal alanda fibröz doku proliferasyonu → aorta ve iliak arterler çevresinde plak benzeri kitle → üreter kompresyonu → bilateral hidronefroz. İdiyopatik (%70) veya sekonder (ilaç, malignite, enfeksiyon). IgG4 ilişkili hastalık spektrumunda olabilir.",
        keyPoints: ["Periortik/peri-iliak fibröz plak + bilateral hidronefroz = RPF.", "Üreterler mediale çekilir (normal laterale seyreder).", "IgG4 ilişkili hastalık olabilir → serum IgG4 kontrol et.", "Malign RPF'yi dışla: Lenfoma, metastaz desmoplastik reaksiyon."],
        keyPointsEn: ["Periaortic/peri-iliac fibrous plaque + bilateral hydronephrosis = RPF.", "Ureters pulled medially (normally course laterally).", "May be IgG4-related disease → check serum IgG4.", "Rule out malignant RPF: Lymphoma, metastatic desmoplastic reaction."],
        findings: {
            ct: { non_contrast: "Aorta ve iliak arterler çevresinde düzensiz sınırlı yumuşak doku kitlesi. Bilateral hidronefroz. Üreterlerin mediale deviyasyonu.", contrast: "Erken evrede kontrastlanma (aktif inflamasyon). Geç/fibrotik evrede kontrastlanma azalır. Periortik yerleşim: Anterior ve lateral (posterior korunur — aortik anevrizmadan ayırıcı)." }
        },
        findingsEn: {
            ct: { non_contrast: "Irregular soft tissue mass around aorta and iliac arteries. Bilateral hydronephrosis. Medial deviation of ureters.", contrast: "Enhancement in early stage (active inflammation). Enhancement decreases in late/fibrotic stage. Periaortic location: Anterior and lateral (posterior spared — differentiates from aortic aneurysm)." }
        },
        etiology: "İdiyopatik (%70). Sekonder: İlaç (metiserjid, ergotamin), malignite, enfeksiyon, radyasyon, cerrahi, abdominal aort anevrizması. IgG4 ilişkili olabilir.",
        differentialDiagnosis: ["Lenfoma (LAP, asimetrik, organ tutulumu)", "Periortik lenfadenopati (ayrık nodüller)", "Aortik anevrizma sızıntısı (akut, hematom)", "Erdheim-Chester hastalığı (kemik tutulumu)"],
        goldStandard: "BT/MRI + Biyopsi (maligniteyi dışlamak için). Serum IgG4. Erken evrede steroid yanıtı.",
        clinicalPearl: "Bilateral hidronefroz + periortik yumuşak doku + üreterlerin mediale çekilmesi = RPF. Aktif evrede steroid tedavisine dramatik yanıt verir.",
        references: ["Defined approach in Defined. Lancet RPF review.", "Radiopaedia.org - Retroperitoneal fibrosis"]
    },
    {
        id: "superior-mesenteric-artery-syndrome",
        name: "SMA Sendromu (Wilkie Sendromu)",
        nameEn: "Superior Mesenteric Artery Syndrome (Wilkie Syndrome)",
        category: "Vasküler/Mekanik",
        categoryEn: "Vascular/Mechanical",
        mechanism: "SMA ile aorta arasındaki açının daralması (<22°) → duodenumun 3. kısmının kompresyonu → proksimal duodenal ve gastrik dilatasyon. Normal aortomezenterik açı 38-56°, mesafe 10-28mm. Kilo kaybı → retroperitoneal yağ azalması → açı daralması.",
        keyPoints: ["Aortomezenterik açı <22° ve mesafe <8mm tanısal.", "Duodenum 3. kısım kompresyonu → proksimal dilatasyon.", "Kilo kaybı, uzun süreli yatak istirahati, skolyoz cerrahisi risk faktörleri.", "Nutcracker sendromunun eşlik edebilir (sol renal ven de sıkışır)."],
        keyPointsEn: ["Aortomesenteric angle <22° and distance <8mm diagnostic.", "3rd part of duodenum compression → proximal dilation.", "Weight loss, prolonged bed rest, scoliosis surgery risk factors.", "Nutcracker syndrome may coexist (left renal vein also compressed)."],
        findings: {
            ct: { contrast: "Duodenum 3. kısmında SMA-aorta arasında kompresyon (geçiş noktası). Proksimal duodenal ve gastrik dilatasyon. Aortomezenterik açı <22°. Aortomezenterik mesafe <8mm. Retroperitoneal yağ azlığı." }
        },
        findingsEn: {
            ct: { contrast: "Compression of 3rd part of duodenum between SMA-aorta (transition point). Proximal duodenal and gastric dilation. Aortomesenteric angle <22°. Aortomesenteric distance <8mm. Decreased retroperitoneal fat." }
        },
        etiology: "Kilo kaybı (anoreksia nervoza, kronik hastalık), uzun süreli yatak istirahati, skolyoz cerrahisi (vertebral uzama), yanık, travma.",
        differentialDiagnosis: ["Duodenal web/atrezi (konjenital, yenidoğan)", "Annüler pankreas (duodenum 2. kısım darlık)", "Duodenal tümör (fokal kitle)", "SMA trombozu (vasküler dolum defekti)"],
        goldStandard: "BT: Aortomezenterik açı (<22°) ve mesafe (<8mm) + duodenum 3. kısım kompresyonu + proksimal dilatasyon.",
        clinicalPearl: "Zayıf genç kadın + postprandiyal kusma + BT'de aortomezenterik açı <22° + dilate proksimal duodenum = SMA sendromu. Nutcracker sendromu da eşlik edebilir.",
        references: ["Defined Defined. SMA syndrome review. J Gastrointest Surg.", "Radiopaedia.org - Superior mesenteric artery syndrome"]
    },
    {
        id: "gallbladder-carcinoma",
        name: "Safra Kesesi Karsinomu",
        nameEn: "Gallbladder Carcinoma",
        category: "Neoplastik",
        categoryEn: "Neoplastic",
        mechanism: "Safra kesesi mukozasının malign transformasyonu. En sık adenokarsinom (%90). Kronik kolelitiyazis → kronik inflamasyon → displazi → karsinom sekansı. 'Porselen safra kesesi' (duvar kalsifikasyonu) premalign kabul edilir. Erken evrede insidental, ileri evrede karaciğere direkt invazyon.",
        keyPoints: ["Safra kesesi fodusu en sık tutulum yeri.", "Porselen safra kesesi → malignite riski artmış.", "Karaciğer yatağına direkt invazyon erken ve sık.", "Safra taşı + fokal duvar kalınlaşması + kontrastlanma = Karsinom şüphesi."],
        keyPointsEn: ["Gallbladder fundus most common site.", "Porcelain gallbladder → increased malignancy risk.", "Direct invasion to liver bed early and frequent.", "Gallstone + focal wall thickening + enhancement = Carcinoma suspicion."],
        findings: {
            ct: { non_contrast: "Fokal veya diffüz safra kesesi duvar kalınlaşması. İntraluminal polipoid kitle (>10mm). Porselen safra kesesi (duvar kalsifikasyonu).", contrast: "Kontrastlanan safra kesesi kitlesi. Karaciğer yatağına invazyon (en sık). Hepatoduodenal ligaman LAP. Safra yolu dilatasyonu (obstrüksiyon)." },
            usg: { description: "Fokal duvar kalınlaşması veya intraluminal kitle. Safra taşı eşliğinde sık. Doppler: Kitlede vaskülarite. Karaciğer invazyonu görülebilir." }
        },
        findingsEn: {
            ct: { non_contrast: "Focal or diffuse gallbladder wall thickening. Intraluminal polypoid mass (>10mm). Porcelain gallbladder (wall calcification).", contrast: "Enhancing gallbladder mass. Invasion to liver bed (most common). Hepatoduodenal ligament LAP. Biliary dilation (obstruction)." },
            usg: { description: "Focal wall thickening or intraluminal mass. Frequently associated with gallstones. Doppler: Vascularity in mass. Liver invasion may be visible." }
        },
        etiology: "Kronik kolelitiyazis (en önemli risk), porselen safra kesesi, safra kesesi polipleri (>10mm), primer sklerozan kolanjit, Salmonella taşıyıcılığı.",
        differentialDiagnosis: ["Akut kolesistit (diffüz duvar kalınlaşması, klinik akut)", "Adenomyomatozis (Rokitansky-Aschoff sinüsleri, comet-tail artefaktı)", "Safra kesesi polipleri (<10mm genellikle benign)", "Metastaz (melanom, RCC en sık metastaz yapar)"],
        goldStandard: "BT + USG + Histopatoloji. Evreleme: BT/MRI (karaciğer invazyonu, LAP, peritoneal yayılım).",
        clinicalPearl: "Yaşlı kadın + safra taşı + fokal duvar kalınlaşması + karaciğer invazyonu = Safra kesesi karsinomu. İnsidental kolesistektomide %1-2 karsinom saptanır.",
        references: ["Defined approach in Defined. Radiographics gallbladder carcinoma.", "Radiopaedia.org - Gallbladder carcinoma"]
    },
    {
        id: "typhlitis",
        name: "Tiflitis (Nötropenik Enterokolit)",
        nameEn: "Typhlitis (Neutropenic Enterocolitis)",
        category: "İnflamatuvar/Enfeksiyöz",
        categoryEn: "Inflammatory/Infectious",
        mechanism: "Nötropenik hastada (kemoterapi, lösemi) çekum ve sağ kolon mukozasının nekrotizan enflamasyonu. Nötropeni → mukozal bütünlük bozulması → bakteriyel translokasyon → transmural inflamasyon → nekroz ve perforasyon riski.",
        keyPoints: ["Nötropenik hasta + çekal duvar kalınlaşması = Tiflitis.", "Çekum en sık (terminoloji: typhlitis = çekum). İleum ve appendiks de tutulabilir.", "Pnömatozis ve perforasyon ominöz bulgular.", "ANC <500/mm³ + ateş + sağ alt kadran ağrısı = Klinik triad."],
        keyPointsEn: ["Neutropenic patient + cecal wall thickening = Typhlitis.", "Cecum most common (terminology: typhlitis = cecum). Ileum and appendix may also be involved.", "Pneumatosis and perforation are ominous findings.", "ANC <500/mm³ + fever + RLQ pain = Clinical triad."],
        findings: {
            ct: { non_contrast: "Çekal duvar kalınlaşması (>4mm, sıklıkla >10mm). Periçekal yağ çizgilenmesi.", contrast: "Çekal duvar ödemi (target sign: mukoza kontrastlanır, submukoza ödemli). Periçekal sıvı ve stranding. Pnömatozis intestinalis (ileri evre). Serbest sıvı." }
        },
        findingsEn: {
            ct: { non_contrast: "Cecal wall thickening (>4mm, often >10mm). Pericecal fat stranding.", contrast: "Cecal wall edema (target sign: mucosa enhances, submucosa edematous). Pericecal fluid and stranding. Pneumatosis intestinalis (advanced). Free fluid." }
        },
        etiology: "Kemoterapi indüklü nötropeni (en sık), lösemi, aplastik anemi, AIDS, organ transplantasyonu.",
        differentialDiagnosis: ["Akut apandisit (apandiks dilate, fekalit)", "Psödomembranöz kolit (C. diff, diffüz kolon tutulumu)", "Crohn hastalığı (kronik, skip lezyonlar)", "Çekal divertikülit (divertikül, sağ kolon)"],
        goldStandard: "BT: Nötropenik hastada çekal duvar kalınlaşması + periçekal inflamasyon.",
        clinicalPearl: "Kemoterapi alan + ANC <500 + sağ alt kadran ağrısı + BT'de çekal duvar kalınlaşması = Tiflitis. Apandisitten ayırmak önemli — cerrahi mortalitesi yüksek.",
        references: ["Defined approach in Defined. Radiographic features of typhlitis.", "Radiopaedia.org - Typhlitis"]
    },
    {
        id: "duodenal-diverticulum",
        name: "Duodenal Divertikül",
        nameEn: "Duodenal Diverticulum",
        category: "Konjenital/Anatomik Varyant",
        categoryEn: "Congenital/Anatomic Variant",
        mechanism: "Duodenum 2. kısmında (perivaterian bölge) mukozal ve submukozal katmanların herniasyonu → yalancı (psödo) divertikül. En sık insidental. Lemmel sendromu: Periampüller divertikülün safra yolunu bası ile obstrükte etmesi → biliyer dilatasyon (taşsız).",
        keyPoints: ["Duodenum 2. kısım medial duvarında en sık (perivaterian).", "Genellikle asemptomatik, insidental bulgu.", "Lemmel sendromu: Divertikül → safra yolu obstrüksiyonu (taşsız).", "Komplikasyonlar nadir: Kanama, perforasyon, divertikülit."],
        keyPointsEn: ["Most common at medial wall of 2nd part of duodenum (perivaterian).", "Usually asymptomatic, incidental finding.", "Lemmel syndrome: Diverticulum → biliary obstruction (stoneless).", "Complications rare: Bleeding, perforation, diverticulitis."],
        findings: {
            ct: { contrast: "Duodenum 2. kısım medialinde hava/sıvı dolu kistik yapı. İnce duvar. Oral kontrast ile dolabilir. Pankreasbaşı ile komşu (psödokist ile karışabilir). Lemmel sendromu: Biliyer dilatasyon + periampüller divertikül + taş yok." }
        },
        findingsEn: {
            ct: { contrast: "Air/fluid-filled cystic structure at medial aspect of 2nd part of duodenum. Thin wall. May fill with oral contrast. Adjacent to pancreatic head (may be confused with pseudocyst). Lemmel syndrome: Biliary dilation + periampullary diverticulum + no stone." }
        },
        etiology: "Mukozal herniasyon (pulsion divertikül). Yaşla insidans artar. Perivaterian yerleşim (damar ve kanal giriş noktası zayıf alan).",
        differentialDiagnosis: ["Pankreatik psödokist (pankreatit öyküsü, duvar kalın)", "Duodenal duplikasyon kisti (genç, paylaşılan muskularis)", "Koledokosel (safra yolunun duodenum içine protrüzyonu)", "Periampüller tümör (solid, kontrastlanan)"],
        goldStandard: "BT: Duodenum 2. kısımda ince duvarlı hava/sıvı dolu outpouching. Oral kontrast ile dolması doğrular.",
        clinicalPearl: "Pankreasbaşı komşuluğunda kistik lezyon = Psödokist mi, duodenal divertikül mü? Oral kontrast doluyorsa divertikül. Taşsız biliyer dilatasyon varsa Lemmel sendromu düşün.",
        references: ["Defined approach in Defined. Duodenal diverticulum review.", "Radiopaedia.org - Duodenal diverticulum"]
    }
];
