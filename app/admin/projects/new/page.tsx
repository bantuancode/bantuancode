import React from 'react';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { ProjectForm } from '@/components/admin/projects/ProjectForm';

export default async function NewProjectPage() {
  const supabase = createServerSupabaseClient();

  // Fetch clients for dropdown
  const { data: clients } = await supabase
    .from('clients')
    .select('id, name, university')
    .eq('status', 'active')
    .order('name', { ascending: true });

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
        <h1 className="text-2xl font-bold text-white mb-2">Create New Project</h1>
        <p className="text-slate-400">Fill in the project details below</p>
      </div>

      {/* Form */}
      <ProjectForm clients={clients || []} />
    </div>
  );
}