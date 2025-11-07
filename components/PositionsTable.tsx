import type { PositionSnapshot } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import clsx from "classnames";

interface PositionsTableProps {
  positions: PositionSnapshot[];
}

export const PositionsTable = ({ positions }: PositionsTableProps) => {
  return (
    <Card title="Live Positions" subtitle="Mark-to-market reconciled every 5 seconds">
      <div className="overflow-hidden rounded-xl border border-white/5">
        <table className="min-w-full divide-y divide-white/5">
          <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/60">
            <tr>
              <th className="px-4 py-3 text-left">Symbol</th>
              <th className="px-4 py-3 text-left">Side</th>
              <th className="px-4 py-3 text-right">Size</th>
              <th className="px-4 py-3 text-right">Avg Price</th>
              <th className="px-4 py-3 text-right">Mark</th>
              <th className="px-4 py-3 text-right">PnL</th>
              <th className="px-4 py-3 text-right">PnL%</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {positions.map((position) => (
              <tr key={position.symbol} className="bg-surface/60">
                <td className="px-4 py-3 font-medium text-white">{position.symbol}</td>
                <td className="px-4 py-3">
                  <span
                    className={clsx(
                      "rounded-full px-3 py-1 text-xs font-semibold",
                      position.side === "LONG"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-rose-500/15 text-rose-300"
                    )}
                  >
                    {position.side}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">{position.size.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">${position.averagePrice.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">${position.markPrice.toLocaleString()}</td>
                <td className="px-4 py-3 text-right text-emerald-400">
                  ${position.pnl.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right text-emerald-400">
                  {position.pnlPct.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
