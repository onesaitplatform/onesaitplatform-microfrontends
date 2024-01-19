import { createRouter, createWebHistory } from "vue-router";

import { useNavManager } from "../composables/navManager";
import Vue2View from "@/views/Vue2.vue";
import Vue3View from "@/views/Vue3.vue";
import HomeView from "@/views/HomeView.vue";
import ReactView from "@/views/React.vue";
import remoteRoutes from "vue-3/router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "base",
      component: HomeView,
      meta: {
        private: true,
        breadcrumbTextKey: "home",
      },
    },
    {
      path: "/vue-2",
      name: "vue2",
      component: Vue2View,
    },
    {
      path: "/vue-3",
      name: "vue3",
      component: Vue3View,
      children: [], // Deja esto vacío por ahora
    },
    {
      path: "/react",
      name: "react",
      component: ReactView,
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  const hashIndex = to.fullPath.indexOf("#");
  useNavManager().setCurrentItem(to);
  if (hashIndex !== -1) {
    const cleanPath = to.fullPath.substr(0, hashIndex);
    next(cleanPath);
  } else {
    next();
  }
});

router.addRoute({
  path: "/vue-3",
  name: "vue3",
  component: Vue3View,
  children: await remoteRoutes,
});

export default router;
