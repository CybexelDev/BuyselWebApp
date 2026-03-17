import React, { useState } from "react";
import "./header.css";
import logo from "../../../assets/images/logo/logo.png";


import Navbar from "../../../Components/Navbar/Navbar";
import Dashboard from "../Tabs/Dashboard/Dashboard";
import PlansLayout from "../../Plans/PlansLayout";

//start

const Header = () => {
      const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "plans", label: "Plans" },
    { id: "properties", label: "Properties" },
    { id: "enquiries", label: "Enquiries" },

  ];

  return (
      <div className="md:p-5 p-2 relative ">
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
        <div className="flex justify-center -mt-5 mb-10">
          <div className="flex bg-white shadow-lg rounded-full p-1 border border-gray-200 instrument-sans">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-2.5 rounded-full text-md font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#6ABD11] to-[#5a9d0d] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>


        {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "plans" && <div><PlansLayout showtabs={false} padding="py-0" /></div>}
      {activeTab === "properties" && <div>Properties Content</div>}
      {activeTab === "enquiries" && <div>Enquiries Content</div>}
        </div>




  );
};

export default Header;
