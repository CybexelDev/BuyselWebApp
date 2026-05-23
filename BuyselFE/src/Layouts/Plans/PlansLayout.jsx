import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPlans } from "../../Api/userApi";
import { MessageCircle, Phone } from "lucide-react";
import { activateUserPlan } from "../../Api/userApi";
import { toast } from "sonner";
import { s } from "framer-motion/m";
import { openRazorpay } from "../../utils/razorpay";
import { useNavigate } from "react-router-dom";

const PlansLayout = ({ showtabs = true, padding = "py-10" }) => {
  const [plansData, setPlansData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate=useNavigate()


  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };
  const handleCheckout = async () => {

    try {

      if (!selectedPlan) return;

      console.log(selectedPlan);

      const res = await activateUserPlan(selectedPlan.id);
      toast.success("Plan Activated")

      console.log(res);

    } catch (error) {
      console.log(error);
    }
  };
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
          convert(plan.priority_search),
          plan.enquiry_limit,
          convert(plan.property_edit_option),
          plan.meta_ads_promotion,
          plan.bulk_whatsapp_message,
          plan.listing_type,
          plan.poster_creation,
          plan.social_media_marketing,
          convert(plan.lead_follow_support),
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
  }; const planConfig = {
    Owner: {
      features: [
        "Plan Validity",
        "Priority Search",
        "Enquiry Limit",
        "Property Edit Option",
        "Meta Ads Promotion",
        "Bulk WhatsApp Message",
        "Listing Type",
        "Poster Creation",
        "Social Media Marketing",
        "Lead Follow Support",
      ],

      getData: (plan) => [
        plan.validity,
        convert(plan.priority_search),
        plan.enquiry_limit,
        plan.property_edit_option,
        plan.meta_ads_promotion,
        plan.bulk_whatsapp_message,
        plan.listing_type,
        plan.poster_creation,
        plan.social_media_marketing,
        convert(plan.lead_follow_support),
      ],
    },

    Agent: {
      features: [
        "Plan Validity",
        "Priority Search",
        "No of Enquiries",
        "Edit Option",
        "Meta Ads",
        "Bulk WhatsApp",
        "Offline Share",
        "Poster Creation",
        "Social Media",
        "Verified Badge",
      ],

      getData: (plan) => [
        plan.validity,
        plan.priority_search,
        plan.enquiries,
        plan.edit,
        plan.meta_ads,
        plan.bulk_whatsapp,
        "N/A",
        plan.poster,
        plan.social_media,
        "N/A",
      ],
    },

    "Premium Agent": {
      features: [
        "Plan Validity",
        "Priority Search",
        "Enquiries",
        "Edit Option",
        "Meta Ads",
        "Bulk WhatsApp",
        "Residential Limit",
        "Poster Creation",
        "Social Media",
        "Lead Follow",
      ],

      getData: (plan) => [
        plan.validity,
        plan.priority_search,
        plan.enquiries,
        plan.edit,
        plan.meta_ads,
        plan.bulk_whatsapp,
        plan.residential_limit,
        plan.poster,
        plan.social_media,
        convert(plan.lead_follow),
      ],
    },

    "Elite Agent": {
      features: [
        "Plan Validity",
        "Priority Search",
        "Total Listings",
        "Sale Listings",
        "Meta Ads Promotion",
        "Bulk WhatsApp",
        "Lead Management",
        "Poster Creation",
        "Social Media",
        "Lead Support",
      ],

      getData: (plan) => [
        plan.plan_validity_days,
        plan.priority_search,
        plan.total_property_listings,
        plan.sale_listings_limit,
        plan.meta_ads_promotion,
        plan.bulk_whatsapp_messages,
        plan.lead_management,
        plan.poster_creation,
        plan.social_media_marketing,
        plan.lead_followup_support,
      ],
    },
  };

  const [active, setActive] = useState("Owner");
  const roles = ["Owner", "Agent", "Premium Agent", "Elite Agent"];
  const rawPlans = getPlansByRole();
  const features = planConfig[active].features;

  const plans = rawPlans.map((plan) => ({
    id: plan.id,
    name: plan.name,
    plan_id: plan.id,
    plan_type: plan.plan_type,
    price: `${plan.price || plan.amount}`,
    data: planConfig[active].getData(plan),
  }));
  const isOwnerPlans = plans.length === 4;

  console.log(plans, "PLANS.............");


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

    return <span className="text-[#000000b7] text-[12px] lg:text-[11px] xl:text-[12px] 3xl:text-sm font-medium text-center">{type}</span>;
  };

  return (
    <div className={` ${padding} bg-white  px-4 lg:px-6 xl:px-8 2xl:px-16`}>
     
  {showtabs && (
  <div className="flex justify-center mb-10 md:mb-15 px-2">
    
    <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">
      
      <div className="flex items-center border border-[#8AD32E] rounded-full p-1 bg-white min-w-max">
        
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => setActive(role)}
            className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full text-[14px] md:text-[20px] cursor-pointer lexend font-[550] transition-all duration-300 ${
              active === role
                ? "bg-[#8AD32E] text-white shadow"
                : "text-[#7CB305]"
            }`}
          >
            {role}
          </button>
        ))}


      {showtabs && (
        <div className="flex justify-center mb-10 md:mb-15 px-2">

          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">

            <div className="flex items-center border border-[#8AD32E] rounded-full p-1 bg-white min-w-max">

              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setActive(role)}
                  className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full text-[14px] md:text-[20px] cursor-pointer lexend font-[550] transition-all duration-300 ${active === role
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
      ${planIndex === 2 && plans.length !== 4 ? "md:col-span-2" : ""}`}

          >
            <div className="text-center mb-6">
              <h2 className="text-[23px] font-semibold text-[#1F1F1F]">
                {plan.name}
              </h2>
              <div className="bg-[#8AD32E] inline-block px-6 py-2 rounded-full mt-3 text-xl font-semibold text-white">
                ₹{plan.price}
              </div>
            </div>

            <div className="space-y-3">

              {features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex justify-between items-center bg-[#F7FCEB] rounded-full px-4 py-3"
                >
                  <span className="text-[12px] font-medium text-gray-700">
                    {feature}
                  </span>
                  <div className="flex items-center">
                    {renderIcon(plan.data[i])}
                  </div>
                </div>
              ))}

            </div>

            <button className="mt-6 w-full bg-[#8AD32E] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-[#73b412] transition cursor-pointer"
              onClick={() => handleSelectPlan(plan)}
            >
              Select Plan
            </button>

          </div>
        ))}

      </div>



