/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaClock, FaTag, FaArrowLeft, FaEye } from "react-icons/fa";
import type { Metadata } from "next";
import { BlogPostJsonLd } from "@/components/seo/JsonLd";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ViewTracker } from "@/components/blog/ViewTracker";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createServerSupabaseClient();

  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, meta_title, meta_description, excerpt, cover_image")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || "",
    alternates: {
      canonical: `https://bantuancode.com/blog/${slug}`,
    },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || "",
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = createServerSupabaseClient();

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select(`*, category:category_id (id, name, slug, color)`)
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !post) notFound();

  // Increment views
  // await supabase
  //   .from("blog_posts")
  //   .update({ views: (post.views || 0) + 1 })
  //   .eq("id", post.id);

  // Related posts
  const { data: relatedPosts } = await supabase
    .from("blog_posts")
    .select(
      `id, title, slug, excerpt, cover_image, reading_time, published_at, category:category_id(id, name, slug, color)`,
    )
    .eq("status", "published")
    .eq("category_id", post.category_id || "")
    .neq("id", post.id)
    .limit(3);

  // Latest posts untuk sidebar (fallback jika related kosong)
  const { data: latestPosts } = await supabase
    .from("blog_posts")
    .select(`id, title, slug, reading_time, published_at, cover_image`)
    .eq("status", "published")
    .neq("id", post.id)
    .order("published_at", { ascending: false })
    .limit(5);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatDateShort = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <>
      <ViewTracker postId={post.id} slug={post.slug} />
      {/* Reading Progress Bar */}
      <ReadingProgress />

      <div className="min-h-screen bg-slate-900">
        {/* Cover Image */}
        {post.cover_image && (
          <div className="relative h-64 md:h-[28rem] overflow-hidden">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 py-10">
            {/* ── MAIN CONTENT ── */}
            <div className="min-w-0">
              {/* Back Button */}
              <div
                className={`${post.cover_image ? "-mt-16 relative z-10" : ""} mb-8`}
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  <span>Kembali ke Blog</span>
                </Link>
              </div>

              {/* Post Header */}
              <header className="mb-10">
                {/* Category */}
                {post.category && (
                  <Link href={`/blog/category/${post.category.slug}`}>
                    <span
                      className="inline-flex px-3 py-1 rounded-full text-xs font-semibold border mb-5 cursor-pointer hover:opacity-80 transition-opacity"
                      style={{
                        backgroundColor: `${post.category.color}15`,
                        borderColor: `${post.category.color}30`,
                        color: post.category.color,
                      }}
                    >
                      {post.category.name}
                    </span>
                  </Link>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 pb-6 border-b border-slate-700">
                  <span className="font-medium text-slate-300">
                    {post.author}
                  </span>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5">
                    <FaClock className="w-3.5 h-3.5" />
                    <span>{post.reading_time} min read</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaEye className="w-3.5 h-3.5" />
                    <span>{post.views} views</span>
                  </div>
                  {post.published_at && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span>{formatDate(post.published_at)}</span>
                    </>
                  )}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-xs rounded-full"
                      >
                        <FaTag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Article Content */}
              <article
                className="tiptap prose prose-invert prose-slate max-w-none mb-12
                  prose-headings:scroll-mt-24
                  prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-[1.05rem]
                  prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-semibold
                  prose-code:text-cyan-400 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-xl
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:text-slate-300 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-img:rounded-xl prose-img:border prose-img:border-slate-700
                  prose-hr:border-slate-700
                  prose-li:text-slate-300
                  prose-h1:text-white prose-h2:text-white prose-h3:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="py-6 border-t border-b border-slate-700/70 mb-12">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-slate-300 font-semibold">
                    Bagikan artikel ini:
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://bantuancode.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-800 hover:bg-[#1DA1F2]/20 border border-slate-700 hover:border-[#1DA1F2]/40 text-slate-300 hover:text-[#1DA1F2] text-sm rounded-lg transition-all"
                    >
                      Twitter/X
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://bantuancode.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-800 hover:bg-green-500/20 border border-slate-700 hover:border-green-500/40 text-slate-300 hover:text-green-400 text-sm rounded-lg transition-all"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts && relatedPosts.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-white mb-6">
                    Artikel Terkait
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedPosts.map((related: any) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="h-32 bg-slate-700 overflow-hidden">
                          {related.cover_image ? (
                            <img
                              src={related.cover_image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                              <span className="text-3xl">📝</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                            {related.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <FaClock className="w-3 h-3" />
                            <span>{related.reading_time} min read</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mb-12 p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Butuh bantuan dengan tugas coding?
                </h3>
                <p className="text-slate-400 mb-6 max-w-sm mx-auto text-sm">
                  Tim Bantuancode siap membantu mengerjakan project dan tugas
                  coding kamu. Cepat, berkualitas, terjangkau.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Konsultasi Gratis →
                </a>
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Article Info */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                    Info Artikel
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Penulis</span>
                      <span className="text-white font-medium">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Waktu baca</span>
                      <span className="text-white font-medium">
                        {post.reading_time} menit
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Dilihat</span>
                      <span className="text-white font-medium">
                        {post.views} kali
                      </span>
                    </div>
                    {post.published_at && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Dipublish</span>
                        <span className="text-white font-medium text-right text-xs">
                          {formatDateShort(post.published_at)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2.5 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs rounded-lg transition-colors cursor-default"
                        >
                          <FaTag className="w-2.5 h-2.5 text-slate-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Latest Posts */}
                {latestPosts && latestPosts.length > 0 && (
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                      Artikel Lainnya
                    </h3>
                    <div className="space-y-4">
                      {latestPosts.map((latest: any) => (
                        <Link
                          key={latest.id}
                          href={`/blog/${latest.slug}`}
                          className="flex gap-3 group"
                        >
                          {/* Thumbnail */}
                          <div className="w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-700">
                            {latest.cover_image ? (
                              <img
                                src={latest.cover_image}
                                alt={latest.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-lg">
                                📝
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-300 group-hover:text-blue-400 transition-colors line-clamp-2 font-medium leading-snug mb-1">
                              {latest.title}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                              <FaClock className="w-2.5 h-2.5" />
                              <span>{latest.reading_time} min</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/blog"
                      className="block mt-4 text-center text-xs text-blue-400 hover:text-blue-300 transition-colors pt-4 border-t border-slate-700"
                    >
                      Lihat semua artikel →
                    </Link>
                  </div>
                )}

                {/* Mini CTA */}
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-xl p-5 text-center">
                  <p className="text-white font-semibold text-sm mb-2">
                    Ada tugas coding?
                  </p>
                  <p className="text-slate-400 text-xs mb-4">
                    Kami siap bantu kerjakan!
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* JSON-LD — fix: taruh di dalam return, bukan floating */}
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt || ""}
        url={`https://bantuancode.com/blog/${post.slug}`}
        image={post.cover_image || undefined}
        datePublished={post.published_at || post.created_at}
        dateModified={post.updated_at}
        author={post.author}
      />
    </>
  );
}
