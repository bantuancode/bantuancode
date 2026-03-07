import React from "react";
import { DataSciencePage } from "@/components/pages/layanan/DataSciencePage";
import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Jasa Machine Learning & Data Science untuk Mahasiswa",
  description:
    "Jasa bantuan tugas machine learning, data analysis, deep learning, computer vision, dan NLP untuk mahasiswa. Python, Pandas, TensorFlow, Scikit-learn. Mulai Rp 200.000.",
  keywords: [
    "jasa machine learning mahasiswa",
    "jasa data science mahasiswa",
    "jasa data analysis",
    "jasa AI mahasiswa",
    "jasa deep learning",
    "jasa computer vision",
    "jasa NLP mahasiswa",
    "jasa python data science",
    "jasa bantuan skripsi machine learning",
  ],
  openGraph: {
    title: "Jasa Machine Learning & Data Science - Bantuancode",
    description:
      "Jasa bantuan tugas machine learning dan data science untuk mahasiswa. Mulai Rp 200.000.",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/data-science",
  },
};

export default function DataScience() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Beranda", url: "https://bantuancode.com" },
          { name: "Layanan", url: "https://bantuancode.com/layanan" },
          { name: "Data Science & AI", url: "https://bantuancode.com/layanan/data-science" },
        ]}
      />
      <ServiceJsonLd
        name="Jasa Machine Learning & Data Science untuk Mahasiswa"
        description="Jasa bantuan tugas machine learning, data analysis, deep learning, computer vision, dan NLP untuk mahasiswa IT Indonesia."
        url="https://bantuancode.com/layanan/data-science"
        price="200000"
      />
      <DataSciencePage />
    </>
  );
}
