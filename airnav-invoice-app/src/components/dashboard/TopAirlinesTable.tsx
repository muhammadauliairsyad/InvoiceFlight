export default function TopAirlinesTable() {
  return (
    <div className="rounded border bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold">Top Airlines</h3>
      <table className="mt-4 w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2">Airline</th>
            <th className="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">-</td>
            <td className="py-2">Rp 0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
