// Difference: the two handlers are implemented, the form clears itself after
// a submit, and the submit button is disabled until a title and a category
// have been chosen.

import React, { useState } from 'react';

const JobForm = ({ onAddJob }) => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    category: '',
    status: 'To Start'
  });

  const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];
  const statuses = ['To Start', 'In Progress', 'Completed'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Keep the other fields as they were and replace only the one that changed
    setJobDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onAddJob) {
      onAddJob({ ...jobDetails, id: Date.now() });
    }

    // Empty the form ready for the next job
    setJobDetails({ title: '', category: '', status: 'To Start' });
  };

  const readyToSubmit = jobDetails.title.trim() !== '' && jobDetails.category !== '';

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Enter job title"
      />

      <select
        name="category"
        value={jobDetails.category}
        onChange={handleInputChange}
      >
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
      >
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>

      <button type="submit" disabled={!readyToSubmit}>Add Job</button>
    </form>
  );
};

export default JobForm;
