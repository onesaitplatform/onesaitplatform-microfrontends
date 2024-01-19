<script setup>
import { defineAsyncComponent, onMounted } from "vue";

const AsyncVue3Component = defineAsyncComponent(() => import("vue-3/App"));

onMounted(() => {
  const routeToMicrofrontend = () => {
    const event = new CustomEvent("remoteNavigateTo", { detail: "vue-3/" });
    document.dispatchEvent(event);
  };

  // Lanzar el evento al montar el componente
  routeToMicrofrontend();
});
</script>

<template>
  <div class="microfrontend-container">
    <AsyncVue3Component />
  </div>
</template>

<style scoped>
.microfrontend-container {
  padding: 20px;
}
</style>
