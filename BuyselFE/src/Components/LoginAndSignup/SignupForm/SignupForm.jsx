import React from 'react'
import { Mail, Lock, User, Phone } from "lucide-react";
import google from '../../../assets/images/LoginAndSignUp/google.png'
import apple from '../../../assets/images/LoginAndSignUp/apple.png'
import facbook from '../../../assets/images/LoginAndSignUp/facebook.png'

const SignupForm = ({ setSignin }) => {
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
                    placeholder="Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>

            <div className="relative mb-2">
                <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="email"
                    placeholder="email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>
            <div className="relative mb-2">
                <Phone className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="number"
                    placeholder="Phone"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>
            <div className="relative mb-2">
                <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="password"
                    placeholder="Create Password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>
            <div className="relative mb-2">
                <Phone className="absolute left-4 top-4 text-gray-500" size={18} />
                <input
                    type="password"
                    placeholder="Re-enter Password"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#ddf1be] focus:outline-none"
                />
            </div>

            <div className="flex items-start gap-2 mt-4 text-sm mb-2" >
                <input className='mt-1' type="checkbox" />
                <p>
                    I agree to BuySel’s{" "}
                    <span className="text-blue-500">Terms & Conditions</span> and{" "}
                    <span className="text-blue-500">Privacy Policy</span>
                </p>
            </div>

            <button className="w-full bg-[#2f332f] text-white py-3 rounded-lg font-medium hover:bg-black transition">
                Create Account
            </button>

            <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <span className="text-green-600 cursor-pointer" onClick={() => setSignin("signin")}>
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