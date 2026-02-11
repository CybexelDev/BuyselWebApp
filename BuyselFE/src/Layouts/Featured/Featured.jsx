import React, { useEffect, useState } from "react";
import "./featured.css";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Featuredcard from "../../Components/PropertyCard/Propertycard";
import axios from "axios";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0); // Responsive

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => setFeatured(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(4);
    }
  };

  handleResize();
}, []);



let startX = 0;
const handleTouchStart = (e) => {
  if (window.innerWidth >= 640) return;
  startX = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
  if (window.innerWidth >= 640) return;
  const endX = e.changedTouches[0].clientX;
  const distance = startX - endX;

  if (distance > 50) handleNext();      // swipe left → next
  else if (distance < -50) handlePrev(); // swipe right → prev
};




  const handleNext = () => {
    if (startIndex + itemsPerPage < featured.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="pt-5 px-6 sm:px-14 relative">
      <div className="featured-cta-container px-4 sm:px-16">

        {/* Heading */}
        <div className="featured-cta-logo-container">
          <div className="flex flex-col items-center justify-center instrument-sans pb-0 sm:pb-1">
            <h2 className="font-[600] text-[16px] sm:text-[24px] text-center">
              Featured Listings
            </h2>
            <p className="font-[500] text-[8px] sm:text-[16px] text-[#a79a9a] text-center">
              Handpicked properties from trusted owners and agents.
            </p>
          </div>
        </div>

{/* slider */}
<div className="overflow-hidden mt-8 w-full">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
    style={{
       transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`,
    }}
    
  >
    {featured.map((property) => (
      <div
        key={property.id}
        className="w-full sm:w-1/4 flex-shrink-0 px-2"
      >
        <Featuredcard property={property} />
      </div>
    ))}
  </div>
</div>



        {/* Bottom Section */}
        <div className="flex items-center justify-between w-full px-4 sm:px-0 sm:pl-4 pt-4 sm:pt-6">
          <button className="instrument-sans flex items-center gap-2 font-[600] md:font-[700] text-[11px] sm:text-[14px] md:text-[15px] text-black">
            Explore More
            <span className="flex items-center justify-center w-[22px] md:w-[25px] h-[22px] md:h-[25px] rounded-full bg-black text-white">
             <ArrowRight className="w-[13px] h-[13px] sm:w-4 sm:h-4" />
            </span>
          </button>

          <div className="flex gap-3">

            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-[26px] sm:w-[37px]  h-[26px] sm:h-[37px] flex items-center justify-center rounded-full bg-black text-white
              shadow-[0_3px_5px_rgba(0,0,0,0.45)]"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6"/>
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= featured.length}
              className="w-[26px] sm:w-[37px]  h-[26px] sm:h-[37px] flex items-center justify-center rounded-full bg-black text-white
              shadow-[0_3px_5px_rgba(0,0,0,0.45)]"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6"/>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;
