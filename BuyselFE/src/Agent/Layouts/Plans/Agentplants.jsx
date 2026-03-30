import React, { useState } from "react";
import { Crown, Zap, TrendingUp, Check } from "lucide-react";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Dropdown from "../../Components/Dropdown/Dropdown";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import { motion } from "framer-motion";
import Advertisment from "../../Components/Advertisment/Advertisment";
import PlanCard from "../../Components/PlanCard/PlanCard";
import CurrentPlan from "../../Components/CurrentPlan/CurrentPlan";

function AgentPlans() {

  const [selectedPlan, setSelectedPlan] = useState({
    1: "starter",
    2: "silver",
  });

  

const premiumPlans = {
  id: 1,
  name: "Premium Agent",
  icon: Zap,
  plans: [
    {
      id: "starter",
      label: "Starter Plan",
      duration: "3 Months",
      price: 3999,
      savings: "Starter Plan",
      features: [
        "25 Property Listings",
        "Featured Listing Access",
        "Priority Email Support",
        "3 Months Validity",
      ],
    },
    {
      id: "growth",
      label: "Growth Plan",
      duration: "6 Months",
      price: 7999,
      savings: "Save ₹1000",
      features: [
        "50 Property Listings",
        "Advanced Analytics",
        "Marketing Tools",
        "6 Months Validity",
      ],
    },
    {
      id: "pro",
      label: "Pro Plan",
      duration: "12 Months",
      price: 13999,
      savings: "Save ₹3000",
      features: [
        "100 Property Listings",
        "Premium Featured Access",
        "24/7 Priority Support",
        "Marketing Tools",
        "12 Months Validity",
      ],
    },
  ],
};
const elitePlans = {
  id: 2,
  name: "Elite Agent",
  icon: Crown,
  plans: [
    {
      id: "silver",
      label: "Silver Plan",
      duration: "3 Months",
      price: 6999,
      savings: "Starter Elite",
      features: [
        "75 Property Listings",
        "Premium Spotlight Listings",
        "3 Months Validity",
      ],
    },
    {
      id: "gold",
      label: "Gold Plan",
      duration: "6 Months",
      price: 14999,
      savings: "Save ₹2000",
      features: [
        "150 Property Listings",
        "Dedicated Account Manager",
        "6 Months Validity",
      ],
    },
    {
      id: "platinum",
      label: "Platinum Plan",
      duration: "12 Months",
      price: 24999,
      savings: "Save ₹5000",
      features: [
        "300 Property Listings",
        "Dedicated Manager",
        "24/7 Support",
        "12 Months Validity",
      ],
    },
  ],
};

  const planData = {
    name: "Premium Agent",
    label: "Growth Plan",
    expiresOn: "2026-03-08",
    listings: 50,
    status: "Active",
    features: [
      "50 Property Listings",
      "Advanced Analytics",
      "Marketing Tools",
      "6 Months Validity",
    ],
  };



 
  const upgradePlans = [premiumPlans, elitePlans];
  const today = new Date();
  const expiry = new Date(planData.expiresOn);
  const diffTime = expiry - today;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const showRenewButton = diffDays <= 10;


  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 host-grotesk">
      <Sidebar />

      <div className="flex-1 py-3 px-6 md:py-5 md:px-10 lg:py-6 lg:px-12 mb-22 sm:mb-0">
        <Topbar />


        {/* Header */}
        <div className="mt-8 sm:mt-10 mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="bg-[#6ABD11]/20 text-[#6ABD11] px-3 py-1.5 rounded-full text-xs font-semibold">
              MANAGE YOUR SUBSCRIPTION
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 instrument-sans mb-2">
              Unlock Premium <span className="text-[#6ABD11]">Features</span>
            </h1>

            <p className="text-sm md:text-base text-slate-700">
              Choose the perfect plan to grow your real estate business.
            </p>
          </motion.div>
        </div>

        {/* Current Plan */}
      <CurrentPlan
          plan={planData}
          showRenewButton={showRenewButton}
        />

        {/* Upgrade Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-2 instrument-sans">
            Upgrade Your Plan
          </h2>

          <p className="text-gray-600 mb-8">
            Get more listings and premium features.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {upgradePlans.map((agent) => {

              const activePlan = agent.plans.find(
                (p) => p.id === selectedPlan[agent.id]
              );

              return (
                <PlanCard
                  key={agent.id}
                  title={agent.name}
                  Icon={agent.icon}
                  price={activePlan.price}
                  savings={activePlan.savings}
                  features={activePlan.features}
                  buttonText="Upgrade Now"
                  dropdown={
                    <Dropdown
                      value={selectedPlan[agent.id]}
                      onChange={(value) =>
                        setSelectedPlan({
                          ...selectedPlan,
                          [agent.id]: value,
                        })
                      }
                      options={agent.plans.map((plan) => ({
                        label: plan.label,
                        value: plan.id,
                      }))}
                    />
                  }
                />
              );
            })}
          </div>
        </div>

        <Advertisment />

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#6ABD117A] rounded-2xl p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Want to Connect With Our Team?
          </h3>

          <p className="mb-6 max-w-xl mx-auto">
            Need help with your plan? Our team is here to assist you.
          </p>

          <GetInTouch />
        </div>
      </div>
    </div>
  );
}

export default AgentPlans;