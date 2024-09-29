<template>
  <div class="component">
    <input class="component-input" :placeholder="props.placeholder" :type="props.type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss">
@import "../../../assets/css/variables";
@import "../../../assets/css/main";
.component {
display: flex;
  gap: $ui-step-smaller;
  &-input {
    width: 300px;
    height: 30px;
    border: 1px solid var(--color-text);
    padding: 0 $ui-step-smaller;
    outline: none;
  }
}
</style>