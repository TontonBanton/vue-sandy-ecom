<script setup>
  import { RouterLink } from 'vue-router';
  import Card from '@/components/Card.vue';
</script>

<template>
  <section class="bg-gray-200 py-2">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg ">

      <Card>
        <h2 class="text-2xl">For Shoppers</h2>
        <p class="mt-2 mb-4"> Browse for your favorite products today </p>
        <RouterLink to="/jobs" class="btn">Browse Products</RouterLink>
      </Card>
      <Card>
        <h2 class="text-2xl">For Members</h2>
        <p class="mt-2 mb-4">View your profile and see what is the latest</p>
        <RouterLink to="/jobs/add" class="btn">Go to profile</RouterLink>
      </Card>

      </div>
    </div>
  </section>
</template>