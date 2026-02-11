import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaCode, FaArrowRight } from "react-icons/fa";
import {
  SiLaravel,
  SiReact,
  SiPython,
  SiMysql,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

export const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Web Application",
      description:
        "Admin dashboard untuk manajemen produk, order, dan customer dengan real-time analytics.",
      image: "/images/portfolio/ecommerce-dashboard.jpg", // Placeholder
      techStack: [
        { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
        { icon: SiReact, name: "React", color: "text-cyan-400" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
      ],
      features: [
        "CRUD Complete",
        "Authentication",
        "Real-time Chart",
        "Export PDF",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Student Information System",
      category: "CRUD Application",
      description:
        "Sistem informasi mahasiswa dengan fitur manajemen nilai, absensi, dan jadwal kuliah.",
      image: "/images/portfolio/student-system.jpg", // Placeholder
      techStack: [
        { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
      ],
      features: [
        "Multi-role Access",
        "Grade Management",
        "Attendance",
        "Responsive",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Analysis Dashboard",
      category: "Python Project",
      description:
        "Dashboard analisis data penjualan dengan visualisasi interaktif dan predictive analytics.",
      image: "/images/portfolio/data-dashboard.jpg", // Placeholder
      techStack: [
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
        { icon: SiReact, name: "React", color: "text-cyan-400" },
      ],
      features: [
        "Pandas Analysis",
        "Interactive Charts",
        "ML Prediction",
        "CSV Export",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Project yang Telah{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Kami Kerjakan
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Beberapa contoh project yang telah kami selesaikan dengan kualitas
            terbaik
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image/Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                {/* Placeholder gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                />

                {/* Code icon overlay (since we don't have real images) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700">
                    <FaCode className="w-16 h-16 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full text-xs font-medium text-cyan-400">
                    {project.category}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                  {project.techStack.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech relative"
                        title={tech.name}
                      >
                        <Icon
                          className={`w-5 h-5 ${tech.color} hover:scale-110 transition-transform`}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-green-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-300 text-xs">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 3 && (
                    <div className="text-cyan-400 text-xs font-medium">
                      +{project.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* View Details Link */}
                <div className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </div>
              </div>

              {/* Decorative gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Ingin melihat lebih banyak project yang telah kami kerjakan?
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Lihat Semua Portfolio</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
