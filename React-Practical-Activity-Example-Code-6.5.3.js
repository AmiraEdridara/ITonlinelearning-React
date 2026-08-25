// Difference: the key is kept in one constant so the save and the clear can
// never drift apart.
const STORAGE_KEY = 'jobs';

useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}, [jobs]);
