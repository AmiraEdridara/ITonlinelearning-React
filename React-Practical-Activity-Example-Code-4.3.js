// Difference: handleDeleteJob, JobList and JobItem are all implemented, and
// the heading shows a live count of how many jobs are left.

// App.js
import React, { useState } from 'react';
import JobList from './components/JobList';

const App = () => {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ]);

  const handleDeleteJob = (id) => {
    // Keep every job whose id is not the one being removed
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="app">
      <h1>Job Board ({jobs.length})</h1>
      <JobList jobs={jobs} onDeleteJob={handleDeleteJob} />
    </div>
  );
};

export default App;

// components/JobList.js
import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs, onDeleteJob }) => {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobItem key={job.id} job={job} onDelete={onDeleteJob} />
      ))}
    </div>
  );
};

export default JobList;

// components/JobItem.js
import React from 'react';

const JobItem = ({ job, onDelete }) => {
  return (
    <div className={`job-item ${job.status}`}>
      <h3>{job.name}</h3>
      <p className="job-status">{job.status}</p>
      <button type="button" onClick={() => onDelete(job.id)}>
        Delete
      </button>
    </div>
  );
};

export default JobItem;
