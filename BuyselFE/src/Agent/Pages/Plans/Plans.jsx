import React, { useState } from "react";
import { Crown, Zap, TrendingUp, Check } from "lucide-react";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Dropdown from "../../Components/Dropdown/Dropdown";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";

function Plans() {
  const [selectedDuration, setSelectedDuration] = useState({
    1: "3m",
    2: "3m",
  });

  const currentPlan = {
    agentId: 1,
    duration: "6m",
    expiresOn: "2026-03-08",
  };

  const upgradePlans = [
    {
      id: 1,
      name: "Premium Agent",
      icon: Zap,
      plans: {
        "3m": {
          label: "3 Months",
          price: 3999,
          savings: "Starter Plan",
          features: [
            "25 Property Listings",
            "Featured Listing Access",
            "Priority Email Support",
            "3 Months Validity",
          ],
        },
        "6m": {
          label: "6 Months",
          price: 7999,
          savings: "Save ₹1000",
          features: [
            "50 Property Listings",
            "Advanced Analytics",
            "Marketing Tools",
            "6 Months Validity",
          ],
        },
        "12m": {
          label: "1 Year",
          price: 13999,
          savings: "Save ₹3000",
          popular: true,
          features: [
            "100 Property Listings",
            "Premium Featured Access",
            "24/7 Priority Support",
            "Marketing Tools",
            "12 Months Validity",
          ],
        },
      },
    },
    {
      id: 2,
      name: "Elite Agent",
      icon: Crown,
      plans: {
        "3m": {
          label: "3 Months",
          price: 6999,
          savings: "Starter Elite",
          features: [
            "75 Property Listings",
            "Premium Spotlight Listings",
            "3 Months Validity",
          ],
        },
        "6m": {
          label: "6 Months",
          price: 14999,
          savings: "Save ₹2000",
          features: [
            "150 Property Listings",
            "Dedicated Account Manager",
            "6 Months Validity",
          ],
        },
        "12m": {
          label: "1 Year",
          price: 24999,
          savings: "Save ₹5000",
          popular: true,
          features: [
            "300 Property Listings",
            "Dedicated Manager",
            "24/7 Support",
            "12 Months Validity",
          ],
        },
      },
    },
  ];

  const agent = upgradePlans.find((a) => a.id === currentPlan.agentId);
  const planDetails = agent.plans[currentPlan.duration];

  const today = new Date();
  const expiry = new Date(currentPlan.expiresOn);
  const diffTime = expiry - today;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const showRenewButton = diffDays <= 10;

  const listings = planDetails.features[0].split(" ")[0];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 host-grotesk">
      <Sidebar />

      <div className="flex-1 px-4 py-6 sm:p-8 mb-22 sm:mb-0">
        <Topbar />

        {/* Header Section */}
        <div className="mt-8 sm:mt-10 mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="bg-[#6ABD11]/20 text-[#6ABD11] px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-xs font-semibold ">
              MANAGE YOUR SUBSCRIPTION
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 instrument-sans">
            Unlock Premium Features
          </h1>

          <p className="text-gray-600 text-sm sm:text-base lg:text-md max-w-2xl">
            Choose the perfect plan to grow your real estate business. Scale
            your listings, boost visibility, and reach more clients.
          </p>
        </div>

        {/* Current Plan */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 instrument-sans">
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
                    {agent.name} Plan
                  </h3>

                      <p className="text-gray-600 text-sm sm:text-base">
                    Active for {planDetails.label}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Expires on:
                    <span className="font-semibold text-gray-700 ml-1">
                      {currentPlan.expiresOn}
                    </span>
                  </p>


                </div>

                {/* Listings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
                  <div className="bg-white rounded-lg p-[10px] border border-gray-200">
                    <p className="text-2xl sm:text-3xl font-bold text-center text-[#6ABD11]">
                      {listings}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 text-center">
                      Property Listings
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex flex-col gap-2 items-center">
                  <span className="bg-[#6ABD11ED]  text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-center">
                    Active
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
                {planDetails.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-[#6ABD11]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Plans */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 instrument-sans">
            Upgrade Your Plan
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
            Get more listings, enquiries, and exclusive features to dominate
            your market.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {upgradePlans.map((agent) => {
              const IconComponent = agent.icon;
              const activePlan = agent.plans[selectedDuration[agent.id]];

              return (
                <div
                  key={agent.id}
                  className="relative rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl h-full flex flex-col"
                >
                  <div className="p-5 sm:p-6 lg:p-8 bg-white flex flex-col flex-1">

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#6ABD11]/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#6ABD11]" />
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 instrument-sans">
                        {agent.name}
                      </h2>
                    </div>

                    {/* Dropdown */}
                    <Dropdown
                      value={selectedDuration[agent.id]}
                      onChange={(value) =>
                        setSelectedDuration({
                          ...selectedDuration,
                          [agent.id]: value,
                        })
                      }
                    />

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-[#6ABD11]">
                          ₹{activePlan.price.toLocaleString()}
                        </span>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          total
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-[#6ABD11] mt-2">
                        {activePlan.savings}
                      </p>
                    </div>

                    {/* Button */}
                    <button className="cursor-pointer w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-[#6ABD11] to-[#5ca60f] text-white shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 mb-8 text-sm sm:text-base">
                      Upgrade Now
                    </button>

                    <div className="border-t my-3 border-gray-200" />

                    {/* Features */}
                    <div className="space-y-3 mt-auto">
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Includes
                      </p>

                      {activePlan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#6ABD11] mt-0.5" />
                          <span className="text-gray-700 text-xs sm:text-sm inter">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* Bottom CTA */}
<div className="mt-8 lg:mt-12 bg-[#6ABD117A] rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 instrument-sans">
    Want to Connect With Our Team?
  </h3>

  <p className="text-white mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
  Need help with your plan or have questions?
  Our team is here to assist you.
</p>

  <GetInTouch />
</div>
      </div>
    </div>
  );
}

export default Plans;