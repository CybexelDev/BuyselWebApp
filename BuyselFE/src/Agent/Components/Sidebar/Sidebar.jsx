// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {LogOut,} from "lucide-react";
// import logo from "../../../assets/images/logo/logo.png";
// import { FaLandmarkDome } from "react-icons/fa6";
// import { FaClipboardList } from "react-icons/fa";
// import { RiDashboardFill } from "react-icons/ri";
// import { RiAccountPinBoxFill } from "react-icons/ri";
// import { FaEnvelope } from "react-icons/fa";
// import { FaUserCog } from "react-icons/fa";
// import { FaShoppingBag } from "react-icons/fa";
// import { SiGooglemessages } from "react-icons/si";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";


// const navItems = [
//   {
//     id: "dashboard",
//     icon: RiDashboardFill,
//     label: "Dashboard",
//     path: "/agent/dashboard",
//   },
//   {
//     id: "property",
//     icon: FaLandmarkDome,
//     label: "Property Listing",
//     path: "/agent/property",
//   },
//   {
//     id: "plans",
//     icon: FaClipboardList,
//     label: "Plans",
//     path: "/agent/plans",
//   },
//   {
//     id: "orders",
//     icon: FaShoppingBag,
//     label: "Orders",
//     path: "/agent/orders",
//   },
//   {
//     id: "profile",
//     icon: FaUserCog,
//     label: "Profile",
//     path: "/agent/profile",
//   },
//   {
//     id: "inbox",
//     icon: FaEnvelope,
//     label: "Inbox",
//     path: "/agent/inbox",
//   },
//   {
//     id: "enquiry",
//     icon: SiGooglemessages,
//     label: "Property Enquiry",
//     path: "/agent/enquiry",
//   },
//   {
//     id: "userenquiry",
//     icon: RiAccountPinBoxFill,
//     label: "User Enquiry",
//     path: "/agent/user-enquiry",
//   },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("dashboard");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch()

//         const logout = ()=>{
//       dispatch({ type: "AGENT_LOGOUT" });
//       navigate('/loginandsignup')
//     }
    
// const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
// const agent = JSON.parse(persistRoot?.agent || "{}");

// const isBasicAgent = agent?.agent_type === "basic";const filteredNavItems = isBasicAgent
//   ? navItems.filter((item) =>
//       ["profile", "inbox", "userenquiry"].includes(item.id)
//     )
//   : navItems;
//   return (
//     <div className="relative  ">
//       <nav className="fixed left-2 top-2 backdrop-blur-md hidden h-[calc(100dvh-2rem)] w-64 flex-col border-r border-white/10 bg-white rounded-[40px] lg:flex z-50 shadow-2xl  mx-2 my-4">
//         <div className="flex h-28 items-center px-12">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="relative"
//           >
//             <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
//           </motion.div>
//         </div>

//         <div className="flex-1 px-4 space-y-3 py-4">
//           {filteredNavItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => navigate(item.path)}
//               className={`group relative flex w-full items-center cursor-pointer rounded-2xl px-4 py-3.5 transition-all duration-300 ${
//                 location.pathname === item.path
//                   ? "text-[#6ABD11] bg-[#6ABD117A] "
//                   : "text-black hover:text-black hover:bg-black/10"
//               }`}
//             >
//               <item.icon
//                 size={20}
//                 className={`shrink-0 transition-transform group-hover:scale-110 ${
//                   location.pathname === item.path
//                     ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
//                     : ""
//                 }`}
//               />{" "}
//               <span className="ml-4 text-sm font-semibold tracking-wide uppercase">
//                 {item.label}
//               </span>
//               {location.pathname === item.path && (
//                 <motion.div
//                   layoutId="active-highlight"
//                   className="absolute right-0 h-8 w-1.5 rounded-l-full bg-white shadow-[0_0_15px_#fff]"
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         <div className="px-7 py-2 ">
//           <button
//           onClick={logout}
//            className="flex w-full items-center gap-3 cursor-pointer rounded-2xl p-3 text-black/60 font-bold transition-all hover:bg-red-500 hover:text-white group">
//             <LogOut
//               size={20}
//               className="group-hover:-translate-x-1 transition-transform"
//             />
//             <span className="text-xs uppercase tracking-tighter">
//               Logout
//             </span>
//           </button>
//         </div>
//       </nav>


