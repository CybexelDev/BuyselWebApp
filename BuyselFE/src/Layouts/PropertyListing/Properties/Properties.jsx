import React, { useEffect, useState } from 'react'
import Propertycard from '../../../Components/PropertyCard/Propertycard'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { addToWishlist, removeToWishlist } from '../../../Api/userApi';
import { Heart } from "lucide-react";
import { toast } from 'sonner';
import SkeletonCard from '../../../Components/SkeletonCard/SkeletonCard';
import noimage from "../../../assets/images/propertDetail/noimage.png"
import Chatbox from '../../Home/Chatbox/Chatbox';

function PropertiesSection({ propertiesData, dataCount }) {

  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(propertiesData, "propertiesData in properties section ???????????????");

  console.log(dataCount, "%%%%%%%%%%%%%%%%%%%%%%%%");


  // useEffect(() => {

  //   setProperties(propertiesData);
  //   setLoading(false);


  // }, [propertiesData]);

  useEffect(() => {
    if (dataCount === undefined) {
      setLoading(true);
      return;
    }


    setLoading(false);
    setProperties(propertiesData || []);
  }, [propertiesData, dataCount]);


  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 640) {
        setItemsPerPage(2 * 5);
      }

      else if (width < 768) {
        setItemsPerPage(2 * 5);
      }

      else if (width < 1024) {
        setItemsPerPage(2 * 5);
      }

      else if (width < 1280) {
        setItemsPerPage(3 * 4);
      }

      else {
        setItemsPerPage(4 * 3);
      }

      setPage(1);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // Pagination logic
  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProperties = properties?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(properties?.length / itemsPerPage);

  const addWishlist = (id) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      toast.error("Please login to use wishlist");
      return;
    }
    addToWishlist({ id });
    toast.success("Added to wishlist")

    setProperties((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, is_wishlisted: true }
          : item
      )
    );
  };

  const removeWishlist = (id) => {
    removeToWishlist({ id });
    toast.error("Removed from wishlist ");

    setProperties((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, is_wishlisted: false }
          : item
      )
    );
  };
  const isFiltered = propertiesData?.length > 0 && properties?.length === 0;
  return (
    <div className='py-8 px-1 md:px-6 lg:px-8 mb-2 -mt-20'>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4">

        {loading ? (

          Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : dataCount === 0 ? (
          <div className="col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 flex flex-col items-center justify-center py-20">
            <img
              src={noimage}
              alt="No Properties"
              className="w-15 mb-4 opacity-80"
            />

            <h3 className="text-lg font-semibold text-gray-700">
              No Properties Available
            </h3>

            <p className="text-gray-500 text-sm mt-2 text-center max-w-md">
              There are currently no properties available in this category.
            </p>

          </div>
        ) : (
          currentProperties.map((property) => (
            <Propertycard
              key={property.id}
              property={property}
              click={() =>
                property.is_wishlisted
                  ? removeWishlist(property.id)
                  : addWishlist(property.id)
              }
              wishlistIcon={
                property.is_wishlisted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e11a1a"
                      d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                    />
                  </svg>
                ) : (
                  <Heart size={13} fill="none" stroke="black" />
                )
              }
              color="bg-[#fbfbfb]"
              shadow="shadow-[0px_4px_13.5px_0px_rgba(129,105,105,0.25)]"
            />
          ))
        )}


      </div>


      <div className="host-grotesk flex justify-center mt-12">
        <div className="flex items-center gap-2 sm:gap-4 bg-[#fbfbfb] shadow-lg rounded-xl px-4 py-2">

          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="w-[23px] sm:w-[25px] h-[23px] sm:h-[25px]
              flex items-center justify-center rounded-full bg-black text-white
              ">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>


          {(() => {
            const pages = [];

            const addPage = (p) => {
              if (p >= 1 && p <= totalPages && !pages.includes(p)) {
                pages.push(p);
              }
            };

            addPage(1);
            addPage(totalPages);
            addPage(page - 1);
            addPage(page);
            addPage(page + 1);
            pages.sort((a, b) => a - b);


            return pages.map((p, i) => {
              if (i > 0 && p - pages[i - 1] > 1) {
                return (
                  <div key={p} className="flex items-center gap-1">
                    <span className="px-1 sm:px-2 text-gray-400">...</span>
                    <button
                      onClick={() => setPage(p)}
                      className="px-3 py-1 rounded-md text-[10px] sm:text-[14px] font-medium cursor-pointer"
                    >
                      {p}
                    </button>
                  </div>
                );
              }

              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded-md text-[10px] sm:text-[14px] font-medium cursor-pointer
                     ${page === p
                      ? "bg-[#6ABD11ED] text-white shadow"
                      : "text-gray-900 hover:bg-gray-100"
                    }`}
                >
                  {p}
                </button>
              );
            });
          })()}


          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="w-[23px] sm:w-[25px] h-[23px] sm:h-[25px]
              flex items-center justify-center rounded-full bg-black text-white
              "
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

        </div>

      </div>

    </div>
  )
}

export default PropertiesSection;
