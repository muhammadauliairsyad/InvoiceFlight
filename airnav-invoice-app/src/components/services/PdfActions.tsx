export default function PdfActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="rounded bg-slate-900 px-4 py-2 text-white">Generate PDF</button>
      <button className="rounded border px-4 py-2">View Receipt</button>
      <button className="rounded border px-4 py-2">View Breakdown</button>
      <button className="rounded border px-4 py-2">View Combined</button>
    </div>
  );
}
