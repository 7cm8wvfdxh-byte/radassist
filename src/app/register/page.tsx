"use client";

import { AuthLayout } from "@/components/auth/auth-layout";
import { RegisterForm } from "@/components/auth/register-form";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function RegisterPage() {
    const { t } = useLanguage();
    return (
        <AuthLayout
            title={t("auth.joinUs")}
            subtitle={t("auth.joinUsSubtitle")}
            illustration={
                <div className="relative h-64 w-full mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]" />
                    <GraduationCap className="w-24 h-24 text-purple-400/50 group-hover:scale-110 transition-transform duration-500" />
                </div>
            }
        >
            <RegisterForm />
        </AuthLayout>
    );
}
