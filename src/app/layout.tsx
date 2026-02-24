import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth-context";
import { LanguageProvider } from "@/context/language-context";
import { ForumProvider } from "@/context/forum-context";
import { PwaInstallPrompt } from "@/components/pwa-install-prompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RadAsist: Radyoloji Asistanı",
  description: "Radyoloji eğitimi, patoloji veritabanı ve patoloji arama asistanı ile radyoloji asistanları için kapsamlı öğrenme platformu.",
  metadataBase: new URL("https://www.radasist.com"),
  manifest: "/manifest.json",
  keywords: ["radyoloji", "radyoloji asistanı", "tıbbi görüntüleme", "MRI", "CT", "ultrason", "tanı", "patoloji", "radyoloji eğitimi"],
  authors: [{ name: "RadAsist" }],
  creator: "RadAsist",
  publisher: "RadAsist",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://radasist.com",
    siteName: "RadAsist",
    title: "RadAsist: Radyoloji Asistanı",
    description: "Radyoloji eğitimi, patoloji veritabanı ve patoloji arama asistanı ile radyoloji asistanları için kapsamlı öğrenme platformu.",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "RadAsist - Radyoloji Asistanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RadAsist: Radyoloji Asistanı",
    description: "Radyoloji eğitimi, patoloji veritabanı ve patoloji arama asistanı.",
    images: ["/icons/icon-512x512.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RadAsist",
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <AuthProvider>
            <ForumProvider>
              {children}
              <PwaInstallPrompt />
            </ForumProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
