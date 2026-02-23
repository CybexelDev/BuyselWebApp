import React from 'react'
import HeaderProperty from '../../Layouts/PropertyDetail/Header/Header'
import { properties } from '../../Constance/constance'
import img1 from "../../assets/images/propertDetail/img1.png"
import img2 from "../../assets/images/propertDetail/img2.jpg"
import img3 from "../../assets/images/propertDetail/img3.jpg"
import seller from "../../assets/images/propertDetail/seller.jpg"
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'
import Featured from '../../Layouts/Home/Featured/Featured'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'
function PropertyDetail() {

const productDetail = {
  id: 1,
  title: "2BHK Apartment – Green Park Residency",
  location: "Chennai, ECR Road",
  price: "₹6.0 Crore",
  area: "1020 sq.ft",
  postedOn: "Dec 27, 2025",
  status: "Sale",
    fullAddress: "ECR Road, Neelankarai, Chennai, Tamil Nadu - 600041",
  latitude: 12.9504,
  longitude: 80.2541,
    landmarks: [
    { name: "Delhi Public School", distance: 1.2, type: "school" },
    { name: "Apollo Hospital", distance: 2.1, type: "hospital" },
    { name: "Phoenix Marketcity", distance: 3.4, type: "shopping_mall" }
  ],

  seller: {
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

        <HeaderProperty property={productDetail}/>
        <MapSection address={productDetail.fullAddress} latitude={productDetail.latitude}
        longitude={productDetail.longitude} landmarks={productDetail.landmarks}
        />
        <Featured  title="Similar Properties" subTitle='Explore our latest listings for sale, rent and lease across'/>
         <AppPromoBanner/>
    <Footer/>
        </div>

  )
}

export default PropertyDetail