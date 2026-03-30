import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import logo from "../../../assets/images/logo/logo.png";
import "./termsheader.css"

function TermsHeader({ 
  h1 = "Terms & Conditions",
  text = "Last Updated: March 27"
}) {
  return (
    <div className="md:p-5 p-2 relative bg-[#F4F4F4]">
      <Navbar color="text-white" />

      <div className="relative w-full min-h-[300px] md:min-h-[276px] bg-[#5E8D00] rounded-[32px] overflow-hidden">

        {/* Logo */}
        <div className="terms-cta-logo-container relative z-10 bg-[#F4F4F4]">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="terms-cta-logo w-[100px]" />
          </div>
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-20">
          <h1 className="text-white text-2xl md:text-[32px] instrument-sans font-semibold">
            {h1}
          </h1>
          <p className="text-white text-[16px] mt-2 host-grotesk font-[400]">
            {text}
          </p>
        </div>

      </div>
    </div>
  )
}

export default TermsHeader