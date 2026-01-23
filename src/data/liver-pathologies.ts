import { Pathology } from '@/types';

export const liverPathologies: Pathology[] = [
    {
        "id": "hepatocellular_carcinoma",
        "name": "Hepatoselüler Karsinom (HCC)",
        "category": "Neoplastik",
        "findings": {
            "ultrasound": {
                "description": "Değişken ekojenite (hipo/hiper/mikst). Mozaik patern (heterojen). Tümör trombusu portal vende görülebilir.",
                "doppler": "Arteryel akım paterni. Basket pattern (çevre vaskülarite)."
            },
            "ct": {
                "non_contrast": "Genellikle hipodens. Yağ içeren HCC izodens olabilir.",
                "contrast": "ARTERİYEL FAZ: Yoğun kontrastlanma (WASH-IN) - HİPERVASKÜLER. PORTAL/GEÇ FAZ: Hızlı kontrast kaybı (WASH-OUT) - HİPODENS. Bu patern = LI-RADS 5 (Kesin HCC).",
                "cta": "Besleyici hepatik arter hipertrofisi. Portal ven trombusu (tümör veya bland)."
            },
            "mri": {
                "t1": "Genellikle hipointens. Yağ, glikojen, bakır içeren nodüller hiperintens olabilir.",
                "t2": "Hafif hiperintens (moderate). Çok parlaksa metastaz veya kolanjiokarsinom düşün.",
                "t1_c": "Arteriyel: Hiperintens (wash-in). Portal/Geç: Hipointens (wash-out). KAPSÜL kontrastlanması (geç fazda).",
                "dwi": "Kısıtlanma: Yüksek b-değerinde hiperintens, ADC düşük. Tümör gradini yansıtır.",
                "other_sequences": "Hepatobilier faz (Gd-EOB-DTPA): HİPOİNTENS (hepatosit fonksiyonu kaybı). Eğer hiperintens: İyi diferansiye HCC."
            }
        },
        "keyPoints": [
            "LI-RADS sınıflaması: LR-5 = Kesin HCC (Arteriyel wash-in + Portal wash-out + Kapsül).",
            "Sirotik karaciğerde >10mm nodül: HCC şüphesi yüksek.",
            "AFP yüksekliği + tipik görüntüleme = Biyopsi gerekmez.",
            "Portal ven trombusu: Arteriyel kontrastlanma = Tümör trombusu (Bland trombüste kontrastlanma yok)."
        ]
    },
    {
        "id": "liver_metastasis",
        "name": "Karaciğer Metastazı",
        "category": "Neoplastik",
        "findings": {
            "ct": {
                "non_contrast": "Multipl hipodens lezyonlar. Kalsifikasyon: Müsinöz tümörler (kolon, over).",
                "contrast": "HİPOVASKÜLER (kolon, pankreas, meme): Hipodens halkalar. HİPERVASKÜLER (RCC, tiroid, melanom, NET): Arteriyel fazda kontrastlanma."
            },
            "mri": {
                "t1": "Hipointens (sıklıkla). Melanom metastazı: T1 HİPERİNTENS (melanin içeriği).",
                "t2": "HİPERİNTENS + 'Target sign' (santral hipointens, periferal hiperintens). Hedef işareti metastaz için oldukça spesifik.",
                "t1_c": "Periferal halka kontrastlanma. Merkezi kontrastlanmayan nekroz.",
                "dwi": "Difüzyon kısıtlılığı: Sellüler tümörlerde belirgin. Tedavi yanıtı takibinde kritik.",
                "other_sequences": "Hepatobilier faz: Hipointens (normal hepatosit yok)."
            }
        },
        "keyPoints": [
            "Karaciğer en sık metastaz lokasyonu (akciğerden sonra).",
            "Primer kaynak: Kolon (%50), Meme, Akciğer, Pankreas, Mide.",
            "'Target sign' (T2'de) metastaz için yüksek spesifik.",
            "Kemo sonrası kaybolmuş lezyon: 'Disappearing liver metastasis' - MRI ile takip şart."
        ]
    },
    {
        "id": "hepatic_hemangioma",
        "name": "Karaciğer Hemanjiomu",
        "category": "Benign",
        "findings": {
            "ultrasound": {
                "description": "Tipik: Homojen HİPEREKOİK kitle, keskin sınırlı, posterior akustik güçlenme. Atipik: Heterojen, büyük, kompleks.",
                "doppler": "Genellikle akım saptanmaz (yavaş akım). Dev hemanjiomlarda internal akım."
            },
            "ct": {
                "non_contrast": "İyi sınırlı, HİPODENS kitle.",
                "contrast": "PERİFERAL NODÜLER KONTRASTLANMA (Arteriyel faz) → SANTRALE DOLUM (Portal faz) → TAM DOLUM (Geç faz, 5-15 dk). 'Iris diaphragm' paterni = PATOGNOMONIK."
            },
            "mri": {
                "t1": "Hipointens, keskin sınırlı.",
                "t2": "'AMPUL' veya 'PAMUK' İŞARETİ: BOS benzeri çok parlak T2 sinyali (>BOS). Gecikmiş fazda da parlak kalır.",
                "t1_c": "BT ile aynı: Periferik nodüler → santrale dolum. Çok küçüklerde (<1cm) hızlı homojen dolum.",
                "dwi": "T2 shine-through (yalancı kısıtlanma). ADC HİPERİNTENS (gerçek kısıtlanma yok)."
            }
        },
        "keyPoints": [
            "En sık benign karaciğer tümörü. Kadınlarda daha sık.",
            "T2'de 'ampul' işareti = BOS'tan bile parlak.",
            "Gecikmeli dolum paterni (>60 saniye) ayırıcı.",
            "'Flash-filling hemangioma': <2cm, hızlı homojen dolum - HCC'den ayırt et."
        ]
    },
    {
        "id": "focal_nodular_hyperplasia",
        "name": "Fokal Nodüler Hiperplazi (FNH)",
        "category": "Benign",
        "findings": {
            "ct": {
                "non_contrast": "İzo veya hafif hipodens. %30 santral SKAR görülür.",
                "contrast": "Arteriyel: Yoğun HOMOJEn kontrastlanma (HCC gibi ama homojen). Portal/Geç: İZODENS veya hafif hipodens. Santral skar: GEÇ kontrastlanır."
            },
            "mri": {
                "t1": "İzointens veya hafif hipointens.",
                "t2": "İzointens veya hafif hiperintens. Santral skar: T2 HİPERİNTENS (ayırıcı - Fibrolamelar HCC'de skar T2 hipointens).",
                "t1_c": "Arteriyel: Homojen yoğun kontrastlanma. Santral skar: Gecikmeli kontrastlanma (fibröz doku).",
                "other_sequences": "Hepatobilier faz: İZOİNTENS veya HİPERİNTENS (hepatosit fonksiyonu korunmuş) - Adenom ve metastazdan FARK."
            }
        },
        "keyPoints": [
            "Genç kadınlarda. OKS kullanımıyla ilişki ZAYIF (Adenomdan fark).",
            "Santral skar + Hepatobilier fazda iso/hiperintensite = FNH.",
            "Tedavi gerektirmez (benign), takip yetersiz.",
            "Ayırıcı tanı: Fibrolamellar HCC (skar T2 hipointens, kalsifikasyon)."
        ]
    },
    {
        "id": "hepatic_adenoma",
        "name": "Hepatik Adenom",
        "category": "Benign",
        "findings": {
            "ct": {
                "non_contrast": "İzo veya hiperdans (yağ veya glikojen). İNTRATÜMÖRAL KANAMA sık.",
                "contrast": "Arteriyel: Heterojen kontrastlanma. Portal/Geç: İzodens veya hipodens. Kanama: Hiperdens alanlar."
            },
            "mri": {
                "t1": "Değişken: Yağ içeriyorsa hiperintens. Kanama varsa hiperintens odaklar. Chemical shift: Yağ tespiti.",
                "t2": "Genellikle hafif hiperintens. Kanama/nekroz: Heterojen.",
                "t1_c": "Heterojen kontrastlanma. Kapsül görülebilir.",
                "other_sequences": "Hepatobilier faz: HİPOİNTENS (fonksiyonel hepatosit yok) - FNH'den FARK."
            }
        },
        "keyPoints": [
            "OKS ve anabolik steroid kullanımıyla güçlü ilişki.",
            "Kanama ve malign transformasyon riski → >5cm ise rezeksiyon.",
            "Hepatobilier fazda hipointens = Adenom (FNH'de iso/hiperintens).",
            "Alt tipler: HNF1α-inactivated (yağlı), β-catenin mutant (malignite riski yüksek), Inflammatory."
        ]
    },
    {
        "id": "liver_abscess",
        "name": "Karaciğer Apsesi (Piyojenik)",
        "category": "Enfeksiyon",
        "findings": {
            "ultrasound": {
                "description": "Kompleks kistik kitle. İnternal debri, septasyonlar. Kalın irregüler duvar. 'Cluster sign': Multipl küçük apseler birleşerek tek büyük apse.",
                "doppler": "Duvar ve septamlarda vaskülarite."
            },
            "ct": {
                "non_contrast": "Düşük dansiteli kistik kitle. Gaz kabarcıkları (anaerop enfeksiyon).",
                "contrast": "'Double target sign': İç halka (granülasyon dokusu kontrastlanır) + Dış halka (ödem, kontrastlanmaz). 'Cluster sign': Multipl küçük apseler."
            },
            "mri": {
                "t1": "İçerik: Değişken (debri, kan). Duvar: Hipointens.",
                "t2": "İçerik: Hiperintens. Çevre ödem: Belirgin hiperintens halka.",
                "dwi": "Merkezi DİFÜZYON KISITLAMASI (parlak) - Pü içeriği. Nekrotik tümörden FARK.",
                "t1_c": "Kalın duvar kontrastlanması. Septum kontrastlanması."
            }
        },
        "keyPoints": [
            "Piyojenik (bakteriyel) vs Amebik apse: Amebik tek, büyük, sağ lob.",
            "DWI kısıtlanma: Apse vs Nekrotik tümör ayırımında kritik.",
            "'Double target sign' piyojenik apse için karakteristik.",
            "Tedavi: Perkütan drenaj + Antibiyotik."
        ]
    },
    {
        "id": "liver_cirrhosis",
        "name": "Siroz ve Portal Hipertansiyon",
        "category": "Dejeneratif",
        "findings": {
            "ultrasound": {
                "description": "Nodüler karaciğer yüzeyi. Heterojen parankimal ekojenite. Küçük sağ lob, büyümüş kaudat ve sol lateral segment.",
                "doppler": "Portal ven akım yavaşlaması (<16 cm/s) veya TERS akım. Splenomegali. Rekanalize umbilikal ven."
            },
            "ct": {
                "non_contrast": "Nodüler kontur. Atrofi-hipertrofi kompleksi. Asit. Splenomegali.",
                "contrast": "Hetereojen kontrastlanma. Rejeneratif nodüller iso/hipodens. Displastik nodül: Arteryel fazda silik kontrastlanma."
            },
            "mri": {
                "t1": "Rejeneratif nodüller: Siderotik ise hipointens (demir birikimi). Displastik nodül: T1 hiperintens olabilir.",
                "t2": "Rejeneratif nodüller: Hipointens (siderotik). Displastik nodül: İzointens. HCC: Hafif hiperintens.",
                "t1_c": "Rejeneratif ve displastik nodül: Arteryel FAZda BELİRGİN kontrastlanma yok. HCC: Arteryel wash-in.",
                "other_sequences": "Hepatobilier faz: Rejeneratif nodül iso/hiperintens. HCC hipointens."
            }
        },
        "keyPoints": [
            "Nodül progresyonu: Rejeneratif → Displastik (düşük → yüksek grade) → HCC.",
            "Siderotik nodül: T1 ve T2'de hipointens (HCC riski düşük).",
            "Non-siderotik displastik nodül: HCC transformasyonu riski yüksek.",
            "Portal hipertansiyon bulguları: Splenomegali, asit, variksler, rekanalize umbilikal ven."
        ]
    },
    {
        "id": "hydatid_cyst",
        "name": "Hidatik Kist (Ekinokok)",
        "category": "Enfeksiyon",
        "findings": {
            "ultrasound": {
                "description": "Tip I: Basit kist (uniloküler). Tip II: Yavru kistler (daughter cysts) + 'Su zambağı işareti' (membrane detachment). Tip III: Kalsifiye kist (inaktif).",
                "doppler": "Kist içinde akım yok."
            },
            "ct": {
                "non_contrast": "İyi sınırlı, su dansitesinde kist. Duvar KALSİFİKASYONU (kronik). Yavru kistler: Ana kistten düşük dansite.",
                "contrast": "Kist içi kontrastlanma YOK. Duvar minimal kontrastlanabilir. Septalar görülebilir."
            },
            "mri": {
                "t1": "Kist: Hipointens (su). Yavru kist: Daha hipointens. Kum taneleri (skoleksler): İzointens.",
                "t2": "Kist: Hiperintens. Hipointens RİM (perikist - fibröz kapsül). 'Water lily sign': Yüzen membran.",
                "dwi": "Kist içeriği: Difüzyon kolaylaşmış (sıvı). Apse'den fark.",
                "t1_c": "İç yapılar kontrastlanmaz. Perikist hafif kontrastlanabilir."
            }
        },
        "keyPoints": [
            "WHO-IWGE sınıflaması: CE1-CE5 (aktif → inaktif).",
            "'Water lily sign': Memran dekolmanı - Hidatik kist için patognomonik.",
            "Rüptür komplikasyonu: Anafilaksi, yavru kist disseminasyonu.",
            "Seroloji + Görüntüleme = Tanı. Cerrahi veya PAIR tedavi."
        ]
    }
];
