<script setup>
//import { defineProps } from 'vue';
const props = defineProps({
  bg: { type: String, default: 'bg-blue-100' },
})
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>