import type { SystemAlert } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { formatDistanceToNow } from "date-fns";
import clsx from "classnames";

interface AlertStreamProps {
  alerts: SystemAlert[];
}

const palette: Record<SystemAlert["severity"], string> = {
  info: "border-sky-400/40 text-sky-200",
  warning: "border-amber-300/60 text-amber-200",
  critical: "border-rose-400/60 text-rose-200",
};

export const AlertStream = ({ alerts }: AlertStreamProps) => {
  return (
    <Card title="System Alerts" subtitle="Telemetry from orchestration and risk subsystems">
      <ul className="space-y-3 text-sm">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={clsx(
              "rounded-xl border bg-surface/60 px-4 py-3",
              palette[alert.severity]
            )}
          >
            <header className="flex items-center justify-between text-xs uppercase tracking-wide">
              <span>{alert.severity}</span>
              <span>{formatDistanceToNow(new Date(alert.timestamp), { addSuffix: true })}</span>
            </header>
            <p className="mt-2 text-sm text-white">{alert.message}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};
