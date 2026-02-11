import React from "react";
import { SoftwareDevelopmentPage } from "@/components/pages/layanan/SoftwareDevelopmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development - Web, Mobile, Desktop Apps",
  description:
    "Layanan pengembangan software profesional: Web Programming (Laravel, React, Node.js), Mobile Development (React Native, Flutter), Desktop Application. Delivery cepat dengan kode berkualitas.Jasa pembuatan web app (Laravel, React, Next.js), mobile app (Flutter, React Native), desktop app. Mulai Rp 200.000 untuk mahasiswa.",
  keywords: [
    "jasa web programming",
    "jasa mobile app",
    "jasa desktop app",
    "laravel",
    "react",
    "flutter",
    "react native",
  ],
  openGraph: {
    title: "Software Development - Bantuancode",
    description:
      "Layanan pengembangan web, mobile, dan desktop apps untuk mahasiswa",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/software-development",
  },
};

export default function SoftwareDevelopment() {
  return <SoftwareDevelopmentPage />;
}
