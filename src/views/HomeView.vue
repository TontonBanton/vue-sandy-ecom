<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <!-- Container for the image with label -->
  <div class="relative w-full">
    <img src="/home1.jpg" alt="Home Image" class="w-full h-auto mt-0" />
    <div class="absolute text-orange-800 top-16 left-10 p-4 bg-black bg-opacity-0 text-6xl hidden md:block">
      Welcome to J&S Shop
    </div>
    <div class="absolute text-orange-800 top-32 left-10 p-4 bg-black bg-opacity-0 text-2xl hidden md:block">
      Where shopping and beauty meets at your convenience
    </div>
  </div>

  <Hero />
  <HomeCards/>
  <JobListings :limit="3" :showButton="true" />   <!--Props pass to listings component-->
</template>