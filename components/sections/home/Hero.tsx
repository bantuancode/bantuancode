import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaCode, FaRocket, FaShieldAlt } from "react-icons/fa";
import {
  SiLaravel,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Background Pattern - FIXED */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:pb-32 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              <FaRocket className="w-4 h-4" />
              <span>Trusted by 100+ Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Layanan Coding{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Profesional
              </span>{" "}
              untuk Mahasiswa
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Laravel, React, Python - Delivery cepat 3-4 hari dengan kode
              bersih, dokumentasi lengkap, dan garansi revisi.
            </p>

            {/* Value Props - Quick Highlights */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-slate-400 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <FaCode className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRocket className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Confidential</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* Primary CTA */}
              <Link
                href="https://wa.me/6285182380899"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Konsultasi Gratis</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

              {/* Secondary CTA */}
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white text-base font-medium rounded-lg transition-all duration-200 hover:bg-slate-800"
              >
                <span>Lihat Layanan</span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:block">
            {/* Code Window Mockup */}
            <div className="relative bg-slate-800 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-400 text-xs ml-2">App.jsx</span>
              </div>

              {/* Code Content */}
              {/* Code Content – SSR SAFE */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-slate-300 leading-relaxed whitespace-pre">
                  <code>
                    <span className="text-purple-400">import</span>{" "}
                    {"{ useState }"}{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">&apos;react&apos;</span>;
                    {"\n\n"}
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-yellow-300">App</span>() {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">const</span> [project,
                    setProject] ={" "}
                    <span className="text-yellow-300">useState</span>({"{"}
                    {"\n"}
                    {"    "}name:{" "}
                    <span className="text-green-400">
                      &apos;Your Project&apos;
                    </span>
                    ,{"\n"}
                    {"    "}status:{" "}
                    <span className="text-green-400">&apos;ready&apos;</span>,
                    {"\n"}
                    {"    "}delivery:{" "}
                    <span className="text-green-400">&apos;3-4 days&apos;</span>
                    {"\n"}
                    {"  "}
                    {"});"}
                    {"\n\n"}
                    {"  "}
                    <span className="text-purple-400">return</span> ({"\n"}
                    {"    <div>\n"}
                    {"      <h1>Clean Code ✓</h1>\n"}
                    {"      <p>Documented ✓</p>\n"}
                    {"      <p>Fast Delivery ✓</p>\n"}
                    {"    </div>\n"}
                    {"  );\n"}
                    {"}"}
                  </code>
                </pre>
              </div>

              {/* Floating Badge - Quality */}
              <div className="absolute -right-4 top-20 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg rotate-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Tested</span>
                </div>
              </div>

              {/* Floating Badge - Fast */}
              <div className="absolute -left-4 bottom-20 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg -rotate-3">
                <div className="flex items-center gap-2">
                  <FaRocket className="w-4 h-4" />
                  <span className="font-semibold">3-4 Days</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Icons - Floating */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <SiLaravel className="w-6 h-6 text-red-500" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <SiReact className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <SiPython className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <SiNodedotjs className="w-6 h-6 text-green-500" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <SiMysql className="w-6 h-6 text-blue-400" />
              </div>
              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <SiTailwindcss className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tech Stack */}
        <div className="flex lg:hidden justify-center gap-3 mt-12 flex-wrap">
          <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
            <SiLaravel className="w-5 h-5 text-red-500" />
          </div>
          <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
            <SiReact className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
            <SiPython className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
            <SiNodedotjs className="w-5 h-5 text-green-500" />
          </div>
          <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
            <SiMysql className="w-5 h-5 text-blue-400" />
          </div>
          <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
            <SiTailwindcss className="w-5 h-5 text-cyan-400" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-slate-500 animate-bounce">
            <span className="text-xs">Scroll untuk info lebih lanjut</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
