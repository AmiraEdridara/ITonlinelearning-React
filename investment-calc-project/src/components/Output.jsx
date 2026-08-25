// Difference: the table has a totals row at the bottom summing up the final
// year, and the figures are formatted as currency rather than raw decimals.

import React from 'react';
import { calculateInvestment, formatCurrency } from '../util/investments.js';

const Output = ({ input }) => {
  const resultsData = calculateInvestment(input);

  if (resultsData.length === 0) {
    return <p className="center">Enter a duration of at least one year.</p>;
  }

  const finalYear = resultsData[resultsData.length - 1];

  return (
    <table id="result">
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
        {resultsData.map(yearData => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatCurrency(yearData.investmentValue)}</td>
            <td>{formatCurrency(yearData.interestGainedYear)}</td>
            <td>{formatCurrency(yearData.totalInterestGained)}</td>
            <td>{formatCurrency(yearData.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">After {finalYear.year} years</td>
          <td colSpan="3">
            {formatCurrency(finalYear.investmentValue)} in total,
            of which {formatCurrency(finalYear.totalInterestGained)} is interest
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Output;
