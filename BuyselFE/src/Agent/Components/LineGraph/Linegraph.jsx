import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Linegraph({ data = [], className = "mt-10" }) {
  const formatted = data.map((item) => ({
    month: item.month,
    enquiries: item.count,
  }));

  const total = formatted.reduce((a, b) => a + (Number(b.enquiries) || 0), 0);
  const peak = formatted.reduce(
    (best, cur) => ((Number(cur.enquiries) || 0) > (best?.enquiries ?? -1) ? cur : best),
    null
  );
  const avg = formatted.length ? (total / formatted.length).toFixed(1) : "0";
  const stats = [
    { label: "Total enquiries", value: total },
    { label: "Peak month", value: peak && peak.enquiries > 0 ? peak.month : "—" },
    { label: "Monthly average", value: avg },
  ];

  return (
    <div
      className={`host-grotesk group relative ${className} w-full min-w-0 overflow-hidden rounded-3xl
        bg-gradient-to-br from-[#6ABD11]/50 via-white/60 to-[#6ABD11]/10 p-px
        shadow-[0_20px_60px_-20px_rgba(106,189,17,0.35)]`}
    >
      <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-white/80 p-6 backdrop-blur-xl">
        {/* HUD corner brackets */}
        <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-4 w-4 rounded-tl-md border-l-2 border-t-2 border-[#6ABD11]/60" />
        <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-4 w-4 rounded-tr-md border-r-2 border-t-2 border-[#6ABD11]/60" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-bl-md border-b-2 border-l-2 border-[#6ABD11]/60" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 rounded-br-md border-b-2 border-r-2 border-[#6ABD11]/60" />

        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#6ABD11]/15 blur-3xl"
        />

        <div className="relative mb-6 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6ABD11] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6ABD11] shadow-[0_0_10px_2px_rgba(106,189,17,0.7)]" />
          </span>
          <h3 className="instrument-sans text-lg font-bold tracking-tight text-slate-900">
            Monthly Enquiries Overview
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-[#6ABD11]/40 to-transparent" />
        </div>

        <div className="relative h-[250px] w-full overflow-hidden sm:h-[280px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formatted}>
              {/* Gradient + neon glow */}
              <defs>
                <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6ABD11" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#6ABD11" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="strokeEnquiries" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0%" stopColor="#8FD43A" />
  <stop offset="100%" stopColor="#B5E86B" />
</linearGradient>
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <CartesianGrid
                stroke="#6ABD11"
                strokeOpacity={0.12}
                strokeDasharray="3 6"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={true}
                stroke="#6ABD11"
                strokeOpacity={0.35}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <YAxis
                tickLine={false}
                axisLine={true}
                width={38}
                stroke="#6ABD11"
                strokeOpacity={0.35}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <Tooltip
                allowEscapeViewBox={{ x: false, y: false }}
                wrapperStyle={{ outline: "none" }}
                cursor={{
                  stroke: "#6ABD11",
                  strokeWidth: 1,
                  strokeDasharray: "4 4",
                }}
                contentStyle={{
                  padding: "6px 10px",
                  backgroundColor: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  border: "1px solid rgba(106,189,17,0.45)",
                  boxShadow: "0 8px 24px -8px rgba(106,189,17,0.45)",
                  fontSize: "12px",
                }}
                labelStyle={{ marginBottom: "-2px", color: "#0f172a", fontWeight: 700 }}
                itemStyle={{ color: "#4E9E05" }}
              />

              <Area
                type="monotone"
                dataKey="enquiries"
                stroke="url(#strokeEnquiries)"
                strokeWidth={3}
                fill="url(#colorEnquiries)"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#fff",
                  stroke: "#6ABD11",
                  strokeWidth: 3,
                }}
                style={{ filter: "url(#neonGlow)" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Insight strip */}
        <div className="relative mt-5 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#6ABD11]/20 bg-[#6ABD11]/[0.06] px-4 py-3"
            >
              <p className="text-xs text-slate-500">{s.label}</p>
              <p className="instrument-sans text-xl font-black tabular-nums text-slate-900">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Linegraph;