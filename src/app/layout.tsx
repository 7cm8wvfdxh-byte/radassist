import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
  description: "Yapay Zeka Destekli Radyoloji Tanı Rehberi - Radyoloji eğitimi, patoloji veritabanı, tanı sihirbazı ve AI asistan ile radyoloji asistanları için kapsamlı öğrenme platformu.",
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
    title: "RadAsist: Yapay Zeka Destekli Radyoloji Asistanı",
    description: "Radyoloji eğitimi, patoloji veritabanı, tanı sihirbazı ve AI asistan ile radyoloji asistanları için kapsamlı öğrenme platformu.",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "RadAsist - Radyoloji Asistanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RadAsist: Yapay Zeka Destekli Radyoloji Asistanı",
    description: "Radyoloji eğitimi, patoloji veritabanı, tanı sihirbazı ve AI asistan.",
    images: ["/icons/og-image.png"],
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
  maximumScale: 1,
  userScalable: false,
};

import { AuthProvider } from "@/context/auth-context";
import { ForumProvider } from "@/context/forum-context";

import { PwaInstallPrompt } from "@/components/pwa-install-prompt";

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
        <AuthProvider>
          <ForumProvider>
            {children}
            <PwaInstallPrompt />
          </ForumProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
