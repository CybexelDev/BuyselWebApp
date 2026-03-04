import { useState } from "react";
import houseImg3 from "../../../assets/images/LoginAndSignUp/g1.png";
import houseImg from "../../../assets/images/LoginAndSignUp/g2.png";
import houseImg2 from "../../../assets/images/LoginAndSignUp/g3.png";
import logo from '../../../assets/images/logo/logo.png'
import loginI from '../../../assets/images/icons/login.png'
import user from '../../../assets/images/icons/user.png'
import './LoginAndSignup.css'
import AgentForm from "../../../Components/LoginAndSignup/AgentForm/AgentForm";
import UserForm from "../../../Components/LoginAndSignup/UserForm/UserForm";
import SignupForm from "../../../Components/LoginAndSignup/SignupForm/SignupForm";
import OtpForm from "../../../Components/LoginAndSignup/OtpForm/OtpForm";

export default function LoginAndSignup() {
    const [activeTab, setActiveTab] = useState("agent");

    console.log(activeTab, "tab valueeeee");


    return (
        <div className="md:h-[100vh] h-[100%] w-full bg-white flex items-center justify-center p-8">
            <div className="bg-gray-50 rounded-3xl shadow-xl w-full max-w-5xl md:flex  flex-row  overflow-hidden">

                {/* LEFT IMAGE */}
                <div className="md:w-[50%] w-[100%] p-4 relative">
                    <img src={logo} className="absolute top-7 left-6.5 w-[100px]" />
                    <img class="inverted-radius" src={activeTab == "signup" ? (houseImg3) : activeTab == "agent" ? (houseImg) : (houseImg2)} alt="" />
                </div>

                {/* RIGHT LOGIN */}
                <div className="md:w-[50%] w-[100%] p-10 relative">

                    {/* Tabs */}
                    <div className="flex justify-end ">

                        <div className=" flex mb-10 w-fit bg-gray-200 rounded-[11px]">
                            <button
                                onClick={() => setActiveTab("agent")}
                                className={`px-4 py-2 rounded-[11px] flex gap-2  cursor-pointer text-sm font-medium transition
                            ${activeTab === "agent"
                                        ? "bg-[#73c020] text-white"
                                        : "bg-gray-200 text-gray-600"
                                    }`}
                            >
                                <img src={loginI} className="w-4 h-4 mt-1" />
                                Agents Login
                            </button>

                            <button
                                onClick={() => setActiveTab("user")}
                                className={`px-4 py-2 rounded-[11px] flex gap-2 cursor-pointer text-sm font-medium transition
                            ${activeTab === "user" || activeTab === "signup"
                                        ? "bg-[#73c020] text-white"
                                        : "bg-gray-200 text-gray-600"
                                    }`}
                            >
                                <img src={user} className="w-4 h-4 mt-1 object-contain" />
                                User Login
                            </button>
                        </div>
                    </div>

                    {
                        activeTab === "agent" ? (
                            <AgentForm />
                        ) : activeTab === "signup" ? (
                            <SignupForm setSignin={setActiveTab} />
                            // <OtpForm />
                        ) : (
                            <UserForm setSignup={setActiveTab} />
                        )
                    }

                </div>
            </div>
        </div>
    );
}
