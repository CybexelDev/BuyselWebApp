import React, { useState } from "react";
import login from "../../assets/images/icons/login.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import add from '../../assets/images/nav/add.png'

const Navbar = ({
  gap = "lg:gap-[31px]",
  top = "top-9",
  text = "text-[14px]",
  color = "text-[#676767]",
  padding = "lg:px-[49px]",
  right = "right-0"
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home ", path: "/" },
    // { name: "About Us", path: "/about" },
    { name: "Properties", path: "/propertyListing" },
    { name: "Agent", path: "/agents" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path) => {
    navigate(path); 
    setOpen(false); 
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

        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/addyourproperty')} className="bg-[#ffffff] hover:bg-[#adec80] text-[#6fba19] px-4 py-2 transition-all duration-200 shadow-md hover:shadow-lg rounded-[11px] flex items-center gap-2 cursor-pointer">
              <img src={add} alt="add" className="w-[20px]" />
            </button>
            {accessToken ? <div onClick={() => navigate("/wishlist")} className="p-2 rounded-full bg-white shadow-md w-fit cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#6fba19" d="M12 4.595a5.9 5.9 0 0 0-3.996-1.558a5.94 5.94 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.94 5.94 0 0 0-4.209-1.754A5.9 5.9 0 0 0 12 4.595m6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584c.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a1 1 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002" />
              </svg>
            </div> : null}

            <button onClick={() => navigate(accessToken ? "/profile" : "/loginandsignup")} className="bg-[#6fba19] hover:bg-[#6BB535] text-white px-6 py-2 transition-all duration-200 shadow-md hover:shadow-lg rounded-[11px] flex items-center gap-2 cursor-pointer">
              {accessToken ?
                <img src={image} alt="profile" className="w-[18px] rounded-full mr-2" />
                :
                <img src={login} alt="profile" className="w-[15px]" />
              }
              <span className="text-[14px] host-grotesk font-[400]">{ accessToken ? userName.length > 10 ? `${userName.slice(0, 7)}...` : userName: "Login"}</span>
            </button>
          </div>
        </div>

        <button
          className={`lg:hidden relative z-50 flex flex-col gap-1 cursor-pointer ${right}`}
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
            <button onClick={() => navigate('/addyourproperty')} className="bg-[#ffffff] hover:bg-[#adec80] text-[#6fba19] px-4 py-2 transition-all duration-200 shadow-md hover:shadow-lg rounded-[11px] flex items-center gap-2 cursor-pointer">
              <img src={add} alt="add" className="w-[20px]" />
            </button>
          {accessToken ? <div onClick={() => navigate("/wishlist")} className="p-2 rounded-full bg-white shadow-md w-fit cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#6fba19" d="M12 4.595a5.9 5.9 0 0 0-3.996-1.558a5.94 5.94 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.94 5.94 0 0 0-4.209-1.754A5.9 5.9 0 0 0 12 4.595m6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584c.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a1 1 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002" />
              </svg>
          </div> : null}

          <button onClick={() => navigate(accessToken ? "/profile" : "/loginandsignup")} className="bg-[#6fba19] cursor-pointer hover:bg-[#6BB535] text-white px-8 py-3 transition-all duration-200 shadow-md hover:shadow-lg rounded-[14px] flex items-center gap-2">

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