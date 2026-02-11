import React from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaCog } from "react-icons/fa";
import { SettingsForm } from "@/components/admin/settings/SettingsForm";

export default async function SettingsPage() {
  const supabase = createServerSupabaseClient();

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-slate-700 rounded-xl">
          <FaCog className="w-6 h-6 text-slate-300" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-slate-400">Manage your account and preferences</p>
        </div>
      </div>

      <SettingsForm user={user} />
    </div>
  );
}
