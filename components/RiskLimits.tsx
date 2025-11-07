import type { RiskIndicator } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import clsx from "classnames";

interface RiskLimitsProps {
  metrics: RiskIndicator[];
}

export const RiskLimits = ({ metrics }: RiskLimitsProps) => {
  return (
    <Card title="Risk Controls" subtitle="Real-time guardrails from the risk engine">
      <div className="space-y-4">
        {metrics.map((metric) => {
          const utilization = metric.value / metric.limit;
          const state = utilization > 0.9 ? "critical" : utilization > 0.75 ? "warning" : "nominal";
          return (
            <div key={metric.label}>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{metric.label}</span>
                <span>
                  {metric.value.toLocaleString()} {metric.unit} · Limit {metric.limit.toLocaleString()} {metric.unit}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className={clsx(
                    "h-full rounded-full",
                    state === "critical" ? "bg-rose-400" : state === "warning" ? "bg-amber-300" : "bg-emerald-400"
                  )}
                  style={{ width: `${Math.min(utilization * 100, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
