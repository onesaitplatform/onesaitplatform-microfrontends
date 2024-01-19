<template>
  <one-main-navigation
    id="main-navigation"
    .navigation="navigation"
    accessibility-label="Menú de navegación"
    drawer-accessibility-label="Drawer del menú de navegación"
    drawer-accessibility-label-close="Menú de navegación"
    drawer-replace-main-logo="false"
    drawer-one-logo-text="onesait"
    drawer-one-logo-link="#"
  ></one-main-navigation>
</template>

<script>
import { ref } from 'vue'
import { useNavManager } from '@/composables/navManager'

export default {
  name: 'MainNavigation',
  setup() {
    const navigation = ref(useNavManager().navigation)

    return {
      navigation
    }
  }
}
</script>
