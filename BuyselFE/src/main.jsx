import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/app/store.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <StrictMode>
      <GoogleOAuthProvider clientId={client_id}>
       <App />
       </GoogleOAuthProvider>
     </StrictMode>
    </ PersistGate >
  </Provider>
)



 


          // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pb-6">
  
          //   {/* Location */}
          //   <div className="poppins flex w-[269px] items-center h-[52px] bg-[#dfd7d7] rounded-[17px] ">
  
          //     <input
          //       type="text"
          //       placeholder="Location"
          //       className="bg-transparent w-full outline-none text-[12px] text-gray-700 placeholder-[#888888ED]"
          //     />
  
          //     <img src={location} alt="location" className="w-5" />
          //   </div>
  
          //   {/* Property */}
          //   <div className="poppins flex items-center h-[52px] bg-[#dfd7d7] rounded-[17px] px-3">
  
          //     <input
          //       type="text"
          //       placeholder="Property Type"
          //       className="bg-transparent w-full outline-none text-[12px] text-gray-700 placeholder-[#888888ED]"
          //     />
  
          //     <img src={apartments} alt="apartment" className="w-5" />
          //   </div>
  
          //   {/* Budget */}
          //   <div className="poppins flex items-center h-[52px] bg-[#dfd7d7] rounded-[17px] px-3">
  
          //     <input
          //       type="text"
          //       placeholder="Budget"
          //       className="bg-transparent w-full outline-none text-[12px] text-gray-700 placeholder-[#888888ED]"
          //     />
  
          //     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#000" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m38.32 72H176a8 8 0 0 1 0 16h-8.19A44.06 44.06 0 0 1 124 152h-12.68l53.59 41.69a8 8 0 1 1-9.82 12.62l-72-56A8 8 0 0 1 88 136h36a28 28 0 0 0 27.71-24H88a8 8 0 0 1 0-16h61.29A28 28 0 0 0 124 80H88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16h-18.08a43.9 43.9 0 0 1 8.4 16"/></svg>
          //   </div>
  
          //   {/* Button */}
          //   <button className="h-[52px] bg-[#6ABD11ED] text-white font-bold rounded-[17px] text-[15px]">
          //     Search Now
          //   </button>
  
          // </div>



