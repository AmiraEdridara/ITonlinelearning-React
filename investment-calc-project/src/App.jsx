// Note: the inputs are validated as a whole rather than only checking
// the duration, and the report button writes a text summary instead of
// needing a PDF library.

import React, { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Output from './components/Output.jsx';
import { generateReport } from './util/generatereport.js';
import { calculateInvestment } from './util/investments.js';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn > 0;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevInput => ({
      ...prevInput,
      [inputIdentifier]: newValue === '' ? '' : Number(newValue)
    }));
  };

  const handleDownload = () => {
    const results = calculateInvestment(userInput);
    generateReport({ ...userInput, results });
  };

  return (
    <div className="app">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />

      {!inputIsValid && (
        <p className="center error">
          Please check your figures - the duration must be at least one year and
          the expected return must be above zero.
        </p>
      )}

      {inputIsValid && (
        <>
          <Output input={userInput} />
          <p className="center">
            <button type="button" onClick={handleDownload}>
              Download summary
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
