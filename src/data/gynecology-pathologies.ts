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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    }
];
