// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwind from "tailwindcss/vite";
import { fileURLToPath } from "url";
import { URL } from "url";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react()],
});
