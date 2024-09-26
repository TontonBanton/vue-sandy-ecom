<script setup>
import { ref, reactive ,defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import axios from 'axios';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const props = defineProps({                                 //Initial from HomeView.vue
  limit: Number,
  showButton: { type: Boolean, default: false }
});

// const jobs = ref([]);

 const state = reactive({
   jobs: [],
   isLoading: true
 })

//const jobLimit = ref(props.limit || jobs.value.length);   //ref
const jobLimit = ref(props.limit || state.jobs.length);     //reactive

const showAllJobs = (event) => {
  event.preventDefault();
  //jobLimit.value = jobs.value.length;          //ref
  jobLimit.value = state.jobs.length;            //reactive
}

onMounted( async ()=> {
  try {
    const response = await axios.get('/api/jobs')           //vite proxy for '/api'
    //jobs.value = response.data                  //ref
    state.jobs = response.data                    //reactive
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
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6"><ClipLoader :loading="true" color="#c2410c" /></div>

      <!--Show Job Listing after axios get isLoading is false-->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- <JobListing v-for="job in jobs.slice(0, jobLimit || jobs.length)":key="job.id" :job="job"/> -->         <!-- Using ref-->
        <JobListing v-for="job in state.jobs.slice(0, jobLimit || state.jobs.length)" :key="job.id" :job="job"/>
      </div>

    </div>

    <div v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink to="/jobs" @click="showAllJobs" class="btn">
        View All Jobs
      </RouterLink>
    </div>

  </section>
</template>


