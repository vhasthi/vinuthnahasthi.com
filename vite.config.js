import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "vinuthnahasthi.com", // custom local hostname
    port: 80,             // optional, default Vite port
  },
});