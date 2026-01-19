import AppShell from "@/components/layout/AppShell";
import ServicesTable from "@/components/services/ServicesTable";

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
          <h2 className="text-lg font-semibold">Rekap Layanan</h2>
          <div className="flex gap-2">
            <button className="rounded border px-3 py-2 text-sm">Export Input CSV</button>
            <button className="rounded border px-3 py-2 text-sm">Export Output CSV</button>
          </div>
        </div>
        <ServicesTable rows={mockRows} />
      </div>
    </AppShell>
  );
}
