import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const deps = require("./package.json").dependencies;
// https://vitejs.dev/config/
const APPLICATION_PORT = 5007;
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: APPLICATION_PORT,
  },
  preview: {
    port: APPLICATION_PORT,
  },
  plugins: [
    react(),
    federation({
      name: "reactApp",
      filename: "reactApp.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          version: deps.react,
        },
        "react-dom": {
          singleton: true,
          version: deps["react-dom"],
        },
      },
    }),
  ],
});
