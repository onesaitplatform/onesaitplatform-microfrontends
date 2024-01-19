<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const navigateTo = (route) => {
  if (!router) {
    console.error("El router no está configurado correctamente.");
  }

  router.push({ name: route });
};
const handleRemoteNavigate = (event) => {
  router.push(event.detail);
};

onMounted(() => {
  document.addEventListener("remoteNavigateTo", handleRemoteNavigate);
});

onUnmounted(() => {
  document.removeEventListener("remoteNavigateTo", handleRemoteNavigate);
});
</script>

<template>
  <Suspense>
    <div id="nav">
      <HelloWorld msg="Microfronend 2" />
      <div style="text-align: center; margin-top: 30px">
        <button @click="navigateTo('home')">Home</button> |
        <button @click="navigateTo('about')">About</button>
      </div>
      <router-view />
    </div>
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
