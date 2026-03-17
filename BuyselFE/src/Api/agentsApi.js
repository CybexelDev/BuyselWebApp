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
    if (
      result.data.access &&
      result.data.premium.name &&
      result.data.premium.id &&
      result.data.premium.city
    ) {
      return result.data;
    }

    return false;

  } catch (error) {
    console.error("API error:", error);
    return false;
  }
};










