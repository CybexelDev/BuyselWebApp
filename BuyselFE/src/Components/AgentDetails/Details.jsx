import React, { useState } from "react";
import { agentContactForm } from "../../Api/userApi";

function Details({ agentData }) {
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!contactData.first_name || !contactData.last_name || !contactData.email || !contactData.phone || !contactData.message)
       {
      alert("Please fill required fields");
      return;
    }
    const res = await agentContactForm(contactData);

    if (res) {
      alert("Enquiry sent ✅");
    } else {
      alert("Failed ❌");
    }
     setContactData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
  };

  const details = [
    {
      stats: {
        "Properties Listed": 125,
        "Deals Closed": 75,
        "Years Experience": 8,
        "Areas Served": 95,
      },
      specializations: [
        "Residential",
        "Commercial",
        "Luxury Villas",
        "Investment Properties",
      ],
      operatingCities: ["Coimbatore", "Salem", "Tiruppur"],
      about:
        "Experienced real estate professional specializing in premium residential and commercial properties across Mumbai and Navi Mumbai. I help clients find their dream homes and make smart property investments with complete transparency and trust.",
    },
  ];

  const agent = details[0];

  const roleStyles = {
    premiumAgent: "bg-gradient-to-b from-[#F3FFE2] to-[#FFFFFFC7]",
    eliteAgent: "bg-gradient-to-b from-[#FFFCDC] to-[#FFFFFF]",
  };

  return (
    
   <div
  className={`w-full py-6 bg-white
    ${
      agentData.role === "agent"
        ? "px-4 sm:px-6 md:px-10 lg:px-[122px]"
        : "px-4 sm:px-6 md:px-10 lg:px-[64px]"
    }`}
>
      <div
  className={`grid 
    grid-cols-1 
    ${agentData.role !== "agent" ? "lg:grid-cols-[1.7fr_1fr]" : "lg:grid-cols-1"} 
    gap-15 lg:gap-[36px]`}
>
        {/* Left Side */}
        <div>
          {/* Stats */}
          <div
            className="flex flex-wrap justify-between             
                      gap-1 sm:gap-4
                      host-grotesk text-center 
                      mb-6 lg:mb-[34px]"
          >
            {Object.entries(agent.stats).map(([key, value], idx) => (
              <div key={idx} className="flex-1 lg:min-w-[120px]">
                <h2 className="text-[20px] sm:text-[24px] lg:text-[30px] font-[500] leading-[135%]">
                  {value}
                </h2>
                <p className="text-[10px] sm:text-[14px] lg:text-[16px] font-[500] leading-[135%] text-[#8C8F88]">
                  {key}
                </p>
              </div>
            ))}
          </div>

          {/* About */}
          <div className="mb-6 host-grotesk">
            <h3
              className="font-[700] 
                       text-[18px] lg:text-[20px] 
                       leading-[135%] mb-2"
            >
              About the Agent
            </h3>

            <p
              className="text-[#564C4C] 
                      text-[14px] lg:text-[16px] 
                      leading-[150%] font-[500]"
            >
              {agent.about}
            </p>
          </div>

          {/* Specialization + Cities */}
          <div className="space-y-8 lg:space-y-[46px] host-grotesk">
            {/* Specialization */}
            <div>
              <h3
                className="text-[18px] lg:text-[20px] 
                         leading-[135%] font-[700] 
                         mb-3 lg:mb-[14px]"
              >
                Specialization
              </h3>

              <div className="flex flex-wrap gap-[12px] lg:gap-[20px]">
                {agent.specializations.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-[#75c222] text-white 
                           px-5 lg:px-[40px] 
                           py-2.5 lg:py-[15px] 
                           rounded-[10px] 
                           text-[14px] lg:text-[16px] 
                           leading-[135%] font-[400]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Operating Cities */}
            <div>
              <h3
                className="text-[18px] lg:text-[20px] 
                         leading-[135%] font-[700] 
                         mb-3 lg:mb-[14px]"
              >
                Operating Cities
              </h3>

              <div className="flex flex-wrap gap-[12px] lg:gap-[20px]">
                {agent.operatingCities.map((city, idx) => (
                  <span
                    key={idx}
                    className="bg-[#75c222] text-white 
                           px-5 lg:px-[40px] 
                           py-2.5 lg:py-[15px] 
                           rounded-[10px] 
                           text-[14px] lg:text-[16px] 
                           leading-[135%] font-[400]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        {agentData.role !== "agent" && ( 
        <div 
          className={`${roleStyles[agentData.role] || "bg-white"}
             py-4 sm:py-[18px] 
             px-4 sm:px-6 lg:px-[37px] 
             rounded-[20px] lg:rounded-[24px]
             shadow-[0_4px_8.1px_0_rgba(106,101,101,0.25)]`}
        >
          <form className="space-y-4 sm:space-y-[20px]" onSubmit={handlesubmit}>
            {/* Heading */}
            <div>
              <h3
                className="host-grotesk 
                     text-[18px] lg:text-[20px] 
                     font-[700] leading-[135%] 
                     mb-1"
              >
                Contact Agent
              </h3>
              <p
                className="host-grotesk 
                    font-[500] 
                    text-[14px] lg:text-[16px] 
                    leading-[150%] 
                    text-[#AAA3A3]"
              >
                Get instant response • No brokerage
              </p>
            </div>

            {/* Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              <label
                className="lexend 
                        text-[14px] lg:text-[16px] 
                        font-[600] leading-[135%] 
                        text-black 
                        sm:col-span-2"
              >
                Name
              </label>

              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                className="w-full inter 
                   text-[14px] 
                   leading-[150%] font-[400]
                   bg-[#84cc16] text-black 
                   px-4 sm:px-[30px] 
                   py-3 sm:py-[15px]
                   rounded-[12px] sm:rounded-[15px]
                   outline-none
                   focus:ring-2 focus:ring-[#d8d7d7]
                   placeholder:text-[#757575] placeholder:italic"
                value={contactData.first_name}
                onChange={(e) => {
                  setContactData({ ...contactData, first_name: e.target.value });
                }}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                className="w-full inter 
                   text-[14px] 
                   leading-[150%] font-[400]
                   bg-[#84cc16] text-black 
                   px-4 sm:px-[30px] 
                   py-3 sm:py-[15px]
                   rounded-[12px] sm:rounded-[15px]
                   outline-none
                   focus:ring-2 focus:ring-[#d8d7d7]
                   placeholder:text-[#757575] placeholder:italic"
                   value={contactData.last_name}
                onChange={(e) => {
                  setContactData({ ...contactData, last_name: e.target.value });
                }}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-2 sm:space-y-[10px]">
              <label
                className="lexend 
                        text-[14px] lg:text-[16px] 
                        font-[600] leading-[135%] 
                        text-black"
              >
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Your mobile number"
                required
                pattern="[0-9]{10}"
                title="Enter 10 digit mobile number"
                className="w-full inter 
                   text-[14px] leading-[150%] font-[400]
                   bg-[#84cc16] text-black 
                   px-4 sm:px-[30px] 
                   py-3 sm:py-[15px]
                   rounded-[12px] sm:rounded-[15px]
                   outline-none
                   focus:ring-2 focus:ring-[#d8d7d7]
                   placeholder:text-[#757575] placeholder:italic"
                   value={contactData.phone}
                onChange={(e) => {
                  setContactData({ ...contactData, phone: e.target.value });
                }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2 sm:space-y-[10px]">
              <label
                className="lexend 
                        text-[14px] lg:text-[16px] 
                        font-[600] leading-[135%] 
                        text-black"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full inter 
                   text-[14px] leading-[150%] font-[400]
                   bg-[#84cc16] text-black 
                   px-4 sm:px-[30px] 
                   py-3 sm:py-[15px]
                   rounded-[12px] sm:rounded-[15px]
                   outline-none
                   focus:ring-2 focus:ring-[#d8d7d7]
                   placeholder:text-[#757575] placeholder:italic"
                   value={contactData.email}
                onChange={(e) => {
                  setContactData({ ...contactData, email: e.target.value });
                }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2 sm:space-y-[10px]">
              <label
                className="lexend 
                        text-[14px] lg:text-[16px] 
                        font-[600] leading-[135%] 
                        text-black"
              >
                Message
              </label>

              <textarea
                name="message"
                placeholder="Your message"
                required
                minLength={5}
                className="w-full inter 
                   text-[14px] leading-[150%] font-[400]
                   bg-[#84cc16] text-black 
                   px-4 sm:px-[30px] 
                   py-3 sm:py-[15px]
                   rounded-[12px] sm:rounded-[15px]
                   outline-none 
                   h-[100px] sm:h-[120px]
                   resize-none
                   focus:ring-2 focus:ring-[#d8d7d7]
                   placeholder:text-[#757575] placeholder:italic"
                   value={contactData.message}
                onChange={(e) => {
                  setContactData({ ...contactData, message: e.target.value });
                }}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full host-grotesk 
                 bg-black text-[#6ABD11ED] 
                 text-[16px] lg:text-[18px]
                 leading-[135%]
                 py-3 sm:py-[14px]
                 rounded-[12px] sm:rounded-[15px]
                 font-semibold
                 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
            >
              Send Enquiry
            </button>
          </form>
        </div>
        )}
      </div>
    </div>
  );
}

export default Details;
