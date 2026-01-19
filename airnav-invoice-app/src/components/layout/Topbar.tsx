"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Topbar() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    setIsLoggingOut(false);
    router.push("/login");
  };

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div>
          <p className="text-sm text-slate-500">AirNav Indonesia</p>
          <h1 className="text-lg font-semibold">Invoice WITT</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            className="rounded border px-3 py-1 text-sm"
            type="button"
            onClick={() => router.back()}
          >
            Kembali
          </button>
          <Link className="rounded border px-3 py-1 text-sm" href="/dashboard">
            Dashboard
          </Link>
          <button
            className="rounded border px-3 py-1 text-sm disabled:opacity-60"
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Keluar..." : "Logout"}
          </button>
        </div>
      </div>
    </header>
  );
}
