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
  <nav class="bg-gray-400">
    <div class="mx-auto w-full p-2 flex h-18 items-center justify-between">
      <!-- Logo -->
      <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
        <!-- <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" /> -->
        <span class="text-white text-2xl ml-2">J&S</span> <span class="text-white text-1xl ml-2">Shop</span>
      </RouterLink>

      <div class="md:ml-auto">
        <div class="flex space-x-2">
          <RouterLink to="/"
            :class="[ isActiveLink('/') ? 'bg-orange-700' : 'hover:bg-gray-500', 'navbtn']">
            Home
          </RouterLink>
          <RouterLink to="/jobs"
            :class="[ isActiveLink('/jobs') ? 'bg-orange-700' : 'hover:bg-gray-500', 'navbtn']">
            Products
          </RouterLink>
          <RouterLink to="/jobs/add"
            :class="[ isActiveLink('/jobs/add') ? 'bg-orange-700' : 'hover:bg-gray-500', 'navbtn']">
            Me
          </RouterLink>
        </div>
      </div>

    </div>
  </nav>
</template>