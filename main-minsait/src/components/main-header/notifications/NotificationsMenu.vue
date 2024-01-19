<template>
  <one-actions-menu :accessibility-label="t('notificationsMenu')" icon="notification" popover-position='bottom-end'>
    <div slot="menu-content">
      <ul class="one-actions-menu__ul one-actions-menu--notifications__ul">
        <li class="notification__item notification__title">
          <div class="notification__item-inner">
            <h5 class="notification__item-title">
              {{ t('title') }}
              <one-badge
                type="warning"
                :value="(Object.values(notifications).filter(notification => notification.status > 0)).length"
                is-line="true"
                is-hidden="false"
              />
            </h5>
          </div>
        </li>
        <li
          v-for="(notification, index) in notificationsOrdered"
          :key="`notification-${index}`"
          class="notification__item"
          :class="{'notification__item--unread': !notification.status}"
        >
          <div class="notification__item-inner">
            <h6 class="notification__item-title">{{ notification.title }}</h6>
            <p class="notification__item-content">{{ notification.content }}</p>
            <time class="notification__item-date" :datetime="notification.date">{{ notification.date }}</time>
            <a class="notification__item-link" :href="notification.url" :title="notification.linkText">{{ notification.linkText }}</a>
          </div>
        </li>
      </ul>
    </div>
  </one-actions-menu>
</template>
<script>
import _ from 'lodash'
import i18n from './lang/index';
import { useI18n } from "vue-i18n"
import { computed } from 'vue';
import Notifications from '../../../assets/notifications.json'

export default {
  name: 'NotificationsMenu',
  i18n,
  setup() {
    const { t } = useI18n(i18n)

    const notifications = Notifications

    const notificationsOrdered = computed(() => {
      return _.orderBy(Object.values(notifications), ['status', 'date'], ['asc', 'desc'])
    })

    return {
      t,
      notifications,
      notificationsOrdered
    }
  }
}
</script>
<style lang="scss" scoped>
.one-actions-menu--notifications__ul {
  max-width: rem(360);
  padding: 0;

  .notification__item {
    margin: $space-100 0 $space-100;

    &.notification__title {
      .notification__item-title {
        margin: 0;
        padding: 0;
        @include txt-title-100;
        display: flex;
        align-items: center;
        gap: $space-100;
      }
    }

    &:not(:last-child) {
      border-bottom: $border-size-200 solid var(--color-border-soft-divisor);
    }

    &--unread {
      .notification__item-inner {
        background-color: var(--color-bg-disable);
      }
    }

    &-inner {
      margin: $space-100;
      padding: $space-100;
    }

    &-title {
      @include txt-body-300;
      padding-bottom: $space-050;
    }

    &-content {
      @include txt-body-200;
      padding-bottom: $space-050;
    }

    &-date {
      color: var(--color-txt-secondary);
      padding-bottom: $space-200;
      display: block;
    }

    &-link {
      @include txt-body-300;
      color: var(--color-txt-interactive);
      transition: 0.5s;
      display: inline;
      padding: 0;
      min-height: initial;

      &:hover {
        background-color: initial;
        color: var(--color-bg-hover);
      }
    }
  }

}
</style>