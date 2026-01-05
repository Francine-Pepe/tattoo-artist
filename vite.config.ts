import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    // Optional: Define global constants
    define: {
      // You can define global constants here if needed
      __APP_ENV__: JSON.stringify(env.NODE_ENV),
    },
  };
});

/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({

  const env = loadEnv(mode, process.cwd(), '');
  
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
}) */
