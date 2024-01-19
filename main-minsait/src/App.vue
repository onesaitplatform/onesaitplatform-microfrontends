<template>
  <template v-if="!route.path.includes('login')">
    <main-header v-if="!route.path.includes('login')" />
    <main style="display: grid; grid-template-columns: auto 1fr">
      <one-main-navigation
        v-if="!route.path.includes('login')"
        id="main-navigation"
        .navigation="navigation"
        accessibility-label="Menú de navegación"
        drawer-accessibility-label="Drawer del menú de navegación"
        drawer-accessibility-label-close="Menú de navegación"
        drawer-replace-main-logo="false"
        drawer-one-logo-text="onesait"
        drawer-one-logo-link="#"
        .clickCallback="changeRoute"
      ></one-main-navigation>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </main>
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useNavManager } from "./composables/navManager";
import { useRoute, useRouter } from "vue-router";

import jwtDecode from "jwt-decode";
import { getLogoutTimer } from "../env-config";

import MainHeader from "./components/main-header/MainHeader.vue";

const navigation = ref(useNavManager().navigation);

const idleTime = +getLogoutTimer();
const timeRemaining = ref(idleTime);
let timer = null;

const mainServices = ref([]);
const route = useRoute();
const router = useRouter();
const actualUser = ref("");
const changeRoute = (element, event) => {
  event.preventDefault();

  router.push(element.to);
};

onMounted(() => {});
</script>

<style lang="scss">
.main-content {
  overflow: hidden;
  max-height: $--nav-height;
  //overflow: auto;
}

#app {
  overflow: hidden;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
