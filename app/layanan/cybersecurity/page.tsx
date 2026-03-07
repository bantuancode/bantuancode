import React from "react";
import { CybersecurityPage } from "@/components/pages/layanan/CybersecurityPage";
import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Jasa Cybersecurity & Ethical Hacking untuk Mahasiswa",
  description:
    "Jasa bantuan tugas cybersecurity: ethical hacking, penetration testing, digital forensics, dan security audit untuk mahasiswa. Untuk keperluan akademis dan riset. Mulai Rp 200.000.",
  keywords: [
    "jasa cybersecurity mahasiswa",
    "jasa ethical hacking mahasiswa",
    "jasa penetration testing",
    "jasa digital forensics",
    "jasa security audit",
    "jasa bantuan tugas keamanan siber",
    "web security mahasiswa",
    "network security mahasiswa",
  ],
  openGraph: {
    title: "Jasa Cybersecurity & Ethical Hacking - Bantuancode",
    description:
      "Jasa bantuan tugas cybersecurity untuk mahasiswa. Ethical hacking, forensics, security audit. Mulai Rp 200.000.",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/cybersecurity",
  },
};

export default function Cybersecurity() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Beranda", url: "https://bantuancode.com" },
          { name: "Layanan", url: "https://bantuancode.com/layanan" },
          { name: "Cybersecurity", url: "https://bantuancode.com/layanan/cybersecurity" },
        ]}
      />
      <ServiceJsonLd
        name="Jasa Cybersecurity & Ethical Hacking untuk Mahasiswa"
        description="Jasa bantuan tugas cybersecurity: ethical hacking, penetration testing, digital forensics, dan security audit untuk mahasiswa IT Indonesia."
        url="https://bantuancode.com/layanan/cybersecurity"
        price="200000"
      />
      <CybersecurityPage />
    </>
  );
}
