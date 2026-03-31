import React, { useState } from "react";
import "./BlogBanner.css";
import logo from "../../../assets/images/logo/logo.png";
import Navbar from "../../../Components/Navbar/Navbar";

import bgImage from "../../../assets/images/blog/BgImage.png";

const BlogBanner = ({
  h1 = "Welcome to Buysel Blogs",
  text = "Insights, tips, and updates to help you make smarter property decisions.",
}) => {
  return (
    <div className="md:p-5 p-2 relative">
      <Navbar color="text-white" />
      <div
        className="relative w-full min-h-[300px] md:min-h-[354px] bg-cover bg-center rounded-[32px] overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Logo */}
        <div className="blog-cta-logo-container relative z-10">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="blog-cta-logo w-[100px]" />
          </div>
        </div>

        {/* headings*/}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 mt-10 md:mt-16">
          <h1 className="text-[24px] md:text-[32px] font-[530] instrument-sans ">
            {h1}
          </h1>

          <p className="mt-3 font-normal  md:text-[16px] text-gray-200 max-w-xl host-grotesk ">
            {text}
          </p>

          {/* Search*/}
          <div
            className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center 
                w-full max-w-2xl gap-3 sm:gap-2"
          >
            {/* Input Wrapper */}
            <div
              className="flex items-center gap-3 bg-white rounded-full 
                  px-3 py-3 flex-1 shadow-md"
            >
              {/* Search Icon */}
              <svg
                width="20"
                height="20"
                className="sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="text"
                placeholder="Search what you need"
                className="flex-1 outline-none text-gray-600 
                 text-sm sm:text-sm 
                 inter italic"
              />
            </div>

            {/* Button */}
            <button
              className="bg-[#84CC16] text-white 
                     w-full sm:w-auto
                     px-6 sm:px-9 
                     py-3 
                     rounded-full 
                     mb-5 md:mb-0
                     font-[550] 
                     text-[14px] sm:text-[16px]
                     hover:bg-[#5da015] 
                     transition shadow-md 
                     inter"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
