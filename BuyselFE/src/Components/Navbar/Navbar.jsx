import React, { useState } from "react";
import login from "../../assets/images/icons/login.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({
  gap = "lg:gap-[31px]",
  top = "top-9",
  text = "text-[14px]",
  color = "text-[#676767]",
  padding="lg:px-[49px]",
  right="right-0"
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
          <div className="flex items-center gap-2">
            {accessToken ? <div onClick={() => navigate("/wishlist")} className="p-2 rounded-full bg-white shadow-md w-fit cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <path fill="#e11a1a" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
              </svg>
            </div> : null}
            
            <button onClick={() => navigate(accessToken ? "/profile" : "/loginandsignup")} className="bg-[#6fba19] hover:bg-[#6BB535] text-white px-6 py-2 transition-all duration-200 shadow-md hover:shadow-lg rounded-[11px] flex items-center gap-2 cursor-pointer">
              {accessToken ?
                <img src={image} alt="profile" className="w-[18px] rounded-full mr-2" />
                :
                <img src={login} alt="profile" className="w-[15px]" />
              }
              <span className="text-[14px] host-grotesk font-[400]">{accessToken ? `${userName}` : "Login"}</span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`lg:hidden relative z-50 flex flex-col gap-1 ${right}`}
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

           {accessToken ? <div onClick={() => navigate("/wishlist")} className="p-2 rounded-full bg-white shadow-md w-fit cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <path fill="#e11a1a" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
              </svg>
            </div> : null}

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