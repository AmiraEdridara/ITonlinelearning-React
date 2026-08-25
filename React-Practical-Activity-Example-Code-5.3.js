// JobColumn renders the jobs passed to it and shows a count beside the
// heading. App filters the jobs so each column only receives its own.

// JobColumn.js
import React from 'react';

const JobColumn = ({ title, image, alt, jobs = [] }) => {
  return (
    <div className="job-column">
      <h2 className="heading-status">
        {title}
        <img src={image} alt={alt} className="status-image" />
        <span className="column-count">{jobs.length}</span>
      </h2>

      <div className="job-column-body">
        {jobs.map(job => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobColumn;

// App.js (or your main component file)
import React from 'react';
import JobColumn from './components/JobColumn';
import toDoIcon from './images/to-do-icon.png';
import inProgressIcon from './images/in-progress-icon.png';
import doneIcon from './images/done-icon.png';

const App = () => {
  const jobs = [
    { id: 1, title: 'Parse Emails', status: 'Need to Start' },
    { id: 2, title: 'SAP Extraction', status: 'In Progress' },
    { id: 3, title: 'Generate Report', status: 'Completed' }
  ];

  // Small helper so each column only receives its own jobs
  const jobsWithStatus = (status) => jobs.filter(job => job.status === status);

  return (
    <div className="app">
      <div className="job-columns">
        <JobColumn
          title="Need to Start"
          image={toDoIcon}
          alt="To-do icon"
          jobs={jobsWithStatus('Need to Start')}
        />
        <JobColumn
          title="In Progress"
          image={inProgressIcon}
          alt="In progress icon"
          jobs={jobsWithStatus('In Progress')}
        />
        <JobColumn
          title="Completed"
          image={doneIcon}
          alt="Done icon"
          jobs={jobsWithStatus('Completed')}
        />
      </div>
    </div>
  );
};

export default App;
