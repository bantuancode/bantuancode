import React from "react";
import { LayananOverview } from "@/components/pages/LayananOverview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Coding - Web, Mobile, ML, Cybersecurity, IoT",
  description:
    "Lengkap! Semua layanan coding untuk mahasiswa: Software Development, Data Science & AI, Cybersecurity, Infrastructure. Harga mulai Rp 200.000.",
  alternates: {
    canonical: "https://bantuancode.com/layanan",
  },
};

export default function Layanan() {
  return <LayananOverview />;
}
