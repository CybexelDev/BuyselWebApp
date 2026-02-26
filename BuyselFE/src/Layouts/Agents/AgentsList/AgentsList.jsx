import React, { useState } from "react";
import StarRating from "../../../Components/StarRating/StarRating";
import location from '../../../assets/images/icons/location.png'

const agents = [
    { id: 1, name: "Raja Real Estates", type: "Agent", location: "Ernakulam", rating: 4.5 },
    { id: 2, name: "Menon Real Estates", type: "Premium Agent", location: "Trissur", rating: 3.5 },
    { id: 3, name: "Arun Real Estates", type: "Elite Agent", image: "https://randomuser.me/api/portraits/men/32.jpg", location: "Palakkad", rating: 5 },
    { id: 4, name: "Menon Real Estates", type: "Agent", location: "Ernakulam", rating: 4 },
    { id: 5, name: "Raja Real Estates", type: "Agent", location: "Ernakulam", rating: 4.5 },
    { id: 6, name: "Menon Real Estates", type: "Premium Agent", location: "Trissur", rating: 3.5 },
    { id: 7, name: "Arun Real Estates", type: "Elite Agent", location: "Palakkad", rating: 5 },
    { id: 8, name: "Menon Real Estates", type: "Agent", location: "Ernakulam", rating: 4 },
     { id: 9, name: "Raja Real Estates", type: "Agent", location: "Ernakulam", rating: 4.5 },
    { id: 10, name: "Menon Real Estates", type: "Premium Agent", location: "Trissur", rating: 3.5 },
    { id: 11, name: "Arun Real Estates", type: "Elite Agent", image: "https://randomuser.me/api/portraits/men/32.jpg", location: "Palakkad", rating: 5 },
    { id: 12, name: "Menon Real Estates", type: "Agent", location: "Ernakulam", rating: 4 },
    { id: 13, name: "Raja Real Estates", type: "Agent", image: "https://randomuser.me/api/portraits/men/32.jpg", location: "Ernakulam", rating: 4.5 },
    { id: 14, name: "Menon Real Estates", type: "Premium Agent", location: "Trissur", rating: 3.5 },
    { id: 15, name: "Arun Real Estates", type: "Elite Agent", location: "Palakkad", rating: 5 },
    { id: 16, name: "Menon Real Estates", type: "Agent", location: "Ernakulam", rating: 4 },
];

export default function AgentTabs() {
    const [activeTab, setActiveTab] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 12;

    const filteredAgents =
        activeTab === "All"
            ? agents
            : agents.filter((agent) => agent.type === activeTab);

    // Pagination Logic
    const totalPages = Math.max(1, Math.ceil(filteredAgents.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAgents = filteredAgents.slice(startIndex, endIndex);

    return (
        <div className="bg-white min-h-screen p-2 sm:p-10">

            <div className="flex gap-1 sm:gap-4 mb-8">
                {["All", "Agent", "Premium Agent", "Elite Agent"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setCurrentPage(1);
                        }}
                        className={`px-3 sm:px-5 py-2 rounded-[9px] text-sm host-grotesk font-medium transition-all duration-300 cursor-pointer
              ${activeTab === tab
                                ? "bg-black text-[#75c222] shadow-md"
                                : "text-black hover:bg-gray-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentAgents.map((agent) => (
                    <div
                        key={agent.id}
                        className="bg-white rounded-[23px] shadow-lg p-5 flex items-center gap-4 hover:shadow-2xl transition cursor-pointer"
                    >

                        <div className="w-[100px] h-[100px] rounded-full inter overflow-hidden flex items-center justify-center bg-black text-[#75c222] text-[36px]">
                            {agent.image ? (
                                <img
                                    src={agent.image}
                                    alt={agent.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                agent.name.charAt(0)
                            )}
                        </div>

                        <div>
                            <h3 className="instrument-sans text-[18px] font-[500]">{agent.name}</h3>
                            <StarRating rating={agent.rating} />
                            <p className="text-[#4B4040] text-sm flex items-center gap-1 mt-1 text-[15px] host-grotesk font-[500]">
                                <img src={location} className="w-3.5" /> {agent.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-6 mt-12">

                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-6 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 cursor-pointer 
                   text-black font-medium transition-all duration-300 
                   hover:bg-black hover:text-[#75c222] hover:shadow-[0_0_15px_rgba(117,194,34,0.6)]
                   disabled:opacity-30 disabled:hover:shadow-none"
                >
                    ← Prev
                </button>
                <div className="px-6 py-2 rounded-full bg-black text-[#75c222] font-semibold cursor-pointer 
                    shadow-[0_0_20px_rgba(117,194,34,0.6)]">
                    {currentPage} / {totalPages}
                </div>
                <button
                    onClick={() =>
                        setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                        )
                    }
                    disabled={currentPage === totalPages}
                    className="px-6 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 cursor-pointer
                   text-black font-medium transition-all duration-300 
                   hover:bg-black hover:text-[#75c222] hover:shadow-[0_0_15px_rgba(117,194,34,0.6)]
                   disabled:opacity-30 disabled:hover:shadow-none"
                >
                    Next →
                </button>

            </div>
        </div>
    );
}
