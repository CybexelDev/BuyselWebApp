import React, { useState } from 'react';
import { 
  MessageSquare, User, Home, Tag, 
  Calendar, ArrowUpRight, Search, Filter,
  Mail, Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EnquiryLayoutUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate=useNavigate()
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
    <div className="min-h-screen bg-white text-slate-900 font-sans">

        <div className="max-w-7xl mx-auto px-10  ">

        

          {/* ENQUIRIES */}
          <div className="flex flex-col gap-3">
            {enquiries.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-slate-100 rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:shadow-md transition-all"
                onClick={()=>navigate("/enquiry-detail")}
              >

                {/* USER */}
                <div className="flex items-center gap-4 w-full lg:w-[280px]">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <User size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-sm">{item.username}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <Mail size={10} /> {item.email}
                    </p>
                  </div>
                </div>

                {/* PROPERTY */}
                <div className="flex flex-col sm:flex-row gap-4 flex-1 ">
                  <div className="flex items-center gap-2 w-[250px]">
                    <Home size={16} className="text-[#74C122] " />
                    <span className="text-sm font-semibold">
                      {item.propertyName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-[#74C122]" />
                    <span className="font-bold">₹{item.price}</span>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2">
                  <button className="p-2 bg-slate-50 rounded-lg hover:bg-[#74C122] hover:text-white">
                    <Phone size={14} />
                  </button>

                  <button className="p-2 bg-slate-50 rounded-lg hover:bg-[#74C122] hover:text-white">
                    <MessageSquare size={14} />
                  </button>

                  <button className="p-2 text-slate-400 hover:text-[#74C122]">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
    </div>
  );
};

export default EnquiryLayoutUser;