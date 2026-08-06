import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {
  MessageSquare, User, Home, Tag,
  Calendar, ArrowUpRight, Search, Filter,
  Mail, Phone, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { getAgentEnquiries } from '../../../Api/agentsApi';
import { useNavigate } from "react-router-dom";

const EnquiryLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enquiries, setEnquiries] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

const [filters, setFilters] = useState({
  date: "",
  minPrice: "",
  maxPrice: "",
});
  useEffect(() => {
    const fetchEnquiries = async () => {
      const res = await getAgentEnquiries();

      if (res) {
        setEnquiries(res.data || []);
      }
    };

    fetchEnquiries();
  }, []);
  const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
const filteredEnquiries = enquiries.filter((item) => {

  const matchesSearch =
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.property?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase());

  const numericPrice = Number(item.price);

  const matchesMinPrice =
    filters.minPrice === "" ||
    numericPrice >= Number(filters.minPrice);

  const matchesMaxPrice =
    filters.maxPrice === "" ||
    numericPrice <= Number(filters.maxPrice);

const enquiryDate = new Date(item.time);

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
    matchesMinPrice &&
    matchesMaxPrice &&
    matchesDate
  );
});

const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 w-full min-h-screen transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10">

          <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>

              <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
                Property Leads
              </div>

              <h1 className="text-4xl font-black text-slate-900 tracking-tight instrument-sans">
                Property <span className="text-[#6ABD11]">Leads</span>
              </h1>
    <p className="text-sm text-slate-400 mt-2 host-grotesk">
Manage and respond to enquiries received for your listed properties.
 </p>
            </motion.div>

            <div className="flex items-center gap-3">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#74C122] transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Scan enquiries..."
                  className="bg-white border border-slate-200 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 ring-[#74C122]/20 focus:border-[#74C122] outline-none w-64 transition-all shadow-sm"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
           <div className="relative">

  <button
    onClick={() => setShowFilter(!showFilter)}
    className="p-2.5 bg-white border cursor-pointer border-slate-200 rounded-xl text-slate-400 hover:text-[#74C122] hover:border-[#74C122] transition-all shadow-sm"
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

      {/* DATE */}
      <div className="mb-4">

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

      {/* MIN PRICE */}
      <div className="mb-4">

        <label className="block text-sm font-medium mb-2 host-grotesk">
          Min Price
        </label>

        <input
          type="number"
          placeholder="Minimum price"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              minPrice: e.target.value,
            })
          }
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm"
        />

      </div>

      {/* MAX PRICE */}
      <div className="mb-5">

        <label className="block text-sm font-medium mb-2 host-grotesk">
          Max Price
        </label>

        <input
          type="number"
          placeholder="Maximum price"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              maxPrice: e.target.value,
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
              date: "",
              minPrice: "",
              maxPrice: "",
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
          {/* enqur */}
          <div className="flex flex-col gap-3">
            {filteredEnquiries.map((item, index) => (
              <motion.div
                key={item.enquiry_id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-4 
      flex flex-col lg:flex-row lg:items-center justify-between gap-4 
      hover:shadow-[0_10px_30px_-15px_rgba(116,193,34,0.2)] 
      hover:border-[#74C122]/30 transition-all cursor-pointer overflow-hidden"
  onClick={() => navigate(`/agent/enquiry/${item.enquiry_id}`)}  
              >

                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#74C122] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* USER */}
                <div className="flex items-center gap-4 w-full lg:w-[280px] min-w-0">        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#74C122]/10 group-hover:text-[#74C122] transition-colors border border-slate-100 shrink-0">
                  <User size={20} />
                </div>

                  <div className="overflow-hidden min-w-0">          <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#74C122] transition-colors truncate host-grotesk">
  {item.name || "Unknown"}
                  </h4>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 font-medium italic truncate host-grotesk">
                      <Mail size={10} />  {item.email}

                    </p>
                  </div>
                </div>

                {/* PROPERTY + PRICE */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 flex-1 min-w-0">

                  <div className="flex items-center gap-2 min-w-0">
                    <Home size={16} className="text-[#74C122] shrink-0" />
                    <span className="text-sm font-semibold text-slate-600 truncate min-w-0 host-grotesk  w-[190px]">             {item.property || "N/A"}

                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-[140px]">          <Tag size={16} className="text-[#74C122]" />
                    <span className="text-sm font-black text-slate-900 tracking-tight host-grotesk text-left w-full">            ₹{item.price}
                    </span>
                  </div>

                </div>

                {/* MOBILE DATE + STATUS */}
                <div className="flex lg:hidden justify-between items-center text-xs">

                  <div className="flex items-center gap-1 text-slate-400 font-bold">
                    <Calendar size={12} className="text-[#74C122]" />
  {formatDate(item.time)}
                  </div>

                

                </div>

                {/* DESKTOP GRID */}
                <div className="hidden lg:grid grid-cols-[100px_100px_auto] items-center gap-6 shrink-0">

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-tighter justify-end">
                    <Calendar size={12} className="text-[#74C122]" />
                    <span className="whitespace-nowrap host-grotesk">  {formatDate(item.time)}
</span>
                  </div>

                

                  <div className="flex gap-2">
                    <a href={`tel:${item.phone}`}>

                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm">
                      <Phone size={14} />
                    </button>
                    </a>

                    <a href={`https://wa.me/${item.phone}`} target="_blank">


                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm">
                      <MessageSquare size={14} />
                    </button>
                    </a>

                    <button className="p-2 text-slate-300 hover:text-[#74C122] transition-colors">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                </div>

                {/* MOBILE ACTIONS */}
                <div className="flex lg:hidden gap-2 justify-end">
                  <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm">
                    <Phone size={14} />
                  </button>

                  <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm">
                    <MessageSquare size={14} />
                  </button>

                  <button className="p-2 text-slate-300 hover:text-[#74C122] transition-colors">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
          {filteredEnquiries.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-slate-300 border-2 border-dashed border-slate-100 rounded-[32px]">
              <div className="p-4 bg-white rounded-full shadow-inner mb-4">
                <Search size={48} className="opacity-20" />
              </div>
              <p className="font-bold uppercase tracking-[0.2em] text-xs">Zero Lead Signals</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EnquiryLayout;