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
        etiologyEn: "Estrogen-dependent smooth muscle cell proliferation. Most common during reproductive age; regresses after menopause.",
        differentialDiagnosis: [
            "Adenomiyozis (Diffüz miyometriyal kalınlaşma, sınırları belirsiz, JZ >12mm)",
            "Endometrial Polip (Fokal endometriyal kalınlaşma, ince saplı, kavite içi)",
            "Uterus Sarkomu (Hızlı büyüme, postmenopozal, T2'de heterojen yüksek sinyal)",
            "Adenomiyom (Adenomiyozisin fokal formu, miyomdan daha belirsiz sınırlı)"
        ],
        differentialDiagnosisEn: [
            "Adenomyosis (Diffuse myometrial thickening, ill-defined margins, JZ >12mm)",
            "Endometrial Polyp (Focal endometrial thickening, thin pedicle, intracavitary)",
            "Uterine Sarcoma (Rapid growth, postmenopausal, heterogeneous high signal on T2)",
            "Adenomyoma (Focal form of adenomyosis, more ill-defined margins than leiomyoma)"
        ],
        goldStandard: "MRI: T2 ağırlıklı sekanslarda hipointens kitle — leiomyom için en iyi karakterizasyon yöntemi.",
        goldStandardEn: "MRI: Hypointense mass on T2-weighted sequences — best characterization method for leiomyoma.",
        clinicalPearl: "T2'de hipointens = fibrotik doku = leiomyom. Hiperintens ise dejenerasyon veya sellüler miyom düşün.",
        clinicalPearlEn: "Hypointense on T2 = fibrotic tissue = leiomyoma. If hyperintense, consider degeneration or cellular leiomyoma.",
        mechanism: "Düz kas hücrelerinin klonal proliferasyonu → miyom oluşumu. Östrojen bağımlı büyüme: Premenopozal dönemde büyür, menopozdan sonra küçülür. MRI T2 hipointensitesi: Yoğun düz kas hücresi demetleri ve fibröz stroma → serbest su protonları az. Dejenerasyon türleri: Hyalin (%60, en sık), kistik, kırmızı (gebelikte trofoblastik kanamaya bağlı), müsinöz, kalsifik.",
        mechanismEn: "Clonal proliferation of smooth muscle cells → fibroid formation. Estrogen-dependent growth: Grows during premenopausal period, shrinks after menopause. MRI T2 hypointensity: Dense smooth muscle cell bundles and fibrous stroma → few free water protons. Types of degeneration: Hyaline (60%, most common), cystic, red (due to trophoblastic hemorrhage during pregnancy), mucinous, calcific.",
        references: [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Uterine Leiomyomata. American College of Radiology.",
            "FIGO classification of causes of abnormal uterine bleeding. International Journal of Gynecology & Obstetrics. 2011;113(1):3-13.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "Invasion of the endometrial basal layer into the myometrium. Multiparity, uterine surgery, and chronic estrogen exposure play a role.",
        differentialDiagnosis: [
            "Uterin Leiomyom (Keskin sınırlı, T2 hipointens, miyometriumdan ayrı kitle)",
            "Endometrial Karsinom (Endometriyal kavitede kitle, DWI kısıtlanması, JZ'yi bozar)",
            "Miyometrial Kontraksiyon (Geçici, tekrarlayan MRI'da kaybolur, JZ kalınlaşması yok)",
            "Adenomiyom (Fokal adenomiyozis formu, sınırları belirsiz miyometrial kitle)"
        ],
        differentialDiagnosisEn: [
            "Uterine Leiomyoma (Well-defined, T2 hypointense, separate mass from myometrium)",
            "Endometrial Carcinoma (Mass in endometrial cavity, DWI restriction, disrupts JZ)",
            "Myometrial Contraction (Transient, disappears on repeat MRI, no JZ thickening)",
            "Adenomyoma (Focal form of adenomyosis, ill-defined myometrial mass)"
        ],
        goldStandard: "MRI: T2 ağırlıklı sekanslarda JZ kalınlığı >12mm ölçümü — adenomiyozis için altın standart.",
        goldStandardEn: "MRI: JZ thickness >12mm on T2-weighted sequences — gold standard for adenomyosis.",
        clinicalPearl: "JZ >12mm = adenomiyozis. Miyom keskin sınırlıdır, adenomiyozisin sınırları belirsizdir — bu ayrım en kritik noktadır.",
        clinicalPearlEn: "JZ >12mm = adenomyosis. Fibroids are well-defined, adenomyosis has ill-defined margins — this distinction is the most critical point.",
        mechanism: "Endometrial bazal tabaka hücrelerinin miyometriuma doğru invaze olması → ektopik endometrial bezler ve stroma miyometrium içinde. İki hipotez: (1) Endometrial bazal tabakanın doğrudan invazyonu; (2) endometriyal kök hücre göçü. Ektopik endometrial doku her menstrüel siklustan etkilenir → lokal hemoraji → adenomyotik nodül/küçük kistler. Junction zone kalınlığı >12mm → tanısal MRI bulgusu.",
        mechanismEn: "Invasion of endometrial basal layer cells into the myometrium → ectopic endometrial glands and stroma within the myometrium. Two hypotheses: (1) Direct invasion of the endometrial basal layer; (2) endometrial stem cell migration. Ectopic endometrial tissue is affected by each menstrual cycle → local hemorrhage → adenomyotic nodules/small cysts. Junction zone thickness >12mm → diagnostic MRI finding.",
        references: [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Gynecological imaging",
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
        etiologyEn: "Implantation of ectopic endometrial tissue onto the ovarian surface due to retrograde menstruation. Directly associated with endometriosis.",
        differentialDiagnosis: [
            "Dermoid Kist (T1 parlak ancak fat-sat'ta baskılanır, endometriomada baskılanmaz)",
            "Hemorajik Kist (T1 parlak, ancak shading sign yok, spontan rezolüsyon gösterir)",
            "Over Karsinomu (Solid komponent ve kontrastlanma belirgin, DWI kısıtlanması)",
            "Müsinöz Kistadenoma (Multiloküler, T1'de değişken sinyal, shading yok)"
        ],
        differentialDiagnosisEn: [
            "Dermoid Cyst (T1 bright but suppresses on fat-sat, endometrioma does not suppress)",
            "Hemorrhagic Cyst (T1 bright, but no shading sign, shows spontaneous resolution)",
            "Ovarian Carcinoma (Prominent solid component and enhancement, DWI restriction)",
            "Mucinous Cystadenoma (Multilocular, variable signal on T1, no shading)"
        ],
        goldStandard: "MRI: T1 hiperintens + fat-sat'ta baskılanmayan sinyal + T2 shading sign — endometrioma için altın standart tanı triadı.",
        goldStandardEn: "MRI: T1 hyperintense + non-suppressing signal on fat-sat + T2 shading sign — gold standard diagnostic triad for endometrioma.",
        clinicalPearl: "T1 parlak + fat-sat'ta baskılanmıyor = kan ürünü (endometrioma). T1 parlak + fat-sat'ta baskılanıyor = yağ (dermoid). Bu ayrım sınav klasiğidir.",
        clinicalPearlEn: "T1 bright + does not suppress on fat-sat = blood product (endometrioma). T1 bright + suppresses on fat-sat = fat (dermoid). This distinction is an exam classic.",
        mechanism: "Retrograd menstrüasyon → ektopik endometrial dokunun over yüzeyine implante olması → over korteksine invazyon → tekrarlayan siklik kanama → eski kan ürünleri (methemoglobin, hemosiderin) birikimi. Methemoglobin (T1 parlak), artmış demir konsantrasyonu (T2 shading = giderek kararan sinyal). Dermoid kistlerde yağ baskılanır; endometriomada kan ürünleri yağ baskılamaya yanıt vermez (ayrım bu şekilde yapılır).",
        mechanismEn: "Retrograde menstruation → implantation of ectopic endometrial tissue onto the ovarian surface → invasion into ovarian cortex → recurrent cyclic hemorrhage → accumulation of old blood products (methemoglobin, hemosiderin). Methemoglobin (T1 bright), increased iron concentration (T2 shading = progressively darkening signal). In dermoid cysts fat suppresses; in endometrioma blood products do not respond to fat suppression (this is how the distinction is made).",
        references: [
            "O-RADS: ACR O-RADS MRI Risk Stratification System. American College of Radiology; 2020.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "Arises from differentiation of totipotent ovarian germ cells into three germ layers (ectoderm, mesoderm, endoderm). Most common ovarian neoplasm in young women.",
        differentialDiagnosis: [
            "Endometrioma (T1 parlak ancak fat-sat'ta baskılanmaz, shading sign pozitif)",
            "Hemorajik Kist (T1 parlak, fat-sat'ta baskılanmaz, yağ-sıvı seviyesi yok)",
            "Lipoleiomyom (Uterin yerleşimli, yağ içeren miyometrial kitle)",
            "Over Karsinomu (Solid kontrastlanan komponent baskın, kalsifikasyon nadir)"
        ],
        differentialDiagnosisEn: [
            "Endometrioma (T1 bright but does not suppress on fat-sat, shading sign positive)",
            "Hemorrhagic Cyst (T1 bright, does not suppress on fat-sat, no fat-fluid level)",
            "Lipoleiomyoma (Uterine location, fat-containing myometrial mass)",
            "Ovarian Carcinoma (Dominant enhancing solid component, calcification rare)"
        ],
        goldStandard: "MRI: T1 hiperintens kitle + fat-sat'ta sinyal kaybı (yağ konfirmasyonu). BT'de yağ dansitesi (-20 ila -100 HU) de tanısaldır.",
        goldStandardEn: "MRI: T1 hyperintense mass + signal loss on fat-sat (fat confirmation). Fat density (-20 to -100 HU) on CT is also diagnostic.",
        clinicalPearl: "Yağ + kalsifikasyon + kıl = dermoid triadı. Fat-sat'ta baskılanma endometriomadan ayırır. Malign transformasyon <%1 (skuamöz hücreli karsinom).",
        clinicalPearlEn: "Fat + calcification + hair = dermoid triad. Suppression on fat-sat distinguishes from endometrioma. Malignant transformation <1% (squamous cell carcinoma).",
        mechanism: "Totipotent germ hücrelerinin (over primitif germ hücreleri) üç germ tabakasına diferansiyasyonu → ektoderm (kıl, deri, sebum), mezoderm (kemik, diş, yağ), endoderm (sindirim bezleri). Sebum (yağ) birikimi → kist içeriği. Yağ sinyal karakteri T1 parlak, fat-sat'ta baskılanan → benign dermoid tanısı (malign transformasyon nadir: <1%, skuamöz hücreli karsinom). Rokitansky nodülü: Kalsifikasyon, kıl, diş içeren solid yapı.",
        mechanismEn: "Differentiation of totipotent germ cells (ovarian primitive germ cells) into three germ layers → ectoderm (hair, skin, sebum), mesoderm (bone, teeth, fat), endoderm (digestive glands). Sebum (fat) accumulation → cyst content. Fat signal characteristics: T1 bright, suppresses on fat-sat → benign dermoid diagnosis (malignant transformation rare: <1%, squamous cell carcinoma). Rokitansky nodule: Solid structure containing calcification, hair, and teeth.",
        references: [
            "O-RADS: ACR O-RADS MRI Risk Stratification System. American College of Radiology; 2020.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "Rotation of the ovary around its own vascular pedicle. Most common predisposing factor: Ovarian mass (dermoid, cyst >5cm). Long utero-ovarian ligament is also a risk factor.",
        differentialDiagnosis: [
            "Rüptüre Over Kisti (Akut ağrı, serbest sıvı, ancak over boyutu normal, whirlpool yok)",
            "Ektopik Gebelik (Pozitif βhCG, adneksiyal ring sign, boş uterus)",
            "Apandisit (Sağ alt kadran ağrısı, ancak over normal, appendiks duvar kalınlaşması)",
            "Tubo-Ovarian Apse (Ateş, lökositoz, kompleks kitle, periferik folikül dizilimi yok)"
        ],
        differentialDiagnosisEn: [
            "Ruptured Ovarian Cyst (Acute pain, free fluid, but normal ovarian size, no whirlpool)",
            "Ectopic Pregnancy (Positive βhCG, adnexal ring sign, empty uterus)",
            "Appendicitis (Right lower quadrant pain, but normal ovary, appendiceal wall thickening)",
            "Tubo-Ovarian Abscess (Fever, leukocytosis, complex mass, no peripheral follicle arrangement)"
        ],
        goldStandard: "Doppler USG: Whirlpool sign + büyümüş ödemli over + periferik foliküller. Akım yokluğu tanıyı destekler ancak akım varlığı torsiyonu ekarte ettirmez.",
        goldStandardEn: "Doppler USG: Whirlpool sign + enlarged edematous ovary + peripheral follicles. Absence of flow supports diagnosis but presence of flow does not exclude torsion.",
        clinicalPearl: "Doppler'da akım olması torsiyonu ekarte ettirmez! Kısmi torsiyonda arteriyel akım devam edebilir — klinik şüphe yüksekse cerrahi eksplorasyon gerekir.",
        clinicalPearlEn: "Presence of flow on Doppler does not exclude torsion! In partial torsion, arterial flow may persist — if clinical suspicion is high, surgical exploration is required.",
        mechanism: "Overin kendi vasküler pedikülü etrafında dönmesi → önce venöz, ardından arteryel akım kesilmesi → over ödem ve iskemisi. Büyük over kitlesi (kist, dermoid) veya uzun infundibulo-pelvik ligaman predispozan faktördür. Foliküller ödemli overde perifere sıkışır ('string of pearls'). Whirlpool sign: Doppler'da dönen vasküler pedikül görüntüsü. Akım varlığı torsiyonu ekarte ettirmez (kısmi torsiyon, arteriyel akım devam edebilir).",
        mechanismEn: "Rotation of the ovary around its own vascular pedicle → first venous, then arterial flow compromise → ovarian edema and ischemia. Large ovarian mass (cyst, dermoid) or long infundibulopelvic ligament is a predisposing factor. Follicles are pushed to the periphery in the edematous ovary ('string of pearls'). Whirlpool sign: Rotating vascular pedicle appearance on Doppler. Presence of flow does not exclude torsion (partial torsion, arterial flow may persist).",
        references: [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Pelvic Pain in the Reproductive Age Group. American College of Radiology.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "Dysplasia development in the cervical transformation zone following HPV 16/18 infection (CIN I→II→III → invasive carcinoma). Most common is squamous cell carcinoma (80%).",
        differentialDiagnosis: [
            "Servikal Polip (Benign, saplı, kontrastlanan, stroma bütünlüğü korunur)",
            "Nabothian Kist (T2 hiperintens basit kist, solid komponent yok, DWI kısıtlanması yok)",
            "Endometrial Karsinom (Servikse yayılmış — kaviteden köken alır, primer servikal değil)",
            "Servisit (Diffüz kontrastlanma, ama fokal kitle yok, DWI kısıtlanması minimal)"
        ],
        differentialDiagnosisEn: [
            "Cervical Polyp (Benign, pedunculated, enhancing, stromal integrity preserved)",
            "Nabothian Cyst (T2 hyperintense simple cyst, no solid component, no DWI restriction)",
            "Endometrial Carcinoma (Spread to cervix — originates from cavity, not primary cervical)",
            "Cervicitis (Diffuse enhancement, but no focal mass, minimal DWI restriction)"
        ],
        goldStandard: "MRI: T2 ağırlıklı sekanslar — parametrial invazyon değerlendirmesi ve FIGO evrelemesi için altın standart.",
        goldStandardEn: "MRI: T2-weighted sequences — gold standard for parametrial invasion assessment and FIGO staging.",
        clinicalPearl: "T2'de hipointens servikal stroma halkası bozulmuşsa = parametrial invazyon = Evre IIB = cerrahi kontraendike, kemoradyoterapi.",
        clinicalPearlEn: "If the hypointense cervical stromal ring is disrupted on T2 = parametrial invasion = Stage IIB = surgery contraindicated, chemoradiation.",
        mechanism: "HPV 16/18 enfeksiyonu → servikal transformasyon zonunda skuamöz hücre displazisi (CIN 1→2→3) → invaziv skuamöz hücreli karsinom. HPV onkoproteinleri (E6: TP53 inhibisyonu, E7: Rb inhibisyonu) → hücre döngüsü kontrolsüzlüğü. MRI'da servikal stroma (fibröz doku → T2 hipointens) tümör tarafından bozulur (T2 ara-yüksek sinyal). Parametriyal yağ invazyonu evre IIB → cerrahi kontraendike.",
        mechanismEn: "HPV 16/18 infection → squamous cell dysplasia in the cervical transformation zone (CIN 1→2→3) → invasive squamous cell carcinoma. HPV oncoproteins (E6: TP53 inhibition, E7: Rb inhibition) → loss of cell cycle control. On MRI, cervical stroma (fibrous tissue → T2 hypointense) is disrupted by tumor (T2 intermediate-high signal). Parametrial fat invasion = Stage IIB → surgery contraindicated.",
        references: [
            "FIGO Committee on Gynecologic Oncology. Revised FIGO staging for carcinoma of the cervix uteri. International Journal of Gynecology & Obstetrics. 2019;145(1):129-135.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Staging and Follow-up of Cervical Cancer. American College of Radiology.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "BRCA1/2 mutation (hereditary), endometriosis, nulliparity, obesity. Protective: OCP use, breastfeeding, tubal ligation.",
        differentialDiagnosis: [
            "Borderline Over Tümörü (Papiller projeksiyonlar var ama invazyon yok, genç yaş)",
            "Tubo-Ovarian Apse (Ateş, lökositoz, rim kontrastlanma, peritoneal implant yok)",
            "Endometrioma (T1 parlak, T2 shading, solid komponent yok — mural nodül varsa malignite şüphesi)",
            "Metastatik Over Tümörü / Krukenberg (Bilateral, solid baskın, primer GİS araştır)",
            "Pedünküle Miyom (Uterin kökenli, over ayrı görülebilir, bridging vessel sign)"
        ],
        differentialDiagnosisEn: [
            "Borderline Ovarian Tumor (Papillary projections present but no invasion, young age)",
            "Tubo-Ovarian Abscess (Fever, leukocytosis, rim enhancement, no peritoneal implants)",
            "Endometrioma (T1 bright, T2 shading, no solid component — suspect malignancy if mural nodule)",
            "Metastatic Ovarian Tumor / Krukenberg (Bilateral, solid dominant, investigate primary GI source)",
            "Pedunculated Fibroid (Uterine origin, ovary may be seen separately, bridging vessel sign)"
        ],
        goldStandard: "BT: Evreleme ve peritoneal yayılım değerlendirmesi için altın standart. MRI: Lokal karakterizasyon ve belirsiz kitlelerde üstün.",
        goldStandardEn: "CT: Gold standard for staging and peritoneal spread assessment. MRI: Superior for local characterization and indeterminate masses.",
        clinicalPearl: "Omental caking (kek görünümü) + asit + bilateral kompleks over kitlesi = ileri evre over karsinomu klasik triadı.",
        clinicalPearlEn: "Omental caking + ascites + bilateral complex ovarian mass = classic triad of advanced stage ovarian carcinoma.",
        mechanism: "Yüzey epitel → malign transformasyon (seroz, müsinöz, endometrioid, berrak hücreli). En sık tip: Yüksek dereceli seroz karsinom (%70) — p53 mutasyonu, BRCA1/2 (herediter). Geç tanı: Pelvik periton → omentum → diyafragmatik periton yayılımı (FIGO III-IV). Asit oluşumu: Peritoneal tümör implantları → vasküler permeabilite artışı (VEGF).",
        mechanismEn: "Surface epithelium → malignant transformation (serous, mucinous, endometrioid, clear cell). Most common type: High-grade serous carcinoma (70%) — p53 mutation, BRCA1/2 (hereditary). Late diagnosis: Pelvic peritoneum → omentum → diaphragmatic peritoneal spread (FIGO III-IV). Ascites formation: Peritoneal tumor implants → increased vascular permeability (VEGF).",
        references: [
            "O-RADS: ACR O-RADS MRI Risk Stratification System. American College of Radiology; 2020.",
            "FIGO Committee on Gynecologic Oncology. FIGO staging for ovarian, fallopian tube, and peritoneal cancer. International Journal of Gynecology & Obstetrics. 2014;124(1):1-5.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "Type I: Obesity, DM, HTN, PCOS, estrogen therapy, tamoxifen. Type II: On background of atrophy, Lynch syndrome.",
        differentialDiagnosis: [
            "Endometrial Polip (Benign, ince saplı, T2'de fibröz çekirdek hipointens, DWI kısıtlanması yok)",
            "Submüköz Miyom (T2 hipointens, endometrial kaviteye protrüzyon, miyometriumdan köken)",
            "Endometrial Hiperplazi (Diffüz kalınlaşma, fokal kitle yok, DWI'da belirgin kısıtlanma yok)",
            "Servikal Karsinom (Serviksten köken alır, endometrial kavite normal olabilir)",
            "Hematokolpos/Hematometre (Sıvı koleksiyonu, solid komponent yok, kontrastlanma yok)"
        ],
        differentialDiagnosisEn: [
            "Endometrial Polyp (Benign, thin pedicle, hypointense fibrous core on T2, no DWI restriction)",
            "Submucosal Fibroid (T2 hypointense, protrusion into endometrial cavity, originates from myometrium)",
            "Endometrial Hyperplasia (Diffuse thickening, no focal mass, no significant DWI restriction)",
            "Cervical Carcinoma (Originates from cervix, endometrial cavity may be normal)",
            "Hematocolpos/Hematometra (Fluid collection, no solid component, no enhancement)"
        ],
        goldStandard: "MRI: Dinamik kontrastlı T1 + DWI — miyometrial invazyon derinliği ve FIGO evrelemesi için altın standart.",
        goldStandardEn: "MRI: Dynamic contrast-enhanced T1 + DWI — gold standard for myometrial invasion depth and FIGO staging.",
        clinicalPearl: "Postmenopozal kanama + endometrial kalınlık >4mm = biyopsi şart. MRI'da JZ bütünlüğü korunuyorsa invazyon yok (Evre IA).",
        clinicalPearlEn: "Postmenopausal bleeding + endometrial thickness >4mm = biopsy mandatory. If JZ integrity is preserved on MRI, no invasion (Stage IA).",
        mechanism: "Östrojen maruziyeti → endometrial hiperplazi → atipik hiperplazi → tip I (endometrioid, %80, iyi prognoz). Tip II: Seröz veya berrak hücreli (hormonal bağımsız, kötü prognoz). MRI'da tümör T2 orta-yüksek sinyal (yüksek hücrelük, geniş intersellüler su); normal endometrium daha hiperintens; junctional zone hipointens bariyer — tümör bu bariyer geçerse miyometrium invazyonu.",
        mechanismEn: "Estrogen exposure → endometrial hyperplasia → atypical hyperplasia → type I (endometrioid, 80%, good prognosis). Type II: Serous or clear cell (hormone-independent, poor prognosis). On MRI, tumor shows T2 intermediate-high signal (high cellularity, wide intercellular water); normal endometrium is more hyperintense; junctional zone is hypointense barrier — if tumor breaches this barrier, myometrial invasion.",
        references: [
            "FIGO Committee on Gynecologic Oncology. Revised FIGO staging for endometrial cancer. International Journal of Gynecology & Obstetrics. 2009;105(2):103-104.",
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Pretreatment Evaluation and Follow-up of Endometrial Cancer. American College of Radiology.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "Previous PID/salpingitis, tubal surgery, history of ectopic pregnancy, IUD, smoking, IVF.",
        differentialDiagnosis: [
            "Korpus Luteum Kisti (βhCG negatif veya düşük, ring of fire pozitif olabilir, IUP eşlik edebilir)",
            "Over Torsiyonu (Büyümüş ödemli over, βhCG negatif, whirlpool sign)",
            "Rüptüre Hemorajik Kist (Akut ağrı + serbest sıvı, βhCG negatif)",
            "Apandisit (Sağ alt kadran, βhCG negatif, USG'de appendiks duvar kalınlaşması)",
            "Heterotopik Gebelik (IVF sonrası, IUP mevcut + eşzamanlı ektopik — nadir ama önemli)"
        ],
        differentialDiagnosisEn: [
            "Corpus Luteum Cyst (βhCG negative or low, ring of fire may be positive, IUP may coexist)",
            "Ovarian Torsion (Enlarged edematous ovary, βhCG negative, whirlpool sign)",
            "Ruptured Hemorrhagic Cyst (Acute pain + free fluid, βhCG negative)",
            "Appendicitis (Right lower quadrant, βhCG negative, appendiceal wall thickening on USG)",
            "Heterotopic Pregnancy (Post-IVF, IUP present + concurrent ectopic — rare but important)"
        ],
        goldStandard: "Transvajinal USG + serum βhCG: Boş uterus + βhCG >1500-2000 mIU/mL = ektopik gebelik tanısı için altın standart kombinasyon.",
        goldStandardEn: "Transvaginal USG + serum βhCG: Empty uterus + βhCG >1500-2000 mIU/mL = gold standard combination for ectopic pregnancy diagnosis.",
        clinicalPearl: "βhCG >1500-2000 mIU/mL olmasına rağmen intrauterin gebelik görülmüyorsa ektopik gebelik suçlu bulunana kadar masumiyetini kanıtlamalıdır.",
        clinicalPearlEn: "If βhCG >1500-2000 mIU/mL yet no intrauterine pregnancy is seen, ectopic pregnancy is guilty until proven innocent.",
        mechanism: "Fallop tübüne implante olan embriyo → tüp büyümesi → distansiyon → rüptür (6-8. haftalar). En sık bölge: İstmus-ampulla bileşkesi. Ring of fire işareti: Trofoblastik doku periferal vaskülarite oluşturur. Salpenjit, tüp cerrahisi, OİU geçmişi risk faktörü. İntrauterin IUD varlığına rağmen tüp gebeliği olabilir (IUD uterusu korur, tübü değil).",
        mechanismEn: "Embryo implanting in the fallopian tube → tubal growth → distension → rupture (weeks 6-8). Most common site: Isthmic-ampullary junction. Ring of fire sign: Trophoblastic tissue creates peripheral vascularity. Salpingitis, tubal surgery, IUD history are risk factors. Tubal pregnancy can occur despite intrauterine IUD presence (IUD protects the uterus, not the tube).",
        references: [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: First Trimester Bleeding. American College of Radiology.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017."
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
        etiologyEn: "Sexually transmitted infection (Gonorrhea, Chlamydia), IUD, post-gynecologic procedure, Crohn's disease.",
        differentialDiagnosis: [
            "Over Karsinomu (Solid kontrastlanan komponent, peritoneal implantlar, ateş/lökositoz yok)",
            "Endometrioma (T1 parlak, T2 shading, DWI kısıtlanması yok, klinik enfeksiyon bulgusu yok)",
            "Ektopik Gebelik (Pozitif βhCG, ring of fire, ateş yok, pü içeriği yok)",
            "Apandisit / Periapandiküler Apse (Sağ alt kadran, appendiks kökenli, over normal)",
            "Pelvik Hematom (Cerrahi/travma öyküsü, kontrastlanma yok, ateş genellikle yok)"
        ],
        differentialDiagnosisEn: [
            "Ovarian Carcinoma (Enhancing solid component, peritoneal implants, no fever/leukocytosis)",
            "Endometrioma (T1 bright, T2 shading, no DWI restriction, no clinical infection signs)",
            "Ectopic Pregnancy (Positive βhCG, ring of fire, no fever, no pus content)",
            "Appendicitis / Periappendiceal Abscess (Right lower quadrant, appendiceal origin, normal ovary)",
            "Pelvic Hematoma (History of surgery/trauma, no enhancement, usually no fever)"
        ],
        goldStandard: "Kontrastlı BT: Rim kontrastlanması + fat stranding + pelvik kompleks kitle — TOA tanısı ve komplikasyon değerlendirmesi için altın standart.",
        goldStandardEn: "Contrast-enhanced CT: Rim enhancement + fat stranding + pelvic complex mass — gold standard for TOA diagnosis and complication assessment.",
        clinicalPearl: "Apse içinde hava görülmesi = anaerobik enfeksiyon düşün = acil drenaj gerekebilir. DWI kısıtlanması apse ile nekrotik tümörü ayırmada yardımcıdır.",
        clinicalPearlEn: "Gas within abscess = consider anaerobic infection = emergent drainage may be needed. DWI restriction is helpful in differentiating abscess from necrotic tumor.",
        mechanism: "Pelvik inflamatuar hastalık (PID) → salpenjit → adneksiyal bölgede mikroorganizma toplanması → abse oluşumu. En sık etkenler: N. gonorrhoeae, C. trachomatis, anaeroblar. Apse içindeki pü: Ölü lökositler, bakteri, fibrin → DWI'da kısıtlanma. Rüptür → peritonit → acil cerrahi.",
        mechanismEn: "Pelvic inflammatory disease (PID) → salpingitis → accumulation of microorganisms in the adnexal region → abscess formation. Most common agents: N. gonorrhoeae, C. trachomatis, anaerobes. Pus within abscess: Dead leukocytes, bacteria, fibrin → DWI restriction. Rupture → peritonitis → emergency surgery.",
        references: [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "ACR Appropriateness Criteria: Acute Pelvic Pain in the Reproductive Age Group. American College of Radiology.",
            "Sahani DV, Samir AE. Abdominal Imaging. 2nd ed. Elsevier; 2017.",
            "Radiopaedia.org - Gynecological imaging"
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
        etiologyEn: "Genetic predisposition (familial) + Metabolic factors (obesity, insulin resistance). Insulin-sensitizing therapy (metformin) is effective.",
        differentialDiagnosis: [
            "Multifoliküler Overler (Foliküller periferal değil dağınık, stroma normal, over hacmi normal)",
            "Over Hiperstimülasyonu (İatrojenik, gonadotropin tedavisi sonrası, masif over büyümesi + asit)",
            "Konjenital Adrenal Hiperplazi (Androjen yüksek ama adrenal kökenli, 17-OH progesteron yüksek)",
            "Cushing Sendromu (Santral obezite, striae, kortizol yüksek, overlerde sekonder değişiklik)",
            "Androjen Salgılayan Tümör (Tek taraflı over kitlesi, çok yüksek testosteron, hızlı virilizasyon)"
        ],
        differentialDiagnosisEn: [
            "Multifollicular Ovaries (Follicles scattered not peripheral, normal stroma, normal ovarian volume)",
            "Ovarian Hyperstimulation (Iatrogenic, post-gonadotropin therapy, massive ovarian enlargement + ascites)",
            "Congenital Adrenal Hyperplasia (Androgen elevated but adrenal origin, 17-OH progesterone elevated)",
            "Cushing Syndrome (Central obesity, striae, elevated cortisol, secondary ovarian changes)",
            "Androgen-Secreting Tumor (Unilateral ovarian mass, very high testosterone, rapid virilization)"
        ],
        goldStandard: "Transvajinal USG: Over hacmi >10mL + ≥20 folikül (2-9mm)/over — Rotterdam morfolojik kriter. Klinik ve hormonal verilerle birleştirilmeli.",
        goldStandardEn: "Transvaginal USG: Ovarian volume >10mL + ≥20 follicles (2-9mm)/ovary — Rotterdam morphologic criterion. Must be combined with clinical and hormonal data.",
        clinicalPearl: "PCOS tanısı sadece görüntüleme ile konmaz — Rotterdam kriterlerinden en az 2'si (oligo/anovülasyon, hiperandrojenizm, PCO morfolojisi) gereklidir.",
        clinicalPearlEn: "PCOS diagnosis cannot be made by imaging alone — at least 2 of the Rotterdam criteria (oligo/anovulation, hyperandrogenism, PCO morphology) are required.",
        mechanism: "İnsülin direnci → Hiperinsulinemi → Over teka hücrelerinde androjen üretimi artışı (LH artışı) → FSH/LH oranı bozulur → folikül matürasyonu duraklar (anovülasyon) → foliküller küçük kalır ve birikir (PCO morfolojisi). LH pulsatilitesi artışı da katkıda bulunur. Sonuç: Kronik anovülasyon + hiperandrojenizm + infertilite döngüsü.",
        mechanismEn: "Insulin resistance → Hyperinsulinemia → Increased androgen production in ovarian theca cells (LH elevation) → FSH/LH ratio disrupted → follicle maturation arrested (anovulation) → follicles remain small and accumulate (PCO morphology). Increased LH pulsatility also contributes. Result: Chronic anovulation + hyperandrogenism + infertility cycle.",
        references: [
            "Brant WE, Helms CA. Fundamentals of Diagnostic Radiology. 5th ed. Lippincott Williams & Wilkins; 2019.",
            "Radiopaedia.org - Gynecological imaging",
            "ACR Appropriateness Criteria: Female Infertility. American College of Radiology."
        ]
    },
    {
        id: "serous-cystadenoma",
        name: "Seröz Kistadenom",
        nameEn: "Serous Cystadenoma",
        category: "Over Tümörleri",
        categoryEn: "Ovarian Tumors",
        findings: {
            usg: {
                description: "İnce duvarlı, uniloküler veya pauciloküler (az septasyonlu) kistik lezyon. Genellikle anekoik sıvı içerir. İnce (<3mm) düzgün septalar. Solid komponent yok. Papiller projeksiyon yok."
            },
            mri: {
                t2: "Belirgin hiperintens kist. İnce duvar ve septalar.",
                t1: "Hipointens (seröz sıvı).",
                t1_c: "İnce septalarda minimal enhancement.",
                dwi: "Difüzyon kısıtlaması yok."
            }
        },
        findingsEn: {
            usg: {
                description: "Thin-walled, unilocular or paucilocular (few septations) cystic lesion. Generally anechoic fluid content. Thin (<3mm) smooth septa. No solid component. No papillary projections."
            },
            mri: {
                t2: "Markedly hyperintense cyst. Thin wall and septa.",
                t1: "Hypointense (serous fluid).",
                t1_c: "Minimal enhancement of thin septa.",
                dwi: "No diffusion restriction."
            }
        },
        keyPoints: [
            "En sık benign over tümörü",
            "Genellikle uniloküler, ince duvarlı kist",
            "Malign transformasyon nadir (%1-2)",
            "Bilateral olabilir (%10-15)"
        ],
        keyPointsEn: [
            "Most common benign ovarian tumor",
            "Generally unilocular, thin-walled cyst",
            "Malignant transformation rare (1-2%)",
            "Can be bilateral (10-15%)"
        ],
        etiology: "Ovarian yüzey epiteli (seröz tip) kaynaklı benign neoplazm. Müllerian diferansiyasyon gösterir.",
        etiologyEn: "Benign neoplasm arising from ovarian surface epithelium (serous type). Shows Müllerian differentiation.",
        mechanism: "Over yüzey epitelinden veya kortikal inklüzyon kistlerinden köken alır → Seröz sıvı salgılayan tek katlı kuboid/kolumnar epitel ile döşeli kist oluşumu → Genellikle yavaş büyüme.",
        mechanismEn: "Originates from ovarian surface epithelium or cortical inclusion cysts → Cyst formation lined by single-layer cuboidal/columnar epithelium secreting serous fluid → Generally slow growth.",
        differentialDiagnosis: [
            "Fonksiyonel Over Kisti (Genellikle <5cm, 6-8 haftada regrese olur)",
            "Müsinöz Kistadenom (Multiloküler, daha büyük, heterojen iç eko)",
            "Hidrosalpinks (Tübüler şekil, incomplete septum, waist sign)",
            "Paraovarian Kist (Overden ayrı lokalizasyon, broad ligament)",
            "Seröz Kistadenokarsinom (Kalın septalar, solid komponent, papiller projeksiyon, asit)"
        ],
        differentialDiagnosisEn: [
            "Functional Ovarian Cyst (Generally <5cm, regresses in 6-8 weeks)",
            "Mucinous Cystadenoma (Multilocular, larger, heterogeneous internal echo)",
            "Hydrosalpinx (Tubular shape, incomplete septum, waist sign)",
            "Paraovarian Cyst (Location separate from ovary, broad ligament)",
            "Serous Cystadenocarcinoma (Thick septa, solid component, papillary projections, ascites)"
        ],
        goldStandard: "Histopatolojik inceleme — Seröz sıvı içeren, tek katlı benign seröz epitel ile döşeli kist.",
        goldStandardEn: "Histopathologic examination — Cyst lined by single-layer benign serous epithelium containing serous fluid.",
        clinicalPearl: "O-RADS US 2 (basit kist >10cm) veya O-RADS 3 (ince septasyonlu) sınıflamasına girer. Basit, anekoik, ince duvarlı kistler neredeyse her zaman benigndir.",
        clinicalPearlEn: "Falls under O-RADS US 2 (simple cyst >10cm) or O-RADS 3 (thin septations) classification. Simple, anechoic, thin-walled cysts are almost always benign.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Serous cystadenoma of the ovary",
            "O-RADS US Risk Stratification and Management System. Radiology; 2020."
        ]
    },
    {
        id: "mucinous-cystadenoma",
        name: "Müsinöz Kistadenom",
        nameEn: "Mucinous Cystadenoma",
        category: "Over Tümörleri",
        categoryEn: "Ovarian Tumors",
        findings: {
            usg: {
                description: "Büyük (>10cm olabilir), multiloküler kistik kitle. Loküller arasında değişen ekojenite ('stained glass' görünümü). İnce septalar. Solid komponent yok (benign ise). Müsinöz içerik nedeniyle düşük seviye internal eko."
            },
            mri: {
                t1: "Loküller arası değişen sinyal intensitesi (protein içeriğine bağlı).",
                t2: "Değişen hiperintensite (loküller arası farklılık). 'Stained glass' bulgusu. İnce düzenli septalar.",
                t1_c: "Septal enhancement."
            }
        },
        findingsEn: {
            usg: {
                description: "Large (can be >10cm), multilocular cystic mass. Varying echogenicity between locules ('stained glass' appearance). Thin septa. No solid component (if benign). Low-level internal echoes due to mucinous content."
            },
            mri: {
                t1: "Varying signal intensity between locules (protein content dependent).",
                t2: "Varying hyperintensity (inter-locular differences). 'Stained glass' finding. Thin regular septa.",
                t1_c: "Septal enhancement."
            }
        },
        keyPoints: [
            "Genellikle büyük, multiloküler kistik kitle",
            "'Stained glass' görünümü patognomonik",
            "Unilateral (%95+)",
            "Rüptür halinde pseudomyxoma peritonei riski"
        ],
        keyPointsEn: [
            "Generally large, multilocular cystic mass",
            "'Stained glass' appearance pathognomonic",
            "Unilateral (95%+)",
            "Risk of pseudomyxoma peritonei if ruptured"
        ],
        etiology: "Over yüzey epitelinden (müsinöz tip) kaynaklı benign neoplazm. GI-tip ve endoservikal tip alt grupları vardır.",
        etiologyEn: "Benign neoplasm arising from ovarian surface epithelium (mucinous type). GI-type and endocervical-type subtypes exist.",
        mechanism: "Over epitelinden müsin salgılayan kolumnar hücrelerin proliferasyonu → Multiloküler kistik yapı → Her lokül farklı konsantrasyonda müsin içerir → Görüntülemede heterojen sinyal/eko.",
        mechanismEn: "Proliferation of mucin-secreting columnar cells from ovarian epithelium → Multilocular cystic structure → Each locule contains mucin of different concentration → Heterogeneous signal/echo on imaging.",
        differentialDiagnosis: [
            "Seröz Kistadenom (Uniloküler, homojen sıvı, daha küçük)",
            "Matür Kistik Teratom (Yağ-sıvı seviyesi, kalsifikasyon, Rokitansky nodülü)",
            "Müsinöz Kistadenokarsinom (Kalın irregüler septalar, solid komponent, asit)",
            "Endometrioma (Homojen 'ground glass', T1 hiperintens)",
            "Apendiks Müsosel (Sağ alt kadran, tübüler yapı, appendiks ile ilişkili)"
        ],
        differentialDiagnosisEn: [
            "Serous Cystadenoma (Unilocular, homogeneous fluid, smaller)",
            "Mature Cystic Teratoma (Fat-fluid level, calcification, Rokitansky nodule)",
            "Mucinous Cystadenocarcinoma (Thick irregular septa, solid component, ascites)",
            "Endometrioma (Homogeneous 'ground glass', T1 hyperintense)",
            "Appendiceal Mucocele (Right lower quadrant, tubular structure, associated with appendix)"
        ],
        goldStandard: "Histopatoloji — Müsin salgılayan tek katlı kolumnar epitel ile döşeli multiloküler kist, stromal invazyon yok.",
        goldStandardEn: "Histopathology — Multilocular cyst lined by single-layer mucin-secreting columnar epithelium, no stromal invasion.",
        clinicalPearl: "Müsinöz over tümörü saptandığında appendiks mutlaka değerlendirilmelidir — primer appendiks müsinöz neoplazmı over metastazı yapabilir (Pseudomyxoma peritonei kaynağı).",
        clinicalPearlEn: "When a mucinous ovarian tumor is identified, the appendix must be evaluated — primary appendiceal mucinous neoplasm can metastasize to the ovary (source of pseudomyxoma peritonei).",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Mucinous cystadenoma of the ovary",
            "WHO Classification of Tumours: Female Genital Tumours. 5th ed. IARC; 2020."
        ]
    },
    {
        id: "ovarian-fibroma",
        name: "Over Fibromu",
        nameEn: "Ovarian Fibroma",
        category: "Over Tümörleri",
        categoryEn: "Ovarian Tumors",
        findings: {
            usg: {
                description: "Solid, hipoekoik over kitlesi. Posterior akustik gölgelenme (yoğun fibröz doku). Homojen eko paterni. Kistik dejenerasyon olabilir. Asit eşlik edebilir (Meigs sendromu)."
            },
            mri: {
                t1: "Hipointens (fibröz doku).",
                t2: "Belirgin hipointens (karakteristik — fibröz doku). Kalsifikasyon olabilir.",
                t1_c: "Geç ve düşük enhancement.",
                dwi: "Değişken."
            }
        },
        findingsEn: {
            usg: {
                description: "Solid, hypoechoic ovarian mass. Posterior acoustic shadowing (dense fibrous tissue). Homogeneous echo pattern. Cystic degeneration possible. Ascites may accompany (Meigs syndrome)."
            },
            mri: {
                t1: "Hypointense (fibrous tissue).",
                t2: "Markedly hypointense (characteristic — fibrous tissue). Calcification possible.",
                t1_c: "Late and low enhancement.",
                dwi: "Variable."
            }
        },
        keyPoints: [
            "En sık over stromal tümörü",
            "T2'de belirgin hipointens (fibröz doku)",
            "Meigs sendromu: fibroma + asit + plevral efüzyon",
            "Benign — malign transformasyon çok nadir"
        ],
        keyPointsEn: [
            "Most common ovarian stromal tumor",
            "Markedly hypointense on T2 (fibrous tissue)",
            "Meigs syndrome: fibroma + ascites + pleural effusion",
            "Benign — malignant transformation very rare"
        ],
        etiology: "Over stromasından (fibroblastlar/kollajen) kaynaklı benign tümör. Sex-cord stromal tümör grubunda.",
        etiologyEn: "Benign tumor arising from ovarian stroma (fibroblasts/collagen). In the sex-cord stromal tumor group.",
        mechanism: "Over stromal fibroblastlarının proliferasyonu → Yoğun kollajen biriktiren solid kitle → T2 hipointensite → Peritoneal irritasyon/lenfatik drenaj bozukluğu → Asit → Diyafragma aracılığıyla plevral efüzyon (Meigs sendromu).",
        mechanismEn: "Proliferation of ovarian stromal fibroblasts → Solid mass accumulating dense collagen → T2 hypointensity → Peritoneal irritation/lymphatic drainage dysfunction → Ascites → Pleural effusion via diaphragm (Meigs syndrome).",
        differentialDiagnosis: [
            "Brenner Tümörü (Solid, kalsifikasyon, benzer T2 hipointensite)",
            "Pedünküllü Uterin Leiomyom (Uterus ile bağlantı, T2 hipointens)",
            "Granüloza Hücreli Tümör (Solid-kistik, T2'de heterojen, estrojen üretir)",
            "Over Metastazı (Bilateral, irregüler, asit)",
            "Tekoma (Lipid içerir, T1'de hafif hiperintens olabilir)"
        ],
        differentialDiagnosisEn: [
            "Brenner Tumor (Solid, calcification, similar T2 hypointensity)",
            "Pedunculated Uterine Leiomyoma (Connection to uterus, T2 hypointense)",
            "Granulosa Cell Tumor (Solid-cystic, heterogeneous on T2, produces estrogen)",
            "Ovarian Metastasis (Bilateral, irregular, ascites)",
            "Thecoma (Contains lipid, may be mildly hyperintense on T1)"
        ],
        goldStandard: "Histopatoloji — Kollajen üreten iğsi hücreler (fibroblastlar), storiform patern, mitotik aktivite düşük.",
        goldStandardEn: "Histopathology — Collagen-producing spindle cells (fibroblasts), storiform pattern, low mitotic activity.",
        clinicalPearl: "MR'da T2 hipointens solid over kitlesi + asit + plevral efüzyon üçlüsü görüldüğünde Meigs sendromu (over fibromu) akla gelmelidir. Asit ve efüzyon cerrahiden sonra rezolüsyon gösterir.",
        clinicalPearlEn: "When T2 hypointense solid ovarian mass + ascites + pleural effusion triad is seen on MRI, Meigs syndrome (ovarian fibroma) should be considered. Ascites and effusion resolve after surgery.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Ovarian fibroma",
            "WHO Classification of Tumours: Female Genital Tumours. 5th ed. IARC; 2020."
        ]
    },
    {
        id: "brenner-tumor",
        name: "Brenner Tümörü",
        nameEn: "Brenner Tumor",
        category: "Over Tümörleri",
        categoryEn: "Ovarian Tumors",
        findings: {
            usg: {
                description: "Küçük (<5cm), solid, hipoekoik over kitlesi. Kalsifikasyon sık (amorf veya düzensiz). Posterior akustik gölgelenme. Diğer over tümörleri ile birlikte olabilir (özellikle müsinöz kistadenom)."
            },
            mri: {
                t1: "İzointens-hipointens.",
                t2: "Belirgin hipointens (yoğun fibröz stroma). Kalsifikasyon.",
                t1_c: "Minimal-orta enhancement. Solid, iyi sınırlı kitle."
            }
        },
        findingsEn: {
            usg: {
                description: "Small (<5cm), solid, hypoechoic ovarian mass. Calcification common (amorphous or irregular). Posterior acoustic shadowing. May coexist with other ovarian tumors (especially mucinous cystadenoma)."
            },
            mri: {
                t1: "Isointense-hypointense.",
                t2: "Markedly hypointense (dense fibrous stroma). Calcification.",
                t1_c: "Minimal to moderate enhancement. Solid, well-defined mass."
            }
        },
        keyPoints: [
            "Genellikle küçük (<5cm), solid, kalsifiye over kitlesi",
            "T2'de hipointens (fibröz stroma)",
            "Müsinöz kistadenomla birliktelik sık",
            "Benign (%95+), malign/borderline varyant nadir"
        ],
        keyPointsEn: [
            "Generally small (<5cm), solid, calcified ovarian mass",
            "Hypointense on T2 (fibrous stroma)",
            "Frequent association with mucinous cystadenoma",
            "Benign (95%+), malignant/borderline variant rare"
        ],
        etiology: "Over yüzey epitelinden kaynaklı transisyonel (ürotelyal) tipte epitelyal tümör. Walthard hücre artıklarından geliştiği düşünülür.",
        etiologyEn: "Transitional (urothelial) type epithelial tumor arising from ovarian surface epithelium. Thought to develop from Walthard cell rests.",
        mechanism: "Over yüzey epitelinden transisyonel hücre nesleri → Yoğun fibröz stroma içinde transisyonel epitel adaları (Walthard cell nests) → Distrofik kalsifikasyon → Solid, kalsifiye kitle.",
        mechanismEn: "Transitional cell nests from ovarian surface epithelium → Transitional epithelial islands within dense fibrous stroma (Walthard cell nests) → Dystrophic calcification → Solid, calcified mass.",
        differentialDiagnosis: [
            "Over Fibromu (Kalsifikasyon daha az, T2 hipointens benzer)",
            "Kalsifiye Fibroma (Benzer görünüm, histoloji ayırıcı)",
            "Matür Teratom (Yağ, kıl, diş — heterojen, kalsifikasyon farklı patern)",
            "Pedünküllü Kalsifiye Leiomyom (Uterin kökenli, geniş ligament bağlantısı)"
        ],
        differentialDiagnosisEn: [
            "Ovarian Fibroma (Less calcification, similar T2 hypointensity)",
            "Calcified Fibroma (Similar appearance, histology is differentiating)",
            "Mature Teratoma (Fat, hair, teeth — heterogeneous, different calcification pattern)",
            "Pedunculated Calcified Leiomyoma (Uterine origin, broad ligament connection)"
        ],
        goldStandard: "Histopatoloji — Fibröz stroma içinde transisyonel epitel adaları ('coffee bean' nükleus), Walthard hücre nesleri.",
        goldStandardEn: "Histopathology — Transitional epithelial islands within fibrous stroma ('coffee bean' nucleus), Walthard cell nests.",
        clinicalPearl: "Kalsifiye solid over kitlesi + eşlik eden müsinöz kistik lezyon görüldüğünde Brenner tümörü akla gelmelidir. Genellikle insidental saptanır.",
        clinicalPearlEn: "When a calcified solid ovarian mass + accompanying mucinous cystic lesion is seen, Brenner tumor should be considered. Usually an incidental finding.",
        references: [
            "WHO Classification of Tumours: Female Genital Tumours. 5th ed. IARC; 2020.",
            "Radiopaedia.org - Brenner tumor",
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023."
        ]
    },
    {
        id: "hydrosalpinx",
        name: "Hidrosalpinks",
        nameEn: "Hydrosalpinx",
        category: "Tüp Patolojileri",
        categoryEn: "Tubal Pathologies",
        findings: {
            usg: {
                description: "Elonge, tübüler, kıvrımlı anekoik yapı (adneksiyal bölge). 'Cogwheel sign' (aksiyel kesit — endosalpingeal katlantılar). 'Beads on a string' bulgusu (mukozal katlantıların enine kesiti). Incomplete septum. Over ile ayrı lokalize."
            },
            mri: {
                t1: "Hipointens (seröz sıvı).",
                t2: "Belirgin hiperintens, tübüler yapı. Kıvrımlı morfoloji. İnkomplet septumlar (plicae).",
                t1_c: "İnce duvar enhancement.",
                dwi: "Difüzyon kısıtlaması yok (enfeksiyon yoksa)."
            }
        },
        findingsEn: {
            usg: {
                description: "Elongated, tubular, tortuous anechoic structure (adnexal region). 'Cogwheel sign' (axial section — endosalpingeal folds). 'Beads on a string' finding (cross-section of mucosal folds). Incomplete septum. Separate from ovary."
            },
            mri: {
                t1: "Hypointense (serous fluid).",
                t2: "Markedly hyperintense, tubular structure. Tortuous morphology. Incomplete septa (plicae).",
                t1_c: "Thin wall enhancement.",
                dwi: "No diffusion restriction (if no infection)."
            }
        },
        keyPoints: [
            "'Cogwheel sign' ve 'beads on a string' karakteristik",
            "Tübüler, kıvrımlı, sıvı dolu yapı",
            "İnfertilite nedeni olarak önemli",
            "Pyosalpinks'ten ayrımı önemli (klinik + DWI)"
        ],
        keyPointsEn: [
            "'Cogwheel sign' and 'beads on a string' characteristic",
            "Tubular, tortuous, fluid-filled structure",
            "Important cause of infertility",
            "Differentiation from pyosalpinx important (clinical + DWI)"
        ],
        etiology: "PID (en sık), endometriozis, cerrahi sonrası yapışıklıklar, tübal ligasyon sonrası. Distal tüp obstrüksiyonu sonucu sıvı birikimi.",
        etiologyEn: "PID (most common), endometriosis, post-surgical adhesions, post-tubal ligation. Fluid accumulation due to distal tubal obstruction.",
        mechanism: "Enfeksiyon/inflamasyon → Distal tuba uterina (fimbrial uç) obstrüksiyonu → Tüp lümeninde seröz sıvı birikimi → Tüp dilatasyonu → Kronik hidrosalpinks → Mukozal hasar → İnfertilite.",
        mechanismEn: "Infection/inflammation → Distal fallopian tube (fimbrial end) obstruction → Serous fluid accumulation in tubal lumen → Tubal dilatation → Chronic hydrosalpinx → Mucosal damage → Infertility.",
        differentialDiagnosis: [
            "Paraovarian Kist (Yuvarlak, tübüler değil, septum yok)",
            "Peritoneal İnklüzyon Kisti (Overi sarar, kompartmanlı sıvı)",
            "Pyosalpinks (Kalın duvar, internal debris, DWI pozitif, ateş)",
            "İntestinal Loop (Peristaltizm, mukozal katlantılar farklı)",
            "Apendiks Müsosel (Sağ alt kadran, kör uçlu, appendiks ile bağlantılı)"
        ],
        differentialDiagnosisEn: [
            "Paraovarian Cyst (Round, not tubular, no septum)",
            "Peritoneal Inclusion Cyst (Surrounds ovary, compartmentalized fluid)",
            "Pyosalpinx (Thick wall, internal debris, DWI positive, fever)",
            "Intestinal Loop (Peristalsis, different mucosal fold pattern)",
            "Appendiceal Mucocele (Right lower quadrant, blind-ended, associated with appendix)"
        ],
        goldStandard: "HSG (Histerosalpingografi) — Distal tüp obstrüksiyonu ve tüp dilatasyonunu gösterir. USG ve MR tanıyı destekler.",
        goldStandardEn: "HSG (Hysterosalpingography) — Demonstrates distal tubal obstruction and tubal dilatation. USG and MRI support the diagnosis.",
        clinicalPearl: "İnfertilite değerlendirmesinde adneksiyal tübüler yapı saptandığında hidrosalpinks düşünülmelidir. IVF öncesi hidrosalpinks tedavisi (salpinjektomi) implantasyon oranlarını artırır.",
        clinicalPearlEn: "When an adnexal tubular structure is identified during infertility evaluation, hydrosalpinx should be considered. Treatment of hydrosalpinx before IVF (salpingectomy) improves implantation rates.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Hydrosalpinx",
            "ACR Appropriateness Criteria: Female Infertility. American College of Radiology; 2020."
        ]
    },
    {
        id: "endometrial-polyp",
        name: "Endometrial Polip",
        nameEn: "Endometrial Polyp",
        category: "Uterin Patolojiler",
        categoryEn: "Uterine Pathologies",
        findings: {
            usg: {
                description: "Endometrial kavitede hiperekoik fokal kitle. Sonohisterografide (SIS): İntrakavitenin sıvı ile dolu iken polipoid kitle net seçilir. Feeding vessel (besleyici damar) Doppler'de gösterilebilir. Kistik alanlar içerebilir (dilate glandlar).",
                doppler: "Feeding vessel (besleyici pediküllü damar) gösterilebilir."
            },
            mri: {
                t2: "İntrakaviter kitle, endometriuma göre izointens-hafif hiperintens. İntratümöral kistik alanlar (dilate glandlar) T2 hiperintens. Fibröz çekirdek T2 hipointens olabilir.",
                t1_c: "Enhancement gösterir."
            }
        },
        findingsEn: {
            usg: {
                description: "Hyperechoic focal mass in endometrial cavity. On sonohysterography (SIS): Polypoid mass clearly delineated with fluid-filled cavity. May contain cystic areas (dilated glands).",
                doppler: "Feeding vessel demonstrable."
            },
            mri: {
                t2: "Intracavitary mass, isointense to slightly hyperintense relative to endometrium. Intratumoral cystic areas (dilated glands) T2 hyperintense. Fibrous core may be T2 hypointense.",
                t1_c: "Shows enhancement."
            }
        },
        keyPoints: [
            "Endometrial kavitede fokal hiperekoik kitle",
            "Feeding vessel (pediküllü besleyici damar) Doppler'de tanısal",
            "SIS (Sonohisterografi) tanıda altın standart görüntüleme",
            "Anormal uterin kanama en sık semptom"
        ],
        keyPointsEn: [
            "Focal hyperechoic mass in endometrial cavity",
            "Feeding vessel (pedicled feeder) diagnostic on Doppler",
            "SIS (Sonohysterography) gold standard imaging for diagnosis",
            "Abnormal uterine bleeding most common symptom"
        ],
        etiology: "Endometrial gland ve stromanın fokal aşırı büyümesi. Östrojen bağımlı. Tamoxifen kullanımı risk artırır.",
        etiologyEn: "Focal overgrowth of endometrial glands and stroma. Estrogen-dependent. Tamoxifen use increases risk.",
        mechanism: "Östrojen stimülasyonu → Endometrial gland ve stromanın lokal hiperplazisi → Pediküllü veya sesil polipoid kitle oluşumu → İntrakaviter büyüme → Kanama (yüzeyel vasküler yapıların mekanik irritasyonu).",
        mechanismEn: "Estrogen stimulation → Local hyperplasia of endometrial glands and stroma → Pedunculated or sessile polypoid mass formation → Intracavitary growth → Bleeding (mechanical irritation of superficial vascular structures).",
        differentialDiagnosis: [
            "Endometrial Hiperplazi (Diffüz kalınlaşma, fokal değil)",
            "Submuköz Leiomyom (Hipoekoik, endometriumdan farklı eko, feeding vessel farklı patern)",
            "Endometrial Karsinom (İrregüler kontur, myometrial invazyon, heterojen)",
            "Kan Pıhtısı (Doppler'de vaskülarite yok, kontrol USG'de kaybolur)",
            "Endometrial Adhesyon (Asherman) (Endometrial kavite obliterasyonu, SIS'te sıvı geçişi engeli)"
        ],
        differentialDiagnosisEn: [
            "Endometrial Hyperplasia (Diffuse thickening, not focal)",
            "Submucosal Leiomyoma (Hypoechoic, different echo from endometrium, different feeding vessel pattern)",
            "Endometrial Carcinoma (Irregular contour, myometrial invasion, heterogeneous)",
            "Blood Clot (No vascularity on Doppler, disappears on follow-up USG)",
            "Endometrial Adhesion (Asherman) (Endometrial cavity obliteration, fluid passage obstruction on SIS)"
        ],
        goldStandard: "Histeroskopi + Biyopsi — Polip direkt vizüalizasyonu ve patolojik inceleme. SIS en iyi noninvaziv görüntüleme.",
        goldStandardEn: "Hysteroscopy + Biopsy — Direct polyp visualization and pathologic examination. SIS is the best noninvasive imaging.",
        clinicalPearl: "Postmenopozal kanamada endometrial polip saptandığında biyopsi şarttır — %1-3 malign transformasyon riski vardır. Tamoxifen kullanan hastalarda polip prevalansı %30-60'a yükselir.",
        clinicalPearlEn: "Biopsy is mandatory when an endometrial polyp is detected in postmenopausal bleeding — 1-3% malignant transformation risk exists. Polyp prevalence rises to 30-60% in patients using tamoxifen.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Endometrial polyp",
            "ACR Appropriateness Criteria: Abnormal Uterine Bleeding. American College of Radiology; 2020."
        ]
    },
    {
        id: "gestational-trophoblastic",
        name: "Gestasyonel Trofoblastik Hastalık (Mol Hidatidiform)",
        nameEn: "Gestational Trophoblastic Disease (Hydatidiform Mole)",
        category: "Gebelik Patolojileri",
        categoryEn: "Pregnancy Pathologies",
        findings: {
            usg: {
                description: "Komplet mol: Uterus kavitesini dolduran heterojen ekojenik kitle — 'kar fırtınası' veya 'üzüm salkımı' görünümü. Multipl küçük kistik alanlar (hidropik villi). Fetus yok. Bilateral tekoluteın kistleri (over). Parsiyel mol: Fokal kistik değişiklikler + fetal parçalar."
            },
            mri: {
                t2: "Heterojen hiperintens kitle, multipl küçük kistik alanlar.",
                t1: "İnternal kanama alanları hiperintens.",
                t1_c: "Belirgin heterojen enhancement. Myometrial invazyon değerlendirmesi (invaziv mol ayrımı için) kritik."
            }
        },
        findingsEn: {
            usg: {
                description: "Complete mole: Heterogeneous echogenic mass filling uterine cavity — 'snowstorm' or 'cluster of grapes' appearance. Multiple small cystic areas (hydropic villi). No fetus. Bilateral theca-lutein cysts (ovary). Partial mole: Focal cystic changes + fetal parts."
            },
            mri: {
                t2: "Heterogeneous hyperintense mass, multiple small cystic areas.",
                t1: "Internal hemorrhage areas hyperintense.",
                t1_c: "Marked heterogeneous enhancement. Myometrial invasion assessment (for invasive mole differentiation) critical."
            }
        },
        keyPoints: [
            "'Kar fırtınası' / 'üzüm salkımı' USG görünümü klasik",
            "β-hCG çok yüksek (>100.000 mIU/mL)",
            "Bilateral tekoluteın kistleri eşlik edebilir",
            "Post-evakuasyon β-hCG takibi şart (koryokarsinom riski)"
        ],
        keyPointsEn: [
            "'Snowstorm' / 'cluster of grapes' USG appearance classic",
            "β-hCG very high (>100,000 mIU/mL)",
            "Bilateral theca-lutein cysts may accompany",
            "Post-evacuation β-hCG follow-up mandatory (choriocarcinoma risk)"
        ],
        etiology: "Komplet mol: 46,XX (paternal dizomi — tüm kromozomlar babadan). Parsiyel mol: 69,XXY (triploid — ek paternal haploid set). Anormal fertilizasyon sonucu.",
        etiologyEn: "Complete mole: 46,XX (paternal disomy — all chromosomes from father). Partial mole: 69,XXY (triploid — extra paternal haploid set). Result of abnormal fertilization.",
        mechanism: "Anormal konsepsiyon → Trofoblast hiperplazisi + vilöz ödem (hidropik şişme) → β-hCG aşırı üretimi → Uterus kavitesinde kistik vilöz doku birikimi → 'Üzüm salkımı'. Yüksek hCG → Over hiperstimülasyonu → Tekoluteın kistleri.",
        mechanismEn: "Abnormal conception → Trophoblast hyperplasia + villous edema (hydropic swelling) → Excessive β-hCG production → Cystic villous tissue accumulation in uterine cavity → 'Cluster of grapes'. High hCG → Ovarian hyperstimulation → Theca-lutein cysts.",
        differentialDiagnosis: [
            "Missed Abortus (β-hCG düşük, fetal yapılar mevcut, kistik değişiklik daha az)",
            "İnkomplet Abortus (Heterojen intrakaviter materyal, klinik uyumlu)",
            "Koryokarsinom (Post-molar, myometrial invazyon, metastaz, β-hCG persiste yüksek)",
            "Dejenere Myom (Kistik alanlar ama intramural, β-hCG normal)",
            "Plasental Mezenkimal Displazi (Plasentada kistik alanlar, normal karyotip, fetus normal)"
        ],
        differentialDiagnosisEn: [
            "Missed Abortion (Low β-hCG, fetal structures present, less cystic change)",
            "Incomplete Abortion (Heterogeneous intracavitary material, clinically compatible)",
            "Choriocarcinoma (Post-molar, myometrial invasion, metastasis, persistently elevated β-hCG)",
            "Degenerated Fibroid (Cystic areas but intramural, normal β-hCG)",
            "Placental Mesenchymal Dysplasia (Cystic areas in placenta, normal karyotype, normal fetus)"
        ],
        goldStandard: "Histopatoloji (küretaj materyali) — Vilöz hidropik şişme, trofoblast hiperplazisi. Komplet: p57 negatif. Parsiyel: p57 pozitif.",
        goldStandardEn: "Histopathology (curettage material) — Villous hydropic swelling, trophoblast hyperplasia. Complete: p57 negative. Partial: p57 positive.",
        clinicalPearl: "Birinci trimesterde uterusta 'kar fırtınası' görünümü + aşırı yüksek β-hCG + bilateral over kistleri üçlüsü mol hidatidiform için klasik triaddır. Evakuasyon sonrası β-hCG 0'a düşene kadar haftalık takip gerekir.",
        clinicalPearlEn: "First trimester 'snowstorm' appearance in uterus + extremely high β-hCG + bilateral ovarian cysts triad is classic for hydatidiform mole. Weekly follow-up required until β-hCG drops to 0 after evacuation.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Hydatidiform mole",
            "FIGO Staging for Gestational Trophoblastic Neoplasia. International Journal of Gynecology & Obstetrics; 2021."
        ]
    },
    {
        id: "cesarean-scar-ectopic",
        name: "Sezaryen Skar Ektopik Gebelik",
        nameEn: "Cesarean Scar Ectopic Pregnancy",
        category: "Gebelik Patolojileri",
        categoryEn: "Pregnancy Pathologies",
        findings: {
            usg: {
                description: "Sezaryen skar bölgesinde (alt uterin segment anterior duvar) gestasyonel kese. Boş uterin kavite ve servikal kanal. İnce myometrium (<5mm) kese ile mesane arasında. Gestasyonel kesenin skar nişine doğru implantasyonu.",
                doppler: "Periferik hipervaskülarite."
            },
            mri: {
                t2: "Skar bölgesinde gestasyonel kese (T2 hiperintens). Anterior myometriumda incelme. Kese ile mesane arasında mesafe ölçümü.",
                t1_c: "Belirgin trofoblastik enhancement."
            }
        },
        findingsEn: {
            usg: {
                description: "Gestational sac at cesarean scar site (lower uterine segment anterior wall). Empty uterine cavity and cervical canal. Thin myometrium (<5mm) between sac and bladder. Implantation of gestational sac into scar niche.",
                doppler: "Peripheral hypervascularity."
            },
            mri: {
                t2: "Gestational sac at scar site (T2 hyperintense). Anterior myometrium thinning. Distance measurement between sac and bladder.",
                t1_c: "Marked trophoblastic enhancement."
            }
        },
        keyPoints: [
            "Sezaryen skar nişinde gestasyonel kese",
            "Boş uterin kavite + boş servikal kanal",
            "İnce myometrium (<5mm) kese-mesane arası kritik",
            "Erken tanı hayat kurtarıcı — rüptür riski yüksek"
        ],
        keyPointsEn: [
            "Gestational sac in cesarean scar niche",
            "Empty uterine cavity + empty cervical canal",
            "Thin myometrium (<5mm) between sac-bladder critical",
            "Early diagnosis life-saving — high rupture risk"
        ],
        etiology: "Önceki sezaryen insizyonu skar dokusuna blastosist implantasyonu. Sezaryen sayısı arttıkça risk artar.",
        etiologyEn: "Blastocyst implantation into the scar tissue of a previous cesarean incision. Risk increases with number of cesarean sections.",
        mechanism: "Sezaryen skarında myometrial defekt (niş) → Blastosist skar dokusuna implante olur → Trofoblast invazyonu desidua yerine skar dokusuna → İnce myometrium → Vasküler invazyon riski → Kontrolsüz büyüme → Uterin rüptür ve masif kanama riski.",
        mechanismEn: "Myometrial defect (niche) at the cesarean scar → Blastocyst implants into scar tissue → Trophoblast invasion into scar tissue instead of decidua → Thin myometrium → Risk of vascular invasion → Uncontrolled growth → Risk of uterine rupture and massive hemorrhage.",
        differentialDiagnosis: [
            "Servikal Ektopik Gebelik (Kese servikste, skar bölgesinden daha aşağıda)",
            "Servikoisthmik Gebelik (Geçiş bölgesi, normal myometrium kalınlığı)",
            "İnkomplet Abortus (Retansiyon materyali, β-hCG düşüyor)",
            "Normal İntrauterin Gebelik (Kese fundus/korpusta, skar bölgesinde değil)"
        ],
        differentialDiagnosisEn: [
            "Cervical Ectopic Pregnancy (Sac in cervix, lower than scar site)",
            "Cervicoisthmic Pregnancy (Transition zone, normal myometrial thickness)",
            "Incomplete Abortion (Retained products, β-hCG decreasing)",
            "Normal Intrauterine Pregnancy (Sac in fundus/corpus, not at scar site)"
        ],
        goldStandard: "Transvajinal USG — Skar nişinde gestasyonel kese, boş uterin kavite, ince anterior myometrium (<5mm). Doppler ile periferik hipervaskülarite.",
        goldStandardEn: "Transvaginal USG — Gestational sac in scar niche, empty uterine cavity, thin anterior myometrium (<5mm). Peripheral hypervascularity on Doppler.",
        clinicalPearl: "Sezaryen öyküsü olan hastada birinci trimesterde alt segment anterior duvarda gestasyonel kese saptandığında sezaryen skar ektopik gebelik mutlaka ekarte edilmelidir. İsthmik-servikal bölge dışında kese internal os üzerinde ise normal gebelik olabilir.",
        clinicalPearlEn: "When a gestational sac is identified at the lower segment anterior wall in the first trimester in a patient with cesarean history, cesarean scar ectopic pregnancy must be excluded. If the sac is above the internal os outside the isthmic-cervical region, it may be a normal pregnancy.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Caesarean section scar ectopic pregnancy",
            "Timor-Tritsch IE, et al. Cesarean scar pregnancies. J Ultrasound Med; 2012."
        ]
    },
    {
        id: "ovarian-hyperstimulation",
        name: "Over Hiperstimülasyon Sendromu (OHSS)",
        nameEn: "Ovarian Hyperstimulation Syndrome (OHSS)",
        category: "Over Patolojileri",
        categoryEn: "Ovarian Pathologies",
        findings: {
            usg: {
                description: "Bilateral büyümüş overler (>5cm, ciddi olgularda >12cm). Multipl büyük foliküler kistler ('spoke wheel' görünümü). Pelviste serbest sıvı (asit). Plevral efüzyon (ciddi olgularda). Stromal ödem."
            },
            mri: {
                t2: "Bilateral büyümüş overlerde multipl hiperintens foliküler kistler. Asit. Plevral efüzyon. Over stromasında ödem (T2 hiperintens).",
                t1: "Foliküler kanama halinde hiperintens alanlar."
            }
        },
        findingsEn: {
            usg: {
                description: "Bilaterally enlarged ovaries (>5cm, >12cm in severe cases). Multiple large follicular cysts ('spoke wheel' appearance). Free fluid in pelvis (ascites). Pleural effusion (in severe cases). Stromal edema."
            },
            mri: {
                t2: "Multiple hyperintense follicular cysts in bilaterally enlarged ovaries. Ascites. Pleural effusion. Ovarian stromal edema (T2 hyperintense).",
                t1: "Hyperintense areas if follicular hemorrhage."
            }
        },
        keyPoints: [
            "İatrojenik — gonadotropin/hCG tedavisi sonrası",
            "Bilateral büyük overlerde multipl kistler + asit",
            "Ciddi: Hemodinamik instabilite, tromboembolizm riski",
            "'Spoke wheel' over görünümü tipik"
        ],
        keyPointsEn: [
            "Iatrogenic — following gonadotropin/hCG therapy",
            "Multiple cysts in bilaterally enlarged ovaries + ascites",
            "Severe: Hemodynamic instability, thromboembolism risk",
            "'Spoke wheel' ovarian appearance typical"
        ],
        etiology: "İatrojenik — IVF/ART tedavisi sırasında gonadotropin stimülasyonu sonrası hCG tetikleyicisi. Risk faktörleri: Genç yaş, düşük BMI, PCOS, yüksek folikül sayısı.",
        etiologyEn: "Iatrogenic — hCG trigger following gonadotropin stimulation during IVF/ART treatment. Risk factors: Young age, low BMI, PCOS, high follicle count.",
        mechanism: "Eksojen gonadotropin + hCG → Over foliküllerinde aşırı stimülasyon → VEGF ve diğer vazoaktif maddelerin salınımı → Kapiller permeabilite artışı → İntravasküler sıvının üçüncü boşluğa kaçışı (asit, plevral efüzyon) → Hemokonsentrasyon → Tromboembolizm riski.",
        mechanismEn: "Exogenous gonadotropin + hCG → Excessive stimulation of ovarian follicles → Release of VEGF and other vasoactive substances → Increased capillary permeability → Third-space fluid shift (ascites, pleural effusion) → Hemoconcentration → Thromboembolism risk.",
        differentialDiagnosis: [
            "PCOS (Foliküller küçük 2-9mm, asit yok, iatrojenik stimülasyon yok)",
            "Bilateral Over Kistleri (Stimülasyon öyküsü yok, asit yok)",
            "Over Torsiyonu (Unilateral ağrı, Doppler'de akım kaybı, tek taraflı)",
            "Bilateral Over Metastazı (Solid komponent, irregüler, asit olabilir)"
        ],
        differentialDiagnosisEn: [
            "PCOS (Small follicles 2-9mm, no ascites, no iatrogenic stimulation)",
            "Bilateral Ovarian Cysts (No stimulation history, no ascites)",
            "Ovarian Torsion (Unilateral pain, loss of flow on Doppler, unilateral)",
            "Bilateral Ovarian Metastasis (Solid component, irregular, ascites may be present)"
        ],
        goldStandard: "Klinik tanı — IVF/ART öyküsü + bilateral over büyümesi + asit + hemokonsentrasyon. USG tanıyı destekler ve ciddiyeti değerlendirir.",
        goldStandardEn: "Clinical diagnosis — IVF/ART history + bilateral ovarian enlargement + ascites + hemoconcentration. USG supports diagnosis and assesses severity.",
        clinicalPearl: "OHSS self-limitingdir ancak ciddi olgularda tromboembolizm ve renal yetmezlik ölümcül olabilir. Over torsiyonu riski artar (büyük, ağır overler). IVF hastaında bilateral büyük overler + asit = OHSS tanısı koydurur.",
        clinicalPearlEn: "OHSS is self-limiting but in severe cases thromboembolism and renal failure can be fatal. Ovarian torsion risk increases (large, heavy ovaries). Bilateral enlarged ovaries + ascites in an IVF patient = confirms OHSS diagnosis.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Ovarian hyperstimulation syndrome",
            "ASRM Practice Committee. Prevention and treatment of moderate and severe OHSS. Fertil Steril; 2016."
        ]
    },
    {
        id: "endometrial-hyperplasia",
        name: "Endometrial Hiperplazi",
        nameEn: "Endometrial Hyperplasia",
        category: "Uterin Patolojiler",
        categoryEn: "Uterine Pathologies",
        findings: {
            usg: {
                description: "Diffüz endometrial kalınlaşma (premenopozal >16mm, postmenopozal >4-5mm). Homojen veya hafif heterojen ekojenitenin artışı. Kistik alanlar içerebilir (kistik hiperplazi). Düzensiz endometrium-myometrium sınırı olabilir."
            },
            mri: {
                t2: "Kalınlaşmış endometrium, homojen veya hafif heterojen sinyal. Endometrium-myometrium birleşim zonu (junctional zone) intakt — myometrial invazyon yok.",
                t1_c: "Homojen enhancement.",
                dwi: "Atipik hiperplazide hafif difüzyon kısıtlaması olabilir."
            }
        },
        findingsEn: {
            usg: {
                description: "Diffuse endometrial thickening (premenopausal >16mm, postmenopausal >4-5mm). Homogeneous or mildly heterogeneous increased echogenicity. May contain cystic areas (cystic hyperplasia). Irregular endometrium-myometrium border possible."
            },
            mri: {
                t2: "Thickened endometrium, homogeneous or mildly heterogeneous signal. Endometrium-myometrium junction (junctional zone) intact — no myometrial invasion.",
                t1_c: "Homogeneous enhancement.",
                dwi: "Mild diffusion restriction possible in atypical hyperplasia."
            }
        },
        keyPoints: [
            "Diffüz endometrial kalınlaşma (postmenopozal >4-5mm)",
            "Atipik hiperplazi premalign kabul edilir",
            "Junctional zone intakt (karsinom ayrımında önemli)",
            "Östrojen fazlalığı ile ilişkili"
        ],
        keyPointsEn: [
            "Diffuse endometrial thickening (postmenopausal >4-5mm)",
            "Atypical hyperplasia considered premalignant",
            "Junctional zone intact (important in carcinoma differentiation)",
            "Associated with estrogen excess"
        ],
        etiology: "Karşılanmamış östrojen etkisi — Anovülasyon, HRT (sadece östrojen), obezite, PCOS, tamoxifen, östrojen üreten tümör.",
        etiologyEn: "Unopposed estrogen effect — Anovulation, HRT (estrogen only), obesity, PCOS, tamoxifen, estrogen-producing tumor.",
        mechanism: "Kronik karşılanmamış östrojen → Endometrial gland ve stromanın diffüz proliferasyonu → Progesteron antagonizması olmadan sürekli büyüme → Basit → Kompleks → Atipik hiperplazi → Karsinom sekansı.",
        mechanismEn: "Chronic unopposed estrogen → Diffuse proliferation of endometrial glands and stroma → Continuous growth without progesterone antagonism → Simple → Complex → Atypical hyperplasia → Carcinoma sequence.",
        differentialDiagnosis: [
            "Endometrial Karsinom (İrregüler kontur, myometrial invazyon, DWI pozitif, heterojen enhancement)",
            "Endometrial Polip (Fokal, pediküllü, feeding vessel)",
            "Submuköz Leiomyom (Hipoekoik, myometriumdan kökenli, endometriumu iter)",
            "Sekretuar Faz Endometriumu (Normal siklus, kalınlaşma fizyolojik, anamnez önemli)"
        ],
        differentialDiagnosisEn: [
            "Endometrial Carcinoma (Irregular contour, myometrial invasion, DWI positive, heterogeneous enhancement)",
            "Endometrial Polyp (Focal, pedunculated, feeding vessel)",
            "Submucosal Leiomyoma (Hypoechoic, originates from myometrium, displaces endometrium)",
            "Secretory Phase Endometrium (Normal cycle, physiologic thickening, history important)"
        ],
        goldStandard: "Endometrial biyopsi (Pipelle veya küretaj) — Histopatolojik değerlendirme: Atipili/atipsiz, basit/kompleks sınıflama.",
        goldStandardEn: "Endometrial biopsy (Pipelle or curettage) — Histopathologic evaluation: With/without atypia, simple/complex classification.",
        clinicalPearl: "Postmenopozal kanamada endometrium >4-5mm ise biyopsi endikasyonu vardır. Atipik endometrial hiperplazinin %30-40'ında eşzamanlı karsinom saptanabilir — histerektomi düşünülmelidir.",
        clinicalPearlEn: "If endometrium >4-5mm in postmenopausal bleeding, biopsy is indicated. Concurrent carcinoma can be detected in 30-40% of atypical endometrial hyperplasia — hysterectomy should be considered.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Endometrial hyperplasia",
            "ACOG Practice Bulletin: Endometrial Cancer. American College of Obstetricians and Gynecologists; 2020."
        ]
    },
    {
        id: "uterine-avm",
        name: "Uterin Arteriyovenöz Malformasyon",
        nameEn: "Uterine Arteriovenous Malformation",
        category: "Uterin Patolojiler",
        categoryEn: "Uterine Pathologies",
        findings: {
            usg: {
                description: "Myometrium içinde multipl anekoik tübüler yapılar (vasküler kanallar). Color Doppler'de belirgin hipervaskülarite — 'vasküler göl' görünümü. Arteryovenöz şant paterni (türbülan akım).",
                doppler: "Düşük rezistanslı yüksek hızlı arteryel akım (RI <0.4). Spektral Doppler: Yüksek PSV, düşük RI."
            },
            mri: {
                t2: "Multipl flow void yapılar (hızlı akım). Myometrial vasküler kitle.",
                t1: "Multipl flow void yapılar (hızlı akım).",
                t1_c: "Belirgin vasküler enhancement.",
                other_sequences: "MR Anjiyografi: Dilate arteryel besleyiciler → Vasküler nidus → Erken venöz drenaj."
            }
        },
        findingsEn: {
            usg: {
                description: "Multiple anechoic tubular structures (vascular channels) within myometrium. Marked hypervascularity on Color Doppler — 'vascular lake' appearance. Arteriovenous shunt pattern (turbulent flow).",
                doppler: "Low-resistance high-velocity arterial flow (RI <0.4). Spectral Doppler: High PSV, low RI."
            },
            mri: {
                t2: "Multiple flow void structures (fast flow). Myometrial vascular mass.",
                t1: "Multiple flow void structures (fast flow).",
                t1_c: "Marked vascular enhancement.",
                other_sequences: "MR Angiography: Dilated arterial feeders → Vascular nidus → Early venous drainage."
            }
        },
        keyPoints: [
            "Doppler'de myometriumda yüksek akımlı vasküler yapılar",
            "Düşük RI (<0.4) + yüksek PSV — AV şant paterni",
            "Masif vajinal kanama yapabilir",
            "Küretaj kontrendike (masif kanama riski)"
        ],
        keyPointsEn: [
            "High-flow vascular structures in myometrium on Doppler",
            "Low RI (<0.4) + high PSV — AV shunt pattern",
            "Can cause massive vaginal bleeding",
            "Curettage contraindicated (risk of massive hemorrhage)"
        ],
        etiology: "Konjenital (nadir — gerçek AVM) veya edinsel (sık — önceki küretaj, sezaryen, uterus cerrahisi sonrası). Gestasyonel trofoblastik hastalık sonrası.",
        etiologyEn: "Congenital (rare — true AVM) or acquired (common — post-curettage, cesarean section, uterine surgery). Post-gestational trophoblastic disease.",
        mechanism: "Konjenital: Vasküler gelişim anomalisi → Kapiller yatak olmadan arteriyel-venöz bağlantı. Edinsel: Cerrahi travma → Myometrial vasküler hasar → Anormal AV iletişim → Yüksek akımlı şant → Masif kanama potansiyeli.",
        mechanismEn: "Congenital: Vascular developmental anomaly → Arteriovenous connection without capillary bed. Acquired: Surgical trauma → Myometrial vascular injury → Abnormal AV communication → High-flow shunt → Massive hemorrhage potential.",
        differentialDiagnosis: [
            "Retained Products of Conception (β-hCG pozitif, gebelik öyküsü, vaskülarite daha az)",
            "Gestasyonel Trofoblastik Hastalık (β-hCG çok yüksek, intrakaviter kitle)",
            "Endometrial Karsinom (Solid kitle, vaskülarite farklı patern)",
            "Myometrial Konjesyon (Postpartum fizyolojik, kendiliğinden geriler)"
        ],
        differentialDiagnosisEn: [
            "Retained Products of Conception (β-hCG positive, pregnancy history, less vascularity)",
            "Gestational Trophoblastic Disease (Very high β-hCG, intracavitary mass)",
            "Endometrial Carcinoma (Solid mass, different vascularity pattern)",
            "Myometrial Congestion (Postpartum physiologic, self-resolving)"
        ],
        goldStandard: "Dijital Subtraksiyon Anjiyografi (DSA) — Arteryel besleyiciler, nidus ve erken venöz drenaj gösterilir. Tedavide embolizasyon yapılabilir.",
        goldStandardEn: "Digital Subtraction Angiography (DSA) — Demonstrates arterial feeders, nidus, and early venous drainage. Embolization can be performed for treatment.",
        clinicalPearl: "Anormal vajinal kanamada myometriumda Doppler'de düşük RI yüksek akım saptandığında uterin AVM düşünülmelidir. Küretaj yapılmamalıdır — masif kanama riski! Embolizasyon tedavisi hem tanısal hem terapötiktir.",
        clinicalPearlEn: "When low RI high-flow is detected in the myometrium on Doppler in abnormal vaginal bleeding, uterine AVM should be considered. Curettage must not be performed — risk of massive hemorrhage! Embolization is both diagnostic and therapeutic.",
        references: [
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023.",
            "Radiopaedia.org - Uterine arteriovenous malformation",
            "Timmerman D, et al. Terms, definitions and measurements to describe the sonographic features of adnexal and uterine masses. Ultrasound Obstet Gynecol; 2000."
        ]
    },
    {
        id: "mullerian-duct-anomaly",
        name: "Müllerian Kanal Anomalisi",
        nameEn: "Müllerian Duct Anomaly",
        category: "Konjenital Anomaliler",
        categoryEn: "Congenital Anomalies",
        findings: {
            usg: {
                description: "3D USG: Uterin dış kontur ve kavite morfolojisini değerlendirir. Septum: Kaviteyi bölen fibröz/musküler bant. Bikornat: İki ayrı kornua, fundal çentik >10mm. Unikornuat: Tek kornua, küçük uterin boyut. Didelfis: Tamamen ayrılmış iki uterus."
            },
            mri: {
                t2: "Uterin morfoloji değerlendirmesinde altın standart. Junctional zone (hipointens) ile kavite ayrımı net seçilir. Septat uterus: Fundal kontur düz/konveks + intrakaviter septum. Bikornat: Fundal çentik >10mm + iki ayrı kavite. Didelphis: İki ayrı uterus + genellikle iki serviks."
            }
        },
        findingsEn: {
            usg: {
                description: "3D USG: Evaluates uterine external contour and cavity morphology. Septum: Fibrous/muscular band dividing cavity. Bicornuate: Two separate cornua, fundal indentation >10mm. Unicornuate: Single cornu, small uterine size. Didelphys: Completely separated two uteri."
            },
            mri: {
                t2: "Gold standard in uterine morphology assessment. Junctional zone (hypointense) clearly delineates cavity. Septate uterus: Flat/convex fundal contour + intracavitary septum. Bicornuate: Fundal indentation >10mm + two separate cavities. Didelphys: Two separate uteri + usually two cervices."
            }
        },
        keyPoints: [
            "MRI uterin morfoloji değerlendirmede altın standart",
            "Septat vs bikornat ayrımı tedaviyi değiştirir",
            "Fundal çentik >10mm: bikornat; <10mm: septat",
            "İnfertilite ve tekrarlayan düşük nedeni"
        ],
        keyPointsEn: [
            "MRI gold standard in uterine morphology assessment",
            "Septate vs bicornuate differentiation changes treatment",
            "Fundal indentation >10mm: bicornuate; <10mm: septate",
            "Cause of infertility and recurrent miscarriage"
        ],
        etiology: "Embriyonik dönemde Müllerian kanalların (paramesonefrik duktus) füzyon, kanalizasyon veya rezorbsiyon bozuklukları. ASRM sınıflaması: Class I-VII.",
        etiologyEn: "Fusion, canalization, or resorption defects of Müllerian ducts (paramesonephric ducts) during embryonic period. ASRM classification: Class I-VII.",
        mechanism: "Embriyogenezde Müllerian kanal füzyonu bozulursa (bikornat/didelfis) veya septum rezorbsiyonu tamamlanmazsa (septat) → Farklı morfolojik anomaliler. Septat uterus en sık → Septumun vasküler desteği yetersiz → İmplantasyon bozulur → Tekrarlayan düşük.",
        mechanismEn: "If Müllerian duct fusion is disrupted during embryogenesis (bicornuate/didelphys) or septum resorption is incomplete (septate) → Different morphologic anomalies. Septate uterus is most common → Inadequate vascular support of septum → Impaired implantation → Recurrent miscarriage.",
        differentialDiagnosis: [
            "Septat Uterus (Düz fundal kontur, intrakaviter septum — en sık anomali)",
            "Bikornat Uterus (Fundal çentik >10mm, iki ayrı kavite)",
            "Unikornuat Uterus (Tek kornua, rudimanter horn olabilir)",
            "Arkuat Uterus (Minimal fundal çentik, normal varyant, klinik önemi az)",
            "T-Shaped Uterus (DES maruziyeti, dar tübüler kavite)"
        ],
        differentialDiagnosisEn: [
            "Septate Uterus (Flat fundal contour, intracavitary septum — most common anomaly)",
            "Bicornuate Uterus (Fundal indentation >10mm, two separate cavities)",
            "Unicornuate Uterus (Single cornu, rudimentary horn may be present)",
            "Arcuate Uterus (Minimal fundal indentation, normal variant, little clinical significance)",
            "T-Shaped Uterus (DES exposure, narrow tubular cavity)"
        ],
        goldStandard: "MRI — T2 ağırlıklı koronal ve aksiyel görüntülerde uterin morfoloji, junctional zone, fundal kontur ve kavite değerlendirmesi. ASRM sınıflamasına göre tiplenme.",
        goldStandardEn: "MRI — Uterine morphology, junctional zone, fundal contour, and cavity assessment on T2-weighted coronal and axial images. Classification according to ASRM system.",
        clinicalPearl: "Septat uterus en sık Müllerian anomalidir ve histeroskopik septum rezeksiyonu ile tedavi edilir. Bikornat uterus cerrahisi ise daha invazivdir (Strassman metroplasti). Bu ayrım tedaviyi temelden değiştirir — MRI ile kesin tanı şarttır.",
        clinicalPearlEn: "Septate uterus is the most common Müllerian anomaly and is treated with hysteroscopic septum resection. Bicornuate uterus surgery is more invasive (Strassman metroplasty). This distinction fundamentally changes treatment — definitive diagnosis with MRI is essential.",
        references: [
            "ASRM Müllerian Anomalies Classification 2021. Fertility and Sterility.",
            "Radiopaedia.org - Müllerian duct anomalies",
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023."
        ]
    },
    {
        id: "granulosa-cell-tumor",
        name: "Granüloza Hücreli Tümör",
        nameEn: "Granulosa Cell Tumor",
        category: "Over Tümörleri",
        categoryEn: "Ovarian Tumors",
        findings: {
            usg: {
                description: "Solid-kistik miks yapıda over kitlesi. Multipl kistik alanlar — 'Swiss cheese' veya 'sponge' görünümü. İnternal hemoraji sık. Endometrial kalınlaşma eşlik edebilir (östrojen etkisi).",
                doppler: "Solid komponentte vaskülarite."
            },
            mri: {
                t1: "Heterojen (hemoraji alanları hiperintens).",
                t2: "Solid-kistik miks, kistik alanlar hiperintens. 'Swiss cheese' patern.",
                t1_c: "Solid komponentte belirgin enhancement.",
                dwi: "Solid alanda difüzyon kısıtlaması olabilir."
            }
        },
        findingsEn: {
            usg: {
                description: "Solid-cystic mixed ovarian mass. Multiple cystic areas — 'Swiss cheese' or 'sponge' appearance. Internal hemorrhage frequent. Endometrial thickening may accompany (estrogen effect).",
                doppler: "Vascularity in solid component."
            },
            mri: {
                t1: "Heterogeneous (hemorrhage areas hyperintense).",
                t2: "Solid-cystic mixed, cystic areas hyperintense. 'Swiss cheese' pattern.",
                t1_c: "Marked enhancement of solid component.",
                dwi: "Diffusion restriction may be present in solid area."
            }
        },
        keyPoints: [
            "'Swiss cheese' / 'sponge' görünümü karakteristik",
            "Östrojen salgılayan tümör → endometrial hiperplazi/kanama",
            "İnhibin B tümör belirteci olarak yükselir",
            "Geç nüks olabilir (10-20 yıl sonra bile)"
        ],
        keyPointsEn: [
            "'Swiss cheese' / 'sponge' appearance characteristic",
            "Estrogen-secreting tumor → endometrial hyperplasia/bleeding",
            "Inhibin B elevated as tumor marker",
            "Late recurrence possible (even 10-20 years later)"
        ],
        etiology: "Over granüloza hücrelerinden (sex-cord stromal tümör grubu) kaynaklı malign potansiyelli tümör. Erişkin ve jüvenil tipler.",
        etiologyEn: "Tumor with malignant potential arising from ovarian granulosa cells (sex-cord stromal tumor group). Adult and juvenile types.",
        mechanism: "Over granüloza hücrelerinin neoplastik proliferasyonu → Östrojen salgılayan tümör → Endometrial hiperplazi (karşılanmamış östrojen) → Postmenopozal kanama → Endometrial karsinom riski artar. Tümör büyümesi: Solid-kistik yapı, hemoraji sık.",
        mechanismEn: "Neoplastic proliferation of ovarian granulosa cells → Estrogen-secreting tumor → Endometrial hyperplasia (unopposed estrogen) → Postmenopausal bleeding → Increased endometrial carcinoma risk. Tumor growth: Solid-cystic structure, hemorrhage frequent.",
        differentialDiagnosis: [
            "Endometrioma (Homojen 'ground glass', T1 hiperintens, östrojen üretimi yok)",
            "Over Fibromu/Tekoma (Solid, T2 hipointens, östrojen etkisi az)",
            "Epitelyal Over Karsinomu (Papiller projeksiyon, asit, CA-125 yüksek)",
            "Hemorajik Kist (Retrakte pıhtı, fibrin ağı, takipte rezolüsyon)",
            "Sertoli-Leydig Hücreli Tümör (Androjen üreten, virilizasyon)"
        ],
        differentialDiagnosisEn: [
            "Endometrioma (Homogeneous 'ground glass', T1 hyperintense, no estrogen production)",
            "Ovarian Fibroma/Thecoma (Solid, T2 hypointense, minimal estrogen effect)",
            "Epithelial Ovarian Carcinoma (Papillary projections, ascites, elevated CA-125)",
            "Hemorrhagic Cyst (Retracted clot, fibrin strands, resolution on follow-up)",
            "Sertoli-Leydig Cell Tumor (Androgen-producing, virilization)"
        ],
        goldStandard: "Histopatoloji — Call-Exner body'ler (granüloza hücrelerinin rozetler oluşturması), 'coffee bean' çentikli nükleus. İmmunohistokimya: İnhibin (+), kalretinin (+).",
        goldStandardEn: "Histopathology — Call-Exner bodies (rosette formation by granulosa cells), 'coffee bean' grooved nucleus. Immunohistochemistry: Inhibin (+), calretinin (+).",
        clinicalPearl: "Postmenopozal hastada solid-kistik over kitlesi + endometrial kalınlaşma + anormal kanama üçlüsü granüloza hücreli tümör için uyarıcıdır. İnhibin B takip markeri olarak kullanılır — geç rekürrenslere dikkat.",
        clinicalPearlEn: "Solid-cystic ovarian mass + endometrial thickening + abnormal bleeding triad in a postmenopausal patient is suggestive of granulosa cell tumor. Inhibin B is used as a follow-up marker — beware of late recurrences.",
        references: [
            "WHO Classification of Tumours: Female Genital Tumours. 5th ed. IARC; 2020.",
            "Radiopaedia.org - Granulosa cell tumor",
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023."
        ]
    },
    {
        id: "ovarian-krukenberg",
        name: "Krukenberg Tümörü (Over Metastazı)",
        nameEn: "Krukenberg Tumor (Ovarian Metastasis)",
        category: "Over Tümörleri",
        categoryEn: "Ovarian Tumors",
        findings: {
            usg: {
                description: "Bilateral (sıklıkla) solid veya solid-kistik over kitleleri. İrregüler kontur. Heterojen internal eko. Asit eşlik edebilir. Omental kek veya peritoneal implantlar. Primer tümör bulguları (mide kalınlaşması vb.)."
            },
            mri: {
                t2: "Solid komponent heterojen, kistik alanlar hiperintens. Peritoneal karsinomatozis bulguları.",
                t1: "Müsinöz/hemorajik alanlar hiperintens olabilir.",
                t1_c: "Solid komponentte heterojen enhancement.",
                dwi: "Difüzyon kısıtlaması."
            }
        },
        findingsEn: {
            usg: {
                description: "Bilateral (frequently) solid or solid-cystic ovarian masses. Irregular contour. Heterogeneous internal echo. Ascites may accompany. Omental cake or peritoneal implants. Primary tumor findings (gastric wall thickening etc.)."
            },
            mri: {
                t2: "Solid component heterogeneous, cystic areas hyperintense. Peritoneal carcinomatosis findings.",
                t1: "Mucinous/hemorrhagic areas may be hyperintense.",
                t1_c: "Heterogeneous enhancement of solid component.",
                dwi: "Diffusion restriction."
            }
        },
        keyPoints: [
            "Bilateral solid-kistik over kitleleri → metastaz düşün",
            "En sık mide kaynaklı (signet ring hücreli karsinom)",
            "Peritoneal karsinomatozis sık eşlik eder",
            "Primer over karsinomundan ayrımı kritik"
        ],
        keyPointsEn: [
            "Bilateral solid-cystic ovarian masses → think metastasis",
            "Most commonly gastric origin (signet ring cell carcinoma)",
            "Peritoneal carcinomatosis frequently accompanies",
            "Differentiation from primary ovarian carcinoma critical"
        ],
        etiology: "En sık GIS kaynaklı (mide %70+), kolon, meme, apendiks. Hematojen veya transperitoneal yayılım. Müsinöz signet ring hücreli karsinom tipik histoloji.",
        etiologyEn: "Most commonly GI origin (stomach 70%+), colon, breast, appendix. Hematogenous or transperitoneal spread. Mucinous signet ring cell carcinoma is the typical histology.",
        mechanism: "Primer tümörden (genellikle mide) → Hematojen veya peritoneal yayılım → Over stromasına implantasyon → Bilateral over tutulumu → Müsin üreten signet ring hücreleri over stromasında proliferasyon → Solid-kistik kitle. Over'in zengin vasküler yapısı metastaza yatkınlık sağlar.",
        mechanismEn: "From primary tumor (usually stomach) → Hematogenous or peritoneal spread → Implantation into ovarian stroma → Bilateral ovarian involvement → Mucin-producing signet ring cells proliferate in ovarian stroma → Solid-cystic mass. The rich vascular structure of the ovary predisposes to metastasis.",
        differentialDiagnosis: [
            "Primer Epitelyal Over Karsinomu (Genellikle unilateral başlar, papiller projeksiyon baskın)",
            "Bilateral Endometrioma (Homojen 'ground glass', T1 hiperintens, solid komponent yok)",
            "Bilateral Matür Teratom (Yağ, kalsifikasyon, Rokitansky nodülü)",
            "Lenfoma (Bilateral solid, homojen, şekil korunmuş olabilir)",
            "Fibroma/Tekoma Bilateral (T2 hipointens solid kitleler, asit — Meigs sendromu)"
        ],
        differentialDiagnosisEn: [
            "Primary Epithelial Ovarian Carcinoma (Usually starts unilateral, papillary projections dominant)",
            "Bilateral Endometrioma (Homogeneous 'ground glass', T1 hyperintense, no solid component)",
            "Bilateral Mature Teratoma (Fat, calcification, Rokitansky nodule)",
            "Lymphoma (Bilateral solid, homogeneous, shape may be preserved)",
            "Bilateral Fibroma/Thecoma (T2 hypointense solid masses, ascites — Meigs syndrome)"
        ],
        goldStandard: "Histopatoloji — Signet ring hücreleri (müsin dolu, çekirdeği kenara iten hücreler), over stroması içinde. İmmunohistokimya: CK20+, CDX2+ (GIS köken).",
        goldStandardEn: "Histopathology — Signet ring cells (mucin-filled cells displacing nucleus to periphery), within ovarian stroma. Immunohistochemistry: CK20+, CDX2+ (GI origin).",
        clinicalPearl: "Bilateral over kitlesi + asit saptandığında primer over karsinomu ile Krukenberg tümörü ayrımı için üst GIS (mide) mutlaka değerlendirilmelidir. Bilateral tutulum, genç yaş ve müsinöz komponent Krukenberg lehine ipuçlarıdır.",
        clinicalPearlEn: "When bilateral ovarian mass + ascites is detected, the upper GI tract (stomach) must be evaluated to differentiate primary ovarian carcinoma from Krukenberg tumor. Bilateral involvement, young age, and mucinous component are clues favoring Krukenberg.",
        references: [
            "WHO Classification of Tumours: Female Genital Tumours. 5th ed. IARC; 2020.",
            "Radiopaedia.org - Krukenberg tumor",
            "Defined Ultrasound Protocols. ACR Practice Parameters; 2023."
        ]
    }
];
