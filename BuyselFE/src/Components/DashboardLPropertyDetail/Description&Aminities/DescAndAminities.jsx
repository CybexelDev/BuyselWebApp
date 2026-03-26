import React, { useState, useEffect } from "react";
import i1 from "../../../assets/images/propertDetail/i1.png";

function DescAndAminities({ data }) {
  const [detail, setDetail] = useState([]);

  console.log(detail.keySellingPoint, "llll");

  useEffect(() => {
    setDetail(data);
  }, [data]);

  return (
    <>
      <div className="md:px-7 px-3 py-1  md:py-5 sm:mb-25">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div class="md:col-span-8 ">
            {/* description ivden da */}
            <div className="w-full bg-[#efefef] rounded-[23px] px-5 py-6">
              <p className="text-[#181818] host-grotesk text-[20px] font-[700]">
                Property Description
              </p>
              <p className="text-[#808080] mt-3 text-[16px] font-[500]">
                <span className="inter">Address:</span> {detail.address}
              </p>
              <p className="text-[#181818] font-[400] text-[16px] host-grotesk mt-3">
                {detail.description}
              </p>

              <p className="text-[#181818] host-grotesk text-[20px] font-[500] mt-3">
                Key Selling Points
              </p>

              <ul className="space-y-4 mt-2 host-grotesk">
                {detail?.keySellingPoint?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 bg-[#4C4545] rounded-full"></span>
                    <p className="text-[#4C4545] text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div class="md:col-span-4">
            <div className="">
              <p className="host-grotesk text-[24px] font-[700] text-[#181818]">
                Amenities & Features
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-4 host-grotesk mt-4">
                {detail?.amenities?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#74c222] rounded-[14px] px-3 md:px-5 py-2 md:py-3 flex gap-1 items-center text-[14px] md:text-[15px] text-white cursor-pointer"
                  >
                    <img
                      className="w-[14px] h-[14px] object-contain"
                      src={item?.icon}
                      alt=""
                    />

                    <span className="truncate">{item?.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescAndAminities;
