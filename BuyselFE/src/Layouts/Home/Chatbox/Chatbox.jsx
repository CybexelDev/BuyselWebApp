import React from "react";
import { useState } from "react";
import { sendEnquiry } from "../../../Api/userApi";
import { toast } from "sonner";
import { ConnectWithAdmin } from "../../../Api/agentsApi";
function Chatbox({ close, simple = false, msgPlaceholder="Your need or requirements",type = "user", }) {
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
    <section className="flex justify-center items-center  px-3 sm:px-6">
      
      <div
        className="
          w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[469px]
          h-auto xl:h-auto            
          bg-white
          border border-[#83c938]
          rounded-[21px]
          py-[24px] sm:py-[30px] xl:py-[36px]
          px-[16px] sm:px-[24px] xl:px-[30px]
          shadow-md
        "
      >
        <h4 className="instrument-sans font-[600] text-[14px] sm:text-[15px] xl:text-[16px] mb-[15px] sm:mb-[19px] text-black">
          Submit this form...
        </h4>

        <form className="space-y-[16px] sm:space-y-[19px] relative" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full h-[34px] sm:h-[37px]
              bg-[#F2F2F2]
              rounded-[7px]
              px-3 sm:px-4
              border border-[#e6dbdb]
              text-[13px] sm:text-[14px]
              text-[#393838]
              outline-none
            "
            value={formData.name}
            onChange={(e)=>{
              setFormData({...formData,name:e.target.value})
            }}
          />
          
            {!simple && (
          <input
            type="text"
            placeholder="Way to contact you"
            className="
              w-full h-[34px] sm:h-[37px]
              bg-[#F2F2F2]
              rounded-[7px]
              px-3 sm:px-4
              border border-[#e6dbdb]
              text-[13px] sm:text-[14px]
              text-[#393838]
              outline-none
            "
            value={formData.contact}
            onChange={(e)=>{
              setFormData({...formData,contact:e.target.value})
            }}
          />
            )}


             {!simple && (
          <input
            type="text"
            placeholder="Your PIN Code"
            className="
              w-full h-[34px] sm:h-[37px]
              bg-[#F2F2F2]
              rounded-[7px]
              px-3 sm:px-4
              border border-[#e6dbdb]
              text-[13px] sm:text-[14px]
              text-[#393838]
              outline-none
            "
                      value={formData.pincode}
                      onChange={(e)=>{
                        setFormData({...formData,pincode:e.target.value})
                      }}

          />
             )}

          <textarea
            placeholder={msgPlaceholder}
            className="
              w-full
              min-h-[90px] sm:min-h-[115px]
              bg-[#efefef]
              rounded-[7px]
              px-3 sm:px-4
              py-2 sm:py-3
              border border-[#afadad]
              text-[13px] sm:text-[14px]
              text-[#393838]
              outline-none
              resize-none
            "
            value={formData.message}
            onChange={(e)=>{
              setFormData({...formData,message:e.target.value})
            }}
          ></textarea>

           <div className="flex justify-end gap-2 -mt-[10px]">
            <button
              type="button"
              onClick={close}
              className="
                host-grotesk
                w-[65px] sm:w-[74px]
                h-[30px] sm:h-[33px]
                bg-[#cbc6c6]
                rounded-[9px]
                text-[13px] sm:text-[14px]
                font-[500]
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="
                host-grotesk
                px-4 sm:px-5
                py-[4px]
                bg-[#75c222]
                text-black
                rounded-[9px]
                text-[13px] sm:text-[14px]
                font-[500]
              "
            >
              Send
            </button>

          </div>
        </form>
      </div>
    </section>
  );
}

export default Chatbox;
