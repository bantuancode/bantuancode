import React from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";

export default async function NewBlogPostPage() {
  const supabase = createServerSupabaseClient();

  // Fetch categories for dropdown
  const { data: categories } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name");

  return (
    <div className="max-w-5xl">
      {/* Back Button */}
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span>Back to Blog</span>
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Create New Post</h1>
        <p className="text-slate-400">Write and publish your blog post</p>
      </div>

      {/* Form */}
      <BlogPostForm categories={categories || []} />
    </div>
  );
}
