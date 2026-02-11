import { ClientForm } from "@/components/admin/clients/ClientForm";
import React from "react";

export default function NewClientPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Add New Client</h1>
        <p className="text-slate-400">Fill in the client information below</p>
      </div>

      <ClientForm />
    </div>
  );
}
