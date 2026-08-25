// Difference: the validity check covers every input rather than just the
// duration, each input has a label, and the results table adds a row of
// totals at the bottom.

import React, { useState } from 'react';
import { calculateInvestment } from './util/investment';
import { generatePDF } from './util/generateReport';

const InvestmentCalculator = () => {
  const [inputCustomer, setInputCustomer] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const [results, setResults] = useState(null);

  const fields = [
    { name: 'initialInvestment', label: 'Initial Investment' },
    { name: 'annualInvestment', label: 'Annual Investment' },
    { name: 'expectedReturn', label: 'Expected Return (%)' },
    { name: 'duration', label: 'Duration (years)' }
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputCustomer(prevState => ({
      ...prevState,
      [name]: Number(value)
    }));
  };

  const handleCalculate = () => {
    const calculatedResults = calculateInvestment(inputCustomer);
    setResults(calculatedResults);
  };

  const handleGeneratePDF = () => {
    if (results) {
      generatePDF({ ...inputCustomer, results });
    }
  };

  // Every figure has to make sense, not only the duration
  const userEnteredValid =
    inputCustomer.duration >= 1 &&
    inputCustomer.initialInvestment >= 0 &&
    inputCustomer.annualInvestment >= 0 &&
    inputCustomer.expectedReturn > 0;

  const finalYear = results ? results[results.length - 1] : null;

  return (
    <div className="investment-calculator">
      <div className="inputs">
        {fields.map(field => (
          <p key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              type="number"
              name={field.name}
              value={inputCustomer[field.name]}
              onChange={handleInputChange}
            />
          </p>
        ))}

        <button onClick={handleCalculate} disabled={!userEnteredValid}>
          Calculate
        </button>
      </div>

      {!userEnteredValid && (
        <p className="error-message">
          Please check your figures - years must be at least 1 and the expected
          return must be above zero.
        </p>
      )}

      {userEnteredValid && results && (
        <div className="results">
          <h2>Investment Results</h2>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {results.map((yearData) => (
                <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  <td>${yearData.investmentValue.toFixed(2)}</td>
                  <td>${yearData.interestGainedYear.toFixed(2)}</td>
                  <td>${yearData.totalInterestGained.toFixed(2)}</td>
                  <td>${yearData.investedCapital.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">After {finalYear.year} years</td>
                <td colSpan="3">
                  ${finalYear.investmentValue.toFixed(2)} total, of which
                  ${finalYear.totalInterestGained.toFixed(2)} is interest
                </td>
              </tr>
            </tfoot>
          </table>

          <button onClick={handleGeneratePDF}>Download PDF Report</button>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
