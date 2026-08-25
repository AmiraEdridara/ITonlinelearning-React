// Setting up a Vite project with Tailwind, ending with the dev server so
// the setup can be checked straight away.

npm create vite@latest tailwind-card-app -- --template react
cd tailwind-card-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
