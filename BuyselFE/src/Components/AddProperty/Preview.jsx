import React from "react";
import { useState } from "react";
import { Landmark, PlayCircle } from "lucide-react";
import Propertycard from "../PropertyCard/Propertycard";
import { GraduationCap } from "lucide-react";

const features = [
    "Plan Validity 90 Days",
    "Social Media Marketing",
    "Owner Profile Creation",
    "Meta Ad Promotion",
    "Property Verification",
    "Poster Creation",
  ];



const PreviewProperty = ({formData,setFormData}) => {

const property = {
  label: formData.title, // ✅ FIX
  city: formData.city,   // ✅ FIX
  location: `${formData.city}, ${formData.state}`,
  price:
    formData.purpose === "Sale"
      ? formData.pricing?.totalPrice
      : formData.purpose === "Rent"
      ? formData.pricing?.monthlyRent
      : formData.pricing?.totalAmount,
  perprice: formData.pricing?.pricePerUnit || "", // ✅ optional
  deposit: formData.pricing?.deposit || "", // ✅ optional

  unit: formData.pricing?.unit || "",  
  land_area: formData.squareFeet, // ✅ FIX
  owner: formData.owner,
  phone: formData.phone,       // ✅ FIX
  purpose: formData.purpose,
    whatsapp: formData.phone,    // ✅ FIX (reuse phone if same)
    // ✅ FIX (reuse phone if same)
images: formData.images?.map((img) => img.preview || img) || []};

const pricingDetails = () => {
  if (formData.purpose === "Sale") {
    return [
      {
        label: "Total Price",
        value: formData.pricing?.totalPrice || "N/A",
      },
      {
        label: `Price per ${formData.pricing?.unit || "N/A"}`,
        value: formData.pricing?.pricePerUnit || "N/A",
      },
    ];
  }

  if (formData.purpose === "Rent") {
    return [
      {
        label: "Monthly Rent",
        value: formData.pricing?.monthlyRent || "N/A",
      },
      {
        label: "Deposit",
        value: formData.pricing?.deposit || "N/A", // ✅ FIX
      },
    ];
  }

  if (formData.purpose === "Lease") {
    return [
      {
        label: "Total Amount",
        value: formData.pricing?.totalAmount || "N/A", // ✅ FIX
      },
    ];
  }

  return [];
};



  const detail = {
  description: formData.description || "No description added",

  keySellingPoint:
    formData.keyPoints?.map((item) => ({
      content: item,
    })) || [],

    amenities:
    formData.amenities?.map((item) => ({
      _id: item.id,
      name: item.name, // ✅ FIX HERE
    })) || [],

  address: `${formData.city},${formData.district}, ${formData.state}`,
};

const nearbyPlaces =
  formData.landmarks?.map((item) => ({
    name: item.name || "",
    distance: item.distance || "",
  })) || [];

  console.log(nearbyPlaces, "Nearby Places");



    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="flex-1 space-y-8  relative p-9 lg:p-0 2xl:p-9 rounded-2xl w-full">

      <h1 className="text-2xl font-semibold lexend text-black">
        Preview Your Listing
      </h1>

      <div className="grid lg:grid-cols-[340px_1fr] gap-4 items-start">

        <div className="sticky top-6 shadow-md">
          <Propertycard property={property} hideWishlist={true} hideContact={true}  />
        </div>

        <div className="space-y-4 p-0" >

          <div className="bg-white rounded-2xl border border-[#7BC21F] p-6 shadow-sm host-grotesk">

  <h3 className="font-semibold text-gray-800 mb-4 text-[20px]">
    Property Features
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">

    {(formData.features || []).map((item, index) => (
  <DetailItem
    key={index}
    title={item.name}
    value={item.value}
  />
))}

  </div>

</div>

          <DetailBox title="Pricing Details">
  {pricingDetails().map((item, index) => (
    <DetailRow
      key={index}
      label={item.label}
      value={item.value}
    />
  ))}
</DetailBox>

        </div>

      </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

  {/* LEFT SIDE */}
  <div className="bg-[#efefef] rounded-[23px] px-6 py-7">

    <p className="text-[#181818] host-grotesk text-[20px] font-[700]">
      Property Description
    </p>

    <p className="text-[#181818] font-[400] text-[16px] host-grotesk mt-4 leading-relaxed">
      {detail.description}
    </p>

    <p className="text-[#181818] host-grotesk text-[20px] font-[600] mt-6">
      Key Selling Points
    </p>

    <ul className="space-y-3 mt-4 host-grotesk">
      {detail.keySellingPoint?.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-[7px] w-[5px] h-[5px] bg-[#4C4545] rounded-full"></span>

          <p className="text-[#4C4545] text-[15px] leading-relaxed">
            {item.content}
          </p>
        </li>
      ))}
    </ul>

  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col gap-6">

  {/* Amenities Section */}
  <div>
    <p className="host-grotesk text-[22px] font-[700] text-[#181818] mb-5">
      Amenities & Features
    </p>

    <div className="flex flex-wrap gap-3">
      {detail?.amenities?.map((item, index) => (
        <div
          key={index}
          className="bg-[#74C122] rounded-[14px] px-5 py-2.5 flex items-center text-[14px] text-white font-medium hover:bg-white hover:text-[#74C122] hover:shadow-md transition"
        >
          {item?.name}
        </div>
      ))}
    </div>
  </div>

 <p className="host-grotesk text-[22px] font-[700] text-[#181818] ">
      Location & Nearby Location
    </p>

  {/* Nearby Places Section */}
  <div className="bg-[#74C122] text-white rounded-2xl p-5 w-full  ">

    {/* Address */}

    <p className="text-sm opacity-90 mb-4">
     {detail.address}
    </p>

    {/* Places List */}
    <div className="space-y-3">
      {nearbyPlaces.map((place, i) => (
        <div
          key={i}
          className="hover:shadow-lg transition flex items-center justify-between bg-white  text-gray-800 rounded-full px-4 py-2"
        >
          <div className="flex items-center gap-2">
            <div className="bg-[#74C122] p-2 rounded-full text-white">
              <Landmark size={14} />
            </div>

            <span className="text-sm font-medium">
              {place.name}
            </span>
          </div>

          <span className="text-sm font-semibold">
            {place.distance}
          </span>
        </div>
      ))}
    </div>

  </div>

