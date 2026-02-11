/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaPlus, FaEdit, FaTrash, FaEye, FaClock } from "react-icons/fa";
import { DeleteButton } from "@/components/admin/DeleteButton";

export default async function AdminBlogPage() {
  const supabase = createServerSupabaseClient();

  // Fetch all posts with categories
  const { data: posts } = await supabase
    .from("blog_posts")
    .select(
      `
      *,
      category:category_id (
        id,
        name,
        color
      )
    `,
    )
    .order("created_at", { ascending: false });

  // Fetch categories for filter (optional)
  const { data: categories } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name");

  const getStatusBadge = (status: string) => {
    const config: Record<string, { bg: string; text: string; border: string }> =
      {
        draft: {
          bg: "bg-slate-700",
          text: "text-slate-300",
          border: "border-slate-600",
        },
        published: {
          bg: "bg-green-500/10",
          text: "text-green-400",
          border: "border-green-500/20",
        },
        scheduled: {
          bg: "bg-blue-500/10",
          text: "text-blue-400",
          border: "border-blue-500/20",
        },
      };

    const { bg, text, border } = config[status] || config.draft;

    return (
      <span
        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${bg} ${text} border ${border}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Blog Posts</h1>
          <p className="text-slate-400">Manage your blog content</p>
        </div>

        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>New Post</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Total Posts</p>
          <p className="text-3xl font-bold text-white">{posts?.length || 0}</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Published</p>
          <p className="text-3xl font-bold text-green-400">
            {posts?.filter((p) => p.status === "published").length || 0}
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Drafts</p>
          <p className="text-3xl font-bold text-slate-400">
            {posts?.filter((p) => p.status === "draft").length || 0}
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Total Views</p>
          <p className="text-3xl font-bold text-blue-400">
            {posts?.reduce((sum, p) => sum + (p.views || 0), 0) || 0}
          </p>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        {!posts || posts.length === 0 ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
              <FaClock className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              No posts yet
            </h3>
            <p className="text-slate-400 mb-6">Create your first blog post</p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              <FaPlus className="w-4 h-4" />
              <span>Create Post</span>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Title
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Category
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Views
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Published
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post: any) => (
                  <tr
                    key={post.id}
                    className="border-b border-slate-700 hover:bg-slate-750 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        {post.cover_image && (
                          <img
                            src={post.cover_image}
                            alt={post.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium text-white">{post.title}</p>
                          {post.is_featured && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-400">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {post.category && (
                        <span
                          className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium border"
                          style={{
                            backgroundColor: `${post.category.color}10`,
                            borderColor: `${post.category.color}30`,
                            color: post.category.color,
                          }}
                        >
                          {post.category.name}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(post.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-slate-400">
                        <FaEye className="w-3 h-3" />
                        <span>{post.views || 0}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {post.published_at
                        ? new Date(post.published_at).toLocaleDateString(
                            "id-ID",
                          )
                        : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blog/${post.id}`}
                          className="p-2 hover:bg-slate-700 rounded-lg transition-colors group"
                          title="Edit"
                        >
                          <FaEdit className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                        </Link>
                        {/* ← REPLACE */}
                        <DeleteButton
                          id={post.id}
                          table="blog_posts"
                          label={post.title}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
