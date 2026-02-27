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
    "detailed_view": "Detaylı",
    "quick_view": "Özet",
    "mechanism": "Mekanizma",

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

    // Pathology Search Assistant
    "ai.title": "Patoloji Arama",
    "ai.subtitle": "9 organ veritabanında arama yapın",
    "ai.placeholder": "Hastalık adı veya bulgu yazın...",
    "ai.quickPrompts": "Hızlı Aramalar",
    "ai.thinking": "Aranıyor...",

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
    "search.placeholder": "Patoloji, bulgu veya sekans ara...",
    "search.clear": "Temizle",
    "search.resultsFound": "sonuç bulundu",
    "search.noResults": "Sonuç bulunamadı",
    "search.didYouMean": "Bunu mu demek istediniz?",
    "search.recentSearches": "Son Aramalar",
    "search.clearAll": "Temizle",
    "search.navigate": "gezin",
    "search.select": "seç",
    "search.close": "kapat",
    "search.caseStudy": "Vaka",
    "search.finding": "Bulgu",
    "search.announcement": "Duyuru",

    // Auth pages
    "auth.welcomeBack": "Tekrar Hoşgeldiniz",
    "auth.welcomeBackSubtitle": "Kişiselleştirilmiş radyoloji asistanınıza erişmek için giriş yapın.",
    "auth.joinUs": "Aramıza Katılın",
    "auth.joinUsSubtitle": "Binlerce vaka, hesaplayıcı ve yapay zeka desteğiyle öğrenme sürecinizi hızlandırın.",
    "auth.emailRequired": "Lütfen önce e-posta adresinizi girin.",
    "auth.resetFailed": "Şifre sıfırlama e-postası gönderilemedi.",
    "auth.unexpectedError": "Beklenmeyen bir hata oluştu.",
    "auth.loginError": "Giriş yapılırken bir hata oluştu.",
    "auth.resetSent": "Sıfırlama e-postası gönderildi!",
    "auth.heroTitle1": "Radyolojik Tanıda",
    "auth.heroTitle2": "Yapay Zeka Gücü",
    "auth.heroSubtitle": "Binlerce patoloji, gelişmiş hesaplayıcılar ve akıllı asistan ile nöbetleriniz artık daha güvenli.",

    // Announcements
    "announcements.title": "Duyurular & Etkinlikler",
    "announcements.subtitle": "Radyoloji gündemini ve yaklaşan organizasyonları takip edin.",
    "announcements.congress": "Kongre",
    "announcements.seminar": "Seminer / Webinar",
    "announcements.news": "Haber / Makale",
    "announcements.update": "Sistem Güncellemesi",
    "announcements.announcement": "Duyuru",
    "announcements.all": "Tümü",
    "announcements.viewDetails": "Detayları Gör",
    "announcements.noAnnouncements": "Bu kategoride şu an aktif bir duyuru bulunmuyor.",

    // Forum / Community
    "forum.anonymous": "Anonim",
    "forum.admin": "YÖNETİCİ",
    "forum.deletePost": "Gönderiyi Sil",
    "forum.deletePostAdmin": "Gönderiyi Sil (Admin)",
    "forum.deleteComment": "Yorumu Sil (Admin)",
    "forum.notFound": "Gönderi bulunamadı.",
    "forum.loginToLike": "Beğenmek için giriş yapmalısınız.",
    "forum.backToForum": "Foruma Dön",
    "forum.createError": "Gönderi oluşturulamadı. Lütfen tekrar deneyin.",
    "forum.unexpectedError": "Beklenmeyen bir hata oluştu.",
    "forum.deleteConfirm": "Bu gönderiyi silmek istediğinizden emin misiniz?",
    "forum.deleteFailed": "Gönderi silinemedi.",
    "forum.deleteCommentConfirm": "Bu yorumu silmek istediğinizden emin misiniz?",

    // AI Assistant
    "ai.welcomeTitle": "Patoloji Arama Asistanı",
    "ai.welcomeText": "9 organ sistemindeki patoloji veritabanından arama yapabilirsiniz. Hastalık adı, bulgu veya anahtar kelime yazın.",
    "ai.error": "Bir hata oluştu. Lütfen tekrar deneyin.",
    "ai.clearChat": "Sohbeti temizle",
    "ai.disclaimer": "Yanıtlar veritabanı aramasına dayalıdır ve bilgilendirme amaçlıdır. Kesin tanı için klinik korelasyon gereklidir.",

    // Search Enhancements
    "search.shortcutHint": "Hızlı arama için",
    "search.shortcutKey": "tuşuna basın",
    "search.chip.emergency": "Acil",
    "search.chip.mass": "Kitle",
    "search.chip.t2hyper": "T2 Hiper",
    "search.chip.contrast": "Kontrast+",
    "search.chip.calcification": "Kalsifikasyon",
    "search.chip.cyst": "Kist",
    "search.emptyTitle": "Aradığınızı Bulun",
    "search.emptySubtitle": "Patoloji adı, bulgu veya radyolojik terim yazarak arama yapın",
    "search.emptyHint1": "Halk dili kullanabilirsiniz: \"parlak\", \"koyu\", \"kitle\"",
    "search.emptyHint2": "Modalite belirtin: \"MR'da hiperintens\", \"BT'de hiperdens\"",
    "search.emptyHint3": "Eş anlamlılar otomatik genişletilir",
    "search.searching": "Aranıyor...",
    "search.resultsSingular": "sonuç bulundu",
    "search.scrollMore": "kaydır",
    "search.tryGlobal": "Tüm modüllerde aramayı deneyin",
    "search.noResultsHint": "Farklı bir terim veya eş anlamlı deneyin",
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
    "detailed_view": "Details",
    "quick_view": "Summary",
    "mechanism": "Mechanism",

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

    // Pathology Search Assistant
    "ai.title": "Pathology Search",
    "ai.subtitle": "Search across 9 organ databases",
    "ai.placeholder": "Type a disease name or finding...",
    "ai.quickPrompts": "Quick Searches",
    "ai.thinking": "Searching...",

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
    "search.placeholder": "Search pathology, finding, or sequence...",
    "search.clear": "Clear",
    "search.resultsFound": "results found",
    "search.noResults": "No results found",
    "search.didYouMean": "Did you mean?",
    "search.recentSearches": "Recent Searches",
    "search.clearAll": "Clear",
    "search.navigate": "navigate",
    "search.select": "select",
    "search.close": "close",
    "search.caseStudy": "Case",
    "search.finding": "Finding",
    "search.announcement": "Announcement",

    // Auth pages
    "auth.welcomeBack": "Welcome Back",
    "auth.welcomeBackSubtitle": "Sign in to access your personalized radiology assistant.",
    "auth.joinUs": "Join Us",
    "auth.joinUsSubtitle": "Accelerate your learning with thousands of cases, calculators, and AI support.",
    "auth.emailRequired": "Please enter your email first.",
    "auth.resetFailed": "Could not send password reset email.",
    "auth.unexpectedError": "An unexpected error occurred.",
    "auth.loginError": "An error occurred while logging in.",
    "auth.resetSent": "Reset email sent!",
    "auth.heroTitle1": "AI Power in",
    "auth.heroTitle2": "Radiological Diagnosis",
    "auth.heroSubtitle": "Your shifts are now safer with thousands of pathologies, advanced calculators, and a smart assistant.",

    // Announcements
    "announcements.title": "Announcements & Events",
    "announcements.subtitle": "Follow the radiology agenda and upcoming events.",
    "announcements.congress": "Congress",
    "announcements.seminar": "Seminar / Webinar",
    "announcements.news": "News / Article",
    "announcements.update": "System Update",
    "announcements.announcement": "Announcement",
    "announcements.all": "All",
    "announcements.viewDetails": "View Details",
    "announcements.noAnnouncements": "No active announcements in this category.",

    // Forum / Community
    "forum.anonymous": "Anonymous",
    "forum.admin": "ADMIN",
    "forum.deletePost": "Delete Post",
    "forum.deletePostAdmin": "Delete Post (Admin)",
    "forum.deleteComment": "Delete Comment (Admin)",
    "forum.notFound": "Post not found.",
    "forum.loginToLike": "You must log in to like.",
    "forum.backToForum": "Back to Forum",
    "forum.createError": "Could not create post. Please try again.",
    "forum.unexpectedError": "An unexpected error occurred.",
    "forum.deleteConfirm": "Are you sure you want to delete this post?",
    "forum.deleteFailed": "Could not delete post.",
    "forum.deleteCommentConfirm": "Are you sure you want to delete this comment?",

    // AI Assistant
    "ai.welcomeTitle": "Pathology Search Assistant",
    "ai.welcomeText": "Search across 9 organ system pathology databases. Type a disease name, finding, or keyword.",
    "ai.error": "An error occurred. Please try again.",
    "ai.clearChat": "Clear chat",
    "ai.disclaimer": "Responses are based on database search and are for informational purposes only. Clinical correlation is required for definitive diagnosis.",

    // Search Enhancements
    "search.shortcutHint": "Quick search with",
    "search.shortcutKey": "key",
    "search.chip.emergency": "Emergency",
    "search.chip.mass": "Mass",
    "search.chip.t2hyper": "T2 Hyper",
    "search.chip.contrast": "Contrast+",
    "search.chip.calcification": "Calcification",
    "search.chip.cyst": "Cyst",
    "search.emptyTitle": "Find What You Need",
    "search.emptySubtitle": "Search by pathology name, finding, or radiological term",
    "search.emptyHint1": "Use colloquial terms: \"bright\", \"dark\", \"mass\"",
    "search.emptyHint2": "Specify modality: \"hyperintense on MRI\", \"hyperdense on CT\"",
    "search.emptyHint3": "Synonyms are automatically expanded",
    "search.searching": "Searching...",
    "search.resultsSingular": "result found",
    "search.scrollMore": "scroll",
    "search.tryGlobal": "Try searching all modules",
    "search.noResultsHint": "Try a different term or synonym",
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
