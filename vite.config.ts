import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: "auto",
      strategies: "generateSW",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
        cleanupOutdatedCaches: false,
      },
    }),
  ],
  server: {
    open: mode === "development",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-emotion": ["@emotion/react", "@emotion/styled"],
          "vendor-chakra-ui": ["@chakra-ui/react", "@chakra-ui/icons"],
          "vendor-zustand": ["zustand"],
          "vendor-fontsource": ["@fontsource/inter"],
          "vendor-react-router": ["react-router-dom"],
          "vendor-framer-motion": ["framer-motion"],
        },
      },
    },
  },
}));
