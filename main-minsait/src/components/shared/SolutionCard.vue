<template>
<div class="solution-card">
  <div class="solution-card__header">
    <h3 class="solution-card__name">{{ solution.name }}</h3>
    <one-link to="" icon="arrow-right" size="large"></one-link>
  </div>
  <div class="solution-card__market">{{ solution.market }}</div>
  <div class="solution-card__installations">{{ solution.installations }} instalaciones</div>
  <div class="solution-card__footer">
    <one-tag class="solution-card__status" :type="formatStatus(solution.status)">{{ formatStatusText(solution.status) }}</one-tag>
    <div class="solution-card__act">{{ solution.act }}</div>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  solution: {
    type: Object,
    required: true
  }
})
const formatStatus = val => {
  if (val === 'active') {
    return 'success'
  } else if (val === 'deprecated') {
    return 'error'
  } else if (val === 'draft') {
    return 'warning'
  }
  return ''
}
const formatStatusText = val => {
  if (val === 'active') {
    return 'Activo'
  } else if (val === 'deprecated') {
    return 'Obsoleto'
  } else if (val === 'draft') {
    return 'Borrador'
  }
  return ''
}
</script>

<style scoped lang="scss">
.solution-card {
  padding: $space-200;
  border: $border-size-200 solid var(--color-border-active);
  border-radius: $radius-300;
  width: 100%;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $space-200;
  }
  &__name {
    @extend .one-txt-title-150;
  }
  &__market {
    @extend .one-txt-subtitle-100;
  }
  &__installations {
    @extend .one-txt-body-200;
    margin-top: $space-200;
  }
  &__footer {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__act {
    @extend .one-txt-subtitle-100;
  }
}
</style>