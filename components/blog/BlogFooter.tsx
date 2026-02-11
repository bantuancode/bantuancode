import React from "react";
import Link from "next/link";
import { FaCode, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export function BlogFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/images/logo.png"
                alt="Bantuancode Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tutorial coding, tips & tricks, dan case study untuk mahasiswa IT
              Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Kategori</h3>
            <ul className="space-y-2">
              {[
                { label: "Tutorial", href: "/category/tutorial" },
                { label: "Tips & Tricks", href: "/category/tips-tricks" },
                { label: "Case Study", href: "/category/case-study" },
                { label: "Best Practices", href: "/category/best-practices" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Butuh Bantuan Coding?
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Tim kami siap membantu mengerjakan tugas dan project coding kamu.
            </p>
            <a
              href="https://wa.me/6285182380899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Bantuancode. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://bantuancode.com"
              className="hover:text-white transition-colors"
            >
              Main Site
            </Link>
            <Link
              href="https://bantuancode.com/kebijakan-privasi"
              className="hover:text-white transition-colors"
            >
              Privasi
            </Link>
            <Link
              href="https://bantuancode.com/syarat-ketentuan"
              className="hover:text-white transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
