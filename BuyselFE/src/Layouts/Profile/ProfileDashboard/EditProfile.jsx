import React, { useState } from "react";
import { updateProfile } from "../../../Api/userApi";
import { useEffect } from "react";

const EditProfile = ({ users, setMode, setParentProfileData }) => {

const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  mobile: "",
  alternate_mobile: "",
  city: "",
});

useEffect(() => {
  if (users) {
    setFormData({
      full_name: users.full_name || "",
      email: users.email || "",
      mobile: users.mobile || "",
      alternate_mobile: users.alternate_mobile || "",
      city: users.city || "",
    });
  }
}, [users]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = await updateProfile(formData);

setParentProfileData(formData); 
      setMode("");
    } catch (err) {
      console.log(err);
    }
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
            name="full_name"
            placeholder="Fullname"
            onChange={handleChange}
            value={formData.full_name}
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
            value={formData.email}
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
    name="mobile"
    placeholder="Phone"
    maxLength={10}
    value={formData.mobile}


    /* block letters & symbols while typing */
    onBeforeInput={(e) => {
      if (!/^\d$/.test(e.data)) {
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
    name="alternate_mobile"
    placeholder="Phone"
    maxLength={10}

    /* block letters & symbols while typing */
    onBeforeInput={(e) => {
      if (!/^\d$/.test(e.data)) {
        e.preventDefault();
      }
    }}
    value={formData.alternate_mobile}
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
            name="city"
            value={formData.city}
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