import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

function Linegraph() {
  const chartData = [
    { month: "Jan", enquiries: 10 },
    { month: "Feb", enquiries: 20 },
    { month: "Mar", enquiries: 15 },
    { month: "Apr", enquiries: 30 },
    { month: "May", enquiries: 25 },
    { month: "Jun", enquiries: 40 },
  ];

  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md host-grotesk">
      <h3 className="text-lg font-semibold mb-6 text-gray-700">
        Monthly Enquiries Overview
      </h3>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6ABD11" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#6ABD11" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tickLine={false}
            />

            <YAxis
            tickLine={false}/>


            <Tooltip
  wrapperStyle={{ outline: "none" }}
  contentStyle={{
    padding: "4px 6px" ,
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #eee"
  }}
  labelStyle={{ marginBottom: "-2px" }}
/>

            <Area
              type="monotone"
              dataKey="enquiries"
              stroke="#6ABD11"
              strokeWidth={3}
              fill="url(#colorEnquiries)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Linegraph;