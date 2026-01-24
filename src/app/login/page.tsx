import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <AuthLayout
            title="Tekrar Hoşgeldiniz"
            subtitle="Kişiselleştirilmiş radyoloji asistanınıza erişmek için giriş yapın."
        >
            <LoginForm />
        </AuthLayout>
    );
}
