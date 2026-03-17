import React from "react";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import Propertycard from "../PropertyCard/Propertycard";
import { GraduationCap } from "lucide-react";

const nearbyPlaces = [
  { name: "Delhi Public School", distance: "1.2 KM" },
  { name: "Delhi Public School", distance: "1.2 KM" },
  { name: "Delhi Public School", distance: "1.2 KM" },
];
const features = [
    "Plan Validity 90 Days",
    "Social Media Marketing",
    "Owner Profile Creation",
    "Meta Ad Promotion",
    "Property Verification",
    "Poster Creation",
  ];

const property = {
  id: 1,
  title: "Modern Luxury Villa",
  location: "Kochi, Kerala",
  price: "1.25 Cr",
  area: "2400 sqft",
  owner: "Rahul Nair",
  contact: "919876543210",
  images: [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  ],
};
 
const detail={
description:"Check out this 3 bhk house for sale in Saibaba Colony, a popular residential locality that contains many of the in-Demand properties in coimbatore. The floor plan additionally contains 3 bedrooms, 3 bathrooms and 2 balconies. All in all, the independent house is spread over a super built up area of 2750 sq.Ft. This is a ready to move house, which is 5-10 years old. The ownership right of this property is co-Operative society. By paying just 1.5 crore",
  keySellingPoint:[
    {content:"Prime location in Whitefield with excellent connectivity"},
    {content:"Spacious rooms with large windows and natural ventilation"},
    {content:"Modular kitchen with chimney and hob"},
    {content:"Gated community with 24/7 security"},
    {content:"Close to major IT parks (Prestige Tech Park, ITPL)"},
    {content:"Well-connected to metro station and main road"}
  ],
  amenities:[
    {
     _id:"1",
     name:"Water supply"
    },
    {
     _id:"2",
     name:"Gated Community"
    },
    {
     _id:"3",
     name:"Near by Hospital"
    },
    {
     _id:"4",
     name:"Kids’ Play Area"
    },
    {
     _id:"5",
     name:"CCTV Surveillance"
    },
    {
     _id:"6",
     name:"Solar Panels & Green Energy"
    },
    {
     _id:"7",
     name:"Near bus stop"
    },
  ],
    address:"Kalapatti, Coimbatore, Tamil Nadu",

}

const PreviewProperty = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="flex-1 space-y-8 mb-5 relative">

      <h1 className="text-2xl font-semibold lexend text-black">
        Preview Your Listing
      </h1>

      <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">

        <div className="sticky top-6 shadow-md">
          <Propertycard property={property} />
        </div>

        <div className="space-y-6 pr-10" >

          <div className="bg-white rounded-2xl border border-[#7BC21F] p-6 shadow-sm host-grotesk">

            <h3 className="font-semibold text-gray-800 mb-4 text-[20px]">
              Property Features
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

              <DetailItem title="Bedrooms" value="2 Bedrooms" />
              <DetailItem title="Bathrooms" value="3 Bathrooms" />
              <DetailItem title="Parking" value="Yes" />
              <DetailItem title="Facing" value="East" />
              <DetailItem title="Furnishing" value="Fully Furnished" />

            </div>

          </div>

          <DetailBox title="Pricing Details">
            <DetailRow label="Sale Price" value="4.14 - 5.52 Crore" />
            <DetailRow label="Sale by Acres" value="1.15 -2.2 Lakhs" />
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
      Whitefield Main Road, Whitefield, Chennai – 560066
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
              <GraduationCap size={14} />
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

         {[1, 2, 3].map((i) => {
  const img = `https://picsum.photos/seed/${i + 20}/300/200`;

  return (
    <img
      key={i}
      src={img}
      className="rounded-[20px] h-28 w-full object-cover cursor-pointer hover:scale-105 transition duration-200"
      onClick={() => setSelectedImage(img)}
      alt="interior"
    />
  );
})}

        

        </div>

      </div>
<div className="max-w-3xl mx-auto p-4">
  <div className="border-3 border-[#82CD28] rounded-[20px] p-5 sm:p-8 font-sans relative overflow-hidden bg-white shadow-sm">

    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-black lexend mb-1 text-center  lg:text-left">
          Property Listing Package
        </h2>
        <p className="text-[13px] sm:text-[14px] inter text-gray-500 font-[400] text-center  lg:text-left">
          Premium listing with maximum visibility
        </p>
      </div>

      <div className="text-xl sm:text-2xl text-center  lg:text-left font-semibold text-[#82CD28] lexend">
        ₹5000
      </div>
    </div>

    <div className="bg-[#84CC16] rounded-[20px] sm:rounded-[30px] p-5 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center  space-x-3 text-white"
          >
            <div className="bg-white rounded-full p-0.5 flex-shrink-0">
              <svg
                className="w-4 h-4 text-[#82CD28]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <span className="text-[13px] sm:text-[14px] font-medium inter">
              {feature}
            </span>
          </div>
        ))}

      </div>
    </div>

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