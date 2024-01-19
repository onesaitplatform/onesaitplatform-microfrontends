<template>
  <section :class="customClass" class="aside-module">
    <aside class="aside-module__aside">
      <div class="aside-module__tab-main">
        <div v-if="customAside">
          <slot name="customAside"></slot>
        </div>
        <div
          v-else
          v-for="(item, index) in props.tabs"
          :key="index"
          :class="[
            props.isDisabled && 'disabled-color',
            { active: activeName === item.type },
          ]"
          @click="setActiveTab(item.type)"
          class="aside-module__tab-item"
        >
          <h1 class="aside-module__tab-text">
            {{ t(`${item.i18n || item.name}`) }}
          </h1>
        </div>
      </div>
    </aside>
    <main
      :style="[
        paddingCero ? 'padding:0px' : '',
        `max-width:${customWidth}`,
        overflow && 'overflow:auto',
      ]"
      class="aside-module__main"
    >
      <slot name="content"></slot>
    </main>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, getCurrentInstance, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import UsersTable from "@/components/users/UsersTable.vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
  activeNameProp: {
    type: String,
    default: "",
  },
  customWidth: {
    type: String,
    required: false,
  },
  customClass: {
    type: String,
    required: false,
  },
  paddingCero: {
    type: Boolean,
    required: false,
  },
  isDisabled: {
    type: Boolean,
    required: false,
  },
  overflow: {
    type: Boolean,
    required: false,
  },
  customAside: {
    type: Boolean,
    required: false,
  },
});
const { t } = useI18n();
const route = useRoute();
const instance = getCurrentInstance();
const activeName = ref("");

const tabs = ref([]);
let tableData = ref([]);
const fetchData = async (tabName) => {};

const changeName = (item) => {
  return item;
};

const setActiveTab = (name) => {
  activeName.value = name;
  instance.emit("activeName", activeName.value);
};

watch(
  () => props.activeNameProp,
  (newType) => {
    if (newType) activeName.value = newType;
  },
  {
    deep: true,
  }
);
</script>

<style lang="scss">
.disabled-color {
  color: var(--color-txt-disabled) !important;
  pointer-events: none;
}
.disabled-color > h1 {
  color: var(--color-txt-disabled) !important;
  pointer-events: none;
}
.aside-module {
  height: calc(100vh - #{$--header-height});
  &__aside {
    overflow: auto;
    padding: $space-100;
    height: 100%;
    width: 300px;
    background-color: var(--color-bg-secondary);
    border-right: 1px solid var(--color-border-hard-divisor);
  }

  display: flex;
  &__tab-main {
    padding: $space-100;
  }
  &__tab-item {
    cursor: pointer;
    display: flex;
    margin-top: $space-100;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-left: 3px solid var(--color-border-hard-divisor);
  }
  &__tab-item.active {
    border-left: 3px solid var(--color-border-interactive);
    & .aside-module__tab-text {
      color: var(--color-border-interactive);
    }
  }
  &__tab-text {
    @include txt-body-400;
    padding: $space-100;
  }
  &__main {
    & > div {
      max-width: 100%;
      width: 100%;
    }

    justify-content: center;
    padding: $space-200;
    flex: 1;
    & > input {
      width: 100%;
    }
    &__text {
      background-color: #ecf6fc;

      padding: 12px 16px 12px 16px;
      border: 2px solid #61a0ff;
      gap: 8px;
    }
    &__button {
      text-align: end;
    }
  }
}
</style>
