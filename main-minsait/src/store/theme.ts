import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref('light')
  const getCurrentTheme = computed(() => currentTheme.value)

  function setCurrentTheme(theme: string) {
    currentTheme.value = theme
    document.getElementsByTagName("html")[0].setAttribute('data-theme', theme)
  }

  return { currentTheme, getCurrentTheme, setCurrentTheme }
})