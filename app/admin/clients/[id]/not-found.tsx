import React from "react";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ClientNotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
          <FaExclamationTriangle className="w-10 h-10 text-red-400" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Client Not Found</h1>
        <p className="text-slate-400 mb-8 max-w-md">
          The client you&#39;re looking for doesn&#39;t exist or has been deleted.
        </p>

        <Link
          href="/admin/clients"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
        >
          <span>Back to Clients</span>
        </Link>
      </div>
    </div>
  );
}
