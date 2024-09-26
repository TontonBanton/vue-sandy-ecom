<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const route = useRoute()
const router = useRouter()
const toast = useToast()
const jobId = route.params.id

const form = reactive({
  type: '',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
  }
})

const state = reactive({
  job: {},
  isLooading: true
})

const handleSubmit = async ()=> {
  const updateJob = {
    type: form.type,
    title: form.title,
    description: form.description,
    salary: form.salary,
    location: form.location,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone
    }
  }
  console.log(updateJob)
  try {
    const response = await axios.put(`/api/jobs/${jobId}`, updateJob)
    toast.success('Updated Successfully')
    router.push(`/jobs/${response.data.id}`)
  } catch (error) {
    console.error('Error fetching: ', error)
    toast.success('There is an error updating')
  }
}

onMounted(async ()=> {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`)
    state.job = response.data
    // Populate inputs
    form.type = state.job.type;
    form.title = state.job.title;
    form.description = state.job.description;
    form.salary = state.job.salary;
    form.location = state.job.location;
    form.company.name = state.job.company.name;
    form.company.description = state.job.company.description;
    form.company.contactEmail = state.job.company.contactEmail;
    form.company.contactPhone = state.job.company.contactPhone;
  } catch (error) {
    console.error('Error fetching: ', error)
  } finally {
    state.isLooading = false
  }
})

</script>

<template>
  <section class="bg-gray-400">
      <div class="container m-auto max-w-2xl py-24">
        <div class="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>
            <select v-model="form.type" id="type" name="type" class="mb-4" required >
              <option value="" disabled selected>Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
            <input v-model="form.title" type="text" id="name" name="name" placeholder="Job Name" class="mb-4" required />
            <textarea v-model="form.description" id="description" name="description"  rows="4" placeholder="Tasks" class="mb-4"></textarea>
            <select v-model="form.salary" id="salary" name="salary" class="mb-4" required>
              <option value="" disabled selected>Salary</option>
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
            <input v-model="form.location" type="text" id="location" name="location" placeholder="Location" class="mb-4" required />
            <input v-model="form.company.name" type="text" id="company" name="company" placeholder="Company" class="mb-4"/>
            <textarea v-model="form.company.description" id="company_description" name="company_description" rows="4" placeholder="Description" class="mb-4"></textarea>
            <input v-model="form.company.contactEmail" type="email" id="contact_email" name="contact_email" placeholder="E-mail Address" class="mb-4"/>
            <input v-model="form.company.contactPhone" type="tel" id="contact_phone" name="contact_phone" placeholder="Contact No." class="mb-4"/>
            <button type="submit" class="btn">Edit Job</button>
          </form>

        </div>
      </div>
    </section>
</template>