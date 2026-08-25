// Works out what an investment is worth at the end of each year.
//
// Note: this also reports the invested
// capital for the year and guards against a duration of zero or less, so the
// caller always gets an array back rather than something unexpected.

export function calculateInvestment({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
}) {
  if (duration < 1) {
    return [];
  }

  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    const investedCapital = initialInvestment + annualInvestment * (i + 1);

    annualData.push({
      year: i + 1,
      interestGainedYear: interestEarnedInYear,
      investmentValue: investmentValue,
      investedCapital: investedCapital,
      totalInterestGained: investmentValue - investedCapital
    });
  }

  return annualData;
}

// Formats a number as currency for display in the table
export function formatCurrency(value) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0
  }).format(value);
}
