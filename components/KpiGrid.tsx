"use client";

import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { KpiMetric } from "@/lib/types";
import clsx from "classnames";

interface KpiGridProps {
  metrics: KpiMetric[];
}

const trendIcon = {
  up: <ArrowUpRight className="h-4 w-4" />,
  down: <ArrowDownRight className="h-4 w-4" />,
  flat: <Minus className="h-4 w-4" />,
};

export const KpiGrid = ({ metrics }: KpiGridProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-surface/80 to-surface/40 p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {metric.value}
              </p>
            </div>
            <span
              className={clsx(
                "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                metric.trend === "up" && "bg-emerald-500/10 text-emerald-400",
                metric.trend === "down" && "bg-rose-500/10 text-rose-400",
                metric.trend === "flat" && "bg-white/5 text-white/70"
              )}
            >
              {trendIcon[metric.trend]}
              {metric.change}%
            </span>
          </div>
          {metric.tooltip && (
            <p className="mt-3 text-xs text-white/60">{metric.tooltip}</p>
          )}
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border border-accent/20" />
        </article>
      ))}
    </div>
  );
};
