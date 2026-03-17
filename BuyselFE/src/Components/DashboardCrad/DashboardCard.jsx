import React from "react";

function DashboardCard({ icon, title, value, badge,shadow="shadow-md",hover="shadow-lg" }) {
  return (
    <div className={`host-grotesk bg-white p-6 rounded-xl ${shadow} hover:${hover} transition cursor-pointer`}>
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-[#6ABD11] bg-[#6ABD117A] mb-3">
        {icon}
      </div>

      {/* Title */}
      <p className="text-sm text-gray-500">
        {title}
      </p>

      {/* Value + Badge */}
      <div className="flex items-center justify-between mt-1">
        <h3 className="text-2xl font-bold text-gray-800">
          {value}
        </h3>

        <span className="text-xs px-2 py-1 rounded-full text-[#6ABD11] bg-[#6ABD117A]">
          {badge}
        </span>
      </div>

    </div>
  );
}

export default DashboardCard;