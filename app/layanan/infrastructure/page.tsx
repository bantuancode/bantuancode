import React from "react";
import type { Metadata } from "next";
import { InfrastructurePage } from "@/components/pages/layanan/InfrastructurePage";
import { ServiceJsonLd, BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Jasa Networking, IoT & Cloud Computing untuk Mahasiswa",
  description:
    "Jasa bantuan tugas networking (Cisco, MikroTik), IoT (Arduino, Raspberry Pi, ESP32), dan cloud computing (AWS, Docker, Kubernetes) untuk mahasiswa. Mulai Rp 200.000.",
  keywords: [
    "jasa networking mahasiswa",
    "jasa IoT mahasiswa",
    "jasa cloud computing mahasiswa",
    "jasa bantuan tugas jaringan",
    "jasa cisco mahasiswa",
    "jasa arduino mahasiswa",
    "jasa docker kubernetes",
    "jasa bantuan tugas infrastruktur",
  ],
  openGraph: {
    title: "Jasa Networking, IoT & Cloud Computing - Bantuancode",
    description:
      "Jasa bantuan tugas networking, IoT, dan cloud computing untuk mahasiswa. Mulai Rp 200.000.",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/infrastructure",
  },
};

export default function Infrastructure() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Beranda", url: "https://bantuancode.com" },
          { name: "Layanan", url: "https://bantuancode.com/layanan" },
          { name: "Infrastructure", url: "https://bantuancode.com/layanan/infrastructure" },
        ]}
      />
      <ServiceJsonLd
        name="Jasa Networking, IoT & Cloud Computing untuk Mahasiswa"
        description="Jasa bantuan tugas networking (Cisco, MikroTik), IoT (Arduino, Raspberry Pi), dan cloud computing (AWS, Docker, Kubernetes) untuk mahasiswa IT Indonesia."
        url="https://bantuancode.com/layanan/infrastructure"
        price="200000"
      />
      <InfrastructurePage />
    </>
  );
}
