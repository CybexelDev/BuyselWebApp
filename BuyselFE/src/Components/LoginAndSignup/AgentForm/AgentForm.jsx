import React from 'react'
import { useState } from 'react'
import { premiumAgentLogin } from '../../../Api/agentsApi';
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const AgentForm = () => {
    const [login, setLogin] = useState({ username: '', password: '' })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(login, "hahaaaa");

    const handleLogin = async () => {
        try {
            const response = await premiumAgentLogin(login.username, login.password);

            if (response) {
                console.log("Login success page:", response);
                dispatch({
                    type:'SET_AGENT',
                    payload:{
                       agentName: response?.premium?.name,
                       accessToken: response?.access,
                       agentId: response?.premium?.id,
                       image: response?.premium.image,
                    }   
                })

                navigate('/agent/dashboard')

            } else {
                console.log("Invalid credentials");
            }

        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <>
            <h3 className="text-[20px] mt-2 font-[500] host-grotesk mb-6 text-center">
                Agent Login
            </h3>
            <div className="space-y-4">

                <div>
                    <label className="text-[16px] text-[#525252] host-grotesk">Username</label>
                    <input
                        value={login.username}
                        onChange={(e) => setLogin({ ...login, username: e.target.value })}
                        type="text"
                        className="w-full border border-[#cbc8c8] rounded-[10px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label className="text-[16px] text-[#525252] host-grotesk">Password</label>
                    <input
                        value={login.password}
                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                        type="password"
                        className="w-full border border-[#cbc8c8] rounded-[10px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <button onClick={handleLogin} className="w-full bg-[#74c222] hover:bg-[#5f9d1c] instrument-sans cursor-pointer text-white py-3 rounded-lg font-medium transition">
                    Login
                </button>
            </div>


            <div className="text-center text-[#7c7373] text-sm mt-4 host-grotesk">
                <p>
                    Don’t have credentials?{" "}
                    <span className="text-[#6abd11] cursor-pointer">
                        Submit Request Form
                    </span>
                </p>

                <p>
                    Forgot password?{" "}
                    <span className="text-[#6abd11] cursor-pointer">
                        Change Password
                    </span>
                </p>
            </div>
        </>
    )
}

export default AgentForm