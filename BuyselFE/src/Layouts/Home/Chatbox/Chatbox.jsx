import React from "react";
import { useState } from "react";
import { sendEnquiry } from "../../../Api/userApi";
import { toast } from "sonner";
import { ConnectWithAdmin } from "../../../Api/agentsApi";
import enquiryImg from "../../../assets/images/enquiry/q1.png";

function Chatbox({ close, simple = false, msgPlaceholder="Submit Your Requirements on",type = "user", }) {
  const [formData, setFormData] = useState({
  name: "",
  contact: "",
  pincode: "",
  message: "",
});
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.message ) {
    toast.error("Please fill required fields");
    return;
  }

  let res;

if (type === "admin") {
  const data = new FormData();
  data.append("name", formData.name);
  data.append("message", formData.message);

  res = await ConnectWithAdmin(data);
} else {
  res = await sendEnquiry(formData);
}

  if (res) {
    toast.success("Enquiry sent ");

    setFormData({
      name: "",
      contact: "",
      pincode: "",
      message: "",
    });

    close(); // optional
  } else {
    toast.error("Failed ");
  }
};
    return (
    <section className="fixed inset-0 z-50 bg-black/40 overflow-y-auto">
    <div className="min-h-screen flex items-start lg:items-center justify-center p-3 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-5xl bg-white rounded-[24px] shadow-2xl">
        
        {/* Left Side */}
        <div className="p-6 lg:p-10 flex items-center justify-center">
          <div className="w-full h-full border border-[#E5E5E5] rounded-[24px] flex items-center justify-center p-6">
            <img
              src={enquiryImg}
              alt="Property Enquiry"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 lg:p-10">
          <h2 className="text-[24px] font-[600] text-center lg:text-left inter text-[#000]">
            {msgPlaceholder}{" "}
            <span className="text-[#75C222] inter">BuySel</span>
          </h2> 

          <p className="text-gray-500 text-sm mt-2 text-center lg:text-left inter">
            Tell us what you're looking for, and we'll connect you with the
            right property or service.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Name + Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 inter">
              <div>
                <label className="text-sm text-gray-600 mb-2 block text-left">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full h-[48px] border border-[#D6D6D6] rounded-full px-5 outline-none focus:border-[#75C222]"
                />
              </div>

              {!simple && (
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Way to contact you
                  </label>

                  <input
                    type="number"
                    placeholder="Phone"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: e.target.value,
                      })
                    }
                    className="w-full h-[48px] border border-[#D6D6D6] rounded-full px-5 outline-none focus:border-[#75C222]"
                  />
                </div>
              )}
            </div>

            {/* PIN */}
            {!simple && (
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Your PIN Code
                </label>

                <input
                  type="text"
                  placeholder="6-digit PIN"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pincode: e.target.value,
                    })
                  }
                  className="w-full h-[48px] border border-[#D6D6D6] rounded-full px-5 outline-none focus:border-[#75C222]"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block text-left">
                Your need or requirements
              </label>

              <textarea
                placeholder={msgPlaceholder}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full h-[120px] border border-[#D6D6D6] rounded-[24px] p-5 resize-none outline-none focus:border-[#75C222]"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center gap-4 pt-2">
              <button
                type="button"
                onClick={close}
                className="text-gray-500 hover:text-black"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-[#75C222] hover:bg-[#68b01d] text-white px-8 h-[48px] rounded-full font-medium shadow-lg"
              >
                Send →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Chatbox;
