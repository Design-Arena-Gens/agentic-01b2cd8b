import type { StrategyPerformance } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import clsx from "classnames";

interface StrategyTableProps {
  strategies: StrategyPerformance[];
}

export const StrategyTable = ({ strategies }: StrategyTableProps) => {
  return (
    <Card title="Strategy Performance" subtitle="PnL and risk envelopes across autonomous pods">
      <div className="overflow-hidden rounded-xl border border-white/5">
        <table className="min-w-full divide-y divide-white/5">
          <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/60">
            <tr>
              <th className="px-4 py-3 text-left">Strategy</th>
              <th className="px-4 py-3 text-right">PnL</th>
              <th className="px-4 py-3 text-right">Δ 24h</th>
              <th className="px-4 py-3 text-right">Sharpe</th>
              <th className="px-4 py-3 text-right">Win%</th>
              <th className="px-4 py-3 text-right">Max DD%</th>
              <th className="px-4 py-3 text-center">State</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {strategies.map((strategy) => (
              <tr key={strategy.id} className="bg-surface/60">
                <td className="px-4 py-3 font-medium text-white">{strategy.name}</td>
                <td className="px-4 py-3 text-right text-emerald-400">
                  ${strategy.pnl.toLocaleString()}
                </td>
                <td
                  className={clsx(
                    "px-4 py-3 text-right",
                    strategy.pnlChange >= 0 ? "text-emerald-400" : "text-rose-400"
                  )}
                >
                  {strategy.pnlChange >= 0 ? "+" : ""}
                  {strategy.pnlChange.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-right">{strategy.sharpe.toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{strategy.winRate.toFixed(1)}%</td>
                <td className="px-4 py-3 text-right">{strategy.maxDrawdown.toFixed(1)}%</td>
                <td className="px-4 py-3">
                  <span
                    className={clsx(
                      "mx-auto block w-fit rounded-full px-3 py-1 text-xs font-medium",
                      strategy.active ? "bg-emerald-500/10 text-emerald-300" : "bg-white/10 text-white/60"
                    )}
                  >
                    {strategy.active ? "Live" : "Standby"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
