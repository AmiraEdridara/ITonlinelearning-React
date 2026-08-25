// Difference: the form inputs are written out rather than left as a comment,
// the storage key lives in one constant, a damaged stored value is handled,
// and Clear All is hidden while there is nothing to clear.

import React, { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'jobs';

function JobManager() {
  const [jobs, setJobs] = useState(() => {
    try {
      const savedJobs = localStorage.getItem(STORAGE_KEY);
      return savedJobs ? JSON.parse(savedJobs) : [];
    } catch {
      return [];
    }
  });

  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

  const activityInputRef = useRef(null);
  const categoryOptions = ['Read Emails', 'Web Parsing', 'Send Emails'];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  const toggleCategory = (category) => {
    setCategories(prev =>
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  const addJob = (e) => {
    e.preventDefault();
    if (activity.trim() === '') return;

    const newJob = { id: Date.now(), activity: activity.trim(), categories, status };
    setJobs(prevJobs => [...prevJobs, newJob]);
    resetForm();
  };

  const deleteJob = (jobId) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  const clearAllJobs = () => {
    const sure = window.confirm('Clear every job? This cannot be undone.');
    if (!sure) return;

    setJobs([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const resetForm = () => {
    setActivity('');
    setCategories([]);
    setStatus('Need to Complete');
    activityInputRef.current?.focus();
  };

  return (
    <div className="job-manager">
      <form onSubmit={addJob}>
        <input
          type="text"
          ref={activityInputRef}
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter job activity"
        />

        <div className="bottom-line">
          {categoryOptions.map(category => (
            <button
              key={category}
              type="button"
              className={categories.includes(category) ? 'tag selected' : 'tag'}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Need to Complete">Need to Complete</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit" disabled={activity.trim() === ''}>Add Job</button>
      </form>

      {jobs.length > 0 && (
        <button type="button" onClick={clearAllJobs}>Clear All Jobs</button>
      )}

      <div className="job-columns">
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}

// JobColumn and JobCard are the same as in 6.4.6

export default JobManager;
