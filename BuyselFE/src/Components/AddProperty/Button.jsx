
import React from "react";

function Button({ next, back, step, maxStep, handleSubmit }) {

 const handleClick = (e) => {
  if (step === maxStep) {
    handleSubmit(e);  
  } else {
    next();
  }
};

  return (
    <div className="px-4 sm:px-8 mt-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">

        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="w-full sm:w-auto px-10 py-[13px] rounded-[100px] border-[2.5px] border-[#84cc16] cursor-pointer
             text-[#84CC16] inter font-[500] text-[16px] leading-[150%]"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={handleClick}
          className="w-full sm:w-auto px-16 sm:px-28 py-[13px] rounded-[100px] bg-[#84CC16] cursor-pointer
           text-white inter font-[500] text-[16px] leading-[150%]"
        >
          {step === maxStep ? "Submit" : "Continue"}
        </button>

      </div>
    </div>
  );
}

export default Button;