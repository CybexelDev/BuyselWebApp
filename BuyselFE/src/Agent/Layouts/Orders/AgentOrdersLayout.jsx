import { useEffect, useMemo, useState } from "react";
import { getPurchaseHistory } from "../../../Api/agentsApi";
import {
  Search,
  ClipboardList,
  CreditCard,
  CircleDollarSign,
  Clock3,
  Receipt,
} from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Orders() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
const [orders, setOrders] = useState([]);
  const filters = [
    "All",
    "Plan",
    "Reels",
    "Advertisement",
  ];
  const filterMap = {
  Plan: "Subscription",
  Upgrade: "Upgrade",
  Reels: "Reel",
  Advertisement: "Advertisement",
};
  useEffect(() => {
  const fetchOrders = async () => {
    const res = await getPurchaseHistory();

    if (res?.status) {
      setOrders(res.plans);
    }
  };

  fetchOrders();
}, []);
  console.log(orders)
  const filteredOrders = useMemo(() => {
  return orders.filter((order) => {
    const matchesSearch =
      order.plan_name.toLowerCase().includes(search.toLowerCase()) ||
      (order.order_id || "").toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || order.plan_type === filterMap[filter];

    return matchesSearch && matchesFilter;
  });
}, [orders, search, filter]);

  const stats = {
    totalOrders: orders.length,
    totalSpent: orders.reduce((a, b) => a + Number(b.price), 0),
    active: orders.filter(
      (o) => o.status === "Active" || o.status ==="Contacted"
    ).length,
    pending: orders.filter(
      (o) => o.status !== "Active" && o.status!=="Contacted"
    ).length,
  };

  return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 host-grotesk overflow-x-hidden">
      <Sidebar />
        <div className="flex-1">

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#6ABD11]/5 p-6 lg:p-10">
      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-10">
        <div>
          <span className="px-3 py-1 rounded-full bg-[#6ABD11]/10 text-[#6ABD11] text-xs font-bold tracking-wider">
            BILLING
          </span>

          <h1 className="mt-4 text-4xl font-black text-slate-900">
            Orders
          </h1>

          <p className="text-slate-500 mt-2 max-w-xl">
            Manage all your purchases including subscriptions,
            upgrades, advertisements and reel packages.
          </p>
        </div>

    
      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 text-sm">
                Total Orders
              </p>

              <h2 className="text-3xl font-black mt-2">
                {stats.totalOrders}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#6ABD11]/10 flex items-center justify-center">
              <ClipboardList className="text-[#6ABD11]" />
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition">

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Total Spent
              </p>

              <h2 className="text-3xl font-black mt-2">
                ₹{stats.totalSpent.toLocaleString()}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">

              <CircleDollarSign className="text-emerald-600"/>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition">

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Completed
              </p>

              <h2 className="text-3xl font-black mt-2">
                {stats.active}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

              <CreditCard className="text-blue-600"/>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition">

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h2 className="text-3xl font-black mt-2">
                {stats.pending}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">

              <Clock3 className="text-amber-600"/>

            </div>

          </div>

        </div>

      </div>

      {/* SEARCH */}

      <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm mb-8">

        <div className="flex flex-col lg:flex-row gap-5 justify-between">

          <div className="relative w-full lg:max-w-md">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#6ABD11]"
            />

          </div>

          <div className="flex flex-wrap gap-3">

            {filters.map((item)=>(
              <button
                key={item}
                onClick={()=>setFilter(item)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition
                ${
                  filter===item
                  ? "bg-[#6ABD11] text-white shadow-lg"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </div>

      

      <div className="space-y-6">

{filteredOrders.map((order) => {
const statusColor =
  order.status === "Active"
    ? "bg-emerald-500"
    : order.status === "In_Progress"
    ? "bg-amber-500"
    : "bg-blue-500";

const badge =
  order.status === "Active"
    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
    : order.status === "In_Progress"
    ? "bg-amber-50 text-amber-700 border-amber-200"
    : "bg-blue-50 text-blue-700 border-blue-200";

  return (
    <div
      key={order.order_id}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6ABD11]/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Left Accent */}
      <div className={`absolute left-0 top-0 h-full w-2 ${statusColor}`} />

      <div className="relative p-8">
        {/* ================= TOP ================= */}

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="flex gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6ABD11]/10">
              <Receipt className="text-[#6ABD11]" size={30} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                {order.plan_type}
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-900">
                {order.plan_name.toUpperCase()}
              </h2>

           {order.order_id &&  <p className="mt-1 text-sm text-slate-500">
                Order ID • {order.order_id}
              </p>}
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <span
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${badge}`}
            >
{order.status.replace("_", " ")}            </span>

            <h2 className="text-3xl font-black text-[#6ABD11]">
              ₹{order.price.toLocaleString()}
            </h2>
          </div>
        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* ================= INFO GRID ================= */}

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Purchase Date
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              {order.purchase_date}
            </h3>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Payment
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              Razorpay
            </h3>
          </div>

{order.payment_id &&
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Transaction
            </p>

            <h3 className="mt-2 font-bold text-slate-900">
              {order.payment_id}
            </h3>
          </div>
}

       
        </div>

      </div>
    </div>
    
  );
})}
      </div>
</div>
    </div>
    </div>
  );
}