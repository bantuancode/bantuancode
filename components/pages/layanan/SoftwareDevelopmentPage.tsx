import React from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaCode,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiLaravel,
  SiReact,
  SiNodedotjs,
  SiVuedotjs,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiElectron,
  SiTauri,
  SiDotnet,
} from "react-icons/si";

export const SoftwareDevelopmentPage = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Web Programming",
      description:
        "Pengembangan aplikasi web full stack dengan framework modern dan performa optimal.",
      features: [
        "Laravel Backend + API Development",
        "React/Next.js Frontend",
        "Vue.js & Nuxt.js",
        "Node.js & Express Backend",
        "Database Design (MySQL, PostgreSQL, MongoDB)",
        "REST API & GraphQL",
        "Authentication & Authorization",
        "Responsive Design (Tailwind, Bootstrap)",
        "Deployment & Hosting Setup",
      ],
      techStack: [
        { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
        { icon: SiReact, name: "React", color: "text-cyan-400" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
        { icon: SiVuedotjs, name: "Vue.js", color: "text-green-500" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
      ],
      examples: [
        "E-Commerce Platform (CRUD + Payment Gateway)",
        "Student Information System",
        "Inventory Management System",
        "Blog Platform with CMS",
        "REST API untuk Mobile App",
      ],
      priceStart: "200rb",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description:
        "Aplikasi mobile native dan cross-platform untuk Android dan iOS dengan UX terbaik.",
      features: [
        "React Native Cross-Platform",
        "Flutter Development",
        "Native Android (Java/Kotlin)",
        "Native iOS (Swift)",
        "API Integration",
        "Push Notifications",
        "Local Storage & SQLite",
        "Maps & Geolocation",
        "Play Store/App Store Publishing Guidance",
      ],
      techStack: [
        { icon: SiReact, name: "React Native", color: "text-cyan-400" },
        { icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
        { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
      ],
      examples: [
        "E-Learning Mobile App",
        "Food Delivery App",
        "Task Management App",
        "Social Media Clone",
        "IoT Controller App",
      ],
      priceStart: "250rb",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaDesktop,
      title: "Desktop Application",
      description:
        "Aplikasi desktop untuk Windows, macOS, dan Linux dengan interface modern.",
      features: [
        "Electron (Cross-Platform)",
        "JavaFX Desktop App",
        "C# WinForms & WPF",
        "Python Tkinter/PyQt",
        "Database Integration",
        "File Management System",
        "Local Data Storage",
        "Print & Export Features",
        "Auto-Update Mechanism",
      ],
      techStack: [
        { icon: SiElectron, name: "Electron", color: "text-cyan-400" },
        { icon: SiTauri, name: "Tauri", color: "text-yellow-400" },
        { icon: SiDotnet, name: "Dotnet", color: "text-cyan-400" },
      ],
      examples: [
        "Point of Sale (POS) System",
        "Library Management System",
        "Inventory Desktop App",
        "Data Entry Application",
        "Document Management System",
      ],
      priceStart: "250rb",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const benefits = [
    {
      icon: FaCode,
      title: "Clean & Maintainable Code",
      desc: "Mengikuti best practices dan coding standards",
    },
    {
      icon: FaRocket,
      title: "Fast Delivery",
      desc: "Rata-rata pengerjaan 3-4 hari kerja",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assured",
      desc: "Testing menyeluruh sebelum serah terima",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link
              href="/layanan"
              className="hover:text-cyan-400 transition-colors"
            >
              Layanan
            </Link>
            <span>/</span>
            <span className="text-white">Software Development</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Software Development{" "}
              <span className="text-blue-400">Profesional</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              Layanan pengembangan aplikasi web, mobile, dan desktop dengan
              teknologi modern. Dari CRUD sederhana hingga sistem kompleks, kami
              siap membantu mewujudkan project Anda.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {benefit.title}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {benefit.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                        <p className="text-white/80 text-sm">
                          Mulai dari{" "}
                          <span className="font-bold">
                            Rp {service.priceStart}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Apa yang Anda Dapatkan:
                        </h3>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Examples & Tech Stack */}
                      <div>
                        {/* Tech Stack */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Tech Stack:
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {service.techStack.map((tech, idx) => {
                            const TechIcon = tech.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-lg"
                              >
                                <TechIcon className={`w-5 h-5 ${tech.color}`} />
                                <span className="text-slate-300 text-sm">
                                  {tech.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Examples */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Contoh Project:
                        </h3>
                        <ul className="space-y-2">
                          {service.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-cyan-400 font-bold">•</span>
                              <span className="text-slate-300 text-sm">
                                {example}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="https://wa.me/6285182380899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-200`}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Konsultasi {service.title}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Pertanyaan Umum
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Berapa lama waktu pengerjaan web application?",
                a: "Rata-rata 3-4 hari untuk CRUD medium complexity. Project sederhana bisa 1-2 hari, project kompleks 5-7 hari.",
              },
              {
                q: "Apakah bisa request framework tertentu?",
                a: "Ya, kami support Laravel, Node.js, React, Vue, dan berbagai framework modern lainnya sesuai kebutuhan Anda.",
              },
              {
                q: "Apakah sudah termasuk database?",
                a: "Ya, sudah termasuk database design, migration, dan dummy data untuk testing.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 group"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <FaArrowRight className="w-4 h-4 text-cyan-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-cyan-400 hover:text-cyan-300 font-medium text-sm inline-flex items-center gap-2"
            >
              <span>Lihat Semua FAQ</span>
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siap Mulai Project Software Development Anda?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Konsultasi gratis untuk diskusi requirement dan estimasi harga.
              Tim kami siap membantu mewujudkan aplikasi impian Anda.
            </p>
            <Link
              href="https://wa.me/6285182380899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-base font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat via WhatsApp Sekarang</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
