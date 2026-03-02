import React, { useState } from "react";

const faqs = [
  {
    question: "What is Buysel.in",
    answer:
      "Buysel.in is a modern platform that connects buyers and sellers efficiently across multiple property types."
  },
  {
    question: "How does Buysel.in work?",
    answer:
      "Users can browse, list, and connect with property owners or buyers seamlessly."
  },
  {
    question: "What services does Buysel.in offer?",
    answer:
      "We offer listing services for residential, commercial, industrial and land properties."
  },
  {
    question: "Is Buysel.in free to use?",
    answer:
      "Yes, browsing is free. Premium listing options may be available."
  }
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <section className="bg-white py-16 md:py-20">
  <div className="max-w-screen-xl mx-auto 
                  grid 
                  grid-cols-1 
                  xl:grid-cols-[350px_auto] 
                  gap-10 
                  px-4">

    {/* Left Side */}
    <div className="xl:ml-1 text-center xl:text-left">
      <h2 className="text-[26px] sm:text-[30px] md:text-[32px] lg:text-[34px] 
                     font-medium instrument-sans leading-tight">
        Frequently Asked <br />
        <span className="text-[#4C5047ED]">Questions</span>
      </h2>

      <p className="text-black max-w-sm mx-auto xl:mx-0 
                    host-grotesk text-[14px] mt-3 xl:mt-2">
        Find answers to the most common questions about our platform and services.
      </p>
    </div>

    {/* Right Side */}
    <div className="space-y-3 
                    mt-6 lg:mt-0 
                    lg:ml-20">

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#EEEEEE1C] 
                     rounded-[14px] 
                     border border-[#ACAAAA]
                     w-full 
                     lg:w-[799px]
                     min-h-[65px] lg:min-h-[73px]
                     transition-all"
        >

          {/* Question */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center 
                       px-4 sm:px-6 
                       py-4 text-left"
          >
            <span className="font-medium 
                             text-[16px] sm:text-[18px] lg:text-[20px] 
                             text-[#2F2D2D] host-grotesk">
              {faq.question}
            </span>

            <div className="w-[32px] h-[32px] 
                            lg:w-[39px] lg:h-[39px] 
                            flex items-center justify-center 
                            rounded-full bg-[#6ABD11ED] cursor-pointer">

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

          {/* Answer */}
          <div
            className={`px-4 sm:px-6 transition-all duration-300 overflow-hidden ${
              activeIndex === index
                ? "max-h-40 py-4"
                : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-sm sm:text-base host-grotesk">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  );
}

export default FAQSection;
