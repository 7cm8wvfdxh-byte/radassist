"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type Language = "tr" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Turkish translations
const tr: Record<string, string> = {
    // Navigation & General
    "nav.home": "Ana Sayfa",
    "nav.community": "RadRoom",
    "nav.announcements": "Duyurular",
    "nav.login": "Giriş",
    "nav.register": "Kayıt Ol",
    "nav.logout": "Çıkış",
    "nav.backToHome": "← Ana Ekrana Dön",

    // Home Page
    "home.title": "RadAsist",
    "home.subtitle": "Yapay Zeka Destekli Radyoloji Tanı Rehberi",
    "home.search": "Patoloji ara...",
    "home.favorites": "Favoriler",
    "home.noFavorites": "Henüz favori eklenmedi",
    "home.modules": "Modüller",
    "home.allModules": "Tümü",

    // Learning Modes
    "mode.grid": "Kart Görünümü",
    "mode.list": "Liste Görünümü",
    "mode.quiz": "Quiz Modu",
    "mode.case": "Vaka Çalışması",
    "mode.diagnosis": "Tanı Sihirbazı",
    "mode.ai": "AI Asistan",
    "mode.swipe": "Swipe Modu",
    "mode.toolbox": "Alet Çantası",

    // Organs
    "organ.brain": "Beyin",
    "organ.spine": "Omurga",
    "organ.liver": "Karaciğer",
    "organ.kidney": "Böbrek",
    "organ.lung": "Akciğer",
    "organ.breast": "Meme",
    "organ.msk": "Kas-İskelet",
    "organ.gastro": "Gastrointestinal",
    "organ.gynecology": "Jinekoloji",

    // Pathology Card
    "pathology.keyPoints": "Anahtar Noktalar",
    "pathology.findings": "Bulgular",
    "pathology.differential": "Ayırıcı Tanı",
    "pathology.gallery": "Galeri",
    "pathology.addFavorite": "Favorilere Ekle",
    "pathology.removeFavorite": "Favorilerden Çıkar",

    // Community/Forum
    "forum.title": "RadRoom",
    "forum.subtitle": "Radyoloji Topluluğu",
    "forum.newPost": "Yeni Vaka",
    "forum.search": "Vaka veya konu ara...",
    "forum.categories": "Kategoriler",
    "forum.allPosts": "Tüm Akış",
    "forum.trending": "Popüler Etiketler",
    "forum.welcome": "RadRoom'a Hoşgeldiniz!",
    "forum.welcomeText": "Burası radyologların buluşma noktası. Zor vakaları tartışın, tecrübelerinizi paylaşın.",
    "forum.noContent": "Henüz içerik yok",
    "forum.beFirst": "Bu kategoride ilk vakayı siz paylaşın!",
    "forum.likes": "beğeni",
    "forum.comments": "yorum",
    "forum.views": "görüntülenme",

    // Create Post Modal
    "post.create": "Yeni Vaka / Tartışma",
    "post.createSubtitle": "Radyoloji topluluğuna danışın (Anonimize etmeyi unutmayın!)",
    "post.title": "Başlık",
    "post.titlePlaceholder": "Ör: MCA Enfarktlarında BT Perfüzyon yorumu?",
    "post.content": "Detaylı Açıklama",
    "post.contentPlaceholder": "Vaka detaylarını veya sorunuzu buraya yazın...",
    "post.tags": "Etiketler (Max 3)",
    "post.cancel": "Vazgeç",
    "post.submit": "Paylaş",
    "post.submitting": "Gönderiliyor...",
    "post.loginRequired": "Gönderi paylaşmak için giriş yapmalısınız.",
    "post.fieldsRequired": "Başlık ve açıklama zorunludur.",

    // Post Detail
    "post.writeComment": "Yorumunuzu yazın...",
    "post.sendComment": "Gönder",
    "post.noComments": "Henüz yorum yok. İlk yorumu siz yapın!",
    "post.loginToComment": "Yorum yapmak için giriş yapın",

    // Auth
    "auth.login": "Giriş Yap",
    "auth.register": "Kayıt Ol",
    "auth.email": "E-posta",
    "auth.password": "Şifre",
    "auth.name": "Ad Soyad",
    "auth.specialty": "Uzmanlık Alanı",
    "auth.noAccount": "Hesabınız yok mu?",
    "auth.hasAccount": "Zaten hesabınız var mı?",
    "auth.forgotPassword": "Şifremi unuttum",

    // AI Assistant
    "ai.title": "AI Asistan",
    "ai.subtitle": "Radyoloji sorularınızı sorun",
    "ai.placeholder": "Sorunuzu yazın...",
    "ai.quickPrompts": "Hızlı Sorular",
    "ai.thinking": "Düşünüyor...",

    // Quiz Mode
    "quiz.title": "Quiz Modu",
    "quiz.score": "Puan",
    "quiz.streak": "Seri",
    "quiz.question": "Bu görüntüde hangi patoloji var?",
    "quiz.correct": "Doğru!",
    "quiz.incorrect": "Yanlış!",
    "quiz.next": "Sonraki Soru",

    // Diagnosis Wizard
    "diagnosis.title": "Tanı Sihirbazı",
    "diagnosis.selectOrgan": "Organ Seçin",
    "diagnosis.selectModality": "Modalite Seçin",
    "diagnosis.selectFindings": "Bulguları Seçin",
    "diagnosis.results": "Olası Tanılar",
    "diagnosis.highProbability": "Yüksek Olasılık",
    "diagnosis.mediumProbability": "Orta Olasılık",
    "diagnosis.lowProbability": "Düşük Olasılık",
    "diagnosis.generateReport": "Rapor Oluştur",

    // Toolbox
    "toolbox.title": "Alet Çantası",
    "toolbox.measurements": "Ölçümler",
    "toolbox.calculators": "Hesaplayıcılar",
    "toolbox.calculate": "Hesapla",
    "toolbox.result": "Sonuç",

    // PWA
    "pwa.install": "Uygulamayı Yükle",
    "pwa.installText": "RadAsist'i ana ekranınıza ekleyin",
    "pwa.iosInstructions": "Safari'de paylaş butonuna basın ve 'Ana Ekrana Ekle' seçin",

    // General
    "general.loading": "Yükleniyor...",
    "general.error": "Bir hata oluştu",
    "general.retry": "Tekrar Dene",
    "general.close": "Kapat",
    "general.save": "Kaydet",
    "general.delete": "Sil",
    "general.edit": "Düzenle",
    "general.cancel": "İptal",
    "general.confirm": "Onayla",
    "general.yes": "Evet",
    "general.no": "Hayır",
    "general.new": "YENİ",
    "general.all": "Tümü",

    // Hero Section
    "hero.aiPowered": "Yapay Zeka Destekli Radyoloji",
    "hero.dailyCard": "Günün Kartı",
    "hero.cardMode": "Kart Modu",

    // View Modes
    "view.grid": "Izgara",
    "view.list": "Liste",
    "view.showFavorites": "Favorileri Göster",
    "view.globalSearch": "Global Arama",
    "view.noResults": "Sonuç bulunamadı",
    "view.resultsCount": "sonuç bulundu",

    // Search
    "search.allModules": "Tüm modüllerde (Beyin, Omurga, Karaciğer, Meme, MSK...) ara...",
    "search.inModule": "patolojisi ara...",
    "search.searchAllModules": "Tüm Modüllerde Ara",

    // Pathology Card
    "card.detail": "Detay",
    "card.summary": "ÖZET",
    "card.flipHint": "Detaylı patofizyoloji ve mekanizma için kartı çevirin ↻",
    "card.mechanism": "Patofizyolojik Mekanizma",
    "card.whyLooksLike": "Neden Böyle Görünüyor?",
    "card.pearls": "Kritik İpuçları (Pearls)",
    "card.backToImage": "Görüntüye Dön",

    // Diagnosis Wizard
    "wizard.title": "Tanı Sihirbazı",
    "wizard.subtitle": "Bulguları seçerek olası tanıları ve rapor taslağını görüntüleyin.",
    "wizard.selectedFindings": "Seçili Bulgular",
    "wizard.clear": "Temizle",
    "wizard.organSystem": "Organ Sistemi",
    "wizard.brain": "Beyin",
    "wizard.spine": "Omurga",
    "wizard.liver": "Karaciğer",
    "wizard.kidney": "Böbrek",
    "wizard.lung": "Akciğer",
    "wizard.modality": "İnceleme Yöntemi (Modality)",
    "wizard.findings": "Saptanan Bulgular",
    "wizard.results": "Analiz Sonuçları",
    "wizard.matches": "Eşleşme",
    "wizard.startSelect": "Bulguları seçmeye başladığınızda olası tanılar burada listelenecektir.",
    "wizard.noMatch": "Seçilen kriterlere uygun tanı bulunamadı.",
    "wizard.confidence": "Güven",
    "wizard.strengthen": "Tanıyı Güçlendir (Bunu Kontrol Et):",
    "wizard.matchedFindings": "Eşleşen Bulgular:",
    "wizard.generateReport": "Rapor Taslağı Oluştur",
    "wizard.reportTitle": "Radyoloji Rapor Taslağı",
    "wizard.clinicalInfo": "KLİNİK BİLGİ:",
    "wizard.enterClinical": "[Klinik bilgi giriniz...]",
    "wizard.examination": "İNCELEME:",
    "wizard.technique": "TEKNİK:",
    "wizard.findingsLabel": "BULGULAR:",
    "wizard.additionalFindings": "EK İŞARETLENEN BULGULAR:",
    "wizard.conclusion": "SONUÇ & ÖNERİLER:",
    "wizard.alternatives": "Olası Ayırıcı Tanılar (Alternatifler):",
    "wizard.disclaimer": "* Bu rapor yapay zeka destekli taslak niteliğindedir. Uzman radyolog onayı gerektirir.",
    "wizard.copy": "Kopyala",
    "wizard.cranial": "Kranial",
    "wizard.spinal": "Spinal",
    "wizard.abdominal": "Abdominal (Karaciğer)",
    "wizard.urinary": "Üriner sistem",
    "wizard.thorax": "Toraks",
    "wizard.examination_suffix": "incelemesi",

    // Quiz Mode
    "quiz.loading": "Yükleniyor...",
    "quiz.score": "Puan",
    "quiz.streak": "Seri",
    "quiz.question": "Bu görüntü hangi hastalığa ait?",
    "quiz.correct": "Doğru Cevap! 🎉",
    "quiz.incorrect": "Yanlış Cevap",
    "quiz.next": "Sıradaki Soru",

    // Toolbox Mode
    "toolbox.normalValues": "Normal Değerler (Cetvel)",
    "toolbox.calculators": "Hesaplayıcılar",
    "toolbox.searchMeasurement": "Ölçüm ara (örn: koletok, dalak, aorta)...",
    "toolbox.noResults": "Sonuç bulunamadı.",
    "toolbox.normal": "Normal:",
    "toolbox.pathological": "Patolojik:",
    "toolbox.selectCalculator": "Sol taraftan bir hesaplayıcı seçin.",
    "toolbox.calculate": "Hesapla",
    "toolbox.result": "Sonuç",
    "toolbox.preContrast": "Pre-Kontrast (Native) HU",
    "toolbox.venousPhase": "Venöz Faz (Portal) HU",
    "toolbox.delayedPhase": "Geç Faz (15dk Delayed) HU",
    "toolbox.height": "Boy (cm)",
    "toolbox.width": "En (cm)",
    "toolbox.depth": "Yükseklik (cm)",
    "toolbox.calculateVolume": "Hacim Hesapla",
    "toolbox.distalLumen": "Distal Normal Lümen Çapı (mm)",
    "toolbox.stenosisWidth": "En Dar Kısım Çapı (mm)",
    "toolbox.calculateStenosis": "Darlık Hesapla",
    "toolbox.baseline": "Bazal Kısa Aks/Çap (mm)",
    "toolbox.current": "Güncel Kısa Aks/Çap (mm)",
    "toolbox.evaluateResponse": "Yanıt Değerlendir",
    "toolbox.creatinine": "Kreatinin (mg/dL)",
    "toolbox.age": "Yaş",
    "toolbox.gender": "Cinsiyet",
    "toolbox.female": "Kadın",
    "toolbox.male": "Erkek",
    "toolbox.calculateEGFR": "eGFR Hesapla",
    "toolbox.gcsScore": "GCS Skoru",
    "toolbox.bleedingVolume": "Kanama Hacmi",
    "toolbox.ivh": "Intraventriküler (IVH)",
    "toolbox.infratentorial": "Infratentoryal Yerleşim",
    "toolbox.ageOver80": "Yaş ≥ 80",
    "toolbox.yes": "Evet",
    "toolbox.no": "Hayır",
    "toolbox.calculateMortality": "Mortalite Hesapla",
    "toolbox.composition": "Yapı (Composition)",
    "toolbox.echogenicity": "Ekojenite",
    "toolbox.shape": "Şekil",
    "toolbox.margin": "Kenar",
    "toolbox.echogenicFoci": "Ekojenik Odak",
    "toolbox.calculateRisk": "Risk Hesapla",
};

