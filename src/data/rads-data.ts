export interface RadsCategory {
    category: string;
    label: string;
    risk?: string;
    management: string;
    color: 'green' | 'yellow' | 'orange' | 'red' | 'purple' | 'gray' | 'blue';
}

export interface RadsSystem {
    id: string;
    name: string;
    organ: string;
    modality: string;
    description: string;
    categories: RadsCategory[];
    note?: string;
}

export const RADS_SYSTEMS: RadsSystem[] = [
    {
        id: "bi_rads",
        name: "ACR BI-RADS",
        organ: "Meme",
        modality: "MMG / USG / MRG",
        description: "Breast Imaging Reporting and Data System — Meme lezyonlarının malignite riskini ve yönetimini standardize eder.",
        note: "ACR BI-RADS 5. Edisyon (2013)",
        categories: [
            { category: "0", label: "Değerlendirme Yetersiz", risk: "—", management: "Ek görüntüleme gerekli (ek mammografi açıları, USG). Önceki filmlerle karşılaştırma.", color: "gray" },
            { category: "1", label: "Negatif", risk: "0%", management: "Rutin tarama mammografisi önerilir.", color: "green" },
            { category: "2", label: "Benign Bulgu", risk: "0%", management: "Rutin tarama mammografisi önerilir.", color: "green" },
            { category: "3", label: "Muhtemelen Benign", risk: "< %2", management: "6 aylık kısa aralıklı takip USG/MMG önerilir. (2 yıla kadar)", color: "yellow" },
            { category: "4A", label: "Düşük Şüpheli", risk: "%2–10", management: "Biyopsi önerilir. (İİAB veya Tru-cut)", color: "orange" },
            { category: "4B", label: "Orta Şüpheli", risk: "%10–50", management: "Biyopsi önerilir.", color: "orange" },
            { category: "4C", label: "Yüksek Şüpheli", risk: "%50–95", management: "Biyopsi önerilir. Malignite ihtimali yüksek.", color: "red" },
            { category: "5", label: "Malinite ile Yüksek Uyumlu", risk: "≥ %95", management: "Biyopsi ve tedavi planlaması gereklidir.", color: "red" },
            { category: "6", label: "Bilinen Malignite (Biyopsi ile kanıtlanmış)", risk: "N/A", management: "Tedavi yanıtı izlemi veya cerrahi planlama.", color: "purple" },
        ]
    },
    {
        id: "li_rads",
        name: "ACR LI-RADS",
        organ: "Karaciğer",
        modality: "BT / MRG",
        description: "Liver Imaging Reporting and Data System — HCC riski taşıyan (siroz, HBV, HCC öyküsü) hastalarda karaciğer lezyonlarını sınıflandırır.",
        note: "LI-RADS v2018. Yalnızca siroz/yüksek HCC riski olan hastalara uygulanır.",
        categories: [
            { category: "LR-1", label: "Kesinlikle Benign", risk: "0%", management: "Rutin gözetim.", color: "green" },
            { category: "LR-2", label: "Muhtemelen Benign", risk: "< %5", management: "Rutin gözetim (6 ay).", color: "green" },
            { category: "LR-3", label: "Orta Olasılıklı Malign", risk: "%5–66", management: "6 aylık takip BT/MRG veya alternatif tanı yöntemi.", color: "yellow" },
            { category: "LR-4", label: "Muhtemelen HCC", risk: "%67–94", management: "Multidisipliner tümör konseyi. Biyopsi veya tedavi düşünülmeli.", color: "orange" },
            { category: "LR-5", label: "Kesinlikle HCC", risk: "≥ %95", management: "HCC tedavisi (ablasyon, TACE, rezeksiyon, OLT). Biyopsi genellikle gerekmez.", color: "red" },
            { category: "LR-M", label: "Malign (HCC olmayan)", risk: "Yüksek", management: "HCC dışı malignite (kolanjiyokarsinom, met). Biyopsi ve multidisipliner değerlendirme.", color: "purple" },
            { category: "LR-TIV", label: "Tümör - Damar İçi Uzanım", risk: "Çok Yüksek", management: "Vasküler invazyon (portal/hepatik ven). İleri evreleme ve tedavi planlaması.", color: "red" },
        ]
    },
    {
        id: "lung_rads",
        name: "ACR Lung-RADS",
        organ: "Akciğer",
        modality: "Düşük Doz BT (LDCT)",
        description: "Lung CT Screening Reporting and Data System — Akciğer kanseri taramasında akciğer nodüllerini değerlendirir.",
        note: "Lung-RADS v1.1 (2019). Yalnızca LDCT tarama protokolünde kullanılır.",
        categories: [
            { category: "0", label: "Yetersiz / Önceki Filmler Bekleniyor", risk: "—", management: "Tekrar BT veya ek inceleme gerekli.", color: "gray" },
            { category: "1", label: "Negatif", risk: "< %1", management: "Yıllık LDCT tarama (12 ay).", color: "green" },
            { category: "2", label: "Benign Bulgular", risk: "< %1", management: "Yıllık LDCT tarama (12 ay).", color: "green" },
            { category: "3", label: "Muhtemelen Benign", risk: "~%1–2", management: "6 aylık LDCT takip.", color: "yellow" },
            { category: "4A", label: "Şüpheli", risk: "~%5–15", management: "3 aylık LDCT takip veya PET/BT.", color: "orange" },
            { category: "4B", label: "Yüksek Şüpheli", risk: "~%15+", management: "BT (kontrast), PET/BT, doku örneklemesi.", color: "red" },
            { category: "4X", label: "Ek Bulgular ile Şüpheli", risk: "Yüksek", management: "4A veya 4B'ye ek bulgular (N veya M hastalık şüphesi). Onkoloji konsültasyonu.", color: "red" },
            { category: "S", label: "Klinik Önemi Olan Bulgu (Modifiye)", risk: "Değişken", management: "Akciğer kanseri dışı bulgu (ör. aort anevrizması). Ek değerlendirme.", color: "blue" },
        ]
    },
    {
        id: "pi_rads",
        name: "PI-RADS v2.1",
        organ: "Prostat",
        modality: "mpMRI (Çok Parametreli MRG)",
        description: "Prostate Imaging – Reporting and Data System — Klinik olarak anlamlı prostat kanserini (csPCa) tespit etmek için mpMRI bulguları değerlendirilir.",
        note: "PI-RADS v2.1 (2019). DWI dominant bölge: Periferik zon. T2W dominant: Transizyonel zon.",
        categories: [
            { category: "PI-RADS 1", label: "Çok Düşük", risk: "< %5", management: "csPCa ihtimali çok düşük. Biyopsi genellikle gerekmez (klinik değerlendirme).", color: "green" },
            { category: "PI-RADS 2", label: "Düşük", risk: "~%10", management: "csPCa ihtimali düşük. Klinik parametreler ile birlikte değerlendir.", color: "green" },
            { category: "PI-RADS 3", label: "Orta", risk: "~%15–30", management: "csPCa ihtimali belirsiz. Biyopsi veya kısa aralıklı MRG takibi düşünülür. Klinik karar belirleyici.", color: "yellow" },
            { category: "PI-RADS 4", label: "Yüksek", risk: "~%50–60", management: "csPCa ihtimali yüksek. MRG-füzyon veya MRG-hedefli biyopsi önerilir.", color: "orange" },
            { category: "PI-RADS 5", label: "Çok Yüksek", risk: "> %80", management: "csPCa ihtimali çok yüksek. MRG-hedefli biyopsi zorunlu. Lokal evreleme için çevre yapılar değerlendirilmeli.", color: "red" },
        ]
    },
    {
        id: "o_rads",
        name: "ACR O-RADS",
        organ: "Over (Yumurtalık)",
        modality: "USG / MRG",
        description: "Ovarian-Adnexal Reporting and Data System — Over ve adneksiyal kitlelerin malignite riskini standardize eder.",
        note: "O-RADS USG v2019. Reprodüktif çağ dışı hastalarda eşikler farklı değerlendirilebilir.",
        categories: [
            { category: "O-RADS 0", label: "Yetersiz Değerlendirme", risk: "—", management: "Tekrar USG veya MRG ile değerlendirme.", color: "gray" },
            { category: "O-RADS 1", label: "Normal Over Dokusu", risk: "0%", management: "İzlem gerekmez.", color: "green" },
            { category: "O-RADS 2", label: "Neredeyse Kesinlikle Benign", risk: "< %1", management: "1 yıllık takip USG veya izlem.", color: "green" },
            { category: "O-RADS 3", label: "Düşük-Orta Risk", risk: "%1–10", management: "4-12 haftalık takip USG veya MRG ile ek değerlendirme.", color: "yellow" },
            { category: "O-RADS 4", label: "Orta-Yüksek Risk", risk: "%10–50", management: "Jinekoonkoloji konsültasyonu ve MRG ile ileri değerlendirme.", color: "orange" },
            { category: "O-RADS 5", label: "Yüksek Risk", risk: "> %50", management: "Jinekoonkoloji konsültasyonu. Cerrahi ya da biyopsi planlaması.", color: "red" },
        ]
    },
    {
        id: "ni_rads",
        name: "NI-RADS",
        organ: "Baş-Boyun",
        modality: "BT / MRG / PET-BT",
        description: "Neck Imaging Reporting and Data System — Baş-boyun malignitelerinde tedavi sonrası gözetim görüntülemesini standardize eder.",
        note: "Tedavi sonrası surveyans için kullanılır. Primer tümör ve boyun nodülleri ayrı ayrı kategorize edilir.",
        categories: [
            { category: "NI-RADS 0", label: "Yetersiz / Tamamlanmamış", risk: "—", management: "Ek inceleme gerekli (ör. PET/BT, MRG kontrastlı).", color: "gray" },
            { category: "NI-RADS 1", label: "Nüks Yok / Beklenen Değişiklik", risk: "< %5", management: "Rutin gözetim takibi (3–6 ay).", color: "green" },
            { category: "NI-RADS 2", label: "Şüpheli Değil (İzlem Gerektiren Bulgu)", risk: "%5–20", management: "3 aylık kısa aralıklı görüntüleme takibi.", color: "yellow" },
            { category: "NI-RADS 3", label: "Yüksek Nüks Şüphesi", risk: "> %50", management: "PET/BT veya doku örneklemesi. Erken aksiyon.", color: "orange" },
            { category: "NI-RADS 4", label: "Yeni / Uzak Metastaz", risk: "Yüksek", management: "Uzak metastaz veya yeni primer düşün. Multidisipliner onkoloji konsültasyonu.", color: "red" },
        ]
    },
];
