import React, { useState,useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getAgentInboxMessages } from "../../../Api/agentsApi";
import {
  User,
  Phone,
  MessageSquare,
  Calendar,
  MapPin,
  Search,
  Filter,
  ArrowUpRight,
  Trash,
} from "lucide-react";
import { motion } from "framer-motion";
import { deleteInboxMessage } from "../../../Api/agentsApi";
import { toast } from "sonner";
const UserEnquiryLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
const [enquiries, setEnquiries] = useState([]);
const [showFilter, setShowFilter] = useState(false);

const [filters, setFilters] = useState({
  pincode: "",
  date: "",
});
useEffect(() => {
  const fetchMessages = async () => {
    try {
      const data = await getAgentInboxMessages();

      if (Array.isArray(data)) {
        const mappedData = data.map((item) => ({
          id: item.id,
          name: item.name || item.full_name || "Unknown",
          contact: item.phone || item.contact || item.email || "N/A",
          pincode: item.pincode || item.pin_code || "N/A",
          requirement: item.messages_text || item.enquiry || "No message",
          date: item.created_at
            ? new Date(item.created_at).toLocaleString()
            : "N/A",
          status: item.status || "New",
        }));

        setEnquiries(mappedData);
      }
    } catch (err) {
      console.error("Inbox fetch error:", err);
    }
  };

  fetchMessages();
}, []);


const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure to delete?");
  
  if (!confirmDelete) return;

  const res = await deleteInboxMessage(id);

  if (res) {
    setEnquiries((prev) => prev.filter((item) => item.id !== id));
  } else {
    toast.error("Delete failed");
  }
};
const filteredEnquiries = enquiries.filter((item) => {

  const matchesSearch =
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.contact?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.requirement?.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesPincode =
    filters.pincode === "" ||
    item.pincode?.toString().includes(filters.pincode);

  const enquiryDate = new Date(item.date);

  const formattedDate = `${enquiryDate.getFullYear()}-${String(
    enquiryDate.getMonth() + 1
  ).padStart(2, "0")}-${String(
    enquiryDate.getDate()
  ).padStart(2, "0")}`;

  const matchesDate =
    filters.date === "" ||
    formattedDate === filters.date;

  return (
    matchesSearch &&
    matchesPincode &&
    matchesDate
  );
});

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-slate-900 host-grotesk">
      <Sidebar />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto p-6 md:p-10">


       
       <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
  >

    <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em] mb-2">
      <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
      User Enquiries
    </div>

    <h1 className="text-4xl font-black text-slate-900 tracking-tight instrument-sans">
      User <span className="text-[#6ABD11]">Enquiries</span>
    </h1>

    <p className="text-sm text-slate-400 mt-2 host-grotesk">
Manage and respond to property leads sent directly to you    </p>

  </motion.div>

            <div className="flex items-center gap-3">
              <div className="relative group">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search enquiries..."
                  className="bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 ring-[#74C122]/20 focus:border-[#74C122] outline-none w-64"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

             <div className="relative">

  <button
    onClick={() => setShowFilter(!showFilter)}
    className="p-2.5 bg-white border border-slate-200 rounded-xl cursor-pointer text-slate-400 hover:text-[#74C122] hover:border-[#74C122] transition"
  >
    <Filter size={20} />
  </button>

  {/* FILTER DROPDOWN */}
  {showFilter && (
    <div
      className="absolute right-0 top-14 w-[320px]
      bg-white border border-slate-200 rounded-2xl
      shadow-2xl p-5 z-50"
    >

      {/* PINCODE */}
      <div className="mb-4">

        <label className="block text-sm font-medium mb-2 host-grotesk">
          Pincode
        </label>

        <input
          type="text"
          placeholder="Enter pincode"
          value={filters.pincode}
          onChange={(e) =>
            setFilters({
              ...filters,
              pincode: e.target.value,
            })
          }
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm"
        />

      </div>

      {/* DATE */}
      <div className="mb-5">

        <label className="block text-sm font-medium mb-2 host-grotesk">
          Date
        </label>

        <input
          type="date"
          value={filters.date}
          onChange={(e) =>
            setFilters({
              ...filters,
              date: e.target.value,
            })
          }
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm"
        />

      </div>

      {/* BUTTONS */}
      <div className="flex gap-2">

        <button
          onClick={() =>
            setFilters({
              pincode: "",
              date: "",
            })
          }
          className="flex-1 border border-slate-200 py-2 rounded-xl text-sm host-grotesk"
        >
          Reset
        </button>

        <button
          onClick={() => setShowFilter(false)}
          className="flex-1 bg-[#6ABD11] text-white py-2 rounded-xl text-sm host-grotesk"
        >
          Apply
        </button>

      </div>

    </div>
  )}

</div>
            </div>
          </header>

<div className="flex flex-col gap-4">
  {filteredEnquiries.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 
      flex flex-col lg:flex-row lg:items-center justify-between 
      gap-4 md:gap-6 hover:shadow-lg hover:border-[#74C122]/40 transition-all"
    >

      {/* USER INFO */}
      <div className="flex items-start gap-4 w-full lg:w-[260px]">
        <div className="w-12 h-12 rounded-xl bg-[#74C122]/10 flex items-center justify-center text-[#74C122]">
          <User size={20} />
        </div>

        <div>
          <h4 className="font-bold text-slate-900">{item.name}</h4>
          <p className="text-sm text-slate-400 flex items-center gap-1">
            <Phone size={12} /> {item.contact}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center lg:hidden text-xs text-slate-400">

        <div className="flex items-center gap-1">
          <MapPin size={14} className="text-[#74C122]" />
          {item.pincode}
        </div>

        <div className="flex items-center gap-1">
          <Calendar size={14} />
          {item.date}
        </div>

      </div>

      <div className="hidden lg:flex items-center gap-2 min-w-[120px]">
        <MapPin size={16} className="text-[#74C122]" />
        <span className="text-sm font-semibold text-slate-600">
          {item.pincode}
        </span>
      </div>

      <div className="flex-1 text-sm text-slate-600 leading-relaxed">
        {item.requirement}
      </div>

      <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400">
        <Calendar size={14} />
        {item.date}
      </div>

      <div className="flex gap-2 justify-end">
        <button className="p-2 bg-slate-100 rounded-lg hover:bg-[#74C122] hover:text-white transition">
          <Phone size={16} />
        </button>

        <button className="p-2 bg-slate-100 rounded-lg hover:bg-[#74C122] hover:text-white transition">
          <MessageSquare size={16} />
        </button>
<button
  onClick={() => handleDelete(item.id)}
  className="p-2 text-slate-400 hover:text-red-500 transition"
>
  <Trash size={18} />
</button>
      </div>

    </motion.div>
  ))}
</div>

 {/* empty aanengil */}
          {filteredEnquiries.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-slate-300 border-2 border-dashed border-slate-200 rounded-3xl mt-6">
              <Search size={40} className="opacity-20 mb-4" />
              <p className="text-sm font-semibold tracking-widest uppercase">
                No Enquiries Found
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserEnquiryLayout;