import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import routes from "./routes/routes";
import { createRouter, createWebHistory } from "vue-router";
export const pinia = createPinia();

const router = createRouter({
  history: createWebHistory("/vue-3"),
  routes,
});
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
