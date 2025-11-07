import type { TradeEvent } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { format } from "date-fns";

interface TradeFeedProps {
  trades: TradeEvent[];
}

export const TradeFeed = ({ trades }: TradeFeedProps) => {
  return (
    <Card
      title="Recent Fills"
      subtitle="Confirmed trade executions across venues"
      action={<span className="text-xs text-white/50">Auto-synced</span>}
    >
      <ul className="space-y-3 text-sm">
        {trades.map((trade) => (
          <li
            key={trade.id}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-surface/60 px-4 py-3"
          >
            <div>
              <p className="font-semibold text-white">{trade.symbol}</p>
              <p className="text-xs text-white/60">
                {trade.strategy} · {trade.side} {trade.size.toLocaleString()} @ ${trade.price.toLocaleString()}
              </p>
            </div>
            <div className="text-right text-xs text-white/50">
              <p>{format(new Date(trade.timestamp), "HH:mm:ss")}</p>
              <p>Fee ${trade.fee.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};
