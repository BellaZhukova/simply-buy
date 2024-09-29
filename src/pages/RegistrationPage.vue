<template>

  <form class="registration" @submit.prevent="handleSubmit">
    <h1>Регистрация</h1>
    <input-component type="text" placeholder="ФИО" v-model="model.fio"/>
    <input-component type="email" placeholder="Email" v-model="model.email"/>
    <input-component type="password" placeholder="Пароль" v-model="model.password"/>
    <button-component content="Зарегистрироваться" @click="handleSubmit"></button-component>
  </form>
</template>

<script setup>
import InputComponent from "@/shared/ui/input/InputComponent.vue";
import ButtonComponent from "@/shared/ui/button/ButtonComponent.vue";
import registerFetch from "@/shared/api/register.js"
import {ref} from "vue";
const model = ref({
  fio: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  registerFetch(model);
}

let session = localStorage.getItem('token');


</script>

<style lang="scss">
@import "@/assets/css/variables";
.registration {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: $ui-step-smaller;
  height: 80vh;
}
</style>