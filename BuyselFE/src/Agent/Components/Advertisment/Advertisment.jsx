import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { TrendingUp } from "lucide-react";
import PlanCard from "../PlanCard/PlanCard";
import { object } from "framer-motion/m";

function Advertisment() {
  const [selectedAdDuration, setSelectedAdDuration] = useState({
    3: "slider",
    4: "slider",
  });

  const advertisementPackages = [
    {
      id: 3,
      name: "Basic Banners & Sliders",
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
      name: "High Quality Banners & Sliders",
      icon: TrendingUp,
      plans: {
        slider: {
          label: "Slider Ads Pro",
          price: 3000,
          savings: "₹3000 / Per Day",
          features: [
            "Premium Slider Placement",
            "1 Slide Per Day",
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




  const reelPackages = [
    {
  id: 5,
  name: "Short Reels",
  icon: TrendingUp,
  price: 1999,
  savings: "₹1999 Per Day",
  features: [
    "1 Edited Video Promotion",
    "Short Reel Format",
    "15–30 Seconds Duration",
  ],
},

    {
  id: 6,
  name: "Cinematic Reels",
  icon: TrendingUp,
  price: 9999,
  savings: "₹9999 Per Day",
  features: [
    "1 Edited Video Promotion",
    "Cinematic Reel Format",
    "30 Seconds – 1 Minute Duration",
  ],
}
  ];

  return (
    <div className="mt-12">

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 instrument-sans">
        Advertisement Packages
      </h2>

      <p className="text-gray-600 text-sm sm:text-base mb-6">
        Promote your properties and get maximum visibility on the platform.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {advertisementPackages.map((ad) => {
          const activePlan = ad.plans[selectedAdDuration[ad.id]];

          return (
            <PlanCard
              key={ad.id}
              title={ad.name}
              Icon={ad.icon}
              price={activePlan.price}
              savings={activePlan.savings}
              features={activePlan.features}
              buttonText="Advertise Now"
              dropdown={
                <Dropdown
                  value={selectedAdDuration[ad.id]}
                  onChange={(value) =>
                    setSelectedAdDuration({
                      ...selectedAdDuration,
                      [ad.id]: value,
                    })
                  }
                  options={Object.entries(ad.plans).map(([key, plan]) => ({
                    label: plan.label,
                    value: key,
                  }))}
                />
              }
            />
          );
        })}
      </div>

      <div>
       <p className="text-gray-600 text-sm sm:text-base my-6">
          Highlight your properties with engaging reels and professional video promotions.
          </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {reelPackages.map((reel) => {

          return (
            <PlanCard
              key={reel.id}
              title={reel.name}
              Icon={reel.icon}
              price={reel.price}
              savings={reel.savings}
              features={reel.features}
              buttonText="Advertise Now"
              
            />
          );
        })}
      </div>






      </div>

    </div>
  );
}

export default Advertisment;
