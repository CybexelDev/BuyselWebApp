import React, { useState, useEffect } from "react";
import msg from "../../../assets/images/icons/i1.png";
import Chatbox from "./Chatbox";

function Chatbutton() {
  const [open, setOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setShowTip(false);
    setSeen(true);
  };

  return (
    <>
      {/* relative wrapper keeps everything anchored to the button's original spot */}
      <div className="relative inline-flex z-10">
        {/* Tooltip (static, no bounce) */}
        

        {/* Button: same sizes and place as your original */}
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Open chat"
          className={`relative w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[65px] xl:h-[65px]
            rounded-full bg-[#F0F0F0] flex justify-center items-center cursor-pointer
            hover:shadow-xl hover:scale-105 transition-all ease-in-out
            ${!seen ? " shadow-lg" : ""}`}
        >
          {/* soft pulsing glow, stays in place */}
          {!seen && (
            <span className="absolute inset-0 rounded-full bg-[#9bcb78] animate-ping" />
          )}

          <img
            src={msg}
            alt="message"
            className="relative w-4/5 h-4/5 object-contain"
          />

          
        </button>
      </div>

      {/* Chat modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center"
          onClick={() => setOpen(false)}
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