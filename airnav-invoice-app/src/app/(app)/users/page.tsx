import AppShell from "@/components/layout/AppShell";

export default function UsersPage() {
  return (
    <AppShell>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Manajemen User</h2>
        <p className="text-sm text-slate-600">Hanya admin dapat menambah atau mengubah user.</p>
      </div>
    </AppShell>
  );
}
