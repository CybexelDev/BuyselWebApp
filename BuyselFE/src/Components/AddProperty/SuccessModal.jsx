import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen}) => {

  if (!isOpen) return null;
   const navigate=useNavigate()
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[40px] shadow-xl max-w-2xl w-full p-8 text-center ">

        <div className="mb-6">
          <h2 className="text-[36px] font-[650] text-black lexend  leading-tight">
            Property Posted <br />
            <span className="text-[#82CD28]">Successfully!</span>
          </h2>

          <p className="text-gray-400 mt-2 font-medium inter text-[16px] ">
            Your property is now live on Buysel.in
          </p>
        </div>

        <div className="relative flex justify-center mb-8">
          <div className="w-24 h-24 bg-[#E2F9C6] rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-[#82CD28] rounded-full flex items-center justify-center shadow-lg shadow-[#82CD28]/40">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-blue-300 -z-10 transform translate-y-6"></div>
        </div>

        <div className="bg-[#F0FFE0] rounded-[30px] p-6 mb-8">
          <p className="text-gray-700 font-medium leading-tight inter text-[16px]">
            Your Listing will be reviewed by our team within 24 hours.
            <br />
            You'll receive a notification once it's approved
          </p>
        </div>

        <div className="flex flex-col gap-4 px-8">

          <button
            onClick={()=>navigate("/")}
            className="w-full py-4 bg-[#82CD28] text-white rounded-full font-bold text-[16px] hover:bg-[#74b924] inter"
          >
            Go to Home
          </button>

         
        </div>

      </div>
    </div>
  );
};

export default SuccessModal;