import axios from "axios";
import api from "./axiosInstance";

const BASE_URL = import.meta.env.VITE_BASE_URL ;

export const premiumAgentLogin = async (username, password) => {

  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  try {
    const result = await axios.post(`${BASE_URL}agent/login/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (
      result.data.access &&
      result.data.agent_details.username &&
      result.data.agent_details.agent_id &&
      result.data.agent_details.city
    ) {
      return result.data;
    }

    return false;

  } catch (error) {
    console.error("agent API error:", error);
    return false;
  }
};










