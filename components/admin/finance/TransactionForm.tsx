/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { FaSave, FaTimes, FaArrowUp, FaArrowDown } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  clients:
    | {
        name: string;
      }[]
    | null;
};

type TransactionFormProps = {
  projects: Project[];
};

export function TransactionForm({ projects }: TransactionFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    type: "income" as "income" | "expense",
    project_id: "",
    category: "",
    amount: "",
    description: "",
    transaction_date: new Date().toISOString().split("T")[0], // Today's date
    payment_method: "",
  });

  // Income categories
  const incomeCategories = [
    "payment_dp",
    "payment_full",
    "payment_revision",
    "consultation_fee",
    "other",
  ];

  // Expense categories
  const expenseCategories = [
    "hosting",
    "domain",
    "tools",
    "software_license",
    "marketing",
    "other",
  ];

  const paymentMethods = ["bank_transfer", "ewallet", "cash", "other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();

    try {
      const transactionData = {
        ...formData,
        amount: parseFloat(formData.amount),
        project_id: formData.project_id || null,
      };

      const { error } = await supabase
        .from("transactions")
        .insert([transactionData]);

      if (error) throw error;

      router.push("/admin/finance");
      router.refresh();
    } catch (err: any) {
      console.error("Error saving transaction:", err);
      setError(err.message || "Failed to save transaction");
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    // If type changes, reset category
    if (name === "type") {
      setFormData({
        ...formData,
        type: value as "income" | "expense",
        category: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const currentCategories =
    formData.type === "income" ? incomeCategories : expenseCategories;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Type Selection */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <label className="block text-sm font-medium text-slate-300 mb-3">
          Transaction Type <span className="text-red-400">*</span>
        </label>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, type: "income", category: "" })
            }
            className={`p-4 rounded-lg border-2 transition-all ${
              formData.type === "income"
                ? "border-green-500 bg-green-500/10"
                : "border-slate-600 bg-slate-700 hover:border-slate-500"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div
                className={`p-2 rounded-lg ${
                  formData.type === "income"
                    ? "bg-green-500/20"
                    : "bg-slate-600"
                }`}
              >
                <FaArrowUp
                  className={`w-5 h-5 ${
                    formData.type === "income"
                      ? "text-green-400"
                      : "text-slate-400"
                  }`}
                />
              </div>
              <span
                className={`font-semibold ${
                  formData.type === "income"
                    ? "text-green-400"
                    : "text-slate-400"
                }`}
              >
                Income
              </span>
            </div>
            <p className="text-xs text-slate-400 text-center">
              Money coming in
            </p>
          </button>

          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, type: "expense", category: "" })
            }
            className={`p-4 rounded-lg border-2 transition-all ${
              formData.type === "expense"
                ? "border-red-500 bg-red-500/10"
                : "border-slate-600 bg-slate-700 hover:border-slate-500"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div
                className={`p-2 rounded-lg ${
                  formData.type === "expense" ? "bg-red-500/20" : "bg-slate-600"
                }`}
              >
                <FaArrowDown
                  className={`w-5 h-5 ${
                    formData.type === "expense"
                      ? "text-red-400"
                      : "text-slate-400"
                  }`}
                />
              </div>
              <span
                className={`font-semibold ${
                  formData.type === "expense"
                    ? "text-red-400"
                    : "text-slate-400"
                }`}
              >
                Expense
              </span>
            </div>
            <p className="text-xs text-slate-400 text-center">
              Money going out
            </p>
          </button>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Transaction Details
        </h3>

        <div className="space-y-4">
          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Amount (Rp) <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              disabled={loading}
              min="0"
              step="1000"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              placeholder="50000"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Category <span className="text-red-400">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
            >
              <option value="">Select category...</option>
              {currentCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Transaction Date <span className="text-red-400">*</span>
            </label>
            <input
              type="date"
              name="transaction_date"
              value={formData.transaction_date}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Payment Method
            </label>
            <select
              name="payment_method"
              value={formData.payment_method}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
            >
              <option value="">Select payment method...</option>
              {paymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          {/* Project (optional for income) */}
          {formData.type === "income" && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Related Project (Optional)
              </label>
              <select
                name="project_id"
                value={formData.project_id}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              >
                <option value="">No project...</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                    {project.clients && project.clients.length > 0 && ` - ${project.clients.map((c) => c.name).join(", ")}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={loading}
              rows={3}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 resize-none"
              placeholder="Add notes about this transaction..."
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
        >
          <FaSave className="w-4 h-4" />
          <span>{loading ? "Saving..." : "Save Transaction"}</span>
        </button>

        <button
          type="button"
          onClick={() => router.back()}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
        >
          <FaTimes className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
}
