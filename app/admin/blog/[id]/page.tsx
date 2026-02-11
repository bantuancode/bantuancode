import React from "react";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = createServerSupabaseClient();

  // Fetch post with category
  const { data: post, error } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      category:category_id (
        id,
        name,
        slug,
        color,
        description,
        post_count,
        created_at,
        updated_at
      )
    `,
    )
    .eq("id", id)
    .single();

  if (error || !post) {
    notFound();
  }

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
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Edit Post</h1>
          <p className="text-slate-400">Update your blog post</p>
        </div>

        {/* Post Meta Info */}
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <div>
            <span className="text-slate-500">Views: </span>
            <span className="text-white font-medium">{post.views || 0}</span>
          </div>
          <div>
            <span className="text-slate-500">Created: </span>
            <span className="text-white font-medium">
              {new Date(post.created_at).toLocaleDateString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      {/* Form */}
      <BlogPostForm post={post} categories={categories || []} isEdit={true} />
    </div>
  );
}
