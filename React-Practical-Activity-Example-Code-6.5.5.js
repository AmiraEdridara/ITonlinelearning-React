// Deleting a job, logging which one went - useful when checking that the
// right card was removed.

const deleteJob = (jobId) => {
  setJobs(prevJobs => {
    const removed = prevJobs.find(job => job.id === jobId);
    console.log('Deleting job:', removed?.activity);
    return prevJobs.filter(job => job.id !== jobId);
  });
};
