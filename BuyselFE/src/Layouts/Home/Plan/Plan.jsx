import React from "react";
import ButtonHead from "../../../Components/ButtonHead/ButtonHead";
import planbg from "../../../assets/images/plan/planbg1.png";

function Plan() {
  return (
    <div className="mx-[20px] lg:mx-[40px] xl:mx-[74px] py-6">
      <section className="bg-[#f2f2f2] rounded-[40px] overflow-hidden flex flex-col  lg:h-[285px] lg:flex-row">

        <div className="flex-1 px-[14px] md:px-[25px] lg:px-[30px] pt-[40px] lg:py-[40px] z-10">

          <div className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7AC943]/10 text-[#5ea62f] text-sm font-medium instrument-sans">
  <span className="w-2 h-2 bg-[#7AC943] rounded-full"></span>
  Choose the Perfect Plan for Your Business
</div>

<h1 className="text-xl sm:text-[28px] font-bold text-gray-900 mb-2 leading-tight tracking-tight instrument-sans">
  Select a Plan That Fits Your Needs
</h1>

<p className="text-[13px] sm:text-base md:text-md text-gray-600 mb-6 sm:w-[500px] leading-[20px] sm:leading-relaxed host-grotesk">
  Unlock premium features, manage more properties, and grow your real
  estate business by choosing the right subscription plan for you.
</p>

          <ButtonHead  text={"Explore All Plans"} path="/plans" />

        </div>

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