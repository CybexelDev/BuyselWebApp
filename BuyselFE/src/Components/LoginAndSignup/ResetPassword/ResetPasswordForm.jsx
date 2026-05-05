import { Lock } from "lucide-react";
import { useState } from "react";

const ResetPasswordForm = ({ email, setIsReset }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Reset password for:", email);
    console.log("New password:", password);

    // 👉 call API here

    // after success
    setIsReset(false); // go back to login (or you can redirect)
  };

  return (
    <>
      {/* Heading */}
      <div className="text-center mb-6 lg:mb-10 ">
        <h2 className="text-[20px] font-[500] host-grotesk text-[#1e1a1a]">
          Reset Password
        </h2>
        <p className="text-[#9f8e8e] text-[14px] font-[500] host-grotesk">
          Enter your new password below.
        </p>
      </div>

      {/* New Password */}
      <div className="relative mb-4">
        <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-green-100 focus:outline-none"
        />
      </div>

      {/* Confirm Password */}
      <div className="relative mb-4">
        <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-green-100 focus:outline-none"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Reset Password
      </button>
    </>
  );
};

export default ResetPasswordForm;