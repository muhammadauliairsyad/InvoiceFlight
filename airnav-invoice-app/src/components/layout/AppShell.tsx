import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Topbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6">
        <Sidebar />
        <main className="flex-1 rounded bg-white p-6 shadow-sm">{children}</main>
      </div>
    </div>
  );
}
