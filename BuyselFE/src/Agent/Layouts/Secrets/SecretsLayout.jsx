import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import {
  Users,
  Building2,
  Plus,
  Pencil,
  Trash2,
  X,
  Eye,
  EyeOff,
  Search,
  ShieldCheck,
  Lock,
  Loader2,
  KeyRound,
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { createSecretUser,updateSecretUser,deleteSecretUser,getSecretUsers ,getSecretProperties,toggleSecretProperty,toggleSecretPropertiesAccess} from "../../../Api/agentsApi";
/* =========================================================
   API LAYER — replace these with your real calls
   (mock data so the page works right now)
========================================================= */
const wait = (ms = 500) => new Promise((r) => setTimeout(r, ms));

let _users = [
  { id: 1, username: "rahul.kovai", created_at: "2026-09-12" },
  { id: 2, username: "meena.nri", created_at: "2026-10-02" },
];
let _props = [
  { id: 1, name: "Skyline Residency 3BHK", price: 8500000, image: "", is_secret: true },
  { id: 2, name: "Green Valley Villa", price: 15200000, image: "", is_secret: false },
  { id: 3, name: "Race Course Penthouse", price: 32000000, image: "", is_secret: false },
  { id: 4, name: "Saibaba Colony Plot", price: 4800000, image: "", is_secret: true },
];



/* =========================================================
   HELPERS
========================================================= */
const formatPrice = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n || 0);

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 24 } },
};

/* =========================================================
   MODAL SHELL
========================================================= */
const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(30,70,10,0.35)]"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-[#6ABD11] via-[#76D019] to-[#9BE34C]" />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* =========================================================
   USER FORM MODAL (create / update)
========================================================= */
const UserModal = ({ open, onClose, editUser, onSaved }) => {
  const isEdit = !!editUser;
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setForm({ username: editUser?.username || "", password: "" });
      setErrors({});
      setShowPass(false);
    }
  }, [open, editUser]);

  const validate = () => {
    const e = {};
    if (form.username.trim().length < 3) e.username = "Min 3 characters";
    if (!isEdit && form.password.length < 6) e.password = "Min 6 characters";
    if (isEdit && form.password && form.password.length < 6) e.password = "Min 6 characters";
    setErrors(e);
    return !Object.keys(e).length;
  };

 
