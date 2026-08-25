// The Tailwind config, with a brand colour and a card radius added under
// extend.

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
