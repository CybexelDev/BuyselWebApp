import React, { useState, useEffect } from 'react'
import i1 from "../../../assets/images/propertDetail/i1.png"
import { sendPropertyEnquiry } from '../../../Api/userApi'
import { toast } from 'sonner'
export const DescriptionAndAminities = ({ data }) => {
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false);

const [errors, setErrors] = useState({});



  useEffect(() => {
    setDetail(data)
  }, [data])
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const validate = () => {
  const newErrors = {};

  // NAME
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  } else if (formData.name.length < 2) {
    newErrors.name = "Name must be at least 2 characters";
  }

  // PHONE (Indian format basic)
  if (!formData.phone.trim()) {
    newErrors.phone = "Phone is required";
  } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    newErrors.phone = "Enter a valid 10-digit number";
  }

  // EMAIL
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  // MESSAGE
  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.length < 6) {
    newErrors.message = "Message must be at least 6 characters";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const payload = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    messagebox: formData.message,
    property: data.id,
    property_hash_id:data.id
  };


  const res = await sendPropertyEnquiry(payload);

  if (res) {
    toast.success("Enquiry sent ✅");
  } else {
    toast.error("Failed ❌");
  }
};
  return (
    <>
    <div className='md:px-16 px-3 py-1  md:py-5'>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">

        <div class="md:col-span-8 ">
          {/* description ivden da */}
          <div className='w-full bg-[#efefef] rounded-[23px] px-5 py-6'>
            <p className='text-[#181818] host-grotesk text-[20px] font-[700]'>Property Description</p>
            <p className='text-[#808080] mt-3 text-[16px] font-[500]'><span className='inter'>Address:</span> {data.location}</p>
            <p className='text-[#181818] font-[400] text-[16px] host-grotesk mt-3'>{detail.description}</p>

            <p className='text-[#181818] host-grotesk text-[20px] font-[500] mt-3'>Key Selling Points</p>

            <ul className="space-y-4 mt-2 host-grotesk">
              {detail?.keySellingPoint?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 bg-[#4C4545] rounded-full"></span>
                  <p className="text-[#4C4545] text-sm leading-relaxed">
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>

          </div>
          {/* aminties here daa */}
          <div className=''>
            <p className='host-grotesk text-[24px] font-[700] text-[#181818] mt-6'>Amenities & Features</p>
            <div className='flex flex-wrap gap-2 md:gap-4 host-grotesk mt-4'>
              {detail?.amenities?.map((item, index) => (
                <div key={index} className='bg-[#74c222] rounded-[14px] px-3 md:px-7 py-2 md:py-3 flex gap-1 host-grotesk text-[14px] md:text-[15px] text-[#ffffff] cursor-pointer'>
                  <img className='w-[14px] h-[14px] object-contain mt-1 ' src={item?.icon} />
                  {item?.name}
                </div>
              ))}
            </div>
          </div>
        </div>

       <div className="md:col-span-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#79C41A] p-10 rounded-[30px] max-w-xl mx-auto">

          <h2 className="text-[20px] font-[700] text-black mb-3">
            Interested in this property?
          </h2>

          <p className="text-white text-[16px] mb-6">
            Fill in the form and we’ll arrange a tour so you can explore this for yourself.
          </p>

          {/* NAME */}
          <label className="block text-black font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-3 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none"
          />
          {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name}</p>}

          {/* PHONE */}
          <label className="block text-black font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your mobile number"
            className="w-full mb-3 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none"
          />
          {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}

          {/* EMAIL */}
          <label className="block text-black font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full mb-3 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none"
          />
          {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}

          {/* MESSAGE */}
          <label className="block text-black font-medium mb-2">Message</label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full mb-5 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none resize-none"
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mb-2">{errors.message}</p>}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-[#79C41A] py-4 rounded-2xl text-lg font-medium shadow-lg hover:opacity-90 transition cursor-pointer"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

        </div>
      </form>
    </div>
      </div>
    </div >
    </>
  )
}
