"use client";

import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Andi Setiawan",
      university: "Universitas Brawijaya",
      program: "Teknik Informatika",
      rating: 5,
      text: "Responnya super cepat, kode juga rapih banget. Dokumentasinya lengkap jadi gampang dipahami. Recommended banget buat yang butuh bantuan tugas coding!",
      project: "CRUD Inventory System",
      avatar: "AS",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sari Rahayu",
      university: "Institut Teknologi Bandung",
      program: "Sistem Informasi",
      rating: 5,
      text: "Profesional banget! Revisi cepet, support sampai 1 bulan. Nilai tugas akhir saya jadi A berkat bantuan tim ini. Thank you so much!",
      project: "Web E-Commerce",
      avatar: "SR",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Budi Santoso",
      university: "Universitas Gadjah Mada",
      program: "Ilmu Komputer",
      rating: 5,
      text: "Awalnya ragu, tapi ternyata hasilnya melampaui ekspektasi. Kodenya clean, ada video tutorial cara pakainya juga. Worth it banget!",
      project: "Data Analysis Dashboard",
      avatar: "BS",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Dian Pratiwi",
      university: "Universitas Indonesia",
      program: "Teknik Komputer",
      rating: 5,
      text: "Deadline mepet tapi tetap dikerjakan dengan baik. Komunikasinya juga enak, dijelasin detail. Pasti bakal order lagi kalau ada tugas sulit.",
      project: "REST API Backend",
      avatar: "DP",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Rizky Firmansyah",
      university: "Telkom University",
      program: "Informatika",
      rating: 5,
      text: "Best decision ever! Dari konsultasi sampai serah terima smooth banget. Bug fixing juga cepet. Highly recommended untuk mahasiswa IT!",
      project: "Student Portal",
      avatar: "RF",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="w-full bg-slate-900 py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Apa Kata{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Mahasiswa?
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Testimoni dari mahasiswa yang telah menggunakan layanan kami
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-10 min-h-[320px] relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <FaQuoteLeft className="w-20 h-20 md:w-24 md:h-24 text-blue-400" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6 min-h-[100px]">
                {testimonials[currentIndex].text}
              </blockquote>

              {/* Project Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                <span className="text-xs font-medium text-blue-400">
                  Project: {testimonials[currentIndex].project}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-lg font-bold">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>

                {/* Name & University */}
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonials[currentIndex].program}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {testimonials[currentIndex].university}
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].color} opacity-5 pointer-events-none`}
            />
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={goToNext}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-blue-500"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              50+
            </div>
            <div className="text-slate-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              5.0
            </div>
            <div className="text-slate-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              100%
            </div>
            <div className="text-slate-400 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};