{/* desktop */}

<div
  className={`hidden lg:grid
  ${
    plans.length === 4
      ? "grid-cols-[240px_repeat(4,1fr)]"
      : "grid-cols-[240px_repeat(3,1fr)]"
  }
  gap-2 xl:gap-4 items-start w-full`}
>

  {/* LEFT TEXT */}
  <div className="flex flex-col justify-center h-[120px]">
          <h1 className="text-2xl lg:text-2xl font-semibold mb-2 lexend">

            Hey there,
          </h1>

          <p className="text-black text-[14px] lg:text-[15px] inter">
            Subscribe to Premium today to save ₹50,000 on brokerage.
          </p>
        </div>

  {/* TOP PLAN CARDS */}
  {plans.map((plan) => (
    
    <div
      key={plan.name}
      className="bg-[#F1FDDA]
      h-[120px]
      w-full
      rounded-3xl
      flex flex-col
      justify-center
      items-center
      mx-auto
      shadow-lg"
    >

      <h2 className="text-lg xl:text-xl font-semibold mb-2 lexend text-center">
        {plan.name}
      </h2>

      <div
        className="bg-[#8AD32E]
        text-white
        px-6 py-1
        rounded-full
        font-semibold
        lexend"
      >
        {plan.price}
      </div>

    </div>
  ))}

  {/* FEATURE COLUMN */}
  <div
    className="bg-[#8AD32E]
    rounded-3xl
    p-3
    mt-4
    w-full
    max-w-[240px]"
  >

    {features.map((feat, i) => (
      
      <div
        key={feat}
        className={`h-[65px]
        flex items-center
        px-4
        rounded-2xl
        text-white
        lexend
        text-[14px]
        ${
          i % 2 === 0
            ? "bg-black/10 font-semibold"
            : "font-medium"
        }`}
      >
        {feat}
      </div>


    ))}

  </div>


  {/* PLAN DATA COLUMNS */}
  {plans.map((plan) => (

    <div
      key={plan.name}
      className="mt-2 flex flex-col items-center"
    >


      <div
        className="bg-white
        w-full
        rounded-3xl
        p-2
        border-2
        shadow-lg
        border-[#F1FDDA]"
      >

        {features.map((_, i) => (
          
          <div
            key={i}
            className={`h-[65px]
            flex items-center
            justify-center
            rounded-2xl
            lexend
            text-center
            px-2
            ${
              i % 2 === 0
                ? "bg-[#7bbe1624]"
                : "bg-white"
            }`}
          >
            {renderIcon(plan.data[i])}
          </div>

        ))}


      </div>

      {/* BUTTON */}
      <button
        onClick={() => handleSelectPlan(plan)}
        className="mt-6
        w-full
        max-w-[220px]
        bg-[#8AD32E]
        hover:bg-[#7ABF28]
        text-white
        font-bold
        py-3
        rounded-xl
        lexend
        transition
        cursor-pointer"
      >
        Select Plan
      </button>


    </div>

  ))}

</div>

      <div className="bg-[#f3f6ed] rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 host-grotesk mt-10">


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

      {
        openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 lexend " onClick={() => setOpenModal(false)}
          >

            <div className="bg-white w-full max-w-lg rounded-3xl p-6 relative max-h-[90vh] overflow-y-auto scrollbar-hide">

              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-black text-2xl"
              >
                ✕
              </button>

              <div className="text-center">

                <h2 className="text-3xl font-semibold lexend">
                  {selectedPlan?.name}
                </h2>

                <div className="inline-block mt-3 bg-[#8AD32E] text-white px-6 py-2 rounded-full text-xl font-bold">
                  ₹ {selectedPlan?.price}
                </div>

              </div>

              <div className="mt-8 space-y-3">

                {features.map((feature, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#F7FCEB] rounded-2xl px-4 py-3"
                  >

                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>


                    <div>
                      {renderIcon(selectedPlan?.data[index])}
                    </div>

                  </div>

                ))}

              </div>

              <button

                //           onClick={handleCheckout}
                onClick={() =>
                  openRazorpay({
                    name: "BuySel",
                    description: selectedPlan?.name,

                    // ✅ required
                    plan_type: selectedPlan?.plan_type,
                    plan_id: selectedPlan?.plan_id,

                    // ✅ success callback
                    onSuccess: (res) => {
                      console.log("Property Payment", res);
                      navigate("/invoice", {
                        state: {
                          paymentData: res,
                        },
                      });
                    },
                  })
                }

                className="w-full mt-8 bg-[#a8f82a] hover:bg-[#83c829] hover:text-white
              text-black py-4 rounded-2xl font-semibold text-lg transition flex gap-2 justify-center cursor-pointer "
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2 4.5h6.757a3 3 0 0 1 2.122.879L14 8.5m-9 5H2m6.5-6l2 2a1.414 1.414 0 1 1-2 2L7 10c-.86.86-2.223.957-3.197.227L3.5 10" /><path d="M5 11v4.5c0 1.886 0 2.828.586 3.414S7.114 19.5 9 19.5h9c1.886 0 2.828 0 3.414-.586S22 17.386 22 15.5v-3c0-1.886 0-2.828-.586-3.414S19.886 8.5 18 8.5H9.5" /><path d="M15.25 14a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" /></g></svg>
                CHECKOUT
              </button>

            </div>

          </div>
        )
      }
    </div>
  );
};


export default PlansLayout;