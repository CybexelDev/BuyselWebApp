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

export const getAgentProfile = async () => {
  try {

    const result = await api.get("/agent/profile/");
    console.log("get Agent Profile",result)
    if (result.data?.data?.agent_id) {
      return result.data.data;
    }

    return false;
  } catch (error) {
    console.error("get profile API error:", error);
    return false;
  }
};

export const updateAgentProfile = async (formData) => {
  try {
    const data = new FormData();

    data.append("username", formData.name);
    data.append("phone_number", formData.number);
    data.append("city", formData.location);
    data.append("address", formData.address);
    data.append("pin_code", formData.pincode);
    data.append("email", formData.email);

    data.append("professional_title", formData.title);
    data.append("professional_bio", formData.description);

    data.append("instagram", formData.instagram);
    data.append("facebook", formData.facebook);
    data.append("linkedin", formData.linkedin);
    data.append("whatsapp_number", formData.whatsapp);

    data.append("years_of_experience", formData.experience);
    data.append("properties_listed", formData.propertiesListed);
    data.append("deals_closed", formData.dealsClosed);

data.append(
  "operating_cities",
  JSON.stringify(formData.operatingCities.split(",").map(c => c.trim()))
);
    formData.specializations.forEach((item, index) => {
      data.append(`specializations[${index}]`, item);
    });

    if (formData.profileImageFile) {
      data.append("profile_image", formData.profileImageFile);
    }

    const result = await api.put("/agent/profile/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
console.log("UPDATED:", result);
    return result.data;

  } catch (error) {
    console.error("update profile error:", error);
    return false;
  }
};



export const getAgentInboxMessages = async () => {
  try {
    const result = await api.get("/agent/inbox-messages/");

    if (result.data?.data) {
      return result.data.data;
    }

    return result.data;
  } catch (error) {
    console.error("inbox messages error:", error);
    return [];
  }
};
export const deleteInboxMessage = async (id) => {
  try {
    const res = await api.delete(`/agent/inbox-message-delete/${id}/`);
    return res.data;
  } catch (error) {
    console.error("delete message error:", error);
    return false;
  }
};

export const changeAgentPassword = async (currentPassword, newPassword, confirmPassword) => {
  try {
    const data = {
      current_password: currentPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    const result = await api.post("/agent/change-password/", data);

    return result.data;

  } catch (error) {
    console.error("change password error:", error);
    return false;
  }
};
