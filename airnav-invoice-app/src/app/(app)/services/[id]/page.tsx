import AppShell from "@/components/layout/AppShell";
import ServiceDetail from "@/components/services/ServiceDetail";
import PdfActions from "@/components/services/PdfActions";

export default function ServiceDetailPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <ServiceDetail />
        <PdfActions />
      </div>
    </AppShell>
  );
}
