import { Pathology } from "@/types";

export const gastroPathologies: Pathology[] = [
    {
        id: "acute-appendicitis",
        name: "Akut Apandisit",
        category: "Bowel (Acil)",
        keyPoints: ["Sağ alt kadran ağrısının en sık nedenidir.", "BT tanıda yüksek duyarlılığa sahiptir.", "Çap >6mm ve duvar kalınlaşması kritiktir."],
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
        }
    },
    {
        id: "acute-diverticulitis",
        name: "Akut Divertikülit",
        category: "Bowel (Acil)",
        keyPoints: ["Sol alt kadran ağrısının sık sebebidir (Sigmoid kolon).", "Komplike divertikülit (apse, perforasyon) Hinchey sınıflaması ile evrelenir.", "Kolonoskopi akut dönemde kontrendikedir."],
        findings: {
            ct: {
                contrast: "İnflame bir divertikül etrafında yağ kirlenmesi (Fat stranding). Kolon duvarında segmental kalınlaşma. Perikolik apse veya serbest hava (Perforasyon?)."
            },
            usg: {
                description: "Kolon duvarından dışarı uzanan hipoekoik kese (divertikül). Etrafında hiperekoik yağ halosu (inflamasyon)."
            }
        }
    },
    {
        id: "acute-pancreatitis",
        name: "Akut Pankreatit (Ödematöz/Nekrotizan)",
        category: "Pancreas",
        keyPoints: ["Tanı için amilaz/lipaz artışı yeterlidir, BT komplikasyonları (nekroz) görmek için çekilir.", "Erken BT (ilk 72 saat) nekrozu hafife alabilir.", "Balthazar skoru ciddiyeti belirler."],
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
        }
    },
    {
        id: "pancreatic-adenocarcinoma",
        name: "Pankreas Adenokarsinomu",
        category: "Pancreas",
        keyPoints: ["Genellikle pankreas başında görülür ve ağrısız sarılık yapar.", "'Double Duct Sign' (Wirsung ve Koledok genişlemesi) tipiktir.", "Hipovasküler bir tümördür (Kistin aksine)."],
        findings: {
            ct: {
                contrast: "Pankreatik fazda (geç arteriyel) çevre parankime göre HİPODENS (karanlık) kitle. Arkasındaki duktuslarda dilatasyon (atrofi). Vasküler invazyon (SMA/SMV) açısından değerlendirilmeli (Unresectable?)."
            },
            mri: {
                t1_c: "Kontrastlı serilerde hipointens kitle.",
                other_sequences: "MRCP: 'Double Duct Sign' (Çift kanal bulgusu). Ani sonlanma (Abrupt cutoff)."
            }
        }
    },
    {
        id: "crohn-disease",
        name: "Crohn Hastalığı (Aktif)",
        category: "Bowel (Inflammatory)",
        keyPoints: ["Transmural inflamasyon yapar (Ülseratif kolit sadece mukoza).", "Terminal ileum en sık tutulan yerdir.", "Comb sign (Tarak belirtisi) aktif inflamasyonu gösterir."],
        findings: {
            ct: {
                contrast: "Bağırsak duvarında belirgin kalınlaşma ve kontrastlanma (Mural stratification). Comb sign: Mezenterik vaskülaritede belirginleşme. Creeping fat: Mezenter yağ dokusu proliferasyonu."
            },
            mri: {
                other_sequences: "MR Enterografi: Duvar kalınlaşması, T2 hiperintensite (ödem), Ülserler, Fistül traktları ve Apseler."
            }
        }
    },
    {
        id: "bowel-obstruction",
        name: "İleus (Mekanik Bağırsak Tıkanıklığı)",
        category: "Bowel (Acil)",
        keyPoints: ["Hava-sıvı seviyeleri direkt grafide tipiktir.", "BT'de 'Geçiş Noktası' (Transition Zone) aranır (Dilate ve kollabe segment arası).", "En sık neden yapışıklıklardır (brid)."],
        findings: {
            xray: {
                description: "Hava-sıvı seviyeleri (ayakta Dkb). İnce bağırsak kıvrımlarının genişlemesi (>3cm, 'merdiven basamağı'). Kolonda gaz yokluğu (Tam tıkanıklık)."
            },
            ct: {
                contrast: "Proksimal segmentlerde dilatasyon (>2.5-3cm), distalde kollaps (Transition point). Small Bowel Feces Sign: Tıkanıklığın hemen proksimalinde feçes benzeri görünüm."
            }
        }
    }
];
