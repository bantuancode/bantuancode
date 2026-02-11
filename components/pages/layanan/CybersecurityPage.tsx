import React from "react";
import Link from "next/link";
import {
  FaUserSecret,
  FaSearch,
  FaLock,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaShieldAlt,
  FaExclamationTriangle,
  FaBug,
} from "react-icons/fa";
import {
  SiKalilinux,
  SiMetasploit,
  SiWireshark,
  SiBurpsuite,
  SiPython,
  SiLinux,
} from "react-icons/si";

export const CybersecurityPage = () => {
  const services = [
    {
      icon: FaUserSecret,
      title: "Ethical Hacking & Penetration Testing",
      description:
        "Simulasi serangan cyber untuk menemukan celah keamanan sistem sebelum dieksploitasi oleh pihak tidak bertanggung jawab.",
      features: [
        "Web Application Penetration Testing",
        "Network Penetration Testing",
        "Vulnerability Scanning & Assessment",
        "SQL Injection Testing",
        "Cross-Site Scripting (XSS) Testing",
        "Authentication Bypass Testing",
        "Session Hijacking Analysis",
        "Security Report & Remediation",
        "OWASP Top 10 Vulnerability Check",
      ],
      techStack: [
        { icon: SiKalilinux, name: "Kali Linux", color: "text-blue-400" },
        { icon: SiMetasploit, name: "Metasploit", color: "text-red-500" },
        { icon: SiBurpsuite, name: "Burp Suite", color: "text-orange-400" },
        { icon: SiWireshark, name: "Wireshark", color: "text-cyan-400" },
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
      ],
      examples: [
        "Web Application Security Testing",
        "WordPress/CMS Vulnerability Assessment",
        "REST API Security Testing",
        "Network Infrastructure Penetration Test",
        "Mobile App Security Assessment",
      ],
      priceStart: "300rb",
      gradient: "from-red-500 to-orange-500",
      warning:
        "Hanya untuk tujuan edukasi dan ethical purposes dengan izin pemilik sistem",
    },
    {
      icon: FaSearch,
      title: "Digital Forensics",
      description:
        "Investigasi digital untuk mengumpulkan, menganalisis, dan memulihkan bukti digital dari berbagai media penyimpanan.",
      features: [
        "Data Recovery & Restoration",
        "Deleted Files Recovery",
        "Disk Image Analysis",
        "Memory Forensics (RAM Analysis)",
        "Network Traffic Analysis",
        "Log File Investigation",
        "Timeline Analysis",
        "Evidence Documentation & Chain of Custody",
        "Forensic Report Generation",
      ],
      techStack: [
        { icon: SiKalilinux, name: "Kali Linux", color: "text-blue-400" },
        { icon: SiWireshark, name: "Wireshark", color: "text-cyan-400" },
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiLinux, name: "Linux Tools", color: "text-slate-300" },
      ],
      examples: [
        "Hard Disk Forensic Analysis",
        "Email Forensics Investigation",
        "Network Packet Analysis",
        "Malware Analysis & Reverse Engineering",
        "Mobile Device Forensics",
      ],
      priceStart: "350rb",
      gradient: "from-purple-500 to-indigo-500",
      warning:
        "Data yang dianalisis harus legal dan sesuai dengan ketentuan hukum yang berlaku",
    },
    {
      icon: FaLock,
      title: "Security Audit",
      description:
        "Evaluasi menyeluruh terhadap keamanan sistem, aplikasi, dan infrastruktur untuk mengidentifikasi risiko dan memberikan rekomendasi perbaikan.",
      features: [
        "Web Application Security Audit",
        "Network Security Assessment",
        "Source Code Security Review",
        "Configuration Review",
        "Access Control Audit",
        "Encryption Implementation Check",
        "Security Policy Review",
        "Compliance Check (OWASP, NIST)",
        "Risk Assessment & Mitigation Plan",
      ],
      techStack: [
        { icon: SiKalilinux, name: "Kali Linux", color: "text-blue-400" },
        { icon: SiBurpsuite, name: "Burp Suite", color: "text-orange-400" },
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiWireshark, name: "Wireshark", color: "text-cyan-400" },
      ],
      examples: [
        "Corporate Website Security Audit",
        "E-Commerce Platform Security Review",
        "API Security Assessment",
        "Database Security Audit",
        "Cloud Infrastructure Security Review",
      ],
      priceStart: "300rb",
      gradient: "from-orange-500 to-yellow-500",
      warning:
        "Audit dilakukan sesuai scope yang disepakati dengan dokumentasi lengkap",
    },
  ];

  const benefits = [
    {
      icon: FaShieldAlt,
      title: "Ethical & Legal",
      desc: "Semua testing sesuai etika dan hukum yang berlaku",
    },
    {
      icon: FaBug,
      title: "Detailed Report",
      desc: "Laporan lengkap dengan screenshot dan remediation",
    },
    {
      icon: FaExclamationTriangle,
      title: "Risk Analysis",
      desc: "Severity rating untuk setiap vulnerability yang ditemukan",
    },
  ];

  const securityTopics = [
    {
      title: "OWASP Top 10",
      items: [
        "Injection",
        "Broken Authentication",
        "XSS",
        "XXE",
        "Broken Access Control",
      ],
      icon: "🔒",
    },
    {
      title: "Network Security",
      items: [
        "Port Scanning",
        "Packet Sniffing",
        "Man-in-the-Middle",
        "DoS/DDoS",
        "Firewall Config",
      ],
      icon: "🌐",
    },
    {
      title: "Web Security",
      items: [
        "SQL Injection",
        "CSRF",
        "File Upload Vuln",
        "Directory Traversal",
        "Session Fixation",
      ],
      icon: "🌍",
    },
    {
      title: "Forensics",
      items: [
        "Data Recovery",
        "Memory Analysis",
        "Log Investigation",
        "Malware Detection",
        "Evidence Chain",
      ],
      icon: "🔍",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
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
            <span className="text-white">Cybersecurity</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Cybersecurity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              Layanan Ethical Hacking, Digital Forensics, dan Security Audit
              untuk tugas kuliah, research, atau learning purposes. Semua
              dilakukan secara ethical dan legal.
            </p>

            {/* Warning Box */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <FaExclamationTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-orange-200 text-sm font-semibold mb-1">
                    Important Notice
                  </p>
                  <p className="text-orange-300/80 text-sm leading-relaxed">
                    Semua layanan cybersecurity hanya untuk tujuan edukasi dan
                    ethical purposes. Testing harus dilakukan dengan izin
                    pemilik sistem. Kami tidak bertanggung jawab atas
                    penyalahgunaan ilmu atau tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                  >
                    <Icon className="w-5 h-5 text-red-400 flex-shrink-0" />
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
                    <p className="text-white/90 leading-relaxed mb-3">
                      {service.description}
                    </p>

                    {/* Warning per service */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                      <p className="text-white/70 text-xs leading-relaxed">
                        ⚠️ {service.warning}
                      </p>
                    </div>
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
                          Tools & Tech:
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
                              <span className="text-red-400 font-bold">•</span>
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

      {/* Security Topics Coverage */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Security Topics Coverage
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Kami menguasai berbagai topik cybersecurity yang umum dipelajari
              mahasiswa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {topic.title}
                </h3>
                <ul className="space-y-1.5">
                  {topic.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-slate-400 text-xs flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Pertanyaan Umum
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Apakah legal melakukan penetration testing?",
                a: "Legal jika dilakukan dengan izin tertulis dari pemilik sistem. Untuk tugas kuliah, kami hanya test di environment lab/sandbox atau dengan explicit permission. Kami tidak melakukan illegal hacking.",
              },
              {
                q: "Apakah tools yang digunakan berbahaya?",
                a: "Tools seperti Kali Linux, Metasploit, Burp Suite adalah tools legitimate untuk security testing. Yang berbahaya adalah niat dan cara penggunaannya. Kami gunakan untuk edukasi dan ethical purposes only.",
              },
              {
                q: "Apa deliverable untuk pentest project?",
                a: "Report lengkap berisi: Executive Summary, Methodology, Findings (dengan severity rating), Screenshots/Proof of Concept, dan Remediation Recommendations.",
              },
              {
                q: "Bisa bantu setup lab environment?",
                a: "Ya, kami bisa guide setup Kali Linux VM, vulnerable apps untuk practice (DVWA, WebGoat, Metasploitable), dan tools yang diperlukan.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 group"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <FaArrowRight className="w-4 h-4 text-red-400 group-open:rotate-90 transition-transform" />
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
              className="text-red-400 hover:text-red-300 font-medium text-sm inline-flex items-center gap-2"
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
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Butuh Bantuan Cybersecurity Project?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Konsultasi gratis untuk diskusi scope testing, target system, dan
              objectives. Kami pastikan semua dilakukan secara ethical dan
              sesuai ketentuan yang berlaku.
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
