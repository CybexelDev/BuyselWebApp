import axios from "axios";
import api from "./axiosInstance";
import { toast } from "sonner";

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

export const forgotPassword = async (email) => {
  const formData = new FormData();
  formData.append("email", email);

  try {
    const result = await axios.post(
      `${BASE_URL}user/forgot-password/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (result.data.message === "OTP sent successfully") {
      return result.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Forgot password error:", error);
    return false;
  }
};



export const verifyForgotOtp = async (otpValue, email) => {
  const formData = new FormData();
  formData.append("otp", otpValue);
  formData.append("email", email);

  try {
    const result = await axios.post(
      `${BASE_URL}user/verify-forgot-otp/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (result.data.message === "OTP verified") {
      return result.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Verify OTP error:", error);
    return false;
  }
};


export const getNearbyProperties = async (lat, lng) => {
  try {
    const res = await axios.get(`${BASE_URL}filter/nearby-properties/`, {
      params: {
        lat,
        lng,
      },
    });

    return res.data.data.map((item) => ({
      ...item,
      images: item.images, 
    }));  } catch (error) {

    console.log("Nearby properties error:", error);
    return [];
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


export const handleGoogleLogin = async ({ tokenResponse }) => {

  try {
    const res = await axios.post(`${BASE_URL}auth/google/login/`, {
      access_token: tokenResponse.access_token,
    });

    if (res.data.message && res.data.access) {
      return res.data;

    } else {
      return false
    }

  } catch (error) {
    console.log(error, "Login filed");

  }
}

export const changePasswordReset = async (newPassword) => {

  const formData = new FormData();

  formData.append("new_password", newPassword);

  const resetToken = localStorage.getItem("reset_token");

  try {

    const result = await axios.post(
      `${BASE_URL}user/change-password/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${resetToken}`,
        },
      }
    );

    if (result.data.message === "Password changed successfully") {

      return result.data;

    } else {

      return false;

    }

  } catch (error) {

    console.log("Change password error:", error);

    return false;
  }
};

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




export const getProperty = async (filters) => {

  try {
    const userId = localStorage.getItem("id");

        const result = await api.get(`${BASE_URL}all-properties/`, {
            params: {
                ...filters,
            },
        });
        return result.data;

  } catch (error) {
    console.log(error);
  }
}

export const resendForgotOtp = async (email) => {

  const formData = new FormData();

  formData.append("email", email);

  try {

    const result = await axios.post(
      `${BASE_URL}user/resent-forgot-otp/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return result.data;

  } catch (error) {

    console.log(error);

    return false;
  }
};

export const getWishlist = async () => {
  try {
    const userId = localStorage.getItem("id");
    const result = await api.get(`wishlist/`, {
      params: {
        id: userId,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export const updateReview = async ({ reviewId, rating, review }) => {
  try {
    const res = await api.put(
      `/reviews/update/${reviewId}/`,
      {
        rating,
        review,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const filterWishlist = async (purpose) => {
  try {
    const res = await api.get(`wishlist/filter/?purpose=${purpose}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const sortWishlist = async (sort) => {
  try {
    const res = await api.get(`wishlist/sort/?sort=${sort}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const clearWishlist = async () => {
  try {
    const res = await api.delete(`wishlist/clear/`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const sendEnquiry = async (formData) => {
  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("contact", formData.contact);
    data.append("pin_code", formData.pincode);
    data.append("messages_text", formData.message);

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

export const getPropertyDetail = async (id) => { 
    try {
        const result = await axios.get(`${BASE_URL}property-detail/${id}/`,          
      );

    return result.data;
  } catch (error) {
    console.log("Property detail error:", error);
    return false;
  }
}

export const sendPropertyEnquiry = async (formData) => {
  try {
    const res = await api.post(
      `${BASE_URL}enquiries/`,
      formData
    );

    return res.data;
  } catch (error) {
    console.error("Enquiry error:", error);
    return false;
  }
};


export const sendContact = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}contact/`, formData);
    return res.data;
  } catch (error) {
    console.error("Contact error:", error);
    return false;
  }
};

export const getAgentPlanDetails = async () => {
  try {
    const res = await api.get(`${BASE_URL}agent/combined-data/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getRelatedProperties = async (id) => {
  try {
    const res = await api.get(`${BASE_URL}property/related/${id}/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getBlogs = async () => {
  try {
    const res = await axios.get(`${BASE_URL}blogs/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};


export const searchBlogs = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}blogs/search/?name=${query}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const getBlogsByCategory = async (category) => {
  try {
    const res = await axios.get(
      `${BASE_URL}blogs/by-category/?category=${category.toLowerCase()}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getBlogById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}blogs/${id}/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }

};

export const getAllPropertyEnquiries = async () => {
  try {
    const response = await api.get(`${BASE_URL}enquiry/`);
    return response.data;
  } catch (error) {
    console.log("Enquiry fetch error:", error);
    return null;
  }
};

export const getEnquiryDetail = async (id) => {
  try {
    const response = await api.get(
      `${BASE_URL}enquiry-detail/${id}/`
    );

    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addToWishlist = async ({ id }) => {
  try {
    const formData = new FormData();
    formData.append('id', id);
    const result = await api.post(`wishlist/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return result.data;
  } catch (error) {
    console.log("Error in postLoginNumber:", error);
    throw error;
  }
};


export const activateUserPlan = async (plan_id) => {
  try {

    const response = await api.post(
      `${BASE_URL}activate-userplan/`,
      {
        plan_id: plan_id
      }
    );

    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeToWishlist = async ({ id }) => {
  try {
    const result = await api.delete(`${BASE_URL}wishlist/`, {
      data: {
        property_id: id,
      },
    });
    return result.data;
  } catch (error) {
    console.log("Error in postLoginNumber:", error);
    throw error;
  }
};


export const getFeatured = async () => {
  try {
    const res = await axios.get(`${BASE_URL}featured/`);
    return res.data;

  } catch (err) {
    console.log(err);
    return null;
  }
};


export const searchAgentProperties = async (
  agentId,
  search = "",
  category = ""
) => {
  try {
    const res = await axios.get(
      `${BASE_URL}agent/property-search/${agentId}/`,
      {
        params: {
          search,
          category,
        },
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const filterAgentPropertyByCity = async (
  agentId,
  city
) => {
  try {

    const formData = new FormData();

    formData.append("city", city);

    const res = await axios.post(
      `${BASE_URL}agent/property_cities/${agentId}/`,
      formData
    );

    return res.data;

  } catch (err) {
    console.log(err);
    return null;
  }
};
export const getAgents = async (category) => {
    try {
        const result = await api.get(`${BASE_URL}agents/listing/`, {
            params: category,
        });
        return result.data;

  } catch (error) {
    console.log(error);
  }
}

export const getProfile = async () => {
  try {
    const result = await api.get(`${BASE_URL}profile/`);

    return result.data;

  } catch (error) {
    console.log(error);
  }
}



export const agentContactForm = async(contactData, agentId)=>{
    try{

    const data = new FormData();

    data.append("first_name", contactData.first_name);
    data.append("last_name", contactData.last_name);
    data.append("contact_number", contactData.phone);
    data.append("email", contactData.email);
    data.append("message", contactData.message);

    const res = await api.post(
      `agent/contact/${agentId}/`, 
        data,
        {

        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return res.data

  } catch (err) {
    console.log("error:", err);
    return false
  }
}


export const getTestimonial = async () => {
  try {
    const result = await axios.get(`${BASE_URL}testimonial/list/`);
    if (result.data?.data) {
      return result.data.data;
    }

    return result.data;
  } catch (error) {
    console.error("testimonial not found:", error);
    return [];
  }
};

export const getReviews = async (agentId) => {
  try {
    const res = await axios.get(`${BASE_URL}agents/${agentId}/reviews/`);
    return res.data;

  } catch (err) {
    console.log(err);
    return null;
  }
};

export const toggleReviewLike = async (reviewId) => {
  try {
    const res = await api.post(`reviews/like/${reviewId}/`);
    return res.data;
  } catch (error) {
    console.log("Like error:",error);
    return null;
  }
};

export const getAgentsDetails = async (id) => {
  try {
    const result = await api.get(`${BASE_URL}agent/detail/${id}/`,);

    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export const getAgentPropertyCities = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}agent/property_cities/${id}/`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const filterProperties = async (filters) => {
  try {
    const res = await api.post("property-filter/", filters);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};


export const getFilterOptions = async () => {
  try {
    const res = await api.get("/properties/filters/");
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAgentPlanDetailss = async () => {

  try {

    const res = await axios.get(
      `${BASE_URL}agent-plans/`
    );

    return res.data;

  } catch (err) {

    console.log(err);

    return null;
  }
};

export const addReviewToServer = async ({ rating, review, id }) => {
  try {
    const formData = new FormData();
    formData.append("rating", rating);
    formData.append("review", review);

    const res = await api.post(
      `${BASE_URL}agents/reviews/submit/${id}/`,
      formData
    );

    console.log(res, "SUCCESS RESPONSE");
    return res.data;

    } catch (error) {
        if (error.response?.status === 400) {
    toast.warning("You already reviewed this agent");
  }
    console.log("ERROR:", error.response?.data || error.message);
    return null;
  }
};


export const deletReview = async ({ id }) => {
  try {
    const result = await api.delete(`${BASE_URL}reviews/delete/${id}/`,);
    return result.data;
  } catch (error) {
    console.log("Error in postLoginNumber:", error);
    throw error;
  }
};

export const updateProfile = async (formData) => {
  try {
    const res = await api.put(`profile/update/`, formData); // or PUT
    return res.data;
  } catch (error) {
    console.error("Update profile error:", error);
    throw error;
  }
};

export const updateProfileImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const res = await api.put("profile/image/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getMyActivity = async () => {
  try {
    const res = await api.get("my-activity/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const changePassword = async (data) => {
  try {
    const res = await api.post("profile/change-password/", data);
    return res.data;
  } catch (error) {
    console.log("Change password error:", error.response?.data || error);
    throw error;
  }
};

export const getAllPlans = async () => {
  try {
    const res = await api.get("plans/all/");
    return res.data;
  } catch (error) {
    console.log("Plans error:", error);
    throw error;
  }
};

export const postComment = async (agentId, data) => {
  try {
    const res = await api.post(
      `agents/${agentId}/reviews/submit/`,
      data
    );
    return res.data;
  } catch (error) {
    console.error("Review error:", error);
    return false;
  }
};


export const getRecentEnquiries = async () => {
  try {
    const res = await api.get("/recent_enquiries/");
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const searchProperties = async (query) => {
  try {
    const res = await api.get(`properties/search/?label=${query}`);
    if (res) {
      return res.data.data;
      
    }   
    
  } catch (error) {
    console.log("Search error:", error);
    return [];
  }

}


export const searchAgents = async (query) => {
  try {
    const res = await api.get(`agents/search/?search=${query}`);
    if (res) {
      return res.data;
    }

  } catch (error) {
    console.log("Search error:", error);
    return [];
  }

}

export const getCity = async () => {
  try {
    const res = await api.get(`agents/cities/`);
    if (res) {
      return res.data.cities;
    }

  } catch (error) {
    console.log("Search error:", error);
    return [];
  }

}


export const getCityData = async (location) => {
  try {
      const formData = new FormData();
      formData.append("city", location);

    const res = await api.post(`agents/cities/`, formData);

    if (res) {
      console.log(res.data, "agent City data searching");
      return res.data.data;
    }

  } catch (error) {
    console.log("Search error:", error);
    return [];
  }
}


export const userCurrentPlan = async () => {
  try {
    const res = await api.get("/current-userplan/");
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export const userDashboard = async () => {
  try {
    const res = await api.get("/owner-dashboard/");
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export const userPropertyList = async () => {
  try {
    const res = await api.get("/owner/property/list/");
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};




