import React, { useEffect, useState, useRef } from "react";
import "./featured.css";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Featuredcard from "../../../Components/PropertyCard/Propertycard";

import { properties } from "../../../Constance/constance";

const Featured = ({title="Featured Listings",subTitle="Handpicked properties from trusted owners and agents."}) => {
  const [featured, setFeatured] = useState([]);

  const sliderRef = useRef(null);


  useEffect(() => {
      const featuredProperties = properties.filter(prop => prop.featured);
     setFeatured(featuredProperties)
  }, []);


  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 330, // Card width + gap
        behavior: "smooth",
      });
    }
  };


  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -330,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-5 px-3 relative">
      <div className="featured-cta-container px-2 sm:px-6 md:px-10 lg:px-14">

        {/* Heading */}
        <div className="featured-cta-logo-container">
          <div className="flex flex-col items-center justify-center instrument-sans pb-0 sm:pb-1">
            <h2 className="font-[600] text-[16px] sm:text-[24px] text-center">
            {title}
            </h2>
            <p className="font-[500] text-[8px] sm:text-[16px] text-[#a79a9a] text-center">
              {subTitle}
            </p>
          </div>
        </div>


        <div className="overflow-hidden mt-8 w-full">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-5 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {featured.map((property) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-[311px] snap-start"
              >
                <Featuredcard property={property} />
              </div>
            ))}
          </div>
        </div>


        <div className="flex items-center justify-between w-full px-4 sm:px-0 sm:pl-4 pt-4 sm:pt-6">


          <button className="instrument-sans flex items-center gap-2 font-[600] md:font-[700] text-[11px] sm:text-[14px] md:text-[15px] text-black pl-1">
            Explore More
            <span className="flex items-center justify-center w-[22px] md:w-[25px] h-[22px] md:h-[25px] rounded-full bg-black text-white">
              <ArrowRight className="w-[13px] h-[13px] sm:w-4 sm:h-4" />
            </span>
          </button>


          <div className="flex gap-3">

            <button
              onClick={scrollPrev}
            className="w-[23px] sm:w-[37px] h-[23px] sm:h-[37px]
              flex items-center justify-center rounded-full bg-black text-white
              shadow-[0_3px_5px_rgba(0,0,0,0.45)]"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={scrollNext}
            className="w-[23px] sm:w-[37px] h-[23px] sm:h-[37px]
              flex items-center justify-center rounded-full bg-black text-white
              shadow-[0_3px_5px_rgba(0,0,0,0.45)]"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;
