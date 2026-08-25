// Difference: the parse is wrapped in try/catch. If the stored string is ever
// damaged the app starts with an empty list instead of crashing on load.
const [jobs, setJobs] = useState(() => {
  try {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : [];
  } catch {
    return [];
  }
});
