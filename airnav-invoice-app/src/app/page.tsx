import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold">AirNav Indonesia — Invoice WITT</h1>
        <p className="text-lg text-slate-600">
          Sistem end-to-end untuk input layanan Advance/Extend, perhitungan otomatis, pembuatan invoice PDF,
          dan monitoring tagihan Bandara Sultan Iskandar Muda.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="rounded bg-slate-900 px-4 py-2 text-white" href="/login">
            Login
          </Link>
          <Link className="rounded border border-slate-300 px-4 py-2" href="/register">
            Registrasi
          <Link className="rounded border border-slate-300 px-4 py-2" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
