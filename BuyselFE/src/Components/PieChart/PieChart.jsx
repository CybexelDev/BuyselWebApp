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
          }}
        >
          <div style={{ fontWeight: "bold" }}>Enquiries</div>
          <div>{label}: {enquiries}</div>
        </div>
      );
    }
    return null;
  };

  const leftLegend = data.slice(0, 6);
  const rightLegend = data.slice(6, 12);

  return (
    <div className="flex flex-col items-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white rounded-2xl w-full shadow-sm">
      
      <div className="flex flex-col md:flex-row items-center w-full">

        {/* Legend (Mobile Top / Desktop Left) */}
        <div className="flex flex-wrap justify-center md:flex-col md:justify-center md:mr-4 mb-4 md:mb-0">
          {leftLegend.map((item, idx) => (
            <div key={idx} className="flex items-center mr-4 md:mr-0 mb-2">
              <div
                className="w-3 h-3 sm:w-4 sm:h-4 rounded"
                style={{ backgroundColor: item.color }}
              />
              <span className="ml-2 text-xs sm:text-sm host-grotesk">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="w-full md:flex-1 h-[150px] sm:h-[200px] md:h-[210px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                outerRadius="100%"
                data={data}
                dataKey="enquiries"
                nameKey="label"
                cx="50%"
                cy="50%"
                stroke="none"
                labelLine={false}
                startAngle={90}
                endAngle={450}
                cursor="pointer"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right Legend (only desktop) */}
        <div className="flex flex-wrap justify-center mt-4 md:mt-0 md:flex-col md:justify-center md:ml-4 order-3 md:order-none">
  {rightLegend.map((item, idx) => (
    <div key={idx} className="flex items-center mr-4 md:mr-0 mb-2">
      <div
        className="w-3 h-3 sm:w-4 sm:h-4 rounded"
        style={{ backgroundColor: item.color }}
      />
      <span className="ml-2 text-xs sm:text-sm host-grotesk">
        {item.label}
      </span>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default DietChart;