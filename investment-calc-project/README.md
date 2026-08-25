# Investment Calculator

The section 6 and 7 activity built out as a working Vite + React project.

## What is different from the course version

- `util/generatereport.js` writes a plain text summary using a `Blob` instead
  of pulling in a PDF library, so the project installs with nothing beyond
  React and Vite.
- `calculateInvestment` also returns the invested capital for each year and
  returns an empty array if the duration is less than one, rather than
  producing odd output.
- Every input is validated, not only the duration.
- The results table has a totals row, and the figures are formatted as
  currency with `Intl.NumberFormat`.
- The header uses a text mark, so there is no image file to fetch.

## Running it

```
npm install
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.
