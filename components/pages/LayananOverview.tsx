import React from "react";
import Link from "next/link";
import {
  FaCode,
  FaRobot,
  FaShieldAlt,
  FaNetworkWired,
  FaArrowRight,
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaUserSecret,
  FaSearch,
  FaLock,
  FaServer,
  FaWifi,
  FaCloud,
} from "react-icons/fa";
import { SiTensorflow, SiKubernetes } from "react-icons/si";
import { IoIosPhonePortrait } from "react-icons/io";

export const LayananOverview = () => {
  const categories = [
    {
      slug: "software-development",
      title: "Software Development",
      icon: FaCode,
      description:
        "Pengembangan aplikasi web, mobile, dan desktop dengan teknologi modern",
      gradient: "from-blue-500 to-cyan-500",
      services: [
        {
          icon: FaLaptopCode,
          name: "Web Programming",
          desc: "Laravel, React, Node.js, Full Stack",
          popular: true,
        },
        {
          icon: FaMobileAlt,
          name: "Mobile Development",
          desc: "React Native, Flutter, Android/iOS",
          popular: true,
        },
        {
          icon: FaDesktop,
          name: "Desktop Application",
          desc: "Electron, JavaFX, C# WinForms",
          popular: false,
        },
      ],
    },
    {
      slug: "data-science",
      title: "Data Science & AI",
      icon: FaRobot,
      description:
        "Machine learning, data analysis, dan artificial intelligence projects",
      gradient: "from-purple-500 to-pink-500",
      services: [
        {
          icon: FaBrain,
          name: "Machine Learning",
          desc: "Classification, Regression, Clustering",
          popular: true,
        },
        {
          icon: FaChartLine,
          name: "Data Analysis",
          desc: "Python, Pandas, Visualization",
          popular: false,
        },
        {
          icon: SiTensorflow,
          name: "AI Projects",
          desc: "Deep Learning, Computer Vision, NLP",
          popular: false,
        },
      ],
    },
    {
      slug: "cybersecurity",
      title: "Cybersecurity",
      icon: FaShieldAlt,
      description:
        "Ethical hacking, digital forensics, dan security assessment",
      gradient: "from-red-500 to-orange-500",
      services: [
        {
          icon: FaUserSecret,
          name: "Ethical Hacking",
          desc: "Penetration Testing, Vulnerability Assessment",
          popular: true,
        },
        {
          icon: FaSearch,
          name: "Digital Forensics",
          desc: "Data Recovery, Evidence Analysis",
          popular: false,
        },
        {
          icon: FaLock,
          name: "Security Audit",
          desc: "Web Security, Network Security",
          popular: false,
        },
      ],
    },
    {
      slug: "infrastructure",
      title: "Infrastructure",
      icon: FaNetworkWired,
      description: "Networking, IoT, cloud computing, dan sistem terdistribusi",
      gradient: "from-green-500 to-emerald-500",
      services: [
        {
          icon: FaServer,
          name: "Networking",
          desc: "Cisco, MikroTik, Network Design",
          popular: false,
        },
        {
          icon: FaWifi,
          name: "Internet of Things",
          desc: "Arduino, Raspberry Pi, ESP32",
          popular: false,
        },
        {
          icon: FaCloud,
          name: "Cloud Computing",
          desc: "AWS, Azure, Docker, Kubernetes",
          popular: false,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Semua Layanan Coding untuk{" "}
            <span className="text-blue-400">Mahasiswa IT</span>
          </h1>
          <p className="text-lg text-slate-400">
            Dari web development hingga machine learning, kami siap membantu
            semua kebutuhan tugas coding Anda
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient}`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-3 mb-6">
                    {category.services.map((service, idx) => {
                      const ServiceIcon = service.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                        >
                          <ServiceIcon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-medium text-sm">
                                {service.name}
                              </span>
                              {service.popular && (
                                <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400 font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-slate-500 text-xs mt-0.5">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/layanan/${category.slug}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    <span>Lihat Detail Layanan</span>
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-slate-400 text-sm">Layanan Tersedia</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400 text-sm">Projects Delivered</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">3-4</div>
            <div className="text-slate-400 text-sm">Hari Avg Delivery</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400 text-sm">Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Tidak Menemukan Layanan yang Anda Cari?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Kami juga melayani berbagai layanan lain seperti Game Development,
            Blockchain, AR/VR, dan banyak lagi. Konsultasi gratis untuk diskusi
            kebutuhan spesifik Anda.
          </p>
          <Link
            href="https://wa.me/6285182380899"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Konsultasi Sekarang</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
