import React from "react";
import { BlogNavbar } from "@/components/blog/BlogNavbar";
import { BlogFooter } from "@/components/blog/BlogFooter";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <BlogNavbar />
      <main className="flex-1">{children}</main>
      <BlogFooter />
    </div>
  );
}
