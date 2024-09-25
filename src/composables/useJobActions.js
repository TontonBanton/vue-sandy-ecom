import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import axios from 'axios';

export function useJobActions() {
  const toast = useToast();
  const router = useRouter();

  const addJob = async (form) => {
    const newJob = {
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
    };

    try {
      const response = await axios.post('/api/jobs', newJob);
      toast.success('Added Successfully');
      router.push(`/jobs/${response.data.id}`);
    } catch (error) {
      console.error('Error adding job:', error);
      toast.error('There was an error adding the job');
    }
  };

  const deleteJob = async (jobId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete entry?');
      if (confirm) {
        await axios.delete(`/api/jobs/${jobId}`);
        toast.success('Deleted Successfully');
        router.push('/jobs');
      }
    } catch (error) {
      console.log('Error deleting', error);
      toast.error('Job not deleted');
    }
  };

  return {
    addJob,
    deleteJob
  };
}
