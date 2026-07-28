import { useState } from 'react';
import { Mail, Lock, User, Phone } from "lucide-react";
import google from '../../../assets/images/LoginAndSignUp/google.png'
import apple from '../../../assets/images/LoginAndSignUp/apple.png'
import facbook from '../../../assets/images/LoginAndSignUp/facebook.png'
import { userRegister } from '../../../Api/userApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setSignin, SetOtpSent, setEmail }) => {

    const [register, setRegister] = useState({ name: '', email: '', mobail: '', password: '', confirm_password: '' })
    const [checked, setChecked] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate()
    const validateForm = () => {
  const newErrors = {};

  if (!register.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!register.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(register.email)) {
    newErrors.email = "Enter a valid email";
  }

  if (!register.mobail.trim()) {
    newErrors.mobail = "Phone number is required";
  } else if (!/^\d{10}$/.test(register.mobail)) {
    newErrors.mobail = "Enter a valid 10-digit phone number";
  }

  if (!register.password) {
    newErrors.password = "Password is required";
  } else if (register.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  if (!register.confirm_password) {
    newErrors.confirm_password = "Confirm password is required";
  } else if (register.password !== register.confirm_password) {
    newErrors.confirm_password = "Passwords do not match";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  const handleRegister = async () => {
  if (!validateForm()) return;

  if (!checked) {
    toast.info("Please accept Terms and Conditions");
    return;
  }

  setLoading(true);

  try {
    const response = await userRegister(
      register.name,
      register.email,
      register.mobail,
      register.password,
      register.confirm_password
    );

    if (response?.error) {
      toast.error(
        Array.isArray(response.error)
          ? response.error.join(", ")
          : response.error
      );
      return;
    }

    if (response?.message === "OTP sent to email") {
      setEmail(response.email);
      SetOtpSent(true);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
    

    return (
        <>

            <div className="text-center mb-6">
                <h2 className="text-[20px] font-[500] host-grotesk text-[#1e1a1a]">
                    Sign in with email
                </h2>
                <p className="text-[#9f8e8e] text-[14px] font-[500] host-grotesk">
                    Sign in to manage your saved properties,
                    wishlist and inquiries.
                </p>
            </div>

            <div className="relative mb-2">
                <User className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="text"
                    value={register.name}
  onChange={(e) => {
    setRegister({ ...register, name: e.target.value });

    if (errors.name) {
      setErrors((prev) => ({
        ...prev,
        name: "",
      }));
    }
  }}                    placeholder="Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
                {errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name}
  </p>
)}
            </div>

            <div className="relative mb-2">
                <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="email"
                    value={register.email}
  onChange={(e) => {
    setRegister({ ...register, email: e.target.value });

    if (errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  }}                    placeholder="email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
                {errors.email && (
  <p className="text-red-500 text-sm mt-1 host-grotesk">
    {errors.email}
  </p>
)}
            </div>
            <div className="relative mb-2">
                <Phone className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="number"
                    value={register.mobail}
 onChange={(e) => {
    setRegister({ ...register, mobail: e.target.value });

    if (errors.mobail) {
      setErrors((prev) => ({
        ...prev,
        mobail: "",
      }));
    }
  }}                       placeholder="Phone"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
                {errors.mobail && (
  <p className="text-red-500 text-sm mt-1 host-grotesk">
    {errors.mobail}
  </p>
)}
            </div>
            <div className="relative mb-2">
                <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="password"
                    value={register.password}
 onChange={(e) => {
    setRegister({ ...register, password: e.target.value });

    if (errors.password) {
      setErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }
  }}                       placeholder="Create Password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
                       {errors.password && (
  <p className="text-red-500 text-sm mt-1 host-grotesk">
    {errors.password}
  </p>
)}
     
                
            </div>
            <div className="relative mb-2">
                <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="password"
                    value={register.confirm_password}
 onChange={(e) => {
    setRegister({ ...register, confirm_password: e.target.value });

    if (errors.confirm_password) {
      setErrors((prev) => ({
        ...prev,
        confirm_password: "",
      }));
    }
  }}                       placeholder="Re-enter Password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
                {errors.confirm_password && (
  <p className="text-red-500 text-sm mt-1 host-grotesk">
    {errors.confirm_password}
  </p>
)}
            </div>

            <div className="flex items-start gap-2 mt-4 text-sm mb-2" >
                <input className='mt-1' type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
                <p>
                    I agree to BuySel’s{" "}
                    <span className="text-blue-500 cursor-pointer" onClick={()=>navigate("/termsandcondition")} >Terms & Conditions</span> and{" "}
                    <span className="text-blue-500 cursor-pointer"  onClick={()=>navigate("/privacy")} >Privacy Policy</span>
                </p>
            </div>

           <button
  onClick={handleRegister}
  disabled={loading}
  className="w-full bg-[#2f332f] text-white py-3 rounded-lg font-medium hover:bg-black transition disabled:opacity-50 flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <span>Creating Account...</span>

      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </>
  ) : (
    "Create Account"
  )}
</button>

            <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <span className="text-green-600 cursor-pointer" onClick={() => setSignin("user")}>
                    sign in
                </span>
            </p>

            <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <span className="text-sm text-gray-400">
                    Or sign in with
                </span>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex justify-center gap-4">
                <button className="border border-[#9d9d9d] rounded-lg px-5 py-2 bg-white shadow cursor-pointer">
                    <img src={google} className='w-6 h-6 object-contain' />
                </button>

                <button className="border border-[#9d9d9d] rounded-lg px-6 py-2 bg-white shadow cursor-pointer">
                    <img src={apple} className='w-6 h-6 object-contain' />
                </button>

                <button className="border border-[#9d9d9d] rounded-lg px-6 py-2 bg-white shadow cursor-pointer">
                    <img src={facbook} className='w-6 h-6 object-contain' />
                </button>
            </div>
        </>
    )
}

export default SignupForm