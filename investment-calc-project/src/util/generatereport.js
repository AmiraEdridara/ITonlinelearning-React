// Builds a plain text summary of the results and hands it to the browser as a
// download.
//
// Note: rather than pulling in a PDF library,
// this writes a text report with a Blob, so the project has no extra
// dependency and still produces a file the user can keep.

import { formatCurrency } from './investments.js';

export function generateReport({ initialInvestment, annualInvestment, expectedReturn, duration, results }) {
  if (!results || results.length === 0) {
    return;
  }

  const finalYear = results[results.length - 1];

  const lines = [
    'INVESTMENT SUMMARY',
    '==================',
    '',
    `Initial investment:  ${formatCurrency(initialInvestment)}`,
    `Added each year:     ${formatCurrency(annualInvestment)}`,
    `Expected return:     ${expectedReturn}%`,
    `Duration:            ${duration} years`,
    '',
    'YEAR BY YEAR',
    '------------'
  ];

  results.forEach(year => {
    lines.push(
      `Year ${String(year.year).padStart(2, ' ')}  ` +
      `value ${formatCurrency(year.investmentValue).padStart(10, ' ')}  ` +
      `interest this year ${formatCurrency(year.interestGainedYear)}`
    );
  });

  lines.push('');
  lines.push(`After ${duration} years the investment is worth ${formatCurrency(finalYear.investmentValue)},`);
  lines.push(`of which ${formatCurrency(finalYear.totalInterestGained)} is interest.`);

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'investment-summary.txt';
  link.click();

  URL.revokeObjectURL(url);
}
