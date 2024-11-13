<script setup>
import JobForm from '@/components/JobForm.vue';
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';
import { useJobForm } from '@/composables/useJobForm';
import { useJobActions } from '@/composables/useJobActions';
import { useJobOptions } from '@/composables/useJobOptions'

const route = useRoute()
const jobId = route.params.id
const { form, populateForm } = useJobForm();
const { updateJob } = useJobActions();
const { jobTypes, salaryRanges } = useJobOptions();

const jobData = reactive({
  job: {},
  isLooading: true
})

onMounted(async ()=> {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`)
    jobData.job = response.data
    populateForm(jobData.job)
  } catch (error) {
    console.error('Error fetching: ', error)
  } finally {
    jobData.isLooading = false
  }
})
</script>

<template>
  <section class="bg-gray-400">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <JobForm :form="form" :submitAction="(form) => updateJob(jobId, form)" buttonLabel="Edit Job" />
      </div>
    </div>
  </section>
</template>