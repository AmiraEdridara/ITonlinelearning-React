// Delete, using the updater form of setJobs so it is safe even if two
// deletes land in the same render.

const deleteJob = (jobId) => {
  setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
};
