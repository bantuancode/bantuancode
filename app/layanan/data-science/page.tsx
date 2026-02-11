import React from "react";
import { DataSciencePage } from "@/components/pages/layanan/DataSciencePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science & AI - Machine Learning, Data Analysis",
  description:
    "Layanan Data Science dan AI profesional: Machine Learning (Classification, Regression, Clustering), Data Analysis (Python, Pandas), Deep Learning, Computer Vision, NLP. Delivery cepat dengan hasil akurat.",
  keywords: [
    "jasa machine learning",
    "jasa data analysis",
    "jasa AI",
    "python data science",
    "deep learning",
    "computer vision",
    "NLP",
    "pandas",
    "tensorflow",
  ],
  openGraph: {
    title: "Data Science & AI - Bantuancode",
    description:
      "Layanan Machine Learning, Data Analysis, dan AI Projects untuk mahasiswa",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/data-science",
  },
};

export default function DataScience() {
  return <DataSciencePage />;
}
