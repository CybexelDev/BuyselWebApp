
import React, { useState } from "react";
import Chatbox from "../../../Layouts/Home/Chatbox/Chatbox";

function GetInTouch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="bg-[#6ABD11ED] cursor-pointer text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-[#64ba07ed] transition-all duration-300 inline-block text-sm sm:text-base"
              onClick={() => setOpen(true)}>
    Get in Touch
  </button>

      {open && (
        <div
  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
  onClick={() => setOpen(false)}
>
            
          <div onClick={(e) => e.stopPropagation()}>
            <Chatbox close={() => setOpen(false)} simple={true} msgPlaceholder="Write your message to our team..."/>
          </div>
        </div>
      )}
    </>
  );
}

export default GetInTouch;
