<template>
<button class="button">{{props.content}}</button>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
@import "../../../assets/css/variables";
.button {
  padding: $ui-step-smaller;
  border: 1px solid var(--color-text);
  background-color: var(--background-input);
}
</style>