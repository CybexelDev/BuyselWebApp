import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { secretUserLogin } from "../../Api/userApi";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  ArrowRight,
  Loader2,
  ShieldCheck,
  ArrowLeft,
  Crown,
} from "lucide-react";

import logo from "../../assets/images/logo/logo.png";

/* =========================================================
   MOTION
========================================================= */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
};
const rise = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

const Orb = ({ className, duration, x, y }) => (
  <motion.div
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    animate={{ x, y, scale: [1, 1.15, 1] }}
    transition={{ duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
  />
);

/* =========================================================
   PAGE
========================================================= */
const VipLoginLayout = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const agentCode = params.get("agent");

  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // floating particles (stable between renders)
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 6,
        duration: 9 + Math.random() * 8,
      })),
    []
  );

  const validate = () => {
    const e = {};

    if (!form.username.trim()) e.username = "Username is required";
    if (!form.password.trim()) e.password = "Password is required";

    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleLogin = async (ev) => {
    ev?.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await secretUserLogin(form.username.trim(), form.password);

      if (res?.error) {
        toast.error(Array.isArray(res.error) ? res.error.join(", ") : res.error);
        return;
      }

      localStorage.setItem("secretUser", JSON.stringify(res.secret_user));
      localStorage.setItem("login_as", res.login_as);

      setSuccess(true);
      toast.success("Welcome, VIP access granted");

      setTimeout(() => navigate("/secret-properties"), 1100);
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Invalid username or password"
      );
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-slate-50 py-3.5 pl-11 pr-4 text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:ring-2";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAF5] px-4 py-10">
      {/* ---------- BACKGROUND LAYERS ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(106,189,17,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(106,189,17,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <Orb className="-left-24 -top-24 h-[420px] w-[420px] bg-[#6ABD11]/20" duration={9} x={[0, 60]} y={[0, 40]} />
      <Orb className="-bottom-32 -right-20 h-[460px] w-[460px] bg-[#9BE34C]/20" duration={11} x={[0, -50]} y={[0, -50]} />
      <Orb className="left-1/2 top-1/3 h-[260px] w-[260px] -translate-x-1/2 bg-[#F5D76E]/20" duration={13} x={[-30, 30]} y={[0, 30]} />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="pointer-events-none absolute bottom-0 rounded-full bg-[#6ABD11]/40"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-100vh", opacity: [0, 0.7, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* ---------- BACK ---------- */}
      <motion.button
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        onClick={() => navigate(-1)}
        className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
      >
        <ArrowLeft size={15} /> Back
      </motion.button>

      {/* ---------- CARD ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* static gradient border */}
        <div className="rounded-[32px] bg-gradient-to-br from-[#6ABD11]/60 via-[#F5D76E]/40 to-[#9BE34C]/60 p-[1.5px] shadow-[0_30px_80px_-25px_rgba(30,70,10,0.35)]">
          <div className="relative overflow-hidden rounded-[30px] bg-white p-8 sm:p-10">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-[#6ABD11]/15 blur-3xl" />

            <AnimatePresence mode="wait">
              {success ? (
                /* ---------- SUCCESS STATE ---------- */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#6ABD11] to-[#9BE34C] text-white shadow-[0_10px_40px_rgba(106,189,17,0.5)]"
                  >
                    <ShieldCheck size={38} />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900 host-grotesk">Access granted</h3>
                  <p className="mt-1 text-sm text-slate-500">Unlocking VIP properties…</p>
                </motion.div>
              ) : (
                /* ---------- FORM ---------- */
                <motion.form
                  key="form"
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleLogin}
                  noValidate
                  className="relative"
                >
                  {/* logo */}
                  <motion.div variants={rise} className="flex justify-center">
                    <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
                  </motion.div>

                  {/* badge */}
                  <motion.div variants={rise} className="mt-5 flex justify-center">
                    <span className="relative flex items-center gap-1.5 overflow-hidden rounded-full border border-[#F5D76E]/60 bg-[#F5D76E]/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8860F]">
                      <Crown size={12} /> VIP Access
                      <motion.span
                        className="absolute inset-y-0 w-10 -skew-x-12 bg-white/70"
                        initial={{ left: "-30%" }}
                        animate={{ left: "130%" }}
                        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                      />
                    </span>
                  </motion.div>

                  <motion.h1 variants={rise} className="mt-4 text-center text-2xl font-bold text-slate-900 host-grotesk">
                    Exclusive Properties
                  </motion.h1>
                  <motion.p variants={rise} className="mt-1 text-center text-sm text-slate-500">
                    Sign in with the credentials shared by your agent
                  </motion.p>

                  {errors.form && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-center text-sm text-red-500"
                    >
                      {errors.form}
                    </motion.p>
                  )}

                  <div className="mt-7 space-y-4">
                    {/* username */}
                    <motion.div variants={rise}>
                      <label className="mb-1.5 block text-[13px] text-slate-600 host-grotesk">Username</label>
                      <div className="group relative">
                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#6ABD11]"
                        />
                        <input
                          value={form.username}
                          autoComplete="username"
                          onChange={(e) => {
                            setForm({ ...form, username: e.target.value });
                            if (errors.username) setErrors((p) => ({ ...p, username: "" }));
                          }}
                          placeholder="Enter username"
                          className={`${inputBase} ${
                            errors.username
                              ? "border-red-400 focus:ring-red-200"
                              : "border-slate-200 focus:border-[#6ABD11] focus:ring-[#6ABD11]/25"
                          }`}
                        />
                      </div>
                      {errors.username && <p className="mt-1.5 text-xs text-red-500">{errors.username}</p>}
                    </motion.div>

                    {/* password */}
                    <motion.div variants={rise}>
                      <label className="mb-1.5 block text-[13px] text-slate-600 host-grotesk">Password</label>
                      <div className="group relative">
                        <Lock
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#6ABD11]"
                        />
                        <input
                          type={showPass ? "text" : "password"}
                          value={form.password}
                          autoComplete="current-password"
                          onChange={(e) => {
                            setForm({ ...form, password: e.target.value });
                            if (errors.password) setErrors((p) => ({ ...p, password: "" }));
                          }}
                          placeholder="Enter password"
                          className={`${inputBase} pr-12 ${
                            errors.password
                              ? "border-red-400 focus:ring-red-200"
                              : "border-slate-200 focus:border-[#6ABD11] focus:ring-[#6ABD11]/25"
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                        >
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                              key={showPass ? "off" : "on"}
                              initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                              animate={{ opacity: 1, rotate: 0, scale: 1 }}
                              exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                              transition={{ duration: 0.15 }}
                              className="block"
                            >
                              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </motion.span>
                          </AnimatePresence>
                        </button>
                      </div>
                      {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>}
                    </motion.div>
                  </div>

                  {/* submit */}
                  <motion.div variants={rise} className="mt-7">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#6ABD11] via-[#76D019] to-[#9BE34C] py-3.5 font-semibold text-white shadow-[0_12px_30px_-8px_rgba(106,189,17,0.6)] transition-shadow hover:shadow-[0_16px_40px_-6px_rgba(106,189,17,0.75)] disabled:opacity-70"
                    >
                      <motion.span
                        className="absolute inset-y-0 w-16 -skew-x-12 bg-white/40"
                        initial={{ left: "-30%" }}
                        animate={{ left: "130%" }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                      />
                      <span className="relative flex items-center gap-2">
                        {loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" /> Verifying
                          </>
                        ) : (
                          <>
                            Unlock Properties
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.div>

                  <motion.p variants={rise} className="mt-5 text-center text-xs text-slate-400">
                    Don’t have credentials? Contact your agent to get access.
                  </motion.p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VipLoginLayout;