"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "tr" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
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
    "mode.ai": "AI Asistan",
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
    "mode.ai": "AI Assistant",
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
};

const translations: Record<Language, Record<string, string>> = { tr, en };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window === 'undefined') return "tr";
        const saved = localStorage.getItem("radassist-language") as Language;
        return (saved === "tr" || saved === "en") ? saved : "tr";
    });

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem("radassist-language", lang);
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === "tr" ? "en" : "tr");
    }, [language, setLanguage]);

    const t = useCallback((key: string): string => {
        return translations[language][key] || key;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
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
