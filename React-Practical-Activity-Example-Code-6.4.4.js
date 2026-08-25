// Difference: an empty activity is rejected before anything is added, and the
// updater form of setJobs is used.
const addJob = (e) => {
  e.preventDefault();

  if (activity.trim() === '') return;

  const newJob = { id: Date.now(), activity: activity.trim(), categories, status };
  setJobs(prevJobs => [...prevJobs, newJob]);
  resetForm();
};
