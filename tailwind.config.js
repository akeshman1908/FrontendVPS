/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Zoek in alle bestanden in de src-map
  ],
  theme: {
    extend: {
      colors: {
        primary: "#223280",
      },
    },
  },
  plugins: [],
};
