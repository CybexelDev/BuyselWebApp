import React from "react";
import "./wishlist.css";
import logo from "../../../assets/images/logo/logo.png";
import Navbar from "../../../Components/Navbar/Navbar";
import bgPromotionalBanner from "../../../assets/images/appPromotionalBanner/bgPromotionalBanner.png"

const WishlistHeader = () => {
  return (
    <div className="md:p-5 p-2 pb-0 relative">
      <Navbar />

      <div className="wishlist-cta-container relative overflow-hidden">

        {/* Background Image */}
        <div
          className="
            absolute inset-0 opacity-10
            pointer-events-none
            
            bg-[length:100%_100%]
            bg-[position:center_bottom]
          "
          style={{
            backgroundImage: `url(${bgPromotionalBanner})`,
          }}
        />

        {/* Logo */}
        <div className="wishlist-cta-logo-container relative z-10">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="wishlist-cta-logo w-[100px]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WishlistHeader;

