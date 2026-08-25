// Difference: the project is named after what it actually is, and the dev
// server is started at the end so the setup can be checked straight away.
npm create vite@latest tailwind-card-app -- --template react
cd tailwind-card-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
