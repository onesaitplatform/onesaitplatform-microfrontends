<template>
  <div id="vue2Item" style="text-align: center; padding: 20px">
    <img
      alt="Logo"
      src="http://localhost:3000/vue.svg"
      width="200"
      height="200"
    />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["count"],
  data() {
    return {
      title: "Vue 2 Component in Action",
    };
  },
  methods: {
    incrementCount() {
      this.$emit("increment");
    },
  },
};
</script>

<style scoped></style>
