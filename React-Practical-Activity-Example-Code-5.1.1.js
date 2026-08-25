// The whole form in one component - text input, category buttons, status
// dropdown and submit - with a label so it reads properly to a screen reader.

import React from 'react';

const JobForm = () => {
  return (
    <div className="form-header">
      <form>
        <label htmlFor="job-title">Job</label>
        <input id="job-title" type="text" className="bot-input" placeholder="Enter the job" />

        <div className="form-details">
          <div className="bottom-line">
            <button type="button" className="tag">Read Emails</button>
            <button type="button" className="tag">Web Parsing</button>
            <button type="button" className="tag">Send Emails</button>
          </div>
        </div>

        <select className="job-status" defaultValue="start">
          <option value="start">Start Process</option>
          <option value="running">Running</option>
          <option value="completed">Completed</option>
          <option value="stopped">Stopped</option>
        </select>

        <button type="submit" className="submit-data">Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;
