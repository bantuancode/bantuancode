import React from "react";
import { LayananOverview } from "@/components/pages/LayananOverview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Coding Mahasiswa - Web, Mobile, ML, Cybersecurity, IoT",
  description:
    "Jasa bantuan tugas coding mahasiswa lengkap: Software Development, Data Science & AI, Cybersecurity, Infrastructure. Harga mulai Rp 200.000. Cepat dan terpercaya.",
  alternates: {
    canonical: "https://bantuancode.com/layanan",
  },
};

export default function Layanan() {
  return <LayananOverview />;
}
