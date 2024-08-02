<script setup>
import JobListing from './JobListing.vue';
import { ref } from 'vue';
import jobData from '../jobs.json';
const jobs = ref(jobData);

console.log(jobs.value); // This should log the job data to the console
</script>


<template>
  <section class="bg-blue-100 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-gray-700 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

</template>


