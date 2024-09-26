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

  return { form };
}
