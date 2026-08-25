// Difference: clearing everything asks for confirmation first, since there is
// no way to undo it.
const clearAllJobs = () => {
  const sure = window.confirm('Clear every job? This cannot be undone.');
  if (!sure) return;

  setJobs([]);
  localStorage.removeItem(STORAGE_KEY);
};
