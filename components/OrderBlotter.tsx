import type { OrderSnapshot } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { formatDistanceToNow } from "date-fns";
import clsx from "classnames";

interface OrderBlotterProps {
  orders: OrderSnapshot[];
}

const STATUS_COLORS: Record<OrderSnapshot["status"], string> = {
  filled: "bg-emerald-500/10 text-emerald-300",
  working: "bg-sky-500/10 text-sky-300",
  canceled: "bg-white/10 text-white/60",
};

export const OrderBlotter = ({ orders }: OrderBlotterProps) => {
  return (
    <Card title="Order Blotter" subtitle="Venue synchronized execution layer">
      <div className="space-y-4">
        {orders.map((order) => (
          <article
            key={order.id}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-surface/60 p-4"
          >
            <div>
              <p className="text-sm text-white/50">{order.id}</p>
              <h3 className="text-lg font-semibold text-white">{order.symbol}</h3>
              <p className="text-sm text-white/60">
                {order.side} · {order.size.toLocaleString()} @ ${order.price.toLocaleString()} · {order.venue}
              </p>
            </div>
            <div className="text-right text-sm text-white/60">
              <p>{formatDistanceToNow(new Date(order.submittedAt), { addSuffix: true })}</p>
              <span className={clsx("mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium", STATUS_COLORS[order.status])}>
                {order.status.toUpperCase()}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
};
