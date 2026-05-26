import React from "react";

const stats = [
  {
    value: "120+",
    label: "Successful Transactions Monthly",
  },
  {
    value: "92%",
    label: "Customer Satisfaction Rate",
  },
  {
    value: "780+",
    label: "Verified Properties Ready for You",
  },
  {
    value: "92%",
    label: "Customer Satisfaction Rate",
  },
];

const StatsCards = () => {
  return (
    <div className="w-full py-8">
      {/* Grid Container */}
         <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-[30px] ">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative host-grotesk bg-white rounded-[23px] px-[15px] pt-[17px] pb-[30px]   shadow-[0px_4px_8.2px_rgba(189,171,171,0.25),0px_0px_4px_rgba(170,149,149,0.25)]
                         w-full lg:w-1/4  h-[220px] sm:h-[240px] md:h-[260px] lg:h-[276px]"

          >
            {/* Green Dot */}
            <span className="absolute top-[17px] right-[15px] w-[21px] h-[21px] bg-[#589a11] rounded-full"></span>

            <div className="flex flex-col justify-between h-full">
                <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[44px] font-[500] text-black">
  {item.value}
</h2>


            <p className="text-[16px] font-[450] text-[#8A8A8A] leading-[100%] ">
              {item.label}
            </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
