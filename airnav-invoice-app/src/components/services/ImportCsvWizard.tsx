export default function ImportCsvWizard() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Import CSV Layanan</h2>
      <input type="file" className="rounded border px-3 py-2" />
      <button className="rounded bg-blue-600 px-4 py-2 text-white">Upload & Preview</button>
      <div className="rounded border bg-slate-50 p-4 text-sm text-slate-600">
        Preview akan muncul di sini sebelum commit.
      </div>
    </div>
  );
}
