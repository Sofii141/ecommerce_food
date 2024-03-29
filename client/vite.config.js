import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.VITE_APP_SERVER_DOMIN": JSON.stringify(
        process.env.VITE_APP_SERVER_DOMIN
      ),
    }),
    replace({
      "process.env.VITE_APP_ADMIN_EMAIL": JSON.stringify(
        process.env.VITE_APP_ADMIN_EMAIL
      ),
    }),
  ],
});
