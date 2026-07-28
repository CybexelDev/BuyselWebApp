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
import { openRazorpay } from "../../../utils/razorpay";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { advertisementRequest } from "../../../Api/agentsApi";


function AgentPlans() {

  const [selectedPlan, setSelectedPlan] = useState({});
  const [upgradePlans, setUpgradePlans] = useState([]);
  const [upgradePlanData, setUpgradePlanData] = useState(null);
  const [planData, setPlanData] = useState(null);
  const [adPackages, setAdPackages] = useState([]);
  const [reelPackages, setReelPackages] = useState([]);
  const [selectedAdType, setSelectedAdType] = useState({});
  const { agent_type } = useSelector((state) => state.agent);


  console.log(adPackages, "[[[[[[[[[[[[[[[[");
  // console.log(selectedPlan, "?????????????????");
 
  const navigate = useNavigate()


  useEffect(() => {
    const fetchPlan = async () => {
      const res = await agentPlans();
      console.log("agentPlans response:", res); // 👈 HERE


//validate is upgradeplan in there or not
      const data = res?.data || res;
      if (data?.current_active_subscriptions?.upgrade_plan) {
  setUpgradePlanData(
    data.current_active_subscriptions.upgrade_plan
  );
}

      if (data?.plans) {
        // always set plans
        const filteredPlans = data.plans.filter(
  (group) => group.id === agent_type
);

const formattedPlans = filteredPlans.map((group) => ({
  id: group.id,
  name: group.name,
  icon: group.id === "premium" ? Zap : Crown,
  plans: group.plans,
}));

        setUpgradePlans(formattedPlans);


        const group = filteredPlans[0];

setSelectedPlan({
  [group.id]: group.plans?.[0]?.plan_id,
});

        // only if current_plan exists
        if (data?.current_plan) {
          const current = data.current_plan;

          const currentGroup = data.plans.find((group) =>
            group.name.toLowerCase().includes(current.plan_type)
          );

          const matchedPlan = currentGroup?.plans.find(
            (p) => p.plan_key === current.plan_key
          );

          setPlanData({
            name: current.plan_type === "premium" ? "Premium Agent" : "Elite Agent",
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


  const isCurrentPlanExpired =
  !planData?.expiresOn ||
  new Date(planData.expiresOn) <= new Date();



  let showRenewButton = false;
  if (planData?.expiresOn) {
    const today = new Date();
    const expiry = new Date(planData.expiresOn);
    const diffTime = expiry - today;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    showRenewButton = diffDays <= 10;
  }
  const upgradeDiffDays = upgradePlanData?.end_date
  ? Math.ceil(
      (new Date(upgradePlanData.end_date) - new Date()) /
      (1000 * 60 * 60 * 24)
    )
  : 0;

  const handleAdvertisementRequest = async (planId) => {
  const result = await advertisementRequest(planId);

if (result) {
  toast.success("Request submitted successfully!", {
    description:
      "Your advertisement request has been sent to our admin team. They will contact you shortly.",
    duration: 5000,
  });
  console.log(result);
}    
    
  else {
    console.log("Request failed");
  }
};





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
            upgradePlan={upgradePlanData}
            upgradeDiffDays={upgradeDiffDays}
          />
        )}



<h2 className="text-2xl font-bold mb-2 instrument-sans">
  {isCurrentPlanExpired ? "Renew Your Subscription" : "Upgrade Your Plan"}
</h2>

<p className="text-gray-600 mb-8">
  {isCurrentPlanExpired
    ? "Choose a plan to continue your subscription."
    : "Get more listings and premium features."}
</p>
        {/* Upgrade Plans */}
                {upgradePlans?.length > 0 && (
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
  
  {/* Upgrade Plan Section */}
  <div className="lg:col-span-3">
    

    <div className="grid gap-8">
      {upgradePlans.map((agent) => {
        const activePlan =
          agent.plans.find(
            (p) => p.plan_id === selectedPlan[agent.id]
          ) || agent.plans[0];

        return (
          <PlanCard
            key={agent.id}
            title={agent.name}
            Icon={agent.icon}
            price={activePlan.price}
            plan={agent.plans}
            id={activePlan.plan_id}
            selectedId={selectedPlan}
            savings={activePlan.savings}
            features={activePlan.features}
              buttonText={
               isCurrentPlanExpired
               ? "Purchase Now"
               : "Upgrade Now"
              }
              onClick={() =>{
                if (upgradePlanData?.is_active) {
  toast.error(`You already have an active upgrade plan (${upgradePlanData.plan_name}).`);
  return;
}
              openRazorpay({
             name: "BuySel",
             description: agent.name,
             plan_id: activePlan.plan_id,
             onSuccess: (res) => {
              navigate("/invoice", {
             state: {
            paymentData: res,
          },
        });
      },
    })
  }
  }
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
                  value: plan.plan_id,
                }))}
              />
            }
          />
        );
      })}
    </div>
  </div>

  {/* Right Side Content */}
 {/* Right Side - Add Property Banner */}
<div className="lg:col-span-2">
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes slide-in {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
    .banner-container {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border: 2px solid #e5e5e5;
      border-radius: 20px;
      padding: 40px 32px;
      position: relative;
      overflow: hidden;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .animated-bg {
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(29, 158, 117, 0.08) 0%, transparent 70%);
      border-radius: 50%;
      top: -100px;
      right: -100px;
    }
    .floating-icon {
      position: absolute;
      font-size: 48px;
      opacity: 0.15;
      animation: float 4s ease-in-out infinite;
    }
    .icon-1 { top: 20px; right: 40px; }
    .icon-2 { bottom: 80px; right: 20px; animation-delay: 1s; }
    .icon-3 { top: 50%; left: 20px; animation-delay: 0.5s; }
    .content { position: relative; z-index: 10; }
    .badge {
      display: inline-block;
  background: linear-gradient(to right, #6ABD11, #5ca60f);
      color: white;
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 16px;
      animation: slide-in 0.6s ease-out;
    }
    .title {
      font-size: 32px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 12px;
      line-height: 1.2;
      animation: slide-in 0.6s ease-out 0.1s backwards;
    }
    .subtitle {
      font-size: 15px;
      color: #666;
      margin-bottom: 24px;
      line-height: 1.6;
      animation: slide-in 0.6s ease-out 0.2s backwards;
    }
    .feature-list { margin-bottom: 28px; }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      font-size: 14px;
      color: #333;
      animation: slide-in 0.6s ease-out backwards;
    }
    .feature-item:nth-child(1) { animation-delay: 0.3s; }
    .feature-item:nth-child(2) { animation-delay: 0.4s; }
    .feature-item:nth-child(3) { animation-delay: 0.5s; }
    .feature-icon {
      width: 24px;
      height: 24px;
  background: linear-gradient(to right, #6ABD11, #5ca60f);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
      font-weight: bold;
      flex-shrink: 0;
    }
    .cta-button {
      position: relative;
      width: 100%;
      padding: 14px 24px;
      font-size: 15px;
      font-weight: 600;
      color: white;
  background: linear-gradient(to right, #6ABD11, #5ca60f);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      overflow: hidden;
      animation: slide-in 0.6s ease-out 0.6s backwards;
    }
    .cta-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 0.6s infinite;
    }
    .cta-button:hover {
      transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(106, 189, 17, 0.3);
    }
    .sub-text {
      text-align: center;
      font-size: 12px;
      color: #999;
      margin-top: 12px;
      animation: slide-in 0.6s ease-out 0.7s backwards;
    }
  `}</style>

  <div className="banner-container">
    <div className="animated-bg"></div>
    <div className="floating-icon icon-1">🏠</div>

    <div className="content">
      <div className="badge">✨ List Your Property</div>
      <h2 className="title">
        Showcase Your <span style={{ color: '#6ABD11' }}>Space</span>
      </h2>
      <p className="subtitle">
        Reach thousands of potential buyers and renters. Get your property noticed in minutes.
      </p>
      <div className="feature-list">
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <span>Get 10x more visibility</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <span>List in under 5 minutes</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎯</div>
          <span>Professional photos included</span>
        </div>
      </div>
    </div>

    <div>
      <button onClick={()=>navigate('/agent/property')}
      className="cta-button">
        Start Listing Now →
      </button>
    </div>
  </div>
</div>

</div>
        )}



        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Advertisement Packages</h2>
          <p className="text-gray-600 mb-8">
            Promote your properties and get maximum visibility.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {adPackages.map((ad) => {
              const selectedType =
                selectedAdType[ad.id] || ad.plans[0]?.plan_id;

              const activePlan =
                ad.plans.find((p) => p.plan_id === selectedType) ||
                ad.plans[0];

              return (
                <PlanCard
                  key={ad.id}
                  title={ad.name}
                  Icon={TrendingUp}
                  id={activePlan.plan_id}
                  price={activePlan.price_per_day}
                  features={activePlan.features}
                  buttonText="Advertise Now"
                    onClick={() =>
                 handleAdvertisementRequest(activePlan.plan_id)}
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
                        value: p.plan_id,
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
                  id={activePlan.plan_id}
                  price={activePlan.price_per_day}
                  features={activePlan.features}
                  buttonText="Advertise Now"
                                   onClick={() =>
              openRazorpay({
             name: "BuySel",
             description: reel.name,
             plan_id: activePlan.plan_id,
             onSuccess: (res) => {
              navigate("/invoice", {
             state: {
            paymentData: res,
          },
        });
      },
    })
  }
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