"use client";

import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";
import { useLanguage } from "@/context/language-context";

export default function LoginPage() {
    const { t } = useLanguage();
    return (
        <AuthLayout
            title={t("auth.welcomeBack")}
            subtitle={t("auth.welcomeBackSubtitle")}
        >
            <LoginForm />
        </AuthLayout>
    );
}
