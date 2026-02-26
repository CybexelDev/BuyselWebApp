import React, { useState, useEffect } from 'react'
import i1 from "../../../assets/images/propertDetail/i1.png"

export const DescriptionAndAminities = ({ data }) => {
  const [detail, setDetail] = useState([])

  console.log(detail.keySellingPoint, "llll");


  useEffect(() => {
    setDetail(data)
  }, [data])

  return (
    <>
    <div className='md:px-16 px-3 py-1  md:py-5'>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">

        <div class="md:col-span-8 ">
          {/* description ivden da */}
          <div className='w-full bg-[#efefef] rounded-[23px] px-5 py-6'>
            <p className='text-[#181818] host-grotesk text-[20px] font-[700]'>Property Description</p>
            <p className='text-[#808080] mt-3 text-[16px] font-[500]'><span className='inter'>Address:</span> {detail.address}</p>
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

        <div class="md:col-span-4">
          <div className="bg-[#79C41A] p-10 rounded-[30px] max-w-xl mx-auto">
            <h2 className="text-[20px] font-[700] text-black mb-3 host-grotesk">
              Interested in this property?
            </h2>
            <p className="text-white text-[16px] font-[500]  mb-6 leading-relaxed host-grotesk">
              Fill in the form and we’ll arrange a tour so you can explore this for yourself.
            </p>
            <label className="block text-black font-medium mb-2 host-grotesk">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-3 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none placeholder-gray-500"
            />
            <label className="block text-black font-medium mb-2 host-grotesk">Phone</label>
            <input
              type="tel"
              placeholder="Your mobile number"
              className="w-full mb-3 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none placeholder-gray-500"
            />
            <label className="block text-black font-medium mb-2 host-grotesk">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mb-3 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none placeholder-gray-500"
            />
            <label className="block text-black font-medium mb-2 host-grotesk">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full mb-5 px-6 py-3.5 bg-white rounded-2xl shadow-md outline-none placeholder-gray-500 resize-none"
            ></textarea>
            <button className="w-full host-grotesk bg-black text-[#79C41A] py-4 rounded-2xl text-lg font-medium shadow-lg hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}
