<script setup>
import { ref, reactive ,defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const props = defineProps({                         //Props Initial data is from HomeView.vue
  limit: Number,
  showButton: { type: Boolean, default: false }
});

// import jobData from '../jobs2.json';             //Array Manual Data Testing
// const jobs = ref(jobData)
// const jobs = ref([]);                            //Using ref

//Using reactive
 const state = reactive({
   jobs: [],
   isLoading: true
 })

//const jobLimit = ref(props.limit || jobs.value.length);   //Using ref
const jobLimit = ref(props.limit || state.jobs.length);     //Using reactive

const showAllJobs = (event) => {                //View all jobs button
  event.preventDefault();
  //jobLimit.value = jobs.value.length;         //Using ref
  jobLimit.value = state.job.length;            //Using reactive
}

onMounted( async ()=> {
  try {
    const response = await axios.get('http://localhost:5000/jobs')
    //jobs.value = response.data    //using ref
    state.jobs = response.data      //using reactive
  } catch (error) {
    console.error('Error fetching data', error)
  } finally {
    state.isLoading = false
  }
})

</script>

<template>
  <section class="bg-gray-400 px-4 py-10">

    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">Browse Jobs</h2>

      <!--Show Spinner if isLoading true-->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6"><PulseLoader/></div>

      <!--Show Job Listing after axios get isLoading is false-->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- <JobListing v-for="job in jobs.slice(0, jobLimit || jobs.length)":key="job.id" :job="job"/> -->         <!-- Using ref-->
        <JobListing v-for="job in state.jobs.slice(0, jobLimit || state.jobs.length)" :key="job.id" :job="job"/>
      </div>

    </div>

    <div v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink to="/jobs" @click="showAllJobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-orange-700">
      View All Jobs
      </RouterLink>
    </div>

  </section>
</template>


