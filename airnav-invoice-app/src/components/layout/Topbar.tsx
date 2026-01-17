export default function Topbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm text-slate-500">AirNav Indonesia</p>
          <h1 className="text-lg font-semibold">Invoice WITT</h1>
        </div>
        <button className="rounded border px-3 py-1 text-sm">Logout</button>
      </div>
    </header>
  );
}
