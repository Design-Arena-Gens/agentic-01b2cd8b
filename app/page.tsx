import { getDashboardSnapshot } from "@/lib/dataService";
import { DashboardShell } from "@/components/DashboardShell";

export const revalidate = 5;

export default async function Page() {
  const snapshot = await getDashboardSnapshot();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <DashboardShell initial={snapshot} />
    </main>
  );
}
