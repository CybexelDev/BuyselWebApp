import React from "react";

function Chatbox({ close }) {
  return (
    <section className="flex justify-center items-center min-h-screen px-3 sm:px-6">
      
      <div
        className="
          w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[469px]
          h-auto xl:h-[449px]
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

        <form className="space-y-[16px] sm:space-y-[19px] relative">

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
          />

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
          />

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
          />

          <textarea
            placeholder="Your need or requirements"
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
