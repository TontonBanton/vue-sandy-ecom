<template>
  <Navbar/>
  <Hero title="Title from Parent App" subtitle="SubTitle from Parent App"/>
  <!-- <Hero /> -->
  <HomeCards/>
  <JobListings/>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import HomeCards from './components/HomeCards.vue';
import JobListings from './components/JobListings.vue';
</script>