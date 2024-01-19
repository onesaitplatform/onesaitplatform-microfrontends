<!-- ReactView.vue -->
<script setup>
import ReactButton from "../components/ReactParser";
</script>

<template>
  <div id="react">
    <div>
      <div class="remote-component">
        <h2>React Button - loaded via Module Federation</h2>
        <ReactButton />
      </div>
    </div>
  </div>
  <div id="god"></div>
</template>
<style scoped>
.remote-component {
  padding: 20px;
  text-align: center;
}
</style>
