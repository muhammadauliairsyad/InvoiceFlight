"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? "")
    };

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const result = await response.json();
      setError(result.error ?? "Login gagal.");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form className="space-y-4 rounded bg-white p-6 shadow" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input className="mt-1 w-full rounded border px-3 py-2" type="email" name="email" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input className="mt-1 w-full rounded border px-3 py-2" type="password" name="password" required />
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button
        className="w-full rounded bg-slate-900 px-4 py-2 text-white disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Memproses..." : "Login"}
export default function LoginForm() {
  return (
    <form className="space-y-4 rounded bg-white p-6 shadow">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input className="mt-1 w-full rounded border px-3 py-2" type="email" name="email" />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input className="mt-1 w-full rounded border px-3 py-2" type="password" name="password" />
      </div>
      <button className="w-full rounded bg-slate-900 px-4 py-2 text-white" type="submit">
        Login
      </button>
    </form>
  );
}
