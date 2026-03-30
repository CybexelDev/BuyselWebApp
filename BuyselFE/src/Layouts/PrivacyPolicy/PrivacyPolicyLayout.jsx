import React from "react";

const termsData = [
  {
  title: "Information We Collect",
  description: "We collect different types of information to provide better services:",
  subSections: [
    {
      title: "a. Personal Information",
      points: [
        "Name",
        "Email address",
        "Phone number",
        "Location details",
        "Account login credentials",
      ],
    },
    {
      title: "b. Property Information",
      points: [
        "Property details (location, price, images, description)",
        "Ownership or listing details",
        "Uploaded documents (if any)",
      ],
    },
    {
      title: "c. Usage Data",
      points: [
        "IP address",
        "Device information",
        "Browser type",
        "Pages visited and activity on the platform",
      ],
    },
  ],
},
  {
    title: "How We Use Your Information",
            description: "We use your information to:",
    points: [
      "Create and manage your account",
      "Display property listings",
      "Connect buyers, sellers, and agents",
      "Improve platform performance and user experience",
      "Send notifications, updates, and promotional offers",
      "Ensure security and prevent fraud"
    ],
  },
  {
    title: "Sharing of Information",
                description: "We do not sell your personal data. However, we may share information in the following cases:",

    points: [
      "With other users (e.g., contact details in property listings)",
      "With service providers (hosting, analytics, payment processing)",
      "When required by law or government authorities",
      "To prevent fraud or security threats",
    ],
  },
  {
    title: "Cookies & Tracking Technologies",
    description:"We use cookies to enhance your experience.",
    points: [
      "Remember login sessions",
      "Analyze user behavior",
      "Improve website performance",
      "Buysel.in is not responsible for transaction disputes between users.",
    ],
        lastsentence:"You can disable cookies in your browser settings, but some features may not work properly."

  },
  {
    title: "Data Security",
        description:"We take appropriate measures to protect your data:",

    points: [
      "Secure servers and encryption",
      "Restricted access to sensitive data",
      "Regular monitoring for vulnerabilities",
    ],
    

  },
  {
    title: "Data Retention",

    points: [
      "We retain your data as long as your account is active",
      "Data may be kept longer for legal or compliance purposes",
      "You can request deletion of your account anytime",
    ],
  },
  {
    title: "User Rights",
                description:"You have the right to:",

    points: [
      "Access your personal data",
      "Update or correct your information",
      "Request deletion of your data",
      "Opt-out of marketing communications"
    ],
  },
  {
    title: "Third-Party Links",
                    description:"Buysel.in may contain links to third-party websites.",

    points: [
      "We are not responsible for their privacy practices",
      "Users should review their policies before sharing data",
    
    ],
  },
  {
    title: "Children’s Privacy",

    points: [
      "Our platform is not intended for users under 18",
      "We do not knowingly collect data from minors",
     

    ],
  },
    {
    title: "Changes to Privacy Policy",
                        description:"We may update this Privacy Policy periodically.",

    points: [
      "Users will be notified of major updates",
      "Continued use means acceptance of changes",

    ],
  },
    

];

function PrivacyPolicyContent() {
return ( <div className="bg-[#F4F4F4] py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-10"> <div className="bg-white w-full mx-auto space-y-6 md:space-y-8 p-6 sm:p-8 md:p-13 rounded-[24px] md:rounded-[40px]">

{termsData.map((section, index) => (

  <div key={index} className="space-y-3 pb-6 border-b border-[#F3F3F3]">

{/* Title Row */}
<div className="flex items-start md:items-center gap-3">

  {/* Number Circle */}
  <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] flex items-center justify-center rounded-full bg-[#D6FF98] text-[#4A7C0A] text-xs md:text-sm font-semibold">
    {index + 1}
  </div>

  {/* Title */}
  <h3 className="font-bold instrument-sans text-[#0F172A] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-snug md:mt-[4px]">
    {section.title}
  </h3>
</div>

{/* Description */}
{section.description && (
  <p className="text-[#475569] text-[14px] sm:text-[15px] md:text-[16px] host-grotesk font-[400] leading-relaxed">
    {section.description}
  </p>
)}

{/* Sub Sections */}
{section.subSections && (

  <div className="space-y-4">
    {section.subSections.map((sub, i) => (
      <div key={i}>

    <h4 className="text-[#475569] font-extrabold text-[15px] sm:text-[16px] mb-2 host-grotesk">
      {sub.title}
    </h4>

    <ul className="space-y-2 text-[#475569] text-[14px] sm:text-[15px] md:text-[16px] host-grotesk">
      {sub.points.map((point, j) => (
        <li key={j} className="flex gap-2 items-start">
          <span className="mt-[7px] w-[5px] h-[5px] bg-gray-400 rounded-full"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>

  </div>
))}

  </div>
)}

{/* Normal Points */}
{!section.subSections && section.points && (

  <ul className="space-y-2 text-[#475569] text-[14px] sm:text-[15px] md:text-[16px] host-grotesk">
    {section.points.map((point, i) => (
      <li key={i} className="flex gap-2 items-start">
        <span className="mt-[7px] w-[5px] h-[5px] bg-gray-400 rounded-full"></span>
        <span>{point}</span>
      </li>
    ))}
  </ul>
)}

{section.lastsentence && (

  <p className="text-[#475569] text-[14px] sm:text-[15px] md:text-[16px] host-grotesk font-[400] leading-relaxed">
    {section.lastsentence}
  </p>
)}

  </div>
))}

  </div>
</div>

);
}

export default PrivacyPolicyContent;
