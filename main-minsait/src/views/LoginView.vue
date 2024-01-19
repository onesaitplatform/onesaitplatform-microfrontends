<template>
  <section class="login">
    <login-header
      :product-name="apiData.productName"
      :multi-language="true"
      :client-logo="true"
      :logo="logo"
    >
      <div v-for="(_, name) in $slots" :name="name" :v-slot="name" :key="`login-header-slot-${name}`">
        <component :is="_[0].tag" v-bind="_[0].data.attrs"></component>
      </div>
    </login-header>
    <main class="login__main">
      <router-view :api-data="apiData" v-bind="$attrs"></router-view>
    </main>
  </section>
</template>

<script>
import LoginHeader from '../components/login/LoginHeader.vue'
import {loginConfig} from '../../login.config'

export default {
  name: 'LoginView',

  components: {
    LoginHeader
  },

  props: {
    apiData: {
      type: Object,
      default: () => loginConfig
    },
    logo: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;

  color: var(--color-txt-primary);
  background-color: var(--color-bg-primary);

  &__main {
    padding: $space-300;
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1;
  }
}
</style>