import React from 'react';
import { 
  User, Mail, Phone, MessageSquare, 
  MapPin, Home, Tag, ArrowLeft, 
  Calendar, ShieldCheck, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getEnquiryDetail } from '../../../../Api/userApi';

const EnquiryDetailLayoutUser = () => {
    const navigate=useNavigate()
const [detail, setDetail] = useState(null);
const [loading, setLoading] = useState(false);

const { id } = useParams();

useEffect(() => {
  fetchDetail();
}, []);

const fetchDetail = async () => {
  try {

    setLoading(true);

    const res = await getEnquiryDetail(id);

    console.log(res);

    if (res) {
      setDetail(res.data);
    }

  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}

if (!detail) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      No enquiry found
    </div>
  );
}

  return (
    
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex overflow-x-hidden">

      <main className="flex-1 w-full transition-all duration-300">
        <div className="max-w-6xl mx-auto p-4 md:p-10">
          
          <header className="mb-8 flex items-center justify-between">
            <button className="group flex items-center gap-2 text-slate-500 hover:text-[#74C122] transition-colors font-bold text-sm uppercase tracking-widest instrument-sans" onClick={()=>navigate("/ownerdashboard?tab=enquiries")}>
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"  />
              Back to Enquirys
            </button>
            <span className="px-4 py-1.5 rounded-full bg-[#74C122] text-white text-[10px] font-black uppercase tracking-widest border border-[#74C122]/20 host-grotesk">
              Verified Lead
            </span>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm relative overflow-hidden">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#74C122] mb-8 flex items-center gap-2 host-grotesk">
                  <ShieldCheck size={14} /> Lead Profile
                </h2>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#74C122] border border-slate-100 shadow-inner">
                      <User size={32} />
                    </div>
                    <div>
                      <h1 className="text-2xl font-black text-slate-900 instrument-sans leading-tight">
                        {detail.name}
                      </h1>
                      <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                        <Calendar size={12} className="text-[#74C122]" />
                        <span className="text-[11px] font-bold uppercase tracking-tight host-grotesk">
                          {detail.created_at}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-4 px-4 py-2 rounded-2xl bg-white  group hover:border-[#74C122]/30 transition-all">
                      <Phone size={18} className="text-[#74C122]" />
                      <span className="text-sm font-bold text-slate-700 host-grotesk">{detail.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2  rounded-2xl bg-white  group hover:border-[#74C122]/30 transition-all">
                      <Mail size={18} className="text-[#74C122]" />
                      <span className="text-sm font-bold text-slate-700 host-grotesk">{detail.email}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-50">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <MessageSquare size={14} className="text-[#74C122]" /> Inquiry Message
                    </h3>
                    <div className="px-6 py-3 rounded-3xl bg-white  relative">
                      <p className="italic text-slate-600 text-sm leading-relaxed relative z-10 font-medium host-grotesk">
                        "{detail.message}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

   <div className="flex gap-4 host-grotesk">
  <a 
    href={`tel:${detail.phone}`}
    className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
  >
    <Phone size={16} fill="white" stroke="none" /> 
    Call Now
  </a>

  <a 
    href={`https://wa.me/${detail.phone.replace(/\D/g, '')}`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1 bg-gradient-to-r from-[#74C122] to-[#5ea11a] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-[#74C122]/30 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
  >
    <MessageSquare size={16} fill="white" stroke="none" /> 
    WhatsApp
  </a>
</div>
            </motion.div>

            {/* RIGHT: Property Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm"
            >
              {/* Image Container with Price Overlay */}
              <div className="relative h-72 overflow-hidden group">
                <img 
                  src={detail.property.image} 
                  alt="Property" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-2">
                    <Tag size={18} className="text-[#74C122]" />
                    <span className="text-xl font-black text-slate-900 tracking-tight host-grotesk">
                      {detail.property.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-[#74C122] font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                  <Home size={14} /> Inquiry Target
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-3 instrument-sans">
                  {detail.property.label}
                </h2>
                
                <div className="flex items-center gap-2 text-slate-500 mb-8">
                  <MapPin size={18} className="text-red-400" />
                  <span className="text-sm font-semibold host-grotesk">{detail.property.location}</span>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 instrument-sans">Property Overview</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium host-grotesk">
                      {detail.property.description}
                    </p>
                  </div>
                  
                  
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default EnquiryDetailLayoutUser;