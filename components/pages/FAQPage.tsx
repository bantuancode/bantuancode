"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaQuestionCircle,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Umum",
      icon: "💬",
      faqs: [
        {
          question: "Ini jasa mengerjakan atau konsultasi?",
          answer:
            "Kami menyediakan layanan pengerjaan penuh untuk tugas coding Anda. Dari analisis requirement, development, hingga testing dan dokumentasi. Anda akan mendapatkan source code lengkap dan siap submit. Kami juga menyediakan konsultasi gratis sebelum Anda memutuskan untuk order.",
        },
        {
          question: "Apakah data dan project saya aman?",
          answer:
            "100% aman dan confidential. Kami tidak menyimpan, membagikan, atau menggunakan kembali project Anda untuk keperluan lain. Setelah serah terima, semua file menjadi milik Anda sepenuhnya. Kami juga tidak meminta akses ke akun kampus atau data pribadi sensitif Anda. Privasi Anda adalah prioritas utama kami.",
        },
        {
          question: "Berapa lama waktu pengerjaan?",
          answer:
            "Rata-rata waktu pengerjaan adalah 3-4 hari kerja untuk project CRUD medium complexity. Untuk project sederhana bisa lebih cepat (1-2 hari), sedangkan project kompleks seperti tugas akhir bisa memakan waktu 5-7 hari. Kami juga menyediakan layanan express dengan biaya tambahan untuk deadline yang sangat mepet.",
        },
        {
          question: "Apa saja yang akan saya terima?",
          answer:
            "Anda akan menerima: (1) Source code lengkap dan terorganisir, (2) Dokumentasi kode dan cara instalasi, (3) Database schema/dump (jika ada), (4) Video tutorial cara menjalankan project (opsional), (5) File pendukung seperti mockup atau wireframe (jika diperlukan). Semua file dikirim via Google Drive atau GitHub repository.",
        },
      ],
    },
    {
      category: "Harga & Pembayaran",
      icon: "💰",
      faqs: [
        {
          question: "Berapa harga layanan ini?",
          answer:
            "Harga dimulai dari Rp 150.000 untuk project CRUD sederhana (3-5 fitur). Project medium complexity (6-10 fitur) mulai dari Rp 200.000. Untuk project kompleks atau tugas akhir, harga ditentukan setelah diskusi requirement secara detail. Kami memberikan estimasi harga yang transparan sebelum Anda memutuskan untuk order.",
        },
        {
          question: "Bagaimana sistem pembayaran?",
          answer:
            "Kami menggunakan sistem pembayaran bertahap: 50% down payment (DP) di awal sebelum pengerjaan dimulai, dan 50% pelunasan setelah project selesai sebelum serah terima source code. Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, DANA), dan QRIS. Invoice akan diberikan untuk setiap transaksi.",
        },
        {
          question: "Apakah ada biaya tersembunyi?",
          answer:
            "Tidak ada biaya tersembunyi. Harga yang kami berikan di awal sudah final dan mencakup semua yang Anda butuhkan: source code, dokumentasi, dan support selama periode garansi. Biaya tambahan hanya berlaku jika Anda meminta penambahan fitur baru yang tidak ada di requirement awal, atau jika membutuhkan layanan express untuk deadline sangat mepet.",
        },
        {
          question: "Apakah bisa nego harga?",
          answer:
            "Harga kami sudah sangat kompetitif dan sesuai dengan kualitas yang diberikan. Namun untuk project dengan scope besar atau order berulang, kami bisa memberikan harga spesial. Silakan diskusikan dengan kami untuk mendapatkan penawaran terbaik. Kami juga menyediakan paket bundling untuk mahasiswa yang memiliki beberapa tugas sekaligus.",
        },
      ],
    },
    {
      category: "Proses & Pengerjaan",
      icon: "⚙️",
      faqs: [
        {
          question: "Bagaimana cara order?",
          answer:
            "Caranya sangat mudah: (1) Hubungi kami via WhatsApp, (2) Jelaskan detail tugas/project Anda dan kirim requirement atau soal, (3) Kami akan memberikan estimasi harga dan timeline, (4) Jika deal, lakukan pembayaran DP 50%, (5) Kami mulai mengerjakan dan memberikan update progress, (6) Setelah selesai dan Anda approve, lakukan pelunasan, (7) Source code dan dokumentasi dikirim lengkap.",
        },
        {
          question: "Apakah saya bisa request teknologi tertentu?",
          answer:
            "Tentu! Kami bisa mengerjakan dengan berbagai tech stack yang Anda inginkan. Backend: Laravel, Node.js, Express, Python/Django/Flask, PHP native. Frontend: React, Vue, Next.js, vanilla JavaScript, Tailwind, Bootstrap. Database: MySQL, PostgreSQL, MongoDB. Jika ada teknologi spesifik yang tidak kami list, silakan tanyakan terlebih dahulu untuk memastikan ketersediaan.",
        },
        {
          question: "Bagaimana jika deadline sangat mepet?",
          answer:
            "Kami menyediakan layanan express untuk deadline urgent (1-2 hari). Namun, ada biaya prioritas tambahan sekitar 30-50% dari harga normal, tergantung kompleksitas dan waktu yang tersedia. Penting untuk diingat bahwa kami tetap menjaga kualitas kode meskipun deadline mepet. Hubungi kami sesegera mungkin untuk diskusi kelayakan dan estimasi biaya rush delivery.",
        },
        {
          question: "Apakah saya bisa melihat progress pengerjaan?",
          answer:
            "Ya, kami akan memberikan update progress secara berkala via WhatsApp. Untuk project yang memakan waktu lebih dari 3 hari, kami akan mengirimkan screenshot atau demo singkat di pertengahan pengerjaan untuk memastikan arah project sudah sesuai dengan yang Anda inginkan. Komunikasi terbuka adalah kunci kesuksesan project.",
        },
      ],
    },
    {
      category: "Revisi & Support",
      icon: "🔄",
      faqs: [
        {
          question: "Berapa kali bisa revisi?",
          answer:
            "Tergantung paket yang Anda pilih. Paket Basic: 1x revisi minor, Paket Standard: 2x revisi, Paket Premium: unlimited revisi dalam 1 minggu. Revisi berlaku untuk perbaikan bug atau penyesuaian dengan requirement awal yang sudah disepakati. Penambahan fitur baru di luar scope awal akan dikenakan biaya tambahan sesuai kompleksitas.",
        },
        {
          question: "Apa yang dimaksud dengan revisi minor vs major?",
          answer:
            "Revisi minor: perbaikan bug, error, typo, styling kecil, atau penyesuaian warna/layout yang tidak mengubah struktur. Revisi major: penambahan fitur baru, perubahan alur/logic aplikasi, atau perubahan database schema. Revisi minor masuk dalam quota gratis, sedangkan revisi major akan dikenakan biaya tambahan karena memerlukan development ulang.",
        },
        {
          question: "Berapa lama periode support setelah serah terima?",
          answer:
            "Support gratis tersedia selama: Paket Basic: 2 minggu, Paket Standard: 3 minggu, Paket Premium: 1 bulan. Selama periode ini, Anda bisa konsultasi via WhatsApp jika ada kendala dalam instalasi, bug yang muncul, atau pertanyaan teknis seputar cara pakai aplikasi. Setelah periode support berakhir, kami masih bisa membantu dengan biaya konsultasi per jam.",
        },
        {
          question: "Bagaimana jika ada bug setelah serah terima?",
          answer:
            "Jika bug muncul selama periode garansi (1 minggu setelah serah terima), kami akan perbaiki secara gratis tanpa biaya tambahan. Jika bug disebabkan oleh perubahan requirement yang tidak ada di scope awal atau modifikasi yang Anda lakukan sendiri, maka akan dikenakan biaya perbaikan. Kami selalu test secara menyeluruh sebelum serah terima untuk meminimalkan kemungkinan bug.",
        },
      ],
    },
    {
      category: "Teknis",
      icon: "💻",
      faqs: [
        {
          question: "Apakah kode yang dibuat sudah teroptimasi?",
          answer:
            "Ya, kami mengikuti best practices dan coding standards untuk setiap tech stack yang kami gunakan. Kode dibuat bersih, terstruktur, dan mudah dibaca dengan komentar yang jelas di bagian-bagian penting. Untuk framework modern seperti Laravel atau React, kami mengikuti structure resmi dan menggunakan design patterns yang tepat. Database juga didesain dengan normalisasi yang baik untuk performa optimal.",
        },
        {
          question: "Apakah aplikasi sudah responsive?",
          answer:
            "Ya, semua aplikasi web yang kami buat sudah responsive dan mobile-friendly by default. Kami menggunakan framework CSS modern seperti Tailwind atau Bootstrap yang memudahkan pembuatan layout responsive. Aplikasi akan terlihat baik di desktop, tablet, dan mobile phone. Jika ada requirement khusus untuk tampilan mobile, silakan sampaikan di awal agar bisa kami sesuaikan.",
        },
        {
          question: "Apakah ada dokumentasi kode?",
          answer:
            "Ya, setiap project dilengkapi dengan: (1) README.md berisi cara instalasi, konfigurasi, dan menjalankan aplikasi, (2) Komentar di kode untuk logic yang kompleks, (3) Database schema documentation, (4) API documentation (untuk project yang ada REST API), (5) User guide singkat cara menggunakan fitur-fitur aplikasi (opsional). Dokumentasi dibuat dalam Bahasa Indonesia agar mudah dipahami.",
        },
        {
          question: "Apakah bisa deploy/hosting aplikasi?",
          answer:
            "Ya, kami bisa membantu deployment aplikasi Anda. Untuk deployment gratis, kami bisa bantu setup di platform seperti Vercel, Netlify (untuk frontend), atau Railway, Render (untuk fullstack). Untuk hosting berbayar seperti VPS atau shared hosting, kami bisa assist dalam proses deployment dengan biaya setup tambahan. Tutorial deployment juga akan kami berikan jika Anda ingin deploy sendiri.",
        },
      ],
    },
    {
      category: "Akademik & Etika",
      icon: "🎓",
      faqs: [
        {
          question: "Apakah ini tidak melanggar aturan kampus?",
          answer:
            "Layanan kami adalah bantuan akademik untuk memahami konsep dan implementasi coding. Kami menyarankan Anda untuk tetap mempelajari source code yang kami berikan, memahami logic-nya, dan bisa menjelaskan cara kerjanya saat presentasi atau ujian. Tanggung jawab penggunaan layanan ini sepenuhnya ada pada Anda. Kami menyediakan tools untuk belajar, bukan untuk plagiarisme.",
        },
        {
          question: "Apakah saya akan diajarkan cara kerja kode?",
          answer:
            "Ya, kami menyediakan dokumentasi lengkap dan komentar di setiap kode penting. Jika Anda memilih paket Premium, kami juga bisa menyediakan video tutorial yang menjelaskan cara kerja aplikasi dan logic di baliknya. Selama periode support, Anda juga bisa bertanya tentang bagian kode yang belum Anda pahami. Goal kami adalah membantu Anda belajar sambil menyelesaikan tugas.",
        },
        {
          question: "Apakah kode dijamin original dan tidak plagiat?",
          answer:
            "Ya, semua kode ditulis dari scratch sesuai requirement Anda. Kami tidak copy-paste dari project lain atau dari internet. Untuk library atau package open source yang umum digunakan (seperti authentication package, UI components), kami menggunakannya dengan proper attribution. Anda bisa yakin bahwa kode yang kami deliver adalah original dan tidak akan bentrok dengan project mahasiswa lain.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Flatten all FAQs for search
  const allFAQs = faqCategories.flatMap((category, catIndex) =>
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      category: category.category,
      icon: category.icon,
      globalIndex: `${catIndex}-${faqIndex}`,
    })),
  );

  // Filter FAQs based on search
  const filteredFAQs = searchQuery
    ? allFAQs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : null;

  return (
    <div className="min-h-screen bg-slate-900 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
            <FaQuestionCircle className="w-8 h-8 text-blue-400" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar layanan coding
            profesional kami
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Cari pertanyaan... (contoh: harga, revisi, pembayaran)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          {searchQuery && (
            <p className="mt-3 text-sm text-slate-400">
              Ditemukan {filteredFAQs?.length || 0} pertanyaan yang relevan
            </p>
          )}
        </div>

        {/* Search Results */}
        {searchQuery && filteredFAQs && (
          <div className="space-y-4 mb-8">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{faq.icon}</span>
                        <span className="text-xs font-medium text-cyan-400">
                          {faq.category}
                        </span>
                      </div>
                      <span className="text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </span>
                    </div>

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
              ))
            ) : (
              <div className="text-center py-12 bg-slate-800/50 border border-slate-700 rounded-xl">
                <p className="text-slate-400 mb-4">
                  Tidak menemukan pertanyaan yang Anda cari?
                </p>
                <Link
                  href="https://wa.me/6285182380899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Tanya Langsung via WhatsApp</span>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* FAQ Categories (shown when no search) */}
        {!searchQuery && (
          <div className="space-y-10">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-white">
                    {category.category}
                  </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = catIndex * 100 + faqIndex;
                    return (
                      <div
                        key={faqIndex}
                        className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-600"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
                        >
                          <span className="text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-8">
                            {faq.question}
                          </span>

                          <div className="flex-shrink-0">
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 group-hover:bg-blue-500/20 transition-all duration-300 ${
                                openIndex === globalIndex
                                  ? "rotate-180"
                                  : "rotate-0"
                              }`}
                            >
                              <FaChevronDown
                                className={`w-4 h-4 transition-colors ${
                                  openIndex === globalIndex
                                    ? "text-blue-400"
                                    : "text-slate-400 group-hover:text-blue-400"
                                }`}
                              />
                            </div>
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === globalIndex
                              ? "max-h-[600px] opacity-100"
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
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Masih Ada Pertanyaan Lain?
          </h3>
          <p className="text-slate-400 mb-6">
            Tim kami siap membantu menjawab pertanyaan spesifik Anda kapan saja
          </p>

          <Link
            href="https://wa.me/6285182380899"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-base font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Chat via WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
