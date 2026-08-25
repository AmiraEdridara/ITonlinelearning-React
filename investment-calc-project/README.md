# Investment Calculator

A Vite + React app that works out what an investment is worth at the end of
each year, and writes a summary you can download.

## How it works

- `src/util/investments.js` does the maths. For each year it works out the
  interest earned, the running investment value, the capital put in so far and
  the total interest gained. A duration below one year returns an empty array.
- `src/util/generatereport.js` builds a plain text summary and hands it to the
  browser as a download using a `Blob`, so there is no extra dependency beyond
  React and Vite.
- `src/components/UserInput.jsx` generates its four labelled inputs from an
  array, so adding a field means adding one entry.
- `src/components/Output.jsx` renders the results table with a totals row, and
  formats every figure as currency with `Intl.NumberFormat`.
- `src/App.jsx` validates the whole form - the duration must be at least a
  year and the expected return above zero - and only shows the table once the
  figures make sense.

## Running it

```
npm install
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.
