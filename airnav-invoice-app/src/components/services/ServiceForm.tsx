export default function ServiceForm() {
  return (
    <form className="grid gap-6">
      <div className="rounded border border-blue-200 bg-blue-50 p-4">
        <h2 className="text-lg font-semibold text-blue-800">Input Layanan (Kolom Biru)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input className="rounded border px-3 py-2" placeholder="Airline / GH" />
          <input className="rounded border px-3 py-2" placeholder="Flight Type (DOM/INT)" />
          <input className="rounded border px-3 py-2" placeholder="Flight Number" />
          <input className="rounded border px-3 py-2" placeholder="Registration" />
          <input className="rounded border px-3 py-2" placeholder="Aircraft Type" />
          <input className="rounded border px-3 py-2" placeholder="Departure" />
          <input className="rounded border px-3 py-2" placeholder="Arrival" />
          <input className="rounded border px-3 py-2" placeholder="Arrival Date" />
          <input className="rounded border px-3 py-2" placeholder="Departure Date" />
          <input className="rounded border px-3 py-2" placeholder="ATA UTC" />
          <input className="rounded border px-3 py-2" placeholder="ATD UTC" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input className="rounded border px-3 py-2" placeholder="Service Start (WIB)" />
          <input className="rounded border px-3 py-2" placeholder="Service End (WIB)" />
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
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
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input className="rounded border px-3 py-2" placeholder="Advance / Extend" />
          <input className="rounded border px-3 py-2" placeholder="PIC Dinas" />
        </div>
      </div>

      <div className="rounded border border-emerald-200 bg-emerald-50 p-4">
        <h3 className="text-lg font-semibold text-emerald-800">Output Perhitungan (Kolom Hijau)</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input className="rounded border px-3 py-2" placeholder="Durasi (menit)" readOnly />
          <input className="rounded border px-3 py-2" placeholder="Jam Tagih" readOnly />
          <input className="rounded border px-3 py-2" placeholder="Gross Total" readOnly />
          <input className="rounded border px-3 py-2" placeholder="PPN 12%" readOnly />
          <input className="rounded border px-3 py-2" placeholder="Net Total" readOnly />
          <input className="rounded border px-3 py-2" placeholder="Receipt No" readOnly />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded bg-blue-600 px-4 py-2 text-white" type="submit">
          Simpan & Hitung
        </button>
        <button className="rounded border px-4 py-2" type="button">
          Generate PDF
        </button>
        <button className="rounded border px-4 py-2" type="button">
          View Receipt
        </button>
        <button className="rounded border px-4 py-2" type="button">
          View Breakdown
        </button>
        <button className="rounded border px-4 py-2" type="button">
          View Combined
        </button>
      </div>
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
