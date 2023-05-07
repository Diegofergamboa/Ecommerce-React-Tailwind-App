/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  optimizeDeps: {
    include: [
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome'
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

