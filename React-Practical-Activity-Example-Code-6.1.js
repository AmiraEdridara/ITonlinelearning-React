// handleCategoryToggle adds a category to the array or takes it out again,
// and each button takes its class from whether it is selected.

import React, { useState } from 'react';

const JobForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    status: 'To Start',
    categories: []
  });

  const categoryOptions = ['Read Emails', 'Web Parsing', 'Send Emails'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (category) => {
    setJobDetails(prev => {
      const alreadyChosen = prev.categories.includes(category);

      return {
        ...prev,
        categories: alreadyChosen
          ? prev.categories.filter(item => item !== category)
          : [...prev.categories, category]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted job details:', jobDetails);
  };

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
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
      >
        <option value="To Start">To Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <div>
        {categoryOptions.map(category => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryToggle(category)}
            className={jobDetails.categories.includes(category) ? 'tag selected' : 'tag'}
          >
            {category}
          </button>
        ))}
      </div>

      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
