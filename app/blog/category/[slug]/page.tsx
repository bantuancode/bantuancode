/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaClock, FaArrowLeft, FaTag } from "react-icons/fa";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createServerSupabaseClient();

  const { data: category } = await supabase
    .from("blog_categories")
    .select("name, description")
    .eq("slug", slug)
    .single();

  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} - Blog Bantuancode`,
    description: category.description || `Artikel kategori ${category.name}`,
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = createServerSupabaseClient();

  // Fetch category
  const { data: category, error } = await supabase
    .from("blog_categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !category) {
    notFound();
  }

  // Fetch posts in this category
  const { data: posts } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      category:category_id (
        id, name, slug, color
      )
    `,
    )
    .eq("status", "published")
    .eq("category_id", category.id)
    .order("published_at", { ascending: false });

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Kembali ke Blog</span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold border"
              style={{
                backgroundColor: `${category.color}15`,
                borderColor: `${category.color}30`,
                color: category.color,
              }}
            >
              {category.name}
            </span>
            <span className="text-slate-500 text-sm">
              {posts?.length || 0} artikel
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-slate-400 text-lg">{category.description}</p>
          )}
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!posts || posts.length === 0 ? (
            <div className="text-center py-24">
              <span className="text-5xl mb-4 block">📭</span>
              <h3 className="text-xl font-bold text-white mb-2">
                Belum ada artikel di kategori ini
              </h3>
              <p className="text-slate-400">Segera hadir!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Cover */}
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
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 bg-slate-700 text-slate-400 text-xs rounded"
                          >
                            <FaTag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-1.5">
                        <FaClock className="w-3 h-3" />
                        <span>{post.reading_time} min read</span>
                      </div>
                      {post.published_at && (
                        <span>{formatDate(post.published_at)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
