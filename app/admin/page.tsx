/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  FaUsers,
  FaCode,
  FaMoneyBillWave,
  FaFileAlt,
  FaArrowUp,
  FaArrowDown,
  FaClock,
  FaCheckCircle,
  FaSpinner,
  FaExclamationCircle,
} from "react-icons/fa";

export default async function AdminDashboardPage() {
  const supabase = createServerSupabaseClient();

  // Fetch all stats in parallel
  const [
    { data: clients },
    { data: projects },
    { data: transactions },
    { data: posts },
  ] = await Promise.all([
    supabase.from("clients").select("id, status, created_at"),
    supabase
      .from("projects")
      .select("id, status, price, deadline, created_at, title, client_id")
      .order("created_at", { ascending: false }),
    supabase
      .from("transactions")
      .select("id, type, amount, transaction_date")
      .order("transaction_date", { ascending: false }),
    supabase.from("blog_posts").select("id, status, views, created_at"),
  ]);

  // Client stats
  const totalClients = clients?.length || 0;
  const activeClients =
    clients?.filter((c) => c.status === "active").length || 0;

  // Project stats
  const totalProjects = projects?.length || 0;
  const activeProjects =
    projects?.filter((p) => p.status === "in_progress").length || 0;
  const completedProjects =
    projects?.filter((p) => p.status === "completed").length || 0;
  const pendingProjects =
    projects?.filter((p) => p.status === "quotation").length || 0;

  // Finance stats
  const totalIncome =
    transactions
      ?.filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;
  const totalExpense =
    transactions
      ?.filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;
  const netProfit = totalIncome - totalExpense;

  // This month stats
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthIncome =
    transactions
      ?.filter(
        (t) =>
          t.type === "income" &&
          new Date(t.transaction_date) >= firstDayOfMonth,
      )
      .reduce((sum, t) => sum + Number(t.amount), 0) || 0;

  // Blog stats
  const totalPosts = posts?.length || 0;
  const publishedPosts =
    posts?.filter((p) => p.status === "published").length || 0;
  const totalViews = posts?.reduce((sum, p) => sum + (p.views || 0), 0) || 0;

  // Upcoming deadlines (next 7 days)
  const next7Days = new Date();
  next7Days.setDate(next7Days.getDate() + 7);
  const upcomingDeadlines =
    projects?.filter((p) => {
      if (!p.deadline || p.status === "completed" || p.status === "cancelled")
        return false;
      const deadline = new Date(p.deadline);
      return deadline >= now && deadline <= next7Days;
    }) || [];

  // Recent projects (last 5)
  const recentProjects = projects?.slice(0, 5) || [];

  const formatCurrency = (amount: number) =>
    `Rp ${(amount / 1000).toFixed(0)}k`;

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
    });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="w-4 h-4 text-green-400" />;
      case "in_progress":
        return <FaSpinner className="w-4 h-4 text-blue-400" />;
      case "review":
        return <FaClock className="w-4 h-4 text-yellow-400" />;
      case "quotation":
        return <FaExclamationCircle className="w-4 h-4 text-slate-400" />;
      default:
        return <FaClock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      quotation: "Quotation",
      in_progress: "In Progress",
      review: "Review",
      completed: "Completed",
      cancelled: "Cancelled",
    };
    return labels[status] || status;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
        <p className="text-slate-400">
          {now.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Clients */}
        <Link
          href="/admin/clients"
          className="group bg-slate-800 border border-slate-700 hover:border-blue-500/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
              <FaUsers className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-slate-500">Total</span>
          </div>
          <p className="text-3xl font-bold text-white mb-1">{totalClients}</p>
          <p className="text-sm text-slate-400">Clients</p>
          <p className="text-xs text-green-400 mt-2">{activeClients} active</p>
        </Link>

        {/* Projects */}
        <Link
          href="/admin/projects"
          className="group bg-slate-800 border border-slate-700 hover:border-purple-500/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
              <FaCode className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-slate-500">Total</span>
          </div>
          <p className="text-3xl font-bold text-white mb-1">{totalProjects}</p>
          <p className="text-sm text-slate-400">Projects</p>
          <p className="text-xs text-blue-400 mt-2">
            {activeProjects} in progress
          </p>
        </Link>

        {/* Revenue */}
        <Link
          href="/admin/finance"
          className="group bg-slate-800 border border-slate-700 hover:border-green-500/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
              <FaMoneyBillWave className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-slate-500">Net</span>
          </div>
          <p className="text-3xl font-bold text-white mb-1">
            {formatCurrency(netProfit)}
          </p>
          <p className="text-sm text-slate-400">Profit</p>
          <p className="text-xs text-green-400 mt-2">
            +{formatCurrency(monthIncome)} this month
          </p>
        </Link>

        {/* Blog */}
        <Link
          href="/admin/blog"
          className="group bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl p-6 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
              <FaFileAlt className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-xs text-slate-500">Total</span>
          </div>
          <p className="text-3xl font-bold text-white mb-1">{totalPosts}</p>
          <p className="text-sm text-slate-400">Blog Posts</p>
          <p className="text-xs text-cyan-400 mt-2">{totalViews} total views</p>
        </Link>
      </div>
      {/* Quick Actions */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/admin/clients/new"
            className="flex flex-col items-center gap-2 p-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors group"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <FaUsers className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Add Client
            </span>
          </Link>

          <Link
            href="/admin/projects/new"
            className="flex flex-col items-center gap-2 p-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors group"
          >
            <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
              <FaCode className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              New Project
            </span>
          </Link>

          <Link
            href="/admin/finance/transactions/new"
            className="flex flex-col items-center gap-2 p-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors group"
          >
            <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
              <FaMoneyBillWave className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Add Transaction
            </span>
          </Link>

          <Link
            href="/admin/blog/new"
            className="flex flex-col items-center gap-2 p-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors group"
          >
            <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
              <FaFileAlt className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Write Post
            </span>
          </Link>
        </div>
      </div>

      {/* Finance Overview + Project Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Finance Breakdown */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">
            Finance Overview
          </h2>

          <div className="space-y-4">
            {/* Income */}
            <div className="flex items-center justify-between p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <FaArrowUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Total Income</p>
                  <p className="text-xs text-slate-400">All time</p>
                </div>
              </div>
              <p className="text-lg font-bold text-green-400">
                {formatCurrency(totalIncome)}
              </p>
            </div>

            {/* Expense */}
            <div className="flex items-center justify-between p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <FaArrowDown className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Total Expense
                  </p>
                  <p className="text-xs text-slate-400">All time</p>
                </div>
              </div>
              <p className="text-lg font-bold text-red-400">
                {formatCurrency(totalExpense)}
              </p>
            </div>

            {/* Net Profit */}
            <div className="flex items-center justify-between p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <FaMoneyBillWave className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Net Profit</p>
                  <p className="text-xs text-slate-400">Income - Expense</p>
                </div>
              </div>
              <p
                className={`text-lg font-bold ${netProfit >= 0 ? "text-blue-400" : "text-red-400"}`}
              >
                {formatCurrency(netProfit)}
              </p>
            </div>

            {/* Progress Bar */}
            {totalIncome > 0 && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Expense ratio</span>
                  <span>{Math.round((totalExpense / totalIncome) * 100)}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-red-500 rounded-full transition-all"
                    style={{
                      width: `${Math.min((totalExpense / totalIncome) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Status Breakdown */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">
            Project Status
          </h2>

          <div className="space-y-4">
            {[
              {
                label: "Quotation",
                status: "quotation",
                count: pendingProjects,
                color: "bg-slate-500",
                textColor: "text-slate-400",
              },
              {
                label: "In Progress",
                status: "in_progress",
                count: activeProjects,
                color: "bg-blue-500",
                textColor: "text-blue-400",
              },
              {
                label: "Review",
                status: "review",
                count:
                  projects?.filter((p) => p.status === "review").length || 0,
                color: "bg-yellow-500",
                textColor: "text-yellow-400",
              },
              {
                label: "Completed",
                status: "completed",
                count: completedProjects,
                color: "bg-green-500",
                textColor: "text-green-400",
              },
            ].map((item) => (
              <div key={item.status}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-slate-300">{item.label}</span>
                  <span className={`text-sm font-semibold ${item.textColor}`}>
                    {item.count}
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{
                      width:
                        totalProjects > 0
                          ? `${(item.count / totalProjects) * 100}%`
                          : "0%",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="pt-4 border-t border-slate-700 flex justify-between">
              <span className="text-sm text-slate-400">Total Projects</span>
              <span className="text-sm font-bold text-white">
                {totalProjects}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines + Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">
              Upcoming Deadlines
            </h2>
            <span className="text-xs text-slate-500">Next 7 days</span>
          </div>

          {upcomingDeadlines.length === 0 ? (
            <div className="text-center py-8">
              <FaCheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">No upcoming deadlines</p>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingDeadlines.map((project: any) => {
                const deadline = new Date(project.deadline);
                const daysLeft = Math.ceil(
                  (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
                );

                return (
                  <Link
                    key={project.id}
                    href={`/admin/projects/${project.id}`}
                    className="flex items-center justify-between p-3 bg-slate-750 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(project.status)}
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </p>
                        <p className="text-xs text-slate-500">
                          {formatDate(project.deadline)}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        daysLeft <= 1
                          ? "bg-red-500/10 text-red-400"
                          : daysLeft <= 3
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {daysLeft === 0 ? "Today!" : `${daysLeft}d left`}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Projects */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">
              Recent Projects
            </h2>
            <Link
              href="/admin/projects"
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All →
            </Link>
          </div>

          {recentProjects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-400 text-sm">No projects yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentProjects.map((project: any) => (
                <Link
                  key={project.id}
                  href={`/admin/projects/${project.id}`}
                  className="flex items-center justify-between p-3 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(project.status)}
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {formatDate(project.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    {project.price && (
                      <p className="text-xs font-medium text-green-400">
                        {formatCurrency(Number(project.price))}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 mt-0.5">
                      {getStatusLabel(project.status)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
