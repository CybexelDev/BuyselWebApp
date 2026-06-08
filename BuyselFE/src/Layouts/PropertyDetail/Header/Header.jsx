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
import { toast } from "sonner";

const HeaderProperty = ({ property }) => {

  const [showGallery, setShowGallery] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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


  const handleWtspClick = (e) => {
    e.stopPropagation();

    const token = localStorage.getItem("accessToken");

    if (!token) {

      e.preventDefault(); // 🚫 stop redirect
      toast.error("Please login to contact");
      return;
    }

    const url = `https://wa.me/${property?.seller?.phone}`;
    window.open(url, "_blank");

  }

  const handleCallClick = (e) => {
    e.stopPropagation();
    const token = localStorage.getItem("accessToken");

    if (!token) {

      e.preventDefault(); // 🚫 stop redirect
      toast.error("Please login to contact");
      return;
    }
    window.location.href = `tel:${property?.seller?.phone}`;
  }

  return (
    <div className='px-2 md:px-7 py-3 relative'>
      <Navbar />
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
                 onClick={() => {
    setCurrentIndex(0);
    setShowGallery(true);
  }}
                alt="property"
                className="w-full h-[240px] md:h-[300px] lg:w-full lg:h-[365px] object-cover rounded-2xl lg:rounded-3xl cursor-pointer"
              />
            </div>
            {/* left side images */}
            <div className="col-span-1 lg:col-span-1">
              <img
                src={property.images[1]}
                alt=""
                  onClick={() => {
    setCurrentIndex(1);
    setShowGallery(true);
  }}
                className="w-full h-[120px] md:h-[160px] lg:h-[176.5px] object-cover rounded-xl lg:rounded-3xl cursor-pointer"
              />
            </div>


            <div className="relative col-span-1 lg:col-span-1 overflow-hidden rounded-xl lg:rounded-2xl">
              <img
                src={property.images[2]}
                alt=""
                onClick={()=>{
                  setCurrentIndex(2)
                  setShowGallery(true)
                }}
                className="w-full h-[120px] md:h-[160px] lg:h-[176.5px]  object-cover inverted-radiuss overflow-hidden cursor-pointer"
              />
              <button onClick={() => setShowGallery(true)} className="absolute bottom-0 cursor-pointer text-[18px] right-[0px]   bg-black text-white max-[361px]:px-[12px] max-[361px]:rounded-[7px] max-[361px]:py-[14px] max-[400px]:px-[17px]  max-[400px]:py-[14px] px-[18px] py-[13px] rounded-[19px] host-grotesk">
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
                  onClick={() => setShowGallery(false)
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
                      className={`w-20 h-14 object-cover rounded-lg cursor-pointer border-2 ${currentIndex === index
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
                  src={property?.sowner_profile_image|| seller}
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

              <a
                href="#"
                onClick={handleWtspClick}
                className="w-full shadow-sm bg-[#7BC21F] text-[15px] lg:text-[18px] text-white py-2.5 lg:py-3 rounded-[12px] lg:rounded-[15px] mb-3 lg:mb-[14px] mt-6 lg:mt-12 font-medium flex items-center justify-center gap-2">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.566 0.011137C8.22698 0.2127 6.27229 0.934574 4.51916 2.25176C3.96604 2.66426 3.02854 3.57364 2.57385 4.13145C1.30823 5.6877 0.487913 7.58145 0.17385 9.63926C0.075413 10.3049 0.066038 11.8893 0.1551 12.5455C0.3426 13.9283 0.745726 15.2174 1.32698 16.3283L1.55666 16.7549L0.769163 19.633C0.333225 21.2127 -0.0136496 22.5158 0.00041295 22.5252C0.00978795 22.5346 1.34104 22.1971 2.95823 21.7705L5.89729 20.9971L6.47385 21.2736C8.73791 22.3564 11.4801 22.6283 13.941 22.0143C15.4926 21.6252 17.0442 20.8564 18.2864 19.858C19.4957 18.8783 20.6629 17.3971 21.3239 15.9908C22.3317 13.8674 22.6457 11.5846 22.2567 9.26426C21.4645 4.54864 17.6489 0.822075 12.9004 0.123638C12.3192 0.0392628 10.9973 -0.0263634 10.566 0.011137ZM12.5535 2.02676C14.5317 2.29864 16.3129 3.19395 17.766 4.64239C19.9926 6.87364 20.9207 9.95332 20.2926 13.0236C19.9926 14.4815 19.2989 15.9205 18.3379 17.0689C16.8848 18.8127 14.9348 19.9189 12.652 20.3127C11.9957 20.4205 10.4817 20.4205 9.83948 20.3127C8.64416 20.1018 7.58948 19.7268 6.60979 19.1596L6.1926 18.9205L4.48635 19.3705C3.54416 19.6143 2.76604 19.8064 2.75666 19.7971C2.74729 19.7877 2.93948 19.0283 3.1926 18.1096L3.64729 16.4408L3.40823 16.0518C2.1426 13.9799 1.7301 11.6689 2.19885 9.33457C2.85979 6.05801 5.30666 3.35332 8.50823 2.35489C9.86291 1.93301 11.1239 1.82989 12.5535 2.02676Z" fill="white" fill-opacity="0.93" />
                  <path d="M7.04528 6.02505C6.52028 6.19849 5.8359 7.10317 5.65309 7.86255C5.37184 9.06255 5.73746 10.2672 6.86246 11.8141C7.88434 13.2204 8.99059 14.3125 10.2046 15.1094C10.9921 15.625 12.3609 16.2204 13.2656 16.4407C13.739 16.5532 14.5968 16.5625 14.9953 16.4594C15.614 16.2954 16.3875 15.7704 16.6359 15.3438C16.8 15.0672 16.9078 14.5985 16.9171 14.1719C16.9218 13.8391 16.9125 13.7969 16.8093 13.7219C16.5843 13.5485 14.4093 12.5454 14.2078 12.5172C13.964 12.4797 13.9546 12.4891 13.4812 13.1032C12.9937 13.7313 12.764 13.9516 12.6093 13.9516C12.4125 13.9516 11.2172 13.3422 10.725 12.986C10.4906 12.8172 10.1203 12.5079 9.90465 12.2969C9.25309 11.6547 8.50778 10.6282 8.50778 10.3704C8.50778 10.286 8.59684 10.1313 8.7609 9.92505C9.27184 9.28755 9.3984 9.07661 9.3984 8.87036C9.3984 8.62661 8.48434 6.40474 8.28746 6.17505C8.15621 6.02036 8.15621 6.02036 7.66403 6.00161C7.39215 5.99224 7.11559 6.00161 7.04528 6.02505Z" fill="white" fill-opacity="0.93" />
                </svg>
                <span>Whatsapp</span>
              </a>

              <a
                href="#"
                onClick={handleCallClick}
                className="w-full shadow-sm bg-white text-black text-[15px] lg:text-[18px] py-2.5 lg:py-3 rounded-[12px] lg:rounded-[15px] mb-1 lg:mb-3 font-medium flex items-center justify-center gap-2 border border-gray-100 lg:border-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98" />
                </svg>
                <span>Contact</span>
              </a>
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

          <div className="bg-white rounded-[18px] lg:rounded-[23px] px-5 py-4 lg:px-6 lg:py-3 shadow-sm border border-[#7BC21F] host-grotesk">

              <h2 className="text-lg lg:text-xl mb-3 font-semibold text-black ">
               Property Features
             </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-3 xl:gap-5 text-xs lg:text-sm">
           
             {property?.features?.length > 0 ? (
               property.features.map((item, index) => (
                 <div
                   key={index}
                   className="flex flex-col"
                 >
                   {/* icon + title */}
                   <div className="flex items-center gap-2">
                     <img
                       src={item.icon}
                       alt={item.name}
                       className="w-6 h-6 object-contain flex-shrink-0"
                     />
           
                     <h4 className="text-[16px] font-semibold text-black whitespace-nowrap">
                       {item.name}
                     </h4>
                   </div>
           
                   {/* value */}
                   <p className="text-[14px] text-gray-500 ml-7 mt-1">
                     {item.value}
                   </p>
                 </div>
               ))
             ) : (
               <div className="py-2 col-span-full">
                 <p className="text-sm md:text-lg text-gray-500 font-medium">
                   No features available
                 </p>
               </div>
             )}
           
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderProperty;