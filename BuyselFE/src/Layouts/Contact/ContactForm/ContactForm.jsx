import React from "react";
import { useState } from "react";
import { sendContact } from "../../../Api/userApi";

function ContactForm() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await sendContact(formData);

    if (res) {
      alert("Message sent ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      alert("Failed ❌");
    }

    setLoading(false);
  };

  return (
    <div
      className="w-full flex justify-center bg-white py-10 sm:py-12 lg:py-14 xl:py-15 
    px-4 sm:pl-6 md:pl-12 lg:pl-16 xl:pl-22"
    >
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2  gap-10 sm:gap-3 lg:gap-10 items-start">
        {/* LEFT – FORM */}
        <div className="bg-[#7ACB2B] text-white rounded-[24px] px-4 sm:px-4 lg:px-8 py-5 sm:py-6 lg:py-7">
          <h2
            className="instrument-sans font-[600] text-[18px] sm:text-[19px] lg:text-[20px]
                leading-[30px] sm:leading-[32px] lg:leading-[34px] mb-1"
          >
            Get in Touch With BuySel
          </h2>
          <p className="host-grotesk text-[16px] leading-[28px] sm:leading-[20px] md:leading-[28px] mb-2 font-[400]">
            We're here to help you with properties, agents, listings and
            support.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}> 
            {/* Name */}
            <div>
              <label className="block host-grotesk text-[16px] font-[500] leading-[135%] mb-2 sm:mb-1 md:mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="Your Name"
                className="w-full inter bg-white text-black rounded-[16px] px-4 py-3 lg:py-3.5 text-[14px] leading-[150%] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#757575] placeholder:italic"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 md:gap-4">
              <div>
                <label className="block host-grotesk text-[16px] font-[500] leading-[135%] mb-2 sm:mb-1 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full inter bg-white text-black rounded-[16px] px-4 py-3 lg:py-3.5 text-[14px] leading-[150%] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#757575] placeholder:italic"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block host-grotesk text-[16px] font-[500] leading-[135%] mb-2 sm:mb-1 md:mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.phone}
              
                  maxLength={10}
                  placeholder="Your Phone number"
                   onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: value });
  }}

                  className="w-full inter bg-white text-black rounded-[16px] px-4 py-3 lg:py-3.5 text-[14px] leading-[150%] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#757575] placeholder:italic truncate"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block host-grotesk text-[16px] font-[500] leading-[135%] mb-2">
                Message
              </label>
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                  value={formData.message}
  onChange={handleChange}
                className="w-full inter bg-white text-black rounded-[16px] px-4 py-4 lg:py-5 text-[14px] leading-[150%] font-[400] outline-none focus:ring-2 focus:ring-gray-300 resize-none placeholder:text-[#757575] placeholder:italic"
              />
            </div>

            {/* Button */}
            <button
              className="
    host-grotesk bg-[#242424] text-white
    w-full sm:w-full lg:w-auto
    px-8 lg:px-15
    py-3
    text-[16px] lg:text-[20px]
    rounded-[13px]
    font-[500]
    hover:bg-black transition
  "
    type="submit"
  disabled={loading}
            >
  {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className=" my-auto space-y-8 sm:space-y-10 xl:space-y-12 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-[113px] flex flex-col">
          {/* Email */}
          <div className="space-y-[7px] max-w-[206px]">
            <h3 className="instrument-sans  font-[600] text-[16px] sm:text-[18px] lg:text-[20px] leading-[135%] text-black">
              Email
            </h3>
            <p className="host-grotesk font-[500] text-[14px] leading-[135%] text-[#5C5C5C]">
              Contact us by email and we will respond shortly
            </p>
            <p className="host-grotesk text-[#84CC16] font-[350] text-[16px] leading-[135%] flex items-center gap-2">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.53516V13.0002C20 13.7654 19.7077 14.5017 19.1827 15.0584C18.6578 15.6152 17.9399 15.9503 17.176 15.9952L17 16.0002H3C2.23479 16.0002 1.49849 15.7078 0.941739 15.1829C0.384993 14.6579 0.0498925 13.9401 0.00500011 13.1762L0 13.0002V3.53516L9.445 9.83216L9.561 9.89816C9.69771 9.96495 9.84785 9.99967 10 9.99967C10.1522 9.99967 10.3023 9.96495 10.439 9.89816L10.555 9.83216L20 3.53516Z"
                  fill="#6ABD11"
                  fill-opacity="0.93"
                />
                <path
                  d="M17.0003 0C18.0803 0 19.0273 0.57 19.5553 1.427L10.0003 7.797L0.445312 1.427C0.696105 1.01982 1.0406 0.6785 1.45008 0.431489C1.85957 0.184479 2.32217 0.0389373 2.79931 0.00699997L3.00031 0H17.0003Z"
                  fill="#6ABD11"
                  fill-opacity="0.93"
                />
              </svg>
              buyselinfo@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="space-y-[7px] max-w-[206px]">
            <h3 className="instrument-sans  font-[600] text-[16px] sm:text-[18px] lg:text-[20px] leading-[135%] text-black">
              Phone
            </h3>
            <p className="host-grotesk font-[500] text-[14px] leading-[135%] text-[#5C5C5C]">
              Call us on Mon–Sat from 9:30am to 6pm
            </p>
            <p className="host-grotesk text-[#84CC16] font-[350] text-[16px] leading-[135%] flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2271 15.2598L16.6871 14.9698C16.3884 14.9347 16.0857 14.9678 15.8017 15.0665C15.5176 15.1652 15.2596 15.327 15.0471 15.5398L13.2071 17.3798C10.3685 15.9357 8.06117 13.6284 6.61711 10.7898L8.46711 8.93977C8.89711 8.50977 9.10711 7.90977 9.03711 7.29977L8.74711 4.77977C8.69063 4.29186 8.45658 3.84179 8.08957 3.51536C7.72257 3.18893 7.24828 3.00897 6.75711 3.00977H5.02711C3.89711 3.00977 2.95711 3.94977 3.02711 5.07977C3.55711 13.6198 10.3871 20.4398 18.9171 20.9698C20.0471 21.0398 20.9871 20.0998 20.9871 18.9698V17.2398C20.9971 16.2298 20.2371 15.3798 19.2271 15.2598Z"
                  fill="#6ABD11"
                  fill-opacity="0.93"
                />
              </svg>
              +91 9061827363
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-[7px] max-w-[206px]">
            <h3 className="instrument-sans  font-[600] text-[16px] sm:text-[18px] lg:text-[20px] leading-[135%] text-black">
              Contact Us
            </h3>
            <p className="host-grotesk font-[500] text-[14px] leading-[135%] text-[#5C5C5C]">
              Chat with us instantly on WhatsApp for quick support.
            </p>
            <p className="host-grotesk text-[#84CC16] font-[350] text-[16px] leading-[135%] flex items-center gap-2">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.53516V13.0002C20 13.7654 19.7077 14.5017 19.1827 15.0584C18.6578 15.6152 17.9399 15.9503 17.176 15.9952L17 16.0002H3C2.23479 16.0002 1.49849 15.7078 0.941739 15.1829C0.384993 14.6579 0.0498925 13.9401 0.00500011 13.1762L0 13.0002V3.53516L9.445 9.83216L9.561 9.89816C9.69771 9.96495 9.84785 9.99967 10 9.99967C10.1522 9.99967 10.3023 9.96495 10.439 9.89816L10.555 9.83216L20 3.53516Z"
                  fill="#6ABD11"
                  fill-opacity="0.93"
                />
                <path
                  d="M17.0003 0C18.0803 0 19.0273 0.57 19.5553 1.427L10.0003 7.797L0.445312 1.427C0.696105 1.01982 1.0406 0.6785 1.45008 0.431489C1.85957 0.184479 2.32217 0.0389373 2.79931 0.00699997L3.00031 0H17.0003Z"
                  fill="#6ABD11"
                  fill-opacity="0.93"
                />
              </svg>
              buysellinfo@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
