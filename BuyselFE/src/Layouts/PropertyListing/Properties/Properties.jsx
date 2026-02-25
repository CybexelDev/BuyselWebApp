import React, { useEffect, useState } from 'react'
import Propertycard from '../../../Components/PropertyCard/Propertycard'
import { ChevronLeft, ChevronRight } from 'lucide-react';

function PropertiesSection({ propertiesData }) {

const [itemsPerPage, setItemsPerPage] = useState(12);
const [page, setPage] = useState(1);

useEffect(() => {
  function handleResize() {
    const width = window.innerWidth;

    // Mobile
    if (width < 640) {
      setItemsPerPage(2 * 5); 
    }

    // sm
    else if (width < 768) {
      setItemsPerPage(2 * 5); 
    }

    // md
    else if (width < 1024) {
      setItemsPerPage(2 * 5); 
    }

    // lg
    else if (width < 1280) {
      setItemsPerPage(3 * 4); 
    }

    // xl
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
  const currentProperties = propertiesData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(propertiesData.length / itemsPerPage);

  return (
    <div className='py-8 px-1 md:px-6 lg:px-8 mb-2'>


      {/* property Listing */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4">
        {currentProperties.map((property) => (
          <Propertycard
            key={property.id}
            property={property}
            color="bg-[#fbfbfb]"
            shadow="shadow-[0px_4px_13.5px_0px_rgba(129,105,105,0.25)]"
            hideWhatsapp={true}
            hideCall={true}
          />
        ))}
      </div>


      <div className="host-grotesk flex justify-center mt-12">
        <div className="flex items-center gap-2 sm:gap-4 bg-[#fbfbfb] shadow-lg rounded-xl px-4 py-2">

          <button
              disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="w-[23px] sm:w-[25px] h-[23px] sm:h-[25px]
              flex items-center justify-center rounded-full bg-black text-white
              "
            >
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
        ${
          page === p
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
