export default function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {[
        { label: "Gross Bulan Ini", value: "Rp 0" },
        { label: "Net Bulan Ini", value: "Rp 0" },
        { label: "Paid", value: "0" },
        { label: "Unpaid", value: "0" }
      ].map((item) => (
        <div key={item.label} className="rounded border bg-white p-4 shadow-sm">
          <p className="text-xs uppercase text-slate-500">{item.label}</p>
          <p className="text-xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
