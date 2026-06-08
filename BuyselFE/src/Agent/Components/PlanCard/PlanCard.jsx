import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { openRazorpay } from "../../../utils/razorpay";

function PlanCard({ title, Icon, price, savings, features = [], buttonText, dropdown,  id, onClick }) {





  
  return (
    <div className="relative rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl h-full flex flex-col">
      <div className="p-6 sm:p-8 bg-white flex flex-col flex-1">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          {Icon && (
            <div className="w-12 h-12 rounded-lg bg-[#6ABD11]/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#6ABD11]" />
            </div>
          )}

          <h2 className="text-xl font-bold text-gray-900 instrument-sans">
            {title}
          </h2>
        </div>
        {dropdown}

        {/* Price */}
        <div className="mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6ABD11]">
            ₹{price}
          </span>

          {savings ? (
            <p className="text-[12px] font-semibold text-[#6ABD11] mt-1">
              {savings}
            </p>
          ) : (
            <p className="text-[12px] font-semibold text-[#6ABD11] mt-1">
              {price} per day
            </p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={onClick}
          className="cursor-pointer w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-[#6ABD11] to-[#5ca60f] text-white shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
          {buttonText} 
        </button>

        {/* Features */}
        <div className="space-y-3 mt-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#6ABD11] shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PlanCard;