import { Check, TrendingUp } from "lucide-react";
import React from "react";

function CurrentPlan({ plan, showRenewButton }) {
  const listingFeature = plan.features?.find((f) =>
    f.toLowerCase().includes("property listings"),
  );

  const listingCount = listingFeature
    ? listingFeature.match(/\d+/)?.[0] || "0"
    : "0";
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-4 instrument-sans">
        Your Current Plan
      </h2>

      <div className="bg-white rounded-2xl shadow-lg border border-[#6ABD11]/20 overflow-hidden">
        <div className="bg-gradient-to-r from-[#6ABD11]/10 to-transparent p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            {/* Plan Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#6ABD11]" />
                <span className="text-xs sm:text-sm font-semibold text-[#6ABD11] uppercase tracking-wide">
                  Active Subscription
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 instrument-sans">
                {plan.name} Plan
              </h3>

              <p className="text-gray-600 text-sm sm:text-base">
                Active for {plan.label}
              </p>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Expires on:
                <span className="font-semibold text-gray-700 ml-1">
                      {new Date(plan.expiresOn).toLocaleString()}
                </span>
              </p>
            </div>

            {/* Listings */}
            <div className="flex justify-center">
              <div className="w-full md:w-auto bg-white rounded-lg p-[10px] border border-gray-200">
                <p className="text-2xl sm:text-3xl font-bold text-center text-[#6ABD11]">
                  {listingCount}
                </p>
                <p className="text-sm text-gray-600 mt-1 text-center">
                  Property Listings
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2 items-center">
              <span className="bg-[#6ABD11ED]  text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-center">
                {plan.status}
              </span>

              <p className="text-xs text-gray-500 text-center">
                Current Subscription
              </p>

              {showRenewButton && (
                <button className="mt-2 cursor-pointer px-4 py-3 bg-[#6ABD11ED]  text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#5ca60f] transition">
                  Renew Subscription
                </button>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {plan.features?.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center  gap-2 text-xs sm:text-sm md:text-[14px] text-gray-700"
              >
                <Check className="w-4 h-4 text-[#6ABD11] shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentPlan;
