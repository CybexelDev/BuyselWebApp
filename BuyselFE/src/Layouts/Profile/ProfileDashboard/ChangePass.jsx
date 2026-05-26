import React, { useState } from "react";
import { changePassword } from "../../../Api/userApi";
import { toast } from "sonner";
const ChangePassword = ({ setMode }) => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.newPassword !== form.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    const payload = {
      old_password: form.currentPassword,
      new_password: form.newPassword,
      confirm_password: form.confirmPassword,
    };

    const res = await changePassword(payload);

    console.log("SUCCESS:", res);
    toast.success("Password changed successfully ");

    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setMode(""); 

  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

  return (
    <div className="w-full max-w-xl bg-[#f0f0f0] rounded-2xl p-6 sm:p-8 shadow-[0px_4px_16.6px_0px_rgba(179,179,179,0.25)]">


      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            placeholder="Enter current password"
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>

        <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={form.newPassword}
            onChange={handleChange}
            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>

        <div>
          <label className="block host-grotesk text-[16px] leading-[14px] mb-1.5 text-black">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            onChange={handleChange}
            value={form.confirmPassword}
            className="w-full instrument-sans bg-white rounded-[10px] px-4 py-3 text-[14px] leading-[14px] font-[400] outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-[#847b7b]"
          />
        </div>


        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="instrument-sans bg-[#2b2e28] text-white px-6 py-3 rounded-[9px] text-[16px] leading-[15px] font-[500] hover:bg-black transition"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => setMode("")}
            className="instrument-sans bg-[#de1111] text-white px-6 py-3 rounded-[9px] text-[16px] leading-[15px] font-[500]   hover:bg-[#cf3838] transition"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default ChangePassword;