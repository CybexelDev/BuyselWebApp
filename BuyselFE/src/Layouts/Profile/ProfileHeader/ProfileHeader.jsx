
import React, { useEffect, useState } from "react";
import './profileHeader.css'
import logo from '../../../assets/images/logo/logo.png'
import house from '../../../assets/images/profile/house.png'
import profile from '../../../assets/images/profile/profile.png'
import location from '../../../assets/images/profile/location.png'
import { Link } from "react-scroll"
import { FaEdit } from "react-icons/fa";
import { useRef } from "react";



import line from '../../../assets/images/header/line.png'
import { ArrowUpRight } from 'lucide-react';

import Navbar from "../../../Components/Navbar/Navbar";
const ProfileHeader = ({setMode}) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(profile);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative p-5 ">

            <Navbar  />

      {/* ===== BANNER ===== */}
      <div className="profile-cta-container relative overflow-visible">

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
    absolute

    bottom-[-56px]
    left-0
    md:bottom-[-100px]
    
   
    lg:right-15
    lg:left-6
    lg:top-50
    lg:bottom-0
    lg:mb-0
        z-20
    flex
    flex-col
    lg:flex-row
    lg:items-center
    gap-2 lg:gap-6
    mt-0 lg:mt-0
    px-4 lg:px-0
  "
>

  {/* LEFT: Profile Image */}
 <div className="w-30 h-30 sm:w-28 sm:h-28 md:w-[200px] l md:h-[200px] lg:w-[213px] lg:h-[213px] 
                  rounded-full overflow-hidden 
                  border-4 border-white shadow-lg flex-shrink-0 relative">
      <img
        src={image}
        alt="profile"
        className="w-full h-full object-cover"
      />

   

   <div
        onClick={handleEditClick}
        className="absolute top-4 right-2 md:top-5 md:right-8 bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
      >
        <FaEdit className="text-gray-600 text-sm" />
      </div>



      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
        accept="image/*"
      />

    </div>

  {/* RIGHT: Content */}
  <div className="flex flex-col items-start  lg:items-start 
                  text-center lg:ml-0 lg:text-center ml-5 lg:ml-0
                   lg:mt-10 host-grotesk">

    <h2 className="text-[16px] sm:text-[20px] md:text-2xl 
                   text-[#393939] font-medium">
      Raja Kumar
    </h2>
  {/* for pushing */}
    <p className="text-[#393939] mt-1 text-[13px] sm:text-base flex font-medium ml-[-7px]">
      <img src={location} className="w-[26px] h-[24px]"/>
      Chennai Tamil Nadu
    </p>

    <div className="flex gap-3 sm:gap-4  mb-7 mt-2 lg:mb-0 lg:mt-4 
                    flex-nowrap justify-start lg:justify-start">


            <Link to="personalDetails" smooth duration={500} offset={-120}>
      <button className="bg-[#2B2E28] text-white 
                         px-3 py-2 sm:px-5 sm:py-2 
                         text-sm 
                         rounded-lg text-wrap instrument-sans text-[16px] font-[550] cursor-pointer" 
              onClick={() => setMode("edit")}>
          Edit Profile
      </button>
     </Link>


     
           <Link to="personalDetails" smooth duration={500} offset={-120} >
      <button className="bg-gray-200 
                         px-2 py-1.5 sm:px-5 sm:py-2 
                         text-sm sm:text-base
                         rounded-lg instrument-sans text-[16px] font-[550] cursor-pointer"
                onClick={() => setMode("changepassword")}>
          Change Password
      </button>
      </Link>

    </div>

  </div>
</div>
    </div>
  );
};
export default ProfileHeader
