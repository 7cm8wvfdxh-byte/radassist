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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    }
];
