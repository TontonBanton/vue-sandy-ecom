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
    // Fetching the data from the products.json file in the public folder
    const response = await fetch('/products.json');
    const jobs = await response.json();
    // Find the job with the matching jobId
    jobData.job = jobs.find(job => job.id === parseInt(jobId));

    if (!jobData.job) {
      jobData.isNotFound = true;  // Job not found if not in the JSON
    } else {
      jobData.isNotFound = false; // Reset error state
    }
  } catch (error) {
    console.error('Error loading data from JSON file:', error);
    jobData.isNotFound = true;
  } finally {
    jobData.isLoading = false;
  }
});

// Handle the "Buy Now" button click
const addToCart = () => {
  alert('Added to cart');
  router.push('/').then(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  });
};
</script>

<template>
  <BackButton/>
  <NotFoundView v-if="jobData.isNotFound" />

  <section v-if="!jobData.isLoading && !jobData.isNotFound" class="bg-gray-200">
    <!-- <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6"> -->
    <div class="flex justify-center items-center animate-entrance">
      <div class="grid grid-cols-1 md:grid-cols-100 w-95% md:w-[70%] gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <img :src="jobData.job.image" alt="Job Image" class="w-full h-auto rounded-lg mb-3" />
            <h1 class="text-3xl mb-4 text-left">{{ jobData.job.title }}</h1>
            <p class="text-orange-700 text-left">{{ jobData.job.location }}</p>
            <img :src="jobData.job.image2" alt="Job Image" class="w-full rounded-lg mb-2" />
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-1">
            <h3 class="text-orange-800 text-lg mb-2">Product Description</h3>
            <p class="mb-2">{{ jobData.job.description }}</p>
            <h3 class="text-orange-800 text-lg mb-2">Price</h3>
            <p class="mb-2">₱ {{ jobData.job.price}}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-1">
            <h3 class="text-orange-800 text-lg">Add to your cart</h3>
            <button @click="addToCart" class="btn">Buy Now</button>
          </div>

        </main>

        <!-- Sidebar -->
        <!-- <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ jobData.job.company.name }}</h2>
            <p class="my-2">{{ jobData.job.company.description }}</p>
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
        </aside> -->

      </div>
    </div>
  </section>

  <div v-else class="loader"><ClipLoader :loading="true" color="#c2410c" /></div>
</template>

<style scoped>
@keyframes entrance {
  0% {
    opacity: 0;
    transform: translateX(-20px); /* Start from the left */
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* Move to the original position */
  }
}
.animate-entrance {
  animation: entrance 1s ease-out forwards;
}
@media (min-width: 768px) {
  /* Apply the animation only on medium screens and larger */
  .hidden.md\:block {
    display: block;
  }
}
</style>