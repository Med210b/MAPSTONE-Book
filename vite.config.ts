import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL FIX: This MUST match your GitHub repository name exactly
  base: '/MAPSTONE-Book/', 
})