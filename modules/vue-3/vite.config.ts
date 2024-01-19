import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import federation from "@originjs/vite-plugin-federation";

const APPLICATION_PORT = 5006;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
  },
  server: {
    port: APPLICATION_PORT,
  },
  preview: {
    port: APPLICATION_PORT,
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: "vue-3",
      filename: "vue-3.js",
      exposes: {
        "./App": "./src/App.vue",
        "./router": "./src/routes/routes.ts",
      },
      remotes: {
        host: "http://localhost:3000/assets/main.ts",
      },
      shared: ["vue", "pinia", "vue-router"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
