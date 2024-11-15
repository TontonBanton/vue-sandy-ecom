<script setup>
import { useJobOptions } from '@/composables/useJobOptions'
const { jobTypes, salaryRanges } = useJobOptions();

  const props = defineProps({
    form: Object,
    submitAction: Function,
    buttonLabel: {
      type: String,
      default: 'Submit'
    }
  })

</script>

<template>
<form @submit.prevent="submitAction(form)">
  <!-- <h2 class="text-3xl text-center font-semibold mb-6">{{ buttonLabel }}</h2>
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
    <button type="submit" class="btn">{{ buttonLabel }}</button> -->


    <label class="mb-0 bg-gray-200 p-2 block">Contact</label>
    <input placeholder="Full Name" class="mb-1" required />
    <input placeholder="Phone Number" class="mb-4" required />
    <label class="mb-0 bg-gray-200 p-2 block">Adress</label>
    <input placeholder="Region, Province, City, Barangay" class="mb-1" required />
    <input placeholder="Postal Code" class="mb-1" required />
    <input placeholder="Stree Name, Building, House No." class="mb-4" required />
    <label class="mb-0 bg-gray-200 p-2 block">Settings</label>

    <!-- <button type="submit" class="btn">{{ buttonLabel }}</button> -->


</form>

</template>