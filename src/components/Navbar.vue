<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/logo.png'

//Check path w/ link
const isActiveLink = (routePath)=> {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="bg-gray-700">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Jobs Listing</span>
          </RouterLink>

          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/"
                :class="[ isActiveLink('/') ? 'bg-orange-700' : 'bg-gray-800',
                  'text-white', 'rounded-md','px-3', 'py-2']">
              Home
              </RouterLink>
              <RouterLink to="/jobs"
                :class="[ isActiveLink('/jobs') ? 'bg-orange-700' : 'bg-gray-800',
                  'text-white', 'rounded-md','px-3', 'py-2']">
              Jobs
              </RouterLink>
              <RouterLink to="/jobs/add"
                :class="[ isActiveLink('/jobs/add') ? 'bg-orange-700' : 'bg-gray-800',
                  'text-white', 'rounded-md','px-3', 'py-2']">
              Add Job
              </RouterLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>