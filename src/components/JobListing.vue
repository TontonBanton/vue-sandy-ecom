<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const props = defineProps({
  job: Object
})

const toggleFullDescription = ()=> {
  showFullDescription.value = !showFullDescription.value
}

const showFullDescription = ref(false)
const truncatedDescription = computed(()=> {
  let description = props.job.description
  if (!showFullDescription.value) {                     //false
    description = description.substring(0,90) + '...'   //truncate string up to 90 only
  }
  return description
})
</script>

<template>
  <div class="bg-gray-200 p-4 rounded-xl shadow-md relative">
    <!-- Job Image -->
    <img :src="job.image" :alt="job.title" class="w-full h-48 object-cover rounded-md mb-4" />
    <div class="mb-6">
      <div class="text-gray-600 my-2">{{ job.type }}</div>
      <h3 class="text-xl font-bold">{{ job.title }}</h3>
    </div>
    <div class="mb-5">
      <div>{{ truncatedDescription }}</div>
      <button class="hover:text-orange-700 mb-5"
        @click="toggleFullDescription">{{ showFullDescription ? 'Less' : 'More'}}
      </button>
    </div>
    <h3 class="mb-2">{{ job.salary }}</h3>
    <div class="flex flex-col lg:flex-row justify-between mb-4">
      <div> ₱ {{ job.price }} </div>
      <RouterLink :to="'/jobs/' + job.id" class="btn w-[125px] text-sm">View Details</RouterLink>
    </div>

  </div>
</template>