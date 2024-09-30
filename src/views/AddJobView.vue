<script setup>
  import { useJobForm } from  '@/composables/useJobForm'
  import { useJobActions } from '@/composables/useJobActions';
  import { useJobOptions } from '@/composables/useJobOptions'

  const { form } = useJobForm();
  const { addJob } = useJobActions();
  const { jobTypes, salaryRanges } = useJobOptions();

</script>

<template>
  <section class="bg-gray-400">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

      <form @submit.prevent="addJob(form)">
        <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>
        <select v-model="form.type" id="type" name="type" class="mb-4" required >
          <option v-for="option in jobTypes" :key="option.value" :value="option.value" :disabled="option.disabled">
            {{ option.text }}
          </option>
        </select>
        <input v-model="form.title" type="text" id="name" name="name" placeholder="Job Name" class="mb-4" required />
        <textarea v-model="form.description" id="description" name="description"  rows="4" placeholder="Tasks" class="mb-4"></textarea>
        <select v-model="form.salary" id="salary" name="salary" class="mb-4" required>
          <option v-for="option in salaryRanges" :key="option.value" :value="option.value" :disabled="option.disabled">
            {{ option.text }}
          </option>>
        </select>
        <input v-model="form.location" type="text" id="location" name="location" placeholder="Location" class="mb-4" required />
        <input v-model="form.company.name" type="text" id="company" name="company" placeholder="Company" class="mb-4"/>
        <textarea v-model="form.company.description" id="company_description" name="company_description" rows="4" placeholder="Description" class="mb-4"></textarea>
        <input v-model="form.company.contactEmail" type="email" id="contact_email" name="contact_email" placeholder="E-mail Address" class="mb-4"/>
        <input v-model="form.company.contactPhone" type="tel" id="contact_phone" name="contact_phone" placeholder="Contact No." class="mb-4"/>
        <button type="submit" class="btn">Add Job</button>
      </form>

      </div>
    </div>
  </section>
</template>