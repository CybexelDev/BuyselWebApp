import { use, useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import logo from "../../../assets/images/logo/logo.png";
import agenthero from "../../../assets/images/agenthero/agenthero1.png";
import { Icon } from "@iconify/react";
import { getCityData } from "../../../Api/userApi";

function Header({ onchange, location, cityDataSend }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [selecetdLocation, setSelectedLocation] = useState("Location");



  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isVeryLarge = screenWidth > 1800;

  const width = 1700;
  const height = screenWidth < 900 ? 1080 : 440;

  /* Ticket shape values */
  const cornerRadius = 40;
  const topNotchWidth = 230;
  const bottomNotchWidth = 900;
  const notchDepth = 75;
  const notchDepth2 = 110;
  const notchRadius = 38;
  const notchRadius2 = 58;

  const topNotchStart = width / 2 - topNotchWidth / 2;
  const topNotchEnd = width / 2 + topNotchWidth / 2;
  const bottomNotchStart = width / 2 - bottomNotchWidth / 2;
  const bottomNotchEnd = width / 2 + bottomNotchWidth / 2;

  const ticketPath = `
    M ${cornerRadius},0
    L ${topNotchStart - notchRadius},0
    Q ${topNotchStart},0 ${topNotchStart},${notchRadius}
    L ${topNotchStart},${notchDepth - notchRadius}
    Q ${topNotchStart},${notchDepth} ${topNotchStart + notchRadius},${notchDepth}
    L ${topNotchEnd - notchRadius},${notchDepth}
    Q ${topNotchEnd},${notchDepth} ${topNotchEnd},${notchDepth - notchRadius}
    L ${topNotchEnd},${notchRadius}
    Q ${topNotchEnd},0 ${topNotchEnd + notchRadius},0
    L ${width - cornerRadius},0
    Q ${width},0 ${width},${cornerRadius}
    L ${width},${height - cornerRadius}
    Q ${width},${height} ${width - cornerRadius},${height}
    L ${bottomNotchEnd + notchRadius2},${height}
    Q ${bottomNotchEnd},${height} ${bottomNotchEnd},${height - notchRadius2}
    L ${bottomNotchEnd},${height - notchDepth2 + notchRadius2}
    Q ${bottomNotchEnd},${height - notchDepth2} ${bottomNotchEnd - notchRadius2},${height - notchDepth2}
    L ${bottomNotchStart + notchRadius2},${height - notchDepth2}
    Q ${bottomNotchStart},${height - notchDepth2} ${bottomNotchStart},${height - notchDepth2 + notchRadius2}
    L ${bottomNotchStart},${height - notchRadius2}
    Q ${bottomNotchStart},${height} ${bottomNotchStart - notchRadius2},${height}
    L ${cornerRadius},${height}
    Q 0,${height} 0,${height - cornerRadius}
    L 0,${cornerRadius}
    Q 0,0 ${cornerRadius},0
    Z
  `;


  useEffect(() => {

    const getCityDatas = async () => {
      if (selecetdLocation === "All Locations") {
        cityDataSend([]);
        return;
      }
      const city = await getCityData(selecetdLocation);
      if (city) {
        cityDataSend(city);
      }
      console.log("Selected city:", selecetdLocation);
      console.log("City API response:", city);
    };
    getCityDatas();
  }, [selecetdLocation]);

  return (
    <div
      className="relative w-full p-2 sm:p-3 mg:p-4 lg:p-5
                pb-10 max-[899px]:pb-3 min-[900px]:pb-0"
    >

      <div className="relative z-50">
        <Navbar top="top-[16px]" padding="lg:px-[29px]" right="right-4 sm:right-5" />
      </div>


      <div className="absolute top-2 sm:top-3 md:top-4 lg:top-5 left-1/2 -translate-x-1/2 z-40 w-[7%]">
        <img
          src={logo}
          alt="logo"
          className="w-[100px]"
        />
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <clipPath id="ticketClip">
            <path d={ticketPath} />
          </clipPath>
        </defs>

        {/* Background shape */}
        <path d={ticketPath} fill="#e7e7e7" />

        {/* HTML Content */}
        <foreignObject
          x="0"
          y="0"
          width={width}
          height={height}
          clipPath="url(#ticketClip)"
        >
          <div className="w-full h-full relative">

            {/* Main Content */}
            <div
              className="
                  relative 
                  flex flex-row max-[900px]:flex-col
                  items-start
                  max-[900px]:items-center
                  max-[900px]:text-center
                  justify-between items-start
                  px-4 sm:px-8 lg:pl-[29px]
                  pt-[90px] sm:pt-[110px]   
                  h-full
                  md:pr-0"
            >
              {/* Left Text */}
              <div className="w-full min-[900px]:max-w-[390px] z-10">
                <h2
                  className="
                  instrument-sans font-[600]
                  text-[55px] 
                  min-[900px]:text-[34px]   /* 900px → 1024px */
                  lg:text-[38px]
                  leading-[140%] mb-[10px]
                "
                >
                  Find the Right Agent for{" "}
                  <span className="text-[#6ABD11ED]">Your Property</span>
                </h2>

                <p
                  className="
                text-[#3e3131]
                  host-grotesk font-[400]
                  text-[34px] 
                   min-[900px]:text-[18px]   /* 900px → 1024px */
                  lg:text-[19px]
                  leading-[140%]
                "
                >
                  Plot specialists, rental experts, and home sale
                  professionals—all in one place.
                </p>
              </div>

              {/* Right Image */}
              <div
                className="
                relative
                 right-0
               bottom-60
               min-[900px]:bottom-40
                lg:bottom-45
                max-[900px]:w-[1100px]        /* < 900 */
                 min-[900px]:max-[1023px]:w-[530px] /* 900–1024 */
                 min-[1024px]:w-[570px] 

                pointer-events-none
              "
              >
                <img
                  src={agenthero}
                  alt="Agent Hero"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>

      {/* Search Box */}
      <div
        className="
    relative
    mb-10                 /* < 900px */
    min-[900px]:mb-0
    min-[900px]:absolute    
    min-[900px]:left-1/2
    min-[900px]:-translate-x-1/2
    min-[900px]:bottom-[15px]
    
    min-[900px]:max-[1023px]:w-[400px]
    lg:w-[469px]
    xl:w-[609px]
    2xl:w-[679px]

    bg-white
    rounded-[20px]
    
    max-[900px]:shadow-[0_4px_10.3px_rgba(136,130,130,0.25)]
    min-[900px]:shadow-[0_4px_8.7px_rgba(158,138,138,0.25)]
    px-[14px] lg:px-[20px]
    pt-[10px] sm:pt-[14px]
    z-30
    mt-3
    mx-auto"
      >
        <div className="relative inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="
             host-grotesk cursor-pointer mb-1 md:mb-0
             flex items-center gap-0.5
           bg-black text-white
             px-2 xl:px-3
             h-[30px] sm:h-[32px] lg:h-[35px] xl:h-[42px]
             rounded-[11px] md:rounded-[13px]
             text-[12px] xl:text-[14px]
             font-[500]
                      "
          >
            {selecetdLocation}
            <Icon
              icon="iconamoon:arrow-down-2-light"
              className="w-[20px] h-[20px]"
            />
          </button>
          {open && (
            <div className="absolute mt-2 w-40 bg-black shadow-lg rounded-2xl  z-50 p-1">
              <ul className="text-sm text-white host-grotesk">
                <li
                  onClick={() => {
                    setOpen(false);
                    setSelectedLocation("All Locations");
                  }}
                  className="px-4 py-2 hover:bg-[#75c222] hover:text-black rounded-xl cursor-pointer"
                >
                  All Locations
                </li>
                {Array.isArray(location) &&
                  location.map((loc, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setOpen(false);
                        setSelectedLocation(loc);
                      }}
                      className="px-4 py-2 hover:bg-[#75c222] hover:text-black rounded-xl cursor-pointer"
                    >
                      {loc}
                    </li>
                  ))}


              </ul>
            </div>
          )}
        </div>

        <div
          className="flex flex-row items-end gap-[10px]  min-[900px]:max-[1023px]:gap-[7px]   lg:gap-[12px]
           w-full min-[900px]:pb-[13px]  max-[900px]:pb-[13px]"
        >
          <div
            className="
        flex items-center gap-1 sm:gap-2
        h-[33px] sm:h-[35px] lg:h-[38px] xl:h-[44px]
        flex-1
        px-2 md:px-4
        border border-[#BCB6B6]
        rounded-[16px] md:rounded-[20px]
      "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] xl:w-[26px] xl:h-[26px]   "
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
              onChange={onchange}
              type="text"
              placeholder="(Search agents by name, location, city etc)"
              className="
              host-grotesk
              w-full
              text-[11px] md:text-[13px] lg:text-[14px]
              font-[400]
              placeholder:italic
              outline-none
              bg-transparent
              placeholder:text-[#757575]
              truncate"
            />
          </div>

          <button
            className="instrument-sans flex items-center justify-center h-[33px] sm:max-[900px]:h-[40px] min-[900px]:max-[1023px]:h-[38px] lg:h-[45px] xl:h-[52px] w-[45px]
                       sm:max-[900px]:w-[120px] min-[900px]:max-[1023px]:w-[100px] lg:w-[120px] xl:w-[152px] rounded-[13px] sm:rounded-[15px] lg:rounded-[17px] bg-[#75c222] text-white font-[650] text-[13px] lg:text-[14px] xl:text-[15px] hover:bg-[#6AB317] transition cursor-pointer"
          >
            {/* ICON → mobile only */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block sm:hidden w-[16px] h-[16px]"
            >
              <path
                d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* TEXT → tablet & up */}
            <span className="hidden sm:inline">Search Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
