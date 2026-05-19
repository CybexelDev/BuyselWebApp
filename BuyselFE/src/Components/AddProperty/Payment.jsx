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
function Payment() {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="flex-1 space-y-8 mb-5 relative">

      
  
<div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
  
  {/* LEFT CARD (your existing one) */}
  <div className="border-3 border-[#82CD28] rounded-[20px] p-5 sm:p-6 bg-white shadow-sm">
    
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-black lexend mb-1 text-center lg:text-left">
          Property Listing Package
        </h2>
        <p className="text-[13px] sm:text-[14px] inter text-gray-500 text-center lg:text-left">
          Premium listing with maximum visibility
        </p>
      </div>

      <div className="text-xl sm:text-2xl text-center lg:text-left font-semibold text-[#82CD28] lexend">
        ₹5000
      </div>
    </div>

    <div className="bg-[#84CC16] rounded-[20px] sm:rounded-[30px] p-5 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3 text-white">
            <div className="bg-white rounded-full p-0.5">
              <svg className="w-4 h-4 text-[#82CD28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/>
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

  {/* RIGHT CARD */}
  <div className="bg-[#5E8D00] text-white rounded-[20px] p-6 sm:p-8 flex flex-col justify-between shadow-md">
    
    <div>
      <p className="text-[16px] flex items-center gap-2 mb-6 opacity-90 inter ">
       
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.558 2.98172C12.1941 2.85857 11.7998 2.85857 11.436 2.98172L4.65995 5.27672C4.43925 5.34841 4.24432 5.48307 4.09916 5.66412C3.954 5.84517 3.86495 6.06471 3.84295 6.29572C3.50595 10.5217 4.09095 13.6467 5.47995 16.0077C6.82395 18.2927 8.97395 19.9537 11.997 21.1917C15.023 19.9537 17.175 18.2927 18.519 16.0077C19.909 13.6477 20.494 10.5217 20.157 6.29572C20.135 6.06471 20.0459 5.84517 19.9007 5.66412C19.7556 5.48307 19.5607 5.34841 19.34 5.27672L12.558 2.98172ZM10.955 1.56172C11.6307 1.33263 12.363 1.33228 13.039 1.56072L19.821 3.85572C20.3191 4.02162 20.7578 4.3297 21.083 4.74195C21.4082 5.1542 21.6056 5.65261 21.651 6.17572C22.004 10.5857 21.411 14.0517 19.812 16.7687C18.208 19.4937 15.651 21.3667 12.272 22.6977C12.0952 22.7674 11.8987 22.7674 11.722 22.6977C8.34595 21.3667 5.78995 19.4937 4.18695 16.7687C2.58895 14.0517 1.99595 10.5847 2.34795 6.17572C2.39327 5.65261 2.5907 5.1542 2.91588 4.74195C3.24106 4.3297 3.67978 4.02162 4.17795 3.85572L10.955 1.56172Z" fill="white"/>
<path opacity="0.5" d="M12 20.0005C17.032 17.9605 19.406 14.3825 18.943 7.63346C18.891 6.86646 18.367 6.21746 17.64 5.96446L12.82 4.28646C12.5563 4.19467 12.2792 4.14768 12 4.14746V20.0005Z" fill="white"/>
</svg>


 100% Secure Payment
      </p>

      <div className="space-y-4 text-sm inter mt-20">
        <div className="flex justify-between">
          <span>Registration Fee</span>
          <span>₹4500</span>
        </div>

        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹500</span>
        </div>
      </div>
    </div>

    <div className="border-t border-white/30 mt-2 pt-[16px] flex justify-between font-semibold text-[14px] ">
      <span>Total Amount</span>
      <span className="text-[18px]">₹5000</span>
    </div>

  </div>

</div>
<div className="bg-[#F6D2A2] rounded-[14px] p-4 sm:p-5 flex items-start gap-3">

  {/* Icon */}
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12ZM12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7ZM11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15H12.008C12.2732 15 12.5276 15.1054 12.7151 15.2929C12.9026 15.4804 13.008 15.7348 13.008 16C13.008 16.2652 12.9026 16.5196 12.7151 16.7071C12.5276 16.8946 12.2732 17 12.008 17H12C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16Z" fill="#960000"/>
</svg>


  {/* Content */}
  <div>
    <p className=" text-[16px] text-[#960000] lexend font-semibold mb-2">
      Important
    </p>

    <ul className="text-[13px] sm:text-[16px] text-red-700 space-y-1 inter font-medium">
      <li>• Your listing will be live within 24 hours after verification</li>
      <li>• Payment is for life time but the selected features only available for 90 days for active listing</li>
      <li>• You can edit your listing anytime from your dashboard</li>
    </ul>
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
}

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
export default Payment