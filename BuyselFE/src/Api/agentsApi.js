import axios from "axios";
import api from "./axiosInstance";

const BASE_URL = import.meta.env.VITE_BASE_URL ;

export const premiumAgentLogin = async (email, password) => {

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
// aa
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



export const getContactMessage = async()=>{
  try{
    const result = await api.get("/agent/contacts");

    if(result.data?.data) {
      return result.data.data
    }
     return result.data;
  } catch (error) {
    console.error("PRoperty not found:", error);
    return [];
  }
}



export const deleteAgentContactEnquiry = async(id)=>{
  try{
    const res = await api.delete(`/agent/contact-delete/${id}/`)
    return res.data
  }catch(err){
    console.error("delete message error:",err)
    return false
  }
}


//take subcategory fields
export const getPropertyData = async () => {
  try {
    const res = await api.get("/agent/property-meta/");

    if (res.data?.data) {
      return res.data.data;
    }

    return res.data;
  } catch (error) {
    console.error("Failed to fetch property meta:", error);
    return {
      categories: [],
      subcategories: [],
      purposes: [],
      amenities: [],
      fields: [],
    };
  }
};



export const postProperty = async (data) => {
  try {
    const formData = new FormData();

   
formData.append("category", data.category_id);
formData.append("subcategory", data.subcategory);
formData.append("purpose", data.purpose);
    formData.append("label", data.title);
    formData.append("description", data.description);


 formData.append("city", data.city);
formData.append("taluk", data.taluk);
formData.append("district", data.district);
formData.append("state", data.state);

formData.append(
  "location",
  `${data.city}, ${data.taluk}, ${data.district}, ${data.state}`
);
    formData.append("village", data.village);
    formData.append("pincode", data.pincode);
    formData.append("google_location", data.googleLocation);

    
    formData.append("land_area", data.landArea);
formData.append("sq_ft", data.squareFeet);


  
    formData.append("owner", data.owner);
    formData.append("phone", data.phone);
    formData.append("whatsapp", data.whatsapp);


    let price = "";

    if (data.purpose === "rent") {
      price = data.pricing.monthlyRent;
      formData.append("monthly_rent", data.pricing.monthlyRent);
      formData.append("deposit", data.pricing.deposit);
    }

    if (data.purpose === "lease") {
      price = data.pricing.totalAmount;
      formData.append("total_amount", data.pricing.totalAmount);
    }

if (data.purpose === "sale") {
  price = data.pricing.totalPrice;
  formData.append("total_price", data.pricing.totalPrice);
  // ✅ combine price + unit (space format)
  const perPrice = `${data.pricing.pricePerUnit}/${data.pricing.unit}`;
  formData.append("perprice", perPrice);
}

formData.append("price", price);

   formData.append(
  "field_values",
  JSON.stringify(data.features || [])
);
    formData.append("amenities", JSON.stringify(data.amenities || []));
    formData.append("selling_points", JSON.stringify(data.keyPoints || []));
    formData.append("landmarks", JSON.stringify(data.landmarks || []));

  
    if (data.images?.length > 0) {
      data.images.forEach((img) => {
        formData.append("images", img.file || img);
      });
    }

    // =====================
    // API CALL
    // =====================
    const res = await api.post("/agent/property/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Property error:", error.response?.data || error.message);
    return false;
  }
};


export const getPropertyListing = async () => {
  try {
    const result = await api.get("/agent/property/list/");

    return result.data?.data || []; // ✅ raw backend data only
  } catch (error) {
    console.error("property listing error:", error);
    return [];
  }
};

export const getDashboard = async () => {
  try {
    const result = await api.get("/agent/dashboard/");

    if (result.data?.data) {
      return result.data.data;
    }

    return result.data;
  } catch (error) {
    console.error("dashboard data couldn't get:", error);
    return [];
  }
};

export const deletePropertyListing = async(id)=>{
  try{
    const res = await api.delete(`/agent/property/${id}/`)
    return res.data
  }catch(err){
    console.error("delete property error:",err)
    return false
  }
}

export const getPropertyById = async (id) => {
  try {
    const res = await api.get(`/agent/property/${id}/`);
    return res.data?.data || null;
  } catch (error) {
    console.error("get property by id error:", error);
    return null;
  }
};


export const updatePropertyListing = async (id, data) => {
  try {
    const formData = new FormData();

    formData.append("category", data.category_id);
    formData.append("subcategory", data.subcategory);
    formData.append("purpose", data.purpose);

    formData.append("label", data.title);
    formData.append("description", data.description);

    formData.append("city", data.city);
    formData.append("taluk", data.taluk);
    formData.append("district", data.district);
    formData.append("state", data.state);

    formData.append(
      "location",
      `${data.city}, ${data.taluk}, ${data.district}, ${data.state}`
    );

    formData.append("village", data.village);
    formData.append("pincode", data.pincode);
    formData.append("google_location", data.googleLocation);

    formData.append("land_area", data.landArea);
    formData.append("sq_ft", data.squareFeet);

    formData.append("owner", data.owner);
    formData.append("phone", data.phone);
    formData.append("whatsapp", data.whatsapp);

    let price = "";

    if (data.purpose === "rent") {
      price = data.pricing.monthlyRent;
      formData.append("monthly_rent", data.pricing.monthlyRent);
      formData.append("deposit", data.pricing.deposit);
    }

    if (data.purpose === "lease") {
      price = data.pricing.totalAmount;
      formData.append("total_amount", data.pricing.totalAmount);
    }

if (data.purpose === "sale") {
  price = data.pricing.totalPrice;
  formData.append("total_price", data.pricing.totalPrice);
  const perPrice = `${data.pricing.pricePerUnit}/${data.pricing.unit}`;
  formData.append("perprice", perPrice);
}

    formData.append("price", price);

    formData.append(
      "field_values",
      JSON.stringify(data.features || [])
    );

    (data.amenities || []).forEach((id) => {
  formData.append("amenities", id);
});


    formData.append(
      "selling_points",
      JSON.stringify(data.keyPoints || [])
    );

    formData.append(
      "landmarks",
      JSON.stringify(data.landmarks || [])
    );

    // ✅ images handling
    if (data.images?.length > 0) {
      data.images.forEach((img) => {
        formData.append("images", img.file || img);
      });
    }

    const res = await api.put(`/agent/property/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;

  } catch (err) {
    console.error("update property error:", err);
    return false;
  }
};

export const agentPlans = async () => {
  try {
    const result = await api.get("/agent/current/plans/");

    if (result.data?.data) {
      return result.data.data;
    }

    return result.data;
  } catch (error) {
    console.error("plans couldn't get:", error);
    return [];
  }
};







