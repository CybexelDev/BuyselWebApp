import React, { useEffect, useState } from "react";
import './header.css'
import logo from '../../../assets/images/logo/logo.png'
import line from '../../../assets/images/header/line.png'
import { ArrowUpRight } from 'lucide-react';

import img from "../../../assets/images/carousel/he.png"
import img2 from "../../../assets/images/carousel/he.png"
import img3 from "../../../assets/images/carousel/he.png"
import Navbar from "../../../Components/Navbar/Navbar";
import flat from "../../../assets/images/propertDetail/flat.png"
import phone from "../../../assets/images/propertDetail/phone.png"
import seller from "../../../assets/images/propertDetail/seller.jpg"
import { X } from "lucide-react";

const HeaderProperty = ({ property }) => {

    const [showGallery,setShowGallery]=useState(false)
    const [currentIndex,setCurrentIndex]=useState(0)
    const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);

    const nextImage = () => {
  setCurrentIndex((prev) =>
    prev === property.images.length - 1 ? 0 : prev + 1
  );
};

const prevImage = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? property.images.length - 1 : prev - 1
  );
};

const handleTouchStart = (e) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;

  if (distance > 50) {
    nextImage(); 
  }

  if (distance < -50) {
    prevImage(); 
  }
};


useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Escape") {
      setShowGallery(false);
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, []);
    return (
        <div className='px-4 md:px-5 py-3 relative'>
            <Navbar top="top-[18px]" />
            <div className="detail-cta-container">
                <div className="detail-cta-logo-container ">
                    <div className='flex items-center justify-center'>
                        <img src={logo} alt="logo" className="footer-cta-logo w-[80px] md:w-[100px]" />
                    </div>
                </div>
                {/* top */}
                <div className="px-0 md:px-[22px] grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-12">

                    {/* Left Image side */}
                    <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-[1.7fr_1fr] gap-3 lg:gap-[12px]">
                        
                        {/* main image */}
                        <div className="col-span-2 lg:col-span-1 lg:row-span-2">
                            <img
                                src={property.images[0]}
                                alt="property"
                                className="w-full h-[240px] md:h-[300px] lg:w-[589px] lg:h-[365px] object-cover rounded-2xl lg:rounded-3xl"
                            />
                        </div>
                       {/* left side images */}
                        <div className="col-span-1 lg:col-span-1">
                            <img
                                src={property.images[1]}
                                alt=""
                                className="w-full h-[120px] md:h-[160px] lg:w-[320px] lg:h-[176.5px] object-cover rounded-xl lg:rounded-3xl"
                            />
                        </div>

                    
                        <div className="relative col-span-1 lg:col-span-1 overflow-hidden rounded-xl lg:rounded-2xl">
                            <img
                                src={property.images[2]}
                                alt=""
                                className="w-full h-[120px] md:h-[160px] lg:h-[176.5px] object-cover inverted-radius overflow-hidden"
                            />
                              <button onClick={()=>setShowGallery(true)} className="absolute bottom-0  text-[18px] right-[0px]   bg-black text-white max-[400px]:px-[17px]  max-[400px]:py-[14px] px-[18px] py-[13px] rounded-[19px] host-grotesk">
                                View All Images
                            </button>
                        </div>
                    </div>
{showGallery && (

  <div
    className="fixed inset-0  backdrop-blur-lg z-50 flex items-center justify-center"
    onClick={() => setShowGallery(false)}    
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}

  >
    <div
      className="relative max-w-5xl w-full px-6 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
    <button
  onClick={() =>setShowGallery(false)
  }
  className="absolute top-4 right-6 bg-black z-999 hover:bg-black/40 backdrop-blur-md p-2 rounded-full transition-all duration-300"

>
  <X className="text-[#74C122] w-6 h-6" />
</button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-full flex-shrink-0 max-h-[80vh] object-contain rounded-2xl"
            />
          ))}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-6xl"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-6xl"
      >
        ›
      </button>

      {/* THUMBNAILS */}
      <div className="flex justify-center gap-3 mt-6">
        {property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 h-14 object-cover rounded-lg cursor-pointer border-2 ${
              currentIndex === index
                ? "border-white"
                : "border-transparent opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
)}
                    {/* right side */}
                    <div>
                        <div className="bg-white rounded-[18px] lg:rounded-[22px] p-5 lg:p-6 shadow-sm h-full lg:h-[356px] mt-0 lg:mt-[8px] host-grotesk">

                            <h3 className="text-lg md:text-xl font-semibold mb-4 lg:mb-6">
                                Contact Seller
                            </h3>

                   <div className="flex items-center gap-3 lg:gap-4 mb-5 lg:mb-6">

                                <img
                                    src={seller}
                                    alt="seller"
                                    className="w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover"
                                />

                                <div>

                                    <div className="flex items-center gap-2">
                                        <img src={flat} alt="building" className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                                        <p className="text-xs lg:text-sm text-gray-500 flex items-center gap-1">
                                            Listed By {property.seller.company}
                                            <svg width="16" height="16" className="lg:w-[20px] lg:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.12023 1.74583C5.89206 1.68388 6.62475 1.38031 7.21423 0.878231C7.87983 0.311341 8.72554 0 9.59983 0C10.4741 0 11.3198 0.311341 11.9854 0.878231C12.5749 1.38031 13.3076 1.68388 14.0794 1.74583C14.9511 1.8155 15.7695 2.19339 16.3879 2.81175C17.0063 3.43011 17.3842 4.24851 17.4538 5.12023C17.515 5.89183 17.8186 6.62503 18.3214 7.21423C18.8883 7.87983 19.1997 8.72554 19.1997 9.59983C19.1997 10.4741 18.8883 11.3198 18.3214 11.9854C17.8194 12.5749 17.5158 13.3076 17.4538 14.0794C17.3842 14.9511 17.0063 15.7695 16.3879 16.3879C15.7695 17.0063 14.9511 17.3842 14.0794 17.4538C13.3076 17.5158 12.5749 17.8194 11.9854 18.3214C11.3198 18.8883 10.4741 19.1997 9.59983 19.1997C8.72554 19.1997 7.87983 18.8883 7.21423 18.3214C6.62475 17.8194 5.89206 17.5158 5.12023 17.4538C4.24851 17.3842 3.43011 17.0063 2.81175 16.3879C2.19339 15.7695 1.8155 14.9511 1.74583 14.0794C1.68388 13.3076 1.38031 12.5749 0.878231 11.9854C0.311341 11.3198 0 10.4741 0 9.59983C0 8.72554 0.311341 7.87983 0.878231 7.21423C1.38031 6.62475 1.68388 5.89206 1.74583 5.12023C1.8155 4.24851 2.19339 3.43011 2.81175 2.81175C3.43011 2.19339 4.24851 1.8155 5.12023 1.74583ZM14.0482 8.04823C14.2668 7.82191 14.3878 7.51879 14.385 7.20415C14.3823 6.88951 14.2561 6.58854 14.0336 6.36605C13.8111 6.14356 13.5101 6.01735 13.1955 6.01462C12.8809 6.01189 12.5778 6.13284 12.3514 6.35143L8.39983 10.303L6.84823 8.75143C6.62191 8.53284 6.31878 8.41189 6.00415 8.41462C5.68951 8.41736 5.38854 8.54356 5.16605 8.76605C4.94356 8.98854 4.81736 9.28951 4.81462 9.60415C4.81189 9.91878 4.93284 10.2219 5.15143 10.4482L7.55143 12.8482C7.77646 13.0732 8.08163 13.1996 8.39983 13.1996C8.71803 13.1996 9.0232 13.0732 9.24823 12.8482L14.0482 8.04823Z" fill="#0084FF" />
                                            </svg>
                                        </p>
                                    </div>

                                    <p className="text-base lg:text-lg font-semibold mt-1">
                                        {property.seller.name}
                                    </p>
                                </div>
                            </div>

                            <button className="w-full shadow-sm bg-[#7BC21F] text-[15px] lg:text-[18px] text-white py-2.5 lg:py-3 rounded-[12px] lg:rounded-[15px] mb-3 lg:mb-[14px] mt-6 lg:mt-12 font-medium flex items-center justify-center gap-2">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.566 0.011137C8.22698 0.2127 6.27229 0.934574 4.51916 2.25176C3.96604 2.66426 3.02854 3.57364 2.57385 4.13145C1.30823 5.6877 0.487913 7.58145 0.17385 9.63926C0.075413 10.3049 0.066038 11.8893 0.1551 12.5455C0.3426 13.9283 0.745726 15.2174 1.32698 16.3283L1.55666 16.7549L0.769163 19.633C0.333225 21.2127 -0.0136496 22.5158 0.00041295 22.5252C0.00978795 22.5346 1.34104 22.1971 2.95823 21.7705L5.89729 20.9971L6.47385 21.2736C8.73791 22.3564 11.4801 22.6283 13.941 22.0143C15.4926 21.6252 17.0442 20.8564 18.2864 19.858C19.4957 18.8783 20.6629 17.3971 21.3239 15.9908C22.3317 13.8674 22.6457 11.5846 22.2567 9.26426C21.4645 4.54864 17.6489 0.822075 12.9004 0.123638C12.3192 0.0392628 10.9973 -0.0263634 10.566 0.011137ZM12.5535 2.02676C14.5317 2.29864 16.3129 3.19395 17.766 4.64239C19.9926 6.87364 20.9207 9.95332 20.2926 13.0236C19.9926 14.4815 19.2989 15.9205 18.3379 17.0689C16.8848 18.8127 14.9348 19.9189 12.652 20.3127C11.9957 20.4205 10.4817 20.4205 9.83948 20.3127C8.64416 20.1018 7.58948 19.7268 6.60979 19.1596L6.1926 18.9205L4.48635 19.3705C3.54416 19.6143 2.76604 19.8064 2.75666 19.7971C2.74729 19.7877 2.93948 19.0283 3.1926 18.1096L3.64729 16.4408L3.40823 16.0518C2.1426 13.9799 1.7301 11.6689 2.19885 9.33457C2.85979 6.05801 5.30666 3.35332 8.50823 2.35489C9.86291 1.93301 11.1239 1.82989 12.5535 2.02676Z" fill="white" fill-opacity="0.93"/>
