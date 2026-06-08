import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { getDashboard } from "../../../Api/agentsApi";

function Linegraph({ data = [] }) {
  const formatted = data.map((item) => ({
    month: item.month,
    enquiries: item.count,
  }));


  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md host-grotesk w-full min-w-0">
      
      <h3 className="text-lg font-bold text-black instrument-sans mb-6">
        Monthly Enquiries Overview
      </h3>

      <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={formatted}>

            {/* Gradient */}
            <defs>
              <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6ABD11" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#6ABD11" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={true}
            />

            <YAxis
              tickLine={false}
              axisLine={true}
              width={38}
            />

            <Tooltip
  allowEscapeViewBox={{ x: false, y: false }}
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
              activeDot={{ r: 5 }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Linegraph;