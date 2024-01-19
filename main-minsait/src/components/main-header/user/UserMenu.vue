<template>
  <ul class="one-actions-menu__ul one-actions-menu--user__ul">
    <li class="user-ul__user-name">
      <p>{{ "user" }}</p>
      <span>{{ "user" }}</span>
    </li>
    <li class="one-actions-menu__separator user-ul__languages">
      <lang-selector />
    </li>
    <li class="one-actions-menu__separator">
      <a href="/">
        <one-icon name="user"></one-icon>
        {{ t("profile") }}
      </a>
    </li>
    <li>
      <a href="/">
        <one-icon name="setting"></one-icon>
        {{ t("settings") }}
      </a>
    </li>
    <li>
      <a href="/">
        <one-icon name="user-role"></one-icon>
        {{ t("account") }}
      </a>
    </li>
    <li class="one-actions-menu__separator">
      <a href="/">
        <one-icon name="book"></one-icon>
        {{ t("help") }}
      </a>
    </li>
    <li>
      <a href="/">
        <one-icon name="list"></one-icon>
        {{ t("suggest") }}
      </a>
    </li>
    <li class="one-actions-menu__separator user-ul__themes">
      <theme-selector />
    </li>
    <li class="one-actions-menu__separator">
      <a href="/">
        <one-icon name="info"></one-icon>
        {{ t("terms") }}
      </a>
    </li>
    <li class="one-actions-menu__separator">
      <a href="#" @click.prevent="handleLogout">
        <one-icon name="logout"></one-icon>
        {{ t("logout") }}
      </a>
    </li>
  </ul>
</template>
<script setup>
import i18n from "./lang/index";
import { defineProps, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import LangSelector from "../../shared/LangSelector.vue";
import ThemeSelector from "../../shared/ThemeSelector.vue";
import { loginConfig } from "../../../../login.config";
import { logout } from "./../../../services/login";

const props = defineProps({
  apiData: {
    type: Object,
    default: () => loginConfig,
  },
});

const { apiData } = toRefs(props);

const { t } = useI18n(i18n);

// Limpia los parámetros de la URL
// const currentRoute = router.currentRoute.value;
// router.push({
//   ...currentRoute,
//   params: {},
//   query: {},
// });
</script>
<style lang="scss" scoped>
.one-actions-menu--user__ul {
  .user-ul__user-name {
    @include txt-body-300;
    color: var(--color-txt-primary);
    padding: $space-150 $space-100;
  }

  &.one-actions-menu__ul {
    .user-ul__languages,
    .user-ul__themes {
      padding: $space-100 0;
    }
  }
}
</style>
