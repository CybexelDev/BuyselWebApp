import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
const COLORS = [
  "#004D37",
  "#437149",
  "#829B66",
  "#B9C086",
  "#F9E0A2",
  "#D6E681",
  "#7FB069",
  "#5C8D76",
  "#9BC53D",
  "#C5D86D",
  "#6A994E",
  "#386641",
];

const DietChart = ({ data = [] }) => {
    const allZero = data.every((item) => item.count === 0);

const formatted = data.map((item, index) => ({
  month: item.month,
  enquiries: allZero ? 1 : item.count,
  actualCount: item.count,
  color: COLORS[index % COLORS.length],
}));

  // Custom Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { month, actualCount } = payload[0].payload;

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

          <div>
            {month}: {actualCount}
          </div>
        </div>
      );
    }

    return null;
  };

  const leftLegend = formatted.slice(0, 6);
  const rightLegend = formatted.slice(6, 12);

  return (
    <div className="flex flex-col items-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white rounded-2xl w-full h-full shadow-sm">
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full flex-1">

        {/* Left Legend */}
        <div className="flex flex-wrap justify-center md:flex-col md:justify-center md:mr-4 mb-4 md:mb-0">
          {leftLegend.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center mr-4 md:mr-0 mb-2"
            >
              <div
                className="w-3 h-3 sm:w-4 sm:h-4 rounded"
                style={{ backgroundColor: item.color }}
              />

              <span className="ml-2 text-xs sm:text-sm host-grotesk">
                {item.month}
              </span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="w-full md:flex-1 h-[260px] sm:h-[320px] md:h-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={formatted}
                 dataKey="enquiries"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius="100%"
                stroke="none"
                labelLine={false}
                startAngle={90}
                endAngle={450}
                cursor="pointer"
              >
                {formatted.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right Legend */}
        <div className="flex flex-wrap justify-center mt-4 md:mt-0 md:flex-col md:justify-center md:ml-4 order-3 md:order-none">
          {rightLegend.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center mr-4 md:mr-0 mb-2"
            >
              <div
                className="w-3 h-3 sm:w-4 sm:h-4 rounded"
                style={{ backgroundColor: item.color }}
              />

              <span className="ml-2 text-xs sm:text-sm host-grotesk">
                {item.month}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DietChart;