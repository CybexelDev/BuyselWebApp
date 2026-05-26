import { Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { changePasswordReset } from "../../../Api/userApi";
import { agentChangePasswordReset} from "../../../Api/agentsApi";
const ResetPasswordForm = ({ email, setIsReset,type }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const handleSubmit = async () => {

  if (!password || !confirmPassword) {
    toast.warning("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {

    const data =
      type === "agent"
        ? await agentChangePasswordReset(password)
        : await changePasswordReset(password);

    if (data) {

      localStorage.removeItem("reset_token");

      toast.success("Password changed successfully");

      setIsReset(false);

    } else {

      toast.error("Something went wrong");

    }

  } catch (error) {

    console.log(error);

  }
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