// English translations
const en: Record<string, string> = {
    // Navigation & General
    "nav.home": "Home",
    "nav.community": "RadRoom",
    "nav.announcements": "Announcements",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.logout": "Logout",
    "nav.backToHome": "← Back to Home",

    // Home Page
    "home.title": "RadAsist",
    "home.subtitle": "AI-Powered Radiology Diagnosis Guide",
    "home.search": "Search pathology...",
    "home.favorites": "Favorites",
    "home.noFavorites": "No favorites yet",
    "home.modules": "Modules",
    "home.allModules": "All",

    // Learning Modes
    "mode.grid": "Grid View",
    "mode.list": "List View",
    "mode.quiz": "Quiz Mode",
    "mode.case": "Case Study",
    "mode.diagnosis": "Diagnosis Wizard",
    "mode.ai": "AI Assistant",
    "mode.swipe": "Swipe Mode",
    "mode.toolbox": "Toolbox",

    // Organs
    "organ.brain": "Brain",
    "organ.spine": "Spine",
    "organ.liver": "Liver",
    "organ.kidney": "Kidney",
    "organ.lung": "Lung",
    "organ.breast": "Breast",
    "organ.msk": "MSK",
    "organ.gastro": "Gastrointestinal",
    "organ.gynecology": "Gynecology",

    // Pathology Card
    "pathology.keyPoints": "Key Points",
    "pathology.findings": "Findings",
    "pathology.differential": "Differential Diagnosis",
    "pathology.gallery": "Gallery",
    "pathology.addFavorite": "Add to Favorites",
    "pathology.removeFavorite": "Remove from Favorites",

    // Community/Forum
    "forum.title": "RadRoom",
    "forum.subtitle": "Radiology Community",
    "forum.newPost": "New Case",
    "forum.search": "Search cases or topics...",
    "forum.categories": "Categories",
    "forum.allPosts": "All Posts",
    "forum.trending": "Trending Tags",
    "forum.welcome": "Welcome to RadRoom!",
    "forum.welcomeText": "This is where radiologists meet. Discuss challenging cases, share your experiences.",
    "forum.noContent": "No content yet",
    "forum.beFirst": "Be the first to share a case in this category!",
    "forum.likes": "likes",
    "forum.comments": "comments",
    "forum.views": "views",

    // Create Post Modal
    "post.create": "New Case / Discussion",
    "post.createSubtitle": "Consult with the radiology community (Remember to anonymize!)",
    "post.title": "Title",
    "post.titlePlaceholder": "e.g., CT Perfusion interpretation in MCA Infarcts?",
    "post.content": "Detailed Description",
    "post.contentPlaceholder": "Write your case details or question here...",
    "post.tags": "Tags (Max 3)",
    "post.cancel": "Cancel",
    "post.submit": "Share",
    "post.submitting": "Submitting...",
    "post.loginRequired": "You must be logged in to share a post.",
    "post.fieldsRequired": "Title and description are required.",

    // Post Detail
    "post.writeComment": "Write your comment...",
    "post.sendComment": "Send",
    "post.noComments": "No comments yet. Be the first to comment!",
    "post.loginToComment": "Log in to comment",

    // Auth
    "auth.login": "Login",
    "auth.register": "Register",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.name": "Full Name",
    "auth.specialty": "Specialty",
    "auth.noAccount": "Don't have an account?",
    "auth.hasAccount": "Already have an account?",
    "auth.forgotPassword": "Forgot password",

    // AI Assistant
    "ai.title": "AI Assistant",
    "ai.subtitle": "Ask your radiology questions",
    "ai.placeholder": "Type your question...",
    "ai.quickPrompts": "Quick Prompts",
    "ai.thinking": "Thinking...",

    // Quiz Mode
    "quiz.title": "Quiz Mode",
    "quiz.score": "Score",
    "quiz.streak": "Streak",
    "quiz.question": "What pathology is shown in this image?",
    "quiz.correct": "Correct!",
    "quiz.incorrect": "Incorrect!",
    "quiz.next": "Next Question",

    // Diagnosis Wizard
    "diagnosis.title": "Diagnosis Wizard",
    "diagnosis.selectOrgan": "Select Organ",
    "diagnosis.selectModality": "Select Modality",
    "diagnosis.selectFindings": "Select Findings",
    "diagnosis.results": "Possible Diagnoses",
    "diagnosis.highProbability": "High Probability",
    "diagnosis.mediumProbability": "Medium Probability",
    "diagnosis.lowProbability": "Low Probability",
    "diagnosis.generateReport": "Generate Report",

    // Toolbox
    "toolbox.title": "Toolbox",
    "toolbox.measurements": "Measurements",
    "toolbox.calculators": "Calculators",
    "toolbox.calculate": "Calculate",
    "toolbox.result": "Result",

    // PWA
    "pwa.install": "Install App",
    "pwa.installText": "Add RadAsist to your home screen",
    "pwa.iosInstructions": "Tap the share button in Safari and select 'Add to Home Screen'",

    // General
    "general.loading": "Loading...",
    "general.error": "An error occurred",
    "general.retry": "Retry",
    "general.close": "Close",
    "general.save": "Save",
    "general.delete": "Delete",
    "general.edit": "Edit",
    "general.cancel": "Cancel",
    "general.confirm": "Confirm",
    "general.yes": "Yes",
    "general.no": "No",
    "general.new": "NEW",
    "general.all": "All",

    // Hero Section
    "hero.aiPowered": "AI-Powered Radiology",
    "hero.dailyCard": "Daily Card",
    "hero.cardMode": "Card Mode",

    // View Modes
    "view.grid": "Grid",
    "view.list": "List",
    "view.showFavorites": "Show Favorites",
    "view.globalSearch": "Global Search",
    "view.noResults": "No results found",
    "view.resultsCount": "results found",

    // Search
    "search.allModules": "Search all modules (Brain, Spine, Liver, Breast, MSK...)",
    "search.inModule": "Search pathology...",
    "search.searchAllModules": "Search All Modules",

    // Pathology Card
    "card.detail": "Detail",
    "card.summary": "SUMMARY",
    "card.flipHint": "Flip the card for detailed pathophysiology and mechanism ↻",
    "card.mechanism": "Pathophysiological Mechanism",
    "card.whyLooksLike": "Why Does It Look Like This?",
    "card.pearls": "Critical Tips (Pearls)",
    "card.backToImage": "Back to Image",

    // Diagnosis Wizard
    "wizard.title": "Diagnosis Wizard",
    "wizard.subtitle": "Select findings to view possible diagnoses and report draft.",
    "wizard.selectedFindings": "Selected Findings",
    "wizard.clear": "Clear",
    "wizard.organSystem": "Organ System",
    "wizard.brain": "Brain",
    "wizard.spine": "Spine",
    "wizard.liver": "Liver",
    "wizard.kidney": "Kidney",
    "wizard.lung": "Lung",
    "wizard.modality": "Imaging Modality",
    "wizard.findings": "Detected Findings",
    "wizard.results": "Analysis Results",
    "wizard.matches": "Matches",
    "wizard.startSelect": "Possible diagnoses will be listed here when you start selecting findings.",
    "wizard.noMatch": "No diagnosis found matching the selected criteria.",
    "wizard.confidence": "Confidence",
    "wizard.strengthen": "Strengthen Diagnosis (Check This):",
    "wizard.matchedFindings": "Matched Findings:",
    "wizard.generateReport": "Generate Report Draft",
    "wizard.reportTitle": "Radiology Report Draft",
    "wizard.clinicalInfo": "CLINICAL INFO:",
    "wizard.enterClinical": "[Enter clinical information...]",
    "wizard.examination": "EXAMINATION:",
    "wizard.technique": "TECHNIQUE:",
    "wizard.findingsLabel": "FINDINGS:",
    "wizard.additionalFindings": "ADDITIONAL MARKED FINDINGS:",
    "wizard.conclusion": "CONCLUSION & RECOMMENDATIONS:",
    "wizard.alternatives": "Possible Differential Diagnoses (Alternatives):",
    "wizard.disclaimer": "* This is an AI-assisted draft report. Expert radiologist approval is required.",
    "wizard.copy": "Copy",
    "wizard.cranial": "Cranial",
    "wizard.spinal": "Spinal",
    "wizard.abdominal": "Abdominal (Liver)",
    "wizard.urinary": "Urinary system",
    "wizard.thorax": "Thorax",
    "wizard.examination_suffix": "examination",

    // Quiz Mode
    "quiz.loading": "Loading...",
    "quiz.score": "Score",
    "quiz.streak": "Streak",
    "quiz.question": "Which disease does this image belong to?",
    "quiz.correct": "Correct Answer! 🎉",
    "quiz.incorrect": "Wrong Answer",
    "quiz.next": "Next Question",

    // Toolbox Mode
    "toolbox.normalValues": "Normal Values (Ruler)",
    "toolbox.calculators": "Calculators",
    "toolbox.searchMeasurement": "Search measurement (e.g., choledochus, spleen, aorta)...",
    "toolbox.noResults": "No results found.",
    "toolbox.normal": "Normal:",
    "toolbox.pathological": "Pathological:",
    "toolbox.selectCalculator": "Select a calculator from the left.",
    "toolbox.calculate": "Calculate",
    "toolbox.result": "Result",
    "toolbox.preContrast": "Pre-Contrast (Native) HU",
    "toolbox.venousPhase": "Venous Phase (Portal) HU",
    "toolbox.delayedPhase": "Delayed Phase (15min) HU",
    "toolbox.height": "Length (cm)",
    "toolbox.width": "Width (cm)",
    "toolbox.depth": "Height (cm)",
    "toolbox.calculateVolume": "Calculate Volume",
    "toolbox.distalLumen": "Distal Normal Lumen Diameter (mm)",
    "toolbox.stenosisWidth": "Narrowest Point Diameter (mm)",
    "toolbox.calculateStenosis": "Calculate Stenosis",
    "toolbox.baseline": "Baseline Short Axis/Diameter (mm)",
    "toolbox.current": "Current Short Axis/Diameter (mm)",
    "toolbox.evaluateResponse": "Evaluate Response",
    "toolbox.creatinine": "Creatinine (mg/dL)",
    "toolbox.age": "Age",
    "toolbox.gender": "Gender",
    "toolbox.female": "Female",
    "toolbox.male": "Male",
    "toolbox.calculateEGFR": "Calculate eGFR",
    "toolbox.gcsScore": "GCS Score",
    "toolbox.bleedingVolume": "Bleeding Volume",
    "toolbox.ivh": "Intraventricular (IVH)",
    "toolbox.infratentorial": "Infratentorial Location",
    "toolbox.ageOver80": "Age ≥ 80",
    "toolbox.yes": "Yes",
    "toolbox.no": "No",
    "toolbox.calculateMortality": "Calculate Mortality",
    "toolbox.composition": "Composition",
    "toolbox.echogenicity": "Echogenicity",
    "toolbox.shape": "Shape",
    "toolbox.margin": "Margin",
    "toolbox.echogenicFoci": "Echogenic Foci",
    "toolbox.calculateRisk": "Calculate Risk",
};

const translations: Record<Language, Record<string, string>> = { tr, en };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("tr");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("radassist-language") as Language;
            if (saved && (saved === "tr" || saved === "en")) {
                setLanguageState(saved);
            }
        }
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem("radassist-language", lang);
        }
    }, []);

    const t = useCallback((key: string): string => {
        return translations[language][key] || key;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
