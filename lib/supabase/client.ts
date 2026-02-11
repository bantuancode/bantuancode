import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

// Export singleton for backward compatibility
export const supabase = createClient();

export type Client = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  university: string | null;
  program: string | null;
  status: "active" | "inactive";
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: string;
  client_id: string;
  title: string;
  service_type: string | null;
  service_detail: string | null;
  requirements: string | null;
  price: number | null;
  deadline: string | null;
  status: "quotation" | "in_progress" | "review" | "completed" | "cancelled";
  progress: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type Transaction = {
  id: string;
  project_id: string | null;
  type: "income" | "expense";
  category: string | null;
  amount: number;
  description: string | null;
  transaction_date: string;
  payment_method: string | null;
  created_at: string;
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  color: string;
  post_count: number;
  created_at: string;
  updated_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  author: string;
  category_id: string | null;
  tags: string[] | null;
  meta_title: string | null;
  meta_description: string | null;
  status: "draft" | "published" | "scheduled";
  published_at: string | null;
  scheduled_at: string | null;
  views: number;
  reading_time: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};

export type BlogPostWithCategory = BlogPost & {
  category?: BlogCategory | null;
};