// <nav
//   className={`fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center rounded-2xl sm:rounded-3xl border border-white/20 bg-[#7AC704]/95 p-2 backdrop-blur-2xl lg:hidden z-50 shadow-2xl ${
//     isBasicAgent ? "gap-6 px-6" : "gap-2"
//   }`}
// >
//   {filteredNavItems.map((item) => {
//     const isActive = location.pathname === item.path;

//     return (  
//       <button
//         key={item.id}
//         onClick={() => navigate(item.path)}
//         className="relative flex items-center justify-center w-8 h-9 sm:w-12 sm:h-12 md:w-15 md:h-13"
//       >
//         {/* ICON */}
//         <item.icon
//   className={`z-10 transition-all duration-300 ${
//     isActive ? "text-white scale-110" : "text-white/50"
//   } w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`}
// />

//         {/* FLOATING ACTIVE PILL */}
//         {isActive && (
//           <motion.div
//             layoutId="nav-pill"
//             className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 30,
//             }}
//           />
//         )}
//       </button>
//     );
//   })}
// </nav>
//       <div className="hidden lg:block w-64 h-screen shrink-0"></div>
//     </div>
//   );
// };

// export default Sidebar;







import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LogOut,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import logo from "../../../assets/images/logo/logo.png";

import { FaLandmarkDome } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

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
  const dispatch = useDispatch();

  // =========================================
  // LOGOUT
  // =========================================

  const logout = () => {
    dispatch({ type: "AGENT_LOGOUT" });

    localStorage.removeItem("agentId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/loginandsignup");
  };

  // =========================================
  // GET AGENT FROM PERSISTED REDUX
  // =========================================

  let agent = {};

  try {
    const persistRoot = JSON.parse(
      localStorage.getItem("persist:root")
    );

    agent = JSON.parse(
      persistRoot?.agent || "{}"
    );
  } catch (error) {
    agent = {};
  }

  const isBasicAgent =
    agent?.agent_type === "basic";

  // =========================================
  // FILTER BASIC AGENT MENU
  // =========================================

  const filteredNavItems = isBasicAgent
    ? navItems.filter((item) =>
        [
          "profile",
          "inbox",
          "userenquiry",
        ].includes(item.id)
      )
    : navItems;

  return (
    <div className="relative">

      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}

      <nav
        className="
          fixed
          left-3
          top-3
          hidden
          lg:flex
          h-[calc(100dvh-1.5rem)]
          w-64
          flex-col
          overflow-hidden
          rounded-[38px]
          border
          border-white/70
          bg-[#F8FAF5]
          shadow-[0_25px_70px_-25px_rgba(30,70,10,0.30)]
          z-50
          mx-1
          my-1
        "
      >

        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-50
            bg-[linear-gradient(rgba(106,189,17,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(106,189,17,0.07)_1px,transparent_1px)]
            bg-[size:28px_28px]
          "
        />

        {/* =================================================
            GREEN GLOW
        ================================================= */}

        <div
          className="
            absolute
            -top-20
            -left-20
            w-48
            h-48
            rounded-full
            bg-[#6ABD11]/20
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-20
            -right-24
            w-52
            h-52
            rounded-full
            bg-[#6ABD11]/10
            blur-3xl
            pointer-events-none
          "
        />

        {/* =================================================
            LOGO AREA
        ================================================= */}

        <div className="flex h-24 items-center px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-24 w-auto object-contain"
            />
          </motion.div>
        </div>


        <div
          className="
            relative
            z-10
            flex-1
            px-4
            py-2
            space-y-1
           
          "
        >

          

          {filteredNavItems.map((item) => {

            const isActive =
              location.pathname === item.path;

            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{
                  x: 3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => {
                  setActive(item.id);
                  navigate(item.path);
                }}
                className={`
                  group
                  relative
                  flex
                  w-full
                  items-center
                  cursor-pointer
                  rounded-2xl
                  px-3
                  py-[10px]
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-gradient-to-r
                        from-[#6ABD11]
                        via-[#76D019]
                        to-[#9BE34C]
                        text-white
                        shadow-[0_12px_25px_-28px_rgba(106,189,17,0.9)]
                      `
                      : `
                        text-gray-700
                        hover:bg-white/90
                        hover:text-[#5DAA0D]
                        hover:shadow-[0_8px_20px_-15px_rgba(0,0,0,0.25)]
                      `
                  }
                `}
              >

                {/* Active Glow */}

                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-glow"
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      bg-[#6ABD11]/20
                      blur-xl
                      -z-10
                    "
                  />
                )}

                {/* Icon Box */}

                <div
                  className={`
                    relative
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-white/20
                          shadow-inner
                        `
                        : `
                          bg-[#6ABD11]/8
                          group-hover:bg-[#6ABD11]/15
                        `
                    }
                  `}
                >

                  <Icon
                    size={17}
                    className={`
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-white"
                          : "text-[#5D6B55] group-hover:text-[#6ABD11]"
                      }
                    `}
                  />

                </div>

                {/* Label */}

                <span
                  className={`
                    ml-3
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-wide
                    transition-all
                    duration-300
                    host-grotesk

                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 group-hover:text-[#5DAA0D]"
                    }
                  `}
                >
                  {item.label}
                </span>

                {/* Active Indicator */}

                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="
                      absolute
                      right-2
                      top-1/2
                      -translate-y-1/2
                      h-5
                      w-1
                      rounded-full
                      bg-white
                      shadow-[0_0_12px_rgba(255,255,255,0.8)]
                    "
                  />
                )}

                {/* Arrow */}

                <ArrowUpRight
                  size={13}
                  className={`
                    ml-auto
                    opacity-0
                    -translate-x-1
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:translate-x-0

                    ${
                      isActive
                        ? "text-white"
                        : "text-[#6ABD11]"
                    }
                  `}
                />

              </motion.button>
            );
          })}

        </div>

        {/* =================================================
            BOTTOM SECTION
        ================================================= */}

        <div className="relative z-10 px-4 pb-4">

          {/* Small upgrade/info card */}

          {/* Logout */}

          <button
            onClick={logout}
            className="
              group
              flex
              w-full
              items-center
              gap-3
              cursor-pointer
              rounded-2xl
              border
              border-transparent
              px-3
              py-2
              text-gray-500
              transition-all
              duration-300
              hover:border-red-100
              hover:bg-red-50
              hover:text-red-500
            "
          >

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-gray-100
                transition-all
                duration-300
                group-hover:bg-red-100
              "
            >

              <LogOut
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

            </div>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
              "
            >
              Logout
            </span>

          </button>

        </div>

        {/* =================================================
            BOTTOM DECORATIVE LINE
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-8
            right-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#6ABD11]/30
            to-transparent
          "
        />

      </nav>

      {/* =====================================================
          DESKTOP SPACER
      ===================================================== */}

      <div
        className="
          hidden
          lg:block
          w-64
          h-screen
          shrink-0
        "
      />

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
      ===================================================== */}

      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center rounded-2xl sm:rounded-3xl border border-white/20 bg-[#7AC704]/95 p-2 backdrop-blur-2xl lg:hidden z-50 shadow-2xl ${
          isBasicAgent
            ? "gap-1 px-3 sm:gap-3 sm:px-4"
            : "gap-1 px-2 sm:gap-2 sm:px-3"
        }`}
      >
        {filteredNavItems.map((item) => {
          const isActive =
            location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="
                relative
                flex
                shrink-0
                items-center
                justify-center
                w-9
                h-9
                sm:w-11
                sm:h-11
                md:w-12
                md:h-12
              "
            >
              <item.icon
                className={`z-10 transition-all duration-300 ${
                  isActive
                    ? "text-white scale-110"
                    : "text-white/50"
                } w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5`}
              />

              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-white/20
                    backdrop-blur-md
                    shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                  "
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

    </div>
  );
};

export default Sidebar;

