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
  <div class="bg-gray-200 p-4 rounded-xl shadow-md relative animate-entrance">
    <!-- Job Image -->
    <img :src="job.image" :alt="job.title" class="w-full h-48 object-cover rounded-md mb-3" />
    <div class="mb-3">
      <div class="text-gray-600 my-2">{{ job.type }}</div>
      <h3 class="text-xl">{{ job.title }}</h3>
    </div>
    <div class="mb-3">
      <div>{{ truncatedDescription }}</div>
      <button class="hover:text-orange-700 mb-3"
        @click="toggleFullDescription">{{ showFullDescription ? 'Less' : 'More'}}
      </button>
    </div>
    <h3 class="mb-3">{{ job.salary }}</h3>
    <div class="flex flex-col lg:flex-row justify-between mb-3">
      <div> ₱ {{ job.price }} </div>
      <RouterLink :to="'/jobs/' + job.id" class="btn w-[125px] text-sm">View Details</RouterLink>
    </div>
  </div>
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