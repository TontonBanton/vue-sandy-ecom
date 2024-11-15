<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="bg-gray-200" >
    <div class="w-fit m-auto py-3 ml-12">
      <RouterLink to="/jobs" class="text-orange-800 hover:text-orange-600 flex items-center">
        <i class="pi pi-arrow-circle-left mr-3"></i> Back to Products Gallery
      </RouterLink>
    </div>
  </section>
</template>