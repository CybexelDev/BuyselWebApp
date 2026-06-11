import React from 'react'
import { useState } from 'react'
import { premiumAgentLogin } from '../../../Api/agentsApi';
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'sonner';


const AgentForm = ({onForgot}) => {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
  const newErrors = {};

  if (!login.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(login.email)) {
    newErrors.email = "Enter a valid email";
  }

  if (!login.password.trim()) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(login, "hahaaaa");

    const handleLogin = async () => {
          if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await premiumAgentLogin(login.email, login.password);
if (response?.error) {
  const errorMessage = Array.isArray(response.error)
    ? response.error.join(", ")
    : response.error;

  toast.error(errorMessage);
  return;
}
            if (response) {
                dispatch({
                    type: 'SET_AGENT',
                    payload: {
                        agentName: response?.agent_details?.username,
                        accessToken: response?.access,
                        agentId: response?.agent_details?.agent_id,
                        image: response?.agent_details?.profile_image,
                        agent_type: response?.agent_details?.agent_type,
                        role:response?.login_as,
                    }
                })
                      localStorage.setItem('accessToken', response?.access);
                      localStorage.setItem('refreshToken', response?.refresh);
                      localStorage.setItem('agentId', response?.agent_details?.agent_id);

                setLoading(false);

                 localStorage.setItem('accessToken', response?.access);
                 localStorage.setItem('refreshToken', response?.refresh);
                 localStorage.setItem('agentId', response?.agent_details?.agent_id);

                navigate('/agent/dashboard')

            } else {
                console.log("Invalid credentials");
            }

        } catch (error) {
            console.error("Login error:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <h3 className="text-[20px] mt-2 font-[500] host-grotesk mb-6 text-center">
                Agent Login
            </h3>
            <div className="space-y-4">

                <div>
  <label className="text-[16px] text-[#525252] host-grotesk">
    Email
  </label>

  <input
    value={login.email}
    onChange={(e) => {
      setLogin({ ...login, email: e.target.value });

      if (errors.email) {
        setErrors((prev) => ({
          ...prev,
          email: "",
        }));
      }
    }}
    type="text"
    className={`w-full rounded-[10px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400 ${
      errors.email
        ? "border border-red-500"
        : "border border-[#cbc8c8]"
    }`}
  />

  {errors.email && (
    <p className="text-red-500 text-sm mt-1 host-grotesk">
      {errors.email}
    </p>
  )}
</div>


               <div>
  <label className="text-[16px] text-[#525252] host-grotesk">
    Password
  </label>

  <input
    value={login.password}
    onChange={(e) => {
      setLogin({ ...login, password: e.target.value });

      if (errors.password) {
        setErrors((prev) => ({
          ...prev,
          password: "",
        }));
      }
    }}
    type="password"
    className={`w-full rounded-[10px] p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400 ${
      errors.password
        ? "border border-red-500"
        : "border border-[#cbc8c8]"
    }`}
  />

  {errors.password && (
    <p className="text-red-500 text-sm mt-1 host-grotesk">
      {errors.password}
    </p>
  )}
</div>

                <button   disabled={loading}
 onClick={handleLogin} className="w-full bg-[#74c222] hover:bg-[#5f9d1c] instrument-sans cursor-pointer text-white py-3 rounded-lg font-medium transition flex items-center justify-center">
                    <div>Login </div>  {loading && <div class="dot-spinner">
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                    </div>}
                </button>
            </div>


            <div className="text-center text-[#7c7373] text-sm mt-4 host-grotesk">
                <p>
                    Don’t have credentials?{" "}
                    <span className="text-[#6abd11] cursor-pointer" onClick={()=>navigate("/agent-register")}>
                        Submit Request Form
                    </span>
                </p>

                <p>
                    Forgot password?{" "}
                    <span className="text-[#6abd11] cursor-pointer" onClick={onForgot}>
                        Change Password
                    </span>
                </p>
            </div>
        </>
    )
}

export default AgentForm