const submit = async () => {
  if (!validate()) return;

  setLoading(true);

  try {
    const username = form.username.trim();

    const res = isEdit
      ? await updateSecretUser(
          editUser.id,
          username,
          form.password
        )
      : await createSecretUser(
          username,
          form.password
        );

    toast.success(
      isEdit
        ? "Secret user updated successfully"
        : "Secret user created successfully"
    );

    onSaved(
      { ...editUser, ...res, username },
      isEdit
    );

    onClose();
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Failed to save secret user"
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6ABD11]/10 text-[#6ABD11]">
              <KeyRound size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold host-grotesk">
                {isEdit ? "Update User" : "Create User"}
              </h3>
              <p className="text-xs text-slate-500">Access to your secret properties</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition">
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-600 host-grotesk">Username</label>
            <input
              value={form.username}
              onChange={(e) => { setForm({ ...form, username: e.target.value }); setErrors({ ...errors, username: "" }); }}
              className={`mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#6ABD11]/50 ${errors.username ? "border-red-500" : "border-slate-200"}`}
              placeholder="e.g. rahul.kovai"
            />
            {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
          </div>

          <div>
            <label className="text-sm text-slate-600 host-grotesk">
              Password {isEdit && <span className="text-slate-400">(leave blank to keep current)</span>}
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={form.password}
                onChange={(e) => { setForm({ ...form, password: e.target.value }); setErrors({ ...errors, password: "" }); }}
                className={`mt-1 w-full rounded-xl border p-3 pr-12 outline-none focus:ring-2 focus:ring-[#6ABD11]/50 ${errors.password ? "border-red-500" : "border-slate-200"}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="flex-1 rounded-xl border border-slate-200 py-3 font-medium text-slate-600 hover:bg-slate-50 transition">
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={loading}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#74c222] py-3 font-medium text-white hover:bg-[#5f9d1c] transition disabled:opacity-70"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            {isEdit ? "Save Changes" : "Create User"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

/* =========================================================
   DELETE CONFIRM MODAL
========================================================= */
const DeleteModal = ({ user, onClose, onDeleted }) => {
  const [loading, setLoading] = useState(false);

  const confirm = async () => {
    setLoading(true);
    try {
await deleteSecretUser(user.id);
      toast.success("User deleted");
      onDeleted(user.id);
      onClose();
    } catch {
      toast.error("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={!!user} onClose={onClose}>
      <div className="p-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
          <Trash2 size={24} />
        </div>
        <h3 className="mt-4 text-lg font-semibold host-grotesk">Delete user?</h3>
        <p className="mt-1 text-sm text-slate-500">
          <span className="font-medium text-slate-700">{user?.username}</span> will lose access to your secret properties.
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="flex-1 rounded-xl border border-slate-200 py-3 font-medium text-slate-600 hover:bg-slate-50 transition">
            Cancel
          </button>
          <button
            onClick={confirm}
            disabled={loading}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-medium text-white hover:bg-red-600 transition disabled:opacity-70"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

/* =========================================================
   TOGGLE SWITCH
========================================================= */
const Toggle = ({ checked, onChange, disabled }) => (
  <button
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={onChange}
    className={`relative flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition-colors duration-300 disabled:opacity-60 ${
      checked ? "bg-[#6ABD11] justify-end" : "bg-slate-300 justify-start"
    }`}
  >
    <motion.span
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="block h-5 w-5 rounded-full bg-white shadow"
    />
  </button>
);

/* =========================================================
   PAGE
========================================================= */
const SecretProperties = () => {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingProps, setLoadingProps] = useState(true);
  const [togglingId, setTogglingId] = useState(null);

  const [userModal, setUserModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [updatingSecretAccess, setUpdatingSecretAccess] = useState(false);

const secretEnabled = useSelector(
  (state) => state.agent.secret_properties
);
  useEffect(() => {
  getSecretUsers()
    .then((res) => {
      setUsers(res.secret_users || []);
    })
    .catch((error) => {
      console.error("Failed to load secret users:", error);
      toast.error("Failed to load secret users");
    })
    .finally(() => {
      setLoadingUsers(false);
    });
}, []);
useEffect(() => {
  const fetchProperties = async () => {
    try {
      const res = await getSecretProperties();

      console.log("Secret properties API response:", res);

      const propertyList = Array.isArray(res)
        ? res
        : res?.data || [];

      const propertyData = propertyList.map((p) => ({
        id: p.id,
        name: p.subcategory || p.label || "Property",
        property_code: p.property_code,
        price: p.price,
        image: p.image || p.images?.[0] || "",
        is_secret: p.secret,
      }));

      setProperties(propertyData);
    } catch (error) {
      console.error("Failed to load properties:", error);
      toast.error("Failed to load properties");
    } finally {
      setLoadingProps(false);
    }
  };

  fetchProperties();
}, []);

const handleToggle = async (p) => {
  const nextSecret = !p.is_secret;

  setTogglingId(p.id);

  try {
    await toggleSecretProperty(p.id, nextSecret);

    setProperties((prev) =>
      prev.map((item) =>
        item.id === p.id
          ? { ...item, is_secret: nextSecret }
          : item
      )
    );

    toast.success(
      nextSecret
        ? "Property marked as secret"
        : "Property removed from secret"
    );
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Failed to update property"
    );
  } finally {
    setTogglingId(null);
  }
};
const handleSecretAccessToggle = async () => {
  const nextValue = !secretEnabled;

  setUpdatingSecretAccess(true);

  try {
    await toggleSecretPropertiesAccess(nextValue);

    dispatch({
      type: "UPDATE_SECRET_PROPERTIES",
      payload: nextValue,
    });

    toast.success(
      nextValue
        ? "Secret properties enabled"
        : "Secret properties disabled"
    );
  } catch (error) {
    console.error("Secret access update failed:", error);

    toast.error(
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Failed to update secret properties"
    );
  } finally {
    setUpdatingSecretAccess(false);
  }
};
  const filteredProps = useMemo(
    () => properties.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
    [properties, query]
  );
  const secretCount = properties.filter((p) => p.is_secret).length;

  const handleSaved = (res, isEdit) =>
    setUsers((prev) => (isEdit ? prev.map((u) => (u.id === res.id ? res : u)) : [res, ...prev]));



  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 w-full min-h-screen transition-all duration-300">
        <div className="mx-auto max-w-6xl px-4 pb-32 pt-8 sm:px-8 lg:pb-12">
          {/* ---------- HEADER ---------- */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative overflow-hidden rounded-[32px] border border-white bg-white p-6 shadow-[0_25px_70px_-30px_rgba(30,70,10,0.3)] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#6ABD11]/15 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6ABD11] to-[#9BE34C] text-white shadow-lg shadow-[#6ABD11]/30">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold host-grotesk">Secret Properties</h1>
                  <p className="text-sm text-slate-500">Private listings visible only to users you approve</p>
                </div>
              </div>
             <div className="flex flex-wrap items-center gap-3">
  {[
    { label: "Users", value: users.length, icon: Users },
    { label: "Secret", value: secretCount, icon: Lock },
  ].map((s) => (
    <div
      key={s.label}
      className="flex items-center gap-3 rounded-2xl bg-[#F8FAF5] px-4 py-3"
    >
      <s.icon size={18} className="text-[#6ABD11]" />
      <div>
        <p className="text-lg font-bold leading-none">{s.value}</p>
        <p className="text-[11px] uppercase tracking-wide text-slate-500">
          {s.label}
        </p>
      </div>
    </div>
  ))}

  <button
    onClick={handleSecretAccessToggle}
    disabled={updatingSecretAccess}
    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${
      secretEnabled
        ? "bg-red-500 hover:bg-red-600"
        : "bg-[#6ABD11] hover:bg-[#5DAA0D]"
    }`}
  >
    {updatingSecretAccess ? (
      <Loader2 size={17} className="animate-spin" />
    ) : secretEnabled ? (
      <Lock size={17} />
    ) : (
      <ShieldCheck size={17} />
    )}

    {secretEnabled ? "Disable Access" : "Enable Access"}
  </button>
</div>
            </div>
          </motion.div>

          {/* ---------- USERS SECTION ---------- */}
          <section className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-[#6ABD11]" />
                <h2 className="text-lg font-semibold host-grotesk">Users with Access</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { setEditUser(null); setUserModal(true); }}
                className="flex items-center gap-2 rounded-xl bg-[#74c222] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#6ABD11]/25 hover:bg-[#5f9d1c] transition"
              >
                <Plus size={16} /> Add User
              </motion.button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
              {loadingUsers ? (
                <div className="space-y-3 p-5">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-14 animate-pulse rounded-2xl bg-slate-100" />
                  ))}
                </div>
              ) : users.length === 0 ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <Users size={24} />
                  </div>
                  <p className="mt-3 font-medium">No users yet</p>
                  <p className="text-sm text-slate-500">Create a user to share your secret properties</p>
                </div>
              ) : (
                <motion.ul variants={container} initial="hidden" animate="show" className="divide-y divide-slate-100">
                  <AnimatePresence initial={false}>
                    {users.map((u) => (
                      <motion.li
                        key={u.id}
                        layout
                        variants={item}
                        exit={{ opacity: 0, x: -30, transition: { duration: 0.2 } }}
                        className="group flex items-center justify-between gap-3 px-5 py-4 hover:bg-[#F8FAF5] transition-colors"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6ABD11]/10 font-semibold uppercase text-[#5DAA0D]">
                            {u.username.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-medium host-grotesk">{u.username}</p>
<p className="text-xs text-slate-400">
  Added {new Date(u.created_at).toLocaleDateString("en-IN")}
</p>                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => { setEditUser(u); setUserModal(true); }}
                            className="rounded-xl p-2.5 text-slate-500 hover:bg-white hover:text-[#5DAA0D] hover:shadow transition"
                            title="Update"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteUser(u)}
                            className="rounded-xl p-2.5 text-slate-500 hover:bg-red-50 hover:text-red-500 transition"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
              )}
            </div>
          </section>

          {/* ---------- PROPERTIES SECTION ---------- */}
          <section className="mt-10">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Building2 size={20} className="text-[#6ABD11]" />
                <h2 className="text-lg font-semibold host-grotesk">Properties</h2>
              </div>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search properties"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#6ABD11]/40 sm:w-64"
                />
              </div>
            </div>

            {loadingProps ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 animate-pulse rounded-3xl bg-slate-100" />
                ))}
              </div>
            ) : filteredProps.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-white py-14 text-center text-slate-500">
                No properties found
              </div>
            ) : (
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProps.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    variants={item}
                    whileHover={{ y: -6 }}
                    className={`group overflow-hidden rounded-3xl border bg-white transition-shadow duration-300 hover:shadow-[0_25px_50px_-20px_rgba(30,70,10,0.3)] ${
                      p.is_secret ? "border-[#6ABD11]/40" : "border-slate-100"
                    }`}
                  >
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#EEF6E3] to-[#DDEFC4]">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#6ABD11]/50">
                          <Building2 size={42} />
                        </div>
                      )}
                      <AnimatePresence>
                        {p.is_secret && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.7, y: -6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-[#6ABD11] px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg"
                          >
                            <Lock size={11} /> Secret
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-between gap-3 p-4">
                      <div className="min-w-0">
  <h3 className="truncate font-semibold host-grotesk">
    {p.name}
  </h3>

  <p className="mt-1 text-xs text-slate-500">
    Code: {p.property_code || "N/A"}
  </p>

  <p className="mt-1 font-bold text-[#5DAA0D]">
    {p.price || "Price on request"}
  </p>
</div>
                      <Toggle
                        checked={p.is_secret}
                        disabled={togglingId === p.id}
                        onChange={() => handleToggle(p)}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>
        </div>
      </main>

      {/* ---------- MODALS ---------- */}
      <UserModal
        open={userModal}
        onClose={() => setUserModal(false)}
        editUser={editUser}
        onSaved={handleSaved}
      />
      <DeleteModal
        user={deleteUser}
        onClose={() => setDeleteUser(null)}
        onDeleted={(id) => setUsers((prev) => prev.filter((u) => u.id !== id))}
      />
    </div>
  );
};

export default SecretProperties;