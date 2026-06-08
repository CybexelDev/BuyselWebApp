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
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { deleteUserPropertyListing, userPropertyList } from "../../../Api/userApi";

const PropertyListingLayout = ({ showSidebar = true, showEdit = true, bg = "bg-slate-50", lg = "lg:py-12", onClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
  const [showLimitMessage,setShowLimitMessage] = useState(false);
  const [remainingProperty, setRemainingProperty] = useState(0);
  const[remainingEdit,setRemainingEdit] = useState(0)
  const [limitType, setLimitType] = useState("");

  const userRole = useSelector((state) => state.user.role);
const agentRole = useSelector((state) => state.agent.role);

const role = userRole || agentRole;
// const property_count = useSelector((state) =>
//   role === "agent"
//     ? state.agent.listedCount
//     : state.user.listedCount
// );

// console.log("property_count :", property_count);
console.log("role :",role);

  const navigate = useNavigate();

useEffect(() => {
  const fetchProperties = async () => {
    try {
      setLoading(true);

      let res;

      if (role === "agent") {
        res = await getPropertyListing();
      } else if (role === "user") {
        res = await userPropertyList();
      }

      console.log("API Response :", res);

    

      // data array
      if (Array.isArray(res?.data)) {

        const mapped = res.data.map((item) => ({
          id: item.id,
          title: item.label,
          location: item.city || item.location,
          price: item.price ? `₹ ${item.price}` : "N/A",

          features: Array.isArray(item.features)
            ? item.features
            : [],

          keyPoints: item.selling_points || [],

          area: item.sq_ft
            ? `${item.sq_ft} sq.ft`
            : item.land_area
            ? `${item.land_area} ${item.unit || "Cent"}`
            : "N/A",

          status: item.paid ? "Active" : "Pending",

          image:
            item.images?.length > 0
              ? item.images[0]
              : item.image ||
                "https://via.placeholder.com/150",
        }));

        setProperties(mapped);
      }

  setRemainingProperty(res.remaining_property);
  setRemainingEdit(res.remaining_edit_count)
  console.log("remain:",remainingProperty);
  


    } catch (err) {
      console.error("Property fetch error:", err);

    } finally {
      setLoading(false);
    }
  };

  fetchProperties();

}, [role]);

  
     const handleDelete = async(id)=>{
      const confirmDelete = window.confirm("Are you sure delete?")
  
      if(!confirmDelete) return;
      let res;
      if(role === "agent"){
          res = await deletePropertyListing(id);
      }else if(role === "user"){
        res = await deleteUserPropertyListing(id);
      }
      if(res){
        setProperties((prev)=>prev.filter((item)=>item.id !== id))
      }else{

        toast.error("Delete failed")
        console.log("Failed");
      }
     }


  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
  <div className={`min-h-screen ${bg} flex overflow-x-hidden`}>

    {/* HERE */}

    {showLimitMessage && (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
  <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">

    {/* Icon Badge */}
    <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    </div>

    {/* Title */}
    <h2 className="text-xl font-medium host-grotesk text-[#111111] mb-2">
       {limitType === "property"
    ? "Property limit reached"
    : "Edit limit reached"}
    </h2>

    {/* Description */}
    <p className="text-sm host-grotesk text-[#111111] leading-relaxed mb-7">
       {limitType === "property"
       ? "You've used all available property slots on your current plan. Upgrade to add more."
       : "You've used all available property edits on your current plan. Upgrade to continue editing properties."}    </p>

    {/* Buttons */}
    <div className="flex flex-col host-grotesk gap-2.5">
      <button onClick={()=>navigate("/plans")}
       className="w-full cursor-pointer py-3 bg-[#6ABD11] hover:bg-[#5aa30e] text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.819m2.562-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
        Upgrade plan
      </button>

      <button
        onClick={() => setShowLimitMessage(false)}
        className="w-full cursor-pointer py-3 bg-transparent border border-gray-300 text-black text-sm rounded-lg hover:bg-gray-50 transition-colors"
      >
        Maybe later
      </button>
    </div>

  </div>
</div>
    )}

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
           onClick={() => {
  if (remainingProperty <= 0) {
    setLimitType("property");
    setShowLimitMessage(true);
    return;
  }

  navigate("/addyourproperty");
}}
             className="flex items-center justify-center cursor-pointer gap-2 bg-[#6ABD11] text-white px-5 py-3 rounded-xl text-sm font-bold shadow hover:bg-[#5aa30e] transition w-full sm:w-auto host-grotesk">
              <Plus size={18} />
              Add Property
            </button>

          </header>

          {loading && (
  <p className="text-center py-10">Loading...</p>
)}

          {/* SEARCH + FILTER */}
          {properties.length > 0 && (
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
            <button className="flex items-center justify-center gap-2 cursor-pointer border border-slate-200 px-4 py-2 rounded-xl text-sm hover:bg-slate-100 transition w-full sm:w-auto">
              <Filter size={16} />
              Filter
            </button>

          </div>
          )}

          {/* PROPERTY LIST */}
          <div className="space-y-4" onClick={onClick}>
{!loading && filteredProperties.length === 0 ? (
      <div className="bg-white border border-slate-200 rounded-3xl p-10 sm:p-16 text-center shadow-sm flex flex-col items-center justify-center">    
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-5">
        <Search className="text-slate-400" size={34} />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 host-grotesk">
        No Properties Found
      </h2>

      <p className="text-slate-500 text-sm sm:text-base max-w-md mb-6 host-grotesk">
        You haven't added any properties yet or no results match your search.
      </p>

       <button
            onClick={() => {
  if (remainingProperty <= 0) {
    setLimitType("property");
    setShowLimitMessage(true);
    return;
  }

  navigate("/addyourproperty");
}}
             className="flex items-center justify-center cursor-pointer gap-2 bg-[#6ABD11] text-white px-5 py-3 rounded-xl text-sm font-bold shadow hover:bg-[#5aa30e] transition w-full sm:w-auto host-grotesk">
              Add NewProperty
            </button>
    </div>
  ) : (
    filteredProperties.map((property) => (

              <div
                key={property.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm cursor-pointer hover:shadow-md transition"
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

  if (remainingEdit <= 0) {
    setLimitType("edit");
    setShowLimitMessage(true);
    return;
  }

  navigate(`/editproperty/${property.id}`);
}}
  className="flex items-center gap-1 text-sm border border-slate-200 cursor-pointer px-3 py-2 rounded-lg hover:bg-slate-100 transition host-grotesk"
>
  <Pencil size={14} />
</button>

    <button
      onClick={(e) =>{
          e.stopPropagation();
         handleDelete(property.id)}}
      className="p-2 text-slate-400 hover:text-red-500 transition cursor-pointer"
    >
      <Trash size={20} />
    </button>
  </div>
)}

                  </div>

                </div>

              </div>

                ))
  )}
</div>

        </div>
      </main>
    </div>
  );
};

export default PropertyListingLayout; 