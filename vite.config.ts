import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ENV_ALLOWED_PREFIX = "APP_";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: ENV_ALLOWED_PREFIX,
});
