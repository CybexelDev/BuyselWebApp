import React, { useEffect, useState } from "react";
import "./featured.css";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Featuredcard from "../../Components/PropertyCard/Propertycard";
import axios from "axios";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => setFeatured(res.data))
      .catch((err) => console.log(err));
  }, []);

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

  const visibleCards = featured.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="pt-5 px-14 relative">
      <div className="featured-cta-container px-16">

        {/* Heading */}
        <div className="featured-cta-logo-container">
          <div className="flex flex-col items-center justify-center instrument-sans pb-1">
            <h2 className="font-[600]  text-[24px] text-center">
              Featured Listings
            </h2>
            <p className="font-[500] text-[16px] text-[#a79a9a] text-center">
              Handpicked properties from trusted owners and agents.
            </p>
          </div>
        </div>

         {/* Slider */}
        <div className="overflow-hidden  mt-10">

          <div
            className="flex transition-transform gap-[1px] duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(startIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {featured.map((property) => (
              <div
                key={property.id}
                className="w-1/4  flex-shrink-0"
              >
                <Featuredcard property={property} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between w-full pl-4 pt-6 ">
          <button className="flex items-center gap-2 font-bold text-[15px] text-black">
            Explore More
            <span className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-black text-white">
              <ArrowRight size={16} />
            </span>
          </button>

          <div className="flex gap-3">

            {/* Prev */}
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-[37px] h-[37px] flex items-center justify-center rounded-full bg-black text-white
              shadow-[0_3px_5px_rgba(0,0,0,0.45)]
              "
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= featured.length}
              className="w-[37px] h-[37px] flex items-center justify-center rounded-full bg-black text-white
              shadow-[0_3px_5px_rgba(0,0,0,0.45)]
              "
            >
              <ChevronRight size={24} />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;
