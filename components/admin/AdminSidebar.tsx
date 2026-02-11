"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUsers,
  FaCog,
  FaCode,
  FaMoneyBill,
  FaBlog,
} from "react-icons/fa";

export const AdminSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/admin", icon: FaHome, label: "Dashboard" },
    { href: "/admin/clients", icon: FaUsers, label: "Clients" },
    { href: "/admin/projects", icon: FaCode, label: "Projects" },
    { href: "/admin/finance", icon: FaMoneyBill, label: "Finance" },
    { href: "/admin/blog", icon: FaBlog, label: "Blog" }, // ← Add ini
    { href: "/admin/settings", icon: FaCog, label: "Settings" },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === href;
    return pathname?.startsWith(href);
  };

  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold text-white">Bantuancode</h1>
        <p className="text-xs text-slate-400 mt-1">Admin Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">Admin</p>
            <p className="text-slate-500 text-xs">admin@bantuancode.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
