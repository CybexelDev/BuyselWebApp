import React from 'react'
import house2 from "../../../assets/images/about/house2.png"
import house3 from "../../../assets/images/about/house3.png"
import house4 from "../../../assets/images/about/house4.png"



   const iconData = [
  {
    id: 1,
    title: "Create",
    subTitle: "Sign up for free and create your account.",
    icon: (
      <svg width="51" height="51" viewBox="0 0 51 51" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 14.875C17 12.6207 17.8955 10.4587 19.4896 8.86459C21.0837 7.27053 23.2457 6.375 25.5 6.375C27.7543 6.375 29.9163 7.27053 31.5104 8.86459C33.1045 10.4587 34 12.6207 34 14.875C34 17.1293 33.1045 19.2913 31.5104 20.8854C29.9163 22.4795 27.7543 23.375 25.5 23.375C23.2457 23.375 21.0837 22.4795 19.4896 20.8854C17.8955 19.2913 17 17.1293 17 14.875ZM17 27.625C14.1821 27.625 11.4796 28.7444 9.48699 30.737C7.49442 32.7296 6.375 35.4321 6.375 38.25C6.375 39.9408 7.04665 41.5623 8.24219 42.7578C9.43774 43.9534 11.0592 44.625 12.75 44.625H38.25C39.9408 44.625 41.5623 43.9534 42.7578 42.7578C43.9534 41.5623 44.625 39.9408 44.625 38.25C44.625 35.4321 43.5056 32.7296 41.513 30.737C39.5204 28.7444 36.8179 27.625 34 27.625H17Z"
          fill="#41443C"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Post",
    subTitle: "Post your property listing with all the details.",
    icon: (<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6811 16.3808C15.5242 16.2241 15.3997 16.0379 15.3148 15.8331C15.2299 15.6282 15.1862 15.4086 15.1862 15.1869C15.1862 14.9651 15.2299 14.7455 15.3148 14.5407C15.3997 14.3358 15.5242 14.1497 15.6811 13.993L25.8061 3.86797C25.9628 3.71107 26.1489 3.5866 26.3538 3.50168C26.5586 3.41676 26.7782 3.37305 27 3.37305C27.2218 3.37305 27.4414 3.41676 27.6462 3.50168C27.8511 3.5866 28.0372 3.71107 28.1939 3.86797L38.3189 13.993C38.6356 14.3096 38.8134 14.7391 38.8134 15.1869C38.8134 15.6347 38.6356 16.0641 38.3189 16.3808C38.0023 16.6974 37.5728 16.8753 37.125 16.8753C36.6772 16.8753 36.2477 16.6974 35.9311 16.3808L28.6875 9.13508V26.9994C28.6875 27.4469 28.5097 27.8762 28.1932 28.1926C27.8768 28.5091 27.4476 28.6869 27 28.6869C26.5524 28.6869 26.1232 28.5091 25.8068 28.1926C25.4903 27.8762 25.3125 27.4469 25.3125 26.9994V9.13508L18.0689 16.3808C17.9122 16.5377 17.7261 16.6621 17.5212 16.7471C17.3164 16.832 17.0968 16.8757 16.875 16.8757C16.6532 16.8757 16.4336 16.832 16.2288 16.7471C16.0239 16.6621 15.8378 16.5377 15.6811 16.3808ZM50.625 28.6869V42.1869C50.625 43.082 50.2694 43.9404 49.6365 44.5734C49.0035 45.2063 48.1451 45.5619 47.25 45.5619H6.75C5.85489 45.5619 4.99645 45.2063 4.36351 44.5734C3.73058 43.9404 3.375 43.082 3.375 42.1869V28.6869C3.375 27.7918 3.73058 26.9333 4.36351 26.3004C4.99645 25.6675 5.85489 25.3119 6.75 25.3119H21.0938C21.3175 25.3119 21.5321 25.4008 21.6904 25.559C21.8486 25.7172 21.9375 25.9318 21.9375 26.1556V26.8855C21.9375 29.7226 24.2578 32.1146 27.097 32.0619C28.4228 32.0365 29.6857 31.4919 30.6142 30.5452C31.5427 29.5986 32.0627 28.3254 32.0625 26.9994V26.1556C32.0625 25.9318 32.1514 25.7172 32.3096 25.559C32.4679 25.4008 32.6825 25.3119 32.9062 25.3119H47.25C48.1451 25.3119 49.0035 25.6675 49.6365 26.3004C50.2694 26.9333 50.625 27.7918 50.625 28.6869ZM42.1875 35.4369C42.1875 34.9362 42.039 34.4468 41.7609 34.0306C41.4828 33.6143 41.0874 33.2899 40.6249 33.0983C40.1624 32.9067 39.6534 32.8566 39.1624 32.9543C38.6714 33.0519 38.2204 33.293 37.8664 33.647C37.5124 34.001 37.2713 34.452 37.1736 34.9431C37.076 35.4341 37.1261 35.943 37.3177 36.4055C37.5093 36.8681 37.8337 37.2634 38.25 37.5415C38.6662 37.8197 39.1556 37.9681 39.6562 37.9681C40.3276 37.9681 40.9714 37.7014 41.4461 37.2267C41.9208 36.752 42.1875 36.1082 42.1875 35.4369Z" fill="#41443C"/>
</svg>
)
  },
  {
    id:3,
    title:"Discover",
    subTitle:"Explore verified properties tailored to your needs.",
    icon:(
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1451_2761)">
<path d="M23.6234 4.5C27.2143 4.49976 30.7327 5.51049 33.7761 7.41652C36.8194 9.32255 39.2646 12.0469 40.8319 15.2777C42.3992 18.5085 43.0252 22.1154 42.6383 25.6854C42.2515 29.2554 40.8674 32.6444 38.6444 35.4645L46.8614 43.6815C47.2712 44.1059 47.498 44.6742 47.4929 45.2642C47.4878 45.8541 47.2511 46.4184 46.834 46.8356C46.4168 47.2528 45.8525 47.4894 45.2625 47.4945C44.6726 47.4996 44.1042 47.2729 43.6799 46.863L35.4629 38.646C33.0676 40.5337 30.2557 41.8212 27.2617 42.4011C24.2676 42.981 21.1783 42.8365 18.2515 41.9796C15.3247 41.1227 12.6452 39.5784 10.4367 37.4754C8.22808 35.3724 6.55444 32.7717 5.55537 29.8903C4.55631 27.0089 4.26079 23.9304 4.69347 20.9116C5.12615 17.8928 6.27448 15.0212 8.04265 12.5364C9.81083 10.0517 12.1476 8.0258 14.858 6.62781C17.5683 5.22982 20.5737 4.50026 23.6234 4.5ZM23.6234 9C19.7446 9 16.0247 10.5408 13.2819 13.2836C10.5392 16.0263 8.99837 19.7462 8.99837 23.625C8.99837 27.5038 10.5392 31.2237 13.2819 33.9664C16.0247 36.7092 19.7446 38.25 23.6234 38.25C27.5022 38.25 31.2221 36.7092 33.9648 33.9664C36.7075 31.2237 38.2484 27.5038 38.2484 23.625C38.2484 19.7462 36.7075 16.0263 33.9648 13.2836C31.2221 10.5408 27.5022 9 23.6234 9ZM23.6234 11.25C26.9054 11.25 30.0531 12.5538 32.3738 14.8746C34.6946 17.1953 35.9984 20.3429 35.9984 23.625C35.9984 26.9071 34.6946 30.0547 32.3738 32.3754C30.0531 34.6962 26.9054 36 23.6234 36C20.3413 36 17.1937 34.6962 14.8729 32.3754C12.5522 30.0547 11.2484 26.9071 11.2484 23.625C11.2484 20.3429 12.5522 17.1953 14.8729 14.8746C17.1937 12.5538 20.3413 11.25 23.6234 11.25Z" fill="#41443C"/>
</g>
<defs>
<clipPath id="clip0_1451_2761">
<rect width="54" height="54" fill="white"/>
</clipPath>
</defs>
</svg>

    )
  },
  {
    id:4,
    title:"Connect",
    subTitle:"Connect with verified buyers or sellers directly.",
    icon:(
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.93752 23.5C2.93752 12.1436 12.1436 2.9375 23.5 2.9375C34.8564 2.9375 44.0625 12.1436 44.0625 23.5C44.0625 34.8564 34.8564 44.0625 23.5 44.0625C20.022 44.0625 16.7408 43.1974 13.865 41.6699L5.74577 43.9788C5.36842 44.0857 4.96935 44.09 4.58979 43.9912C4.21023 43.8924 3.86393 43.694 3.58666 43.4166C3.3094 43.1392 3.11122 42.7928 3.01259 42.4132C2.91397 42.0335 2.91847 41.6345 3.02564 41.2572L5.33452 33.1394C3.7564 30.1717 2.93318 26.8612 2.93752 23.5ZM14.6875 19.0938C14.6875 19.4833 14.8423 19.8569 15.1177 20.1323C15.3931 20.4078 15.7667 20.5625 16.1563 20.5625H30.8438C31.2333 20.5625 31.6069 20.4078 31.8823 20.1323C32.1578 19.8569 32.3125 19.4833 32.3125 19.0938C32.3125 18.7042 32.1578 18.3306 31.8823 18.0552C31.6069 17.7797 31.2333 17.625 30.8438 17.625H16.1563C15.7667 17.625 15.3931 17.7797 15.1177 18.0552C14.8423 18.3306 14.6875 18.7042 14.6875 19.0938ZM16.1563 26.4375C15.7667 26.4375 15.3931 26.5922 15.1177 26.8677C14.8423 27.1431 14.6875 27.5167 14.6875 27.9062C14.6875 28.2958 14.8423 28.6694 15.1177 28.9448C15.3931 29.2203 15.7667 29.375 16.1563 29.375H24.9688C25.3583 29.375 25.7319 29.2203 26.0073 28.9448C26.2828 28.6694 26.4375 28.2958 26.4375 27.9062C26.4375 27.5167 26.2828 27.1431 26.0073 26.8677C25.7319 26.5922 25.3583 26.4375 24.9688 26.4375H16.1563Z" fill="#41443C"/>
</svg>

    )
  },
  {
    id:5,
    title:"Close Deal",
    subTitle:"Finalize your dream property transaction.",
    icon:(
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1451_2777)">
<g clip-path="url(#clip1_1451_2777)">
<path d="M27.2869 10.1242L19.1194 16.7086C17.7609 17.8004 17.4994 19.7656 18.5288 21.1682C19.6172 22.6631 21.735 22.957 23.1947 21.8232L31.5731 15.3396C32.1637 14.8861 33.0075 14.9869 33.4716 15.5748C33.9356 16.1627 33.8259 17.0025 33.2353 17.4645L31.4719 18.825L43.2 29.575V13.7188H43.1409L42.8119 13.5088L36.6862 9.60352C35.3953 8.78047 33.885 8.34375 32.3494 8.34375C30.51 8.34375 28.7213 8.97363 27.2869 10.1242ZM29.2106 20.5719L24.8484 23.948C22.1906 26.0141 18.3347 25.4766 16.3434 22.7555C14.4703 20.1939 14.9428 16.6162 17.415 14.6258L24.435 8.97363C23.4563 8.56211 22.4016 8.35215 21.33 8.35215C19.7438 8.34375 18.1997 8.81406 16.875 9.6875L10.8 13.7188V32.5312H13.1794L20.8913 39.5355C22.545 41.0389 25.1016 40.9213 26.6119 39.2752C27.0759 38.7629 27.3881 38.1666 27.5484 37.5451L28.9828 38.8553C30.6281 40.3586 33.1931 40.2494 34.7034 38.6117C35.0831 38.2002 35.3616 37.7215 35.5388 37.226C37.1756 38.3178 39.4031 38.091 40.7784 36.5961C42.2887 34.9584 42.1791 32.4053 40.5337 30.902L29.2106 20.5719ZM1.35 13.7188C0.6075 13.7188 0 14.3234 0 15.0625V32.5312C0 34.0178 1.20656 35.2188 2.7 35.2188H5.4C6.89344 35.2188 8.1 34.0178 8.1 32.5312V13.7188H1.35ZM4.05 29.8438C4.40804 29.8438 4.75142 29.9853 5.00459 30.2373C5.25777 30.4893 5.4 30.8311 5.4 31.1875C5.4 31.5439 5.25777 31.8857 5.00459 32.1377C4.75142 32.3897 4.40804 32.5312 4.05 32.5312C3.69196 32.5312 3.34858 32.3897 3.09541 32.1377C2.84223 31.8857 2.7 31.5439 2.7 31.1875C2.7 30.8311 2.84223 30.4893 3.09541 30.2373C3.34858 29.9853 3.69196 29.8438 4.05 29.8438ZM45.9 13.7188V32.5312C45.9 34.0178 47.1066 35.2188 48.6 35.2188H51.3C52.7934 35.2188 54 34.0178 54 32.5312V15.0625C54 14.3234 53.3925 13.7188 52.65 13.7188H45.9ZM48.6 31.1875C48.6 30.8311 48.7422 30.4893 48.9954 30.2373C49.2486 29.9853 49.592 29.8438 49.95 29.8438C50.308 29.8438 50.6514 29.9853 50.9046 30.2373C51.1578 30.4893 51.3 30.8311 51.3 31.1875C51.3 31.5439 51.1578 31.8857 50.9046 32.1377C50.6514 32.3897 50.308 32.5312 49.95 32.5312C49.592 32.5312 49.2486 32.3897 48.9954 32.1377C48.7422 31.8857 48.6 31.5439 48.6 31.1875Z" fill="#41443C"/>
</g>
</g>
<defs>
<clipPath id="clip0_1451_2777">
<rect width="54" height="54" fill="white"/>
</clipPath>
<clipPath id="clip1_1451_2777">
<rect width="54" height="43" fill="white" transform="translate(0 2.96875)"/>
</clipPath>
</defs>
</svg>
    )
  }
];

