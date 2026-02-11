import React from "react";
import type { Metadata } from "next";
import { InfrastructurePage } from "@/components/pages/layanan/InfrastructurePage";

export const metadata: Metadata = {
  title: "Infrastructure - Networking, IoT, Cloud Computing",
  description:
    "Layanan Infrastructure profesional: Networking (Cisco, MikroTik, Network Design), Internet of Things (Arduino, Raspberry Pi, ESP32), Cloud Computing (AWS, Azure, Docker, Kubernetes). Untuk tugas kuliah dan project.",
  keywords: [
    "jasa networking",
    "jasa iot",
    "jasa cloud computing",
    "cisco",
    "mikrotik",
    "arduino",
    "raspberry pi",
    "docker",
    "kubernetes",
    "aws",
  ],
  openGraph: {
    title: "Infrastructure Services - Bantuancode",
    description: "Layanan Networking, IoT, dan Cloud Computing untuk mahasiswa",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/infrastructure",
  },
};

export default function Infrastructure() {
  return <InfrastructurePage />;
}
