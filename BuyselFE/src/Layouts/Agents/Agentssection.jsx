import React from "react";
import badge from '../../assets/images/icons/badge (2).svg'


function Agentssection (){
  const agents = [
    {
      tag: "Agents",
      title: "High-Visibility Property Agent",
      desc: "Verified local agents for basic property\nneeds.",
      features: [
        "Verified profiles",
        "Standard listings",
        "Local market experts",
      ],
      btn: "Explore Agents",
    },
    {
      tag: "Premium Agent",
      title: "High-Visibility Property Agent",
      desc: "Top-performing agents with better exposure and faster responses.",
      features: [
        "Priority listing placement",
        "More genuine buyer leads",
        "Trusted professionals",
      ],
      btn: "Explore Premium Agents",
    },
    {
      tag: "Elite Agent",
      title: "Elite Agents",
      desc: "Highly experienced agents offering premium and priority service.",
      features: [
        "Top search ranking",
        "Maximum exposure",
        "Dedicated support",
      ],
      btn: "Explore Elite Agents",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className=" mx-[30px] lg:mx-[74px]">
        <h2 className=" text-black host-grotesk font-[500] text-[24px] leading-[100%]">
          Meet Our Trusted Agents
        </h2>

         <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-[30px] mt-[32px]">
          {agents.map((item, index) => (
            <div
              key={index}
              className="bg-white relative rounded-[30px] overflow-hidden p-[22px]
             w-full lg:w-1/3
             h-[350px]
             shadow-[0px_4px_17.7px_0px_#4B3A3A40]"

            >
              <span className="inline-flex absolute  top-[16px] -left-[6px] items-center h-[35px]  gap-[5px] bg-[#1C1C1CED] text-white text-sm  px-[16px] rounded-[10px] mb-5">
                <img src={badge} alt="badge" />
                {item.tag}
              </span>

              <h3 className="instrument-sans text-[18px] pt-[60px] font-[600] leading-[100%] mb-[14px] text-black
                 truncate whitespace-nowrap overflow-hidden"
               >
                {item.title}
              </h3>

              <p className="text-[#675e5e] mb-[17px] host-grotesk font-[400] text-[16px] leading-[19px] whitespace-pre-line">
                  {item.desc}
              </p>


              <ul className="space-y-3 mb-[26px]">
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex host-grotesk font-[400] text-[14px] leading-[16px] gap-[9px] text-[#675e5e]"
                  >
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="18"
                height="16"
               viewBox="0 0 24 24"
               >
              <path
                fill="#d6edbd"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
               />

              <path
                 fill="#96872a"   
                d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275z"
                />
                </svg>
                      {feature}
                  </li>
                ))}
              </ul>


             <button className=" inline-flex items-center justify-center px-[20px] h-[45px]
          bg-[#383434] text-[#F0F0F0] mb-[20px] sm:mb-[37px]
               rounded-[12px] gap-[10px]">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agentssection;
