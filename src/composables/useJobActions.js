import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import axios from 'axios';

export function useJobActions() {
  const toast = useToast();
  const router = useRouter();

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
    deleteJob,
  };
}
