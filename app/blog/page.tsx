/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaClock, FaTag, FaArrowRight, FaEye } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Bantuancode",
  description:
    "Tutorial coding, tips & tricks, dan case study dari tim Bantuancode untuk mahasiswa IT.",
  alternates: {
    canonical: "https://bantuancode.com/blog",
  },
};

export default async function BlogPage() {
  const supabase = createServerSupabaseClient();

  const { data: featuredPost } = await supabase
    .from("blog_posts")
    .select(`*, category:category_id (id, name, slug, color)`)
    .eq("status", "published")
    .eq("is_featured", true)
    .order("published_at", { ascending: false })
    .limit(1)
    .single();

  const { data: recentPosts } = await supabase
    .from("blog_posts")
    .select(`*, category:category_id (id, name, slug, color)`)
    .eq("status", "published")
    .neq("id", featuredPost?.id || "00000000-0000-0000-0000-000000000000")
    .order("published_at", { ascending: false })
    .limit(6);

  const { data: categories } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name");

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Header */}
      <section className="relative bg-slate-900 py-20 md:py-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Artikel Terbaru
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Blog{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Bantuancode
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Tutorial coding, tips & tricks, dan case study untuk membantu
            perjalanan belajar mahasiswa IT.
          </p>

          {/* Categories Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/blog"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-colors"
            >
              Semua
            </Link>
            {categories?.map((cat: any) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-sm font-medium rounded-full transition-all"
              >
                {cat.name}
                {cat.post_count > 0 && (
                  <span className="ml-1.5 text-xs text-slate-500">
                    ({cat.post_count})
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                Featured
              </span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-5 bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                {/* Cover Image - 3/5 width */}
                <div className="lg:col-span-3 relative h-64 lg:h-80 bg-slate-700 overflow-hidden">
                  {featuredPost.cover_image ? (
                    <img
                      src={featuredPost.cover_image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <span className="text-7xl">📝</span>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800/20 lg:block hidden" />
                </div>

                {/* Content - 2/5 width */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  {featuredPost.category && (
                    <span
                      className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold border mb-5"
                      style={{
                        backgroundColor: `${featuredPost.category.color}15`,
                        borderColor: `${featuredPost.category.color}30`,
                        color: featuredPost.category.color,
                      }}
                    >
                      {featuredPost.category.name}
                    </span>
                  )}

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  {featuredPost.excerpt && (
                    <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3 text-sm">
                      {featuredPost.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-6">
                    <span className="font-medium text-slate-400">
                      {featuredPost.author}
                    </span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span>{featuredPost.reading_time} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye className="w-3 h-3" />
                      <span>{featuredPost.views || 0} views</span>
                    </div>
                    {featuredPost.published_at && (
                      <>
                        <span>•</span>
                        <span>{formatDate(featuredPost.published_at)}</span>
                      </>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Baca Selengkapnya</span>
                    <FaArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Recent Posts Grid */}
        {recentPosts && recentPosts.length > 0 && (
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                Artikel Terbaru
              </span>
              <div className="flex-1 h-px bg-slate-800" />
              <span className="text-xs text-slate-600">
                {recentPosts.length} artikel
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  {/* Cover Image */}
                  <div className="relative h-48 bg-slate-700 overflow-hidden">
                    {post.cover_image ? (
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                        <span className="text-4xl">📝</span>
                      </div>
                    )}

                    {/* Category Badge */}
                    {post.category && (
                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm"
                          style={{
                            backgroundColor: `${post.category.color}25`,
                            borderColor: `${post.category.color}40`,
                            color: post.category.color,
                          }}
                        >
                          {post.category.name}
                        </span>
                      </div>
                    )}

                    {/* Reading time badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        <FaClock className="w-2.5 h-2.5" />
                        {post.reading_time} min
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map((tag: string) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 bg-slate-700/80 text-slate-400 text-xs rounded-md"
                          >
                            <FaTag className="w-2 h-2" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-700/70">
                      <div className="flex items-center gap-1.5">
                        <FaEye className="w-3 h-3" />
                        <span>{post.views || 0} views</span>
                      </div>
                      {post.published_at && (
                        <span>{formatDate(post.published_at)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!featuredPost && (!recentPosts || recentPosts.length === 0) && (
          <div className="text-center py-32">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl mb-6">
              <span className="text-5xl">✍️</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Belum ada artikel
            </h3>
            <p className="text-slate-400 max-w-sm mx-auto">
              Artikel pertama sedang disiapkan. Pantau terus ya!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