<path d="M7.04528 6.02505C6.52028 6.19849 5.8359 7.10317 5.65309 7.86255C5.37184 9.06255 5.73746 10.2672 6.86246 11.8141C7.88434 13.2204 8.99059 14.3125 10.2046 15.1094C10.9921 15.625 12.3609 16.2204 13.2656 16.4407C13.739 16.5532 14.5968 16.5625 14.9953 16.4594C15.614 16.2954 16.3875 15.7704 16.6359 15.3438C16.8 15.0672 16.9078 14.5985 16.9171 14.1719C16.9218 13.8391 16.9125 13.7969 16.8093 13.7219C16.5843 13.5485 14.4093 12.5454 14.2078 12.5172C13.964 12.4797 13.9546 12.4891 13.4812 13.1032C12.9937 13.7313 12.764 13.9516 12.6093 13.9516C12.4125 13.9516 11.2172 13.3422 10.725 12.986C10.4906 12.8172 10.1203 12.5079 9.90465 12.2969C9.25309 11.6547 8.50778 10.6282 8.50778 10.3704C8.50778 10.286 8.59684 10.1313 8.7609 9.92505C9.27184 9.28755 9.3984 9.07661 9.3984 8.87036C9.3984 8.62661 8.48434 6.40474 8.28746 6.17505C8.15621 6.02036 8.15621 6.02036 7.66403 6.00161C7.39215 5.99224 7.11559 6.00161 7.04528 6.02505Z" fill="white" fill-opacity="0.93"/>
</svg>

                                <span>Whatsapp</span>
                            </button>

                            <button className="w-full shadow-sm bg-white text-black text-[15px] lg:text-[18px] py-2.5 lg:py-3 rounded-[12px] lg:rounded-[15px] mb-1 lg:mb-3 font-medium flex items-center justify-center gap-2 border border-gray-100 lg:border-none">
                                <img src={phone} className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] rounded-full object-cover" />
                                <span>Contact</span>
                            </button>
                        </div>
                    </div>

                </div>
                 {/* bottom side */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 lg:gap-[16px] mt-4 px-0 md:px-5 instrument-sans">

                    <div className="lg:col-span-1 bg-[#FBFBFB] rounded-[18px] lg:rounded-[23px] px-5 lg:px-6 pt-4 lg:pt-3 pb-4 lg:pb-0 shadow-sm">
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold instrument-sans leading-tight">
                                {property.title}
                            </h2>

                            <span className="bg-[#7BC21F] text-white text-xs lg:text-sm host-grotesk px-3 py-1 lg:px-4 lg:py-1 rounded-full w-max">
                                {property.status}
                            </span>
                        </div>

                        <p className="text-gray-500 text-[14px] lg:text-[16px] mt-2 mb-2 flex items-center gap-1.5 lg:gap-2 host-grotesk">
                            📍 {property.location}
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 lg:mt-6 host-grotesk gap-2 sm:gap-0">
                            <div className="flex items-center gap-2 lg:gap-3">
                                <h3 className="text-xl lg:text-2xl font-bold">
                                    {property.price}
                                </h3>
                                <span className="text-gray-400 text-[12px] lg:text-[14px]">
                                    | {property.area}
                                </span>
                            </div>

                            <p className="text-[11px] lg:text-xs text-gray-400">
                                Posted On {property.postedOn}
                            </p>
                        </div>
                    </div>

                    {/* bottom right */}
                    <div className="bg-white rounded-[18px] lg:rounded-[23px] px-5 py-4 lg:px-6 lg:py-3 shadow-sm border border-[#7BC21F] host-grotesk">

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 text-xs lg:text-sm">

                            <div>
                                <p className="font-semibold text-[15px] lg:text-[19px] flex items-center gap-1">
                                    <svg width="24" height="24" className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.25 10.5V4.5C20.25 4.30109 20.171 4.11032 20.0303 3.96967C19.8897 3.82902 19.6989 3.75 19.5 3.75H4.5C4.30109 3.75 4.11032 3.82902 3.96967 3.96967C3.82902 4.11032 3.75 4.30109 3.75 4.5V10.5C3.15326 10.5 2.58097 10.7371 2.15901 11.159C1.73705 11.581 1.5 12.1533 1.5 12.75V20.25H3.1875V18.75H20.8125V20.25H22.5V12.75C22.5 12.1533 22.2629 11.581 21.841 11.159C21.419 10.7371 20.8467 10.5 20.25 10.5ZM11.25 10.5H5.625V9C5.625 8.80109 5.70402 8.61032 5.84467 8.46967C5.98532 8.32902 6.17609 8.25 6.375 8.25H10.5C10.6989 8.25 10.8897 8.32902 11.0303 8.46967C11.171 8.61032 11.25 8.80109 11.25 9V10.5ZM12.75 9C12.75 8.80109 12.829 8.61032 12.9697 8.46967C13.1103 8.32902 13.3011 8.25 13.5 8.25H17.625C17.8239 8.25 18.0147 8.32902 18.1553 8.46967C18.296 8.61032 18.375 8.80109 18.375 9V10.5H12.75V9Z" fill="black" />
                                    </svg>
                                    Bedrooms
                                </p>
                                <p className="text-gray-500 pl-6 lg:pl-7">{property.features.bedrooms}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-[15px] lg:text-[19px] flex items-center gap-1">
                                    <svg width="24" height="24" className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 14V12H4V14C4 15.138 4.583 17.248 6.745 17.841C7.115 17.943 7.532 18 8 18H16C16.4236 18.0038 16.8457 17.9503 17.255 17.841C19.417 17.248 20 15.138 20 14Z" fill="black" />
                                        <path d="M3 12H4M4 12H20M4 12V14C4 15.138 4.583 17.248 6.745 17.841M20 12C20.2652 12 20.5196 11.8946 20.7071 11.7071C20.8946 11.5196 21 11.2652 21 11V7C21 6 20.4 4 18 4C15.6 4 15 6 15 7M20 12V14C20 15.138 19.417 17.248 17.255 17.841M15 7H13M15 7H17M17.255 17.841C16.8457 17.9503 16.4236 18.0038 16 18H8C7.532 18 7.115 17.943 6.745 17.841M17.255 17.841L18 20M6.745 17.841L6 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Bathrooms
                                </p>
                                <p className="text-gray-500 pl-6 lg:pl-7">{property.features.bathrooms}</p>
                            </div>

                            <div>
                                <p className="font-semibold flex text-[15px] lg:text-[19px] items-center gap-1">
                                    <svg width="24" height="24" className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.1456 10.964L20.1616 9.1208L18.4016 5.6008C18.2504 5.35503 18.0386 5.15232 17.7863 5.0122C17.5341 4.87208 17.2501 4.79928 16.9616 4.8008H7.04156C6.75305 4.79928 6.469 4.87208 6.21678 5.0122C5.96457 5.15232 5.75269 5.35503 5.60156 5.6008L3.84156 9.1208L1.85756 10.964C1.77674 11.039 1.71228 11.1298 1.66822 11.2309C1.62417 11.3319 1.60148 11.441 1.60156 11.5512V18.4008C1.60156 18.613 1.68585 18.8165 1.83588 18.9665C1.98591 19.1165 2.18939 19.2008 2.40156 19.2008H5.60156C5.92156 19.2008 6.40156 18.8808 6.40156 18.5608V17.6008H17.6016V18.4008C17.6016 18.7208 17.9216 19.2008 18.2416 19.2008H21.6016C21.8137 19.2008 22.0172 19.1165 22.1672 18.9665C22.3173 18.8165 22.4016 18.613 22.4016 18.4008V11.5512C22.4017 11.441 22.379 11.3319 22.3349 11.2309C22.2908 11.1298 22.2264 11.039 22.1456 10.964ZM7.20156 6.4008H16.8016L18.4016 9.6008H5.60156L7.20156 6.4008ZM8.00156 13.7608C8.00156 14.0808 7.52156 14.4008 7.20156 14.4008H3.84156C3.52156 14.4008 3.20156 13.9208 3.20156 13.6008V11.8408C3.36156 11.3608 3.68156 11.0408 4.16156 11.2008L7.36156 11.8408C7.68156 11.8408 8.00156 12.3208 8.00156 12.6408V13.7608ZM20.8016 13.6008C20.8016 13.9208 20.4816 14.4008 20.1616 14.4008H16.8016C16.4816 14.4008 16.0016 14.0808 16.0016 13.7608V12.6408C16.0016 12.3208 16.3216 11.8408 16.6416 11.8408L19.8416 11.2008C20.3216 11.0408 20.6416 11.3608 20.8016 11.8408V13.6008Z" fill="black" />
                                    </svg>
                                    Parking
                                </p>
                                <p className="text-gray-500 pl-6 lg:pl-7">{property.features.parking}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-[15px] lg:text-[19px] flex items-center gap-1">
                                    <svg width="24" height="24" className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.125 12C13.125 12.2984 13.0065 12.5845 12.7955 12.7955C12.5845 13.0065 12.2984 13.125 12 13.125C11.7016 13.125 11.4155 13.0065 11.2045 12.7955C10.9935 12.5845 10.875 12.2984 10.875 12C10.875 11.7016 10.9935 11.4155 11.2045 11.2045C11.4155 10.9935 11.7016 10.875 12 10.875C12.2984 10.875 12.5845 10.9935 12.7955 11.2045C13.0065 11.4155 13.125 11.7016 13.125 12ZM12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM16.872 6.345C16.955 6.349 17.035 6.365 17.112 6.393C17.2273 6.43262 17.3321 6.49789 17.4185 6.58389C17.5049 6.66989 17.5706 6.77438 17.6108 6.88949C17.6509 7.0046 17.6644 7.12732 17.6503 7.2484C17.6361 7.36948 17.5946 7.48577 17.529 7.5885L13.758 13.509C13.6943 13.6093 13.6093 13.6943 13.509 13.758L7.5885 17.529C6.8595 17.991 6.0135 17.1405 6.474 16.4115L10.242 10.491C10.3057 10.3907 10.3907 10.3057 10.491 10.242L16.4115 6.474C16.5485 6.38563 16.709 6.34067 16.872 6.345Z" fill="black" />
                                    </svg>
                                    Facing
                                </p>
                                <p className="text-gray-500 pl-6 lg:pl-7">{property.features.facing}</p>
                            </div>

                            <div className="col-span-2 lg:col-span-2">
                                <p className="font-semibold flex items-center gap-1 text-[15px] lg:text-[19px]">
                                    <svg width="24" height="24" className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7ZM6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96ZM20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 11.4696 4.78929 10.9609 4.41421 10.5858C4.03914 10.2107 3.53043 10 3 10C2.46957 10 1.96086 10.2107 1.58579 10.5858C1.21071 10.9609 1 11.4696 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z" fill="black" />
                                    </svg>
                                    Furnishing Status
                                </p>
                                <p className="text-gray-500 pl-6 lg:pl-7">{property.features.furnishing}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderProperty;