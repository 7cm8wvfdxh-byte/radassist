import { Brain, Bone, Heart, Stethoscope, Wind, Activity } from "lucide-react";
import type { ComponentType } from "react";

export interface OrganConfig {
    key: string;
    labelTr: string;
    labelEn: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
    bgClass: string;
}

export const ORGAN_CONFIG: Record<string, OrganConfig> = {
    brain: { key: "brain", labelTr: "Beyin", labelEn: "Brain", icon: Brain, color: "text-indigo-400", bgClass: "bg-indigo-500/10" },
    spine: { key: "spine", labelTr: "Omurga", labelEn: "Spine", icon: Bone, color: "text-slate-400", bgClass: "bg-slate-500/10" },
    liver: { key: "liver", labelTr: "Karaciğer", labelEn: "Liver", icon: Activity, color: "text-amber-400", bgClass: "bg-amber-500/10" },
    kidney: { key: "kidney", labelTr: "Böbrek", labelEn: "Kidney", icon: Heart, color: "text-rose-400", bgClass: "bg-rose-500/10" },
    lung: { key: "lung", labelTr: "Akciğer", labelEn: "Lung", icon: Wind, color: "text-cyan-400", bgClass: "bg-cyan-500/10" },
    breast: { key: "breast", labelTr: "Meme", labelEn: "Breast", icon: Stethoscope, color: "text-pink-400", bgClass: "bg-pink-500/10" },
    msk: { key: "msk", labelTr: "Kas-İskelet", labelEn: "MSK", icon: Bone, color: "text-orange-400", bgClass: "bg-orange-500/10" },
    gastro: { key: "gastro", labelTr: "GİS", labelEn: "GI", icon: Activity, color: "text-green-400", bgClass: "bg-green-500/10" },
    gynecology: { key: "gynecology", labelTr: "Jinekoloji", labelEn: "Gynecology", icon: Heart, color: "text-purple-400", bgClass: "bg-purple-500/10" },
};

/** Get localized label for an organ */
export function getOrganLabel(key: string, language: "tr" | "en"): string {
    const config = ORGAN_CONFIG[key];
    if (!config) return key;
    return language === "en" ? config.labelEn : config.labelTr;
}

/** Get i18n field value with fallback */
export function getI18nField<T extends Record<string, unknown>>(
    data: T,
    fieldKey: string,
    language: "tr" | "en"
): unknown {
    if (language === "en") {
        const enKey = `${fieldKey}En`;
        return (data[enKey] !== undefined && data[enKey] !== null) ? data[enKey] : data[fieldKey];
    }
    return data[fieldKey];
}
