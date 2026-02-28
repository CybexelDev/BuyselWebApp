import React, { useState } from "react";
import "./contactheader.css";
import logo from "../../../assets/images/logo/logo.png";
import Navbar from "../../../Components/Navbar/Navbar";
import bgimg from "../../../assets/images/contact/bgimg.png";

const Header = () => {
  return (
    <div className="p-5 relative ">
      <Navbar  />
      {/* bgImage */}
<div
  className="
    relative w-full min-h-[350px] md:min-h-[420px]
    bg-[#e6e6e6] rounded-[32px] overflow-hidden
    bg-no-repeat
    bg-[position:right_100%]   /* Mobile: push image down (80% from top) */
    md:bg-right               /* Medium and above: align right as before */
    bg-[length:90%_250px]                             /* Width 100%, height auto */
    sm:bg-[length:87%]
    lg:bg-[length:79%]
  "
  style={{
    backgroundImage: `url(${bgimg})`,
  }}
>
        {/* Logo */}
        <div className="contact-cta-logo-container relative z-10">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="contact-cta-logo w-[100px]"
            />
          </div>
        </div>
      </div>

    </div>

  );
};

export default Header;















