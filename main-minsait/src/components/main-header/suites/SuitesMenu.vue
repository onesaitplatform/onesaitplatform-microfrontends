<template>
  <ul class="one-actions-menu__ul one-actions-menu--suites__ul">
    <li class="suites__title">
      <suites-logo />
    </li>
    <li class="suites__item">
      <a href="/">
        <product-logo />
        <span>{{ t('product') }} | {{ t('module') }}</span>
      </a>
    </li>
    <li class="suites__item">
      <a href="/">
        <product-logo />
        <span>{{ t('product') }} | {{ t('module') }}</span>
      </a>
    </li>
    <li class="suites__item">
      <a href="/">
        <product-logo />
        <span>{{ t('product') }} | {{ t('module') }}</span>
      </a>
    </li>
    <li class="suites__item">
      <a href="/">
        <product-logo />
        <span>{{ t('product') }} | {{ t('module') }}</span>
      </a>
    </li>
    <li class="suites__item">
      <a href="/">
        <product-logo />
        <span>{{ t('product') }} | {{ t('module') }}</span>
      </a>
    </li>
    <li class="suites__item">
      <a href="/">
        <product-logo />
        <span>{{ t('product') }} | {{ t('module') }}</span>
      </a>
    </li>
  </ul>
</template>
<script>
import i18n from './lang/index'
import { useI18n } from "vue-i18n"
import SuitesLogo from './SuitesLogo.vue'
import ProductLogo from './ProductLogo.vue'

export default {
  name: 'SuitesMenu',
  i18n,
  components: {
    SuitesLogo,
    ProductLogo
  },
  setup() {
    const { t } = useI18n(i18n)

    return {
      t
    }
  }
}
</script>
<style lang="scss" scoped>
.one-actions-menu--suites__ul {
  &.one-actions-menu__ul {
    padding: 0;
  }

  .suites__title {
    padding: $space-100 $space-100 $space-100 $space-200;
    margin-bottom: $space-100;
    color: var(--color-bg-primary);
    background-color: var(--color-bg-hover);
    border-bottom: $border-size-200 solid var(--color-border-hard-divisor);
  }

  .suites__item {
    margin: 0 $space-100;

    &:last-child {
      margin-bottom: $space-100;
    }

    & > a {
      display: flex;
      align-items: center;
      padding: $space-100;
      color: var(--color-txt-primary);
      @include txt-logo-module;

      &:hover {
        color: var(--color-txt-primary);
        background-color: var(--color-bg-hover-2);
      }

      svg {
        width: rem(13);
        height: rem(23);
        margin-right: $space-100;
        fill: var(--color-txt-primary);
      }

      span {
        display: inline-block;
        vertical-align: middle;
        max-width: rem(160);
        white-space: pre;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>