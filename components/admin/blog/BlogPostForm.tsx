/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { RichTextEditor } from "./RichTextEditor";
import slugify from "slugify";
import {
  FaSave,
  FaTimes,
  FaEye,
  FaImage,
  FaTrash,
  FaCalendar,
} from "react-icons/fa";
import type { BlogCategory, BlogPost } from "@/lib/supabase/client";

type BlogPostFormProps = {
  post?: BlogPost & { category?: BlogCategory };
  categories: BlogCategory[];
  isEdit?: boolean;
};

export function BlogPostForm({
  post,
  categories,
  isEdit = false,
}: BlogPostFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    cover_image: post?.cover_image || "",
    category_id: post?.category_id || "",
    tags: post?.tags?.join(", ") || "", // Convert array to string
    meta_title: post?.meta_title || "",
    meta_description: post?.meta_description || "",
    status: post?.status || "draft",
    is_featured: post?.is_featured || false,
    published_at: post?.published_at
      ? new Date(post.published_at).toISOString().slice(0, 16)
      : "",
  });

  // Auto-generate slug from title
  useEffect(() => {
    if (!isEdit && formData.title) {
      const generatedSlug = slugify(formData.title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title, isEdit]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    setUploading(true);
    setError("");

    const supabase = createClient();

    try {
      // Generate unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("blog-images").getPublicUrl(filePath);

      setFormData({ ...formData, cover_image: publicUrl });
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent, publishNow = false) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();

    try {
      // Convert tags string to array
      const tagsArray = formData.tags
        ? formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];

      // Calculate reading time (rough estimate: 200 words per minute)
      const wordCount = formData.content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);

      const postData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt || null,
        content: formData.content,
        cover_image: formData.cover_image || null,
        category_id: formData.category_id || null,
        tags: tagsArray,
        meta_title: formData.meta_title || formData.title,
        meta_description: formData.meta_description || formData.excerpt || null,
        status: publishNow ? "published" : formData.status,
        is_featured: formData.is_featured,
        published_at: publishNow
          ? new Date().toISOString()
          : formData.published_at || null,
        reading_time: readingTime,
        updated_at: new Date().toISOString(),
      };

      if (isEdit && post) {
        // Update existing post
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", post.id);

        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase.from("blog_posts").insert([postData]);

        if (error) throw error;
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (err: any) {
      console.error("Error saving post:", err);
      setError(err.message || "Failed to save post");
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!post) return;

    setLoading(true);
    const supabase = createClient();

    try {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", post.id);

      if (error) throw error;

      router.push("/admin/blog");
      router.refresh();
    } catch (err: any) {
      console.error("Error deleting post:", err);
      setError(err.message || "Failed to delete post");
      setLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <>
      <form className="space-y-6">
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Title & Slug */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Basic Information
          </h3>

          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="Enter post title"
              />
            </div>

            {/* Slug */}
            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Slug <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
                disabled={loading || isEdit} // ← Disable when editing
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 font-mono text-sm"
                placeholder="auto-generated-from-title"
              />
              <p className="mt-1 text-xs text-slate-500">
                {isEdit
                  ? "⚠️ Slug tidak bisa diubah setelah publish (akan merusak URL)"
                  : `URL: /blog/${formData.slug || "your-post-slug"}`}
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                disabled={loading}
                rows={3}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 resize-none"
                placeholder="Short description for preview cards..."
              />
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Cover Image</h3>

          <div className="space-y-4">
            {formData.cover_image && (
              <div className="relative">
                <img
                  src={formData.cover_image}
                  alt="Cover"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, cover_image: "" })}
                  className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            )}

            <div>
              <label className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white rounded-lg cursor-pointer transition-colors">
                <FaImage className="w-4 h-4" />
                <span>{uploading ? "Uploading..." : "Upload Cover Image"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading || loading}
                  className="hidden"
                />
              </label>
              <p className="mt-2 text-xs text-slate-500">
                Recommended: 1200x630px, max 5MB (jpg, png, webp)
              </p>
            </div>
          </div>
        </div>

        {/* Category & Tags */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Categorization
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Category
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              >
                <option value="">Select category...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Tags{" "}
                <span className="text-xs text-slate-500">
                  (comma separated)
                </span>
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="laravel, api, backend"
              />
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Content <span className="text-red-400">*</span>
          </h3>

          <RichTextEditor
            content={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
            placeholder="Write your post content here..."
          />
        </div>

        {/* SEO Settings */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            SEO Settings
          </h3>

          <div className="space-y-4">
            {/* Meta Title */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Meta Title{" "}
                <span className="text-xs text-slate-500">
                  (defaults to post title)
                </span>
              </label>
              <input
                type="text"
                name="meta_title"
                value={formData.meta_title}
                onChange={handleChange}
                disabled={loading}
                maxLength={60}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="SEO-friendly title (60 chars max)"
              />
              <p className="mt-1 text-xs text-slate-500">
                {formData.meta_title.length}/60 characters
              </p>
            </div>

            {/* Meta Description */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Meta Description{" "}
                <span className="text-xs text-slate-500">
                  (defaults to excerpt)
                </span>
              </label>
              <textarea
                name="meta_description"
                value={formData.meta_description}
                onChange={handleChange}
                disabled={loading}
                rows={3}
                maxLength={160}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 resize-none"
                placeholder="SEO description (160 chars max)"
              />
              <p className="mt-1 text-xs text-slate-500">
                {formData.meta_description.length}/160 characters
              </p>
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="is_featured"
                name="is_featured"
                checked={formData.is_featured}
                onChange={handleChange}
                disabled={loading}
                className="w-4 h-4 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="is_featured" className="text-sm text-slate-300">
                Featured Post (show on homepage)
              </label>
            </div>
          </div>
        </div>

        {/* Publishing */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Publishing</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>

            {/* Publish Date (for scheduled) */}
            {formData.status === "scheduled" && (
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Schedule Date
                </label>
                <input
                  type="datetime-local"
                  name="published_at"
                  value={formData.published_at}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                />
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-700">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => handleSubmit(e, false)}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <FaSave className="w-4 h-4" />
              <span>{loading ? "Saving..." : "Save Draft"}</span>
            </button>

            <button
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <FaEye className="w-4 h-4" />
              <span>{loading ? "Publishing..." : "Publish Now"}</span>
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <FaTimes className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>

          {/* Delete (only in edit mode) */}
          {isEdit && (
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 text-red-400 rounded-lg transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaTrash className="w-4 h-4" />
              <span>Delete Post</span>
            </button>
          )}
        </div>
      </form>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-3">Delete Post?</h3>
            <p className="text-slate-400 mb-6">
              Are you sure you want to delete{" "}
              <span className="text-white font-semibold">{post?.title}</span>?
              This action cannot be undone.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDelete}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
