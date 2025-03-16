import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    react(),
  ],
  define:{
    'process.env.VITE_api_key':JSON.stringify(process.env.VITE_api_key)
  }
})
