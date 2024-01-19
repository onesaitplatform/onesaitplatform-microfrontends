<template>
  <one-main-header
    header-logo-text="onesait"
    logo-url="/"
    main-navigation-mobile="true"
    main-navigation-accessibility-label=""
    rtl="false"
    actions-menu-icon="overflow-menu"
    show-user-menu="true"
    user-menu-text="User Menu"
    user-menu-always-on-header="true"
    user-menu-accessibility-role=""
    user-menu-accessibility-label=""
  >
    <suites-menu slot="suites" />
    <div slot="userAvatar">
      {{ actualUser }}
    </div>
    <user-menu slot="user" />
    <notifications-menu slot="notifications" />
    <div slot="breadcrumbs">
      <main-breadcrumbs />
    </div>

    <!-- <div slot="topbar">
      <p class="one-txt-body-300" style="color: var(--color-txt-primary)">
        Header top bar
      </p>
    </div> -->
  </one-main-header>
</template>
<script setup>
import SuitesMenu from "./suites/SuitesMenu.vue";
import UserMenu from "./user/UserMenu.vue";
import NotificationsMenu from "./notifications/NotificationsMenu.vue";
import MainBreadcrumbs from "./breadcrumbs/MainBreadcrumbs.vue";

const actualUser = "USER";
</script>
<style lang="scss">
.one-actions-menu__ul {
  padding: $space-100;

  li {
    &.one-actions-menu__separator {
      border-top: $border-size-200 solid var(--color-bg-hard-divisor);
      margin-top: $space-050;
      padding-top: $space-050;
    }

    & > a {
      display: flex;
      width: 100%;
      padding: $space-150 $space-100;
      gap: $space-100;
      min-height: rem(40);
      @include txt-body-300;
      color: var(--color-txt-primary);
      transition: 0.1s all ease;

      &:hover {
        color: var(--color-txt-button);
        background: var(--color-bg-interactive);
      }
    }
  }
}
</style>
