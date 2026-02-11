import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaUniversity,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import type { Client } from "@/lib/supabase/client";
import { DeleteButton } from "@/components/admin/DeleteButton";

export default async function ClientsPage() {
  const supabase = createServerSupabaseClient();

  // Fetch clients
  const { data: clients, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching clients:", error);
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Clients</h1>
          <p className="text-slate-400">Manage your clients and contacts</p>
        </div>

        <Link
          href="/admin/clients/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>Add Client</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Total Clients</p>
          <p className="text-3xl font-bold text-white">
            {clients?.length || 0}
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Active Clients</p>
          <p className="text-3xl font-bold text-green-400">
            {clients?.filter((c) => c.status === "active").length || 0}
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Inactive Clients</p>
          <p className="text-3xl font-bold text-slate-400">
            {clients?.filter((c) => c.status === "inactive").length || 0}
          </p>
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        {!clients || clients.length === 0 ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
              <FaUniversity className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              No clients yet
            </h3>
            <p className="text-slate-400 mb-6">
              Get started by adding your first client
            </p>
            <Link
              href="/admin/clients/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              <FaPlus className="w-4 h-4" />
              <span>Add Client</span>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Name
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Contact
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    University
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Status
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client: Client) => (
                  <tr
                    key={client.id}
                    className="border-b border-slate-700 hover:bg-slate-750 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-white">{client.name}</p>
                        {client.program && (
                          <p className="text-sm text-slate-400">
                            {client.program}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {client.email && (
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <FaEnvelope className="w-3 h-3" />
                            <span>{client.email}</span>
                          </div>
                        )}
                        {client.phone && (
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <FaPhone className="w-3 h-3" />
                            <span>{client.phone}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {client.university && (
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <FaUniversity className="w-3 h-3" />
                          <span>{client.university}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          client.status === "active"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : "bg-slate-700 text-slate-400 border border-slate-600"
                        }`}
                      >
                        {client.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/clients/${client.id}`}
                          className="p-2 hover:bg-slate-700 rounded-lg transition-colors group"
                          title="Edit"
                        >
                          <FaEdit className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                        </Link>
                        {/* ← REPLACE old delete button with this */}
                        <DeleteButton
                          id={client.id}
                          table="clients"
                          label={client.name}
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
