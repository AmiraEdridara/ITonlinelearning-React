// Difference: the updater form of setJobs is used, so the delete is safe even
// if two deletes land in the same render.
const deleteJob = (jobId) => {
  setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
};
