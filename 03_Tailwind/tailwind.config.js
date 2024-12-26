/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ['"Permanent Marker"', "cursive"], // Custom name "marker"
        // Add more as needed
      },
    },
  },
  plugins: [],
};