function ComprehesiveSection() {
    return (
        <div>

            <div>
      <div
      className="
      w-full 
      h-[250px] 
      sm:h-[420px] 
      md:h-[500px] 
      lg:h-[500px] 
      bg-cover 
      bg-bottom"
      style={{ backgroundImage: `url(${house2})` }}
      ></div>

            </div>
            {/* 5 cards */}
<div className="w-full bg-white py-12 md:py-16 px-4 md:px-10 lg:px-20">
  <div
    className="max-w-7xl mx-auto 
               grid 
               grid-cols-2 
               lg:grid-cols-[1.5fr_1fr_1fr] 
               gap-3 md:gap-[14px]"
  >

    <div
      className="bg-black text-white rounded-2xl
                 p-6 md:p-8 lg:p-10
                 col-span-2 lg:col-span-1
                 lg:row-span-3
                 flex flex-col justify-center
                 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]"
    >
      <h2 className="text-lg md:text-xl lg:text-[24px] 
                     instrument-sans font-[450] mb-2">
        Comprehensive Services for
        <br className="hidden lg:block" />
        All Your Property Needs
      </h2>
      <p className="text-gray-300 text-xs md:text-sm lg:text-base 
                    host-grotesk font-[400]">
        End-to-end real estate solutions tailored for buyers,
        sellers, renters and agents.
      </p>
    </div>

    <div className="bg-[#6ABD11BA] rounded-2xl p-4 md:p-6 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-1 host-grotesk text-sm md:text-base lg:text-[20px]">
        Comprehensive Support
      </h3>
      <p className="text-xs md:text-sm lg:text-[16px] host-grotesk font-[400]">
        Our platform ensures a smooth experience with easy navigation
        and dedicated customer service.
      </p>
    </div>

    <div className="bg-[#000000D6] text-white rounded-2xl p-4 md:p-6 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-1 host-grotesk text-sm md:text-base lg:text-[20px]">
        Locality Insights
      </h3>
      <p className="text-xs md:text-sm lg:text-[16px] host-grotesk font-[400]">
        Access thousands of trusted listings and connect directly
        with buyers or sellers — no middlemen.
      </p>
    </div>

    <div className="bg-[#F8F8F8BA] rounded-2xl p-4 md:p-6 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-1 host-grotesk text-sm md:text-base lg:text-[20px]">
        Verified Listings
      </h3>
      <p className="text-xs md:text-sm lg:text-[16px] host-grotesk font-[400]">
        Access thousands of trusted listings and connect directly
        with genuine buyers or sellers.
      </p>
    </div>

    <div
      className="bg-[#BBBBBB] rounded-2xl
                 p-4 md:p-6 lg:px-6 lg:py-8
                 lg:row-span-2
                 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]"
    >
      <h3 className="font-semibold mb-1 host-grotesk text-sm md:text-base lg:text-[20px]">
        Expert Agent Assistance
      </h3>
      <p className="text-xs md:text-sm lg:text-[16px] host-grotesk font-[400]">
        Connect with verified real estate professionals who offer
        expert guidance and smooth negotiation support.
      </p>
    </div>

    <div className="bg-yellow-400 rounded-2xl p-4 md:p-6  col-span-2 lg:col-span-1 shadow-[0px_1px_5px_0px_rgba(15,15,15,0.25)]">
      <h3 className="font-semibold mb-1 host-grotesk text-sm md:text-base lg:text-[20px]">
        Secure Documentation
      </h3>
      <p className="text-xs md:text-sm lg:text-[16px] host-grotesk font-[400]">
        Reliable support for agreements, legal checks,
        and hassle-free processing.
      </p>
    </div>

  </div>
