import React from "react";
import type { Metadata } from "next";
import { FAQPage } from "@/components/pages/FAQPage";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan yang Sering Ditanya",
  description:
    "Temukan jawaban untuk pertanyaan umum seputar layanan coding profesional kami. Informasi lengkap tentang harga, proses, revisi, dan pembayaran.",
  openGraph: {
    title: "FAQ - Bantuancode",
    description: "Pertanyaan yang sering ditanya seputar layanan coding kami",
  },
  alternates: {
    canonical: "https://bantuancode.com/layanan/infrastructure",
  },
};

const faqsForJsonLd = [
  {
    question: "Berapa harga jasa coding di Bantuancode?",
    answer: "Harga mulai dari Rp 200.000 tergantung kompleksitas project.",
  },
  {
    question: "Berapa lama pengerjaan tugas coding?",
    answer: "Estimasi 3-7 hari kerja tergantung kompleksitas project.",
  },
  {
    question: "Apakah ada garansi revisi?",
    answer: "Ya, kami memberikan 2x revisi gratis sesuai requirements awal.",
  },
];

export default function FAQ() {
  return (
    <>
      <FAQJsonLd faqs={faqsForJsonLd} />
      <Navbar />
      <FAQPage />
      <Footer />
    </>
  );
}
