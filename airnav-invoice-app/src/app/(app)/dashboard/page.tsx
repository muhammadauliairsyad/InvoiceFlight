import AppShell from "@/components/layout/AppShell";
import KpiCards from "@/components/dashboard/KpiCards";
import TrendChart from "@/components/dashboard/TrendChart";
import TopAirlinesTable from "@/components/dashboard/TopAirlinesTable";
import OverdueList from "@/components/dashboard/OverdueList";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <KpiCards />
        <div className="grid gap-6 lg:grid-cols-2">
          <TrendChart />
          <TopAirlinesTable />
        </div>
        <OverdueList />
      </div>
    </AppShell>
  );
}
