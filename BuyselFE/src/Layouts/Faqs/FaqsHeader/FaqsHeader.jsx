import React from "react";
import "./faqsheader.css";
import logo from "../../../assets/images/logo/logo.png";
import Navbar from "../../../Components/Navbar/Navbar";

import bgImage from "../../../assets/images/faqs/faqsheader.jpg";

const FaqsHeader = ({
  h1 = "How Can We Help You?",
  text = "Find quick answers to common questions about BuySel.in, explore how our platform works, and get the support you need.",
}) => {
  return (
    <div className="md:p-5 p-2 relative">
      <Navbar color="text-white" />

      <div
        className="
          relative w-full 
          min-h-[260px] sm:min-h-[300px] md:min-h-[354px] 
          bg-cover bg-center 
          rounded-[20px] md:rounded-[32px] 
          overflow-hidden
        "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Logo */}
        <div className="faq-cta-logo-container relative z-10 pt-4 sm:pt-6 md:pt-0">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="
                faq-cta-logo 
                w-[70px] sm:w-[85px] md:w-[100px]
              "
            />
          </div>
        </div>

        {/* headings */}
        <div
          className="
            relative z-10 
            flex flex-col items-center justify-center 
            text-center text-white 
            px-4 sm:px-6 
            mt-6 sm:mt-10 md:mt-16
          "
        >
          <h1
            className="
              text-[20px] sm:text-[24px] md:text-[32px] 
              font-[700] instrument-sans 
              leading-snug
            "
          >
            {h1}
          </h1>

          <p
            className="
              mt-2 sm:mt-3 
              text-[13px] sm:text-[14px] md:text-[16px] 
              text-white 
              max-w-[90%] sm:max-w-xl 
              leading-relaxed
              host-grotesk
            "
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqsHeader;