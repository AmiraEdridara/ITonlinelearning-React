// Adding a job. Blank activities are rejected and the text is trimmed
// before it is stored.

const addJob = (e) => {
  e.preventDefault();

  if (activity.trim() === '') return;

  const newJob = { id: Date.now(), activity: activity.trim(), categories, status };
  setJobs(prevJobs => [...prevJobs, newJob]);
  resetForm();
};
