import React from "react";
import { Trash2 } from "lucide-react";
import i1 from "../../../assets/images/profile/i1.png"
import i2 from "../../../assets/images/profile/i2.png"
import i3 from "../../../assets/images/profile/i3.png"
import i4 from "../../../assets/images/profile/i4.png"

export default function RecentEnquiries() {
    return (
        <div className="w-full  p-4 md:p-8">
            <h2 className="text-[20px] instrument-sans font-[600] text-[#000] mb-4">
                Recent Enquiries
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                {/* LEFT SECTION */}
                <div className="lg:col-span-2 bg-[#F8F8F8] rounded-[19px] p-5 shadow-sm">

                    {/* Scroll Wrapper */}
                    <div className="overflow-x-auto">

                        <div className="min-w-[700px]">

                            {/* Table Header */}
                            <div className="bg-[#7AC70C] text-[#F7F7F7] host-grotesk rounded-lg px-4 py-3 grid grid-cols-4 text-[16px] font-[500]">
                                <span>Property Name</span>
                                <span>Agent/Owner</span>
                                <span>Date</span>
                                <span>Status</span>
                            </div>

                            {/* Row 1 */}
                            <div className="grid grid-cols-4 px-4 py-4 text-[#595959] text-[15px] font-[500] instrument-sans items-center">
                                <span>2BHK Apartment – Green Park Residency</span>
                                <span>Raja riyal estates</span>
                                <span>Apr,22,2025</span>
                                <span className="flex items-center gap-2 text-[#A27D20] font-medium">
                                    Pending
                                    <Trash2 size={16} className="text-red-500 cursor-pointer" />
                                </span>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-4 px-4 py-4 text-[#595959] text-[15px] font-[500] instrument-sans items-center">
                                <span>2BHK Apartment – Green Park Residency</span>
                                <span>Raja riyal estates</span>
                                <span>Apr,22,2025</span>
                                <span className="text-[#4A7D12ED] font-medium">
                                    Responded
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="bg-[#f6f6f6] rounded-[18px] p-5 shadow-md h-fit h-full">
                    <h3 className="text-[18px] font-[500] host-grotesk text-[#000] mb-4">
                        Settings & Security
                    </h3>

                    <div className="space-y-3">
                        <button className="text-left flex gap-2 bg-[#FFFFFF] rounded-[9px] host-grotesk shadow-md hover:bg-[#e9e9e9] px-5 py-2 rounded-lg text-[16px] text-[#7B7B7B]">
                            <img src={i1} className=" w-[19px] h-[19px] mt-[3px]" /> Need help?
                        </button>
                        <button className="text-left flex gap-2 bg-[#FFFFFF] rounded-[9px] host-grotesk shadow-md hover:bg-[#e9e9e9] px-5 py-2 rounded-lg text-[16px] text-[#7B7B7B]">
                            <img src={i2} className=" w-[19px] h-[19px] mt-[3px]" /> Contact Support
                        </button>
                        <button className="text-left flex gap-2 bg-[#FFFFFF] rounded-[9px] host-grotesk shadow-md hover:bg-[#e9e9e9] px-5 py-2 rounded-lg text-[16px] text-[#7B7B7B]">
                            <img src={i3} className=" w-[19px] h-[19px] mt-[3px]" /> Help Center
                        </button>
                    </div>


                </div>
            </div>
            <div className="flex justify-end">
                <button className="mt-6  bg-[#5a5a5a] flex gap-2 hover:bg-[#444] text-white px-8 py-2.5 rounded-[10px] text-[16px] font-[500] instrument-sans">
                    <img src={i4} className=" w-[20px] h-[20px] mt-[2px]" /> Logout
                </button>
            </div>
        </div>
    );
}