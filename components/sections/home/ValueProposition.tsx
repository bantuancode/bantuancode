import React from "react";
import Link from "next/link";
import {
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaHeadset,
  FaFileAlt,
  FaClock,
  FaSyncAlt,
} from "react-icons/fa";

export const ValueProposition = () => {
  const benefits = [
    {
      icon: FaCode,
      title: "Kode Bersih & Terstruktur",
      description:
        "Mengikuti best practices dan coding standards untuk kemudahan maintenance.",
    },
    {
      icon: FaFileAlt,
      title: "Dokumentasi Lengkap",
      description:
        "Setiap project dilengkapi dokumentasi dan komentar yang jelas.",
    },
    {
      icon: FaRocket,
      title: "Delivery Cepat",
      description:
        "Rata-rata pengerjaan 3-4 hari, dengan opsi express untuk deadline mepet.",
    },
    {
      icon: FaSyncAlt,
      title: "Free Revisi",
      description:
        "Garansi revisi gratis selama 1 minggu setelah serah terima.",
    },
    {
      icon: FaHeadset,
      title: "Support Aktif",
      description:
        "Konsultasi dan bantuan teknis hingga 1 bulan setelah project selesai.",
    },
    {
      icon: FaShieldAlt,
      title: "100% Confidential",
      description:
        "Privasi terjaga, tidak ada penyalahgunaan source code atau data Anda.",
    },
  ];

  const pricingTiers = [
    {
      name: "Basic",
      description: "Untuk tugas sederhana dan project kecil",
      price: "150rb",
      priceDetail: "Mulai dari",
      features: [
        "CRUD sederhana (±3-5 fitur utama)",
        "1x revisi minor (bug & penyesuaian kecil)",
        "Delivery estimasi 4-5 hari",
        "Source code + dokumentasi dasar",
        "Support bug fix hingga 2 minggu",
      ],
      cta: "Pilih Basic",
      popular: false,
    },
    {
      name: "Standard",
      description: "Paling populer untuk tugas kuliah",
      price: "200rb",
      priceDetail: "Mulai dari",
      features: [
        "CRUD menengah (±6-10 fitur utama)",
        "2x revisi (minor & penyesuaian fitur)",
        "Delivery estimasi 3-4 hari",
        "Source code + dokumentasi lengkap",
        "Support bug fix hingga 3 minggu",
        "Responsive design",
      ],
      cta: "Pilih Standard",
      popular: true,
    },
    {
      name: "Premium",
      description: "Untuk project kompleks dan tugas akhir",
      price: "Custom",
      priceDetail: "Diskusi dulu",
      features: [
        "Fitur kompleks & custom scope",
        "Revisi fleksibel selama 1 minggu",
        "Delivery estimasi disesuaikan (prioritas)",
        "Dokumentasi lengkap + video penjelasan",
        "Support bug fix hingga 1 bulan",
        "Deployment assistance",
        "Code review & walkthrough session",
      ],
      cta: "Konsultasi Premium",
      popular: false,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kenapa Pilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Kami?
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Lebih dari sekadar mengerjakan tugas, kami memberikan value dan
            kualitas terbaik
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Paket Harga
            </h3>
            <p className="text-slate-400">
              Pilih paket sesuai kebutuhan project Anda
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-slate-800 border-2 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? "border-blue-500 shadow-xl shadow-blue-500/20"
                    : "border-slate-700 hover:border-slate-600"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      PALING POPULER
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {tier.name}
                  </h4>
                  <p className="text-slate-400 text-sm mb-4">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-slate-500 text-sm">
                      {tier.priceDetail}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    {tier.price !== "Custom" && (
                      <span className="text-slate-400 text-lg">Rp</span>
                    )}
                    <span
                      className={`font-bold ${tier.price === "Custom" ? "text-3xl" : "text-4xl"} text-white font-mono`}
                    >
                      {tier.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="https://wa.me/6285182380899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
              <FaShieldAlt className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Garansi Kepuasan 100%
            </h3>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Jika hasil tidak sesuai requirement atau ada bug dalam 1 minggu
              setelah serah terima, kami akan perbaiki{" "}
              <span className="text-blue-400 font-semibold">
                gratis tanpa biaya tambahan
              </span>
              . Kepuasan Anda adalah prioritas kami.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-cyan-400" />
                <span>Response &lt; 1 jam</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-cyan-400" />
                <span>Data dijamin aman</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Quality assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            *Harga dapat berubah tergantung kompleksitas project. Konsultasi
            untuk estimasi akurat.
          </p>
        </div>
      </div>
    </section>
  );
};
