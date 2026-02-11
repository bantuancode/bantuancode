import React from "react";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { ProjectForm } from "@/components/admin/projects/ProjectForm";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProjectPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = createServerSupabaseClient();

  // Fetch project with client data
  const { data: project, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      clients:client_id (
        id,
        name,
        university
      )
    `,
    )
    .eq("id", id)
    .single();

  if (error || !project) {
    notFound();
  }

  // Fetch all clients for dropdown
  const { data: clients } = await supabase
    .from("clients")
    .select("id, name, university")
    .eq("status", "active")
    .order("name", { ascending: true });

  return (
    <div className="max-w-4xl">
      {/* Back Button */}
      <Link
        href="/admin/projects"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Edit Project</h1>
        <p className="text-slate-400">
          Update project details and track progress
        </p>
      </div>

      {/* Form */}
      <ProjectForm project={project} clients={clients || []} isEdit={true} />
    </div>
  );
}
