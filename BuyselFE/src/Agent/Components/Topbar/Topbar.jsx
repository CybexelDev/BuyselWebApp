import { LogOut } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getAgentNotifications,
  markNotificationAsRead,
  getUnreadCount,
} from "../../../Api/agentsApi";

function Topbar() {
  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const [notifications, setNotifications] = useState([]);
  const [profile, setProfile] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const {
    image,
    agentName,
    agentId,
    agent_type,
  } = useSelector((state) => state.agent);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ==============================
  // CLOSE DROPDOWNS ON OUTSIDE CLICK
  // ==============================
  useEffect(() => {
    const closeDropdown = (e) => {
      // Close profile if clicked outside profile
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfile(false);
      }

      // Close notification if clicked outside notification area
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  // ==============================
  // GET UNREAD COUNT
  // ==============================
  useEffect(() => {
    const fetchUnread = async () => {
      try {
        const count = await getUnreadCount();
        setUnreadCount(count || 0);
      } catch (error) {
        console.error("Error fetching unread count:", error);
      }
    };

    fetchUnread();
  }, []);

  // ==============================
  // GET NOTIFICATIONS
  // ==============================
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await getAgentNotifications();
        setNotifications(res || []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  // ==============================
  // NOTIFICATION CLICK
  // ==============================
  const handleNotificationClick = async (id) => {
    try {
      let wasUnread = false;

      // Immediately update UI
      setNotifications((prevNotifications) =>
        prevNotifications.map((item) => {
          if (item.id === id && !item.is_read) {
            wasUnread = true;

            return {
              ...item,
              is_read: true,
            };
          }

          return item;
        })
      );

      // Decrease unread count
      if (wasUnread) {
        setUnreadCount((prev) =>
          prev > 0 ? prev - 1 : 0
        );
      }

      // Mark notification as read in backend
      await markNotificationAsRead(id);

      // IMPORTANT:
      // Do NOT close notification here.
      // setNotificationOpen(false); ❌
    } catch (error) {
      console.error(
        "Error marking notification as read:",
        error
      );
    }
  };

  // ==============================
  // LOGOUT
  // ==============================
  const logout = () => {
    dispatch({ type: "AGENT_LOGOUT" });

    localStorage.removeItem("agentId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/loginandsignup");
  };

  return (
    <div className="w-full host-grotesk bg-white shadow-md px-6 py-2.5 flex justify-end items-center rounded-2xl gap-3 sm:gap-6">

      {/* =========================================
          NOTIFICATION SECTION
      ========================================= */}
      <div
        ref={notificationRef}
        className="relative cursor-pointer"
      >

        {/* Notification Button */}
        <div
          onClick={() => {
            setNotificationOpen((prev) => !prev);
            setProfile(false);
          }}
          className="w-9 sm:w-9 h-9 sm:h-9 flex items-center justify-center rounded-full
          text-black bg-[#6ABD117A]
          hover:bg-[#64af137a]
          relative"
        >
          {/* Unread Count */}
          {unreadCount > 0 && (
            <span
              className="absolute -top-1 -right-1
              min-w-[16px] h-[16px] px-[4px]
              bg-red-500 text-white text-[10px]
              font-semibold rounded-full
              flex items-center justify-center"
            >
              {unreadCount > 9
                ? "9+"
                : unreadCount}
            </span>
          )}

          <FaBell className="text-[16px] sm:text-[16px] md:text-[18px]" />
        </div>

        {/* =========================================
            NOTIFICATION DROPDOWN
        ========================================= */}
        <div
          className={`absolute
            left-auto right-0 translate-x-19
            top-15 sm:top-16
            w-[50vw] sm:w-80 md:w-96 max-w-[360px]
            bg-white rounded-2xl
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            border border-gray-100
            transition-all duration-300
            origin-top
            z-50
            ${
              notificationOpen
                ? "max-h-[70vh] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="p-3 sm:p-4">

            {/* Header */}
            <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">
              Notifications
            </p>

            {/* Notification List */}
<div
  className="
    space-y-2
    overflow-y-auto
    pr-1
    max-h-60
    sm:max-h-60
    overscroll-contain
  ">
              {notifications.length === 0 ? (
                <p className="text-center text-xs sm:text-sm text-gray-400 py-4">
                  No notifications
                </p>
              ) : (
                notifications.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={(e) => {
                      // Prevent parent/outside click issues
                      e.stopPropagation();

                      handleNotificationClick(item.id);
                    }}
                  >

                    {/* Notification */}
                    <div
                      className={`p-2.5 sm:p-3 rounded-lg
                      transition cursor-pointer break-words
                      ${
                        item.is_read
                          ? "bg-white"
                          : "bg-gray-100 border-l-4 border-[#6ABD117A]"
                      }
                      hover:bg-gray-200`}
                    >

                      {/* Title */}
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">
                        {item.title}
                      </p>

                      {/* Message */}
                      <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-snug">
                        {item.message}
                      </p>

                      {/* Date */}
                      <p className="text-[10px] text-gray-400 mt-1">
                        {new Date(
                          item.created_at
                        ).toLocaleString()}
                      </p>

                    </div>

                    {/* Divider */}
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

      {/* =========================================
          PROFILE SECTION
      ========================================= */}
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
        transition-all duration-500 origin-top z-50
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