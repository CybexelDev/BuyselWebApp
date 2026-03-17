import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const DietChart = () => {
  const data = [
    { label: "Jan", enquiries: 10, color: "#004D37" },
    { label: "Feb", enquiries: 20, color: "#437149" },
    { label: "Mar", enquiries: 30, color: "#829B66" },
    { label: "Apr", enquiries: 25, color: "#B9C086" },
    { label: "May", enquiries: 14, color: "#F9E0A2" },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { label, enquiries } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "8px 12px",
            borderRadius: "12px",
            border: "1px solid #eee",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            fontFamily: "serif",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "3px" }}>Enquiries</div>
          <div>{label}: {enquiries}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center py-0 px-6 bg-[#ffffff] rounded-3xl w-full max-w-xl shadow-sm ">
      <div className="w-full h-[270px] ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="enquiries"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={100}
              stroke="none"
              labelLine={false}
              startAngle={90}
              endAngle={450}
              cursor="pointer"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DietChart;