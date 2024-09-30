import { reactive } from 'vue';

export function useJobForm() {
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
  });

  const populateForm = (job) => {
    form.type = job.type;
    form.title = job.title;
    form.description = job.description;
    form.salary = job.salary;
    form.location = job.location;
    form.company.name = job.company.name;
    form.company.description = job.company.description;
    form.company.contactEmail = job.company.contactEmail;
    form.company.contactPhone = job.company.contactPhone;
  };

  return { form, populateForm };
}
