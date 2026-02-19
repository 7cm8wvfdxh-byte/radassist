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
  description: "Yapay Zeka Destekli Radyoloji Tanı Rehberi",
  metadataBase: new URL("https://www.radasist.com"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RadAsist",
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png", // Using 192px icon as apple-touch-icon
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
import { LanguageProvider } from "@/context/language-context";
import { ForumProvider } from "@/context/forum-context";

import { PwaInstallPrompt } from "@/components/pwa-install-prompt";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <LanguageProvider>
            <ForumProvider>
              {children}
              <PwaInstallPrompt />
            </ForumProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
