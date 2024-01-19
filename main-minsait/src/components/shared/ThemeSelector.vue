<template>
  <one-select
    :value="themeStore.getCurrentTheme"
    :placeholder="$t('select')"
    :label="$t('pickTheme')"
    @changed="({ detail }) => themeStore.setCurrentTheme(detail)"
  >
    <one-option
      v-for="theme in themes"
      :key="`theme-${theme}`"
      :value="theme"
      :label="getLabel(theme)"
    ></one-option>
  </one-select>
</template>
<script>
import { useThemeStore } from '../../store/theme'

export default {
  name: 'ThemeSelector',
  setup() {
    const theme = 'light'
    const themes = ['light', 'dark']
    const themeStore = useThemeStore()

    const getLabel = (theme) => {
      return theme.charAt(0).toUpperCase() + theme.slice(1)
    }

    return {
      theme,
      themes,
      themeStore,
      getLabel
    }
  }
}
</script>