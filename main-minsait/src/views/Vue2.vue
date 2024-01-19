<template>
  <div>
    <div id="vue2Item"></div>
    <Vue2Item />
  </div>
</template>

<script>
import { ref } from "vue";
import Content from "../components/Content.vue";
import { vue2ToVue3 } from "../utils";
import Vue2App from "vue2App/App";
export default {
  components: {
    Content,
    Vue2Item: vue2ToVue3(Vue2App, "vue2Item"),
  },
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>
