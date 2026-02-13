import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import type { Viewport } from "next";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  preload: true,
});

export const metadata: Metadata = {
  // Basic
  metadataBase: new URL("https://bantuancode.my.id"),
  title: {
    default: "Bantuancode - Jasa Coding untuk Mahasiswa IT",
    template: "%s | Bantuancode",
  },
  description:
    "Jasa pembuatan tugas coding mahasiswa: web, mobile, machine learning, cybersecurity, IoT. Mulai Rp 200.000. Cepat, berkualitas, terpercaya.",
  keywords: [
    "jasa coding mahasiswa",
    "jasa pembuatan tugas",
    "jasa programming",
    "jasa web development",
    "jasa machine learning",
    "jasa skripsi coding",
    "bantuancode",
    "tugas coding",
    "jasa laravel",
    "jasa react",
    "jasa flutter",
    "jasa python",
  ],
  authors: [{ name: "Bantuancode", url: "https://bantuancode.my.id" }],
  creator: "Bantuancode",
  publisher: "Bantuancode",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bantuancode.my.id",
    siteName: "Bantuancode",
    title: "Bantuancode - Jasa Coding untuk Mahasiswa IT",
    description:
      "Jasa pembuatan tugas coding mahasiswa: web, mobile, machine learning, cybersecurity, IoT. Mulai Rp 200.000.",
    images: [
      {
        url: "/og-image.png", // 1200x630px
        width: 1200,
        height: 630,
        alt: "Bantuancode - Jasa Coding untuk Mahasiswa IT",
      },
    ],
  },

  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Bantuancode - Jasa Coding untuk Mahasiswa IT",
    description:
      "Jasa pembuatan tugas coding mahasiswa: web, mobile, machine learning, cybersecurity, IoT. Mulai Rp 200.000.",
    images: ["/og-image.png"],
  },

  // // Icons
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },

  // Verification (isi nanti setelah daftar Google Search Console)
  verification: {
    google: "IkipW660ZaA7zQRfWGUkrcTTCZued9WCdsFJaANs96k",
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical
  alternates: {
    canonical: "https://bantuancode.my.id",
    languages: {
      "id-ID": "https://bantuancode.my.id",
    },
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <LocalBusinessJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

        {/* <Navbar /> */}

        <main id="main-content" className="flex-1">
          {children}
          <GoogleAnalytics gaId="G-EJMSB3X1BB" />
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
