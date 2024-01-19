// router.js en el microfrontend Vue 3

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/vue-3",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomePage.vue"),
  },
  {
    path: "/vue-3/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default routes; // Exporta el array de rutas
