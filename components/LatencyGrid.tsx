import type { LatencyMetric } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import clsx from "classnames";

interface LatencyGridProps {
  metrics: LatencyMetric[];
}

export const LatencyGrid = ({ metrics }: LatencyGridProps) => {
  return (
    <Card title="Execution Latency" subtitle="Median round-trip across primary venues">
      <div className="grid gap-3 md:grid-cols-2">
        {metrics.map((metric) => {
          const breach = metric.latencyMs > metric.baselineMs * 1.5;
          const elevated = metric.latencyMs > metric.baselineMs * 1.2;
          return (
            <article key={metric.venue} className="rounded-xl border border-white/5 bg-surface/60 p-4">
              <header className="flex items-center justify-between text-sm text-white/60">
                <span>{metric.venue}</span>
                <span>Baseline {metric.baselineMs}ms</span>
              </header>
              <div className="mt-3 flex items-baseline gap-3">
                <p className="text-3xl font-semibold text-white">{metric.latencyMs}ms</p>
                <span
                  className={clsx(
                    "rounded-full px-2 py-1 text-xs",
                    breach
                      ? "bg-rose-500/15 text-rose-300"
                      : elevated
                      ? "bg-amber-400/20 text-amber-200"
                      : "bg-emerald-500/10 text-emerald-300"
                  )}
                >
                  {breach ? "Critical" : elevated ? "Elevated" : "Nominal"}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </Card>
  );
};
