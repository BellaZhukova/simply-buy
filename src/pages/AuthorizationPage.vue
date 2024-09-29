<template>
<form class="authorization" @submit.prevent="handleSubmit">
  <h1>Авторизация</h1>
  <input-component type="email" placeholder="Email" v-model="model.email"/>
  <input-component type="password" placeholder="Пароль" v-model="model.password"/>
  <button-component content="Зарегистрироваться" @click="handleSubmit"></button-component>
</form>
</template>

<script setup>
import InputComponent from "@/shared/ui/input/InputComponent.vue";
import ButtonComponent from "@/shared/ui/button/ButtonComponent.vue";
import authFetch from '@/shared/api/auth.js'
import {ref} from "vue";

const model = ref({
  email: '',
  password: ''
})

const handleSubmit = () => {
  authFetch(model);
}
</script>

<style lang="scss">
@import "../assets/css/variables";
.authorization {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: $ui-step-smaller;
  height: 80vh;
}
</style>