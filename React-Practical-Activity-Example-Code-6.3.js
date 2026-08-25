// Jobs are filtered by status into three columns. Each column shows how
// many cards it holds, and says so when it is empty.

import React, { useState } from 'react';

function JobManager() {
  const [jobs, setJobs] = useState([]);
  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

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
    const newJob = { activity, categories, status };
    setJobs([...jobs, newJob]);
    // Reset form fields
    setActivity('');
    setCategories([]);
    setStatus('Need to Complete');
  };

  return (
    <div className="job-manager">
      <form onSubmit={addJob}>
        <input
          type="text"
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
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} />
      </div>
    </div>
  );
}

function JobColumn({ title, status, jobs }) {
  const filteredJobs = jobs.filter(job => job.status === status);

  return (
    <div className="job-column">
      <h2>{title} ({filteredJobs.length})</h2>

      {filteredJobs.length === 0 ? (
        <p className="column-empty">Nothing here yet.</p>
      ) : (
        filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))
      )}
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.activity}</h3>
      <div className="categories">
        {job.categories.map((category, index) => (
          <span key={index} className="category">{category}</span>
        ))}
      </div>
    </div>
  );
}

export default JobManager;
