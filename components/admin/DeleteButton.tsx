/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { FaTrash } from "react-icons/fa";

type DeleteButtonProps = {
  id: string;
  table: string;
  label?: string;
  onDeleted?: () => void;
};

export function DeleteButton({ id, table, label = "item" }: DeleteButtonProps) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    setError("");

    const supabase = createClient();

    try {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;

      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to delete");
      setLoading(false);
    }
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setShowConfirm(true)}
        className="p-2 hover:bg-slate-700 rounded-lg transition-colors group"
        title="Delete"
      >
        <FaTrash className="w-4 h-4 text-slate-400 group-hover:text-red-400 transition-colors" />
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-sm w-full shadow-2xl">
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-full mx-auto mb-5">
              <FaTrash className="w-6 h-6 text-red-400" />
            </div>

            <h3 className="text-lg font-bold text-white text-center mb-2">
              Delete {label}?
            </h3>
            <p className="text-slate-400 text-sm text-center mb-6">
              Tindakan ini tidak bisa dibatalkan.
            </p>

            {error && (
              <p className="text-red-400 text-xs text-center mb-4 p-2 bg-red-500/10 rounded-lg">
                {error}
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowConfirm(false);
                  setError("");
                }}
                disabled={loading}
                className="flex-1 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={loading}
                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 text-white text-sm font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {loading ? "Deleting..." : "Ya, Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
