<script setup>
  import JobForm from '@/components/JobForm.vue';
  import { useJobForm } from  '@/composables/useJobForm'
  import { useJobActions } from '@/composables/useJobActions';

  const { form } = useJobForm();
  const { addJob } = useJobActions();
</script>

<template>
  <section class="bg-gray-200">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <JobForm :form="form" :submitAction="addJob" buttonLabel="  " />
      </div>
    </div>
  </section>
</template>