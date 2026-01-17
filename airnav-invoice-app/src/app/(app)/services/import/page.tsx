import AppShell from "@/components/layout/AppShell";
import ImportCsvWizard from "@/components/services/ImportCsvWizard";

export default function ImportPage() {
  return (
    <AppShell>
      <ImportCsvWizard />
    </AppShell>
  );
}
