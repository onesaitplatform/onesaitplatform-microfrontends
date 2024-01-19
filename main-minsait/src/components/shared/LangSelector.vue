<template>
  <one-select
    :value="locale"
    :placeholder="t('select')"
    :label="t('pickLang')"
    :label-hidden="labelHidden"
    @changed="({ detail }) => locale = detail"
  >
    <one-option
      v-for="lang in langs"
      :key="`lang-${lang}`"
      :value="lang"
      :label="getLabel(lang)"
    ></one-option>
  </one-select>
</template>

<script>
import { useI18n } from "vue-i18n"
import { computed, watch } from 'vue';

export default {
  name: 'LangSelector',
  props: {
    labelHidden: Boolean
  },
  setup() {
    const { t, messages, locale } = useI18n()

    const langs = computed(() => {
      return Object.keys(messages.value);
    })


    const getLabel = (lang) => {
      return messages.value[lang].label
    }

    watch(
      () => locale.value,
      (val) => {
        document.getElementsByTagName("html")[0].lang = val
      },
      { immediate: true }
    )

    return {
      langs,
      getLabel,
      t,
      locale
    }
  }
}
</script>