// import React from 'react'
// import EnquiryLayout from '../../../../Agent/Layouts/Enquiry/EnquiryLayout'

// function Enquiries() {
//   return (
//     <div>
//       <EnquiryLayout />
//     </div>
//   )
// }

// export default Enquiries



import React, { useState,useEffect } from 'react';
import { 
  MessageSquare, User, Home, Tag, 
  Calendar, ArrowUpRight, Search, Filter,
  Mail, Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getAllPropertyEnquiries } from '../../../../Api/userApi';

const EnquiryLayoutUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
   const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()


  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);

      const res = await getAllPropertyEnquiries();
      console.log(res)

      if (res) {
        setEnquiries(res.data);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

        <div className="max-w-7xl mx-auto px-10  ">

        
{loading && (
  <p className="text-center py-10">Loading...</p>
)}

{!loading && enquiries.length === 0 && (
  <p className="text-center py-10 text-slate-400">
    No enquiries found
  </p>
)}
          {/* ENQUIRIES */}
          <div className="flex flex-col gap-3 ">
            {enquiries.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border cursor-pointer border-slate-100 rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:shadow-md transition-all"
onClick={() => navigate(`/enquiry-detail/${item.enquiry_id}`)}              >

                {/* USER */}
                <div className="flex items-center gap-4 w-full lg:w-[280px]">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <User size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-sm">{item.name}</h4>
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
                      {item.property}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-[#74C122]" />
                    <span className="font-bold">₹{item.price}</span>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2">
                  <button className="p-2 bg-slate-50 rounded-lg hover:bg-[#74C122] hover:text-white"
                    onClick={(e) => {
      e.stopPropagation();
      window.open(`tel:${item.phone}`);
    }}
                  >
                    <Phone size={14} />
                  </button>

                  <button className="p-2 bg-slate-50 rounded-lg hover:bg-[#74C122] hover:text-white"    onClick={(e) => {
      e.stopPropagation();
      window.open(`https://wa.me/91${item.phone}`);
    }}
 >
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