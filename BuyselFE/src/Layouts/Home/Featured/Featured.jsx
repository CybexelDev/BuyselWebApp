import React, { useEffect, useState, useRef } from "react";
import "./featured.css";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Featuredcard from "../../../Components/PropertyCard/Propertycard";
import { properties } from "../../../Constance/constance";
import { addToWishlist, getFeatured, removeToWishlist } from "../../../Api/userApi";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const Featured = ({ title = "Featured Listings", subTitle = "Handpicked properties from trusted owners and agents.", data = null }) => {
  const [featured, setFeatured] = useState([]);

  const sliderRef = useRef(null);
  useEffect(() => {
  if (data && data.length > 0) {
    setFeatured(data);
    return;
  }

  const fetchData = async () => {
    const res = await getFeatured();

    if (res) {
      setFeatured(res);
    }
  };

  fetchData();
}, [data]);

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 330, 
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


  const addWishlist = (id, e) => {
    e.stopPropagation();
      const token = localStorage.getItem("accessToken");
    
      if (!token) {
        toast.error("Please login to use wishlist");
        return;
      }

    addToWishlist({ id });
    toast.success("Added to wishlist")
    setFeatured((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, is_wishlisted: true }
          : item
      )
    );
  };

  const removeWishlist = (id, e) => {
    e.stopPropagation();
    removeToWishlist({ id });
  toast.error("Removed from wishlist ");

    setFeatured((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, is_wishlisted: false }
          : item
      )
    );
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
                <Featuredcard
                  click={(e) =>
                    property.is_wishlisted
                      ? removeWishlist(property.id, e)
                      : addWishlist(property.id, e)
                  }
                  wishlistIcon={property.is_wishlisted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                      <path fill="#e11a1a" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
                    </svg>
                  ) : (
                    <Heart size={13} fill="none" stroke="black" className="scale-100" />
                  )}
                  property={property}
                />
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
