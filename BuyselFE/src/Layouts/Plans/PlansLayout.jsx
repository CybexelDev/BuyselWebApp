import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPlans } from "../../Api/userApi";
import { MessageCircle, Phone } from "lucide-react";
import { openRazorpay } from "../../utils/razorpay";

const PlansLayout = ({ showtabs = true, padding = "py-10" }) => {
  const [plansData, setPlansData] = useState(null);
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getAllPlans();
        setPlansData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlans();
  }, []);
  const getPlansByRole = () => {
    if (!plansData) return [];

    switch (active) {
      case "Owner":
        return plansData.user_plans;
      case "Agent":
        return plansData.normal_plans;
      case "Premium Agent":
        return plansData.premium_plans;
      case "Elite Agent":
        return plansData.elite_plans;
      default:
        return [];
    }
  };
  const convert = (val) => {
    if (val === "yes") return "check";
    if (val === "no") return "cross";
    return val || "N/A";
  };

  const getPlanData = (plan) => {
    switch (active) {
      case "Owner":
        return [
          plan.validity,
          convert(plan.top_priority_search),
          "N/A",
          convert(plan.edit_option),
          plan.meta_ads_promotion,
          plan.bulk_whatsapp,
          plan.offline_agent_share,
          plan.poster_creation,
          plan.social_media_marketing,
          convert(plan.lead_followup_support),
        ];

      case "Agent":
        return [
          plan.validity,
          convert(plan.priority_search),
          plan.enquiries,
          convert(plan.edit),
          plan.meta_ads,
          plan.Bulk_whatsapp,
          "N/A",
          plan.Poster,
          plan.social_media,
          "N/A",
        ];

      case "Premium Agent":
        return [
          plan.validity,
          convert(plan.priority_search),
          plan.enquiries,
          convert(plan.edit),
          plan.meta_ads,
          plan.Bulk_whatsapp,
          "N/A",
          plan.Poster,
          plan.social_media,
          convert(plan.lead_follow),
        ];

      case "Elite Agent":
        return [
          plan.plan_validity_days,
          plan.priority_search,
          "N/A",
          "N/A",
          plan.meta_ads_promotion,
          plan.bulk_whatsapp_messages,
          "N/A",
          plan.poster_creation,
          plan.social_media_marketing,
          convert(plan.lead_followup_support),
        ];

      default:
        return [];
    }
  };
  const features = [
    "Plan Validity",
    "Top Priority",
    "No of Enquiry",
    "Profile Edit Option",
    "Meta Ads Promotion",
    "Bulk WhatsApp Message",
    "Offline Owners Share",
    "Poster Creation",
    "Social Media Marketing",
    "Verified Agent Badge",
  ];

  const [active, setActive] = useState("Owner");
  const roles = ["Owner", "Agent", "Premium Agent", "Elite Agent"];
  const rawPlans = getPlansByRole();

  const plans = rawPlans.map((plan) => ({
    name: plan.name,
    price: `₹ ${plan.price || plan.amount}`,
    data: getPlanData(plan),
  }));
  const renderIcon = (type) => {
    if (type === "check") {
      return (
        <div className="w-5 h-5 bg-[#7CB305] rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }

    if (type === "cross") {
      return (
        <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">✕</span>
        </div>
      );
    }

    return <span className="text-[#7CB305] text-sm font-medium">{type}</span>;
  };

  return (
    <div className={` ${padding} bg-white  px-4 lg:px-12 xl:px-16`}>

      {showtabs && (
        <div className="flex justify-center mb-10 md:mb-15 px-2">

          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">

            <div className="flex items-center border border-[#8AD32E] rounded-full p-1 bg-white min-w-max">

              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setActive(role)}
                  className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full text-[14px] md:text-[24px] lexend font-semibold transition-all duration-300 ${active === role
                      ? "bg-[#8AD32E] text-white shadow"
                      : "text-[#7CB305]"
                    }`}
                >
                  {role}
                </button>
              ))}

            </div>

          </div>

        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden lexend">

        {plans.map((plan, planIndex) => (
          <div
            key={planIndex}
            className={`bg-white rounded-3xl p-6 shadow-lg border border-[#E6F4D7]
      ${planIndex === 2 ? "md:col-span-2" : ""}`}
          >

            <div className="text-center mb-6">
              <h2 className="text-[28px] font-semibold text-[#1F1F1F]">
                {plan.name}
              </h2>

              <div className="bg-[#8AD32E] inline-block px-6 py-2 rounded-full mt-3 text-xl font-semibold text-white">
                {plan.price}
              </div>
            </div>



            <div className="space-y-3">

              {features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex justify-between items-center bg-[#F7FCEB] rounded-full px-4 py-3"
                >

                  <span className="text-sm font-medium text-gray-700">
                    {feature}
                  </span>

                  <div className="flex items-center">
                    {renderIcon(plan.data[i])}
                  </div>

                </div>
              ))}

            </div>


            <button className="mt-6 w-full bg-[#8AD32E] text-white py-3 rounded-full font-semibold hover:bg-[#73b412] transition">
              Select Plan
            </button>

          </div>
        ))}

      </div>


      {/* desktop */}


      <div className="hidden lg:grid grid-cols-4 
gap-4 lg:gap-6 xl:gap-2 
max-w-6xl mx-auto items-start">

        <div className="flex flex-col justify-center h-[120px]">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2 lexend">
            Hey there,
          </h1>

          <p className="text-black text-[14px] lg:text-[16px] inter">
            Subscribe to Premium today to save ₹50,000 on brokerage.
          </p>
        </div>


        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-[#F1FDDA] h-[110px] lg:h-[120px] w-[199px] 
      rounded-3xl flex flex-col justify-center items-center ml-[90px] shadow-lg"
          >
            <h2 className="text-lg lg:text-xl font-semibold mb-2 lexend">
              {plan.name}
            </h2>

            <div className="bg-[#8AD32E] text-white 
      px-6 lg:px-8 py-1 rounded-full font-semibold lexend">
              {plan.price}
            </div>
          </div>
        ))}

        <div className="bg-[#8AD32E] rounded-3xl p-3 lg:p-4 mt-4
  w-[240px] lg:w-[240px] xl:w-[320px]">

          {features.map((feat, i) => (
            <div
              key={feat}
              className={`h-[52px] lg:h-[56px] flex items-center 
        px-4 lg:px-6 rounded-full text-white lexend
        text-[12px] lg:text-[14px]
        ${i % 2 === 0 ? "bg-black/10 font-semibold" : "font-medium"}`}
            >
              {feat}
            </div>
          ))}
        </div>


        {plans.map((plan) => (
          <div key={plan.name} className="mt-2 flex flex-col items-center ml-25">

            <div className="bg-white 
      w-[160px] lg:w-[180px] xl:w-[200px]
      rounded-3xl p-4 lg:p-6 border-2 shadow-lg border-[#F1FDDA]">

              {features.map((_, i) => (
                <div
                  key={i}
                  className={`h-[52px] lg:h-[56px] flex items-center 
            justify-center rounded-full lexend
            ${i % 2 === 0 ? "bg-[#84CC1608]" : "bg-white"}`}
                >
                  {renderIcon(plan.data[i])}
                </div>
              ))}

            </div>

            <button onClick={() =>
              openRazorpay({
                amount: 50000,
                name: "BuySel",
                description: "Property Booking",
                user: { name: "Ashif", email: "test@gmail.com", phone: "9876543210" },
                onSuccess: (res) => console.log("Property Payment", res),
              })
            } className="mt-6 w-[160px] lg:w-[180px] xl:w-[200px] bg-[#8AD32E] hover:bg-[#7ABF28] text-white font-bold py-3 rounded-xl lexend cursor-pointer transition ">
              Select Plan
            </button>


            

          </div>
        ))}

      </div>
      <div className="bg-[#f3f6ed] rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 lexend mt-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">

          <img
            src="https://i.pravatar.cc/80"
            alt="agent"
            className="w-[80px] h-[80px] sm:w-[107px] sm:h-[107px] rounded-full object-cover"
          />

          <div className="w-full">
            <p className="text-[16px] sm:text-[18px] font-medium inter text-black">
              Can't decide which plan suits your requirements best?
            </p>

            <p className="text-[14px] sm:text-[15px] font-medium inter text-gray-500 mt-1">
              Consult with our property expert
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 w-full">

              <button className="flex items-center justify-center gap-2 border border-[#8AD32E] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eef7dd] transition w-full sm:w-auto">
                Request a Callback
              </button>

              <button className="flex items-center justify-center gap-2 border border-[#8AD32E] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eef7dd] transition w-full sm:w-auto">
                Chat with Us
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 w-full md:w-auto">

          <div className="bg-[#8AD32E] text-white px-5 py-1 rounded-full text-sm font-semibold">
            ₹199/-
          </div>

          <button className="bg-[#c9f08c] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-[#b8e774] transition w-auto">
            Purchase
          </button>

        </div>

      </div>


    </div>
  );
};

export default PlansLayout;
