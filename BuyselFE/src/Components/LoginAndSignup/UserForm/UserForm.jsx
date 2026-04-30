import React, { useEffect } from 'react'
import { useState } from 'react'
import { Mail, Lock } from "lucide-react";
import google from '../../../assets/images/LoginAndSignUp/google.png'
import apple from '../../../assets/images/LoginAndSignUp/apple.png'
import facbook from '../../../assets/images/LoginAndSignUp/facebook.png'
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { handleGoogleLogin, sendFacebookToken, userLogin } from '../../../Api/userApi';

import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';

const UserForm = ({ setSignup, onForgot }) => {
  const [login, setLogin] = useState({ username: '', password: '' })
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await userLogin(login.username, login.password);

      if (response) {
        dispatch({
          type: 'SET_USER',
          payload: {
            accessToken: response?.access,
            userName: response?.user?.name,
            userId: response?.user?.id,
            image: response?.user.image,
            verificationStatus: response?.user?.auth_provider,
          }
        })

          localStorage.setItem('accessToken', response?.access);
          localStorage.setItem('refreshToken', response?.refresh);
          localStorage.setItem('id', response?.user?.id);

        navigate('/')

      } else {
        console.log("Invalid credentials");
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };



  const Glogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await handleGoogleLogin({ tokenResponse });
        dispatch({
          type: 'SET_USER',
          payload: {
            userName: response?.user?.name,
            accessToken: response?.access,
            userId: response?.user?.id,
            image: response?.user?.image,
            verificationStatus: response?.user?.auth_provider,
          }
        })

         localStorage.setItem('accessToken', response?.access);
         localStorage.setItem('refreshToken', response?.refresh);
         localStorage.setItem('id', response?.user?.id);

        navigate("/");

      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
      }
    },
    onError: () => {
      console.log('Google Login Failed');
    },
  });

  useEffect(() => {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: import.meta.env.VITE_FACEBOOK_APP_ID, 
      cookie: true,
      xfbml: false,
      version: "v19.0",
    });
  };

  const script = document.createElement("script");
  script.src = "https://connect.facebook.net/en_US/sdk.js";
  script.async = true;
  document.body.appendChild(script);
}, []);

  const handleFacebookLogin = () => {
  window.FB.login(
    function (response) {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        // 👉 send to backend
        sendFacebookToken(accessToken);
      } else {
        console.log("User cancelled login");
      }
    },
    { scope: "email,public_profile" }
  );
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

      <div className="relative mb-4">
        <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
        <input
          value={login.username}
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-green-100 focus:outline-none"
        />
      </div>

      <div className="relative mb-2">
        <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
        <input
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          type="password"
          placeholder="Password"
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-green-100 focus:outline-none"
        />
      </div>

      <div className="text-right text-sm text-gray-500 hover:text-gray-900 mb-5 cursor-pointer"
      onClick={onForgot}>
        Forgot Password?
      </div>

      <button onClick={handleLogin} className="w-full bg-[#2f332f] text-white py-3 rounded-lg font-medium hover:bg-black transition">
        Get Started
      </button>

      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <span className="text-green-600 cursor-pointer" onClick={() => setSignup("signup")}>
          sign up
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
        <button onClick={() => Glogin()} className="border border-[#9d9d9d] rounded-lg px-5 py-2 bg-white shadow cursor-pointer">
          <img src={google} className='w-6 h-6 object-contain' />
        </button>

        <button className="border border-[#9d9d9d] rounded-lg px-6 py-2 bg-white shadow cursor-pointer">
          <img src={apple} className='w-6 h-6 object-contain' />
        </button>

        <button onClick={handleFacebookLogin} className="border border-[#9d9d9d] rounded-lg px-6 py-2 bg-white shadow cursor-pointer">
          <img src={facbook} className='w-6 h-6 object-contain' />
        </button>
      </div>
    </>
  )
}

export default UserForm