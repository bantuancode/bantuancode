"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { FaSignOutAlt } from "react-icons/fa";

export const AdminHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <header className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
      <div>
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
      >
        <FaSignOutAlt className="w-4 h-4" />
        <span>Logout</span>
      </button>
    </header>
  );
};
