import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  Search,
  Filter,
  Plus,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Pencil,
  Trash,
} from "lucide-react";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { deletePropertyListing, getPropertyListing } from "../../../Api/agentsApi";

const PropertyListingLayout = ({ showSidebar = true, showEdit = true, bg = "bg-slate-50", lg = "lg:py-12", onClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getPropertyListing();
        console.log("API Properties:", data);

        if (Array.isArray(data)) {
const mapped = data.map((item) => ({
  id: item.id,
  title: item.label,
  location: item.city || item.location,
  price: item.price ? `₹ ${item.price}` : "N/A",
  features: Array.isArray(item.features)
  ? item.features
  : [],
  keyPoints: item.selling_points || [], // ✅ moved here
  area:item.sq_ft
    ? `${item.sq_ft} sq.ft`
    : item.land_area
    ? `${item.land_area} ${item.unit || "Cent"}`
    : "N/A",
  status: item.paid ? "Active" : "Pending",
  image:
    item.images?.length > 0
      ? item.images[0]
      : item.image || "https://via.placeholder.com/150",
}));

          setProperties(mapped);
        }
      } catch (err) {
        console.error("Property fetch error:", err);
      }
    };

    fetchProperties();
  }, []);

  
     const handleDelete = async(id)=>{
      const confirmDelete = window.confirm("Are you sure delete?")
  
      if(!confirmDelete) return;
  
      const res = await deletePropertyListing(id);
  
      if(res){
        setProperties((prev)=>prev.filter((item)=>item.id !== id))
      }else{
        alert("Delete failed")
        console.log("Failed");
      }
     }


  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

            <button
            onClick={()=>navigate("/addyourproperty")}
             className="flex items-center justify-center gap-2 bg-[#6ABD11] text-white px-5 py-3 rounded-xl text-sm font-bold shadow hover:bg-[#5aa30e] transition w-full sm:w-auto host-grotesk">
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
            <button className="flex items-center justify-center gap-2 border border-slate-200 px-4 py-2 rounded-xl text-sm hover:bg-slate-100 transition w-full sm:w-auto">
              <Filter size={16} />
              Filter
            </button>

          </div>

          {/* PROPERTY LIST */}
          <div className="space-y-4 cursor-pointer" onClick={onClick}>

            {filteredProperties.map((property) => (

              <div
                key={property.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                onClick={()=>navigate(`/dashboardpropertydetail/${property.id}`)}
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

  {property.features.length > 0 ? (
   property.features.slice(0, 3).map((f, i) => (
        <div key={i} className="flex items-center gap-1">
        <Square size={14} />
        {f.name}: {f.value}
      </div>
    ))
  ) : (
    <div className="flex items-center gap-1">
      <Square size={14} />
      No features
    </div>
  )}

  <div className="flex items-center gap-1">
  <TfiRulerAlt2  size={14} />
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
                          {showEdit && (
  <div className="flex items-center gap-2">
    <button
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/editproperty/${property.id}`);
  }}
  className="flex items-center gap-1 text-sm border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-100 transition host-grotesk"
>
  <Pencil size={14} />
</button>

    <button
      onClick={(e) =>{
          e.stopPropagation();
         handleDelete(property.id)}}
      className="p-2 text-slate-400 hover:text-red-500 transition"
    >
      <Trash size={20} />
    </button>
  </div>
)}

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