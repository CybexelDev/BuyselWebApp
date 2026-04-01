import axios from "axios";
import api from "./axiosInstance";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const userRegister = async (name, email, mobail, password, confirm_password) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobail", mobail);
    formData.append("password", password);
    formData.append("confirm_password", confirm_password);
    try {
        const result = await axios.post(`${BASE_URL}user/register/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(result.data.message == "OTP sent to email");

        if (result.data.message == "OTP sent to email") {
            return result.data;
        } else {
            return false;
        }

    } catch (error) {
        console.error("API error:", error);
        return false;
    }
};


export const otpSent = async (otpValue, email) => {
    const formData = new FormData();
    formData.append("otp", otpValue);
    formData.append("email", email);
    try {
        const result = await axios.post(`${BASE_URL}user/verify-otp/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(result, "veryfyyyyyyy");

        if (result.data.access) {
            return result.data;
        } else {
            return false;
        }

    } catch (error) {
        console.error("API error:", error);
        return false;
    }
};


export const reSentOtp = async (email) => {
    try {
        const formData = new FormData();
        formData.append("email", email);

        const result = await axios.post(`${BASE_URL}user/resent-otp/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (result.data.message == "OTP resent successfully") {
            return result.data;
        } else {
            return false
        }

    } catch (error) {
        console.log(error);

    }
}


export const userLogin = async (username, password) => {

    const formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    try {
        const result = await axios.post(`${BASE_URL}userlogin/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(result, "00000000000000000000000");
        
        if (
            result.data.access &&
            result.data.user.name &&
            result.data.user.image
        ) {
            return result.data;
        }

        return false;

    } catch (error) {
        console.error("API error:", error);
        return false;
    }
};


export const handleGoogleLogin = async ({tokenResponse}) =>{

    try {
        const res = await axios.post(`${BASE_URL}auth/google/login/`,  {
            access_token: tokenResponse.access_token,
        });

        if(res.data.message && res.data.access){
        return res.data;

        }else{
            return false
        }
        
    } catch (error) {
        console.log(error, "Login filed");
        
    }
}







export const getProperty = async (filters) => { 
    try {
        const result = await api.get(`${BASE_URL}properties/`, {filters});
       
            return result.data;

    } catch (error) {
        console.log(error);
    }
}

export const sendEnquiry = async (formData) => {
  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("contact", formData.contact);        // ✅ FIX
    data.append("pin_code", formData.pincode);       // ✅ FIX
    data.append("messages_text", formData.message);  // ✅ FIX

    const res = await axios.post(
      `${BASE_URL}agent/inbox-message/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data;

  } catch (error) {
    console.error("enquiry error:", error);
    return false;
  }
};



