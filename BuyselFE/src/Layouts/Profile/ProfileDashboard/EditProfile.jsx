import React, { useState } from "react";

const EditProfile = () => {
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
  };

  return (
    <div className="w-full max-w-xl bg-[#f0f0f0] rounded-2xl p-6 sm:p-8 shadow-[0px_4px_16.6px_0px_rgba(179,179,179,0.25)]">

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Fullname"
            onChange={handleChange}
            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>

        <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>

        <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            Mobile Number
          </label>
            <input
    type="tel"
    inputMode="numeric"
    pattern="[0-9]*"
    name="phone"
    placeholder="Phone"
    maxLength={10}

    onBeforeInput={(e) => {
      if (!/^\d$/.test(e.data)) {
        e.preventDefault();
      }
    }}

    onPaste={(e) => {
      if (!/^\d+$/.test(e.clipboardData.getData("text"))) {
        e.preventDefault();
      }
    }}
            onChange={handleChange}
            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>

        <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            Alternate Phone
          </label>
            <input
    type="text"
    inputMode="numeric"
    pattern="[0-9]*"
    name="phone"
    placeholder="Phone"
    maxLength={10}

    /* 🚫 block letters & symbols while typing */
    onBeforeInput={(e) => {
      if (!/^\d$/.test(e.data)) {
        e.preventDefault();
      }
    }}

    /* 🚫 block invalid paste */
    onPaste={(e) => {
      if (!/^\d+$/.test(e.clipboardData.getData("text"))) {
        e.preventDefault();
      }
    }}

    onChange={handleChange}

            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>
         <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            Location
          </label>
          <input
            type="text"
            name="Location"
            placeholder="City ,State"
            onChange={handleChange}
            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>

               <button
          type="submit"
          className="instrument-sans mt-4 bg-[#2b2e28] text-white px-6 py-3 rounded-[9px] text-[16px] leading-[15px] font-[500] hover:bg-black transition cursor-pointer"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;