// The whole job manager - text, category and status inputs, delete on each
// card, and a count on every column.

import React, { useState, useRef } from 'react';

function JobManager() {
  const [jobs, setJobs] = useState([]);
  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

  const activityInputRef = useRef(null);
  const categoryOptions = ['Read Emails', 'Web Parsing', 'Send Emails'];

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

      <div className="job-columns">
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}

function JobColumn({ title, status, jobs, deleteJob }) {
  const filteredJobs = jobs.filter(job => job.status === status);

  return (
    <div className="job-column">
      <h2>{title} ({filteredJobs.length})</h2>
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} deleteJob={deleteJob} />
      ))}
    </div>
  );
}

function JobCard({ job, deleteJob }) {
  return (
    <div className="job-card">
      <h3>{job.activity}</h3>

      {job.categories.length > 0 && (
        <div className="categories">
          {job.categories.map((category, index) => (
            <span key={index} className="category">{category}</span>
          ))}
        </div>
      )}

      <button type="button" onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default JobManager;
