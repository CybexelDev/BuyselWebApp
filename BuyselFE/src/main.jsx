import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/app/store.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'sonner';

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <GoogleOAuthProvider clientId={client_id}>
          <Toaster
            position="top-left"
            className="flex justidy-center items-center" toastOptions={{
              unstyled: true,
              classNames: {
                toast: `
                   glass
                   text-black
                   px-10 py-3 
                   text-center
                   flex items-center 
                   justify-center
                   gap-3   
                   mx-auto
                   host-grotesk
                   el
                   transition-all duration-300 ease-out
                   animate-[fadeIn_0.3s_ease-out]
                   `, error: 'text-red-400',
                   warning: 'text-yellow-400',
                   info: 'text-blue-400',
              },
            }}
          />
          <App />
        </GoogleOAuthProvider>
      </StrictMode>
    </PersistGate>
  </Provider>
)