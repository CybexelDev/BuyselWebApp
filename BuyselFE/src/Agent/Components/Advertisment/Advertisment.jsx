import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Crown, Zap, TrendingUp, Check } from "lucide-react";
import { object } from "framer-motion/client";

function Advertisment() {
  const [selectedAdDuration, setSelectedAdDuration] = useState({
    3: "slider",
    4: "slider",
  });

  const advertisementPackages = [
    {
      id: 3,
      name: "Basic Advertisement",
      icon: TrendingUp,
      plans: {
        slider: {
          label: "Slider Ads",
          price: 2000,
          savings: "₹2000 / Per Day",
          features: [
            "1 Slider Ad Per Day",
            "5 Seconds Display",
            "Standard Visual",
          ],
        },
        banner: {
          label: "Banner Ads",
          price: 5000,
          savings: "₹5000 / Per Day",
          features: [
            "1 Banner Ad Per Day",
            "5 Seconds Display",
            "Basic Banner Visual",
          ],
        },
      },
    },

    {
      id: 4,
      name: "High Quality Advertisement",
      icon: TrendingUp,
      plans: {
        
        slider: {
          label: "Slider Ads Pro",
          price: 3000,
          savings: "₹3000 / Per Day",
          features: [
            "Premium Slider Placement",
            "1 slide Per Day",
            "15 Seconds Display",
            "Custom Brand Visual",
          ],
        },
        banner: {
          label: "Banner Ads Pro",
          price: 7000,
          savings: "₹7000 / Per Day",
          features: [
            "Premium Banner Placement",
            "1 Banner Per Day",
            "15 Seconds Display",
            "High Quality Custom Visual",
          ],
        },
      },
    },
  ];

  return (
    <div>
      {/* Advertisement Packages */}
      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 instrument-sans">
          Advertisement Packages
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Promote your properties and get maximum visibility on the platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 ">
          {advertisementPackages.map((ad) => {
            const IconComponent = ad.icon;
            const activePlan = ad.plans[selectedAdDuration[ad.id]];

            return (
              <div
                key={ad.id}
                className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 sm:p-8 bg-white flex flex-col h-full mb-2">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#6ABD11]/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#6ABD11]" />
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 instrument-sans">
                      {ad.name}
                    </h2>
                  </div>

                  {/* Dropdown */}
                  <Dropdown
                    value={selectedAdDuration[ad.id]}
                    onChange={(value) =>
                      setSelectedAdDuration({
                        ...selectedAdDuration,
                        [ad.id]: value,
                      })
                    }
                    options={Object.entries(ad.plans).map(([key,plan])=>({
                         label:plan.label,
                         value:key
                    }))                      
                    }
                  />

                  {/* Price */}
                  <div>
                    <span className="text-4xl font-bold text-[#6ABD11]">
                      ₹{activePlan.price}
                    </span>

                    <p className="text-sm font-semibold text-[#6ABD11] mt-1">
                      {activePlan.savings}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="cursor-pointer my-6 w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-[#6ABD11] to-[#5ca60f] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Advertise Now
                  </button>

                  {/* Features */}
                  <div className="space-y-3 mt-auto">
                    {activePlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#6ABD11]" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Advertisment;
