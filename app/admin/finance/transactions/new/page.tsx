import React from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { TransactionForm } from "@/components/admin/finance/TransactionForm";

export default async function NewTransactionPage() {
  const supabase = createServerSupabaseClient();

  // Fetch projects for dropdown
  const { data: projects } = await supabase
    .from("projects")
    .select(
      `
      id,
      title,
      clients:client_id (
        name
      )
    `,
    )
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-3xl">
      {/* Back Button */}
      <Link
        href="/admin/finance"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span>Back to Finance</span>
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Add Transaction</h1>
        <p className="text-slate-400">Record a new income or expense</p>
      </div>

      {/* Form */}
      <TransactionForm projects={projects || []} />
    </div>
  );
}
