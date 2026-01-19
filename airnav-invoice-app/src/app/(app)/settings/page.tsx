import AppShell from "@/components/layout/AppShell";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Pengaturan</h2>
        <p className="text-sm text-slate-600">Atur informasi WITT dan template PDF di sini.</p>
      </div>
    </AppShell>
  );
}
