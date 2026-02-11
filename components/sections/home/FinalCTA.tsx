"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaRocket, FaCheckCircle } from "react-icons/fa";

export const FinalCTA = () => {
  const quickStats = [
    { icon: FaCheckCircle, text: "50+ Projects Delivered" },
    { icon: FaRocket, text: "3-4 Hari Average Delivery" },
    { icon: FaCheckCircle, text: "100% Confidential" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <FaRocket className="w-4 h-4" />
            <span>Ready to Start Your Project?</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Wujudkan Tugas Coding Anda{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient">
              Bersama Kami
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Jangan biarkan tugas coding menghambat nilai Anda. Tim profesional
            kami siap membantu mengerjakan project dengan kode berkualitas dan
            delivery tepat waktu.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
                    {stat.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Primary CTA - WhatsApp */}
            <Link
              href="https://wa.me/6285182380899"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-base md:text-lg font-bold rounded-xl shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <FaWhatsapp className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Konsultasi Gratis Sekarang</span>
              <svg
                className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
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

            {/* Secondary CTA - View Services */}
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-slate-800/80 hover:bg-slate-700 border-2 border-slate-600 hover:border-slate-500 text-white text-base md:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            >
              <span>Lihat Semua Layanan</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Response dalam 1 jam</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Gratis konsultasi</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No hidden fees</span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-500 text-sm">
            Lebih dari 50 mahasiswa telah mempercayai layanan kami. Bergabunglah
            dengan mereka hari ini! 🚀
          </p>
        </div>
      </div>

      {/* Add gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
