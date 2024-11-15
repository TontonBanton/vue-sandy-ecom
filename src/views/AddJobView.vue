<script setup>
  import JobForm from '@/components/JobForm.vue';
  import { useJobForm } from  '@/composables/useJobForm'
  import { useJobActions } from '@/composables/useJobActions';

  const { form } = useJobForm();
  const { addJob } = useJobActions();
</script>

<template>
  <section class="bg-gray-200 animate-entrance">
    <div class="container m-auto max-w-2xl py-10">
      <div class="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <JobForm :form="form" :submitAction="addJob" buttonLabel="  " />
      </div>
    </div>
  </section>
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