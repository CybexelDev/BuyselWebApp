import React, { useState } from "react";
import GuideModal from "./GuideModal";
  
function GuideLines() {


  const guidelines = [
    {
      id: 1,
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 9.99446L6.9375 11.0257C7.22917 10.4424 7.53125 9.87987 7.84375 9.33821C8.15625 8.79654 8.5 8.25487 8.875 7.71321L7.125 7.36946L4.5 9.99446ZM8.9375 12.5882L12.5 16.1195C13.375 15.7861 14.3125 15.2757 15.3125 14.5882C16.3125 13.9007 17.25 13.1195 18.125 12.2445C19.5833 10.7861 20.724 9.16633 21.5469 7.38508C22.3698 5.60383 22.7292 3.96321 22.625 2.46321C21.125 2.35904 19.4792 2.71841 17.6875 3.54133C15.8958 4.36425 14.2708 5.50487 12.8125 6.96321C11.9375 7.83821 11.1562 8.77571 10.4688 9.77571C9.78125 10.7757 9.27083 11.7132 8.9375 12.5882ZM14.5 10.557C14.0208 10.0778 13.7812 9.48925 13.7812 8.79133C13.7812 8.09341 14.0208 7.50487 14.5 7.02571C14.9792 6.54654 15.5729 6.30696 16.2812 6.30696C16.9896 6.30696 17.5833 6.54654 18.0625 7.02571C18.5417 7.50487 18.7812 8.09341 18.7812 8.79133C18.7812 9.48925 18.5417 10.0778 18.0625 10.557C17.5833 11.0361 16.9896 11.2757 16.2812 11.2757C15.5729 11.2757 14.9792 11.0361 14.5 10.557ZM15.0938 20.5882L17.7188 17.9632L17.375 16.2132C16.8333 16.5882 16.2917 16.9267 15.75 17.2288C15.2083 17.5309 14.6458 17.8278 14.0625 18.1195L15.0938 20.5882ZM24.875 0.181956C25.2708 2.70279 25.026 5.15591 24.1406 7.54133C23.2552 9.92675 21.7292 12.2028 19.5625 14.3695L20.1875 17.4632C20.2708 17.8799 20.25 18.2861 20.125 18.682C20 19.0778 19.7917 19.4215 19.5 19.7132L14.25 24.9632L11.625 18.807L6.28125 13.4632L0.125 10.8382L5.34375 5.58821C5.63542 5.29654 5.98438 5.08821 6.39062 4.96321C6.79688 4.83821 7.20833 4.81737 7.625 4.90071L10.7188 5.52571C12.8854 3.35904 15.1562 1.82779 17.5312 0.931956C19.9062 0.0361223 22.3542 -0.213878 24.875 0.181956ZM2.34375 17.432C3.07292 16.7028 3.96354 16.333 5.01562 16.3226C6.06771 16.3122 6.95833 16.6715 7.6875 17.4007C8.41667 18.1299 8.77604 19.0205 8.76562 20.0726C8.75521 21.1247 8.38542 22.0153 7.65625 22.7445C7.13542 23.2653 6.26562 23.7132 5.04688 24.0882C3.82812 24.4632 2.14583 24.7965 0 25.0882C0.291667 22.9424 0.625 21.2601 1 20.0413C1.375 18.8226 1.82292 17.9528 2.34375 17.432ZM4.125 19.182C3.91667 19.3903 3.70833 19.7705 3.5 20.3226C3.29167 20.8747 3.14583 21.432 3.0625 21.9945C3.625 21.9111 4.18229 21.7705 4.73438 21.5726C5.28646 21.3747 5.66667 21.1715 5.875 20.9632C6.125 20.7132 6.26042 20.4111 6.28125 20.057C6.30208 19.7028 6.1875 19.4007 5.9375 19.1507C5.6875 18.9007 5.38542 18.7809 5.03125 18.7913C4.67708 18.8017 4.375 18.932 4.125 19.182Z"
            fill="#84CC16"
          />
        </svg>
      ),
      head: "Getting Started",
      desc: "New to Buysel? Learn the basics of navigating our curated marketplace.",
      modalData: [
        { title: "How to Create an Account", desc: "Sign up using your mobile number and verify with OTP." },
        { title: "How to Login to Your Account", desc: "Access your account using mobile/email and OTP." },
        { title: "How Buysel Works", desc: "Post property → Connect with users → Close deals directly." },
        { title: "Setting Up Your Profile", desc: "Add personal details to build trust and visibility." },
      ],
    },
    {
      id: 2,
      icon: (
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.25 23.75V20H17.5V17.5H21.25V13.75H23.75V17.5H27.5V20H23.75V23.75H21.25ZM1.25 20V12.5H0V10L1.25 3.75H20L21.25 10V12.5H20V16.25H17.5V12.5H12.5V20H1.25ZM3.75 17.5H10V12.5H3.75V17.5ZM2.5625 10H18.6875H2.5625ZM1.25 2.5V0H20V2.5H1.25ZM2.5625 10H18.6875L17.9375 6.25H3.3125L2.5625 10Z"
            fill="#84CC16"
          />
        </svg>
      ),
      head: "Posting Property",
      desc: "Step-by-step guides on creating editorial-style listings for your properties.",
      modalData: [
        { title: "How to Post a Property", desc: "Add property details, upload images, and publish your listing in minutes." },
        { title: "Writing a Good Description", desc: "Use clear, honest, and detailed information to attract serious buyers." },
        { title: "Uploading Images Correctly", desc: "Add high-quality, well-lit images to improve listing visibility by up to 80%." },
        { title: "Setting the Right Price", desc: "Compare local market prices to set a competitive rate for a faster sale." },
      ],
    },
    {
      id: 3,
      icon: (
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.25 17.5C6.60417 17.5 6.90104 17.3802 7.14062 17.1406C7.38021 16.901 7.5 16.6042 7.5 16.25C7.5 15.8958 7.38021 15.599 7.14062 15.3594C6.90104 15.1198 6.60417 15 6.25 15C5.89583 15 5.59896 15.1198 5.35938 15.3594C5.11979 15.599 5 15.8958 5 16.25C5 16.6042 5.11979 16.901 5.35938 17.1406C5.59896 17.3802 5.89583 17.5 6.25 17.5ZM6.25 12.5C6.60417 12.5 6.90104 12.3802 7.14062 12.1406C7.38021 11.901 7.5 11.6042 7.5 11.25C7.5 10.8958 7.38021 10.599 7.14062 10.3594C6.90104 10.1198 6.60417 10 6.25 10C5.89583 10 5.59896 10.1198 5.35938 10.3594C5.11979 10.599 5 10.8958 5 11.25C5 11.6042 5.11979 11.901 5.35938 12.1406C5.59896 12.3802 5.89583 12.5 6.25 12.5ZM6.25 7.5C6.60417 7.5 6.90104 7.38021 7.14062 7.14062C7.38021 6.90104 7.5 6.60417 7.5 6.25C7.5 5.89583 7.38021 5.59896 7.14062 5.35938C6.90104 5.11979 6.60417 5 6.25 5C5.89583 5 5.59896 5.11979 5.35938 5.35938C5.11979 5.59896 5 5.89583 5 6.25C5 6.60417 5.11979 6.90104 5.35938 7.14062C5.59896 7.38021 5.89583 7.5 6.25 7.5ZM10 17.5H17.5V15H10V17.5ZM10 12.5H17.5V10H10V12.5ZM10 7.5H17.5V5H10V7.5ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H20C20.6875 0 21.276 0.244792 21.7656 0.734375C22.2552 1.22396 22.5 1.8125 22.5 2.5V20C22.5 20.6875 22.2552 21.276 21.7656 21.7656C21.276 22.2552 20.6875 22.5 20 22.5H2.5ZM2.5 20H20V2.5H2.5V20ZM2.5 2.5V20V2.5Z"
            fill="#84CC16"
          />
        </svg>
      ),
      head: "Managing Listings",
      desc: "Update status, edit descriptions, or feature your property in top searches.",
      modalData: [
        { title: "How to Edit a Listing", desc: "Modify property details, update pricing, or add new photos to your existing listing." },
        { title: "How to Delete a Listing", desc: "Safely remove your property from the market once sold or if you change your mind." },
        { title: "How to Boost Listing Visibility", desc: "Learn about our premium promotion tools to get 5x more views on your property." },
        { title: "Track Listing Performance", desc: "Access analytics to see how many people are viewing and saving your listing." },
      ],
    },
    {
      id: 4,
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.8125 18.875C5.875 18.0625 7.0625 17.4219 8.375 16.9531C9.6875 16.4844 11.0625 16.25 12.5 16.25C13.9375 16.25 15.3125 16.4844 16.625 16.9531C17.9375 17.4219 19.125 18.0625 20.1875 18.875C20.9167 18.0208 21.4844 17.0521 21.8906 15.9688C22.2969 14.8854 22.5 13.7292 22.5 12.5C22.5 9.72917 21.526 7.36979 19.5781 5.42188C17.6302 3.47396 15.2708 2.5 12.5 2.5C9.72917 2.5 7.36979 3.47396 5.42188 5.42188C3.47396 7.36979 2.5 9.72917 2.5 12.5C2.5 13.7292 2.70312 14.8854 3.10938 15.9688C3.51562 17.0521 4.08333 18.0208 4.8125 18.875ZM12.5 13.75C11.2708 13.75 10.2344 13.3281 9.39062 12.4844C8.54688 11.6406 8.125 10.6042 8.125 9.375C8.125 8.14583 8.54688 7.10938 9.39062 6.26562C10.2344 5.42188 11.2708 5 12.5 5C13.7292 5 14.7656 5.42188 15.6094 6.26562C16.4531 7.10938 16.875 8.14583 16.875 9.375C16.875 10.6042 16.4531 11.6406 15.6094 12.4844C14.7656 13.3281 13.7292 13.75 12.5 13.75ZM12.5 25C10.7708 25 9.14583 24.6719 7.625 24.0156C6.10417 23.3594 4.78125 22.4688 3.65625 21.3438C2.53125 20.2188 1.64062 18.8958 0.984375 17.375C0.328125 15.8542 0 14.2292 0 12.5C0 10.7708 0.328125 9.14583 0.984375 7.625C1.64062 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64062 7.625 0.984375C9.14583 0.328125 10.7708 0 12.5 0C14.2292 0 15.8542 0.328125 17.375 0.984375C18.8958 1.64062 20.2188 2.53125 21.3438 3.65625C22.4688 4.78125 23.3594 6.10417 24.0156 7.625C24.6719 9.14583 25 10.7708 25 12.5C25 14.2292 24.6719 15.8542 24.0156 17.375C23.3594 18.8958 22.4688 20.2188 21.3438 21.3438C20.2188 22.4688 18.8958 23.3594 17.375 24.0156C15.8542 24.6719 14.2292 25 12.5 25ZM12.5 22.5C13.6042 22.5 14.6458 22.3385 15.625 22.0156C16.6042 21.6927 17.5 21.2292 18.3125 20.625C17.5 20.0208 16.6042 19.5573 15.625 19.2344C14.6458 18.9115 13.6042 18.75 12.5 18.75C11.3958 18.75 10.3542 18.9115 9.375 19.2344C8.39583 19.5573 7.5 20.0208 6.6875 20.625C7.5 21.2292 8.39583 21.6927 9.375 22.0156C10.3542 22.3385 11.3958 22.5 12.5 22.5ZM12.5 11.25C13.0417 11.25 13.4896 11.0729 13.8438 10.7188C14.1979 10.3646 14.375 9.91667 14.375 9.375C14.375 8.83333 14.1979 8.38542 13.8438 8.03125C13.4896 7.67708 13.0417 7.5 12.5 7.5C11.9583 7.5 11.5104 7.67708 11.1562 8.03125C10.8021 8.38542 10.625 8.83333 10.625 9.375C10.625 9.91667 10.8021 10.3646 11.1562 10.7188C11.5104 11.0729 11.9583 11.25 12.5 11.25Z"
            fill="#84CC16"
          />
        </svg>
      ),
      head: "Account & Profile",
      desc: "Secure your account, update your professional bio, and manage notifications.",
      modalData: [
        { title: "Update Profile Information", desc: "Edit your name, phone number, and email address to keep your profile current." },
        { title: "Change Password", desc: "Keep your account secure by updating your password regularly with strong credentials." },
        { title: "Manage Notifications", desc: "Control alerts and updates from Buysel across email, SMS, and push channels." },
        { title: "Delete Account", desc: "Permanently remove your account and all associated data from the Buysel ecosystem." },
      ],
    },
    {
      id: 5,
      icon: (
        <svg
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 11.25C15.2083 11.25 14.3229 10.8854 13.5938 10.1562C12.8646 9.42708 12.5 8.54167 12.5 7.5C12.5 6.45833 12.8646 5.57292 13.5938 4.84375C14.3229 4.11458 15.2083 3.75 16.25 3.75C17.2917 3.75 18.1771 4.11458 18.9062 4.84375C19.6354 5.57292 20 6.45833 20 7.5C20 8.54167 19.6354 9.42708 18.9062 10.1562C18.1771 10.8854 17.2917 11.25 16.25 11.25ZM7.5 15C6.8125 15 6.22396 14.7552 5.73438 14.2656C5.24479 13.776 5 13.1875 5 12.5V2.5C5 1.8125 5.24479 1.22396 5.73438 0.734375C6.22396 0.244792 6.8125 0 7.5 0H25C25.6875 0 26.276 0.244792 26.7656 0.734375C27.2552 1.22396 27.5 1.8125 27.5 2.5V12.5C27.5 13.1875 27.2552 13.776 26.7656 14.2656C26.276 14.7552 25.6875 15 25 15H7.5ZM10 12.5H22.5C22.5 11.8125 22.7448 11.224 23.2344 10.7344C23.724 10.2448 24.3125 10 25 10V5C24.3125 5 23.724 4.75521 23.2344 4.26562C22.7448 3.77604 22.5 3.1875 22.5 2.5H10C10 3.1875 9.75521 3.77604 9.26562 4.26562C8.77604 4.75521 8.1875 5 7.5 5V10C8.1875 10 8.77604 10.2448 9.26562 10.7344C9.75521 11.224 10 11.8125 10 12.5ZM23.75 20H2.5C1.8125 20 1.22396 19.7552 0.734375 19.2656C0.244792 18.776 0 18.1875 0 17.5V3.75H2.5V17.5H23.75V20ZM7.5 12.5V2.5V12.5Z"
            fill="#84CC16"
          />
        </svg>
      ),
      head: "Payments & Plans",
      desc: "Understanding subscription tiers, invoicing, andsecure payment methods.",
      modalData: [
        { title: "Overview of Plans (Normal, Premium, Elite)", desc: "Compare features and choose what fits your needs. Understand the exclusive benefits of Premium and Elite tiers." },
        { title: "How to Upgrade Your Plan", desc: "Easily upgrade to Premium or Elite for better visibility and faster response rates from potential leads." },
        { title: "Accepted Payment Methods", desc: "Pay securely using cards, UPI, net banking, or digital wallets. We ensure all transactions are encrypted and safe." },
        { title: "Billing & Payment Issues", desc: "Fix failed transactions, check your current payment status, or download historical invoices for your records." },
      ],
    },
    {
      id: 6,
      icon: (
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 23.75V21.25H15V23.75H0ZM7.0625 17.6875L0 10.625L2.625 7.9375L9.75 15L7.0625 17.6875ZM15 9.75L7.9375 2.625L10.625 0L17.6875 7.0625L15 9.75ZM20.75 22.5L4.4375 6.1875L6.1875 4.4375L22.5 20.75L20.75 22.5Z"
            fill="#84CC16"
          />
        </svg>
      ),
      head: "Safety & Guidelines",
      desc: "Our community standards for architectural excellence and professional conduct.",
      modalData: [
        { title: "Safety Tips for Buyers & Sellers", desc: "Always verify details before making any deal. Learn how to cross-reference property listings." },
        { title: "Avoiding Scams & Fraud", desc: "Learn how to identify suspicious listings and users before you engage in communications." },
        { title: "Meeting in Safe Locations", desc: "Choose public places for property visits and discussions. Safety first for every physical interaction." },
        { title: "Platform Rules & Guidelines", desc: "Understand what is allowed and prohibited on Buysel to maintain our community standards." },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectCard, setSelectcard] = useState(null);

  return (
<div className="bg-white 
                px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[104px] 
                py-6 sm:py-8 md:py-10 lg:py-10 xl:py-[40px]">

  {/* GRID */}
  <div className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  lg:grid-cols-3 
                  gap-4 sm:gap-6 md:gap-8">

    {guidelines.map((item) => (
      <div
        key={item.id}
        className="border-2 border-[#84CC16] rounded-[12px] 
                   p-4 sm:p-6 md:p-8
                   cursor-pointer
                   hover:bg-gradient-to-r hover:from-[#EAFFCA] hover:to-[#FFFFFF] 
                   hover:shadow-[0px_4px_5px_0px_rgba(0,0,0,0.25)]
                   transition-all duration-300"
        onClick={() => {
          setSelectcard(item.modalData);
          setIsOpen(true);
        }}
      >
        
        {/* Icon */}
        <div className="bg-gray-200 
                        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                        flex items-center justify-center 
                        rounded-xl mb-4 sm:mb-5 md:mb-6">
          {item.icon}
        </div>

        {/* Heading */}
        <h2 className="instrument-sans 
                       text-[16px] sm:text-[18px] md:text-[20px] 
                       font-[700] 
                       leading-[22px] sm:leading-[26px] md:leading-[28px] 
                       mb-2">
          {item.head}
        </h2>

        {/* Description */}
        <p className="instrument-sans 
                      text-[#424752] 
                      text-[13px] sm:text-[14px] 
                      leading-[20px] sm:leading-[22px] 
                      mb-3 sm:mb-4 font-[450]">
          {item.desc}
        </p>

        {/* Articles */}
        <p className="inter 
                      text-[#84CC16] 
                      font-[600] 
                      text-[11px] sm:text-[12px] 
                      tracking-[1px] sm:tracking-[1.2px] font-[600] leading-[14px] sm:leading-[16px]">
          {item.modalData?.length || 0} ARTICLES
        </p>

      </div>
    ))}
  </div>

  {isOpen && <GuideModal setIsOpen={setIsOpen} data={selectCard} />}
</div>
  );
}
export default GuideLines;
