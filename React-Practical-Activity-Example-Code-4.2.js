// Difference: JobList maps over the jobs, JobItem displays the job and
// renders conditionally on status, and the Header shows a small text logo
// instead of leaving a comment where one should go.

// App.js
import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import Footer from './components/Footer';

const App = () => {
  const jobs = [
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ];

  return (
    <div className="app">
      <Header />
      <JobList jobs={jobs} />
      <Footer />
    </div>
  );
};

export default App;

// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <span className="logo" role="img" aria-label="Robot">🤖</span>
      <h1>Job Board</h1>
    </header>
  );
};

export default Header;

// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>© 2026 Job Board Application</p>
    </footer>
  );
};

export default Footer;

// components/JobList.js
import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs }) => {
  // A short message is friendlier than an empty box
  if (jobs.length === 0) {
    return <p className="job-list-empty">No jobs have been queued yet.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;

// components/JobItem.js
import React from 'react';

const JobItem = ({ job }) => {
  // Conditional rendering: a running job gets a spinner, a finished one a tick
  const isRunning = job.status === 'running';

  return (
    <div className={`job-item ${job.status}`}>
      <h3>{job.name}</h3>
      {isRunning ? (
        <p className="job-status">⏳ Running…</p>
      ) : (
        <p className="job-status">✅ Completed</p>
      )}
    </div>
  );
};

export default JobItem;
