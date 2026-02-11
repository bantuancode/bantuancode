import React from "react";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { ClientForm } from "@/components/admin/clients/ClientForm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditClientPage({ params }: PageProps) {
  // Await params (Next.js 15+)
  const { id } = await params;

  const supabase = createServerSupabaseClient();

  // Fetch client by ID
  const { data: client, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !client) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      {/* Back Button */}
      <Link
        href="/admin/clients"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span>Back to Clients</span>
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Edit Client</h1>
        <p className="text-slate-400">Update client information</p>
      </div>

      {/* Form */}
      <ClientForm client={client} isEdit={true} />
    </div>
  );
}
