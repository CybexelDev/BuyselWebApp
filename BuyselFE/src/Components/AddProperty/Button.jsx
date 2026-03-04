import React from "react";

function Button({ next, back,step }) {
  return (
    <div className="px-8">
      <div className="flex justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="px-[45px] py-[13px] rounded-[100px] border-[2.5px] border-[#84cc16] cursor-pointer
                    text-[#84CC16] inter font-[500] text-[16px] leading-[150%]"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 4 && (
          <button
            type="button"
            onClick={next}
            className="px-28 py-[13px] rounded-[100px] bg-[#84CC16] cursor-pointer
                      text-white inter font-[500] text-[16px] leading-[150%]"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Button;
