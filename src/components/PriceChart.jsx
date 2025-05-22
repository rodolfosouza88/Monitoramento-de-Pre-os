import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PriceChart({ data }) {
  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#ddd6fe" />
          <XAxis
            dataKey="day"
            stroke="#6b7280"
            tick={{ fontWeight: 600, fontSize: 14 }}
          />
          <YAxis
            stroke="#6b7280"
            domain={["auto", "auto"]}
            tickFormatter={(price) => `$${price}`}
            tick={{ fontWeight: 600, fontSize: 14 }}
          />
          <Tooltip
            formatter={(value) => [`$${value}`, "Preço"]}
            contentStyle={{
              backgroundColor: "#8b5cf6",
              borderRadius: 12,
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              boxShadow: "0 8px 16px rgba(139, 92, 246, 0.4)",
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8b5cf6"
            strokeWidth={4}
            dot={{ r: 6, fill: "#3b82f6", strokeWidth: 0 }}
            activeDot={{ r: 8, stroke: "#3b82f6", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
