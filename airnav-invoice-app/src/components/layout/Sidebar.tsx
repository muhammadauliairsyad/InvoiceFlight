"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MenuItem = { href: string; label: string; adminOnly?: boolean };

const navItems: MenuItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/services", label: "Rekap Layanan" },
  { href: "/services/new", label: "Input Layanan" },
  { href: "/services/import", label: "Import CSV" },
  { href: "/users", label: "Users", adminOnly: true },
  { href: "/settings", label: "Settings", adminOnly: true }
];

export default function Sidebar() {
  const [role, setRole] = useState<string>("VIEWER");

  useEffect(() => {
    const loadRole = async () => {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const result = await response.json();
        setRole(result.user?.role ?? "VIEWER");
      }
    };
    void loadRole();
  }, []);

import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/services", label: "Layanan" },
  { href: "/services/import", label: "Import CSV" },
  { href: "/users", label: "Users" },
  { href: "/settings", label: "Settings" }
];

export default function Sidebar() {
  return (
    <aside className="w-60 space-y-2 rounded bg-white p-4 shadow-sm">
      <h2 className="text-xs font-semibold uppercase text-slate-500">Menu</h2>
      <nav className="flex flex-col gap-2">
        {navItems
          .filter((item) => !item.adminOnly || role === "ADMIN")
          .map((item) => (
            <Link key={item.href} className="rounded px-3 py-2 text-sm hover:bg-slate-100" href={item.href}>
              {item.label}
            </Link>
          ))}
        {navItems.map((item) => (
          <Link key={item.href} className="rounded px-3 py-2 text-sm hover:bg-slate-100" href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
