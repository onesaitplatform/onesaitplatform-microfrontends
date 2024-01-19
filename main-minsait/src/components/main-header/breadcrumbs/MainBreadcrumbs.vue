<template>
  <one-breadcrumb
    separator=">"
    :accessibility-label="t('title')"
    :key="breadcrumbKey"
  >
    <one-breadcrumb-item
      v-for="(el, index) in matchedRoutes"
      :key="`breadcrumb-${el.meta.breadcrumbTextKey}`"
      :to="`#${el.path}`"
      :is-clickable="index < matchedRoutes.length - 1"
    >
      {{ el.meta.compoundBreadcrumb }}
    </one-breadcrumb-item>
  </one-breadcrumb>
</template>
<script>
import i18n from "./lang/index";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
  name: "MainBreadcrumbs",
  i18n,
  setup() {
    const route = useRoute();
    const { t, locale } = useI18n(i18n);

    let matchedRoutes = ref([]);
    let breadcrumbKey = ref(0);

    const routesHandler = () => {
      matchedRoutes.value = route.matched
        .filter((e) => e.meta.breadcrumbTextKey || e.meta.breadcrumbParam)
        .map((e) => setBreadcrumb(e));
      breadcrumbKey.value++;
    };

    const setBreadcrumb = (r) => {
      if (r.meta.breadcrumbParam && r.meta.breadcrumbTextKey) {
        r.meta.compoundBreadcrumb = t(
          "breadcrumb." + route.params[r.meta.breadcrumbParam]
        );
      } else if (route.meta.breadcrumbParam) {
        if (!r.meta.breadcrumbTextKey)
          r.meta.compoundBreadcrumb = route.params[r.meta.breadcrumbParam];
        else
          r.meta.compoundBreadcrumb = t(
            "breadcrumb." + r.meta.breadcrumbTextKey
          );
      } else {
        r.meta.compoundBreadcrumb = t("breadcrumb." + r.meta.breadcrumbTextKey);
      }

      return r;
    };

    watch(
      () => route.name,
      () => {
        routesHandler();
      },
      { immediate: true }
    );

    watch(
      () => locale.value,
      () => {
        routesHandler();
      }
    );

    return {
      matchedRoutes,
      breadcrumbKey,
      t,
    };
  },
};
</script>
