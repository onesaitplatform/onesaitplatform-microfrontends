import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// Import general styles
import "@one/webapp-ui/dist/theme-onesait/global.scss";
// Use web components library
import { defineCustomElements } from "@one/webapp-ui/dist/loader";
defineCustomElements(window);

// Import custom styles
import "./assets/scss/index.scss";
import i18n from "./lang/i18n.js";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("#app");
