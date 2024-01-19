<template>
  <div class="centered-container">
    <UserTable />
  </div>
</template>

<script setup>
import UserTable from "../components/users/UsersTable.vue";

// No necesitas importar nada en este caso
</script>

<style scoped>
.centered-container {
  padding: 20px;
}

.vue-logo {
  width: 200px; /* Ajusta según sea necesario */
  height: 200px; /* Ajusta según sea necesario */
}
</style>
