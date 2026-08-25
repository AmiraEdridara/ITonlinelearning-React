// Difference: a couple of theme extensions are added, so the config shows
// what "extend" is actually for rather than leaving it empty.
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1f2937'
      },
      borderRadius: {
        card: '0.75rem'
      }
    },
  },
  plugins: [],
}
