/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaPlus, FaEdit, FaTrash, FaClock, FaDollarSign } from "react-icons/fa";
import type { Project } from "@/lib/supabase/client";
import { DeleteButton } from "@/components/admin/DeleteButton";

export default async function ProjectsPage() {
  const supabase = createServerSupabaseClient();

  // Fetch projects with client data
  const { data: projects, error } = await supabase
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
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
  }

  // Calculate stats
  const totalProjects = projects?.length || 0;
  const activeProjects =
    projects?.filter((p) => p.status === "in_progress").length || 0;
  const completedProjects =
    projects?.filter((p) => p.status === "completed").length || 0;
  const totalRevenue =
    projects
      ?.filter((p) => p.status === "completed")
      .reduce((sum, p) => sum + (Number(p.price) || 0), 0) || 0;

  // Status badge helper
  const getStatusBadge = (status: string) => {
    const statusConfig: Record<
      string,
      { bg: string; text: string; border: string }
    > = {
      quotation: {
        bg: "bg-slate-700",
        text: "text-slate-300",
        border: "border-slate-600",
      },
      in_progress: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
      },
      review: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/20",
      },
      completed: {
        bg: "bg-green-500/10",
        text: "text-green-400",
        border: "border-green-500/20",
      },
      cancelled: {
        bg: "bg-red-500/10",
        text: "text-red-400",
        border: "border-red-500/20",
      },
    };

    const config = statusConfig[status] || statusConfig.quotation;
    const label = status
      .replace("_", " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
      <span
        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text} border ${config.border}`}
      >
        {label}
      </span>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Projects</h1>
          <p className="text-slate-400">Manage and track all client projects</p>
        </div>

        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>New Project</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Total Projects</p>
          <p className="text-3xl font-bold text-white">{totalProjects}</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">In Progress</p>
          <p className="text-3xl font-bold text-blue-400">{activeProjects}</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Completed</p>
          <p className="text-3xl font-bold text-green-400">
            {completedProjects}
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-2">Total Revenue</p>
          <p className="text-3xl font-bold text-cyan-400">
            Rp {(totalRevenue / 1000).toFixed(0)}k
          </p>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        {!projects || projects.length === 0 ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-4">
              <FaClock className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              No projects yet
            </h3>
            <p className="text-slate-400 mb-6">
              Start tracking your first project
            </p>
            <Link
              href="/admin/projects/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
            >
              <FaPlus className="w-4 h-4" />
              <span>Create Project</span>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Project
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Client
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Service
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Progress
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                    Price
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project: any) => (
                  <tr
                    key={project.id}
                    className="border-b border-slate-700 hover:bg-slate-750 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-white">
                          {project.title}
                        </p>
                        {project.deadline && (
                          <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                            <FaClock className="w-3 h-3" />
                            <span>
                              {new Date(project.deadline).toLocaleDateString(
                                "id-ID",
                              )}
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {project.clients ? (
                        <div>
                          <p className="text-white text-sm">
                            {project.clients.name}
                          </p>
                          {project.clients.university && (
                            <p className="text-xs text-slate-400">
                              {project.clients.university}
                            </p>
                          )}
                        </div>
                      ) : (
                        <span className="text-slate-500 text-sm">
                          No client
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-300">
                        {project.service_detail || project.service_type || "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(project.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-slate-400 w-10 text-right">
                          {project.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {project.price && (
                        <div className="flex items-center gap-1.5 text-sm text-slate-300">
                          <FaDollarSign className="w-3 h-3 text-green-400" />
                          <span>
                            Rp {Number(project.price).toLocaleString("id-ID")}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/projects/${project.id}`}
                          className="p-2 hover:bg-slate-700 rounded-lg transition-colors group"
                          title="Edit"
                        >
                          <FaEdit className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                        </Link>
                        {/* ← REPLACE */}
                        <DeleteButton
                          id={project.id}
                          table="projects"
                          label={project.title}
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
