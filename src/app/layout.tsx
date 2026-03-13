import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth-context";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/context/theme-context";
import { ForumProvider } from "@/context/forum-context";
import { PwaInstallPrompt } from "@/components/pwa-install-prompt";
import { HtmlLangSync } from "@/components/html-lang-sync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RadAsist: Radyoloji Asistanı | Radiology Assistant",
    template: "%s | RadAsist",
  },
  description: "Radyoloji eğitimi, patoloji veritabanı ve patoloji arama asistanı. Radiology education, pathology database, and AI-powered search assistant for radiology residents.",
  metadataBase: new URL("https://www.radasist.com"),
  manifest: "/manifest.json",
  keywords: [
    "radyoloji", "radyoloji asistanı", "tıbbi görüntüleme", "MRI", "CT", "ultrason", "tanı", "patoloji", "radyoloji eğitimi",
    "radiology", "radiology assistant", "medical imaging", "ultrasound", "diagnosis", "pathology", "radiology education",
  ],
  authors: [{ name: "RadAsist" }],
  creator: "RadAsist",
  publisher: "RadAsist",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      "tr": "https://www.radasist.com",
      "en": "https://www.radasist.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://radasist.com",
    siteName: "RadAsist",
    title: "RadAsist: Radyoloji Asistanı | Radiology Assistant",
    description: "Radyoloji eğitimi, patoloji veritabanı ve patoloji arama asistanı. Radiology education, pathology database, and AI search assistant.",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "RadAsist - Radyoloji Asistanı / Radiology Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RadAsist: Radyoloji Asistanı | Radiology Assistant",
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">
          Skip to main content
        </a>
        {/* min-h-[calc(100vh+1px)] forces iOS Safari to treat page as scrollable,
            which enables touch-event routing to nested overflow-y-scroll containers
            even when content fits the viewport. Without this, iOS blocks inner scroll
            when the page itself is "static". */}
        <div id="scroll-root" className="overflow-x-hidden min-h-[calc(100vh+1px)]">
          <ThemeProvider>
            <LanguageProvider>
              <HtmlLangSync />
              <AuthProvider>
                <ForumProvider>
                  <main id="main-content">
                    {children}
                  </main>
                  <PwaInstallPrompt />
                </ForumProvider>
              </AuthProvider>
            </LanguageProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
