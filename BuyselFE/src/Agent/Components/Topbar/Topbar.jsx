import { LogOut } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAgentNotifications } from "../../../Api/agentsApi";
import { markNotificationAsRead,getUnreadCount } from "../../../Api/agentsApi";
function Topbar() {
  const details={
    name:"Mubaris",
    agentId:"AI029",
    plan:"Premium Agent"
  }
  const profileRef = useRef(null)
  const [notifications, setNotifications] = useState([]);
  const[profile,setProfile]=useState(false)
  const { image, agentName, agentId, agent_type } = useSelector((state) => state.agent);
  const notificationRef = useRef(null)
const [notificationOpen, setNotificationOpen] = useState(false)
   
    const navigate = useNavigate()
    const dispatch = useDispatch();
const [unreadCount, setUnreadCount] = useState(0);   useEffect(() => {
     const closeDropdown = (e) => {
    if (!profileRef.current?.contains(e.target)) {
      setProfile(false);
    }
    if (!notificationRef.current?.contains(e.target)) {
      setNotificationOpen(false);
    }
  };

  document.addEventListener("mousedown", closeDropdown);

  return () => {
    document.removeEventListener("mousedown", closeDropdown);
  };
  }, []);
  useEffect(() => {
  const fetchUnread = async () => {
    const count = await getUnreadCount();
    setUnreadCount(count);
  };

  fetchUnread();
}, []);
const handleNotificationClick = async (id) => {
  let wasUnread = false;

  setNotifications((prev) =>
    prev.map((item) => {
      if (item.id === id && !item.is_read) {
        wasUnread = true;
        return { ...item, is_read: true };
      }
      return item;
    })
  );

  if (wasUnread) {
    setUnreadCount((prev) => (prev > 0 ? prev - 1 : 0));
  }

  await markNotificationAsRead(id);
};
  useEffect(() => {
  const fetchNotifications = async () => {
    try {
      const res = await getAgentNotifications();
      console.log("notif", res); 
      setNotifications(res || []);
    } catch (err) {
      console.log(err);
    }
  };

  fetchNotifications();
}, []);


      const logout = ()=>{
      dispatch({ type: "AGENT_LOGOUT" });
      navigate('/loginandsignup')
    }
    

  return (
    <div className="w-full host-grotesk bg-white shadow-md px-6 py-2.5 flex justify-end items-center rounded-2xl gap-3 sm:gap-6">

      {/* Notification Icon */}
      <div className="relative cursor-pointer"   onClick={() => {
  setNotificationOpen(!notificationOpen);
  setProfile(false);
}}

  ref={notificationRef}>
        <div className="w-9 sm:w-9 h-9 sm:h-9 flex items-center justify-center rounded-full 
                        text-black bg-[#6ABD117A] hover:bg-[#64af137a]  relative">
                {unreadCount > 0 && (
  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[4px] 
  bg-red-500 text-white text-[10px] font-semibold 
  rounded-full flex items-center justify-center">
    {unreadCount > 9 ? "9+" : unreadCount}
  </span>
)}
         <FaBell className="text-[16px] sm:text-[16px] md:text-[18px]" />  
               </div>
<div
  className={`absolute 
  left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0
top-15 sm:top-16  w-[50vw] sm:w-80 md:w-96 max-w-[360px]
  bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 
  transition-all duration-300 origin-top z-50 ${
    notificationOpen
      ? "max-h-[70vh] opacity-100"
      : "max-h-0 opacity-0 pointer-events-none"
  }`}
>
  <div className="p-3 sm:p-4">
    
    {/* Header */}
    <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">
      Notifications
    </p>

    {/* List */}
    <div className="space-y-2 max-h-[55vh] sm:max-h-60 overflow-y-auto pr-1">
      {notifications.length === 0 ? (
        <p className="text-center text-xs sm:text-sm text-gray-400 py-4">
          No notifications
        </p>
      ) : (
       notifications.map((item, index) => (
  <div key={item.id}   onClick={() => handleNotificationClick(item.id)}
>
    
    <div
      className={`p-2.5 sm:p-3 rounded-lg transition cursor-pointer break-words ${
        item.is_read
          ? "bg-white"
          : "bg-gray-100 border-l-4 border-[#6ABD117A]"
      } hover:bg-gray-200`}
    >
      <p className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">
        {item.title}
      </p>

      <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-snug">
        {item.message}
      </p>

      <p className="text-[10px] text-gray-400 mt-1">
        {new Date(item.created_at).toLocaleString()}
      </p>
    </div>

    {/* 🔥 Divider (except last item) */}
    {index !== notifications.length - 1 && (
      <div className="h-[1px] bg-gray-200 mx-1 sm:mx-2" />
    )}
    
  </div>
))
      )}
    </div>
  </div>
</div>
       
      </div>

      {/* Profile Section */}
      <div className="flex items-center "
      onClick={()=>setProfile(!profile)}
      ref={profileRef}>
        <img
          src={image}
          alt="Profile"
          className="w-9 sm:w-11 h-9 sm:h-11 rounded-full object-cover border-2 border-[#6ABD11] cursor-pointer"
        />

              <div
        className={`absolute right-5 sm:right-10 top-20 sm:top-25 w-50 sm:w-72 bg-white rounded-2xl border border-gray-100 
        shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden
        transition-all duration-500 origin-top
        ${
          profile
            ? "max-h-50 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >

        {/* Profile Info */}
        <div className="p-5 border-gray-100">
          <p className="text-sm font-semibold text-gray-900">
            Hi, {agentName || "User Name"}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Agent ID: {agentId || "N/A"}
          </p>

          <div className="mt-1 space-y-1 text-xs text-gray-500">
            <p>
              Status:
              <span className="ml-1 font-semibold text-[#6ABD11]">
                Active
              </span>
            </p>

            <p>
              Plan:
              <span className="ml-1 font-semibold text-gray-800">
                {agent_type || "N/A"}
              </span>
            </p>
          </div>
        </div>

        <div className="border border-gray-100 mx-2 sm:mx-3"/>

        {/* Logout */}
        <div className="p-3">
          <button onClick={logout} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white
          bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
          transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      </div>

    </div>
  );
}

export default Topbar;