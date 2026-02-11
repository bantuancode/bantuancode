"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { FaSave, FaTimes, FaTrash, FaPercentage } from "react-icons/fa";
import type { Project } from "@/lib/supabase/client";

type Client = {
  id: string;
  name: string;
  university: string | null;
};

type ProjectFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project?: any;
  clients: Client[];
  isEdit?: boolean;
};

export function ProjectForm({
  project,
  clients,
  isEdit = false,
}: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [formData, setFormData] = useState({
    client_id: project?.client_id || "",
    title: project?.title || "",
    service_type: project?.service_type || "",
    service_detail: project?.service_detail || "",
    requirements: project?.requirements || "",
    price: project?.price?.toString() || "",
    deadline: project?.deadline || "",
    status: project?.status || "quotation",
    progress: project?.progress || 0,
    notes: project?.notes || "",
  });

  const serviceTypes = [
    { value: "software-development", label: "Software Development" },
    { value: "data-science", label: "Data Science & AI" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "infrastructure", label: "Infrastructure" },
  ];

  const serviceDetails: Record<string, string[]> = {
    "software-development": [
      "Web Programming",
      "Mobile Development",
      "Desktop Application",
    ],
    "data-science": ["Machine Learning", "Data Analysis", "AI Projects"],
    cybersecurity: ["Ethical Hacking", "Digital Forensics", "Security Audit"],
    infrastructure: ["Networking", "Internet of Things", "Cloud Computing"],
  };

  const statusOptions = [
    { value: "quotation", label: "Quotation" },
    { value: "in_progress", label: "In Progress" },
    { value: "review", label: "Review" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();

    try {
      const projectData = {
        ...formData,
        price: formData.price ? parseFloat(formData.price) : null,
        deadline: formData.deadline || null,
      };

      if (isEdit && project) {
        // Update existing project
        const { error } = await supabase
          .from("projects")
          .update({
            ...projectData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", project.id);

        if (error) throw error;
      } else {
        // Create new project
        const { error } = await supabase.from("projects").insert([projectData]);

        if (error) throw error;
      }

      router.push("/admin/projects");
      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error saving project:", err);
      setError(err.message || "Failed to save project");
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!project) return;

    setLoading(true);
    setError("");

    const supabase = createClient();

    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", project.id);

      if (error) throw error;

      router.push("/admin/projects");
      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error deleting project:", err);
      setError(err.message || "Failed to delete project");
      setLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    // If service_type changes, reset service_detail
    if (name === "service_type") {
      setFormData({
        ...formData,
        service_type: value,
        service_detail: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Client & Title */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Basic Information
          </h3>

          <div className="space-y-4">
            {/* Client */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Client <span className="text-red-400">*</span>
              </label>
              <select
                name="client_id"
                value={formData.client_id}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              >
                <option value="">Select client...</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}{" "}
                    {client.university && `(${client.university})`}
                  </option>
                ))}
              </select>
              {clients.length === 0 && (
                <p className="mt-2 text-xs text-slate-500">
                  No active clients. Please add a client first.
                </p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Project Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="e.g. E-Commerce Web Application"
              />
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Service Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Service Type
              </label>
              <select
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              >
                <option value="">Select service type...</option>
                {serviceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Detail */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Service Detail
              </label>
              <select
                name="service_detail"
                value={formData.service_detail}
                onChange={handleChange}
                disabled={loading || !formData.service_type}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              >
                <option value="">Select service detail...</option>
                {formData.service_type &&
                  serviceDetails[formData.service_type]?.map((detail) => (
                    <option key={detail} value={detail}>
                      {detail}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Requirements
          </h3>

          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            disabled={loading}
            rows={5}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 resize-none"
            placeholder="List the project requirements, features, tech stack, etc..."
          />
        </div>

        {/* Price & Deadline */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Financial & Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Price (Rp)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                disabled={loading}
                min="0"
                step="1000"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="200000"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Status & Progress */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Status & Progress
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Progress */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Progress (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="progress"
                  value={formData.progress}
                  onChange={handleChange}
                  disabled={loading}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                  placeholder="0"
                />
                <FaPercentage className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              </div>

              {/* Progress Bar Preview */}
              <div className="mt-3">
                <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                    style={{ width: `${formData.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Notes</h3>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            disabled={loading}
            rows={4}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 resize-none"
            placeholder="Additional notes about the project..."
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <FaSave className="w-4 h-4" />
              <span>
                {loading
                  ? "Saving..."
                  : isEdit
                    ? "Update Project"
                    : "Create Project"}
              </span>
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

          {/* Delete Button (only in edit mode) */}
          {isEdit && (
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 hover:border-red-600/50 text-red-400 hover:text-red-300 rounded-lg transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaTrash className="w-4 h-4" />
              <span>Delete</span>
            </button>
          )}
        </div>
      </form>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-3">
              Delete Project?
            </h3>
            <p className="text-slate-400 mb-6">
              Are you sure you want to delete{" "}
              <span className="text-white font-semibold">{project?.title}</span>
              ? This action cannot be undone.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDelete}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
