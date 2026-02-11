import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaSearch, FaCode } from "react-icons/fa";
import Image from "next/image";

export async function BlogNavbar() {
  const supabase = createServerSupabaseClient();

  const { data: categories } = await supabase
    .from("blog_categories")
    .select("id, name, slug")
    .order("name");

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Bantuancode Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div className="flex items-center gap-1">
              <span className="font-bold text-white">Bantuancode</span>
              <span className="text-slate-500">/</span>
              <span className="font-medium text-blue-400">Blog</span>
            </div>
          </Link>

          {/* Categories nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/blog"
              className="px-3 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              Semua
            </Link>
            {categories?.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className="px-3 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Back to main site */}
            <Link
              href="https://bantuancode.com"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <span>Pesan Jasa</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
