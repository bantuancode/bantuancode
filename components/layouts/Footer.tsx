import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Bantuancode Logo"
                  fill
                  sizes="40px"
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-white text-lg font-semibold">
                Bantuancode
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Layanan coding profesional untuk mahasiswa. Delivery cepat dengan
              kode berkualitas.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/bantuancode"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6285182380899"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-green-400 hover:bg-slate-800 rounded-md transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              {/* <a
                href="mailto:hello@bantuancode.com"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a> */}
              <a
                href="https://www.instagram.com/bantuancode/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                aria-label="GitHub"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/bantuancode"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                aria-label="GitHub"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/bantuancodecom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-md transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/layanan/software-development"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/data-science"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Data Science & AI
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/cybersecurity"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/infrastructure"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          {/* <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Tech Stack
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/tech/php-laravel"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  PHP & Laravel
                </Link>
              </li>
              <li>
                <Link
                  href="/tech/react"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  React & Next.js
                </Link>
              </li>
              <li>
                <Link
                  href="/tech/python"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Python
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/syarat-ketentuan"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-slate-500 text-sm text-center md:text-left"
            suppressHydrationWarning
          >
            © {currentYear} Bantuancode. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/sitemap.xml"
              className="text-slate-500 hover:text-slate-400 text-sm transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="text-slate-500 hover:text-slate-400 text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="text-slate-500 hover:text-slate-400 text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
