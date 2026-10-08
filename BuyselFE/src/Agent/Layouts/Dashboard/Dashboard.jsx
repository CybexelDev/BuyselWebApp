import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaPlus, FaClipboardList, FaEnvelope, FaCrown, FaUserCircle, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import property from "../../../assets/images/profile/property.svg";
import apartment from "../../../assets/images/icons/apartment.svg";
import { getDashboard } from "../../../Api/agentsApi";
import DashboardCard from "../../../Components/DashboardCrad/DashboardCard";
import Linegraph from "../../Components/LineGraph/Linegraph";
/* ═════════ Sub-components (all in this file) ═════════ */

/* ── Edit these paths to match your router ── */
const ROUTES = {
    home: "/",
  addProperty: "/agent/property",
  enquiries: "/agent/user-enquiry",
  inbox: "/agent/inbox",
  plans: "/agent/plans",
};
const USER_SITE_URL = "https://buysel.in";

const shell =
  "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6ABD11]/50 via-white/60 to-[#6ABD11]/10 p-px shadow-[0_16px_40px_-18px_rgba(106,189,17,0.45)]";
const inner = "relative h-full rounded-[calc(1.5rem-1px)] bg-white/80 p-6 backdrop-blur-xl";

/* ───────────── Hero banner with neon skyline ───────────── */
function HeroBanner({ properties = 0, remaining = 0 }) {
  const navigate = useNavigate();
  const towers = [
    [10, 70], [34, 40], [58, 55], [82, 20], [106, 48], [130, 30], [154, 62], [178, 38], [202, 66],
  ];

  /* ── Typewriter (letter by letter, type → hold → delete → loop) ── */
  const HEADING = "Your property, live and in focus.";
  const LIVE_START = HEADING.indexOf("live");
  const LIVE_END = LIVE_START + 4;

  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;

    let delay = deleting ? 35 : 75;
    if (!deleting && count === HEADING.length) delay = 2000; // hold full line
    if (deleting && count === 0) delay = 500; // pause before retyping

    const t = setTimeout(() => {
      if (!deleting && count === HEADING.length) setDeleting(true);
      else if (deleting && count === 0) setDeleting(false);
      else setCount((c) => c + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(t);
  }, [count, deleting, reduced]);

  const typed = reduced ? HEADING : HEADING.slice(0, count);
  const before = typed.slice(0, LIVE_START);
  const live = typed.slice(LIVE_START, LIVE_END);
  const after = typed.slice(LIVE_END);

  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C1F06] via-[#12300A] to-[#1F4A0B] p-7 text-white shadow-[0_30px_70px_-25px_rgba(106,189,17,0.6)] md:p-9">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(166,234,60,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(166,234,60,0.09)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(to_left,#000,transparent_80%)]"
      />
      <div aria-hidden className="absolute -right-10 -top-16 h-72 w-72 rounded-full bg-[#6ABD11]/40 blur-[90px]" />

      {/* Skyline (faint) */}
      <svg
        aria-hidden
        viewBox="0 0 230 90"
        className="pointer-events-none absolute bottom-0 right-4 hidden h-40 w-auto sm:block md:right-10 md:h-48"
        fill="none"
      >
        {towers.map(([x, h], i) => (
          <g key={x}>
            <rect
              x={x}
              y={90 - h}
              width="18"
              height={h}
              rx="2"
              stroke="#A6EA3C"
              strokeOpacity={0.25}
              fill="rgba(106,189,17,0.05)"
            />
            {Array.from({ length: Math.floor(h / 12) }).map((_, r) => (
              <line
                key={r}
                x1={x + 4}
                x2={x + 14}
                y1={90 - h + 8 + r * 12}
                y2={90 - h + 8 + r * 12}
                stroke="#A6EA3C"
                strokeOpacity={i % 2 ? 0.18 : 0.1}
              />
            ))}
          </g>
        ))}
        <line x1="0" x2="230" y1="90" y2="90" stroke="#A6EA3C" strokeOpacity="0.25" />
      </svg>

      <div className="relative max-w-xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#A6EA3C]/40 bg-white/5 px-3 py-1 text-xs font-medium text-[#C8F08A] backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#A6EA3C] shadow-[0_0_10px_2px_rgba(166,234,60,0.8)]" />
          Agent workspace online
        </span>

        {/* Typewriter heading */}
        <h2
          aria-label={HEADING}
          className="instrument-sans relative mt-4 text-3xl font-black leading-tight tracking-tight md:text-4xl"
        >
          {/* invisible full text reserves the height so nothing jumps */}
          <span aria-hidden  className="invisible block">
            {HEADING}
          </span>
          {/* visible typed text on top */}
          <span aria-hidden className="absolute  inset-x-0 top-0 block">
            {before}
            <span className="text-[#A6EA3C]">{live}</span>
            {after}
            <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-pulse rounded-full bg-[#A6EA3C]" />
          </span>
        </h2>

        <p className="mt-3 text-sm host-grotesk text-white/70">
          {properties} {properties === 1 ? "property" : "properties"} listed ·{" "}
          {remaining} {remaining === 1 ? "listing" : "listings"} left on your plan.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
  <button
    onClick={() => navigate(ROUTES.addProperty)}
    className="flex items-center cursor-pointer host-grotesk gap-2 rounded-xl bg-[#6ABD11] px-5 py-2.5 text-[14px] font-bold text-[#0C1F06] shadow-[0_0_24px_rgba(106,189,17,0.7)] transition hover:bg-[#8FD43A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6EA3C]"
  >
    <FaPlus size={12} /> Add property
  </button>

  <button
  onClick={() => navigate(ROUTES.home)}
  className="flex cursor-pointer items-center gap-2 host-grotesk rounded-xl border border-white/25 bg-white/5 px-5 py-2.5 text-[14px] font-semibold text-white backdrop-blur transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6EA3C]"
>
    Return to Home
  </button>
</div>
      </div>
    </div>
  );
}

/* ───────────── Listing usage ring ───────────── */
function ListingUsage({ used = 0, remaining = 0, className = "" }) {
  const navigate = useNavigate();
  const limit = used + remaining;
  const pct = limit ? Math.min(100, Math.round((used / limit) * 100)) : 0;
  const R = 62;
  const C = 2 * Math.PI * R;

  return (
    <div className={`${shell} ${className}`}>
      <div className={`${inner} flex flex-col items-center`}>
        <h3 className="instrument-sans   text-lg font-bold text-slate-900">Listing usage</h3>
        <p className=" text-sm host-grotesk text-slate-500">Plan capacity in use</p>

        <div className="relative my-12 h-44 w-44">
          <div aria-hidden className="absolute inset-3 rounded-full bg-[#6ABD11]/20 blur-2xl" />
          <svg viewBox="0 0 150 150" className="relative h-full w-full -rotate-90">
            <circle cx="75" cy="75" r={R} fill="none" stroke="#6ABD11" strokeOpacity="0.15" strokeWidth="12" />
            <motion.circle
              cx="75" cy="75" r={R} fill="none" stroke="url(#ringGrad)" strokeWidth="12" strokeLinecap="round"
              strokeDasharray={C}
              initial={{ strokeDashoffset: C }}
              animate={{ strokeDashoffset: C - (C * pct) / 100 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 6px rgba(106,189,17,0.8))" }}
            />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4E9E05" />
                <stop offset="100%" stopColor="#A6EA3C" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="instrument-sans text-4xl font-black tabular-nums text-slate-900">{pct}%</span>
            <span className="text-xs text-slate-500">{used} of {limit} used</span>
          </div>
        </div>

        <button
          onClick={() => navigate(ROUTES.plans)}
          className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-xl border border-[#6ABD11]/40 bg-[#6ABD11]/10 py-2.5 text-sm font-semibold text-[#3F8004] transition hover:bg-[#6ABD11]/20"
        >
          <FaCrown size={13} /> Upgrade plan
        </button>
      </div>
    </div>
  );
}

/* ───────────── Recent enquiries (optional backend field: recent_enquiries) ───────────── */
function RecentEnquiries({ items = [], className = "" }) {
  const navigate = useNavigate();
  const list = Array.isArray(items) ? items.slice(0, 4) : [];

  return (
    <div className={`${shell} ${className}`}>
      <div className={inner}>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="instrument-sans host-grotesk text-lg font-bold text-slate-900">Recent enquiries</h3>
            <p className="text-sm host-grotesk text-slate-500">Latest buyers asking about your listings</p>
          </div>
          <button onClick={() => navigate(ROUTES.enquiries)} className="text-sm host-grotesk cursor-pointer font-semibold text-[#4E9E05] hover:underline">
            View all
          </button>
        </div>

        {list.length === 0 ? (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#6ABD11]/40 bg-[#6ABD11]/[0.04] px-6 py-10 text-center">
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#6ABD11]/15 text-[#4E9E05]">
              <FaEnvelope />
            </span>
            <p className="font-semibold host-grotesk text-slate-800">No enquiries yet</p>
            <p className="mt-1 max-w-xs host-grotesk text-sm text-slate-500">
              New enquiries appear here as soon as a buyer contacts you about a property.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-[#6ABD11]/15">
            {list.map((e, i) => (
              <li key={e.id ?? i} className="flex items-center gap-3 py-3">
                <FaUserCircle className="shrink-0 text-3xl text-[#6ABD11]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">{e.name ?? e.user_name ?? "New enquiry"}</p>
                  <p className="truncate text-xs text-slate-500">{e.property_title ?? e.property ?? "Property enquiry"}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#6ABD11]/15 px-2.5 py-1 text-xs font-medium text-[#3F8004]">
                  {e.created_at ? new Date(e.created_at).toLocaleDateString() : "New"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ───────────── Quick actions ───────────── */
// function QuickActions({ className = "" }) {
//   const navigate = useNavigate();
//   const actions = [
//     { label: "Add property", hint: "Publish a new listing", icon: <FaPlus />, to: ROUTES.addProperty },
//     { label: "Enquiries", hint: "Reply to buyers", icon: <FaClipboardList />, to: ROUTES.enquiries },
//     { label: "Inbox", hint: "Read your messages", icon: <FaEnvelope />, to: ROUTES.inbox },
//     { label: "Plans", hint: "Raise your listing limit", icon: <FaCrown />, to: ROUTES.plans },
//   ];
//   return (
//     <div className={`${shell} ${className}`}>
//       <div className={inner}>
//         <h3 className="instrument-sans mb-4 text-lg font-bold text-slate-900">Quick actions</h3>
//         <div className="grid grid-cols-2 gap-3">
//           {actions.map((a) => (
//             <button
//               key={a.label}
//               onClick={() => navigate(a.to)}
//               className="group rounded-2xl border border-[#6ABD11]/25 bg-white/70 p-4 text-left transition hover:-translate-y-0.5 hover:border-[#6ABD11] hover:shadow-[0_10px_24px_-10px_rgba(106,189,17,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6ABD11]"
//             >
//               <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#C8F08A] to-[#8FD43A] text-slate-900 transition group-hover:shadow-[0_0_16px_rgba(106,189,17,0.8)]">
//                 {a.icon}
//               </span>
//               <p className="text-sm font-bold text-slate-900">{a.label}</p>
//               <p className="text-xs text-slate-500">{a.hint}</p>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// Drop-in replacement: same props (icon, title, value, badge)




/* ═════════ Page ═════════ */

function AgentDashboard() {
  const [dashboard, setDashboard] = useState({
    total_properties: 0,
    total_enquiries: 0,
    remaining_listings: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDashboard();
        if (res) {
          setDashboard(res);
        }
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalProperties = dashboard?.total_properties ?? 0;
  const totalEnquiries = dashboard?.total_enquiries ?? 0;
  const remainingListings = dashboard?.remaining_listings ?? 0;
    const DeletedProperties = dashboard?.deleted_property_count || 0;


  const data = [
    {
      title: "Total Properties",
      value: totalProperties,
      icon: (
        <img src={apartment} alt="apartment" className="w-[20px] h-[20px]" />
      ),
      badge: "+2%",
    },
    {
      title: "Total Enquiries",
      value: totalEnquiries,
      icon: <IoIosMail size={24} />,
      badge: "+5%",
    },
    {
      title: "Remaining Listings",
      value: remainingListings,
      icon: (
        <img
          src={property}
          alt="property"
          className="w-5 h-5 xl:w-[27px] xl:h-[27px]"
        />
      ),
      badge: "limit",
    },
    {
  title: "Deleted Properties",
  value: DeletedProperties,
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
<path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"></path>
</svg>
  ),
  badge: "deleted",
},
  ];

  return (
    <div className="relative isolate flex min-h-screen bg-[#F2F5F0]">
      {/* ── Futuristic backdrop (clipped here, so it can't create a scrollbar) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0
            bg-[linear-gradient(to_right,rgba(106,189,17,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(106,189,17,0.07)_1px,transparent_1px)]
            bg-[size:44px_44px]
            [mask-image:radial-gradient(ellipse_80%_70%_at_60%_20%,#000_40%,transparent_100%)]"
        />
        <div className="absolute -top-40 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#6ABD11]/20 blur-[110px]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#9BE22F]/15 blur-[120px]" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-w-0 py-3 px-6 md:py-5 md:px-10 lg:py-6 lg:px-12 mb-22 sm:mb-0">
        <Topbar />

        <div className="mt-6">
          <HeroBanner properties={totalProperties} remaining={remainingListings} />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#6ABD11]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6ABD11] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6ABD11] shadow-[0_0_10px_2px_rgba(106,189,17,0.7)]" />
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#6ABD11] to-transparent" />
            Data Overview
          </div>

          <h1 className="instrument-sans mb-8 text-4xl font-black tracking-tight text-slate-900 md:text-4xl">
            Data{" "}
            <span className="bg-gradient-to-r from-[#4E9E05] via-[#6ABD11] to-[#A6EA3C] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(106,189,17,0.35)]">
              Overview
            </span>
          </h1>
        </motion.div>

        <div className="grid  gap-6 host-grotesk grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <DashboardCard
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              badge={item.badge}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Linegraph
            className="lg:col-span-2"
            data={dashboard?.monthly_enquiries || []}
          />
          <ListingUsage used={totalProperties} remaining={remainingListings} />
        </div>

        <div className="mt-6">
          <RecentEnquiries
            className="lg:col-span-2"
            items={dashboard?.recent_enquiries || []}
          />
          {/* <QuickActions /> */}
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;