import React, { useState } from "react";
import login from "../../assets/images/icons/login.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({
  gap = "lg:gap-[31px]",
  top = "top-9",
  text = "text-[14px]",
  color = "text-[#676767]",
  padding = "lg:px-[49px]"

}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home ", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Properties", path: "/propertyListing" },
    { name: "Agent", path: "/agents" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // close mobile menu
  };

  const isActive = (path) => {
    return path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);
  };

  const { image, userName, userId, accessToken } = useSelector((state) => state.user);

  return (
    <header className={`absolute ${top} left-0 w-full z-40 px-6 ${padding}`}>
      <div className="flex items-center justify-between py-3">

        {/* DESKTOP MENU */}
        <nav className={`hidden lg:flex ${gap} poppins ${text} font-[500]`}>
          {menuItems.map((item) => (
            <p
              key={item.name}
              onClick={() => handleNavigate(item.path)}
              className={`cursor-pointer transition-all duration-200 ${isActive(item.path)
                  ? "text-[#6fba19] font-semibold"
                  : `${color} hover:text-[#6fba19]`
                }`}
            >
              {item.name}
            </p>
          ))}
        </nav>

        {/* LOGIN BUTTON */}
        <div className="hidden lg:block">
          <button onClick={() => navigate(accessToken ? "/profile" : "/loginandsignup")} className="bg-[#6fba19] hover:bg-[#6BB535] text-white px-6 py-2 transition-all duration-200 shadow-md hover:shadow-lg rounded-[11px] flex items-center gap-2 cursor-pointer">
            {accessToken ?
              <img src={image} alt="Login Icon " className="w-[18px] rounded-full mr-2" />
              :
              <img src={login} alt="Login Icon" className="w-[15px]" />
            }
            <span className="text-[14px] host-grotesk font-[400]">{accessToken ? `${userName}` : "Login"}</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden relative z-50 flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-6 h-[2px] bg-black transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-black transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-black transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/90 backdrop-blur-lg transition-all duration-500 ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-[18px] poppins font-[500]">
          {menuItems.map((item) => (
            <p
              key={item.name}
              onClick={() => handleNavigate(item.path)}
              className={`cursor-pointer transition-all duration-200 ${isActive(item.path)
                  ? "text-[#6fba19] font-semibold"
                  : "text-[#676767] hover:text-[#6fba19]"
                }`}
            >
              {item.name}
            </p>
          ))}

          <button onClick={() => navigate(accessToken ? "/profile" : "/loginandsignup")} className="bg-[#6fba19] hover:bg-[#6BB535] text-white px-8 py-3 transition-all duration-200 shadow-md hover:shadow-lg rounded-[14px] flex items-center gap-2">
            
            {accessToken ?
              <img src={image} alt="Login Icon " className="w-[18px] rounded-full mr-2" />
              :
              <img src={login} alt="Login Icon" className="w-[15px]" />
            }
            <span className="text-[14px] host-grotesk font-[400]">{accessToken ? `${userName}` : "Login"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;