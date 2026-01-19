"use client";

import AppShell from "@/components/layout/AppShell";
import { useEffect, useState } from "react";

type Settings = {
  bankName: string;
  bankBranch: string;
  accountName: string;
  accountNumber: string;
  officialName: string;
};

const defaultSettings: Settings = {
  bankName: "BANK SYARIAH INDONESIA",
  bankBranch: "CABANG BANDA ACEH",
  accountName: "PERUM LPPNPI CABANG BANDA ACEH",
  accountNumber: "7143344287",
  officialName: "WIDYA ANGGRAINI"
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("airnav_settings");
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  const handleChange = (field: keyof Settings, value: string) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("airnav_settings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Pengaturan</h2>
          <p className="text-sm text-slate-600">Atur informasi bank dan petugas resmi untuk PDF.</p>
        </div>

        <div className="grid gap-4 rounded border bg-white p-4 md:grid-cols-2">
          <input
            className="rounded border px-3 py-2"
            value={settings.bankName}
            onChange={(event) => handleChange("bankName", event.target.value)}
            placeholder="Nama Bank"
          />
          <input
            className="rounded border px-3 py-2"
            value={settings.bankBranch}
            onChange={(event) => handleChange("bankBranch", event.target.value)}
            placeholder="Cabang Bank"
          />
          <input
            className="rounded border px-3 py-2"
            value={settings.accountName}
            onChange={(event) => handleChange("accountName", event.target.value)}
            placeholder="Nama Rekening"
          />
          <input
            className="rounded border px-3 py-2"
            value={settings.accountNumber}
            onChange={(event) => handleChange("accountNumber", event.target.value)}
            placeholder="No. Rekening"
          />
          <input
            className="rounded border px-3 py-2 md:col-span-2"
            value={settings.officialName}
            onChange={(event) => handleChange("officialName", event.target.value)}
            placeholder="Nama Petugas Official"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded bg-slate-900 px-4 py-2 text-white" onClick={handleSave} type="button">
            Simpan Pengaturan
          </button>
          {saved ? <span className="text-sm text-emerald-600">Tersimpan.</span> : null}
        </div>
      </div>
    </AppShell>
  );
}
