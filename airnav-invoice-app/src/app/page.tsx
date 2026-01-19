import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-100 px-6 py-16">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-40">
        <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-sky-200 blur-2xl" />
        <div className="absolute right-16 top-32 h-32 w-32 animate-pulse rounded-full bg-blue-200 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl space-y-8 text-center">
        <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-400">
          <span>Bandara Sultan Iskandar Muda</span>
          <span>•</span>
          <span>WITT</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">AirNav Indonesia — Invoice WITT</h1>
        <p className="text-lg text-slate-600 md:text-xl">
          Sistem end-to-end untuk input layanan Advance/Extend, perhitungan otomatis, pembuatan invoice PDF, dan
          monitoring tagihan Bandara Sultan Iskandar Muda.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="rounded bg-slate-900 px-6 py-3 text-white" href="/login">
            Login
          </Link>
          <Link className="rounded border border-slate-300 px-6 py-3" href="/register">
            Registrasi
          </Link>
        </div>
        <div className="relative mt-10 flex items-center justify-center">
          <div className="relative h-32 w-full max-w-xl overflow-hidden rounded-2xl border bg-white shadow">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-sky-50 to-white" />
            <div className="absolute left-6 top-8 h-2 w-16 rounded-full bg-slate-200" />
            <div className="absolute left-6 top-14 h-2 w-28 rounded-full bg-slate-200" />
            <div className="absolute left-6 top-20 h-2 w-20 rounded-full bg-slate-200" />
            <div className="absolute -left-10 top-14 h-10 w-10 animate-bounce rounded-full bg-sky-400" />
            <div className="absolute left-16 top-12 h-6 w-24 animate-pulse rounded-full bg-slate-300" />
            <div className="absolute right-8 top-10 h-10 w-10 animate-pulse rounded-full bg-blue-200" />
            <div className="absolute right-10 top-20 text-xs text-slate-400">Take off with safer billing</div>
          </div>
        </div>
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
