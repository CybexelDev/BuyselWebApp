import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

      VitePWA({
  registerType: "autoUpdate",

  manifest: {
    name: "Buysel - Real Estate",
    short_name: "Buysel",
    description: "Find your dream property with Buysel.",
    theme_color: "#75C222",
    background_color: "#ffffff",
    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    scope: "/",

    icons: [
      {
        src: "/buysel-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/buysel-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },

  workbox: {
    maximumFileSizeToCacheInBytes: 4 * 1024 * 1024
  }
})
  ],
})
