import { Mail } from "lucide-react";
import { useState } from "react";
import { forgotPassword } from "../../../Api/userApi";
import { agentForgotPassword } from "../../../Api/agentsApi";

const ForgotPasswordForm = ({setOtpSent, setEmail, type}) => {
  const [localEmail, setLocalEmail] = useState("");

  const handleSubmit = async () => {
const res =
  type === "agent"
    ? await agentForgotPassword(localEmail)
    : await forgotPassword(localEmail);
  if (res) {
    setEmail(localEmail);
    setOtpSent(true);
  } else {
    console.log("Something went wrong");
  }
};

  return (
    <>
      <div className="text-center m-6">

        <h2 className="text-[20px] font-[500] host-grotesk text-[#1e1a1a]">
          Forgot Password
        </h2>
        <p className="text-[#9f8e8e] text-[14px] font-[500] host-grotesk">
  Provide your registered email address to receive password reset instructions.
</p>
      </div>


      <div className="relative mb-4">
        <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
        <input
        value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-green-100 focus:outline-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Send OTP
      </button>
    </>
  );
};

export default ForgotPasswordForm;