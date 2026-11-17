import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { Search, LogOut, Crown, Lock, Building2, SearchX, ShieldCheck } from "lucide-react";

import Propertycard from "../../Components/PropertyCard/Propertycard";
import { getSecretPropertiesUser } from "../../Api/userApi";
import logo from "../../assets/images/logo/logo.png"; // 👈 your logo

/* =========================================================
   API — replace with your real call
   GET /secret-users/properties/   (Authorization: Bearer vipAccessToken)
   backend: return ONLY secret:true properties of the agent in the token
========================================================= */
const getVipProperties = async (agentCode, token) => {
  // const res = await axios.get(`/secret-users/properties/?agent=${agentCode}`, {
  //   headers: { Authorization: `Bearer ${token}` },
  // });
  // return res.data; // array or { properties: [...] }
  await new Promise((r) => setTimeout(r, 900));
  return [];
};

/* =========================================================
   MOTION
========================================================= */
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const rise = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 24 } },
};

const FILTERS = ["All", "Sale", "Rent","Lease"];

const VipDashboard = () => {
  const navigate = useNavigate();
  const { agentCode } = useParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

const secretUser = JSON.parse(
  localStorage.getItem("secretUser") || "null"
);
const logout = () => {
  localStorage.removeItem("secretUser");
  localStorage.removeItem("login_as");

  navigate("/vip-login", { replace: true });
};

  /* ---------- auth guard + fetch ---------- */
 useEffect(() => {
  const fetchProperties = async () => {
    if (!secretUser?.id || localStorage.getItem("login_as") !== "secret_user") {
      navigate("/vip-login", { replace: true });
      return;
    }

    try {
    
const res = await getSecretPropertiesUser();

console.log("Secret properties response:", res);

const list = Array.isArray(res)
  ? res
  : res?.results || res?.data?.results || res?.data || [];

setProperties(list);

    } catch (error) {
      console.error("Failed to load secret properties:", error);
      toast.error("Failed to load secret properties");
    } finally {
      setLoading(false);
    }
  };

  fetchProperties();
}, [navigate]);


const visible = useMemo(() => {
  const q = query.trim().toLowerCase();

  return properties.filter((p) => {
    const purpose = (
      p.purpose ||
      (p.label?.toLowerCase().includes("rent")
        ? "Rent"
        : p.label?.toLowerCase().includes("lease")
        ? "Lease"
        : p.label?.toLowerCase().includes("sale")
        ? "Sale"
        : "")
    ).toLowerCase();

    const matchFilter =
      filter === "All" ||
      purpose === filter.toLowerCase();

    const matchQuery =
      !q ||
      [p.city, p.district, p.subcategory, p.property_code, p.label]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));

    return matchFilter && matchQuery;
  });
}, [properties, query, filter]);

  return (
    <div className="min-h-screen bg-[#F8FAF5] text-slate-900">
      {/* ---------- TOP BAR ---------- */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 22 }}
        className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#F5D76E]/50 bg-[#F5D76E]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A8860F] sm:flex">
              <Crown size={12} /> VIP Member
            </span>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={logout}
              className="flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100"
            >
              <LogOut size={15} /> Logout
            </motion.button>
          </div>
        </div>
      </motion.header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-8">
        {/* ---------- HERO ---------- */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 22, delay: 0.1 }}
          className="relative overflow-hidden rounded-[32px] bg-[#0E150B] p-7 sm:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(106,189,17,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(106,189,17,0.08) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse at 80% 50%, black 20%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at 80% 50%, black 20%, transparent 75%)",
            }}
          />
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#6ABD11]/30 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#F5D76E]/15 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-[#F5D76E]/30 bg-[#F5D76E]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5D76E]">
                <ShieldCheck size={12} /> Private Collection
                <motion.span
                  className="absolute inset-y-0 w-10 -skew-x-12 bg-white/30"
                  initial={{ left: "-30%" }}
                  animate={{ left: "130%" }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
              </span>
              <h1 className="mt-4 text-3xl font-bold text-white host-grotesk sm:text-4xl">
                Exclusive Properties
              </h1>
              <p className="mt-2 max-w-md text-sm text-white/50">
                Hand-picked listings shared only with approved members. Not visible anywhere else.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 16 }}
              className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6ABD11] to-[#9BE34C] text-white shadow-lg shadow-[#6ABD11]/30">
                <Lock size={22} />
              </div>
              <div>
                <p className="text-3xl font-bold leading-none text-white">{loading ? "–" : properties.length}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">Secret Listings</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ---------- TOOLBAR ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="relative flex w-fit gap-1 rounded-2xl bg-white p-1 shadow-sm">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative z-10 rounded-xl px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  filter === f ? "text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="vip-filter-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-[#6ABD11] to-[#9BE34C] shadow-md shadow-[#6ABD11]/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city, type, code"
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#6ABD11]/60 focus:ring-2 focus:ring-[#6ABD11]/25 sm:w-72"
            />
          </div>
        </motion.div>

        {/* ---------- LIST ---------- */}
        <div className="mt-6">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 animate-pulse rounded-3xl bg-slate-200/60" />
              ))}
            </div>
          ) : visible.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center rounded-3xl border border-dashed border-slate-200 bg-white py-20 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                {properties.length === 0 ? <Building2 size={28} /> : <SearchX size={28} />}
              </div>
              <p className="mt-4 text-lg font-semibold host-grotesk">
                {properties.length === 0 ? "No secret properties yet" : "No matches found"}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {properties.length === 0
                  ? "Your agent hasn't shared any private listings with you yet."
                  : "Try a different search or filter."}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={filter + query} // replays the stagger on filter/search change
              variants={grid}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {visible.map((property) => (
                  <motion.div key={property.id} variants={rise} whileHover={{ y: -6 }} className="relative">
                    <span className="absolute left-3 top-3 z-20 flex items-center gap-1 rounded-full bg-[#0E150B]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F5D76E] backdrop-blur-md">
                      <Crown size={10} /> VIP
                    </span>

<Propertycard
  property={property}
  hideWishlist={true}
/>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default VipDashboard;