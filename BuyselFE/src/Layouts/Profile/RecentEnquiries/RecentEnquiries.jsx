import React from "react";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import i1 from "../../../assets/images/profile/i1.png"
import i2 from "../../../assets/images/profile/i2.png"
import i3 from "../../../assets/images/profile/i3.png"
import i4 from "../../../assets/images/profile/i4.png"
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getRecentEnquiries } from "../../../Api/userApi";

export default function RecentEnquiries() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [enquiries, setEnquiries] = useState([]);

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("id");
        navigate('/')
    }

    useEffect(() => {
        const fetchEnquiries = async () => {
            const res = await getRecentEnquiries();

            if (res) {
                setEnquiries(res.data || []);
            }
        };

        fetchEnquiries();
    }, []);
    return (
        <div className="w-full  p-4 md:px-8">
            <h2 className="text-[20px] instrument-sans font-[600] text-[#000] mb-4">
                Recent Enquiries
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 bg-[#F8F8F8] rounded-[19px] p-5 shadow-sm">

                    <div className="overflow-x-auto">

                        <div className="min-w-[700px]">

                            <div className="bg-[#7AC70C] text-[#F7F7F7] host-grotesk rounded-lg px-4 py-3 grid grid-cols-[2fr_1fr_1fr] text-[16px] font-[500]">
                                <span>Property Name</span>
                                <span>Agent/Owner</span>
                                <span className="text-right">Date</span>                             </div>

                            {/* Row 1 */}
                            {enquiries.slice(0, 4).map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-[2fr_1fr_1fr] px-4 py-4 text-[#595959] text-[15px] font-[500] instrument-sans items-center"
                                >
                                    <span className="truncate">
                                        {item.property_name || "N/A"}
                                    </span>

                                    <span>
                                        {item.agent_name || item.owner_name}
                                    </span>

                                    <span className="text-right">
                                        {item.date}
                                    </span>
                                </div>
                            ))}
                            {enquiries.length === 0 && (
                                <p className="text-center text-gray-400 py-6">
                                    No enquiries found
                                </p>
                            )}

                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="bg-[#f6f6f6] rounded-[18px] p-5 shadow-md h-fit h-full">
                    <h3 className="text-[18px] font-[500] host-grotesk text-[#000] mb-4">
                        Settings & Security
                    </h3>

                    <div className="space-y-3">
                        <button className="text-left flex gap-2 bg-[#FFFFFF] rounded-[9px] host-grotesk shadow-md hover:bg-[#e9e9e9] px-5 py-2 rounded-lg text-[16px] text-[#7B7B7B] cursor-pointer">
                            <img src={i1} className=" w-[19px] h-[19px] mt-[3px]" /> Need help?
                        </button>
                        <button className="text-left flex gap-2 bg-[#FFFFFF] rounded-[9px] host-grotesk shadow-md hover:bg-[#e9e9e9] px-5 py-2 rounded-lg text-[16px] text-[#7B7B7B] cursor-pointer">
                            <img src={i2} className=" w-[19px] h-[19px] mt-[3px]" /> Contact Support
                        </button>
                        <button className="text-left flex gap-2 bg-[#FFFFFF] rounded-[9px] host-grotesk shadow-md hover:bg-[#e9e9e9] px-5 py-2 rounded-lg text-[16px] text-[#7B7B7B] cursor-pointer">
                            <img src={i3} className=" w-[19px] h-[19px] mt-[3px]" /> Help Center
                        </button>
                    </div>


                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={logout} className="mt-6  bg-[#f6f6f6] flex gap-2 hover:bg-[#fe7f7f] shadow-lg text-black hover:text-[#fff] px-8 py-2.5 rounded-[10px] text-[16px] font-[500] instrument-sans cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="mt-1">
                        <path fill="none" stroke="#e11a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M4.393 4C4 4.617 4 5.413 4 7.004v9.994c0 1.591 0 2.387.393 3.002q.105.165.235.312c.483.546 1.249.765 2.78 1.202c1.533.438 2.3.657 2.856.329a1.5 1.5 0 0 0 .267-.202C11 21.196 11 20.4 11 18.803V5.197c0-1.596 0-2.393-.469-2.837a1.5 1.5 0 0 0-.267-.202c-.555-.328-1.323-.11-2.857.329c-1.53.437-2.296.656-2.78 1.202a2.5 2.5 0 0 0-.234.312M11 4h2.017c1.902 0 2.853 0 3.443.586c.33.326.476.764.54 1.414m-6 14h2.017c1.902 0 2.853 0 3.443-.586c.33-.326.476-.764.54-1.414m4-6h-7m5.5-2.5S22 11.34 22 12s-2.5 2.5-2.5 2.5" />
                    </svg> Logout
                </button>
            </div>
        </div>
    );
}