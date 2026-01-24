import { Pathology } from "@/types";

export const gynecologyPathologies: Pathology[] = [
    {
        id: "uterine-leiomyoma",
        name: "Uterin Leiomyom (Miyom)",
        category: "Uterus",
        keyPoints: ["En sık görülen benign uterin tümördür.", "T2 ağırlıklı serilerde tipik olarak hipointens (karanlık) görülür.", "Dejenerasyon (kistik, hyalin, kırmızı) görünümü değiştirebilir."],
        findings: {
            usg: {
                description: "Hipokoik, heterojen miyometrial kitle. Akustik gölgelenme (kalsifikasyona bağlı). Çevresel 'venetian blind' (jaluzi) gölgelenmesi."
            },
            mri: {
                t2: "Miyometriumdan daha hipointens, keskin sınırlı kitle. Yüksek sellülarite veya ödem varsa hiperintens olabilir.",
                t1_c: "Değişken kontrastlanma. Genellikle miyometriumdan daha az kontrast tutar ancak gecikmiş fazda tutulum artar.",
                other_sequences: "Kistik dejenerasyon: T2 hiperintens (sıvı). Kırmızı (karneöz) dejenerasyon: T1 hiperintens (kanama)."
            }
        }
    },
    {
        id: "adenomyosis",
        name: "Adenomyozis",
        category: "Uterus",
        keyPoints: ["Endometrial dokunun miyometrium içine invazyonudur.", "Junction zone (JZ) kalınlaşması (>12mm) en önemli MR bulgusudur.", "Miyomun aksine sınırları belirsizdir."],
        findings: {
            usg: {
                description: "Uterusta asimetrik kalınlaşma/büyüme. Miyometriumda heterojenite ('yağmur altında Venedik' görünümü). Küçük miyometrial kistler."
            },
            mri: {
                t2: "Junction zone (JZ) kalınlaşması (>12mm). Miyometrium içinde küçük T2 hiperintens odaklar (ektopik endometrium/kist).",
                t1: "Kistik odaklarda kanama varsa T1 hiperintens olabilir."
            }
        }
    },
    {
        id: "endometrioma",
        name: "Endometrioma (Çikolata Kisti)",
        category: "Ovary",
        keyPoints: ["'T1 shading' (T2'de sinyal kaybı) kesin tanı koydurucudur.", "İçeriği kan ürünleri (methemoglobin) nedeniyle T1 parlaktır.", "Tümör belirteçleri (Ca-125) yükselebilir."],
        findings: {
            usg: {
                description: "Diffüz düşük seviyeli internal ekolar (buzlu cam / ground glass). Kalın duvarlı kistik yapı. Mural nodül varsa malignite ekarte edilmeli."
            },
            mri: {
                t1: "Belirgin hiperintens (Parlak). Yağ baskılamada sinyal KAYBOLMAZ (Dermoidden farkı).",
                t2: "'Shading sign': T1'de parlak olan lezyonun, artan demir konsantrasyonu nedeniyle T2'de giderek koyulaşması.",
                t1_c: "Duvar kontrastlanır, içerik kontrastlanmaz. Solid nodül varsa Clear Cell Ca riski!"
            }
        }
    },
    {
        id: "ovarian-dermoid",
        name: "Over Dermoid Kisti (Matür Kistik Teratom)",
        category: "Ovary",
        keyPoints: ["Genç kadınlarda en sık ovarian neoplazmdır.", "Yağ içeriği (sebum) tanı koydurucudur: MR'da yağ baskılamada kararır.", "Rokitansky nodülü (dermoid plug) görülebilir."],
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
        }
    },
    {
        id: "ovarian-torsion",
        name: "Over Torsiyonu",
        category: "Acil",
        keyPoints: ["Jinekolojik acildir (Akut batın).", "Torsiyone over BÜYÜR ve ödemlenir (>4-5cm).", "Foliküller perifere itilir ('inci kolye' / 'string of pearls')."],
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
        }
    },
    {
        id: "cervical-carcinoma",
        name: "Serviks Karsinomu",
        category: "Cervix",
        keyPoints: ["Evreleme için MRG altın standarttır (Parametrial invazyon değerlendirmesi).", "T2'de stromayı (hipointens halka) bozan hiperintens kitle.", "Difüzyon kısıtlar."],
        findings: {
            mri: {
                t2: "Servikal stromayı (koyu halka) bozan/kesintiye uğratan orta-yüksek sinyalli kitle. Parametrial yağ planlarına uzanım evreyi (IIB) değiştirir.",
                dwi: "Belirgin difüzyon kısıtlılığı (Parlak).",
                t1_c: "Erken arteriyel fazda tümör stromaya göre daha erken kontrastlanır."
            }
        }
    }
];
