<template>
  <one-popover
    trigger="hover"
    placement="bottom"
    offset="4"
    strategy="fixed"
    enterable="true"
  >
    <div
      :class="`status-percentage status-percentage--${typeStatus} ${
        props.hoverable ? 'status-percentage--hoverable' : ''
      }`"
    >
      <div class="status-percentage__dot"></div>
      <span class="status-percentage__value">{{ props.value }}</span>
      <p>{{ typeStatus }}</p>
    </div>
    <div slot="content" class="status-percentage__popover">
      <div class="status-percentage__popover-header">
        <span>{{ t("common.statusPercentage.adjustmentTo") }}</span>
        <div :class="`status-percentage status-percentage--${typeStatus}`">
          <div class="status-percentage__dot"></div>
          <span class="status-percentage__value">{{ props.value }}</span>
        </div>
      </div>
      <div class="status-percentage__popover-body">
        <div class="status-percentage__popover-block">
          <h3>{{ t("common.statusPercentage.normativeReferences") }}</h3>
          <div class="status-percentage__popover-items">
            <!-- TODO Cmabiar por valores reales -->
            <one-tag>asasdasdd</one-tag>
            <one-tag>asdasd</one-tag>
            <one-tag>asd</one-tag>
            <one-tag>asasdasdasdadasd</one-tag>
            <one-tag>asssssd</one-tag>
            <one-tag>asssd</one-tag>
            <one-tag>asdasadasdad</one-tag>
            <one-tag>asd</one-tag>
            <one-tag>adddddsd</one-tag>
          </div>
        </div>
        <div class="status-percentage__popover-block">
          <h3>{{ t("common.statusPercentage.keywords") }}</h3>
          <div class="status-percentage__popover-items">
            <one-tag>asasdasdd</one-tag>
            <one-tag>asdasd</one-tag>
            <one-tag>asd</one-tag>
            <one-tag>asasdasdasdadasd</one-tag>
          </div>
        </div>
      </div>
    </div>
  </one-popover>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const getStatus = () => {
  const val = parseInt(props.value);

  if (val >= 0 && val <= 30) {
    return "error";
  } else if (val > 30 && val <= 60) {
    return "warning";
  } else if (val > 60 && val <= 100) {
    return "success";
  } else {
    return "";
  }
};

const typeStatus = computed(() => {
  return getStatus();
});

const props = defineProps({
  value: {
    type: String || Number,
    required: true,
  },
  type: {
    type: String,
    default: "",
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.status-percentage {
  $parent: &;
  display: flex;
  align-items: center;
  gap: $space-100;

  &--hoverable {
    cursor: pointer;
  }

  &__dot {
    background: var(--color-bg-middle);
    border: 1px solid var(--color-border-input);
    width: rem(8);
    height: rem(8);
    border-radius: 50%;
  }

  &__value {
    @include txt-body-300;
  }

  &--success {
    #{$parent}__dot {
      background: var(--color-status-success-300);
      border: 1px solid var(--color-status-success-500);
    }
    #{$parent}__value {
      color: var(--color-status-success-400);
    }
  }

  &--warning {
    #{$parent}__dot {
      background: var(--color-status-warning-300);
      border: 1px solid var(--color-status-warning-500);
    }
    #{$parent}__value {
      color: var(--color-status-warning-400);
    }
  }

  &--error {
    #{$parent}__dot {
      background: var(--color-status-error-300);
      border: 1px solid var(--color-status-error-500);
    }
    #{$parent}__value {
      color: var(--color-status-error-400);
    }
  }

  &__popover {
    padding: $space-200;
    display: flex;
    flex-direction: column;
    gap: $space-150;

    &-header {
      display: flex;
      gap: $space-100;

      span {
        @include txt-title-100;
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      gap: $space-150;

      h3 {
        @include txt-body-200;
        color: var(--color-txt-secondary);
      }
    }

    &-block {
      display: flex;
      flex-direction: column;
      gap: $space-050;
    }

    &-items {
      display: flex;
      flex-wrap: wrap;
      max-width: 390px;
      gap: $space-050;
    }
  }
}
</style>
