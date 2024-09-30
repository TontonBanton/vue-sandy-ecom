<script setup>
  const props = defineProps({
    bg: { type: String, default: 'bg-gray-300' },
  })
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>