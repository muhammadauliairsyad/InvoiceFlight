"use client";

import AppShell from "@/components/layout/AppShell";
import { useEffect, useState } from "react";

type UserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    const response = await fetch("/api/users");
    if (response.ok) {
      const result = await response.json();
      setUsers(result.users ?? []);
    }
  };

  useEffect(() => {
    void loadUsers();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      role: String(formData.get("role") ?? "VIEWER")
    };

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const result = await response.json();
      setError(result.error?.formErrors?.join(", ") ?? "Gagal menambah user.");
      return;
    }

    event.currentTarget.reset();
    await loadUsers();
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Manajemen User</h2>
          <p className="text-sm text-slate-600">Admin dapat menambah akun baru di bawah ini.</p>
        </div>

        <form className="grid gap-4 rounded border bg-white p-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <input className="rounded border px-3 py-2" name="name" placeholder="Nama" required />
          <input className="rounded border px-3 py-2" name="email" placeholder="Email" type="email" required />
          <input
            className="rounded border px-3 py-2"
            name="password"
            placeholder="Password"
            type="password"
            required
          />
          <select className="rounded border px-3 py-2" name="role" defaultValue="VIEWER">
            <option value="ADMIN">ADMIN</option>
            <option value="OPERATOR">OPERATOR</option>
            <option value="VIEWER">VIEWER</option>
          </select>
          {error ? <p className="text-sm text-red-600 md:col-span-2">{error}</p> : null}
          <button className="rounded bg-slate-900 px-4 py-2 text-white md:col-span-2" type="submit">
            Tambah User
          </button>
        </form>

        <div className="rounded border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="px-3 py-2">Nama</th>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-3 py-2">{user.name}</td>
                  <td className="px-3 py-2">{user.email}</td>
                  <td className="px-3 py-2">{user.role}</td>
                </tr>
              ))}
              {users.length === 0 ? (
                <tr>
                  <td className="px-3 py-4 text-center text-slate-500" colSpan={3}>
                    Belum ada user.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
