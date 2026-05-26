import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import property from "../../../assets/images/profile/property.svg";
import apartment from "../../../assets/images/icons/apartment.svg";
import Topbar from "../../Components/Topbar/Topbar";
import Linegraph from "../../Components/LineGraph/Linegraph";
import { motion } from "framer-motion";
import DashboardCard from "../../../Components/DashboardCrad/DashboardCard";
import { getDashboard } from "../../../Api/agentsApi";
import { IoIosMail } from "react-icons/io";


function AgentDashboard() {
  
  const [dashboard, setDashboard] = useState({
    total_properties: 0,
    total_enquiries: 0,
    remaining_listings: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDashboard();
        if (res) {
          setDashboard(res);
        }
      } catch (err) {
        console.error("Error fetching dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalProperties = dashboard?.total_properties ?? 0;
  const totalEnquiries = dashboard?.total_enquiries ?? 0;
  const remainingListings = dashboard?.remaining_listings ?? 0;


  const data = [
    {
      title: "Total Properties",
      value: totalProperties,
      icon: (
        <img
          src={apartment}
          alt="apartment"
          className="w-[20px] h-[20px]"
        />
      ),
      badge: "+2%",
    },
    {
      title: "Total Enquiries",
      value: totalEnquiries,
      icon: <IoIosMail size={24} />,
      badge: "+5%",
    },
    {
      title: "Remaining Listings",
      value: remainingListings,
      icon: (
        <img
          src={property}
          alt="property"
          className="w-5 h-5 xl:w-[27px] xl:h-[27px]"
        />
      ),
      badge: "limit",
    },
  ];

  return (
<div className="flex min-h-screen bg-gray-100 overflow-x-hidden">  
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 py-3 px-6 md:py-5 md:px-10 lg:py-6 lg:px-12 mb-22 sm:mb-0">
        <Topbar />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em] mb-2 mt-6">
            <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
            Data Overview
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight instrument-sans mb-6">
            Data <span className="text-[#6ABD11]">Overview</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-3 gap-6 ">
          {data.map((item, index) => (
            <DashboardCard
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              badge={item.badge}
            />
          ))}
        </div>

        <Linegraph data={dashboard?.monthly_enquiries || []} />
      </div>
    </div>
  );
}

export default AgentDashboard;
