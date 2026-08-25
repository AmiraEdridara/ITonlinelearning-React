// Note: the four inputs are generated from an array rather than written
// out one at a time, and each one gets a proper label.

import React from 'react';

const fields = [
  { name: 'initialInvestment', label: 'Initial Investment' },
  { name: 'annualInvestment', label: 'Annual Investment' },
  { name: 'expectedReturn', label: 'Expected Return (%)' },
  { name: 'duration', label: 'Duration (years)' }
];

const UserInput = ({ userInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        {fields.map(field => (
          <p key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              type="number"
              required
              value={userInput[field.name]}
              onChange={(event) => onChange(field.name, event.target.value)}
            />
          </p>
        ))}
      </div>
    </section>
  );
};

export default UserInput;
