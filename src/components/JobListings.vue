<script setup>
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import jobData from '../jobs.json';

import { ref, defineProps } from 'vue';
const props = defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
});

const jobs = ref(jobData);
const jobLimit = ref(props.limit || jobs.value.length);

const showAllJobs = (event) => {
  event.preventDefault();               // Prevent default link behavior
  jobLimit.value = jobs.value.length;   // Show all jobs
};

</script>

<template>

  <section class="bg-blue-100 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-gray-700 mb-6 text-center">Browse Jobs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in jobs.slice(0, jobLimit)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" @click="showAllJobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
      View All Jobs
    </RouterLink>
  </section>

</template>


