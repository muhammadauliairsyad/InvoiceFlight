import { ServiceSummary } from "@/types/service";

export default function ServicesTable({ rows }: { rows: ServiceSummary[] }) {
  return (
    <div className="overflow-hidden rounded border">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left">
          <tr>
            <th className="px-3 py-2">Seq</th>
            <th className="px-3 py-2">Receipt</th>
            <th className="px-3 py-2">Type</th>
            <th className="px-3 py-2">Net</th>
            <th className="px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="px-3 py-2">{row.seqNo}</td>
              <td className="px-3 py-2">{row.receiptNo}</td>
              <td className="px-3 py-2">{row.flightType}</td>
              <td className="px-3 py-2">{row.netTotal.toLocaleString("id-ID")}</td>
              <td className="px-3 py-2">{row.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
