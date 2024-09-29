<template>
  <div class="content">
    <button @click="orderFetch">Оформить заказ</button>
  </div>
  <div class="cards">
    <div class="card" v-for="product in products" :key="product.id">
      <h3>{{product.name}}</h3>
      <p>{{product.description}}</p>
      <p>{{product.price}} p.</p>
      <button @click="deleteCartFetch(product.id)">Удалить из корзины</button>
    </div>
  </div>
</template>

<script setup>
import cartFetch from "@/shared/api/cart.js";
import {onMounted, ref} from "vue";
import deleteCartFetch from "@/shared/api/deleteCart.js";
import orderFetch from "@/shared/api/order.js";

let products = ref([]);

onMounted(() => {
  cartFetch(products);
})
</script>

<style>
.content {
  display: flex;
  justify-content: center;
}
</style>