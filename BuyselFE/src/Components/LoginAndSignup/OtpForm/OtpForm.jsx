import React, { useRef, useState } from "react";

const OtpForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="h-fit flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">
          Verify Your Account
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          Enter the 6-digit OTP sent to your Email
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center mt-8 gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-8 h-8 sm:w-14 sm:h-14 text-center text-xl font-semibold
              bg-[#C7D9A6] rounded-xl outline-none
              focus:ring-2 focus:ring-[#76BC21] transition"
            />
          ))}
        </div>

        {/* Resend */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Didn’t receive code?{" "}
          <span className="text-[#76BC21] cursor-pointer font-medium">
            Resend
          </span>
        </p>

        {/* Button */}
        <button className="w-full mt-6 bg-gradient-to-r from-[#2d2f2b] to-[#1e1f1c] text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
          Verify OTP
        </button>

      </div>
    </div>
  );
};

export default OtpForm;