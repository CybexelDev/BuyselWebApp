
import React, { useState, useEffect } from "react";
import { Sparkles, Eye, EyeOff, ClipboardList, Clock } from "lucide-react";

function DescAndAminities({ data, notes=[],visitedCount }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setDetail(data || {});
  }, [data]);

  

  return (
    <div className="md:px-7 px-3 py-1 md:py-5 sm:mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

        {/* LEFT SIDE - PROPERTY DESCRIPTION */}
        <div className="lg:col-span-8 flex">
          <div className="w-full h-full bg-[#efefef] rounded-[23px] px-5 py-6">

            <p className="text-[#181818] host-grotesk text-[20px] font-[700]">
              Property Description
            </p>

            <p className="text-[#181818] font-[400] text-[16px] host-grotesk mt-3 leading-relaxed">
              {detail.description}
            </p>

            <p className="text-[#808080] inter mt-3 text-[16px] font-[500]">
              <span className="inter">Address:</span>{" "}
              {detail.location}
            </p>

            {/* KEY SELLING POINTS */}
           <p className="text-[#181818] host-grotesk text-[20px] font-[500] mt-5">
              Key Selling Points
            </p>

            {detail?.key_selling_points?.length > 0 ? (
              <ul className="space-y-2 mt-3 host-grotesk">
                {detail.key_selling_points.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 w-[5px] h-[5px] bg-[#4C4545] rounded-full flex-shrink-0" />

                    <p className="text-[#4C4545] text-sm md:text-[16px] leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#777777] host-grotesk text-[16px] mt-3">
You haven't added any key selling points              </p>
            )}

          </div>
        </div>

        {/* RIGHT SIDE - AMENITIES & FEATURES */}
        <div className="lg:col-span-4 flex flex-col">
          <p className="host-grotesk text-[24px] font-[700] text-[#181818]">
                Amenities & Features
              </p> 

          {detail?.amenities?.length > 0 ? (
            <div>
              
              <div className="flex flex-wrap gap-2 md:gap-4 host-grotesk mt-4">
                {detail.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#74c222] rounded-[14px] px-3 md:px-7 py-2 md:py-3 flex gap-1 text-[14px] md:text-[15px] text-white"
                  >
                    {item?.icon && (
                      <img
                        className="w-[14px] h-[14px] object-contain mt-1"
                        src={item.icon}
                        alt=""
                      />
                    )}

                    {item?.name}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-3 w-full rounded-2xl border border-dashed border-gray-300 bg-gradient-to-b from-gray-50 to-white p-6 md:p-10 flex flex-col items-center justify-center text-center">

  {/* ICON */}
  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
    <Sparkles
      className="h-7 w-7 text-gray-400"
      strokeWidth={1.5}
    />
  </div>

  {/* TITLE */}
  <h3 className="host-grotesk mt-4 text-base font-semibold text-gray-800">
    No Amenities Added Yet
  </h3>

  {/* DESCRIPTION */}
  <p className="host-grotesk mt-2 max-w-md text-[14px] leading-relaxed text-gray-500">
    You haven't added any amenities to this property yet. Add them online to highlight your property's features.
  </p>

</div>
          )}

        </div>
      </div>

 {/* VISIT NOTES */}
{notes.length > 0 && (
  <div className="mt-6 max-w-6xl mx-auto w-full">
    <div className="flex items-center justify-between">
      <p className="host-grotesk text-[20px] font-[700] text-[#181818]">
        Visit Notes
      </p>

      <div className="flex items-center gap-1 text-sm font-semibold text-[#3F8004] bg-[#6ABD11]/10 px-3 py-1.5 rounded-lg host-grotesk">
        <Eye size={14} />
        {visitedCount} visits
      </div>
    </div>

    <div className="mt-3 space-y-3">
      {notes.map((n) => (
        <div
          key={n.id}
          className="bg-[#efefef] rounded-2xl px-5 py-4 host-grotesk"
        >
          <div className="flex items-center justify-between gap-3">
            <div
              className={`flex items-center gap-1 text-sm font-semibold ${
                n.is_visited ? "text-[#3F8004]" : "text-slate-500"
              }`}
            >
              {n.is_visited ? <Eye size={16} /> : <EyeOff size={16} />}
              {n.is_visited ? "Visited" : "Not visited"}
            </div>

            <span className="text-xs text-slate-500">
              {new Date(n.created_at).toLocaleString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>

          {n.notes && (
            <p className="text-[#4C4545] text-[15px] mt-2 leading-relaxed">
              {n.notes}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
)}
</div>
  );
}

export default DescAndAminities;