</div>

</div>


      
      <div className="bg-white rounded-[40px]  border border-[#84CC16]  p-6">

        <h3 className="font-semibold text-black lexend text-[16px] mb-4">
          Images 
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

         {formData.images?.map((item, i) => (
  <img
    key={i}
    src={item.preview || item}
    className="rounded-[20px] h-28 w-full object-cover cursor-pointer hover:scale-105 transition duration-200"
    onClick={() => setSelectedImage(item.preview || item)}
    alt="property"
  />
))}

{formData.images?.length === 0 && (
  <p className="text-gray-400 text-sm">No images uploaded</p>
)}



        

        </div>

      </div>

{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      className="h-[80vh] w-[80vw] rounded-xl"
      alt="preview"
    />
  </div>
)}
    </div>
  );
};

const DetailItem = ({ title, value }) => (
  <div>
    <p className="font-semibold text-[20px]">{title}</p>
    <p className="text-gray-500 mt-1 text-[16px]">{value}</p>
  </div>
);

const DetailBox = ({ title, children }) => (
          <div className="bg-white rounded-2xl border border-[#7BC21F] p-6 shadow-sm host-grotesk">
    <h3 className="font-bold text-gray-800 mb-4 text-[20px]">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-black font-semibold text-[20px]">{label}</span>
    <span className="font-semibold text-gray-800 text-[16px]">{value}</span>
  </div>
);

export default PreviewProperty;