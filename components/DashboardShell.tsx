"use client";

import { AlertCircle, Loader2 } from "lucide-react";
import { useDashboardData } from "@/hooks/useDashboardData";
import { KpiGrid } from "@/components/KpiGrid";
import { Card } from "@/components/ui/Card";
import { PerformanceChart } from "@/components/PerformanceChart";
import { StrategyTable } from "@/components/StrategyTable";
import { PositionsTable } from "@/components/PositionsTable";
import { OrderBlotter } from "@/components/OrderBlotter";
import { TradeFeed } from "@/components/TradeFeed";
import { ExposureBreakdown } from "@/components/ExposureBreakdown";
import { LatencyGrid } from "@/components/LatencyGrid";
import { RiskLimits } from "@/components/RiskLimits";
import { AlertStream } from "@/components/AlertStream";
import type { DashboardSnapshot } from "@/lib/types";

interface DashboardShellProps {
  initial: DashboardSnapshot;
}

export const DashboardShell = ({ initial }: DashboardShellProps) => {
  const { snapshot, isLoading, isError, refresh } = useDashboardData(initial);

  if (!snapshot && isLoading) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center gap-3 text-white/70">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span>Loading telemetry…</span>
      </div>
    );
  }

  if (!snapshot || isError) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center gap-4">
        <AlertCircle className="h-10 w-10 text-rose-400" />
        <p className="text-sm text-white/70">Unable to fetch dashboard snapshot.</p>
        <button
          onClick={() => refresh()}
          className="rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent/40"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-white">Argus Trading Ops</h1>
          <p className="text-sm text-white/60">
            Command center for autonomous trading bots · Updated {new Date(snapshot.generatedAt).toLocaleTimeString()}
          </p>
        </div>
        <button
          onClick={() => refresh()}
          className="rounded-full border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
        >
          Sync Now
        </button>
      </header>

      <KpiGrid metrics={snapshot.kpis} />

      <Card title="Equity Curve" subtitle="Net liquidity trajectory across the last 24h">
        <PerformanceChart data={snapshot.equityCurve} />
      </Card>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-6">
          <StrategyTable strategies={snapshot.strategies} />
          <PositionsTable positions={snapshot.positions} />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <OrderBlotter orders={snapshot.orders} />
          <TradeFeed trades={snapshot.trades} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ExposureBreakdown exposures={snapshot.exposures} />
        <LatencyGrid metrics={snapshot.latency} />
        <RiskLimits metrics={snapshot.risk} />
      </div>

      <AlertStream alerts={snapshot.alerts} />
    </div>
  );
};
