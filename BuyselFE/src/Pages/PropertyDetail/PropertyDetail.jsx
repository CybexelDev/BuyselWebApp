import React from 'react'
// import HeaderProperty from '../../Layouts/PropertyDetail/Header/Header'
import { properties } from '../../Constance/constance'
import img1 from "../../assets/images/propertDetail/img1.png"
import img2 from "../../assets/images/propertDetail/img2.jpg"
import img3 from "../../assets/images/propertDetail/img3.jpg"
import seller from "../../assets/images/propertDetail/seller.jpg"
import i1 from "../../assets/images/propertDetail/i1.png"
import i2 from "../../assets/images/propertDetail/i2.png"
import i3 from "../../assets/images/propertDetail/i3.png"
import i4 from "../../assets/images/propertDetail/i4.png"
import i5 from "../../assets/images/propertDetail/i5.png"
import i6 from "../../assets/images/propertDetail/i6.png"
import i7 from "../../assets/images/propertDetail/i7.png"
import { DescriptionAndAminities } from '../../Layouts/PropertyDetail/DescriptionAndAminities/DescriptionAndAminities'
function PropertyDetail() {

const productDetail = {
  id: 1,
  title: "2BHK Apartment – Green Park Residency",
  location: "Chennai, ECR Road",
  price: "₹6.0 Crore",
  area: "1020 sq.ft",
  postedOn: "Dec 27, 2025",
  status: "Sale",
  description:"Check out this 3 bhk house for sale in Saibaba Colony, a popular residential locality that contains many of the in-Demand properties in coimbatore. The floor plan additionally contains 3 bedrooms, 3 bathrooms and 2 balconies. All in all, the independent house is spread over a super built up area of 2750 sq.Ft. This is a ready to move house, which is 5-10 years old. The ownership right of this property is co-Operative society. By paying just 1.5 crore",
  keySellingPoint:[
    {content:"Prime location in Whitefield with excellent connectivity"},
    {content:"Spacious rooms with large windows and natural ventilation"},
    {content:"Modular kitchen with chimney and hob"},
    {content:"Gated community with 24/7 security"},
    {content:"Close to major IT parks (Prestige Tech Park, ITPL)"},
    {content:"Well-connected to metro station and main road"}
  ],
  address:"Kalapatti, Coimbatore, Tamil Nadu",
  amenities:[
    {
     _id:"1",
     icon: i1,
     name:"Water supplay"
    },
    {
     _id:"2",
     icon: i2,
     name:"Gated Community"
    },
    {
     _id:"3",
     icon: i3,
     name:"Near by Hospital"
    },
    {
     _id:"4",
     icon: i4,
     name:"Kids’ Play Area"
    },
    {
     _id:"5",
     icon: i5,
     name:"CCTV Surveillance"
    },
    {
     _id:"6",
     icon: i6,
     name:"Solar Panels & Green Energy"
    },
    {
     _id:"7",
     icon: i7,
     name:"Near bus stop"
    },
  ],
  seller:{
    company: "Ravi Rentals",
    name: "Arun Kumar",
    phone: "+91 9876543210",
    image:seller
  },
  features: {
    bedrooms: "2 Bedrooms",
    bathrooms: "2 Bathrooms",
    parking: "Available",
    facing: "East",
    furnishing: "Furnished"
  },

  images: [
    img1,
    img2,
    img3
  ]
}

  return (
    <div>
        {/* <HeaderProperty property={productDetail}/> */}

        <DescriptionAndAminities data={productDetail} />

    </div>
  )
}

export default PropertyDetail