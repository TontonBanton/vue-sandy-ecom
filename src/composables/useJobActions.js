import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { useJobForm } from './useJobForm';
import axios from 'axios';

export function useJobActions() {
  const toast = useToast();
  const router = useRouter();
  const { createJobObject } = useJobForm();

  const addJob = async (form) => {
    const newJob = createJobObject(form);
    try {
      const response = await axios.post('/api/jobs', newJob);
      toast.success('Added Successfully');
      router.push(`/jobs/${response.data.id}`);
    } catch (error) {
      console.error('Error adding job:', error);
      toast.error('There was an error adding the job');
    }
  };

  const updateJob = async (jobId, form) => {
    const updatedJob = createJobObject(form);
    try {
      const response = await axios.put(`/api/jobs/${jobId}`, updatedJob);
      toast.success('Updated Successfully');
      router.push(`/jobs/${response.data.id}`);
    } catch (error) {
      console.error('Error updating job:', error);
      toast.error('There was an error updating the job');
    }
  };

  const deleteJob = async (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete entry?');
    if (confirm) {
      try {
        await axios.delete(`/api/jobs/${jobId}`);
        toast.success('Deleted Successfully');
        router.push('/jobs');
      } catch (error) {
        console.log('Error deleting:', error);
        toast.error('Job not deleted');
      }
    }
  };

  return { addJob, updateJob, deleteJob };
}
