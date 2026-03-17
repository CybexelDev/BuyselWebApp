import React, { useState } from "react";
import "./header.css";
import logo from "../../../assets/images/logo/logo.png";
import Navbar from "../../../Components/Navbar/Navbar";
import Dashboard from "../Tabs/Dashboard/Dashboard";
import { motion } from "framer-motion";


import { FaLandmarkDome } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import Properties from "../Tabs/Properties/Properties";
import { div } from "framer-motion/m";



const Header = () => {
      const [activeTab, setActiveTab] = useState("dashboard");

const tabs = [
  {id: "dashboard",icon: RiDashboardFill,label: "Dashboard"},
  {id: "property",icon: FaLandmarkDome,label: "Properties"},
  { id: "plans", icon: FaClipboardList, label: "Plans"},
  {id: "enquiry",icon: SiGooglemessages,label: "Enquiry"},
];

  return (
    <div>
      <div className="md:px-5 md:pt-5 p-2 relative ">
        <Navbar />

        <div className="userdash-cta-container ">
          {/* LOGO */}
          <div className="userdash-cta-logo-container">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="footer-cta-logo w-[100px]"
              />
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
<div className="hidden md:flex justify-center -mt-5  px-2">
  <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto no-scrollbar bg-white shadow-lg rounded-full p-1 border border-gray-200 instrument-sans">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`flex-1 sm:flex-none text-center px-8 py-3 rounded-full text-xs sm:text-sm md:text-[16px] font-semibold  cursor-pointer mb-2 sm:mb-0 ${
          activeTab === tab.id
            ? "bg-gradient-to-r from-[#6ABD11] to-[#5a9d0d] text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-3xl border border-white/20 bg-[#7AC704]/95 p-2 backdrop-blur-2xl md:hidden z-50 shadow-2xl">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative rounded-2xl p-4 transition-all ${
              activeTab === item.id ? "text-white" : "text-white/50"
            }`}
          >
            <item.icon size={22} />
            {activeTab === item.id && (
              <motion.div
                layoutId="active-glow-mobile"
                className="absolute inset-0 -z-10 rounded-2xl bg-black/20"
              />
            )}
          </button>
        ))}
      </nav>
      </div>


        {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "plans" && <div>Plans Content</div>}
      {activeTab === "property" && <Properties />}
      {activeTab === "enquiry" && <div>Enquiries Content</div>}
        </div>




  );
};

export default Header;
