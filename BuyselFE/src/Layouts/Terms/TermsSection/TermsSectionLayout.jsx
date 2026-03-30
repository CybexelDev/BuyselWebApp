import React from "react";

const termsData = [
  {
    title: "Account Registration",
        description: "To access certain features, users must create an account.",

    points: [
      "You must provide accurate and complete information.",
      "You are responsible for maintaining account confidentiality.",
      "Users must be 18 years or older.",
      "One user is allowed only one account .",
      "Any suspicious or false account may be suspended.",
    ],
  },
  {
    title: "Property Listings",
            description: "Buysel.in allows users to list properties for sale, rent, or lease.",
    points: [
      "You must have legal rights to list the property.",
      "Listings must include accurate details (price, location, images, ownership status).",
      "Fake, misleading, or duplicate listings are strictly prohibited.",
      "We reserve the right to edit, verify, or remove listings without notice.",
    ],
  },
  {
    title: "User Responsibilities",
                description: "Users agree to use the platform responsibly.",

    points: [
      "Do not post false or misleading information.",
      "Do not impersonate any individual or entity..",
      "Avoid illegal or fraudulent activities.",
      "Respect other users and maintain professional communication.",
    ],
  },
  {
    title: "Payments & Subscription",
    description:"Certain features may require payment (premium listings, ads, etc.).",
    points: [
      "All payments are processed securely.",
      "Fees are non-refundable unless stated otherwise.",
      "Subscription plans may auto-renew unless cancelled.",
      "Buysel.in is not responsible for transaction disputes between users.",
    ],
  },
  {
    title: "Property Transactions Disclaimer",
        description:"Buysel.in acts only as a platform/facilitator.",

    points: [
      "We do not guarantee property authenticity, ownership, or legal status.",
      "Users must conduct their own verification and due diligence.",
      "Users must verify details independently.",
      "We are not liable for disputes between buyers, sellers, or agents.",
    ],
  },
  {
    title: "Broker & Agent Listings",
            description:"Agents and brokers must follow applicable laws.",

    points: [
      "Must provide valid registration details (if applicable).",
      "No misleading commissions or hidden charges.",
      "Any violation may lead to permanent suspension.",
    ],
  },
  {
    title: "Reviews & Ratings",
                description:"Users may provide feedback on properties or services.",

    points: [
      "Reviews must be genuine and based on real experiences.",
      "Fake or manipulated reviews are strictly prohibited.",
      "We reserve the right to remove inappropriate content.",
    ],
  },
  {
    title: "Prohibited Activities",
                    description:"The following activities are strictly prohibited:",

    points: [
      "Posting fake or illegal property listings",
      "Fraud, scams, or misleading advertisements",
      "Spamming or unsolicited promotions",
      "Attempting to hack or misuse the platform",
      "Scraping or copying platform data"
    ],
  },
  {
    title: "Limitation of Liability",
                        description:"Buysel.in is not liable for:",

    points: [
      "Any financial loss from property transactions",
      "Incorrect listing information",
      "Service interruptions or technical issues",
      "Third-party actions or disputes"

    ],
    lastsentence:"Use the platform at your own risk."
  },
    {
    title: "Termination",
                        description:"We reserve the right to suspend or terminate accounts:",

    points: [
      "Any financial losIf Terms are violateds from property transactions",
      "For fraudulent or suspicious activities",
      "Without prior notice if required",

    ],
    lastsentence:"Upon termination, access to services will be revoked immediately."
  },
    {
    title: "Changes to Terms",
                        description:"We may update these Terms at any time.",

    points: [
      "Users will be notified of major changes.",
      "Continued use of the platform means acceptance of updated terms.",

    ],
  },
  {
      title: "Governing Law",
                        description:"These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of local courts.",
  }

];
function TermsContent() {
return ( <div className="bg-[#F4F4F4] py-6 md:py-10 px-4 md:px-10"> <div className="bg-white w-full mx-auto space-y-6 md:space-y-8 p-6 md:p-13 rounded-[24px] md:rounded-[40px]">
{termsData.map((section, index) => ( <div key={index} className="space-y-3 pb-6 border-b border-[#F3F3F3]">

        {/* Title Row */}
        <div className="flex items-start md:items-center gap-3">
          
          {/* Number Circle */}
          <div className="min-w-[26px] min-h-[26px] md:w-[28px] md:h-[28px] flex items-center justify-center rounded-full bg-[#D6FF98] text-[#4A7C0A] text-xs md:text-sm font-semibold">
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

        {/* Points */}
        {section.points && (
          <ul className="space-y-2 text-[#475569] text-[14px] sm:text-[15px] md:text-[16px] host-grotesk">
            {section?.points?.map((point, i) => (
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

export default TermsContent;
