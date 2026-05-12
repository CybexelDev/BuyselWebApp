import React, { use, useEffect, useState } from "react";
import StarRating from "../../../Components/StarRating/StarRating";
import location from '../../../assets/images/icons/location.png'
import { getAgents } from "../../../Api/userApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import elite from '../../../assets/images/agentDetail/elite.png'
import premium from '../../../assets/images/agentDetail/crown.png'

export default function AgentTabs({ searchedData, query, locationDats }) {
    const [searchParams] = useSearchParams()
    const type = searchParams.get("type");
    const [activeTab, setActiveTab] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [agents, setAgents] = useState([]);
    const navigate = useNavigate();

    const itemsPerPage = 12;

    const filteredAgents =
        activeTab === "All"
            ? agents
            : agents.filter((agent) => agent.agent_type === activeTab);

    const totalPages = Math.max(1, Math.ceil(filteredAgents.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAgents = filteredAgents.slice(startIndex, endIndex);
    useEffect(() => {
        if (type) {
            setActiveTab(type);
        }
    }, [type]);
    useEffect(() => {
        if (query.length > 0) {
            setAgents(searchedData);
        }
        else {
            const getAgent = async () => {
                const data = await getAgents({ category: activeTab });
                if (data) {
                    setAgents(data);
                }
            };
            getAgent();
        }

    }, [activeTab, searchedData]);

    useEffect(() => {
        if (locationDats.length > 0) {
            setAgents(locationDats);
        }
    }, [locationDats]);


    return (
        <div className="bg-white min-h-screen p-2 sm:p-10">

            <div className="flex gap-1 sm:gap-4 mb-8">
                {["All", "Agent", "Premium Agent", "Elite Agent"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab === "All" ? "All" : tab === "Agent" ? "basic" : tab === "Premium Agent" ? "premium" : "elite");
                            setCurrentPage(1);
                        }}
                        className={`px-3 sm:px-5 py-2 rounded-[9px] text-sm host-grotesk font-medium transition-all duration-300 cursor-pointer
              ${activeTab === (tab === "All" ? "All" : tab === "Agent" ? "basic" : tab === "Premium Agent" ? "premium" : "elite")
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
                        key={agent?.id}
                        onClick={() => navigate(`/agent-detail/${agent.id}`)}
                        className="bg-white rounded-[23px] shadow-lg p-5 flex items-center gap-4 hover:shadow-2xl transition cursor-pointer"
                    >

                        {/* <div className="w-[100px] h-[100px] rounded-full inter overflow-hidden flex items-center justify-center bg-black text-[#75c222] relative z-10">
                            {agent?.profile_image ? (
                                <img
                                    src={agent?.profile_image}
                                    alt={agent?.username}
                                    className="w-full h-full object-cover z-10"
                                />
                            ) : (
                                agent?.username?.charAt(0)
                            )}
                            <div className=" absolute bottom-[-7px] bg-[#fff] z-90 px-2 py-1 rounded-xl"> hh </div>
                        </div> */}
                        <div className="relative w-[100px] h-[100px] flex items-center justify-center">
                            <div className="w-full h-full rounded-full overflow-hidden bg-black text-[#75c222]">
                                {agent?.profile_image ? (
                                    <img
                                        src={agent?.profile_image}
                                        alt={agent?.username}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    agent?.username?.charAt(0)
                                )}
                            </div>
                            {agent?.agent_type === "basic" ? null : <div className="absolute bottom-[-10px] bg-white z-20 px-2 py-1 rounded-xl shadow">
                                {agent?.agent_type === "elite" && <img src={elite} alt="Elite Agent" className="w-5 h-5" />}
                                {agent?.agent_type === "premium" && <img src={premium} alt="Premium Agent" className="w-5 h-5" />}
                            </div>}
                        </div>

                        <div>
                            <h3 className="instrument-sans text-[18px] font-[500]">{agent?.username}</h3>
                            <StarRating rating={agent?.avg_rating} />
                            <p className="text-[#4B4040] text-sm flex items-center gap-1 mt-1 text-[15px] host-grotesk font-[500]">
                                <img src={location} className="w-3.5" /> {agent?.city}
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
