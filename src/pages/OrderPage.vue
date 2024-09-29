<template>
  <div class="orders">
    <div class="order" v-for="order in orders" :key="order.id">
      <p>{{order.products}}</p>
      <p>Цена: {{order.order_price}}</p>
    </div>
  </div>
</template>
<script setup>
import getOrderFetch from "@/shared/api/getOrder.js";
import {onMounted, ref} from "vue";
let orders = ref([]);

onMounted(() => {
  getOrderFetch(orders);
})
</script>
<style lang="scss">
@import "@/assets/css/variables";
.orders {
  display: flex;
  justify-content: center;
  gap: $ui-step-medium;
}
.order {
  width: 300px;
  height: 200px;
  border: 1px solid var(--color-text);
  text-align: center;
}
</style>