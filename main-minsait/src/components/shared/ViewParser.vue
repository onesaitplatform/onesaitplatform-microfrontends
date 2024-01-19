<template>
  <div class="wrapper">
    <div
      :style="fullheight && 'height: calc(100vh - 200px);'"
      class="wrapper__main-father"
    >
      <div
        :style="[paddingCero ? 'padding:0px' : '', `max-width:${customWidth}`]"
        class="wrapper__main-box"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  customWidth: {
    type: String,
    required: false,
  },
  paddingCero: {
    type: Boolean,
  },
  fullheight: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  &__main-father {
    display: flex;
    justify-content: center;
    flex: 1;
    height: calc(100vh - #{$--header-height} - 52px);
    overflow: auto;
  }

  &__main-box {
    height: 100%;
    padding: $space-300 $space-200;
    width: 100%;
    max-width: 1400px;
  }
}
</style>
