import { Pathology } from "@/types";

export const gynecologyPathologies: Pathology[] = [
    {
        id: "uterine-leiomyoma",
        name: "Uterin Leiomyom (Miyom)",
        nameEn: "Uterine Leiomyoma (Fibroid)",
        category: "Uterus",
        categoryEn: "Uterus",
        keyPoints: ["En sık görülen benign uterin tümördür.", "T2 ağırlıklı serilerde tipik olarak hipointens (karanlık) görülür.", "Dejenerasyon (kistik, hyalin, kırmızı) görünümü değiştirebilir."],
        keyPointsEn: ["Most common benign uterine tumor.", "Typically hypointense (dark) on T2-weighted sequences.", "Degeneration (cystic, hyaline, red) can alter appearance."],
        gallery: [
            { "url": "/images/gyn/fibroid_mri.png", "caption": "MRI T2 - Uterin Miyom (Hipointens)", "modality": "MRI" }
        ],
        findings: {
            usg: {
                description: "Hipokoik, heterojen miyometrial kitle. Akustik gölgelenme (kalsifikasyona bağlı). Çevresel 'venetian blind' (jaluzi) gölgelenmesi."
            },
            mri: {
                t2: "Miyometriumdan daha hipointens, keskin sınırlı kitle. Yüksek sellülarite veya ödem varsa hiperintens olabilir.",
                t1_c: "Değişken kontrastlanma. Genellikle miyometriumdan daha az kontrast tutar ancak gecikmiş fazda tutulum artar.",
                other_sequences: "Kistik dejenerasyon: T2 hiperintens (sıvı). Kırmızı (karneöz) dejenerasyon: T1 hiperintens (kanama)."
            }
        },
        findingsEn: {
            usg: {
                description: "Hypoechoic, heterogeneous myometrial mass. Acoustic shadowing (due to calcification). Peripheral 'venetian blind' shadowing."
            },
            mri: {
                t2: "Hypointense relative to myometrium, well-defined mass. Can be hyperintense if high cellularity or edema present.",
                t1_c: "Variable enhancement. Usually enhances less than myometrium but increases in delayed phase.",
                other_sequences: "Cystic degeneration: T2 hyperintense (fluid). Red (carneous) degeneration: T1 hyperintense (hemorrhage)."
            }
        },
        etiology: "Östrojen bağımlı düz kas hücre proliferasyonu. Reprodüktif çağda en sık görülür; menopoz sonrası küçülür.",
        differentialDiagnosis: [
            "Adenomiyozis (Diffüz miyometriyal kalınlaşma, sınırları belirsiz, JZ >12mm)",
            "Endometrial Polip (Fokal endometriyal kalınlaşma, ince saplı, kavite içi)",
            "Uterus Sarkomu (Hızlı büyüme, postmenopozal, T2'de heterojen yüksek sinyal)",
            "Adenomiyom (Adenomiyozisin fokal formu, miyomdan daha belirsiz sınırlı)"
        ],
        goldStandard: "MRI: T2 ağırlıklı sekanslarda hipointens kitle — leiomyom için en iyi karakterizasyon yöntemi.",
        clinicalPearl: "T2'de hipointens = fibrotik doku = leiomyom. Hiperintens ise dejenerasyon veya sellüler miyom düşün.",
        mechanism: "Düz kas hücrelerinin klonal proliferasyonu → miyom oluşumu. Östrojen bağımlı büyüme: Premenopozal dönemde büyür, menopozdan sonra küçülür. MRI T2 hipointensitesi: Yoğun düz kas hücresi demetleri ve fibröz stroma → serbest su protonları az. Dejenerasyon türleri: Hyalin (%60, en sık), kistik, kırmızı (gebelikte trofoblastik kanamaya bağlı), müsinöz, kalsifik.",
        references: [
            "Defined Defined Defined Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: Uterine Leiomyomata. American College of Radiology.",
            "FIGO classification of causes of abnormal uterine bleeding. International Journal of Gynecology & Obstetrics. 2011;113(1):3-13.",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "adenomyosis",
        name: "Adenomyozis",
        nameEn: "Adenomyosis",
        category: "Uterus",
        categoryEn: "Uterus",
        keyPoints: ["Endometrial dokunun miyometrium içine invazyonudur.", "Junction zone (JZ) kalınlaşması (>12mm) en önemli MR bulgusudur.", "Miyomun aksine sınırları belirsizdir."],
        keyPointsEn: ["Invasion of endometrial tissue into the myometrium.", "Junction zone (JZ) thickening (>12mm) is the most important MRI finding.", "Ill-defined margins, unlike fibroids."],
        findings: {
            usg: {
                description: "Uterusta asimetrik kalınlaşma/büyüme. Miyometriumda heterojenite ('yağmur altında Venedik' görünümü). Küçük miyometrial kistler."
            },
            mri: {
                t2: "Junction zone (JZ) kalınlaşması (>12mm). Miyometrium içinde küçük T2 hiperintens odaklar (ektopik endometrium/kist).",
                t1: "Kistik odaklarda kanama varsa T1 hiperintens olabilir."
            }
        },
        findingsEn: {
            usg: {
                description: "Asymmetric thickening/enlargement of uterus. Heterogeneity in myometrium ('Venetian blind' appearance). Small myometrial cysts."
            },
            mri: {
                t2: "Junction zone (JZ) thickening (>12mm). Small T2 hyperintense foci within myometrium (ectopic endometrium/cysts).",
                t1: "May be T1 hyperintense if hemorrhage present in cystic foci."
            }
        },
        etiology: "Endometrial bazal tabakanın miyometriuma doğru invazyonu. Multiparitenin, uterin cerrahinin ve kronik östrojen maruziyetinin rolü vardır.",
        differentialDiagnosis: [
            "Uterin Leiomyom (Keskin sınırlı, T2 hipointens, miyometriumdan ayrı kitle)",
            "Endometrial Karsinom (Endometriyal kavitede kitle, DWI kısıtlanması, JZ'yi bozar)",
            "Miyometrial Kontraksiyon (Geçici, tekrarlayan MRI'da kaybolur, JZ kalınlaşması yok)",
            "Adenomiyom (Fokal adenomiyozis formu, sınırları belirsiz miyometrial kitle)"
        ],
        goldStandard: "MRI: T2 ağırlıklı sekanslarda JZ kalınlığı >12mm ölçümü — adenomiyozis için altın standart.",
        clinicalPearl: "JZ >12mm = adenomiyozis. Miyom keskin sınırlıdır, adenomiyozisin sınırları belirsizdir — bu ayrım en kritik noktadır.",
        mechanism: "Endometrial bazal tabaka hücrelerinin miyometriuma doğru invaze olması → ektopik endometrial bezler ve stroma miyometrium içinde. İki hipotez: (1) Endometrial bazal tabakanın doğrudan invazyonu; (2) endometriyal kök hücre göçü. Ektopik endometrial doku her menstrüel siklustan etkilenir → lokal hemoraji → adenomyotik nodül/küçük kistler. Junction zone kalınlığı >12mm → tanısal MRI bulgusu.",
        references: [
            "Defined Defined Defined Defined Defined Defined Defined",
            "Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: Abnormal Uterine Bleeding. American College of Radiology."
        ]
    },
    {
        id: "endometrioma",
        name: "Endometrioma (Çikolata Kisti)",
        nameEn: "Endometrioma (Chocolate Cyst)",
        category: "Ovary",
        categoryEn: "Ovary",
        keyPoints: ["'T1 shading' (T2'de sinyal kaybı) kesin tanı koydurucudur.", "İçeriği kan ürünleri (methemoglobin) nedeniyle T1 parlaktır.", "Tümör belirteçleri (Ca-125) yükselebilir."],
        keyPointsEn: ["'T1 shading' (signal loss on T2) is diagnostic.", "T1 bright due to blood products (methemoglobin).", "Tumor markers (Ca-125) may be elevated."],
        gallery: [
            { "url": "/images/gyn/endometrioma_mri.png", "caption": "MRI T1 - Endometrioma (Parlak Kist)", "modality": "MRI" }
        ],
        findings: {
            usg: {
                description: "Diffüz düşük seviyeli internal ekolar (buzlu cam / ground glass). Kalın duvarlı kistik yapı. Mural nodül varsa malignite ekarte edilmeli."
            },
            mri: {
                t1: "Belirgin hiperintens (Parlak). Yağ baskılamada sinyal KAYBOLMAZ (Dermoidden farkı).",
                t2: "'Shading sign': T1'de parlak olan lezyonun, artan demir konsantrasyonu nedeniyle T2'de giderek koyulaşması.",
                t1_c: "Duvar kontrastlanır, içerik kontrastlanmaz. Solid nodül varsa Clear Cell Ca riski!"
            }
        },
        findingsEn: {
            usg: {
                description: "Diffuse low-level internal echoes (ground glass). Thick-walled cystic structure. Exclude malignancy if mural nodule is present."
            },
            mri: {
                t1: "Markedly hyperintense (Bright). Signal does NOT suppress on fat-sat (Distinction from Dermoid).",
                t2: "'Shading sign': Lesion bright on T1 becomes progressively darker on T2 due to increased iron concentration.",
                t1_c: "Wall enhances, content does not. Clear Cell Ca risk if solid nodule present!"
            }
        },
        etiology: "Retrograd menstrüasyon sonucu ektopik endometrial dokunun over yüzeyine implantasyonu. Endometriozisle doğrudan ilişkilidir.",
        differentialDiagnosis: [
            "Dermoid Kist (T1 parlak ancak fat-sat'ta baskılanır, endometriomada baskılanmaz)",
            "Hemorajik Kist (T1 parlak, ancak shading sign yok, spontan rezolüsyon gösterir)",
            "Over Karsinomu (Solid komponent ve kontrastlanma belirgin, DWI kısıtlanması)",
            "Müsinöz Kistadenoma (Multiloküler, T1'de değişken sinyal, shading yok)"
        ],
        goldStandard: "MRI: T1 hiperintens + fat-sat'ta baskılanmayan sinyal + T2 shading sign — endometrioma için altın standart tanı triadı.",
        clinicalPearl: "T1 parlak + fat-sat'ta baskılanmıyor = kan ürünü (endometrioma). T1 parlak + fat-sat'ta baskılanıyor = yağ (dermoid). Bu ayrım sınav klasiğidir.",
        mechanism: "Retrograd menstrüasyon → ektopik endometrial dokunun over yüzeyine implante olması → over korteksine invazyon → tekrarlayan siklik kanama → eski kan ürünleri (methemoglobin, hemosiderin) birikimi. Methemoglobin (T1 parlak), artmış demir konsantrasyonu (T2 shading = giderek kararan sinyal). Dermoid kistlerde yağ baskılanır; endometriomada kan ürünleri yağ baskılamaya yanıt vermez (ayrım bu şekilde yapılır).",
        references: [
            "O-RADS: ACR O-RADS MRI Risk Stratification System. American College of Radiology; 2020.",
            "Defined Defined Defined Defined Defined Defined Defined",
            "Defined Defined Defined Defined Defined Defined",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "ovarian-dermoid",
        name: "Over Dermoid Kisti (Matür Kistik Teratom)",
        nameEn: "Ovarian Dermoid Cyst (Mature Cystic Teratoma)",
        category: "Ovary",
        categoryEn: "Ovary",
        keyPoints: ["Genç kadınlarda en sık ovarian neoplazmdır.", "Yağ içeriği (sebum) tanı koydurucudur: MR'da yağ baskılamada kararır.", "Rokitansky nodülü (dermoid plug) görülebilir."],
        keyPointsEn: ["Most common ovarian neoplasm in young women.", "Fat content (sebum) is diagnostic: Darkens on fat-sat MRI.", "Rokitansky nodule (dermoid plug) may be seen."],
        findings: {
            usg: {
                description: "Hiperekoik solid komponent (Rokitansky nodülü). 'Tip of the iceberg' bulgusu (Posterior gölgeleme nedeniyle kistin arkası görülmez). Dermoid mesh (kıl demetleri)."
            },
            mri: {
                t1: "Çok parlak (Yağ içeriği).",
                t2: "Değişken. Yağ-sıvı seviyesi görülebilir.",
                other_sequences: "Fat-Sat (Yağ Baskılama): T1'de parlak olan alan BASKILANIR (Siyahlaşır). Bu bulgu endometriomadan (baskılanmaz) ayırır."
            },
            ct: {
                contrast: "Yağ dansitesi (-20 ila -100 HU) içeren kistik kitle. Diş/Kemik (kalsifikasyon) içerebilir."
            }
        },
        findingsEn: {
            usg: {
                description: "Hyperechoic solid component (Rokitansky nodule). 'Tip of the iceberg' sign (Posterior shadowing obscures back of cyst). Dermoid mesh (hair bundles)."
            },
            mri: {
                t1: "Very bright (Fat content).",
                t2: "Variable. Fat-fluid level may be seen.",
                other_sequences: "Fat-Sat: T1 bright area SUPPRESSES (Becomes black). This distinguishes from endometrioma (does not suppress)."
            },
            ct: {
                contrast: "Cystic mass containing fat density (-20 to -100 HU). May contain Tooth/Bone (calcification)."
            }
        },
        etiology: "Totipotent over germ hücrelerinin üç germ tabakasına (ektoderm, mezoderm, endoderm) diferansiyasyonu sonucu oluşur. Genç kadınlarda en sık over neoplazmıdır.",
        differentialDiagnosis: [
            "Endometrioma (T1 parlak ancak fat-sat'ta baskılanmaz, shading sign pozitif)",
            "Hemorajik Kist (T1 parlak, fat-sat'ta baskılanmaz, yağ-sıvı seviyesi yok)",
            "Lipoleiomyom (Uterin yerleşimli, yağ içeren miyometrial kitle)",
            "Over Karsinomu (Solid kontrastlanan komponent baskın, kalsifikasyon nadir)"
        ],
        goldStandard: "MRI: T1 hiperintens kitle + fat-sat'ta sinyal kaybı (yağ konfirmasyonu). BT'de yağ dansitesi (-20 ila -100 HU) de tanısaldır.",
        clinicalPearl: "Yağ + kalsifikasyon + kıl = dermoid triadı. Fat-sat'ta baskılanma endometriomadan ayırır. Malign transformasyon <%1 (skuamöz hücreli karsinom).",
        mechanism: "Totipotent germ hücrelerinin (over primitif germ hücreleri) üç germ tabakasına diferansiyasyonu → ektoderm (kıl, deri, sebum), mezoderm (kemik, diş, yağ), endoderm (sindirim bezleri). Sebum (yağ) birikimi → kist içeriği. Yağ sinyal karakteri T1 parlak, fat-sat'ta baskılanan → benign dermoid tanısı (malign transformasyon nadir: <1%, skuamöz hücreli karsinom). Rokitansky nodülü: Kalsifikasyon, kıl, diş içeren solid yapı.",
        references: [
            "O-RADS: ACR O-RADS MRI Risk Stratification System. American College of Radiology; 2020.",
            "Defined Defined Defined Defined Defined Defined Defined",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "ovarian-torsion",
        name: "Over Torsiyonu",
        nameEn: "Ovarian Torsion",
        category: "Acil",
        categoryEn: "Emergency",
        keyPoints: ["Jinekolojik acildir (Akut batın).", "Torsiyone over BÜYÜR ve ödemlenir (>4-5cm).", "Foliküller perifere itilir ('inci kolye' / 'string of pearls')."],
        keyPointsEn: ["Gynecologic emergency (Acute abdomen).", "Torsed ovary ENLARGES and becomes edematous (>4-5cm).", "Follicles pushed to periphery ('string of pearls')."],
        findings: {
            usg: {
                description: "Büyümüş, ödemli, hipoekoik over. Periferik dizilimli çok sayıda küçük folikül. Overin orta hatta / uterusa doğru yer değiştirmesi. 'Whirlpool sign' (Burulmuş vasküler pedikül).",
                doppler: "Venöz veya arteriyel akım kaybı (Yine de akım olması torsiyonu ekarte ettirmez!)."
            },
            ct: {
                contrast: "Büyük over, kistik veya solid kitle (kurşun noktası). Uterus hafifçe o tarafa çekilmiş.",
            },
            mri: {
                t2: "Over stromasında diffüz yüksek sinyal (ödem). Torsiyone pedikül (Beak sign)."
            }
        },
        findingsEn: {
            usg: {
                description: "Enlarged, edematous, hypoechoic ovary. Peripherally arranged multiple small follicles. Displacement of ovary to midline/uterus. 'Whirlpool sign' (Twisted vascular pedicle).",
                doppler: "Loss of venous or arterial flow (However, presence of flow does not exclude torsion!)."
            },
            ct: {
                contrast: "Enlarged ovary, cystic or solid mass (lead point). Uterus deviated to that side.",
            },
            mri: {
                t2: "Diffuse high signal in ovarian stroma (edema). Torsed pedicle (Beak sign)."
            }
        },
        etiology: "Overin kendi vasküler pedikülü etrafında dönmesi. En sık predispozan faktör: Over kitlesi (dermoid, kist >5cm). Uzun utero-ovarian ligaman da risk faktörüdür.",
        differentialDiagnosis: [
            "Rüptüre Over Kisti (Akut ağrı, serbest sıvı, ancak over boyutu normal, whirlpool yok)",
            "Ektopik Gebelik (Pozitif βhCG, adneksiyal ring sign, boş uterus)",
            "Apandisit (Sağ alt kadran ağrısı, ancak over normal, appendiks duvar kalınlaşması)",
            "Tubo-Ovarian Apse (Ateş, lökositoz, kompleks kitle, periferik folikül dizilimi yok)"
        ],
        goldStandard: "Doppler USG: Whirlpool sign + büyümüş ödemli over + periferik foliküller. Akım yokluğu tanıyı destekler ancak akım varlığı torsiyonu ekarte ettirmez.",
        clinicalPearl: "Doppler'da akım olması torsiyonu ekarte ettirmez! Kısmi torsiyonda arteriyel akım devam edebilir — klinik şüphe yüksekse cerrahi eksplorasyon gerekir.",
        mechanism: "Overin kendi vasküler pedikülü etrafında dönmesi → önce venöz, ardından arteryel akım kesilmesi → over ödem ve iskemisi. Büyük over kitlesi (kist, dermoid) veya uzun infundibulo-pelvik ligaman predispozan faktördür. Foliküller ödemli overde perifere sıkışır ('string of pearls'). Whirlpool sign: Doppler'da dönen vasküler pedikül görüntüsü. Akım varlığı torsiyonu ekarte ettirmez (kısmi torsiyon, arteriyel akım devam edebilir).",
        references: [
            "Defined Defined Defined Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: Acute Pelvic Pain in the Reproductive Age Group. American College of Radiology.",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "cervical-carcinoma",
        name: "Serviks Karsinomu",
        nameEn: "Cervical Carcinoma",
        category: "Cervix",
        categoryEn: "Cervix",
        keyPoints: ["Evreleme için MRG altın standarttır (Parametrial invazyon değerlendirmesi).", "T2'de stromayı (hipointens halka) bozan hiperintens kitle.", "Difüzyon kısıtlar."],
        keyPointsEn: ["MRI is gold standard for staging (Parametrial invasion assessment).", "Hyperintense mass disrupting stroma (hypointense ring) on T2.", "Restricts diffusion."],
        findings: {
            mri: {
                t2: "Servikal stromayı (koyu halka) bozan/kesintiye uğratan orta-yüksek sinyalli kitle. Parametrial yağ planlarına uzanım evreyi (IIB) değiştirir.",
                dwi: "Belirgin difüzyon kısıtlılığı (Parlak).",
                t1_c: "Erken arteriyel fazda tümör stromaya göre daha erken kontrastlanır."
            }
        },
        findingsEn: {
            mri: {
                t2: "Intermediate-high signal mass disrupting cervical stroma (dark ring). Extension into parametrial fat changes stage (IIB).",
                dwi: "Marked diffusion restriction (Bright).",
                t1_c: "Tumor enhances earlier than stroma in early arterial phase."
            }
        },
        etiology: "HPV 16/18 enfeksiyonu sonucu servikal transformasyon zonunda displazi gelişimi (CIN I→II→III → invaziv karsinom). En sık skuamöz hücreli karsinom (%80).",
        differentialDiagnosis: [
            "Servikal Polip (Benign, saplı, kontrastlanan, stroma bütünlüğü korunur)",
            "Nabothian Kist (T2 hiperintens basit kist, solid komponent yok, DWI kısıtlanması yok)",
            "Endometrial Karsinom (Servikse yayılmış — kaviteden köken alır, primer servikal değil)",
            "Servisit (Diffüz kontrastlanma, ama fokal kitle yok, DWI kısıtlanması minimal)"
        ],
        goldStandard: "MRI: T2 ağırlıklı sekanslar — parametrial invazyon değerlendirmesi ve FIGO evrelemesi için altın standart.",
        clinicalPearl: "T2'de hipointens servikal stroma halkası bozulmuşsa = parametrial invazyon = Evre IIB = cerrahi kontraendike, kemoradyoterapi.",
        mechanism: "HPV 16/18 enfeksiyonu → servikal transformasyon zonunda skuamöz hücre displazisi (CIN 1→2→3) → invaziv skuamöz hücreli karsinom. HPV onkoproteinleri (E6: TP53 inhibisyonu, E7: Rb inhibisyonu) → hücre döngüsü kontrolsüzlüğü. MRI'da servikal stroma (fibröz doku → T2 hipointens) tümör tarafından bozulur (T2 ara-yüksek sinyal). Parametriyal yağ invazyonu evre IIB → cerrahi kontraendike.",
        references: [
            "FIGO Committee on Gynecologic Oncology. Revised FIGO staging for carcinoma of the cervix uteri. International Journal of Gynecology & Obstetrics. 2019;145(1):129-135.",
            "Defined Defined Defined Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: Staging and Follow-up of Cervical Cancer. American College of Radiology.",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "ovarian-carcinoma",
        name: "Over Karsinomu",
        nameEn: "Ovarian Carcinoma",
        category: "Ovary",
        categoryEn: "Ovary",
        keyPoints: [
            "En sık ve en ölümcül jinekolojik malignitedir.",
            "Büyük kistik-solid kitle + asit + peritoneal implantlar = Over Ca şüphesi.",
            "CA-125 yüksekliği destekler (yüksek olmayabilir erken evrede).",
            "FIGO evrelemesi MRI + BT ile yapılır."
        ],
        keyPointsEn: [
            "Most common and most lethal gynecologic malignancy.",
            "Large cystic-solid mass + ascites + peritoneal implants = Ovarian Ca suspicion.",
            "Elevated CA-125 supports (may not be elevated in early stage).",
            "FIGO staging with MRI + CT."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Kompleks Over Kitlesi", modality: "USG" },
            { url: "/images/placeholder_source.png", caption: "BT - Peritoneal İmplantlar", modality: "CT" }
        ],
        findings: {
            usg: {
                description: "Büyük, kompleks over kitlesi (kistik + solid bileşen). Kalın iç septalar (>3mm). Mural nodüller (papiller projeksiyon). Bilateral tutulum sık (%50-60). Serbest asit. Doppler: Solid alanlarda düşük dirençli arteryel akım (RI <0.40)."
            },
            ct: {
                contrast: "Kompleks pelvik kitle, heterojen kontrastlanma. Peritoneal yayılım: Omental kek (omental caking), asit, peritoneal nodüler implantlar. Retroperitoneal LAP. Karaciğer, akciğer metastazı (evre IV)."
            },
            mri: {
                t2: "Kistik bileşen T2 hiperintens, solid papiller proyeksiyonlar T2 orta sinyal. Bilateral over tutulumu değerlendirmesi.",
                t1_c: "Solid bileşen ve septalar erken arteryel kontrastlanma.",
                dwi: "Solid bileşende kısıtlanma (malignite göstergesi)."
            }
        },
        findingsEn: {
            usg: {
                description: "Large, complex ovarian mass (cystic + solid component). Thick internal septa (>3mm). Mural nodules (papillary projections). Bilateral involvement common (50-60%). Free ascites. Doppler: Low-resistance arterial flow in solid areas (RI <0.40)."
            },
            ct: {
                contrast: "Complex pelvic mass, heterogeneous enhancement. Peritoneal spread: Omental caking, ascites, peritoneal nodular implants. Retroperitoneal LAP. Liver, lung metastasis (stage IV)."
            },
            mri: {
                t2: "Cystic component T2 hyperintense, solid papillary projections intermediate T2 signal. Bilateral ovarian involvement assessment.",
                t1_c: "Solid components and septa early arterial enhancement.",
                dwi: "Restriction in solid components (malignancy indicator)."
            }
        },
        etiology: "BRCA1/2 mutasyonu (herediter), endometriozis, nulliparite, obezite. Koruyucu: OKS kullanımı, emzirme, tüp ligasyonu.",
        differentialDiagnosis: [
            "Borderline Over Tümörü (Papiller projeksiyonlar var ama invazyon yok, genç yaş)",
            "Tubo-Ovarian Apse (Ateş, lökositoz, rim kontrastlanma, peritoneal implant yok)",
            "Endometrioma (T1 parlak, T2 shading, solid komponent yok — mural nodül varsa malignite şüphesi)",
            "Metastatik Over Tümörü / Krukenberg (Bilateral, solid baskın, primer GİS araştır)",
            "Pedünküle Miyom (Uterin kökenli, over ayrı görülebilir, bridging vessel sign)"
        ],
        goldStandard: "BT: Evreleme ve peritoneal yayılım değerlendirmesi için altın standart. MRI: Lokal karakterizasyon ve belirsiz kitlelerde üstün.",
        clinicalPearl: "Omental caking (kek görünümü) + asit + bilateral kompleks over kitlesi = ileri evre over karsinomu klasik triadı.",
        mechanism: "Yüzey epitel → malign transformasyon (seroz, müsinöz, endometrioid, berrak hücreli). En sık tip: Yüksek dereceli seroz karsinom (%70) — p53 mutasyonu, BRCA1/2 (herediter). Geç tanı: Pelvik periton → omentum → diyafragmatik periton yayılımı (FIGO III-IV). Asit oluşumu: Peritoneal tümör implantları → vasküler permeabilite artışı (VEGF).",
        references: [
            "O-RADS: ACR O-RADS MRI Risk Stratification System. American College of Radiology; 2020.",
            "FIGO Committee on Gynecologic Oncology. FIGO staging for ovarian, fallopian tube, and peritoneal cancer. International Journal of Gynecology & Obstetrics. 2014;124(1):1-5.",
            "Defined Defined Defined Defined Defined Defined Defined",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "endometrial-carcinoma",
        name: "Endometrium Karsinomu",
        nameEn: "Endometrial Carcinoma",
        category: "Uterus",
        categoryEn: "Uterus",
        keyPoints: [
            "En sık postmenopozal vajinal kanama nedeni olan jinekolojik malignite.",
            "MRI: Miyometrial invazyon derinliği (FIGO evresi) en iyi MRI ile belirlenir.",
            "DWI: Tümör yüksek sinyal (düşük ADC) — endometrial kaviteyi dolduran kitle.",
            "Servikal yayılım: T2'de servikal stroma devamlılık kaybı → Evre II."
        ],
        keyPointsEn: [
            "Most common gynecologic malignancy causing postmenopausal vaginal bleeding.",
            "MRI: Myometrial invasion depth (FIGO stage) best determined with MRI.",
            "DWI: Tumor shows high signal (low ADC) — mass filling endometrial cavity.",
            "Cervical spread: Loss of cervical stromal continuity on T2 → Stage II."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "MRI T2 - Endometrial Kitle", modality: "MRI" },
            { url: "/images/placeholder_source.png", caption: "USG - Endometrial Kalınlaşma", modality: "USG" }
        ],
        findings: {
            usg: {
                description: "Postmenopozal kanamalı hastada endometrial kalınlaşma >4-5mm = Biyopsi endikasyonu. Endometrial kavitede heterojen kitle. Renkli Doppler: Artmış vaskülarite."
            },
            mri: {
                t2: "Endometrial kaviteyi dolduran T2 orta-yüksek sinyalli kitle. Junctional zone (JZ) bütünlüğü: Bozulursa miyometrium invazyonu var. Servikal tutulum: T2 hipointens servikal stroma disrupsiyonu.",
                t1_c: "Tümör miyometriumdan erken kontrastlanır (dinamik faz). İnvazyon derinliği: <50% miyometrium (Evre IA), >50% (Evre IB).",
                dwi: "Belirgin kısıtlanma (low ADC). Peritoneal/LAP değerlendirmesi."
            }
        },
        findingsEn: {
            usg: {
                description: "Endometrial thickening >4-5mm in postmenopausal bleeding = Biopsy indication. Heterogeneous mass in endometrial cavity. Color Doppler: Increased vascularity."
            },
            mri: {
                t2: "T2 intermediate-high signal mass filling endometrial cavity. Junctional zone (JZ) integrity: Disrupted = myometrial invasion. Cervical involvement: Disruption of T2 hypointense cervical stroma.",
                t1_c: "Tumor enhances earlier than myometrium (dynamic phase). Invasion depth: <50% myometrium (Stage IA), >50% (Stage IB).",
                dwi: "Marked restriction (low ADC). Peritoneal/LAP assessment."
            }
        },
        etiology: "Tip I: Obezite, DM, HTN, PCOS, östrojen tedavisi, tamoksifen. Tip II: Atrofi zemininde, Lynch sendromu.",
        differentialDiagnosis: [
            "Endometrial Polip (Benign, ince saplı, T2'de fibröz çekirdek hipointens, DWI kısıtlanması yok)",
            "Submüköz Miyom (T2 hipointens, endometrial kaviteye protrüzyon, miyometriumdan köken)",
            "Endometrial Hiperplazi (Diffüz kalınlaşma, fokal kitle yok, DWI'da belirgin kısıtlanma yok)",
            "Servikal Karsinom (Serviksten köken alır, endometrial kavite normal olabilir)",
            "Hematokolpos/Hematometre (Sıvı koleksiyonu, solid komponent yok, kontrastlanma yok)"
        ],
        goldStandard: "MRI: Dinamik kontrastlı T1 + DWI — miyometrial invazyon derinliği ve FIGO evrelemesi için altın standart.",
        clinicalPearl: "Postmenopozal kanama + endometrial kalınlık >4mm = biyopsi şart. MRI'da JZ bütünlüğü korunuyorsa invazyon yok (Evre IA).",
        mechanism: "Östrojen maruziyeti → endometrial hiperplazi → atipik hiperplazi → tip I (endometrioid, %80, iyi prognoz). Tip II: Seröz veya berrak hücreli (hormonal bağımsız, kötü prognoz). MRI'da tümör T2 orta-yüksek sinyal (yüksek hücrelük, geniş intersellüler su); normal endometrium daha hiperintens; junctional zone hipointens bariyer — tümör bu bariyer geçerse miyometrium invazyonu.",
        references: [
            "FIGO Committee on Gynecologic Oncology. Revised FIGO staging for endometrial cancer. International Journal of Gynecology & Obstetrics. 2009;105(2):103-104.",
            "Defined Defined Defined Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: Pretreatment Evaluation and Follow-up of Endometrial Cancer. American College of Radiology.",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "ectopic-pregnancy",
        name: "Ektopik Gebelik",
        nameEn: "Ectopic Pregnancy",
        category: "Acil",
        categoryEn: "Emergency",
        keyPoints: [
            "Acil jinekolojik durum — tüp rüptürü mortalite riski taşır.",
            "USG: İntrauterin gebelik kesin dışlanmıyorsa ektopik dışlanamaz.",
            "Boş uterus + adneksiyal kitle + βhCG >1500-2000 mIU/mL = Ektopik şüphesi.",
            "Serbest intraabdominal sıvı (kanama) = Rüptür olasılığı yüksek."
        ],
        keyPointsEn: [
            "Gynecologic emergency — tubal rupture carries mortality risk.",
            "USG: Ectopic cannot be excluded unless intrauterine pregnancy is definitively confirmed.",
            "Empty uterus + adnexal mass + βhCG >1500-2000 mIU/mL = Ectopic suspicion.",
            "Free intraabdominal fluid (hemorrhage) = High probability of rupture."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Adneksiyal Kitle + Perihepatik Sıvı", modality: "USG" },
            { url: "/images/placeholder_source.png", caption: "BT - Hemoperitoneum", modality: "CT" }
        ],
        findings: {
            usg: {
                description: "Transvajinal USG ilk tercih. Bulgular: (1) Boş intrauterin kavite (IUP yok). (2) Adneksiyal ring işareti: Uterin dışı yuvarlak anekoik halka ('bagel sign'). (3) Ekstrauterin kardiyak aktivite (kesin tanı!). (4) Serbest pelvik/abdominal sıvı (ekojenlik artmışsa kanama). (5) Tutarsız yalancı gestasyonel kese (uterus içi — ektopik'i dışlamaz!).",
                doppler: "Ring of fire işareti: Adneksiyal halka çevresinde artmış periferal renkli Doppler sinyali."
            },
            ct: {
                contrast: "Hemoperitoneum (hiperdens serbest sıvı). Pelvik veya adneksiyal kitle. Aktif kanama (kontrast extravasasyonu). Genellikle BT gerekmez — klinik+USG+βhCG tanısaldır."
            },
            mri: {
                t2: "Adneksiyal kitle: T2 heterojenik. Tuba tutulumu görülebilir.",
                t1: "Hemorajik komponent T1 hiperintens (methemoglobin)."
            }
        },
        findingsEn: {
            usg: {
                description: "Transvaginal USG is first choice. Findings: (1) Empty intrauterine cavity (no IUP). (2) Adnexal ring sign: Extrauterine round anechoic ring ('bagel sign'). (3) Extrauterine cardiac activity (definitive!). (4) Free pelvic/abdominal fluid (hemorrhage if echogenic). (5) Pseudo-gestational sac (intrauterine — does not exclude ectopic!).",
                doppler: "Ring of fire sign: Increased peripheral color Doppler signal around adnexal ring."
            },
            ct: {
                contrast: "Hemoperitoneum (hyperdense free fluid). Pelvic or adnexal mass. Active bleeding (contrast extravasation). Usually CT is not needed — Clinical+USG+βhCG is diagnostic."
            },
            mri: {
                t2: "Adnexal mass: T2 heterogeneous. Tubal involvement may be seen.",
                t1: "Hemorrhagic component T1 hyperintense (methemoglobin)."
            }
        },
        etiology: "Önceki PID/salpenjit, tüp cerrahisi, ektopik gebelik öyküsü, OİU, sigaracılık, IVF.",
        differentialDiagnosis: [
            "Korpus Luteum Kisti (βhCG negatif veya düşük, ring of fire pozitif olabilir, IUP eşlik edebilir)",
            "Over Torsiyonu (Büyümüş ödemli over, βhCG negatif, whirlpool sign)",
            "Rüptüre Hemorajik Kist (Akut ağrı + serbest sıvı, βhCG negatif)",
            "Apandisit (Sağ alt kadran, βhCG negatif, USG'de appendiks duvar kalınlaşması)",
            "Heterotopik Gebelik (IVF sonrası, IUP mevcut + eşzamanlı ektopik — nadir ama önemli)"
        ],
        goldStandard: "Transvajinal USG + serum βhCG: Boş uterus + βhCG >1500-2000 mIU/mL = ektopik gebelik tanısı için altın standart kombinasyon.",
        clinicalPearl: "βhCG >1500-2000 mIU/mL olmasına rağmen intrauterin gebelik görülmüyorsa ektopik gebelik suçlu bulunana kadar masumiyetini kanıtlamalıdır.",
        mechanism: "Fallop tübüne implante olan embriyo → tüp büyümesi → distansiyon → rüptür (6-8. haftalar). En sık bölge: İstmus-ampulla bileşkesi. Ring of fire işareti: Trofoblastik doku periferal vaskülarite oluşturur. Salpenjit, tüp cerrahisi, OİU geçmişi risk faktörü. İntrauterin IUD varlığına rağmen tüp gebeliği olabilir (IUD uterusu korur, tübü değil).",
        references: [
            "Defined Defined Defined Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: First Trimester Bleeding. American College of Radiology.",
            "Defined Defined Defined Defined Defined Defined"
        ]
    },
    {
        id: "tubo-ovarian-abscess",
        name: "Tubo-Ovarian Apse (TOA)",
        nameEn: "Tubo-Ovarian Abscess (TOA)",
        category: "Enfeksiyöz",
        categoryEn: "Infectious",
        keyPoints: [
            "PID'nin en ağır komplikasyonu — pelvik sepsis riski.",
            "USG: Adneksiyel kompleks kitle + iç ekolar + kalın duvar.",
            "BT: Multiloküler apse + perirektal / pelvik yağ kirlenme.",
            "IV antibiyotik ilk tedavi; yanıtsızsa perkütan veya cerrahi drenaj."
        ],
        keyPointsEn: [
            "Most severe complication of PID — risk of pelvic sepsis.",
            "USG: Adnexal complex mass + internal echoes + thick wall.",
            "CT: Multilocular abscess + perirectal/pelvic fat stranding.",
            "IV antibiotics first; if unresponsive, percutaneous or surgical drainage."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Kompleks Adneksiyal Kitle", modality: "USG" },
            { url: "/images/placeholder_source.png", caption: "BT - Pelvik Apse + Stranding", modality: "CT" }
        ],
        findings: {
            usg: {
                description: "Adneksiyal kompleks kistik-solid kitle. Kalın, düzensiz duvar. İç ekolar (pü içeriği). Septalar içinde debris. Over-tuba ayrımı kaybolmuş ('tubo-ovarian ünite'). Renkli Doppler: Duvar hipervaskülaritesi (enflamasyon).",
                doppler: "Periferal artmış vaskülarite, düşük dirençli akım (RI düşük, inflamasyon). İçerikte akım yok."
            },
            ct: {
                contrast: "Pelvik kompleks kistik kitle. Kalın, düzenli kontrastlanan duvar (rim enhancement). İnce septalar. Peritoneal/pelvik yağ kirlenme (fat stranding). Serbest sıvı. Uterin ve rektal komşuluk değerlendirmesi. Hava: Anaerobik enfeksiyon (acil!)."
            },
            mri: {
                t2: "Kompleks kitle, T2 hiperintens sıvı içeriği, kalın düşük sinyalli duvar.",
                t1_c: "Kalın rim kontrastlanması.",
                dwi: "Apse içeriği kısıtlanır (piojenik materyal)."
            }
        },
        findingsEn: {
            usg: {
                description: "Adnexal complex cystic-solid mass. Thick, irregular wall. Internal echoes (pus content). Debris within septa. Ovary-tube distinction lost ('tubo-ovarian unit'). Color Doppler: Wall hypervascularity (inflammation).",
                doppler: "Peripheral increased vascularity, low-resistance flow (low RI, inflammation). No flow within content."
            },
            ct: {
                contrast: "Pelvic complex cystic mass. Thick, regularly enhancing wall (rim enhancement). Thin septa. Peritoneal/pelvic fat stranding. Free fluid. Assessment of uterine and rectal proximity. Gas: Anaerobic infection (emergency!)."
            },
            mri: {
                t2: "Complex mass, T2 hyperintense fluid content, thick low-signal wall.",
                t1_c: "Thick rim enhancement.",
                dwi: "Abscess content restricts (pyogenic material)."
            }
        },
        etiology: "Cinsel yolla bulaşan enfeksiyon (Gonore, Klamidya), IUD, jinekolojik işlem sonrası, Crohn hastalığı.",
        differentialDiagnosis: [
            "Over Karsinomu (Solid kontrastlanan komponent, peritoneal implantlar, ateş/lökositoz yok)",
            "Endometrioma (T1 parlak, T2 shading, DWI kısıtlanması yok, klinik enfeksiyon bulgusu yok)",
            "Ektopik Gebelik (Pozitif βhCG, ring of fire, ateş yok, pü içeriği yok)",
            "Apandisit / Periapandiküler Apse (Sağ alt kadran, appendiks kökenli, over normal)",
            "Pelvik Hematom (Cerrahi/travma öyküsü, kontrastlanma yok, ateş genellikle yok)"
        ],
        goldStandard: "Kontrastlı BT: Rim kontrastlanması + fat stranding + pelvik kompleks kitle — TOA tanısı ve komplikasyon değerlendirmesi için altın standart.",
        clinicalPearl: "Apse içinde hava görülmesi = anaerobik enfeksiyon düşün = acil drenaj gerekebilir. DWI kısıtlanması apse ile nekrotik tümörü ayırmada yardımcıdır.",
        mechanism: "Pelvik inflamatuar hastalık (PID) → salpenjit → adneksiyal bölgede mikroorganizma toplanması → abse oluşumu. En sık etkenler: N. gonorrhoeae, C. trachomatis, anaeroblar. Apse içindeki pü: Ölü lökositler, bakteri, fibrin → DWI'da kısıtlanma. Rüptür → peritonit → acil cerrahi.",
        references: [
            "Defined Defined Defined Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: Acute Pelvic Pain in the Reproductive Age Group. American College of Radiology.",
            "Defined Defined Defined Defined Defined Defined",
            "Defined Defined Defined Defined"
        ]
    },
    {
        id: "pcos",
        name: "Polikistik Over Sendromu (PCOS)",
        nameEn: "Polycystic Ovary Syndrome (PCOS)",
        category: "Ovary",
        categoryEn: "Ovary",
        keyPoints: [
            "Rotterdam kriterleri: Oligo/anovülasyon + Klinik/biyokimyasal hiperandrojenizm + PCO morfolojisi (≥2 kriter).",
            "USG: Over hacmi >10mL + ≥20 antral folikül (2-9mm) / over.",
            "MRI: USG'nin yetersiz kaldığı obez hastalarda kullanılır.",
            "Görüntüleme tek başına tanısal değildir — klinik ve hormonal verilerle birleştirilmeli."
        ],
        keyPointsEn: [
            "Rotterdam criteria: Oligo/anovulation + Clinical/biochemical hyperandrogenism + PCO morphology (≥2 criteria).",
            "USG: Ovarian volume >10mL + ≥20 antral follicles (2-9mm) / ovary.",
            "MRI: Used in obese patients where USG is inadequate.",
            "Imaging alone is not diagnostic — must be combined with clinical and hormonal data."
        ],
        gallery: [
            { url: "/images/placeholder_source.png", caption: "USG - Periferik Foliküller ('İnci Dizisi')", modality: "USG" }
        ],
        findings: {
            usg: {
                description: "Over hacmi artmış (>10mL). Periferik yerleşimli multiple küçük foliküller (2-9mm, ≥20/over): 'İnci dizisi' / 'pearl necklace' görünümü. Artmış stromal ekojenite. Stromal/toplam over alanı oranı artmış. Endometrial kalınlaşma eşlik edebilir (kronik anovülasyon).",
                doppler: "Artmış stromal vaskülarite (hiperandrojenizm ile ilişkili)."
            },
            mri: {
                t2: "Periferik foliküller: T2 hiperintens. Stroma: T2 orta-düşük sinyal (artmış stroma). Over hacmi ve folikül sayısı doğrulaması. T2: 'Fıçı' görünümü (periferik foliküller, santral hiperinten stroma).",
                t1_c: "Stromal kontrastlanma artışı."
            }
        },
        findingsEn: {
            usg: {
                description: "Increased ovarian volume (>10mL). Peripherally located multiple small follicles (2-9mm, ≥20/ovary): 'Pearl necklace' appearance. Increased stromal echogenicity. Increased stromal/total ovarian area ratio. Endometrial thickening may accompany (chronic anovulation).",
                doppler: "Increased stromal vascularity (related to hyperandrogenism)."
            },
            mri: {
                t2: "Peripheral follicles: T2 hyperintense. Stroma: T2 intermediate-low signal (increased stroma). Confirmation of ovarian volume and follicle count. T2: 'Barrel' appearance (peripheral follicles, central hyperintense stroma).",
                t1_c: "Increased stromal enhancement."
            }
        },
        etiology: "Genetik yatkınlık (ailesel) + Metabolik faktörler (obezite, insülin direnci). İnsülin duyarlaştırıcı tedavi (metformin) etkili.",
        differentialDiagnosis: [
            "Multifoliküler Overler (Foliküller periferal değil dağınık, stroma normal, over hacmi normal)",
            "Over Hiperstimülasyonu (İatrojenik, gonadotropin tedavisi sonrası, masif over büyümesi + asit)",
            "Konjenital Adrenal Hiperplazi (Androjen yüksek ama adrenal kökenli, 17-OH progesteron yüksek)",
            "Cushing Sendromu (Santral obezite, striae, kortizol yüksek, overlerde sekonder değişiklik)",
            "Androjen Salgılayan Tümör (Tek taraflı over kitlesi, çok yüksek testosteron, hızlı virilizasyon)"
        ],
        goldStandard: "Transvajinal USG: Over hacmi >10mL + ≥20 folikül (2-9mm)/over — Rotterdam morfolojik kriter. Klinik ve hormonal verilerle birleştirilmeli.",
        clinicalPearl: "PCOS tanısı sadece görüntüleme ile konmaz — Rotterdam kriterlerinden en az 2'si (oligo/anovülasyon, hiperandrojenizm, PCO morfolojisi) gereklidir.",
        mechanism: "İnsülin direnci → Hiperinsulinemi → Over teka hücrelerinde androjen üretimi artışı (LH artışı) → FSH/LH oranı bozulur → folikül matürasyonu duraklar (anovülasyon) → foliküller küçük kalır ve birikir (PCO morfolojisi). LH pulsatilitesi artışı da katkıda bulunur. Sonuç: Kronik anovülasyon + hiperandrojenizm + infertilite döngüsü.",
        references: [
            "Defined Defined Defined Defined Defined Defined Defined",
            "Defined Defined Defined Defined",
            "ACR Appropriateness Criteria: Female Infertility. American College of Radiology."
        ]
    }
];
