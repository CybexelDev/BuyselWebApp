import { useState } from 'react';
import { Mail, Lock, User, Phone } from "lucide-react";
import google from '../../../assets/images/LoginAndSignUp/google.png'
import apple from '../../../assets/images/LoginAndSignUp/apple.png'
import facbook from '../../../assets/images/LoginAndSignUp/facebook.png'
import { userRegister } from '../../../Api/userApi';
import { toast } from 'sonner';

const SignupForm = ({ setSignin, SetOtpSent, setEmail }) => {

    const [register, setRegister] = useState({ name: '', email: '', mobail: '', password: '', confirm_password: '' })
    const [checked, setChecked] = useState(false);

    const handleRegister = async () => {

        if (!checked) {
            toast.info("Please accept Terms and Conditions");
            return;
        }

        try {
            const response = await userRegister(
                register.name,
                register.email,
                register.mobail,
                register.password,
                register.confirm_password,
            )

            if (response) {
                setEmail(response.email)
                SetOtpSent(true)
            } else {
                console.log("Invalid credentials");
            }
        } catch (error) {

            console.log(error);
        }
    }

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
                    onChange={(e) => setRegister({ ...register, name: e.target.value })}
                    placeholder="Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>

            <div className="relative mb-2">
                <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="email"
                    value={register.email}
                    onChange={(e) => setRegister({ ...register, email: e.target.value })}
                    placeholder="email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>
            <div className="relative mb-2">
                <Phone className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="number"
                    value={register.mobail}
                    onChange={(e) => setRegister({ ...register, mobail: e.target.value })}
                    placeholder="Phone"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>
            <div className="relative mb-2">
                <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="password"
                    value={register.password}
                    onChange={(e) => setRegister({ ...register, password: e.target.value })}
                    placeholder="Create Password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>
            <div className="relative mb-2">
                <Phone className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="password"
                    value={register.confirm_password}
                    onChange={(e) => setRegister({ ...register, confirm_password: e.target.value })}
                    placeholder="Re-enter Password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>

            <div className="flex items-start gap-2 mt-4 text-sm mb-2" >
                <input className='mt-1' type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
                <p>
                    I agree to BuySel’s{" "}
                    <span className="text-blue-500">Terms & Conditions</span> and{" "}
                    <span className="text-blue-500">Privacy Policy</span>
                </p>
            </div>

            <button onClick={handleRegister} className="w-full bg-[#2f332f] text-white py-3 rounded-lg font-medium hover:bg-black transition">
                Create Account
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