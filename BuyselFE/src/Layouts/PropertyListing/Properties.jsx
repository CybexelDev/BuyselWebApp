import React, { useState } from 'react'
import Propertycard from '../../Components/PropertyCard/Propertycard'

function PropertiesSection({ propertiesData }) {

  const itemsPerPage = 8; // ✅ number, not array
  const [page, setPage] = useState(1);

  // Pagination logic
  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentProperties = propertiesData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(propertiesData.length / itemsPerPage);

  return (
    <div className='py-8 px-4 md:px-6 lg:px-8'>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        {currentProperties.map((property) => (
          <Propertycard
            key={property.id}
            property={property}
            color="bg-[#fbfbfb]"
            shadow="shadow-[0px_4px_13.5px_0px_rgba(129,105,105,0.25)]"
          />
        ))}

      </div>


      {/* Pagination */}
      <div className="flex justify-center mt-12">

        <div className="flex items-center gap-2 bg-white shadow-md rounded-xl px-4 py-2">

          {/* Previous */}
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="px-3 py-1 text-sm rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-40"
          >
            Previous
          </button>


          {/* First Page */}
          {page > 2 && (
            <>
              <button
                onClick={() => setPage(1)}
                className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100"
              >
                1
              </button>

              <span className="px-1 text-gray-400">...</span>
            </>
          )}


          {/* Middle Pages */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              p =>
                p === page ||
                p === page - 1 ||
                p === page + 1
            )
            .map(p => (

              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-1 rounded-md text-sm font-medium
                  ${
                    page === p
                      ? "bg-purple-500 text-white shadow"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {p}
              </button>
            ))}


          {/* Last Page */}
          {page < totalPages - 1 && (
            <>
              <span className="px-1 text-gray-400">...</span>

              <button
                onClick={() => setPage(totalPages)}
                className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100"
              >
                {totalPages}
              </button>
            </>
          )}


          {/* Next */}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="px-3 py-1 text-sm rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  )
}

export default PropertiesSection;
