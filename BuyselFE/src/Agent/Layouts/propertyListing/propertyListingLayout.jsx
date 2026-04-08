import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import FilterModal from "../../Components/FilterModal/FilterModalAgent";
import {
  Search,
  Filter,
  Plus,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Pencil,
} from "lucide-react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PropertyListingLayout = ({ showSidebar = true,showEdit=true,bg="bg-slate-50", lg="lg:py-12",onClick}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);

const [filters, setFilters] = useState({
  status: "",
  type: "",
  date: "",
  minPrice: "",
  maxPrice: "",
});
  const navigate=useNavigate()
 
const handleDelete = (id, e) => {
  e.stopPropagation();

  console.log("Delete property:", id);

  
};
 const properties = [
  {
    id: 1,
    title: "Luxury Beach Villa",
    location: "Dubai Marina",
    price: "$2,400,000",
    beds: 4,
    baths: 3,
    area: "3200 sqft",
    status: "Active",
    description:
      "Beautiful luxury villa with ocean views, modern interiors, and private pool.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "New York",
    price: "$890,000",
    beds: 2,
    baths: 2,
    area: "1400 sqft",
    status: "Pending",
    description:
      "Stylish city apartment located in the heart of Manhattan with skyline views.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    location: "London",
    price: "$3,200,000",
    beds: 5,
    baths: 4,
    area: "5000 sqft",
    status: "Sold",
    description:
      "Exclusive penthouse with rooftop terrace and panoramic city views.",
    image:
     "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  }
];
const filteredProperties = properties.filter((p) => {

  // 🔍 Search
  if (
    searchTerm &&
    !p.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) {
    return false;
  }

  // 📌 Status
  if (
    filters.status &&
    filters.status !== "All" &&
    p.status !== filters.status
  ) {
    return false;
  }

  // 🏠 Type (if you add type in data later)
  if (
    filters.type &&
    filters.type !== "All" &&
    p.type !== filters.type
  ) {
    return false;
  }

  // 💰 Price (convert string to number)
  const price = parseInt(p.price.replace(/[^0-9]/g, ""));

  if (filters.minPrice && price < filters.minPrice) return false;
  if (filters.maxPrice && price > filters.maxPrice) return false;

  return true;
});
  

  return (
    <div className={`min-h-screen ${bg} flex overflow-x-hidden`}>
        {showSidebar && <Sidebar />}

      <main className="flex w-full min-h-screen transition-all duration-300">
        <div className={`w-full  p-4 sm:p-6 md:p-10 ${lg} lg:px-12 `}>

          {/* HEADER */}
          <header className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            <div>
              <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
                Property Management
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight instrument-sans">
                Property <span className="text-[#6ABD11]">Listings</span>
              </h1>
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#6ABD11] text-white px-5 py-3 rounded-xl text-sm font-bold shadow hover:bg-[#5aa30e] transition w-full sm:w-auto host-grotesk">
              <Plus size={18} />
              Add Property
            </button>

          </header>

          {/* SEARCH + FILTER */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-8 shadow-sm">

            {/* Search */}
            <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-80">
              <Search size={18} className="text-slate-400 mr-2" />

              <input
                type="text"
                placeholder="Search property..."
                className="outline-none w-full text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <button className="flex items-center justify-center gap-2 border border-slate-200 px-4 py-2 rounded-xl text-sm hover:bg-slate-100 transition w-full sm:w-auto"
              onClick={() => setShowFilter(true)}

            >
              <Filter size={16} />
              Filter
            </button>

          </div>
{showFilter && (
  <FilterModal
    onClose={() => setShowFilter(false)}
    onApply={(data) => setFilters(data)}
  />
)}
          {/* PROPERTY LIST */}
          <div className="space-y-4 cursor-pointer" onClick={onClick}>

            {filteredProperties.map((property) => (

              <div
                key={property.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                onClick={()=>navigate("/dashboardpropertydeatil")}
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                  {/* LEFT */}
                  <div className="flex items-start sm:items-center gap-4">

                    <img
                      src={property.image}
                      alt="property"
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                    />

                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-slate-800 host-grotesk">
                        {property.title}
                      </h3>

                      <div className="flex items-center text-slate-500 text-sm gap-1 host-grotesk ">
                        <MapPin size={14} />
                        {property.location}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500 host-grotesk">

                        <div className="flex items-center gap-1">
                          <BedDouble size={14} />
                          {property.beds} Beds
                        </div>

                        <div className="flex items-center gap-1">
                          <Bath size={14} />
                          {property.baths} Baths
                        </div>

                        <div className="flex items-center gap-1">
                          <Square size={14} />
                          {property.area}
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* RIGHT SECTION */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3 lg:mt-0">

                    {/* Price */}
                    <div className="text-base sm:text-lg font-bold text-slate-800 host-grotesk">
                      {property.price}
                    </div>

                    {/* Status */}
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        property.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : property.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {property.status}
                    </div>

                    {/* Edit */}
                         {showEdit && 
  <button
    onClick={(e) => {
      e.stopPropagation(); // 🔥 prevents parent card click
      console.log("Edit clicked");
      // your edit logic here (navigate or open modal)
    }}
    className="flex items-center gap-1 text-sm border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-100 transition host-grotesk"
  >
    <Pencil size={14} />
    Edit
  </button>
}
                    {/* Delete */}
<button
  onClick={(e) => handleDelete(property.id, e)}
  className="flex items-center gap-1 text-sm border border-red-200 text-red-600 px-3 py-2 rounded-lg hover:bg-red-50 transition host-grotesk"
>
  <Trash size={14} />
  Delete
</button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </main>
    </div>
  );
};

export default PropertyListingLayout;