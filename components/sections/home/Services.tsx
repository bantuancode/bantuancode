import React from "react";
import Link from "next/link";
import { FaCode, FaDatabase, FaArrowRight, FaShieldAlt } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Software Development",
      description:
        "Layanan pengembangan aplikasi web, mobile, dan desktop dengan teknologi modern.",
      features: [
        "Web Development (React, Next.js)",
        "Cross-Platform Mobile Apps (Flutter, React Native)",
        "Desktop Applications (Electron)",
        "Custom Software Solutions",
      ],
      href: "/layanan/software-development",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaDatabase,
      title: "Data Science & Python",
      description:
        "Layanan Machine Learning, Data Analysis, dan Artificial Intelligence untuk tugas kuliah, skripsi, atau research project.",
      features: [
        "Data Analysis & Visualization",
        "Machine Learning Models",
        "Natural Language Processing",
        "Data Cleaning & Preprocessing",
      ],
      href: "/layanan/data-science",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      description:
        "Layanan Ethical Hacking, Digital Forensics, dan Security Audit untuk tugas kuliah, research, atau learning purposes.",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Digital Forensics",
        "Security Audits & Compliance",
      ],
      href: "/layanan/cybersecurity",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Layanan yang Kami{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Tawarkan
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Solusi profesional untuk berbagai kebutuhan coding mahasiswa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.gradient}`}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:gap-3 transition-all duration-200"
                >
                  <span>Selengkapnya</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>

                {/* Decorative gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Tidak menemukan layanan yang Anda cari?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/layanan"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition-all duration-200"
            >
              <span>Lihat Semua layanan</span>
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200"
            >
              <span>Konsultasi dengan Kami</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
