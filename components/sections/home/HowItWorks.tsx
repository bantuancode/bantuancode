import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaFileAlt, FaCode, FaCheckCircle } from "react-icons/fa";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FaWhatsapp,
      title: "Konsultasi",
      description:
        "Jelaskan detail tugas Anda via WhatsApp. Kami siap membantu kapan saja.",
      details: [
        "Ceritakan kebutuhan project",
        "Kirim requirements/soal tugas",
        "Diskusi teknologi yang digunakan",
      ],
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      number: "02",
      icon: FaFileAlt,
      title: "Estimasi & Deal",
      description:
        "Dapatkan estimasi harga transparan dan timeline pengerjaan yang jelas.",
      details: [
        "Harga berdasarkan kompleksitas",
        "Timeline delivery 3-4 hari",
        "Agreement sebelum mulai",
      ],
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "03",
      icon: FaCode,
      title: "Pengerjaan",
      description:
        "Tim profesional mengerjakan project dengan kode bersih dan terstruktur.",
      details: [
        "Development dengan best practices",
        "Update progress berkala",
        "Testing & quality assurance",
      ],
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      icon: FaCheckCircle,
      title: "Serah Terima",
      description:
        "Terima project lengkap dengan dokumentasi dan garansi revisi.",
      details: [
        "Source code + dokumentasi",
        "Video tutorial (opsional)",
        "Free revisi 1 minggu",
      ],
      color: "orange",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bagaimana{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Cara Kerjanya?
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Proses sederhana dan transparan dari konsultasi hingga serah terima
          </p>
        </div>

        {/* Steps - Desktop View */}
        <div className="hidden lg:block">
          {/* Flow Line */}
          <div className="relative mb-20">
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 to-orange-500 opacity-30" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Number Badge */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shadow-${step.color}-500/50`}
                      >
                        <span className="text-white text-2xl font-bold">
                          {step.number}
                        </span>
                        {/* Connecting dot */}
                        {index < steps.length - 1 && (
                          <div className="absolute -right-12 top-1/2 w-8 h-1 bg-slate-600" />
                        )}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 min-h-[320px]">
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${step.gradient} bg-opacity-10`}
                        >
                          <Icon className={`w-8 h-8 text-${step.color}-400`} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white text-center mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm text-center mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className={`w-4 h-4 text-${step.color}-400 shrink-0 mt-0.5`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-slate-300 text-xs">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Steps - Mobile/Tablet View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-slate-700 -mb-6" />
                )}

                <div className="flex gap-4">
                  {/* Left: Number + Icon */}
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    {/* Number Badge */}
                    <div
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg z-10`}
                    >
                      <span className="text-white text-lg font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-colors">
                    {/* Icon */}
                    <div
                      className={`p-2.5 rounded-lg bg-slate-800 border border-slate-700 w-fit mb-4`}
                    >
                      <Icon className={`w-6 h-6 text-${step.color}-400`} />
                    </div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className={`w-4 h-4 text-${step.color}-400 shrink-0 mt-0.5`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-slate-300 text-xs">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Siap Memulai Project Anda?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Konsultasi gratis untuk diskusi kebutuhan project. Kami siap
            membantu mewujudkan tugas coding Anda.
          </p>
          <Link
            href="https://wa.me/6285182380899"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-base font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Mulai Konsultasi Sekarang</span>
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
        </div>
      </div>
    </section>
  );
};
