import { LogOut } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";


function Topbar() {
  const details={
    name:"Mubaris",
    agentId:"AI029",
    plan:"Premium Agent"
  }
const profileRef = useRef(null)

  const[profile,setProfile]=useState(false)


   useEffect(() => {
    const closeDropdown = (e) => {
      if (!profileRef.current?.contains(e.target)) {
        setProfile(false);
      }
    };
  
    document.addEventListener("mousedown", closeDropdown);
  }, []);
    const { image, agentName, agentId, } = useSelector((state) => state.agent);

  return (
    <div className="w-full host-grotesk bg-white shadow-md px-6 py-2.5 flex justify-end items-center rounded-2xl gap-3 sm:gap-6">

      {/* Notification Icon */}
      <div className="relative cursor-pointer">
        <div className="w-9 sm:w-9 h-9 sm:h-9 flex items-center justify-center rounded-full 
                        text-black bg-[#6ABD117A] hover:bg-[#64af137a] ">
         <FaBell className="text-[16px] sm:text-[16px] md:text-[18px]" />  
               </div>

       
      </div>

      {/* Profile Section */}
      <div className="flex items-center "
      onClick={()=>setProfile(!profile)}
      ref={profileRef}>
        <img
          src={image}
          alt="Profile"
          className="w-9 sm:w-11 h-9 sm:h-11 rounded-full object-cover border-2 border-[#6ABD11] cursor-pointer"
        />

              <div
        className={`absolute right-5 sm:right-10 top-20 sm:top-25 w-50 sm:w-72 bg-white rounded-2xl border border-gray-100 
        shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden
        transition-all duration-500 origin-top
        ${
          profile
            ? "max-h-50 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >

        {/* Profile Info */}
        <div className="p-5 border-gray-100">
          <p className="text-sm font-semibold text-gray-900">
            Hi, {details?.name || "User Name"}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Agent ID: {details?.agentId || "N/A"}
          </p>

          <div className="mt-1 space-y-1 text-xs text-gray-500">
            <p>
              Status:
              <span className="ml-1 font-semibold text-[#6ABD11]">
                Active
              </span>
            </p>

            <p>
              Plan:
              <span className="ml-1 font-semibold text-gray-800">
                {details?.plan}
              </span>
            </p>
          </div>
        </div>

        <div className="border border-gray-100 mx-2 sm:mx-3"/>

        {/* Logout */}
        <div className="p-3">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white
          bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
          transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>


       
      </div>

    </div>
  );
}

export default Topbar;