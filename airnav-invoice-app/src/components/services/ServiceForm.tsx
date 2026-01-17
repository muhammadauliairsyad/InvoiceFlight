export default function ServiceForm() {
  return (
    <form className="grid gap-4">
      <h2 className="text-lg font-semibold">Input Layanan Advance/Extend</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded border px-3 py-2" placeholder="Airline / GH" />
        <input className="rounded border px-3 py-2" placeholder="Flight Number" />
        <input className="rounded border px-3 py-2" placeholder="Registration" />
        <input className="rounded border px-3 py-2" placeholder="Aircraft Type" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded border px-3 py-2" placeholder="Service Start (WIB)" />
        <input className="rounded border px-3 py-2" placeholder="Service End (WIB)" />
      </div>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" /> APP
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" /> TWR
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" /> AFIS
        </label>
      </div>
      <button className="w-fit rounded bg-blue-600 px-4 py-2 text-white" type="submit">
        Simpan & Hitung
      </button>
    </form>
  );
}
