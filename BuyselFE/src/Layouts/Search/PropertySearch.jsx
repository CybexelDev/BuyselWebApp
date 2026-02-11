import React, { useState } from "react";
import { } from "lucide-react";
import apartments from '../../assets/images/icons/apartments.svg'
import location from '../../assets/images/icons/location (1).svg'



function PropertySearch() {
  const [activeTab, setActiveTab] = useState("Rent");

  const tabs = ["Rent", "Buy", "Sell", "Agent", "Lease"];

  return (
    <div className="relative w-full flex justify-center mb-16">

      <div className="w-[1043px]  h-[154px] bg-[#f2f2f2] rounded-[39px] px-8  shadow-sm instrument-sans">
        <div className="flex flex-row items-center justify-between gap-[31px] mb-5 pt-[25px]">
          <h2 className=" text-[20px] font-[600] text-[#453131]">
            Search for available Properties
          </h2>

          <div className="flex items-center host-grotesk justify-center  gap-[31px] px-10   w-[352px] h-[30px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` flex items-center w-[73px] h-[30px]   justify-center ${
                  activeTab === tab
                    ? "bg-black text-white font-[600] px-[19px]  rounded-[9px] text-[17.55px] "
                    : "text-[#938181]  font-[500] "
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="flex flex-row gap-3">

          <div className="poppins flex items-center h-[52px] w-[269px] bg-[#dfd7d7] rounded-[17px] px-2">
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent w-full outline-none text-[12px] font-[400] text-gray-700 placeholder-[#888888ED]"
            />
            <img src={location} alt="location" />
          </div>

          <div className="poppins flex items-center h-[52px] w-[269px] bg-[#dfd7d7] rounded-[17px] px-2">
            <input
              type="text"
              placeholder="Property Type"
              className="bg-transparent w-full outline-none text-[12px] font-[400] text-gray-700 placeholder-[#888888ED]"
            />
            <img src={apartments} alt="apartment" />
          </div>

          <div className="poppins flex items-center h-[52px] w-[269px] bg-[#dfd7d7] rounded-[17px] px-2">
            <input
              type="text"
              placeholder="Budget"
              className="bg-transparent w-full outline-none text-[12px] font-[400] text-gray-700 placeholder-[#888888ED]"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-1.535q.27.466.409 1H15a1 1 0 1 1 0 2h-1.126a4.01 4.01 0 0 1-2.302 2.68L13.6 16.2a1 1 0 0 1-1.2 1.6l-3.992-2.994A.99.99 0 0 1 8 14c0-.257.103-.504.27-.683A1 1 0 0 1 9 13h1a2 2 0 0 0 1.732-1H9a1 1 0 1 1 0-2h2.732A2 2 0 0 0 10 9H9a1 1 0 0 1-1-1"/></g></svg>
          </div>

          <button className="w-[152px] h-[52px]  bg-[#6ABD11ED]  text-white font-semibold px-8 py-3 rounded-[17px]">
            <span className=" font-[700] text-[15px] ">Search Now</span>
          </button>
        </div>
      </div>


        <div className="absolute left-[1330px] -top-[13px] flex  w-[85px] h-[26px] gap-[6px] ">
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




    </div>
  );
}
export default PropertySearch