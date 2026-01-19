export default function PdfActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="rounded bg-slate-900 px-4 py-2 text-white">Generate PDF</button>
      <a className="rounded border px-4 py-2" href="#">
        View Receipt
      </a>
      <a className="rounded border px-4 py-2" href="#">
        View Breakdown
      </a>
      <a className="rounded border px-4 py-2" href="#">
        View Combined
      </a>
    </div>
  );
}
