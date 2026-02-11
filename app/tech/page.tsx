import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiElectron,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiKalilinux,
  SiMetasploit,
  SiWireshark,
  SiArduino,
  SiRaspberrypi,
  SiAmazonwebservices,
  SiGooglecloud,
  SiCisco,
  SiMikrotik,
  SiTauri,
  SiDotnet,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import type { Metadata } from "next";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";

export const metadata: Metadata = {
  title: "Tech Stack - Semua Teknologi yang Kami Kuasai",
  description:
    "Daftar lengkap teknologi dan tools yang kami gunakan: Laravel, React, Python, Machine Learning, Cybersecurity tools, dan banyak lagi.",
  keywords: [
    "tech stack",
    "teknologi",
    "laravel",
    "react",
    "python",
    "machine learning",
    "docker",
    "kubernetes",
  ],
  alternates: {
    canonical: "https://bantuancode.com/tech",
  },
};

export default function TechPage() {
  const techCategories = [
    {
      category: "Backend Development",
      description: "Framework dan tools untuk server-side development",
      icon: "🔧",
      techs: [
        {
          icon: SiLaravel,
          name: "Laravel",
          color: "text-red-500",
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          description: "PHP framework untuk web artisan",
          usedFor: ["REST API", "Web App", "Backend System"],
        },
        {
          icon: SiPhp,
          name: "PHP",
          color: "text-indigo-400",
          bg: "bg-indigo-400/10",
          border: "border-indigo-400/20",
          description: "Server-side scripting language",
          usedFor: ["Web Backend", "WordPress", "Custom CMS"],
        },
        {
          icon: SiNodedotjs,
          name: "Node.js",
          color: "text-green-500",
          bg: "bg-green-500/10",
          border: "border-green-500/20",
          description: "JavaScript runtime untuk backend",
          usedFor: ["REST API", "Real-time Apps", "Microservices"],
        },
        {
          icon: SiExpress,
          name: "Express.js",
          color: "text-slate-300",
          bg: "bg-slate-300/10",
          border: "border-slate-300/20",
          description: "Minimalist web framework untuk Node.js",
          usedFor: ["REST API", "Web Server", "Middleware"],
        },
        {
          icon: SiNestjs,
          name: "NestJS",
          color: "text-red-500",
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          description: "Progressive Node.js framework",
          usedFor: ["Enterprise Apps", "Scalable API", "TypeScript Backend"],
        },
        {
          icon: SiPython,
          name: "Python",
          color: "text-yellow-400",
          bg: "bg-yellow-400/10",
          border: "border-yellow-400/20",
          description: "Versatile programming language",
          usedFor: ["Backend", "Scripting", "Automation"],
        },
        {
          icon: SiDjango,
          name: "Django",
          color: "text-green-600",
          bg: "bg-green-600/10",
          border: "border-green-600/20",
          description: "High-level Python web framework",
          usedFor: ["Web Apps", "REST API", "Admin Panel"],
        },
        {
          icon: SiFlask,
          name: "Flask",
          color: "text-slate-300",
          bg: "bg-slate-300/10",
          border: "border-slate-300/20",
          description: "Micro web framework untuk Python",
          usedFor: ["REST API", "Microservices", "Simple Apps"],
        },
        {
          icon: SiFastapi,
          name: "FastAPI",
          color: "text-teal-400",
          bg: "bg-teal-400/10",
          border: "border-teal-400/20",
          description: "Modern, fast Python API framework",
          usedFor: ["REST API", "High Performance", "Async Apps"],
        },
      ],
    },
    {
      category: "Frontend Development",
      description: "Library dan framework untuk user interface",
      icon: "🎨",
      techs: [
        {
          icon: SiReact,
          name: "React",
          color: "text-cyan-400",
          bg: "bg-cyan-400/10",
          border: "border-cyan-400/20",
          description: "JavaScript library untuk UI",
          usedFor: ["SPA", "Web Apps", "Component-based UI"],
        },
        {
          icon: SiNextdotjs,
          name: "Next.js",
          color: "text-white",
          bg: "bg-white/10",
          border: "border-white/20",
          description: "React framework untuk production",
          usedFor: ["SSR", "SSG", "Full-stack Apps"],
        },
        {
          icon: SiVuedotjs,
          name: "Vue.js",
          color: "text-green-500",
          bg: "bg-green-500/10",
          border: "border-green-500/20",
          description: "Progressive JavaScript framework",
          usedFor: ["SPA", "Web Apps", "Progressive Apps"],
        },
        {
          icon: SiNuxtdotjs,
          name: "Nuxt.js",
          color: "text-green-400",
          bg: "bg-green-400/10",
          border: "border-green-400/20",
          description: "Vue.js framework untuk production",
          usedFor: ["SSR", "Static Sites", "Universal Apps"],
        },
        {
          icon: SiJavascript,
          name: "JavaScript",
          color: "text-yellow-400",
          bg: "bg-yellow-400/10",
          border: "border-yellow-400/20",
          description: "Bahasa pemrograman web",
          usedFor: ["Frontend Logic", "DOM Manipulation", "Interactive UI"],
        },
        {
          icon: SiTypescript,
          name: "TypeScript",
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          description: "Typed superset of JavaScript",
          usedFor: ["Type Safety", "Large Apps", "Better DX"],
        },
        {
          icon: SiTailwindcss,
          name: "Tailwind CSS",
          color: "text-cyan-400",
          bg: "bg-cyan-400/10",
          border: "border-cyan-400/20",
          description: "Utility-first CSS framework",
          usedFor: ["Rapid Styling", "Responsive Design", "Custom Design"],
        },
        {
          icon: SiBootstrap,
          name: "Bootstrap",
          color: "text-purple-500",
          bg: "bg-purple-500/10",
          border: "border-purple-500/20",
          description: "CSS framework dengan components",
          usedFor: ["Quick Prototyping", "Responsive Layout", "UI Components"],
        },
      ],
    },
    {
      category: "Mobile Development",
      description: "Framework untuk aplikasi mobile cross-platform",
      icon: "📱",
      techs: [
        {
          icon: SiReact,
          name: "React Native",
          color: "text-cyan-400",
          bg: "bg-cyan-400/10",
          border: "border-cyan-400/20",
          description: "Build native apps dengan React",
          usedFor: ["iOS Apps", "Android Apps", "Cross-platform"],
        },
        {
          icon: SiFlutter,
          name: "Flutter",
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          description: "Google UI toolkit untuk mobile",
          usedFor: ["iOS Apps", "Android Apps", "Beautiful UI"],
        },
        {
          icon: SiElectron,
          name: "Electron",
          color: "text-cyan-300",
          bg: "bg-cyan-300/10",
          border: "border-cyan-300/20",
          description: "Build desktop apps dengan web tech",
          usedFor: ["Desktop Apps", "Windows/Mac/Linux", "Cross-platform"],
        },
      ],
    },
    {
      category: "Desktop Application",
      description:
        "Framework dan teknologi untuk aplikasi desktop lintas platform",
      icon: "🖥️",
      techs: [
        {
          icon: SiElectron,
          name: "Electron",
          color: "text-cyan-300",
          bg: "bg-cyan-300/10",
          border: "border-cyan-300/20",
          description: "Aplikasi desktop berbasis web (HTML, CSS, JS)",
          usedFor: [
            "Desktop Apps",
            "Windows / macOS / Linux",
            "Cross-platform",
          ],
        },
        {
          icon: SiTauri,
          name: "Tauri",
          color: "text-emerald-400",
          bg: "bg-emerald-400/10",
          border: "border-emerald-400/20",
          description: "Desktop app ringan dengan Rust backend",
          usedFor: [
            "Lightweight Desktop Apps",
            "Secure Apps",
            "Cross-platform",
          ],
        },
        {
          icon: SiDotnet,
          name: ".NET (WPF / WinUI)",
          color: "text-purple-400",
          bg: "bg-purple-400/10",
          border: "border-purple-400/20",
          description: "Framework native Windows dari Microsoft",
          usedFor: ["Windows Desktop Apps", "Enterprise Apps", "Native UI"],
        },
      ],
    },
    {
      category: "Database",
      description: "Database management systems",
      icon: "💾",
      techs: [
        {
          icon: SiMysql,
          name: "MySQL",
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          description: "Relational database populer",
          usedFor: ["CRUD Apps", "Web Backend", "Data Storage"],
        },
        {
          icon: SiPostgresql,
          name: "PostgreSQL",
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          description: "Advanced open-source database",
          usedFor: ["Complex Queries", "JSON Data", "Enterprise Apps"],
        },
        {
          icon: SiMongodb,
          name: "MongoDB",
          color: "text-green-500",
          bg: "bg-green-500/10",
          border: "border-green-500/20",
          description: "NoSQL document database",
          usedFor: ["JSON Storage", "Flexible Schema", "Real-time Apps"],
        },
        {
          icon: SiRedis,
          name: "Redis",
          color: "text-red-500",
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          description: "In-memory data store",
          usedFor: ["Caching", "Session Store", "Real-time Data"],
        },
      ],
    },
    {
      category: "Data Science & Machine Learning",
      description: "Tools untuk analisis data dan AI",
      icon: "🤖",
      techs: [
        {
          icon: SiPandas,
          name: "Pandas",
          color: "text-blue-300",
          bg: "bg-blue-300/10",
          border: "border-blue-300/20",
          description: "Data manipulation library",
          usedFor: ["Data Analysis", "Data Cleaning", "CSV/Excel Processing"],
        },
        {
          icon: SiScikitlearn,
          name: "Scikit-learn",
          color: "text-orange-400",
          bg: "bg-orange-400/10",
          border: "border-orange-400/20",
          description: "Machine learning library",
          usedFor: ["Classification", "Regression", "Clustering"],
        },
        {
          icon: SiTensorflow,
          name: "TensorFlow",
          color: "text-orange-500",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
          description: "Deep learning framework",
          usedFor: ["Neural Networks", "Image Recognition", "NLP"],
        },
        {
          icon: SiPytorch,
          name: "PyTorch",
          color: "text-red-500",
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          description: "Deep learning framework",
          usedFor: ["Research", "Neural Networks", "Computer Vision"],
        },
        {
          icon: SiJupyter,
          name: "Jupyter",
          color: "text-orange-400",
          bg: "bg-orange-400/10",
          border: "border-orange-400/20",
          description: "Interactive computing notebook",
          usedFor: ["Data Analysis", "Visualization", "Documentation"],
        },
      ],
    },
    {
      category: "Cybersecurity Tools",
      description: "Tools untuk ethical hacking dan security",
      icon: "🔒",
      techs: [
        {
          icon: SiKalilinux,
          name: "Kali Linux",
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          description: "Penetration testing OS",
          usedFor: ["Pentesting", "Security Audit", "Ethical Hacking"],
        },
        {
          icon: SiMetasploit,
          name: "Metasploit",
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          description: "Penetration testing framework",
          usedFor: [
            "Exploit Testing",
            "Vulnerability Assessment",
            "Security Research",
          ],
        },
        {
          icon: SiWireshark,
          name: "Wireshark",
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          description: "Network protocol analyzer",
          usedFor: ["Packet Analysis", "Network Troubleshooting", "Forensics"],
        },
      ],
    },
    {
      category: "IoT & Embedded",
      description: "Platform untuk Internet of Things",
      icon: "📡",
      techs: [
        {
          icon: SiArduino,
          name: "Arduino",
          color: "text-cyan-400",
          bg: "bg-cyan-400/10",
          border: "border-cyan-400/20",
          description: "Microcontroller platform",
          usedFor: ["IoT Projects", "Sensors", "Automation"],
        },
        {
          icon: SiRaspberrypi,
          name: "Raspberry Pi",
          color: "text-red-500",
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          description: "Single-board computer",
          usedFor: ["IoT Gateway", "Edge Computing", "Home Automation"],
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      description: "Cloud platforms dan deployment tools",
      icon: "☁️",
      techs: [
        {
          icon: SiAmazonwebservices,
          name: "AWS",
          color: "text-orange-400",
          bg: "bg-orange-400/10",
          border: "border-orange-400/20",
          description: "Amazon cloud platform",
          usedFor: ["EC2", "S3", "Lambda", "RDS"],
        },
        {
          icon: VscAzure,
          name: "Azure",
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          description: "Microsoft cloud platform",
          usedFor: ["Virtual Machines", "App Services", "Databases"],
        },
        {
          icon: SiGooglecloud,
          name: "Google Cloud",
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          description: "Google cloud platform",
          usedFor: ["Compute Engine", "Cloud Storage", "BigQuery"],
        },
        {
          icon: SiDocker,
          name: "Docker",
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          description: "Containerization platform",
          usedFor: ["Containers", "Deployment", "Microservices"],
        },
        {
          icon: SiKubernetes,
          name: "Kubernetes",
          color: "text-blue-500",
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          description: "Container orchestration",
          usedFor: ["Auto-scaling", "Load Balancing", "Container Management"],
        },
        {
          icon: SiGit,
          name: "Git",
          color: "text-orange-500",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
          description: "Version control system",
          usedFor: ["Source Control", "Collaboration", "Version Management"],
        },
      ],
    },
    {
      category: "Networking",
      description: "Tools untuk network configuration",
      icon: "🌐",
      techs: [
        {
          icon: SiCisco,
          name: "Cisco Packet Tracer",
          color: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          description: "Network simulation tool",
          usedFor: ["Network Design", "Routing", "Switching"],
        },
        {
          icon: SiMikrotik,
          name: "MikroTik",
          color: "text-red-400",
          bg: "bg-red-400/10",
          border: "border-red-400/20",
          description: "Router operating system",
          usedFor: ["Router Config", "Firewall", "VPN"],
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 md:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Kembali ke Home</span>
            </Link>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Tech Stack yang{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Kami Kuasai
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Daftar lengkap teknologi, framework, dan tools yang kami gunakan
                untuk mengerjakan berbagai jenis project coding.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-400">50+</p>
                  <p className="text-xs text-slate-400">Technologies</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-green-400">10</p>
                  <p className="text-xs text-slate-400">Categories</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-purple-400">100%</p>
                  <p className="text-xs text-slate-400">Production Ready</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {techCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{category.icon}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {category.category}
                      </h2>
                    </div>
                    <p className="text-slate-400">{category.description}</p>
                  </div>

                  {/* Tech Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.techs.map((tech, techIndex) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={techIndex}
                          className={`group bg-slate-800 border ${tech.border} rounded-xl p-6 hover:border-opacity-100 transition-all duration-300 hover:-translate-y-1`}
                        >
                          {/* Icon & Name */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`p-3 ${tech.bg} rounded-lg`}>
                              <Icon className={`w-8 h-8 ${tech.color}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-white mb-1">
                                {tech.name}
                              </h3>
                              <p className="text-sm text-slate-400">
                                {tech.description}
                              </p>
                            </div>
                          </div>

                          {/* Use Cases */}
                          <div>
                            <p className="text-xs font-semibold text-slate-500 mb-2">
                              Digunakan untuk:
                            </p>
                            <div className="space-y-1">
                              {tech.usedFor.map((use, useIndex) => (
                                <div
                                  key={useIndex}
                                  className="flex items-center gap-2"
                                >
                                  <FaCheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                  <span className="text-xs text-slate-300">
                                    {use}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Butuh Teknologi Spesifik?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Tidak menemukan teknologi yang Anda butuhkan? Hubungi kami untuk
                diskusi lebih lanjut tentang ketersediaan dan kemungkinan
                implementasi.
              </p>
              <Link
                href="https://wa.me/6285182380899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Konsultasi via WhatsApp</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
