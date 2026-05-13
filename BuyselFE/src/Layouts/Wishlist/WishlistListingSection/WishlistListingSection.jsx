import React, { useState, useEffect } from "react";

const categories = ["Rent", "Buy", "Sell", "Lease"];
import Propertycard from "../../../Components/PropertyCard/Propertycard";
import { properties } from "../../../Constance/constance";
import house from "../../../assets/images/wishlist/house.png"
import { getWishlist, filterWishlist,sortWishlist,clearWishlist,addToWishlist} from "../../../Api/userApi";
import { useSelector } from "react-redux";
import { removeToWishlist } from "../../../Api/userApi";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import empty from "../../../assets/images/wishlist/empty.gif"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function WishlistListingSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("latest");
  const [showSort, setShowSort] = useState(false);
  const cardsPerPage = 8;
  
  const addWishlist = (id) => {
      const token = localStorage.getItem("accessToken");
    
      if (!token) {
        toast.error("Please login to use wishlist");
        return;
      }
     addToWishlist({ id });
    toast.success("Added to wishlist")

  setData((prev) =>
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

  setData((prev) => prev.filter((item) => item.id !== id));
    toast.success("remove unliked")

};

const handleSort = async (type) => {
  setSortType(type);
  setShowSort(false);

  let sortValue = "latest";

  if (type === "low") sortValue = "price_low_to_high";
  if (type === "high") sortValue = "price_high_to_low";
  if (type === "default") sortValue = "default";

  const res = await sortWishlist(sortValue);
  if (res) setData(res);
};
  const {userId} = useSelector((state) => state.user);
  

const filteredProperties = [...data]; 
  
  const totalPages = Math.ceil(filteredProperties.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;

  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + cardsPerPage
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);
useEffect(() => {
  const fetchData = async () => {
    const res = await getWishlist();
    if (res) setData(res);
  };

  fetchData();
}, []);
  return (
    <div className="bg-white rounded-lg px-8 py-6 host-grotesk">

      <h1 className="text-[24px] font-medium mb-3">
        My Wishlist
      </h1>

      {/* catgeory */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div className="flex gap-6 text-[16px]">
          {categories.map((category) => (
            <button
              key={category}
            onClick={async () => {
  const newCategory =
    activeCategory === category ? null : category;

    setActiveCategory(newCategory);

  if (!newCategory) {
    const res = await getWishlist();
    setData(res);
  } else {
    const res = await filterWishlist(newCategory.toLowerCase());
    setData(res);
  }
}} className={`pb-1 transition-all duration-200 ${activeCategory === category
                  ? "font-bold text-black border-b-4 border-[#6ABD11ED]"
                  : "text-[#938181] font-medium hover:text-black"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-10 md:gap-2 host-grotesk">
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className=" text-[13px] md:text-[16px] border-[0.5px] border-[#C6C6C6] px-3 py-[6px] rounded-[9px] bg-white flex gap-2 font-medium"
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16"><polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" points="1.75 1.75 14.25 1.75 14.25 3.25 9.25 8.75 9.25 12.75 6.75 14.25 6.75 8.75 1.75 3.25" /></svg>
              Sort by: {
                sortType === "latest"
                  ? "Latest"
                  : sortType === "low"
                    ? "Low to High"
                    : sortType === "high"
                      ? "High to Low"
                      : "Default"
              }
            </button>

            {showSort && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border  z-50">
                <button
                 onClick={()=>handleSort("latest")
}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Latest
                </button>

                <button
                  onClick={() => handleSort("low")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Price: Low to High
                </button>

                <button
                  onClick={() => handleSort("high")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Price: High to Low
                </button>
                <button
                  onClick={()=>handleSort('default')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Default
                </button>
              </div>
            )}
          </div>

          <button className="text-[13px] md:text-[16px] bg-[#C70000] text-white px-3 py-[6px] rounded-[9px] flex gap-1 md:gap-2 font-medium justify-center items-center  "
           onClick={async () => {
    await clearWishlist();
    setData([]);
  }}
          >
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.23059 0.0823288C5.03137 0.183891 4.85949 0.379204 4.79699 0.582329C4.76965 0.676079 4.75402 1.0667 4.75402 1.61358V2.49639L2.64856 2.50811L0.543088 2.51983L0.371213 2.63702C-0.160037 3.01592 -0.113162 3.8128 0.461056 4.10577C0.605588 4.17999 0.765744 4.17999 8.38684 4.17999C16.0079 4.17999 16.1681 4.17999 16.3126 4.10577C16.8868 3.8128 16.9337 3.01592 16.4025 2.63702L16.2306 2.51983L14.1642 2.50811L12.0978 2.49639V1.61358C12.0978 0.648735 12.0782 0.515923 11.8907 0.28936C11.6407 -0.0114212 11.8243 0.000297546 8.4259 0.000297546C5.42199 0.000297546 5.39856 0.000297546 5.23059 0.0823288ZM10.379 2.03155V2.38311H8.4259H6.47277V2.03155V1.67999H8.4259H10.379V2.03155Z" fill="white" />
              <path d="M1.67188 10.6602C1.67188 15.9024 1.66797 15.7696 1.88672 16.3477C2.16797 17.0938 2.72266 17.6993 3.44141 18.043C4.09766 18.3594 3.76954 18.3399 8.35157 18.3399C12.9336 18.3399 12.6055 18.3594 13.2617 18.043C14.1563 17.6133 14.7852 16.7891 14.9766 15.7891C15.0234 15.5508 15.0313 14.6641 15.0313 10.6602V5.82037H8.35157H1.67188V10.6602ZM6.64454 8.01178C6.84766 8.06647 7.1211 8.3399 7.17579 8.53522C7.23438 8.75006 7.23438 14.3712 7.17579 14.586C7.09375 14.8829 6.70704 15.1563 6.375 15.1563C6.21485 15.1524 5.96875 15.0313 5.82032 14.879C5.57032 14.6251 5.57422 14.6602 5.58594 11.4571L5.59766 8.56647L5.71485 8.37897C5.80079 8.23834 5.89063 8.15631 6.04297 8.07819C6.26563 7.961 6.41016 7.94537 6.64454 8.01178ZM10.7891 8.10162C10.9023 8.16803 11.0039 8.2735 11.0742 8.39069L11.1836 8.57428L11.1953 11.461C11.207 14.6602 11.2109 14.6251 10.9609 14.879C10.8125 15.0313 10.5664 15.1524 10.4063 15.1563C10.0742 15.1563 9.6875 14.8829 9.60547 14.586C9.57813 14.4844 9.5625 13.4727 9.5625 11.5235C9.5625 8.7735 9.56641 8.60553 9.63672 8.45709C9.84375 8.00787 10.3594 7.84772 10.7891 8.10162Z" fill="white" />
            </svg>

            Clear Wishlist
          </button>
        </div>

      </div>
      {filteredProperties.length === 0 ? (

        // if theres no data
        <div className="px-40 mb-50">
          <div className="mt-10   bg-[#F3F3F3] rounded-2xl py-20 flex flex-col items-center justify-center text-center host-grotesk" >
             <DotLottieReact
      src="https://lottie.host/c7f15c31-8182-48f0-b333-a9540e6c59af/V3ozq4gyPZ.lottie"
      loop
      autoplay
    />
            <h2 className="text-xl font-semibold mb-2">
              No properties saved yet
            </h2>

            <p className="text-gray-500 mb-6">
              Start exploring and save properties you like.
            </p>

            <button className="bg-[#7BC21F] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Browse Properties
            </button>
          </div>
        </div>

      ) : (

        <>
          {/* proprtylsiting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {currentProperties.map((property, index) => (
              <Propertycard
                key={index}
                property={property}
                shadow="shadow-[0px_4px_13.5px_0px_rgba(129,105,105,0.25)]"
                       wishlistIcon={property.is_wishlisted ? (
                             <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                            <path fill="#e11a1a" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
                          </svg>
                        ) : (
                           <Heart size={13} fill="none" stroke="black" className="scale-100" />
                        )}
                         click={() =>
              property.is_wishlisted
                ? removeWishlist(property.id)
                : addWishlist(property.id)
            }
              />
            ))}
          </div>


          <div className="flex justify-center mt-14 mb-20 px-2">
            <div className="flex items-center 
                      gap-3 sm:gap-5 lg:gap-7
                      bg-[#7BC21F]
                      px-3 sm:px-4 lg:px-6
                      py-2 sm:py-3
                      rounded-full
                      shadow-[0_6px_15px_rgba(0,0,0,0.15)]
                      manrope
                      overflow-x-auto scrollbar-hide">

              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 lg:px-5 
                     py-1.5 sm:py-2 
                     text-xs sm:text-sm
                     bg-white rounded-full font-medium 
                     disabled:opacity-50 whitespace-nowrap"
              >
                First
              </button>

              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                     flex items-center justify-center
                     bg-white rounded-full shadow
                     disabled:opacity-50"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                        flex items-center justify-center
                        rounded-full font-medium transition
                        ${currentPage === page
                      ? "bg-white shadow"
                      : "text-white hover:bg-white/20"
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                     flex items-center justify-center
                     bg-white rounded-full shadow
                     disabled:opacity-50"
              >
                →
              </button>

              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 lg:px-5 
                     py-1.5 sm:py-2 
                     text-xs sm:text-sm
                     bg-lime-200 rounded-full font-medium 
                     disabled:opacity-50 whitespace-nowrap"
              >
                Last
              </button>

            </div>
          </div>
        </>
      )}


      {/* imge */}
      <div className="w-full px-4 mt-[140px] sm:mt-[120px] md:mt-[100px] lg:mt-[140px]">
        <img
          src={house}
          alt="Wishlist Banner"
          className="w-full 
               h-[220px] 
               sm:h-[260px] 
               md:h-[320px] 
               lg:h-[390px] 
               object-cover 
               rounded-[14px] 
               sm:rounded-[16px] 
               lg:rounded-[20px]"
        />
      </div>
    </div>
  );
}

export default WishlistListingSection;