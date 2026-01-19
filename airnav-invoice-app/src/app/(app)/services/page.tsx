import AppShell from "@/components/layout/AppShell";
import ServicesTable from "@/components/services/ServicesTable";
import Link from "next/link";

const mockRows = [
  {
    id: "1",
    seqNo: 1,
    receiptNo: "WITT.21.2025.12.0001",
    flightType: "DOM" as const,
    netTotal: 912420,
    paymentStatus: "UNPAID" as const
  }
];

export default function ServicesPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Rekap Layanan</h2>
            <p className="text-sm text-slate-600">Filter dan ekspor data sesuai kebutuhan.</p>
          </div>
          <div className="flex gap-2">
            <Link
              className="rounded border px-3 py-2 text-sm"
              href="/api/services/export?format=input"
              target="_blank"
            >
              Export Input CSV
            </Link>
            <Link
              className="rounded border px-3 py-2 text-sm"
              href="/api/services/export?format=output"
              target="_blank"
            >
              Export Output CSV
            </Link>
            <Link className="rounded bg-blue-600 px-3 py-2 text-sm text-white" href="/services/new">
              Input Baru
            </Link>
          </div>
        </div>
        <ServicesTable rows={mockRows} />
      </div>
    </AppShell>
  );
}
