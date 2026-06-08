import React, { useEffect, useState } from "react";
import { TrendingUp, Check, ArrowUpRight } from "lucide-react";
import apartment from "../../../../assets/images/icons/apartment.svg";
import property from "../../../../assets/images/profile/property.svg";
import { motion } from "framer-motion";
import DashboardCard from "../../../../Components/DashboardCrad/DashboardCard";

import DietChart from "../../../../Components/PieChart/PieChart";
import { userCurrentPlan, userDashboard } from "../../../../Api/userApi";
import { useNavigate } from "react-router-dom";
function UserDashboard() {


const nav = useNavigate()
  const [Currentplan, setCurrentPlan] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(()=>{
    const fetchCurrentPlan = async()=>{
      const plandata = await userCurrentPlan()
      const dashboard = await userDashboard()

      if(plandata){
        setCurrentPlan(plandata)
      }
      if(dashboard){
        setDashboardData(dashboard)
      }
    }
    fetchCurrentPlan()

  },[])

const totalProperties = dashboardData?.data?.property_listed || 0;

const totalEnquiries = dashboardData?.data?.total_enquiries || 0;

const remainingListings =
  dashboardData?.data?.remaining_property || 0;

    const datas = [
    {
      title: "Total Properties",
      value: totalProperties,
      icon: <img src={apartment} alt="" className="w-[20px] h-[20px]" />,
      badge: "+2%",
    },
    {
      title: "Total Enquiries",
      value: totalEnquiries,
      icon: (
        <svg
          width="22"
          height="14"
          viewBox="0 0 27 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.63887 0.0763016C1.48594 0.118489 1.35938 0.170052 1.35938 0.193489C1.35938 0.221614 3.98555 2.57943 7.20234 5.4388L13.04 10.6326L13.2932 10.6654C13.8785 10.7357 13.425 11.0966 19.8111 5.41068C23.0068 2.56536 25.6172 0.216927 25.6172 0.193489C25.6172 0.170052 25.4801 0.113802 25.3113 0.0716143C25.0318 0.00130177 23.9824 -0.00338554 13.4566 0.00130177C3.1998 0.00598907 1.88145 0.0106764 1.63887 0.0763016Z"
            fill="#000000"
          />
          <path
            d="M0.119528 1.36591C0.0246058 1.5581 0.0193324 1.8581 0.00351206 8.33622C-0.00703482 14.2518 0.00351206 15.1378 0.0720667 15.344C0.114254 15.4753 0.172262 15.6159 0.203903 15.6534C0.24609 15.7097 1.07929 14.9925 4.3541 12.0815L8.45683 8.43466L4.36992 4.80185C2.12343 2.80497 0.267184 1.16904 0.251364 1.16904C0.23027 1.16904 0.172262 1.2581 0.119528 1.36591Z"
            fill="#000000"
          />
          <path
            d="M22.6182 4.80185L18.5312 8.43466L22.634 12.0815C25.9088 14.9925 26.742 15.7097 26.7842 15.6534C26.8158 15.6159 26.8738 15.4753 26.916 15.344C26.9846 15.1378 26.9951 14.2518 26.9846 8.33622C26.9688 1.8581 26.9635 1.5581 26.8686 1.36591C26.8158 1.2581 26.7578 1.16904 26.7367 1.16904C26.7209 1.16904 24.8646 2.80497 22.6182 4.80185Z"
            fill="#000000"
          />
          <path
            d="M5.4041 13.0275C3.17871 15.0103 1.35938 16.6509 1.35938 16.6744C1.35938 16.6978 1.49648 16.7541 1.66523 16.7963C1.94473 16.8666 2.99941 16.8713 13.4883 16.8713C23.9771 16.8713 25.0318 16.8666 25.3113 16.7963C25.4801 16.7541 25.6172 16.6978 25.6172 16.6744C25.6172 16.6509 23.7926 15.0056 21.5619 13.0134L17.5066 9.39469L16.2199 10.5244C15.1336 11.4853 14.8857 11.6775 14.5957 11.7994C13.8838 12.1088 13.0875 12.1088 12.3861 11.8041C12.0908 11.6775 11.8482 11.49 10.7672 10.5338C10.0711 9.91969 9.48574 9.41813 9.46992 9.41813C9.45938 9.41813 7.62422 11.04 5.4041 13.0275Z"
            fill="#000000"
          />
        </svg>
      ),
      badge: "+5%",
    },
    {
      title: "Remaining Listings",
      value: remainingListings,
      icon: (
        <img
          src={property}
          alt="Property"
          className="w-5 h-4 xl:w-[27px] xl:h-[27px]"
        />
      ),
      badge: "limit",
    },
  ];


const today = new Date();

const expiry = Currentplan?.data?.plan_expiry_date
  ? new Date(Currentplan.data.plan_expiry_date)
  : null;
const diffTime = expiry ? expiry - today : 0;
const diffDays = diffTime / (1000 * 60 * 60 * 24);
const showRenewButton = Currentplan && diffDays <= 10;

// Calculate upgrade plan expiry time
const upgradeExpiry = Currentplan?.data?.upgrade_plan?.expiry_date
  ? new Date(Currentplan.data.upgrade_plan.expiry_date)
  : null;
const upgradeDiffTime = upgradeExpiry ? upgradeExpiry - today : 0;
const upgradeDiffDays = Math.ceil(upgradeDiffTime / (1000 * 60 * 60 * 24));


  return (
    <div className="mb-22 md:mb-12 mx-4 sm:mx-6 lg:mx-10">
      {/* Dashboard Cards */}
      <div className=" mb-10 sm:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5}}
        >
          <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em]  mt-6">
            <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
            Data Overview
          </div>
          <h1 className="text-[31px] font-black text-slate-900 tracking-tight instrument-sans mb-6">
            Data <span className="text-[#6ABD11]">Overview</span>
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {datas.map((item, index) => (
            <DashboardCard
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              badge={item.badge}
              shadow="shadow-[0px_4px_8.2px_rgba(189,171,171,0.25),0px_0px_4px_rgba(170,149,149,0.25)]"
              hover="none"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
       {Currentplan ? (
  <div className="lg:col-span-2 host-grotesk">
    <h2 className="text-xl font-bold mb-4 instrument-sans">
      Your Current Plan
    </h2>

    <div className="bg-white rounded-2xl shadow-lg border border-[#6ABD11]/20 overflow-hidden">
      <div className="bg-gradient-to-r from-[#6ABD11]/10 to-transparent p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">

          {/* Plan Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-[#6ABD11]" />

              <span className="text-xs sm:text-sm md:text-[12px] font-semibold text-[#6ABD11] uppercase tracking-wide">
                Active Subscription
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 instrument-sans">
              {Currentplan.data.name}
            </h3>

            <p className="text-gray-600 text-sm">
              Active for {Currentplan.data.validity}
            </p>

            <p className="text-xs sm:text-[12px] text-gray-500 mt-1">
              Expires on:
              <span className="font-semibold text-gray-700 ml-1">
                {new Date(
                  Currentplan.data.plan_expiry_date
                ).toLocaleDateString()}
              </span>
            </p>
          </div>

          {/* Listings */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-[8px] w-full md:w-auto border border-gray-200">
              <p className="text-2xl sm:text-2xl font-bold text-center text-[#6ABD11]">
                {Currentplan.data.features?.property_listing_limit}
              </p>

              <p className="text-[14px] text-gray-600 mt-1 text-center">
                Property Listings
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2 items-center">
            <span className="bg-[#6ABD11ED] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-center">
              Active
            </span>

            <p className="text-xs text-gray-500 text-center">
              Current Subscription
            </p>

            {showRenewButton && (
              <button className="mt-2 cursor-pointer px-4 py-3 bg-[#6ABD11ED] text-white rounded-lg text-xs sm:text-[14px] font-semibold hover:bg-[#5ca60f] transition">
                Renew Subscription
              </button>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(Currentplan?.data.features || {}).map(
            ([key, value], idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-700"
              >
                <Check className="w-4 h-4 text-[#6ABD11] mt-1" />

                <div>
                  <span className="font-semibold capitalize">
                    {key.replaceAll("_", " ")}:
                  </span>{" "}
                  {value}
                </div>
              </div>
            )
          )}
        </div>

        {/* Current + Upgrade Plan Information */}
{Currentplan?.data?.active_subscriptions?.length > 1 && (
  <div className="mt-3 pt-1 border-t border-gray-200">


     

      {/* Upgrade Plan */}
      {Currentplan?.data?.upgrade_plan && (
        <div className=" p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-amber-600" />
            </div>

            <div>
              <h5 className="font-semibold text-gray-900">
                Upgrade Plan
              </h5>
              <p className="text-xs text-gray-500">
                Additional Subscription
              </p>
            </div>
          </div>

         <div className="mt-4 rounded-xl border border-[#6ABD11]/20  bg-gradient-to-r from-[#6ABD11]/10 to-transparent p-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-amber-600">
        Additional Active Plan
      </p>

      <h4 className="text-lg font-bold text-gray-900 mt-1">
        {Currentplan?.data?.upgrade_plan?.plan_name}
      </h4>
    </div>

    <span className="px-3 py-1 rounded-full bg-amber-100  text-amber-700 text-xs font-semibold">
      Upgrade
    </span>
  </div>

  <div className="grid grid-cols-3 gap-4 mt-4">
    <div>
      <p className="text-xs text-gray-500">Extra Listings</p>
      <p className="text-base font-bold text-gray-900">
        {Currentplan?.data?.upgrade_plan?.property_limit}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-500">Valid Until</p>
      <p className="text-base font-bold text-gray-900">
        {new Date(
          Currentplan?.data?.upgrade_plan?.expiry_date
        ).toLocaleDateString()}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-500">Days Left</p>
      <p className="text-base font-bold text-amber-600">
        {upgradeDiffDays > 0
          ? `${upgradeDiffDays} Days`
          : "Expired"}
      </p>
    </div>
  </div>

  <div className="mt-4 pt-3 border-t border-amber-200">
    <p className="text-sm text-gray-700">
        Your account currently includes{" "}
        <span className="font-semibold text-[#6ABD11]">
          {Currentplan?.data?.active_subscription_count}
        </span>{" "}
        active subscriptions with a total listing capacity of{" "}
        <span className="font-semibold text-[#6ABD11]">
          {Currentplan?.data?.property_limit}
        </span>{" "}
        properties.
      </p>
  </div>
</div>
        </div>
      )}

  </div>
)}
      </div>
    </div>
  </div>
) : (
  <div className="lg:col-span-2 host-grotesk bg-white rounded-2xl border border-dashed border-gray-300 p-10 flex flex-col items-center justify-center text-center">
    <img
      src={property}
      alt="No Plan"
      className="w-16 h-16 opacity-50 mb-4"
    />

    <h3 className="text-xl font-bold text-gray-800 mb-2">
      No Active Plan
    </h3>

    <p className="text-gray-500 text-sm max-w-md">
      You haven't subscribed to any plan yet.
    </p>

    <button onClick={()=>nav("/ownerdashboard?tab=plans")}
     className="mt-5 px-6 py-3 cursor-pointer bg-[#6ABD11] text-white rounded-xl font-semibold hover:bg-[#5ca60f] transition">
      Choose Plan
    </button>
  </div>
)}

        <div className="bg-white flex flex-col items-center px-3 sm:px-1 py-1 overflow-hidden">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 instrument-sans w-full text-left">
            Enquiries by Month
          </h2>

          <div className="w-full flex-1 flex items-stretch">
<DietChart data={dashboardData?.data?.monthly_enquiries || []}/></div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;




























// import React, { useEffect, useState } from "react";
// import { TrendingUp, Check } from "lucide-react";
// import apartment from "../../../../assets/images/icons/apartment.svg";
// import property from "../../../../assets/images/profile/property.svg";
// import { motion } from "framer-motion";
// import DashboardCard from "../../../../Components/DashboardCrad/DashboardCard";

// import DietChart from "../../../../Components/PieChart/PieChart";
// import { userCurrentPlan, userDashboard } from "../../../../Api/userApi";
// import { useNavigate } from "react-router-dom";
// function UserDashboard() {


// const nav = useNavigate()
//   const [Currentplan, setCurrentPlan] = useState(null);
//   const [dashboardData, setDashboardData] = useState(null);

//   useEffect(()=>{
//     const fetchCurrentPlan = async()=>{
//       const plandata = await userCurrentPlan()
//       const dashboard = await userDashboard()

//       if(plandata){
//         setCurrentPlan(plandata)
//       }
//       if(dashboard){
//         setDashboardData(dashboard)
//       }
//     }
//     fetchCurrentPlan()

//   },[])

// const totalProperties = dashboardData?.data?.property_listed || 0;

// const totalEnquiries = dashboardData?.data?.total_enquiries || 0;

// const remainingListings =
//   dashboardData?.data?.remaining_property || 0;

//     const datas = [
//     {
//       title: "Total Properties",
//       value: totalProperties,
//       icon: <img src={apartment} alt="" className="w-[20px] h-[20px]" />,
//       badge: "+2%",
//     },
//     {
//       title: "Total Enquiries",
//       value: totalEnquiries,
//       icon: (
//         <svg
//           width="22"
//           height="14"
//           viewBox="0 0 27 17"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M1.63887 0.0763016C1.48594 0.118489 1.35938 0.170052 1.35938 0.193489C1.35938 0.221614 3.98555 2.57943 7.20234 5.4388L13.04 10.6326L13.2932 10.6654C13.8785 10.7357 13.425 11.0966 19.8111 5.41068C23.0068 2.56536 25.6172 0.216927 25.6172 0.193489C25.6172 0.170052 25.4801 0.113802 25.3113 0.0716143C25.0318 0.00130177 23.9824 -0.00338554 13.4566 0.00130177C3.1998 0.00598907 1.88145 0.0106764 1.63887 0.0763016Z"
//             fill="#000000"
//           />
//           <path
//             d="M0.119528 1.36591C0.0246058 1.5581 0.0193324 1.8581 0.00351206 8.33622C-0.00703482 14.2518 0.00351206 15.1378 0.0720667 15.344C0.114254 15.4753 0.172262 15.6159 0.203903 15.6534C0.24609 15.7097 1.07929 14.9925 4.3541 12.0815L8.45683 8.43466L4.36992 4.80185C2.12343 2.80497 0.267184 1.16904 0.251364 1.16904C0.23027 1.16904 0.172262 1.2581 0.119528 1.36591Z"
//             fill="#000000"
//           />
//           <path
//             d="M22.6182 4.80185L18.5312 8.43466L22.634 12.0815C25.9088 14.9925 26.742 15.7097 26.7842 15.6534C26.8158 15.6159 26.8738 15.4753 26.916 15.344C26.9846 15.1378 26.9951 14.2518 26.9846 8.33622C26.9688 1.8581 26.9635 1.5581 26.8686 1.36591C26.8158 1.2581 26.7578 1.16904 26.7367 1.16904C26.7209 1.16904 24.8646 2.80497 22.6182 4.80185Z"
//             fill="#000000"
//           />
//           <path
//             d="M5.4041 13.0275C3.17871 15.0103 1.35938 16.6509 1.35938 16.6744C1.35938 16.6978 1.49648 16.7541 1.66523 16.7963C1.94473 16.8666 2.99941 16.8713 13.4883 16.8713C23.9771 16.8713 25.0318 16.8666 25.3113 16.7963C25.4801 16.7541 25.6172 16.6978 25.6172 16.6744C25.6172 16.6509 23.7926 15.0056 21.5619 13.0134L17.5066 9.39469L16.2199 10.5244C15.1336 11.4853 14.8857 11.6775 14.5957 11.7994C13.8838 12.1088 13.0875 12.1088 12.3861 11.8041C12.0908 11.6775 11.8482 11.49 10.7672 10.5338C10.0711 9.91969 9.48574 9.41813 9.46992 9.41813C9.45938 9.41813 7.62422 11.04 5.4041 13.0275Z"
//             fill="#000000"
//           />
//         </svg>
//       ),
//       badge: "+5%",
//     },
//     {
//       title: "Remaining Listings",
//       value: remainingListings,
//       icon: (
//         <img
//           src={property}
//           alt="Property"
//           className="w-5 h-4 xl:w-[27px] xl:h-[27px]"
//         />
//       ),
//       badge: "limit",
//     },
//   ];


// const today = new Date();

// const expiry = Currentplan?.data?.plan_expiry_date
//   ? new Date(Currentplan.data.plan_expiry_date)
//   : null;
// const diffTime = expiry ? expiry - today : 0;
// const diffDays = diffTime / (1000 * 60 * 60 * 24);
// const showRenewButton = Currentplan && diffDays <= 10;



//   return (
//     <div className="mb-22 md:mb-12 mx-4 sm:mx-6 lg:mx-10">
//       {/* Dashboard Cards */}
//       <div className=" mb-10 sm:max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//            transition={{ duration: 0.5}}
//         >
//           <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em]  mt-6">
//             <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
//             Data Overview
//           </div>
//           <h1 className="text-[31px] font-black text-slate-900 tracking-tight instrument-sans mb-6">
//             Data <span className="text-[#6ABD11]">Overview</span>
//           </h1>
//         </motion.div>
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 ">
//           {datas.map((item, index) => (
//             <DashboardCard
//               key={index}
//               icon={item.icon}
//               title={item.title}
//               value={item.value}
//               badge={item.badge}
//               shadow="shadow-[0px_4px_8.2px_rgba(189,171,171,0.25),0px_0px_4px_rgba(170,149,149,0.25)]"
//               hover="none"
//             />
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
//        {Currentplan ? (
//   <div className="lg:col-span-2 host-grotesk">
//     <h2 className="text-xl font-bold mb-4 instrument-sans">
//       Your Current Plan
//     </h2>

//     <div className="bg-white rounded-2xl shadow-lg border border-[#6ABD11]/20 overflow-hidden">
//       <div className="bg-gradient-to-r from-[#6ABD11]/10 to-transparent p-5 sm:p-6 lg:p-8">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">

//           {/* Plan Info */}
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <TrendingUp className="w-5 h-5 text-[#6ABD11]" />

//               <span className="text-xs sm:text-sm md:text-[12px] font-semibold text-[#6ABD11] uppercase tracking-wide">
//                 Active Subscription
//               </span>
//             </div>

//             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 instrument-sans">
//               {Currentplan.data.name}
//             </h3>

//             <p className="text-gray-600 text-sm">
//               Active for {Currentplan.data.validity}
//             </p>

//             <p className="text-xs sm:text-[12px] text-gray-500 mt-1">
//               Expires on:
//               <span className="font-semibold text-gray-700 ml-1">
//                 {new Date(
//                   Currentplan.data.plan_expiry_date
//                 ).toLocaleDateString()}
//               </span>
//             </p>
//           </div>

//           {/* Listings */}
//           <div className="flex justify-center">
//             <div className="bg-white rounded-lg p-[8px] w-full md:w-auto border border-gray-200">
//               <p className="text-2xl sm:text-2xl font-bold text-center text-[#6ABD11]">
//                 {Currentplan.data.features?.property_listing_limit}
//               </p>

//               <p className="text-[14px] text-gray-600 mt-1 text-center">
//                 Property Listings
//               </p>
//             </div>
//           </div>

//           {/* Status */}
//           <div className="flex flex-col gap-2 items-center">
//             <span className="bg-[#6ABD11ED] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-center">
//               Active
//             </span>

//             <p className="text-xs text-gray-500 text-center">
//               Current Subscription
//             </p>

//             {showRenewButton && (
//               <button className="mt-2 cursor-pointer px-4 py-3 bg-[#6ABD11ED] text-white rounded-lg text-xs sm:text-[14px] font-semibold hover:bg-[#5ca60f] transition">
//                 Renew Subscription
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Features */}
//         <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {Object.entries(Currentplan?.data.features || {}).map(
//             ([key, value], idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-700"
//               >
//                 <Check className="w-4 h-4 text-[#6ABD11] mt-1" />

//                 <div>
//                   <span className="font-semibold capitalize">
//                     {key.replaceAll("_", " ")}:
//                   </span>{" "}
//                   {value}
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// ) : (
//   <div className="lg:col-span-2 host-grotesk bg-white rounded-2xl border border-dashed border-gray-300 p-10 flex flex-col items-center justify-center text-center">
//     <img
//       src={property}
//       alt="No Plan"
//       className="w-16 h-16 opacity-50 mb-4"
//     />

//     <h3 className="text-xl font-bold text-gray-800 mb-2">
//       No Active Plan
//     </h3>

//     <p className="text-gray-500 text-sm max-w-md">
//       You haven’t subscribed to any plan yet.
//     </p>

//     <button onClick={()=>nav("/ownerdashboard?tab=plans")}
//      className="mt-5 px-6 py-3 cursor-pointer bg-[#6ABD11] text-white rounded-xl font-semibold hover:bg-[#5ca60f] transition">
//       Choose Plan
//     </button>
//   </div>
// )}

//         <div className="bg-white flex flex-col items-center px-3 sm:px-1 py-1 overflow-hidden">
//           <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 instrument-sans w-full text-left">
//             Enquiries by Month
//           </h2>

//           <div className="w-full flex-1 flex items-stretch">
// <DietChart data={dashboardData?.data?.monthly_enquiries || []}/></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;
