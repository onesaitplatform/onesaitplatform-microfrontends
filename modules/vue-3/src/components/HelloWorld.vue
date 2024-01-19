<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="center">
    <div>
      <a href="https://vuejs.org/" target="_blank">
        <img
          alt="Pigeon logo"
          class="logo"
          src="http://localhost:3000/vite.svg"
          width="400"
          height="400"
        />
      </a>
      <h1>{{ msg }}</h1>

      <p class="read-the-docs">MICRO VUE 3 SIN ODS</p>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.center {
  display: flex;
  justify-content: center;
  text-align-last: center;
}
</style>
