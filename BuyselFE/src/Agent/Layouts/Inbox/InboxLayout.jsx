import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {MessageSquare,User,Home,Tag,Calendar,Search,Filter,Mail,Phone,Zap,Trash} from "lucide-react";
import { motion } from "framer-motion";
import { deleteAgentContactEnquiry, getContactMessage } from "../../../Api/agentsApi";

const InboxLayout = () => {
  const [expandedId, setExpandedId] = useState(null);
  const[enquiry, setEnquiry]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(()=>{
    const fetchMessages = async()=>{
      try{
        const data = await getContactMessage();

        if (Array.isArray(data)) {
        const mappedData = data.map((item) => ({
          id: item.id,
          username: `${item.first_name || ""} ${item.last_name || ""}`.trim() || "Unknown",
          contact: item.contact_number || "N/A",
          email:item.email || "N/A",
          message: item.message || "No message",
          date: item.created_at
            ? new Date(item.created_at).toLocaleString()
            : "N/A",
        }));
        setEnquiry(mappedData);
      }
      }
      catch(err){
        console.error("Contact message fetch error:",err);
      }
    }
    fetchMessages()
  },[])


   const handleDelete = async(id)=>{
    const confirmDelete = window.confirm("Are you sure delete?")

    if(!confirmDelete) return;

    const res = await deleteAgentContactEnquiry(id);

    if(res){
      setEnquiry((prev)=>prev.filter((item)=>item.id !== id))
    }else{
      alert("Delete failed")
    }
   }

  const filteredEnquiries = enquiry.filter((item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase()),
  );


  return (
    <div className="min-h-screen  bg-[#F8FAFC] text-slate-900 font-sans flex overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 w-full mb-18 sm:mb-0  transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10">
          <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
                Inbox
              </div>

              <h1 className="text-4xl font-black text-slate-900 tracking-tight instrument-sans">
                Inbox <span className="text-[#6ABD11]">Enquiries</span>
              </h1>
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

              <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-[#74C122] hover:border-[#74C122] transition">
                <Filter size={20} />
              </button>
            </div>
          </header>
          {/* enqur */}
          <div className="flex flex-col gap-3">
            {filteredEnquiries.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-4 
                flex flex-col lg:flex-row lg:items-center justify-between gap-4 
                hover:shadow-[0_10px_30px_-15px_rgba(116,193,34,0.2)] 
             hover:border-[#74C122]/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#74C122] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* USER */}
                <div className="flex items-center gap-4 w-full lg:w-[200px] min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#74C122]/10 group-hover:text-[#74C122] transition-colors border border-slate-100 shrink-0">
                    <User size={20} />
                  </div>

                  <div className="overflow-hidden min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#74C122] transition-colors truncate host-grotesk">
                      {item.username}
                    </h4>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 font-medium italic truncate host-grotesk">
                      <Mail size={10} /> {item.email}
                    </p>
                  </div>
                </div>

                {/* PROPERTY + PRICE */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 flex-1 min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <Phone size={16} className="text-[#74C122] shrink-0" />
                    <span className="text-sm font-bold text-black-600 truncate min-w-0 host-grotesk  w-[190px]">
                      {item.contact}
                    </span>
                  </div>


                   {/* message */}
                  <div className="flex items-start gap-2 w-[300px]">
                    <Tag size={16} className="text-[#74C122] mt-1" />

                    <div className="w-full">
                      <p
                        onClick={() =>
                          setExpandedId(expandedId === item.id ? null : item.id)
                        }
                        className={`text-sm font-semibold text-slate-900 -mb-1 tracking-tight host-grotesk text-left w-full cursor-pointer transition-all ${
                          expandedId === item.id ? "" : "line-clamp-2"
                        }`}
                      >
                        {item.message}
                      </p>

                      {item.message.length > 80 && (
                        <button
                          className="text-[#74C122] text-xs font-semibold mt-[1px]"
                          onClick={() =>
                            setExpandedId(
                              expandedId === item.id ? null : item.id,
                            )
                          }
                        >
                          {expandedId === item.id ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>
                  </div>




                </div>

                {/* DESKTOP GRID */}
                <div className="flex justify-between items-center lg:grid lg:grid-cols-[100px_100px_auto] gap-6 shrink-0">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-tighter justify-end">
                    <Calendar size={12} className="text-[#74C122]" />
                    <span className="whitespace-nowrap host-grotesk">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm">
                      <Phone size={14} />
                    </button>

                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-[#74C122] hover:text-white transition-all shadow-sm">
                      <MessageSquare size={14} />
                    </button>

                    <button onClick={()=>handleDelete(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition">
                      <Trash size={18} />
                    </button>
                  </div>
                </div>

                {/* MOBILE ACTIONS */}
              </motion.div>
            ))}
          </div>
          {filteredEnquiries.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-slate-300 border-2 border-dashed border-slate-100 rounded-[32px]">
              <div className="p-4 bg-white rounded-full shadow-inner mb-4">
                <Search size={48} className="opacity-20" />
              </div>
              <p className="font-bold uppercase tracking-[0.2em] text-xs">
                Zero Enquiries
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InboxLayout;
