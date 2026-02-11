import React from "react";
import { CybersecurityPage } from "@/components/pages/layanan/CybersecurityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity - Ethical Hacking, Digital Forensics",
  description:
    "Layanan Cybersecurity profesional: Ethical Hacking & Penetration Testing, Digital Forensics, Security Audit. Vulnerability Assessment, Web Security, Network Security untuk tugas kuliah dan research.",
  keywords: [
    "jasa ethical hacking",
    "jasa penetration testing",
    "jasa digital forensics",
    "jasa security audit",
    "web security",
    "network security",
    "vulnerability assessment",
    "cyber security",
  ],
  openGraph: {
    title: "Cybersecurity Services - Bantuancode",
    description:
      "Layanan Ethical Hacking, Digital Forensics, dan Security Audit untuk mahasiswa",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/cybersecurity",
  },
};

export default function Cybersecurity() {
  return <CybersecurityPage />;
}
