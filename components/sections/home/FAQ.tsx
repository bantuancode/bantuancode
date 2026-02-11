"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: "Ini jasa mengerjakan atau konsultasi?",
      answer:
        "Kami menyediakan layanan pengerjaan penuh untuk tugas coding Anda. Dari analisis requirement, development, hingga testing dan dokumentasi. Anda akan mendapatkan source code lengkap dan siap submit.",
    },
    {
      question: "Apakah data dan project saya aman?",
      answer:
        "100% aman dan confidential. Kami tidak menyimpan, membagikan, atau menggunakan kembali project Anda untuk keperluan lain. Setelah serah terima, semua file menjadi milik Anda sepenuhnya. Privasi Anda adalah prioritas kami.",
    },
    {
      question: "Berapa kali bisa revisi?",
      answer:
        "Tergantung paket yang dipilih. Basic: 1x revisi minor, Standard: 2x revisi, Premium: unlimited revisi dalam 1 minggu. Revisi berlaku untuk perbaikan bug atau penyesuaian requirement awal, bukan penambahan fitur baru.",
    },
    {
      question: "Bagaimana kalau deadline mepet?",
      answer:
        "Kami menyediakan layanan express dengan timeline lebih cepat. Untuk deadline 1-2 hari, ada biaya tambahan prioritas. Hubungi kami untuk diskusi kelayakan dan estimasi biaya rush delivery.",
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer:
        "Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, DANA), dan QRIS. Pembayaran dilakukan 50% di awal (down payment) dan 50% setelah project selesai sebelum serah terima source code.",
    },
    {
      question: "Apakah bisa konsultasi dulu sebelum order?",
      answer:
        "Tentu! Konsultasi gratis dan tanpa komitmen. Anda bisa jelaskan kebutuhan project, tanya estimasi harga dan waktu, atau diskusi solusi teknis. Hubungi kami via WhatsApp kapan saja.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-900 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
            <FaQuestionCircle className="w-8 h-8 text-blue-400" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pertanyaan yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Sering Ditanya
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Jawaban untuk pertanyaan umum seputar layanan kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-600"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
              >
                <span className="text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-8">
                  {faq.question}
                </span>

                <div className="flex-shrink-0">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 group-hover:bg-blue-500/20 transition-all duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <FaChevronDown
                      className={`w-4 h-4 transition-colors ${
                        openIndex === index
                          ? "text-blue-400"
                          : "text-slate-400 group-hover:text-blue-400"
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                  <div className="pl-0 md:pl-2 border-l-2 border-blue-500/30 pl-4">
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Masih Ada Pertanyaan?
          </h3>
          <p className="text-slate-400 mb-6">
            Kami siap membantu menjawab pertanyaan spesifik Anda
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition-all duration-200"
            >
              <span>Lihat Semua FAQ</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              href="https://wa.me/6285182380899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Chat via WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
