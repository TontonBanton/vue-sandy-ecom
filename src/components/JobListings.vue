<script setup>
import { ref } from 'vue';
import jobData from '../jobs.json';
const jobs = ref(jobData);

console.log(jobs.value); // This should log the job data to the console
</script>
<template>
  <h1>Job Listings</h1>
  <div v-for="job in jobs" :key="job.id">
    {{ job }}
  </div>
</template>


