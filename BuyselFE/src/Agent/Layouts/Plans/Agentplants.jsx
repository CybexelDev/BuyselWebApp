import React, { useEffect, useState } from "react";
import { Crown, Zap, TrendingUp, Check } from "lucide-react";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Dropdown from "../../Components/Dropdown/Dropdown";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import { motion } from "framer-motion";
import Advertisment from "../../Components/Advertisment/Advertisment";
import PlanCard from "../../Components/PlanCard/PlanCard";
import CurrentPlan from "../../Components/CurrentPlan/CurrentPlan";
import { agentPlans } from "../../../Api/agentsApi";

function AgentPlans() {

  const [selectedPlan, setSelectedPlan] = useState({});
 const [upgradePlans, setUpgradePlans] = useState([]);
const [planData, setPlanData] = useState(null);
const [adPackages, setAdPackages] = useState([]);
const [reelPackages, setReelPackages] = useState([]);
const [selectedAdType, setSelectedAdType] = useState({});


useEffect(() => {
  const fetchPlan = async () => {
  const res = await agentPlans();
      console.log("agentPlans response:", res); // 👈 HERE

  const data = res?.data || res;

if (data?.plans) {
  // always set plans
  const formattedPlans = data.plans.map((group) => ({
    id: group.id,
    name: group.name,
    icon: group.name.toLowerCase().includes("premium") ? Zap : Crown,
    plans: group.plans,
  }));

  setUpgradePlans(formattedPlans);

  setSelectedPlan({
    premium: data.plans[0]?.plans?.[0]?.id,
    elite: data.plans[1]?.plans?.[0]?.id,
  });

  // only if current_plan exists
  if (data?.current_plan) {
    const current = data.current_plan;

    const currentGroup = data.plans.find((group) =>
      group.name.toLowerCase().includes(current.type)
    );

    const matchedPlan = currentGroup?.plans.find(
      (p) => p.plan_key === current.plan_key
    );

    setPlanData({
      name: current.type === "premium" ? "Premium Agent" : "Elite Agent",
      label: current.name,
      expiresOn: current.expiry_date,
      status: current.is_active ? "Active" : "Inactive",
      features: matchedPlan?.features || [],
    });
  }
}

  // ✅ NOW THIS WILL WORK ALWAYS
  setAdPackages(data?.advertisement_packages || []);
  setReelPackages(data?.reel_packages || []);
};

  fetchPlan();
}, []);



let showRenewButton = false;
if (planData?.expiresOn) {
  const today = new Date();
  const expiry = new Date(planData.expiresOn);
  const diffTime = expiry - today;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  showRenewButton = diffDays <= 10;
}



  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 host-grotesk overflow-x-hidden">
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
      {planData && (
  <CurrentPlan
    plan={planData}
    showRenewButton={showRenewButton}
    
  />
)}

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

        <div className="mt-12">
  <h2 className="text-2xl font-bold mb-2">Advertisement Packages</h2>
  <p className="text-gray-600 mb-8">
    Promote your properties and get maximum visibility.
  </p>

  <div className="grid sm:grid-cols-2 gap-8">
    {adPackages.map((ad) => {
      const selectedType =
        selectedAdType[ad.id] || ad.plans[0]?.type;

      const activePlan =
        ad.plans.find((p) => p.type === selectedType) ||
        ad.plans[0];

      return (
        <PlanCard
          key={ad.id}
          title={ad.name}
          Icon={TrendingUp}
          price={activePlan.price_per_day}
          features={activePlan.features}
          buttonText="Advertise Now"
          dropdown={
            <Dropdown
              value={selectedType}
              onChange={(value) =>
                setSelectedAdType((prev) => ({
                  ...prev,
                  [ad.id]: value,
                }))
              }
              options={ad.plans.map((p) => ({
                label: p.type,
                value: p.type,
              }))}
            />
          }
        />
      );
    })}
  </div>
</div>

  <div className="mt-12">
  <h2 className="text-2xl font-bold mb-2">Reel Packages</h2>

  <p className="text-gray-600 mb-8">
    Highlight your properties with professional video reels.
  </p>

  <div className="grid sm:grid-cols-2 gap-8">
    {reelPackages.map((reel) => {
      const activePlan = reel.plans[0]; 

      if (!activePlan) return null;

      return (
        <PlanCard
          key={reel.id}
          title={reel.name}
          Icon={TrendingUp}
          price={activePlan.price_per_day}
          features={activePlan.features}
          buttonText="Advertise Now"
        />
      );
    })}
  </div>
</div>

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