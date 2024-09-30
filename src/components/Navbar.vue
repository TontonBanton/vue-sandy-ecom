<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/logo.png'

//Check path w/ link - returns true/false
const isActiveLink = (routerLinkPath) => {
  const route = useRoute()
  const currentPagePath = route.path
  return currentPagePath === routerLinkPath
}
</script>

<template>
  <nav class="bg-gray-600">
    <div class="mx-auto w-full px-2 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
      <!-- Logo -->
      <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
        <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
        <span class="hidden md:block text-white text-2xl font-bold ml-2">Jobs Listing</span>
      </RouterLink>

      <div class="md:ml-auto">
        <div class="flex space-x-2">
          <RouterLink to="/"
            :class="[ isActiveLink('/') ? 'bg-orange-700' : 'hover:bg-gray-500', 'navbtn']">
            Home
          </RouterLink>
          <RouterLink to="/jobs"
            :class="[ isActiveLink('/jobs') ? 'bg-orange-700' : 'hover:bg-gray-500', 'navbtn']">
            Jobs
          </RouterLink>
          <RouterLink to="/jobs/add"
            :class="[ isActiveLink('/jobs/add') ? 'bg-orange-700' : 'hover:bg-gray-500', 'navbtn']">
            Add Job
          </RouterLink>
        </div>
      </div>

    </div>
  </nav>
</template>