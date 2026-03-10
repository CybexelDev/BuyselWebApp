import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { 
  MessageSquare, User, Home, Tag, 
  Calendar, ArrowUpRight, Search, Filter,
  Mail, Phone, Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';

const EnquiryLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const enquiries = [
    {
      id: 1,
      username: "Suresh Raina",
      email: "suresh.r@example.com",
      propertyName: "Green Valley Apartments",
      price: "85,00,000",
      date: "2 hours ago",
      status: "New",
    },
    {
      id: 2,
      username: "Meera Nair",
      email: "meera.n@example.com",
      propertyName: "Ocean View Villa",
      price: "2,40,00,000",
      date: "5 hours ago",
      status: "In Progress",
    },
    {
      id: 3,
      username: "Vijay Sethupathi",
      email: "v.sethu@example.com",
      propertyName: "Industrial Warehouse A1",
      price: "5,10,00,000",
      date: "1 day ago",
      status: "Closed",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 w-full min-h-screen transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10">
          
          <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
             
              <h1 className="text-3xl font-black text-slate-900 tracking-tight instrument-sans">
                Property <span className="text-[#74C122]">Leads</span>
              </h1>
            </div>

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
              <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-[#74C122] hover:border-[#74C122] transition-all shadow-sm">
                <Filter size={20} />
              </button>
            </div>
          </header>
{/* enqur */}
<div className="flex flex-col gap-3">
  {enquiries.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white border border-slate-100 rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:shadow-[0_10px_30px_-15px_rgba(116,193,34,0.2)] hover:border-[#74C122]/30 transition-all cursor-pointer overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#74C122] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-4 w-full lg:w-[280px] shrink-0">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#74C122]/10 group-hover:text-[#74C122] transition-colors border border-slate-100 shrink-0">
          <User size={20} />
        </div>
        <div className="overflow-hidden">
          <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#74C122] transition-colors truncate host-grotesk">
            {item.username}
          </h4>
          <p className="text-[11px] text-slate-400 flex items-center gap-1 font-medium italic truncate host-grotesk">
            <Mail size={10} /> {item.email}
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center gap-8 min-w-0">
        <div className="flex items-center gap-2 min-w-[180px] overflow-hidden">
          <Home size={16} className="text-[#74C122] shrink-0" />
          <span className="text-sm font-semibold text-slate-600 truncate host-grotesk">{item.propertyName}</span>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <Tag size={16} className="text-[#74C122]" />
          <span className="text-sm font-black text-slate-900 tracking-tight host-grotesk">
            ₹{item.price}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[100px_100px_auto] items-center gap-6 shrink-0">
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-tighter justify-end">
          <Calendar size={12} className="text-[#74C122]" />
          <span className="whitespace-nowrap host-grotesk">{item.date}</span>
        </div>

        <div className="flex justify-center">
          <div className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider text-center w-full host-grotesk ${
            item.status === 'New' 
            ? 'bg-[#74C122]/10 text-[#74C122]' 
            : 'bg-slate-100 text-slate-500'
          }`}>
            {item.status}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm shrink-0">
            <Phone size={14} />
          </button>
          <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm shrink-0">
            <MessageSquare size={14} />
          </button>
          <button className="p-2 text-slate-300 hover:text-[#74C122] transition-colors shrink-0">
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>

          {enquiries.length === 0 && (
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