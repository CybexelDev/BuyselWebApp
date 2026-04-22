import React, { useState } from "react";

const faqs = [
  {
    question: "What is Buysel.in",
    answer:
      "Buysel.in is a platform where users can discover and connect with local businesses and service providers easily in their area."
  },
  {
    question: "How does Buysel.in work?",
    answer:
      "Users can browse listings, explore services, and directly connect with property owners, agents, or service providers."
  },
  {
    question: "What services does Buysel.in offer?",
    answer:
      "Buysel.in offers services for buying, selling, and listing properties including residential, commercial, industrial, and land."
  },
  {
    question: "Is Buysel.in free to use?",
    answer:
      "Yes, browsing and basic usage are free. Some premium features may require payment."
  },
  {
    question: "How can I register my Property?",
    answer:
      "You can register your property by signing up and using the 'List Your Property' option."
  },
  {
    question: "Can I find properties near me?",
    answer:
      "Yes, you can search properties based on your location using filters."
  },
  {
    question: "How do I contact a agent?",
    answer:
      "You can contact agents via call, chat, or enquiry form."
  },
  {
    question: "Is my information safe on BuySel.in?",
    answer:
      "Yes, your data is securely handled and protected."
  }
];

function FAQPageSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-26">
      
      {/* MAIN WRAPPER */}
      <div className="w-full mx-auto 
        grid grid-cols-1 
        xl:grid-cols-[350px_auto] 
        gap-8 md:gap-12 xl:gap-25
        px-4 sm:px-6 md:px-10 xl:px-25">

        {/* LEFT SIDE */}
        <div className="xl:ml-1 text-center xl:text-left">

          <div className="inline-block bg-[#B8F47A] text-[#2C5000] text-[14px] manrope font-bold px-4 sm:px-5 py-2 rounded-full mb-4">
            SUPPORT CENTER
          </div>

          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight instrument-sans">
            Frequently Asked <br />
            <span className="text-[#9E9E9E]">Questions</span>
          </h2>

          <p className="text-black max-w-sm mx-auto xl:mx-0 text-[13px] sm:text-[14px] mt-3 host-grotesk">
            Find answers to the most common questions about our platform and services.
          </p>

          <div className="bg-[#EFEFEF] rounded-2xl p-4 sm:p-5 mt-6 max-w-sm mx-auto xl:mx-0 text-left">
            <p className="text-[13px] sm:text-[14px] font-bold instrument-sans">
              Still need help?
            </p>

            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-2 host-grotesk" >
              Our support team is available 24/7 to assist with your business needs.
            </p>

            <button className="text-[#3C6A00] font-bold text-[14px] sm:text-[16px] mt-4 flex items-center gap-1 instrument-sans">
              Contact Support →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-3 mt-6 lg:mt-0 lg:ml-20 w-full">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#EEEEEE1C] 
                rounded-[14px] 
                border border-[#ACAAAA]
                w-full 
                xl:w-[799px]
                min-h-[60px] sm:min-h-[65px] lg:min-h-[73px]"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left host-grotesk"
              >
                <span className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium">
                  {faq.question}
                </span>

                <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[39px] lg:h-[39px] flex items-center justify-center rounded-full bg-[#6ABD11ED]">
                 <svg
                viewBox="0 0 10 16"
                className={`w-3 h-4 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
              >
                <path
                  d="M0.690792 0.0720854C0.458843 0.175174 0.180504 0.484439 0.113497 0.716388C-0.00505491 1.11328 0.067107 1.56171 0.299056 1.82459C0.345446 1.87613 1.90208 3.22144 3.75252 4.80384C5.5978 6.39141 7.1132 7.70063 7.10805 7.72125C7.10805 7.74186 5.56172 9.07686 3.67005 10.6953C-0.0720625 13.8962 9.95133e-05 13.8189 9.95133e-05 14.355C9.95133e-05 14.7106 0.195968 15.0972 0.474306 15.2879C0.732027 15.4683 1.25778 15.5199 1.55158 15.3962C1.65467 15.3549 3.53088 13.788 5.72666 11.9118C10.1079 8.16453 9.99968 8.27277 9.99968 7.71094C9.99968 7.16972 10.1182 7.28827 5.82459 3.59771C3.65458 1.73181 1.78868 0.164865 1.67013 0.103012C1.42787 -0.0206947 0.938204 -0.0361576 0.690792 0.0720854Z"
                  fill="white"
                />
              </svg>
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 host-grotesk ${
                  activeIndex === index ? "max-h-40 py-3 sm:py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-[13px] sm:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

          {/* CTA BOX */}
          <div className="bg-[#5E8E0E] rounded-[20px] 
            px-4 sm:px-6 
            py-5 sm:py-6 
            mt-6 
            flex flex-col sm:flex-row 
            items-start sm:items-center 
            justify-between gap-4">

            <div>
              <h3 className="text-white text-[16px] sm:text-[20px] lg:text-[30px] font-semibold instrument-sans">
                List Your Property now
              </h3>

              <p className="text-[#D6E7B5] text-[13px] sm:text-[14px] mt-1 max-w-[342px] host-grotesk">
                Join thousands of local resident reaching new customers on BuySel.in
              </p>
            </div>

            <button className="bg-white text-[#3C6A00] 
              px-4 sm:px-5 
              py-2 sm:py-3 
              rounded-full 
              text-[13px] sm:text-[16px] lg:text-[18px] 
              font-semibold 
              w-full sm:w-auto
              instrument-sans">
              List Your Property
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQPageSection;