<script setup>
//import { defineProps } from 'vue';  no need to import on compostion setup
const props = defineProps({
  title: { type: String, default: 'Shop with Us' },
  subtitle: { type: String, default: 'Shop effortlessly with quality products, secure checkout, fast shipping, and top-notch customer service.' },
})
</script>

<template>
  <section class="bg-gray-200 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold sm:text-4xl md:text-5xl">{{ title }}</h1>
        <p class="my-4 text-xl"> {{subtitle}} </p>
      </div>
    </div>
  </section>
</template>