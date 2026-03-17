import React from "react";
import ButtonHead from "../../../Components/ButtonHead/ButtonHead";
import planbg from "../../../assets/images/plan/planbg1.png";

function Plan() {
  return (
    <div className="mx-[20px] lg:mx-[40px] xl:mx-[74px] py-6">
      <section className="bg-[#f2f2f2] rounded-[40px] overflow-hidden flex flex-col  lg:h-[285px] lg:flex-row">

        {/* Left Content */}
        <div className="flex-1 px-[14px] md:px-[25px] lg:px-[30px] pt-[40px] lg:py-[40px] z-10">

          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7AC943]/10 text-[#5ea62f] text-sm font-medium instrument-sans">
            <span className="w-2 h-2 bg-[#7AC943] rounded-full"></span>
            Premium Solutions for Real Estate
          </div>

          {/* Heading */}
          <h1 className="text-xl sm:text-[28px] font-bold text-gray-900 mb-2 leading-tight tracking-tight instrument-sans">
            Grow Your Real Estate Business
          </h1>

          {/* Description */}
          <p className="text-[13px] sm:text-base md:text-md text-gray-600 mb-6 sm:w-[500px] leading-[20px] sm:leading-relaxed host-grotesk">
            Manage properties, connect with buyers, and scale your business
            with our comprehensive real estate platform.
          </p>

          {/* Button */}
          <ButtonHead text={"Explore All Plans"} />

        </div>

        {/* Right Image */}
        <div className=" flex-1 overflow-hidden flex items-end">
          <img
            src={planbg}
            alt="city skyline"
            className="-mb-20 w-full h-[300px] lg:h-full  object-top "
          />
        </div>

      </section>
    </div>
  );
}

export default Plan;