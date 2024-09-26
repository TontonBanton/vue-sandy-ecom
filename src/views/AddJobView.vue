<script setup>
import { reactive } from 'vue'
import { useJobActions } from '@/composables/useJobActions';
const { addJob } = useJobActions();

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
</script>

<template>
  <section class="bg-gray-400">
      <div class="  container m-auto max-w-2xl py-24">
        <div class="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form @submit.prevent="addJob(form)">
            <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div class="mb-4">
              <label for="type" class="label">Job Type</label>
              <select v-model="form.type" id="type" name="type" class="input" required >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="label">Job Listing Name</label>
              <input v-model="form.title" type="text" id="name" name="name" class="input" placeholder="" required />
            </div>

            <div class="mb-4">
              <label for="description" class="label">Description</label>
              <textarea v-model="form.description" id="description" name="description"  rows="4" class="input" placeholder=""></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="label">Salary</label>
              <select v-model="form.salary" id="salary" name="salary" class="input" required>
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
            </div>

            <div class="mb-4">
              <label class="label">Location</label>
              <input v-model="form.location" type="text" id="location" name="location" class="input" placeholder="" required />
            </div>

            <h3 class="text-2xl mb-5">Company Info</h3>
            <div class="mb-4">
              <label for="company" class="label">Company Name</label>
              <input v-model="form.company.name" type="text" id="company" name="company" class="input" placeholder=""/>
            </div>

            <div class="mb-4">
              <label for="company_description" class="label">Company Description</label>
              <textarea v-model="form.company.description" id="company_description" name="company_description"  rows="4" class="input"></textarea>
            </div>

            <div class="mb-4">
              <label for="contact_email" class="label">Contact Email</label>
              <input v-model="form.company.contactEmail" type="email" id="contact_email" name="contact_email" class="input"/>
            </div>
            <div class="mb-4">
              <label for="contact_phone" class="label" >Contact Phone</label>
              <input v-model="form.company.contactPhone" type="tel" id="contact_phone" name="contact_phone" class="input"/>
            </div>

            <div>
              <button type="submit" class="btn">Add Job</button>
            </div>

          </form>
        </div>
      </div>
    </section>
</template>