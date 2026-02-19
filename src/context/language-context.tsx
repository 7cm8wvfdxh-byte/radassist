"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "TR" | "EN";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string; // Basit çeviri fonksiyonu
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Basit UI çevirileri (sabit metinler için)
const translations: Record<Language, Record<string, string>> = {
    TR: {
        "search_placeholder": "Hastalık, bulgu veya anatomi ara...",
        "favorites_only": "Sadece Favoriler",
        "all_categories": "Tüm Kategoriler",
        "quick_view": "Hızlı Bakış",
        "detailed_view": "Detaylı Görünüm",
        "modality_ct": "Bilgisayarlı Tomografi (BT)",
        "modality_mri": "Manyetik Rezonans (MR)",
        "modality_usg": "Ultrasonografi (USG)",
        "modality_xray": "Röntgen",
        "clinical_pearls": "Klinik İpuçları",
        "findings": "Radyolojik Bulgular",
        "mechanism": "Mekanizma & Patofizyoloji",
        "login": "Giriş Yap",
        "profile": "Profil",
        "community": "Topluluk",
        "tools": "Araçlar",
        "announcements": "Duyurular"
    },
    EN: {
        "search_placeholder": "Search pathology, finding or anatomy...",
        "favorites_only": "Favorites Only",
        "all_categories": "All Categories",
        "quick_view": "Quick View",
        "detailed_view": "Detailed View",
        "modality_ct": "Computed Tomography (CT)",
        "modality_mri": "Magnetic Resonance (MRI)",
        "modality_usg": "Ultrasound (USG)",
        "modality_xray": "X-Ray",
        "clinical_pearls": "Clinical Pearls",
        "findings": "Radiological Findings",
        "mechanism": "Mechanism & Pathophysiology",
        "login": "Login",
        "profile": "Profile",
        "community": "Community",
        "tools": "Tools",
        "announcements": "Announcements"
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("TR");

    useEffect(() => {
        // Tarayıcıdan dil tercihini oku
        const savedLang = localStorage.getItem("radassist-lang") as Language;
        if (savedLang) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("radassist-lang", lang);
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        const newLang = language === "TR" ? "EN" : "TR";
        setLanguage(newLang);
    };

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
