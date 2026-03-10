
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // important for cookies
});

// REQUEST INTERCEPTOR (Add access token)

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

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

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      try {

        console.log("Refreshing access token...");

        // refresh token comes from HttpOnly cookie automatically
        const { data } = await axios.post(
          `${BASE_URL}refresh/`,
          {},
          { withCredentials: true }
        );

        if (data?.access_token) {

          localStorage.setItem("accessToken", data.access_token);

          originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

          return api(originalRequest);
        }

      } catch (refreshError) {

        console.error("Refresh token failed:", refreshError);

        localStorage.removeItem("accessToken");

        window.location.href = "/admin";
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
