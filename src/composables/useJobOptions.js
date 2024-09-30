export function useJobOptions() {

  const jobTypes = [
    { value: '', text: 'Job Type', disabled: true },
    { value: 'Full-Time', text: 'Full-Time' },
    { value: 'Part-Time', text: 'Part-Time' },
    { value: 'Remote', text: 'Remote' },
    { value: 'Internship', text: 'Internship' }
  ]
  const salaryRanges = [
    { value: '', text: 'Salary', disabled: true },
    { value: 'Under $50K', text: 'under $50K' },
    { value: '$50K - $60K', text: '$50 - $60K' },
    { value: '$60K - $70K', text: '$60 - $70K' },
    { value: '$70K - $80K', text: '$70 - $80K' },
    { value: '$80K - $90K', text: '$80 - $90K' },
    { value: '$90K - $100K', text: '$90 - $100K' },
    { value: '$100K - $125K', text: '$100 - $125K' },
    { value: '$125K - $150K', text: '$125 - $150K' },
    { value: '$150K - $175K', text: '$150 - $175K' },
    { value: '$175K - $200K', text: '$175 - $200K' },
    { value: 'Over $200K', text: 'Over $200K' }
  ]

  return { jobTypes, salaryRanges }
}


