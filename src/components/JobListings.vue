<script setup>
import { ref, reactive, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import axios from 'axios';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

//Initial props from HomeView -> limi=3, showButton=false
const props = defineProps({
  limit: Number,
  showButton: { type: Boolean, default: false }
});

const jobData = reactive({
  jobs: [],
  isLoading: true
})

const jobLimit = ref(props.limit || jobData.jobs.length);

const showAllJobs = (event) => {
  event.preventDefault();
  jobLimit.value = jobData.jobs.length;               //Change the value of limit to jobs.length
}

// onMounted( async ()=> {
//   try {
//     const response = await axios.get('/api/jobs')     //vite proxy for '/api'
//     jobData.jobs = response.data
//   } catch (error) {
//     console.error('Error fetching data', error)
//   } finally {
//     jobData.isLoading = false
//   }
// })

onMounted(async () => {
  try {
    const response = await fetch('/products.json'); // Load jobs.json from the public folder
    jobData.jobs = await response.json();
  } catch (error) {
    console.error('Error loading data from JSON file:', error);
  } finally {
    jobData.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-gray-200 px-4 py-5">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl mb-6 text-center">Browse Products</h2>
      <div v-if="jobData.isLoading" class="loader"><ClipLoader :loading="true" color="#c2410c" /></div>

      <!--Show Jobs isLoading is false-->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in jobData.jobs.slice(0, jobLimit || jobData.jobs.length)" :key="job.id" :job="job"/>
      </div>
    </div>

    <div v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink to="/jobs" @click="showAllJobs" class="btn"> View All Products</RouterLink>
    </div>
  </section>
</template>


