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


export const sendFacebookToken = async (accessToken) => {
  try {
    const res = await api.post("/auth/facebook/", {
      access_token: accessToken,
    });

    console.log(res.data, "Facebook login success");

  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async () => { 
    try {
        const result = await api.get(`${BASE_URL}profile/`);
       
            return result.data;

    } catch (error) {
        console.log(error);
    }
}


export const getProperty = async (filters) => { 
    try {
        const result = await api.get(`${BASE_URL}properties/`, {
      params: filters,
    });
        console.log(result, "Filtered properties 777777777777");
            return result.data;

    } catch (error) {
        console.log(error);
    }
}

export const getWishlist = async () => { 
    try {
        const result = await api.get(`wishlist/`);
       
            return result.data;

    } catch (error) {
        console.log(error);
    }
}


export const addToWishlist = async ({ id }) => {
    try {
        const formData = new FormData();
        formData.append('id', id);
        const result = await api.post(`wishlist/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // setFetchedData(result); // optional — if you're storing it in state

        return result.data;
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};

export const removeToWishlist = async ({ id }) => {
    try {
        const formData = new FormData();
        formData.append('product_id', id);
        const result = await api.delete(`${BASE_URL}wishlist/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // setFetchedData(result); // optional — if you're storing it in state

        return result.data;
    } catch (error) {
        console.log("Error in postLoginNumber:", error);
        throw error;
    }
};