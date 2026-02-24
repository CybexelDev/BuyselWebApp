import React, { useState } from "react";
import { FaHeart, FaBuilding, FaEnvelope, FaPhone } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProfileDashboard = () => {


 



  return (
    <div className="my-6 px-6 bg-white min-h-screen flex flex-col md:flex-row gap-6">
  {/* Left Column */}
  <div className="flex flex-col space-y-6 md:w-1/2">
 
  </div>

  {/* Right Column */}
  <div className="flex flex-col space-y-6 md:w-1/2">


    <div className="bg-white p-6 ">
      <h2 className="instrument-sans text-[20px] font-[600] leading-[100%] mb-4">My Activity</h2>
      <div className="flex flex-wrap gap-4">
        <div className="bg-gray-100 p-4 rounded flex-1 min-w-[45%] flex items-center justify-between">
          <FaHeart className="text-red-500 text-xl" />
          <div className="text-right">
            <p className="font-semibold">24</p>
            <p className="text-sm text-gray-500">Wishlist Properties</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded flex-1 min-w-[45%] flex items-center justify-between">
          <FaBuilding className="text-gray-700 text-xl" />
          <div className="text-right">
            <p className="font-semibold">30</p>
            <p className="text-sm text-gray-500">Properties Viewed</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded flex-1 min-w-[45%] flex items-center justify-between">
          <FaEnvelope className="text-yellow-500 text-xl" />
          <div className="text-right">
            <p className="font-semibold">45</p>
            <p className="text-sm text-gray-500">Enquiries Sent</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded flex-1 min-w-[45%] flex items-center justify-between">
          <FaPhone className="text-green-500 text-xl" />
          <div className="text-right">
            <p className="font-semibold">6</p>
            <p className="text-sm text-gray-500">Agent Contacts</p>
          </div>
        </div>
      </div>
    </div>

    {/* My Wishlist */}
    <div>
      <h2 className="text-lg font-semibold mb-4">My Wishlist</h2>
      <div className="flex flex-wrap gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden flex-1 min-w-[45%]">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="bg-white p-1 rounded-full shadow">
                  <FaHeart className="text-red-500" />
                </button>
                <button className="bg-white p-1 rounded-full shadow">
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-sm text-gray-500">{item.area}</p>
              <p className="text-sm font-semibold">{item.price}</p>
              <p className="text-sm text-gray-500">Listed by {item.listedBy}</p>
              <div className="flex space-x-2 mt-2">
                <button className="bg-green-500 text-white px-4 py-1 rounded w-full">WhatsApp</button>
                <button className="border border-gray-300 px-4 py-1 rounded w-full">Call</button>
              </div>
            </div>
          </div>
        ))}
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