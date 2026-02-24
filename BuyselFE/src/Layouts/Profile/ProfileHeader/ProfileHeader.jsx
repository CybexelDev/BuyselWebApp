
import React, { useEffect, useState } from "react";
import './profileHeader.css'
import logo from '../../../assets/images/logo/logo.png'
import house from '../../../assets/images/profile/house.png'
import profile from '../../../assets/images/profile/profile.png'


import line from '../../../assets/images/header/line.png'
import { ArrowUpRight } from 'lucide-react';

import Navbar from "../../../Components/Navbar/Navbar";
const ProfileHeader = () => {
  return (
    <div className="relative p-5">

            <Navbar top="top-[18px]" />

      {/* ===== BANNER ===== */}
      <div className="profile-cta-container relative overflow-visible">

        {/* Logo */}
        <div className="profile-cta-logo-container">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="profile-cta-logo w-[100px]"
            />
          </div>
        </div>

        {/* House Image */}
        <div className="absolute md:right-0 md:bottom-0  md:top-20 lg:top-6 w-[100%]    w-[50%] md:w-[430px] md:h-[290px]   lg:w-[538px] lg:h-[307px]">
          <img
            src={house}
            alt="house"
            className="w-full  object-cover lg:object-contain"
          />
        </div>

    

      </div>
         
<div
  className="
    relative
    lg:absolute
    bottom-40
    lg:left-6
    lg:top-50
    z-20

    flex
    flex-col
    lg:flex-row
    items-center
    lg:items-center
    gap-6

    mt-0 lg:mt-0
    px-6 lg:px-0
  "
>

  {/* LEFT: Profile Image */}
  <div className="w-28 h-28 md:w-[213px] md:h-[213px] rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 ">
    <img
      src={profile}
      alt="profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* RIGHT: Content */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 host-grotesk">

    <h2 className="text-[24px] text-[#393939] md:text-2xl font-medium">
      Raja Kumar
    </h2>

    <p className="text-gray-500 mt-1">
      <img></img> Chennai, Tamil Nadu
    </p>

    <div className="flex gap-4 mt-4 flex-wrap justify-center lg:justify-start">
      <button className="bg-black text-white px-5 py-2 rounded-lg">
        Edit Profile
      </button>
      <button className="bg-gray-200 px-5 py-2 rounded-lg">
        Change Password
      </button>
    </div>

  </div>
</div>
    </div>
  );
};
export default ProfileHeader
