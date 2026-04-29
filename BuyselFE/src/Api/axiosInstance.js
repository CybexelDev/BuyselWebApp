

import axios from "axios";
import { data } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the access token
let isRefreshing = false;
let refreshSubscribers = [];
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    console.log("TOKEN:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);



// RESPONSE INTERCEPTOR (Handle token refresh)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
console.log("INTERCEPTOR HIT", {
  status: error.response?.status,
  retry: originalRequest._retry,
  url: originalRequest.url
});
    if (
      (error.response?.status === 401 || error.response?.status === 403)
    ) {

      // 🚫 prevent infinite loop
      if (originalRequest._retry) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      // 🔥 if already refreshing → queue requests
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(api(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
          console.log("REFRESH TOKEN:", refreshToken);


        const { data } = await axios.post(
          `${BASE_URL}agent/refresh-token/`,
          { refresh: refreshToken }
        );

        const newAccess = data.access;
        const newRefresh = data.refresh;

        localStorage.setItem("accessToken", newAccess);
        localStorage.setItem("refreshToken", newRefresh);

        // 🔥 update default header
        api.defaults.headers.common["Authorization"] = `Bearer ${newAccess}`;

        // 🔥 retry queued requests
        refreshSubscribers.forEach((cb) => cb(newAccess));
        refreshSubscribers = [];

        // retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return api(originalRequest);

      } catch (err) {
        localStorage.clear();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;










// import axios from "axios";
// const BASE_URL = import.meta.env.VITE_BASE_URL ;

// const api = axios.create({
//   baseURL: BASE_URL, 
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add a request interceptor to include the access token

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );



// api.interceptors.response.use(
//   async (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refreshToken");  

//       if (!refreshToken) {
//         console.log("No refresh token available. Redirect to login.");
//         window.location.href = "/admin"; // Redirect to login if no refresh token
//         return Promise.reject(error);
//       }

//       try {
//         console.log("refresh token sented");
//         // Send refresh token to backend
//         const { data } = await axios.post("http://127.0.0.1:8000/api/refresh/", {
          
//           refresh : refreshToken,  // Send refresh_token as part of the request body
//         },
       
//          {
//           headers: {
//             'Content-Type': 'application/json',  // Ensure you're sending JSON data
//           },
//         }
          
//         );
 
//         console.log(data, "response refresh token !!!!!!!!!!!!!!!!!!!!1");
        
//         if (data?.access_token && data?.refresh_token) {
//           localStorage.setItem("accessToken", data.access_token);
//           localStorage.setItem("refreshToken", data.refresh_token);  // Store new refresh token
//           originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
//           return api(originalRequest);
//         }
//       } catch (refreshError) {
//         console.error("Token refresh failed:", refreshError);
//         // In case refresh fails, clear tokens and redirect to login
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         window.location.href = "/admin"; // Redirect to login
//       }
//     }

//     return Promise.reject(error);
//   }
// );





// export default api;
