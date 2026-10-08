import React from 'react'

  function DashboardCard({ icon, title, value, badge }) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6ABD11]/50 via-white/60 to-[#6ABD11]/10 p-px
        shadow-[0_16px_40px_-18px_rgba(106,189,17,0.45)] transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_24px_50px_-16px_rgba(106,189,17,0.6)]"
    >
      <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-white/80 p-7 backdrop-blur-xl">
        {/* Glow blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#6ABD11]/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Scan line on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6ABD11] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Icon orb */}
        <div className="relative mb-5 flex h-[60px] w-[60px] items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[#6ABD11]/30 blur-md" />
          <span className="absolute inset-0 rounded-full border border-[#6ABD11]/50" />
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#C8F08A] to-[#8FD43A] text-slate-900 shadow-inner">
            {icon}
          </span>
        </div>

        <p className="relative text-sm font-medium tracking-wide text-slate-500">
          {title}
        </p>

        <div className="relative mt-1 flex items-end justify-between">
          <h2 className="instrument-sans text-2xl md:text-3xl font-black tabular-nums tracking-tight text-slate-900">
            {value}
          </h2>

          <span
            className="rounded-full border border-[#6ABD11]/40 bg-[#6ABD11]/15 px-3 py-1 text-xs font-semibold text-[#4E9E05]
              shadow-[0_0_14px_-2px_rgba(106,189,17,0.55)]"
          >
            {badge}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard