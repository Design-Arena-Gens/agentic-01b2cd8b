"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";
import type { EquityPoint } from "@/lib/types";

interface PerformanceChartProps {
  data: EquityPoint[];
}

export const PerformanceChart = ({ data }: PerformanceChartProps) => {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 16, left: 0, right: 0, bottom: 8 }}>
          <defs>
            <linearGradient id="equityGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="10%" stopColor="#40c4ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#40c4ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ffffff0f" strokeDasharray="5 5" />
          <XAxis
            dataKey="timestamp"
            stroke="#ffffff40"
            tickFormatter={(tick) => format(new Date(tick), "HH:mm")}
          />
          <YAxis
            stroke="#ffffff40"
            tickFormatter={(tick) => `$${(tick / 1_000).toFixed(0)}k`}
            width={75}
          />
          <Tooltip
            contentStyle={{
              background: "#121d34",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              color: "white",
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Net Liq"]}
            labelFormatter={(label) => format(new Date(label), "MMM d, HH:mm")}
          />
          <Area
            type="monotone"
            dataKey="equity"
            stroke="#40c4ff"
            strokeWidth={2}
            fill="url(#equityGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
