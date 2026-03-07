import React from "react";
import { SoftwareDevelopmentPage } from "@/components/pages/layanan/SoftwareDevelopmentPage";
import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Web & Mobile untuk Mahasiswa",
  description:
    "Jasa pembuatan aplikasi web (Laravel, React, Next.js), mobile (Flutter, React Native), dan desktop untuk mahasiswa. Mulai Rp 200.000, delivery 3-4 hari, kode bersih & terdokumentasi.",
  keywords: [
    "jasa pembuatan aplikasi web mahasiswa",
    "jasa web programming",
    "jasa mobile app mahasiswa",
    "jasa laravel mahasiswa",
    "jasa react mahasiswa",
    "jasa flutter mahasiswa",
    "jasa react native",
    "jasa bantuan tugas web",
  ],
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Web & Mobile - Bantuancode",
    description:
      "Jasa pembuatan web, mobile, dan desktop apps untuk mahasiswa. Mulai Rp 200.000.",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/software-development",
  },
};

export default function SoftwareDevelopment() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Beranda", url: "https://bantuancode.com" },
          { name: "Layanan", url: "https://bantuancode.com/layanan" },
          { name: "Software Development", url: "https://bantuancode.com/layanan/software-development" },
        ]}
      />
      <ServiceJsonLd
        name="Jasa Pembuatan Aplikasi Web & Mobile untuk Mahasiswa"
        description="Jasa pembuatan aplikasi web (Laravel, React, Next.js), mobile (Flutter, React Native), dan desktop untuk mahasiswa IT Indonesia. Delivery 3-4 hari."
        url="https://bantuancode.com/layanan/software-development"
        price="200000"
      />
      <SoftwareDevelopmentPage />
    </>
  );
}
