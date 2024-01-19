import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { splitVendorChunkPlugin } from "vite";
import { fileURLToPath, URL } from "url";
import federation from "@originjs/vite-plugin-federation";
const deps = require("./package.json").dependencies;
console.log(deps, typeof deps);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("one-") && tag.includes("-"),
        },
      },
      customElement: /one-$/,
    }),
    vueJsx(),
    splitVendorChunkPlugin(),
    federation({
      name: "minsait-microfront",
      remotes: {
        // ["vue-3-2"]: "http://localhost:5005/assets/vue-3-2.js",
        ["vue-3"]: "http://localhost:5006/assets/vue-3.js",
        reactApp: "http://localhost:5007/assets/reactApp.js",
        vue2App: {
          external: "http://localhost:3001/remoteEntry.js",
          format: "esm",
          from: "webpack",
        },
      },
      exposes: {
        "./piniaModule": "./src/main.ts",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(
          new URL("./src/shared/assets", import.meta.url)
        ),
      },
      {
        find: "@cmp",
        replacement: fileURLToPath(
          new URL("./src/shared/cmp", import.meta.url)
        ),
      },
      {
        find: "@stores",
        replacement: fileURLToPath(
          new URL("./src/shared/stores", import.meta.url)
        ),
      },
      {
        find: "@use",
        replacement: fileURLToPath(
          new URL("./src/shared/use", import.meta.url)
        ),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@one/webapp-ui/dist/theme-onesait/tokens/index.scss";
          @import "@one/webapp-ui/dist/theme-onesait/utils/index.scss";
          @import "@one/webapp-ui/dist/theme-onesait/common/_var.scss";
        `,
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    fs: {
      allow: ["../../"],
    },
    host: true,
    strictPort: true,
    port: 3000,
  },
  optimizeDeps: {
    include: ["@one/webapp-ui", "vue", "vue-router"],
  },
  // base: process.env.NODE_ENV === "production" ? "/oneops-ui" : "./",
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
