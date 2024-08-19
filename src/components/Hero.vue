<script setup>
//import { defineProps } from 'vue';
const props = defineProps({
  title: { type: String, default: 'Become a Developer' },
  subtitle: { type: String, default: 'Becoming a developer opens doors to innovation and transformation.' },
})
</script>

<template>
  <section class="bg-gray-400 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl">{{ title }}</h1>
        <p class="my-4 text-xl"> {{subtitle}} </p>
      </div>
    </div>
  </section>
</template>