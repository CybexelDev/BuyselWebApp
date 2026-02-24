import React, { useState } from "react";
import { FaHeart, FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProfileDashboard = () => {


  const activities = [
  {
  id: 1,
  icon: FaHeart,
  value: 24,
  label: "Wishlist Properties",
  iconColor: "text-red-500",
  iconSize: "w-[26px] h-[29px]",
},
  {
    id: 2,
    icon: FaBuilding,
    value: 30,
    label: "Properties Viewed",
    iconColor: "text-gray-700",
  },
  {
    id: 3,
    icon: FaEnvelope,
    value: 45,
    label: "Enquiries Sent",
    iconColor: "text-yellow-500",
  },
  {
    id: 4,
    icon: FaPhone,
    value: 6,
    label: "Agent Contacts",
    iconColor: "text-green-500",
  },
];


 



  return (
    <div className="my-6 pl-6 pr-[84px] bg-white min-h-screen flex flex-col md:flex-row gap-6">
  {/* Left Column */}
  <div className="flex flex-col space-y-6 md:w-1/2">
 
  </div>

  {/* Right Column */}
  <div className="flex flex-col space-y-6 md:w-1/2">


    <div className="bg-white p-6 ">
      <h2 className="instrument-sans text-[20px] font-[600] leading-[100%] mb-4">My Activity</h2>
      <div className="grid grid-cols-2 gap-y-[17px] gap-x-[23px]"> 
  {activities.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.id}
        className="
          bg-[#efefef]
          gap-[29px]
          px-[63px]
          py-[21px]
          rounded-[14px]
          flex
          items-center
          justify-between
        "
      >

         <Icon className={`${item.iconColor} ${item.iconSize}`} />
        <div className="flex flex-col text-start host-grotesk text-[#000000] gap-[18px]">
  <p className="text-[16px] leading-[14px] font-[400]">
    {item.label}
  </p>
  <p className="font-[500] text-[30px] leading-[26px]">
    {item.value}
  </p>
</div>
      </div>
    );
  })}
</div>
    </div>

    {/* My Wishlist */}
    <div>
      <h2 className="text-lg font-semibold mb-4">My Wishlist</h2>
      <div className="flex flex-wrap gap-6">
        </div>
      <div className="mt-4 text-right">
        <button className="text-green-800 font-semibold flex items-center gap-1">
          View all wishlist <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProfileDashboard;