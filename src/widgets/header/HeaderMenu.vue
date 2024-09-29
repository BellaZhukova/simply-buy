<template>
  <header class="header">
    <nav>
      <ul class="header-menu">
        <li class="header-item"><RouterLink to="/">Главная</RouterLink></li>
        <li class="header-item"><RouterLink to="/auth">Авторизация</RouterLink></li>
        <li class="header-item"><RouterLink to="/register">Регистрация</RouterLink></li>
        <li class="header-item"><RouterLink to="/catalog">Каталог</RouterLink></li>
        <li class="header-item"><RouterLink to="/cart" v-if="token">Корзина</RouterLink></li>
        <li class="header-item"><RouterLink to="/order" v-if="token">Заказы</RouterLink></li>
        <li class="header-item" v-if="token"><a @click="logoutFetch">Выход</a></li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import logoutFetch from "@/shared/api/logout.js";
let token = localStorage.getItem('token')


</script>
<style scoped lang="scss">
@import "../../assets/css/variables";
.header {
margin-top: $ui-step-medium;
  &-menu {
    display: flex;
    list-style: none;
    gap: $ui-step-medium;
    font-size: $font-size-normal;
  }

  &-item {
  }
}
</style>