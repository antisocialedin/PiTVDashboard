import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
/* export default defineConfig({
  plugins: [vue(), tailwindcss()],
}); */

export default defineConfig({
  plugins: [vue()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT,
    allowedHosts: ['pitvdashboard-nbp1.onrender.com']
  }
})