</div> 
{/* connecting ppl house image section  */}
 <div className="relative w-full bg-white 
                h-[300px] md:h-[380px] lg:h-[418px]
                flex items-center justify-center  lg:mt-20
                overflow-hidden px-4">

  <div className="absolute 
                  left-0 top-0 
                  w-[160px] h-[110px] 
                  md:w-[220px] md:h-[150px] 
                  lg:w-[342px] lg:h-[211px]">
    <img
      src={house3}
      alt="left house"
      className="w-full h-full object-cover 
                 rounded-tr-[20px] rounded-br-[20px] 
                 md:rounded-tr-[25px] md:rounded-br-[25px] 
                 lg:rounded-tr-[30px] lg:rounded-br-[30px]"
    />
  </div>

  <div className="absolute 
                  right-0 bottom-0 
                  w-[160px] h-[110px] 
                  md:w-[220px] md:h-[150px] 
                   lg:w-[342px] lg:h-[211px]">
    <img
      src={house4}
      alt="right house"
      className="w-full h-full object-cover 
                 rounded-tl-[20px] rounded-bl-[20px] 
                 md:rounded-tl-[25px] md:rounded-bl-[25px] 
                 lg:rounded-tl-[30px] lg:rounded-bl-[30px]"
    />
  </div>

  <div className="text-center max-w-xl md:max-w-2xl px-4 md:px-8 ">
    <h2 className="text-lg md:text-2xl lg:text-3xl 
                   font-medium text-gray-700 
                   host-grotesk leading-[1.3]">
      Connecting People with the{" "} <br/>
      <span className="text-[#6ABD11ED] font-medium">
        Right Properties.
      </span>
    </h2>
  </div>


