import React, { useState } from "react";
import { motion } from "framer-motion";
import {LogOut,} from "lucide-react";
import logo from "../../../assets/images/logo/logo.png";
import { FaLandmarkDome } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const navItems = [
  {
    id: "dashboard",
    icon: RiDashboardFill,
    label: "Dashboard",
    path: "/agent/dashboard",
  },
  {
    id: "property",
    icon: FaLandmarkDome,
    label: "Property Listing",
    path: "/agent/property",
  },
  {
    id: "plans",
    icon: FaClipboardList,
    label: "Plans",
    path: "/agent/plans",
  },
  {
    id: "orders",
    icon: FaShoppingBag,
    label: "Orders",
    path: "/agent/orders",
  },
  {
    id: "profile",
    icon: FaUserCog,
    label: "Profile",
    path: "/agent/profile",
  },
  {
    id: "inbox",
    icon: FaEnvelope,
    label: "Inbox",
    path: "/agent/inbox",
  },
  {
    id: "enquiry",
    icon: SiGooglemessages,
    label: "Property Enquiry",
    path: "/agent/enquiry",
  },
  {
    id: "userenquiry",
    icon: RiAccountPinBoxFill,
    label: "User Enquiry",
    path: "/agent/user-enquiry",
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

        const logout = ()=>{
      dispatch({ type: "AGENT_LOGOUT" });
      navigate('/loginandsignup')
    }
    
const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
const agent = JSON.parse(persistRoot?.agent || "{}");

const isBasicAgent = agent?.agent_type === "basic";const filteredNavItems = isBasicAgent
  ? navItems.filter((item) =>
      ["profile", "inbox", "userenquiry"].includes(item.id)
    )
  : navItems;
  return (
    <div className="relative  ">
      <nav className="fixed left-2 top-2 backdrop-blur-md hidden h-[calc(100dvh-2rem)] w-64 flex-col border-r border-white/10 bg-white rounded-[40px] lg:flex z-50 shadow-2xl  mx-2 my-4">
        <div className="flex h-28 items-center px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
          </motion.div>
        </div>

        <div className="flex-1 px-4 space-y-3 py-4">
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`group relative flex w-full items-center cursor-pointer rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-[#6ABD11] bg-[#6ABD117A] "
                  : "text-[#6ABD11] hover:text-black hover:bg-black/10"
              }`}
            >
              <item.icon
                size={20}
                className={`shrink-0 transition-transform group-hover:scale-110 ${
                  location.pathname === item.path
                    ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    : ""
                }`}
              />{" "}
              <span className="ml-4 text-sm font-semibold tracking-wide uppercase">
                {item.label}
              </span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="active-highlight"
                  className="absolute right-0 h-8 w-1.5 rounded-l-full bg-white shadow-[0_0_15px_#fff]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="px-7 py-2 ">
          <button
          onClick={logout}
           className="flex w-full items-center gap-3 cursor-pointer rounded-2xl p-3 text-black/60 font-bold transition-all hover:bg-red-500 hover:text-white group">
            <LogOut
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xs uppercase tracking-tighter">
              Logout
            </span>
          </button>
        </div>
      </nav>


<nav
  className={`fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center rounded-2xl sm:rounded-3xl border border-white/20 bg-[#7AC704]/95 p-2 backdrop-blur-2xl lg:hidden z-50 shadow-2xl ${
    isBasicAgent ? "gap-6 px-6" : "gap-2"
  }`}
>
  {filteredNavItems.map((item) => {
    const isActive = location.pathname === item.path;

    return (  
      <button
        key={item.id}
        onClick={() => navigate(item.path)}
        className="relative flex items-center justify-center w-8 h-9 sm:w-12 sm:h-12 md:w-15 md:h-13"
      >
        {/* ICON */}
        <item.icon
  className={`z-10 transition-all duration-300 ${
    isActive ? "text-white scale-110" : "text-white/50"
  } w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`}
/>

        {/* FLOATING ACTIVE PILL */}
        {isActive && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        )}
      </button>
    );
  })}
</nav>
      <div className="hidden lg:block w-64 h-screen shrink-0"></div>
    </div>
  );
};

export default Sidebar;