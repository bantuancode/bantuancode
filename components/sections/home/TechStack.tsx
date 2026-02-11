import React from "react";
import Link from "next/link";
import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiDocker,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export const TechStack = () => {
  const techCategories = [
    {
      name: "Backend",
      techs: [
        { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
        { icon: SiPhp, name: "PHP", color: "text-indigo-400" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
        { icon: SiExpress, name: "Express", color: "text-slate-400" },
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiDjango, name: "Django", color: "text-green-600" },
        { icon: SiFlask, name: "Flask", color: "text-slate-300" },
      ],
    },
    {
      name: "Frontend",
      techs: [
        { icon: SiReact, name: "React", color: "text-cyan-400" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { icon: SiVuedotjs, name: "Vue.js", color: "text-green-500" },
        { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
      ],
    },
    {
      name: "Database & Tools",
      techs: [
        { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
        { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
        { icon: SiGit, name: "Git", color: "text-orange-500" },
        { icon: SiDocker, name: "Docker", color: "text-blue-400" },
      ],
    },
  ];

  // Highlight tech (displayed prominently at top)
  const highlightTechs = [
    {
      icon: SiLaravel,
      name: "Laravel",
      color: "text-red-500",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: SiReact,
      name: "React",
      color: "text-cyan-400",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: SiPython,
      name: "Python",
      color: "text-yellow-400",
      gradient: "from-yellow-400 to-green-500",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-white",
      gradient: "from-slate-400 to-slate-600",
    },
    {
      icon: SiMysql,
      name: "MySQL",
      color: "text-blue-400",
      gradient: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-800 to-slate-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tech Stack yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Kami Kuasai
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Teknologi modern untuk menghasilkan kode berkualitas tinggi
          </p>
        </div>

        {/* Highlight Tech - Large Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-16">
          {highlightTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center gap-3"
              >
                <div
                  className={`relative p-6 md:p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-${tech.color}/20`}
                >
                  <Icon
                    className={`w-12 h-12 md:w-16 md:h-16 ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  />

                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                </div>
                <span className="text-slate-400 text-xs md:text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-6 pb-3 border-b border-slate-700">
                {category.name}
              </h3>

              {/* Tech List */}
              <div className="space-y-4">
                {category.techs.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={techIndex}
                      className="flex items-center gap-3 group hover:bg-slate-700/30 p-2 rounded-lg transition-all duration-200"
                    >
                      <div className="flex-shrink-0">
                        <Icon className={`w-6 h-6 ${tech.color}`} />
                      </div>
                      <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Membutuhkan teknologi spesifik yang tidak terdaftar?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tech"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition-all duration-200"
            >
              <span>Lihat Semua Tech Stack</span>
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
              <span>Tanya Ketersediaan</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
