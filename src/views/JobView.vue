<script setup>
import NotFoundView from '@/views/NotFoundView.vue';
import BackButton from '@/components/BackButton.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import { reactive, onMounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useJobActions } from '@/composables/useJobActions';
import axios from 'axios';

const route = useRoute()
const router = useRouter()
const { deleteJob } = useJobActions();

const jobId = route.params.id
const jobData = reactive({
  job: {},
  isLoading: true,
  isNotFound: false,
})

onMounted(async () => {
  try {
  const response = await axios.get(`/api/jobs/${jobId}`);
    jobData.job = response.data;
    jobData.isNotFound = false;
  } catch (error) {
    console.log('Error fetching job data:', error.message || error);
    jobData.isNotFound = true;
  } finally {
    jobData.isLoading = false;      // Stop loading in both success and error cases
  }
});

</script>

<template>
  <BackButton/>
  <NotFoundView v-if="jobData.isNotFound" />

  <section v-if="!jobData.isLoading && !jobData.isNotFound" class="bg-gray-400">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ jobData.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ jobData.job.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ jobData.job.location }}</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-orange-800 text-lg font-bold mb-6">Job Description</h3>
            <p class="mb-4">{{ jobData.job.description }}</p>
            <h3 class="text-orange-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ jobData.job.salary}}</p>
          </div>
        </main>
        <!-- Sidebar -->
        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ jobData.job.company.name }}</h2>
            <p class="my-2">{{ jobData.job.company.description }}</p>
            <hr class="my-4" />
            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 p-2 font-bold">{{ jobData.job.company.contactEmail}}</p>
            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 p-2 font-bold">{{ jobData.job.company.contactPhone }}</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink :to="`/jobs/edit/${jobData.job.id}`" class="btn"> Edit Job </RouterLink>
            <button @click="deleteJob(jobData.job.id)" class="btn"> Delete Job </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6"><ClipLoader :loading="true" color="#c2410c" /></div>
</template>