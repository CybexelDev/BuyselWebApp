import React, { useState } from "react";
import "./header.css";
import logo from "../../../assets/images/logo/logo.png";
import Navbar from "../../../Components/Navbar/Navbar";
import PlansLayout from "../../Plans/PlansLayout";
import EnquiryLayoutUser from "../Tabs/Enquiries/Enquiries";
import { useSearchParams } from "react-router-dom";
import Properties from "../Tabs/Properties/Properties";
import UserDashboard from "../Tabs/Dashboard/Dashboard";

const Header = () => {
      const [searchParams,setSearchParams]=useSearchParams()
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "plans", label: "Plans" },
    { id: "properties", label: "Properties" },
    { id: "enquiries", label: "Enquiries" },

  ];
  const activeTab=searchParams.get("tab") || "dashboard"

  return (
    <div>
      <div className="md:p-5 p-2 relative ">
        <Navbar />

        <div className="userdash-cta-container  ">
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
        </div>
        

        {/* Tab Switcher */}
<div className="flex justify-center -mt-5 mb-8 px-2 sm:px-4 md:px-0">
  <div className="w-full max-w-fit sm:max-w-fit">
    
    <div className="flex bg-white shadow-lg rounded-full p-1 border border-gray-200 instrument-sans ">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setSearchParams({ tab: tab.id })}
          className={`
            whitespace-nowrap transition-all duration-300 cursor-pointer rounded-full font-semibold

            text-xs sm:text-sm md:text-base
            px-2.5 sm:px-5 md:px-6 lg:px-8
            py-2 sm:py-2.5

            ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#6ABD11] to-[#5a9d0d] text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }
          `}
        >
          {tab.label}
        </button>
      ))}

    </div>
  </div>
</div>


        {activeTab === "dashboard" && <UserDashboard />}
      {activeTab === "plans" && <div><PlansLayout showtabs={false} padding="py-0" /></div>}
      {activeTab === "properties" && <div><Properties /></div>}
      {activeTab === "enquiries" && <div><EnquiryLayoutUser/></div>}
        </div>




  );
};

export default Header;