</div>
<div className="w-full bg-[#0C3813ED] py-12 px-4 md:px-8 lg:px-8 mt-20">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">

 
    <h2 className="text-white 
               text-xl md:text-2xl 
               font-bold 
               instrument-sans 
               text-center md:text-left">
  How Buysel.in Works?
</h2>

 <p className="text-white 
              text-center md:text-right 
              max-w-[470px] 
              host-grotesk font-[450] text-[15px]">
  Discover how our platform simplifies every step of buying,
  selling and renting properties.
</p>


  </div>

<div className="max-w-7xl mx-auto grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-5 
                gap-4">

  {iconData.map((item, index) => (
  <div
    key={item.id}
    className={`
      bg-white rounded-2xl px-[23px] pt-[23px] pb-[40px]
      text-center shadow-md
      ${index === iconData.length - 1 
        ? "col-span-2 sm:col-span-3 md:col-span-1" 
        : ""}
    `}
  >
      <div className="w-[72px] h-[72px] mx-auto mb-1 flex items-center justify-center rounded-full border-3 border-[#5CAF33ED]">
        {item.icon}
      </div>

      <h3 className="font-medium host-grotesk text-[20px] text-[#494545] mb-[3px]">
        {item.title}
      </h3>

      <p className="font-medium text-[#494545] text-[16px] instrument-sans max-w-[184px] mx-auto">
        {item.subTitle}
      </p>
    </div>
  ))}

</div>

</div>
<div className="flex w-full 
                min-h-[320px] sm:min-h-[380px] md:min-h-[440px] 
                px-4 
                items-center justify-center 
                flex-col text-center">

  <h1 className="host-grotesk 
                 text-2xl sm:text-3xl md:text-4xl 
                 font-medium 
                 max-w-xl md:max-w-2xl 
                 leading-snug">
    Making property buying, selling, and renting simple for everyone.
  </h1>

  <p className="host-grotesk 
                text-sm sm:text-base md:text-lg 
                mt-3 
                font-normal 
                max-w-md md:max-w-xl">
    A smarter way to explore and finalize properties without confusion.
  </p>

</div>
   </div>

    )
}

export default ComprehesiveSection