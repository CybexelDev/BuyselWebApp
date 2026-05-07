import { Mail } from "lucide-react";
import { useState } from "react";

const ForgotPasswordForm = ({setOtpSent, setEmail, onBackToLogin}) => {
  const [localEmail, setLocalEmail] = useState("");

  const handleSubmit = () => {
    console.log("Send reset link to:", localEmail);
        setEmail(localEmail);   
    setOtpSent(true); 


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

      <p className="text-center text-sm mt-4">
  Remember your password?{" "}
  <span
    className="text-green-600 cursor-pointer"
    onClick={onBackToLogin}
  >
    Sign in
  </span>
</p>
    </>
  );
};

export default ForgotPasswordForm;