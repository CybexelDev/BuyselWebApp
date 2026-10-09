import React from 'react'
import add from '../../../assets/images/icons/add.png'
import add3 from '../../../assets/images/addP/add2.png?w=800&format=webp'
import add4 from '../../../assets/images/addP/ad1.png?w=800&format=webp'
import { useNavigate } from 'react-router-dom'

const AddPropertyAndAgent = () => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }
  

  return (
    <section className="mt-[70px] md:mt-[100px]">
      <div className="flex flex-col md:flex-row">
        {/* ---------- Property Card ---------- */}
        <div className="w-full md:w-1/2 min-h-fit  bg-[#b0dc81]">
          <div className="flex items-center justify-center h-full px-4 sm:px-8 lg:px-16 py-10 md:py-12 ">
            <div className="w-full max-w-[550px]">
              <div className="w-full">
                <img src={add3} loading="lazy"
                  alt="Add property"
                  className="w-full max-w-[380px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] h-auto mb-5 object-contain"
                />
              </div>

              <h2 className="text-[20px] sm:text-[22px] lg:text-[25px] mb-4 md:mb-5 font-[700] instrument-sans leading-snug">
                Add Your Property &amp; Reach{' '}
                <br className="hidden lg:block" />
                Real Buyers
              </h2>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] mb-6 md:mb-8 font-[400] host-grotesk leading-relaxed">
                List your house, apartment, land, or commercial space in just a few
                simple steps. Your property becomes visible to thousands of verified
                buyers and tenants instantly.
              </p>

              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-5 sm:px-6 py-3 rounded-xl hover:bg-[#6bb436] transition cursor-pointer host-grotesk font-[500] text-[14px] sm:text-[16px]"
                onClick={() => handleNavigate('/addyourproperty')}
              >
                <img src={add} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                Add Property
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Agent Card ---------- */}
        <div className="w-full md:w-1/2 min-h-fit  bg-black">
          <div className="flex items-center justify-center h-full px-4 sm:px-8 lg:px-16 py-10 md:py-12 ">
            <div className="w-full max-w-[550px]">
              <div className="w-full">
                <img
                  src={add4} loading="lazy"
                  alt="Become an agent"
                  className="w-full max-w-[380px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] h-auto mb-5 object-contain"
                />
              </div>

              <h2 className="text-[20px] sm:text-[22px] lg:text-[25px] mb-4 md:mb-5 font-[700] instrument-sans text-white leading-snug">
                Become a BuySel{' '}
                <br className="hidden lg:block" />
                Verified Agent
              </h2>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] mb-6 md:mb-8 font-[400] host-grotesk text-white leading-relaxed">
                Grow your real estate career with BuySel. Get access to genuine
                leads, build credibility with a verified badge, and manage your
                listings all in one place.
              </p>

              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#63b010] text-white px-5 sm:px-6 py-3 rounded-xl hover:bg-[#6bb436] transition cursor-pointer host-grotesk font-[500] text-[14px] sm:text-[16px]"
                onClick={() => handleNavigate('/agent-register')}
              >
                <img src={add} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                Join as an Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddPropertyAndAgent