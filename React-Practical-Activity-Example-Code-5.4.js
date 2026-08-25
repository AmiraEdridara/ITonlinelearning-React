// Difference: delete, status update and add are all implemented, and the
// columns are rendered from an array of statuses rather than written out
// three times.

import React, { useState } from 'react';
import JobColumn from './components/JobColumn';
import JobStatus from './components/JobStatus';

const App = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Parse Emails', status: 'Need to Start' },
    { id: 2, title: 'SAP Extraction', status: 'In Progress' },
    { id: 3, title: 'Generate Report', status: 'Completed' }
  ]);

  const statuses = ['Need to Start', 'In Progress', 'Completed'];

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const updateJobStatus = (id, newStatus) => {
    // Rebuild the array, changing only the job that matches
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, status: newStatus } : job
    ));
  };

  const addNewJob = (title) => {
    if (title.trim() === '') return;

    const newJob = {
      id: Date.now(),
      title: title.trim(),
      status: 'Need to Start'
    };

    setJobs([...jobs, newJob]);
  };

  return (
    <div className="app">
      <JobStatus onAddJob={addNewJob} totalJobs={jobs.length} />

      <div className="job-columns">
        {statuses.map(status => (
          <JobColumn
            key={status}
            title={status}
            jobs={jobs.filter(job => job.status === status)}
            statuses={statuses}
            onDeleteJob={deleteJob}
            onUpdateStatus={updateJobStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
