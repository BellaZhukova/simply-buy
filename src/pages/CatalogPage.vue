<template>
  <div class="cards">
    <div v-for="product in products" :key="product.id" class="card">
      <h3>{{product.name}}</h3>
      <p>{{product.description}}</p>
      <p>{{product.price}} p.</p>
      <button @click="addCartFetch(product.id)">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import catalogFetch from "@/shared/api/catalog.js";
import {onMounted, ref} from "vue";
import addCartFetch from "@/shared/api/addCart.js";

let products = ref([]);

onMounted(() => {
  catalogFetch(products);
  console.log(products)
})
</script>

<style lang="scss">
@import "@/assets/css/variables";
.cards {
  display: flex;
  gap: $ui-step-medium;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.card {
  width: 300px;
  height: 220px;
  border: 1px solid var(--color-text);
  text-align: center;
}
</style>