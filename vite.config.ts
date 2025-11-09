import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" && process.env.VERCEL === undefined
    ? "/Vacaka/"
    : "/",
  plugins: [react()],
  assetsInclude: ["**/*.gif", "**/*.svg"],
})
