<script setup>
import { defineAsyncComponent } from "vue";

const AsyncVue2Component = defineAsyncComponent(() => import("vue-3-2/App"));
</script>

<template>
  <div class="microfrontend-container">
    <AsyncVue2Component />
  </div>
</template>

<style scoped>
.microfrontend-container {
  padding: 20px;
}
</style>
