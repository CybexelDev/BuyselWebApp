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
import ForgotPasswordForm from "../../../Components/LoginAndSignup/ForgetPassword/ForgetPasswordForm";
import ResetPasswordForm from "../../../Components/LoginAndSignup/ResetPassword/ResetPasswordForm";

export default function LoginAndSignup() {
    const [activeTab, setActiveTab] = useState("user");   
    const [otpSent, setOtpSent] = useState(false)
    const [email, setEmail] = useState('')
    const [isForgot, setIsForgot] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [isAgentForgot, setIsAgentForgot] = useState(false);
const [isAgentReset, setIsAgentReset] = useState(false);

    return (
        <div className="md:h-[100vh] h-[100%] w-full bg-white flex items-center justify-center p-3 md:p-8">
            <div className="bg-gray-50 rounded-3xl shadow-xl w-full max-w-5xl md:flex  flex-row  overflow-hidden">

                <div className="md:w-[50%] w-[100%] p-4 relative">
                    <img src={logo} className="absolute top-7 left-6.5 w-[100px]" />
                    <img class="inverted-radius" src={activeTab == "signup" ? (houseImg3) : activeTab == "agent" ? (houseImg) : (houseImg2)} alt="" />
                </div>

                <div className="md:w-[50%] w-[100%] p-3 md:p-10 relative">

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

  isAgentForgot ? (

    otpSent ? (

      <OtpForm
        email={email}
        type="agent-forgot"
        onVerifySuccess={() => {
          setIsAgentReset(true);
          setIsAgentForgot(false);
          setOtpSent(false);
        }}
      />

    ) : (

      <ForgotPasswordForm
        setOtpSent={setOtpSent}
        setEmail={setEmail}
        type="agent"
      />

    )

  ) : isAgentReset ? (

    <ResetPasswordForm
      email={email}
      setIsReset={setIsAgentReset}
      type="agent"
    />

  ) : (

    <AgentForm
      onForgot={() => setIsAgentForgot(true)}
    />

  )

) : activeTab === "signup" ? (

    otpSent
      ? <OtpForm email={email} />
      : <SignupForm
          setSignin={setActiveTab}
          SetOtpSent={setOtpSent}
          setEmail={setEmail}
        />

  ) : isForgot ? (

    otpSent ? (
      <OtpForm
        email={email}
        type ="forgot"

        onVerifySuccess={() => {
          setIsReset(true);
          setIsForgot(false);
          setOtpSent(false);
        }}
      />
    ) : (
      <ForgotPasswordForm
  setOtpSent={setOtpSent}
  setEmail={setEmail}
  onBackToLogin={() => {
    setIsForgot(false);
    setOtpSent(false);
    setEmail("");
    setActiveTab("user");
  }}
/>
    )

  ) : isReset ? (

    <ResetPasswordForm email={email} setIsReset={setIsReset} />

  ) : (
    <UserForm
      setSignup={setActiveTab}
      onForgot={() => setIsForgot(true)} 
    />
  )
}


                </div>
            </div>
        </div>
    );
}