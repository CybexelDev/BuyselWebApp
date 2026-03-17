import React from "react";
import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
const PlansLayout = () => {
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
  const plans = [
    {
      name: "Free",
      price: "₹0/-",
      data: ["90 Days", "check", "Upto 10", "cross", "Upto 6", "Upto 6", "Person", "3", "3 Weeks", "check"],
    },
    {
      name: "Silver",
      price: "₹199/-",
      data: ["180 Days", "check", "Upto 25", "Limited", "Upto 12", "Upto 12", "Area", "12", "12 Weeks", "check"],
    },
    {
      name: "Gold",
      price: "₹499/-",
      data: ["365 Days", "check", "Upto 50", "Unlimited", "Upto 24", "Upto 24", "District", "24", "36 Weeks", "check"],
    }
  ];

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
    <div className="bg-white py-10 px-4 lg:px-12 xl:px-16">
      <div className="flex justify-center mb-15">
        <div className="flex items-center border border-[#8AD32E] rounded-full p-1 bg-white  ">
          {roles.map((role) =>
          (<button key={role}
            onClick={() => setActive(role)}
            className={`px-6 py-2 rounded-full text-[24px] lexend font-semibold transition-all duration-300 ${active === role ? "bg-[#8AD32E] text-white shadow" : "text-[#7CB305]"}`} >
            {role}
          </button>))}
        </div>
      </div>
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

            <button className="mt-6 
      w-[160px] lg:w-[180px] xl:w-[200px]
      bg-[#8AD32E] hover:bg-[#7ABF28]
      text-white font-bold py-3 rounded-xl lexend">
              Select Plan
            </button>

          </div>
        ))}

      </div>

      <div className="bg-[#f3f6ed] rounded-3xl p-6 flex items-center justify-between gap-6 lexend mt-10">
        <div className="flex items-center gap-4">
          <img src="https://i.pravatar.cc/80" alt="agent" className="w-[107px] h-[107px] rounded-full object-cover" />
          <div> <p className="text-[18px] font-medium inter text-black"> Can't decide which plan suits your requirements best? </p>
            <p className="text-[15px] font-medium inter text-gray-500 mt-1"> Consult with our property expert </p>
            <div className="flex gap-3 mt-3">
              <button className="flex items-center gap-2 border border-[#8AD32E] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eef7dd] transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.75C6.49986 9.04547 6.68581 8.3534 7.03902 7.74381C7.39224 7.13422 7.9002 6.62874 8.5115 6.2785C8.5045 5.83883 8.50067 5.32933 8.5 4.75C8.5 3.4745 8.522 2.5475 8.545 1.9275C8.5665 1.3275 8.972 0.834 9.57 0.785C9.825 0.7645 10.134 0.75 10.5 0.75C10.866 0.75 11.175 0.7645 11.43 0.785C12.028 0.834 12.4335 1.3275 12.455 1.9275C12.478 2.5475 12.5 3.4745 12.5 4.75C12.4997 5.32933 12.4958 5.83883 12.4885 6.2785C13.0982 6.62782 13.6051 7.13158 13.9582 7.73909C14.3114 8.34659 14.4982 9.0364 14.5 9.73907C14.5018 10.4417 14.3184 11.1325 13.9684 11.7418C13.6184 12.3511 13.114 12.8574 12.5061 13.2098C11.8982 13.5622 11.2081 13.7483 10.5055 13.7492C9.80279 13.7502 9.11226 13.566 8.50338 13.2153C7.89451 12.8645 7.38877 12.3596 7.03707 11.7512C6.68538 11.1429 6.50014 10.4527 6.5 9.75ZM13.9975 5.505C13.9992 5.26833 14 5.01667 14 4.75C14 3.4575 13.978 2.512 13.9545 1.8725C13.9467 1.66575 13.916 1.46049 13.863 1.2605C17.537 2.5125 20.1945 5.928 20.2775 9.972L22.2175 12.677C22.564 13.1605 22.5275 13.867 21.965 14.2115C21.5385 14.4715 20.9155 14.775 20.0795 14.9965L19.7915 18.4115C19.7717 18.6462 19.7048 18.8745 19.5947 19.0828C19.4846 19.291 19.3335 19.4749 19.1507 19.6234C18.9678 19.7718 18.7568 19.8818 18.5304 19.9468C18.304 20.0118 18.0668 20.0304 17.833 20.0015L16.573 19.8455V21.304C16.573 22.0575 16.0825 22.739 15.3135 22.8815C14.388 23.054 12.8715 23.25 10.7645 23.25C8.6575 23.25 7.1415 23.054 6.2155 22.8815C5.447 22.7385 4.9555 22.0575 4.9555 21.304V17.625C2.7035 15.904 1.25 13.2035 1.25 10.1665C1.25 6.2545 3.66 2.9015 7.0885 1.479C7.06517 1.609 7.05083 1.74017 7.0455 1.8725C7.022 2.512 7 3.4575 7 4.75C7 5.01667 7.00083 5.26833 7.0025 5.505C6.3757 6.02056 5.87099 6.66869 5.52473 7.40271C5.17847 8.13674 4.99926 8.9384 5 9.75C5 12.683 7.296 15.08 10.1885 15.2415C11.8225 16.7585 14.2 17.75 16.5 17.75C16.6989 17.75 16.8897 17.671 17.0303 17.5303C17.171 17.3897 17.25 17.1989 17.25 17C17.25 16.8011 17.171 16.6103 17.0303 16.4697C16.8897 16.329 16.6989 16.25 16.5 16.25C15.039 16.25 13.5155 15.7585 12.269 14.9595C14.439 14.223 16 12.1685 16 9.75C16.0007 8.9384 15.8215 8.13674 15.4753 7.40271C15.129 6.66869 14.6243 6.02056 13.9975 5.505Z" fill="#84CC16" />
                </svg>
                Request a Callback </button>
              <button className="flex items-center gap-2 border border-[#8AD32E] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eef7dd] transition">
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 9C5.24986 8.29547 5.43581 7.6034 5.78902 6.99381C6.14224 6.38422 6.6502 5.87874 7.2615 5.5285C7.2545 5.08883 7.25067 4.57933 7.25 4C7.25 2.7245 7.272 1.7975 7.295 1.1775C7.3165 0.5775 7.722 0.084 8.32 0.035C8.575 0.0145 8.884 0 9.25 0C9.616 0 9.925 0.0145 10.18 0.035C10.778 0.084 11.1835 0.5775 11.205 1.1775C11.228 1.7975 11.25 2.7245 11.25 4C11.2497 4.57933 11.2458 5.08883 11.2385 5.5285C11.8482 5.87782 12.3551 6.38158 12.7082 6.98909C13.0614 7.59659 13.2482 8.2864 13.25 8.98907C13.2518 9.69174 13.0684 10.3825 12.7184 10.9918C12.3684 11.6011 11.864 12.1074 11.2561 12.4598C10.6482 12.8122 9.95814 12.9983 9.25546 12.9992C8.55279 13.0002 7.86226 12.816 7.25338 12.4653C6.64451 12.1145 6.13877 11.6096 5.78707 11.0012C5.43538 10.3929 5.25014 9.70268 5.25 9ZM12.7475 4.755C12.7492 4.51833 12.75 4.26667 12.75 4C12.75 2.7075 12.728 1.762 12.7045 1.1225C12.6967 0.915746 12.666 0.710493 12.613 0.5105C16.287 1.7625 18.9445 5.178 19.0275 9.222L20.9675 11.927C21.314 12.4105 21.2775 13.117 20.715 13.4615C20.2885 13.7215 19.6655 14.025 18.8295 14.2465L18.5415 17.6615C18.5217 17.8962 18.4548 18.1245 18.3447 18.3328C18.2346 18.541 18.0835 18.7249 17.9007 18.8734C17.7178 19.0218 17.5068 19.1318 17.2804 19.1968C17.054 19.2618 16.8168 19.2804 16.583 19.2515L15.323 19.0955V20.554C15.323 21.3075 14.8325 21.989 14.0635 22.1315C13.138 22.304 11.6215 22.5 9.5145 22.5C7.4075 22.5 5.8915 22.304 4.9655 22.1315C4.197 21.9885 3.7055 21.3075 3.7055 20.554V16.875C1.4535 15.154 0 12.4535 0 9.4165C0 5.5045 2.41 2.1515 5.8385 0.729C5.81517 0.859 5.80083 0.990167 5.7955 1.1225C5.772 1.762 5.75 2.7075 5.75 4C5.75 4.26667 5.75083 4.51833 5.7525 4.755C5.1257 5.27056 4.62099 5.91869 4.27473 6.65271C3.92847 7.38674 3.74926 8.1884 3.75 9C3.75 11.933 6.046 14.33 8.9385 14.4915C10.5725 16.0085 12.95 17 15.25 17C15.4489 17 15.6397 16.921 15.7803 16.7803C15.921 16.6397 16 16.4489 16 16.25C16 16.0511 15.921 15.8603 15.7803 15.7197C15.6397 15.579 15.4489 15.5 15.25 15.5C13.789 15.5 12.2655 15.0085 11.019 14.2095C13.189 13.473 14.75 11.4185 14.75 9C14.7507 8.1884 14.5715 7.38674 14.2253 6.65271C13.879 5.91869 13.3743 5.27056 12.7475 4.755Z" fill="#84CC16" />
                </svg>
                Chat with Us </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="bg-[#8AD32E] text-white px-5 py-1 rounded-full text-sm font-semibold">
            ₹199/-
          </div>
          <button className="bg-[#c9f08c] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-[#b8e774] transition">
            Purchase
          </button>
        </div>
      </div>


    </div>
  );
};

export default PlansLayout;
