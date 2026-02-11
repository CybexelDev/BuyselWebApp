import React, { useState } from "react";
import login from "../../assets/images/icons/login.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-9 left-0 w-full z-40 px-6 lg:px-13">
      <div className="flex items-center justify-between py-3">

        {/* LEFT MENU – Desktop */}
        <nav className="hidden lg:flex gap-6 poppins text-[#676767] text-[14px] font-[500]">
          {["About Us", "Properties", "Agent", "Blogs", "Contact"].map(
            (item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-[#6fba19] transition-all duration-200"
              >
                {item}
              </p>
            )
          )}
        </nav>

        {/* RIGHT BUTTON – Desktop */}
        <div className="hidden lg:block">
          <button className="bg-[#6fba19] hover:bg-[#6BB535] text-white px-6 py-2 transition-all duration-200 shadow-md hover:shadow-lg rounded-[11px] cursor-pointer flex items-center gap-2">
            <img src={login} alt="Login Icon" className="w-[15px]" />
            <span className="text-[14px] host-grotesk font-[400]">Login</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden relative z-50 flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/90 backdrop-blur-lg transition-all duration-500 ${
          open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-[18px] poppins text-[#676767] font-[500]">
          {["About Us", "Properties", "Agent", "Blogs", "Contact"].map(
            (item) => (
              <p
                key={item}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-[#6fba19] transition-all duration-200"
              >
                {item}
              </p>
            )
          )}

          <button className="bg-[#6fba19] hover:bg-[#6BB535] text-white px-8 py-3 transition-all duration-200 shadow-md hover:shadow-lg rounded-[14px] cursor-pointer flex items-center gap-2">
            <img src={login} alt="Login Icon" className="w-[16px]" />
            <span className="host-grotesk font-[400]">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
