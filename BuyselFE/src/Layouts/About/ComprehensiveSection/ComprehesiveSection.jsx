import React from 'react'
import house2 from "../../../assets/images/about/house2.png"

function ComprehesiveSection() {
    return (
        <div>

            <div>
                <div
                    className="
      w-full 
      h-[250px] 
      sm:h-[420px] 
      md:h-[500px] 
      lg:h-[568px] 
      bg-cover 
      bg-bottom
    "
                    style={{ backgroundImage: `url(${house2})` }}
                ></div>

            </div>
<div className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-[14px]">

    <div className="bg-black text-white rounded-2xl py-15 pl-10 pr-35 lg:row-span-3 flex flex-col justify-center shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h2 className="text-2xl md:text-[24px] instrument-sans font-[450] mb-1  ">
        Comprehensive Services for 
        All Your Property Needs
      </h2>
      <p className="text-gray-300 text-sm md:text-base  host-grotesk font-[400]">
       End-to-end real estate solutions tailored for buyers, sellers, renters and agents.
      </p>
    </div>

    <div className="bg-[#6ABD11BA] rounded-2xl p-6 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-2 host-grotesk text-[20px]">Comprehensive Support</h3>
      <p className="text-[16px] host-grotesk text-[400]">
        Our platform ensures a smooth experience with easy navigation
        and dedicated customer service.
      </p>
    </div>

    <div className="bg-[#000000D6] text-white rounded-2xl p-6 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-2">Locality Insights</h3>
      <p className="text-sm text-gray-300">
        Access thousands of trusted listings and connect directly with buyers
        or sellers — no middlemen.
      </p>
    </div>

    <div className="bg-[#F8F8F8BA] rounded-2xl p-6 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-2">Verified Listings</h3>
      <p className="text-sm">
        Access thousands of trusted, verified listings.
      </p>
    </div>

    <div className=" bg-[#BBBBBB] rounded-2xl p-6 lg:row-span-2 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-2">Expert Agent Assistance</h3>
      <p className="text-sm">
        Connect with verified real estate professionals who offer expert
        guidance, personalized tours and smooth negotiation support.
      </p>
    </div>

    {/* YELLOW CARD */}
    <div className="bg-yellow-400 rounded-2xl p-6 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-2">Secure Documentation</h3>
      <p className="text-sm">
        Benefit from reliable support for agreements and legal checks.
      </p>
    </div>

  </div>
</div>        </div>

    )
}

export default ComprehesiveSection