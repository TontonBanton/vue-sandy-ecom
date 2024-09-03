<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-orange-700 text-8xl mb-5"></i>
    <h1 class="text-3xl text-orange-700 font-bold mb-4">404 Not Found</h1>
    <p class="text-l mb-5">This page does not exist</p>
    <RouterLink to="/" class="text-white bg-black hover:bg-orange-700 rounded-md px-3 py-2 mt-1">
      Go Back
    </RouterLink>
</section>
</template>