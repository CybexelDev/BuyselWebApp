import axios from "axios";
import api from "./axiosInstance";

const BASE_URL = import.meta.env.VITE_BASE_URL ;

export const premiumAgentLogin = async (username, password) => {

  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  try {
    const result = await axios.post(`${BASE_URL}premium/login/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(result.data.access, "kkkkkkkkkkkkk");
    

    if (
      result.data.access &&
      result.data.premium.name &&
      result.data.premium.id &&
      result.data.premium.city
    ) {
      // localStorage.setItem("accessToken", result.data.access_token);
      // localStorage.setItem("refreshToken", result.data.refresh_token);

      console.log("Login successful!");
      return result.data;
    }

    return false;

  } catch (error) {
    console.error("API error:", error);
    return false;
  }
};










