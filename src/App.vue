<script setup>

import HeaderMenu from "@/widgets/header/HeaderMenu.vue";
</script>

<template>
  <div class="app">
    <header-menu></header-menu>
  </div>
  <router-view/>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}
</style>
