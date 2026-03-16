import React from "react";
import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";

function Topbar() {
    const { image, agentName, agentId, } = useSelector((state) => state.agent);

  return (
    <div className="w-full host-grotesk bg-white shadow-md px-6 py-4 flex justify-end items-center rounded-2xl gap-3 sm:gap-6">

      {/* Notification Icon */}
      <div className="relative cursor-pointer">
        <div className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-full 
                        text-black bg-[#6ABD117A] hover:bg-[#64af137a] ">
         <FaBell className="text-[16px] sm:text-[16px] md:text-[18px]" />  
               </div>

       
      </div>

      {/* Profile Section */}
      <div className="flex items-center  cursor-pointer">
        <img
          src={image}
          alt="Profile"
          className="w-9 sm:w-11 h-9 sm:h-11 rounded-full object-cover border-2 border-[#6ABD11]"
        />

       
      </div>

    </div>
  );
}

export default Topbar;