
import React, { useState } from "react";
import msg from "../../../assets/images/icons/i1.png";
import Chatbox from "./Chatbox";

function Chatbutton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className=" w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[65px] xl:h-[65px] rounded-full bg-[#F0F0F0] hover:shadow-xl hover:scale-105 transition-all ease-in-out flex justify-center items-center z-10 cursor-pointer">
    <img src={msg} alt="message" className="w-2/2 h-2/2 sm:w-2/2 sm:h-1/2 md:w-4/5 md:h-4/5 xl:w-5/5 xl:h-5/5" />
    </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center"
          onClick={() => setOpen(false)} // outside click
        >
            
          <div onClick={(e) => e.stopPropagation()}>
            <Chatbox close={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbutton;
