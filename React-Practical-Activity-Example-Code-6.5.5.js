// Difference: the same delete, written so the removed job can be logged -
// useful when checking that the right card went.
const deleteJob = (jobId) => {
  setJobs(prevJobs => {
    const removed = prevJobs.find(job => job.id === jobId);
    console.log('Deleting job:', removed?.activity);
    return prevJobs.filter(job => job.id !== jobId);
  });
};
