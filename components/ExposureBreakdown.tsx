"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { ExposureSlice } from "@/lib/types";
import { Card } from "@/components/ui/Card";

const palette = ["#40c4ff", "#6ee7b7", "#facc15", "#f472b6", "#a855f7"];

interface ExposureBreakdownProps {
  exposures: ExposureSlice[];
}

export const ExposureBreakdown = ({ exposures }: ExposureBreakdownProps) => {
  return (
    <Card title="Exposure Allocation" subtitle="Portfolio distribution by strategy cluster">
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={exposures}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {exposures.map((slice, index) => (
                <Cell key={slice.label} fill={palette[index % palette.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#121d34",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                color: "white",
              }}
              formatter={(value: number, name: string) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/70">
        {exposures.map((slice, index) => (
          <div key={slice.label} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: palette[index % palette.length] }}
            />
            {slice.label}
            <span className="ml-auto font-semibold text-white">{slice.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
