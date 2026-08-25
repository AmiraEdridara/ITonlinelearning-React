// Reading the saved jobs back on first render. The parse is wrapped in
// try/catch, so a damaged stored value starts an empty list instead of
// crashing the app on load.

const [jobs, setJobs] = useState(() => {
  try {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : [];
  } catch {
    return [];
  }
});
