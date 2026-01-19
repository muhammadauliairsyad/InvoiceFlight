"use client";

import AppShell from "@/components/layout/AppShell";
import { useState } from "react";

export default function ImportPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setPreview(null);

    const formData = new FormData(event.currentTarget);
    const file = formData.get("csv") as File | null;
    if (!file) {
      setError("File CSV belum dipilih.");
      return;
    }

    const content = await file.text();
    const response = await fetch("/api/services/import-csv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });

    if (!response.ok) {
      setError("Gagal membaca CSV.");
      return;
    }

    const result = await response.json();
    setPreview(JSON.stringify(result.preview.slice(0, 5), null, 2));
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Import CSV Layanan</h2>
        <form className="space-y-4 rounded border bg-white p-4" onSubmit={handleUpload}>
          <input className="w-full rounded border px-3 py-2" type="file" name="csv" accept=".csv" />
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button className="rounded bg-blue-600 px-4 py-2 text-white" type="submit">
            Upload & Preview
          </button>
        </form>
        {preview ? (
          <pre className="rounded border bg-slate-50 p-4 text-xs text-slate-700">{preview}</pre>
        ) : null}
      </div>
    </AppShell>
  );
}
