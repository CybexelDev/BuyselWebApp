import React, { useState } from "react";
import apartments from "../../../assets/images/icons/apartments.svg";
import location from "../../../assets/images/icons/location(1).svg";
import Chatbutton from "../Chatbox/Chatbutton";


function PropertySearch() {
  const [activeTab, setActiveTab] = useState("Rent");

  const tabs = ["Rent", "Buy", "Sell", "Agent", "Lease"];

  return (
    <div className="relative w-full flex justify-center px-6 mt-16 md:mt-0 sm:px-2 md:px-4 mb-16">

      <div className="w-full max-w-[1043px] bg-[#f2f2f2] rounded-[39px] px-4 sm:px-6 lg:px-[28px] shadow-sm instrument-sans ">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-5 pt-6">

          <h2 className="text-[18px] sm:text-[20px] font-[600] text-[#453131] text-center lg:text-left">
            Search for available Properties
          </h2>

          <div className="flex  gap-2 sm:gap-1 host-grotesk mb-0 md:mb-2">

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center w-[50px] sm:w-[73px] h-[30px] rounded-[9px] text-sm sm:text-[17px] ${
                  activeTab === tab
                    ? "bg-black text-white font-[600]"
                    : "text-[#938181] font-[500]"
                }`}
              >
                {tab}
              </button>
            ))}

          </div>
        </div>

        {/* Search Section */}
     <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[250px_250px_250px_150px] xl:grid-cols-[269px_269px_269px_152px] gap-[12px] pb-6 justify-center xl:pl-3">

  <div className="poppins flex items-center z-10 w-auto xl:w-[269px] h-[52px] bg-[#dfd7d7] rounded-[17px] px-3 ">
    <input
      type="text"
      placeholder="Location"
      className="bg-transparent w-full outline-none text-[12px] text-gray-700 placeholder-[#888888ED]"
    />
    <img src={location} alt="location" className="w-5" />
  </div>


  <div className="poppins flex items-center z-10 w-auto xl:w-[269px] h-[52px] bg-[#dfd7d7] rounded-[17px] px-3">
    <input
      type="text"
      placeholder="Property Type"
      className="bg-transparent w-full outline-none text-[12px] text-gray-700 placeholder-[#888888ED]"
    />
    <img src={apartments} alt="apartment" className="w-5" />
  </div>

  <div className="poppins flex items-center z-10 w-auto xl:w-[269px] h-[52px] bg-[#dfd7d7] rounded-[17px] px-3 ">
    <input
      type="text"
      placeholder="Budget"
      className="bg-transparent w-full outline-none text-[12px] text-gray-700 placeholder-[#888888ED]"
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 256 256"
    >
      <path
        fill="#000"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m38.32 72H176a8 8 0 0 1 0 16h-8.19A44.06 44.06 0 0 1 124 152h-12.68l53.59 41.69a8 8 0 1 1-9.82 12.62l-72-56A8 8 0 0 1 88 136h36a28 28 0 0 0 27.71-24H88a8 8 0 0 1 0-16h61.29A28 28 0 0 0 124 80H88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16h-18.08a43.9 43.9 0 0 1 8.4 16"
      />
    </svg>
  </div>
  <div className="flex justify-center">

  <button
   className="instrument-sans z-10 w-[152px] sm:w-[220px] h-[52px] md:w-[220px] lg:w-[140px] xl:w-[152px] bg-[#6ABD11ED] text-white font-[600] rounded-[17px] text-[15px] mx-auto lg:mr-[10px]">
    Search Now
  </button>
  </div>
</div>

      </div>

      {/* Social Icons */}
     <div className="absolute w-full xl:w-0 flex items-center justify-between xl:flex-col xl:items-end lg:gap-[63px] xl:right-10 xl:-top-[10px] sm:-top-[50px] -top-[50px] px-10 xl:px-6">
  <div className="flex  gap-2">
  <a href="https://facebook.com" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26 " viewBox="0 0 20 20"><path fill="#000" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"/></svg>
  </a>

  <a href="https://wa.me/91XXXXXXXXXX" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#000" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg>
       </a>
  <a href="https://instagram.com" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="SVGlgxcXbAS" fill="#fff"><path fill-rule="evenodd" d="M2.184 21.331a.4.4 0 0 0 .487.494l4.607-1.204a10 10 0 0 0 4.76 1.207h.004c5.486 0 9.958-4.446 9.958-9.912a9.83 9.83 0 0 0-2.914-7.011A9.92 9.92 0 0 0 12.042 2c-5.486 0-9.958 4.446-9.958 9.911c0 1.739.458 3.447 1.33 4.954zM8.886 7.17c.183.005.386.015.579.443c.128.285.343.81.519 1.238c.137.333.249.607.277.663c.065.128.104.275.02.448l-.028.058c-.068.14-.116.24-.23.37l-.143.17c-.085.104-.17.206-.242.278c-.129.128-.262.266-.114.522s.668 1.098 1.435 1.777a6.6 6.6 0 0 0 1.903 1.2q.105.045.17.076c.257.128.41.108.558-.064c.149-.173.643-.749.817-1.005c.168-.256.34-.216.578-.128c.238.089 1.504.71 1.761.837l.143.07c.179.085.3.144.352.23c.064.109.064.62-.148 1.222c-.218.6-1.267 1.176-1.742 1.22l-.135.016c-.436.052-.988.12-2.956-.655c-2.426-.954-4.027-3.32-4.35-3.799l-.053-.076l-.005-.008c-.148-.197-1.049-1.402-1.049-2.646c0-1.19.587-1.81.854-2.092l.047-.05a.95.95 0 0 1 .687-.32c.173 0 .347 0 .495.005" clip-rule="evenodd"/></mask><path fill="#000" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="2.9" d="M2.184 21.331a.4.4 0 0 0 .487.494l4.607-1.204a10 10 0 0 0 4.76 1.207h.004c5.486 0 9.958-4.446 9.958-9.912a9.83 9.83 0 0 0-2.914-7.011A9.92 9.92 0 0 0 12.042 2c-5.486 0-9.958 4.446-9.958 9.911c0 1.739.458 3.447 1.33 4.954zM8.886 7.17c.183.005.386.015.579.443c.128.285.343.81.519 1.238c.137.333.249.607.277.663c.065.128.104.275.02.448l-.028.058c-.068.14-.116.24-.23.37l-.143.17c-.085.104-.17.206-.242.278c-.129.128-.262.266-.114.522s.668 1.098 1.435 1.777a6.6 6.6 0 0 0 1.903 1.2q.105.045.17.076c.257.128.41.108.558-.064c.149-.173.643-.749.817-1.005c.168-.256.34-.216.578-.128c.238.089 1.504.71 1.761.837l.143.07c.179.085.3.144.352.23c.064.109.064.62-.148 1.222c-.218.6-1.267 1.176-1.742 1.22l-.135.016c-.436.052-.988.12-2.956-.655c-2.426-.954-4.027-3.32-4.35-3.799l-.053-.076l-.005-.008c-.148-.197-1.049-1.402-1.049-2.646c0-1.19.587-1.81.854-2.092l.047-.05a.95.95 0 0 1 .687-.32c.173 0 .347 0 .495.005Z" clip-rule="evenodd" mask="url(#SVGlgxcXbAS)"/></svg>
  </a>
  </div>

  <Chatbutton />
      </div>
    </div>
  );
}

export default PropertySearch;
