import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import line from "../../../assets/images/header/line.png";
import { ArrowLeft, ArrowUpRight, IndianRupee } from "lucide-react";
import './Header.css'
import img from "../../../assets/images/carousel/he.png";
import img2 from "../../../assets/images/carousel/he.png";
import img3 from "../../../assets/images/carousel/he.png";
import Navbar from "../../Navbar/Navbar";
import flat from "../../../assets/images/propertDetail/flat.png";
import phone from "../../../assets/images/propertDetail/phone.png";
import seller from "../../../assets/images/propertDetail/seller.jpg";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderDashboardProperty =  ({ property }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const user = useSelector((state) => state.user);
const agent = useSelector((state) => state.agent);

  const navigate = useNavigate()
  console.log("USER:", user);
console.log("AGENT:", agent);

const handleBack = () => {
  if (agent?.accessToken) {
    return navigate("/agent/property");
  }

  if (user?.accessToken) {
    return navigate("/ownerdashboard?tab=properties");
  }

  navigate("/");
};


  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
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
    <div className="px-2 md:px-5 py-3 relative">
      <header className="mb-6 mt-4 flex items-start">
            <button className="group flex items-center gap-2 text-gray-700 hover:text-[#74C122] transition-colors font-bold text-sm uppercase tracking-widest instrument-sans cursor-pointer" 
                onClick={handleBack}>
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"  />
              Back to Properties
            </button>

          </header>

      <div className="detail-cta-container">
        <div className="detail-cta-logo-container ">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="footer-cta-logo w-[80px] md:w-[100px]"
            />
          </div>
        </div>
        {/* top */}
        <div className="px-0 md:px-[22px] grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-5 mb-0">
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
                className="w-full h-[120px] md:h-[160px] lg:h-[176.5px] object-cover rounded-xl lg:rounded-3xl"
              />
            </div>

            <div className="relative col-span-1 lg:col-span-1 overflow-hidden rounded-xl lg:rounded-2xl">
              <img
                src={property.images[2]}
                alt=""
                className="w-full h-[120px] md:h-[160px] lg:h-[176.5px]  object-cover inverted-radiuss overflow-hidden"
              />
              <button
                onClick={() => setShowGallery(true)}
                className="absolute bottom-0  text-[18px] right-[0px]   bg-black text-white max-[361px]:px-[12px] max-[361px]:rounded-[7px] max-[361px]:py-[14px] max-[400px]:px-[17px]  max-[400px]:py-[14px] px-[18px] py-[13px] rounded-[19px] host-grotesk"
              >
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
                  onClick={() => setShowGallery(false)}
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
<div className="flex flex-col gap-3 xl:gap-7 h-full">
  
                <div className="bg-white flex flex-col gap-4 rounded-[18px] lg:rounded-[23px] px-5 py-3 lg:px-6 lg:py-3 xl:py-5 shadow-sm border border-[#7BC21F] host-grotesk">
                   <h2 className="text-lg lg:text-xl font-semibold text-black ">
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

            <div className="lg:col-span-1 bg-[#FBFBFB] rounded-[18px] lg:rounded-[23px] px-5 lg:px-6  lg:pt-3 py-4 lg:py-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <h2 className="text-[15px] md:text-[17px] lg:text-[17px] font-semibold instrument-sans leading-tight">
                  {property.title}
                </h2>

                <span className="bg-[#7BC21F] text-white text-xs md:text-[14px] lg:text-sm host-grotesk px-3 py-1 lg:px-3 lg:py-0.5 rounded-full w-max">
                  {property.status}
                </span>
              </div>

              <p className="text-gray-500 text-[12px] md:text-[14px] lg:text-[14px] mt-2 mb-0 flex items-center gap-1.5 lg:gap-2 host-grotesk">
                📍 {property.location}
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start items-start sm:items-center xl:items-center justify-between mt-4 lg:mt-3 xl:mt-6 host-grotesk gap-2 sm:gap-0 lg:gap-1">
                <div className="flex items-center gap-2 lg:gap-3">
                  <h3 className="text-lg lg:text-lg font-bold">
                    ₹ {property.price}{property.status === "Rent" && <span>/month</span>}
                  </h3>
                  <span className="text-gray-400 text-[10px] lg:text-[12px]">
                    | {property.area}
                  </span>
                </div>

                <p className="text-[11px] lg:text-xs text-gray-400">
                  Posted On {property.postedOn}
                </p>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default HeaderDashboardProperty;









