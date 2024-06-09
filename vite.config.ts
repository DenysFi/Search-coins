import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/*": path.resolve(__dirname, "src/*"),

    }
<<<<<<< HEAD
  },
  base: '/Search-coins'
=======
  }
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
})
