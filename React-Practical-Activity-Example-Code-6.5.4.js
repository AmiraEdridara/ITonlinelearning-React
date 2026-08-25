// Adding a job to state, which triggers the effect that saves it.

const addJob = (e) => {
  e.preventDefault();
  if (activity.trim() === '') return;

  const newJob = { id: Date.now(), activity: activity.trim(), categories, status };
  setJobs(prevJobs => [...prevJobs, newJob]);
  resetForm();
};
